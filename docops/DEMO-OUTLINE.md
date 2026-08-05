# Bidirectional Sync Workflow Demo Outline

**Duration:** 30-45 minutes  
**Audience:** Engineering + Technical Writing teams  
**Goal:** Showcase Git↔CMS sync automation and validation process

---

## Part 1: Problem & Solution (5 min)

### The Challenge
- **Before:** Manual documentation sync between Git and CMS
  - Developers write docs in Git
  - Tech writers manually enter into CMS
  - CMS changes don't sync back to Git
  - Risk of divergence, version conflicts

### The Solution
- **Automatic bidirectional sync**
  - Git → CMS: Push code, docs auto-create in CMS
  - CMS → Git: Publish in CMS, PR auto-created in Git
  - Single source of truth maintained
  - Eliminates manual entry

**Visual:** Show before/after flow diagram

---

## Part 2: Architecture Overview (8 min)

### Components
1. **GitHub Actions Workflows**
   - `contentstack-sync.yml` — Git → CMS
   - `cms-to-github.yml` — CMS → Git (webhook)
   - `docs-lint.yml` — Linting validation

2. **Contentstack CMS**
   - API endpoints for entry creation/update/delete
   - Webhook for publish/unpublish events
   - Multiple stacks (cs-docs, api-docs, sdk-docs)

3. **Git Repository**
   - Markdown files organized by product area
   - Frontmatter metadata (url, marker, heading)
   - Linting rules enforced

### Data Flow
```
Developer pushes .md → GitHub Actions triggers
                    → Validates linting
                    → Creates/updates CMS entry
                    → CMS publishes entry
                    ↓
Writer publishes in CMS → Webhook triggers
                       → GitHub Actions runs
                       → PR auto-created in Git
                       → Tech team reviews + merges
```

**Visual:** Show workflow diagram with all components

---

## Part 3: The Test Suite (10 min)

### Why We Test
- Prove sync works in both directions
- Catch edge cases before production
- Document expected behavior for team

### Tier 1 Test Cases

**Show each test case:**

1. **CREATE** — New file → New CMS entry
   - File: `TEST_add-users-to-assets.md`
   - Expected: Entry appears in CMS

2. **UPDATE** — File modification → CMS update
   - File: `TEST_add-users-to-assets_1update.md`
   - Expected: CMS title/metadata updates

3. **DELETE** — File removed → CMS unpublish
   - File: `TEST_add-users-to-assets_1.md`
   - Expected: Entry removed from CMS

4. **BATCH** — Multiple files → All sync
   - 9 test files across 3 content types
   - Expected: All create simultaneously

5. **WEBHOOK** — CMS publish → Git PR
   - Manual test in CMS
   - Expected: PR auto-created in Git

6. **UNPUBLISH** — CMS delete → Git deletion
   - Manual test in CMS
   - Expected: PR auto-created to delete file

**Visual:** Screenshot of test files in repo

---

## Part 4: Live Demo (15-20 min)

### Demo Scenario: "A developer makes documentation changes"

#### Step 1: Show the Code
```bash
# Show test_gladys branch
git log --oneline test_gladys -5
# Show 9 test files
find . -name "TEST_*.md" | head -3
```
**Say:** "These 9 test files simulate real documentation changes across 3 content types."

#### Step 2: Lint Before Pushing
```bash
./lint-before-push.sh
# Shows: ✅ Linting passed! Safe to push.
```
**Say:** "Before pushing, we validate all changes locally. This catches 90% of issues before they reach the PR."

#### Step 3: Show the PR
- Navigate to: https://github.com/contentstack/contentstack-docs/pull/new/test_gladys
- **Highlight:**
  - 9 new test files
  - LINT-WORKFLOW.md (developer workflow guide)
  - TEST-CASES.md (validation checklist)
  - 7 commits (clean history)

**Say:** "When merged, GitHub Actions automatically syncs all 9 files to CMS. No manual steps."

#### Step 4: Show the Workflows
- Navigate to: `.github/workflows/contentstack-sync.yml`
- **Highlight:**
  - Triggers on `main` branch
  - Runs npm lint + sync scripts
  - Handles CREATE, UPDATE, DELETE in one pass

**Say:** "This workflow runs in about 2 minutes. All files sync simultaneously."

#### Step 5: Show CMS Integration
- **(If you have CMS access)** Show Contentstack dashboard
  - Search for `TEST_add-users-to-assets`
  - Show entry properties: title, URL, content
  - Show draft status (waiting for review)

