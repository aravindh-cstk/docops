---
title: "CSV Import for Large Volume Content (CSV Not Natively Supported)"
description: "CSV Import for Large Volume Content (CSV Not Natively Supported)"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/06-csv-import-for-large-volume-content-csv-not-natively-supported
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs8e35893cbb5d0b5a
---

# CSV Import for Large Volume Content (CSV Not Natively Supported)

The customer explored whether they could import a large volume of entries using **CSV files**, beyond Contentstack’s standard **JSON import** capability.

**Root Cause**

Contentstack does not provide a direct “CSV → Entries” native import workflow in the CLI the way **cm:stacks:import** uses exported JSON modules. CSV ingestion requires transformation or external tooling.

**Resolution**

1.  Confirm that native stack import format for cm:stacks:import is the **exported JSON module layout** (supported workflow).
2.  Provide supported alternative approaches for CSV-based datasets:
    -   Convert CSV → JSON, then use CLI import.
    -   Use a custom script to transform CSV rows into entry payloads and push via APIs.
    -   Use third-party integration platforms to orchestrate transformation import.
3.  Recommend against manual entry for large volumes due to scalability and error risk.
