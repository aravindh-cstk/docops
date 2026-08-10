---
title: "No Support for Custom Filtered Exports via CLI"
description: "No Support for Custom Filtered Exports via CLI"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/15-no-support-for-custom-filtered-exports-via-cli
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: csab8d65d562ef46f9
---

# No Support for Custom Filtered Exports via CLI

A custom filtered view of entries could not be exported directly; only whole content types could be exported.

**Root Cause**

cm:stacks:export and cm:export-to-csv only select which content types to export, not which entries within one. The official Query Export Plugin (@contentstack/cli-cm-export-query) adds csdx cm:stacks:export-query, which exports content types matched by a query along with their dependencies and references. Only content-type-level queries are supported; there is no entry-level filtering within a content type, and asset-folder-level filtering is not supported either - all asset folders are always exported.

**Resolution**

1.  Install the plugin: csdx plugins:install @contentstack/cli-cm-export-query.
2.  Verify: csdx plugins.
3.  Run a query-based export, for example: csdx cm:stacks:export-query -a <alias> --query '{"modules":{"content-types":{"title":{"$in":\["Blog","Author"\]}}}}'. A query can also be stored in a JSON file and passed with --query ./my-query.json.
4.  Use --skip-references or --skip-dependencies to limit automatic dependency/reference export.
5.  For entry-level or folder-level filtering, export fully and filter the result afterward, since neither is supported by the query.
