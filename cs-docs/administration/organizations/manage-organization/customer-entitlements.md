---
title: "Customer Entitlements"
description: "Customer Entitlements in Contentstack allows the owners and Admins to know the user and usage information."
url: /administration/customer-entitlements
---

# Customer Entitlements

## Customer Entitlements

The Organization Settings page shows information about the number of users, usage, and analytics for your organization. This page explains how to view user limits, remove inactive users, and read the organization usage analytics.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to view the total user limit for your organization.
    
-   How to remove inactive users from the organization.
    
-   How to view usage by stacks, bandwidth, API requests, and top URLs.
    
-   How to filter usage analytics data.
    

## Users

### Total Limit for Users

To access the analytics for your organization, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Click the “Org Admin” icon on the left navigation panel to navigate to the **Organization Settings** page.
2.  Click the **Mission Control** tab to view the **Usage Overview** page.

### Remove Inactive Users

When users are removed from the stack, your **Organization User List** may reach a limit due to the number of inactive users. Therefore, removing inactive users from the organization list is advisable instead of the stack.

A user removed from an organization also loses access to all stacks it contains.

To remove an inactive user from the organization, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to the **Organization Settings** page.
2.  Click the **Users** tab to view the list of users in the organization.  
    ![Users tab listing organization users height=](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22607af0f5d52f50/66cc3b438bdacf4b2d245c46/Users_Screen.png)
3.  Hover over the user you want to remove and click the **Remove** icon that appears on the right.![Remove icon next to an organization user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b82fc89e5977746/66cc3b43769673218d6780aa/RemoveUsers_Icon.png)
4.  Confirm your decision to remove the user from the organization.![Confirm remove user dialog](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt648453618eb8fbc8/66cc3b437696735f226780a6/Remove_Popup.png)

## API Calls, Usage, and Bandwidth

### Usage by Stacks

The Usage by Stacks section gives a quick overview of the usage of various entities by the stacks of your organization.

To view the different usage by stacks in the organization over a period, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

**Additional Resource:** Refer to the [Product Analytics](/docs/analytics/about-analytics) documentation for detailed information.

1.  Click the **Product Analytics** tab to view the **Usage Overview** page.
2.  Scroll down the page to view the **Usage by Stacks** section.![Usage by Stacks section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfc7f9eb4e21de7d/65f7e7fef4a4cf34b214ee3a/Usage_By_Stacks.png)

### Bandwidth Usage

The **Bandwidth** section gives an overview of data usage in the form of a bar chart. The dates are mapped on the X-axis and the corresponding Bandwidth usage (in MB) is mapped on the Y-axis. Set the time frame of your choice and get the desired results as shown below:

![Bandwidth usage bar chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16ce569aff5c774d/66cc3c8d70d8f81962fea60e/Usage_by_Stacks_Bandwidth.png)

Hover over any bar in your chart and you can see the corresponding bandwidth usage (in MB) for a specific duration.

### API Requests Usage

The **API Requests** section under the **Usage Type**, illustrates the API utilization over a particular period, using a bar chart. Time is mapped on the X-axis and the corresponding API utilization is mapped on the Y-axis. You can set the time frame of your choice and get the desired results as shown below:

![API requests usage bar chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0bff6f6360fa0a0f/66cc64698f533f14fde17cbc/Usage_By_Stacks_API_requests.png)

Hover over any bar in your chart to see the corresponding API utilization for a specific duration.

### Top URLs

The **Top URLs** section highlights the most frequently hit API URLs, along with the number of times those URLs were called for a specific duration.

![Top URLs section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5ec2da234b6b882/66cc3c8d19b6830681088a31/TOP_URLs.png)

### Apply Filters

Using Filters, you can filter the data of the **Usage Analytics** and **Tops URLs** sections. You can retrieve data for a specific service, specific group, and specific duration.

#### Services Filter

Use the **Services** filter to view the usage of the data of specific services only. You can choose either a single service or all services at a time.

![Services filter options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9183bbfa215cc2be/66cc6469b3f7660708c70879/services_filter.png)

#### Group By Filter

The **Group By** filter lets you view the usage data grouped by **Daily**, **Weekly,** or **Monthly** usage.

![Group By filter options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb8edd67cf88b76c/66cc64698f533f7cb4e17cb8/Usage_Analytics_Group_By.png)

#### Duration Filter

The **Duration** filter gives you quick options to view data of the **last 30 days**, **last 14 days**, **last 7 days,** or **last 1 day**. The **Custom Date** option lets you select a custom date range within the last 30 days as shown below:

![Duration filter with custom date range](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4c7891d35890539/66cc646970d8f8a8bffea81e/Usage_Analytics_Date_Filterpng.png)
