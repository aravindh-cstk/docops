---
title: [Search Content] - Using the New Search: Real-world Scenarios
description: Using the New Search: Real-world Scenarios
url: https://www.contentstack.com/docs/headless-cms/using-the-new-search-real-world-scenarios
product: Contentstack
doc_type: documentation
audience:
  - content-managers
version: v1
last_updated: 2024-11-12
filename: using-the-new-search-real-world-scenarios.md
---

# [Search Content] - Using the New Search: Real-world Scenarios

This page explains [Search Content] - Using the New Search: Real-world Scenarios for Contentstack. It is intended for content managers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Using the New Search: Real-world Scenarios

In this section, we will look at a few real-world scenarios to understand how [advanced search](/docs/content-managers/search-content/about-advanced-search) helps perform more accurate searches in Contentstack.

Consider a scenario where you have a [stack](../../developers/set-up-stack/about-stack.md) named “Demo” that contains multiple [content types](../../developers/create-content-types/about-content-types.md) with several [entries](../author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets). A few of the target content types of which you want to search entries are “Blog” and “Products”.

Now, let’s see some scenarios to understand how Contentstack’s search queries will work on the entries and assets of your stack.

* [Search any entry with the term ‘Artificial Intelligence’](./using-the-new-search-real-world-scenarios.md#search-any-entry-with-the-term-artificial-intelligence)
* [Search ‘Blog’ entries with the term ‘Artificial Intelligence’](./using-the-new-search-real-world-scenarios.md#search-blog-entries-with-the-term-artificial-intelligence)
* [Search ‘Blog’ entries with ‘Artificial Intelligence’ and published on ‘Development’](./using-the-new-search-real-world-scenarios.md#search-blog-entries-with-artificial-intelligence-and-published-on-development)
* [Search 'Blog' entries with 'Title' containing ‘Artificial Intelligence’](./using-the-new-search-real-world-scenarios.md#search-blog-entries-with-title-containing-artificial-intelligence)
* [Search 'Blog' entries with 'Title' containing ‘Artificial Intelligence’ and published on 'Development'](./using-the-new-search-real-world-scenarios.md#search-blog-entries-with-title-containing-artificial-intelligence-and-published-on-development)
* [Search 'Blog' entries where 'Title' contains ‘Artificial Intelligence’ and 'Author' contains 'Matthew'](./using-the-new-search-real-world-scenarios.md#search-blog-entries-where-title-contains-artificial-intelligence-and-author-contains-matthew)
* [Search 'Blog' entries where 'Title' contains ‘Artificial Intelligence’ and 'Category' is 'News'](./using-the-new-search-real-world-scenarios.md#search-blog-entries-where-title-contains-artificial-intelligence-and-category-is-news)
* [Search 'Blog' entries where 'Title' contains ‘Artificial Intelligence’ and 'Meta Tags' SEO field contains 'AI'](./using-the-new-search-real-world-scenarios.md#search-blog-entries-where-title-contains-artificial-intelligence-and-meta-tags-seo-field-contains-ai)
* [Search 'Blog' entries where 'Title' contains ‘Artificial Intelligence’ and 'Gender' is 'Female'](./using-the-new-search-real-world-scenarios.md#search-blog-entries-where-title-contains-artificial-intelligence-and-gender-is-female)
* [Search 'Blog' entries where 'Title' contains ‘Artificial Intelligence’ and 'Blog Image' is 'Science and Technology'](./using-the-new-search-real-world-scenarios.md#search-blog-entries-where-title-contains-artificial-intelligence-and-blog-image-is-science-and-technology)

### Search any entry with the term ‘Artificial Intelligence’

Let's say you need to bring up all the entries of the stack that contain the word “Artificial Intelligence” anywhere within their fields. In this case, you can use a “full-text search” that fetches results for the search phrase in all the fields anywhere in the stack.

![Advanced_Search_Case_1.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt47ae19e7709c7c5d/625cada238818f4df2a2c26f/Advanced_Search_Case_1.gif)

This will display all the entries of your stack that contain the term “Artificial Intelligence”.

### Search ‘Blog’ entries with the term ‘Artificial Intelligence’

Let’s say you want to bring up all the entries in the "Blog" content type that contain the word “Artificial Intelligence” in their fields. In this case, you can use a “basic search” that fetches results for the search phrase in all the fields anywhere in the "Blog" content type.

To run the basic search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”.
2. Type in "Artificial Intelligence" and press "Enter" to fetch all entries with the term "Artificial Intelligence".
3. To narrow down the results further, click anywhere inside the search bar, enter "content type" and select the **Content Type** filter from the available options.
4. Then, select the **Blog** content type from the dropdown list.
5. Press "Enter" to search the stack based on these two filters.

![Advanced_Search_Case_2.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0fe29c35dd496055/625cada2899dad4bfa8b285f/Advanced_Search_Case_2.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence”.

**Tip**: If you are unaware of the exact keyword ("Artificial Intelligence") for your basic search, we recommend that you run an advanced search to refine your search results based on specific conditions.

### Search ‘Blog’ entries with ‘Artificial Intelligence’ and published on ‘Development’

Let’s say, you want to bring up all the entries of the "Blog" content type that contain the word “Artificial Intelligence” in their fields and are published on the "Development" environment. In this case, you can use a “basic search” that fetches results for the search phrase in all the fields anywhere in the "Blog" content type.

To run the basic search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”.
2. Type in "Artificial Intelligence" and press "Enter" to fetch all entries with the term "Artificial Intelligence".
3. To narrow down the results further, click anywhere inside the search bar, enter "content type" and select the **Content Type** filter from the available options.
4. Then, select the **Blog** content type from the dropdown list.
5. Next, enter "published" and select the **Published Environment** filter from the available options.
6. Then, select the **development** environment from the dropdown list.
7. Press "Enter" to search the stack based on these three filters.

![Advanced_Search_Case_3.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7c6b80da177196a4/625cada3102a0b4e934e1f8f/Advanced_Search_Case_3.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” and have been published to the “Development” environment.

**Tip**: If you are unaware of the exact keyword ("Artificial Intelligence") for your basic search, we recommend that you run an advanced search to refine your search results based on specific conditions.

### Search ‘Blog’ entries with ‘Title’ containing ‘Artificial Intelligence’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields. In this case, you can run an “advanced search” using conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”.
2. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
3. For the main search query, select **Content Type** as “Blog”. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence”.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_4.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfd83927c7ce2383a/625cada3b87c7b4bf91c2242/Advanced_Search_Case_4.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields.

### Search ‘Blog’ entries with ‘Title’ containing ‘Artificial Intelligence’ and published on ‘Development’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields and are published to the “Development” environment. In this case, you can use an “advanced search” with conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
2. For the main search query, select **Content Type** as “Blog” and **Published Environment** as “development”.
3. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence”.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_5.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt975d8573035a93cf/625cada33531aa4a9d831cd0/Advanced_Search_Case_5.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields and are published on the “Development” environment.

### Search ‘Blog’ entries where ‘Title’ contains ‘Artificial Intelligence’ and ‘Author’ contains ‘Matthew’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields and “Matthew” in their “Author” fields. In this case, you can use an “advanced search” with conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
2. For the main search query, select **Content Type** as “Blog”.
3. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence” and the **Author** field contains the word “Matthew”.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_6.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt665d562c25340b7c/625cada42e17474fc7b93792/Advanced_Search_Case_6.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields and “Matthew” in their “Author” fields.

### Search ‘Blog’ entries where ‘Title’ contains ‘Artificial Intelligence’ and ‘Category’ is ‘News’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields and their “Category” Reference fields are of “News” type. In this case, you can use an “advanced search” with conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
2. For the main search query, select **Content Type** as “Blog”.
3. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence” and the **Category** Reference field is of type “News”.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_7.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt86c4b8ce74b1caab/625cada5fea57c4dece53986/Advanced_Search_Case_7.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields and have “Category” Reference fields of type “News”.

### Search ‘Blog’ entries where ‘Title’ contains ‘Artificial Intelligence’ and ‘Meta Tags’ SEO field contains ‘AI’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields and the “Meta Tags” field within the “SEO” Group fields contains the word “AI”. In this case, you can use an “advanced search” with conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
2. For the main search query, select **Content Type** as “Blog”.
3. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence” and the **Meta Tags** Multiline field inside the “SEO” Group field contains the tag “AI”.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_8.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6d3a275419c9342d/625cada6029c3b4a971b8a2d/Advanced_Search_Case_8.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields and have a **Meta Tags** Multiline field inside the “SEO” Group fields that contain the tag “AI”.

### Search ‘Blog’ entries where ‘Title’ contains ‘Artificial Intelligence’ and ‘Gender’ is ‘Female’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields and the “Gender” Select field with “Female” as the selected option. In this case, you can use an “advanced search” with conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
2. For the main search query, select **Content Type** as “Blog”.
3. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence” and the **Gender** Select field has “Female” as the selected option.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_9.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3caaa1770e725196/625cada61c67524fc6889f32/Advanced_Search_Case_9.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields and have a **Gender** Select field that has “Female” as the selected option.

### Search ‘Blog’ entries where ‘Title’ contains ‘Artificial Intelligence’ and ‘Blog Image’ is ‘Science and Technology’

Let’s say, you want to bring up all the entries in “Blog” content type that contain the word “Artificial Intelligence” in their “Title” fields and “Blog Image” File fields with filename as “Science and Technology”. In this case, you can use an “advanced search” with conditions that fetch results for the search phrase in the “Title” fields anywhere in the “Blog” content type.

To run the advanced search, perform the following steps:

1. Navigate to the search bar located on the header tab of the Contentstack site or press “K”. To run an advanced search, type “;” (semicolon), hit “Enter” and select the **Match All** option.
2. For the main search query, select **Content Type** as “Blog”.
3. Then click on the “Add Nested Condition Set” (**+**) button to add a nested search query. The nested search query checks whether the **Title** field contains the term “Artificial Intelligence” and the **Blog Image** File field contains the filename “Science and Technology”.
4. Click on **Apply** to run the advanced search.

![Advanced_Search_Case_10.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5d72e0c27c842121/625cada6058af94c8ab620fc/Advanced_Search_Case_10.gif)

This will display all the entries of the “Blog” content type that contain the term “Artificial Intelligence” in their “Title” fields and have a **Blog Image** File field that has “Science and Technology” as filename.

## Common questions
### What is covered in [Search Content] - Using the New Search: Real-world Scenarios?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Search Content] - Using the New Search: Real-world Scenarios?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
