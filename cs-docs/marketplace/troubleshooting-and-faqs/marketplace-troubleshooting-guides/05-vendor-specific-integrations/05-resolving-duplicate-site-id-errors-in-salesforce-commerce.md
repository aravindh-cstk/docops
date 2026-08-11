---
title: "Resolving Duplicate site id errors in Salesforce Commerce"
description: "Resolving Duplicate site id errors in Salesforce Commerce"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/05-vendor-specific-integrations/05-resolving-duplicate-site-id-errors-in-salesforce-commerce
doc_type: faq
_cms_section_uid: cs67a4a479b31c55a2
_cms_faq_uid: cs3f9b30170e73313e
---

# Resolving Duplicate site id errors in Salesforce Commerce

Adding a new configuration in the Salesforce Commerce connector may fail with a duplicate ID error when the same Site ID is reused. This prevents the setup of multiple environments within the same stack.

**Root Cause**

The connector enforces a strict uniqueness constraint on Site IDs, prohibiting the use of the same ID across different configurations even if they utilize different client IDs or environments.

**Resolution**

1.  Identify the existing configurations within the Salesforce Commerce app to see which Site IDs are currently in use.
2.  Contact the Salesforce Commerce Cloud (SFCC) administrator.
3.  Request the creation of unique Site IDs for each distinct environment (e.g., staging, production).
4.  Enter the new, unique Site ID in the configuration fields in Contentstack.

After obtaining a unique Site ID, attempt to save the new configuration in the Salesforce Commerce app.

If the "Duplicate site id" error does not appear and the configuration saves successfully, the unique ID requirement is met
