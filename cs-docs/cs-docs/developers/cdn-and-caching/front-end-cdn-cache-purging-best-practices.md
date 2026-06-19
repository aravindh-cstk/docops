---
title: "[CDN and Caching] - Front-end CDN cache purging best practices"
description: Best practices for purging only required content from a front-end CDN cache using Contentstack webhooks, UID-to-URL mapping, content hierarchy, and partials.
url: https://www.contentstack.com/docs/headless-cms/front-end-cdn-cache-purging-best-practices
product: Contentstack
doc_type: best-practices
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [CDN and Caching] - Front-end CDN cache purging best practices

This page explains best practices for setting up an optimized front-end CDN caching and cache purging strategy with Contentstack. It is intended for developers implementing their own caching layer and needing to purge only updated, deleted, or newly published content (instead of purging the entire cache).

## Front-end CDN cache purging best practices

Contentstack comes with a [content delivery network (CDN)](/docs/developers/cdn-and-caching/what-is-cdn-and-how-it-works) that caches data in hundreds of PoP servers around the world. So, blazing-fast content delivery comes by default. And with an adequate purging mechanism in place, your users are sure to get fresh and updated content, always.

In most cases, this is adequate, and you may not require any additional caching mechanism for your web applications. However, if you plan to set up a front-end caching—for reasons such as for complete control over what is cached and how—there are certain best practices to keep in mind.

In order to set up optimized and intelligent caching at your end, you should purge the cache of only the deleted, updated or new content in Contentstack (and its references) from your cache, and not the whole cache. To achieve this, you need to set up the following:
- [Set up webhooks](#set-up-webhooks-to-listen-to-events)
- [Map content (entry) UIDs with URLs](#map-content-entry-uids-with-their-respective-urls)
- [Maintain hierarchy of parent and child content](#maintain-hierarchy-of-parent-and-child-content)
- [List down all partials](#list-all-partials)

Let’s look at these steps in detail.

## Set up webhooks to listen to events

In your Contentstack account, [set up webhooks](/docs/developers/set-up-webhooks) for the publish, unpublish or delete events for all [entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets). This will help you send real-time updates on these events to your caching service. When webhook events are triggered, it brings the relevant data payload, and notifies the destination URL. So, you can accordingly purge the updated or new content from your cache.

The webhook payload, however, brings only the UIDs of the first-level references (i.e., immediate referenced entries and assets), and not the whole JSON or deeper nested references. This is when you will need the mapping of UIDs to URLs as well as parent-to-child content.

## Map content (entry) UIDs with their respective URLs

Since the webhook payload brings the UIDs of the first-level references (and not the URLs), you will need to map all entries and assets with their respective URLs. Now, whenever the webhook payload sends the referenced content’s UIDs, your code can identify the URLs, and purge the cache immediately.

## Maintain hierarchy of parent and child content

When a piece of content is updated, a best practice is to purge the cache of its parent and child entries/assets. To handle this, maintain a hierarchy of all parents and their children. This ensures that when you receive a webhook payload (along with the UID of first-level references), your code can check for all parent and child content, and purge the relevant content using the URL mapping.

## List all partials

Partials are items that are common for all or most pages of your website. This includes components such as header, footer, navigation, and so on. Since these are included in all the pages, it’s a good idea to purge your whole content whenever there is any update in partials. To manage this, maintain a list of all partials of your application.

With the above things in place, your front-end CDN should be able to purge only what is required—nothing else—saving considerable cost and effort.

## Common questions

### Do I need a front-end caching layer if Contentstack already uses a CDN?
In most cases, this is adequate, and you may not require any additional caching mechanism for your web applications.

### Why is mapping entry UIDs to URLs necessary?
Since the webhook payload brings the UIDs of the first-level references (and not the URLs), you will need to map all entries and assets with their respective URLs.

### Why maintain a parent and child content hierarchy?
When a piece of content is updated, a best practice is to purge the cache of its parent and child entries/assets.

### What should I do when partials are updated?
Since these are included in all the pages, it’s a good idea to purge your whole content whenever there is any update in partials.

front-end-cdn-cache-purging-best-practices.md