---
title: "Correct Command to Export Global Fields"
description: "Correct Command to Export Global Fields"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/04-correct-command-to-export-global-fields
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: csc3674da3702b72d0
---

# Correct Command to Export Global Fields

Customers required the correct CLI command to export global fields.

**Root Cause**

Incorrect module parameter usage.

**Resolution**

Use:

csdx

cm

:

stacks

:

export

\--stack-api-key <stack-api-key> --data-dir

"path"

\--

module

global

\-fields

Global fields export successfully to the specified directory.
