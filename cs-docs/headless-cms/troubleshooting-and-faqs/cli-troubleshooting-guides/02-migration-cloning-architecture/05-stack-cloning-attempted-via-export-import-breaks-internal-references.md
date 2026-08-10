---
title: "Stack Cloning Attempted via Export/Import Breaks Internal References"
description: "Stack Cloning Attempted via Export/Import Breaks Internal References"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/05-stack-cloning-attempted-via-export-import-breaks-internal-references
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csbd6e2151dbae1069
---

# Stack Cloning Attempted via Export/Import Breaks Internal References

Users attempted stack cloning using export/import, but internal references did not function correctly afterward. They also asked whether stack cloning is possible via the Content Management API (CMA).

**Root Cause**

Export/import **may not preserve every reference and linking edge case** the way a dedicated clone workflow does; outcomes depend on modules imported and order. **CMA does not expose a single “clone entire stack” API** comparable to cm:stacks:clone—practical stack copies are usually CLI export/import, clone, or custom automation.

**Resolution**

1.  Clarify that one-shot “clone stack” via CMA alone is not the standard pattern.
2.  Recommend **csdx cm:stacks:clone** when full stack replication is the goal; validate references after any path.
