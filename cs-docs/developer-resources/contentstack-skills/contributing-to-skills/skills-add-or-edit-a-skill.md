---
title: "Add or Edit a Skill"
description: "Edit an existing Contentstack Agent Skill or add a new one, then regenerate the Cursor and Codex trees your AI coding tools rely on."
url: /developers/skills-add-or-edit-a-skill
uid: blte2a61c8fcfca88c9
---

# Add or Edit a Skill

## Add or Edit a Skill

Use this guide to edit an existing skill or create a new one, including the build script step that regenerates the derived Cursor and Codex trees. Edit only files under skills/, since CI overwrites and rejects direct edits to cursor/rules/ or codex/.

**Additional Resource:** Refer to the [Architecture](/docs/developers/skills-architecture) documentation for how the generation pipeline works.

## Quick reference

| I want to... | Section |
| --- | --- |
| Change an existing skill | [Edit an existing skill](#edit-an-existing-skill) |
| Create a brand-new skill | [Add a new skill](#add-a-new-skill) |

## Prerequisites

-   **Mandatory:** A local clone of the repository with write access.

## Edit an existing skill

1.  Open skills/<slug>/SKILL.md and make your change.

2.  If you added bundled assets, put them in skills/<slug>/references/ or skills/<slug>/scripts/.

3.  Regenerate the derived trees:

    ```
    bash scripts/build-cursor-rules.sh
    bash scripts/build-codex-skills.sh
    ```

4.  Commit both your skills/ change and the regenerated cursor/rules/ and codex/ output.


## Add a new skill

1.  Create a directory: skills/<new-slug>/.
2.  Add SKILL.md following the structure in the [Anatomy of Skills](/docs/developers/skills-skill-anatomy) documentation and the rules in the [Authoring conventions](/docs/developers/skills-authoring-conventions) documentation.
3.  Add any references/ or scripts/ the skill needs.
4.  Add a routing row to [skills/CLAUDE.md](https://github.com/contentstack/contentstack-agent-skills/blob/main/skills/CLAUDE.md) so the router matches requests to it.
5.  Add an entry to manifest.json with the slug, title, and product.
6.  Regenerate the derived trees (commands above) and commit everything.
7.  Add a documentation page under docs/skills/<new-slug>.md and link it from the skills reference index.

## Choosing a slug

Slugs are stable identifiers used by the skills CLI and the manifest. Follow the existing convention:

-   cms-\* for CMS skills
-   dx-\* for Developer Experience and SDK skills
-   launch-\* for Launch skills
-   A product-name prefix otherwise, for example brand-kit-assistant or developer-hub-app-architect

## What the build scripts do

| Script | Output |
| --- | --- |
| scripts/build-cursor-rules.sh | cursor/rules/00-router.mdc and cursor/rules/NN-<slug>.mdc |
| scripts/build-codex-skills.sh | codex/AGENTS.md and codex/<slug>/SKILL.md (frontmatter stripped), plus copied assets |

Both scripts derive entirely from skills/. Running them again after a successful run produces the same output.

## Troubleshooting

-   **Pull request fails with "Generated trees are out of date":** The committed cursor/rules/ or codex/ tree does not match a fresh build.
    1.  Run bash scripts/build-cursor-rules.sh.
    2.  Run bash scripts/build-codex-skills.sh.
    3.  Commit the result.
