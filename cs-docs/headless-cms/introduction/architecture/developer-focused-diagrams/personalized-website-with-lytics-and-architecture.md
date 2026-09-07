---
title: "Personalized Website with Lytics and Personalize"
description: "Learn to build a personalized website with Contentstack, using Lytics for real-time audiences, Personalize for edge variant decisioning, and Automate for cache invalidation."
url: /headless-cms/personalized-website-with-lytics-and-architecture
uid: blt39e181640c64a630
---

# Personalized Website with Lytics and Personalize

## Personalized Website with Lytics and Personalize

This architecture extends the **Simple Website with Contentstack Launch** pattern by adding behavioral and profile-based personalization to the render path. Lytics turns site behavior into real-time audiences, Contentstack Personalize decides which content variant each visitor should see, and Contentstack CMS serves the matching content. Decisioning runs server-side inside a Launch Edge Function, so the personalized page is delivered in the first response. First-time or unmatched visitors fall back to a safe default, and Contentstack Automate triggers cache invalidation whenever a variant is published or unpublished.

**Additional Resource:** To learn more, refer to the [Simple Website with Contentstack Launch](/docs/headless-cms/simple-website-with-contentstack-launch) document.

## Prerequisites

Before you begin, ensure the following requirements are met:

-   [Contentstack account](https://www.contentstack.com/login)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   A Git provider account ([GitHub](https://github.com), [GitLab](https://about.gitlab.com/), or [Bitbucket](https://bitbucket.org))
-   An application codebase built with a modern framework (for example, [Next.js](https://nextjs.org), [React](https://react.dev), or [Vue](https://vuejs.org))
-   [Contentstack Personalize](/docs/personalize) enabled, with a [Personalize project](/docs/personalize/create-personalize-project) and its [Project UID](/docs/personalize/manage-personalize-project)
-   A Lytics account with access to the [Lytics JS Tag](/docs/lytics/install-lytics-jstag-sdk) and an access token, with profile sync to Personalize linked
-   [Contentstack Launch](/docs/launch/about-launch) enabled for your organization
-   Access to a [Delivery Token](/docs/headless-cms/about-delivery-tokens) and familiarity with [Environment Variables](/docs/launch/environment-variables) ([CDA](/docs/developers/apis/content-delivery-api)/[CPA](/docs/headless-cms/preview-api))
-   Access to [Contentstack Automate](/docs/agent-os/what-is-an-automation) for cache invalidation setup
-   Content types configured for [Entry Variants](/docs/headless-cms/about-entry-variants) in your stack, via a linked [Variant Group](/docs/headless-cms/manage-variant-groups)
-   Familiarity with your framework's edge or SSR model, since the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk) runs inside a Launch Edge Function

## Architecture Diagram

![Personalized Website with Lytics and Personalize](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3d78317c3cb08578/d24c501e91d1a098617ddea5/Personalized_Website_with_Lytics_and_Personalize.png?locale=en-us)

## Core Workflow Steps

The following steps illustrate how content, data, and decisions flow through the system during runtime:

1.  **Request Site:** When a user requests the website URL, the request is handled by Contentstack Launch. It carries the visitor's audience-membership cookie, written by the Lytics JS Tag on earlier visits.
2.  **Evaluate Audiences:** Launch runs the Personalize Edge SDK inside an Edge Function. The SDK reads the audience cookie and calls the Personalize Edge API, which evaluates audience rules synced to the edge and returns the user's manifest of active variants. First-time or unmatched visitors resolve to the control variant.
3.  **Rewrite with Variant Param:** The Edge SDK appends the resolved variant parameter (for example, a\_0,b\_1) to the request using Personalize.VARIANT\_QUERY\_PARAM and passes it to the page handler.
4.  **Fetch Content (CDA/CPA):** The handler decodes the parameter into variant aliases (for example, cs\_personalize\_a\_0) and calls the Content Delivery API (CDA) with the x-cs-variant-uid header for published content, or the Content Preview API (CPA) for draft variants on staging. The CDA returns a single entry with the matching variant overrides applied over the base content.
5.  **Deliver and Track:** Launch renders and delivers the personalized page in the first HTML response, avoiding client-side flicker. The application records an impression for each active experience using triggerImpression and fires conversion events using triggerEvent, while the JS Tag keeps streaming behavior to Lytics to refresh audiences for the next request.
6.  **Content Change Webhook:** Contentstack Automate listens for publish and unpublish events on entries and variants in the CMS.
7.  **Cache Invalidation:** When a variant is published or unpublished, Automate triggers cache invalidation in Launch so the next request for that entry reflects the update across all affected variants.

This architecture inherits the build and deploy flow from the Simple Website pattern. Pushing code to Git triggers a Launch build, and the Edge Function ships as part of that build.

## Architecture Components

The architecture is composed of six layers that work together to manage content, code, infrastructure, data, decisioning, and automation. Each layer plays a specific role in delivering a personalized and scalable digital experience.

1.  ### Content Layer (Contentstack CMS)

    The Contentstack CMS stores base content and its variant overrides, and delivers the merged result via the Delivery API.

    -   **Entry Variants:** Each variant stores only the fields that differ from the base entry. Unchanged fields are inherited, which avoids content duplication.
    -   **Composite Delivery:** Given the requested variant aliases via the x-cs-variant-uid header, the CDA applies the matching overrides onto the base entry and returns one merged entry. The applied variants appear under publish\_details.variants. A visitor in multiple experiences receives a single combined response.
    -   **API Access:** Use a Delivery Token to fetch published base content and variants via the CDA, and draft variants via the CPA on development or staging.
2.  ### Code Layer (Git)

    The application layer contains your frontend code and the personalization integration.

    -   **Source Control:** Store and manage application code, the Personalize Edge SDK integration, and the Lytics JS Tag in a Git provider such as GitHub, GitLab, or Bitbucket.
    -   **Environment Configuration:** Use environment variables for the Personalize Project UID, the Lytics access token, and the CDA/CPA endpoints, switching values per deployment environment.
3.  ### Infrastructure Layer (Contentstack Launch)

    Contentstack Launch is the runtime hub. Every request passes through it, and it is where the personalization decision is resolved.

    -   **Build Automation:** Builds the application on every push to a connected Git branch. The Edge Function and Personalize Edge SDK ship as part of that build.
    -   **Edge Function Decisioning:** Intercepts each request, reads the audience cookie, calls the Personalize Edge API, and rewrites the request with the variant parameter, server-side, before the browser receives anything.
    -   **Global Delivery:** Deploys to edge locations and supports SSR, SSG, and ISR, with no origin round-trip for the decisioning step.
4.  ### Decisioning Layer (Contentstack Personalize)

    Contentstack Personalize is the edge decision engine. It determines which variant each visitor sees before the page reaches the browser.

    -   **Audience Import:** Lytics audiences sync into the Personalize Audience module. The resulting experiences, audiences, and rules are stored at the edge.
    -   **Edge API Evaluation:** Returns the user manifest of active variants. Segmented experiences match the visitor's audiences. A/B experiences assign a consistent variant per visitor, keyed on the stable Personalize user ID, with no stored assignment state.
    -   **Variant Aliases:** The Edge SDK converts the manifest into variant aliases (for example, cs\_personalize\_a\_0) for the Delivery API.
    -   **Safe Fallback:** Unknown, unmatched, or first-time visitors always receive the control variant, so every request renders a valid experience.
5.  ### Data Layer (Lytics)

    Lytics is the behavioral data foundation that turns interactions into audiences Personalize can act on.

    -   **Behavioral Tracking:** The JS Tag sends page views, clicks, and custom events to Lytics for both known and anonymous visitors.
    -   **Identity and Profiles:** Lytics merges signals into unified profiles. Durable identifiers such as a login or email extend recognition across sessions and devices. Anonymous, cookie-only visitors reset if they clear cookies.
    -   **Audience Delivery:** When a visitor qualifies for an audience, Lytics writes the membership to a browser cookie that travels with every request. This is the runtime handoff between Lytics and Personalize.
6.  ### Automation Layer (Contentstack Automate)

    Contentstack Automate ensures content updates, including variants, are reflected in the delivered experience.

    -   **Event-Based Triggers:** Listens to CMS events such as publish and unpublish actions.
    -   **Cache Invalidation:** Triggers cache invalidation in Launch so updated base content and variants are served promptly.

## Step-by-Step Implementation Flow

To set up and deploy your personalized website, follow these steps:

1.  **Connect Source Code to Launch:** Create a project in Contentstack Launch and connect your Git repository.
2.  **Branch Mapping:** Map your main branch to the production environment and development or staging branches to a staging environment.
3.  **Build Configuration:** Select your framework from the list, or define the build command (for example, npm run build) and output directory as needed.
4.  **Enable Lytics and Install the JS Tag:** Enable Lytics, add the JS Tag to your frontend, and turn on profile sync to Personalize. Verify in the Lytics admin that events are flowing and audiences are being computed.
5.  **Build Audiences and Link to Personalize:** Define your audience segments in Lytics. Once linked, they appear in the Personalize Audience module and can be used to target variants.
6.  **Configure Personalize Experiences:** Create segmented and/or A/B experiences, assign a Lytics audience to each variant, and set the control variant for the fallback path.
7.  **Create Entry Variants in the CMS:** For each experience variant, override only the fields that differ from the base entry. Unchanged fields are inherited automatically.
8.  **Add the Edge Function in Launch:** Initialize the SDK with Personalize.init(projectUid) in your edge middleware, resolve the variant parameter using getVariantAliases(), and call addStateToResponse(response) to persist user state as a set-cookie header for subsequent requests.
9.  **Fetch Personalized Content and Track Engagement:** In your page handler, read the variant parameter, convert it to aliases, and pass them to the Delivery SDK when fetching entries. Call triggerImpression(experienceShortUid) after rendering each active experience, and triggerEvent(eventKey) on conversions.
10.  **Automate Cache Invalidation:** Configure Contentstack Automate to listen for Publish and Unpublish events on variant-enabled content types and trigger cache invalidation in Launch. For more details, see Automate Connector Launch.
11.  **Deployment and Validation:** Push code changes to your Git repository to trigger a new build and deployment in Contentstack Launch.
12.  **Code Deployment:** Launch detects the change, builds the application, and deploys it to the configured environment.
13.  **Decision Validation:** Verify that different audiences receive the correct variants and that unknown visitors receive the control variant.
14.  **Content Validation:** Publish content and confirm that Automate-triggered cache invalidation serves the updated base content and variants.

## Key Benefits for Developers

-   **Fully Within Contentstack:** Hosting, edge execution, decisioning, behavioral data, content delivery, and cache invalidation all run inside the platform, with no third-party infrastructure to configure or maintain.
-   **Personalized HTML in the First Response:** Variant resolution runs server-side in the Launch Edge Function, so the personalized page ships in the initial HTML with no layout shift or client-side flicker.
-   **Full-Journey Audiences:** Personalization is driven by real-time Lytics profiles for both known and anonymous visitors, supporting same-page, first-visit personalization rather than only current-session attributes.
-   **Content Managed Without Code Changes:** Once experiences and variants are configured, content managers create and update variant content directly in the CMS. Launching a new segment or editing copy needs no deployment.
-   **Consistent A/B Assignment Without a Database:** A/B variant assignment is keyed on the stable Personalize user ID, so the same visitor sees the same variant across sessions with no assignment state to store.
-   **Updates Reach Visitors Automatically:** Automate-triggered cache invalidation means a publish or unpublish action is reflected on the live site without a manual purge or redeploy, across all affected variants.
-   **Event-Based Pricing:** Personalize cost tracks the number of Lytics events collected, not the number of experiences or variants delivered.
-   **Atomic Deployments:** Each Launch deployment is independent, allowing safe rollbacks if a change affects personalization behavior.
