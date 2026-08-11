---
title: "SCIM-Assigned Roles Get Overwritten by IdP Role Mapping at Every Login"
description: "SCIM-Assigned Roles Get Overwritten by IdP Role Mapping at Every Login"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/16-scim-assigned-roles-get-overwritten-by-idp-role-mapping-at-every-login
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs9dfc21b7711a0a5a
---

# SCIM-Assigned Roles Get Overwritten by IdP Role Mapping at Every Login

Users may be repeatedly downgraded to a lower-privilege role, such as Read-Only, immediately after login, despite having the correct role assigned in both Contentstack and the identity provider.

**Root Cause**

When both SCIM provisioning and IdP Role Mapping are enabled at the same time, the IdP role mapping re-evaluates and can overwrite the SCIM-assigned role every time a user logs in. This causes roles to silently revert, even though SCIM assigned the correct role in advance through group synchronization.

**Resolution**

1.  Confirm whether both SCIM provisioning and IdP Role Mapping are enabled for the organization.
2.  If so, disable IdP Role Mapping so that SCIM remains the single source of truth for role assignment and synchronization.
3.  Review the identity provider's group-to-role mappings for the affected users to confirm they are configured correctly.

After disabling IdP Role Mapping, confirm the user's role remains stable across multiple logins.
