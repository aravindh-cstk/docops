---
title: "Updating User Email Addresses Following Domain Changes"
description: "Updating User Email Addresses Following Domain Changes"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/04-profile-updates-email-changes/02-updating-user-email-addresses-following-domain-changes
doc_type: faq
_cms_section_uid: cs0e0bdbe7a7e720fb
_cms_faq_uid: csd1a1f726c8ac8dec
---

# Updating User Email Addresses Following Domain Changes

Email address updates to a new domain fail when the email field is non-editable. This occurs because the platform does not allow direct modification of existing user email addresses.

**Root Cause**

User email addresses are immutable in Contentstack and cannot be modified once an account has been created.

**Resolution**

1.  Remove users with the old email domains from the organization.
2.  Re-invite users using their new email addresses.
3.  Reassign the necessary roles and permissions to the newly invited accounts.
4.  Configure alias support on the Identity Provider, such as Okta or Azure AD, if SSO is enabled.

After re-inviting the users and reassigning permissions, have the users log in with their new email addresses to verify if access is restored.
