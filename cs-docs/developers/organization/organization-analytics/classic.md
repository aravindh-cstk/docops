---
title: "[Organization] - Organization Analytics | Classic"
description: Overview of the Analytics section in Contentstack Organization settings, including usage overview, usage by stacks, API usage, top URLs, and filters.
url: https://www.contentstack.com/docs/developers/organization/organization-analytics/classic
product: Contentstack
doc_type: guide
audience:
  - developers
  - owners
  - admins
version: classic
last_updated: 2026-03-26
---

# [Organization] - Organization Analytics | Classic

This page explains how to access and use the **Analytics** section in your Contentstack Organization settings, including what each subsection shows and how to filter analytics data. It is intended for Organization owners and admins who need to review usage, API activity, and subscription plan limits.

Organization Analytics | Classic

The **Analytics** section provides an overview of how the users of your [Organization](../about-organizations.md) are using Contentstack.

To access the analytics for your Organization, perform the following steps:
- Log in to your [Contentstack account](https://app.contentstack.com/#!/login).
- Click on the ORGANIZATION dropdown on the header, and click on the “Organization Settings” cog beside the Organization name that you need to open.
- Click on **Analytics** tab to access the section.

**Note**: Only Organization [Owner](../../invite-users-and-assign-roles/types-of-roles.md#owner) and [Admins](../../invite-users-and-assign-roles/types-of-roles.md#admin) can access this section.

This section contains the following subsections:
- **Usage Overview**: Displays the number of [stacks](../../set-up-stack/about-stack.md), [users](../../invite-users-and-assign-roles/about-stack-users.md), [content types](../../create-content-types/about-content-types.md), [entries](../../../content-managers/author-content/about-entries.md), [assets](https://www.contentstack.com/docs/content-managers/working-with-assets/about-assets/), and [environments](../../set-up-environments/about-environments.md) currently existing in the organization
- **Usage by Stacks**: Provides detailed information of each stack created in the organization. The usage in terms of how many content types, entries, assets, environments, [locales](../../restructure-your-data-to-use-contentstack-import-content-utility.md#locales), and extensions have been created.
- **API Usage by Type**: Provides details of the usage of various types of APIs ([Content Delivery](../../../../api-docs/api-detail/content-delivery-api.md), [Content Management](../../../../api-docs/api-detail/content-management-api.md), [Images](../../../../api-docs/api-detail/image-delivery-api.md), and Assets).
- **Top URLs**: Provides details of the most frequently hit API calls.
- **Apply Filter**: Filter out the API Usage and Top URLs data

This page also provides details of your subscription plan (i.e., maximum limits, expiry date).

**Note**: The “Analytics” page can be accessed by only the owners and admins of the organization.

#### Tutorial Video

## Usage Overview

The “Usage Overview” section provides an overview of the usage, along with the maximum allowed limit, of different types of entities within your organization, such as stacks, content types, [entries](../../../content-managers/author-content/about-entries.md), assets, and [users](../../invite-users-and-assign-roles/about-stack-users.md).

## Usage by Stacks

The **Usage by Stacks** section under the **ANALYTICS** tab of your Organization”s Settings page gives a quick overview of the usage of various entities by the stacks of your organization.

Following are some of the specifics mentioned:
- **Stack Name**: Name of all the stacks within your Organization.
- **API Key**: API keys of the listed stacks.
- **Owner**: Email addresses of the owners of the listed stacks.
- **Content Types**: Number of content types within the stacks.
- **Entries**: Number of entries created within the stacks.
- **Assets**: Number of assets present within the stacks.
- **Environments**: Number of environments created within the stacks.
- **Locales**: Number of languages created within the stacks.
- **Extensions**: Number of extensions created within the stacks.

**Note**: This section provides the number of API calls made for a stack within the last 30 days. It also specifies the bandwidth used by the different API calls run over the network (in GB) over the last 30 days.

## API Usage by Type

This section provides details on the usage of the following types of APIs (Content Delivery, Content Management, Images, and Assets)

It provides information about count of API calls and the bandwidth used by each type of API.

## Top URLs

The “Top URLs” section highlights the most **frequently hit** API URLs, along with the number of times those URLs were called.

## Apply Filters

Using **Filters**, you can filter the data of **API Usage** and **Tops URLs** sections. You can retrieve data for specific stacks and/or for a specific duration. Let’s learn more about these filters.

**Duration**: This filter gives you quick options to view data of the last 30 days, last 14 days, and last 7 days or last 1 day. The Custom option lets you select a custom date range within the last 30 days.

**Stack**: Use this filter to view API Usage data of only specific stacks. You can choose either a single stack or all stacks at a time.

## Common questions

**Who can access the Organization Analytics page?**  
Only Organization owners and admins can access the “Analytics” page.

**Where do I find Analytics for my Organization?**  
Open the ORGANIZATION dropdown in the header, click the “Organization Settings” cog for the Organization, and then click the **Analytics** tab.

**What data can I filter using Apply Filters?**  
You can filter the data of the **API Usage** and **Tops URLs** sections.

**What time ranges are available in the Duration filter?**  
You can view data for the last 30 days, last 14 days, last 7 days, last 1 day, or use Custom to select a date range within the last 30 days.