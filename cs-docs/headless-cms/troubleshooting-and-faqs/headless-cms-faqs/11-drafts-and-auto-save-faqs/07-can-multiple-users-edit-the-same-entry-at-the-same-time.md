---
title: "Can Multiple Users Edit the Same Entry at the Same Time?"
description: "Can Multiple Users Edit the Same Entry at the Same Time?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/11-drafts-and-auto-save-faqs/07-can-multiple-users-edit-the-same-entry-at-the-same-time
doc_type: faq
_cms_section_uid: cs7fbe5fe2b100e15e
_cms_faq_uid: csc68bd06137e54736
---

# Can Multiple Users Edit the Same Entry at the Same Time?

Yes, with field-level locking.

-   Each field locks individually when edited
-   Other users can edit different unlocked fields
-   Structural actions in container fields may be restricted if nested fields are locked

This allows collaboration while preventing direct editing conflicts.
