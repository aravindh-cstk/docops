---
title: "[JavaScript Personalize Edge] - Get Started with JavaScript Personalize Edge SDK"
description: Get started guide for installing, initializing, and using the JavaScript Personalize Edge SDK to retrieve experiences, variant aliases, and track events.
url: https://www.contentstack.com/docs/developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk
product: Contentstack Personalize
doc_type: sdk-guide
audience:
  - developers
  - javascript
  - frontend
  - backend
version: latest
last_updated: 2026-03-25
---

# [JavaScript Personalize Edge] - Get Started with JavaScript Personalize Edge SDK

This page explains how to install, initialize, and use the JavaScript Personalize Edge SDK to fetch user-specific experiences and variants, set user attributes, and track impressions/events. It is intended for developers integrating Contentstack Personalize into Node.js backends (including edge middleware) and browser-based applications.

## Get Started with JavaScript Personalize Edge SDK

The SDK is a wrapper over the [Personalize Edge API](../../../../../api-docs/api-detail/personalize-edge-api.md), which is the decision engine that determines the variants to be shown to a user as well as the endpoint to track user impressions and events.
This step-by-step guide will help you get started with the JavaScript Personalize Edge SDK and build personalized applications powered by Contentstack.

## Prerequisites
- Website content sourced from a Contentstack [stack](../../../set-up-stack/about-stack.md)
- Personalize project created and connected to a stack
- Personalize Project UID

## Installing and Setup

If you are working with a Node.js-based project, use the following command to install the SDK:

```
$ npm i @contentstack/personalize-edge-sdk
```

**Note: **For NPM-based browser projects, use the same installation command as above.

## Initialize the SDK

Initialization creates an instance of the SDK which can then be used to retrieve user specific experiences, track impressions, and log events. The initialization process varies depending on the context in which the SDK is being used, such as edge middleware, backend, or frontend.

Initialization involves an API call to the Edge API to fetch the [manifest](../../../../personalize/glossary-key-features.md#user-manifest) for the current user. This manifest is maintained throughout the SDK’s lifespan. Methods such as `getExperiences` and `getVariantAliases` rely on this manifest to provide their outputs.

To start using the SDK, import and configure Personazlize with your **Project UID**:

```
import Personalize from '@contentstack/personalize-edge-sdk';
let projectUid = 'your-project-uid';
// Using async-await:
const personalizeSdk = await Personalize.init(projectUid);
```

### Initializing the SDK at the backend

In backend environments like edge middleware or an origin server, the SDK can retrieve user variants based on incoming requests. Since the context resides in the request object, you can pass it directly during initialization. The SDK uses the request to extract relevant data such as URL, IP address (for location-based personalization), referrer, device, and operating system.

```
const personalizeSdk = await Personalize.init(projectUid, {
	userId: 'your-users-id', // optional
	request, // the JavaScript request object for the request incoming from a user's browser
});
```

### Initializing the SDK in the browser

In browser environments, you can initialize the SDK to track impressions and events. In client-side rendered applications, it also retrieves active variants for the current user, enabling real-time personalized content delivery.
As the browser lacks request context, the initialization is straightforward:

```
const personalizeSdk = await Personalize.init(projectUid, {
	userId: 'your-users-id', // optional
});
```

## Custom User Attributes

You can use custom user attributes using one of the following methods:
- ### Setting Custom User Attributes using set method

    The set method allows you to define user attributes as key-value pairs representing user traits. To use these attributes, create them with matching keys in the Personalize Attributes module.

    **Note: **User attribute data is stored across our global edge network. As a result, newly set attributes may take up to one second to be recognized by the decision engine when determining the user’s variant..

```
await personalizeSdk.set({ age: 20 });
```
- ### Using Custom User Attributes as Live Attributes

    Live attributes enable sending specific attribute values in real time to the Edge API during Manifest fetch. This allows the decision engine to determine active variants based on the provided values without waiting for the data to sync to the edge.

    Passing custom user attributes during initialization treats them as live attributes. This allows the attributes to be sent directly to the Personalize decision engine for real-time variant evaluation.

    **Note:** Values passed as live attributes are only used during the current session and not persisted in the user's profile. To retain the value, set the attributes using the `set` method described above.

```
const personalizeSdk = await Personalize.init(projectUid, {
    liveAttributes: {
      age: 20
    },
  });
```

## Retrieve Experiences

Get the list of all the experiences in your project and their respective active variants. The experiences are sorted in decreasing order of priority, as defined in the Management Console.

```
const experiences = personalizeSdk.getExperiences();
// [{shortUid: 'a', activeVariantShortUid: '0'}, {shortUid: 'b', activeVariantShortUid: '1'}]
```

## Retrieve Variant Aliases for Content Delivery

Get the list of Variant Aliases, which can be passed to the CMS Delivery API to fetch personalized entry variants.

```
const variantAliases = personalizeSdk.getVariantAliases();
// ['cs_personalize_a_0', 'cs_personalize_b_1']
```

## Trigger an Event

The `triggerEvent()` method records significant user actions, such as clicking a CTA or scrolling to the end of a page, by passing an eventKey—a unique identifier defined in the Personalize Events module. This allows tracking conversions, analyzing user behavior, and measuring A/B test outcomes.

```
await personalizeSdk.triggerEvent('clickCTA');
```

## Resources
- [Setup Next.js Website with Personalize - Launch](../../../../personalize/setup-nextjs-website-with-personalize-launch.md)
- [Setup Next.js Website with Personalize - Vercel](../../../../personalize/setup-nextjs-website-with-personalize-vercel.md)

## Next Steps

[Personalize Edge SDK API Reference](../../../create-content-types/reference.md)

## Common questions

### Do I need different initialization for backend vs browser usage?
Yes. Backend initialization can pass the request object, while browser initialization is straightforward because the browser lacks request context.

### What are “live attributes” and when should I use them?
Live attributes are passed during initialization and used in real time during Manifest fetch; they are only used during the current session and are not persisted in the user's profile.

### How do I fetch personalized variants for CMS content delivery?
Use `getVariantAliases()` to get Variant Aliases that can be passed to the CMS Delivery API to fetch personalized entry variants.

### How do I track user actions like clicks?
Use `triggerEvent()` with an eventKey defined in the Personalize Events module, for example `await personalizeSdk.triggerEvent('clickCTA');`.