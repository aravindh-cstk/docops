---
title: "[Personalize] - Simple Banner Swap A/B Testing Use Cases"
description: "[Personalize] - Simple Banner Swap A/B Testing Use Cases"
url: https://www.contentstack.com/docs/personalize/a-b-testing-banners-use-case
product: Contentstack Personalize
doc_type: use-case
audience:
  - developers
  - content-managers
  - marketers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] - Simple Banner Swap A/B Testing Use Cases

This page explains how to run a simple banner swap A/B test using Contentstack Personalize, including example use cases and step-by-step implementation guidance. It is intended for teams setting up banner experiments to measure clicks or conversions and determine a winning variant before rolling changes out broadly.

### Simple Banner Swap A/B Testing Use Cases

Imagine your banner space, a prime piece of digital real estate, as a powerful driver of engagement and conversion. With **Contentstack Personalize**, you can run A/B testing on banner variants to determine which message drives the most clicks, signups, or purchases. Why guess, when you can optimize with data?

## The Challenge - Why Risks of Untested Content

An[ A/B test experience](./create-ab-test-experience.md) is a randomized experiment that lets you present two or more content variants of a web page or an app and display them to different sets of users at the same time to verify the effectiveness of these variants. Without A/B testing, you are essentially rolling the dice.

Every banner impression, every click-through opportunity, and every dollar spent on creative could be a wasted effort if the message fails to connect with the intended audience.

Here are some real-world A/B Test use cases.

**E-commerce/Retail: The Ongoing Sale Campaign**

You are a nationwide retailer running a **long-running sale campaign** on your website. You have a banner and a CTA on the homepage to promote the sale and drive visitors to the deals page.

However, engagement has been lower than expected. You suspect the banner copy may not be persuasive enough. To improve results, you create two versions of the banner and run an A/B test to determine which one performs better before rolling it out to all traffic.

- **Variant A - Control:** "Shop the Sale" (A straightforward, direct directive)
- **Variant B - Evocative Variant:** "Discover Hot Deals" (A more evocative and inviting message)

Without testing, launching the new text is a gamble, risking thousands of impressions on an underperforming creative that could miss out on potential sales and further impact results.

**SaaS/Technology: A New Feature Launch**

You are a software company that has just released a game-changing new feature and needs to drive trial signups. You have crafted two distinct banners to promote it.

- **Variant A:** "Start Free Trial" (A direct, practical call to action)
- **Variant B:** "See How It Works" (A message that promises insight and value)![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt372afc5015103c62/690302e9ad5530c3670d1759/image3.png)

You cannot afford to waste a single potential lead, but you have no way of knowing which message will convert more visitors into users. You can create an A/B test to split the traffic to your website 50/50, and see which variant leads to more trial sign ups in the first two weeks.

**Banking/Financial Services: The New Credit Card**

You are a national bank launching a new rewards credit card. To promote it, you have created banners that appeal to two different customer motivations.

- **Variant A:** "Earn Cash Back Fast" (Appeals to immediate gratification)
- **Variant B:** "Travel Rewards That Take You Further" (Appeals to long-term aspiration)

The wrong message could result in a significant loss of new card applications and potential revenue. A/B testing the two variants here can help you ensure you connect with your target audience's primary motivation in the long run.

In each of these stories, the problem is the same, an important decision made without data.

## The Solution: A Clear Path with Personalize

Contentstack Personalize makes A/B testing banners simple and effective:

- **Experiences:** Split visitors randomly into groups (50/50 by default) and serve different banner variants to each group.
- **Real-time tracking:** Measure impressions and conversions for every variant.
- **Insights:** Identify the winning creative and roll it out across your site.

## Level of Effort: Easy

**Prerequisites:**

