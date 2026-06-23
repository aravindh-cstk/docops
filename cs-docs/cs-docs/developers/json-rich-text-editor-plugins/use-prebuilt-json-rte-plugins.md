---
title: "[Json Rich Text Editor Plugins] - Use Prebuilt JSON RTE Plugins"
description: Use prebuilt JSON Rich Text Editor plugins in Contentstack by adding them to your stack as extensions.
url: https://www.contentstack.com/docs/developers/json-rich-text-editor-plugins/use-prebuilt-json-rte-plugins
product: Contentstack
doc_type: guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Json Rich Text Editor Plugins] - Use Prebuilt JSON RTE Plugins

This page explains how to use Contentstack’s prebuilt JSON Rich Text Editor (JSON RTE) plugins by adding them to your stack as extensions. It is intended for developers or stack administrators who want to enable JSON RTE plugin functionality quickly without writing custom code, and should be used when configuring JSON RTE plugins in a stack.

### Item 1

#### Article section

##### Heading

Use Prebuilt JSON RTE Plugins

##### Content

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [RTE UI Location](../developer-hub/rte-location.md) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack provides three prebuilt [JSON Rich Text Editor plugins](./about-json-rte-plugins.md) to get you started instantly instead of writing custom codes. You need to add these plugins to your stack and get started.

Below is a list of the prebuilt JSON RTE plugins provided by Contentstack:
- [Highlight](../marketplace-apps/highlight.md)
- [Info Panel](../marketplace-apps/info-panel.md)
- [Word Count](../marketplace-apps/word-count.md)

To use a prebuilt JSON RTE plugin, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon on the left navigation panel.
- Select **Extensions**, and click on the **+ New Extension** button at the top-right corner of the page, and select the **Use Prebuilt** option.
- In the following window, select **JSON RTE Plugin** from the drop-down menu.
- Select any prebuilt plugin (for example, **Highlight**), and click on **+ Add Extension**.
- On the configuration page, you will see the following options:
      **Title** *(required)*: You will see a predefined title. You can use this title when adding the JSON RTE plugins to your JSON Rich Text Editor in your content type.
- **Unique ID:** You will see a predefined unique ID for your JSON RTE plugin.
- **External Hosting URL** *(required)*: You will see a predefined URL of the externally-hosted JSON RTE plugin code.**Note:** The external hosting URL should be an HTTPS or a localhost URL.
- **Config Parameter** *(optional)*: If you have used any config parameters in the source code, provide the value for the parameters here. You can make changes to this code as per your requirements. You can pass raw queries as config parameters in this section as shown below:
```
{
  "key1":"value1",
  "key2":"value2"
}

```

        **Note:** Users don't need to add config parameters to the prebuilt JSON RTE plugin extensions. By default, the extensions are preconfigured and ready to use.
- Finally, **Save** this plugin.

## Common questions

**How many prebuilt JSON RTE plugins does Contentstack provide?**  
Contentstack provides three prebuilt JSON Rich Text Editor plugins: Highlight, Info Panel, and Word Count.

**Where do I add a prebuilt JSON RTE plugin in Contentstack?**  
You add it in your stack under **Settings** → **Extensions** by creating a **+ New Extension** and choosing **Use Prebuilt**.

**Do I need to configure config parameters for prebuilt JSON RTE plugin extensions?**  
Users don't need to add config parameters to the prebuilt JSON RTE plugin extensions. By default, the extensions are preconfigured and ready to use.

**What kind of URL is required for the External Hosting URL?**  
The external hosting URL should be an HTTPS or a localhost URL.

<!-- filename: json-rich-text-editor-plugins-use-prebuilt-json-rte-plugins.md -->