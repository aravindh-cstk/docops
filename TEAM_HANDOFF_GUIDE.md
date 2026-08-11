# Team Handoff Guide — Documentation Workflow

**Last Updated:** August 11, 2026  
**For:** Documentation Writers & Content Team  
**Audience:** Technical writers updating docs for new features

---

## Overview

This guide walks through the complete documentation workflow from cloning the repo to publishing in production CMS. Each step includes Claude prompts you can run in your terminal or Claude Code.

---

## Architecture: docops Sync Workflow

The documentation flows through three interconnected environments:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    docops Sync Workflow Architecture                         │
│                     Git ↔ Sandbox ↔ Production Flow                         │
└─────────────────────────────────────────────────────────────────────────────┘

   ┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
   │ Git Repository   │         │ Sandbox Stack    │         │Production Stack  │
   └──────────────────┘         └──────────────────┘         └──────────────────┘
           │                             │                             │
           │                             │                             │
      ┌────▼────────┐            ┌─────▼──────┐            ┌────────▼─────┐
      │ Markdown     │            │ CMS Entries│            │Published on  │
      │ Files        │            │ (Draft)    │            │Staging       │
      │ - api-docs/  │            │            │            │              │
      │ - cs-docs/   │            │Mapped &    │            │Ready for     │
      │              │            │Verified    │            │review        │
      └─────────────┘            └────────────┘            └──────────────┘
           │                             │                             │
           │                             │                             │
      ┌────▼──────────────┐      ┌─────▼────────┐            ┌────────▼─────┐
      │ YAML Frontmatter   │      │ Field Mapping│            │Live content  │
      │ title, url,        │      │ title, url,  │            │              │
      │ doc_type           │      │ body         │            │Final         │
      │                    │      │              │            │validation    │
      └────────────────────┘      └──────────────┘            └──────────────┘
           │                             │                             │
           │                             │                             │
      ┌────▼──────────────┐      ┌─────▼────────┐            ┌────────▼─────┐
      │ PR Workflow        │      │Testing Ground│            │Delivery      │
      │ Lint checks        │      │Verify &      │            │API endpoints │
      │ Content validation │      │review content│            │ready         │
      └────────────────────┘      └──────────────┘            └──────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ Forward Sync: Git → Sandbox → Production                                    │
│ Reverse Sync: Sandbox ↔ Git (PR creation), Production → Sandbox (updates)   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Flow:**
- **Git Repository** → Source of truth (markdown files with YAML frontmatter)
- **Sandbox Stack** → Testing & validation environment (draft entries)
- **Production Stack** → Published content ready for delivery

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
git clone https://github.com/aravindh-cstk/docops.git
cd docops
```

### 1.2 Open the Repository in Your Editor

Open the `docops` directory in **Cursor** or **VS Code**:

```bash
code .   # For VS Code
# or
cursor . # For Cursor
```

---

## Step 2: Organize Your Local Directory

Each writer works on **2-3 specific product folders only**. Delete all other folders to keep your local clean. **Do not change the folder structure**, just delete the unwanted project folders.

### 2.1 Identify Your PODs (Product Folders)

**Example: If you're working on Studio documentation:**
- Keep: `cs-docs/studio/`
- Delete: Everything else in `cs-docs/` except studio

**Common PODs in cs-docs:**
- `studio/` — Studio product docs
- `administration/` — Administration docs
- `marketplace/` — Marketplace docs
- `assets/` — Asset management

**Example: Delete non-relevant folders locally**
```bash
# Keep only Studio, delete others
cd cs-docs
rm -rf administration/ marketplace/ assets/
cd ..

# Or delete entire api-docs if you're not working on APIs
rm -rf api-docs
```

---

## Step 3: Check Recent PR for Documentation Updates

### 3.1 Use Claude Chat to Analyze Documentation Needs

Open the integrated Claude chat in your editor and ask:

**Claude Prompt:**

```
I need to check if documentation has been updated for a recent feature.

Please help me:
1. Review the recent PR to see if docs have been updated
2. Compare with https://www.contentstack.com/docs/ to identify gaps
3. Create a scope document for what needs to be created/updated

PR Link: [Paste recent PR link]

For each change:
- List new docs to be created
- List existing docs to be updated
- Specify the contentstack.com/docs/ reference URLs where they should align

Create a scope document summarizing:
1. New documentation files to create (with filenames)
2. Existing files to update (with section names)
3. Alignment with official documentation at contentstack.com/docs/
```

### 3.2 Create a Scope of Changes

Based on Claude's analysis, document:
- **New docs to create:** List file names and paths
- **Existing docs to update:** List files and sections
- **Reference URLs:** Links to official docs on contentstack.com/docs/

---

## Step 4: Create Documentation with Lint Checks

### 4.1 Ask Claude Agent to Create New Documentation

Use Claude to generate the markdown file:

**Claude Prompt:**

```
Create a new markdown documentation file for:

Feature: [Feature Name]
File location: cs-docs/[folder]/[filename].md
Description: [What the feature does]

