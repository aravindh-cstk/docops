---
title: "Automation Step Limit Reached When Building Large Workflows"
description: "Automation Step Limit Reached When Building Large Workflows"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/05-architecture-recipes-supported-workflows/06-automation-step-limit-reached-when-building-large-workflows
doc_type: faq
_cms_section_uid: cs851bc67aab8774ee
_cms_faq_uid: cs18ddec3a36fa0731
---

# Automation Step Limit Reached When Building Large Workflows

A workflow that needs many steps, for example, 28–50 steps to handle onboarding across multiple entry types, hits Agent OS’s step limit before the full workflow can be built, or the customer needs guidance on splitting the work.

**Root Cause**

Agent OS enforces a step limit per automation. Support can raise this limit up to 15 steps without engineering approval; anything beyond 15 steps requires engineering sign-off.

**Resolution**

1.  If your automation needs more than the default number of steps, contact Contentstack Support with your use case and request a step limit increase.
2.  Support can approve an increase up to 15 steps directly. If you need more than 15, be prepared for the request to be routed to engineering for approval.
3.  Before requesting a large increase, review whether the workflow can be restructured using sub automations, which let you split a large process into smaller automations that call each other rather than building one very long automation.
4.  One customer raised whether consolidating into a single **Repeat Path** per entry type could reduce total step count (e.g., from 42 to 28) for an equivalent outcome, this was not independently confirmed by Contentstack, so treat it as untested and validate the step count change on a copy of the automation before relying on it.

The automation either fits within the approved step limit or has been split into sub-automations that together cover the same workflow without exceeding platform limits.
