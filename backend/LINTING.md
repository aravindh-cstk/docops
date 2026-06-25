---
url: /developers/documentation/docs-linting-guide
marker: "Documentation"
heading: "Docs Linting Guide"
---

# Docs Linting Guide

The docs linter runs automatically on every pull request that touches a file under `docs/`. It checks your Markdown files for structural problems and style violations before the changes can be merged. This guide explains what the linter checks, what each error means, and how to fix it.

## How the linter runs

When you open a pull request, the **Docs Lint** GitHub Actions workflow:

1. Identifies every `.md` file you changed compared to `main`.
2. Runs structural checks (frontmatter, links, images).
3. Runs style checks based on the Contentstack writing style guide.
4. Blocks the merge if any errors are found.

You can also run the linter locally before pushing:

```bash
cd tools/cs-sync
npm run lint -- --base origin/main
```

<p class="tip"><strong>Tip</strong>: Run the linter locally before opening a PR to catch and fix errors without waiting for CI.</p>

---

## Understanding error messages

Every error follows this format:

```
You have <description> on line <N>. Resolve it and try merging again.
```

When the error involves a configurable list (for example, banned phrases or vague adverbs), the message also tells you which file to edit:

```
You have a vague adverb "quickly" on line 19. Resolve it and try merging again.
To update the restricted adverbs list, edit tools/cs-sync/src/restricted/vague-adverbs.md.
```

---

## Structural checks

Structural checks run first. A file must pass all of them before style checks are evaluated.

### Frontmatter

Every `.md` file must start with a valid YAML frontmatter block. The block must be the first thing in the file, delimited by `---` lines.

**Required fields:**

| Field | Description | Example |
|-------|-------------|---------|
| `url` | Canonical path, starting with `/developers/` | `/developers/branches/about-branches` |
| `marker` | Bracket prefix for the CMS title | `Branches` |
| `heading` | Article section heading | `About Branches` |

**Example of a valid frontmatter block:**

```yaml
---
url: /developers/branches/about-branches
marker: "Branches"
heading: "About Branches"
---
```

<p class="note"><strong>Note</strong>: The <code>url</code> field must use hyphens, not underscores, and must be lowercase throughout.</p>

### Duplicate URL

No two files can share the same `url` value. If the linter flags this, search the `docs/` folder for the conflicting URL and assign a unique path to one of the files.

### Broken internal links

Every local link (`[text](path/to/file.md)`) is checked against the file system. If the target file does not exist, the link is flagged.

**Fix:** If you renamed or moved a file, update every link that points to its old path.

### Missing local images

Every local image reference (for example `![alt](./images/screenshot.png)`) is checked for the actual file on disk.

**Fix:** Make sure the image file is committed and its path matches the reference exactly.

### Missing `.md` extension

Files under `docs/` without a `.md` extension are flagged. The sync pipeline only processes `.md` files.

**Fix:** Rename the file to add the `.md` extension.

---

## Style checks

Style checks enforce the Contentstack writing style guide. The sections below describe each check, show examples of what triggers it, and explain how to fix it.

### Punctuation rules

#### Em dash (—)

Em dashes are not permitted in documentation.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `The feature—introduced last quarter—is now available.` | `The feature, introduced last quarter, is now available.` |

#### En dash (–)

En dashes are not permitted. Use a hyphen for ranges.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `Steps 1–3` | `Steps 1-3` |

#### Semicolons (;)

Semicolons are not permitted in documentation.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `Click Save; the entry is updated.` | `Click Save. The entry is updated.` |

#### Double spaces

Two or more consecutive spaces are not allowed anywhere in the body text.

**Fix:** Find and replace two spaces with one. Most editors support this under Find & Replace.

#### Missing Oxford comma

Every list of three or more items must include a comma before the final "and" or "or".

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `You can create, update and delete entries.` | `You can create, update, and delete entries.` |

#### "i.e." without a comma

A comma must follow `i.e.` immediately.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `i.e. the entry is saved` | `i.e., the entry is saved` |

**Alternative:** Replace with "that is" for better readability in running text.

#### "e.g." without a comma

A comma must follow `e.g.` immediately.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `e.g. GitHub or GitLab` | `e.g., GitHub or GitLab` |

**Alternative:** Replace with "for example".

---

### Spelling and terminology

The following terms must be spelled exactly as shown.

| ❌ Wrong | ✅ Correct |
|---------|----------|
| `e-mail` | `email` |
| `plug-in` | `plugin` |
| `CMSes` | `CMSs` |
| `front-end` | `frontend` |
| `back-end` | `backend` |
| `Internet` (lowercase in prose) | `internet` |
| `Web` (lowercase in prose) | `web` |

**Exceptions:** "Internet of Things (IoT)" and compound proper nouns like "Web API" or "WebSocket" are allowed.

---

### Voice and tone

