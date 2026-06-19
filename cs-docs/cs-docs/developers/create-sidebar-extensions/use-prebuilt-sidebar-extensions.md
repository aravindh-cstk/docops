---
title: "[Extensions] - Use Prebuilt Sidebar Extensions"
description: How to use Contentstack prebuilt custom Sidebar Extensions templates.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/use-prebuilt-sidebar-extensions
product: Contentstack
doc_type: guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Use Prebuilt Sidebar Extensions

This page explains how to use Contentstack’s prebuilt custom Sidebar Extensions templates, including where to find them in the UI and how to configure them for your stack and content types. It is intended for developers and stack administrators who want to add sidebar functionality quickly without writing code, and should be used when setting up legacy Experience Extensions-based sidebar extensions.

## Use Prebuilt Sidebar Extensions

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the  [Sidebar UI Location](/docs/developers/developer-hub/sidebar-location/) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack provides certain prebuilt [custom Sidebar Extensions](/docs/developers/create-custom-sidebar-extensions/about-custom-sidebar-extension) templates to help you get started instantly without the need to code. All you need to do is add them to your content type, configure them, and you are ready to go.

Below is the list of prebuilt templates that Contentstack provides:
- [Text Intelligence (MonkeyLearn)](/docs/developers/create-custom-sidebar-extensions/monkeylearn)
- [Gatsby Preview](/docs/developers/create-custom-sidebar-extensions/gatsby-preview)

To use a prebuilt custom Sidebar Extensions, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- Click on the **+ New Extensions** button at the top-right corner of the page, and select the **Use prebuilt** option.
- In the **Prebuilt Extensions** window, select **Custom Sidebar Extensions** from the dropdown.
- Hover over any prebuilt template (for example, **Text Intelligence**), and click on **+ ****Add Extension**.
- In the **Create New Extension** page, you will see the following options:
      **Title*** (required)*: You will see a predefined title that is displayed as the Sidebar Extension name on the entry page. You can edit it as per requirements.
- **Hosting method** *(required)*: The hosting method is set to **Hosted By Contentstack** since it is a custom Sidebar Extension hosted on Contentstack.
- **Extension Source Code ***(required)*: Here you will find the source code for the custom Sidebar Extension. You can make changes to this code as per your requirements.
- **Config Parameters ***(optional)*: If you have used any config parameters in the source code, provide the value for the parameters in this field.
- **Scope** *(required)*: Select for which content types this Sidebar Extension will be available. You can choose either **All Content Types** or **Specific Content Types**.
- Finally, **Save **this Sidebar Extension.

## Common questions

**Q: Are prebuilt Sidebar Extensions part of the Contentstack App Framework?**  
A: **Note**: Experience Extensions use the legacy approach with extensions. We recommend using the  [Sidebar UI Location](/docs/developers/developer-hub/sidebar-location/) for the Contentstack App Framework to extend the functionality of your apps.

**Q: Do I need to write code to use a prebuilt custom Sidebar Extension?**  
A: Contentstack provides certain prebuilt custom Sidebar Extensions templates to help you get started instantly without the need to code.

**Q: Where do I find the prebuilt Sidebar Extensions in the Contentstack UI?**  
A: Click on the **+ New Extensions** button at the top-right corner of the page, and select the **Use prebuilt** option, then select **Custom Sidebar Extensions** from the dropdown.

**Q: Can I limit a prebuilt Sidebar Extension to specific content types?**  
A: **Scope** *(required)*: Select for which content types this Sidebar Extension will be available. You can choose either **All Content Types** or **Specific Content Types**.

<!-- filename: extensions-use-prebuilt-sidebar-extensions.md -->