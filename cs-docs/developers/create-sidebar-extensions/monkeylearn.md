---
title: "[Extensions] - MonkeyLearn"
description: Documentation for the legacy Text Intelligence (powered by MonkeyLearn) Sidebar Extension, including installation and usage steps.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/monkeylearn
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - content-managers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - MonkeyLearn

This page explains how to install, configure, and use the legacy **Text Intelligence (powered by MonkeyLearn)** Sidebar Extension in Contentstack. It is intended for developers and administrators setting up extensions on a stack, and for users who want to run text intelligence models from within entries.

## MonkeyLearn

**Note**: This documentation uses the legacy approach with extensions. We have launched MonkeyLearn as a Marketplace App. For more information on MonkeyLearn, please refer to the [MonkeyLearn App Installation Guide](../marketplace-apps/monkeylearn.md).

The **Text Intelligence**** (powered by MonkeyLearn)** Sidebar Extension lets you **analyze the content** of an [entry](../../content-managers/author-content/about-entries.md) and **provide actionable insights**/recommendations using machine learning technologies. This Sidebar Extension uses **MonekyLearn APIs** to analyze data and recommend ideas.

This Sidebar Extension (powered by MonkeyLearn) offers a wide variety of text intelligence options that let you get more out of your content. Some of the things that you can do with the widget are listed below:
- **Keyword Extraction**: This option extracts important keywords from the given text. This is especially helpful if you want highly-relevant SEO keywords for your entry.
- **Retail Classifier**: It recommends tags (or categories) based on the given text. This is useful in the case for e-commerce or retail shopping sites.
- **Sentiment Analysis**: This option can tell you if the given text expresses sentiments that are positive, negative, or neutral.

And, there are a lot more such tools (known as [models](https://app.monkeylearn.com/main/explore/)).

This Sidebar Extension is available as a prebuilt template that you can configure instantly. This step-by-step guide explains how to install and use the Text Intelligence prebuilt widget.

## Add Text Intelligence Sidebar Extension to your stack

To add the Text Intelligence Sidebar Extension to your [stack](../set-up-stack/about-stack.md), log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:
- Go to your stack and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- Click on the **+ New Extension** button on the top-right corner and select **Use Prebuilt**.
- Click the filter drop-down field, and select **Sidebar Extension**.
- From the list, hover over **Text Intelligence** and click on + **Add Extension**.
- You will see the Sidebar Extension configuration page, where most details of the fields would be pre-filled. Enter details in the fields as given below:

  **Title**: Provide a suitable title. For example, "Monkeylearn AI."
- **Hosting method**: The method should be **Hosted on Contentstack** for this Sidebar Extension.
- **Extension Source Code**: In this field, you need to **enter the extension code**. Download the [source code](https://github.com/contentstack/extensions/tree/master/text-intelligence) for the extension.
- **Config Parameters**: Provide your MonkeyLearn token in pace of the "your_token_here" value.

```
{
    "token": "abcd12345d8efg0180011h4i4jkle37890xyz"
}
```

- **Scope**: Select which content types this Sidebar Extension will be available for. You can choose **All Content Types** or **Specific Content Types**.
- Click **Save**. This will create your Sidebar Extension.

## Use this Sidebar Extension in entries

To use the Text Intelligence Sidebar Extension in any entry, follow the steps given below:

- Create a new entry for a [content type](../create-content-types/about-content-types.md).****
  **Note**: The content type should be within the scope of the Sidebar Extension.
- Click on the  “Sidebar Extensions” icon located at the top right side of the page, and select **Text Intelligence** from the drop-down menu.
- A sidebar appears where you can use the Sidebar Extension.
- From the **Select Model** drop-down, select an option of your choice. For example, **Keyword Extraction**. This model helps you extract highly relevant SEO keywords from the given text****.
- From the **Field** drop-down, select the field (e.g. Body).
- Click **Run**. This will display the results as shown below.

## Common questions

### Is this documentation for the Marketplace App or the legacy extension?
**Note**: This documentation uses the legacy approach with extensions. We have launched MonkeyLearn as a Marketplace App. For more information on MonkeyLearn, please refer to the [MonkeyLearn App Installation Guide](../marketplace-apps/monkeylearn.md).

### Where do I get the extension source code?
Download the [source code](https://github.com/contentstack/extensions/tree/master/text-intelligence) for the extension.

### What do I need to provide in Config Parameters?
Provide your MonkeyLearn token in pace of the "your_token_here" value.

### How do I run a model on an entry?
From the **Select Model** drop-down, select an option of your choice, select the field from the **Field** drop-down, and click **Run**.