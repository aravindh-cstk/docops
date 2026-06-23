---
title: "[Personalize] Delivering Personalized Experiences: A detailed end-to-end technical guide"
description: Delivering Personalized Experiences: A detailed end-to-end technical guide
url: https://www.contentstack.com/docs/personalize/end-to-end-personalization-delivery
product: Contentstack Personalize
doc_type: technical-guide
audience:
  - developers
  - solution-architects
version: unknown
last_updated: 2026-03-25
---

# [Personalize] Delivering Personalized Experiences: A detailed end-to-end technical guide

This page explains the end-to-end technical flow for delivering personalized experiences in Contentstack, including how user data is collected, how audiences and variants are evaluated, how variant context is passed to the Delivery API, and how impressions/conversions are tracked. It is intended for developers implementing Personalize with Data & Insights (Lytics), the Personalize Edge API/SDK, and the Contentstack Delivery API in real-time delivery architectures.

## Delivering Personalized Experiences: A detailed end-to-end technical guide

This guide explains the complete flow of personalization delivery in Contentstack. It covers how user data is consented for and collected, how **Data & Insights (Lytics)** tracks user profiles and audience memberships, how **Personalize** assesses audience memberships and user context to determine active variants, and how the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md) and [Contentstack Delivery API (CDA)](../../api-docs/api-detail/content-delivery-api.md) work together to render the correct content variants in real-time.

The below sequence diagram gives a better understanding of how request flows seamlessly between **Data & Insights (Lytics)**, **Personalize**, and **Contentstack CMS** to deliver personalized experiences efficiently.

## Send User Data

Effective personalization begins with understanding the user, their interests, preferences, and how they engage with your digital experiences. To enable this understanding, collecting and passing user data is essential.

For personalization, you can capture this data in two primary ways:
- **Using the Lytics JS Tag (recommended)** for real-time behavioral tracking and audience enrichment.
- **Using Personalize Attributes** to send specific traits or signals directly to Personalize.

### Via Lytics JSTag (Recommended)

- **Automatically collected data:** The tag automatically tracks page views, user agent, referral source, and other standard behavioral data.
- **Custom Data:** You can manually send specific user traits or attributes.

These profiles are surfaced in real time for personalization use cases.

To send custom user data to Lytics, use the `jstag.send()` method. Call this method and pass a JavaScript object containing the data you want to send for profile building.

**For example:**
```
jstag.send({  "email": "user@example.com",  "first_name": "John",  "last_name": "Doe"});
```
This collected data is sent to Data & Insights (Lytics), which processes it to build audience segments.

For more information, refer to the following guides:
- [Data & Insights (Lytics)](/docs/data-and-insights)
- [Set up JS Tag](../data-and-insights/install-real-time-event-tag.md)
- [Data Collection by the JS Tag](https://docs.lytics.com/docs/lytics-javascript-tag#data-collection)

### Using Personalize Custom Attributes

You can use [Personalize Custom Attributes](./about-attributes.md) to define user traits and send them directly to the Personalize decision engine for real-time audience evaluation, useful for first-page personalization.

The custom attributes for each user can be persisted at Personalize Edge, or sent a new and ad-hoc each time you request that user’s active variants.

To persist a user’s custom attributes at Personalize Edge, you can use the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md) or the [Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md).

To do it via the API, call the PATCH /user-attributes endpoint of the Edge API.

