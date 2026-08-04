# CMS ↔ Git Sync Workflow Architecture (Sandbox-First)

## 🎯 Core Principle
**NEVER create entries directly on PRODUCTION stacks.** All content creation and testing happens in SANDBOX first, then promoted to PROD/Staging only after writer review and approval.

---

## 📋 Workflow Flows

### 1️⃣ **GitHub → Sandbox** (When PR merges to main)
**Workflow:** `gh-to-sandbox-sync-apidocs.yml`

```
Feature Branch
    ↓ (lint checks in CI)
    ↓ (review & approve)
Pull Request on GitHub
    ↓
Merge to main
    ↓ (TRIGGER)
Sandbox CMS ← Content synced automatically
    ↓
Writers review in Sandbox
```

**What happens:**
- When changes merge to main branch, they automatically sync to Sandbox CMS
- Content appears as DRAFT entries in Sandbox
- Writers can test, review, and edit in Sandbox environment
- No impact on Production yet

**Manual trigger:**
```bash
# Can also manually trigger to specific content types:
gh workflow run gh-to-sandbox-sync-apidocs.yml --repo aravindh-cstk/docops
```

---

### 2️⃣ **Sandbox Review & Promotion** (Writer publishes in Sandbox)
**Workflow:** `sandbox-to-prod-promote-apidocs.yml`

```
Sandbox CMS (Writer in Draft state)
    ↓ (writer clicks "Publish" button)
    ↓ (entry status changes to Published)
    ↓ (TRIGGER)
Production CMS (NEW entry created)
    ↓
Staging Environment (entry published here)
    ↓ (⚠️ Production environment NOT affected)
Ready for review in Staging
```

**What happens:**
- Writer reviews draft entries in Sandbox
- Writer clicks "Publish" button in Sandbox to mark as ready
- Manual GitHub workflow trigger clones published entries to Prod
- Entries are automatically published to **Staging environment ONLY**
- Production environment is never directly modified
- Writer can review in Staging before promoting to Production

**Manual trigger (after publishing in Sandbox):**
```bash
# Promote all published entries from Sandbox to Prod/Staging
gh workflow run sandbox-to-prod-promote-apidocs.yml \
  --repo aravindh-cstk/docops

# Or promote specific entries only
gh workflow run sandbox-to-prod-promote-apidocs.yml \
  --repo aravindh-cstk/docops \
  --raw-field "entry_uids=uid1,uid2,uid3"
```

---

### 3️⃣ **Production → Sandbox → GitHub** (Accountability Flow)
**Workflow:** `cms-to-github-apidocs.yml`

```
Production CMS (entry published to Staging/Production)
    ↓ (someone edits directly in Prod CMS)
    ↓ (TRIGGER every 15 min - cron schedule)
    ↓
Sandbox CMS (changes synced back)
    ↓
GitHub (automatic PR created)
    ↓
PR assigned to user who made Prod changes
    ↓ (review & merge process)
Main branch updated
    ↓ (loops back to flow #1)
```

