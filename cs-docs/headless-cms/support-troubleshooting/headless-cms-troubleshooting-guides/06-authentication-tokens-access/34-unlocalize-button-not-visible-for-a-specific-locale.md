---
title: "‘Unlocalize’ Button Not Visible for a Specific Locale"
description: "‘Unlocalize’ Button Not Visible for a Specific Locale"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/34-unlocalize-button-not-visible-for-a-specific-locale
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs745297a339fa76b9
---

# ‘Unlocalize’ Button Not Visible for a Specific Locale

An editor cannot see the ‘Unlocalize’ button for a specific localized entry. The option is visible for other locales and other users.

**Root Cause**

The visibility of the Unlocalize button is tied to the ‘Delete Entry’ permission. The unlocalize operation removes the locale-specific version, which is functionally a deletion. Without Delete Entry permission, the button is hidden.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and review the custom role assigned to the affected user.
2.  Enable the Delete Entry permission for the relevant content type in the role.
3.  If enabling Delete Entry globally is inappropriate, create a separate role with Delete permission scoped only to the relevant content type and assign it alongside the existing role.

After adding the Delete Entry permission, confirm the Unlocalize button appears for the affected user.
