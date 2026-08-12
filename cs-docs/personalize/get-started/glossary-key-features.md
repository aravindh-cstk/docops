---
title: "Glossary and Key Features"
description: "Get acquainted with the core concepts you will need to know when working in Personalize."
url: /personalize/glossary-key-features
---

# Glossary and Key Features

## Glossary and Key Features

Welcome to Contentstack Personalize! This document is designed to familiarize you with essential terms, features, and functionalities. This page covers the core concepts you will need to understand while working with Personalize.

## Experiences

An [Experience](/docs/personalize/about-experiences) is the top-level setup where you define variants, associate them with specific audiences, or manage traffic distribution in case of A/B tests. Each Experience thus directly represents each type of personalization that you have configured for your digital property.

## Audiences

An [Audience](/docs/personalize/about-audiences) is a group of users, defined using a rule builder in Personalize. The rule builder allows you to target specific attributes of your users and thus group them together. For example “North American Customers”, “Asia travel interest“, etc. You can target each variant of a Segmented Experience to multiple audiences, and also target an A/B test to specific audiences.

## Variants

[Variants](/docs/personalize/about-variants) are alternative versions ([CMS Entry Variants](/docs/headless-cms/about-entry-variants)) of your original content. A different version is created to facilitate personalized content, or to test a better performing version of the same content. In Personalize, each Experience contains one or more Variants.

## Variant Aliases

Variant aliases are used by Personalize to identify a CMS Variant. The aliases can be passed to the CMS Delivery API and the CMS Delivery SDK to fetch the personalized variant of the content entries. It can be used in place of the Variant UID in your API and SDK requests.

A variant alias looks like the following: cs\_personalize\_a\_0.

Here the mapping is as follows:

cs\_personalize: The prefix denoting that Personalize created the variant.

a: Experience Short UID

0: The activated Variant Short UID

## CMS Variant Groups

Each experience created in Personalize has a corresponding ‘Variant Group’ in the CMS within the linked Stack. You can see the list of all Variant Groups and Variants by navigating to Stack → Settings → Variants. The Variant Group allows you to set applicable Content Types, which enable customization of the entries in the Content Type for that Variant Group.

## CMS Entry Variants

Variants defined in an Experience are available in the CMS Entry Editor to seamlessly create and manage variations of your [entries](/docs/headless-cms/about-entries), catering to diverse [audiences](/docs/personalize/about-audiences), [segmented experiences](/docs/personalize/create-segmented-experience), and [A/B test experiences](/docs/personalize/create-ab-test-experience). You can choose from any variant in a drop-down, and customize the particular entry for that variant. Internally, each Experience is synced to create a [Variant Group](/docs/headless-cms/about-entry-variants#key-concepts), and each Variant is synced to create a [CMS Entry Variant](/docs/personalize/glossary-key-features#cms-entry-variants).

## User Manifest

The User Manifest is a list of activated Variants for each Experience for a particular user. The manifest is obtained by using the [Get Manifest](/docs/developers/apis/personalize-edge-api/manifest#get-manifest) request in the [Personalize Edge API](/docs/developers/apis/personalize-edge-api). The API calculates the manifest based on the context received for the particular user.

## Events

[Events](/docs/personalize/about-events) let you capture and monitor every interaction made by a user. In Contentstack Personalize, Events are essential for measuring the success of your A/B tests. By tracking specific user actions as events, such as clicks, form submissions, or video plays, you can accurately determine which variant in your experience performs better.

## Impressions

[Impressions](/docs/personalize/about-events#impressions) are a way to count how many times users see specific content on your website. Every time a user sees personalized content, it counts as one unique impression, that is, if a single user views the same personalized content multiple times, it is only counted once. This helps you understand if the personalized content is actually being seen by users. Impressions can be set up by a developer using the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk#edge-sdk) or [Personalize Edge APIs](/docs/developers/apis/personalize-edge-api). You can also use the [Google Tag Manager](/docs/personalize/google-tag-manager-integration-with-personalize) or [Customer Data Platform integrations](/docs/personalize/about-cdp-integration) to set up events without writing code.

## Conversions

A [conversion](/docs/personalize/about-events#conversions) is an event that signifies a positive user action, such as a click on the button ("Add to Cart", "Proceed to Checkout", "Learn More", "Subscribe", etc.) that we defined earlier in the guide. They are used in A/B Test experiences to evaluate the effectiveness of a variant, and the variant with a higher number of conversions is considered as the winner. Conversions can be set up similarly to Impressions by a developer using the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk#edge-sdk) or [Personalize Edge APIs.](/docs/developers/apis/personalize-edge-api) You can also use the [Google Tag Manager](/docs/personalize/google-tag-manager-integration-with-personalize) or [Customer Data Platform integrations](/docs/personalize/about-cdp-integration) to set up events without writing code.

## Related Resource

-   [Personalize Edge API](/docs/developers/apis/personalize-edge-api)
