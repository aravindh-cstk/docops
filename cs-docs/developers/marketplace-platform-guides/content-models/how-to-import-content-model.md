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
With the Contentstack Marketplace Content Models, you can import, view and edit their schema, and use them within your stack. The Content Models include the [Content Types](../../create-content-types/about-content-types.md), [Global Fields](../../create-content-types/global.md), [Labels](../../create-content-types/about-labels.md), and [Extensions](../../experience-extensions-overview/about-experience-extensions.md).

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Import Content Models to your Stack via Marketplace

Let's follow this step-by-step guide to import and configure Content Models within your stack.

- Log in to your [Contentstack account](https://www.contentstack.com/login/).
- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click** Content Models** from the left panel.![How to Import Content Models - Navigating to Content Models via Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0bcf5bd69a89726/65328006da843a88fc6c3e79/About_Content_Models_-_Navigating_to_Content_Models_via_Marketplace.png)
- Within the Content Models, you see all the available content models. Hover over the Content Model you want to import in your stack, then click the** Import **button.For example, import the **Website Footer** Content Model.![How to import content models - Import Website Footer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda4d499aed8e77fa/6532826ada7b94da973f6553/How_to_import_content_models_-_Import_Website_Footer.png)
- In the popup window, authenticate the access by clicking the** Authorize** button and then you can see the steps to import and view the content model within the stack.
- Select the** Stack Name **you want to import the content model to and click the** Import Content Model **button.  
![How_to_import_content_models_-_Select_a_stack_for_import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2540b42d4a4ce493/65434d27039e2c00189e0adf/How_to_import_content_models_-_Select_a_stack_for_import.png)  **Note**: If the Content Model already exists within the stack, you can rename the Content Types, Global Fields, and Labels and import them again by clicking the** Import Content Model **button.
- While importing the Content Model to your stack, you can also view Logs.  
  ![How_to_import_content_models_-_Logs_during_import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65889a07be8ba997/65434eff2149b10407ad89f1/How_to_import_content_models_-_Logs_during_import.png)After successful import, you can see a confirmation message.![How_to_import_content_models_-_Completion_Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt055e51c1e77eca38/651d53ab8dc13f67c88ed271/How_to_import_content_models_-_Completion_Status.png)
- Now, click the **View Content Models** button to navigate to the Content Models section of the stack where you have imported the content model.  
  ![How_to_import_content_models_-_View_Content_Models](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45905a8f9cb4ee88/651d54463091589cf4f0885f/How_to_import_content_models_-_View_Content_Models.png)You can see the imported** Footer** content type in the Content Model section of your stack.
- Click the **Footer** content type to view the schema for the content type.![How_to_import_content_models_-_View_content_type_schema](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt572bfcd42074d831/65434cd0195164001b5ba499/How_to_import_content_models_-_View_content_type_schema.png)
- To create an entry for this content type, click **Entries **in the left navigation panel.
- Click the **+ New Entry** button to create a new entry.
- Select the** Footer** content type** **from the list of content types displayed and click the **Proceed **button.![How_to_import_content_models_-_Create_an_entry_for_Footer_content_type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ebd63cd8fae5445/65434cf0039e2c00189e0add/How_to_import_content_models_-_Create_an_entry_for_Footer_content_type.png)You have created an entry for the **Footer** content type.
- Enter the required content, then **Save** and **Publish** the entry.![How to import content models - Footer content type schema](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6df229484339beca/65434d092797e3040709d61e/How_to_import_content_models_-_Footer_content_type_schema.png)

Alternatively, you can import the prebuilt Content Models by clicking the **+ New Content Type** button and then click **Use Prebuilt** within your stack via the CMS. For more information, please refer to the [Import Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md) documentation.

## Common questions

**Q: What is included in Contentstack Marketplace Content Models?**  
A: The Content Models include the [Content Types](../../create-content-types/about-content-types.md), [Global Fields](../../create-content-types/global.md), [Labels](../../create-content-types/about-labels.md), and [Extensions](../../experience-extensions-overview/about-experience-extensions.md).

**Q: Who can import Content Models into a stack?**  
A: Users with access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer.

**Q: What happens if the Content Model already exists within the stack?**  
A: If the Content Model already exists within the stack, you can rename the Content Types, Global Fields, and Labels and import them again by clicking the** Import Content Model **button.

**Q: Is there another way to import prebuilt Content Models besides Marketplace?**  
A: Yes. You can import the prebuilt Content Models by clicking the **+ New Content Type** button and then click **Use Prebuilt** within your stack via the CMS.