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
┌───────────────────┐       ┌───────────────────┐       ┌──────────────────┐
│  GIT REPOSITORY   │       │  SANDBOX STACK    │       │ PRODUCTION STACK │
│                   │       │                   │       │                  │
│ Markdown Files    │       │ Draft Entries     │       │ Published Entries│
│ - api-docs/       │       │ (Not Published)   │       │ (On Staging)     │
│ - cs-docs/        │       │                   │       │                  │
│                   │       │ Content Type:     │       │ Content Type:    │
│ YAML Frontmatter: │       │ - api_requests    │       │ - api_requests   │
│ - title           │       │ - docs_article    │       │ - docs_article   │
│ - url             │       │                   │       │                  │
│ - doc_type        │       │ Field Mapping:    │       │ Field Mapping:   │
│                   │       │ - title → title   │       │ - title → title  │
│ PR Workflow       │       │ - url → url       │       │ - url → url      │
│ Lint checks       │       │ - body → content  │       │ - body → content │
│                   │       │                   │       │                  │
└───────────────────┘       └───────────────────┘       └──────────────────┘
         │                           │                           │
         │                           │                           │
         │ (1) PR Merge              │ (3) dev-published          │ (5) Live
         │ gh-to-sandbox-sync        │ sandbox-to-prod            │ Content
         │                           │                           │ Ready
         └──────────────────────────▶│◀──────────────────────────┘
                                     │
                                     │ (2) Reverse Sync
                                     │ sandbox-to-git-sync
                                     │ (creates PR for updates)
                                     │
                                     │ (4) Rollback/Update
                                     │ prod-to-sandbox
                                     │
                                     └──────────────────────────▶ Git (PR)

WORKFLOW STEPS:
(1) Push to Git → Create PR → Merge to main
    ↓
(2) Auto-sync: Git → Sandbox (creates [DRAFT] entries)
    ↓
(3) Verify Sandbox entry is correct & populated
    ↓
(4) Publish Sandbox entry to Development environment
    ↓
(5) Auto-publish: Sandbox → Production (dev-published)
    ↓
(6) Verify Production entry exists and is staged
    ↓
Done! ✅
```

**Key Points:**
- **Git** → Source of truth (markdown files with YAML frontmatter + lint checks)
- **Sandbox** → Testing & validation (draft entries created on PR merge)
- **Production** → Published content (entries published on dev-published, ready for delivery)

---

## Prerequisites

- GitHub account access 
- Claude Code CLI or Claude AI access (for using Claude prompts) integrated in VS Code, Cursor, or similar code editor
- Get access to the Developer codebase
- Jira ticket number for your feature (TD-XXXX format)

## Rules
- 1 PR per 1 TD ticket
- Create meaningful branch names
---

## Step 1: Clone the Repository to Local

Open your IDE and run the following command in its terminal:

```bash
git clone https://github.com/aravindh-cstk/docops.git
```
---

## Step 2: Clone the Developer codebase to your local

```bash
git clone <codebase HTTP URL>>
```

## Step 3: Check Recent PR for Documentation Updates

### 3.1 Use Claude Chat to Analyze Documentation Needs

Open the integrated Claude chat in your editor and ask:

**Claude Prompt:**

I need to check if documentation has been updated for a recent feature.

```
1. Review the recent PR <PR-Link> to see if doc changes are needed for the new PR
2. Compare with the local product folder (Example: Studio) to identify gaps
3. Create a detailed scope for what needs to be created/updated
```
---

## Step 4: Create Documentation with Lint Checks

1. Run the following prompt in the same claude session

```
Run the `lint.ts` and `style-lint.ts` scripts and resolve the issues.  Let me know if you need any confirmation during this process.

```

### 4.3 Stage Changes in Your Local

```bash
# Check status
git status

# Stage the markdown file
git add cs-docs/[folder]/[filename].md

# Verify staging
git status
```

To do this manually, 

1. Go to the **Source Control** 
2. Stage the required changes by clicking the **`Plus`** icon.
3. And instruct claude to checkout the staged changes.  

To do this completely via Claude write the following prompt:

```
Checkout the changes that we made in this session to the same branch and create a PR.  Give me the PR link here. 
```
> **Tip:** We suggest using the terminal commands to start with and then automate the process once we are familiar with the process.  As manual method helps us incase of unavailability of agent. 

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

If you have used claude in the previous step, then it would automatically create PR for you. 

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

If you are doing it with Claude give the following prompts:

1. Fetch the review comments and revamp docs

```
Fetch all the review comments provided by <Reviewer_ID> and list them out here.  Check if they are valid.  If yes, revamp the docs based on the review comments. 

```
2. Review the content and give the following prompt:

```
Checkout the doc changes to the same branch and also reply to the review comments and resolve the thread 
```

---

## Step 6: Merge PR to Main

Once PR is approved:

```bash
# Merge via CLI
gh pr merge <PR-NUMBER> --merge
```
If doing directly in github, Click "Merge pull request"

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
4. Once you verirfy it, publish it to any environment.

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

