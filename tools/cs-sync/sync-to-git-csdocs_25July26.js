#!/usr/bin/env node

/**
 * Contentstack → Git Markdown Sync (CS Docs Production only)
 * - Exports published entries as markdown to cs-docs/
 * - Only syncs NEW/MODIFIED/DELETED entries
 * - Preserves existing files, never duplicates
 * - Uses relative path cross-references
 * - Commits changes to git
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../');
const CS_DOCS_PATH = path.join(REPO_ROOT, 'cs-docs');

const PROD_CSDOCS_STACK = process.env.PROD_CSDOCS_STACK_API_KEY || 'blt2d43f51baca745a8';
const PROD_CSDOCS_TOKEN = process.env.PROD_CSDOCS_STACK_DELIVERY_TOKEN || 'cs80888179b9220bd7cea067ff';

const CONTENT_TYPES = {
  'api_sdk_name_2026': 'developers',
  'academy_content_carousel_2026': 'get-started',
  'content_managers_2026': 'content-managers',
  'developers_2026': 'developers',
  'header_2026': 'site-content',
  'homepage_2026': 'site-content',
  'info_cards_2026': 'site-content',
  'left_navigation_2026': 'site-content',
  'links_2026': 'site-content',
  'not_found_404_page_2026': 'site-content',
  'product_faqs_2026': 'headless-cms',
  'product_landing_2026': 'headless-cms',
  'product_name_2026': 'site-content',
  'sdks_landing_page_2026': 'developers',
};

class GitSync {
  constructor() {
    this.stats = {
      created: 0,
      updated: 0,
      deleted: 0,
      errors: 0,
    };
    this.changes = [];
  }

  request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: 'cdn.contentstack.io',
        path,
        method: options.method || 'GET',
        headers: {
          'api_key': PROD_CSDOCS_STACK,
          'Content-Type': 'application/json',
        },
      };

      const req = https.request(opts, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = data ? JSON.parse(data) : {};
            resolve({ status: res.statusCode, data: json });
          } catch (e) {
            resolve({ status: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      if (options.body) req.write(JSON.stringify(options.body));
      req.end();
    });
  }

  async getPublishedEntries(contentTypeUid, skip = 0, limit = 100) {
    const path = `/v3/content_types/${contentTypeUid}/entries?access_token=${PROD_CSDOCS_TOKEN}&environment=production&skip=${skip}&limit=${limit}`;
    const res = await this.request(path);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch ${contentTypeUid}: ${res.status}`);
    }

    return res.data.entries || [];
  }

  getFilePath(entry, folderName) {
    const pathPart = entry.url || entry.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const fileName = `${pathPart}.md`;
    return path.join(CS_DOCS_PATH, folderName, fileName);
  }

  createFrontmatter(entry) {
    return `---
title: "${entry.title}"
description: ${entry.description || entry.title}
url: ${entry.url || entry.title}
product: Contentstack
doc_type: page
created_at: ${entry.created_at || new Date().toISOString()}
updated_at: ${entry.updated_at || new Date().toISOString()}
---
`;
  }

  createMarkdown(entry) {
    let md = this.createFrontmatter(entry);

    md += `\n# ${entry.title}\n\n`;

    if (entry.description) {
      md += `${entry.description}\n\n`;
    }

    // Body content (RTE field or rich_text_editor)
    if (entry.body) {
      md += `${entry.body}\n\n`;
    }

    // Fallback for other rich text fields
    if (entry.content) {
      md += `${entry.content}\n\n`;
    }

    if (entry.rich_text_editor) {
      md += `${entry.rich_text_editor}\n\n`;
    }

    return md;
  }

  fileExists(filePath) {
    return fs.existsSync(filePath);
  }

  fileContent(filePath) {
    if (!this.fileExists(filePath)) return null;
    return fs.readFileSync(filePath, 'utf-8');
  }

  writeFile(filePath, content) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  deleteFile(filePath) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  async syncEntries() {
    console.log('\n📝 SYNCING TO GIT\n');

    const prodEntries = new Map(); // uid -> {entry, filePath, folder}

    // Fetch all production entries
    for (const [ct, folder] of Object.entries(CONTENT_TYPES)) {
      try {
        let skip = 0;
        let hasMore = true;

        while (hasMore) {
          const entries = await this.getPublishedEntries(ct, skip, 100);

          if (entries.length === 0) {
            hasMore = false;
            break;
          }

          entries.forEach(entry => {
            const filePath = this.getFilePath(entry, folder);
            prodEntries.set(entry.uid, { entry, filePath, folder, ct });
          });

          skip += 100;
        }

        console.log(`✓ ${ct}: Fetched entries`);
      } catch (e) {
        console.log(`✗ ${ct}: ${e.message}`);
        this.stats.errors++;
      }
    }

    console.log(`\nTotal entries in production: ${prodEntries.size}\n`);

    // Check git for existing files
    const gitFiles = this.getGitTrackedFiles();
    const gitFileUids = this.parseGitFileUids(gitFiles);

    // Sync changes
    console.log('📋 Processing changes:\n');

    // 1. Create new entries
    for (const [uid, { entry, filePath, folder, ct }] of prodEntries) {
      if (!gitFileUids.has(uid)) {
        try {
          const markdown = this.createMarkdown(entry);
          this.writeFile(filePath, markdown);
          this.stats.created++;
          this.changes.push(`+ ${filePath}`);
          console.log(`  ✓ Created: ${path.basename(filePath)}`);
        } catch (e) {
          console.log(`  ✗ Error creating: ${e.message}`);
          this.stats.errors++;
        }
      }
    }

    // 2. Update modified entries
    for (const [uid, { entry, filePath }] of prodEntries) {
      if (gitFileUids.has(uid)) {
        try {
          const currentContent = this.fileContent(filePath);
          const newContent = this.createMarkdown(entry);

          if (currentContent !== newContent) {
            this.writeFile(filePath, newContent);
            this.stats.updated++;
            this.changes.push(`~ ${filePath}`);
            console.log(`  ✓ Updated: ${path.basename(filePath)}`);
          }
        } catch (e) {
          console.log(`  ✗ Error updating: ${e.message}`);
          this.stats.errors++;
        }
      }
    }

    // 3. Delete removed entries
    for (const [uid, filePath] of gitFileUids) {
      if (!prodEntries.has(uid)) {
        try {
          this.deleteFile(filePath);
          this.stats.deleted++;
          this.changes.push(`- ${filePath}`);
          console.log(`  ✓ Deleted: ${path.basename(filePath)}`);
        } catch (e) {
          console.log(`  ✗ Error deleting: ${e.message}`);
          this.stats.errors++;
        }
      }
    }
  }

  getGitTrackedFiles() {
    try {
      const output = execSync(`cd "${REPO_ROOT}" && git ls-files cs-docs/*.md cs-docs/**/*.md`, {
        encoding: 'utf-8',
      });
      return output.split('\n').filter(f => f);
    } catch (e) {
      return [];
    }
  }

  parseGitFileUids(files) {
    const uids = new Map();
    files.forEach(f => {
      uids.set(f, f);
    });
    return uids;
  }

  async commitChanges() {
    if (this.changes.length === 0) {
      console.log('\n✅ No changes to commit\n');
      return;
    }

    try {
      console.log(`\n📦 Committing ${this.changes.length} changes\n`);

      execSync(`cd "${REPO_ROOT}" && git add cs-docs/`, { stdio: 'inherit' });

      const message = `chore: sync production CS Docs entries to markdown

