---
title: "[How-to Guides and Knowledgebase articles] - Best Practices on API Usage"
description: Best practices to maintain reasonable API usage by minimizing includes and optimizing calls and queries.
url: https://www.contentstack.com/docs/developers/how-to-guides/best-practices-on-api-usage
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - architects
version: unknown
last_updated: 2026-03-26
---

# [How-to Guides and Knowledgebase articles] - Best Practices on API Usage

This page describes Contentstack-recommended best practices for optimizing API usage and performance, especially by minimizing includes and avoiding unnecessary data retrieval. It is intended for developers building applications on Contentstack who want to reduce resource usage and improve response efficiency when making API calls or querying data.

## Best Practices on API Usage

In order to attain and maintain optimum performance and ensure that infrastructure resources are used in an efficient manner, Contentstack recommends certain best practices.

By following the recommendations discussed in this guide, you can maintain reasonable API usage while making calls or querying for data by minimizing the number of includes in your call.

## Recommendations

Below we have put down some recommendations that you can follow to improve your fair limits on API usage. The use of these recommendations, which one to use in which scenario, completely depends on your use case.

### Optimize Your Code

The first recommendation is to optimize your code to eliminate any **redundancies** or **duplicates** from the includes. When we make an API call, we don't generally look for removing unwanted includes or references from our code.

We may get faster responses, however, it can result in retrieving stuff in the response that we don't really need. Before making a call, try answering questions: are there any queries in my code that will result in getting data items that aren’t used in my application? Is fetched data being put back with no changes made to them, and so on? Also, you can avoid making queries unique like putting in a random number or timestamp.

### Frequently Cache Used Data

Once you have optimized your code, the next recommendation is to **cache data items** that you use more frequently. For example, in a user management application where you update various user details such as user groups, titles, and so on.

In such a case, you can think of keeping these details on the application side rather than retrieving them through calls every time the user opens the form. Your cache management system can be programmed in a way that helps you **retrieve most frequently used data through the cache **instead of the server.

### Prefer Caching Data that Doesn't Change Often

Similar to the above recommendation, most of the time, there are content pieces that do not change often. For example, if your app is customer facing and there is an FAQ section in your app, you can prefer keeping answers to these FAQs on the application cache rather than fetching it every time where there is a requirement.

You can easily identify such pieces of content that will not change often. Those pieces can be cached in your app's cache management system to avoid fetching them every now and then.

### Use Contentstack Webhooks for Tracking Changes

Contentstack [webhooks](../set-up-webhooks/about-webhooks.md) can be used to keep track of changes. You can set webhooks when any changes are made to content or code and then react as required. For example, you can create a webhook that will notify the system when the import operation completes successfully.

The app after receiving this notification, can fetch the details as desired instead of waiting for the app's API instance to check for job status periodically and then fetch the data. Webhooks can help you in such situations by notifying you as and when the job gets completed.

This **reduces the number of includes** in the call that may otherwise be high if the checking period has considerable time in between.

### Implement Lazy Loading

Lazy loading, or On-demand loading, is an online content optimization technique for web apps and websites. It involves loading only the initially required section and delaying the remaining parts instead of loading the complete page and rendering it to the user in one go or unless it is required by the end user.

This approach can be useful in reducing the number of includes that will be involved while making the call and rendering the content to the user. This is not only cost-effective but also resource effective as well.

### Avoid Retrieving Multiple Levels in Referencing

[Referencing](../create-content-types/reference.md) is a powerful Contentstack feature that allows you to create references. It helps you in categorization and to avoid rework in case of changes as you just have to make changes in the referenced content type instead of all entries where it is referred.

 However, if they are not needed and can be a part of the parent type, we encourage you to move the field from the referenced content type up to the parent type. In this way, you can achieve optimization in making API requests and unnecessary references will not be reflected in the response.

The number of includes in case of referencing is one thing, but the depth of a single include is also more resource costly than a shallower include. So you should always decide logically when retrieving data in a single call and avoid retrieving them unnecessarily for optimum resource utilization. In other words, on the delivery side, avoid fetching all all levels and all includes in a single call.

### Use Modular Blocks

We make use of referenced content types and refer to the entries of these content types in the entries of other content types. These content types can have a different schema. While making a call, we have to include these content types as well. This increases the number of includes that we have to include in a call.

This case can be handled efficiently by using a [Modular Blocks](../create-content-types/modular-blocks.md). They can be used with other modules to construct a complete webpage. You can create multiple blocks (let's say, B1, B2, B3, and so on with each block with a different schema) within a modular block while creating a content type.

While creating an entry in this content type, you can add data to any of the blocks (B1, B2, B3) and keep other blocks empty. And now when you make a call, you don't have to include the referenced content types in your call. This is another way of minimizing the includes in your call or queries.

## Common questions

### What is the main goal of these best practices?
To maintain reasonable API usage while making calls or querying for data by minimizing the number of includes in your call.

### When should I cache data items?
When you use data items more frequently, and when content pieces do not change often, you can prefer keeping them on the application cache rather than fetching them every time.

### How can webhooks help reduce API usage?
Webhooks can notify you as and when a job gets completed so the app can fetch the details as desired instead of checking for job status periodically.

### Why should I avoid retrieving multiple levels in referencing?
The depth of a single include is more resource costly than a shallower include, so you should always decide logically when retrieving data in a single call and avoid retrieving them unnecessarily for optimum resource utilization.