---
title: "Global Fields Import Fails: No Global Fields Found"
description: "Global Fields Import Fails: No Global Fields Found"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/03-global-fields-import-fails-no-global-fields-found
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: csc70032a3f5e03396
---

# Global Fields Import Fails: No Global Fields Found

Customer attempted to import global fields using:

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

global

\-fields

Received error indicating no global fields were found.

**Root Cause**

The specified directory did not contain any global field definitions to import.

**Resolution**

1.  Verify directory structure.
2.  Confirm global-fields folder exists in export.
3.  Validate JSON files are present in target directory.
4.  Retry import.

No logs were received after follow-up.

Directory must contain valid global field definitions for import to succeed.
