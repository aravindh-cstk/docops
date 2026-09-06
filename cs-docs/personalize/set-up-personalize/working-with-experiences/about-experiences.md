---
title: "About Experiences"
description: "Learn about experiences and how they let you personalize content for your visitors."
url: /personalize/about-experiences
uid: blt46697059a1efbb9f
---

# About Experiences

## About Experiences

An Experience is the top-level setup where you define variants, associate them with specific audiences, or manage traffic distribution in case of A/B tests. In Contentstack Personalize, **Experiences** are at the heart of how you tailor content to your users.

An experience allows you to serve personalized content to different segments of your audience based on predefined conditions. Experiences can include A/B tests, segmented content, and other personalization strategies to drive user engagement, conversions, and overall performance of your digital content.

## Types of experiences in Personalize

Contentstack Personalize supports **2 types** of experiences to ensure that you can meet diverse personalization needs:

-   **Segmented Experience**
    -   Allows you to serve different content to users based on preset and custom attributes for audiences.
    -   You can configure rules based on user data, such as location, device type, or behavior, and then target specific content to users matching these conditions.
-   **A/B Test Experience**
    -   Provides the ability to run experiments by delivering two or more variations of content to different user groups.
    -   This experience helps you measure the performance of each variation based on metrics like impressions, or conversions.

Each of these experiences plays a critical role in delivering personalized, relevant content to your audience in real-time.

### When to use Segmented experiences in Personalize?

-   **Diverse audience with varied needs:** If your audience comprises distinct segments with significantly different needs, preferences, or behaviors, segmented experiences allow you to tailor content effectively, driving engagement and satisfaction.
-   **High level of content customization:** When your personalization goals involve delivering substantially different content experiences rather than minor tweaks, segmented experiences provide the flexibility to achieve this.
-   **Focus on engagement and conversion metrics:** If you're primarily aiming to increase clicks, time on page, conversions, or other specific actions, segmented experiences offer the targeted approach needed to optimize these metrics.
-   **Technical expertise and resources:** If you have the technical know-how and resources to implement and manage segmented experiences, they can be a powerful tool in your personalization toolkit.
-   **Contentstack's segmentation and analytics capabilities:** Ensure that Contentstack's segmentation criteria, targeting options, and analytics align with your specific personalization requirements for optimal results.

### When to use A/B Test experiences in Personalize?

-   **Comparing content variations:** If you want to test different content versions (headlines, images, CTAs) to see which performs better.
-   **Data-driven decision making:** When you want to make informed decisions based on real-time user behavior and preferences.
-   **Optimizing for conversions:** If your primary goal is to increase conversions, A/B testing helps identify the most effective content variations.
-   **Experimentation and iteration:** When you want to continuously experiment and improve your content strategy based on data-driven insights.
-   **Technical expertise and resources:** If you have the technical know-how and resources to implement and manage A/B tests, they can be a valuable tool for optimization.
-   **Contentstack's A/B testing Capabilities:** Ensure that Contentstack's A/B testing features, such as goal tracking and analytics, align with your specific testing requirements.

By carefully considering these factors, you can determine whether a Segmented or A/B Test experience is the right fit for your personalization strategy and leverage them to maximize the impact of your campaigns to drive better results.

## How experiences work in Personalize?

Here’s a step-by-step overview of how experiences function in Contentstack Personalize:

1.  **Set up an Experience:** You start by creating an experience, either Segmented or A/B test, in the Personalize project. Each experience contains at least **1 variant**. Each experience is reflected in the CMS as the Variant Group with the same experience name.
2.  **Define your Audience:** Once the experience is created, you assign audiences based on specific criteria, ensuring that the content is served to the right segment.
3.  **Create Variants:** You then create or assign content variants that will be displayed to the defined audience.
4.  **Set up Events and Metrics:** Attach tracking metrics like clicks or page views to monitor how each audience interacts with the content variants.
5.  **Create Entry Variants:** Create different versions of entries in a structured manner via the CMS for your Variant Groups.
6.  **Activate the Experience:** Once your setup is complete, you can activate the experience, and the audience will start receiving personalized content based on the defined rules or test setup.
7.  **Analyze Results:** After activating, you can view analytics and performance metrics to understand how well your experience is performing and adjust your strategy accordingly.
8.  **Post-Test Automation with Clearwinner:** After identifying a winning variant through analytics, you must transition those changes to your primary content. Instead of manually finding and merging variant changes into your baseline entries, you can use the [**Clearwinner**](/docs/marketplace/clear-winner) Marketplace app to automate this entire workflow. It automatically identifies the winner, merges the content, publishes the updates, and archives the test in a single background process.

## Tutorial Video

## **Next Steps**

-   To get started with creating your own experience, check out the [Create a Segmented Experience](/docs/personalize/create-segmented-experience) or the [Create an A/B Test Experience](/docs/personalize/create-ab-test-experience).

## Related Resource

-   [Personalize Management API: Experiences](/docs/developers/apis/personalize-management-api/experiences)
