---
title: "About Nested Reference Publishing"
description: "Effortlessly publish entries with nested references across environments and languages. Avoid missing any referenced content. "
url: /headless-cms/about-nested-reference-publishing
---

# About Nested Reference Publishing

## About Nested Reference Publishing

With **Nested Reference Publishing**, you can publish a single entry or a group of entries, along with all of its nested referenced entries and/or assets, across multiple environments and languages, without the risk of missing any referenced content.  

Here’s a quick glance of what you can do with this feature:

-   Publish an entry (or entries) with all of its nested references
-   Schedule an entry (or entries) for publishing with all of their nested references
-   Cancel any scheduled bulk publish activities

**Note:** Nested Reference Publishing is a plan-based feature. Please contact your Organization administrator to get this feature activated for you.

When you publish your content, Contentstack offers a separate **Publish Reference(s)** modal where you can view and validate all nested, cross-referenced entries and assets, for all selected languages.

![Publish_references_modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte79f972c9592e2f1/646b4fb5df57fd1ecb656716/Publish_references_modal.png)

Nested Reference Publishing works based on the latest unpublished changes and stops at the last published version of any nested reference.

Consider this scenario:

-   If entry A references entry B, and B references entry C
-   B has already been published
-   Later, C is updated

When you publish A, C will not be included in the nested publishing process.

This happens because B, which acts as the link between A and C, has not changed since it was last published. The nested reference publishing process stops at B (or whenever it finds a published reference), assuming it is up to date.

To ensure C is included, you must republish B with references so that the system detects a change in the reference chain or manually publish C.

## Key Features

Here are a few key features of Nested Reference Publishing:

-   It allows you to bulk-publish an entry or a group of entries with nested references, up to a depth of **5 levels**, and this level can vary as per your organization plan.
-   You can select up to **50 environments** and **50 locales** to which you want to publish content**,** and this level can vary as per your organization plan.
-   If any included referenced items (entries and/or assets) do not satisfy the publishing criteria related to workflows and/or publishing rules, have insufficient permissions, or are in the in-progress state, the bulk-publish activity will not proceed. You will be able to see the reason why by expanding the tree view in the **Publish Reference(s)** modal.
-   Only the latest version of each selected nested reference item at the time will be sent for publishing.
-   You can schedule or even cancel the scheduled bulk publishing tasks with Nested Reference Publishing.
-   The new **Summary** column in the Publish Queue will display the overall status of all items included in your bulk publish jobs.

## API Reference

When working with APIs, you need to pass a new api\_version:3.2 header for your request to send nested references for publishing.

-   [Publish entries and assets in bulk](https://www.contentstack.com/docs/developers/apis/content-management-api/bulk-operations#publish-entries-and-assets-in-bulk)
-   [Unpublish entries and assets in bulk](https://www.contentstack.com/docs/developers/apis/content-management-api/bulk-operations#unpublish-entries-and-assets-in-bulk)
-   [Get publish queue](https://www.contentstack.com/docs/developers/apis/content-management-api/publish-queue#get-publish-queue)
-   [Cancel scheduled action](https://www.contentstack.com/docs/developers/apis/content-management-api/publish-queue#cancel-scheduled-action)

#### Tutorial Video

Let's learn how the Nested Reference Publishing feature works.
