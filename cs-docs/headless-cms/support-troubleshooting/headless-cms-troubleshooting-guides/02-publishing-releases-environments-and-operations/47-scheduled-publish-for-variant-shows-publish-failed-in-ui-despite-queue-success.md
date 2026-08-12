---
title: "Scheduled Publish for Variant Shows ‘Publish Failed’ in UI Despite Queue Success"
description: "Scheduled Publish for Variant Shows ‘Publish Failed’ in UI Despite Queue Success"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/47-scheduled-publish-for-variant-shows-publish-failed-in-ui-despite-queue-success
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs2f4df2bf7f6cfef6
---

# Scheduled Publish for Variant Shows ‘Publish Failed’ in UI Despite Queue Success

A scheduled publish job for a variant entry shows as completed in the Publish Queue, but the entry UI shows ‘publish failed’. The content appears correctly on the live environment.

**Root Cause**

This is a status synchronization issue. The Publish Queue correctly tracks the job lifecycle, but the entry-level variant publish status display has a UI-side lag - it does not correctly receive the completed status update. The actual publish succeeded.

**Resolution**

1.  Verify the actual publish outcome by querying the CDA for the variant - if the correct content is served, the publish was successful.
2.  Contact Contentstack Support with the variant entry UID, scheduled job ID, and stack details for investigation.

After the platform fix, schedule a test variant publish and confirm the UI status badge correctly reflects the queue’s completed state.
