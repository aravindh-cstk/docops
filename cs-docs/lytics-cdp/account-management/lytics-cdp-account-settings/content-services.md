---
title: "Content Services"
description: "Configuration options for Lytics' suite of content services."
url: /lytics/content-services
uid: blt3767e2811204540a
---

# Content Services

## Content Services

Configuration options for Lytics' suite of content services.

The following configuration options are available within the account settings [Content](https://app.lytics.com/vault/settings/content) section.

## Extract allowed topics

|  |
| --- |
| ![6807b90-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9e9ff9c87e3a80d6/04a4fbec83343876445e512e/6807b90-image.png) |
| Enable extraction of allowed content topics from the body of the document. |

## Content topic blocklist

|  |
| --- |
| ![fc9e353-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaeffa809782fe3d2/6945e0a418ba6b40e1b4b59d/fc9e353-image.png) |
| A list of topics to be hidden from the overall content taxonomy. For example, a dinner restaurant may not care about topics related to breakfast and thus block them so as not to clutter affinities, as pictured above. |

## Content topic allowlist

|  |
| --- |
| ![9035767-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am138a255767861ea5/b115b4f6045996c1d533309e/9035767-image.png) |
| A list of topics that must be included in the topic graph and candidates for content affinity. For example, building on the previous scenario, the same dinner restaurant may want to ensure that topics they care about are absolutely present. |

## Content Allowed Query Parameters

|  |
| --- |
| ![3ee3352-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd0c46915cb0ffda9/f567a49b40556620088b1bc4/3ee3352-image.png) |
| A list of query parameters that should be retained during URL normalization such as page id or product sku. |

## Content domains blocklist

|  |
| --- |
| ![ec9bac9-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4533a2e4be52af2e/133347f0bcee4ba76c3ec372/ec9bac9-image.png) |
| Domains that should not be classified even though there may be events collected from them. Note: to properly filter an exact match against the domain is required such as "example.com" or "sub.example.com" |

## Content blocked pages

|  |
| --- |
| ![11e453f-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1961fb3cdc3b6a9d/5500fb05ff4a42adb72b1ab2/11e453f-image.png) |
| Block any URL with an exact match to an item in this list (including the domain, not including the protocol. i.e. www.example.com/404.html, not https://www.example.com/404.html) |

## Content paths blocklist

|  |
| --- |
| ![8f0c498-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1da070dce9f43353/7896eacd5020413c6d35774f/8f0c498-image.png) |
| Prevent classification of any page with a substring match of the path. For instance, /contact would prevent classification for any URL that contains /contact anywher in the URL. |

## Content boosted attributes

|  |
| --- |
| ![6057f67-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am69bf49a393701cb3/4c418ff40c350cee9fdacca4/6057f67-image.png) |
| Content list of IDs/classes to boost during body extraction. |

## Content created since date

|  |
| --- |
| ![909d507-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd7a996d217f5b358/fe3ebe663d2052330da35daf/909d507-image.png) |
| Only include content in the index if the created date is after the specified date. |

## Custom content properties delimiter

|  |
| --- |
| ![a303d64-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfcc9191c9201eeb1/f7e36784e8f99c20b9eb4758/a303d64-image.png) |
| The delimiter to use when parsing custom content topics on HTML meta tags. |

## Content custom properties

|  |
| --- |
| ![4c435fc-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3a2711ae3a85ebdb/0e47cb73612ad6502f4700bd/4c435fc-image.png) |
| List of meta tags to include as custom topics. |

## Observe robots.txt in content enrichment

{\`

|  |
| --- |
| 
![b8ed295-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf2ebd867a6d4372f/c5d05a01f47088288354705c/b8ed295-image.png)

 |
| 

Observe robots.txt and meta directives:

-   robotstxt - Observe only robots.txt directives.
-   meta - Observe only directives in meta tags.
-   none - Do not observe any directives

 |

\`}

## Content since date

|  |
| --- |
| ![68c1c84-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am575b0bd7d595496e/3e4c5def269e2c7ff14b713f/68c1c84-image.png) |
| Only include content in the index if the enriched date is after the specified date. |

## Content domains allowlist

|  |
| --- |
| ![627a754-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am63115c00041e1c97/b9dade22d0100b23a99c14f4/627a754-image.png) |
| Perform content filtering based on exact matches of domains in a URL. Any entries should include relevant subdomains. |

## Content paths allowlist

|  |
| --- |
| ![117fba5-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am86578254ae292c11/abfb14eb3302ea514f4ee16f/117fba5-image.png) |
| Perform content filtering based on partial matches of any URL component. |

## Supported Content Languages

|  |
| --- |
| ![037ace9-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amec5ea3fdc77c5b47/be094cfa3efbd8d8316f9fc7/037ace9-image.png) |
| List of languages to permit during the content enrichment process. If empty, then only English content will be processed. |
