---
title: "JavaScript Tag Config"
description: "Configuration options for the core JavaScript SDK."
url: /lytics/javascript-tag-config
---

# JavaScript Tag Config

## JavaScript Tag Config

Configuration options for the core JavaScript SDK.

The following configuration options are available within the account settings [JavaScript Tag](https://app.lytics.com/vault/settings/tag) section.

## Client Side Integrations

A set of client-side integrations is facilitated by the core Lytics SDK. Each of those integrations is either deployed or disabled based on a series of checkboxes under the "Client Side Integrations" section. Each of those options follows the pattern outlined below.

|  |
| --- |
| ![4591a8a-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amacc0fa194e312380/8db824c85be33966673fbbac/4591a8a-image.png) |
| Checking the box enables the integration and will result in either audience membership or attributes being passed to a partner if that particular integration's associated tags and configurations are also in place on the page. |

#### Client-side integrations you can turn on in account settings:

-   **Amazon DSP:** Allow Lytics to pass the current visitor's \_uid to Amazon DSP for improved identity resolution.
-   **Amazon DSP Confirmation Events:** If false, confirmation events will not be sent to the amazon\\\_dsp stream upon successful sync completion.
-   **Criteo:** Allow Lytics to pass the current visitor's \_uid to Criteo and receive a Criteo GUM ID for improved identity resolution.
-   **Google Ads Partner API:** Allow Lytics to use the Google Partner API to make Google Ads calls.
-   **Google Analytics 4 (GA4):** Allow Lytics to pass the current visitor's \_uid and audience membership to GA4.
-   **Google DV360:** Allow Lytics to pass the current visitor's \_uid to Google DV360 and receive a unique DV360 ID for improved identity resolution.
-   **Krux:** Allow Lytics to pass the current visitor's \\\_uid to Krux for improved identity resolution.
-   **Lotame:** Allow Lytics to pass the current visitor's \\\_uid to Lotame for improved identity resolution.
-   **Taboola:** Allow Lytics to pass the current visitor's \\\_uid to Taboola and receive a unique Taboola ID for improved identity resolution.
-   **The Trade Desk:** Allow Lytics to pass the current visitor's \\\_uid to The Trade Desk and receive a unique Trade Desk ID for improved identity resolution.
-   **Yahoo Ads:** Allow Lytics to pass the current visitor's \\\_uid to Yahoo and receive a unique Yahoo ID for improved identity resolution.

#### Client-side integrations enabled automatically:

In addition to those outlined above, many automatic client-side integrations are included within the Lytics core SDK. These integrations automatically sync enabled profile data with other tools if those tools have been configured on your site, too. For instance, Lytics will sync audience membership for the current visitor with Meta if the Meta pixel is also present on the page.

Available client-side integrations and their associated slugs:

| Name | Slug | Description |
| --- | --- | --- |
| Adroll | adroll | Adds a record named adroll\_segments to the user, which houses audience membership. |
| AddThis | add\\\_this | Adds the current audience membership to the \_\_attag cookie. |
| Amazon DSP | amazon | Adds the Amazon DSP pixel to the site. |
| Facebook Ads | facebook\\\_ads | Pushes Lytics audience membership as an array to the custom Lytics Audiences value for the user. |
| Google Analytics | google\\\_analytics\\\_dimensions | Pushes audience membership as a comma-separated string to a predefined custom dimension. It also emits a noninteraction event each time the sync occurs for a user. |
| Google DFP | google\\\_dfp | Sets audience membership to a targeting param with the name LyticsSegments. |
| Google Tag Manager | gtm | Collects the dataLayer object when the Lytics tag loads. It also passes audience membership to GTM as a push event. |
| Krux | krux | Adds the Krux pixel to the site. |
| Lotame | lotame | Adds the Lotame pixel to the site. |
| Optimizely | optimizely | Pushes a custom tag with the audience membership. |
| Pathfora | pathfora | Allows for the installation of Pathfora (Lytics Personalization SDK). |
| Qubit | qubit | Collects the universal\_variable object when the Lytics tag loads. |
| Lytics Audience Cookie | segments\\\_cookie | Stores current audience membership for the user as a cookie. |
| Taboola | taboola | Adds the Taboola pixel to the site. |
| Tealium | tealium | Collects the utag\_data object when the Lytics tag loads. |

##### Blocking automatic client-side integrations

To prevent these syncs, each integration can be blocked by adding the slug (as outlined in the table above) to the "Integrations Blocklist" as outlined below:

|  |
| --- |
| ![966472b-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama9c40cce54489bc2/a180bb86ea2319561db0ff11/966472b-image.png) |
| In this example, we have added the "google\\\_analytics\\\_dimensions" slug to the blocklist to prevent sending profile data to custom dimensions in Google Universal Analytics. |

## JavaScript Tag TTL (3.0)

|  |
| --- |
| ![693fbb3-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9a732f21a92b3fc0/ae32e262a846292c52e5bbe4/693fbb3-image.png) |
| The amount of time to cache the core JavaScript SDK in seconds. This should be used only during testing to ensure settings configured are reflected more often, but it may result in degraded performance for high-traffic production use. |

## Enable pageview event on first send (3.0)

|  |
| --- |
| ![5360623-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3e252a16ce9ad46a/55e1add84bac16fd685044f4/5360623-image.png) |
| Enables the automatic pageview event (\\\_e: pv) in the first send event of every page load in JStag v3. |

## Allow Pathfora

|  |
| --- |
| ![d4ed126-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd5f5c23a732db7a1/afb0cca7b9013f9f774faf3e/d4ed126-image.png) |
| Check this box to allow the Lytics JavaScript tag to automatically add the Pathfora personalization library to your site (default). Uncheck to disable any Pathfora-powered web-based personalization. |

## Allow Event Block

{\`

|  |
| --- |
| 
![388b42f-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am836d2db5869bc5ac/812c5bb16eeabaa088dbac9f/388b42f-image.png)

 |
| 

Check this box to allow the Lytics JavaScript tag to automatically add the Pathfora personalization library to your site (default). Uncheck to disable any Pathfora-powered web-based personalization.

**0**: Turns event block off.  
**1**: Turns event block on if there are one or more active Lytics Experiences.  
**2**: Turns event block on permanently at all times.

 |

\`}

## Global Stylesheet URL (CSS)

|  |
| --- |
| ![0d40d33-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am394e755bd5f81616/cc0a7cadb4d4903815f46c56/0d40d33-image.png) |
| This custom stylesheet will be loaded in support of Lytics-managed Experiences. |

## URL Allowlist for Orchestration (Experiences)

|  |
| --- |
| ![dc1548d-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7379fc181c74cfbc/82b90e8d2f4e88260701c32f/dc1548d-image.png) |
| List of strings that, if matched, will result in Experiences being evaluated in place of legacy campaign variations. |

## Personalization (Pathfora SDK) Generalized Config

|  |
| --- |
| ![75e83ea-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4f7c89c997ccb617/212a8e636b5c25c3b62031a6/75e83ea-image.png) |
| The hashed JSON configuration is to be loaded globally for all Lytics-managed experiences. |

## Custom Cookie Keys

|  |
| --- |
| ![1de6355-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame5aa130a2a840958/e86ef48be797159f8cd2de5a/1de6355-image.png) |
| A list of cookie names that should be automatically collected by the core Lytics SDK. |

## Custom Data Layer

|  |
| --- |
| ![1a19483-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am62257ef546d2bec7/21adee1864692228cb8e70a4/1a19483-image.png) |
| A list of JavaScript variables that should be automatically collected by the core Lytics SDK. |

## Disable Automatic Initial Pageview (2.0 - Deprecated)

|  |
| --- |
| ![c496e3a-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc79d7a53bb87aa66/dd4bfda5ccda084ed187d2d3/c496e3a-image.png) |
| Disable the automatic pageview event in the JStag v2 if pageview events are being sent manually. |

## Jstag2 Segment Cookie Duration (2.0 - Deprecated)

|  |
| --- |
| ![f0ed011-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama17b2c362fbe4adc/9b7830804c3c4a7ccb1a3e26/f0ed011-image.png) |
| The number of minutes the ly\\\_segs cookie that contains an individual's current audience memberships should persist. Defaults to 30 days if left blank. |
