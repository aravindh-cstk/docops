---
title: "Anatomy of Skills"
description: "Learn the anatomy of a Contentstack Agent Skill, frontmatter, instructions, and references, the structure every SKILL.md follows for reliable AI guidance."
url: /developers/skills-skill-anatomy
uid: blt1dcf19eac1d4afd4
---

# Anatomy of Skills

## Anatomy of Skills

Use this guide to learn the required structure of a SKILL.md file before you author or review a skill. It covers the frontmatter keys, the standard body sections, and the two instruction styles skills use, so agents can parse skills reliably and authors can write new ones predictably.

## Frontmatter

YAML at the top of the file configures how the skill is loaded:

```
---
name: dx-delivery-sdk
description: "Help agents write correct, type-safe TypeScript using @contentstack/delivery-sdk…"
allowed-tools: Read Grep Glob
---
```

Common keys:

| Key | Purpose |
| --- | --- |
| name | The skill's display name / identifier. |
| description | One-paragraph summary used for routing and discovery. |
| allowed-tools | Restricts which tools the agent may use (most advisory skills are Read Grep Glob: read-only). |
| argument-hint | Hints expected arguments for action skills (e.g. \[project\_uid\] \[environment\_uid\]). |
| disable-model-invocation | Marks a skill that should only run when explicitly invoked, not auto-routed (used by the Launch action skills). |
| context / agent | Execution hints (e.g. context: fork, agent: general-purpose or agent: plan). |

When Codex generates the skill, it strips the frontmatter, converting the body into instructions.

## Body sections

The Markdown body follows a repeatable outline. Not every skill uses every section, but most include:

| Section | What it captures |
| --- | --- |
| **Description** | What the skill does. |
| **When to Use** | The routing trigger: the user intents that should activate it. |
| **User Problem** | The underlying need the skill addresses. |
| **Success Criteria** | What a correct answer looks like. |
| **Expected Inputs** | What the agent should gather (for example, UIDs, locale, or framework). |
| **Expected Outputs** | The deliverables (code, recommendations, checklists). |
| **Example User Requests** | Representative prompts the skill handles. |
| **Workflow Summary** | The step-by-step approach. |
| **Instructions** | The detailed rules and decision logic: the core of the skill. |
| **Output Format** | How answers should be shaped. |
| **Tooling Notes** | Which tools/SDKs to prefer. Covers read-only vs action behavior. |
| **Security** | Defaults, destructive-action gating, secret handling, env vars. |
| **Product Context** | The product area and its shared safety rules. |
| **References** | Bundled references/ files to read on demand. |
| **Examples** | Few-shot user/assistant pairs that calibrate behavior. |

## Instructions: two styles

The **Instructions** section appears in two forms across the bundle:

-   **Prose with subheadings**: narrative rules grouped under headings (e.g. Delivery SDK, Webhooks).
-   **Structured JSON blocks**: an array of { "heading", "content" } objects (e.g. Assets, Branches & Aliases, Environments & Publishing, Localization). These render as individual rule blocks.

Both are valid. They encode the same kind of guidance.

## References

When a skill needs authoritative detail beyond the body, it ships references/ files and points to them:

```
### [Delivery SDK Spec](references/delivery-sdk-spec.md) (product doc, required)
- Source: Official Docs (…)
- Summary: …
- Read: references/delivery-sdk-spec.md
```

The agent reads these **on demand**, only when the task actually needs them.

## Examples (few-shot)

Many skills end with worked **User/Assistant** pairs, often tagged few-shot or edge case. These are sample exchanges that set the expected tone, format, and safety behavior. For instance, how to refuse hardcoding a token or how to gate a destructive action.

## Why the consistency matters

A predictable structure means:

-   Agents can find the routing trigger, the rules, and the security and safety rules in the same place every time.
-   Documentation pages correspond directly to skill sections, so the system can generate the [skills reference](https://www.contentstack.com/docs/developers/skills-reference) directly from source.
-   Authors have a template to follow.
