---
title: "Copy Content Types and Entries from One Stack to Another Using CLI Export/Import"
description: "Copy Content Types and Entries from One Stack to Another Using CLI Export/Import"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/01-copy-content-types-and-entries-from-one-stack-to-another-using-cli-export-import
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs37e3d5cfc818fb32
---

# Copy Content Types and Entries from One Stack to Another Using CLI Export/Import

The customer needed to copy content types and entry content from one stack to another and asked for the recommended approach to migrate content between stacks.

**Root Cause**

The supported approach is **CLI stack-to-stack migration**: export content from the **source** stack, then import it into the **target** stack. The customer needed confirmation of that pattern and a pointer to the canonical procedure rather than ad-hoc duplication of steps in the ticket.

**Resolution**

-   Explain at a high level that migration is handled with the **Contentstack CLI export → import** flow (with audit called out in the doc where relevant).
-   Redirect the customer to the [Migrate content between stacks using the CLI](/docs/headless-cms/migrate-content-between-stacks-using-the-cli) documentation for prerequisites, exact commands, and FAQs.

The target stack shows the expected **content types** and **entries**, and the customer confirms the migration matches what the guide describes for their scenario.
