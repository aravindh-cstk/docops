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

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](/docs/developers/developer-hub/about-ui-locations/) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack lets you extend the and customize the the Contentstack experience with Experience Extensions.

These extensions enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

You can create different types of Experience Extensions within Contentstack: [Custom Fields](/docs/developers/create-custom-fields/about-custom-fields), [Sidebar Extensions](/docs/developers/create-sidebar-extensions/), [Dashboard Extensions](/docs/developers/create-dashboard-extensions), [JSON RTE Plugins,](/docs/developers/json-rich-text-editor-plugins/about-json-rte-plugins) [Field Modifier Location](/docs/developers/developer-hub/field-modifier-location/) and [Full Page Location](/docs/developers/developer-hub/full-page-location/).

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch. For example, you are working within the development branch, and you add new extensions ([Custom Fields](/docs/developers/create-custom-fields/create-new-custom-field), [Custom Widgets](/docs/developers/create-sidebar-extensions/), [Dashboard Widget](/docs/developers/create-dashboard-extensions/create-a-new-dashboard-extension), [JSON RTE Plugins,](/docs/developers/json-rich-text-editor-plugins/create-new-json-rte-plugin) [Field Modifier Location](/docs/developers/developer-hub/field-modifier-location/) and [Full Page Location](/docs/developers/developer-hub/full-page-location/)) to this branch. These extensions will be available only within the development branch. Refer to our [Branch-specific Modules](/docs/developers/branches/branch-specific-modules) document for more information.

Contentstack provides certain prebuilt, ready-to-use, extensions for you to use in your [content types](/docs/developers/create-content-types/about-content-types). You can select and use any extension from this list. Also, you can create a custom extension either by writing the code directly in Contentstack’s repository, or you can host it on a URL of your choice and provide this URL when configuring your extension in Contentstack.

Refer to the list of all the [Experience Extensions](/docs/developers/all-contentstack-experience-extensions) supported by Contentstack.

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
Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](/docs/developers/developer-hub/about-ui-locations/) for the Contentstack App Framework to extend the functionality of your apps.

### What types of Experience Extensions can I create?
You can create different types of Experience Extensions within Contentstack: [Custom Fields](/docs/developers/create-custom-fields/about-custom-fields), [Sidebar Extensions](/docs/developers/create-sidebar-extensions/), [Dashboard Extensions](/docs/developers/create-dashboard-extensions), [JSON RTE Plugins,](/docs/developers/json-rich-text-editor-plugins/about-json-rte-plugins) [Field Modifier Location](/docs/developers/developer-hub/field-modifier-location/) and [Full Page Location](/docs/developers/developer-hub/full-page-location/).

### Are extensions branch-specific?
When working within specific branches, extensions added or created will be available only within that particular branch.

### Where can I find the SDK for Experience Extensions?
[Experience Extensions SDK](https://github.com/contentstack/ui-extensions-sdk)

<!-- filename: second-level-navigation-experience-extensions-overview.md -->