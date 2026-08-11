---
title: "AI Credits"
description: "Monitor AI credit usage, track monthly consumption, and configure excess usage limits for AI-powered services."
url: /administration/ai-credits
---

# AI Credits

## AI Credits

AI Credits are used to measure and manage AI-powered services within Contentstack. They provide visibility into your organization’s AI usage through a centralized dashboard, offering real-time data to help you track consumption, monitor trends, and prevent service interruptions.

The AI Credits dashboard provides a monthly view of usage and allows you to configure limits to control how credits are consumed.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   AI-enabled Contentstack products
    
    **Note:** At least one product must be enabled in the [Global AI Settings](/docs/administration/ai-settings) to view the AI Credits usage data. If no products are enabled, the dashboard will show zero usage.
    

## What You Will Learn

-   How to open the AI Credits dashboard.
    
-   How to read monthly credit allocation and usage.
    
-   How to configure a Block or Allow Excess Usage for credit consumption.
    

## View Your AI Credits

To access your credits usage, log in to your [Contentstack account](https://www.contentstack.com/login) and follow the steps:

1.  Navigate to the "App Switcher" icon in the top-right corner and click **Administration**.![App Switcher Administration](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am284c5c2e12346360/b90cbb1704689e43cd246cbe/App-Switcher-Administration.png?locale=en-us)
2.  From the top header, select **AI Settings**.![AI Settings](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3c56af473fd87a78/5acfc761c145d4eb62cd82f3/AI-Settings.png?locale=en-us)
3.  Click the **AI Credits** option in the left navigation.![AI Credits](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ame9d12c475dcbd39f/bd4d93fe19b947833627dbd6/AI_Credits.png?locale=en-us)
    
    ### Credits Dashboard
    
4.  The **Dashboard** provides an overview of credit allocation and consumption for the **current month**.![AI Credits Dashboard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6f53ff75730da0b6/389311adc464848d9c574b1c/AI-Credits-Dashboard.png?locale=en-us)
    
    1.  **Monthly Credit Allocation:** The top section of the dashboard provides a high-level overview of your organization's AI resources.
        1.  **Organization Credit Usage Percentage:** Displays the percentage of base credits consumed in the month.
        2.  **Credit Allocation:** Shows the total number of credits used and allocated per month.
    2.  **Days Until Reset:** Indicates the number of days remaining until credits reset.
        
        **Tip:** AI credits reset on the **1st of every month**.
        
    3.  **Monthly Credit Usage:** The lower section of the dashboard provides a granular, visual breakdown of consumption patterns across the organization:![AI Credits Dashboard Usage Graph](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am357c6c8f773f19c8/c09268ba12d32f3a243e1e7d/AI-Credits-Dashboard-Usage-Graph.png?locale=en-us)
        1.  **Day-over-Day Monthly Usage Graph:** Displays daily credit utilization to identify spikes in activity and analyze peak usage periods.
        2.  **Credits Consumed per Product:** The graph is color-coded to differentiate between various AI-enabled products.
        3.  **Interactive Hover Details:** Hover over the data points on the graph to view exact credit usage for a selected day and product.
    
    ### Credits Management
    
5.  The **Management** tab allows you to define how the system behaves after the credit allocation is exhausted.![AI Credits Management](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd790e570b5c41a3e/0a21e722256ce2c6f3ede683/AI-Credits-Management.png?locale=en-us)
    1.  **Block Excess Usage:** (Default): Blocks all AI operations when 100% of your allocation is consumed.
    2.  **Allow Excess Usage:** Allows usage beyond the credit limit to a specified amount of credits.
        
        Select this option and enter a specific numerical limit to define your additional credit allowance. Once you save the changes, you can resume your AI operations until you reach the defined limit.
        
        **Note:** Usage beyond the basic credit allocation is billed at a higher rate.
        
        Navigate to the AI Credits **Dashboard** to view the **Allowed Excess Usage** to track the total number of extra credits utilized.
        
        ![AI Credits Dashboard Excess Usage](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am93587cfab48dfdf8/f74d8b3369ecf7080d15e3bb/AI-Credits-Dashboard-Excess-Usage.png?locale=en-us)

**Note:** To learn more, refer to the [Analytics for AI Credits](/docs/analytics/analytics-for-ai-credits) documentation.
