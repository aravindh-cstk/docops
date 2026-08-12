---
title: "Restricted Content Type Still Appears When Creating New Entries"
description: "Restricted Content Type Still Appears When Creating New Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/26-restricted-content-type-still-appears-when-creating-new-entries
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs9bab0fec2d7602ec
---

# Restricted Content Type Still Appears When Creating New Entries

A user assigned a custom role that should not allow creating entries for a specific content type (for example, ‘Ad’) still sees that content type as an option when creating new entries.

**Root Cause**

The role has a blanket Create permission enabled under ‘All Entries of Content Types’, which overrides the individual content type restriction. Contentstack evaluates the broadest matching permission, so the general permission takes precedence over the per-type exclusion.

**Resolution**

1.  Navigate to the role settings and remove the Create permission from ‘All Entries of Content Types’.
2.  Explicitly add Create permissions only for the individual content types that should be accessible.
3.  Ensure the excluded content type (for example, ‘Ad’) is not included in the individual list.
4.  Save and test by logging in as the affected user.

After updating the role, confirm that the excluded content type no longer appears as an option when the user creates new entries.
