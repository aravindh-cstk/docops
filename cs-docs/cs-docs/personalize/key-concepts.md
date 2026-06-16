---
title: "[Personalize] - Key Concepts"
description: Key concepts and definitions for Contentstack Personalize, including experiences, audiences, attributes, events, and CMS entry variants.
url: https://www.contentstack.com/docs/personalize/key-concepts
product: Contentstack Personalize
doc_type: concept-guide
audience:
  - developers
  - marketers
  - product-managers
version: current
last_updated: 2026-03-25
---

# [Personalize] - Key Concepts

This page introduces the core concepts used in Contentstack Personalize and is intended for anyone configuring or analyzing personalization, segmentation, and experimentation. Use it when you need definitions and context for how experiences, audiences, variants, attributes, and events work together.

This guide introduces the core concepts used in Personalize. It provides definitions and context to help you understand how experiences, audiences, variants, attributes, and events work together to deliver personalization.

## Experiences
An [Experience](/docs/personalize/about-experiences) is the top-level configuration where you define variants, target them to audiences, and set traffic distribution rules for A/B testing. Each experience represents a personalization setup applied to your digital property.

Experiences help you deliver content to specific audience segments through conditions you define. They support audience segmentation, experimentation, and targeted delivery.

**Types of Experiences:**

Personalize supports two types of experiences:
- Segmented experiences
- A/B test experiences

### Segmented Experiences
[Segmented Experiences](/docs/personalize/create-segmented-experience) enable you to deliver precisely targeted, personalized content to specific audience groups. By dynamically showcasing tailored content variations based on demographics, referral sources, behaviors, and other key attributes, you can:
- Drive higher engagement
- Increase conversions
- Improve overall customer satisfaction

**Example:**

A "New Visitors" segment might see a welcome banner.

A "Returning Customers" segment is shown a loyalty offer.

#### Variant Prioritization
**Variant Prioritization** resolves conflicts when a user satisfies conditions for multiple variants. It ensures the most relevant variant takes precedence by defining a hierarchy.

For an experience, only one variant is deemed active at a time. If match conditions for multiple variants are met, the first variant in the prioritized order for which the conditions are met will be considered as active.

**Example:** Imagine an experience targeting a hero banner.
- **Variant A** targets "All Visitors from the UK."
- **Variant B** targets "VIP Customers" (a more specific, high-value segment).

A visitor who is both a VIP and located in the UK qualifies for both variants. By prioritizing “VIP Customers” above “UK Visitors,” the user sees the VIP version.

