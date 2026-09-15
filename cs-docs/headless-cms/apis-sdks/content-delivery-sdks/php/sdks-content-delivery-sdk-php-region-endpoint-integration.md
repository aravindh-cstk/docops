---
title: "PHP CDA - Configure Region Endpoints in PHP Content Delivery SDK"
description: "Configure region endpoints in the Contentstack PHP Content Delivery SDK. A PHP developer guide to connecting to the correct region without hardcoding URLs."
url: /developers/sdks/content-delivery-sdk/php/region-endpoint-integration
uid: blt21de7d3b0610196c
---

# PHP CDA - Configure Region Endpoints in PHP Content Delivery SDK

## Configure Region Endpoints in PHP Content Delivery SDK

## Overview

Contentstack services are available across multiple regions with different endpoint URLs. Hardcoding these URLs requires code changes as regions and services evolve. The PHP Content Delivery SDK resolves the correct endpoint dynamically from the canonical regions registry, allowing the same initialization code to work across supported regions without hardcoded strings. The SDK reads this registry from a locally cached copy, not a live lookup on every call. See [Registry Loading](#registry-loading) for how that cache loads, refreshes, and when you need to update it after Contentstack infrastructure changes.

Use this feature when:

-   Your application supports multiple regions or cloud-specific regions
-   You want to pick up newly added regions and services without a code change or SDK upgrade

Region resolution is optional when:

-   Your application only connects to one Contentstack region.
-   You hardcode the endpoint.

Even then, using region resolution instead of a hardcoded string lets you change regions later without editing application code.

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Configure the SDK for a region | [Configure with setHost()](#configure-with-sethost) | $stack->setHost(Endpoint::getContentstackEndpoint(...)) |
| Resolve an endpoint manually | [Resolve an Endpoint](#resolve-an-endpoint) | Endpoint::getContentstackEndpoint($region, 'contentDelivery', true) |
| Use a region alias | [Use Region Aliases](#use-region-aliases) | Endpoint::getContentstackEndpoint('azure\_na', ...) |
| Get all endpoints for a region | [Get All Endpoints](#get-all-endpoints) | Endpoint::getContentstackEndpoint($region) |
| Read region from environment variable | [Read from Environment Variable](#read-from-environment-variable) | getenv('CONTENTSTACK\_REGION') ?: 'na' |
| Look up supported region IDs and aliases | [Supported Regions](#supported-regions) | na, eu, au, azure-na, azure-eu, gcp-na, gcp-eu |
| Look up supported service keys | [Supported Service Keys](#supported-service-keys) | contentDelivery, contentManagement |
| Diagnose a resolution error | [Troubleshooting](#troubleshooting) | InvalidArgumentException |
| Review registry loading and caching internals | [Registry Loading](#registry-loading) | Endpoint::$regionsData |

---

## Prerequisites

**Mandatory:**

-   PHP Content Delivery API (CDA) SDK installed, version 2.5.0 or later (the version that introduced Endpoint::getContentstackEndpoint()): [PHP CDA SDK Setup Guide](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/php/reference)
-   A Contentstack account with at least one stack

**Optional:**

-   Familiarity with Contentstack regions: [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks). Your stack's region is set when the stack is created and is visible under Organization Settings → Stacks in the Contentstack dashboard.

---

## Configure with setHost()

On the first call, the SDK loads regions.json from disk or downloads it from the content delivery network (CDN) if it isn't already available, then caches the parsed registry in memory. Subsequent calls resolve endpoints from the in-memory cache without additional disk or network I/O.

Resolve the endpoint and wire it into the stack using setHost(). Most applications should use the default overload, which returns a full HTTPS URL. Use $omitHttps = true only when an API specifically expects a hostname without the scheme (such as setHost()), since the SDK adds https:// internally and a full URL would double it. The connection is always HTTPS.

```
use Contentstack\Contentstack;
use Contentstack\Utils\Endpoint;

// Resolve the host for the chosen region
$host = Endpoint::getContentstackEndpoint(
    '<CONTENTSTACK_REGION>',
    'contentDelivery',
    true
);
// → "eu-cdn.contentstack.com" (for region 'eu')

$stack = Contentstack::Stack(
    '<API_KEY>',
    '<DELIVERY_TOKEN>',
    '<ENVIRONMENT>'
);

$stack->setHost($host);

try {
    $entries = $stack
        ->ContentType('blog')
        ->Query()
        ->toJSON()
        ->find();
} catch (\Exception $e) {
    // Handle network or API errors
    error_log($e->getMessage());
}
```

---

## Resolve an Endpoint

Use Endpoint::getContentstackEndpoint() to resolve a service URL directly when you need the host string without initializing a full stack.

```
use Contentstack\Utils\Endpoint;

// Content Delivery API (CDA) — with https://
$url = Endpoint::getContentstackEndpoint('eu', 'contentDelivery');
// → "https://eu-cdn.contentstack.com"

// Content Delivery API — without https:// (for setHost())
$host = Endpoint::getContentstackEndpoint('eu', 'contentDelivery', true);
// → "eu-cdn.contentstack.com"

// Content Management API (CMA)
$cmaUrl = Endpoint::getContentstackEndpoint('eu', 'contentManagement');
// → "https://eu-api.contentstack.com"
```

---

## Use Region Aliases

Aliases normalize to the canonical region ID. For the full alias list, see [Region Resolution Rules](#region-resolution-rules).

```
use Contentstack\Utils\Endpoint;

// 'us' resolves to 'na'
$url = Endpoint::getContentstackEndpoint('us', 'contentDelivery');
// → "https://cdn.contentstack.io"

// 'azure_na' resolves to 'azure-na'
$url = Endpoint::getContentstackEndpoint('azure_na', 'contentDelivery');
// → "https://azure-na-cdn.contentstack.com"

// Case-insensitive — 'EU' resolves to 'eu'
$url = Endpoint::getContentstackEndpoint('EU', 'contentDelivery');
// → "https://eu-cdn.contentstack.com"
```

---

## Get All Endpoints

Use this method when you need more than one service endpoint for the same region.

When $service is omitted, the method returns an associative array of all endpoints for the region.

```
use Contentstack\Utils\Endpoint;

$endpoints = Endpoint::getContentstackEndpoint('<CONTENTSTACK_REGION>');
// → ['contentDelivery' => 'https://...', 'contentManagement' => 'https://...', ...]

foreach ($endpoints as $service => $url) {
    echo "$service => $url\n";
}
```

---

## Read from Environment Variable

```
use Contentstack\Contentstack;
use Contentstack\Utils\Endpoint;

$region = getenv('CONTENTSTACK_REGION') ?: 'na';

$stack = Contentstack::Stack(
    getenv('CONTENTSTACK_API_KEY'),
    getenv('CONTENTSTACK_DELIVERY_TOKEN'),
    getenv('CONTENTSTACK_ENVIRONMENT')
);

$stack->setHost(Endpoint::getContentstackEndpoint($region, 'contentDelivery', true));

try {
    $entries = $stack
        ->ContentType('blog')
        ->Query()
        ->toJSON()
        ->find();
} catch (\Exception $e) {
    // Handle network or API errors
    error_log($e->getMessage());
}
```

---

## How the Regions Registry Works

All service endpoint information is maintained in the Regions Registry.

**Registry URL:**

```
https://artifacts.contentstack.com/regions.json
```

**Example (abbreviated):**

```
{
  "regions": [
    {
      "id": "na",
      "alias": ["us", "aws-na"],
      "isDefault": true,
      "endpoints": {
        "contentDelivery": "https://cdn.contentstack.io",
        "contentManagement": "https://api.contentstack.io"
      }
    }
  ]
}
```

The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative source. The example above is abbreviated. The live registry contains multiple service keys per region.

---

## Region Resolution Rules

Region matching:

-   Ignores case
-   Trims whitespace
-   Supports aliases
-   Supports both dash (\-) and underscore (\_) variants where defined

For example, aws-na, AWS\_NA, and us all resolve to the na region. See [Supported Regions](#supported-regions) for the complete list.

Only dash (\-) and underscore (\_) are recognized as separators. A region string using any other separator (a space, a dot, or a slash, for example "aws na") does not match any known region or alias and falls into the "Invalid region" error below. Dash and underscore variants (aws-na and aws\_na) resolve identically only because both forms are listed as separate alias entries in the regions registry, not because the SDK normalizes separators at runtime.

### Supported Regions

| Region ID | Cloud | Location | Default | Aliases |
| --- | --- | --- | --- | --- |
| na | AWS | North America | Yes | us, aws-na, aws\_na |
| eu | AWS | Europe | No | aws-eu, aws\_eu |
| au | AWS | Australia | No | aws-au, aws\_au |
| azure-na | Azure | North America | No | azure\_na |
| azure-eu | Azure | Europe | No | azure\_eu |
| gcp-na | GCP | North America | No | gcp\_na |
| gcp-eu | GCP | Europe | No | gcp\_eu |

The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative list of region identifiers and aliases.

If no region is found, the SDK throws InvalidArgumentException:

```
Invalid region: <input>
```

---

## Service Resolution Rules

The SDK:

1.  Locates the resolved region.
2.  Locates the service key within the region endpoints.
3.  Returns the endpoint URL.

**Example:**

```
$url = Endpoint::getContentstackEndpoint('eu', 'contentDelivery');
// → https://eu-cdn.contentstack.com
```

If the service key is not available for the resolved region, the SDK throws InvalidArgumentException:

```
Service "<service>" not found for region "<region>"
```

Passing '' as the service returns all endpoints for the region, identical to omitting the argument. This is expected behavior, not an error. Passing an explicit null is rejected by PHP's own type system with a TypeError, since $service is a non-nullable string parameter.

---

## Supported Service Keys

-   contentDelivery
-   contentManagement
-   graphqlDelivery
-   graphqlPreview
-   preview
-   auth
-   application
-   images
-   assets
-   automate
-   launch
-   developerHub
-   brandKit
-   genAI
-   personalizeManagement
-   personalizeEdge
-   composableStudio
-   assetManagement

**Note:** assetManagement is available for NA only. The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative list.

This SDK does not expose these values as an enum or typed constants for services (region identifiers do have a ContentstackRegion constants class), so copy them exactly.

---

## Registry Loading

The SDK loads the registry in the following priority order:

| Priority | Source | Behavior |
| --- | --- | --- |
| 1 | In-memory cache | Set on the first call, persists for the PHP process lifetime. Zero I/O on subsequent calls. |
| 2 | Local file (assets/regions.json) | Downloaded at install time via Composer |
| 3 | Live download | Fallback when the local file is absent |

The SDK caches the parsed registry in a static property after it loads the registry once. Subsequent calls within the same PHP process return from memory with zero I/O. This cache lives for the lifetime of the PHP process and does not expire or refresh on its own.

Concurrency is not a meaningful concern for this cache. PHP's default request-handling model (PHP-FPM, CLI) runs each request in its own process, so requests share no state that could race. This changes only under a persistent-worker SAPI (such as Swoole or RoadRunner), which this SDK's caching code does not account for.

The live download has these network characteristics:

-   **Timeout:** 30 seconds, via cURL's CURLOPT\_TIMEOUT when cURL is available, or a stream context timeout otherwise.
-   **Proxy support:**
    -   The cURL path honors http\_proxy/https\_proxy environment variables automatically.
    -   The file\_get\_contents() fallback does not, since PHP streams require an explicit proxy context option that this SDK does not set.
-   **Firewall:** Allow outbound access to artifacts.contentstack.com.

**Composer Workflow**

When you run composer install or composer update, the SDK downloads the latest regions.json to disk automatically.

To manually refresh the registry, run:

```
composer refresh-regions
```

This command downloads the latest regions.json from the registry and replaces the existing local copy on disk. It does not update the in-memory cache of any already-running process. Restart the running process to load the newly added regions or services.

---

## Caching

See [Registry Loading](#registry-loading) for how the SDK caches the regions registry in memory, how you refresh it manually, and how concurrency works across PHP's execution models.

---

## Troubleshooting

### Empty region

**Symptom**

```
InvalidArgumentException: Empty region provided. Please put valid region.
```

**Root cause:** A null or blank string was passed as $region.

**Resolution:** Pass a non-empty region string. See [Supported Regions](#supported-regions) for valid identifiers.

---

### Invalid region

**Symptom**

```
InvalidArgumentException: Invalid region: <value>
```

**Root cause:** The region string does not match any canonical ID or alias. This is typically caused by a typo or an unsupported region name.

**Resolution:** Check the [Supported Regions](#supported-regions) table for valid identifiers and aliases.

---

### Service not found

**Symptom**

```
InvalidArgumentException: Service "<key>" not found for region "<id>"
```

**Root cause:** The service key does not exist for the resolved region. Some keys (such as assetManagement) are available for NA only.

**Resolution:** Verify the service key against [Supported Service Keys](#supported-service-keys). The assetManagement key is available for NA only. All other keys listed in [Supported Service Keys](#supported-service-keys) are available for all regions.

---

### Null service argument

**Symptom**

```
TypeError: Contentstack\Utils\Endpoint::getContentstackEndpoint(): Argument #2 ($service) must be of type string, null given
```

**Root cause:** $service is declared as a non-nullable string parameter. PHP raises this TypeError before the SDK's own code runs. Passing '' (an empty string) is different and does not error. It returns all endpoints for the region, the same as omitting the argument.

**Resolution:** Pass a specific service key from [Supported Service Keys](#supported-service-keys), or pass '' (or omit the argument) to get all endpoints.

---

### Registry unavailable

**Symptom**

```
RuntimeException: contentstack/utils: regions.json not found and could not be downloaded.
```

**Root cause:** The local assets/regions.json file is absent and the network download also failed.

**Resolution:** Run composer install or composer refresh-regions after restoring network connectivity to artifacts.contentstack.com.

---

### Newly added region or service not recognized

**Symptom**

```
InvalidArgumentException: Invalid region: <value>
```

or

```
InvalidArgumentException: Service "<key>" not found for region "<id>"
```

for a region or service you know Contentstack added recently.

**Root cause:** The local regions.json file predates the new region or service. The SDK resolves against whatever copy of the registry it already loaded into memory for this process, not a live lookup.

**Resolution:** Run composer refresh-regions (or composer install or composer update) to download the latest regions.json. This updates only the file on disk. Restart the running process so it loads the refreshed registry into memory. See [Registry Loading](#registry-loading) for the full refresh procedure.
