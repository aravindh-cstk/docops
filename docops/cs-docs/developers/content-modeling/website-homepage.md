---
title: "[Features Content Models] Website Homepage"
description: Documentation for the “Website Homepage” content model, including fields, components, and related content types and global fields.
url: https://www.contentstack.com/docs/developers/content-modeling/website-homepage
product: Contentstack
doc_type: feature-content-model
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Features Content Models] Website Homepage

This page describes the “Website Homepage” content model, including its purpose, structure, and the fields/components used to build a homepage. It is intended for developers and content modelers who need to implement or import the prebuilt Website Homepage content model and understand how its fields map to homepage sections.

### Item 1

#### Article section

##### Heading

Website Homepage

##### Content

The “Website Homepage” content model acts as the foundational blueprint for the main landing page of a website. By designing a thorough content model for the homepage, businesses ensure a consistent and engaging user experience that captures the essence of their brand and mission.

Let’s dive deep into how this model will help you create your company’s Website Homepage.
- ## Analyzing Requirements for the Homepage

    At the core of our website lies the homepage, which features a captivating hero banner, readily accessible contact details, organized sections with buckets and cards, and much more. The Website Homepage Content Model includes fields and structures thoughtfully designed to capture the key information about the homepage of your website. It outlines the structure, elements, and types of content required to present the site's primary message, brand identity, and user navigation.

Typically, it encompasses key components:

      The “Website Header” at the top of the page
- The “Hero section” which is the hero banner area
- The “Feature Highlights” section
- The “Testimonials” section
- The “Website footer” at the bottom

    The Website Homepage Content Model makes use of six additional content types - “**Author**”, “**Blog Landing Page**”, “**Contact Us**”, “**Hero Banner**”, “**Homepage**”, “**Our Team**” and six global fields - **SEO**, **Social Share**, **Section With HTML Code**, **Section With Cards**, **Section**, **Section With Buckets**.

    Here’s how your homepage will look like on your website:
- ## Identifying Content Model

    Let's identify the fields that build up your Website Homepage content type that you see in the above step.
- ## Developing Content Type

    The “Website Homepage” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

    **Homepage **Content Type:

    Let’s look in detail at what fields were used to create the content type:

      **Title**: This is where you'll provide your “Website Homepage" page a name. The [Title](../create-content-types/title.md) field displays the title of the Website Homepage. This is a required field and must be unique.
