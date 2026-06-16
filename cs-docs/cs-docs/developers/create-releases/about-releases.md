---
title: "[Set Up Your Project] - About Releases"
description: About Releases
url: https://www.contentstack.com/docs/developers/create-releases/about-releases
product: Contentstack
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - About Releases

This page explains what Releases are in Contentstack, why they are useful for deploying time-sensitive content, and what you need to use Releases with a web framework. Read this when you need to publish or unpublish multiple entries and assets together to a specific environment.

## About Releases

You can define a “Release” as a set of [entries](https://www.contentstack.com/docs/content-managers/working-with-entries/about-entries/) and [assets](https://www.contentstack.com/docs/content-managers/working-with-assets/about-assets/) that needs to be deployed ([published](https://www.contentstack.com/docs/content-managers/working-with-entries/publish-an-entry/) or [unpublished](https://www.contentstack.com/docs/content-managers/working-with-entries/unpublish-an-entry/)) all at once to a particular [environment](https://www.contentstack.com/docs/developers/set-up-environments/about-environments/).

If you are using a CMS to manage and publish your content, you know that publishing large amounts of time-sensitive content (for example, when there’s a product launch, press release, or sales promotion) is a daunting task. You have to publish multiple entries/assets and their publishing status, and, in most cases, you have to find and keep track of the content pieces one by one. This is a time-consuming process and is prone to errors.

Releases dramatically simplify this task for you. All you need to do is simply pin all the required entries and assets to a “Release.” When you deploy this Release, all the pinned items are published/unpublished at the same time to whatever environment you choose.

## Tutorial Video

**Note:** To use Releases with web framework, you will need contentstack-express version 3.1.9 or above.

To understand more about Releases, make sure you read the articles provided in our “More articles” section

## Common questions

### What is a Release in Contentstack?

A “Release” is a set of entries and assets that needs to be deployed (published or unpublished) all at once to a particular environment.

### Why would I use Releases instead of publishing items one by one?

Releases simplify publishing large amounts of time-sensitive content by letting you pin required entries and assets and deploy them together, reducing time and errors.

### Can a Release publish and unpublish content?

Yes. A Release can be deployed to publish or unpublish pinned items.

### Is there a version requirement to use Releases with a web framework?

Yes. To use Releases with web framework, you will need contentstack-express version 3.1.9 or above.

<!-- filename: set-up-your-project-about-releases.md -->