**Additional Resource:** For more information, refer to [Create a Segmented Experience](/docs/personalize/create-segmented-experience#steps-for-execution).

### A/B Test Experiences
[An A/B test experience](/docs/personalize/create-ab-test-experience) is a controlled experiment that allows you to present two or more content variants of a webpage or app to different user groups simultaneously, helping you evaluate which version performs best.

In Contentstack Personalize, A/B Testing enables data-driven decision-making and helps you optimize content strategy by testing and comparing multiple content variations.

Through these experiments, you can:
- Identify the most effective content
- Optimize for higher conversions
- Deliver more personalized experiences
- Reduce bounce rates
- Enhance overall customer satisfaction

#### Traffic Distribution
In an A/B test, you can control how traffic is split among different variants. You can choose to split the traffic equally among all variants or set a custom distribution to direct a larger percentage of users to a specific variant, or automatically adjust traffic distribution over time based on real-time conversion performance.

**Equally Split:** This is standard for a fair A/B test to see which variant performs best with an equal audience size.

**Custom Split:** This is useful for "soft launching" a new design. You can show a radically new homepage design (20% variant) to a small subset of your traffic to gather data and feedback without risking a negative impact on the majority of your users (80% control).

**Multi-Armed Bandit: **Multi-Armed Bandit is an adaptive traffic optimization strategy available for A/B Test experiences in Contentstack Personalize.

Unlike traditional A/B testing, where traffic distribution remains fixed for the duration of the test, Multi-Armed Bandit dynamically adjusts how traffic is allocated across variants based on real-time conversion performance.

**With Multi-Armed Bandit:**
- All variants start with an equal share of traffic.
- Traffic is redistributed automatically over time to favor better-performing variants.
- Each variant continues to receive a minimum share of traffic to ensure ongoing learning.

This approach allows you to optimize for conversions while the experiment is running, instead of waiting until the test completes.

**Note: **Multi-Armed Bandit **does not** change how A/B tests end or how winners are determined. Test duration and winner declaration follow the same rules as standard A/B Test experiences.

**Additional Resource: **For more information, refer to [Create an A/B Test Experience.](/docs/personalize/create-ab-test-experience)

#### Impressions
**Impressions** track how often personalized content is displayed to users.

Each time a user encounters personalized content, it can be recorded as a single unique impression. Note that because Personalize records only unique impressions, even if the same user views that content multiple times, it is only counted once.

Tracking impressions helps you determine how effectively your personalized content is reaching its audience.

**Example:** If two different sale banners are shown to users in different locations, impressions reveal how often each banner is viewed, helping you measure visibility and engagement.

#### Conversions and Metrics
A **conversion** represents a meaningful user action (event), such as adding an item to the cart, completing a purchase, or reaching the end of a page.

These events serve as **metrics** to evaluate variant performance. When a visitor completes an action, metrics track unique conversions per user.

In A/B Test experiences, conversions help identify which variant performs better, with a higher number of conversions.

**Example:** Testing two “Buy Now” buttons can show which design generates more clicks.

### Resolving conflicts when multiple Experiences target the same content
When multiple experiences are active on a page, layering and prioritization of experiences ensure optimal personalization for your users as it helps reflect the whole visitor context on the content.
- **Scenario 1:** Multiple experiences target different contents on the page.Personalize and the CMS automatically layer these experiences, optimizing each section based on the respective active variant.
- **Scenario 2:** Multiple experiences target the same content on the page.Personalize uses the experience [prioritization](/docs/personalize/prioritize-experiences) order defined by you, so the variant from the higher-priority experience is displayed. You can adjust the order of experiences in Personalize to control which content is shown when multiple experiences are active.

## Audiences
[Audiences](/docs/personalize/about-audiences) are groups of users who share attributes, behaviors, or contextual characteristics. They determine who qualifies to see particular variants.

Personalize supports two audience types:
- **Personalize audiences**
- **Data & Insights (Lytics) audiences**

Audiences help you deliver relevant content and tailor personalization based on user context.

### Why well-defined Audiences are Important
Audiences help deliver relevant content to users who share similar attributes or behavior. Using audiences, you can tailor experiences to user context, optimize content delivery, and improve the effectiveness of personalization strategies.

**Roles of Audiences in Personalize**

Audiences are needed in Personalize in order to target Experience Variants to segments of your visitors, in order to:
- **Increase Engagement:** Grab your user's attention with content that resonates, keeping them hooked and coming back for more.
- **Boost Conversions:** Guide users toward the actions you want them to take, whether it's making a purchase, signing up, or exploring further.
- **Build Loyalty:** Create experiences that feel tailor-made, fostering loyalty and turning casual visitors into raving fans.

### Personalize Audiences and Data & Insights (Lytics) Audiences

### Data & Insights (Lytics) Audiences
Data & Insights (Lytics) audiences are created using unified customer data from multiple systems. They allow you to target users based on their full behavioral history and lifecycle stage.

**Data & Insights (Lytics) Support:**

**1. Unified customer profiles:** Consolidate CRM, email, mobile, and web data into a single profile. This creates a single, rich profile for each user, allowing you to personalize website content based on their entire relationship with your brand, not just their current web session.

**2. Advanced segmentation:** Build audiences based on behavioral patterns, affinities, or predictive indicators. You can create dynamic segments like "frequent buyers," "users at risk of churn," or "users likely to convert," allowing you to target users with incredible relevancy.

**3. Lifecycle targeting:** Deliver personalization aligned with user stages such as acquisition, engagement, or retention. This allows you to move beyond one-off promotions and guide users through a cohesive journey with your brand.

**4. Audience analytics:** Data & Insights (Lytics) audiences are not ephemeral (unlike Personalize Audiences, which are only used to determine active variants in real-time). They are processed and maintained for you to view, analyze and use to make informed decisions.

### Personalize Audiences
Personalize audiences are evaluated at the edge and are designed for first-page personalization, where speed and contextual accuracy matter most. Their evaluated memberships are ephemeral and not stored by Personalize. Thus, no analytics is available for Personalize Audiences.

**Personalize Audiences Support:**
- **Contextual attributes:** Contextual attributes are pieces of information that are available directly from the user's browser in their very first request to your website. Because this data doesn't need to be looked up in a separate database, Personalize can act on it with zero latency at the edge. This makes it the perfect tool for making a strong first impression.
- **Custom Attributes:** Use custom attributes defined in Personalize to tailor content on first page render. This could be useful when you don’t want to wait until syncing of the attributes are done at the edge, but rather reflect that user context on the page immediately.

## Attributes
[**Attributes**](/docs/personalize/about-attributes) are key-value pairs that define the characteristics, behaviors, or preferences of users interacting with your website or application. They form the foundation for building audience segments that enable targeted content delivery and personalized experiences.

Attributes can be applied across various use cases, including:
- **User Attributes:** Inherent visitor traits such as demographics (age, gender, location), firmographics (company size, industry), or technographics (browser type, device).
- **Behavioral Attributes:** User actions on your site, like pages visited, products purchased, or time spent browsing.
- **Contextual Attributes:** External factors that influence user behavior, such as time of day, weather, or referral source.

By combining **preset** (contextual) and **custom attributes** (defined by the user), you can create highly detailed audience segments and serve content that feels personally relevant, driving greater engagement, higher conversions, and improved customer satisfaction.

## Events
[**Events**](/docs/personalize/about-events) allow you to capture and track every interaction a user has with your website or application. In **Contentstack Personalize**, events play a vital role in evaluating the performance of your **A/B tests**.

By recording key user actions, such as clicks, form submissions, or video plays, as events, you can accurately assess which content variant delivers better results.

Contentstack Personalize supports tracking two primary types of user interaction events:
- **Impressions:** Track how many unique users see your personalized content.
- **Conversions:** Track how many users take a desired action, like clicking or purchasing.

These metrics together provide a clear picture of how users engage with your personalized experiences and which variations drive the most impact.

## CMS Entry Variants
In **Contentstack CMS**, [**Variants**](/docs/personalize/about-variants) are alternative versions of content created to engage specific audience segments. Each experience you build within a Personalize project appears in the CMS as a **Variant Group** named after that experience, allowing you to create and manage individual **entry variants** directly from the Entry Editor.

Variant Groups and Variants are automatically created and synced for you based on the Experiences and Variants you define in Personalize, given that the Personalize Project is connected with the specific CMS Stack. Once created, you can create entry variants by making changes to the content you want to be personalized. The entry editor will display content from the base entry by default. You can enter or edit content in the fields as per the variant you want the content to be personalized for.

**By creating and managing variants, you can:**
- **Deliver dynamic content based on personalized experiences:** Serve real-time, tailored content to visitors based on their demographics, behaviors, and preferences.
- **Enhance marketing performance:** Experiment with different content versions to identify the most impactful ones and boost campaign results.
- **Run A/B tests and optimize content:** Compare multiple versions side by side, use performance data to determine the most effective variant, and continuously refine your personalization approach.
- **Iterate and evolve:** Monitor content variants’ performance regularly and apply data-driven insights to improve the content for better user engagement and outcomes.

By connecting user attributes, unified and real-time audiences, experience rules, and measurable events, these concepts create a complete and adaptable personalization model. This foundation helps you deliver more relevant content today while continuously refining your strategies as user behavior evolves.

## Common questions

### What is the difference between Segmented Experiences and A/B Test Experiences?
Segmented Experiences deliver targeted content to specific audience groups, while an A/B test experience runs a controlled experiment by presenting two or more variants to different user groups to evaluate performance.

### How does Variant Prioritization work?
Variant Prioritization resolves conflicts when a user satisfies conditions for multiple variants by using a hierarchy so the first variant in the prioritized order with met conditions is considered active.

### What is the difference between Personalize audiences and Data & Insights (Lytics) audiences?
Personalize audiences are evaluated at the edge for first-page personalization and are ephemeral with no analytics, while Data & Insights (Lytics) audiences are created from unified customer data, maintained for analysis, and support lifecycle targeting and advanced segmentation.

### What do impressions and conversions measure?
Impressions track how often personalized content is displayed to unique users, and conversions track meaningful user actions (events) used as metrics to evaluate variant performance.