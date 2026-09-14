---
title: "Personalization API"
description: "Configuration options for the Lytics personalization API and related features."
url: /lytics/personalization-api
---

# Personalization API

## Personalization API

Configuration options for the Lytics personalization API and related features.

The following configuration options are available within the account settings [Lytics API](https://app.lytics.com/vault/settings/api) section.

## Allow Public Personalization API?

|  |
| --- |
| ![38dcba0-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am197169426b3c76d2/d427abe5f903a47246ac2efe/38dcba0-image.png) |
| Check the box to allow the user profile of anonymous users to be exposed to users for personalization. It will only include allowed fields. |

## Allow Event Collection from Bots

|  |
| --- |
| ![8a587b2-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaae725ead7282bb3/6e3559c102d542178b0b90de/8a587b2-image.png) |
| Enable event collection for visitors who have been identified as bots. Bot identification is based on a set of match attributes evaluated against the user-agent header. |

## Collect entire user agent string?

|  |
| --- |
| ![a7792f5-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3324af9f25f55563/16ad6403abd61bd7356d6992/a7792f5-image.png) |
| Should the full user-agent be collected as part of all web events? |

## Allowlist domains public API

|  |
| --- |
| ![d36963c-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb90c3d44bc7469ec/354217addeefbba0720d125b/d36963c-image.png) |
| A list of domains to allow the Personalization API to be called from. If blank, all domains will be allowed. |

## Allowlist fields for public API

|  |
| --- |
| ![035b8f2-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame9c8cf7d5693d55b/5e25c035e716b79b2775e203/035b8f2-image.png) |
| List of fields to allow for surface via the Personalization API. |

## Entity Timeout (ms)

|  |
| --- |
| ![73e8ad5-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am05b0d0e218b81ae6/5bddf3143a34e28c011fae21/73e8ad5-image.png) |
| Max time entity-public API waits before cutting off and returning what it has. |
