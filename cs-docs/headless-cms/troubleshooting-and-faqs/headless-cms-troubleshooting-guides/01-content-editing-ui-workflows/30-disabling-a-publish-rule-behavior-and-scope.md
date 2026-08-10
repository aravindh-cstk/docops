---
title: "Disabling a Publish Rule - Behavior and Scope"
description: "Disabling a Publish Rule - Behavior and Scope"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/30-disabling-a-publish-rule-behavior-and-scope
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csbb9812843347fccf
---

# Disabling a Publish Rule - Behavior and Scope

An administrator wants to temporarily disable a publish rule without deleting it. They cannot find a disabled toggle - only a delete option is visible. They also need to confirm whether the publish rule applies to all environments or only the specified one.

**Root Cause**

Publish rules in Contentstack do not have a standalone enable/disable toggle separate from deletion. The way to disable a publish rule is to disable the workflow it is associated with. When a workflow is disabled, all publish rules tied to that workflow are also disabled. Additionally, publish rules are scoped per environment: a rule configured for the ‘Live’ environment applies only to that environment, leaving all other environments (such as staging) unaffected.

**Resolution**

1.  To disable a publish rule without deleting it: navigate to Settings > Workflows, open the workflow the publish rule is associated with, and disable the workflow using the toggle. This disables the workflow and all its publish rules.
2.  To re-enable, toggle the workflow back on.
3.  Regarding environment scope: if a publish rule specifies ‘Live’ as the environment, users can still publish to all other environments (staging, dev, etc.) without restriction. The rule only enforces its conditions when publishing to ‘Live’.

After disabling the workflow, confirm that users can publish freely to non-production environments and that the production-environment restrictions no longer apply.
