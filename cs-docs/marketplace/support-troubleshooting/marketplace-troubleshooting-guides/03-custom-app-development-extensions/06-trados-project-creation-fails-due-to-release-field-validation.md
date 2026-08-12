---
title: "Trados project creation fails due to release field validation"
description: "Trados project creation fails due to release field validation"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/03-custom-app-development-extensions/06-trados-project-creation-fails-due-to-release-field-validation
doc_type: faq
_cms_section_uid: cs6031da6351f15c02
_cms_faq_uid: csa4bcd29b957f841b
---

# Trados project creation fails due to release field validation

Creating a project using the Trados integration may fail if the "Create Project" button remains disabled or returns a "Project Creation failed. Item not found in a release" error. This prevents users from initiating the translation workflow through the plugin.

**Root Cause**

The Trados plugin UI requires an existing release containing the source entries to satisfy validation requirements, even when a new release name is provided for the translated content.

**Resolution**

1.  Create a release within the Contentstack stack.
2.  Add all entries from the source locale intended for translation into the created release.
3.  Navigate to the Trados plugin dashboard.
4.  Select the release containing the source entries from the plugin dropdown menu.
5.  Enter a unique name for the translated release in the "Create Release" field.

After creating the source release and selecting it in the plugin, verify that the "Create Project" button is enabled. If the project is created successfully, the issue is resolved.
