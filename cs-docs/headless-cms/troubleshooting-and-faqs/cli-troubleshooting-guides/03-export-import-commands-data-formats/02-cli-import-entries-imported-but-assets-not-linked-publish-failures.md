---
title: "CLI Import: Entries Imported but Assets Not Linked (Publish Failures)"
description: "CLI Import: Entries Imported but Assets Not Linked (Publish Failures)"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/02-cli-import-entries-imported-but-assets-not-linked-publish-failures
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs1451dbe9adc8fa06
---

# CLI Import: Entries Imported but Assets Not Linked (Publish Failures)

Entries were imported successfully but failed to publish because linked assets were missing. Errors included:

Entry

publishing failed.

Please

enter valid data. list\_no\_products\_found.

images

.0

.

image

is a required field.

**Root Cause**

The import process included entries but did not include the **backup directory containing assets** (when assets are imported via the module/backup flow). As a result:

-   Entries were imported
-   Asset references existed
-   Actual asset files were not imported
-   Required asset fields failed validation during publish

**Resolution**

1.  Ensure the import directory includes:
    -   Entries
    -   Content types
    -   Assets (backup folder) per import flags (--module, --backup-dir as applicable)
2.  Re-run import including the full backup directory. Prefer long-form flags so behavior matches current CLI help, for example:

csdx

cm

:

stacks

:

import

\--stack-api-key <stack-api-key> --data-dir

"<path-to-export-data>"

\--

module

assets --backup-dir <backup-dir-name>

If a flag name differs on your install, run csdx cm:stacks:import --help and confirm with csdx --version.

1.  Retry publishing entries.

After including assets in the import process:

-   Entries publish successfully
-   Required image fields are populated
-   No publish validation errors occur
