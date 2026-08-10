---
title: "UI JSON Import Creates Only One Entry Even with Multiple Records in the File"
description: "UI JSON Import Creates Only One Entry Even with Multiple Records in the File"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/13-ui-json-import-creates-only-one-entry-even-with-multiple-records-in-the-file
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: csd6061569477036de
---

# UI JSON Import Creates Only One Entry Even with Multiple Records in the File

Importing 500+ entries of the same content type using a single JSON file through the Contentstack UI's entry import option created only one empty entry.

**Root Cause**

This is expected behavior, not a bug. The Contentstack UI entry importer supports only a single entry per JSON file; it isn't designed for bulk multi-record import.

**Resolution**

1.  Use the Content Management API to programmatically create entries in bulk - the preferred approach for scalability.
2.  Alternatively, use the Contentstack CLI, which supports bulk import through a structured export/import format.
