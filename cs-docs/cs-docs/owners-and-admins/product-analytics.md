---
title: "[Owners and Admins] - Product Analytics Old (IGNORE)"
description: Product Analytics Old (IGNORE)
url: https://www.contentstack.com/docs/administration/product-analytics
product: Contentstack
doc_type: owners-and-admins
audience:
  - owners
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Owners and Admins] - Product Analytics Old (IGNORE)

This page describes the (old) Product Analytics section for Contentstack organizations, including how Owners and Admins access it and what data is available across Subscription Usage, Usage by Stacks, Usage Analytics, Top URLs, and Filters. It is intended for Organization Owners and Admins who need to review organization-level usage and API analytics.

### Item 1

#### Article section

##### Heading

Product Analytics Old (IGNORE)

##### Content

OLD The **Product** **Analytics** section provides an overview of how the users of your [Organization](https://www.contentstack.com/docs/owners-and-admins/about-organizations) are using Contentstack.

**Note:** The Product Analytics feature is only available in the [new Contentstack interface](/docs/new-contentstack). Contact our [support](mailto:support@contentstack.com) team to enable this feature, if you are not able to access the Product Analytics dashboard.

To access the analytics for your Organization, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:
- Click the **ORGANIZATION** dropdown on the header, and select the Organization that you need to open.
- Click the “Settings” icon on the left navigation panel.
- Click the **Product** **Analytics** tab to access the section.

**Note**: Only Organization [Owner](https://www.contentstack.com/docs/developers/invite-users-and-assign-roles/types-of-roles/#owner) and [Admins](https://www.contentstack.com/docs/developers/invite-users-and-assign-roles/types-of-roles/#admin) can access this section.

This section contains the following subsections:
- **Subscription Usage**: Displays the number of [extensions](/docs/developers/about-experience-extensions), [users](/docs/developers/invite-users-and-assign-roles/about-stack-users), [stacks](/docs/developers/set-up-stack/about-stack), [content types](/docs/developers/create-content-types/about-content-types), [global fields](/docs/developers/global-field/about-global-field), [entries](https://www.contentstack.com/docs/content-managers/working-with-entries/about-entries/), [assets](https://www.contentstack.com/docs/content-managers/working-with-assets/about-assets/), [environments](https://www.contentstack.com/docs/developers/set-up-environments/about-environments/), and [executions](/docs/developers/automation-hub-guides/executions-in-automation-hub) currently existing in the organization.
- **Usage by Stacks**: Provides detailed information of each stack created in the organization. The usage in terms of how many content types, global fields, entries, assets, environments, [locales](https://www.contentstack.com/docs/developers/restructure-your-data-to-use-contentstack-import-content-utility/#locales), extensions, [webhooks](/docs/developers/set-up-webhooks/about-webhooks), [custom roles](/docs/developers/invite-users-and-assign-roles/types-of-roles#custom-role), bandwidth and API requests have been created.
- **Usage Analytics**: Provides details of the Bandwidth and APIs Requests usage.
- **Top URLs**: Provides details of the frequently hit API calls.
- **Apply Filter**: Filter out the API Usage and Top URLs data.

This page also provides details of your subscription plan (i.e., maximum limits, expiry date).

## Subscription Usage

The “Usage Overview” section displays the number of [extensions](/docs/developers/about-experience-extensions), [users](/docs/developers/invite-users-and-assign-roles/about-stack-users), [stacks](/docs/developers/set-up-stack/about-stack), [content types](/docs/developers/create-content-types/about-content-types), [global fields](/docs/developers/global-field/about-global-field), [entries](https://www.contentstack.com/docs/content-managers/working-with-entries/about-entries/), [assets](https://www.contentstack.com/docs/content-managers/working-with-assets/about-assets/), [environments](https://www.contentstack.com/docs/developers/set-up-environments/about-environments/), and [executions](/docs/developers/automation-hub-guides/executions-in-automation-hub) currently existing in the organization.

In the Executions usage count, users can view the number of executions performed in Automation Hub.

Users can toggle between table and pie view by clicking on the toggle button in the top right-hand corner.

## Usage by Stacks

The **Usage by Stacks** section under the **Product** **Analytics** tab of your Organization's Settings page gives a quick overview of the usage of various entities by the stacks of your organization.

Following are some of the specifics mentioned:
- **Stack Name**: Name of all the stacks within your Organization.
- **API Key**: API keys of the listed stacks.
- **Owner**: Email addresses of the owners of the listed stacks.
- **Content Types**: Number of content types within the stacks.
- **Global Field**s: Number of global fields within the stacks.
- **Entries**: Number of entries created within the stacks.
- **Assets**: Number of assets present within the stacks.
- **Environments**: Number of environments created within the stacks.
- **Locales**: Number of languages created within the stacks.
- **Extensions**: Number of extensions created within the stacks.
- **Webhooks**: Number of webhooks created within the stacks.
- **Custom Roles**: Number of custom roles within the stacks.
- **Bandwidth**: Bandwidth used by the different API calls run over the network (in GB) over the last 30 days.
- **API Requests**: Number of API calls made for a stack within the last 30 days.

Click the full screen button to view the data in full screen.
Additionally, you can save a copy of these statistics by downloading the chart. Click the Export button in the top right corner of this section to download the PDF file.

## Usage Analytics

The **Usage Analytics** section provides a quick overview of the following metrics:
- Bandwidth
- API Requests

### Bandwidth Usage

The **Bandwidth** section gives you an overview of your data usage in the form of a bar chart. The dates are mapped on the X-axis and the corresponding Bandwidth usage (in GB) is mapped on the Y-axis.
Set the time frame of your choice and get the  desired results as shown below:

Hover over to any bin/bar in your chart and you can see the corresponding bandwidth usage(in GB) in that particular time stamp.

You can also view the bandwidth usage for different services including Automations.

Click the full screen button to view the data in full screen.
Additionally, you can save a copy of these statistics by downloading the chart. Click the Export button in the top right corner of this section to download the PDF file.

### API Requests

Move to the **API Requests **segment under the **Usage Analytics **section.
The **API Requests** section illustrates the API utilization over a particular period of time, using a bar chart.
Time is mapped on the X-axis and the corresponding API utilization is mapped on the Y-axis.
You can set the time frame of your choice and get the desired results as shown below

You can view the API utilization for Automations in the API Requests tab.

Similar to the Bandwidth section, you can hover over to any bin/bar in your chart and you can see the corresponding API utilization in that particular time stamp.
 Click the full screen button to view the data in full screen

Additionally, you can save the data by downloading the chart. Click the Export button in the top right corner of the section to download the PDF file.

## Top URLs

The “Top URLs” section highlights the most **frequently hit** API URLs, along with the number of times those URLs were called.
On the **Product Analytics** page, scroll to the** Top URLs **section.
In this section you will find data in tabular format. Using this data you can easily track the top viewed URLs with the number of API requests.
Click the **API Request **button**, **to view the top/least API Requests.
Use the table filters given on the page to fetch data of a particular time frame and get your desired results as shown below:

Click the full screen button to view the data in full screen.
Additionally, you can save this data by downloading the PDF file, by clicking on the Export button in the top right corner of the section.

## Apply Filters

Using **Filters**, you can filter the data of **Usage Analytics** and **Tops URLs** sections. You can retrieve data for specific service, specific group and/or specific duration. Let’s learn more about these filters.

**Services**: Use this filter to view the usage data of only specific services. You can choose either a single service or all services at a time.

**Group By**: This filter will help you to view the usage data grouped by daily, weekly or monthly usage.

**Duration**: This filter gives you quick options to view data of the **last 30 days, last 14 days, last 7 days or last 1 day**. The **Custom Range** option lets you select a custom date range within the last 30 days as shown below:

## Common questions

### Who can access the Product Analytics section?
Only Organization Owner and Admins can access this section.

### Where do I find Product Analytics in the UI?
Click the **ORGANIZATION** dropdown on the header, select the Organization, click the “Settings” icon on the left navigation panel, and click the **Product** **Analytics** tab.

### What data is included in Usage Analytics?
The **Usage Analytics** section provides a quick overview of the following metrics: Bandwidth and API Requests.

### What can I filter using Apply Filters?
Using **Filters**, you can filter the data of **Usage Analytics** and **Tops URLs** sections by service, group, and duration.