---
title: "Custom Context Layers"
description: "If you have your own set of attributes, features, or Topics for your inventory, then you may consider creating a Custom Context Layer . These Layers allow…"
url: /lytics/custom-interest-engines
uid: bltd71a9c10268136b2
---

# Custom Context Layers

## Custom Context Layers

If you have your own set of attributes, features, or **Topics** for your inventory, then you may consider creating a **Custom Context Layer**. These Layers allow you to configure any field on the content table to be a **Topic** that gets outputted onto user profiles. Consider the following examples of **Custom Context Layers**

-   Shopify Data. When importing Shopify data, Lytics captures all attributes and fields associated with your items. Suppose each item has a shopify\_product\_tags field, with values such as wool, cotton, polyester, etc. If we create a Custom Context Layer using the shopify\_product\_tags field, Lytics will output a shopify\_affinities\_tag\_ field to the user profiles that capture which tags a user has interacted with or purchased. You can then use this data to target users with a high interest in specific tags. In the screenshot below, we can see the popular Topics (or tags) consumed by your users.

![17a61d7-Screenshot_2024-02-08_at_11.24.13_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaa9c1aa5ef97778c/73dabc34ef9734896158c28a/17a61d7-Screenshot_2024-02-08_at_11.24.13_AM.png)

-   Genre or Category Data. In some cases, your CMS may allow you to append additional meta-data to your web pages. If such data exists, a Custom Context Layer will allow you to capture data such as genre, or category and output it to user profiles.
-   Offline Data. If you have a rich collection of offline product data, a Custom Context Layer can be used to enrich your user profiles. Consider a supermarket with a corpus of discount coupons that exist in an internal database, each with an ID, metadata, and category information. Once the data has been imported, a Custom Context Layer can be used to link and enrich user profiles based on which coupons they have used.



#### Creating a New Custom Context Layer

To create a new Custom Context Layer, click on the **New Context Layer** button on the **Context Layers** page. Once the modal opens up, clicking on the **Affinity Customization** tile will open a wizard.

The first step requires selecting the unique identifier and features (or Topics) from your inventory (ie the content table). In the screenshot below, we are using the Shopify example from earlier, and using the shopify\_product\_id and shopify\_product\_tags fields.

![666b15c-Screenshot_2024-02-08_at_11.27.01_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7e59cc23cbb0fe0b/a9bc7be3275154614ae0bbbc/666b15c-Screenshot_2024-02-08_at_11.27.01_AM.png)

Once the Inventory and Features have been identified, the next step requires mapping the data to your user profiles. The Inventory Field refers to the field on the user table that contains a set of shopify\_product\_ids (ie a set of unique identifiers from the content table). In this case, the shopify\_product\_ids field is an array of IDs that a user has purchased. Next, configure the name of the output field - this field will contain the shopify\_product\_tags that a user has expressed interest in based on their shopify\_product\_ids.

![c3aa7e9-Screenshot_2024-02-08_at_11.37.00_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8eed4c65e0e71929/9daf327c5cf89944abd8eae6/c3aa7e9-Screenshot_2024-02-08_at_11.37.00_AM.png)
