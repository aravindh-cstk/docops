---
title: "[How-to Guides and Knowledgebase articles] - Setting up a Web Proxy Server for Masking and Making CDA Calls"
description: Setting up a Web Proxy Server for Masking and Making CDA Calls
url: https://www.contentstack.com/docs/developers/how-to-guides/setting-up-a-web-proxy-server-for-masking-and-making-cda-calls
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Setting up a Web Proxy Server for Masking and Making CDA Calls

This page explains how to set up a proxy server between your server and the internet to support masking requirements and to fetch default entries along with requested entries using CDA calls. It is intended for developers implementing Content Delivery API (CDA) requests who need a proxy-based approach for aggregating content types in a single call.

## Setting up a Web Proxy Server for Masking and Making CDA Calls

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn more, refer to the [Content Delivery API](/docs/developers/apis/content-delivery-api) documentation.

Setting up a proxy server between your server and the internet is an age-old technique that many organizations have been using. In simplest terms, a proxy server is a computer that sits between the user's computer and the Internet.

In this guide, we will discuss the steps required to set up a proxy server that will not only serve our masking requirement but also fetches default entries along with the requested ones.

For example, let's assume you have the following [content types](/docs/developers/create-content-types/about-content-types):
- Header
- Navigation
- Categories
- Articles
- Footer

Now, we'll set up a system such that when you request the entries of content type “Article,” the entries of “Header,” “Navigation,” “Categories,” and “Footer” content types will be fetched by default in the same call.

## Setting up the System

We have created a sample that helps us in achieving what we intend to do. To set up the system, execute the following steps:
- We have created a sample code for setting up the system. Get in touch with our [support team](mailto:support@contentstack.com) to get the sample code.
- After downloading the code, you need to make changes in the `index.js` file. Navigate to the **src **folder and move inside the **config** folder. Add your [stack](/docs/developers/set-up-stack/about-stack) credentials to the **index.js** file as follows:
```
module.exports = {
  contentstack:{
    proxyUrl:'http://cdn.contentstack.io',
    apiKey:'STACK API KEY',
    deliveryToken:'DELIVERY TOKEN',
    DefaultContentTypes:['categories','footer','header','navigation'],
    DefaultEnvironment:'development',
    DefaultLocale:'en-us'
  }
}
```
- Then, fire up your terminal and move inside the project directory. Install and run npm as follows:

```
npm install
npm start
```
- By default, the server will start on port 8000. You can now make CDA calls to the server. An example is shown below:
```
http://{SERVERURL}:8000/v3/content_types/article/entries/bltd9d67cf4b11f9d62?environment=development&locale=en-us
```
- Making the above call fetches the following results:

In the above response, “defaultEntries” are the ones that you have specified in the configuration in step 3 (inside “DefaultContentTypes”).

When we request for the [entries](/docs/content-managers/working-with-entries/about-entries) in content type “Article,” it will be fetched along with the default ones in a single call.

## Common questions

### Is this page still supported?
No. **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### Where can I learn more about making CDA calls?
Refer to the [Content Delivery API](/docs/developers/apis/content-delivery-api) documentation.

### What are “defaultEntries” in the response?
“defaultEntries” are the ones that you have specified in the configuration in step 3 (inside “DefaultContentTypes”).

### What port does the proxy server run on by default?
By default, the server will start on port 8000.