---
title: "Moving Deeply Referenced Entries Between Stacks (Multi-Level References)"
description: "Moving Deeply Referenced Entries Between Stacks (Multi-Level References)"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/03-moving-deeply-referenced-entries-between-stacks-multi-level-references
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csf223dcf2b9340dd1
---

# Moving Deeply Referenced Entries Between Stacks (Multi-Level References)

The customer needed to migrate entries with three-level nested references (e.g., Questionnaire → Question Bundle → Question) from one stack to another.

**Root Cause**

Stack-to-stack moves with **deep reference graphs** usually require **ordered export/import** (parents before children) and/or multiple passes; the CLI does not offer a single “migrate entire nested graph with one flag” for arbitrary models. **Roadmap statements belong in product documentation**, not as a fixed KB claim—point customers to current docs or PM for feature status.

**Resolution**

1.  Set expectations: plan dependency order and validation, not one-click full automation for arbitrary depths.
2.  Manually export:
    -   Referenced content types
    -   All referenced entries
3.  Import them into the target stack in correct dependency order.
4.  Revalidate reference relationships after import.

Referenced entries must be manually validated in the target stack to ensure:

-   All referenced entries exist
-   Reference fields are correctly populated
-   No broken relationships remain
