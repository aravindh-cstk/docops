---
title: "[Personalize] Delivering Personalized Experiences: An overview"
description: Overview of Contentstack’s edge-based personalization architecture using Data & Insights (Lytics) and Personalize.
url: https://www.contentstack.com/docs/personalize/delivering-personalized-experiences-overview
product: Contentstack
doc_type: overview
audience:
  - developers
  - architects
version: current
last_updated: 2026-03-25
---

# [Personalize] Delivering Personalized Experiences: An overview

This page provides a simplified, high-level introduction to how Contentstack delivers personalized experiences using Data & Insights (Lytics), Personalize, and Contentstack CMS/Delivery APIs. It is intended for developers and solution architects who need an architectural overview before implementing end-to-end personalization delivery.

## Delivering Personalized Experiences: An overview

Delivering a personalized experience that is both instant and deeply relevant is a significant technical challenge. Contentstack, powered by [Data & Insights (Lytics)](/docs/data-and-insights) and the [Personalize](/docs/personalize/about-personalize) engine, enables this through an edge-based personalization architecture.

**Note:**This is a simplified, high-level overview intended as an introduction to Contentstack’s personalization architecture. For a complete end-to-end reference, including detailed diagrams, SDK examples, and API specifications, see the [E2E Personalization Delivery Guide.](/docs/personalize/end-to-end-personalization-delivery)

## Technical Architecture

This overview explains how **Contentstack** integrates with personalization tools to deliver seamless, real-time experiences. The architecture illustrates the collaboration between **Contentstack CMS**, **Data & Insights (Lytics)**, and **Personalize**, ensuring users receive tailored content efficiently and at scale.

### Understanding the Personalization Flow

- **Data & Insights (Lytics)** for tracking user behavior and determining audience membership.
- **Contentstack Personalize** for managing experiences, variants, audiences, and personalization rules.**Personalize Admin UI** or the **Personalize Management API** for creating and managing experiences and rules.
- **Personalize Edge API** for determining active variants in real time using configuration synced from the Admin/Management API.
- [Contentstack CMS](/docs/overview/what-is-headless-cms) for creating and storing entry variants.
- [Contentstack Delivery API (CDA)](/docs/developers/apis/content-delivery-api) for retrieving personalized content.

This integration adjusts each user’s content experience based on their audience membership and profile data, while maintaining low latency and global scalability.

## Data Flow Overview

**User Data Collection - Data & Insights (Lytics)**
The [Lytics JS Tag](https://docs.lytics.com/docs/developer-quickstart-3-install-lytics) embeds on the webpage begins tracking user behavior such as clicks, navigation paths, and dwell time.The tag also automatically collects page views, referral sources, user agent information, and other standard behavioral data. You can send additional user traits or attributes with the `jstag.send()` method. The **Lytics JS Tag** then syncs this data to the Lytics backend, which processes it to determine audience membership (e.g., Returning Visitor, High-Intent Shopper, Subscribed User).

- **Set Audience Membership Context in the Browser**The **Lytics JS Tag** then pulls the audience membership information back into the browser and stores it in cookies, which are used by subsequent personalization APIs to drive personalized content decisions.
- **Page Request**When the user requests a page from your application server, the request includes the audience membership cookies.

This contextual information becomes part of the personalization flow.

- **Fetch Active Variants from the Personalize Edge API**Your application, preferably an **Edge Function**, calls the [Personalize Edge API](/docs/developers/apis/personalize-edge-api), ideally using the [JavaScript Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript).

The SDK passes the audience membership data from cookies to the Edge API for variant calculation.

- **Active Variant Calculation**The [Personalize Edge API](/docs/developers/apis/personalize-edge-api) calculates the active variants for the user.

All experiences, audiences, and rules created in **Personalize Admin** are synced to and stored at the edge. This enables real-time personalization globally without depending on the origin.

The Edge API uses these rules, along with audience membership, to determine the appropriate active variants for the visitor.

- **Content Fetching from the Contentstack Delivery API (CDA)**Your application, typically the origin server, calls the [Contentstack Delivery API (CDA)](/docs/developers/apis/content-delivery-api) and passes the [variant aliases](/docs/personalize/glossary-key-features#variant-aliases) returned by the Personalize Edge API.

The CDA returns the corresponding personalized entry variants from [Contentstack CMS](/docs/overview/what-is-headless-cms), which your application then assembles into the final response.

**Note: **Entry variants must be configured in the CMS. Refer to the [Variants documentation](/docs/personalize/about-variants) for guidance.

- **Tracking Events**After personalized content is rendered, track the performance of your experiences by triggering [impression](/docs/personalize/about-events#impressions) and [conversion](/docs/personalize/about-events#conversions) events from the browser.

These events power [Experience Analytics](/docs/personalize/experience-analytics), enabling you to measure effectiveness and optimize your personalization strategy.

By combining audience intelligence with edge-based decisioning and structured content delivery, Contentstack delivers content tailored to audience context. Use this framework to guide your next steps in building personalized journeys.

## Next Steps

- Check out the detailed end-to-end guide that goes deeper into each of the above steps [here](/docs/personalize/end-to-end-personalization-delivery).
- Check out the step-by-step implementation guide for a Next.js application hosted on Contentstack Launch [here](/docs/personalize/setup-nextjs-website-with-personalize-launch).

## Common questions

### What is the purpose of the Personalize Edge API in this architecture?
It determines active variants in real time using configuration synced from the Admin/Management API and stored at the edge.

### Where does audience membership data come from?
Audience membership is determined by Data & Insights (Lytics) and is pulled back into the browser and stored in cookies.

### How does the application retrieve the personalized content?
The application calls the Contentstack Delivery API (CDA) and passes the variant aliases returned by the Personalize Edge API to retrieve the corresponding personalized entry variants.

### What should I read next for a complete implementation reference?
See the [E2E Personalization Delivery Guide.](/docs/personalize/end-to-end-personalization-delivery) and the Next.js implementation guide linked in the Next Steps section.

<!-- filename: personalize-delivering-personalized-experiences-an-overview.md -->