#### "please" in instructions

Do not use "please" in technical instructions. It softens the instruction without adding clarity.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `Please click the Save button.` | `Click the Save button.` |

#### Future tense

Documentation must use present tense. Future tense (words like `will`, `shall`, `is going to`) suggests actions are conditional or deferred.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `The system will display a confirmation.` | `The system displays a confirmation.` |
| `This will allow you to configure the stack.` | `This allows you to configure the stack.` |
| `The page will redirect to the dashboard.` | `The page redirects to the dashboard.` |

The full list of flagged future-tense words and phrases is in `tools/cs-sync/src/restricted/future-tense-words.md`. To add a phrase, open that file and add a new bullet:

```
- will send notifications
```

#### Gendered pronouns

Do not use `his`, `her`, `he`, or `she` when referring to a generic user. Use singular `they/their/them`.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `The user must verify his email address.` | `The user must verify their email address.` |

#### "on the left/right navigation panel"

Use `in the` when referring to the navigation panel, not `on the`.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `Click on the left navigation panel.` | `Click in the left navigation panel.` |

#### ALL CAPS

Do not use ALL CAPS for emphasis. Use **bold** instead.

Known acronyms (API, CMS, JSON, HTML, and many others) are automatically allowed. If the linter flags a legitimate acronym that is not yet on the list, add it to the allowlist:

1. Open `tools/cs-sync/src/style-lint.config.json`.
2. Add the term as a string in the `allowedAcronyms` array.
3. Commit the change.

#### Rhetorical questions

Do not use rhetorical questions in body prose. Replace them with direct statements.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `Why would you use a webhook?` | `Webhooks let you trigger external services when an entry is published.` |

---

### Banned and AI-generated phrases

The linter flags phrases that are typical of AI-generated text, corporate jargon, or marketing language. These make documentation sound vague and untrustworthy.

Common examples:

| Flagged phrase | What to write instead |
|---------------|-----------------------|
| `effortlessly` | Describe the actual behavior |
| `seamlessly` | Describe the actual behavior |
| `leverage` | Use "use" |
| `utilize` | Use "use" |
| `robust platform` | Remove or be specific |
| `powerful capabilities` | Remove or be specific |
| `cutting-edge` | Remove |
| `synergy` / `synergize` | Remove |
| `delve into` | Use "explore" or "read" |
| `dive deep` | Use "review" or "examine" |
| `in order to` | Use "to" |
| `it goes without saying` | Remove entirely |
| `double down` | Use "focus on" or "continue" |
| `out of the box` | Use "by default" |
| `move the needle` | Be specific |

The full list is in `tools/cs-sync/src/style-lint.config.json` under `bannedPhrases`. To add a phrase:

1. Open `tools/cs-sync/src/style-lint.config.json`.
2. Add the phrase as a string in the `bannedPhrases` array.
3. Commit the change.

---

### Vague adverbs

Adverbs like "quickly", "easily", "simply", and "just" are too imprecise for technical documentation. They over-promise without explaining the actual experience.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `You can easily configure the webhook.` | `To configure the webhook, go to **Settings > Webhooks** and enter the endpoint URL.` |
| `The sync runs quickly.` | `The sync completes within 30 seconds.` |

The full restricted list is in `tools/cs-sync/src/restricted/vague-adverbs.md`. To add a word:

1. Open `tools/cs-sync/src/restricted/vague-adverbs.md`.
2. Add a new bullet: `- yourword`
3. Commit the change. No code change is needed.

---

### Symbols in prose

#### "+" symbol

Do not use `+` to mean "and" or "more than" in prose.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `supports JavaScript + TypeScript` | `supports JavaScript and TypeScript` |

#### "Nx" for "times"

Do not write multipliers like `3X` or `10x` in prose.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `the response is 3X faster` | `the response is three times faster` |

#### "etc."

Avoid `etc.` in formal documentation. Either list all relevant items, or use "and so on" sparingly.

#### "three dots"

Use "horizontal ellipsis" or "vertical ellipsis" — not "three dots".

---

### Headings

#### H1 and H2 — Title Case

The first and last words are always capitalised. Most other words are capitalised except short articles (a, an, the), short prepositions (in, on, at, to), and short conjunctions (and, or, but, for, yet, so).

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `## Creating a new entry in the CMS` | `## Creating a New Entry in the CMS` |
| `## how to use the API` | `## How to Use the API` |

#### H3 and below — Sentence case

Only the first word and proper nouns are capitalised.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `### Using The Stack API` | `### Using the stack API` |
| `### Before You Begin` | `### Before you begin` |

#### Heading length

Headings must be 60 characters or fewer. Shorten long headings by removing filler words.

#### Vague heading openers

Headings starting with "Understanding", "Guide to", "Overview of", or "Introduction to" are flagged.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `## Understanding Webhooks` | `## Webhooks` |
| `## Introduction to the CLI` | `## CLI Overview` or `## Get Started with the CLI` |

