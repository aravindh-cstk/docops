---
title: "Entry Version Numbers Mismatch After Stack Clone via Import/Export"
description: "Entry Version Numbers Mismatch After Stack Clone via Import/Export"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/02-entry-version-numbers-mismatch-after-stack-clone-via-import-export
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs68ddd9a4f0d1ccbc
---

# Entry Version Numbers Mismatch After Stack Clone via Import/Export

After cloning a stack using CLI export/import, the customer observed that entry version numbers in the cloned stack did not match those in the original stack.

**Root Cause**

**Export/import recreates content** in the target stack; internal identifiers and version counters **often differ** from the source. That is expected when treating export/import as a **copy** workflow, not a byte-for-byte clone of all platform metadata.

**Resolution**

1.  Clarify that:
    -   export import recreates entries
    -   Original entry version history / sequencing is **not guaranteed** to match
2.  When stack-level cloning with richer parity is required, recommend **csdx cm:stacks:clone** (and validate the outcome in a non-production stack first).
3.  Do **not** promise identical version numbers unless verified for that customer’s workflow and CLI version.
