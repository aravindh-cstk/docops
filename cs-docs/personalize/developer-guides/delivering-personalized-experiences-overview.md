---
title: "[Personalize] Delivering Personalized Experiences: An overview"
description: "Explore how Contentstack DXP uses Lytics, Edge APIs, and CDA to deliver real-time, scalable personalized experiences."
url: /personalize/delivering-personalized-experiences-overview
---

# [Personalize] Delivering Personalized Experiences: An overview

## Delivering Personalized Experiences: An overview

Delivering a personalized experience that is both instant and deeply relevant is a significant technical challenge. Contentstack, powered by [Lytics](/docs/lytics-cdp) and the [Personalize](/docs/personalize/about-personalize) engine, enables this through an edge-based personalization architecture.

**Note:** This is a simplified, high-level overview intended as an introduction to Contentstack’s personalization architecture. For a complete end-to-end reference, including detailed diagrams, SDK examples, and API specifications, see the [E2E Personalization Delivery Guide.](/docs/personalize/end-to-end-personalization-delivery)

## Technical Architecture

This overview explains how **Contentstack** integrates with personalization tools to deliver seamless, real-time experiences. The architecture illustrates the collaboration between **Contentstack CMS**, **Data & Insights (Lytics)**, and **Personalize**, ensuring users receive tailored content efficiently and at scale.

### Understanding the Personalization Flow

-   **Lytics** for tracking user behavior and determining audience membership.
-   **Contentstack Personalize** for managing experiences, variants, audiences, and personalization rules.
    -   **Personalize Admin UI** or the **Personalize Management API** for creating and managing experiences and rules.
    -   **Personalize Edge API** for determining active variants in real time using configuration synced from the Admin/Management API.
-   [Contentstack CMS](/docs/headless-cms/what-is-headless-cms) for creating and storing entry variants.
-   [Contentstack Delivery API (CDA)](/docs/developers/apis/content-delivery-api) for retrieving personalized content.

This integration adjusts each user’s content experience based on their audience membership and profile data, while maintaining low latency and global scalability.

![Contentstack personalization architecture diagram](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am08b738c12480d67c/1941bfc77a55e34e35fb0e2e/Delivering_personalized_experiences.png?locale=en-us)

## Data Flow Overview

**User Data Collection - Lytics**  
The [Lytics JS Tag](https://docs.lytics.com/docs/developer-quickstart-3-install-lytics) embeds on the webpage begins tracking user behavior such as clicks, navigation paths, and dwell time.

The tag also automatically collects page views, referral sources, user agent information, and other standard behavioral data. You can send additional user traits or attributes with the jstag.send() method. The **Lytics JS Tag** then syncs this data to the Lytics backend, which processes it to determine audience membership (e.g., Returning Visitor, High-Intent Shopper, Subscribed User).

1.  **Set Audience Membership Context in the Browser**
    
    The **Lytics JS Tag** then pulls the audience membership information back into the browser and stores it in cookies, which are used by subsequent personalization APIs to drive personalized content decisions.
    
2.  **Page Request**
    
    When the user requests a page from your application server, the request includes the audience membership cookies.
    
    This contextual information becomes part of the personalization flow.
    
3.  **Fetch Active Variants from the Personalize Edge API**
    
    Your application, preferably an **Edge Function**, calls the [Personalize Edge API](/docs/developers/apis/personalize-edge-api), ideally using the [JavaScript Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk).
    
    The SDK passes the audience membership data from cookies to the Edge API for variant calculation.
    
4.  **Active Variant Calculation**
    
    The [Personalize Edge API](/docs/developers/apis/personalize-edge-api) calculates the active variants for the user.
    
    All experiences, audiences, and rules created in **Personalize Admin** are synced to and stored at the edge. This enables real-time personalization globally without depending on the origin.
    
    The Edge API uses these rules, along with audience membership, to determine the appropriate active variants for the visitor.
    
5.  **Content Fetching from the Contentstack Delivery API (CDA)**
    
    Your application, typically the origin server, calls the [Contentstack Delivery API (CDA)](/docs/developers/apis/content-delivery-api) and passes the [variant aliases](/docs/personalize/glossary-key-features#variant-aliases) returned by the Personalize Edge API.
    
    The CDA returns the corresponding personalized entry variants from [Contentstack CMS](/docs/headless-cms/what-is-headless-cms), which your application then assembles into the final response.
    
    **Note:** Entry variants must be configured in the CMS. Refer to the [Variants documentation](/docs/personalize/about-variants) for guidance.
    
6.  **Tracking Events**
    
    After personalized content is rendered, track the performance of your experiences by triggering [impression](/docs/personalize/about-events#impressions) and [conversion](/docs/personalize/about-events#conversions) events from the browser.
    
    These events power [Experience Analytics](/docs/personalize/experience-analytics), enabling you to measure effectiveness and optimize your personalization strategy.
    

By combining audience intelligence with edge-based decisioning and structured content delivery, Contentstack delivers content tailored to audience context. Use this framework to guide your next steps in building personalized journeys.

## Next Steps

-   Check out the detailed end-to-end guide that goes deeper into each of the above steps [here](/docs/personalize/end-to-end-personalization-delivery).
-   Check out the step-by-step implementation guide for a Next.js application hosted on Contentstack Launch [here](/docs/personalize/setup-nextjs-website-with-personalize-launch).

## Related Resources

-   [Personalize Edge API reference](/docs/developers/apis/personalize-edge-api)
-   [Content Delivery API reference](/docs/developers/apis/content-delivery-api)
