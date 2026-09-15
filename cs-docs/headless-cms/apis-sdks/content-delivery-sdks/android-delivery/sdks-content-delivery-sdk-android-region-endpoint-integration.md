---
title: "Android CDA - Configure Region Endpoints in Android Delivery SDK"
description: "Configure region endpoints dynamically using the Contentstack Android Delivery SDK. An Android developer guide to dynamic resolution without hardcoding hosts."
url: /developers/sdks/content-delivery-sdk/android/region-endpoint-integration
uid: blt27493936273b7b39
---

# Android CDA - Configure Region Endpoints in Android Delivery SDK

## Configure Region Endpoints in Android Delivery SDK

## Overview

Contentstack runs across multiple cloud providers and geographic regions, each with its own set of service hosts. The Android Delivery SDK resolves the Content Delivery API (CDA) host for your region from the canonical Regions Registry. A single setRegion() call replaces every hardcoded host string in your app. The registry also carries hosts for the other Contentstack services, which you can resolve directly.

Region resolution applies to every app built on version 4.3.0 or later. Apps that connect to a custom or on-premises host keep using setHost(), which takes precedence over resolution.

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Point a stack at a Contentstack region | [Set the region on the stack](#set-the-region-on-the-stack) | config.setRegion(Config.ContentstackRegion.EU) |
| Resolve one service host or URL | [Resolve a single endpoint](#resolve-a-single-endpoint) | Contentstack.getContentstackEndpoint(region, service) |
| Strip https:// for setHost() | [Resolve a single endpoint](#resolve-a-single-endpoint) | Contentstack.getContentstackEndpoint(region, service, true) |
| Resolve every service for one region | [Resolve all endpoints](#resolve-all-endpoints) | Contentstack.getContentstackEndpoints(region) |
| Pass a historical or cloud-prefixed region name | [Use region aliases](#use-region-aliases) | Contentstack.getContentstackEndpoint("us", ...) |
| Pick the region per build variant | [Select the region at build time](#select-the-region-at-build-time) | Config.ContentstackRegion.valueOf(BuildConfig.CS\_REGION) |
| Target a custom or on-premises host | [Use a custom or on-premises host](#use-a-custom-or-on-premises-host) | config.setHost("<CUSTOM\_HOST>") |
| Resolve through a corporate proxy | [Route resolution through a proxy](#route-resolution-through-a-proxy) | config.setProxy(proxy) |
| Work out which host a stack will use | [Host resolution precedence](#host-resolution-precedence) | config.getRegion() |
| Look up region IDs and aliases | [Supported regions](#supported-regions) | na, eu, au, azure-na, azure-eu, gcp-na, gcp-eu |
| Look up service keys | [Supported service keys](#supported-service-keys) | contentDelivery, contentManagement |
| Remove hardcoded region hosts | [Migrate from hardcoded region hosts](#migrate-from-hardcoded-region-hosts) | config.setRegion(...) |
| Diagnose a resolution failure | [Troubleshooting](#troubleshooting) | IllegalArgumentException |
| Review caching and registry loading | [Advanced: registry internals](#advanced-registry-internals) | refreshRegions |

---

## Prerequisites

-   com.contentstack.sdk:android version 4.3.0 or later, the version that introduces the Endpoint class. See the [Android SDK installation steps](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/android/get-started-with-android-sdk#sdk-installation-and-setup).
-   The region your stack belongs to. A stack takes its region at creation time and keeps it. The Contentstack dashboard shows the region under Organization Settings, then Stacks. See [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks).

---

## Set the region on the stack

This is the primary path. Set the region on Config, then create the stack. The SDK resolves the CDA host and every request from that stack goes to the resolved region.

Do not call setHost() here. An explicit host disables region resolution for the life of that Config instance, as [Host resolution precedence](#host-resolution-precedence) describes.

**Kotlin**

```
import com.contentstack.sdk.Config
import com.contentstack.sdk.Contentstack

val config = Config()
config.setRegion(Config.ContentstackRegion.AZURE_NA)

val stack = Contentstack.stack(
    context,
    "<API_KEY>",
    "<DELIVERY_TOKEN>",
    "<ENVIRONMENT>",
    config
)
```

**Java**

```
import com.contentstack.sdk.Config;
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Stack;

Config config = new Config();
config.setRegion(Config.ContentstackRegion.AZURE_NA);

Stack stack = Contentstack.stack(
        context,
        "<API_KEY>",
        "<DELIVERY_TOKEN>",
        "<ENVIRONMENT>",
        config);
```

Config.ContentstackRegion is an enum with seven values: US, EU, AU, AZURE\_NA, AZURE\_EU, GCP\_NA, GCP\_EU. The default is US, which resolves to cdn.contentstack.io. Switching regions means changing one enum value.

Contentstack.stack() declares throws Exception, so Java callers must catch it or declare it. Kotlin callers do not, because Kotlin has no checked exceptions.

---

## Resolve a single endpoint

Use this when your app calls a Contentstack service other than the CDA, or when you need the host string itself. Contentstack and Endpoint each expose two public overloads:

| Overload | Returns |
| --- | --- |
| Contentstack.getContentstackEndpoint(region, service) | The full HTTPS URL for one service. |
| Contentstack.getContentstackEndpoint(region, service, omitHttps) | The same URL with https:// stripped when omitHttps is true. |
| Endpoint.getContentstackEndpoint(region, service) | Identical result. Contentstack delegates to this method. |
| Endpoint.getContentstackEndpoint(region, service, omitHttps) | Identical result. |

Both classes produce the same values. Call Contentstack to keep endpoint resolution on the same class you already use to create stacks, or call Endpoint directly when you do not otherwise import Contentstack.

Pass omitHttps = true only where an API expects a bare host, such as setHost(). setHost() prepends https:// internally, so a full URL there produces a doubled scheme. The connection always uses HTTPS.

Service keys are case-sensitive. Match the values in [Supported service keys](#supported-service-keys) exactly.

**Kotlin**

```
import com.contentstack.sdk.Contentstack

// Full URL for one service
val cdaUrl = Contentstack.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery")
// → "https://eu-cdn.contentstack.com" for region "eu"

// Bare host, for setHost()
val cdaHost = Contentstack.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery", true)
// → "eu-cdn.contentstack.com" for region "eu"
```

**Java**

```
import com.contentstack.sdk.Contentstack;

// Full URL for one service
String cdaUrl = Contentstack.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery");
// → "https://eu-cdn.contentstack.com" for region "eu"

// Bare host, for setHost()
String cdaHost = Contentstack.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery", true);
// → "eu-cdn.contentstack.com" for region "eu"
```

Wrap the call in a try/catch when the region string comes from configuration rather than a literal. An unrecognized region or service key throws IllegalArgumentException, as [Troubleshooting](#troubleshooting) covers.

```
try {
    String cdaUrl = Contentstack.getContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery");
} catch (IllegalArgumentException e) {
    Log.e("Contentstack", "Endpoint resolution failed: " + e.getMessage());
}
```

---

## Resolve all endpoints

Use this when you need several service hosts for one region and want a single lookup instead of one call per service. The method returns a Map<String, String> with one entry per service key, in registry order.

Contentstack.getContentstackEndpoints() delegates to Endpoint.getAllEndpoints(). Note the plural method name on Contentstack and the different name on Endpoint.

| Overload | Returns |
| --- | --- |
| Contentstack.getContentstackEndpoints(region) | A map of service key to full HTTPS URL. |
| Contentstack.getContentstackEndpoints(region, omitHttps) | The same map with https:// stripped from each value when omitHttps is true. |
| Endpoint.getAllEndpoints(region) | Identical result. |
| Endpoint.getAllEndpoints(region, omitHttps) | Identical result. |

**Kotlin**

```
import com.contentstack.sdk.Contentstack

val endpoints = Contentstack.getContentstackEndpoints("<CONTENTSTACK_REGION>")
val cmaUrl = endpoints["contentManagement"]
// → "https://gcp-na-api.contentstack.com" for region "gcp-na"

endpoints.forEach { (service, url) -> Log.d("Contentstack", "$service -> $url") }
```

**Java**

```
import com.contentstack.sdk.Contentstack;
import java.util.Map;

Map<String, String> endpoints = Contentstack.getContentstackEndpoints("<CONTENTSTACK_REGION>");
String cmaUrl = endpoints.get("contentManagement");
// → "https://gcp-na-api.contentstack.com" for region "gcp-na"

// Bare hosts instead of full URLs
Map<String, String> hosts = Contentstack.getContentstackEndpoints("<CONTENTSTACK_REGION>", true);
```

**Note:** Every standalone method on Contentstack and Endpoint, on both the single-endpoint and the all-endpoints path, opens a direct connection when it needs to reach the registry. None of them accept a proxy argument or read the proxy from Config. In a proxy-only network, create the stack first so its resolution populates the shared cache, then call these methods. See [Route resolution through a proxy](#route-resolution-through-a-proxy).

---

## Use region aliases

Aliases let an app that stores a historical or cloud-prefixed region name resolve endpoints without a code change. The SDK trims the string, lowercases it, and converts \_ to \- before matching, so AZURE\_NA, azure-na, and Azure\_NA all resolve to the same region.

These four calls all resolve to the North America region:

```
Contentstack.getContentstackEndpoint("na",     "contentDelivery"); // → https://cdn.contentstack.io
Contentstack.getContentstackEndpoint("us",     "contentDelivery"); // → https://cdn.contentstack.io
Contentstack.getContentstackEndpoint("aws-na", "contentDelivery"); // → https://cdn.contentstack.io
Contentstack.getContentstackEndpoint("AWS_NA", "contentDelivery"); // → https://cdn.contentstack.io
```

[Supported regions](#supported-regions) lists every alias.

---

## Select the region at build time

Android apps have no environment variables at runtime, so read the region from a generated BuildConfig field instead. Set the value per build type or product flavor, and the region changes with the variant rather than with a code edit.

Add the field to your module-level build.gradle:

```
// build.gradle (Module-level)
android {
    buildFeatures {
        buildConfig true      // required from Android Gradle Plugin 8.0 onward
    }
    buildTypes {
        debug {
            buildConfigField "String", "CS_REGION", "\"EU\""
        }
        release {
            buildConfigField "String", "CS_REGION", "\"AZURE_NA\""
        }
    }
}
```

Android Gradle Plugin 8.0 and later generate no BuildConfig class unless buildConfig true is present, so the field resolves to a compile error without it.

Then map the field onto the enum. valueOf() throws IllegalArgumentException when the string does not name an enum constant, so catch it and fall back to US:

```
import com.contentstack.sdk.Config;

Config.ContentstackRegion region;
try {
    region = Config.ContentstackRegion.valueOf(BuildConfig.CS_REGION);
} catch (IllegalArgumentException e) {
    Log.w("Contentstack", "Unknown region " + BuildConfig.CS_REGION + ", falling back to US");
    region = Config.ContentstackRegion.US;
}

Config config = new Config();
config.setRegion(region);
```

---

## Use a custom or on-premises host

setHost() targets a host that the Regions Registry does not list, such as an on-premises deployment or a private CDA edge. The SDK skips region resolution entirely and sends every request to the host you pass.

```
Config config = new Config();
config.setHost("<CUSTOM_HOST>");   // no scheme, the SDK prepends https://

Stack stack = Contentstack.stack(
        context, "<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>", config);
```

**Warning:** setHost() disables region resolution permanently on that Config instance, and no method re-enables it. Call order does not change the result. A Config that receives both calls uses the explicit host whichever call came first:

```
// Both of these send requests to <CUSTOM_HOST>, not to the EU region host.
config.setHost("<CUSTOM_HOST>");
config.setRegion(Config.ContentstackRegion.EU);

config.setRegion(Config.ContentstackRegion.EU);
config.setHost("<CUSTOM_HOST>");
```

To target a region, construct a fresh Config and call only setRegion().

---

## Route resolution through a proxy

The SDK reaches the registry over the network when a region is missing from the copy bundled in the SDK. In a network that permits outbound traffic only through a proxy, that request fails and resolution falls back to the bundled copy. Set the proxy on Config before you create the stack, and the SDK routes the registry request through it as well as the content requests.

```
import com.contentstack.sdk.Config;
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Stack;
import java.net.InetSocketAddress;
import java.net.Proxy;

Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("<PROXY_HOST>", 8080));

Config config = new Config();
config.setProxy(proxy);                                  // set the proxy first
config.setRegion(Config.ContentstackRegion.GCP_EU);

Stack stack = Contentstack.stack(
        context, "<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>", config);
```

The proxy applies to registry requests that the stack triggers. The standalone Contentstack and Endpoint methods take no proxy argument and open a direct connection instead. Create the stack first so its resolution populates the cache, and later standalone calls read from memory without any network request.

---

## Host resolution precedence

When you create a stack, the SDK settles on a CDA host in this order and stops at the first match:

1.  **Explicit host.** A previous setHost() call fixes the host and the SDK skips resolution. See [Use a custom or on-premises host](#use-a-custom-or-on-premises-host).
2.  **Registry resolution.** The SDK resolves the contentDelivery host for config.getRegion() from the Regions Registry and strips the scheme.
3.  **Legacy pattern.** If resolution rejects the region, the SDK builds {region}-cdn.contentstack.com, converting \_ to \-. The US region keeps the default cdn.contentstack.io.

Step 3 does not surface an error. A stack that reaches the legacy pattern still initializes and still issues requests, against a host the registry never confirmed. Log config.getRegion() and the resolved host during startup if you need to confirm which step applied.

The legacy pattern covers IllegalArgumentException only. A registry the SDK cannot read at all raises IllegalStateException, which propagates out of Contentstack.stack(). See [Registry unavailable](#registry-unavailable).

---

## Region resolution rules

Region matching:

-   Ignores case
-   Trims surrounding whitespace
-   Accepts aliases
-   Treats \- and \_ as the same separator

aws-na, AWS\_NA, and us therefore all resolve to the na region.

\- and \_ are the only separators the SDK recognizes. A region string that uses a space, a dot, or a slash, such as "aws na", matches no region or alias and produces the [Invalid region](#invalid-region) error:

```
Invalid region: <region>
```

### Supported regions

| Region ID | Cloud | Location | Default | Aliases |
| --- | --- | --- | --- | --- |
| na | AWS | North America | Yes | us, aws-na, aws\_na |
| eu | AWS | Europe | No | aws-eu, aws\_eu |
| au | AWS | Australia | No | aws-au, aws\_au |
| azure-na | Azure | North America | No | azure\_na |
| azure-eu | Azure | Europe | No | azure\_eu |
| gcp-na | GCP | North America | No | gcp\_na |
| gcp-eu | GCP | Europe | No | gcp\_eu |

Aliases appear in lowercase because matching ignores case. NA, Na, and na are the same value to the SDK.

**Note:** The [Regions Registry](https://artifacts.contentstack.com/regions.json) holds the authoritative list of region identifiers and aliases. Contentstack can add a region there before an Android SDK release picks it up, so treat the registry as current and this table as a snapshot.

The Config.ContentstackRegion enum names a subset of these identifiers, and US maps onto the na region. Standalone Contentstack and Endpoint calls accept any registry region ID or alias as a string, including ones the enum does not name.

---

## Service resolution rules

The SDK resolves a service in three steps:

1.  Match the region string against registry IDs, then against registry aliases.
2.  Look up the service key in that region's endpoint set.
3.  Return the URL, stripping https:// when omitHttps is true.

A service key that the resolved region does not carry throws IllegalArgumentException:

```
Service "<service>" not found for region "<region>"
```

---

## Supported service keys

Service keys are case-sensitive and the SDK applies no normalization to them, unlike region strings. Copy these values exactly:

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

**Note:** The [Regions Registry](https://artifacts.contentstack.com/regions.json) holds the authoritative list of service keys. assetManagement resolves for the na region only, and requesting it for any other region produces the [Service not found](#service-not-found) error. The SDK exposes no enum or typed constants for these keys in this version.

---

## Migrate from hardcoded region hosts

Version 4.3.0 resolves region hosts from the registry, so a setHost() call that reproduces a standard region host is now redundant. That call also suppresses resolution. The app then keeps its compiled-in host string even after Contentstack changes that region's host.

Delete those calls and keep setRegion().

**Before**

```
Config config = new Config();
config.setRegion(Config.ContentstackRegion.AZURE_NA);
config.setHost("azure-na-cdn.contentstack.com");
```

**After**

```
Config config = new Config();
config.setRegion(Config.ContentstackRegion.AZURE_NA);
```

Keep setHost() for custom and on-premises hosts. Its behavior has not changed.

**Warning:** Version 4.3.0 corrects the EU host. Earlier versions built eu-cdn.contentstack.io, while the registry holds eu-cdn.contentstack.com. The old value keeps working wherever your project pins it, such as a setHost() call, a network security config, or a certificate-pinning rule. Search your project for contentstack.io and update any EU reference.

---

## Advanced: registry internals

This section covers registry loading, caching, and network behavior. Skip it unless you are diagnosing a resolution problem or auditing the SDK's outbound requests.

**Registry URL:**

```
https://artifacts.contentstack.com/regions.json
```

**Example, abbreviated:**

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

The live registry carries every region and one entry per service key. The example above shows two.

### Loading order

The SDK loads the registry from the first source that succeeds:

| Priority | Source | Behavior |
| --- | --- | --- |
| 1 | In-memory cache | No I/O after the first successful load |
| 2 | Copy bundled in the SDK | Read from the classpath resource /assets/regions.json. No network request |
| 3 | Live download | One HTTP GET to https://artifacts.contentstack.com/regions.json, attempted when the requested region is absent from the bundled copy |

The bundled copy comes first, so ordinary lookups make no network request at all. The live download covers one case: Contentstack added a region after the installed SDK version shipped. A successful download replaces the in-memory cache, so every later lookup reads the newer data.

### Caching

| Event | Cache state |
| --- | --- |
| First lookup | Bundled copy read into memory |
| Later lookups | Served from memory, no I/O |
| Region absent from the bundled copy | One live download, then cached in memory |
| Live download fails | Cache keeps the bundled data, and the SDK does not retry in this process |
| Process restart | Cache cleared, and the next lookup reads the bundled copy again |

### Resolution flow

```
Contentstack.getContentstackEndpoint(region, service)
          │
          ▼
  In-memory cache present?
          ├── Yes ──► Look up region
          └── No ───► Read bundled /assets/regions.json ──► Cache ──► Look up region
                                                                          │
                                                                          ▼
                                                              Region found?
                                                                  ├── Yes ──► Return URL
                                                                  └── No
                                                                        │
                                                                        ▼
                                                        Live download already attempted?
                                                                  ├── Yes ──► IllegalArgumentException
                                                                  └── No ───► Download regions.json
                                                                                  ├── Found ──► Cache ──► Return URL
                                                                                  └── Not found ──► IllegalArgumentException
```

### Network behavior

-   **Attempt count:** The SDK downloads the registry at most **one attempt** per process. It marks the attempt before making the request, so a failure is never retried until the process restarts.
-   **Timeouts:** 5-second connect timeout and 10-second read timeout.
-   **Thread safety:** Cache population runs inside synchronized methods, so concurrent first lookups from several threads cannot race.
-   **Proxy:** The stack passes the proxy from Config into resolution. Standalone Contentstack and Endpoint calls connect directly. See [Route resolution through a proxy](#route-resolution-through-a-proxy).
-   **Firewall:** Allow outbound access to artifacts.contentstack.com if your app must resolve regions added after the installed SDK version shipped.
-   **Manual refresh:** No public method clears the cache. resetCache() exists but is package-private and serves the SDK's own test suite. Restarting the process is the only way to force a reload.

### Refresh the bundled copy

This applies to SDK maintainers, not to app developers. The Gradle task overwrites contentstack/src/main/resources/assets/regions.json with the current registry, and the next build packages that file into the artifact:

```
./gradlew :contentstack:refreshRegions
```

---

## Troubleshooting

### Empty region

**Symptom**

```
IllegalArgumentException: Empty region provided. Please provide a valid region.
```

**Root Cause**: The region argument was null, an empty string, or whitespace only. The SDK rejects it before any registry lookup.

**Resolution**: Pass a non-empty region identifier from [Supported regions](#supported-regions). Where the value comes from BuildConfig, a manifest placeholder, or remote configuration, check that the field resolved to a real value rather than an empty default. See [Select the region at build time](#select-the-region-at-build-time).

---

### Invalid region

**Symptom**

```
try {
    Contentstack.getContentstackEndpoint("invalid", "contentDelivery");
} catch (IllegalArgumentException e) {
    // "Invalid region: invalid"
}
```

**Root Causes**

-   A typo in the region string, or a separator the SDK does not recognize, such as the space in "aws na".
-   A stale configuration value that names a region Contentstack has since renamed.
-   A region Contentstack added after the installed SDK version shipped, on a device that cannot reach artifacts.contentstack.com.

**Resolution**: Check the string against [Supported regions](#supported-regions), which lists every ID and alias. Use \- or \_ as the only separator. If the region is newer than your SDK version, either allow outbound access to artifacts.contentstack.com so the SDK can download the current registry, or upgrade the SDK.

---

### Service not found

**Symptom**

```
try {
    Contentstack.getContentstackEndpoint("eu", "assetManagement");
} catch (IllegalArgumentException e) {
    // "Service \"assetManagement\" not found for region \"eu\""
}
```

**Root Causes**

-   The service key does not exist in the registry, often through a casing error. Keys are case-sensitive, so contentdelivery does not match contentDelivery.
-   The key exists but not for the resolved region. assetManagement resolves for na only.
-   The service argument was null or an empty string. Unlike the region argument, the SDK applies no separate empty check to the service, so a null produces Service "null" not found for region "<region>".

**Resolution**: Copy the key verbatim from [Supported service keys](#supported-service-keys). The error message quotes both the key and the region the SDK resolved. Compare that quoted region against the one you passed to confirm the alias resolved as you expected. To read every key a region carries, call Contentstack.getContentstackEndpoints(region). See [Resolve all endpoints](#resolve-all-endpoints).

---

### Registry unavailable

**Symptom**

```
IllegalStateException: regions.json not found in classpath and could not be
downloaded from https://artifacts.contentstack.com/regions.json. Ensure the SDK
was built correctly, or check network access.
```

**Root Cause**: The SDK found no bundled regions.json on the classpath and the live download also failed, so no region data reached memory.

**Resolution**: Confirm the app resolves a released com.contentstack.sdk:android artifact rather than a locally built one, and that no shrinking or packaging rule strips assets/regions.json from the classpath. Then allow outbound access to artifacts.contentstack.com.

**Warning:** Contentstack.stack() does not catch this error, and the failure affects every region including the default US. A stack creation call that hits it throws instead of returning a Stack. The legacy host pattern described in [Host resolution precedence](#host-resolution-precedence) covers rejected region strings only, not an unreadable registry.

A related error names a registry the SDK read but could not parse:

```
IllegalStateException: Bundled regions.json is corrupt: <parser message>
```

**Root Cause**: The bundled file exists but is not valid JSON, or lacks the top-level regions array. A truncated download or a build step that rewrote the file produces this.

**Resolution**: Reinstall the released SDK artifact. For a local SDK build, run ./gradlew :contentstack:refreshRegions to fetch a clean copy. See [Refresh the bundled copy](#refresh-the-bundled-copy).

---

### New region does not resolve

**Symptom:** A region Contentstack announced recently throws Invalid region: <region>, or a stack resolves to an outdated host. The same region resolves correctly on another device or after an app restart.

**Root Cause**: The SDK caches the registry in memory for the life of the process and exposes no public method to refresh it. A registry change made after the process started does not reach a running app.

**Resolution**: Restart the app. The next lookup reads the registry again and picks up the change. Where the region is absent from the bundled copy, confirm the device can reach artifacts.contentstack.com, because that lookup depends on the live download. Upgrading to an SDK version whose bundled copy already names the region removes the network dependency. See [Advanced: registry internals](#advanced-registry-internals) for the caching details.

---

## Limitations

-   **The offline path depends on the contents of the SDK artifact.** Region resolution reads a bundled regions.json and needs no network access. That holds only when the file is present on the classpath. An artifact built without it resolves every region through the live download instead. A device with no access to artifacts.contentstack.com then fails at stack creation with the [Registry unavailable](#registry-unavailable) error. Confirm that assets/regions.json is present in the artifact your build resolves before you rely on offline resolution.
-   **Proxy support does not cover every entry point.** The stack forwards the proxy from Config into region resolution. The standalone Contentstack and Endpoint methods accept no proxy and connect directly, so in a proxy-only network they resolve only regions that the bundled copy already names.
-   **No public cache refresh.** A registry change reaches a running app only after a process restart.
-   **The enum names fewer regions than the registry.** Config.ContentstackRegion covers seven regions. The string-based Contentstack and Endpoint methods reach a region Contentstack adds later, and so does setHost(). setRegion() reaches it only once an SDK release adds the enum constant.

---

## Next Steps

-   [Get Started with Android SDK](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/android/get-started-with-android-sdk): Installs the SDK, initializes a stack, and fetches a first entry, which is the setup the region examples on this page build on.
-   [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks): Explains how Contentstack assigns a region to a stack and where to confirm which region yours belongs to.
-   [SDK Changelog](https://www.contentstack.com/docs/changelog?filter=sdks): Records the Android SDK release that introduced registry-backed resolution, alongside every other SDK change per release.
-   [Configure Region Endpoints in Java Utils SDK](https://www.contentstack.com/docs/developers/sdks/utils-sdk/java/region-endpoint-integration): Covers the same registry from the Java Utils SDK, which loads it in a different order. Read it for projects that use both SDKs.
