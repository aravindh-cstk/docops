---
title: "SCIM Provisioning Stops After API Token Deprecation"
description: "SCIM Provisioning Stops After API Token Deprecation"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/06-scim-automated-user-provisioning/01-scim-provisioning-stops-after-api-token-deprecation
doc_type: faq
_cms_section_uid: csd0a373399b66dd92
_cms_faq_uid: csc510e7ac0382dba8
---

# SCIM Provisioning Stops After API Token Deprecation

SCIM provisioning may stop functioning even though the associated SSO configuration continues to work normally.

**Root Cause**

The SCIM API token associated with the identity provider connection has been deprecated, halting provisioning independently of the SSO setup.

**Resolution**

1.  Navigate to Contentstack Marketplace > Manage Apps, and locate the app connection for your identity provider.
2.  Uninstall the existing identity provider app connection.
3.  Re-authenticate and reinstall the app to generate a new SCIM API token.
4.  Avoid using a deprecated identity provider app integration for new configurations going forward.

After reinstalling the app, confirm that SCIM provisioning resumes for new and existing users. This action does not affect the existing SSO configuration.
