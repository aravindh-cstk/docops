---
title: "[Personalize] - Glossary and Key Features"
description: Glossary and key features for Contentstack Personalize, including core concepts such as experiences, audiences, variants, events, impressions, and conversions.
url: https://www.contentstack.com/docs/personalize/glossary-key-features
product: Contentstack Personalize
doc_type: glossary
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] - Glossary and Key Features

This page introduces the essential terms, features, and core concepts used in Contentstack Personalize. It is intended for developers and content managers who need a shared understanding of Personalize concepts before creating experiences, targeting audiences, managing variants, and measuring results.

## Glossary and Key Features

Welcome to Contentstack Personalize! This document is designed to familiarize you with essential terms, features, and functionalities. This page covers the core concepts you will need to understand while working with Personalize.

## Experiences
An [Experience](./about-experiences.md) is the top-level setup where you define variants, associate them with specific audiences, or manage traffic distribution in case of A/B tests. Each Experience thus directly represents each type of personalization that you have configured for your digital property.

## Audiences
An [Audience](./about-audiences.md) is a group of users, defined using a rule builder in Personalize. The rule builder allows you to target specific attributes of your users and thus group them together. For example “North American Customers”, “Asia travel interest“, etc. You can target each variant of a Segmented Experience to multiple audiences, and also target an A/B test to specific audiences.

## Variants
[Variants](./about-variants.md) are alternative versions ([CMS Entry Variants](../content-managers/entry-variants/about-entry-variants.md)) of your original content. A different version is created to facilitate personalized content, or to test a better performing version of the same content. In Personalize, each Experience contains one or more Variants.

## Variant Aliases
Variant aliases are used by Personalize to identify a CMS Variant. The aliases can be passed to the CMS Delivery API and the CMS Delivery SDK to fetch the personalized variant of the content entries. It can be used in place of the Variant UID in your API and SDK requests.

A variant alias looks like the following: `cs_personalize_a_0`.

Here the mapping is as follows:

`cs_personalize`: The prefix denoting that Personalize created the variant.

`a`: Experience Short UID

`0`: The activated Variant Short UID

## CMS Variant Groups
Each experience created in Personalize has a corresponding ‘Variant Group’ in the CMS within the linked Stack. You can see the list of all Variant Groups and Variants by navigating to Stack → Settings → Variants. The Variant Group allows you to set applicable Content Types, which enable customization of the entries in the Content Type for that Variant Group.

## CMS Entry Variants
Variants defined in an Experience are available in the CMS Entry Editor to seamlessly create and manage variations of your [entries](../content-managers/author-content/about-entries.md), catering to diverse [audiences](./about-audiences.md), [segmented experiences](./create-segmented-experience.md), and [A/B test experiences](./create-ab-test-experience.md). You can choose from any variant in a drop-down, and customize the particular entry for that variant. Internally, each Experience is synced to create a [Variant Group](../content-managers/entry-variants/about-entry-variants.md#key-concepts), and each Variant is synced to create a [CMS Entry Variant](./glossary-key-features.md#cms-entry-variants).

## User Manifest
The User Manifest is a list of activated Variants for each Experience for a particular user. The manifest is obtained by using the [Get Manifest](../../api-docs/api-detail/personalize-edge-api.md#get-manifest) request in the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md). The API calculates the manifest based on the context received for the particular user.

## Events
[Events](./about-events.md) let you capture and monitor every interaction made by a user. In Contentstack Personalize, Events are essential for measuring the success of your A/B tests. By tracking specific user actions as events, such as clicks, form submissions, or video plays, you can accurately determine which variant in your experience performs better.

## Impressions
[Impressions](./about-events.md#impressions) are a way to count how many times users see specific content on your website. Every time a user sees personalized content, it counts as one unique impression, that is, if a single user views the same personalized content multiple times, it is only counted once. This helps you understand if the personalized content is actually being seen by users. Impressions can be set up by a developer using the [Personalize Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md#edge-sdk) or [Personalize Edge APIs](../../api-docs/api-detail/personalize-edge-api.md). You can also use the [Google Tag Manager](./google-tag-manager-integration-with-personalize.md) or [Customer Data Platform integrations](./about-cdp-integration.md) to set up events without writing code.

## Conversions
A [conversion](./about-events.md#conversions) is an event that signifies a positive user action, such as a click on the button ("Add to Cart", "Proceed to Checkout", "Learn More", "Subscribe", etc.) that we defined earlier in the guide. They are used in A/B Test experiences to evaluate the effectiveness of a variant, and the variant with a higher number of conversions is considered as the winner. Conversions can be set up similarly to Impressions by a developer using the [Personalize Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md#edge-sdk) or [Personalize Edge APIs.](../../api-docs/api-detail/personalize-edge-api.md) You can also use the [Google Tag Manager](./google-tag-manager-integration-with-personalize.md) or[ Customer Data Platform integrations](./about-cdp-integration.md) to set up events without writing code.

## Common questions

### What is the difference between an Experience and a Variant?
An Experience is the top-level setup where you define variants and associate them with audiences or manage traffic distribution, while Variants are alternative versions of your original content within an Experience.

### What is a variant alias used for?
Variant aliases are used by Personalize to identify a CMS Variant and can be passed to the CMS Delivery API and the CMS Delivery SDK to fetch the personalized variant of the content entries.

### How do Impressions differ from Conversions?
Impressions count how many times users see specific content on your website (counted once per user for the same personalized content), while Conversions are events that signify a positive user action and are used in A/B Test experiences to evaluate variant effectiveness.

### How is the User Manifest obtained?
The manifest is obtained by using the [Get Manifest](../../api-docs/api-detail/personalize-edge-api.md#get-manifest) request in the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md).