```
curl --location --request PATCH 'https:///user-attributes' \--header 'x-project-uid: your_project_uid' \--header 'x-cs-personalize-user-uid: you_visitors_user_uid' \--header 'Content-Type: application/json' \--data '{    "age": 42,    "highValueCustomer": true}'
```
**Note:** Find your Contentstack region’s Personalize Edge API base URL [here](../../api-docs/api-detail/personalize-edge-api.md#base-url).

Alternatively, the more common and simpler approach is to use the `set()` method in the [Personalize Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md) to define key-value pairs representing user attributes. Ensure that the attribute keys you define match those created in the **Personalize Attributes** module.

```
import Personalize from '@contentstack/personalize-edge-sdk';// if not using Contentstack's AWS NA regionPersonalize.setEdgeApiUrl('');const personalizeSdk = await Personalize.init(projectUid, initOptions);await personalizeSdk.set({  age: 42,  highValueCustomer: true,});
```
If you do not want to persist this data at Personalize Edge, but only need it for determining active variants and can send it with every Manifest request, send it as **live attributes**. Read more about live attributes in the ‘Request Manifest’ section below.

```
const personalizeSdk = await Personalize.init(projectUid, {    liveAttributes: {      age: 20    },});
```
Passing custom attributes during initialization treats them as **live attributes**, allowing real-time variant evaluation.

**Note:** You need to have the audiences rules set up correctly to utilize the user data. To learn more about audience rules in Personalize, refer [here](./create-audience.md).

## Request Manifest (Personalize)

The [Manifest API](../../api-docs/api-detail/personalize-edge-api.md#get-manifest) (GET /manifest) returns the list of active variants for a user. When a visitor lands on your site, you should call the Personalize Edge API to evaluate all **active experiences** and determine which variant is active for each. It evaluates active variants by reading the audience memberships and user context passed in request headers. To find out more about the API’s working, check out the ‘Via API’ subsection below. This can be simplified by using the Personalize Edge SDK, which we highly recommend.

**Via JavaScript Edge SDK**

```
import Personalize from '@contentstack/personalize-edge-sdk';const personalizeSdk = await Personalize.init(projectUid, initOptions);
```
Upon initialization, it calls the Manifest API to fetch the user’s active variants, which can then be retrieved using the `personalizeSdk.getActiveVariants()` method.

In an edge environment (for example, a **Launch Edge Function**), you would initialize the SDK and pass the incoming request object in the [initOptions](../developers/create-content-types/reference.md#initoptions). Initializing with the request object will allow the SDK to read context such as page URL, referrer, IP address, cookies, etc., which are needed by the Edge API for determining the active variants.

```
const activeVariants = personalizeSdk.getActiveVariants();/**Example active variants - experience short uid: variant short uid key-value pairs{  '0': 'a',  '1': '2',  '2': 'e',}**/
```
**Note:** Ideally, you would perform this at your edge function. For more details about the edge-based implementation architecture, check out this [document](./ssr-edge-routing-technical-implementation-architecture.md). For a step-by-step Next.js implementation example, refer to [Setup Next.js Website with Personalize - Launch](./setup-nextjs-website-with-personalize-launch.md). Note that the functions used in the actual code might slightly differ from the ones mentioned above, this is due to the nuances in real-world implementation best practices.

### Via API (Manual)

You can call the **Personalize Edge API** directly, but you must handle user context and cookies manually.

**Endpoint:** GET /manifest

**Required headers:**
- x-project-uid (your Personalize Project UID)
- x-cs-personalize-user-uid (the current user’s user UID)

The context for matching contextual attributes can be provided in optional headers, for example x-page-url for matching query parameters. For the complete list, check out the API documentation [here](../../api-docs/api-detail/personalize-edge-api.md#get-manifest).

**Example:**

```
curl -X GET 'https://personalize-edge.contentstack.com/manifest' \  -H 'X-Project-Uid: ' \  -H 'X-Cs-Personalize-User-Uid=' \  -H 'X-Page-Url: https://www.mysite.com/homepage'
```
**Sample Response:**

```
{  "experiences": [    {      "shortUid": "0",      "activeVariantShortUid": "0"    },    {      "shortUid": "1",      "activeVariantShortUid": "1"    }  ]}
```

## Pass Variant Context to Contentstack Delivery API (CDA)

To fetch the correct personalized content from the Contentstack Delivery API (CDA), you must pass the **variant aliases** in the request headers.

### Fetch Personalized Content

To fetch entry variants, we need to first get the variant aliases.

**Getting Variant Aliases**
- **Via Personalize Edge SDK**

The `getVariantAliases()` method in Edge SDK returns a list of variant aliases.

**Note:** In the actual implementation, the methods may slightly differ if you follow the recommended edge-based implementation architecture, although the core concept remains the same. The [Proxy Requests with Launch Edge Proxy](./setup-nextjs-website-with-personalize-launch.md#proxy-requests-with-launch-edge-proxy) and [Fetch Variant Content from the Origin](./setup-nextjs-website-with-personalize-launch.md#fetch-variant-content-from-the-origin) sections of the Next.js Launch setup guide provide an example for the same.

```
const variantAliases = personalizeSdk.getVariantAliases();// ['cs_personalize_a_0', 'cs_personalize_b_1']
```
- **Via API**

Use the active variants returned by the Manifest API to generate the variant aliases manually and fetch personalized entry data via the [Contentstack CDA](../../api-docs/api-detail/content-delivery-api.md) (REST, GraphQL, or SDK). Make sure to include the `publish_details` field to access applied variant metadata.

Extract the variant alias from the Manifest response using the following logic:
You should get an array that looks like ['cs_personalize_a_0', 'cs_personalize_b_1']

```
const variantAliases = manifestResponse.experiences    .filter((exp) => exp.activeVariantShortUid !== null)        .map((exp) => `cs_personalize_${exp.shortUid}_${exp.activeVariantShortUid}`);
```
**Fetching personalized entry variants from the CMS**

The variant aliases can then be passed to the CMS Delivery API to fetch entries.
- **Via Contentstack Delivery SDK**
```
import contentstack from '@contentstack/delivery-sdk';const stack = contentstack.stack({  apiKey: 'your stack api key',  deliveryToken: 'your stack delivery token',  environment: 'your stack environment',  host: 'your stack delivery api host',});const entry = await stack  .contentType('your_content_type_uid')  .entry('your_entry_uid')  .variants(variantAliases)  .fetch();
```
- **Via Contentstack Delivery API (CDA)**
- REST API: [Entry Variants API](../../api-docs/api-detail/content-delivery-api.md#entry-variants)
- SDK: [Get Variants](../developers/create-content-types/reference.md#variants)

**Example Request:**

```
curl -X GET 'https://cdn.contentstack.io/v3/content_types//entries?environment=&locale=&include_fallback=true&include_publish_details=true&include_rules=true&include_metadata=true&show_errors=true' \  -H 'api_key: ' \  -H 'access_token: ' \  -H 'x-cs-variant-uid: ' \  -H 'Accept: application/json'
```
The variant aliases are passed as a comma-separated string. For example, the variant aliases ['cs_personalize_a_0', 'cs_personalize_b_1'] should be passed as cs_personalize_a_0, cs_personalize_b_1 in the x-cs-variant-uid header.

**Example Response:**

```
{  "entry": {    "title": "Dynamic Banner",    "personalized_field_uid": "personalized content value",    "publish_details": {      "variants": {        "": {          "alias": "cs_personalize_0_0",          "environment": ""        },        "": {          "alias": "cs_personalize_1_1",          "environment": ""        }      }    }  }}
```
Each key in the variant's object is a Variant UID. Each value includes an alias in the `cs_personalize_<experience_uid>_<variant_uid>` format.

## Track Impressions and Events

### Impressions

Tracking [impressions](./about-events.md#impressions) and [conversions](./about-events.md#conversions) completes the feedback cycle allowing you to measure the effectiveness of your personalization.

Impressions could be tracked in Personalize in two ways:
- **For specific experiences**
- **Dynamically for variants actually shown (recommended)**

#### For specific experiences

This is useful when you want to trigger impressions for specific experiences. You can provide the Edge SDK the list of Experience Short UIDs, and the SDK will then trigger the impressions for the corresponding active variants in the manifest.

The following snippet shows how to trigger impressions for specific experiences:

**Via SDK**

```
import Personalize from '@contentstack/personalize-edge-sdk';const personalizeSdk = await Personalize.init(projectUid, initOptions);const experienceShortUids = [ 'a', 'b' ];personalizeSdk.triggerImpressions({ experienceShortUids });
```
Ideally, you would insert this piece of code in your frontend, and call the `triggerImpression()` method on rendering a personalized component.

#### Dynamically triggering Impressions

You can also trigger impressions dynamically for all the variants which are active and are shown on the page. This is simpler to implement and is also a one-time setup, as you do not need to keep adding more code as your personalization scales to include more pages and sections.

To trigger impressions dynamically for the variants that were actually displayed to your user, you first need to find out which variants were displayed. For this, we can use the response from the Entry Variants API as discussed above using the Entry Variants API or Delivery SDK.

Personalize can then use the Experience Short UID and Variant Short UID in the alias to trigger impressions, without needing to refer to the manifest.

The following snippet shows how to get the variant aliases for the variants actually returned by the Content Delivery API.

```
const variants = entry?.publish_details?.variants || {};const variantAliases = Object.values(variants).map((v) => v.alias);
```
**Via SDK**

Pass over the variantAliases to the `triggerImpressions()` method available in Personalize Edge SDK to track the count of unique users who view the variant.

```
import Personalize from '@contentstack/personalize-edge-sdk';const personalizeSdk = await Personalize.init(projectUid, initOptions);personalizeSdk.triggerImpressions({  aliases: variantAliases});
```
**Additional Resource:** For more information on how to trigger impressions dynamically, refer to [Dynamically Track Variant Impressions Based On Entry Variant Shown](./dynamically-track-variant-impressions.md).

**Via API**

```
curl -X POST 'https://personalize-edge.contentstack.com/events' \  --header 'x-cs-personalize-user-uid: ' \  --header 'x-project-uid: ' \  --header 'Content-Type: application/json' \  --header 'Accept: application/json' \  --data '[    {      "type": "IMPRESSION",      "experienceShortUid": "0",      "variantShortUid": "0"    },    {      "type": "IMPRESSION",      "experienceShortUid": "1",      "variantShortUid": "1"    }  ]'
```
**Note:** Impressions are unique per user, meaning that even if the same user views that content multiple times, it’s only counted once.

### Conversions

A conversion represents a user action (for example, clicking a button or completing a purchase).To record conversions, trigger an event using `triggerEvent()`.

**Via SDK**

```
import Personalize from '@contentstack/personalize-edge-sdk';const personalizeSdk = await Personalize.init(projectUid, { request });const eventKey = 'your_event_key';personalizeSdk.triggerEvent(eventKey);
```
The `triggerEvent` method takes an eventKey. The eventKey is configured when you [create an event](./create-event.md). These events must be defined as a metric for conversions to be registered.

**Via API**

```
curl -X POST 'https://personalize-edge.contentstack.com/events' \  --header 'x-cs-personalize-user-uid: ' \  --header 'x-project-uid: ' \  --header 'Content-Type: application/json' \  --header 'Accept: application/json' \  --data '[    {      "eventKey": "Click",      "type": "EVENT"    }  ]'
```
**Note:** To track conversions, you should configure the conversion metrics in experiences.

**Additional Resource: **For more information, refer to [Configure Metrics in Experiences.](./create-ab-test-experience.md#steps-for-execution)

## Implementation Checklist

Use this checklist to validate your end-to-end Personalize implementation:

### Data & Attribute Handling
- Lytics JS Tag or Personalize attributes are configured.
- Custom attributes and contextual attributes are passed correctly to Personalize Edge.
- User UID (x-cs-personalize-user-uid) is consistently generated/stored.

### Audience and Experience Setup
- Audiences created and published.
- Experiences (Segmented or A/B Test) configured with valid variants.
- Events created and added to experiences where applicable.

### Manifest & Variant Evaluation
- Manifest API (or SDK init) returns active variants.
- Variant aliases generated correctly (e.g., cs_personalize_a_0).
- Variant parameters / headers correctly forwarded to CDA.

### CDA Content Delivery
- Entry Variants created and published in CMS.
- CDA calls include x-cs-variant-uid with correct aliases.
- Returned entries contain expected publish_details.variants.

### Event Tracking
- Impression events trigger once per unique variant view.
- Conversion events trigger only on defined user actions.
- Events appear under the Personalize Analytics tab.

## Common questions

### Do I have to use the Personalize Edge SDK to request the manifest?
No. You can call the **Personalize Edge API** directly (GET /manifest), but you must handle user context and cookies manually.

### What headers are required to call GET /manifest?
**Required headers:** x-project-uid (your Personalize Project UID) and x-cs-personalize-user-uid (the current user’s user UID).

### How do I fetch the correct personalized content from the Contentstack Delivery API (CDA)?
You must pass the **variant aliases** in the request headers (x-cs-variant-uid) as a comma-separated string.

### How can impressions be tracked for variants actually shown?
You can trigger impressions dynamically by extracting variant aliases from the Entry Variants API response and passing them to `triggerImpressions()` in the Personalize Edge SDK, or by sending events via the API.