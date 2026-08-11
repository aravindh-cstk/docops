---
title: "Analytics for Brand Kit"
description: "Track Brand Kit usage with Contentstack's Analytics dashboard. Monitor Brand Kits, Voice Profiles, AI requests, and more."
url: /analytics/analytics-for-brand-kit
---

# Analytics for Brand Kit

## Analytics for Brand Kit

The Brand Kit Analytics dashboard gives organization Owners and Admins a centralized view of how their organization's Brand Kit is used. Use this dashboard to monitor subscription consumption, track generative AI (GenAI) request volume, review API performance, and measure Knowledge Vault activity.

## Prerequisite

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to navigate to the Brand Kit Analytics dashboard.
    
-   What each dashboard section measures and how to interpret it.
    
-   How to apply filters to narrow dashboard data by Brand Kit and Voice Profile.
    
-   How to save a filter combination as a reusable view.
    

## Access the Brand Kit Analytics Dashboard

To access the Analytics dashboard, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Analytics** through the "App Switcher".
    
2.  By default, the **CMS** analytics dashboard appears. Click **Brand Kit** to switch to the Brand Kit dashboard.
    
    ![Selecting the Brand Kit dashboard in Analytics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amb24ebe65a3b84f59/f2827f38f89a9435371b4f06/Analytics_Brandkit_NewSelect.png?locale=en-us)

**Note:** Data in the Brand Kit dashboard is updated every **24 hours**.

## Brand Kit Analytics Dashboard Sections

The dashboard is divided into several sections, each providing valuable insights into different aspects of your Brand Kit usage. These sections help you monitor and optimize your performance, resource utilization, and overall efficiency.

### Subscription Usage

This section shows organization-level consumption totals for the current subscription period. The following metrics are displayed:

-   **Brand Kit:** The number of Brand Kits created within your organization.
    
-   **Voice Profile:** The total number of Voice Profiles configured.
    
-   **Knowledge Vault:** The number of items stored in the Knowledge Vault.
    
-   **Tokens:** The number of tokens consumed for GenAI requests.
    

**Note:** Token usage includes only requests sent to a Brand Kit's custom large language model (LLM). Requests that use the default Contentstack LLM (when no Brand Kit is selected) are not counted in the Tokens metric.

![Subscription Usage section of the Brand Kit Analytics dashboard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama0495f2e84267aa0/192e102c0666cddb0d4a7b0b/Analytics_Brandkit_SubscriptionUsage.png?locale=en-us)

### Usage by Brand Kit

This section breaks down resource consumption per individual Brand Kit. The following details appear for each Brand Kit:

-   **Brand Kit Name:** The name of the Brand Kit.
    
-   **Voice Profiles:** The number of Voice Profiles associated with the Brand Kit.
    
-   **Knowledge Vaults:** The number of items stored in the Knowledge Vault for the Brand Kit.
    
-   **Tokens Used:** The number of tokens the Brand Kit consumed for GenAI requests.
    

This data lets you compare resource consumption across Brand Kits and identify which kits are driving the most activity.

![Usage by Brand Kit table](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ce5ad2a00e47d69/689d760d0fc452eb67858293/4._Usage_by_Brandkit.png)

### Content Generations

This section shows a time-based chart of the number of GenAI content generation requests made over a selected period. Hover over the chart to see the request count for a specific point in time.

**Note:** When a Brand Kit is selected during AI content generation, the chart includes only requests processed through that kit's custom LLM.

![Content Generations time-series chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32d0bd8fa51dcc18/689d760d9ee2010d7feb8e29/5._content_generation.png)

### Content Generations Status Code

This section shows the number of content generation requests grouped by response status, including successes, errors, and unsupported requests. This applies to requests processed by both the default Contentstack LLM and any custom LLMs linked to Brand Kits.

![Content Generations Status Code chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta675339233b44bd9/689d760d026f3da7351d83c6/7._Content_generation_status_code.png)

### Brand Kit Requests

This section shows the volume and frequency of Brand Kit requests over time. Hover over the chart to inspect the request count for a specific point in time.

![Brand Kit Requests time-series chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8a16a4c2ba0dab5/689d760e5480a062322e4041/8._Brand_Kit_Requests.png)

### Brand Kit Status Usage

This section shows the number of Brand Kit URL requests grouped by response status, including successes, errors, and unsupported requests. Use this data to assess API performance and investigate issues.

![Brand Kit Status Usage chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt112e6b819c81ce87/689d760d46b3af5869e4f238/9._Brandkit_Status_Usage.png)

### AI Assistant Request

This section shows how frequently the AI Assistant is used over time. Hover over the chart to see the request count for a specific point in time.

**Note:** When a Brand Kit is selected, the chart displays requests processed by that kit's custom LLM. When no Brand Kit is selected, it displays requests processed by the default Contentstack LLM.

![AI Assistant Request time-series chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b8211c00f42faf2/689d760d8fd38c2bdc16986e/11._AI_Assistant_Request.png)

### AI Status Code Usage

This section shows the number of AI Assistant API requests grouped by response status, including successes, errors, and unsupported requests. Use this data to assess API performance and investigate issues.

![AI Status Code Usage chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13163855ff891b66/689d760defb7487a2e2273eb/12._AI_Status_Usage.png)

### Knowledge Vault Utilization

This section shows usage trends for the Knowledge Vault, reflecting how actively the vault is being accessed or updated over time.

**Note:** This section applies only to content generation requests where a Brand Kit is selected. Activity from requests using the default Contentstack LLM (without a Brand Kit) is not included.

![Knowledge Vault Utilization trend chart](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt505ba60f10b93f0b/689d760d46b3af1f71e4f23c/13._Knowledge_vault_utilization.png)

## Apply Filters and Manage Views

To filter dashboard data, click **Filters**, select your options, and then click **Apply Filter(s)**.

The following filters are available:

-   **Brand Kits:** View metrics for a specific Brand Kit or for all Brand Kits together.
    
-   **Voice Profiles:** View metrics for a specific Voice Profile or for all Voice Profiles together.
    
-   **Stacks:** View AI Assistant metrics for a specific stack or for all stacks together.
    
-   **Status Code:** Filter by specific response codes.  
    ![Status Code filter options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb02ef53c11c9c3e4/6894b5b678cbdc7926fb9372/16._filter_status_code.png)
    
-   **Group By:** View data grouped by day, week, or month.  
    ![Selecting the Group By filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt930cf41767768ce9/6894b87ec841e057f783991e/2-group-by-date_(2).gif)
    
-   **Date Range:** Choose from 1 week, 30 days (default), 60 days, or 90 days. Some charts include a timeline selector for further refinement.
    
-   **Custom Date:** Set a specific date range using the dropdown.  
    ![Setting a custom date range](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8bee3e68d7da22c/6894b8f310270bd24e55985f/2-set-custom-date_(2).gif)
    
    **Note:** The custom date range cannot exceed **90 days**.
    

To save a filter combination for later use, click the horizontal ellipsis (**...**) next to **Reset** and select **Save As New View**.

The saved view appears in the dropdown menu. You can select it at any time to restore your filter settings without reapplying them manually.

![Save as New View.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/bltf74f804d1a36c99b/6894b7a788895d60d0fc7be4/Save_as_New_View.png?locale=en-us)
