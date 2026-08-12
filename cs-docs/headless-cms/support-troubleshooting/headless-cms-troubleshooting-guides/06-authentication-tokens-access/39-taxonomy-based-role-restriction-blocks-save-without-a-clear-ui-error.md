---
title: "Taxonomy-Based Role Restriction Blocks Save Without a Clear UI Error"
description: "Taxonomy-Based Role Restriction Blocks Save Without a Clear UI Error"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/39-taxonomy-based-role-restriction-blocks-save-without-a-clear-ui-error
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs12e2559b51381219
---

# Taxonomy-Based Role Restriction Blocks Save Without a Clear UI Error

Users with a custom role that has taxonomy-based restrictions are blocked from saving entries that include restricted taxonomy terms. The backend correctly rejects the save, but the UI does not clearly communicate which taxonomy term is restricted or why the save failed.

**Root Cause**

Contentstack correctly prevents users from saving entries with taxonomy terms they are not authorized to apply. However, the error surfaced to the user in the UI was generic - not clearly indicating which taxonomy term caused the save failure. An engineering fix has been deployed that updates the UI to better reflect restricted taxonomy terms (by displaying them differently in the selection interface rather than allowing selection and failing on save).

**Resolution**

A platform fix has been deployed to improve the UI experience for taxonomy-based restrictions. Restricted terms are now surfaced differently in the entry editor so editors know before attempting to save.

1.  If editors are still encountering unclear save failures related to taxonomy permissions, review the custom role’s taxonomy access settings and confirm the role has Read access only to the permitted taxonomies.
2.  After the fix, verify that attempting to apply a restricted taxonomy term either (a) prevents selection entirely, or (b) shows a clear error on save indicating which term is restricted and why.

After the fix deployment, open an entry as a role-restricted user and confirm that restricted taxonomy terms are visually identifiable and that save failures show actionable error messages.
