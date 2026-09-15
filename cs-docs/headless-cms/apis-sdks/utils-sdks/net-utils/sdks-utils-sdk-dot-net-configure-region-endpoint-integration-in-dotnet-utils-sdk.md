---
title: ".NET Utils - Configure Region Endpoints in .NET Utils SDK"
description: "Configure region endpoints dynamically using the Contentstack .NET Utils SDK. A C# developer guide to dynamic resolution without hardcoding URLs."
url: /developers/sdks/utils-sdk/dot-net/configure-region-endpoint-integration-in-dotnet-utils-sdk
uid: blt3c9bbf24f94e2e7c
---

# .NET Utils - Configure Region Endpoints in .NET Utils SDK

## Configure Region Endpoints in .NET Utils SDK

## Overview

Contentstack services are available across multiple regions with different endpoint URLs. Hardcoding these URLs requires code changes as regions and services evolve. The .NET Utils SDK resolves the correct endpoint dynamically from the canonical regions registry, allowing the same initialization code to work across supported regions without hardcoded strings.

Use region resolution when your application supports multiple regions or cloud-specific regions, so you avoid hardcoding endpoint URLs for each one.

Region resolution is optional in these cases, though it still lets you switch regions later without rewriting hardcoded endpoint strings throughout your codebase:

-   Your application only connects to one Contentstack region
-   You hardcode the endpoint

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Configure the SDK for a region | [Configure the SDK for a Region](#configure-the-sdk-for-a-region) | Endpoint.GetContentstackEndpoint(region, "contentDelivery", omitHttps: true) |
| Return all service endpoints | [Return All Endpoints](#return-all-endpoints) | Endpoint.GetContentstackEndpoint(region) |
| Strip https:// for host configuration | [Configure the SDK for a Region](#configure-the-sdk-for-a-region) | Endpoint.GetContentstackEndpoint(..., omitHttps: true) |
| Read from environment variable | [Read from Environment Variable](#read-from-environment-variable) | Environment.GetEnvironmentVariable("CONTENTSTACK\_REGION") ?? "na" |
| Call endpoint resolution via the Contentstack.Utils namespace | [Use Utils Proxy](#use-utils-proxy) | Utils.GetContentstackEndpoint(region, "contentDelivery", omitHttps: true) |
| Look up a valid region ID or alias | [Supported Regions](#supported-regions) | None |
| Look up a valid service key | [Supported Service Keys](#supported-service-keys) | None |
| Diagnose an exception or unexpected result | [Troubleshooting](#troubleshooting) | None |
| Review caching, network behavior, or force a refresh | [Advanced: Registry Internals](#advanced-registry-internals) | Scripts/refresh-region.py |

---

## Prerequisites

**Mandatory:**

-   contentstack.utils ([NuGet page](https://www.nuget.org/packages/contentstack.utils)) installed, version 2.0.0-beta.2 or later (the version that introduced Endpoint.GetContentstackEndpoint()). Run dotnet add package contentstack.utils
-   .NET project with dotnet add package support

**Optional:**

-   Contentstack .NET CDA SDK: [.NET CDA SDK Setup Guide](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dot-net/get-started-with-dot-net-delivery-sdk) (required for the integration examples)
-   Python 3: required only for running Scripts/refresh-region.py to pre-populate the registry in CI/CD pipelines. The SDK downloads the registry automatically on first use and does not require Python at runtime.
-   Familiarity with Contentstack regions: [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks). Your stack's region is set when the stack is created and is visible under Organization Settings → Stacks in the Contentstack dashboard.

---

## Configure the SDK for a Region

On the first call, the SDK loads the region registry and caches the parsed result in memory for the lifetime of the process. Subsequent calls resolve endpoints from the in-memory cache without additional disk or network I/O. See [Loading and Caching Priority](#loading-and-caching-priority) for the exact priority order and what happens when the on-disk file is stale.

**Note:** The cache never auto-refreshes. Registry changes on the CDN require a process restart, or a manual Endpoint.ResetCache() call (testing only), to take effect.

Resolve the host and wire it into ContentstackOptions.Host. Most applications should use the default overload, which returns a full HTTPS URL. Use omitHttps: true only when an API specifically expects a hostname without the scheme (such as the Host property), since the SDK adds https:// internally and a full URL would double the scheme. The region argument accepts a region ID or a supported alias, matched case-insensitively. See [Region Resolution Rules](#region-resolution-rules) for the full list of accepted forms.

```
using Contentstack.Core;
using Contentstack.Core.Configuration;
using Contentstack.Utils.Endpoints;

// Resolve host (no hardcoded string)
string host = Endpoint.GetContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery", omitHttps: true);
// → "eu-cdn.contentstack.com" (for region 'eu')

var stack = new ContentstackClient(new ContentstackOptions
{
    ApiKey        = "<API_KEY>",
    DeliveryToken = "<DELIVERY_TOKEN>",
    Environment   = "<ENVIRONMENT>",
    Host          = host
});

try
{
    var result = await stack
        .ContentType("blog")
        .Query()
        .Find<BlogEntry>();
}
catch (Exception ex)
{
    Console.Error.WriteLine($"Request failed: {ex.Message}");
    throw;
}
```

To target a different region, change only the region argument.

| Region | Resolved host |
| --- | --- |
| na | cdn.contentstack.io |
| eu | eu-cdn.contentstack.com |
| au | au-cdn.contentstack.com |
| azure-na | azure-na-cdn.contentstack.com |

```
string host = Endpoint.GetContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery", omitHttps: true);
```

---

## Return All Endpoints

Use this overload when you need more than one service endpoint for the same region.

Calling Endpoint.GetContentstackEndpoint() without a service argument returns a Dictionary<string, string> with one entry per service key for the region.

```
using Contentstack.Utils.Endpoints;
using System.Collections.Generic;

Dictionary<string, string> endpoints = Endpoint.GetContentstackEndpoint("<CONTENTSTACK_REGION>");

foreach (var (service, url) in endpoints)
{
    Console.WriteLine($"{service} -> {url}");
}
```

---

## Read from Environment Variable

```
using Contentstack.Core;
using Contentstack.Core.Configuration;
using Contentstack.Utils.Endpoints;

string region = Environment.GetEnvironmentVariable("CONTENTSTACK_REGION") ?? "na";

string host = Endpoint.GetContentstackEndpoint(region, "contentDelivery", omitHttps: true);

var stack = new ContentstackClient(new ContentstackOptions
{
    ApiKey        = Environment.GetEnvironmentVariable("CONTENTSTACK_API_KEY"),
    DeliveryToken = Environment.GetEnvironmentVariable("CONTENTSTACK_DELIVERY_TOKEN"),
    Environment   = Environment.GetEnvironmentVariable("CONTENTSTACK_ENVIRONMENT"),
    Host          = host
});
```

---

## Use Utils Proxy

Utils.GetContentstackEndpoint() is a proxy that produces the same results as Endpoint.GetContentstackEndpoint(). Use it when your codebase already imports Contentstack.Utils and you prefer the shorter call form.

```
using Contentstack.Utils;

string host = Utils.GetContentstackEndpoint("<CONTENTSTACK_REGION>", "contentDelivery", omitHttps: true);
```

---

## Endpoint Resolution API

The .NET Utils SDK exposes endpoint resolution via the static Endpoint class in the Contentstack.Utils.Endpoints namespace.

```
// Returns a single service URL
string Endpoint.GetContentstackEndpoint(
    string region,
    string service,
    bool omitHttps = false)

// Returns all service URLs for a region
Dictionary<string, string> Endpoint.GetContentstackEndpoint(
    string region,
    bool omitHttps = false)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| region | Region identifier or alias (case-insensitive) |
| service | Service key (e.g. "contentDelivery") |
| omitHttps | When true, strips the https:// prefix. Required for SDK host configuration. |

C# overloads resolve cleanly at compile time, with no ambiguity and no Union types.

---

## Region Resolution Rules

Region matching:

-   Is case-insensitive. The SDK calls ToLowerInvariant() on the input before matching, and does not perform any other normalization.
-   Trims leading/trailing whitespace
-   Supports aliases, matched as literal strings from the regions registry
-   Does not convert between dash (\-) and underscore (\_) separators. An alias such as aws\_na resolves only because the registry lists it as its own literal alias string alongside aws-na, not because the SDK derives one form from the other.
-   ID match takes priority over alias match (two-pass lookup)

For example, aws-na, AWS\_NA, and us all resolve to the na region because the registry lists aws-na, aws\_na, and us separately as aliases for na. See [Supported Regions](#supported-regions) for the complete list.

Only dash (\-) and underscore (\_) are recognized as separators. A region string using any other separator (a space, a dot, or a slash, for example "aws na") does not match any known region or alias and falls into the "Invalid region" error below.

If no region is found:

```
KeyNotFoundException: Invalid region: <input>
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

The .NET Utils SDK:

1.  Locates the resolved region
2.  Locates the service key within the region endpoints
3.  Returns the endpoint URL

**Example**

```
Region:  eu
Service: contentDelivery
Result:  https://eu-cdn.contentstack.com
```

If the service is unavailable:

```
KeyNotFoundException: Service "unknownService" not found for region "eu"
```

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

**Note:** assetManagement is available for NA only. The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative list of all region identifiers, aliases, and service endpoint URLs.

This SDK does not expose these values as an enum or typed constants, so copy them exactly.

---

## Troubleshooting

### Empty region

**Symptom**

```
ArgumentException: Empty region provided. Please put valid region.
```

**Root cause:** A null or whitespace-only string was passed as region.

**Resolution:** Pass a non-empty region string. See [Region Resolution Rules](#region-resolution-rules) for valid identifiers.

---

### Unknown region

**Symptom**

```
KeyNotFoundException: Invalid region: <input>
```

**Root cause:** The string does not match any region ID or alias in the registry. This is typically caused by a typo or an unsupported region name.

**Resolution:** Check [Supported Regions](#supported-regions) for valid identifiers and aliases.

---

### Unknown service

**Symptom**

```
KeyNotFoundException: Service "<key>" not found for region "<id>"
```

**Root cause:** The service key does not exist for the resolved region. Some keys (such as assetManagement) are available for NA only.

**Resolution:** Verify the service key against [Supported Service Keys](#supported-service-keys). For non-NA regions, check region-specific constraints noted in that section.

---

### Null or empty service

**Symptom**

```
ArgumentNullException: Value cannot be null. (Parameter 'propertyName')
```

or, when service is an empty string:

```
KeyNotFoundException: Service "" not found for region "<id>"
```

**Root cause:** Unlike region, the service parameter has no explicit null/empty guard. Passing null propagates into an internal JsonElement.TryGetProperty() call and surfaces as ArgumentNullException. Passing "" is treated as an ordinary (nonexistent) service key and surfaces as the same KeyNotFoundException used for any unknown service.

**Resolution:** Pass a specific service key from [Supported Service Keys](#supported-service-keys), or call the single-argument overload Endpoint.GetContentstackEndpoint(region) to get all endpoints for the region (see [Return All Endpoints](#return-all-endpoints)).

---

### Stale registry after an upstream region or service addition

**Symptom**

```
KeyNotFoundException: Invalid region: <input>
```

or a service that you know Contentstack added still does not appear when you call Endpoint.GetContentstackEndpoint(region), even after you call Endpoint.ResetCache().

**Root cause:** The local Assets/regions.json file on disk predates the upstream change. Endpoint.ResetCache() only clears the in-memory cache. On the next call, the SDK checks the local Assets/regions.json file on disk first, and only falls back to a live CDN download when that file is missing. If a stale file still exists on disk, ResetCache() alone does not force a network refresh.

**Resolution:** Run python3 Scripts/refresh-region.py (or python Scripts/refresh-region.py on Windows) to overwrite every bin/\*\*/Assets/regions.json next to the built DLL with the latest registry. See [Refreshing the Registry](#refreshing-the-registry).

---

### Registry unavailable

**Symptom**

```
InvalidOperationException: contentstack_utils: regions.json not found and could not be downloaded.
```

**Root cause:** The local bin/Assets/regions.json file does not exist and the CDN download also failed. This typically occurs in environments without outbound internet access.

**Resolution:** Run python3 Scripts/refresh-region.py after restoring network connectivity, or pre-populate bin/Assets/regions.json via your deployment pipeline.

---

### Registry corrupt

**Symptom**

```
InvalidOperationException: contentstack_utils: regions.json is corrupt. Run 'python3 Scripts/refresh-region.py' to re-download it.
```

**Root cause:** The local regions.json file contains invalid JSON, typically from a truncated download.

**Resolution:** Run python3 Scripts/refresh-region.py to replace the file with a fresh download.

---

### Write permission denied

**Symptom**

No exception is thrown. The current process keeps working normally, but regions.json never appears on disk and every new process restart re-downloads it from the CDN.

**Root cause:** The process running the SDK does not have write access to the bin/Assets/ output directory. The SDK writes the downloaded file inside a try/catch that silently discards write failures, so the failure never surfaces as an exception. This occurs in deployed environments with restricted users, read-only filesystems, or misconfigured CI/CD pipelines.

**Resolution:** Grant write permission to the output directory, or pre-populate bin/Assets/regions.json via your deployment pipeline before the application starts. Without one of these, each process restart pays the synchronous CDN download cost described in [Advanced: Registry Internals](#advanced-registry-internals).

---

### macOS SSL certificate verification

**Symptom**

```
WARNING: SSL certificate verification failed. Retrying without verification.
         To fix permanently, run: /Applications/Python*/Install Certificates.command
```

**Root cause:** On macOS with a [Python.org](https://www.python.org/) build, refresh-region.py may encounter an SSL certificate error on first run. The script retries automatically without verification.

**Resolution:** Run /Applications/Python\*/Install Certificates.command to install the required root certificates permanently.

---

## Advanced: Registry Internals

This section covers registry caching and refresh internals. Skip it unless you are debugging a caching issue or automating registry refresh in a deployment pipeline.

### Loading and Caching Priority

The .NET Utils SDK loads the registry in the following priority order, and never commits regions.json to source control (excluded via .gitignore, never packed into the NuGet package):

| Priority | Source | Behavior |
| --- | --- | --- |
| 1 | In-memory cache (\_regionsData) | Populated on first call, reused for the lifetime of the process. Zero I/O. |
| 2 | Local disk file (Assets/regions.json) | Read from bin/Assets/ next to Contentstack.Utils.dll in the output directory |
| 3 | CDN download fallback | Downloads from https://artifacts.contentstack.com/regions.json, writes to disk for future calls |

From package install through the first API call, the workflow looks like this:

```
dotnet add package contentstack.utils
          │
          ▼
dotnet build
  → MSBuild target fires (SDK-style projects using PackageReference only)
  → Scripts/refresh-region.py placed in project
          │
          ▼
dotnet run
  → App starts → first call to GetContentstackEndpoint()
  → regions.json not found on disk
  → Downloads from CDN → writes to bin/Assets/regions.json
  → Cached in memory for process lifetime
```

Endpoint.ResetCache() clears only priority 1, the in-memory cache. The next call still checks priority 2, the local Assets/regions.json file on disk, first. It reaches priority 3, the CDN, only when that local file is missing. If a stale regions.json file still exists on disk, calling Endpoint.ResetCache() reloads that same stale file and does not reach the CDN. Endpoint.ResetCache() is intended for testing only. Do not call it in production code. See [Refreshing the Registry](#refreshing-the-registry) to force a network refresh.

### Network Behavior

The CDN download has these characteristics:

-   **Timeout:** Explicit 30 seconds, via HttpClient.
-   **Proxy support:** Uses the default HttpClientHandler, which honors the system/environment proxy configuration unless your application explicitly disables it.
-   **Firewall:** Allow outbound access to artifacts.contentstack.com.

On the first run in a new deployment (no regions.json on disk), the SDK makes a synchronous CDN call before returning the endpoint URL. Run python3 Scripts/refresh-region.py in your deployment pipeline to pre-populate bin/Assets/regions.json and avoid this blocking call in production.

### Refreshing the Registry

Scripts/refresh-region.py is bundled inside the NuGet package. On dotnet build, an MSBuild target copies it into your project's Scripts/ folder. This applies to SDK-style projects using PackageReference (the default for .NET Core/5+ projects). It does not run for packages.config\-based projects or on dotnet restore alone.

To manually refresh the registry with the latest version from the CDN, run from your project root:

-   For Mac/Linux

```
python3 Scripts/refresh-region.py
```

-   For Windows

```
python Scripts/refresh-region.py
```

```
python3 Scripts/refresh-region.py   (run anytime to update)
          │
          ▼
  Download latest regions.json from CDN → overwrite bin/**/Assets/regions.json
```

This overwrites every bin/\*\*/Assets/regions.json found in your project, making newly added regions and services available without requiring a new SDK release. Run this script whenever a region or service is added upstream after your local regions.json was last refreshed. Endpoint.ResetCache() alone does not force a network download while a local regions.json file still exists on disk, so it does not substitute for running this script.

---
