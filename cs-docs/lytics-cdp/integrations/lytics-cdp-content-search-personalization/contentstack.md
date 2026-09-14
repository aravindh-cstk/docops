---
title: "Contentstack"
description: "Contentstack is a composable foundation for driving best-in-class personalized experiences. Contentstack provides an API-first CMS platform to drive the…"
url: /lytics/contentstack
---

# Contentstack

## Contentstack

[Contentstack](https://www.contentstack.com/) is a composable foundation for driving best-in-class personalized experiences. Contentstack provides an API-first CMS platform to drive the delivery of the best content to everywhere it needs to be.

Integrating Contentstack and Lytics allows you to connect content from your CMS to:

-   Power and customize Lytics [Context Layers](/docs/lytics/content-affinity-engine) based on your Contenstack taxonomy. This connection helps to drive affinity calculations and power personalized content or product recommendations that combine user activity data and metadata from your Contentstack [Stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack).
-   Leverage Lytics profiles to power real-time experiences in Lytics profile fields as Personalize attributes in Contentstack [Personalize](https://www.contentstack.com/docs/personalize). Profile schema and fields are synced automatically to Contentstack's [Personalize Edge API](https://www.contentstack.com/docs/developers/apis/personalize-edge-api#set-and-update-user-attributes).

## Authorization

If you haven't already done so, you'll need to set up a Contentstack account before you begin the process described below.

Once created, you'll add new Authorizations in Lytics for Contentstack by navigating to "Account > Authorizations > Create New" and select Contentstack as the provider.

![b60ab3a0b7bd18ec67d5c2a82bf75c1d086c25ed7060722cad25f8182c8c7d58-Screenshot_2024-12-10_at_2.48.06_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6a49756a8cc10f32/e3b31056e00892baa9d1bf0b/b60ab3a0b7bd18ec67d5c2a82bf75c1d086c25ed7060722cad25f8182c8c7d58-Screenshot_2024-12-10_at_2.48.06_PM.png)

### Contentstack API Key

Syncing your entry metadata to Lytics requires a Contentstack API Key for your desired stack Stack.

1.  Select "Stack API Key".

![64a8352aefb82cdd472bdfe2a8b4a665866aca0b1d15963eaf83673dc2ccca3f-Screenshot_2025-05-09_at_11.56.27_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7ac81dee96e1d57d/a7c22c951a0d3f51f752300a/64a8352aefb82cdd472bdfe2a8b4a665866aca0b1d15963eaf83673dc2ccca3f-Screenshot_2025-05-09_at_11.56.27_AM.png)

1.  Add your Contentstack Region, [Stack API Key, Delivery Token and Management Token](https://www.contentstack.com/docs/developers/create-tokens/overview-of-tokens).

![388cd1bbe59a2dd8ee7a4896206cb80059aae51b16e98082ff89e4ce61fb1961-Screenshot_2025-05-09_at_11.54.10_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc21ec8a43f3ade15/6e37734f6bbfb20175a40a91/388cd1bbe59a2dd8ee7a4896206cb80059aae51b16e98082ff89e4ce61fb1961-Screenshot_2025-05-09_at_11.54.10_AM.png)

1.  Click "Complete".

### Contentstack Authtoken

Syncing profiles to Contentstack Personalize requires you to first generate an [authtoken](https://www.contentstack.com/docs/developers/create-tokens/types-of-tokens#authentication-tokens-authtokens) from Contentstack. Then, you'll add that authtoken as a new Lytics authorization.

1.  Select Contentstack Authtoken.

![025ca6e02b7ae7094f47a3940bef451f6e990faf6d3b1a471d4f1e914937a46d-Screenshot_2025-05-09_at_11.57.50_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame00ecfbf83af5ad2/0ce3498c711c3665500eb8ae/025ca6e02b7ae7094f47a3940bef451f6e990faf6d3b1a471d4f1e914937a46d-Screenshot_2025-05-09_at_11.57.50_AM.png)

1.  Add your authtoken and the region of your Personalize Project.

![a26197ab8d232d6030e2dc21c9f103e647bb59023cf23bdd72553ee506db8449-Screenshot_2025-05-09_at_11.54.52_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb76f9f041fd05571/d64f0d103c01e85026001b57/a26197ab8d232d6030e2dc21c9f103e647bb59023cf23bdd72553ee506db8449-Screenshot_2025-05-09_at_11.54.52_AM.png)

1.  Click "Complete".

## Contentstack Entry Import

Once you've created an Authorization for Contentstack, you'll start a Contentstack "Import Entries" job in Lytics to sync your entries and taxonomy with your Lytics [Content Graph](/docs/lytics/content-affinity-engine).

1.  Navigate to "Data Pipeline > Jobs > Create New" and select Contentstack as the provider.

![ca4f59b3abbac9515e61b6a55de71844d1f513a775e8e1d14a6f1eb7c954cb46-Screenshot_2025-05-09_at_12.00.50_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfb9d24049f043eb2/a807170412df0d78e2158b2f/ca4f59b3abbac9515e61b6a55de71844d1f513a775e8e1d14a6f1eb7c954cb46-Screenshot_2025-05-09_at_12.00.50_PM.png)

1.  Select the "Import Entries" job type and then select your content types to import (likely "article", "landing page", not "navigation", etc.). You can select multiple content types to import their entries.
2.  Select **Keep Updated** to continuously import the entries for selected content types.
3.  You can also provide the domain (optional) on which you are serving content and have the JavaScript Tag installed.

![cbc118d5b6593969687c4dd635659f7d69dcdf9bbee459c48c4dc8c8d4ba2679-Screenshot_2025-05-09_at_12.03.43_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am27a8f7e193994826/abe21822c54e22cb91d3eef2/cbc118d5b6593969687c4dd635659f7d69dcdf9bbee459c48c4dc8c8d4ba2679-Screenshot_2025-05-09_at_12.03.43_PM.png)

1.  Select the Taxonomies you'd like to import. Each taxonomy selected will create a new [Context Layer](/docs/lytics/engines) and calculate new scores on profiles for each value in that taxonomy.
2.  Click "Complete".

## Enable JavaScript Tag Plugin for Contentstack

**Note:** See "Manual Installation" below for details on how to manually configure all aspects to the website (tag) based sync with Contentstack.

Once you've imported your Contentstack entries into Lytics, you'll want to enable Lytics' JavaScript Tag to sync profile data with Contentstack's Personalize Edge API.

1.  Navigate to "Account > Settings > JavaScript Tag".
2.  Enter the [Base URL](https://www.contentstack.com/docs/developers/apis/personalize-edge-api#base-url) for the data center to which you want to send to Contentstack's Personalize Edge API, and your Personalize Project ID.

![79d345eb745faaa78bd66b857f8088f98323cfce02fcd07c134cbc6e8c598f5b-Screenshot_2025-04-22_at_3.15.45_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am726018848844a54c/ea789c84259208cc31b8bcde/79d345eb745faaa78bd66b857f8088f98323cfce02fcd07c134cbc6e8c598f5b-Screenshot_2025-04-22_at_3.15.45_PM.png)

1.  Click "Save".

Once connected, you'll be able to use any [Lytics Audience](/docs/lytics/audiences) as [Contentstack Audience](https://www.contentstack.com/docs/personalize/about-audiences) to help tailor content for different audiences, manage variants, and run A/B tests to enhance engagement and conversions.

## Sync Audience Definitions

Export Lytics audience defintions to create the personalize audience in Contentstack by starting the Sync Audience Defintions job.

1.  Navigate to "Data Pipeline > Jobs > Create New" and select Contentstack as the provider.
2.  Select the "Sync Audience Definitions" job type.

![1487ad1053cb97dd81233004e241c15ea311b31af0c687df4d139c266c7f6d02-Screenshot_2025-05-09_at_12.07.01_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am003df60cd7f078e8/f3963916d2b8a75ff6d25afb/1487ad1053cb97dd81233004e241c15ea311b31af0c687df4d139c266c7f6d02-Screenshot_2025-05-09_at_12.07.01_PM.png)

1.  Select the authorizations you would like to use.
2.  Select your Contentstack organization.
3.  Select the Personalize project where you would like to send the Lytics audience definitions.

![90af253e2a70e21899a506d5a8cb1b218e625c78554d240a1d071688fff93efa-Screenshot_2025-05-09_at_12.15.14_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am011087dcb16e17a1/12f2b1c93e7431896603c928/90af253e2a70e21899a506d5a8cb1b218e625c78554d240a1d071688fff93efa-Screenshot_2025-05-09_at_12.15.14_PM.png)

1.  Click "Complete".

## Manual Website (Jstag) Configuration

This following explains how to enable and use the Contentstack integrations available in JSTag3. There are two distinct plugins available: **Contentstack Sync** and **Contentstack Push**.

### Overview

#### Contentstack Sync vs Contentstack Push

**Contentstack Sync**

-   Synchronizes audience and flow membership data to Contentstack via cookies
-   Sets browser cookies (cs-lytics-audiences, cs-lytics-flows) that get passed to the edge on each request and leverages "Live Attributes" within Contentstack Personalize
-   **Recommended approach** due to better performance and lower latency
-   Real-time data availability on every subsequent page request

**Contentstack Push**

-   Pushes audience and flow data directly to the Contentstack Edge API
-   Makes HTTP requests to update user attributes on Contentstack's servers
-   Higher latency due to API calls

### Configuration

Both plugins are disabled by default and must be explicitly enabled in your JSTag configuration or via supported account settings.

#### Sync Configuration (full configuration options)

```
window.jstag.config({
  contentstack: {
    entitySync: {
      disabled: false, // Enable the sync plugin
      cookie: "cs-personalize-user-uid", // Main user ID cookie name
      segmentsCookie: "cs-lytics-audiences", // Cookie for audience data
      flowsCookie: "cs-lytics-flows", // Cookie for flow data
      stateCookiesMaxAge: 604800, // Cookie expiration (7 days in seconds)
      cookieDomain: null, // Cookie domain (null = current domain)
      poll: {
        disabled: true, // Disable automatic polling
        initialDelay: 4000, // Initial delay before first poll (ms)
        maxAttempts: 5, // Maximum polling attempts
      },
      cache: {
        disabled: false, // Enable session storage caching
        storage: sessionStorage, // Storage mechanism
        key: "contentstack_personalize", // Cache key name
      },
    },
  },
});
```

#### Push Configuration (full configuration options)

```
window.jstag.config({
  contentstack: {
    entityPush: {
      disabled: false, // Enable the push plugin
      baseUrl: "https://personalize-edge.contentstack.com", // Contentstack API endpoint
      personalizeProjectId: "your-project-id", // Your Contentstack project ID(s)
      audienceAttribute: "lytics_audiences", // Attribute name for audiences
      flowAttribute: "lytics_flows", // Attribute name for flows
      cookie: "cs-personalize-user-uid", // User ID cookie name
      cookieDomain: null, // Cookie domain
      poll: {
        disabled: true, // Disable automatic polling
        initialDelay: 4000, // Initial delay (ms)
        maxAttempts: 5, // Maximum attempts
      },
      cache: {
        disabled: false, // Enable caching
        storage: sessionStorage, // Storage type
        key: "contentstack_personalize", // Cache key
      },
    },
  },
});
```

### Usage Examples

#### Basic Sync Setup (Recommended)

```
// Minimal configuration for Contentstack Sync
window.jstag.config({
  contentstack: {
    entitySync: {
      disabled: false,
    },
  },
});
```

This will:

-   Set a user ID cookie (cs-personalize-user-uid) when entity data is loaded
-   Create audience cookies (cs-lytics-audiences) with pipe-delimited segment data
-   Create flow cookies (cs-lytics-flows) with pipe-delimited flow step data
-   Cookies expire after 7 days and are available on every page request

#### Basic Push Setup

```
// Minimal configuration for Contentstack Push
window.jstag.config({
  contentstack: {
    entityPush: {
      disabled: false,
      personalizeProjectId: "your-contentstack-project-id",
    },
  },
});
```

This will:

-   Send PATCH requests to Contentstack's Edge API when entity data loads
-   Include user ID in request headers
-   Send audience and flow data as JSON attributes

#### Advanced Configuration with Polling (Advanced use cases only)

```
// Enable automatic polling for real-time updates
window.jstag.config({
  contentstack: {
    entitySync: {
      disabled: false,
      cookieDomain: ".yourdomain.com", // Set cookies for entire domain
      poll: {
        disabled: false, // Enable polling
        initialDelay: 5000, // Wait 5 seconds before first poll
        maxAttempts: 10, // Poll up to 10 times
      },
    },
  },
});
```

#### Multiple Project IDs (Push only)

```
// Push to multiple Contentstack projects
window.jstag.config({
  contentstack: {
    entityPush: {
      disabled: false,
      personalizeProjectId: ["project-id-1", "project-id-2", "project-id-3"],
    },
  },
});
```

### How Data is Formatted

Both plugins format audience and flow data consistently:

#### Audience Data Format

-   **Input**: \["segment1", "segment2", "segment3"\]
-   **Output**: "|segment1|segment2|segment3|"

#### Flow Data Format

-   **Input**: {"flow1": "step2", "flow2": "step1"}
-   **Output**: "|step1|step2|"

The data is:

1.  Deduplicated (removes duplicates)
2.  Sorted alphabetically
3.  Wrapped in pipe delimiters for easy parsing



```
// Monitor polling status (both plugins)
window.jstag.on("contentstack.entitySync.pollStarted", function() {
  console.log("Polling started");
});

window.jstag.on("contentstack.entitySync.pollStopped", function() {
  console.log("Polling stopped");
});
```

### Troubleshooting

#### Common Issues

1.  **No cookies are set (Sync)**
    -   Verify disabled: false in configuration
    -   Check that entity data contains user ID and segments
    -   Ensure no ad blockers are preventing cookie setting
2.  **API requests failing (Push)**
    -   Verify personalizeProjectId is correct
    -   Check network tab for CORS or authentication errors
    -   Ensure Contentstack endpoint is accessible
3.  **Polling not working**
    -   Confirm poll.disabled: false in configuration
    -   Check that initial delay and max attempts are reasonable
    -   Verify entity loading is working properly

#### Debug Mode

```
// Enable debug logging
window.jstag.config({
  audit: {
    disabled: false, // This enables console logging for troubleshooting
  },
});
```

### Migration Notes

-   Both plugins require entity data to be available before they can function
-   The plugins automatically detect when entity data is loaded and trigger accordingly
-   No manual triggering is required - everything happens automatically after configuration
