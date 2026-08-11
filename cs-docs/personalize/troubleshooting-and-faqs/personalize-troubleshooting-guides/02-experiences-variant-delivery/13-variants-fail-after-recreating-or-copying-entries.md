---
title: "Variants Fail After Recreating or Copying Entries"
description: "Variants Fail After Recreating or Copying Entries"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/13-variants-fail-after-recreating-or-copying-entries
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs4379a389429074cf
---

# Variants Fail After Recreating or Copying Entries

Personalization stops working after a user deletes and re-adds variants in a project, or after copying and pasting entries that contain variant references. Errors such as "The Variant 'cs01f9918869240cb0' does not belong to the Content Type 'multi\_teaser'" appear, or the Delivery API returns null for assets or embedded data that render correctly in Live Preview.

**Root Cause**

When variants are deleted and recreated, the platform generates new variant UIDs. Existing entries may still reference the old, now-invalid variant IDs — causing a mismatch that blocks personalization. Similarly, when entries are copied, variant references embedded in the copied content may point to UIDs that are no longer valid in the current project context, resulting in null responses from the Delivery API.

**Resolution**

1.  Identify the affected entry in the Contentstack CMS. Navigate to the entry's variant field and remove the current variant selection — this clears the stale reference.
2.  Re-select the correct variants from the updated list. The new variant UIDs will be written to the entry, replacing the stale references.
3.  Save and publish the entry, then verify that personalization is applied correctly.
4.  If the error persists after re-selecting variants, check the content type's Variant field configuration. If the field still references deleted variant groups, reconfigure it to point to the current variant group.
5.  As a last resort, create a new entry from scratch to ensure a clean variant mapping with no legacy references.
6.  For copy/paste errors where the Delivery API returns null for assets or embedded data: share comparative API responses (with and without the Personalize variant header), the Entry UID, Content Type UID, Variant UID, locale, environment, and asset publication status with Contentstack Support for further investigation.

If none of the above steps resolve the issue, open a support case. Provide the Project UID, Experience UID, Content Type UID, the exact error message, and — for copy/paste cases — redacted JSON responses showing the null values.
