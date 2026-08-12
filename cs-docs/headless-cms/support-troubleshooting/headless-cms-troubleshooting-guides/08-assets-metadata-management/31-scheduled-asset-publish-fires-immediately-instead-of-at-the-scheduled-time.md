---
title: "Scheduled Asset Publish Fires Immediately Instead of at the Scheduled Time"
description: "Scheduled Asset Publish Fires Immediately Instead of at the Scheduled Time"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/31-scheduled-asset-publish-fires-immediately-instead-of-at-the-scheduled-time
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs949d06dc9fb3cab1
---

# Scheduled Asset Publish Fires Immediately Instead of at the Scheduled Time

When scheduling an asset to be published or replaced at a specific date and time, the asset publishes immediately rather than waiting for the scheduled time.

**Root Cause**

Asset scheduling for publish and unpublish actions operates differently from entry scheduling. The immediate trigger behavior occurs when the asset publish action is initiated without the scheduling parameters being correctly configured or when the scheduling feature is not fully supported for the specific asset operation being performed.

**Resolution**

1.  Verify that the scheduling parameters (scheduled\_at date/time and timezone) are correctly set in the publish request.
2.  Confirm the scheduled publish is configured through the correct UI flow: navigate to the asset, use the Publish option, and select the Schedule option with the target date and time.
3.  If the issue persists, contact Contentstack Support with the asset UID, the scheduled time, and the actual publish time to assist in diagnosing the scheduling behavior.

After confirming the scheduling configuration, verify that the asset does not appear in the target environment until the scheduled time has passed.
