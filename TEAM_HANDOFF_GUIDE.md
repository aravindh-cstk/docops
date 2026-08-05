# Tech Writer Handoff Guide — Documentation Workflow

**Repository:** https://github.com/contentstack/contentstack-docs (Official)  
**For:** Documentation Writers & Content Team  
**Audience:** Technical writers creating and updating feature documentation

---

## How It Works: Simple 3-Step Flow

```
Step 1-6: Write docs in GitHub        Step 7-9: Review in CMS        Step 10: Publish
─────────────────────────────         ──────────────────────         ──────────────
1. Clone repo                          7. Check Sandbox CMS           10. Publish to
2. Create feature branch               8. Verify content looks        Production
3. Generate doc with Claude            good (formatting, links)
4. Commit and create PR                9. Final review
5. Get approval from lead
6. Merge to main → Auto-syncs
   to CMS as DRAFT
```

---

## 10-Step Workflow

Your job: **Create documentation in GitHub → Review in CMS → Publish to production.**

### Step 1: Clone & Setup
```bash
git clone https://github.com/contentstack/contentstack-docs.git
cd contentstack-docs/docops

# Keep only your assigned folders, delete the rest
cd cs-docs
rm -rf [other-folders]  # Keep only your product folder (studio, marketplace, etc.)
cd ..
```

### Step 2: Get the Feature Details
Ask your lead for the PR that describes what needs documentation:
- Feature name
- What changed (APIs, config, etc.)
- Example code
- Your Jira ticket number (TD-XXXX)

### Step 3: Create Documentation with Claude
Use this prompt to generate markdown:

```
Create markdown documentation for a new feature.

FEATURE:
- Name: [Feature Name]
- Description: [What it does]
- APIs/Config: [Paste the changes]
- Example: [Code example]

REQUIREMENTS:
- YAML frontmatter: title, url, description
- Sections: overview, use cases, examples, troubleshooting
- ~500-800 words
- Markdown format (follow cs-docs style)
- Filename: kebab-case.md

Generate the complete markdown file now.
```

### Step 4: Create Feature Branch & Commit
```bash
# Create branch: TD-<ticket>_<product>_<feature>
git checkout -b TD-5366_CMS_EntryVariantVersioning

# Add and commit the file
git add cs-docs/studio/your-feature.md
git commit -m "docs: add your feature documentation

- Document new feature
- Include examples and troubleshooting

Jira: TD-5366"

# Push to remote
git push origin TD-5366_CMS_EntryVariantVersioning
```

### Step 5: Create Pull Request
```bash
gh pr create \
  --title "docs: Add Your Feature Documentation" \
  --body "## Summary
Add documentation for new feature.

### Files Added
- cs-docs/studio/your-feature.md

### Jira
TD-5366

### Checklist
- [x] Content is accurate
- [x] Examples tested
- [x] Links valid
- [x] Formatting consistent"
```

### Step 6: Get Approval from Lead
Your lead reviews:
- ✅ Accuracy
- ✅ Code examples
- ✅ Style & formatting
- ✅ Links

Make changes if requested, then push again.

### Step 7: Merge to Main
```bash
gh pr merge <PR-NUMBER> --merge
```

**This automatically:**
- Triggers GitHub workflow
- Syncs markdown to CMS
- Creates **[DRAFT]** entry (not published)

### Step 8: Verify in CMS
Go to your CMS → Release folder:
1. Find your **[DRAFT]** entry
2. Check: title, URL, formatting, links
3. Run quick Claude verification:

```
I've reviewed my [DRAFT] entry in the CMS and found:
[List any issues or "No issues found"]

Should I publish this now?
```

### Step 9: Publish
1. Open your **[DRAFT]** entry in CMS
2. Click **"Publish"** button
3. Select **"Publish"** (not "Schedule")
4. Confirm

Done! Your docs are live. ✅

---

## Claude Prompts Quick Reference

### 1️⃣ Create New Documentation
```
Create markdown documentation for a feature.

Feature Name: [Feature Name]
Description: [What it does]
APIs/Config: [Changes]
Examples: [Code examples]

YAML frontmatter: title, url, description
Include: overview, use cases, examples, troubleshooting
~500-800 words
Markdown format, cs-docs style

Generate the complete markdown file now.
```

### 2️⃣ Update Existing Documentation
```
Update this file: cs-docs/studio/[filename].md

NEW CONTENT:
[Paste the changes]

UPDATES NEEDED:
1. Add new section: [Section]
2. Update examples for [Section]
3. Add breaking changes note

Keep existing content, add new content at top.
Update YAML frontmatter if needed.

Generate the updated markdown now.
```

### 3️⃣ Verify Before Publishing
```
I've reviewed my [DRAFT] entry in CMS.

Entry: [Your Feature Name]
URL: [Your URL slug]
Issues found: [List issues or "None"]

Should I publish this now?
Check: accuracy, formatting, links, examples.
```

---

## Troubleshooting

### Git Issues

**Problem: Can't push changes**
```bash
# Make sure you're on the right branch
git branch -a

# Update from main if needed
git pull origin main
git rebase main
```

**Problem: PR has merge conflicts**
```bash
git checkout main
git pull origin main
git rebase main TD-5366_CMS_EntryVariantVersioning
# Resolve conflicts in your editor
git add .
git rebase --continue
git push origin TD-5366_CMS_EntryVariantVersioning -f
```

### CMS Issues

**Problem: Entry not appearing in Sandbox CMS after merge**
- Wait 5 minutes (workflow takes time)
- Check GitHub Actions workflow status
- Verify file is in correct folder structure

**Problem: Content looks wrong in CMS**
- Go back to GitHub
- Edit the markdown file
- Create another PR with corrections
- It will update the CMS entry automatically

**Problem: Ready to publish but entry is still [DRAFT]**
- That's correct! DRAFT entries don't publish automatically
- Click the Publish button manually in CMS
- This is by design for safety

---

## Support & Help

**Questions?**
- Slack: #docs-issues-internal-discussion
- Email: gladys.daniel@contentstack.com
- Lead: Ask your documentation lead - Gladys/Azhar

**Tools & Resources:**
- Repository: https://github.com/contentstack/contentstack-docs
- GitHub CLI: `gh help`
- Claude Code: `claude --help`

---

**Last Updated:** August 5, 2026  
**Version:** 2.0 (Tech Writer Focused)  
**Official Repository:** https://github.com/contentstack/contentstack-docs  
**DocOps Folder:** `/docops/` in the main repository


