---
title: "[Personalize] - About Attributes"
description: About Attributes in Contentstack Personalize, including preset and custom attributes and how they are used for audience segmentation and targeting.
url: https://www.contentstack.com/docs/personalize/about-attributes
product: Contentstack Personalize
doc_type: concept
audience:
  - developers
  - marketers
version: v1
last_updated: 2026-03-25
---

# [Personalize] - About Attributes

This page explains what attributes are in Contentstack Personalize, the types of attributes available (preset and custom), and how they are used to build audience segments for targeted and personalized experiences.

## About Attributes

Attributes are key-value pairs that represent the characteristics, behaviors, or preferences of visitors interacting with your website or application. These attributes can be used to create distinct audience segments for targeted content delivery and personalized user experiences.

Attributes can be used for many use cases such as:
- **User attributes:** Inherent traits of the visitor, such as demographics (age, gender, location), firmographics (company size, industry), or technographics (browser, device).
- **Behavioral attributes:** Actions taken by the visitor on your site, such as pages viewed, products purchased, or time spent on site.
- **Contextual attributes:** External factors influencing the visitor's behavior, such as time of day, weather, or referral source.

By combining preset and custom attributes, you can create granular audience segments and deliver highly relevant content that resonates with individual users, ultimately driving engagement, conversions, and customer satisfaction.

## Types of Attributes in Personalize

Personalize offers the following **2** **types** of Attributes:
- **Preset Attribute**: In Contentstack Personalize, preset attributes are pre-defined visitor characteristics that are readily available for audience segmentation and targeting. These built-in attributes represent common user traits or behaviors that are essential for delivering personalized experiences. Personalize contains the following preset attributes:**City:** Target audiences based on their city location. For example, target users in New York City to show local event promotions.
- **Country:** Target audiences from a specific country. For example, display a country-specific discount for visitors from Canada.
- **Date and Time:** Target audiences with specific date and time details. For example, offer a special deal to users accessing your site during Black Friday.
- **Device Type:** Target audiences by their device type: `Mobile`, `Tablet`, or `Desktop`. For example, display mobile-optimized content for users on smartphones.
- **Operating System:** Target audiences by their operating system: `MacOS`, `Windows`, `Android`, or `iOS`. For example, show MacOS users a promotion for Mac-compatible software.
- **Query Parameter:** Use URL query parameters to dynamically tailor content for specific audience segments, enhancing personalization and targeting. For example, personalize content based on a query parameter like `utm_campaign=spring_sale` for users coming from a specific campaign.
- **Referrer:** Target audiences based on the referral source. For example, customize landing pages for users referred from a specific partner website.
- **Region:** Target audiences from a particular geographic region within a country. For example, target users in the state of California with tailored content.

By leveraging these default system attributes, you can quickly and easily create audience segments without the need for extensive customization, enabling you to tailor your content based on visitor demographics, technographics, and other key factors. This streamlines the process of delivering targeted content and ensures that your personalization efforts are both efficient and effective.
- **Custom Attribute**: In Contentstack Personalize, custom attributes are user-defined characteristics or properties that you can create to enhance audience segmentation and targeting. These attributes allow you to capture specific visitor information that is not covered by the preset attributes, enabling more granular and tailored personalization. After creating a custom attribute in your project, the data needs to be collected for the attribute. This can be done using the [Personalize Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md) or the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md). You can also use tools like [Google Tag Manager](./about-gtm-integration.md) and [Customer Data Platform](./about-cdp-integration.md) integrations for collecting the data.

This flexibility empowers you to create highly specific audience segments and deliver personalized experiences that resonate with individual users, ultimately driving engagement and conversions.

**Note:**

You cannot modify or remove preset attributes from a project.You can add, edit, and delete a custom attribute from a project. Preset attributes can be used in combination with custom attributes.

## Tutorial Video

## Next Steps

Although Contentstack Personalize offers you preset attributes for audiences, you can still [create your own Custom Attributes](./create-custom-attribute.md). Both can be included in the rules for Audiences.

## Common questions

### What are attributes used for in Personalize?
Attributes are used to create distinct audience segments for targeted content delivery and personalized user experiences.

### What is the difference between preset and custom attributes?
Preset attributes are pre-defined visitor characteristics available by default, while custom attributes are user-defined characteristics you create to capture visitor information not covered by preset attributes.

### Can preset attributes be changed or removed?
You cannot modify or remove preset attributes from a project.

### How is data collected for custom attributes?
After creating a custom attribute in your project, the data needs to be collected for the attribute using the Personalize Edge SDK, the Personalize Edge API, or tools like Google Tag Manager and Customer Data Platform integrations.