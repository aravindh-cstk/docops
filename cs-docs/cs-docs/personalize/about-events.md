---
title: "[Personalize] - About Events"
description: "Events let you capture and monitor every interaction made by a user in Contentstack Personalize, including impressions and conversions for measuring A/B test success."
url: https://www.contentstack.com/docs/personalize/about-events
product: "Contentstack Personalize"
doc_type: "concept"
audience:
  - developers
  - marketers
version: "current"
last_updated: "2026-03-25"
---

# [Personalize] - About Events

This page explains what Events are in Contentstack Personalize, the main event types (Impressions and Conversions), and how they are used to measure and evaluate user interactions—especially for A/B tests. Read this when you need to understand what to track and how event tracking supports experience analytics.

## About Events

Events let you capture and monitor every interaction made by a user. In Contentstack Personalize, Events are essential for measuring the success of your A/B tests. By tracking specific user actions as events, such as clicks, form submissions, or video plays, you can accurately determine which variant in your experience performs better.

Personalize allows you to track two main types of events for user interactions:
- [**Impressions**](#impressions)
- [**Conversions**](#conversions)

## Impressions

Impressions are a way to count how many times users see specific content on your website.

Every time a user sees personalized content, it counts as one unique impression, that is, if a single user views the same personalized content multiple times, it is only counted once.

This helps you understand if the personalized content is actually being seen by users.

For example, if you have two different sale banners for users in different locations. By tracking impressions, you can see how many times each banner is being shown. This helps you measure which banner is being seen more frequently.

You can track impressions using the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript#edge-sdk) and [Personalize Edge API](/docs/developers/apis/personalize-edge-api). And also, use tools like [Google Tag Manager,](/docs/personalize/about-gtm-integration/) [Customer Data Platform](/docs/personalize/about-cdp-integration/) integrations or similar platforms. This data is then shown in the 'Analytics' section for each experience, and it's further categorized for each variant.

## Conversions

A conversion is an event that signifies a positive user action, such as adding a product to the cart, making a purchase, or scrolling to the end of a page. They are used in [A/B Test experiences](/docs/personalize/create-ab-test-experience) to evaluate the effectiveness of a variant, and a higher number of conversions can indicate a winning variant.

For example, imagine you have two versions of a "Buy Now" button. By tracking conversions, you can see which button gets more clicks. This tells you which button is more effective.

## Tutorial Video

## Common questions

### What is the difference between impressions and conversions?
Impressions are a way to count how many times users see specific content on your website, while conversions are an event that signifies a positive user action, such as adding a product to the cart, making a purchase, or scrolling to the end of a page.

### Where can I view the tracked event data?
This data is then shown in the 'Analytics' section for each experience, and it's further categorized for each variant.

### How can I track impressions in Contentstack Personalize?
You can track impressions using the Personalize Edge SDK and Personalize Edge API. And also, use tools like Google Tag Manager, Customer Data Platform integrations or similar platforms.

### Why are events important for A/B tests?
In Contentstack Personalize, Events are essential for measuring the success of your A/B tests, helping you accurately determine which variant in your experience performs better.

<!-- filename: personalize-about-events.md -->