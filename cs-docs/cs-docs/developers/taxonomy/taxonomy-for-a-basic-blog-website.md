---
title: "[Taxonomy] - Taxonomy for a Basic Blog Website"
description: Taxonomy for a Basic Blog Website
url: https://www.contentstack.com/docs/headless-cms/taxonomy-for-a-basic-blog-website
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# [Taxonomy] - Taxonomy for a Basic Blog Website

This page explains how to set up a taxonomy for a basic blog website in Contentstack. It is intended for developers and content administrators who want to organize blog content using taxonomy terms and enable term-based filtering and navigation in a frontend application.

## Taxonomy for a Basic Blog Website

Taxonomy lets you organize content in your website by grouping related entries under shared terms. This makes it easier to manage blog posts and improves discoverability across your site.

This guide walks you through setting up a taxonomy for a blog website in Contentstack.

Suppose your blog focuses on Information Technology and includes posts on topics such as AI, Data Science, and Java. You can create a taxonomy called **Blog Posts** and define terms like AI, Data Science, and Java to categorize the content accordingly.

Once configured, the taxonomy helps structure your blog content and enables term-based filtering in your frontend.

To create this taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) where you want to create a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
- Click the **+ New Taxonomy** button.
- In the **Create Taxonomy** modal, add the following details:

      Enter a **Name** for the taxonomy, for example **Blog Posts**. The **Unique ID** will be auto-generated.
        **Note**: Once saved, you cannot change the UID.
- (Optional) Add a **Description** for reference.
- Click **Create Taxonomy**.

      **Note**: You can [localize](/docs/developers/taxonomy/taxonomy-localization) the taxonomy name to display language-specific labels.
- Start defining terms to categorize your blog content. Create a term named **Artificial Intelligence** and click **Save**.
- To add a child (nested) term, click the vertical ellipsis next to the parent term and select **Create Child Term**.
- Repeat this process to add more terms under the *Blog Posts* taxonomy as needed. As you build out the taxonomy, the left panel will display the full hierarchy of terms.
- Once your terms are in place, click **Publish** to make the taxonomy available on your website.
- To enable taxonomy classification in your content type, open the **Blog Posts** content type.
- In the **Content Type Builder**, click the **+** icon and select **Taxonomy** from the list of fields.
- Name the field **Categories**.
- Click **+ Add Taxonomy** and select **Blog Posts** from the dropdown list.
- (Optional) Toggle the **Optional field** switch to make the field non-mandatory.
- (Optional) Set a maximum number of terms that can be selected per entry.
- Click **Apply**, then **Save and Close** to update the content type.
- When creating a new entry for the **Blog Posts** content type:

      Use the **Categories** field to select one or more terms from the *Blog Posts* taxonomy.
- When publishing the entry, Contentstack will prompt you to publish the taxonomy as well if it's not already published.

Once published, the taxonomy can be used by your frontend application to:
- Render category navigation
- Enable taxonomy-based filtering
- Query entries by taxonomy or term references

This allows your blog to display structured categories and filter content consistently across regions, languages, and environments.

## Common questions

### Do I need to publish the taxonomy separately from entries?
Yes. When publishing the entry, Contentstack will prompt you to publish the taxonomy as well if it's not already published.

### Can I create nested categories for my blog taxonomy?
Yes. To add a child (nested) term, click the vertical ellipsis next to the parent term and select **Create Child Term**.

### Can I localize the taxonomy name?
Yes. **Note**: You can [localize](/docs/developers/taxonomy/taxonomy-localization) the taxonomy name to display language-specific labels.

### Where do I add taxonomy classification in a content type?
In the **Content Type Builder**, click the **+** icon and select **Taxonomy** from the list of fields, then add the taxonomy (for example **Blog Posts**) to the field (for example **Categories**).