Requirements:
- YAML frontmatter (title, url, description, doc_type)
- Markdown format with proper heading hierarchy
- Code examples and troubleshooting section
- 500-800 words
- Match contentstack.com/docs/ style

Generate complete markdown content now.
```

### 4.2 Run Lint Checks on Your Local

Once the file is created:

```bash
# Run lint checks using lint.ts
npx ts-node tools/lint.ts cs-docs/[folder]/[filename].md
```

Fix any lint violations before proceeding.

### 4.3 Stage Changes in Your Local

```bash
# Check status
git status

# Stage the markdown file
git add cs-docs/[folder]/[filename].md

# Verify staging
git status
```

### 4.4 Push Changes and Create PR

```bash
# Create a feature branch
git checkout -b docs/[feature-name]

# Commit changes
git commit -m "docs: add [feature-name] documentation"

# Push to remote
git push origin docs/[feature-name]

# Create PR
gh pr create --title "docs: Add [Feature Name]" --body "Adds documentation for [Feature Name]"
```

---

## Step 5: Assign Reviewers and Get Approval

### 5.1 Assign Reviewers on GitHub

1. Open your PR on GitHub
2. Click "Reviewers" on the right panel
3. Assign your lead and relevant team members
4. Wait for review feedback

### 5.2 Address Review Feedback

If changes requested:
1. Make edits in your local editor
2. Commit and push updates: `git add . && git commit -m "docs: address review feedback"`
3. PR automatically updates

---

## Step 6: Merge PR to Main

Once PR is approved:

```bash
# Merge via CLI
gh pr merge <PR-NUMBER> --merge

# OR: Click "Merge pull request" on GitHub
```

---

## Step 7: Verify Draft Entry in Sandbox Stack

After merge:

1. Go to **Contentstack Sandbox CMS**
2. Check whether the merged file now appears as a **[DRAFT]** entry
3. Verify all fields are correctly populated:
   - Title matches markdown title
   - URL is correct
   - Content is complete
   - Status shows as Draft

---

## Step 8: Publish to Sandbox Environment

Once entry is confirmed to be correctly created:

1. Open the **[DRAFT]** entry in Sandbox
2. Click **"Publish"** button
3. Select an environment to publish to **(recommended: Development)**
4. Confirm publication

---

## Step 9: Verify Entry in Production Stack

Final verification:

1. Go to **Production Contentstack environment**
2. Check whether the same entry is created and staged
3. Verify it matches the Sandbox version
4. Document any discrepancies for your team

---

## Quick Reference: Key Commands

### Git Commands

```bash
# Clone the repo
git clone https://github.com/aravindh-cstk/docops.git
cd docops

# Create feature branch
git checkout -b docs/[feature-name]

# Stage and commit
git add cs-docs/[folder]/[filename].md
git commit -m "docs: add [feature-name] documentation"

# Push to remote
git push origin docs/[feature-name]

# Create PR
gh pr create --title "docs: Add [Feature Name]" --body "Adds documentation for [Feature Name]"

# Merge PR
gh pr merge <PR-NUMBER> --merge
```

### Lint Check Command

```bash
# Run lint checks on your markdown file
npx ts-node tools/lint.ts cs-docs/[folder]/[filename].md
```

### Claude Prompts

**For documentation scope analysis:**
```
I need to check if documentation has been updated for a recent feature.

Please help me:
1. Review the recent PR to see if docs have been updated
2. Compare with https://www.contentstack.com/docs/ to identify gaps
3. Create a scope document for what needs to be created/updated

PR Link: [Paste recent PR link]

Create a scope document summarizing:
1. New documentation files to create (with filenames)
2. Existing files to update (with section names)
3. Alignment with official documentation at contentstack.com/docs/
```

**For creating new documentation:**
```
Create a new markdown documentation file for:

Feature: [Feature Name]
File location: cs-docs/[folder]/[filename].md
Description: [What the feature does]

Requirements:
- YAML frontmatter (title, url, description, doc_type)
- Markdown format with proper heading hierarchy
- Code examples and troubleshooting section
- 500-800 words
- Match contentstack.com/docs/ style

Generate complete markdown content now.
```

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

## Workflow Summary

The complete documentation workflow in 9 steps:

```
1. Clone the docops repo
   ↓
2. Organize folders (keep only your PODs)
   ↓
3. Check recent PR & create scope with contentstack.com/docs/ reference
   ↓
4. Create new doc with Claude → Run lint checks → Stage changes
   ↓
5. Push to origin → Create PR
   ↓
6. Assign reviewers & get approval
   ↓
7. Merge PR to main
   ↓
8. Verify draft entry in Sandbox CMS
   ↓
9. Publish to Sandbox (Dev recommended) → Verify in Production
   ↓
Done! ✅
```

**Total Time:** 2-4 hours per feature (depending on complexity and review process)

---

**Last Updated:** August 11, 2026  
**Version:** 1.0  
**Questions?** Contact: gladys.daniel@contentstack.com