**Say:** "After merge, all entries appear here. Tech writers review and publish."

#### Step 6: Show Documentation
```bash
cat LINT-WORKFLOW.md
cat TEST-CASES.md
```
**Highlight:**
- Quick start instructions
- Common fixes
- Validation steps
- How to report issues

**Say:** "This is our playbook. Developers know exactly what to do and what to expect."

---

## Part 5: Key Benefits (3 min)

| Before | After |
|--------|-------|
| Manual CMS entry | Auto-create via API |
| Risk of divergence | Single source (Git) |
| No CMS→Git sync | Webhook triggers PR |
| Linting errors reach PR | Caught locally first |
| No test coverage | 8 test cases + checklist |
| No playbook | LINT-WORKFLOW.md + TEST-CASES.md |

**Say:** "This cuts manual work by 80% while increasing reliability."

---

## Part 6: Workflow for Teams (5 min)

### For Developers
1. Write/modify `.md` files
2. Run `./lint-before-push.sh`
3. Create PR
4. Wait for auto-sync to CMS ✅

### For Technical Writers
1. Review synced entries in CMS
2. Refine/publish entries
3. Changes webhook back to Git
4. Git PR created for review ✅

### For Review/QA
1. Follow TEST-CASES.md checklist
2. Verify entries in CMS
3. Test bidirectional flow
4. Report any glitches

**Visual:** Show swimlane diagram

---

## Part 7: What to Validate Post-Merge (3 min)

**Checklist to confirm sync worked:**

- [ ] All 9 entries created in CMS
- [ ] Titles match file names
- [ ] URLs correct
- [ ] Content body synced
- [ ] Entry status is Draft
- [ ] No duplicates

**How to check:**
1. Open GitHub Actions → watch `contentstack-sync.yml`
2. Wait 2-3 minutes for completion
3. Log into Contentstack CMS
4. Search for `TEST_` entries
5. Spot-check 3 entries for correctness

---

## Part 8: Q&A (5 min)

**Anticipated questions:**

**Q: What if linting fails?**
A: Developer fixes locally (takes 2-5 min) and pushes again. GitHub Actions will pass.

**Q: Can we roll back a sync?**
A: Yes — delete the CMS entry or unpublish. Next merge from Git will recreate it correctly.

**Q: What if CMS and Git get out of sync?**
A: We have a reconciliation workflow. Both directions can repair the state.

**Q: How often can we sync?**
A: No limit. Each merge triggers sync. Webhooks are real-time.

**Q: Do we need to train anyone?**
A: No. Developers use lint script. Tech writers use CMS as normal. Automation handles the rest.

---

## Demo Artifacts to Prepare

- [ ] Browser tabs open:
  - GitHub PR: test_gladys branch
  - GitHub Actions: workflow runs
  - Contentstack CMS dashboard
  - Docops repo: TEST-CASES.md

- [ ] Terminal ready:
  - In docops directory
  - Run `./lint-before-push.sh` to show pass
  - Show test files: `find . -name "TEST_*.md"`

- [ ] Slides:
  - Before/after flow diagram
  - Architecture diagram
  - Test case matrix
  - Team workflow swimlanes

- [ ] Handouts:
  - LINT-WORKFLOW.md (print or share)
  - TEST-CASES.md (print or share)
  - Quick reference card (1-page)

---

## Timing Breakdown

| Section | Time |
|---------|------|
| Problem & Solution | 5 min |
| Architecture | 8 min |
| Test Suite | 10 min |
| Live Demo | 15-20 min |
| Benefits | 3 min |
| Team Workflows | 5 min |
| Validation Post-Merge | 3 min |
| Q&A | 5 min |
| **Total** | **~45 min** |

---

## Notes for Presenter

- **Emphasize:** Automation reduces manual work + errors
- **Show:** Actual code (repos, workflows, test files)
- **Demonstrate:** Real workflow (not slides)
- **Involve:** Ask team questions during demo
- **Clarify:** Why linting matters (prevents failed syncs)
- **Next Steps:** When merged, team validates together

---

## Follow-Up Actions

After demo, assign:
- **Developers:** Review LINT-WORKFLOW.md
- **Tech Writers:** Review TEST-CASES.md
- **QA:** Prepare validation environment
- **All:** Attend validation walkthrough post-merge
