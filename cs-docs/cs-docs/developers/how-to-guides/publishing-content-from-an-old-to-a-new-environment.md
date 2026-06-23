---
title: "[How-to Guides and Knowledgebase articles] - Publishing Content from an Old to a New Environment"
description: Guide for publishing content (entries or assets) from one environment to another using releases, bulk publishing script, or Contentstack CLI.
url: https://www.contentstack.com/docs/developers/how-to-guides/publishing-content-from-an-old-to-a-new-environment
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Publishing Content from an Old to a New Environment

This page explains options for publishing content (entries and assets) from one Contentstack environment to another (for example, staging to production). It is intended for developers and content managers who need to move already-published content across environments and want to reduce manual effort.

## Publishing Content from an Old to a New Environment

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to manage environments and publishing workflows, refer to the [Environments](/docs/developers/set-up-environments) documentation.

Suppose you’ve published content (entries or assets) to an environment (for example, staging), and you want to publish this content to another environment (for example, production). In that case, you can do it by manually [publishing the content](/docs/content-managers/publish-content).

However, this manual method would be cumbersome if there are a large number of content pieces.

This guide explains how to reduce manual efforts for publishing content from one environment to another; thus saving time.

## Use Releases

[Releases](../../content-managers/create-and-manage-releases/about-releases.md) in Contentstack lets you group the content pieces, which you can publish to a particular environment at once.

Here’s an overview of the process of using releases to publish content (previously published on the “staging” environment) to the “production” environment:
- **Use Sync APIs**: The first step is to use the [Sync API](../../../api-docs/api-detail/content-delivery-api.md#synchronization) requests. Using the [Initial sync](../../../api-docs/api-detail/content-delivery-api.md#initial-synchronization) API request on the “staging” environment, you’ll get all the published entries and assets in the response.
- **Add items to the release**: Store the UIDs of the assets and entries (returned through the Sync API), and then use the [Add multiple items to a release API request](../../../api-docs/api-detail/content-management-api.md#add-multiple-items-to-a-release). This API request will add entries and assets to a release in Contentstack. Next, create multiple releases to store all the content items.

Alternatively, you can publish content directly to the new environment. However, you need to be careful with this option as you might end up reaching rate limiting. Therefore, you'll have to find a way to handle retries.
- **Deploy your release**: Lastly, when you add all the content items to the releases, deploy them to the “production” environment to get them published. Read more on [deploying a release](../../content-managers/create-and-manage-releases/deploy-a-release.md).

Once the release is deployed successfully, you’ll see all the content published on the new environment.

## Use our Bulk Publishing Script

Another way to do this quickly is to use the [**bulk-publish-entries-assets**](../utilities/bulk-publishing-of-entries-and-assets.md) script. It automates the process of publishing content (entries and assets) from one environment to a newly created or any other environment.

Learn more on how to [bulk publish entries and assets from one environment to another](../utilities/bulk-publishing-of-entries-and-assets.md#case-6-publish-entries-assets-from-one-environment-to-another).

## Use Contentstack Command-line Interface

By using Contentstack CLI, you can publish content from one environment to another by running the [cm:bulk-publish:cross-publish](../cli/bulk-publish-and-unpublish-content.md) command.

Learn more about how to do this in our [detailed documentation](../cli/bulk-publish-and-unpublish-content.md).

## Common questions

### Is this page still supported?
No. **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### What is the recommended way to publish many items from staging to production?
Use [Releases](../../content-managers/create-and-manage-releases/about-releases.md) to group content and deploy it to the target environment.

### Can I automate cross-environment publishing?
Yes. You can use the [**bulk-publish-entries-assets**](../utilities/bulk-publishing-of-entries-and-assets.md) script or the Contentstack CLI command [cm:bulk-publish:cross-publish](../cli/bulk-publish-and-unpublish-content.md).

### What should I watch out for if publishing directly to the new environment?
You might end up reaching rate limiting, so you’ll have to find a way to handle retries.