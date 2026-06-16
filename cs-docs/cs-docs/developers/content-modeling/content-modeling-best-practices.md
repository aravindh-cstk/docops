---
title: "[Content Modeling] - Content Modeling Best Practices"
description: Best practices for modeling content types in Contentstack for efficient, reusable, and scalable content management.
url: https://www.contentstack.com/docs/developers/content-modeling/content-modeling-best-practices
product: Contentstack
doc_type: best-practices
audience:
  - developers
  - content-architects
  - solution-architects
version: current
last_updated: 2026-03-25
---

# [Content Modeling] - Content Modeling Best Practices

This page explains recommended best practices for content modeling in Contentstack, including how to structure content types and choose field types for reuse, scalability, and maintainability. It is intended for developers and architects designing content models, and should be used when planning or refining content types and field structures.

## Content Modeling Best Practices

[Content modeling](/docs/developers/content-modeling/about-content-modeling) in Contentstack is the process of defining the structure of your [content types](/docs/developers/create-content-types/about-content-types) to ensure efficient, reusable, and scalable content management. There are certain best practices that you can follow to make sure you model the content in the recommended way.

Before starting with content modeling, ensure you have the following:
- **Website Design**: Wireframes or mockups that illustrate the front-end structure and content components.
- **Knowledge of Data Types**: A clear understanding of each content element’s purpose and the type of data it stores (e.g., text, images, links).

Now, let us explore the best practices for effective content modeling.

## Plan Your Content Types Based on Design
Before creating content types, it is essential to understand your website or app’s design structure. Reviewing detailed wireframes or mockups helps you identify content components and their relationships.
- **Break Down Components**: Identify key sections like banners, blog posts, product pages, and testimonials.
- **Recognize Reusable Elements**: Components like headers, footers, and CTAs that repeat across multiple pages should be modeled separately.
- **Create a Content Map**: Define content types for each component to ensure your structure mirrors the design and supports future scalability.

Thoughtful planning prevents redundant content types and simplifies future updates.

## Avoid Reserved Keywords in UIDs
Do not use reserved keywords in unique identifiers (UIDs). Refer to the [Restricted Keywords for UIDs](/docs/developers/create-content-types/restricted-keywords-for-uids) document for a complete list. This ensures smooth API query execution and avoids potential issues.

**Note**: Refrain from using hyphens (-) in content type UIDs.

## Use “Reference” Fields for Reusable Content
[Reference](/docs/developers/create-content-types/reference) fields allow you to link entries across different content types, promoting consistency and reusability. This field type is ideal when you have data shared among multiple entries. Consider the following use cases where Reference fields can be effectively utilized:
- **Self Referencing**: Use Reference fields within the same content type to establish relationships.**Example**: In a Product content type, use a Reference field for Recommendations to suggest related products.
- **Include Referencing**: Use Reference fields to link entries across different content types.**Single Content Type Referencing**: In a News Article content type, use a Reference field named Authors to link to entries in the Authors content type.
- **Multiple Content Type Referencing**: In a Brand content type, use a Reference Field to link to entries from Clothes, Shoes, and Bags content types for displaying all products of a selected brand.

By using Reference fields effectively, you can manage content relationships with ease, improve data reuse, and maintain consistency across entries.

## Use “Group” Field for Organized Items
[Group](/docs/developers/create-content-types/group) fields help organize related fields into a single, reusable structure. This is useful for components such as banners, footers, and call-to-action sections where multiple elements are grouped together.

For instance, a banner component could consist of the following elements:
- **Title**: Single Line Text
- **Description**: Multi Line Text
- **Image**: File field
- **CTA Button**: Link field

When you use Group fields, you improve organization by keeping related content bundled together. For multiple instances of grouped components, enabling the **Multiple** option helps maintain flexibility. Nesting Group fields within each other allows you to manage more complex structures easily.

## Leverage “Modular Blocks” Field for Dynamic Content
[Modular Blocks](/docs/developers/create-content-types/modular-blocks) provide flexibility by allowing content managers to dynamically select and arrange different content structures within a single field. This is particularly useful for pages with varying layouts.

You can set up a Modular Blocks field that includes the following block types:
- **Banner**: Image, Title, and Description.
- **Video Gallery**: Video File and CTA Button.
- **Image and Text**: Image and Rich Text Editor.

Using Modular Blocks enables content managers to customize page layouts without developer intervention. It supports scalable and dynamic content delivery.

