---
title: Set Up Your Project - Display Name
description: Documentation for the Display Name property when setting up fields in Contentstack content types.
url: https://www.contentstack.com/docs/headless-cms/display-name
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# Set Up Your Project - Display Name

This page explains what the **Display Name** setting is for fields in Contentstack content types, who it applies to (developers configuring content models), and when to use it (while adding fields and setting their properties so entries display the intended field labels).

### Item 1

#### Article section

##### Heading

Display Name

##### Content

In Contentstack, each [field](/docs/developers/create-content-types/about-fields) has a predefined name ([Single Line Textbox](/docs/developers/create-content-types/single-line-textbox), [Link](/docs/developers/create-content-types/link), [Markdown](/docs/developers/create-content-types/markdown), [Global Field](/docs/developers/create-content-types/global), etc.) which you can change and give it a custom name.

**Example**: For a “Contact Us” page on a website, you need “Name,” “Email,” and “Body” fields in the form. To achieve this structure in Contentstack, you need two “Single Line Textbox” fields for “Name” and “Email,” and a “[Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox)” for the “Body” section.

While you [add these fields to your content type](/docs/developers/create-content-types/create-a-content-type), the **Properties **section opens automatically, and the **Display Name** box opens along with the other boxes. You can change the existing name of these fields to **Name**, **Email**, and **Body** accordingly.

**Additional Resource: **To know how to [set labels to content types](/docs/developers/create-content-types/create-and-apply-labels), read our documentation.

Now, when you [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, you will see these fields on the [entry](/docs/content-managers/working-with-entries/about-entries) page as shown below:

**Additional Resource:** You can read more about [Field Visibility Rules](/docs/developers/create-content-types/about-field-visibility-rules) in our documentation where we have covered it extensively.

## Common questions

### What is the Display Name used for?
The **Display Name** lets you change a field’s predefined name to a custom name that appears on the entry page.

### When do I set the Display Name?
You set it while you add fields to your content type, when the **Properties** section opens and the **Display Name** box is available.

### Does changing the Display Name change the field type?
No. The field still remains its original type (for example, **Single Line Textbox** or **Multi Line Textbox**); only the displayed label changes.

### Where can I learn more about related field behavior?
See **Field Visibility Rules** in the linked documentation for more details.