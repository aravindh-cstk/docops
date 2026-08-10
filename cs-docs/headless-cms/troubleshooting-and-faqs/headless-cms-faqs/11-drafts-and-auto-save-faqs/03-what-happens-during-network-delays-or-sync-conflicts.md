---
title: "What Happens During Network Delays or Sync Conflicts?"
description: "What Happens During Network Delays or Sync Conflicts?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/11-drafts-and-auto-save-faqs/03-what-happens-during-network-delays-or-sync-conflicts
doc_type: faq
_cms_section_uid: cs7fbe5fe2b100e15e
_cms_faq_uid: cs2ad717358c3c4244
---

# What Happens During Network Delays or Sync Conflicts?

[Drafts and Auto Save](/docs/headless-cms/about-drafts-and-auto-save) uses a debounce-based mechanism. Changes sync automatically after you pause typing.

If a network delay occurs:

-   The status indicator shows that changes are syncing
-   Editing may pause and become temporarily unavailable, if connectivity is lost

If another user edits the same entry:

-   Fields they are editing become locked for you
-   You can view updates shortly after they are saved
-   You cannot modify a field that is currently locked

**Warning** You cannot edit a field while another user is actively editing it. The field becomes available after the lock is released.
