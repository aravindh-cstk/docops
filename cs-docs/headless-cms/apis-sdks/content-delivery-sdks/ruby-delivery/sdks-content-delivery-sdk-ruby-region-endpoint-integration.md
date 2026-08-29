---
title: "Ruby CDA - Configure Region Endpoints in Ruby Content Delivery SDK"
description: "Configure region endpoints in the Contentstack Ruby Content Delivery SDK. A Ruby developer guide to connecting to the correct region without hardcoding URLs."
url: /developers/sdks/content-delivery-sdk/ruby/region-endpoint-integration
uid: blt3efb1186c97180f2
---

# Ruby CDA - Configure Region Endpoints in Ruby Content Delivery SDK

## Configure Region Endpoints in Ruby Content Delivery SDK

## Overview

Contentstack services are available across multiple regions with different endpoint URLs. Hardcoding these URLs requires code changes as regions and services evolve. The Ruby Content Delivery SDK resolves the correct endpoint dynamically from the on-disk regions registry (regions.json), letting the same initialization code work across supported regions without hardcoded strings.

Use this feature when:

-   Your application supports multiple regions, including cloud-specific regions (Azure, GCP)
-   You want to avoid hardcoding endpoint URLs into your code

This feature is optional if your application only connects to one Contentstack region. Calling get\_contentstack\_endpoint instead of hardcoding the URL still avoids embedding a fixed host in your code, so you can change regions later without editing every call site.

## Quick Reference

The following table maps each use case to its section and primary API call.

