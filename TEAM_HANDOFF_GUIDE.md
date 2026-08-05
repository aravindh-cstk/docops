# Team Handoff Guide — Documentation Workflow

**Last Updated:** August 5, 2026  
**Repository:** https://github.com/contentstack/contentstack-docs (Official)  
**For:** Documentation Writers & Content Team  
**Audience:** Technical writers updating docs for new features

---

## Overview

This guide walks through the complete documentation workflow from cloning the **official contentstack/contentstack-docs repository** to publishing in production CMS. The repository now contains the complete **DocOps workflow** (migrated from aravindh-cstk/docops on August 5, 2026) with all sync tools, GitHub Actions workflows, and CMS synchronization capabilities built-in.

**Key Update:** All documentation operations are now centralized in the official `contentstack/contentstack-docs` repository under the `docops/` folder.

---

## About DocOps Workflow System

The **DocOps** system manages the complete documentation lifecycle with three phases:

### ✅ Phase 1: GitHub → Sandbox (Automatic)
- Changes pushed to `main` branch automatically sync to Sandbox CMS
- Entries created as **DRAFT** for writer review
- Sandbox is a safe testing environment

### ✅ Phase 2: Sandbox → Production Staging (Manual Promotion)
- Writers review and publish in Sandbox CMS
- Manual workflow triggers promotion to Production CMS Staging
- Entries published to **Staging environment only** (not live)

### ✅ Phase 3: Production Staging → Live (Manual Decision)
- Writers review final version in Production CMS Staging
- Click "Publish" to go **LIVE** to production environment
- No automatic promotion to keep content fully under writer control

**Key Tools:**
- `docops/tools/cs-sync/` — Migration and sync scripts
- `.github/workflows/` — Automated workflows
- `tests/` — Verification procedures

Read `docops/SYNC_WORKFLOW.md` for detailed workflow documentation.

---

## Prerequisites

- Git installed and configured
- GitHub account with access to https://github.com/contentstack/contentstack-docs
- Claude Code CLI or Claude AI access (for using Claude prompts)
- VS Code, Cursor, or similar code editor
- Jira ticket number for your feature (TD-XXXX format)

---

## Step 1: Clone the Repository to Local

### 1.1 Clone the Repo

```bash
# Clone the official repository
git clone https://github.com/contentstack/contentstack-docs.git
cd contentstack-docs

# Navigate to the DocOps folder (where documentation lives)
cd docops
```

**Note:** All documentation and sync tools are in the `docops/` subfolder of the main repository.

### 1.2 Verify You Have the Right Folder Structure

```bash
ls -la
```

Expected folders:
- `docops/` — **Complete DocOps workflow system** (includes everything below)
  - `api-docs/` — API documentation
  - `cs-docs/` — CS-Docs (product documentation)
  - `sdk-docs/` — SDK documentation
  - `.github/` — GitHub workflows
  - `tools/cs-sync/` — CMS sync and migration tools
  - `tests/` — Test suite and verification
  - `backend/` — Backend code

**Note:** After migration on August 5, 2026, all DocOps content is organized under the `docops/` folder within the official repository.

---

## Step 2: Delete Non-Relevant PODs (Projects)

Each writer works on **2-3 specific product folders only**. Delete all other pods to keep your local clean.

### 2.1 Identify Your PODs

**Example: If you're working on Studio documentation:**
- Keep: `cs-docs/studio/`
- Delete: Everything else in `cs-docs/` except studio

**Common PODs in cs-docs:**
- `studio/` — Studio product docs
- `administration/` — Administration docs
- `marketplace/` — Marketplace docs
- `am2.0/` — Accelerated Marketplace 2.0
- `assets/` — Asset management

### 2.2 Delete Non-Relevant Folders

```bash
# Example: Delete all cs-docs except Studio
cd cs-docs
rm -rf administration/ marketplace/ am2.0/ assets/
cd ..

# Or keep only your assigned folders
# Delete api-docs if you're not working on APIs
rm -rf api-docs sdk-docs
```

### 2.3 Verify Your Local Structure

```bash
tree -L 2 cs-docs/  # Shows only your folders
```

---

## Step 3: Get the Development PR Link

### 3.1 Ask for (or Find) the Development PR

**When starting documentation work:**
- Ask your lead: "What PR should I document?"
- Or: "Which development PR triggered this feature?"

Development PRs come from various source repos:
- SDK changes: `github.com/contentstack/developer-solution-docs`
- Product features: Different team repos
- API changes: Various development repositories

**Get the PR link** from your lead or team.

Example PR links:
```
https://github.com/contentstack/developer-solution-docs/pull/74
https://github.com/[team-repo]/pull/[PR-number]
```

