---
title: "Release and Versioning"
description: "How the Contentstack Agent Skills bundle is versioned and released across its five formats."
url: /developers/skills-release-and-versioning
---

# Release and Versioning

## Release and Versioning

Following the version and release conventions here keeps every tool's copy of the bundle consistent, so a tagged release installs the same behavior everywhere. For how an already-released version reaches a user's tool, see [Get Started](/docs/developers/skills-get-started).

## Version source

A skill's version can drift silently between tools if the plugin manifests fall out of sync with each other or with manifest.json. The package version lives in:

-   .claude-plugin/plugin.json
-   .cursor-plugin/plugin.json
-   gemini-extension.json

Keep these in sync whenever you bump a version, and make sure manifest.json's skill\_count and skills list match what is actually in skills/.

## What a release contains

A release is the current state of skills/ plus its regenerated artifacts:

-   skills/: source of truth (skills, router, references, scripts)
-   cursor/rules/: generated Cursor rules
-   codex/: generated Codex tree
-   The plugin and extension manifests, plus manifest.json

Because the generated trees are committed and verified by continuous integration (CI), any tagged commit on main is a coherent, installable release for every tool. See [Architecture](/docs/developers/skills-architecture) for how the generated trees are kept in sync with skills/.

## Release checklist

1.  Make changes under skills/. See [Add or Edit a Skill](/docs/developers/skills-add-or-edit-a-skill) for the SKILL.md edit and rebuild steps.
2.  Regenerate derived trees:
    
    ```
    bash scripts/build-cursor-rules.sh
    bash scripts/build-codex-skills.sh
    ```
    
3.  Update manifest.json if skills were added or removed.
4.  Manifests with a stale version number make tools report the wrong bundle version to their users. Bump the version in the plugin and extension manifests.
5.  A failed drift check means the tagged commit would ship a generated tree that does not match skills/. Confirm CI passes before tagging.
6.  Without a tag, tools and the skills CLI have no fixed point to install from. Tag the release.

## Compatibility

-   Adding a skill is backward compatible. Existing skills and routes are unaffected.
-   Changing a slug is a breaking change for skills CLI users who reference it. Avoid renaming slugs once published.
-   Changing routing triggers can change which skill activates for a given request. Review the router (skills/CLAUDE.md) when editing triggers.

**Additional Resource:** Refer to the [Get Started](/docs/developers/skills-get-started) documentation for how each tool picks up a new release.
