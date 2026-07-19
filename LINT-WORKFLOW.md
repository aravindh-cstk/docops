# Lint Workflow for docops

## Quick Start: Lint Before Pushing

**Always lint your changes locally before pushing or creating a PR.**

### Option 1: Use the helper script (easiest)

```bash
./lint-before-push.sh
```

This script:
- Installs dependencies if needed
- Runs the linter against your changes
- Reports results and tells you if it's safe to push

### Option 2: Manual lint command

```bash
cd tools/cs-sync
npm install
npm run lint -- --base origin/main
```

---

## What Gets Checked

The linter validates all `.md` files you changed compared to `origin/main`:

- **Frontmatter:** Required fields (url, marker, heading), valid format
- **Structure:** Links, images, headings, lists
- **Style:** No em dashes, semicolons, double spaces
- **Tone:** No future tense, vague adverbs, AI-generated phrases
- **Formatting:** Consistent punctuation, Title Case headings, Oxford commas

---

## Fixing Lint Errors

If linting fails, the output tells you:
1. **File path** and **line number**
2. **What's wrong** (e.g., "em dash on line 45")
3. **How to fix it** (e.g., "use comma instead of em dash")

Make the fixes locally, save, and run the linter again until it passes.

---

## Why Lint Locally First?

| Lint Locally First | Lint During PR |
|---|---|
| ✅ Fast feedback | ❌ Slower feedback loop |
| ✅ Clean PR history | ❌ Messy history (lint-fix commits) |
| ✅ Respects reviewers | ❌ Wastes reviewer time |
| ✅ Catches errors early | ❌ Finds issues late |

---

## Common Fixes

### Double spaces
```bash
# Find and replace in your editor or use sed
sed -i '' 's/  / /g' file.md
```

### Em dashes
Replace `—` with `,` (comma)
```markdown
❌ The feature—introduced last quarter—is here.
✅ The feature, introduced last quarter, is here.
```

### Missing periods in lists
All items must consistently end with periods or none should:
```markdown
❌ - Click Save
   - The entry is updated.

✅ - Click Save.
   - The entry is updated.
```

### Heading capitalization
- **H1/H2:** Title Case — capitalize most words
- **H3+:** Sentence case — capitalize first word only

```markdown
❌ ## Creating a new entry
✅ ## Creating a New Entry

❌ ### using the API
✅ ### Using the API
```

---

## Next: Automate with Git Hooks (Optional)

Want to prevent pushing if linting fails?

```bash
# Create .git/hooks/pre-push
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash
./lint-before-push.sh || exit 1
EOF

chmod +x .git/hooks/pre-push
```

Now `git push` will abort if linting fails. ✨

---

## Questions?

- Check [backend/LINTING.md](./backend/LINTING.md) for detailed rules
- Run `npm run lint -- --help` in tools/cs-sync for more options
