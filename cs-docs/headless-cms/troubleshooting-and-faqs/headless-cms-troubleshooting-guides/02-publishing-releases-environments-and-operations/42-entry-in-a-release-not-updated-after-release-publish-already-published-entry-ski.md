---
title: "Entry in a Release Not Updated After Release Publish - Already Published Entry Skipped"
description: "Entry in a Release Not Updated After Release Publish - Already Published Entry Skipped"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/42-entry-in-a-release-not-updated-after-release-publish-already-published-entry-ski
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs1e6efa699a063ac9
---

# Entry in a Release Not Updated After Release Publish - Already Published Entry Skipped

After publishing a release, one entry does not update its publish status in the target environment, even though all other entries in the release are published correctly.

**Root Cause**

If an entry included in a release is already published at the same version in the target environment, the release publish process skips it because no change is detected. The entry is considered already up to date and is not re-published. This can cause confusion when the intent is to force a re-publish regardless of the current state.

**Resolution**

1.  Check the publish queue in the CMS to confirm the status of the skipped entry and verify the reason it was not updated.
2.  If the entry needs to be re-published regardless, open the entry, make a minor save (even without content changes to create a new version), include the new version in the release, and publish again.
3.  Alternatively, publish the entry directly from the entry editor outside of the release to force a refresh.

After re-publishing the entry (either through the release with a new version or directly), confirm the entry’s publish status in the target environment reflects the latest version.
