---
title: "Deleted or Renamed Global Field Data Persists in Entries - Schema Refresh Required"
description: "Deleted or Renamed Global Field Data Persists in Entries - Schema Refresh Required"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/58-deleted-or-renamed-global-field-data-persists-in-entries-schema-refresh-required
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs09802c5152c028f4
---

# Deleted or Renamed Global Field Data Persists in Entries - Schema Refresh Required

After deleting a field from a global field or renaming it, the old field data continues to appear in existing entries. Alternatively, adding a new global field to a content type fails with a ‘reference doesn’t exist’ error, or the content type cannot be saved after a global field change.

**Root Cause**

When a global field is modified - by deleting a field, renaming a field, or changing referenced content types - the change is not automatically propagated to all content types or entries that reference that global field. The schema reference cache becomes stale. This causes entries to retain old field data and content types to fail validation against the outdated schema.

**Resolution**

1.  Navigate to the affected Global Field in the CMS (Settings > Global Fields).
2.  Open the Global Field and save it - even without making any visible changes. This triggers a schema refresh that propagates the current field structure to all referencing content types.
3.  If a content type shows a ‘reference doesn’t exist’ error, open the Global Field, remove the stale reference, and re-save. Then re-add the Global Field to the content type.
4.  For entries that still show old deleted field data, re-save the affected entries to force schema revalidation.

After re-saving the Global Field and affected entries, confirm the old field data is no longer returned in the API response and the content type saves without reference errors.
