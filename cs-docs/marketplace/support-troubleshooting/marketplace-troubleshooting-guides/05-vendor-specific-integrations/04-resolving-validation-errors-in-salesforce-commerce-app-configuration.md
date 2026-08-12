---
title: "Resolving validation errors in Salesforce Commerce app configuration"
description: "Resolving validation errors in Salesforce Commerce app configuration"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/05-vendor-specific-integrations/04-resolving-validation-errors-in-salesforce-commerce-app-configuration
doc_type: faq
_cms_section_uid: cs67a4a479b31c55a2
_cms_faq_uid: cs6cb90018fe3a984a
---

# Resolving validation errors in Salesforce Commerce app configuration

Configuring the Salesforce Commerce Marketplace app may result in a disabled save button and "valid inputs" validation error when credentials are incomplete. This prevents the storage of integration settings within the stack.

**Root Cause**

The app performs real-time client-side validation, blocking the save action if required fields like Organization ID or Site ID are missing or if the Client ID does not match the Short Code.

**Resolution**

1.  Navigate to the Salesforce Commerce app configuration page.
2.  Enter all required fields: Client ID, Client Secret, Organization ID, Short Code, and Site ID.
3.  Ensure that the Client ID specifically corresponds to the Short Code provided by the Salesforce environment.
4.  Verify that the SLA key is set to private and generate a new secret if the current one is invalid.

After entering all required credentials correctly, hover over the Save button in the app configuration.

If the "testConfig" error message disappears and the Save button becomes clickable, the validation is satisfied.