- [Contentstack account](https://www.contentstack.com/login)
- Access to the [Contentstack Organization](../developers/organization/about-organizations.md) that has Personalize enabled
- Access to a [project](./create-personalize-project.md) in Personalize.

**This setup only requires:**

- An audience split
- An experience, with the two variants defined
- Content Entry variants defined for each of the variants.

## Steps to Implement

### Personalize - Create a Project connected to your Stack

- Navigate to App Switcher → Personalize → + New Personalize Project

  **Additional Resource:** For more information, refer to [Create a Personalize Project.](./create-personalize-project.md)

### Personalize - Create Experience with Variants

- Navigate to Personalize → Experiences → + New Experience.
- Select Experience type: **A/B Test**.
- Save General Details.
- Configure the experience with two variants in the **Configuration** tab.
- In Variant Distribution, choose **Equally split (50/50)** or adjust percentages (**Custom**) if needed.
- Click **+ Add Variant** to create **Variant A** and **Variant B**. Name the variants based on your use case (for example, for a sale campaign, use Control and Evocative Variant).

  **Additional Resource:** For more information, refer to [Create an A/B Test Experience.](./create-ab-test-experience.md)

### Personalize - Define Conversion Event

- Navigate to Personalize → Events.
- Click **+ New Event** to create your conversion event “banner_click”.
- Go back to your A/B Test Experience and add the newly created event as the Primary Metric in the configuration.

### CMS - Link Content Types

- Navigate to the desired Stack → Settings → Variants → select relevant Variant Group → Linked Content Types.**Note:** Variant Groups and Variants are automatically created based on the Experiences you define in Personalize.

  **Additional Resource**: For more information, refer to [Manage Variant Groups](../developers/variants/manage-variant-groups.md).
- In the **Linked Content Types **field, select one or more content types you want to associate with the variant group.
- Click **Apply → Save**.

  **Additional Resource:** For more information, refer to [Linking Content Types.](../developers/variants/manage-variant-groups.md#linking-content-types)

### CMS - Create Personalized Content in Entry Variants

- Navigate to the desired Stack → Entries → + New Entry.
- Create two entries.
- Publish these entries to the connected environment.
- Once published, navigate to Personalize → Experiences → Your Experience → Configuration.

Map each variant to the correct entry, personalize uses the variant-to-entry mapping to decide in real time which banner each visitor sees based on their audience group.**Additional Resource:** For more information, refer to [Create an Entry Variant.](../content-managers/entry-variants/create-an-entry-variant.md)

### Dev - Setup Personalize Edge SDK: Retrieve active variants and track impressions/events)

- **Install SDK**Add the Personalize SDK via npm/yarn/pnpm to your site’s codebase. For the frontend code, you can also add it via [Google Tag Manager](./google-tag-manager-integration-with-personalize.md) or your preferred tag manager for easier impression and event tracking.
- **Retrieve active variants**Initialize the SDK on every new page load and get the active variants' aliases for the current visitor. We recommend server-side rendered (SSR) sites place this logic at the edge by using an edge function/middleware.
- Pass the active variants aliases to the Contentstack Delivery SDK to fetch the corresponding entry variants.

  **Additional Resource: **For more information, refer to [SSR Edge Routing](./ssr-edge-routing-technical-implementation-architecture.md), [Setup Next.js with Personalize.](./setup-nextjs-website-with-personalize-launch.md)
- **Track Impressions**When displaying a banner, track an impression using the Personalize Edge SDK’s method:`triggerImpressions()`**Additional Resource: **For more information, refer to [Trigger Impressions](../developers/create-content-types/reference.md#triggerimpressions).
- **Track Events**On click, call `triggerEvent('banner_click', { experienceId, variantAlias })`**Additional Resource:** For more information, refer to [Get Started with Personalize SDK](../developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk.md), [Manifest API](../../api-docs/api-detail/personalize-edge-api.md#manifest), [Dynamically Track Variant Impressions.](./dynamically-track-variant-impressions.md)

### Personalize - Activate the Experience

- In Personalize → Experiences → Your Experience.
- Verify Overview, Configuration, and Preview.
- Click **Activate Draft**.
- Confirm impressions and events are firing correctly.
- Monitor Experience Analytics to track performance and declare the winning variant.

**Additional Resource:** For more information, refer to [Experience Analytics.](./experience-analytics.md)

## Reference Project

You can refer to the following project for a reference implementation: [Banner Swap A/B Test GitHub repository](https://github.com/contentstack-personalize-examples/ab-test-banner-swap-example) and find it hosted at [https://personalize-example-ab-test-banner-swap.contentstackapps.com/.](https://personalize-example-ab-test-banner-swap.contentstackapps.com/)

## Outcomes You Can Expect

- **Faster insights:** Validate creative choices with data, not assumptions.
- **Optimized ROI:** Direct traffic to the banner that delivers results.
- **Scalable process:** Apply the same method to headlines, CTAs, or entire pages.

## The Personalize Advantage

Personalize goes beyond simple A/B testing by offering unique advantages:

- **Native CMS integration:** Create variants directly from Contentstack entries. No need to copy and paste creatives into another tool, your CMS remains the single source of truth.
- **Edge delivery with real-time decisions: **Personalize evaluates active experiences at the edge and delivers the right variant instantly, without flicker or lag.
- **Audience and variant flexibility: **Start with a simple 50/50 split, then expand the same test to target specific audiences without rebuilding the setup.
- **Near real-time analytics:** Personalize updates insights such as the probability of a variant performing best as impressions and conversions flow in. This lets you track how variants perform while visitors interact with your site.
- **Scalable beyond banners**: Extend the same workflow to CTAs, page sections, or entire modules, reusing the approach across campaigns.

## Common questions

### Do I need to split traffic 50/50 for a banner A/B test?
No. The experience can use **Equally split (50/50)** or adjust percentages (**Custom**) if needed.

### What conversion event is used in this example?
The example creates a conversion event named “banner_click” and uses it as the Primary Metric in the experience configuration.

### Where should I initialize the Personalize SDK for SSR sites?
The page recommends server-side rendered (SSR) sites place this logic at the edge by using an edge function/middleware.

### Where can I find a working reference implementation?
A reference implementation is available in the [Banner Swap A/B Test GitHub repository](https://github.com/contentstack-personalize-examples/ab-test-banner-swap-example) and is hosted at [https://personalize-example-ab-test-banner-swap.contentstackapps.com/.](https://personalize-example-ab-test-banner-swap.contentstackapps.com/)