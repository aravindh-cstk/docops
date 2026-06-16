---
title: "[Features Content Models] About Us Page"
description: Documentation for the “About Us Page” content model and its fields, including related content types and global fields.
url: https://www.contentstack.com/docs/developers/content-modeling/about-us-page
product: Features Content Models
doc_type: content-modeling-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Features Content Models] About Us Page

This page explains the “About Us Page” content model, including its main sections and the fields used to build the content type, for developers and content modelers who want to create or import a structured About Us page in their stack.

### Item 1

#### Article section

##### Heading

About Us Page

##### Content

The “About Us Page” content model provides a structured framework for presenting your company/organization information.

Using this content model, you can choose to display a comprehensive view of your company, such as its values, journey, team, and milestones, ensuring visitors understand your organization's ethos and background.

Let’s dive deep into how this model will help you create your company’s “About Us” page.

## Analyzing Requirements for the About Us Page

The About Us Page content model includes four main sections:

The “About Us” hero banner
- The “Our Mission” section with content buckets
- The “Our Story” section displaying the company story
- The “Our Team” section displaying the details of the core team members

Here’s how your About Us Page will look like on your website:

## Identifying Content Model

Let's identify the fields that build up your About Us Page content type that you see in the above step.

## Developing Content Type

The “About Us Page” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

- **About Us**
  - **Title**: **This is where you'll provide your “About Us" page a name, such as “Who We Are," “Our Story," or even “About Us”. The [Title](/docs/developers/create-content-types/title) field defines the title of the About Us page/entry.
  - **URL**: **Here goes the web URL of your “About Us" page. When clicked on, this link provided in the [URL](/docs/developers/create-content-types/url)[/docs/developers/create-content-types/link](/docs/developers/create-content-types/link)field takes users straight to your About Us page.
  - **Page Components**: **The different sections that you see on your “About Us" page have been collectively considered together, and hence have used the [Modular Block](/docs/developers/create-content-types/modular-blocks/) field to create the following components:
    - **Hero Banner**: **This is the big, bold section at the top of your page, usually with standout images or messages. In this block, we have used a [Reference field](/docs/developers/create-content-types/reference) to allow you to fetch “About Us” content/entries from single/multiple content types into your field.
    - **Hero Banner**: **This is a Reference field that refers to the [Hero Banner](/docs/developers/content-modeling/hero-banner#developing-content-type) content type.
    - **Section with Bucket**: **For the “Our Mission” section, we have made use of a [Global field](/docs/developers/global-field/about-global-field/) that contains the following group of fields:
      - **Title H2:** **This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the title to the section.
      - **Description:** This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you can add the banner description.
      - **Tabular Buckets:** This is a [Boolean](/docs/developers/create-content-types/boolean) input field that enables you to add a toggle switch (if you turn it on, tabular buckets are activated; if you turn it off, the field is disabled).
      - **Buckets:** Each bucket might have an image or some information about something important. So we have added a [Group](/docs/developers/create-content-types/group) field within it, including these fields:
        - **Title H3:** This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the headline for your individual bucket.
        - **Image:** This is a [File](/docs/developers/create-content-types/file/) field where you can choose an appropriate image to add.
        - **Image Alignment:** This is a [Select](/docs/developers/create-content-types/select) field where you select an image to help set the visual theme or mood of the section and decide on where the image sits in relation to the text (left, right, center).
        - **Description:** This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you'd write a brief about what this bucket is about.
        - **Icon:** This is a [File](/docs/developers/create-content-types/file/) field where you can choose an appropriate icon or graphic to add to represent the bucket's theme.
        - **Call To Action:** This is a [Link](/docs/developers/create-content-types/link/) field for your buttons where you can add links based on your requirements.
    - **Awards & Achievements**
      - **Awards & Achievements:** This is a [Group](/docs/developers/create-content-types/group) field that enables you to group multiple fields together.
      - **Title:** This is a [Title](/docs/developers/create-content-types/title) field where you can add the headline for your awards & achievements.
      - **Description:** This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you can add the required details/descriptions regarding the above.
      - **Image:** This is a [File](/docs/developers/create-content-types/file/) field where you can choose an appropriate image to add to complement your content.
      - **Link:** This is a [Link](/docs/developers/create-content-types/link/) field where you can add links based on your requirements.
    - **Sections**: **This [Global ](/docs/developers/global-field)field covers a general part of the page, like a paragraph or a block where you can add more details or stories. It consists of the following components:
      - **Title H2:** This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the title to the section.
      - **Description:** This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you can add an explanatory text about the section.
      - **Call To Action:** This is a [Link](/docs/developers/create-content-types/link/) field where you can add CTA links based on your requirements, such as a button that prompts visitors to take action, like “Learn More" or “Contact Us".
      - **Image:** This is a [File](/docs/developers/create-content-types/file/) field where you can choose to an appropriate image to add to complement your content.
      - **Is Image Right Aligned:** This is a [Boolean](/docs/developers/create-content-types/boolean) input field that reflects as a toggle switch and enables users to set the alignment of the image.
    - **Team**
      - **Team:** This [Reference field](/docs/developers/create-content-types/reference) allows you to fetch team information from the Our Team content type as explained in the section below.
    - **Contact Us**
      - **Contact:** This [Reference field](/docs/developers/create-content-types/reference) allows you to fetch contact information from the [Contact](/docs/developers/content-modeling/contact-us-page#developing-content-type) content type.
    - **SEO**: **The SEO [Global](/docs/developers/global-field) field consists of multiple fields, as listed below:
      - **Meta Title**: **For the Meta Title field, you will see a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the meta title of your entry.
      - **Meta Description**: **For the Meta Descriptions field, you will see a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you can add the meta description of your entry.
      - **Meta Keywords**: **For the Meta Keywords field, you will see a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the meta keywords of your entry.
      - **Enable Search Indexing:** **Y**ou can enable or disable the searches in this [Boolean](/docs/developers/create-content-types/boolean/) field. If you turn it on, it makes sure search engines can find your page. If you turn it off, it keeps the page more private.

**Our Team** Content Type:
- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of our team entry. It is a mandatory field and must be unique.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the team’s description.
- **Employees**: This is a [Group](/docs/developers/create-content-types/group/) field that holds the following information:
  - **Name:** This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field to add the employee name.
  - **Designation**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field to add the employee designation.
  - **Image**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the photograph of an employee.
  - **Short Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field to add a short description about the employee.

This completes the creation of your “About Us Page" content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

### What is the “About Us Page” content model used for?
It provides a structured framework for presenting your company/organization information, such as values, journey, team, and milestones.

### What are the main sections included in the About Us Page content model?
The model includes the “About Us” hero banner, the “Our Mission” section with content buckets, the “Our Story” section displaying the company story, and the “Our Team” section displaying the details of the core team members.

### How can I import this prebuilt content model into my stack?
Refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation or the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.