**What happens:**
- Runs every 15 minutes looking for Prod CMS changes
- If changes detected, auto-syncs to Sandbox first
- Creates PR in GitHub with detailed change log
- PR includes: file names, modified by, timestamps
- Lint checks run on the PR automatically
- PR assigned to user who made changes (GitHub SSO integration)
- Email notification sent (GitHub's default behavior)
- Once merged, changes go back to Sandbox (maintaining parity)

**Manual trigger:**
```bash
# Force check right now instead of waiting 15 min
gh workflow run cms-to-github-apidocs.yml \
  --repo aravindh-cstk/docops \
  --raw-field "lookback_minutes=60"
```

---

## 🔄 Complete Content Lifecycle

```
┌─────────────────────────────────────────────────────────┐
│          GITHUB (Source of Truth)                        │
│  Feature Branch → Review → Merge to main               │
└────────────────────┬────────────────────────────────────┘
                     │ (auto-sync on merge)
                     ↓
┌─────────────────────────────────────────────────────────┐
│          SANDBOX (Writers' Testing Ground)               │
│  - Draft entries appear here                             │
│  - Writers edit, review, test                            │
│  - Status: Draft → Published                             │
└────────────────────┬────────────────────────────────────┘
                     │ (manual promotion)
                     ↓
┌─────────────────────────────────────────────────────────┐
│     PRODUCTION / STAGING (Deployment Target)             │
│  - Published to Staging environment                      │
│  - Ready for final review before Production              │
│  - If edited here → auto-syncs back to GitHub (↑)        │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Step-by-Step Writer Workflow

### Creating New Content

1. **Local/Branch (Step 1)**
   ```bash
   git checkout -b docs/new-api-reference
   # Create markdown file in api-docs/api-detail/
   # Run pre-commit lint
   npm run lint
   git add api-docs/new-api-reference.md
   git commit -m "docs: add new API reference"
   git push origin docs/new-api-reference
   ```

2. **GitHub PR (Step 2)**
   - Create PR on GitHub
   - Lint checks run automatically
   - Team reviews and approves
   - Merge to main

3. **Sandbox (Step 3)**
   - Content auto-syncs to Sandbox CMS
   - You receive notification
   - Open Sandbox and find DRAFT entry
   - Edit, refine, and test in Sandbox
   - Review in Sandbox preview

4. **Promotion (Step 4)**
   - When satisfied, click "Publish" in Sandbox
   - Entry status changes to "Published"
   - Manually trigger `sandbox-to-prod-promote-apidocs.yml` workflow
   - Entry clones to Prod CMS
   - Automatically published to Staging environment

5. **Final Review & Production (Step 5)**
   - Review in Staging environment on docsite
   - When ready, manually publish to Production environment
   - Production docsite gets the update

### Editing Existing Content

**Option A: Edit in GitHub (Recommended)**
1. Edit markdown file on feature branch
2. Create PR, get review, merge to main
3. Changes auto-sync to Sandbox
4. Follow steps 3-5 above

**Option B: Edit in Sandbox CMS (Triggers GitHub PR)**
1. Edit in Sandbox CMS
2. System detects changes (every 15 min)
3. Automatic PR created in GitHub
4. PR assigned to you with email notification
5. Review diff and merge to main
6. Changes loop back to Sandbox (maintaining parity)

---

## ✅ Benefits of This Architecture

| Aspect | Benefit |
|--------|---------|
| **No Prod Surprises** | Everything tested in Sandbox first |
| **Git is Source of Truth** | GitHub remains primary; CMS is secondary |
| **Writer Accountability** | All Prod changes tracked as PRs assigned to user |
| **Safe Rollback** | Sandbox serves as testing before Prod |
| **Review Process** | Two levels: GitHub review + Sandbox review |
| **Email Notifications** | GitHub auto-notifies on PR assignments |
| **Lint Validation** | Automatic checks prevent bad content |
| **Historical Record** | All changes tracked in GitHub with git history |

---

## 🔧 Workflows Reference

| Workflow | Trigger | Purpose | Files |
|----------|---------|---------|-------|
| `gh-to-sandbox-sync-apidocs.yml` | Main branch push | GitHub → Sandbox sync | `.github/workflows/gh-to-sandbox-sync-apidocs.yml` |
| `sandbox-to-prod-promote-apidocs.yml` | Manual workflow_dispatch | Sandbox → Prod promotion | `.github/workflows/sandbox-to-prod-promote-apidocs.yml` |
| `cms-to-github-apidocs.yml` | Schedule (every 15 min) | Prod → GitHub sync | `.github/workflows/cms-to-github-apidocs.yml` |

---

## 🔑 Key Points

1. **Never create directly on Prod** ❌
   - Old workflows archived (see `.github/workflows/archived/`)
   - All creation goes through Sandbox first

2. **Sandbox is the testing ground** ✅
   - Writers review and edit here
   - Draft entries only visible to creators until published
   - Safe place to experiment

3. **GitHub is the source of truth** ✅
   - All changes should originate here
   - CMS is a secondary channel for writer testing
   - Changes in Prod trigger GitHub PR (full audit trail)

4. **Manual promotions** ✅
   - Sandbox → Prod requires manual workflow trigger
   - Gives control to writers/reviewers
   - No surprise auto-promotions

5. **Two-way sync** ✅
   - GitHub → Sandbox (on main merge)
   - Sandbox → Prod (manual promotion)
   - Prod → GitHub (auto-detection, creates PR)
   - Maintains consistency across all three

---

## 📊 Environment Mapping

| Environment | Purpose | Write Access | Content Status |
|-------------|---------|--------------|-----------------|
| GitHub | Source control | Developers | Version controlled |
| Sandbox CMS | Writer testing | Writers | Draft & Published (test only) |
| Prod CMS | Live content | None (via workflows) | Draft & Published (live) |
| Staging Env | Pre-production | None | Published entries staging preview |
| Production Env | Live docsite | None | Published entries live |

---

## 🚀 Getting Started

1. **For Developers:**
   - Create feature branches for content changes
   - Merge PRs to main (GitHub lint runs automatically)
   - Content syncs to Sandbox

2. **For Writers:**
   - Check Sandbox CMS for new DRAFT entries
   - Edit and refine content
   - Mark as Published when ready
   - Notify team to run promotion workflow

3. **For Reviewers:**
   - Review PRs from CMS changes (accountability)
   - Merge CMS changes back to GitHub
   - Approve promotions to Prod/Staging

---

## ❓ FAQ

**Q: What if I edit directly in Prod CMS?**
A: Changes are detected every 15 minutes, a PR is automatically created in GitHub with you assigned, and it syncs back to Sandbox. Full audit trail maintained.

**Q: Can I skip Sandbox and go straight to Prod?**
A: No. The system only allows cloning from published Sandbox entries to Prod. Direct creation disabled.

**Q: What happens if lint checks fail?**
A: PRs created from CMS changes show lint check as failed. You can still merge (option to ignore), but it's flagged for review.

**Q: How long does sync take?**
A: GitHub → Sandbox: Instant (on merge). Sandbox → Prod: On-demand (manual workflow). Prod → GitHub: Every 15 minutes.

**Q: Can I preview before promoting?**
A: Yes. Edit and publish in Sandbox, preview in Sandbox CMS. After promoting, preview in Staging environment before final Production push.

