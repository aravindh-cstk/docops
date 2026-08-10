---
title: "Bulk Re-Publishing Already-Published Entries via CLI"
description: "Bulk Re-Publishing Already-Published Entries via CLI"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/16-bulk-re-publishing-already-published-entries-via-cli
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs9cbc4c1817414c62
---

# Bulk Re-Publishing Already-Published Entries via CLI

It was unclear whether already-published entries for a content type could be bulk re-published on a given branch using the CLI, or whether SDK usage was required.

**Root Cause**

This is supported by the CLI today. The @contentstack/cli-bulk-operations plugin provides csdx cm:stacks:bulk-entries, installed separately from the base CLI. Its --operation publish path fetches matched entries and, when no --filter flag narrows the set (to draft, modified, unpublished, or non-localized entries), publishes every matched entry regardless of whether it was already published - which is exactly a bulk re-publish. A --branch flag (default main) scopes the operation directly.

**Resolution**

1.  Install the plugin: csdx plugins:install @contentstack/cli-bulk-operations.
2.  Verify: csdx cm:stacks:bulk-entries --help.
3.  Run: csdx cm:stacks:bulk-entries --operation publish --content-types <content\_type\_uid> --environments <environment\_name> --locales <locale\_code> --branch main -k <stack\_api\_key>.
4.  Confirm when prompted; the command lists matched entries before publishing.
5.  Review the summary output and log file (under the bulk-operation directory by default, or --bulk-operation-file) for failures.
6.  Retry only failed entries: csdx cm:stacks:bulk-entries --retry-failed ./bulk-operation.

If custom logic beyond these flags is needed, a Management SDK script (query entries, fetch publish details, re-publish) remains a valid alternative.
