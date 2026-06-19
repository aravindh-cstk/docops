---
title: "[Personalize] Track User Activity for Analytics"
description: Track impressions and conversions in Contentstack Personalize using the JavaScript Edge SDK, Edge API, or Google Tag Manager to power Experience Analytics and A/B test measurement.
url: https://www.contentstack.com/docs/personalize/track-user-activity-analytics
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - implementers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] Track User Activity for Analytics

This page explains how to track user activity in Contentstack Personalize—specifically impressions and conversions—so developers and implementers can power Experience Analytics and measure A/B test performance using the JavaScript Edge SDK, the Edge API, or Google Tag Manager.

Tracking user activity, such as [Impressions](/docs/personalize/about-events#impressions) (views) and [Conversions](/docs/personalize/about-events#conversions) (actions), is a core part of Contentstack Personalize. This activity data powers [Experience Analytics](/docs/personalize/experience-analytics), enabling you to measure the impact of personalization strategies and identify winning variants in [A/B tests.](/docs/personalize/create-ab-test-experience)

## Tracking Impressions

**Impressions** are events that should be triggered when a user views a specific variant of an experience. In other words, the user is gaining an impression of a personalized experience. Each impression is tied to an [Experience](/docs/personalize/about-experiences), a [Variant](/docs/personalize/about-variants), and the **current user** viewing the personalized variant.

Impressions of a personalized variant are also a good measure of the breadth of implementation of Personalize in your product. You can trigger impressions using either the [JavaScript Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript) or by directly calling the [Personalize Edge API](/docs/developers/apis/personalize-edge-api).

The resulting impressions appear in the **Analytics** section of each experience, distributed across all variants.

**Note:** Impressions are unique per user. Even if a user views the same personalized content multiple times, it is counted only **once**.

### Using the JavaScript Edge SDK

```
import Personalize from '@contentstack/personalize-edge-sdk';
const personalizeSdk = await Personalize.init(projectUid, initOptions);
personalizeSdk.triggerImpression(MY_EXPERIENCE_SHORT_UID);
```

Here, `projectUid` is the project ID of the Personalize Project.

The [`triggerImpressions()`](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#triggerimpressions) method can trigger multiple impressions simultaneously.

When provided with **Experience Short UIDs**, it automatically sends impressions for the corresponding active variants in the manifest.

Alternatively, it can also be called with the variant aliases. This is our recommended approach and you can read more about it in the ‘Dynamically Tracking Impressions’ section below.

### Using the Edge API

You can record impressions using the Edge API. This is also what the Edge SDK does internally, but provides a friendly JavaScript wrapper on top of the API.

```
curl -X POST '/events' \
--header 'x-cs-personalize-user-uid: ' \
--header 'x-project-uid: ' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '[
 {
  "type": "IMPRESSION",
  "experienceShortUid": "",
  "variantShortUid": ""
 },
]'
```

**Note:** The Base URL for the Edge API depends on your Contentstack region. For example, if you’re using the AWS North America region, the base URL is https://personalize-edge.contentstack.com. For the appropriate Personalize Edge API domain, visit [personalize-edge-api](/docs/developers/apis/personalize-edge-api#base-url) documentation.

### Dynamically Tracking Impressions

When Personalize resolves variants at runtime, it gives you the complete list of active variants for each experience. However, it’s not necessary that every experience is active on the page that a user is viewing. Even though we pass the complete list to the Content Delivery API, it’ll return a personalized entry variant for only the variants that actually exist on the requested entry. Only the variants which were applied and thus seen by the user should be included when triggering impressions.

#### Why this matters

Dynamic tracking ensures analytics reflect what the user actually saw, not what your application assumed they saw. This prevents inflated or missing impressions, which is especially important in the case of A/B tests and ensures that the results correctly attribute performance to the right variant.

**Additional Resource:** Refer to [Dynamically Track Variant Impressions Based On Entry Variant Shown Documentation ](/docs/personalize/dynamically-track-variant-impressions)for detailed steps.

### Tracking Impressions Using GTM (Google Tag Manager)

Integrating Personalize with [Google Tag Manager (GTM)](/docs/personalize/google-tag-manager-integration-with-personalize) allows you to track impressions for personalized content variants automatically. This setup simplifies data collection for measuring content visibility and populates the **Experience Analytics** dashboard.

**Additional Resource:** Refer to [Set up the tag for Trigger Impressions action Documentation](/docs/personalize/google-tag-manager-integration-with-personalize#set-up-the-tag-for-trigger-impressions-action) for further details.

## Tracking Conversions

A [conversion](/docs/personalize/about-events#conversions) represents any user action that results in a valuable result.

**For Example:**
- Adding a product to the cart
- Completing a purchase
- Scrolling to the end of a page

Conversions are used in A/B tests to measure the effectiveness of each variant. A higher conversion count indicates a stronger-performing variant.

**Note:** An event is counted as a conversion only if it’s attributed to an impression. Attribution occurs when a conversion happens within **30 days** of the corresponding impression.

### To track conversions:

- [Create events](/docs/personalize/add-event-to-ab-test-experience/) in the **Events** section of **Personalize**.
- Configure these events as **conversion metrics** in your A/B test.
- Trigger events using the Personalize SDK or Personalize Edge API.

You can track events using the SDK or the Edge API. The conversions can also be viewed in the “Analytics” section of each experience along with impressions.

**Tip:** Ensure conversion metrics are configured within each experience to track conversions. Refer to [Configure Metrics in Experiences](/docs/personalize/create-ab-test-experience#steps-for-execution) for more details.

#### Using the JavaScript SDK

```
import Personalize from '@contentstack/personalize-edge-sdk';

const personalizeSdk = await Personalize.init(projectUid, { request });
const eventKey = 'your_event_key';
personalizeSdk.triggerEvent(eventKey);
```

Here, `projectUid` is the project ID of the Personalize Project.

An event represents any significant user action, such as clicking a **CTA** or scrolling to a specific section. The event key (for example, `'learnMoreClicked'`) must match the event configured in the Personalize **Events** module.

Triggering events lets you measure conversions and attribute them to variants within A/B tests.

#### Using the API

```
curl -X POST '/events' \
--header 'x-cs-personalize-user-uid: ' \
--header 'x-project-uid: ' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '[
    {
      "eventKey": "Click",
"type": "EVENT
    }
  ]'
```

**Note:** The Base URL for the Edge API depends on your Contentstack region. For example, the base URL for AWS North America region is (https://personalize-edge.contentstack.com). For the appropriate Personalize Edge API domain, visit [this page ](/docs/developers/apis/personalize-edge-api#base-url).

### Tracking Conversions Using GTM (Google Tag Manager)

Integrating **Personalize** with **GTM** also enables conversion tracking for personalized variants.

This integration simplifies the process of collecting performance data and helps determine A/B test winners directly through **Experience Analytics**.

**Additional Resource:** Refer to [Set up the tag for Trigger Event action](/docs/personalize/google-tag-manager-integration-with-personalize#set-up-the-tag-for-trigger-event-action) documentation.

## Common questions

### Do impressions count multiple views by the same user?
No. **Note:** Impressions are unique per user. Even if a user views the same personalized content multiple times, it is counted only **once**.

### How can I trigger impressions?
You can trigger impressions using either the [JavaScript Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript) or by directly calling the [Personalize Edge API](/docs/developers/apis/personalize-edge-api).

### When is an event counted as a conversion?
**Note:** An event is counted as a conversion only if it’s attributed to an impression. Attribution occurs when a conversion happens within **30 days** of the corresponding impression.

### Can I track impressions and conversions with Google Tag Manager?
Yes. Integrating Personalize with [Google Tag Manager (GTM)](/docs/personalize/google-tag-manager-integration-with-personalize) allows you to track impressions and also enables conversion tracking for personalized variants.