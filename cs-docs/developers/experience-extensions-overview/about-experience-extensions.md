---
title: "[Experience Extensions Overview] - About Experience Extensions"
description: Overview of Experience Extensions and how they extend Contentstack’s UI, including types, branch behavior, and prebuilt options.
url: https://www.contentstack.com/docs/developers/experience-extensions-overview/about-experience-extensions
product: Contentstack
doc_type: overview
audience:
  - developers
version: legacy
last_updated: 2026-03-25
---

# [Experience Extensions Overview] - About Experience Extensions

This page explains what Experience Extensions are in Contentstack, what types are available, and key usage notes (including branch-specific behavior). It is intended for developers who want to extend or customize the Contentstack UI and are deciding between legacy extensions and newer UI locations in the Contentstack App Framework.

## About Experience Extensions

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](../developer-hub/about-ui-locations.md) for the Contentstack App Framework to extend the functionality of your apps.

Experience Extensions allow you to extend Contentstack’s UI.

These extensions enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

You can create different types of Experience Extensions within Contentstack: [Custom Fields](../create-custom-fields/about-custom-fields.md), [Sidebar Extensions](../create-sidebar-extensions/about-sidebar-extensions.md), [Dashboard Extensions](../create-dashboard-extensions/about-dashboard-extensions.md), [Asset Sidebar Location](../developer-hub/asset-sidebar-location.md), and [JSON RTE Plugins](../json-rich-text-editor-plugins/about-json-rte-plugins.md).

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch. For example, you are working within the development branch, and you add new extensions ([Custom Fields](../create-custom-fields/create-new-custom-field.md), [Sidebar Extensions](../create-sidebar-extensions/create-a-new-sidebar-extension.md), [Dashboard Extensions](../create-dashboard-extensions/create-a-new-dashboard-extension.md), [Asset Sidebar Location](../create-asset-sidebar-extensions/create-a-new-asset-sidebar-extension.md), and [JSON RTE Plugins](../json-rich-text-editor-plugins/create-new-json-rte-plugin.md)) to this branch. These extensions will be available only within the development branch. Refer to our [Branch-specific Modules](../branches/branch-specific-modules.md) document for more information.

Contentstack provides certain prebuilt, ready-to-use, extensions for you to use in your [content types](../create-content-types/about-content-types.md). You can select and use any extension from this list. Also, you can create a custom extension either by writing the code directly in Contentstack’s repository, or you can host it on a URL of your choice and provide this URL when configuring your extension in Contentstack.

Refer to the list of all the [Experience Extensions](./all-contentstack-experience-extensions.md) supported by Contentstack.

You can read the documentation in the “More Articles” section to understand more about Extensions.

## Common questions

### Are Experience Extensions the recommended approach for new development?
No. **Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](../developer-hub/about-ui-locations.md) for the Contentstack App Framework to extend the functionality of your apps.

### What types of Experience Extensions can I create?
You can create different types of Experience Extensions within Contentstack: [Custom Fields](../create-custom-fields/about-custom-fields.md), [Sidebar Extensions](../create-sidebar-extensions/about-sidebar-extensions.md), [Dashboard Extensions](../create-dashboard-extensions/about-dashboard-extensions.md), [Asset Sidebar Location](../developer-hub/asset-sidebar-location.md), and [JSON RTE Plugins](../json-rich-text-editor-plugins/about-json-rte-plugins.md).

### Are extensions shared across branches?
No. When working within specific branches, extensions added or created will be available only within that particular branch.

### Can I use prebuilt extensions or host my own?
Contentstack provides certain prebuilt, ready-to-use, extensions for you to use in your [content types](../create-content-types/about-content-types.md). Also, you can create a custom extension either by writing the code directly in Contentstack’s repository, or you can host it on a URL of your choice and provide this URL when configuring your extension in Contentstack.