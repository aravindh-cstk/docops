---
title: "Unable to Access Data Activation Layer in Stack Settings"
description: "Unable to Access Data Activation Layer in Stack Settings"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/05-platform-settings-permissions/01-unable-to-access-data-activation-layer-in-stack-settings
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: cscebfecb881f2f8b0
---

# Unable to Access Data Activation Layer in Stack Settings

Users may find that they cannot access the Data Activation Layer (DAL) within individual stack settings, even if the feature is enabled for the account. This prevents the configuration of data activation features.

**Root Cause**

The Data Activation Layer is an organization-level configuration rather than a stack-level setting. The issue typically arises from a misunderstanding of the feature hierarchy.

**Resolution**

1.  Navigate to the **Organization Admin** settings instead of individual stack settings.
2.  Locate the **Data Activation Layer** section within the organization-level configuration menu.
3.  Verify that the necessary permissions are active at the organization level to view the feature.

After navigating to the Organization Admin settings, check for the Data Activation Layer option. If the feature is visible and accessible in this location, the issue is resolved.
