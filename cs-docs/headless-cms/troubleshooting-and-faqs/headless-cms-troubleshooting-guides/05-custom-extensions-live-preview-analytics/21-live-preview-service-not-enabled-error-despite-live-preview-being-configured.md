---
title: "‘Live Preview Service Not Enabled’ Error Despite Live Preview Being Configured"
description: "‘Live Preview Service Not Enabled’ Error Despite Live Preview Being Configured"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/21-live-preview-service-not-enabled-error-despite-live-preview-being-configured
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs513369fc038c3274
---

# ‘Live Preview Service Not Enabled’ Error Despite Live Preview Being Configured

After configuring Live Preview, error messages appear stating the Live Preview service is not enabled in the stack. The stack has Live Preview turned on but the error persists.

**Root Cause**

This error appears when the stack is using the legacy Live Preview setup and has not yet migrated to Contentstack’s new Preview service. The new Preview service is required for features such as Timeline Preview and Visual Builder. The legacy SDK and new Preview service are not directly interchangeable.

**Resolution**

1.  Migration to the new Preview service is optional - the legacy Live Preview setup will continue to function for basic preview use cases.
2.  To resolve the error and gain access to Timeline Preview and Visual Builder, follow the Live Preview Migration Guide to upgrade to the new Preview service.
3.  After migrating, update the SDK initialization to use the new configuration format and preview\_token instead of the management token.
4.  Refer to the corrected Live Preview Onboarding and Troubleshooting Guide provided by Contentstack Support for the updated setup steps.

After completing the migration, reload the Live Preview session and confirm the service-not-enabled error no longer appears and preview features work as expected.
