# Three-Phase Content Sync Workflow

## Overview
This document describes the complete workflow for syncing content from GitHub through Sandbox CMS to Production CMS.

---

## Phase 1: GitHub → Sandbox (Automatic)

**Trigger:** Push to `main` branch in cs-docs/ or api-docs/

**Workflow:**
```
Developer commits & pushes to main
    ↓
GitHub Actions: gh-to-sandbox-sync-*
    ↓
Sandbox CMS (Draft entries created/updated)
```

**What happens:**
- All markdown files from GitHub synced to Sandbox CMS
- Entries created as **DRAFT** (not published)
- Writers can review, edit, and test in Sandbox

**Manual trigger available:**
```bash
gh workflow run gh-to-sandbox-sync-csdocs.yml -R aravindh-cstk/docops
gh workflow run gh-to-sandbox-sync-apidocs.yml -R aravindh-cstk/docops
```

---

## Phase 2: Sandbox → Production CMS Staging (Automatic Hourly)

**Trigger:** Automatic check every hour (and manual via `workflow_dispatch`)

**Workflow:**
```
Writer publishes entry in Sandbox
    ↓ (to Development or Staging environment)
    ↓
[Every hour: Auto-promotion workflow runs]
    ↓
Production CMS (Staging environment - Published)
```

**What happens:**
- Checks Sandbox for entries published to Development/Staging
- Automatically promotes published entries to Production CMS
- Entries appear in **Production CMS Staging environment only**
- No impact on live Production environment yet

**Manual trigger available:**
```bash
gh workflow run sandbox-auto-promote-csdocs.yml -R aravindh-cstk/docops
gh workflow run sandbox-auto-promote-apidocs.yml -R aravindh-cstk/docops
```

---

## Phase 3: Production CMS Staging → Production Environment (MANUAL - Writer Decision)

**Trigger:** Manual action by writer in Production CMS dashboard

**Workflow:**
```
Writer approves entry in Prod CMS Staging
    ↓
Writer publishes to Production environment
    ↓
LIVE on production website
```

**What happens:**
- Writer reviews entry in Production CMS Staging environment
- Writer validates formatting, links, images, etc.
- Writer manually publishes to Production environment
- Entry now LIVE on production website

**Requirements:**
- Requires writer to have access to Production CMS
- Writer makes final decision on go-live timing
- No automatic promotion to Production environment

---

## Complete Timeline Example

| Time | Action | Status |
|------|--------|--------|
| **10:00 AM** | Developer pushes content to GitHub main | Content in Git |
| **10:01 AM** | gh-to-sandbox-sync workflow runs | Content in Sandbox (Draft) |
| **10:05 AM** | Writer reviews in Sandbox | Writer editing |
| **10:30 AM** | Writer publishes in Sandbox (Staging env) | Published in Sandbox |
| **11:00 AM** | Hourly auto-promotion runs | Content in Prod CMS Staging |
| **11:15 AM** | Writer reviews in Prod CMS Staging | Final review |
| **11:30 AM** | Writer manually publishes to Production | 🎉 LIVE! |

---

## Environments Summary

### Sandbox CMS
- **Draft entries:** Always synced from GitHub (Phase 1)
- **Published entries:** Writer approval (Development/Staging)
- **Purpose:** Review and testing before production

### Production CMS
- **Staging environment:** Auto-synced from published Sandbox entries (Phase 2)
- **Production environment:** Manual writer decision only (Phase 3)
- **Purpose:** Final gate before going live

---

## Key Principles

✅ **Automatic:** GitHub → Sandbox (Phase 1)  
✅ **Automatic:** Published Sandbox → Prod CMS Staging (Phase 2, Hourly)  
🖐️ **Manual:** Prod CMS Staging → Production (Phase 3, Writer Controlled)

**Why this design?**
- Writers have full control over production content
- Multiple review gates prevent errors
- Staging environment allows final verification
- No surprises - writers explicitly publish to production
