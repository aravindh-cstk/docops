---
title: "[Static Site Generators] - About Gatsby"
description: About Gatsby and using the contentstack-gatsby plugin to build Gatsby sites with Contentstack content.
url: https://www.contentstack.com/docs/developers/static-site-generators/about-gatsby
product: Contentstack
doc_type: concept
audience:
  - developers
  - content architects
version: current
last_updated: 2026-03-26
---

# [Static Site Generators] - About Gatsby

This page explains what Gatsby is and how to use it with Contentstack via the contentstack-gatsby plugin. It is intended for developers building Gatsby-based static sites that fetch and render content from Contentstack, and should be used when setting up or evaluating a Gatsby + Contentstack implementation.

## About Gatsby

Gatsby is an open-source framework, based on React, that helps developers build blazing-fast websites and apps. Gatsby provides plugins to extend the functionality of the Gatsby-based websites.

Contentstack provides [**contentstack-gatsby**](https://github.com/contentstack/gatsby-source-contentstack) plugin that allows you to build a static site by fetching content from Contentstack using [Content Delivery APIs](../../../api-docs/api-detail/content-delivery-api.md) and delivering it to your Gatsby-based website.

To learn about implementation of Gasby websites, we have developed a sample website for you to explore as follows:
- [Gatsby+Contentstack starter website](../sample-apps/get-started-with-gatsby-and-contentstack.md)

If you want to start developing a basic website that fetches content from Contentstack and displays it on your Gatsby-based website, refer to our [Get Started](../sample-apps/get-started-with-gatsby-and-contentstack.md) article.

## Common questions

### Which plugin should I use to fetch Contentstack content in Gatsby?
Use the [**contentstack-gatsby**](https://github.com/contentstack/gatsby-source-contentstack) plugin.

### Which APIs does the plugin use to fetch content?
It fetches content from Contentstack using [Content Delivery APIs](../../../api-docs/api-detail/content-delivery-api.md).

### Is there a sample Gatsby + Contentstack project to reference?
Yes, see the [Gatsby+Contentstack starter website](../sample-apps/get-started-with-gatsby-and-contentstack.md).

### Where do I start if I want to build a basic Gatsby site with Contentstack?
Refer to the [Get Started](../sample-apps/get-started-with-gatsby-and-contentstack.md) article.