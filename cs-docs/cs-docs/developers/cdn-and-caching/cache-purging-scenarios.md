---
title: "[CDN and Caching] - Cache Purging Scenarios"
description: Cache purging scenarios for Contentstack CDN and caching across locales and environments.
url: https://www.contentstack.com/docs/headless-cms/cache-purging-scenarios
product: Contentstack
doc_type: concept-guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [CDN and Caching] - Cache Purging Scenarios

This page explains how Contentstack purges CDN cache when content or assets are published, unpublished, or deleted, including how purging behaves across locales and environments. It is intended for developers and content managers who need to understand what gets invalidated in the CDN after common content update actions, and when to expect cache changes in specific locales/environments.

## Cache Purging Scenarios

Contentstack purges cache of only the content that's changed ([published](/docs/content-managers/publish-content), [unpublished](/docs/content-managers/working-with-entries/unpublish-an-entry), or [deleted](/docs/content-managers/working-with-entries/delete-an-entry)) and other related data (referenced content) from the [Content Delivery Network](/docs/developers/cdn-and-caching/what-is-cdn-and-how-it-works/). Purging takes place only on the specific locale and [environment](/docs/developers/set-up-environments/about-environments) on which the cached content exists.

For instance, when you delete a referred child [entry](/docs/content-managers/working-with-entries/about-entries), Contentstack **purges** all the cached entries of that **child content type** (on concerned locale and environment) and the cached entries of all **parent **[**content types**](/docs/developers/create-content-types/about-content-types) (on concerned locale and environment) that refer to the child entry. The purging mechanism moves up the reference chain.

Contentstack purges cached data only when an API request attempts to publish, unpublish, or delete content. Such API requests comprise the name of the publishing environment as a query parameter.

**Additional Resource**: Learn how to [scan the cache headers](/docs/developers/how-to-guides/contentstack-cdn-cache-management#understanding-cache-header-response) returned in response to an API request to determine where the content is delivered from.

Let us look at a few scenarios to understand how Contentstack purges only relevant cached content from the specific locale and environment.

Consider a scenario where you have a website’s home page that contains a section that displays recently added articles. The “Home Page” content type has a “Reference” field that refers to the “News Articles” content type to pick up newly added articles regularly. The [content manager](/docs/developers/invite-users-and-assign-roles/types-of-roles/#content-manager) has also added an asset to the home page, which represents the company logo.

Each article also has references to a specific author bio from the “Author Details” content type. This content type contains bios for all authors that contribute to news articles. Apart from the biography, each entry of the “Author Details” content type also includes an asset representing the profile picture of a specific author.

The “News Articles” content type will have entries that contain details of specific news articles. Each article also comprises appropriate images related to the particular news item.

Refer to the list of articles given below:
- News article 1
- News article 2
- News article 3

Since the website is [multilingual](/docs/developers/multilingual-content), the company publishes the above articles in the following languages:
- English (United States)
- French (France)
- German (Germany)

The articles and the home page have been published on all the following environments to reflect the same changes everywhere:
- Development
- Staging
- Production

The CDN stores cached copies of all these articles, the author bios, the home page, and all the referred assets once they are published.

## Edit and Publish the Home Page
Suppose if the content manager edits the company description in the “Home Page” content type. Once done, the author publishes the “English (United States)” version of the content to all the three available locales and on the “Production” environment.

The following cached data will be purged:
- “English (United States)” version of the “Home Page” entry on “Production” environment
- “French (France)” version of the “Home Page” entry on “Production” environment
- “German (Germany)” version of the “Home Page” entry on “Production” environment

**Note**: We do not purge cached assets and download URLs when an entry is published or unpublished.

## Edit and Publish the Company Logo
Suppose if the content manager replaces the existing company logo in the “Home Page” content type with the latest version. Once done, the content manager publishes the “English (United States)” version of the company logo to all the three available locales and on the “Staging” and “Production” environments.

The following cached data will be purged:
- “English (United States)” version of the “Home Page” entry, along with all assets referred with the entry, on “Staging” and “Production” environments
- “French (France)” version of the “Home Page” entry, along with all assets referred with the entry, on “Staging” and “Production” environments
- “German (Germany)” version of the “Home Page” entry, along with all assets referred with the entry, on “Staging” and “Production” environments.

**Note**: We do not purge the cache of the download URLs of the assets when an asset is published or unpublished.

## Edit and Publish a News Article Entry
Now, suppose a content manager updates any article and publishes the changes to the “German (Germany)” locale and the “Development” environment.

The following cached data will be purged:
- All entries of the “News Articles” content type present in “German (Germany)” and published to “Development”.
- All entries of the “Home Page” content type present in “German (Germany)” and published to “Development”.

**Note**: We do not purge cached assets and download URLs when an entry is published or unpublished.

## Delete an Author Biography Entry
Suppose if the content manager deletes an author bio entry from the “Author Details” content type. This author’s bio was localized in “French (France)” and published to the “Production” environment.

The following cached data will be purged:
- All entries of the “Author Details” content type present in “French (France)” and published to “Production”.
- All entries of the “News Articles” content type present in “French (France)” and published to “Production”.
- All entries of the “Home Page” content type present in “French (France)” and published to “Production”.

**Note**: We do not purge cached assets and download URLs when an entry is published or unpublished.

## Delete an Author Profile Pic
Suppose an author’s profile pic was being referred to in all the three locales: **English (United States), French (France) and German (Germany)**, and published to the “Production” environment. For this example, we consider the following scenarios:
- Content manager deletes the author profile pic from the asset manager of the stack
- Content manager detaches the author profile pic from an entry of the “Author Details” content type

In both the scenarios mentioned above, the following cached data will be purged:
- All entries of the “Author Details” content type present in **English (United States)**, **French (France)** and **German (Germany)**, along with all assets referred within the entries, and published to “Production”.
- All entries of the “News articles” content type present in **English (United States)**, **French (France)** and **German (Germany)**, along with all assets referred within the entries, and published to “Production”.
- All entries of the “Home Page” content type present in **English (United States)**, **French (France)** and **German (Germany)**, along with all assets referred within the entries, and published to “Production”.

**Note**: We do not purge the cache of the download URLs of the assets when an asset is [published](/docs/content-managers/working-with-assets/publish-an-asset) or [unpublished](/docs/content-managers/working-with-assets/unpublish-an-asset).

## Common questions

### Does Contentstack purge cache for all locales and environments automatically?
No. Purging takes place only on the specific locale and environment on which the cached content exists.

### When does Contentstack purge cached data?
Contentstack purges cached data only when an API request attempts to publish, unpublish, or delete content.

### Are assets and download URLs purged when entries are published or unpublished?
No. We do not purge cached assets and download URLs when an entry is published or unpublished.

### What happens when referenced content is deleted?
Contentstack purges cached entries of the child content type and cached entries of parent content types that refer to the child entry; the purging mechanism moves up the reference chain.

<!-- filename: cdn-and-caching-cache-purging-scenarios.md -->