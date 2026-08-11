---
title: "Simple Banner Swap A/B Testing Use Cases"
description: "Discover how to A/B test banner variants using Contentstack Personalize to boost engagement and optimize website personalization."
url: /personalize/a-b-testing-banners-use-case
---

# Simple Banner Swap A/B Testing Use Cases

## Simple Banner Swap A/B Testing Use Cases

Imagine your banner space, a prime piece of digital real estate, as a powerful driver of engagement and conversion. With **Contentstack Personalize**, you can run A/B testing on banner variants to determine which message drives the most clicks, signups, or purchases. Why guess, when you can optimize with data?

## What You Will Learn

-   How to create an A/B test experience with two variants and a traffic split.
    
-   How to define a conversion event and set it as the primary metric.
    
-   How to create banner content as entry variants.
    
-   How to set up the Personalize Edge SDK to track impressions and events.
    

## The Challenge - Why Risks of Untested Content

An[A/B test experience](https://www.contentstack.com/docs/personalize/create-ab-test-experience) is a randomized experiment that lets you present two or more content variants of a web page or an app and display them to different sets of users at the same time to verify the effectiveness of these variants. Without A/B testing, you are essentially rolling the dice.

Every banner impression, every click-through opportunity, and every dollar spent on creative could be a wasted effort if the message fails to connect with the intended audience.

Here are some real-world A/B Test use cases.

**E-commerce/Retail: The Ongoing Sale Campaign**

You are a nationwide retailer running a **long-running sale campaign** on your website. You have a banner and a CTA on the homepage to promote the sale and drive visitors to the deals page.

However, engagement has been lower than expected. You suspect the banner copy may not be persuasive enough. To improve results, you create two versions of the banner and run an A/B test to determine which one performs better before rolling it out to all traffic.

-   **Variant A - Control:** "Shop the Sale" (A straightforward, direct directive)
-   **Variant B - Evocative Variant:** "Discover Hot Deals" (A more evocative and inviting message)

![Retail sale banner A/B variants](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltabdabc42a3c9115f/6902ac57aad66482cee333da/Retail-banner-personalize.png)

Without testing, launching the new text is a gamble, risking thousands of impressions on an underperforming creative that could miss out on potential sales and further impact results.

**SaaS/Technology: A New Feature Launch**

You are a software company that has just released a game-changing new feature and needs to drive trial signups. You have crafted two distinct banners to promote it.

-   **Variant A:** "Start Free Trial" (A direct, practical call to action)
-   **Variant B:** "See How It Works" (A message that promises insight and value)![SaaS feature launch banner A/B variants](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt372afc5015103c62/690302e9ad5530c3670d1759/image3.png)

You cannot afford to waste a single potential lead, but you have no way of knowing which message will convert more visitors into users. You can create an A/B test to split the traffic to your website 50/50, and see which variant leads to more trial sign ups in the first two weeks.

**Banking/Financial Services: The New Credit Card**

You are a national bank launching a new rewards credit card. To promote it, you have created banners that appeal to two different customer motivations.

-   **Variant A:** "Earn Cash Back Fast" (Appeals to immediate gratification)
-   **Variant B:** "Travel Rewards That Take You Further" (Appeals to long-term aspiration)

![Credit card rewards banner A/B variants](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a9dd200be3dd557/6902acc3e81f1845c44c1951/image2.png)

The wrong message could result in a significant loss of new card applications and potential revenue. A/B testing the two variants here can help you ensure you connect with your target audience's primary motivation in the long run.  
In each of these stories, the problem is the same, an important decision made without data.

## The Solution: A Clear Path with Personalize

Contentstack Personalize makes A/B testing banners simple and effective:

-   **Experiences:** Split visitors randomly into groups (50/50 by default) and serve different banner variants to each group.
-   **Real-time tracking:** Measure impressions and conversions for every variant.
-   **Insights:** Identify the winning creative and roll it out across your site.

## Level of Effort: Easy

**Prerequisites:**

-   [Contentstack account](https://www.contentstack.com/login/)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   Access to Personalize [project](/docs/personalize/create-personalize-project)

**This setup only requires:**

-   An audience split
-   An experience, with the two variants defined
-   Content Entry variants defined for each of the variants.

## Steps to Implement

### Personalize - Create a Project connected to your Stack

1.  Navigate to App Switcher → Personalize → + New Personalize Project
    
    **Additional Resource:** For more information, refer to [Create a Personalize Project.](/docs/personalize/create-personalize-project)
    

### Personalize - Create Experience with Variants

1.  Navigate to Personalize → Experiences → + New Experience.
2.  Select Experience type: **A/B Test**.
3.  Save General Details.
4.  Configure the experience with two variants in the **Configuration** tab.
5.  In Variant Distribution, choose **Equally split (50/50)** or adjust percentages (**Custom**) if needed.
6.  Click **\+ Add Variant** to create **Variant A** and **Variant B**. Name the variants based on your use case (for example, for a sale campaign, use Control and Evocative Variant).
    
    **Additional Resource:** For more information, refer to [Create an A/B Test Experience.](/docs/personalize/create-ab-test-experience)
    

### Personalize - Define Conversion Event

1.  Navigate to Personalize → Events.
2.  Click **\+ New Event** to create your conversion event “banner\_click”.
3.  Go back to your A/B Test Experience and add the newly created event as the Primary Metric in the configuration.

### CMS - Link Content Types

1.  Navigate to the desired Stack → Settings → Variants → select relevant Variant Group → Linked Content Types.
    
    **Note:** Variant Groups and Variants are automatically created based on the Experiences you define in Personalize.
    
    **Additional Resource:** For more information, refer to [Manage Variant Groups](/docs/headless-cms/manage-variant-groups).
    
2.  In the **Linked Content Types** field, select one or more content types you want to associate with the variant group.
3.  Click **Apply → Save**.
    
    **Additional Resource:** For more information, refer to [Linking Content Types.](/docs/headless-cms/manage-variant-groups#linking-content-types)
    

### CMS - Create Personalized Content in Entry Variants

1.  Navigate to the desired Stack → Entries → + New Entry.
2.  Create two entries.
3.  Publish these entries to the connected environment.
4.  Once published, navigate to Personalize → Experiences → Your Experience → Configuration.  
    Map each variant to the correct entry, personalize uses the variant-to-entry mapping to decide in real time which banner each visitor sees based on their audience group.
    
    **Additional Resource:** For more information, refer to [Create an Entry Variant.](/docs/headless-cms/create-an-entry-variant)
    

### Dev - Setup Personalize Edge SDK: Retrieve active variants and track impressions/events)

1.  **Install SDK**
    -   Add the Personalize SDK via npm/yarn/pnpm to your site’s codebase. For the frontend code, you can also add it via [Google Tag Manager](/docs/personalize/google-tag-manager-integration-with-personalize) or your preferred tag manager for easier impression and event tracking.
2.  **Retrieve active variants**
    -   Initialize the SDK on every new page load and get the active variants' aliases for the current visitor. We recommend server-side rendered (SSR) sites place this logic at the edge by using an edge function/middleware.
    -   Pass the active variants aliases to the Contentstack Delivery SDK to fetch the corresponding entry variants.
        
        **Additional Resource:** For more information, refer to [SSR Edge Routing](/docs/personalize/ssr-edge-routing-technical-implementation-architecture), [Setup Next.js with Personalize.](/docs/personalize/setup-nextjs-website-with-personalize-launch)
        
3.  **Track Impressions**
    -   When displaying a banner, track an impression using the Personalize Edge SDK’s method:triggerImpressions()
        
        **Additional Resource:** For more information, refer to [Trigger Impressions](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#triggerimpressions).
        
4.  **Track Events**
    -   On click, call triggerEvent('banner\_click', { experienceId, variantAlias })
        
        **Additional Resource:** For more information, refer to [Get Started with Personalize SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk), [Manifest API](/docs/developers/apis/personalize-edge-api/manifest), [Dynamically Track Variant Impressions.](/docs/personalize/dynamically-track-variant-impressions)
        

### Personalize - Activate the Experience

1.  In Personalize → Experiences → Your Experience.
2.  Verify Overview, Configuration, and Preview.
3.  Click **Activate Draft**.
4.  Confirm impressions and events are firing correctly.
5.  Monitor Experience Analytics to track performance and declare the winning variant.

**Additional Resource:** For more information, refer to [Experience Analytics.](/docs/personalize/experience-analytics)

## Reference Project

You can refer to the following project for a reference implementation: [Banner Swap A/B Test GitHub repository](https://github.com/contentstack-personalize-examples/ab-test-banner-swap-example) and find it hosted at [https://personalize-example-ab-test-banner-swap.contentstackapps.com/.](https://personalize-example-ab-test-banner-swap.contentstackapps.com/)

## Outcomes You Can Expect

-   **Faster insights:** Validate creative choices with data, not assumptions.
-   **Optimized ROI:** Direct traffic to the banner that delivers results.
-   **Scalable process:** Apply the same method to headlines, CTAs, or entire pages.

## The Personalize Advantage

Personalize goes beyond simple A/B testing by offering unique advantages:

-   **Native CMS integration:** Create variants directly from Contentstack entries. No need to copy and paste creatives into another tool, your CMS remains the single source of truth.
-   **Edge delivery with real-time decisions:** Personalize evaluates active experiences at the edge and delivers the right variant instantly, without flicker or lag.
-   **Audience and variant flexibility:** Start with a simple 50/50 split, then expand the same test to target specific audiences without rebuilding the setup.
-   **Near real-time analytics:** Personalize updates insights such as the probability of a variant performing best as impressions and conversions flow in. This lets you track how variants perform while visitors interact with your site.
-   **Scalable beyond banners**: Extend the same workflow to CTAs, page sections, or entire modules, reusing the approach across campaigns.
