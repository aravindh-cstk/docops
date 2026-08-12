---
title: "Resolving project creation failures in the Trados integration"
description: "Resolving project creation failures in the Trados integration"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/05-vendor-specific-integrations/03-resolving-project-creation-failures-in-the-trados-integration
doc_type: faq
_cms_section_uid: cs67a4a479b31c55a2
_cms_faq_uid: cs23851510f5005bee
---

# Resolving project creation failures in the Trados integration

Creating a translation project in the Trados Marketplace app may fail with disabled buttons or "Item not found" errors when source entries are not properly grouped. This prevents the initiation of translation workflows for selected content.

**Root Cause**

The integration requires source entries to be associated with a specific Contentstack release that must be selected within the plugin UI to enable project validation.

**Resolution**

1.  Create a new release within the Contentstack stack.
2.  Add all entries from the source locale that require translation into this release.
3.  Navigate to the Trados plugin dashboard and select the created release from the dropdown menu.
4.  Enter a unique name for the target translated release in the "Create Release" field.

After selecting the source release and providing a target release name, check if the "Create Project" button becomes enabled.

If the project creation proceeds without "Item not found" errors, the release-based workflow is correctly configured.