### 3.2 Review the PR Changes

1. Open the development PR link in your browser
2. Go to the "Files changed" tab
3. Read through all changes and take notes:
   - Feature name
   - Changed APIs/fields
   - New configuration options
   - Breaking changes
   - Examples from the PR

### 3.3 Use Claude to Analyze Changes

**Claude Prompt for Change Analysis:**

```
I need to create documentation for a feature. Here's the development PR:

PR Link: [Paste the PR link]
Feature Name: [Feature name]

Development PR Changes:
[Copy-paste the key changes from the PR's "Files changed" tab]

Current documentation location: cs-docs/studio/ (or your folder)

What documentation should I:
1. Create (new docs)?
2. Update (existing docs)?
3. Deprecate (old docs)?

For each change, tell me:
- Doc file name
- Section to update
- Type of change (new, update, deprecate)
```

---

## Step 3.5: (Optional) Converting Google Docs to Markdown

**If you have already created documentation in Google Docs** (from the previous process), you can convert it to markdown and create a PR using Claude.

### 3.5.1 Export Your Google Doc

1. Open your Google Doc: https://docs.google.com/document/d/...
2. Go to **File** → **Download** → **Markdown (.md)**
3. Save the file locally

### 3.5.2 Use Claude for Complete Gdoc → Published Workflow

**This single prompt handles EVERYTHING from converting Gdoc to publishing:**

```
I have a Google Doc from the previous process that needs to be converted to markdown, 
committed to a branch, and turned into a PR. Guide me through the complete workflow.

GDOC INFORMATION:
- Gdoc content (exported as markdown): [Paste exported markdown here]
- Feature/Product name: [e.g., "Entry Variant Versioning"]
- Your Jira ticket: TD-XXXX (e.g., TD-5366)
- Target folder: cs-docs/studio/ (or your folder: cs-docs/administration/, etc.)
- Your local repo path: /path/to/contentstack-docs

WORKFLOW: I want to go from Gdoc → markdown → branch → commit → PR → publish

Please provide:

1. **MARKDOWN CONVERSION**
   - Convert this Gdoc to repo-ready markdown with:
     * YAML frontmatter (title, url, description)
     * Clean formatting and heading hierarchy (h1 → h2 → h3)
     * Proper code block formatting (```language)
     * Kebab-case filename (e.g., feature-overview.md)
   - Output the complete markdown content

2. **GIT COMMANDS** (step-by-step, copy-paste ready)
   - Create a new branch: git checkout -b TD-XXXX_ProductName_FeatureName
   - Create the markdown file with the content
   - Stage and commit: git add ... && git commit -m "..."
   - Push to remote: git push origin ...

3. **PR CREATION COMMAND**
   - gh pr create command with title and body

4. **WHAT HAPPENS NEXT** (after I merge)
   - The workflow will automatically sync to Production CMS
   - Where to find [DRAFT] entries
   - How to review and publish manually

Please provide all commands in order, clearly labeled, so I can copy-paste them directly.
```

### 3.5.3 Follow Claude's Output

Claude will provide everything you need, in order:

1. ✅ **Converted markdown** — Copy this into your file
2. ✅ **Git commands** — Run these in order (copy-paste ready)
3. ✅ **PR creation command** — Run this
4. ✅ **Next steps** — After merge: find drafts, review, publish

**Complete workflow in one prompt!**

Example of what Claude provides:
```
✅ MARKDOWN (copy this):
---
title: Entry Variant Versioning
url: /entry-variant-versioning
...
---

✅ GIT COMMANDS (run in order):
git checkout -b TD-5366_CMS_EntryVariantVersionNaming
cat > cs-docs/studio/entry-variant-versioning.md << 'EOF'
[markdown content]
EOF
git add cs-docs/studio/entry-variant-versioning.md
git commit -m "docs: add entry variant versioning..."
git push origin TD-5366_CMS_EntryVariantVersionNaming

✅ PR COMMAND:
gh pr create --title "docs: Add Entry Variant Versioning" ...

✅ AFTER MERGE:
- Wait 5 minutes for CMS sync
- Go to Production CMS → Release
- Find [DRAFT] entry
- Review and Publish
```

---

## Step 4: Use Claude to Generate Documentation Drafts

### 4.1 Gather Information

Before asking Claude, collect:
- Feature name and description
- API endpoints or config changes
- Use cases/examples
- Links to the feature in the product

### 4.2 Claude Prompt for Doc Generation

**Basic Prompt (for new documentation):**

```
Create a new documentation file for the following feature:

