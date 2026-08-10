---
title: "Taxonomy for a Basic Blog Website"
description: "Organize your blog website with taxonomy in Contentstack. Follow this step-by-step guide to streamline content management."
url: /headless-cms/taxonomy-for-a-basic-blog-website
---

# Taxonomy for a Basic Blog Website

## Taxonomy for a Basic Blog Website

Taxonomy lets you organize content in your website by grouping related entries under shared terms. This makes it easier to manage blog posts and improves discoverability across your site.

This guide walks you through setting up a taxonomy for a blog website in Contentstack.

Suppose your blog focuses on Information Technology and includes posts on topics such as AI, Data Science, and Java. You can create a taxonomy called **Blog Posts** and define terms like AI, Data Science, and Java to categorize the content accordingly.

Once configured, the taxonomy helps structure your blog content and enables term-based filtering in your frontend.

To create this taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to create a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
2.  Click the **\+ New Taxonomy** button.
3.  In the **Create Taxonomy** modal, add the following details:
    1.  Enter a **Name** for the taxonomy, for example **Blog Posts**. The **Unique ID** will be auto-generated.
        
        **Note:** Once saved, you cannot change the UID.
        
    2.  (Optional) Add a **Description** for reference.
4.  Click **Create Taxonomy**.
    
    **Note**: You can [localize](/docs/headless-cms/taxonomy-localization) the taxonomy name to display language-specific labels.
    
5.  Start defining terms to categorize your blog content. Create a term named **Artificial Intelligence** and click **Save**.
6.  To add a child (nested) term, click the vertical ellipsis next to the parent term and select **Create Child Term**.
7.  Repeat this process to add more terms under the _Blog Posts_ taxonomy as needed. As you build out the taxonomy, the left panel will display the full hierarchy of terms.
8.  Once your terms are in place, click **Publish** to make the taxonomy available on your website.
9.  To enable taxonomy classification in your content type, open the **Blog Posts** content type.
10.  In the **Content Type Builder**, click the **+** icon and select **Taxonomy** from the list of fields.
11.  Name the field **Categories**.
12.  Click **\+ Add Taxonomy** and select **Blog Posts** from the dropdown list.
13.  (Optional) Toggle the **Optional field** switch to make the field non-mandatory.
14.  (Optional) Set a maximum number of terms that can be selected per entry.
15.  Click **Apply**, then **Save and Close** to update the content type.
16.  When creating a new entry for the **Blog Posts** content type:
     1.  Use the **Categories** field to select one or more terms from the _Blog Posts_ taxonomy.
     2.  When publishing the entry, Contentstack will prompt you to publish the taxonomy as well if it's not already published.

Once published, the taxonomy can be used by your frontend application to:

-   Render category navigation
-   Enable taxonomy-based filtering
-   Query entries by taxonomy or term references

This allows your blog to display structured categories and filter content consistently across regions, languages, and environments.
