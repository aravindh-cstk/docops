---
title: "[Organization] - Customer Entitlements"
description: Organization settings information related to number of users, usage, and analytics, including user limits, inactive user removal, and usage analytics filters.
url: https://www.contentstack.com/docs/administration/customer-entitlements
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Organization] - Customer Entitlements

This page explains how to view and manage organization-level customer entitlements in Contentstack, including user limits, removing inactive users, and reviewing API calls, usage, bandwidth, and analytics filters. It is intended for organization admins and developers who need to monitor or manage organization usage and access.

### Customer Entitlements

The organization settings page provides information related to the number of users, the usage, and the analytics.

## Users

### Total Limit for Users

To access the analytics for your organization, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Click the “Org Admin” icon on the left navigation panel to navigate to the **Organization Settings** page.
- Click the **Mission Control** tab to view the **Usage Overview** page.

### Remove Inactive Users

When users are removed from the stack, your **Organization User List** may reach a limit due to the number of inactive users. Therefore, removing inactive users from the organization list is advisable instead of the stack.

A user removed from an organization also loses access to all stacks it contains.

To remove an inactive user from the organization, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to the **Organization Settings** page.
- Click the **Users** tab to view the list of users in the organization.![Users_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22607af0f5d52f50/66cc3b438bdacf4b2d245c46/Users_Screen.png)
- Hover over the user you want to remove and click the **Remove** icon that appears on the right.![RemoveUsers_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b82fc89e5977746/66cc3b43769673218d6780aa/RemoveUsers_Icon.png)
- Confirm your decision to remove the user from the organization.![Remove_Popup.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt648453618eb8fbc8/66cc3b437696735f226780a6/Remove_Popup.png)

## API Calls, Usage, and Bandwidth

### Usage by Stacks

The Usage by Stacks section gives a quick overview of the usage of various entities by the stacks of your organization.

To view the different usage by stacks in the organization over a period, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

**Additional Resources: **Refer to the [Product Analytics](./product-analytics.md) documentation for detailed information.
- Click the **Product Analytics** tab to view the **Usage Overview** page.
- Scroll down the page to view the **Usage by Stacks** section.![Usage_By_Stacks.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfc7f9eb4e21de7d/65f7e7fef4a4cf34b214ee3a/Usage_By_Stacks.png)

### Bandwidth Usage

The **Bandwidth** section gives an overview of data usage in the form of a bar chart. The dates are mapped on the X-axis and the corresponding Bandwidth usage (in MB) is mapped on the Y-axis. Set the time frame of your choice and get the desired results as shown below:

Hover over any bar in your chart and you can see the corresponding bandwidth usage (in MB) for a specific duration.

### API Requests Usage

The **API Requests** section under the **Usage Type**, illustrates the API utilization over a particular period, using a bar chart. Time is mapped on the X-axis and the corresponding API utilization is mapped on the Y-axis. You can set the time frame of your choice and get the desired results as shown below:

Hover over any bar in your chart to see the corresponding API utilization for a specific duration.

### Top URLs

The **Top URLs** section highlights the most frequently hit API URLs, along with the number of times those URLs were called for a specific duration.

### Apply Filters

Using Filters, you can filter the data of the **Usage Analytics** and **Tops URLs** sections. You can retrieve data for a specific service, specific group, and specific duration.

#### Services Filter

Use the **Services** filter to view the usage of the data of specific services only. You can choose either a single service or all services at a time.

#### Group By Filter

The **Group By** filter lets you view the usage data grouped by **Daily**, **Weekly,** or **Monthly** usage.

#### Duration Filter

The **Duration** filter gives you quick options to view data of the **last 30 days**, **last 14 days**, **last 7 days,** or **last 1 day**. The **Custom Date **option lets you select a custom date range within the last 30 days as shown below:

## Common questions

### Who can access organization analytics and usage information?
Organization admins who can access the **Organization Settings** page and related tabs (such as **Mission Control** and **Product Analytics**) can view organization analytics and usage information.

### What happens when a user is removed from an organization?
A user removed from an organization also loses access to all stacks it contains.

### How do filters help in usage analytics?
Filters let you retrieve data for a specific service, specific group (Daily/Weekly/Monthly), and specific duration (including custom date ranges within the last 30 days).

### Where can I find more details about analytics?
Refer to the [Product Analytics](./product-analytics.md) documentation for detailed information.