| Use Case | Section | Key Call |
| --- | --- | --- |
| Configure the SDK for a known region | [Initialize the Stack](#initialize-the-stack) | Contentstack::Client.new(... region: Contentstack::Region::EU) |
| Resolve a service URL without a full client | [Resolve an Endpoint Directly](#resolve-an-endpoint-directly) | Contentstack::Endpoint.get\_contentstack\_endpoint(region, service) |
| Use the backward-compatible proxy | [Module-Level Proxy](#module-level-proxy) | Contentstack.get\_contentstack\_endpoint(region) |
| Use a custom host domain | [Custom Host](#custom-host) | Contentstack::Endpoint.get\_contentstack\_endpoint(region, service, host) |
| Read region from an environment variable | [Read from Environment Variable](#read-from-environment-variable) | ENV.fetch('CONTENTSTACK\_REGION', Contentstack::Region::US) |
| Look up supported region constants and aliases | [Supported Regions](#supported-regions) | Contentstack::Region::EU |
| Look up supported service constants | [Supported Services](#supported-services) | Contentstack::Service::CMA |
| Refresh region metadata after a new region is published | [Refreshing Metadata](#refreshing-metadata) | Contentstack::Endpoint.refresh\_regions |
| Diagnose an unknown region or service error | [Troubleshooting](#troubleshooting) | Contentstack::Error |

---

## Prerequisites

**Mandatory:**

-   Ruby version 3.3 or later
-   Ruby Content Delivery API (CDA) SDK (the contentstack gem) installed, version 0.9.0 or later (the version that introduced Contentstack::Endpoint.get\_contentstack\_endpoint). See [Ruby CDA SDK Setup Guide](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ruby/reference).
-   A Contentstack account with at least one stack

**Optional:**

-   Familiarity with Contentstack regions: [Selecting a Region in SDKs](https://www.contentstack.com/docs/administration/selecting-region-in-sdks). Your stack's region is set when the stack is created and is visible under Organization Settings → Stacks in the Contentstack dashboard.
-   The full list of region constants and aliases this SDK accepts: see [Supported Regions](#supported-regions)

---

## Initialize the Stack

Pass a region: option to Contentstack::Client.new. Endpoint resolution is automatic. No other changes are required.

If you omit the region: option, Contentstack::Client.new defaults to Contentstack::Region::US. If you pass a region string or constant the SDK does not recognize, Contentstack::Client.new raises Contentstack::Error with the message Unknown region '<region>'. Supported regions: .... See [Unknown region](#unknown-region) in Troubleshooting for how to resolve it.

```
# US region (default — no region option needed)
stack = Contentstack::Client.new('<API_KEY>', '<DELIVERY_TOKEN>', '<ENVIRONMENT>')

# EU region
stack = Contentstack::Client.new('<API_KEY>', '<DELIVERY_TOKEN>', '<ENVIRONMENT>', {
  region: Contentstack::Region::EU
})

# Australia
stack = Contentstack::Client.new('<API_KEY>', '<DELIVERY_TOKEN>', '<ENVIRONMENT>', {
  region: Contentstack::Region::AU
})

# Azure North America
stack = Contentstack::Client.new('<API_KEY>', '<DELIVERY_TOKEN>', '<ENVIRONMENT>', {
  region: Contentstack::Region::AZURE_NA
})

# GCP Europe
stack = Contentstack::Client.new('<API_KEY>', '<DELIVERY_TOKEN>', '<ENVIRONMENT>', {
  region: Contentstack::Region::GCP_EU
})
```

---

## Resolve an Endpoint Directly

Use Contentstack::Endpoint.get\_contentstack\_endpoint to resolve a service URL for any region without initializing a full client. It accepts either a Contentstack::Region constant or a string alias, such as 'eu' or 'azure-na'. See [Supported Regions](#supported-regions) for the full list of constants and aliases.

```
require 'contentstack'

# Content Delivery API (CDA) endpoint �� default service
Contentstack::Endpoint.get_contentstack_endpoint('us')
# => "https://cdn.contentstack.io"

Contentstack::Endpoint.get_contentstack_endpoint('eu')
# => "https://eu-cdn.contentstack.com"

Contentstack::Endpoint.get_contentstack_endpoint('au')
# => "https://au-cdn.contentstack.com"

Contentstack::Endpoint.get_contentstack_endpoint('azure-na')
# => "https://azure-na-cdn.contentstack.com"

# Content Management API (CMA) endpoint
Contentstack::Endpoint.get_contentstack_endpoint('us', 'cma')
# => "https://api.contentstack.io"

Contentstack::Endpoint.get_contentstack_endpoint('eu', 'cma')
# => "https://eu-api.contentstack.com"

# Preview endpoint
Contentstack::Endpoint.get_contentstack_endpoint('us', 'preview')
# => "https://preview.contentstack.io"
```

Using Contentstack::Region and Contentstack::Service constants is recommended over raw strings:

```
Contentstack::Endpoint.get_contentstack_endpoint(
  Contentstack::Region::EU,
  Contentstack::Service::CMA
)
# => "https://eu-api.contentstack.com"
```

**Parameters**

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| region | String | Yes | none | Region key or alias (e.g., 'eu', 'azure-na') |
| service | String | No | 'cda' | Service type: 'cda', 'cma', or 'preview' |
| custom\_host | String | No | nil | Custom base domain. The region prefix is prepended automatically |

**Returns:** String. Fully qualified HTTPS URL.  
**Raises:** Contentstack::Error on unknown region, unknown service, or registry fetch failure.

---

## Module-Level Proxy

Contentstack.get\_contentstack\_endpoint is a backward-compatible proxy. Existing integrations using the utils SDK method continue to work without code changes.

```
Contentstack.get_contentstack_endpoint('eu')
# => "https://eu-cdn.contentstack.com"

Contentstack.get_contentstack_endpoint('azure-eu', Contentstack::Service::CMA)
# => "https://azure-eu-api.contentstack.com"
```

When contentstack\_utils ships endpoint resolution support, the SDK automatically delegates to it. No code change is required in your application.

---

## Custom Host

Pass a custom domain as the third argument. The SDK derives the region content delivery network (CDN) prefix from regions.json and prepends it to your domain.

```
Contentstack::Endpoint.get_contentstack_endpoint('eu', 'cda', 'example.com')
# => "https://eu-cdn.example.com"

Contentstack::Endpoint.get_contentstack_endpoint('azure-na', 'cda', 'example.com')
# => "https://azure-na-cdn.example.com"
```

Custom host via Client initialization:

```
stack = Contentstack::Client.new('<API_KEY>', '<DELIVERY_TOKEN>', '<ENVIRONMENT>', {
  region: Contentstack::Region::EU,
  host:   'example.com'
})
stack.host
# => "https://eu-cdn.example.com"
```

---

## Read from Environment Variable

When the region is supplied through an environment variable, pass it to Contentstack::Client.new as the region: option.

```
region = ENV.fetch('CONTENTSTACK_REGION', Contentstack::Region::US)

stack = Contentstack::Client.new(
  ENV['CONTENTSTACK_API_KEY'],
  ENV['CONTENTSTACK_DELIVERY_TOKEN'],
  ENV['CONTENTSTACK_ENVIRONMENT'],
  { region: region }
)
```

---

## Region Metadata Behavior

### Loading Behavior

Contentstack::Endpoint.get\_contentstack\_endpoint reads region metadata from lib/data/regions.json on every call. This SDK keeps no in-memory cache, so there is no shared mutable state to race on across threads. The trade-off is a disk read on every call instead of an in-memory lookup.

1.  On the first call, the SDK looks for lib/data/regions.json inside the gem directory.
2.  If the file is absent, the SDK fetches it from the Contentstack registry and writes it to disk.
3.  Every call, first or subsequent, reads the current contents of lib/data/regions.json from disk.

```
First call (file absent)
  └─▶ fetch from registry ──▶ write to lib/data/regions.json ──▶ read file ──▶ return URL

Every other call
  └─▶ read lib/data/regions.json ──▶ return URL
```

The SDK reads regions.json fresh from disk on every call, but the file itself only changes when you run Contentstack::Endpoint.refresh\_regions (see [Refreshing Metadata](#refreshing-metadata)). A region Contentstack publishes after your last refresh stays unavailable until you run refresh\_regions again.

### Network Behavior

Any network fetch this SDK performs (the implicit fetch when the local file is absent, or the explicit fetch triggered by Contentstack::Endpoint.refresh\_regions) has these characteristics:

-   **Timeout:** None configured explicitly. Relies on Ruby's Net::HTTP default (60 seconds).
-   **Proxy support:** Uses the http\_proxy/https\_proxy environment variables automatically if you set them.
-   **Firewall:** Allow outbound access to artifacts.contentstack.com.

### Refreshing Metadata

Call Contentstack::Endpoint.refresh\_regions, or run the equivalent rake task, to fetch the current regions.json from https://artifacts.contentstack.com/regions.json and overwrite the local copy:

```
bundle exec rake refresh_regions
```

Sample output:

```
Fetching latest region metadata from registry...
regions.json updated at: /path/to/gem/lib/data/regions.json
```

Run this after a Contentstack infrastructure change or when Contentstack publishes a new region. Until you run it, get\_contentstack\_endpoint continues to resolve against the previously downloaded regions.json, even though it reads that file fresh on every call.

**Note:** refresh\_regions writes to disk and fails on a read-only filesystem (Docker images, packaged gems, CI/CD runners). See [Refresh fails on a read-only filesystem](#refresh-fails-on-a-read-only-filesystem) in Troubleshooting.

---

## Supported Regions

Region matching is case-insensitive and accepts either the canonical ID or any declared alias (see find\_region in Contentstack::Endpoint). For example, aws-na, aws\_na, and us all resolve to the na region. There is no Contentstack::Region::NA constant. Region::US is the constant that maps to the canonical na region.

| Constant | Region ID | Cloud | Location | Default | Aliases |
| --- | --- | --- | --- | --- | --- |
| Contentstack::Region::US | na | AWS | North America | Yes | us, aws-na, aws\_na |
| Contentstack::Region::EU | eu | AWS | Europe | No | aws-eu, aws\_eu |
| Contentstack::Region::AU | au | AWS | Australia | No | aws-au, aws\_au |
| Contentstack::Region::AZURE\_NA | azure-na | Azure | North America | No | azure\_na |
| Contentstack::Region::AZURE\_EU | azure-eu | Azure | Europe | No | azure\_eu |
| Contentstack::Region::GCP\_NA | gcp-na | GCP | North America | No | gcp\_na |
| Contentstack::Region::GCP\_EU | gcp-eu | GCP | Europe | No | gcp\_eu |

The [Regions Registry](https://artifacts.contentstack.com/regions.json) is the authoritative list of region identifiers and aliases.

---

## Supported Services

| Constant | Value | Description |
| --- | --- | --- |
| Contentstack::Service::CDA | cda | Content Delivery API (default) |
| Contentstack::Service::CMA | cma | Content Management API |
| Contentstack::Service::PREVIEW | preview | Live Preview |

---

## Troubleshooting

### Unknown region

**Symptom**

```
Contentstack::Error: Unknown region 'mars'. Supported regions: us, eu, au, azure-na, azure-eu, gcp-na, gcp-eu.
```

**Root cause:** The region string does not match any known region ID or alias. This is typically caused by a typo or an unsupported region name.

**Resolution:** Check the [Supported Regions](#supported-regions) table for valid identifiers. Aliases are accepted. For example, 'us' resolves to the NA region.

---

### Unknown service

**Symptom**

```
Contentstack::Error: Unknown service 'graphql'. Supported services: cda, cma, preview.
```

**Root cause:** The service string does not match any known service key for this SDK. An empty string ('') triggers this same error, since it isn't a valid service key either.

**Resolution:** Use one of the values listed in [Supported Services](#supported-services), or use a Contentstack::Service constant. Omit the argument entirely to use the default cda service rather than passing an empty string.

---

### Registry unavailable

**Symptom**

```
Contentstack::Error: Failed to fetch region metadata from registry (HTTP 503). Ensure network access and try again.
```

**Root cause:** The local lib/data/regions.json file was absent, and the fallback network request to the Contentstack registry failed.

**Resolution:** Ensure network access to artifacts.contentstack.com. After restoring connectivity, run bundle exec rake refresh\_regions to pre-populate the file.

---

### New region or service does not resolve

**Symptom**

```
begin
  Contentstack::Endpoint.get_contentstack_endpoint('newly-published-region', 'cda')
rescue Contentstack::Error => e
  puts e.message  # => "Unknown region 'newly-published-region'. Supported regions: ..."
end
```

**Root cause:** get\_contentstack\_endpoint reads lib/data/regions.json fresh from disk on every call, but the file itself only changes when you run Contentstack::Endpoint.refresh\_regions. A region or service that Contentstack published after your last refresh is not in that file yet, so every call still resolves against the previous contents.

**Resolution:** Run Contentstack::Endpoint.refresh\_regions (or bundle exec rake refresh\_regions) to fetch the current registry and overwrite the file. See [Refreshing Metadata](#refreshing-metadata).

---

### Refresh fails on a read-only filesystem

**Symptom**

```
Contentstack::Endpoint.refresh_regions
# Errno::EROFS: Read-only file system @ rb_sysopen - /path/to/gem/lib/data/regions.json
```

**Root cause:** refresh\_regions writes the fetched registry with File.write and does not rescue filesystem errors. Docker images, packaged gem installs, and CI/CD runners often run with a read-only root filesystem, so the write raises Errno::EROFS and aborts the refresh. This differs from the automatic fallback fetch inside get\_contentstack\_endpoint, which catches the same write failure and only warns, so normal resolution calls keep working even though the fetched data can't be cached to disk.

**Resolution:** Generate regions.json while building your image, before the filesystem becomes read-only, make the lib/data/ directory writable in your deployment, or run refresh\_regions in a writable environment and ship the resulting file with your deployment.
