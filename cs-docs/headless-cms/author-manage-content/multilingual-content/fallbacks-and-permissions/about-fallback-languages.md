---
title: "About Fallback Languages"
description: "Fallback language is the parent from which the given language inherits data. Define fallback languages for every language you add to a stack with Contentstack."
url: /headless-cms/about-fallback-languages
uid: blt2a9d01c5887a55db
---

# About Fallback Languages

## About Fallback Languages

A fallback language is the parent language from which a given [language](/docs/headless-cms/about-languages) inherits data from. Contentstack allows you to define a fallback language for every language you add to a [stack](/docs/headless-cms/about-stack).

Using a fallback language, you have control over the source content for a given language. You can then make changes to the fetched content and [localize an entry](/docs/headless-cms/localize-an-entry) in the given language. For a given language, if there is no data available in the fallback language, the entry will fetch data from the master language.

For example, you can set **English (United States)** as the fallback language for **French (France)**, and **French (France)** as the fallback language for **Spanish (Spain)**. In this case, when you try to create an entry in **Spanish (Spain)**, it will first fetch the content of the entry created in **French (France)**. If no data is available in **French (France)**, it will fetch data from the [master language](/docs/headless-cms/set-the-master-language).

**Note:** You cannot [create a fallback-language](/docs/headless-cms/add-a-language) chain deeper than one level for non-master languages. So, in the above example, you cannot set a fallback language (other than the master language) for Spanish (Spain).

## Retrieve Fallback Language Content for Published Entries

When an entry is not published in a specific language, you can fetch content from its fallback language (only if it is published) in the same [Content Delivery API](/docs/developers/apis/content-delivery-api) request.

To automatically include the published fallback language content in your API response, pass the `include_fallback:true` parameter in the request. Learn more about retrieving fallback language content for published [entries](/docs/developers/apis/content-delivery-api/entries) and [assets](/docs/developers/apis/content-delivery-api/assets).

The following diagram illustrates the data inheritance fallback logic between each of the languages in which the entries of a stack have been published  

![Data_Inheritance_Fallback_for_Published_Entries.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb3aee5158c949164/63877ae3c2aa7210a1184553/Data_Inheritance_Fallback_for_Published_Entries.jpg)

As shown in the above diagram, **English (United States)** is the master language of the stack. The entries have not been published in the following languages:

-   **Chinese - Singapore** (with **Chinese - China** as fallback)
-   **Spanish - Spain** (with **English - United States** as fallback)
-   **Spanish - Mexico** (with **Spanish - Spain** as fallback)

If an entry is not published in **Spanish (Mexico)**, then you can fetch the entry published in **Spanish (Spain)**. However, if the entry is not published in **(****Spanish - Spain)**, then you can fetch content from the master language, i.e. **English (United States**).  

## API Reference

To fetch published fallback language content via API, refer to the following API requests:

-   [Get all entries](/docs/developers/apis/content-delivery-api/entries#all-entries)
-   [Get a single entry](/docs/developers/apis/content-delivery-api/entries#single-entry)
-   [Get all assets](/docs/developers/apis/content-delivery-api/assets#all-assets)
-   [Get a single asset](/docs/developers/apis/content-delivery-api/assets#single-asset)
