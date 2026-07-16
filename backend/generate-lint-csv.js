#!/usr/bin/env node
// Converts lint-api-docs-report.txt → lint-api-docs-report.csv

const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'lint-api-docs-report.txt');
const csvPath = path.join(__dirname, 'lint-api-docs-report.csv');

const lines = fs.readFileSync(reportPath, 'utf8').split('\n');

// Classify error type from message
function classifyError(msg) {
  if (/frontmatter/i.test(msg)) return 'Frontmatter';
  if (/Future tense/i.test(msg)) return 'Future tense';
  if (/ALL CAPS/i.test(msg)) return 'ALL CAPS word';
  if (/Vague adverb/i.test(msg)) return 'Vague adverb';
  if (/Naked URL/i.test(msg)) return 'Naked URL';
  if (/Double space/i.test(msg)) return 'Double space';
  if (/Semicolon/i.test(msg)) return 'Semicolon';
  if (/Banned phrase/i.test(msg)) return 'Banned phrase';
  if (/En dash/i.test(msg)) return 'En dash';
  if (/Em dash/i.test(msg)) return 'Em dash';
  if (/Heading.*long/i.test(msg)) return 'Heading length';
  if (/Generic link/i.test(msg)) return 'Generic link text';
  if (/e\.g\.|i\.e\.|please/i.test(msg)) return 'Punctuation / style';
  return 'Other';
}

// Determine fixability
function fixability(type) {
  if (type === 'Frontmatter') return 'Programmatic fix';
  if (type === 'ALL CAPS word') return 'Allowlist / manual';
  if (type === 'Naked URL') return 'Acceptable in API ref';
  return 'Manual content edit';
}

function csvEscape(val) {
  const s = String(val ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

const rows = [['File', 'Line', 'Error type', 'Message', 'Fixability']];

for (const raw of lines) {
  const line = raw.trim();
  if (!line || line.startsWith('===') || line.startsWith('Total') || /^\s+\d+\s+/.test(line)) continue;

  // Format: file.md:line: message  OR  file.md: message (no line number)
  const withLine = line.match(/^(.+?):(\d+):\s+(.+)$/);
  const noLine   = line.match(/^(.+?):\s+(.+)$/);

  let file, lineNum, msg;
  if (withLine) {
    [, file, lineNum, msg] = withLine;
  } else if (noLine) {
    [, file, msg] = noLine;
    lineNum = '';
  } else {
    continue;
  }

  const type = classifyError(msg);
  rows.push([file, lineNum, type, msg, fixability(type)]);
}

const csv = rows.map(r => r.map(csvEscape).join(',')).join('\n');
fs.writeFileSync(csvPath, csv, 'utf8');
console.log(`Written ${rows.length - 1} rows to ${csvPath}`);
