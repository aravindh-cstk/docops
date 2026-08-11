---
title: "Using Automation Hub to Sync Content Across Different Stacks"
description: "Using Automation Hub to Sync Content Across Different Stacks"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/05-architecture-recipes-supported-workflows/03-using-automation-hub-to-sync-content-across-different-stacks
doc_type: faq
_cms_section_uid: cs851bc67aab8774ee
_cms_faq_uid: csd9ab87425e240626
---

# Using Automation Hub to Sync Content Across Different Stacks

Customer attempts to use Automation Hub to synchronize entries between two different stacks and observes that content does not copy or update as expected.

**Root Cause** Automation Hub supports workflows within the same stack context (including branches), but cross-stack content sync is not supported.

**Resolution**

1.  Confirm whether source and target are different stacks.
2.  For cross-stack sync:

-   Use Contentstack CLI export/import
-   Consider stack cloning where applicable

4.  If partial automation is desired, use external middleware to orchestrate cross-stack CMA calls.

Content sync is achieved using CLI-based export/import or approved migration approach.