- **URL**: Here is the web URL of your “Website Homepage". This [URL](../create-content-types/url.md) field displays the URL of the homepage. This is a required field and must be unique.
- **Page Components**: The different sections that you see on your “Website Homepage" have been collectively considered together and hence have used the [Modular Block](../create-content-types/modular-blocks.md) field to create the following components
          **Hero Banner**: This [Modular Block](../create-content-types/modular-blocks.md) field has the following components:
              **Hero Banner**: This is the big, bold section at the top of your homepage, usually with standout images or messages. This is a [Reference](../create-content-types/reference.md) field that refers to the [Hero Banner](./hero-banner.md#developing-content-type)content type. In this block, we have used a [Reference field](../create-content-types/reference.md) to allow you to fetch “Website Homepage” content/entries from single/multiple content types into your field.
- **Section With Buckets**: This [Modular Block](../create-content-types/modular-blocks.md) field contains the **Section with Buckets** [Global](../create-content-types/global.md) field, which has the following components:
              **Title H2**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field that displays the title of the section. The title is displayed as a level-two heading.
- **Description**: This is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field to add the description for the section.
- **Tabular Buckets**: This is a [Boolean](../create-content-types/boolean.md) field that specifies whether the data is represented in tabular format or not.
- **Buckets**: This [Group](../create-content-types/group.md) field includes the following fields:
                  **Title H3:** This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field that stores the title for this subsection. The H3 element defines a level-three heading.
- **Image**: This is a [File](../create-content-types/file.md) field that allows you to choose the image for the bucket and add it to the entry.
- **Image Alignment**: This is a [Select](../create-content-types/select.md) field where you can choose the alignment of an image. Image alignment can be Left, Centre, or Right.
- **Description**: This is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field that stores the description for this bucket.
- **Icon**: This is a [File](../create-content-types/file.md) field that allows you to choose the icon for the bucket and add it to the entry. Ideally, the image file for the icon should be less than **100KB** in a PNG format.
- **Call To Action**: This is a [Link](../create-content-types/link.md) field that stores the bucket button name as a title and links it for redirection.
- **Section**: This [Modular Block](../create-content-types/modular-blocks.md) field contains the **Section** [Global](../create-content-types/global.md) field, which has the following components:
              **Title H2**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field that displays the title of the section. The title is displayed as a level-two heading.
- **Description**: This is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field to add the description for the section.
- **Call To Action**: This is a [Link](../create-content-types/link.md) field where you can add links based on your requirements.
- **Image**: This is a [File](../create-content-types/file.md) field where you can add an image as per your requirement.
- **Is Image Right Aligned**: This is a [Boolean](../create-content-types/boolean.md) field that specifies if the image is left-aligned or right-aligned.
- **Section With Cards**: This [Modular Block](../create-content-types/modular-blocks.md) field contains the **Section with Cards** [Global](../create-content-types/global.md) field, which has the following components:
              **Section Title**: This is a [Title](../create-content-types/title.md) field that displays the title of the section. This is a mandatory field and must be unique.
- **Section Description**: This is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field to add the description of the section.
- **Cards**: This [Group](../create-content-types/group.md) field includes the following fields to add the question-answers to the FAQs section:
                  **Card Title H3**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field to add the title of the card. The title is displayed as a level-three heading.
- **Description**: This is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field to add the description for the card.
- **Call To Action**: This is a [Link](../create-content-types/link.md) field to add links based on your requirements.
- **Image**: This is a [File](../create-content-types/file.md) field to add an image as per your requirement.
- **Section with HTML Code**: This is the second block that contains a **Section with HTML Code **[Global](../create-content-types/global.md) field, which covers the following components:
              **Title**: Title is a [Title](../create-content-types/title.md) field that defines the title of this specific section.
- **Description**: Description is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field that stores the detailed description of the HTML code.
- **HTML Code**: This is a [Custom](../create-content-types/custom.md) field containing [Ace Editor](../marketplace-apps/ace-editor.md) as an extension.
- **Is HTML Code Left Aligned?**: This is a [Boolean](../create-content-types/boolean.md) field that specifies that the HTML Code is left-aligned or right-aligned.
- **Our Team**: This [Modular Block](../create-content-types/modular-blocks.md) field has the following components:
              **Our Team**: This is a [Reference Field](../create-content-types/reference.md) that refers to the [Our Team](./about-us-page.md#developing-content-type) content type.
- **From Blog**: This [Modular Block](../create-content-types/modular-blocks.md) field covers the following components of a blog in the list:
              **Title H2**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field to add the title of the reference blog. The title is displayed as a level-two heading.
- **Featured Blogs**: This is a [Reference](../create-content-types/reference.md) field that refers to the [Blog Landing Page](./blog-landing-page.md#developing-content-type) content type. You can find the Author content type in the [Blog Landing Page](./blog-landing-page.md#developing-content-type) content model.
- **View Articles**: This is a [Link](../create-content-types/link.md) field to add links to any related articles.
- **Widget**: This [Modular Block](../create-content-types/modular-blocks.md) field covers the following components of the widget section:
              **Title H2**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field to add the title of the blog in the list. The title is displayed as a level-two heading.
- **Type**: This is a [Select](../create-content-types/select.md) field where you can add the widget type. The widget types are as follows:
                  Blog Archive
- Related Posts
- **Contact Us**: This [Modular Block](../create-content-types/modular-blocks.md) field has the following components:
              **Reference**: This is a [Reference Field](../create-content-types/reference.md) that refers to the [Contact](./contact-us-page.md#developing-content-type)content type.
- **SEO**: This [Global](../create-content-types/global.md) field covers the following SEO components:
          **Meta Title**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field to add the meta title of your homepage. Ideally, this should be between **120 to 160 **characters.
- **Meta Description**: This is a [Multi Line Textbox](../create-content-types/multi-line-textbox.md) field to add the meta description of your homepage.
- **Meta Keywords**: This is a [Single Line Textbox](../create-content-types/single-line-textbox.md) field to add the meta keywords of your homepage.
- **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](../create-content-types/boolean.md) field.

This completes the creation of your “Website Homepage” content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](../create-content-types/import-prebuilt-content-models.md) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](../marketplace-platform-guides/content-models/how-to-import-content-model.md) document.

## Common questions

**Q: What is the purpose of the “Website Homepage” content model?**  
A: The “Website Homepage” content model acts as the foundational blueprint for the main landing page of a website.

**Q: What field is used to create the different homepage sections under “Page Components”?**  
A: The [Modular Block](../create-content-types/modular-blocks.md) field is used to create the components.

**Q: Which content types and global fields are referenced by the Website Homepage Content Model?**  
A: It makes use of six additional content types - “**Author**”, “**Blog Landing Page**”, “**Contact Us**”, “**Hero Banner**”, “**Homepage**”, “**Our Team**” and six global fields - **SEO**, **Social Share**, **Section With HTML Code**, **Section With Cards**, **Section**, **Section With Buckets**.

**Q: Where can I find instructions to import this content model?**  
A: Refer to [Import Prebuilt Content Models](../create-content-types/import-prebuilt-content-models.md) and [How to Import a Content Model via Marketplace](../marketplace-platform-guides/content-models/how-to-import-content-model.md).