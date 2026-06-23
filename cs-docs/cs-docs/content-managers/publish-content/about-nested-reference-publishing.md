---
title: "[Publish Content] - About Nested Reference Publishing"
description: About Nested Reference Publishing
url: https://www.contentstack.com/docs/headless-cms/about-nested-reference-publishing
product: Contentstack
doc_type: guide
audience:
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Publish Content] - About Nested Reference Publishing

This page explains how Nested Reference Publishing works in Contentstack, including what it does, key behaviors and limitations, and where to find related API references. It is intended for content managers and teams publishing entries across environments and locales, especially when entries include nested references to other entries and assets.

## About Nested Reference Publishing

With **Nested Reference Publishing**, you can publish a single entry or a group of entries, along with all of its nested referenced entries and/or assets, across multiple environments and languages, without the risk of missing any referenced content.

Here’s a quick glance of what you can do with this feature:
- Publish an entry (or entries) with all of its nested references
- Schedule an entry (or entries) for publishing with all of their nested references
- Cancel any scheduled bulk publish activities

**Note:** Nested Reference Publishing is a plan-based feature. Please contact your Organization administrator to get this feature activated for you.

When you publish your content, Contentstack offers a separate **Publish Reference(s)** modal where you can view and validate all nested, cross-referenced entries and assets, for all selected languages.

Nested Reference Publishing works based on the latest unpublished changes and stops at the last published version of any nested reference.

Consider this scenario:
- If entry A references entry B, and B references entry C
- B has already been published
- Later, C is updated

When you publish A, C will not be included in the nested publishing process.

This happens because B, which acts as the link between A and C, has not changed since it was last published. The nested reference publishing process stops at B (or whenever it finds a published reference), assuming it is up to date.

To ensure C is included, you must republish B with references so that the system detects a change in the reference chain or manually publish C.

## Key Features

Here are a few key features of Nested Reference Publishing:
- It allows you to bulk-publish an entry or a group of entries with nested references, up to a depth of **5 levels**, and this level can vary as per your organization plan.
- You can select up to **50 environments **and** 50 locales** to which you want to publish content**, **and this level can vary as per your organization plan.
- If any included referenced items (entries and/or assets) do not satisfy the publishing criteria related to workflows and/or publishing rules, have insufficient permissions, or are in the in-progress state, the bulk-publish activity will not proceed. You will be able to see the reason why by expanding the tree view in the **Publish Reference(s)** modal.
- Only the latest version of each selected nested reference item at the time will be sent for publishing.
- You can schedule or even cancel the scheduled bulk publishing tasks with Nested Reference Publishing.
- The new **Summary** column in the Publish Queue will display the overall status of all items included in your bulk publish jobs.

## API Reference

When working with APIs, you need to pass a new api_version:3.2 header for your request to send nested references for publishing.
- [Publish entries and assets in bulk](../../../api-docs/api-detail/content-management-api.md#publish-entries-and-assets-in-bulk)
- [Unpublish entries and assets in bulk](../../../api-docs/api-detail/content-management-api.md#unpublish-entries-and-assets-in-bulk)
- [Get publish queue](../../../api-docs/api-detail/content-management-api.md#get-publish-queue)
- [Cancel scheduled action](../../../api-docs/api-detail/content-management-api.md#cancel-scheduled-action)

## Tutorial Video

Let's learn how the Nested Reference Publishing feature works.

## Common questions

### Does Nested Reference Publishing include referenced assets as well as entries?
Yes, it can publish nested referenced entries and/or assets.

### Why didn’t a deeply referenced entry get published when I published the top-level entry?
Nested Reference Publishing stops at the last published version of any nested reference, so if a linking reference has not changed since it was last published, the process can stop there.

### What are the limits for depth, environments, and locales?
It supports nested references up to a depth of **5 levels**, and you can select up to **50 environments** and **50 locales**, and these levels can vary as per your organization plan.

### What API header is required to publish nested references via API?
You need to pass a new `api_version:3.2` header for your request to send nested references for publishing.