---
title: "[Personalize] - About Experiences"
description: About Experiences in Contentstack Personalize, including types of experiences and how they work.
url: https://www.contentstack.com/docs/personalize/about-experiences
product: Contentstack Personalize
doc_type: concept
audience:
  - developers
  - content-authors
  - marketers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] - About Experiences

This page explains what Experiences are in Contentstack Personalize, the types of experiences available, when to use each type, and how experiences work end-to-end. It is intended for anyone setting up personalization or experimentation and should be used when planning, creating, or managing Segmented and A/B Test experiences.

### Item 1

#### Article section

##### Heading

About Experiences

##### Content

An Experience is the top-level setup where you define variants, associate them with specific audiences, or manage traffic distribution in case of A/B tests. In Contentstack Personalize, **Experiences** are at the heart of how you tailor content to your users.

An experience allows you to serve personalized content to different segments of your audience based on predefined conditions. Experiences can include A/B tests, segmented content, and other personalization strategies to drive user engagement, conversions, and overall performance of your digital content.

## Types of experiences in Personalize

Contentstack Personalize supports **2 types** of experiences to ensure that you can meet diverse personalization needs:
- **Segmented Experience**Allows you to serve different content to users based on preset and custom attributes for audiences.
- You can configure rules based on user data, such as location, device type, or behavior, and then target specific content to users matching these conditions.
- **A/B Test Experience**Provides the ability to run experiments by delivering two or more variations of content to different user groups.
- This experience helps you measure the performance of each variation based on metrics like impressions, or conversions.

Each of these experiences plays a critical role in delivering personalized, relevant content to your audience in real-time.

### When to use Segmented experiences in Personalize?

- **Diverse audience with varied needs:** If your audience comprises distinct segments with significantly different needs, preferences, or behaviors, segmented experiences allow you to tailor content effectively, driving engagement and satisfaction.
- **High level of content customization:** When your personalization goals involve delivering substantially different content experiences rather than minor tweaks, segmented experiences provide the flexibility to achieve this.
- **Focus on engagement and conversion metrics:** If you're primarily aiming to increase clicks, time on page, conversions, or other specific actions, segmented experiences offer the targeted approach needed to optimize these metrics.
- **Technical expertise and resources:** If you have the technical know-how and resources to implement and manage segmented experiences, they can be a powerful tool in your personalization toolkit.
- **Contentstack's segmentation and analytics capabilities:** Ensure that Contentstack's segmentation criteria, targeting options, and analytics align with your specific personalization requirements for optimal results.

### When to use A/B Test experiences in Personalize?

- **Comparing content variations:** If you want to test different content versions (headlines, images, CTAs) to see which performs better.
- **Data-driven decision making:** When you want to make informed decisions based on real-time user behavior and preferences.
- **Optimizing for conversions:** If your primary goal is to increase conversions, A/B testing helps identify the most effective content variations.
- **Experimentation and iteration:** When you want to continuously experiment and improve your content strategy based on data-driven insights.
- **Technical expertise and resources:** If you have the technical know-how and resources to implement and manage A/B tests, they can be a valuable tool for optimization.
- **Contentstack's A/B testing Capabilities:** Ensure that Contentstack's A/B testing features, such as goal tracking and analytics, align with your specific testing requirements.

By carefully considering these factors, you can determine whether a Segmented or A/B Test experience is the right fit for your personalization strategy and leverage them to maximize the impact of your campaigns to drive better results.

## How experiences work in Personalize?

Here’s a step-by-step overview of how experiences function in Contentstack Personalize:
- **Set up an Experience:** You start by creating an experience, either Segmented or A/B test, in the Personalize project. Each experience contains at least** 1 variant**. Each experience is reflected in the CMS as the Variant Group with the same experience name.
- **Define your Audience:** Once the experience is created, you assign audiences based on specific criteria, ensuring that the content is served to the right segment.
- **Create Variants:** You then create or assign content variants that will be displayed to the defined audience.
- **Set up Events and Metrics:** Attach tracking metrics like clicks or page views to monitor how each audience interacts with the content variants.
- **Create Entry Variants:** Create different versions of entries in a structured manner via the CMS for your Variant Groups.
- **Activate the Experience:** Once your setup is complete, you can activate the experience, and the audience will start receiving personalized content based on the defined rules or test setup.
- **Analyze Results:** After activating, you can view analytics and performance metrics to understand how well your experience is performing and adjust your strategy accordingly.

## Tutorial Video

## Next Steps

- To get started with creating your own experience, check out the [Create a Segmented Experience](./create-segmented-experience.md) or the [Create an A/B Test Experience](./create-ab-test-experience.md).

## Common questions

### What is an Experience in Contentstack Personalize?
An Experience is the top-level setup where you define variants, associate them with specific audiences, or manage traffic distribution in case of A/B tests.

### What types of experiences does Contentstack Personalize support?
Contentstack Personalize supports **2 types** of experiences: **Segmented Experience** and **A/B Test Experience**.

### When should I use a Segmented Experience?
Use segmented experiences when you need to serve different content to distinct audience segments based on preset and custom attributes for audiences.

### When should I use an A/B Test Experience?
Use A/B Test experiences when you want to run experiments by delivering two or more variations of content to different user groups and measure performance based on metrics like impressions, or conversions.