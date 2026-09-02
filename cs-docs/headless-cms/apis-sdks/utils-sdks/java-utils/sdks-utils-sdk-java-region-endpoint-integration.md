---
title: "Java Utils - Configure Region Endpoints in Java Utils SDK"
description: "Configure region endpoints dynamically using the Contentstack Java Utils SDK. A Java developer guide to dynamic resolution without hardcoding URLs."
url: /developers/sdks/utils-sdk/java/region-endpoint-integration
uid: blte602a0d1ffd76bf4
---

# Java Utils - Configure Region Endpoints in Java Utils SDK

## Configure Region Endpoints in Java Utils SDK

## Overview

Contentstack services are available across multiple regions with different endpoint URLs. Hardcoding these URLs requires code changes as regions and services evolve. The Java Utils SDK resolves the correct endpoint dynamically from the canonical regions registry, allowing the same initialization code to work across supported regions without hardcoded strings.

Use region resolution when your application supports multiple regions or cloud-specific regions.

Region resolution is optional if:

-   Your application only connects to one Contentstack region
-   You hardcode the endpoint

Using it anyway keeps your code free of hardcoded URLs, so a future move to a different region or cloud provider only requires changing the region value, not the code.

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Resolve a single service URL | [Resolve a single endpoint](#resolve-a-single-endpoint) | Endpoint.getContentstackEndpoint(region, service) |
| Resolve all endpoints for a region | [Resolve all endpoints](#resolve-all-endpoints) | Endpoint.getContentstackEndpoint(region) |
| Strip https:// for host configuration | [Resolve a single endpoint](#resolve-a-single-endpoint) | Endpoint.getContentstackEndpoint(region, service, true) |
| Use a region alias | [Use region aliases](#use-region-aliases) | Endpoint.getContentstackEndpoint("us", ...) |
| Read from environment variable | [Read from environment variable](#read-from-environment-variable) | System.getenv().getOrDefault("CONTENTSTACK\_REGION", "na") |
| Integrate with Delivery SDK | [Integrate with Delivery SDK](#integrate-with-delivery-sdk) | config.setHost(Endpoint.getContentstackEndpoint(..., true)) |
| Look up supported region IDs and aliases | [Supported Regions](#supported-regions) | na, eu, au, azure-na, azure-eu, gcp-na, gcp-eu |
| Look up supported service keys | [Supported Service Keys](#supported-service-keys) | contentDelivery, contentManagement |
| Diagnose a resolution error | [Troubleshooting](#troubleshooting) | IllegalArgumentException |
| Review caching and JVM lifecycle behavior | [Advanced: Registry Internals](#advanced-registry-internals) | regionsData |

---

## Prerequisites

**Mandatory:**

-   contentstack-utils JAR on the classpath, version 1.6.0 or later (the version that introduced Endpoint.getContentstackEndpoint()). See [Java Utils Setup Guide](https://www.contentstack.com/docs/developers/sdks/utils-sdk/java/get-started-with-java-utils-library#sdk-installation-and-setup).

**Optional:**

-   Contentstack Java Content Delivery API (CDA) SDK: [Java CDA SDK Setup Guide](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/java/get-started-with-java-delivery-sdk) (required for the integration examples)
-   Familiarity with Contentstack regions: [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks). Your stack's region is set when the stack is created and is visible under Organization Settings → Stacks in the Contentstack dashboard.

---

## Resolve a single endpoint

The SDK caches endpoint lookups after the first call and keeps them cached for the lifetime of the JVM process. It exposes no public API to refresh that cache while the process runs, so you must restart the JVM to pick up registry changes. See [Advanced: Registry Internals](#advanced-registry-internals) for the loading and caching details.

Endpoint exposes four overloads of getContentstackEndpoint:

| Overload | Returns |
| --- | --- |
| getContentstackEndpoint(region, service) | The full HTTPS URL for one service. |
| getContentstackEndpoint(region, service, omitHttps) | The same URL with the https:// scheme stripped when omitHttps is true. |
| getContentstackEndpoint(region) | A Map<String, String> with one entry per service endpoint for the region. |
| getContentstackEndpoint(region, omitHttps) | The same map with the https:// scheme stripped from each URL when omitHttps is true. |

Most applications should use getContentstackEndpoint(region, service), which returns a full HTTPS URL. Use omitHttps = true only when an API specifically expects a hostname without the scheme (such as setHost()), since the SDK adds https:// internally and a full URL would double the scheme. The connection is always HTTPS.

See [Region Resolution Rules](#region-resolution-rules) for the complete list. Service keys such as "contentDelivery" are case-sensitive and must match the values in [Supported Service Keys](#supported-service-keys) exactly.

```
import com.contentstack.utils.Endpoint;

// Get a specific service URL
String cdaUrl = Endpoint.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery");
// → "https://eu-cdn.contentstack.com" (for region 'eu')

// Get the host without the https:// scheme (for setHost())
String host = Endpoint.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery", true);
// → "eu-cdn.contentstack.com" (for region 'eu')
```

---

## Resolve all endpoints

Use this overload when you need more than one service endpoint for the same region.

When service is omitted, the method returns a Map<String, String> with one entry per service key for the region.

```
import com.contentstack.utils.Endpoint;
import java.util.Map;

Map<String, String> all = Endpoint.getContentstackEndpoint("<CONTENTSTACK_REGION>");
// → { "contentDelivery": "https://eu-cdn.contentstack.com", ... }

all.forEach((service, url) -> System.out.println(service + " -> " + url));

// Get all endpoints without the scheme
Map<String, String> hosts = Endpoint.getContentstackEndpoint("<CONTENTSTACK_REGION>", true);
```

---

## Use region aliases

Aliases allow applications that use historical or cloud-provider-specific region names to work without code changes. Matching is case-insensitive, so eu, EU, and Eu are equivalent. For example, these resolve to the NA region:

```
Endpoint.getContentstackEndpoint("na",     "contentDelivery"); // → https://cdn.contentstack.io
Endpoint.getContentstackEndpoint("us",     "contentDelivery"); // → https://cdn.contentstack.io
Endpoint.getContentstackEndpoint("aws-na", "contentDelivery"); // → https://cdn.contentstack.io
Endpoint.getContentstackEndpoint("AWS_NA", "contentDelivery"); // → https://cdn.contentstack.io
```

For the full alias list, see [Region Resolution Rules](#region-resolution-rules).

---

## Read from environment variable

Recommended for production deployments. The region string is read at runtime. Change the environment variable to switch regions with no code change. Use whatever environment variable or configuration key your application uses for region selection.

```
import com.contentstack.sdk.Config;
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Endpoint;

String region = System.getenv().getOrDefault("CONTENTSTACK_REGION", "na");

Config config = new Config();
config.setHost(Endpoint.getContentstackEndpoint(region, "contentDelivery", true));

Stack stack = Contentstack.stack(
    System.getenv("CONTENTSTACK_API_KEY"),
    System.getenv("CONTENTSTACK_DELIVERY_TOKEN"),
    System.getenv("CONTENTSTACK_ENVIRONMENT"),
    config
);
```

---

## Integrate with Delivery SDK

Wire Endpoint.getContentstackEndpoint() into the Java CDA SDK using config.setHost().

```
import com.contentstack.sdk.Config;
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Query;
import com.contentstack.sdk.QueryResult;
import com.contentstack.sdk.QueryResultsCallBack;
import com.contentstack.sdk.ResponseType;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Endpoint;

// Resolve the host (omit https:// for setHost)
String host = Endpoint.getContentstackEndpoint("eu", "contentDelivery", true);
// → "eu-cdn.contentstack.com"

Config config = new Config();
config.setHost(host);

Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>", config);

// Fetch entries. All requests now go to the EU CDN.
Query query = stack.contentType("blog").query();
query.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if (error != null) {
            System.err.println(error.getErrorMessage());
            return;
        }
        queryResult.getResultObjects().forEach(entry ->
                System.out.println(entry.getTitle()));
    }
});
```

Change one string to switch regions. Everything else stays the same:

```
// NA       → cdn.contentstack.io
String host = Endpoint.getContentstackEndpoint("na",       "contentDelivery", true);

// EU       → eu-cdn.contentstack.com
String host = Endpoint.getContentstackEndpoint("eu",       "contentDelivery", true);

// AU       → au-cdn.contentstack.com
String host = Endpoint.getContentstackEndpoint("au",       "contentDelivery", true);

// Azure NA → azure-na-cdn.contentstack.com
String host = Endpoint.getContentstackEndpoint("azure-na", "contentDelivery", true);

// GCP EU   → gcp-eu-cdn.contentstack.com
String host = Endpoint.getContentstackEndpoint("gcp-eu",   "contentDelivery", true);
```

---

## Use the Utils proxy

Endpoint is the primary API used throughout this guide. Utils.getContentstackEndpoint() is a proxy that produces the same results as Endpoint.getContentstackEndpoint() and exists for projects that already import com.contentstack.utils.Utils and prefer the shorter call form.

```
import com.contentstack.utils.Utils;

String url  = Utils.getContentstackEndpoint("eu", "contentDelivery");
String host = Utils.getContentstackEndpoint("eu", "contentDelivery", true);
Map<String, String> all = Utils.getContentstackEndpoint("eu");
```

---

## Region Resolution Rules

Region matching:

-   Ignores case
-   Trims whitespace
-   Supports aliases
-   Supports both dash (\-) and underscore (\_) variants where defined

For example, aws-na, AWS\_NA, and us all resolve to the na region. See [Supported Regions](#supported-regions) for the complete list.

Only dash (\-) and underscore (\_) are recognized as separators. A region string using any other separator (a space, a dot, or a slash, for example "aws na") does not match any known region or alias and falls into the "Invalid region" error below.

If no region is found, the SDK throws IllegalArgumentException:

```
Invalid region: <region>
```

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

---

## Service Resolution Rules

The SDK:

1.  Locates the resolved region.
2.  Locates the service key within the region endpoints.
3.  Returns the endpoint URL.

If the service key is not available for the resolved region, the SDK throws IllegalArgumentException:

```
Service "<service>" not found for region "<region>"
```

---

## Supported Service Keys

Service keys are case-sensitive and must match the values below exactly. Unlike region strings, no case normalization is applied.

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

This SDK version does not expose these values as an enum or typed constants, so copy them exactly.

---

## Troubleshooting

### Empty region

**Symptom**

```
IllegalArgumentException: Empty region provided. Please provide a valid region.
```

**Root cause:** A null or blank string was passed as the region argument.

**Resolution:** Pass a non-empty region string. See [Region Resolution Rules](#region-resolution-rules) for valid identifiers.

---

### Invalid region

**Symptom**

```
try {
    Endpoint.getContentstackEndpoint("invalid", "contentDelivery");
} catch (IllegalArgumentException e) {
    // "Invalid region: invalid"
}
```

**Root cause:** The string does not match any region ID or alias in the registry. This is typically caused by a typo, an unsupported region name, or a stale configuration value.

**Resolution:** Check [Supported Regions](#supported-regions) for valid identifiers and aliases.

---

### Service not found

**Symptom**

```
try {
    Endpoint.getContentstackEndpoint("na", "unknownService");
} catch (IllegalArgumentException e) {
    // "Service \"unknownService\" not found for region \"na\""
}
```

**Root cause:** The service key does not exist for the resolved region. Some keys (such as assetManagement) are available for NA only.

**Resolution:** Verify the service key against [Supported Service Keys](#supported-service-keys). For non-NA regions, check region-specific constraints noted in that section.

---

### Null or empty service

**Symptom**

```
try {
    Endpoint.getContentstackEndpoint("eu", null);
    // or Endpoint.getContentstackEndpoint("eu", "")
} catch (IllegalArgumentException e) {
    // "Service must not be empty. Use getContentstackEndpoint(region) to get all endpoints."
}
```

**Root cause:** null and "" are both rejected before the SDK attempts to look up a service. This is distinct from an unknown service key, which resolves to the "Service not found" error above.

**Resolution:** Pass a specific service key from [Supported Service Keys](#supported-service-keys), or call the single-argument overload Endpoint.getContentstackEndpoint(region) to get all endpoints for the region (see [Resolve all endpoints](#resolve-all-endpoints)).

---

### Registry unavailable

**Symptom**

```
RuntimeException: Unable to load regions registry — live download failed and bundled fallback not found.
```

**Root cause:** Both the live download from artifacts.contentstack.com and the bundled JAR fallback failed. This typically means the SDK JAR was not packaged correctly or there is no outbound network access.

**Resolution:** Verify that the SDK JAR was packaged correctly. In network-restricted environments, ensure the bundled regions.json is present in the JAR.

---

### Newly added region or endpoint change not resolving

**Symptom:** A region or service that Contentstack added or changed after your application started still throws Invalid region: <region> or Service "<service>" not found for region "<region>", or resolves to an outdated endpoint.

**Root cause:** The SDK caches the resolved registry in memory for the lifetime of the JVM process and exposes no public API to refresh it while the process runs.

**Resolution:** Restart the JVM. The next call to Endpoint.getContentstackEndpoint() reloads the registry and picks up the change. See [Advanced: Registry Internals](#advanced-registry-internals) for the caching details.

---

## Advanced: Registry Internals

This section covers registry data format and caching internals. Skip it unless you're debugging a caching issue or inspecting the registry's structure. All service endpoint information is maintained in the Regions Registry.

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

The Java Utils SDK loads the registry in the following order:

| Priority | Source | Behavior |
| --- | --- | --- |
| 1 | In-memory static cache | Zero I/O after the first call |
| 2 | Live download (once per JVM) | Fetched from https://artifacts.contentstack.com/regions.json on first call |
| 3 | Bundled regions.json in JAR | Offline fallback, used only when the live download fails |

**Caching behavior:**

| Event | Cache state |
| --- | --- |
| First call | Live download attempted, result stored in memory |
| Subsequent calls | Returned from memory, zero I/O |
| Live download fails | Bundled JAR file used as fallback |
| JVM restart | Cleared. Live download runs again on next call |

On a cache miss, the SDK attempts a live download so that new Contentstack regions and endpoint changes are available without an SDK upgrade, provided the download succeeds before that process caches its own copy. Once the SDK caches the registry, it stays in memory for the lifetime of that JVM process, so you must restart it to pick up any registry change made after the process started. Each call follows this resolution flow:

```
Endpoint.getContentstackEndpoint(region, service)
          │
          ▼
  In-memory cache present?
          ├── Yes ──► Return URL
          └── No
                │
                ▼
          Download regions.json from CDN
                ├─�� Success ──► Cache in memory ──► Return URL
                └── Failure
                      │
                      ▼
                Use bundled regions.json from JAR ──► Cache in memory ──► Return URL
```

The live download has these characteristics:

-   **Thread safety:**
    -   Cache population is thread-safe.
    -   loadRegions() is a synchronized method, so concurrent first calls from multiple threads cannot race.
-   **Manual refresh:**
    -   Not available to consumers. Once loaded, the registry stays cached in memory for the lifetime of the JVM process.
    -   resetCache() exists in the SDK but is package-private, intended for the SDK's own test suite only.
    -   Restarting the JVM is the only way to force a reload.
-   **Timeout:** 10-second connect timeout and 10-second read timeout.
-   **Proxy support:** Relies on the JVM's default proxy handling, honoring \-Dhttp.proxyHost/\-Dhttps.proxyHost system properties if set.
-   **Firewall:** Allow outbound access to artifacts.contentstack.com.

The Maven exec-maven-plugin binds scripts/download-regions.sh to the generate-resources phase, so the script runs at build time. It writes the current registry to src/main/resources/regions.json, and Maven bundles that file into the built JAR as a classpath resource. At runtime, the SDK never writes to disk: on a cache miss, loadRegions() either downloads the registry into memory or, if the download fails, reads this bundled classpath resource. The SDK requires no filesystem write permissions at runtime.

To refresh the bundled fallback (SDK developers only):

```
# Runs automatically on every Maven build
mvn generate-resources

# Or manually
bash scripts/download-regions.sh
```
