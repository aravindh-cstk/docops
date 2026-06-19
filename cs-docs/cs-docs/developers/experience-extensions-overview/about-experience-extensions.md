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

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](/docs/developers/developer-hub/about-ui-locations/) for the Contentstack App Framework to extend the functionality of your apps.

Experience Extensions allow you to extend Contentstack’s UI.

These extensions enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

You can create different types of Experience Extensions within Contentstack: [Custom Fields](/docs/developers/create-custom-fields/about-custom-fields), [Sidebar Extensions](/docs/developers/create-sidebar-extensions/about-sidebar-extensions), [Dashboard Extensions](/docs/developers/create-dashboard-extensions/about-dashboard-extensions), [Asset Sidebar Location](/docs/developers/developer-hub/asset-sidebar-location), and [JSON RTE Plugins](/docs/developers/json-rich-text-editor-plugins/about-json-rte-plugins).

**Note:** When working within specific branches, extensions added or created will be available only within that particular branch. For example, you are working within the development branch, and you add new extensions ([Custom Fields](/docs/developers/create-custom-fields/create-new-custom-field), [Sidebar Extensions](/docs/developers/create-sidebar-extensions/create-a-new-sidebar-extension), [Dashboard Extensions](/docs/developers/create-dashboard-extensions/create-a-new-dashboard-extension), [Asset Sidebar Location](/docs/developers/create-asset-sidebar-extensions/create-a-new-asset-sidebar-extension), and [JSON RTE Plugins](/docs/developers/json-rich-text-editor-plugins/create-new-json-rte-plugin)) to this branch. These extensions will be available only within the development branch. Refer to our [Branch-specific Modules](/docs/developers/branches/branch-specific-modules) document for more information.

Contentstack provides certain prebuilt, ready-to-use, extensions for you to use in your [content types](/docs/developers/create-content-types/about-content-types). You can select and use any extension from this list. Also, you can create a custom extension either by writing the code directly in Contentstack’s repository, or you can host it on a URL of your choice and provide this URL when configuring your extension in Contentstack.

Refer to the list of all the [Experience Extensions](/docs/developers/all-contentstack-experience-extensions) supported by Contentstack.

You can read the documentation in the “More Articles” section to understand more about Extensions.

## Common questions

### Are Experience Extensions the recommended approach for new development?
No. **Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations](/docs/developers/developer-hub/about-ui-locations/) for the Contentstack App Framework to extend the functionality of your apps.

### What types of Experience Extensions can I create?
You can create different types of Experience Extensions within Contentstack: [Custom Fields](/docs/developers/create-custom-fields/about-custom-fields), [Sidebar Extensions](/docs/developers/create-sidebar-extensions/about-sidebar-extensions), [Dashboard Extensions](/docs/developers/create-dashboard-extensions/about-dashboard-extensions), [Asset Sidebar Location](/docs/developers/developer-hub/asset-sidebar-location), and [JSON RTE Plugins](/docs/developers/json-rich-text-editor-plugins/about-json-rte-plugins).

### Are extensions shared across branches?
No. When working within specific branches, extensions added or created will be available only within that particular branch.

### Can I use prebuilt extensions or host my own?
Contentstack provides certain prebuilt, ready-to-use, extensions for you to use in your [content types](/docs/developers/create-content-types/about-content-types). Also, you can create a custom extension either by writing the code directly in Contentstack’s repository, or you can host it on a URL of your choice and provide this URL when configuring your extension in Contentstack.