---
title: "Get Contentstack Endpoints"
description: "Use getContentstackEndpoint to resolve region-based API endpoints with error handling and TypeScript support for multi-region apps."
url: /developers/sdks/utils-sdk/javascript/get-contentstack-endpoints
---

# Get Contentstack Endpoints

## Get Contentstack Endpoints

The getContentstackEndpoint method returns the correct Contentstack API base URL (host) for a given region (US, EU, AU, etc.) and, optionally, a specific API (such as Delivery, Management, GraphQL, or Auth).

**Note:** The function can return either a single endpoint URL or the full endpoints object for the region.

## When to Use This Function

**Use this helper when:**

-   Your app supports multiple regions.
-   You want to avoid hardcoding base URLs.
-   You may add regions in the future.

**Skip it when:**

-   Your stack always uses the default region.
-   You already have a fixed base URL (e.g., via environment variables).

This helper is **optional**, but recommended for multi-region flexibility.

## Minimal Working Example

Here’s a minimal example showing how to call the function.

```
import { getContentstackEndpoint } from '@contentstack/utils';
const contentDeliveryUrl = getContentstackEndpoint('na', 'contentDelivery');
console.log(contentDeliveryUrl);
```

**Expected output:** https://cdn.contentstack.io

## API Signature

```
function getContentstackEndpoint(
  region?: string,
  service?: string,
  omitHttps?: boolean
): string | ContentstackEndpoints
```

## Parameters and Defaults

All parameters are **optional**. When a parameter is omitted, the value in the **Default** column is used.

<table><tbody><tr><td><strong>Parameter</strong></td><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Description</strong></td></tr><tr><td>region</td><td>string</td><td><span class="code">'us'</span></td><td>Region ID or alias. <span class="code">'us'</span> is the default and maps to region ID <span class="code">na</span> (North America). Other examples: <span class="code">'eu'</span>, <span class="code">'na'</span>, <span class="code">'au'</span>, <span class="code">'azure-na'</span>, <span class="code">'gcp-eu'</span>.</td></tr><tr><td>service</td><td>string</td><td><span class="code">''</span></td><td>A key from the region's endpoint configuration (e.g., <span class="code">contentDelivery</span>, <span class="code">application</span>, <span class="code">contentManagement</span>, <span class="code">auth</span>).</td></tr><tr><td>omitHttps</td><td>boolean</td><td><span class="code">false</span></td><td>When <span class="code">true</span>, returned URL(s) are without the <span class="code">https://</span> prefix.</td></tr></tbody></table>

**Returns**

-   **If** **service** **is provided and valid:** A string, the base URL for that service in the given region (e.g., 'https://cdn.contentstack.io' or 'cdn.contentstack.io' when omitHttps is true).
-   **If** **service** **is empty or omitted:** A ContentstackEndpoints object with all service endpoints for the region. Each value is either a URL string or a nested object of endpoints, depending on the region data.

The following section lists the supported region IDs and their aliases.

## Supported Regions

Regions can be passed by **ID** or **alias**.

<table><tbody><tr><td><strong>Region ID</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">na</span></td><td>North America (default; alias: <span class="code">us</span>)</td></tr><tr><td><span class="code">eu</span></td><td>Europe</td></tr><tr><td><span class="code">au</span></td><td>Australia</td></tr><tr><td><span class="code">azure-na</span></td><td>Azure North America</td></tr><tr><td><span class="code">azure-eu</span></td><td>Azure Europe</td></tr><tr><td><span class="code">gcp-na</span></td><td>GCP North America</td></tr><tr><td><span class="code">gcp-eu</span></td><td>GCP Europe</td></tr></tbody></table>

## Default Behavior

-   **Default Region:** The default region is North America (na, alias: us). If the region is omitted or undefined, the default is used.
-   **Region Normalization & Validation:** Region lookup is **case-insensitive** and ignores leading/trailing whitespace.
    -   A **strictly empty string** ('') for the region throws an error.
    -   A **whitespace-only string** (e.g., ' ') is trimmed and defaults to 'us' (it does _not_ throw an error).
-   **Service Parameter:**
    -   If service is a strictly empty string (''), it is treated as falsy/omitted and returns all endpoints for the region.
    -   A **whitespace-only string** (e.g., ' ') is treated as a truthy but invalid service name and will **throw an error**.
-   **HTTPS Protocol:** omitHttps defaults to false; returned URLs include the https:// prefix unless explicitly set to true.

## Errors and Error Handling

The function **throws** a descriptive Error instance on invalid input. It does **not** return null or undefined. It throws in these cases:

-   **Empty region:** region is '' (empty string). Omitted region is allowed and defaults to 'us' (North America / na); only an explicit empty string throws.
    
    ```
    Region could not be empty. Provide a valid region and try again.
    ```
    
-   **Unknown region:** region is not a valid ID or alias
    
    ```
    Provided region <region> is invalid. Provide a valid region and try again.
    ```
    
-   **Unknown service:** service is non-empty but not defined for that region
    
    ```
    Service "{service}" is not available in region "{regionId}". Provide a valid service name and region ID and try again.
    ```
    
-   **Invalid regions data:** Bundled regions file is malformed
    
    ```
    The region's configuration file is not valid. Reinstall the SDK and try again.
    ```
    

**Catching Errors**

Use try/catch when you need to handle failures (e.g. user-provided or config-driven region/service):

