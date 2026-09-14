---
title: "Viewing, Using & Managing Collections"
description: "On the Collections page, located in the Content menu, you’ll find a list of the Collections available in your account. By default, Lytics automatically…"
url: /lytics/viewing-content-collections
---

# Viewing, Using & Managing Collections

## Viewing, Using & Managing Collections

### Collections List



![4795e531984e8942c644f36896a63500eb2442d0411501660f9ce9e2913c6be7-Screenshot_2024-10-14_at_1.46.41_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am890901c9f4f6be19/a2d2e1280772afa88c2d2732/4795e531984e8942c644f36896a63500eb2442d0411501660f9ce9e2913c6be7-Screenshot_2024-10-14_at_1.46.41_PM.png)

On the **Collections** page, located in the **Content** menu, you’ll find a list of the Collections available in your account. By default, Lytics automatically generates three key Collections:

-   Documents With Images: This collections includes all documents with a primary\_image field, typically sourced from meta tags with anog:image property.
-   All Documents: Includes every document that Lytics has collected from your content sources.
-   Default Recommendation Collection: Features documents that have both images and Topics, and is designed for use in onsite Recommendation [Experiences](/docs/lytics/experiences).




### Collection Summary Page

![1a13318eabf43a0ee09b524f11ad67b3514a531bc27a78195042683ec512a0ca-Screenshot_2024-10-14_at_1.44.53_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5a08884f5845e919/2d19d3084d874896e4576068/1a13318eabf43a0ee09b524f11ad67b3514a531bc27a78195042683ec512a0ca-Screenshot_2024-10-14_at_1.44.53_PM.png)

When you click on a Collection from the list, you’ll be taken to the Collection Summary page, which includes the following details:

1.  Collection Definition: This section outlines the [Segment definition](https://docs.lytics.com/reference/segment), along with an AI-translated, human-readable version of the criteria.
2.  Experiences Using this Collection: A list of all active Experiences that utilize the Collection.
3.  Collection Report:
    1.  A [Size Report Component](https://docs.lytics.com/reference/post_report-id-component): displays the number of documents in the Collection over time
    2.  [Composition Report Components](https://docs.lytics.com/reference/post_report-id-component): provides detailed breakdowns of the Collection's Topics, Authors, URL Paths, and HTTP Status codes



#### Documents Tab



![95db51775bcd47beb227940d82523391d90d3837306b3433deb53f9c54d36b76-Screenshot_2024-10-14_at_10.59.31_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambaaa3c66aba59a7e/abd85c7e3600687b106d796b/95db51775bcd47beb227940d82523391d90d3837306b3433deb53f9c54d36b76-Screenshot_2024-10-14_at_10.59.31_AM.png)

The **Documents** tab displays a subset of up to 100 documents from the Content Collections. Each document card includes the following details:

-   primary\_image
-   title
-   description

Additionally, each card provides links to the document’s URL and its [Identity](/docs/lytics/identity)view.



#### Recommendations Tab



![09c6d4cc140d7ba4a93005db73079317211c59d309661c40b95db52199d01652-Screenshot_2024-10-14_at_10.59.49_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am22deeb588c096545/23d909adc42b37f12030c7cc/09c6d4cc140d7ba4a93005db73079317211c59d309661c40b95db52199d01652-Screenshot_2024-10-14_at_10.59.49_AM.png)

The **Recommendations** tab offers a variety of tools and resources to help you create, test, and implement content recommendations within Lytics. This section is designed to streamline the process of using Lytics' powerful Recommendation engine, enabling you to generate personalized content experiences for your users.

-   **Create a New Recommendation Experience**: This section provides a direct link to create a new Recommendation Experience. An Experience in Lytics allows you to serve personalized content, such as articles, products, or promotions, to users based on their individual affinities and behaviors. You can use the intuitive interface to quickly set up and customize these Experiences, ensuring that your users see relevant content that drives engagement.
-   **Documentation for the[Content Recommendation](https://docs.lytics.com/reference/content-recommendation)**: For those looking to dive deeper into programmatic access, Lytics provides a comprehensive guide to the Content Recommendation API. This API allows developers to fetch content recommendations on-demand, enabling integrations with third-party systems or custom user interfaces. The documentation provides detailed information on how to authenticate, structure API calls, and interpret the responses.
-   **Code Snippets for Multiple Languages**: Lytics simplifies the process of integrating content recommendations into your system by providing ready-made code snippets. These snippets are available in several popular programming languages, including:**Bash**, **JavaScript**, **Python** and **Go**. Whether you're a seasoned developer or just getting started, these code snippets will help you quickly integrate the Lytics Content Recommendation API into your project. You can copy and paste the provided code to get up and running in minutes.



**Recommendation Playground**

The Recommendations tab also features a "playground" where you can test and preview recommendations for individual users. By entering a user's unique identifier (such as their user ID), you can see real-time results of what Lytics would recommend for that specific user. This feature is particularly useful for validation and testing purposes.\\ After clicking the **Recommend** button, Lytics will return a list of personalized content suggestions for the user. Each recommendation will be displayed in a table, showing:

-   URL: The link to the recommended content.
-   Image: A thumbnail or visual representation of the content.
-   Title: The title of the recommended content.
-   ID: The unique identifier for the recommended content item.

This playground offers a hands-on way to understand how Lytics' recommendations align with user interests, providing a deeper level of insight and confidence before rolling out personalized content to your audience.

![dc721303b7475adbb1237e53db12feac1f46cf266009aeb988394d3019bec593-Screenshot_2024-10-14_at_2.09.00_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am65683a7de88a4e5b/834203e1bf109d2b12283335/dc721303b7475adbb1237e53db12feac1f46cf266009aeb988394d3019bec593-Screenshot_2024-10-14_at_2.09.00_PM.png)




#### Managing Content Collections



![d982725c5a6de00e42c918036e8923dfbbdfe30c685178a83916f6656b6ddc1e-Screenshot_2024-10-14_at_10.59.01_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amabd424cbb369def4/a8ec0fcaafa298478f593d44/d982725c5a6de00e42c918036e8923dfbbdfe30c685178a83916f6656b6ddc1e-Screenshot_2024-10-14_at_10.59.01_AM.png)

When working with Content Collections in Lytics, you have several management options available via the ... menu located next to the Collection title at the top of the page. These options allow you to efficiently duplicate, edit, delete, or refresh (re-enrich) your collections, ensuring that they remain relevant and aligned with your evolving content strategy.

-   **Duplicate** : Selecting **Duplicate** creates a copy of the existing collection and takes you directly to the Collection Builder. Here, you can modify the parameters of the duplicated collection to fine-tune the content being gathered. This is especially useful if you want to create a new Collection that is similar to an existing one but with slight adjustments—such as targeting a different subset of content or users. Duplicating saves time by allowing you to leverage your previous work instead of starting from scratch.
-   **Edit**: Clicking **Edit** opens the Content Collection Builder for the selected collection, enabling you to change the criteria or settings that define the collection. Whether you need to update filters, or adjust the logic behind what documents are included, editing lets you easily refine the collection over time. As your content strategy shifts or new types of content are added to your site, this option ensures that your collections remain up-to-date and aligned with your goals.
-   **Delete**: The **Delete** option permanently removes the collection from your account, freeing up resources and clearing clutter from the interface. However, there are some restrictions:
    -   You cannot delete a collection if it is being used in any legacy Personalize campaigns, Experiences, or workflows. Before deleting, you'll need to first remove the collection from any campaigns or processes that rely on it.
    -   A warning message will notify you if the collection is in use elsewhere, preventing accidental deletions and ensuring you don't disrupt any live campaigns or workflows.

**Warning: Be cautious when deleting collections that may be tied to essential processes. Always ensure that they’re no longer in active use to avoid unintended disruptions in personalization or recommendations.**

-   **Re-Enrich**: The **Re-Enrich** option allows you to force Lytics to rescan and re-process all documents within a collection. This is particularly useful when you’ve made significant updates to your content, such as changing meta-tags, adding new metadata, or updating page structures. Re-enriching ensures that Lytics captures the most current data and classifications for the documents in the collection. This process will refresh the topics, keywords, and metadata that power recommendations and user affinity models, helping to keep your content classification accurate and relevant for personalization.
