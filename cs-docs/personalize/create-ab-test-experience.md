---
title: "[Personalize] - Create an A/B Test Experience"
description: Create an A/B Test Experience in Contentstack Personalize, including prerequisites, configuration, variants, metrics, targeting, activation, and analytics.
url: https://www.contentstack.com/docs/personalize/create-ab-test-experience
product: Contentstack Personalize
doc_type: how-to-guide
audience:
  - developers
  - content-managers
  - marketers
version: current
last_updated: 2026-03-25
---

# [Personalize] - Create an A/B Test Experience

This page explains how to create and configure an A/B Test Experience in Contentstack Personalize. It is intended for users with access to a Personalize project (Owner/Member) who want to run experiments with multiple variants, define metrics and target audiences, and activate the experience to measure performance.

## Create an A/B Test Experience

An A/B test experience is a randomized experiment that lets you present two or more content variants of a web page or an app and display them to different sets of users at the same time to verify the effectiveness of these variants.

In Contentstack Personalize, A/B Testing empowers you to make data-driven decisions and optimize your content strategy by experimenting with different content variations. By creating and comparing these variations, you can:
- Identifying Effective Content
- Optimizing for Conversions
- Personalizing Experiences
- Reducing Bounce Rates
- Improving Customer Satisfaction

**When to use A/B Test experiences in Contentstack Personalize?**
- Comparing Content Variations
- Data-Driven Decision Making
- Optimizing for Conversions
- Experimentation and Iteration
- Technical Expertise and Resources
- Contentstack's A/B Testing Capabilities

By carefully considering these factors, you can determine whether A/B testing is the right fit for your optimization strategy and leverage it to drive better results.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- [Audience created](./create-audience.md) in your Personalize project
- [Event created](./create-event.md) in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can create A/B Test experiences.

## Steps for Execution
**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

To create an A/B Test Experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create a A/B Test Experience.
- On the **Experiences** page, click the **+ New Experience** button.
- In the **Select Experience Type** modal, click the **A/B Test** experience type.![AD_4nXc-Ta63EI7SCkbz4uazyL5IMkzIpmEnis6MlqdRqCuBks-NL0ODY94tGT0HM-mGoZh6WDi4KdaKGcGQB3j4uepJA2JZaJF4TLVUFhM88_M01-W3C395FT6ZDQrY4PjpBvMcRLSudiHv9sGL7LIYorn8FEe1](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-Ta63EI7SCkbz4uazyL5IMkzIpmEnis6MlqdRqCuBks-NL0ODY94tGT0HM-mGoZh6WDi4KdaKGcGQB3j4uepJA2JZaJF4TLVUFhM88_M01-W3C395FT6ZDQrY4PjpBvMcRLSudiHv9sGL7LIYorn8FEe1?key=dDaeMy9JHUzH107PmzBkWw)
- On the experience draft page, in the **Overview** tab, provide a suitable **Name** and an optional **Description** for the experience and then click the **Save General Details** button.
- Click the **Configuration** tab.
- **Under the Variants** section,**Variant Distribution:** Variant Distribution in A/B testing is the process of determining how traffic is to be divided between the different variants of your content. You can choose from the following distribution options:**Equally split:** Distributes traffic evenly across all variants. Use this option when you want a controlled and unbiased comparison, validate a hypothesis, or ensure that each variant receives the same audience size.
- **Custom:** Allows you to manually assign traffic percentages to each variant, letting you favor one variant over another.
- **Multi-Armed Bandit:** Automatically optimizes traffic distribution across variants based on real-time conversion performance. Use this option when your primary goal is to maximize conversions while the test is running and you are comfortable with traffic distribution changing dynamically.![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt712406f070a89223/696484c2ced4ad0008b40acb/image7.png)
By default, Variant Distribution is set to **Equally split**.

### Distribution Option

| Distribution Option | Description | When to Use it |
|---|---|---|
| Equally split | Distributes traffic evenly across all variants for the entire duration of the test. | Use when you want a controlled and unbiased comparison between variants, validate a hypothesis, or ensure that each variant receives the same audience size. |
| Custom | Allows you to manually assign fixed traffic percentages to each variant. | Use when you need precise control over traffic exposure, such as soft launches, phased rollouts, or limiting risk for new or experimental variants. |
| Multi-Armed Bandit | Automatically adjusts traffic distribution over time based on real-time conversion performance. | Use when your primary goal is to maximize conversions during the test and you are comfortable with dynamic traffic allocation. |

**Multi-Armed Bandit Behavior:**
- Traffic is initially distributed equally across all variants.
- You cannot manually edit traffic percentages.
- Traffic allocation is adjusted automatically over time as performance data is collected.
- Traffic redistribution begins only after the experience reaches **either** of the following thresholds across all variants:At least **1,000 total impressions**, or
- At least **30 total conversions**.

Once one of these thresholds is met, traffic redistribution occurs **every minute**, as long as the system continues to receive impression and conversion events.