```
try {
  const url = getContentstackEndpoint('', 'contentDelivery');
} catch (e) {
  // Error: Region could not be empty. Provide a valid region and try again.
}

try {
  const url = getContentstackEndpoint('invalid-region');
} catch (e) {
  // Provided region "na" is invalid. Provide a valid region and try again.
}

try {
  const url = getContentstackEndpoint('na', 'invalidService');
} catch (e) {
  // Error: Service "{invalidService}" is not available in region "{na}". Provide a valid service name and region ID and try again
}
```

## Usage Examples

Below are additional usage examples for common scenarios

**Note on TypeScript Types:** Because the function signature returns a union type (string | ContentstackEndpoints), TypeScript requires you to either **narrow** the type at runtime or use **explicit casting** to access specific properties.

### Default Region (US) – All Endpoints

```
import { getContentstackEndpoint, ContentstackEndpoints } from '@contentstack/utils';

const endpoints = getContentstackEndpoint() as ContentstackEndpoints;
// endpoints.application        → 'https://app.contentstack.com'
// endpoints.contentDelivery    → 'https://cdn.contentstack.io'
// endpoints.contentManagement  → 'https://api.contentstack.io'
// endpoints.auth              → 'https://auth-api.contentstack.com'
// ... etc.
```

### Specific Region – All Endpoints

```
const euEndpoints = getContentstackEndpoint('eu') as ContentstackEndpoints;
// euEndpoints.application     → 'https://eu-app.contentstack.com'
// euEndpoints.contentDelivery → 'https://eu-cdn.contentstack.com'
```

### Single Service URL

```
const cdnUrl = getContentstackEndpoint('na', 'contentDelivery');
// → 'https://cdn.contentstack.io'
const euCdnUrl = getContentstackEndpoint('eu', 'contentDelivery');
// → 'https://eu-cdn.contentstack.com'
const appUrl = getContentstackEndpoint('au', 'application');
// → 'https://au-app.contentstack.com'
```

### Region by Alias (Case-Insensitive)

Aliases are case-insensitive. Examples using commonly supported aliases:

```
getContentstackEndpoint('us');   // same as 'na' (North America)
getContentstackEndpoint('na');   // North America
getContentstackEndpoint('eu');   // Europe
getContentstackEndpoint('au');   // Australia
```

### Integration with Delivery SDK

Use the endpoint as the host when creating a Delivery SDK stack so the stack uses the correct region:

```
import contentstack from '@contentstack/delivery-sdk';
import { getContentstackEndpoint } from '@contentstack/utils';

const host = getContentstackEndpoint('eu', 'contentDelivery', true);
const stack = contentstack.stack({
  apiKey: process.env.CONTENTSTACK_API_KEY!,
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.CONTENTSTACK_ENVIRONMENT!,
  host,
});
```

### URLs Without Protocol (omitHttps)

```
const host = getContentstackEndpoint('na', 'application', true);
// → 'app.contentstack.com'
const allHosts = getContentstackEndpoint('na', '', true) as ContentstackEndpoints;
// allHosts.application     → 'app.contentstack.com'
// allHosts.contentDelivery → 'cdn.contentstack.io'
```

## Handling Return Types

Since the return type is always a union, you must handle the result based on whether you provided a service argument.

### Option 1: Type Narrowing (Safest)

Use typeof to check the result at runtime. This is the most robust method for handling dynamic inputs.

```
const result = getContentstackEndpoint('na');

if (typeof result === 'string') {
  // TypeScript knows this is a URL string
  console.log(result.toLowerCase());
} else {
  // TypeScript knows this is a ContentstackEndpoints object
  console.log(result.contentDelivery);
}
```

### Option 2: Explicit Casting

If you know exactly which parameters you are passing, you can use the as keyword to tell TypeScript what to expect.

```
// When service is omitted, cast as the object
const all = getContentstackEndpoint('na') as ContentstackEndpoints;

// When service is provided, cast as a string
const url = getContentstackEndpoint('na', 'contentDelivery') as string;
```

## Reference

Use this section when you need:

-   The exact TypeScript return type
-   The available package exports

The function returns a **union type** because it does not currently use function overloads to distinguish between call patterns.

**Return Type:** string | ContentstackEndpoints

The specific return value depends on the service argument:

<table><tbody><tr><td><strong>Scenario</strong></td><td><strong>Return Type</strong></td><td><strong>Logic</strong></td></tr><tr><td><span class="code">service</span> is provided</td><td><span class="code">string</span></td><td>Returns the specific base URL for that service.</td></tr><tr><td><span class="code">service</span> is omitted or <span class="code">''</span></td><td><span class="code">ContentstackEndpoints</span></td><td>Returns an object containing all available services for the region.</td></tr></tbody></table>

**Note:** A whitespace-only string (e.g., ' ') for the service parameter is treated as a truthy value and will trigger an error rather than returning the full object.

When the function returns an object, it follows this structure:

-   Each **key** represents a service name.
-   Each **value** is either a **URL string** or a **nested** **ContentstackEndpoints** **object**.
-   The structure is determined by the bundled regions.json for the selected region.

```
interface ContentstackEndpoints {
  [key: string]: string | ContentstackEndpoints;
}
```

**Exports from** **@contentstack/utils**

The package exports:

-   **getContentstackEndpoint** – the function described in this document.
-   **ContentstackEndpoints** – TypeScript type used for type narrowing or casting.
