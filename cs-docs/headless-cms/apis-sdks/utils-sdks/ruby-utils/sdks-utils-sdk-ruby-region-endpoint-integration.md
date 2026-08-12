---
title: "Ruby Utils - Configure Region Endpoints in Ruby Utils SDK"
description: "Configure region endpoints dynamically using the Contentstack Ruby Utils SDK. A Ruby developer guide to dynamic resolution without hardcoding URLs."
url: /developers/sdks/utils-sdk/ruby/region-endpoint-integration
---

# Ruby Utils - Configure Region Endpoints in Ruby Utils SDK

## Configure Region Endpoints in Ruby Utils SDK

## Overview

Contentstack services are available across multiple regions with different endpoint URLs. Hardcoding these URLs requires code changes as regions and services evolve. The Ruby Utils SDK resolves the correct endpoint dynamically from the canonical regions registry, allowing the same initialization code to work across supported regions without hardcoded strings.

Use region resolution when your application supports multiple regions or cloud-specific regions.

This feature is optional if:

-   You connect to only one Contentstack region
-   You hardcode the endpoint

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Resolve a single service URL | [Resolve a single service endpoint](#resolve-a-single-service-endpoint) | ContentstackUtils::Endpoint.get\_contentstack\_endpoint(region:, service:) |
| Resolve all endpoints as a hash | [Resolve all endpoints for a region](#resolve-all-endpoints-for-a-region) | ContentstackUtils::Endpoint.get\_contentstack\_endpoint(region:) |
| Strip https:// for host configuration | [Omit the HTTPS Scheme](#omit-the-https-scheme) | get\_contentstack\_endpoint(... omit\_https: true) |
| Use a region alias | [Use a region alias](#use-a-region-alias) | get\_contentstack\_endpoint(region: 'azure\_na', ...) |
| Read from environment variable | [Read from environment variable](#read-from-environment-variable) | ENV.fetch('CONTENTSTACK\_REGION', 'na') |
| Refresh registry manually | [Refresh the registry manually](#refresh-the-registry-manually) | ContentstackUtils::Endpoint.refresh\_regions |
| Call via module proxy | [Use the module proxy](#use-the-module-proxy) | ContentstackUtils.get\_contentstack\_endpoint(region:, service:) |
| Look up the full parameter, return type, and exception reference | [Endpoint Resolution API](#endpoint-resolution-api) | ContentstackUtils::Endpoint.get\_contentstack\_endpoint(region:, service:, omit\_https:) |
| Look up supported region IDs and aliases | [Supported Regions](#supported-regions) | na, eu, au, azure-na, azure-eu, gcp-na, gcp-eu |
| Look up supported service keys | [Supported Services](#supported-services) | contentDelivery, contentManagement |
| Diagnose a resolution error | [Troubleshooting](#troubleshooting) | ArgumentError |
| Review registry loading, caching, and refresh internals | [Advanced: Registry Internals](#advanced-registry-internals) | @regions\_data |

---

## Prerequisites

**Mandatory:**

-   contentstack\_utils gem installed, version 1.3.0 or later (the version that introduced ContentstackUtils::Endpoint.get\_contentstack\_endpoint). See [Ruby Utils SDK Setup Guide](https://www.contentstack.com/docs/developers/sdks/utils-sdk/ruby/get-started-with-ruby-utils-library).

**Optional:**

-   Familiarity with Contentstack regions: [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks)

---

## Resolve a single service endpoint

On the first call, the SDK loads regions.json from disk or downloads it from the content delivery network (CDN) if the file is absent, then caches the parsed registry in memory. Subsequent calls resolve endpoints from the in-memory cache without additional disk or network I/O.

**Note:** The cache has no TTL or timer. Registry changes on the CDN require a process restart, or you call ContentstackUtils::Endpoint.refresh\_regions manually. See [Refresh the Registry Manually](#refresh-the-registry-manually).

```
require 'contentstack_utils'

begin
  url = ContentstackUtils::Endpoint.get_contentstack_endpoint(
    region:  '<CONTENTSTACK_REGION>',
    service: '<SERVICE_KEY>'
  )
  # => "https://cdn.contentstack.io"
rescue ArgumentError => e
  puts "Invalid region or service: #{e.message}"
rescue RuntimeError => e
  puts "Registry error: #{e.message}"
end
```

---

## Resolve all endpoints for a region

Use this method when you need more than one service endpoint for the same region.

When service is omitted, nil, or blank, the method returns a hash of all service endpoints for the region. This is expected behavior, not an error.

```
begin
  endpoints = ContentstackUtils::Endpoint.get_contentstack_endpoint(region: '<CONTENTSTACK_REGION>')
  # => {
  #      "application"       => "https://eu-app.contentstack.com",
  #      "contentDelivery"   => "https://eu-cdn.contentstack.com",
  #      "contentManagement" => "https://eu-api.contentstack.com",
  #      ...
  #    }
rescue ArgumentError => e
  puts "Invalid region: #{e.message}"
rescue RuntimeError => e
  puts "Registry error: #{e.message}"
end
```

---

## Omit the HTTPS Scheme

Most applications should use the default overload, which returns a full HTTPS URL. Use omit\_https: true only when an API specifically expects a hostname without the scheme, since the SDK's host configuration adds https:// internally and a full URL would double the scheme. The connection is always HTTPS.

```
begin
  host = ContentstackUtils::Endpoint.get_contentstack_endpoint(
    region:     '<CONTENTSTACK_REGION>',
    service:    '<SERVICE_KEY>',
    omit_https: true
  )
  # => "cdn.contentstack.io"
rescue ArgumentError => e
  puts "Invalid region or service: #{e.message}"
rescue RuntimeError => e
  puts "Registry error: #{e.message}"
end
```

---

## Use a region alias

The SDK normalizes aliases to the canonical region ID, ignoring case and treating dashes and underscores as equivalent. For the full alias list, see [Supported Regions](#supported-regions).

```
begin
  url = ContentstackUtils::Endpoint.get_contentstack_endpoint(
    region:  'azure_na',
    service: 'contentManagement'
  )
  # => "https://azure-na-api.contentstack.com"
rescue ArgumentError => e
  puts "Invalid region or service: #{e.message}"
rescue RuntimeError => e
  puts "Registry error: #{e.message}"
end
```

---

## Read from environment variable

```
region = ENV.fetch('CONTENTSTACK_REGION', 'na')

begin
  url = ContentstackUtils::Endpoint.get_contentstack_endpoint(
    region:  region,
    service: '<SERVICE_KEY>'
  )
rescue ArgumentError => e
  puts "Invalid region or service: #{e.message}"
rescue RuntimeError => e
  puts "Registry error: #{e.message}"
end
```

---

## Use the module proxy

ContentstackUtils exposes a top-level proxy that delegates to ContentstackUtils::Endpoint.get\_contentstack\_endpoint. Use this form when you prefer the shorter module-level call.

```
begin
  url = ContentstackUtils.get_contentstack_endpoint(
    region:  '<CONTENTSTACK_REGION>',
    service: '<SERVICE_KEY>'
  )
rescue ArgumentError => e
  puts "Invalid region or service: #{e.message}"
rescue RuntimeError => e
  puts "Registry error: #{e.message}"
end
```

---

## Refresh the Registry Manually

Call ContentstackUtils::Endpoint.refresh\_regions whenever the cached registry is outdated, for example after Contentstack publishes a new region or service. ContentstackUtils::Endpoint caches the registry in memory for the lifetime of the process, so a newly published region or service does not resolve until you make this call.

```
begin
  ContentstackUtils::Endpoint.refresh_regions
rescue RuntimeError => e
  puts "Registry refresh failed: #{e.message}"
end
```

This downloads the latest regions.json from the [Regions Registry](https://artifacts.contentstack.com/regions.json), replaces the local copy, and clears the in-memory cache.

---

## Endpoint Resolution API

### ContentstackUtils::Endpoint.get\_contentstack\_endpoint

Resolves a Contentstack service URL for a given region.

```
ContentstackUtils::Endpoint.get_contentstack_endpoint(
  region:     'us',
  service:    '',
  omit_https: false
)
```

### Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| region | String | 'us' | Region identifier or alias (case-insensitive). See [Supported Regions](#supported-regions). |
| service | String | '' | Service key to resolve. When empty, all endpoints for the region are returned. See [Supported Services](#supported-services). |
| omit\_https | Boolean | false | When true, strips the https:// scheme from the returned URL(s). |

### Return Value

| Condition | Return type | Description |
| --- | --- | --- |
| service is empty | Hash | All endpoint key-value pairs for the region. |
| service is specified | String | The resolved URL for that service. |
| omit\_https: true | String or Hash | Same as above with https:// stripped. |

### Exceptions

| Exception | Condition |
| --- | --- |
| ArgumentError | region is nil, empty, or whitespace. |
| ArgumentError | region does not match any known id or alias. |
| ArgumentError | service key does not exist for the resolved region. |
| RuntimeError | Region metadata file cannot be read or parsed. |
| RuntimeError | Network download of region metadata fails. |

---

## Supported Regions

| Region ID | Cloud | Location | Default | Aliases |
| --- | --- | --- | --- | --- |
| na | AWS | North America | Yes | us, aws-na, aws\_na |
| eu | AWS | Europe | No | aws-eu, aws\_eu |
| au | AWS | Australia | No | aws-au, aws\_au |
| azure-na | Azure | North America | No | azure\_na |
| azure-eu | Azure | Europe | No | azure\_eu |
| gcp-na | GCP | North America | No | gcp\_na |
| gcp-eu | GCP | Europe | No | gcp\_eu |

All alias lookups are case-insensitive. US, us, and Us all resolve to the na region.

Only dash (\-) and underscore (\_) are recognized as separators. A region string using any other separator (a space, a dot, or a slash, for example "aws na") does not match any known region or alias and raises the "Invalid region" error above. Dash and underscore variants resolve identically only because both forms are listed as separate alias entries in the regions registry, not because the SDK normalizes separators at runtime.

The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative list of region identifiers and aliases.

---

## Supported Services

| Service Key | Description |
| --- | --- |
| application | Contentstack web application |
| contentDelivery | Content Delivery API (CDA) |
| contentManagement | Content Management API (CMA) |
| auth | Authentication API |
| graphqlDelivery | GraphQL Delivery API |
| preview | REST Preview API |
| graphqlPreview | GraphQL Preview API |
| images | Images service |
| assets | Assets service |
| automate | Automate API |
| launch | Launch API |
| developerHub | Developer Hub API |
| brandKit | Brand Kit API |
| genAI | Generative AI service |
| personalizeManagement | Personalize Management API |
| personalizeEdge | Personalize Edge API |
| composableStudio | Composable Studio API |
| assetManagement | Asset Management API (NA only) |

The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the canonical source for all service keys. assetManagement is available for NA only.

This SDK does not expose these values as constants or a module of frozen values, so copy them exactly.

---

## Troubleshooting

### Invalid region

**Symptom**

```
begin
  ContentstackUtils::Endpoint.get_contentstack_endpoint(
    region:  'invalid-region',
    service: 'contentDelivery'
  )
rescue ArgumentError => e
  puts e.message  # => "Invalid region: invalid-region"
end
```

**Root cause:** The string does not match any region ID or alias in the registry. This is typically caused by a typo or an unsupported region name.

**Resolution:** Check the [Supported Regions](#supported-regions) table for valid identifiers and aliases.

---

### Service not found

**Symptom**

```
ArgumentError: Service "unknownService" not found for region "eu"
```

**Root cause:** The service key does not exist for the resolved region. Some keys (such as assetManagement) are available for NA only.

**Resolution:** Verify the service key against [Supported Services](#supported-services). For non-NA regions, check region-specific constraints noted in that section.

---

### Registry unavailable

**Symptom**

```
begin
  ContentstackUtils::Endpoint.get_contentstack_endpoint(region: 'eu')
rescue RuntimeError => e
  puts e.message  # => "Failed to fetch region metadata: ..."
end
```

**Root cause:** The local regions.json file was absent and the network download from the Contentstack registry failed.

**Resolution:** Run ContentstackUtils::Endpoint.refresh\_regions after restoring network connectivity to artifacts.contentstack.com.

---

### New region or service does not resolve

**Symptom**

```
begin
  ContentstackUtils::Endpoint.get_contentstack_endpoint(region: 'newly-published-region')
rescue ArgumentError => e
  puts e.message  # => "Invalid region: newly-published-region"
end
```

**Root cause:** ContentstackUtils::Endpoint caches the regions registry in memory for the lifetime of the process. A region or service that Contentstack published after your process started is not visible until you refresh the cache.

**Resolution:** Call ContentstackUtils::Endpoint.refresh\_regions to reload the registry. See [Refresh the Registry Manually](#refresh-the-registry-manually).

---

## Advanced: Registry Internals

This section covers caching internals and the resolution flow. Skip it unless you're debugging a caching issue or automating registry refresh in a deployment pipeline. To force a refresh, see [Refresh the Registry Manually](#refresh-the-registry-manually).

**Resolution Flow**

```
get_contentstack_endpoint(region, service, omit_https)
        │
        ▼
  Validate region (raise ArgumentError if blank)
        │
        ▼
  load_regions()
  ┌─────┴──────────────────────────────────────┐
  │  In-memory cache present?  ──Yes──► return  │
  │          │ No                               │
  │          ▼                                  │
  │  regions.json on disk?  ──No──► download    │
  │          │ Yes                              │
  │          ▼                                  │
  │  Parse JSON ──► cache ──► return            │
  └─────────────────────────────────────────────┘
        │
        ▼
  Find region by id or alias (case-insensitive)
        │
        ├── Not found ──► raise ArgumentError
        │
        ▼
  service empty?
        ├── Yes ──► return endpoints hash (optionally strip https)
        │
        └── No  ──► look up service key
                        ├── Not found ──► raise ArgumentError
                        └── Found ──► return URL (optionally strip https)
```

The in-memory cache is an unsynchronized memoized instance variable. No Mutex or Monitor guards it.

-   **Risk:** Under a threaded application server (such as Puma running with multiple threads), concurrent first calls could race and download the registry more than once.
-   **Impact:** Not data corruption (the downloaded JSON is idempotent), but the first-call cost can be paid more than once under concurrent load.

The registry download has these network characteristics:

-   **Timeout:** Explicit 30-second connect and read timeout.
-   **Proxy support:** Uses http\_proxy/https\_proxy environment variables automatically if set.
-   **Firewall:** Allow outbound access to artifacts.contentstack.com.