---

### Lists

#### Inconsistent punctuation

All items in a list must follow the same rule:

- If **any** item is a complete sentence, **all** items must end with a period.
- If all items are short phrases or fragments, **none** should end with a period.

<p class="warning"><strong>Warning</strong>: Never mix sentence fragments and complete sentences in the same list.</p>

❌ Inconsistent:

```
- Click Save.
- Navigate to Settings
- Select your environment.
```

✅ Consistent (all complete sentences):

```
- Click Save.
- Navigate to Settings.
- Select your environment.
```

✅ Consistent (all fragments):

```
- Entry title
- Entry URL
- Publish date
```

---

### Links

#### Naked URLs

Do not paste raw URLs directly into prose. Wrap them in a markdown link with descriptive text.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `Visit https://www.contentstack.com/docs for more.` | `Visit the [Contentstack documentation](https://www.contentstack.com/docs) for more.` |

#### Generic link text

Do not use "click here", "learn more", "read this", "here", or "read more" as link text.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `[Click here](https://example.com) to view the API reference.` | `View the [API reference](https://example.com).` |

#### Duplicate hyperlinks in a section

Within each `##` section, only hyperlink the first occurrence of a term. Repeated links to the same destination in the same section are flagged.

**Fix:** Remove the hyperlink from the second and subsequent mentions, leaving the text as plain text.

---

### Images

#### Empty alt text

Every image must have a non-empty alt attribute.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `![](./images/screenshot.png)` | `![The entry editor showing the Publish button](./images/screenshot.png)` |

#### Generic alt text or filenames

Alt text or filenames like "image", "screenshot", "img1", or "untitled" are too generic.

**Filename convention:** `doc-name_section-heading_action.png`

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `screenshot.png` | `entries_create-entry_publish-button.png` |

#### Non-PNG screenshots

Screenshots must be saved as `.png`.

| ❌ Flagged extensions | ✅ Correct |
|---------------------|----------|
| `.jpg`, `.jpeg`, `.svg`, `.webp`, `.bmp` | `.png` |

---

### Info panels

#### Invalid class names

Info panel HTML blocks must use only these classes: `note`, `tip`, `add-resource`, `warning`.

| ❌ Incorrect | ✅ Correct |
|------------|----------|
| `<p class="information">...</p>` | `<p class="note"><strong>Note</strong>: ...</p>` |

#### Consecutive info panels

Do not stack two or more info panels back-to-back without any body content between them.

**Fix:** Add at least one sentence of body text between panels, or merge them into a single panel.

---

### Sentence length

Sentences longer than 40 words are flagged. The style guide recommends 15–20 words per sentence.

**Fix:** Split the sentence into two or three shorter, focused sentences.

❌ Too long:

> When you create an entry using the entry editor, you can add content across multiple fields such as text, images, and references, and then save the entry as a draft before publishing it to one or more environments.

✅ Split:

> When you create an entry, you can add content across multiple fields: text, images, and references. Save the entry as a draft before publishing. You can publish to one or more environments.

---

## Updating configurable lists

Several checks use lists maintained as plain files so writers and tech leads can extend them without touching code.

| What to update | File to edit |
|----------------|-------------|
| Add an allowed acronym | `tools/cs-sync/src/style-lint.config.json` → `allowedAcronyms` array |
| Add or remove a banned phrase | `tools/cs-sync/src/style-lint.config.json` → `bannedPhrases` array |
| Add or remove a vague adverb | `tools/cs-sync/src/restricted/vague-adverbs.md` → `- word` bullet |
| Add or remove a future tense phrase | `tools/cs-sync/src/restricted/future-tense-words.md` → `- phrase` bullet |

After editing any of these files, commit the change. The linter reads them at runtime — no deployment is needed.

---

## Pre-PR checklist

Before opening a pull request, go through this checklist to catch the most common errors manually.

- [ ] Frontmatter block is present, complete, and uses a unique `url`
- [ ] All internal links point to files that exist
- [ ] All local images are committed and paths are correct
- [ ] No em dashes (—), en dashes (–), or semicolons (;) in prose
- [ ] Oxford comma is present in all lists of three or more items
- [ ] "e.g." and "i.e." are each followed by a comma
- [ ] No "please", "will", or "shall" in instructions
- [ ] No vague adverbs (easily, quickly, simply, just, etc.)
- [ ] H1/H2 headings are Title Case; H3 and below are Sentence case
- [ ] All list items are consistently punctuated (all periods, or none)
- [ ] All links have descriptive text — no "click here" or "learn more"
- [ ] All images have meaningful alt text and `.png` extensions
- [ ] No raw URLs pasted directly into prose
- [ ] No AI-flavored phrases (effortlessly, leverage, robust, cutting-edge, etc.)
