---
title: "[Second level navigation] - Experience Extensions Overview"
description: Overview of Contentstack Experience Extensions, including types, branch behavior, and related resources.
url: https://www.contentstack.com/docs/developers/experience-extensions-overview
product: Contentstack
doc_type: overview
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Second level navigation] - Experience Extensions Overview

This page provides an overview of Experience Extensions in Contentstack, including what they are, the types available, branch-specific behavior, and where to find related documentation. It is intended for developers who want to extend or customize the Contentstack UI and behavior, especially when working with legacy extensions.

## Experience Extensions Overview

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](./developer-hub/about-ui-locations.md) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack lets you extend the and customize the the Contentstack experience with Experience Extensions.

These extensions enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

You can create different types of Experience Extensions within Contentstack: [Custom Fields](./create-custom-fields/about-custom-fields.md), [Sidebar Extensions](./create-sidebar-extensions.md), [Dashboard Extensions](./create-dashboard-extensions.md), [JSON RTE Plugins,](./json-rich-text-editor-plugins/about-json-rte-plugins.md) [Field Modifier Location](./developer-hub/field-modifier-location.md) and [Full Page Location](./developer-hub/full-page-location.md).

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch. For example, you are working within the development branch, and you add new extensions ([Custom Fields](./create-custom-fields/create-new-custom-field.md), [Custom Widgets](./create-sidebar-extensions.md), [Dashboard Widget](./create-dashboard-extensions/create-a-new-dashboard-extension.md), [JSON RTE Plugins,](./json-rich-text-editor-plugins/create-new-json-rte-plugin.md) [Field Modifier Location](./developer-hub/field-modifier-location.md) and [Full Page Location](./developer-hub/full-page-location.md)) to this branch. These extensions will be available only within the development branch. Refer to our [Branch-specific Modules](./branches/branch-specific-modules.md) document for more information.

Contentstack provides certain prebuilt, ready-to-use, extensions for you to use in your [content types](./create-content-types/about-content-types.md). You can select and use any extension from this list. Also, you can create a custom extension either by writing the code directly in Contentstack’s repository, or you can host it on a URL of your choice and provide this URL when configuring your extension in Contentstack.

Refer to the list of all the [Experience Extensions](./experience-extensions-overview/all-contentstack-experience-extensions.md) supported by Contentstack.

## Work with Experience Extensions

### Links

- [About Experience Extensions](/developers/experience-extensions-overview/about-experience-extensions/)
- [All Contentstack Experience Extensions](/developers/experience-extensions-overview/all-contentstack-experience-extensions/)
- [Create Custom Fields](/developers/create-custom-fields/)
- [Create Sidebar Extensions](/developers/create-sidebar-extensions/)
- [Create Asset Sidebar Extensions](/developers/create-asset-sidebar-extensions/)
- [Dashboard Extensions](/developers/create-dashboard-extensions/)
- [JSON RTE Plugins](/developers/json-rich-text-editor-plugins/)
- [Experience Extensions SDK](https://github.com/contentstack/ui-extensions-sdk)
- [Experience Extensions Limitations](/developers/experience-extensions-overview/experience-extensions-limitations/)
- [Modal Support for Apps/Extensions](/developers/modal-support-for-apps-and-extensions/)
- [Experience Extensions FAQs](/faqs/#experience-extensions-faqs)

## Common questions

### Should I use Experience Extensions or UI locations?
Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](./developer-hub/about-ui-locations.md) for the Contentstack App Framework to extend the functionality of your apps.

### What types of Experience Extensions can I create?
You can create different types of Experience Extensions within Contentstack: [Custom Fields](./create-custom-fields/about-custom-fields.md), [Sidebar Extensions](./create-sidebar-extensions.md), [Dashboard Extensions](./create-dashboard-extensions.md), [JSON RTE Plugins,](./json-rich-text-editor-plugins/about-json-rte-plugins.md) [Field Modifier Location](./developer-hub/field-modifier-location.md) and [Full Page Location](./developer-hub/full-page-location.md).

### Are extensions branch-specific?
When working within specific branches, extensions added or created will be available only within that particular branch.

### Where can I find the SDK for Experience Extensions?
[Experience Extensions SDK](https://github.com/contentstack/ui-extensions-sdk)

<!-- filename: second-level-navigation-experience-extensions-overview.md -->