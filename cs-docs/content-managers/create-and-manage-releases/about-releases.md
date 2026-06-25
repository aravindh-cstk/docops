---
title: "[Create and Manage Releases] - About Releases"
description: About Releases
url: https://www.contentstack.com/docs/headless-cms/about-releases
product: Contentstack
doc_type: concept
audience:
  - content-managers
version: unknown
last_updated: 2026-05-07
---

# [Create and Manage Releases] - About Releases

This page explains what Releases are in Contentstack, why they are useful, and how they work. It is intended for content managers coordinating multiple related content updates, especially when deploying several entries and assets together to an environment.

## About Releases

A Release is a collection of [entries](../author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets/) that you deploy together to a specific environment. Instead of [publishing](../author-content/publish-an-entry.md) or [unpublishing](../author-content/unpublish-an-entry.md) items individually, you can group related content and deploy it in a single action.

Managing updates such as product launches, press releases, or promotions often involves multiple content items. Handling each item separately increases effort and the risk of inconsistencies. Releases help you coordinate these updates by grouping related content and deploying it together.

**Note:** Releases created within a branch are specific to that branch. For more information, refer to the [Branch-specific Modules](../../developers/branches/branch-specific-modules.md) documentation.

## When to Use Releases

Use Releases when you need to:
- Publish multiple entries and assets together
- Coordinate time-sensitive updates
- Maintain consistency across related content
- Reduce manual publishing effort

## How Releases Work

A typical release workflow includes:
- Create a release
- Add entries and assets to the release
- Deploy the release to an environment

This workflow helps you manage related updates as a single unit, ensuring consistent publishing across all items.

**Additional Resource:** To learn how to add entries and assets to a release, refer to the [Add items to a release](./add-entry-asset-to-a-release.md) and [Bulk add to release](../author-content/bulk-add-to-release.md) documentation.

Use Releases to manage content updates more efficiently. By grouping related items, you can deploy changes faster and maintain consistency across environments.

## Common questions

### Can I deploy entries and assets together without publishing them individually?
Yes. A Release lets you group related entries and assets and deploy them in a single action instead of publishing or unpublishing items individually.

### Are Releases shared across branches?
No. **Note:** Releases created within a branch are specific to that branch.

### What kinds of updates are Releases useful for?
Releases are useful for coordinating updates such as product launches, press releases, or promotions that involve multiple content items.

### What is the typical workflow for using a Release?
A typical release workflow includes: Create a release, Add entries and assets to the release, Deploy the release to an environment.