Feature Name: [Feature Name]
Stack: cs-docs (or api-docs)
Folder: studio (or your folder)

Feature Description:
[Detailed description of what the feature does]

Use Cases:
[How writers/developers will use this feature]

Example Configuration:
[Code example showing how to use it]

Requirements:
1. Use markdown format (GitHub-flavored markdown)
2. Include a title, description, code examples, and troubleshooting section
3. Follow the existing documentation style in cs-docs/studio/
4. Add YAML frontmatter with: title, url, published: true
5. Make it ~500-800 words for a feature doc

Generate the markdown content now.
```

**Advanced Prompt (for feature updates):**

```
Update the existing documentation file: cs-docs/studio/[existing-file].md

Current Changes:
[Paste the API changes or new behavior]

What to Update:
1. Add new configuration option [option-name]
2. Update the code example for [section-name]
3. Add a new "Breaking Changes" section

Requirements:
1. Keep the existing structure and style
2. Add new content without removing old content (unless it's deprecated)
3. Use markdown format
4. Update the YAML frontmatter if needed
5. Add a note about when this change was added (date/version)

Generate the updated markdown content now.
```

### 4.3 Review and Approve Claude's Draft

1. Claude generates the draft
2. **You review it:** Check for accuracy, style, completeness
3. **You approve it:** "Yes, this looks good, create the file" or request changes
4. Claude creates the file in your local or you copy-paste it

### 4.4 Edit the Draft Further

```bash
# Open the generated file
code cs-docs/studio/[new-file].md

# Make your edits
# Update: titles, examples, links, formatting
# Fix: any inaccuracies or missing information
```

---

## Step 5: Create a Feature Branch with TD-* Naming

### 5.1 Have Your Jira Ticket Number Ready

You should already have a Jira ticket assigned or created for this feature (format: `TD-XXXX`)

**Example:** `TD-5366` for CMS Entry Variant Version Naming

If you don't have one, create it in Jira before proceeding.

### 5.2 Create Branch with Naming Convention

```bash
# Format: TD-<ticket>_<product>_<feature>
# Example: TD-5366_CMS_EntryVariantVersionNaming

git checkout -b TD-5366_CMS_EntryVariantVersionNaming
```

### 5.3 Verify the Branch

```bash
git branch -a  # Shows all branches, * indicates current branch
```

---

## Step 6: Create a PR with Doc Updates

### 6.1 Stage Your Changes

```bash
# Check what files you changed
git status

# Stage the new/updated markdown files
git add cs-docs/studio/[file-1].md cs-docs/studio/[file-2].md

# Or stage all changes
git add .
```

### 6.2 Commit with Clear Message

```bash
git commit -m "docs: [feature-name] documentation

- Add new doc for [feature-name]
- Update [section-name] with new API changes
- Added examples and troubleshooting sections

Jira: TD-5366"
```

### 6.3 Push to Remote

```bash
git push origin TD-5366_CMS_EntryVariantVersionNaming
```

### 6.4 Create PR on GitHub

**Manual:**
1. Go to https://github.com/contentstack/contentstack-docs
2. Click "New Pull Request"
3. Select base: `main`, compare: `TD-5366_CMS_EntryVariantVersionNaming`
4. Fill in PR title and description

**OR Use CLI:**

```bash
gh pr create \
  --title "docs: Add/Update [Feature Name] documentation" \
  --body "## Summary

This PR adds documentation for [Feature Name].

### Changes
- Added: cs-docs/studio/[file-1].md
- Updated: cs-docs/studio/[file-2].md

### Related Jira Ticket
TD-5366

### Checklist
- [ ] Content is accurate
- [ ] Examples are tested
- [ ] Links are valid
- [ ] Formatting is consistent
- [ ] Ready for review
"
```

---

## Step 7: Get Approval from Lead/Reviewer

### Checklist for Reviewers

**Your lead will check:**

- ✅ Content accuracy (matches the feature)
- ✅ Code examples work correctly
- ✅ Formatting and style consistency
- ✅ No broken links
- ✅ YAML frontmatter is correct
- ✅ Files follow naming conventions
- ✅ Jira ticket is referenced

### If Requested Changes:

1. Make edits locally in your editor
2. Stage and commit changes: `git add . && git commit -m "docs: address review feedback"`
3. Push: `git push origin TD-5366_CMS_EntryVariantVersionNaming`
4. PR automatically updates

---

## Step 8: Merge to Main & Sync to Production CMS

### 8.1 Merge the PR

Once approved, merge the PR to `main`:

```bash
# Via CLI
gh pr merge <PR-NUMBER> --merge

# OR: Click "Merge pull request" on GitHub
```

### 8.2 Production CMS Sync (Automated)

When your PR merges to `main`:
1. GitHub workflow triggers automatically
2. Markdown files sync to Production CMS
3. Entries created as **[DRAFT]** (not published yet)
4. Entries appear in "Release" folder in CMS

⚠️ **Disclaimer:** The sync script currently has a hardcoded limit to create up to **10 entries per sync run**. If your documentation includes more than 10 new files, they will sync in batches:
- First 10 files: sync on first merge
- Remaining files: sync on next merge/trigger

If you have more than 10 files, contact your team lead or CMS admin for batch processing options.

### 8.3 Checklist: What to Look For in Production CMS

**After merge, check Production CMS for:**

✅ **New Entries Created:**
- [ ] Entry title matches markdown title
- [ ] Entry URL is correct (matches `url` field in frontmatter)
- [ ] Content is complete (no missing sections)
- [ ] Entry status: **[DRAFT]** (not published)

✅ **Entry Content:**
- [ ] All markdown is converted to CMS format
- [ ] Code examples display correctly
- [ ] Images (if any) linked correctly
- [ ] Links to other docs work
- [ ] Formatting (bold, italic, code blocks) displays correctly

✅ **Metadata:**
- [ ] Title is correct
- [ ] URL slug is correct
- [ ] Content type matches (e.g., "Article")
- [ ] Published field is set correctly
- [ ] Tags/categories applied (if required)

✅ **Common Issues to Check:**
- [ ] No broken markdown syntax errors
- [ ] No hardcoded links to local files
- [ ] All images resolved
- [ ] Code blocks formatted properly
- [ ] Tables display correctly

---

## Step 9: Review Draft Release in Production CMS

### 9.1 Access Production CMS

Go to: `https://production.contentstack.com/` (or your stack URL)

### 9.2 Find Your [DRAFT] Entries

1. Navigate to **Release** folder
2. Look for entries with **[DRAFT]** prefix
3. Find your newly created/updated entries

### 9.3 Claude Prompt: Final QA Check

```
I need to verify my documentation in the CMS before publishing.

Production CMS Stack: cs-docs
Release: [Your Release Name]

[DRAFT] Entries to Review:
1. [Feature Name] - URL: /feature-path
2. [Updated Doc] - URL: /updated-path

I've reviewed them and found:
[List any issues found, if none, say "No issues found"]

Based on my review, should I publish these entries? 
(Check: accuracy, formatting, links, examples)

Also verify:
- All links are live
- Code examples make sense
- No broken references
```

### 9.4 Make Any Final Edits

If you find issues:
1. Click "Edit" on the [DRAFT] entry
2. Fix the content in CMS (or go back to GitHub, edit .md, create another PR)
3. Save changes

---

## Step 10: Publish Manually to Production

### 10.1 Ready to Publish?

**Final Checklist Before Publishing:**

- ✅ Content is 100% accurate
- ✅ All examples tested and working
- ✅ Links verified and live
- ✅ Formatting looks good
- ✅ No broken references
- ✅ Lead/approver has reviewed in CMS
- ✅ No outstanding feedback

### 10.2 Publish the Entry

**In Contentstack CMS:**

1. Open the [DRAFT] entry
2. Click **"Publish"** button
3. Select **"Publish"** (not "Schedule")
4. Confirm publication

**CLI (if available):**

```bash
# Publish via CMS API (if your team uses this)
# Contact your admin for the publish script
./tools/cs-sync/publish-entries.js --entry-ids [entry-ids]
```

### 10.3 Verify Publication

1. Go to the published entry URL
2. Verify content displays correctly
3. Check production website (if applicable)
4. Share the link with your team

---

## Quick Reference: Claude Prompts

### Prompt 0: Google Docs → Complete Workflow (Gdoc Conversion + Git + PR + Publishing)

**Use this if you have an existing Google Doc to convert and publish:**

```
I have a Google Doc from the previous process that needs to be converted to markdown, 
committed to a branch, and turned into a PR. Guide me through the complete workflow.

GDOC INFORMATION:
- Gdoc content (exported as markdown): [Paste exported markdown here]
- Feature/Product name: [e.g., "Entry Variant Versioning"]
- Your Jira ticket: TD-XXXX (e.g., TD-5366)
- Target folder: cs-docs/studio/ (or cs-docs/administration/, etc.)
- Your local repo path: /path/to/contentstack-docs

WORKFLOW: Gdoc → markdown → branch → commit → PR → publish

Please provide (in order):
1. Converted markdown with YAML frontmatter
2. Git commands (copy-paste ready)
3. PR creation command
4. Next steps (after merge)
```

### Prompt 1: Analyze API Changes

```
Analyze these API changes and tell me what documentation I need to create or update:

[Paste API changes here]

Stack: cs-docs/studio/
Existing docs: cs-docs/studio/

For each change, tell me:
1. Doc file to create/update
2. What section needs change
3. Brief description of change
```

### Prompt 2: Generate New Documentation

```
Create a markdown documentation file with YAML frontmatter.

Feature: [Feature Name]
Description: [What it does]
Use Case: [How it's used]
Example: [Code example]

Requirements:
- Markdown format
- YAML frontmatter: title, url, description
- 500-800 words
- Include troubleshooting section
- Follow cs-docs style

Generate the full markdown content now.
```

### Prompt 3: Update Existing Documentation

```
I need to update an existing documentation file with new information.

Current File: cs-docs/studio/[filename].md
New Content: [Feature changes/additions]

Update the file to:
1. Add new section: [Section Name]
2. Update code example for [Section]
3. Add breaking changes notice

Keep existing content, add new content above.
Generate the updated markdown now.
```

### Prompt 4: Compare Changes

```
Help me understand what documentation changes are needed.

Source PR: [Link or description]
Changes: [Paste the code/API changes]

Current Local File: cs-docs/studio/[file].md

Tell me:
1. What's new?
2. What changed?
3. What's deprecated?
4. What documentation to create/update?

Then generate a brief summary of changes needed.
```

---

## Troubleshooting

### Git Issues

**Problem:** Branch already exists
```bash
git checkout TD-5366_CMS_EntryVariantVersionNaming
```

**Problem:** Merge conflicts
```bash
# Update main first
git checkout main
git pull origin main

# Rebase your branch
git rebase main TD-5366_CMS_EntryVariantVersionNaming
# Resolve conflicts in your editor
git add .
git rebase --continue
```

### CMS Issues

**Problem:** Entry not created after merge
- Wait 5 minutes (sync takes time)
- Check GitHub Actions workflow status
- Verify file is in correct folder structure

**Problem:** Entry is published, need to unpublish
- Contact your CMS admin
- Cannot unpublish via this workflow (by design, for safety)

**Problem:** Wrong content in CMS entry
- Go back to GitHub, edit .md file
- Create a new PR with corrections
- It will sync and update the CMS entry

---

## Support & Help

**For Questions:**
- Slack: #docs-issues-internal-discussion, Gladys, or Aravindh
- Email: gladys.daniel@contentstack.com
- Lead: Ask your documentation lead - Gladys/Azhar

**Claude Code Help:**
- Run: `claude --help`
- Documentation: https://claude.ai/code

**GitHub Help:**
- CLI: `gh help`
- Issues: Create a GitHub issue in the repo

---

## Summary: The Workflow Loop

```
1. Clone repo → 2. Delete non-relevant PODs → 3. Identify changes
    ↓
4. Use Claude for doc drafts → 5. Create TD-* branch → 6. Create PR
    ↓
7. Get approval → 8. Merge to main → 9. Check CMS
    ↓
10. Publish manually → Done!
```

**Total Time:** 2-4 hours per feature (depending on complexity and review process)

---

## Recent Updates (August 5, 2026)

### ✅ DocOps Migration Complete

On August 5, 2026, the complete DocOps system was migrated from `aravindh-cstk/docops` to the official `contentstack/contentstack-docs` repository.

**Migration Details:**
- **PR:** https://github.com/contentstack/contentstack-docs/pull/10
- **What Migrated:** 
  - 7,161 CS-Docs entries (exact mirror from Production)
  - 837 API Docs entries (exact mirror from Production)
  - All migration and sync scripts
  - Complete GitHub Actions workflows
  - Full git history and development tools
- **Official Repository:** https://github.com/contentstack/contentstack-docs
- **Location in Repo:** `/docops/` folder

**For the Team:**
- Update all bookmarks to the **official repository**
- Clone from `https://github.com/contentstack/contentstack-docs`
- All work happens in the `docops/` subfolder
- Workflows remain unchanged; the platform is just centralized

### Next Steps After Migration:
1. ✅ PR #10 merged to official repo (August 5, 2026)
2. ⏳ Configure GitHub Secrets (8 total - API keys for Prod & Sandbox)
3. ⏳ Test workflows (exact-mirror-migration, git-to-sandbox-sync)
4. ⏳ Update team documentation and bookmarks

---

**Last Updated:** August 5, 2026  
**Version:** 1.1 (Post-Migration)  
**Official Repository:** https://github.com/contentstack/contentstack-docs  
**Questions?** Contact: gladys.daniel@contentstack.com

