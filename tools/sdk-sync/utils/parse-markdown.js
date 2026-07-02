const matter = require('gray-matter');

// ── Frontmatter ──────────────────────────────────────────────────────────────

// Some SDK files contain \| in YAML description strings (e.g. "string \| undefined").
// YAML treats \| as an unknown escape sequence and throws. Strip the backslash before parsing.
function sanitizeYamlEscapes(content) {
  // Only modify the frontmatter block (between the first pair of ---)
  return content.replace(/^(---\n[\s\S]*?\n---)/m, (block) =>
    block.replace(/\\([|>!@#%&*{}[\]`])/g, '$1')
  );
}

function parseFrontmatter(content) {
  // Sanitize unconditionally (idempotent — no-op when there's nothing to strip) so the
  // raw, unsanitized string is never handed to matter(). gray-matter caches a pre-parse
  // placeholder under the input string *before* parsing; if that parse throws (as it does
  // for unescaped \| etc.), the empty placeholder stays cached under the raw content key
  // and silently poisons any later parse of that same raw string.
  try {
    const { data, content: body } = matter(sanitizeYamlEscapes(content));
    return { data, body };
  } catch (err) {
    return { data: {}, body: content };
  }
}

// ── URL slug ─────────────────────────────────────────────────────────────────

function extractUrlSlug(fullUrl) {
  if (!fullUrl || !fullUrl.trim()) return null;
  const url = fullUrl.trim();
  return url.replace(/^https?:\/\/www\.contentstack\.com/, '').replace(/^https?:\/\/contentstack\.com/, '') || null;
}

// ── Markdown table parser ─────────────────────────────────────────────────────

function parseCells(line) {
  const trimmed = line.trim();
  // Remove leading and trailing |
  const inner = trimmed.startsWith('|') ? trimmed.slice(1) : trimmed;
  const withoutTrail = inner.endsWith('|') ? inner.slice(0, -1) : inner;
  return withoutTrail.split('|').map(c => c.trim());
}

function isSeparatorRow(line) {
  return /^\|[\s\-:|]+\|/.test(line.trim());
}

function isTableRow(line) {
  return line.trim().startsWith('|') && line.includes('|', 1);
}

// Parse a contiguous block of table lines into an array of row objects keyed by header name
function parseTableBlock(lines) {
  if (lines.length < 3) return []; // need header + separator + at least one data row

  const headers = parseCells(lines[0]);
  const rows = [];

  for (let i = 2; i < lines.length; i++) {
    const cells = parseCells(lines[i]);
    if (cells.length === 0) continue;
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = cells[idx] !== undefined ? cells[idx] : '';
    });
    rows.push(row);
  }

  return rows;
}

// Extract all markdown tables from a block of text.
// Returns an array of tables; each table is an array of row objects.
function extractAllTables(text) {
  const lines = text.split('\n');
  const tables = [];
  let tableLines = [];

  for (const line of lines) {
    if (isTableRow(line)) {
      tableLines.push(line);
    } else {
      if (tableLines.length >= 3) {
        const rows = parseTableBlock(tableLines);
        if (rows.length > 0) tables.push(rows);
      }
      tableLines = [];
    }
  }
  // Handle table at end of file
  if (tableLines.length >= 3) {
    const rows = parseTableBlock(tableLines);
    if (rows.length > 0) tables.push(rows);
  }

  return tables;
}

// ── Parameters (method_details) ───────────────────────────────────────────────

// Returns array of arrays: outer = one entry per parameter table (for overloaded methods),
// inner = one object per row with keys: Name, Type, Required, Default, Description
function extractParameters(body) {
  if (!body || /No parameters\./i.test(body)) return [];

  const allTables = extractAllTables(body);

  // Only keep tables that look like parameter tables (have Name + Type columns)
  const paramTables = allTables.filter(rows =>
    rows.length > 0 && 'Name' in rows[0] && 'Type' in rows[0]
  );

  return paramTables;
}

// ── Returns (method_details) ──────────────────────────────────────────────────

// Extracts the return type string from body text.
// Handles patterns:
//   Returns:\nType\nImageTransform
//   **Returns:** `TypeName`
function extractReturns(body) {
  if (!body) return '';

  // Pattern: "Returns:\nType\n{TypeName}" (as seen in actual files)
  const m1 = body.match(/Returns:\s*\n+Type\s*\n+([^\n]+)/i);
  if (m1) return m1[1].trim();

  // Pattern: "Returns:\n{TypeName}" (without "Type" line)
  const m2 = body.match(/^Returns:\s*\n+([^\n]+)/im);
  if (m2) {
    const candidate = m2[1].trim();
    // Skip if it looks like a table header or separator
    if (!candidate.startsWith('|') && !candidate.startsWith('-')) return candidate;
  }

  // Pattern: "**Returns:** `TypeName`"
  const m3 = body.match(/\*\*Returns:\*\*\s*`([^`]+)`/);
  if (m3) return m3[1].trim();

  return '';
}

// ── Code snippet (method_details) ────────────────────────────────────────────

// Returns everything after the "Returns:" section as a raw markdown string.
// This is converted to HTML by the caller using markdownToHtml().
function extractAfterReturns(body) {
  if (!body) return '';

  // Find the Returns section — it ends at a blank line after the type
  const returnsIdx = body.search(/^Returns:/im);
  if (returnsIdx === -1) return '';

  // Skip to the first blank line after Returns (end of the returns block)
  const afterReturns = body.slice(returnsIdx);
  const blankLineIdx = afterReturns.search(/\n\s*\n/);
  if (blankLineIdx === -1) return '';

  return afterReturns.slice(blankLineIdx).trim();
}

// ── Properties (class_intro) ─────────────────────────────────────────────────

// Returns an array of property row objects from the "## Properties" section.
// Row object keys: Name, Type, Required, Default, Description
function extractProperties(body) {
  if (!body) return [];

  // Find the ## Properties heading
  const propertiesMatch = body.match(/^##\s+Properties\s*$/im);
  if (!propertiesMatch) return [];

  const startIdx = propertiesMatch.index + propertiesMatch[0].length;
  const section = body.slice(startIdx);

  // Extract only up to the next ## heading (or end of file)
  const nextHeadingIdx = section.search(/^##\s+/m);
  const sectionText = nextHeadingIdx === -1 ? section : section.slice(0, nextHeadingIdx);

  const tables = extractAllTables(sectionText);
  if (tables.length === 0) return [];

  // Take the first table that has a Name column
  const propsTable = tables.find(rows => rows.length > 0 && 'Name' in rows[0]);
  return propsTable || [];
}

module.exports = {
  parseFrontmatter,
  extractUrlSlug,
  extractParameters,
  extractReturns,
  extractAfterReturns,
  extractProperties,
};
