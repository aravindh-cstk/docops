---
title: "Authoring Conventions"
description: "Conventions for writing a skill's SKILL.md beyond its required structure and security rules."
url: /developers/skills-authoring-conventions
uid: blta8e348f88c284bce
---

# Authoring Conventions

## Authoring Conventions

Following these conventions when you write or edit a skill's SKILL.md keeps its routing trigger accurate, its security posture explicit, and its guidance directly actionable. For the section-by-section format every skill follows, see [Skill Anatomy](/docs/developers/skills-skill-anatomy). For the safety rules every skill must satisfy, see [Agent Skills Security Model](/docs/developers/skills-security-model).

## Keep "When to Use" aligned with the router

**If "When to Use" drifts from the skill's row in [skills/CLAUDE.md](https://github.com/contentstack/contentstack-agent-skills/blob/main/skills/CLAUDE.md), the router activates the wrong skill for a request.** Phrase "When to Use" as the exact user intents that should trigger the skill, and mirror that same phrasing in its routing row to keep the two aligned. See [The Router](/docs/developers/skills-router) for how the routing table is structured.

## Add a skill-specific Security section

**Relying only on the product-level defaults in [Agent Skills Security Model](/docs/developers/skills-security-model) misses risks specific to what this particular skill does.** Give every skill its own Security section that restates the same four pillars (defaults, destructive actions, secrets, environment variables) and adds whatever is unique to this skill on top of them. For example, a skill that touches deployment credentials should name that risk explicitly rather than leaving it to the product default.

## Default new skills to advisory and read-only

**A skill that mutates state without asking first can cause damage before anyone notices.** Default a new skill to advisory and read-only unless it genuinely needs to perform an external action. If it does need to act, gate every destructive or production-facing step behind explicit confirmation, and prefer a dry-run default.

## Use references for volatile details

**API details like exact parameter names, endpoint shapes, and response fields change over time, and a body that hardcodes them goes stale without anyone noticing.** Ship a references/ file for that kind of detail and have the skill read it on demand instead. Mark anything in the reference that should be verified against live docs, so staleness is visible instead of silent.

## Write directly and practically

**A reader who wants an answer has to wade through theory to find it if the recommendation comes last.** Lead with the recommendation, and explain a tradeoff only when it changes the decision the reader has to make.

**Additional Resource:** Refer to the [Add or Edit a Skill](/docs/developers/skills-add-or-edit-a-skill) documentation for the mechanical steps to ship a change.
