---
title: "Creating Content Collections"
description: "You can build a content collection in Lytics by navigating to Content > Collections from the dashboard. Then click the New Collection button above the…"
url: /lytics/creating-content-collections
---

# Creating Content Collections

## Creating Content Collections

## Building a Content Collection

You can build a content collection in Lytics by navigating to **Content > Collections** from the dashboard. Then click the **New Collection** button above the list of current collections in your account.

Collections can either be dynamic or locked. In the collection builder you can toggle this between these two options.

![7222490-Screenshot_2024-02-08_at_12.05.26_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama4bfda83d14c540a/1ec3ecec599173aed588aa36/7222490-Screenshot_2024-02-08_at_12.05.26_PM.png)

### Dynamic content collections

Dynamic collections are rule-based, so individual pieces of content may enter or exit the collection over time. Dynamic collections are built by selecting and setting content filters which determine what content is present in the collection at any given time. Preview content currently in the collection by hovering over a content card and clicking **Preview this content**.

For example, you can create a collection that includes all articles published in the last 7 days. This setting is ideal for making sure your content collection remains fresh.

### Locked content collections

A locked content collection is a static collection of documents that you hand-select using the collection builder. Content filters can be used as a searching mechanism to help find the specific documents you would like to add to your custom collection. You can add content items to the collection by hovering over a content card and clicking **Select this content**.

![content-collection-hover-state.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2af472ed44a8b62b/fccc28f6086ad150e5d10db9/content-collection-hover-state.png)

Selected content items are indicted by cards with a blue border. Once you save the collection, documents are not added or removed until you edit and save the collection again.

## Content Filters

There are a number of filters available when navigating the content collection builder. These filters can be combined in such a way that narrow down the documents in the collection using "AND" logic.

#### Filter content by title, description, or URL

This filter acts as a catch-all text search for the title, description, and URL of the document. It can be a full or partial match to any of these fields, and the input is case sensitive. You can enter multiple values for this filter type, and the results are not mutually exclusive. That is, if you have entered the search terms "Dog" and "Cat", each of the documents returned should contain "Dog" or "Cat", but not necessarily both ("OR" logic).

Perhaps the most common use of this field is to filter by a URL path. For example, say you're looking to build a dynamic collection of all blog posts from your website, and the URL of your blog posts match the following pattern: http://yourdomain.com/blog/name-of-your-post. To build this collection you can enter /blog/ into this filter.

![6bd01ae-Screenshot_2024-02-08_at_12.05.49_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am51cd3746cadb3199/93096aabaf92026b8ba82f54/6bd01ae-Screenshot_2024-02-08_at_12.05.49_PM.png)

### Content type

The type of a document is derived by the Lytics Content Affinity Engine while analyzing and indexing the document. A document maybe be classified as any of the following:

-   Article
-   Discussion
-   Email
-   FAQ
-   Image
-   Job
-   Other
-   Person
-   Post
-   Product
-   Profile
-   Video

These checkbox filters allow you to view content of only the selected type(s). For example, if you want to build a dynamic collection of videos to recommend to users, you might select the **Video** content type.

### Published date

This filter allows you to limit documents based on their date of publication. You may filter documents published after a date relative to the current time or after a static date in time. Relative dates may be set by increments of days, weeks, months, or years.

Using a relative date filter allows you ensure that the content in your collection is evergreen. For example you may want to only recommend content that was published in the last week:

![65e386f-Screenshot_2024-02-08_at_12.06.23_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2129e62c6b479179/e5c779ca6be2acc630b1ab8c/65e386f-Screenshot_2024-02-08_at_12.06.23_PM.png)

If you launched a new product recently, you may want to build a collection of content relevant to that launch. Using the static date filter set to the day before the launch, combined with other filters could help achieve this.

![a1cbc18-Screenshot_2024-02-08_at_12.06.41_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am389efc5d688609c1/404e6c138b2a6e924032d1b1/a1cbc18-Screenshot_2024-02-08_at_12.06.41_PM.png)

### Features

The features filter allows you to select whether or not the content should have a description and/or a thumbnail image. Both the image and description fields are extracted from HTML meta tags during the scraping process of the content affinity engine. Enabling these settings may be especially useful if you are looking to implement content recommendations into a space on your website and you wish to include more than just a title and link to the content.

![d879a1a-Screenshot_2024-02-08_at_12.07.07_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0e1de07fad4911ce/2ade74a7ff1aa10ac7106e22/d879a1a-Screenshot_2024-02-08_at_12.07.07_PM.png)

### Author

The author filter allows you to include only articles written by the author(s) selected. If you have a long list of authors, you can use the search bar to find the author(s) you are looking for.

![8e59ea1-Screenshot_2024-02-08_at_12.07.14_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc0c09140d8963829/cb74332b73e1cb6003aafb3f/8e59ea1-Screenshot_2024-02-08_at_12.07.14_PM.png)

### Affinities

The Affinities filter lists all the curated Affinities in your account. Since Affinities are a group of related topics, this option can save you time when building collections for a campaign targeting users interested in several related subjects or products.

![a0a7517-Screenshot_2024-02-08_at_12.07.46_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5e4366bc88f94936/be430e26184c27b47c40c018/a0a7517-Screenshot_2024-02-08_at_12.07.46_PM.png)

### Topics

The Topics filter lists all the topics present in your account. You can select one or multiple to filter the content by, and use the search bar to find specific topics. Building a collection filtered by topic can be especially helpful when running a topic specific campaign.

![4372c08-Screenshot_2024-02-08_at_12.07.50_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amff0d6a01e63fc35b/4c1c2a86184014fdd3656ce8/4372c08-Screenshot_2024-02-08_at_12.07.50_PM.png)

## Advanced Collection Editor

The filters above cover many common use cases. However, in some cases a more advanced set of filtering criteria is required. This is achievable via the Advanced Editor which is accessible from the triple dot menu on a collection summary or from the collection editor view.

![f8b687a-Screenshot_2024-02-08_at_12.08.26_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am880f2447d5fc3e6b/7ec78e4d9529ec6659dbc88d/f8b687a-Screenshot_2024-02-08_at_12.08.26_PM.png)

From the Advanced Editor you can leverage the inclusion of other content collections or a custom rule just as you would with custom rules in the core Audience Builder. These custom rules surface the full set of fields associated with your content during the classification process. Word count, language in addition to all filters referenced above are accessible through this advanced editor.

![a6e1b64-Screenshot_2024-02-08_at_12.08.55_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf1ff676acc02aed9/a8098816c136705fa06da302/a6e1b64-Screenshot_2024-02-08_at_12.08.55_PM.png)

**Note:** Currently the Advanced Editor is only accessible for existing collections. If you are looking to create a net new collection, simply create a new collection with a basic filter and save. From there you can access the Advanced Editor.

#