To ensure continued learning, every Multi-Armed Bandit test reserves a **minimum exploratory traffic share of 1%**, which is split equally across all variants. Until the threshold is met, all variants continue to receive equal traffic.
- After selecting the variant distribution, you can create variants for the A/B Test. Variants are alternative versions ([CMS Entry Variants](../content-managers/entry-variants/about-entry-variants.md)) of content or experiences created for testing against each other. To create variants for your experience, click the **+ Add Variant** button.**Short UID:** This unique ID is automatically assigned to each variant and used in [Personalize API requests](../developers/create-content-types/reference.md).
- **Variant Name:** Provide a meaningful name for the variant. This name will be reflected in the Entry Editor for the [Entry Variants](../content-managers/entry-variants/about-entry-variants.md) in the CMS.

  **Note:** Each A/B Test experience must contain at least **2 variants**. Each experience is reflected in the CMS as Variant Group and you can [create Entry Variants](../content-managers/entry-variants/create-an-entry-variant.md) for each of these variants via the Entry Editor.
- **Traffic Distribution in %:**For **Equally split**, the distribution percentage is calculated automatically.
- For **Custom**, you can specify the percentage as per your preference.![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36726b77f774b973/6964863af4f25c00087a9142/image4.png)
- For **Multi-Armed Bandit**, traffic percentages are managed automatically and cannot be edited manually.![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2eaf8dd47cb2fc15/69648647420bc50008aa1c4c/image2.png)

Similarly, you can add multiple variants by clicking the **+ Add Variant** button.
- Under the **Metrics** section,Click **+ Add Event** and select the preferred event from the drop-down list.You can add multiple events to an A/B Test experience as Metrics. Use the Personalize Edge SDK to trigger the events for your experiences using the `triggerEvent method.`**Note:** The first event that you add becomes the ‘primary’ metric. The 'primary' metric determines the winning variants, while secondary metrics offer additional insights. When any of the listed events occur, metrics calculate an increase in unique conversions per visitor, which you can view in the experience **Analytics** tab.
- Under the **Target Group** section,**Target Group:** By default, **Everyone** is part of the A/B test, you can target the A/B test to a specific set of audiences (**Selective**). Here, we are using the **Selective** split option for the target group.
- **Condition:** You can set the rule to satisfy either all audiences (**Match All**) or at least one of them (**Match Any**) by selecting from the dropdown.
- **Audiences:** Click the **Audiences** field. From the **Select Audience(s)** modal, select one or multiple audiences, then click the **Apply Selected Audiences** button to set the audience criteria for the target group.![AD_4nXeP7rBa9quSyo8VoPGS6i0-agP-etUvlq1P2kMD0s2yHv6Yb27N90GxCY7MLLY6AKB_cYxLOCfSdpGt6DfaaYSi15DuUpFsrMu7bJoBnTzSghtEmHZxNjPU2rtt7NxeLNDZjY3G0pMknXFHSds07ylegTxQ](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeP7rBa9quSyo8VoPGS6i0-agP-etUvlq1P2kMD0s2yHv6Yb27N90GxCY7MLLY6AKB_cYxLOCfSdpGt6DfaaYSi15DuUpFsrMu7bJoBnTzSghtEmHZxNjPU2rtt7NxeLNDZjY3G0pMknXFHSds07ylegTxQ?key=dDaeMy9JHUzH107PmzBkWw)
- Once you have defined your variant, click the **Save Draft** button.
- Now click the **Activate Draft** button.
- Click **Activate** in the Activate Draft Modal to activate the experience on your site for your visitors.

  **Note:** Ensure you [create Entry Variants](../content-managers/entry-variants/create-an-entry-variant.md) in the CMS before activating an experience for a seamless personalized campaign for your visitors.

This creates a new A/B Test Experience in your Personalize project. For managing experience versions (activated/draft/paused), please refer to [this guide](./experience-versioning.md).

**Additional Information:** To achieve optimal personalization for your users, prioritize experiences and variants independently. Use experience priority when multiple experiences customize the same element on a digital property, and apply variant priority when audience conditions match multiple variants. For more details, please refer to [this guide](./prioritize-experiences.md).

After activating your A/B Test experience, the Analytics are updated within a few minutes when your visitors start accessing and interacting with your content.

**Note:** To design, preview, and analyze A/B Test experiences effectively, make sure [Live Preview](../content-managers/author-content/about-live-preview.md) and [Visual Builder](/docs/content-managers/visual-builder/about-visual-builder) are enabled and set up on your stack. **Live Preview** provides real-time visibility into how content appears across variants. **Visual Builder** allows editors to manage variant-specific content and preview multiple variants simultaneously based on different audience selections without developer involvement.

**Note:**
- Users with Owner and Member access to a Personalize project can create new experiences, and edit/delete existing experiences.
- The default number of Experiences allowed per project is **100**. To increase this limit, please contact our [support team](mailto:support@contact.com). By Contentstack permissions, they can be extended till **1000 **per project.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#experiences) to create, edit, delete, and retrieve all existing experiences.

## Common questions

### Who can create an A/B Test experience in Contentstack Personalize?
Users with Owner and Member access to a Personalize project can create A/B Test experiences.

### What is the minimum number of variants required for an A/B Test experience?
Each A/B Test experience must contain at least **2 variants**.

### When does Multi-Armed Bandit start redistributing traffic?
Traffic redistribution begins only after the experience reaches **either** of the following thresholds across all variants: at least **1,000 total impressions**, or at least **30 total conversions**.

### How many experiences are allowed per project by default?
The default number of Experiences allowed per project is **100**.