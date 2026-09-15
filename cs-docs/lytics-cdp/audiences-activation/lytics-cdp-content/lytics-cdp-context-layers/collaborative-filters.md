---
title: "Collaborative Filters"
description: "To successfully utilize Lytics' Standard and Custom Affinity Engines, it is necessary to have a robust set of Topics (or features). However, in some…"
url: /lytics/collaborative-filters
uid: blt56d2e14be0573654
---

# Collaborative Filters

## Collaborative Filters

To successfully utilize Lytics' **Standard** and **Custom Affinity** Engines, it is necessary to have a robust set of **Topics** (or features). However, in some cases, it becomes difficult to add **Topics** to your items, which may prevent you from executing Interest-based use cases. To address some of the limitations of content-based filtering, **Collaborative Filtering** uses similarities between users and items simultaneously to provide recommendations. This allows for serendipitous recommendations; that is, collaborative filtering models can recommend an item to user A based on the interests of a similar user B.

![1fa30e7-Screenshot_2024-02-08_at_10.00.50_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8175d0e9f8b0d9cb/787aec95d610b2ce72bd0164/1fa30e7-Screenshot_2024-02-08_at_10.00.50_AM.png)

For example, consider the screenshot above, which shows a Collaborative Filter Engine based on Shopify purchase data. By creating a Collaborative Filter Engine based on user purchase data, we can drive "users also bought"-type recommendations. In this case:

-   The **Identifier on content table** is _shopify\\\_product\\\_id_. This refers to the unique identifier for the items in your inventory (the _content_ table).
-   The **Inventory from user profiles** is _shopify\\\_product\\\_ids_. This refers to the field on the user profiles that contain a user's purchase history.

The bar chart shows the most popular _shopify\\\_product\\\_id_ IDs across your users.

#### How to Use Collaborative Filter Engines

The primary way to leverage Collaborative Filter Engines is through Recommendations. While Lytics' Recommendation API, and Experience toolkit allow you to deploy Recommendation campaigns onsite or via email, the Collaborative Filter UI allows you to experiment and test out Lytics' Recommendations.

In the **Recommend** tab, you can fetch Recommendations for any user. Simply select the identifier field (\_uids in this case) and click on the **Recommend** button. This will request Recommendations for the selected user using the Lytics Recommendation API. The Recommended items are displayed below.

![542be7d-Screenshot_2024-02-08_at_10.25.18_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama85e428c206e14b9/e08cfa8131e7f545a108a0e6/542be7d-Screenshot_2024-02-08_at_10.25.18_AM.png)

The **Item Recommendation** input allows you to fetch _similar_ items for any given item. In the example below, we are finding items similar to the item with shopify\_product\_id = 631195017394. This can be used to find similar products based on user behavior.

![5aeb03f-Screenshot_2024-02-08_at_10.34.45_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6d37bfd41b711d75/e160010bcad8c6119841760b/5aeb03f-Screenshot_2024-02-08_at_10.34.45_AM.png)



#### Creating a New Collaborative Filter

To create a new Collaborative Filter, click on the **New Context Layer** button and click on **Collaborative Filter**. This will open a wizard with the following options. When creating a Collaborative Filter, there are 4 fields:

-   **Name** (required): the name of the new Collaborative Filter.
-   **Description** (optional): a description for your Collaborative Filter.
-   **Inventory ID** (required): the identifier associated with the items in your inventory (ie: an identifier from the content table).
-   **Inventory Field** (required): the field on the user table that contains a user's activity (ie purchase history, browsing history, etc). This field must be a set or map type and must contain IDs referenced in the **Inventory ID** field.

![35a2d43-Screenshot_2024-02-08_at_9.58.02_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdce6846ad1abb32b/cefc06252dea7293fceb681c/35a2d43-Screenshot_2024-02-08_at_9.58.02_AM.png)

Once you create your new Collaborative Filter wizard, Lytics will train a Collaborative Filter model within minutes. Once the model has finished training, the UI will be available to use, as well as Lytics' Recommendation API.