Changes:
${this.changes.map(c => c).join('\n')}

- Created: ${this.stats.created}
- Updated: ${this.stats.updated}
- Deleted: ${this.stats.deleted}

Auto-synced from production CS Docs stack`;

      execSync(`cd "${REPO_ROOT}" && git commit -m "${message}"`, { stdio: 'inherit' });

      console.log('\n✅ Changes committed to git\n');
    } catch (e) {
      console.log(`\n⚠️  Git commit failed: ${e.message}\n`);
    }
  }

  printSummary() {
    console.log('='.repeat(50));
    console.log('✅ GIT SYNC COMPLETE\n');
    console.log('📊 Summary:');
    console.log(`   Created: ${this.stats.created} files`);
    console.log(`   Updated: ${this.stats.updated} files`);
    console.log(`   Deleted: ${this.stats.deleted} files`);
    if (this.stats.errors > 0) {
      console.log(`   Errors:  ${this.stats.errors}\n`);
    } else {
      console.log();
    }
  }

  async run() {
    console.log('🔄 PRODUCTION → GIT SYNC (CS-DOCS)');
    console.log(`📍 Production: ${PROD_CSDOCS_STACK}`);
    console.log(`📍 Git Repo: ${CS_DOCS_PATH}`);
    console.log('⏱️  Started:', new Date().toISOString());

    try {
      await this.syncEntries();
      await this.commitChanges();
      this.printSummary();
    } catch (e) {
      console.error('\n❌ SYNC FAILED:', e.message);
      process.exit(1);
    }
  }
}

new GitSync().run();
