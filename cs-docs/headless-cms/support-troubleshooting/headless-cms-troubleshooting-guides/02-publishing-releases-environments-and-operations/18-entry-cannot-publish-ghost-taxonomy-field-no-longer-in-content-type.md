---
title: "Entry Cannot Publish - Ghost Taxonomy Field No Longer in Content Type"
description: "Entry Cannot Publish - Ghost Taxonomy Field No Longer in Content Type"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/18-entry-cannot-publish-ghost-taxonomy-field-no-longer-in-content-type
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csfaa09fa7b94c3520
---

# Entry Cannot Publish - Ghost Taxonomy Field No Longer in Content Type

An entry fails to publish with a ‘missing required field’ error referencing a taxonomy field. However, inspection of the content type shows the taxonomy field no longer exists - it was removed previously. The entry appears to still expect the deleted field.

**Root Cause**

When a field is removed from a content type, the change is applied to the schema but not retroactively cleaned from existing entry data. If the field was marked as required at the time of its removal, or if the entry’s data structure was not refreshed after the content type change, the entry may still carry a reference to the deleted field in its internal metadata, causing publish validation to fail.

**Resolution**

1.  Open the affected entry in the CMS editor.
2.  Perform a save without content changes. This triggers a schema revalidation and clears stale field references from the entry’s internal structure.
3.  Attempt to publish again. If the error persists, export the entry JSON via the CMA and inspect the data for any reference to the deleted field UID.
4.  If a stale field reference is found in the entry JSON, remove it programmatically using the CMA PUT endpoint and re-save.
5.  If the issue affects multiple entries, use a CMA script to identify entries with the ghost field reference and re-save each one.

After re-saving the entry and clearing the stale field reference, confirm the entry publishes without the missing required field error.
