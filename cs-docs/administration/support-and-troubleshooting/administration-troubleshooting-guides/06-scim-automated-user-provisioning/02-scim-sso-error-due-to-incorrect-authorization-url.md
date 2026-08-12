---
title: "SCIM/SSO Error Due to Incorrect Authorization URL"
description: "SCIM/SSO Error Due to Incorrect Authorization URL"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/06-scim-automated-user-provisioning/02-scim-sso-error-due-to-incorrect-authorization-url
doc_type: faq
_cms_section_uid: csd0a373399b66dd92
_cms_faq_uid: csaefa3b33e16b57be
---

# SCIM/SSO Error Due to Incorrect Authorization URL

A SCIM-related error may appear while configuring SSO in certain regions, such as GCP NA.

**Root Cause**

The OAuth authorization URL used during setup was not constructed correctly for the account's region.

**Resolution**

1.  Refer to the Contentstack OAuth documentation for constructing the correct authorization URL.
2.  Update the SSO/SCIM configuration with the properly constructed authorization URL for the account's region.

After updating the authorization URL, retry the SCIM sync to verify the error no longer occurs.
