---
title: "PHP Utils - Configure Region Endpoints in PHP Utils SDK"
description: "Configure region endpoints dynamically using the Contentstack PHP Utils SDK. A PHP developer guide to dynamic resolution without hardcoding URLs."
url: /developers/sdks/utils-sdk/php/region-endpoint-integration
uid: blt76e0ef41bc8e591e
---

# PHP Utils - Configure Region Endpoints in PHP Utils SDK

## Configure Region Endpoints in PHP Utils SDK

## Overview

Contentstack services are available across multiple regions with different endpoint URLs. Hardcoding these URLs requires code changes as regions and services evolve. The PHP Utils SDK resolves the correct endpoint dynamically from the canonical regions registry, allowing the same initialization code to work across supported regions without hardcoded strings.

Use this feature when:

-   Your application supports multiple regions or cloud-specific regions
-   You need to adopt newly added regions without a code change or SDK upgrade

Region resolution is optional if:

-   Your application only connects to one Contentstack region
-   You hardcode the endpoint

Even then, using it avoids duplicating endpoint URLs across your codebase and simplifies adding a region later.

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Resolve a single service URL | [Resolve a Single Service URL](#resolve-a-single-service-url) | Endpoint::getContentstackEndpoint($region, 'contentDelivery', true) |
| Resolve all endpoints as an array | [Resolve All Endpoints](#resolve-all-endpoints) | Endpoint::getContentstackEndpoint($region) |
| Strip https:// for host configuration | [Resolve a Single Service URL](#resolve-a-single-service-url) | Endpoint::getContentstackEndpoint($region, $service, true) (pass true as the third argument) |
| Read from environment variable | [Read from Environment Variable](#read-from-environment-variable) | getenv('CONTENTSTACK\_REGION') ?: 'na' |
| Look up supported region IDs and aliases | [Supported Regions](#supported-regions) | na, eu, au, azure-na, azure-eu, gcp-na, gcp-eu |
| Look up supported service keys | [Supported Service Keys](#supported-service-keys) | contentDelivery, contentManagement |
| Diagnose a resolution error | [Troubleshooting](#troubleshooting) | InvalidArgumentException |
| Review caching and registry internals | [Advanced: Registry Internals](#advanced-registry-internals) | Endpoint::$regionsData |

---

## Prerequisites

**Mandatory:**

-   contentstack-utils PHP package installed, version 1.3.0 or later (the version that introduced Endpoint::getContentstackEndpoint()). See [PHP Utils SDK Setup Guide](https://www.contentstack.com/docs/developers/sdks/utils-sdk/php/get-started-with-php-utils-library).
-   PHP project with Composer

**Optional:**

-   Familiarity with Contentstack regions: [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks)

---

## Resolve a Single Service URL

On the first call, the SDK loads regions.json from disk or downloads it from the content delivery network (CDN) if it isn't already available, then caches the parsed registry in memory. Subsequent calls resolve endpoints from the in-memory cache without additional disk or network I/O.

**Note:** The cache never auto-refreshes. Registry changes on the CDN require a process restart, or a manual Endpoint::resetCache() call (testing only), to take effect.

Resolve the host for a specific service and wire it into the Contentstack SDK using setHost(). Most applications should use the default overload, which returns a full HTTPS URL. Use $omitHttps = true only when an API specifically expects a hostname without the scheme (such as setHost()), since the SDK adds https:// internally and a full URL would double it. The connection is always HTTPS.

```
use Contentstack\Contentstack;
use Contentstack\Utils\Endpoint;

try {
    $host = Endpoint::getContentstackEndpoint(
        '<CONTENTSTACK_REGION>',
        'contentDelivery',
        true
    );
    // → "cdn.contentstack.io" (for region 'us')

    $stack = Contentstack::Stack(
        '<API_KEY>',
        '<DELIVERY_TOKEN>',
        '<ENVIRONMENT>'
    );

    $stack->setHost($host);

    $entries = $stack
        ->ContentType('blog')
        ->Query()
        ->toJSON()
        ->find();
} catch (\InvalidArgumentException $e) {
    // Bad region or service key �� check configuration
    error_log($e->getMessage());
} catch (\RuntimeException $e) {
    // Registry unavailable — run: composer install or composer refresh-regions
    error_log($e->getMessage());
}
```

---

## Resolve All Endpoints

Use this method when you need more than one service endpoint for the same region.

When $service is omitted, the method returns an associative array of all endpoints for the region.

```
use Contentstack\Utils\Endpoint;

try {
    $endpoints = Endpoint::getContentstackEndpoint('<CONTENTSTACK_REGION>');
    // → ['contentDelivery' => 'https://...', 'contentManagement' => 'https://...', ...]

    foreach ($endpoints as $service => $url) {
        echo "$service => $url\n";
    }
} catch (\InvalidArgumentException $e) {
    // Bad region — check configuration
    error_log($e->getMessage());
} catch (\RuntimeException $e) {
    // Registry unavailable — run: composer install or composer refresh-regions
    error_log($e->getMessage());
}
```

---

## Read from Environment Variable

```
use Contentstack\Contentstack;
use Contentstack\Utils\Endpoint;

try {
    $region = getenv('CONTENTSTACK_REGION') ?: 'na';

    $stack = Contentstack::Stack(
        getenv('CONTENTSTACK_API_KEY'),
        getenv('CONTENTSTACK_DELIVERY_TOKEN'),
        getenv('CONTENTSTACK_ENVIRONMENT')
    );

    $stack->setHost(Endpoint::getContentstackEndpoint($region, 'contentDelivery', true));
} catch (\InvalidArgumentException $e) {
    // Bad region or service key — check configuration
    error_log($e->getMessage());
} catch (\RuntimeException $e) {
    // Registry unavailable — run: composer install or composer refresh-regions
    error_log($e->getMessage());
}
```

---

## Endpoint Resolution API

### Method Signature

```
Endpoint::getContentstackEndpoint(
    string $region    = 'us',
    string $service   = '',
    bool   $omitHttps = false
): string|array
```

Also available as a proxy on the Utils class:

```
Utils::getContentstackEndpoint(
    string $region    = 'us',
    string $service   = '',
    bool   $omitHttps = false
): string|array
```

Both calls produce identical results.

### Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| $region | string | 'us' | Region identifier or alias. Case-insensitive. |
| $service | string | '' | Service key (for example, contentDelivery). When empty, all endpoints for the region are returned as an associative array. |
| $omitHttps | bool | false | When true, removes the https:// prefix from the returned URL. |

### Returns

-   **Single URL string** when $service is specified
-   **Associative array** of all service URLs when $service is omitted or passed as ''

Passing an explicit null for $service is rejected by PHP's own type system with a TypeError, since $service is a non-nullable string parameter. This is different from passing '', which is valid and returns all endpoints.

---

## Region Resolution Rules

Region matching:

-   Ignores case
-   Trims leading and trailing whitespace
-   Supports canonical IDs and aliases
-   Accepts both dash (\-) and underscore (\_) separators

For example, aws-na, AWS\_NA, and us all resolve to the na region. See [Supported Regions](#supported-regions) for the complete list.

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

Any of these values also match in any casing (for example, NA, AWS-NA, or Aws\_Na). The SDK lowercases the input before comparison, so casing is not a separate alias.

Only dash (\-) and underscore (\_) are recognized as separators. A region string using any other separator does not match any known region or alias and falls into the "Unknown region". Dash and underscore variants resolve identically only because both forms are listed as separate alias entries in the regions registry, not because the SDK normalizes separators at runtime.

The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative list of region identifiers and aliases.

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

This SDK does not expose these values as an enum or typed constants, so copy them exactly.

---

## Troubleshooting

### Empty region

**Symptom**

```
\InvalidArgumentException: Empty region provided. Please put valid region.
```

**Root cause:** A null or blank string was passed as $region.

**Resolution:** Pass a non-empty region string. See [Supported Regions](#supported-regions) for valid identifiers.

---

### Unknown region

**Symptom**

```
\InvalidArgumentException: Invalid region: <value>
```

**Root cause:** The region string does not match any canonical ID or alias in the registry. This is typically caused by a typo or an unsupported region name.

**Resolution:** Check the [Supported Regions](#supported-regions) table for valid identifiers and aliases.

---

### Unknown service key

**Symptom**

```
\InvalidArgumentException: Service "<key>" not found for region "<id>"
```

**Root cause:** The service key does not exist for the resolved region. Some keys (such as assetManagement) are available for NA only.

**Resolution:** Verify the service key against [Supported Service Keys](#supported-service-keys). For non-NA regions, check the region-specific constraints noted in that section.

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
\RuntimeException: contentstack/utils: regions.json not found and could not be downloaded.
```

**Root cause:** The local src/assets/regions.json file is absent and the network download also failed.

**Resolution:** Run composer install or composer refresh-regions after restoring network connectivity to artifacts.contentstack.com.

---

### Corrupt registry

**Symptom**

```
\RuntimeException: contentstack/utils: regions.json is corrupt.
```

**Root cause:** The local regions.json file is present but contains invalid JSON, typically from a truncated download.

**Resolution:** Run composer refresh-regions to replace the file with a fresh download.

---

### Stale registry after refresh

**Symptom**

```
Endpoint::getContentstackEndpoint() still returns URLs for the old region list, or rejects a region you just added, even after you ran `composer refresh-regions`.
```

**Root cause:** composer refresh-regions only rewrites regions.json on disk. An already-running PHP process (for example, a PHP-FPM worker) keeps using the copy it already loaded into Endpoint::$regionsData, an in-memory cache that persists for the process's entire lifetime. See [Advanced: Registry Internals](#advanced-registry-internals) for details on this caching behavior.

**Resolution:** Restart the PHP process, or otherwise reload the running application (for example, recycle PHP-FPM workers), so it loads the refreshed regions.json on its next call to getContentstackEndpoint(). New processes that start after you run composer refresh-regions pick up the updated registry automatically, without any further action.

---

### Write permission denied

**Symptom**

No exception is thrown from the write itself. PHP emits a warning, and the caller eventually sees the same generic error as "Registry unavailable":

```
\RuntimeException: contentstack/utils: regions.json not found and could not be downloaded.
```

**Root cause:** The process does not have write access to vendor/contentstack/utils/src/assets/. file\_put\_contents() fails silently (no return-value check, no try/catch), so loadRegions() re-checks file\_exists(), finds the file still absent, and throws the generic "not found and could not be downloaded" exception without mentioning permissions.

**Resolution:** Grant write permission to vendor/contentstack/utils/src/assets/, or pre-populate regions.json via your deployment pipeline before the application starts.

---

## Advanced: Registry Internals

This section covers registry loading, caching, and refresh internals. Skip it unless you're debugging a caching issue or automating registry refresh in a deployment pipeline.

The SDK loads the registry in the following priority order:

| Priority | Source | Behavior |
| --- | --- | --- |
| 1 | In-memory cache | Set on the first call, persists for the PHP process lifetime. Zero I/O on subsequent calls. |
| 2 | Local file (src/assets/regions.json) | Written at install time via Composer |
| 3 | Live download | Fallback when the local file is absent |

The live download has these network characteristics:

-   **Timeout:** 30 seconds, via cURL's CURLOPT\_TIMEOUT when cURL is available, or a stream context timeout otherwise.
-   **Proxy support:**
    -   The cURL path honors http\_proxy/https\_proxy environment variables automatically.
    -   The file\_get\_contents() fallback does not, since PHP streams require an explicit proxy context option that this SDK does not set.
-   **Firewall:** Allow outbound access to artifacts.contentstack.com.

Concurrency is not a meaningful concern for the in-memory cache. PHP's default request-handling model (PHP-FPM, CLI) runs each request in its own process, so there is no state shared between requests to race on. This changes only under a persistent-worker SAPI (such as Swoole or RoadRunner), which this SDK's caching code does not account for.

The Regions Registry file is stored locally at src/assets/regions.json and is managed automatically via Composer. When running composer install or composer update, the SDK downloads the latest regions.json via a post-install-cmd/post-update-cmd hook.

**Note:** These hooks fire only when this package is the root project (when developing the SDK directly). When the package is installed as a dependency, the registry is downloaded automatically on the first call to getContentstackEndpoint() via the runtime fallback described above.

To manually refresh the registry and pull the latest region and service definitions:

```
composer refresh-regions
```

This replaces the existing local copy of regions.json on disk. It does not affect any PHP process that is already running, since that process keeps using the copy it already loaded into Endpoint::$regionsData for the rest of its lifetime. Restart the PHP process, or call the test-only Endpoint::resetCache(), to make an already-running process use the refreshed data. A new process that starts after you run composer refresh-regions loads the updated file on its first call to getContentstackEndpoint() and sees the newly added regions and services immediately, without any code changes.

The SDK caches the parsed registry in a static class property (Endpoint::$regionsData), set on the first call and persisting for the entire PHP process lifetime, eliminating repeated disk reads and network requests after the initial load.

**Note:** Endpoint::resetCache() is for testing only. Do not call it in production code.