**Additional Resource: **Refer to the [Modular Blocks – Real World Scenarios](/docs/developers/create-content-types/modular-blocks#modular-blocks-real-world-scenarios) guide for practical examples.

## Use “Global” Fields for Reusable Fields
[Global](/docs/developers/global-field/about-global-field) fields allow you to create a set of fields once and reuse them across multiple content types. This is ideal for fields that need to appear consistently across different content types.

For example, you can create an SEO Global field that contains the following fields:
- **Meta Title**: Single Line Text
- **Meta Description**: Multi Line Text
- **Keywords**: Single Line Text

Using Global fields ensures consistency across content types. It reduces redundancy by allowing you to manage shared fields in one central location, simplifying updates.

## Use “Custom” Field for Customized Content
Custom fields allow you to create unique input types that go beyond the default options provided by Contentstack. These fields are ideal when you need to accept custom data types or create visually distinct inputs. Here are some examples of custom fields:
- **Color Picker**: Use the Contentstack [Color Picker](/docs/developers/marketplace-apps/color-picker) app to dynamically adjust colors on web pages or apply product filters in eCommerce websites.
- **Ace Editor**: Integrate the [Ace Editor](/docs/developers/marketplace-apps/ace-editor) app to write and edit code with syntax highlighting and multi-language support directly in Contentstack.
- **Star Ratings**: Use the [Star Ratings](/docs/developers/marketplace-apps/star-ratings) app to add rating systems, such as approval ratings for movies, to your entries.
- **Third-party integrations**: Custom fields can also be used to integrate with external platforms such as [Shopify](/docs/developers/create-custom-fields/shopify), [Amazon S3](/docs/developers/create-custom-fields/amazon-s3), [YouTube](/docs/developers/marketplace-apps/youtube), [Optimizely](/docs/developers/marketplace-apps/optimizely), and so on.

**Tip:** Use Custom fields strategically to extend Contentstack’s capabilities while keeping content types manageable.

## Reference vs. Select Fields
Understanding the difference between [Reference](/docs/developers/create-content-types/reference) and [Select](/docs/developers/create-content-types/select) fields ensures you choose the right tool for your content needs.
- **Reference fields**: Used for linking entries within the same or other content types.
**Example:** In a Blog content type, use a Reference field named “Author” to connect entries from the Authors content type.
- **Select fields**: Used for predefined options to pick from.
**Example:** In a user profile content type, use a Select field to choose options like age groups or gender.

**Tip:** Choose **Reference** fields for dynamic content relationships and **Select** fields for static choices.

## Boolean Fields for Conditional Content
[Boolean](/docs/developers/create-content-types/boolean) fields are perfect for managing simple true/false conditions. These fields provide a checkbox interface, making them easy to use for content managers.

**Example:** For an e-commerce store, use a Boolean Field named “Availability” to indicate whether a product is “Available” or “Out of Stock.”

Boolean fields streamline decision-making and ensure clarity in content management.

## Choosing the Ideal Rich Text Editor
Contentstack offers multiple **Rich Text Editor** (**RTE**) options to support diverse content formatting needs.
- [**HTML Rich Text Editor**](/docs/developers/create-content-types/rich-text-editor): For advanced formatting like embedding videos, custom HTML, or adding styled text. Suitable for developers comfortable with HTML tags.
- [**JSON Rich Text Editor**](/docs/developers/json-rich-text-editor/about-json-rich-text-editor): For structured content where formatting is applied via UI buttons. Ideal for embedding social media content or creating uniform styling.
- [**Markdown Editor**](/docs/developers/create-content-types/markdown): For text-heavy content formatted using Markdown syntax. Easy to read and write, making it a good choice for simple text formatting.

**Tip:** Select the appropriate RTE based on the complexity of your content requirements.

## Building Complex Navigation Structures
When designing complex navigation structures, it is important to use the right field type based on the hierarchy depth.
- **Group fields**: Use for simple hierarchies with up to three levels.
**Example:** Sidebar menus with categories and subcategories.
- **Reference fields**: Use for deeper hierarchies with nested relationships.
**Example:** Documentation for API calls where sections reference multiple subtopics.

For example, add a Group field in an API Reference content type to manage navigation efficiently. Inside the Group field, include:
- **Title**: Single Line Text for section names.
- **Description**: Multi Line Text for additional details.
- **Reference field**: To link API call entries for each section.

This structure helps you manage navigation elements efficiently and ensures flexibility.

## Best Practices for Referencing Entries in Code
Entries in Contentstack are identified by a unique alphanumeric string called the Entry UID. While it is possible to use UIDs in your code, this is not recommended because UIDs change during stack migrations.

Instead of relying on UIDs, reference entries by using a unique, immutable field such as the Title field or a custom identifier.

**Example using the Title field:**

```
[Contentstack Headless CMS](/blogs/contentstack-headless-cms)
```
Using unique fields ensures your code remains portable and reduces the need for extensive updates during content migrations.

## Common questions

### When should I use Reference fields instead of Select fields?
Use Reference fields when you need to link entries within the same or other content types, and use Select fields when you need predefined options to pick from.

### Why should I avoid using Entry UIDs in code?
It is not recommended because UIDs change during stack migrations.

### What field type should I use for reusable sets of fields across content types?
Use Global fields to create a set of fields once and reuse them across multiple content types.

### What should I prepare before starting content modeling?
Ensure you have Website Design wireframes or mockups and Knowledge of Data Types for each content element’s purpose and the type of data it stores.