---
title: "[Content Models] - How to Import a Content Model"
description: Import, view, and edit Contentstack Marketplace Content Models and use them within your stack.
url: https://www.contentstack.com/docs/marketplace/how-to-import-content-model
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
  - content editors
version: current
last_updated: 2026-03-25
---

# [Content Models] - How to Import a Content Model

This page explains what Contentstack Content Models are and provides step-by-step instructions for importing Content Models from the Contentstack Marketplace into a stack. It is intended for Contentstack users (Owners/Admins/Stack Developers) who need to bring prebuilt schemas (Content Types, Global Fields, Labels, Extensions) into their stack and start creating entries.

## How to Import a Content Model

The Contentstack Content Models are a blueprint or schema of a content type that defines the structure, fields, and relationships of the content. It is a visual representation of the content type and helps content editors and developers to create and manage content in a structured and organized manner. Content Models allow you to define custom fields, data types, validation rules, and other settings that are specific to the content structure. It enables complete control over how the content is structured and ensures consistency across all the content entries.  
With the Contentstack Marketplace Content Models, you can import, view and edit their schema, and use them within your stack. The Content Models include the [Content Types](/docs/developers/create-content-types/about-content-types/), [Global Fields](/docs/developers/create-content-types/global/), [Labels](/docs/developers/create-content-types/about-labels/), and [Extensions](/docs/developers/experience-extensions-overview/about-experience-extensions/).

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Import Content Models to your Stack via Marketplace

Let's follow this step-by-step guide to import and configure Content Models within your stack.

- Log in to your [Contentstack account](https://www.contentstack.com/login/).
- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click** Content Models** from the left panel.
- Within the Content Models, you see all the available content models. Hover over the Content Model you want to import in your stack, then click the** Import **button.For example, import the **Website Footer** Content Model.
- In the popup window, authenticate the access by clicking the** Authorize** button and then you can see the steps to import and view the content model within the stack.
- Select the** Stack Name **you want to import the content model to and click the** Import Content Model **button.  
  **Note**: If the Content Model already exists within the stack, you can rename the Content Types, Global Fields, and Labels and import them again by clicking the** Import Content Model **button.
- While importing the Content Model to your stack, you can also view Logs.  
  After successful import, you can see a confirmation message.
- Now, click the **View Content Models** button to navigate to the Content Models section of the stack where you have imported the content model.  
  You can see the imported** Footer** content type in the Content Model section of your stack.
- Click the **Footer** content type to view the schema for the content type.
- To create an entry for this content type, click **Entries **in the left navigation panel.
- Click the **+ New Entry** button to create a new entry.
- Select the** Footer** content type** **from the list of content types displayed and click the **Proceed **button.You have created an entry for the **Footer** content type.
- Enter the required content, then **Save** and **Publish** the entry.

Alternatively, you can import the prebuilt Content Models by clicking the **+ New Content Type** button and then click **Use Prebuilt** within your stack via the CMS. For more information, please refer to the [Import Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.

## Common questions

**Q: What is included in Contentstack Marketplace Content Models?**  
A: The Content Models include the [Content Types](/docs/developers/create-content-types/about-content-types/), [Global Fields](/docs/developers/create-content-types/global/), [Labels](/docs/developers/create-content-types/about-labels/), and [Extensions](/docs/developers/experience-extensions-overview/about-experience-extensions/).

**Q: Who can import Content Models into a stack?**  
A: Users with access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer.

**Q: What happens if the Content Model already exists within the stack?**  
A: If the Content Model already exists within the stack, you can rename the Content Types, Global Fields, and Labels and import them again by clicking the** Import Content Model **button.

**Q: Is there another way to import prebuilt Content Models besides Marketplace?**  
A: Yes. You can import the prebuilt Content Models by clicking the **+ New Content Type** button and then click **Use Prebuilt** within your stack via the CMS.