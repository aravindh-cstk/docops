---
title: "Get Started with Timeline Preview in the .NET SDK"
description: "Enhance your .NET app with Contentstack's Timeline Preview for debugging, campaign validation, and content preview before launch."
url: /developers/sdks/content-delivery-sdk/dot-net/get-started-with-timeline-preview-and-dot-net-sdk
---

# Get Started with Timeline Preview in the .NET SDK

## Get Started with Timeline Preview in the .NET SDK

Use Timeline Preview to fetch entry data as it existed at a specific timestamp or release, to validate scheduled launches, debug historical issues, and preview campaign changes before they go live.

## Prerequisites

Confirm these requirements before implementing Timeline Preview:

-   A .NET app targeting one of the SDK-supported frameworks (netstandard2.0, net47, or net472). This guide uses ASP.NET Core examples, so .NET 6.0+ is recommended for the walkthrough snippets.
-   A Contentstack stack with at least one content type and entry
-   [Contentstack .NET SDK](https://github.com/contentstack/contentstack-dotnet)
-   [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) (Required only for CSR/browser integrations)
-   Confirm your stack region and preview host:
    -   rest-preview.contentstack.com (US)
    -   eu-rest-preview.contentstack.com (EU)
    -   Or the regional preview host configured for your stack in Contentstack
-   Get the API Key, Delivery Token, and Preview Token from the CMS.
-   Identify whether your app uses SSR or CSR for preview.

## What You Will Learn

After you complete this guide, you can:

-   Configure .NET SDK with Live Preview and Timeline Preview context.
-   Preview content by preview\_timestamp or release\_id.
-   Isolate multiple timeline contexts safely with Fork().
-   Implement a secure preview endpoint with explicit error handling.
-   Validate whether timeline data is returned correctly.

## Choose your rendering mode

Decide where your app applies timeline context before configuring preview tokens.

Across both rendering modes:

-   Keep preview tokens server-side only
-   Run LivePreviewQueryAsync on the .NET backend
-   Isolate concurrent timelines using Fork() or separate ContentstackClient instances

**Rendering modes**

-   For Server-Side Rendering (SSR), apply timeline context in server middleware (see Step 3)
-   For Client-Side Rendering (CSR)
    -   Apply timeline context in an authenticated backend proxy endpoint. The browser calls your backend, and the backend calls LivePreviewQueryAsync
    -   Restrict access to trusted preview UI origins (CORS)

With the rendering boundary defined, configure preview secrets in Step 2 and request handling in Step 3.

Choose one request-entry pattern per preview route:

-   **SSR route pipeline:** apply timeline context in middleware before server-side page fetches.
-   **CSR route pipeline:** apply timeline context in a backend preview endpoint that browser clients call.

## Quick Start in 5 Minutes

Use this code snippet if you only need a working baseline:

1.  Configure SDK credentials from environment variables.
2.  Call LivePreviewQueryAsync() with content\_type\_uid, entry\_uid, and optional preview\_timestamp and/or release\_id.
3.  Fetch the entry and verify expected values.

```
var options = new ContentstackOptions
{
    ApiKey = Environment.GetEnvironmentVariable("CONTENTSTACK_API_KEY"),
    DeliveryToken = Environment.GetEnvironmentVariable("CONTENTSTACK_DELIVERY_TOKEN"),
    Environment = Environment.GetEnvironmentVariable("CONTENTSTACK_ENVIRONMENT"),
    LivePreview = new LivePreviewConfig
    {
        Enable = true,
        PreviewToken = Environment.GetEnvironmentVariable("CONTENTSTACK_PREVIEW_TOKEN"),
        Host = Environment.GetEnvironmentVariable("CONTENTSTACK_PREVIEW_HOST") ?? "rest-preview.contentstack.com"
    }
};

var client = new ContentstackClient(options);

await client.LivePreviewQueryAsync(new Dictionary<string, string>
{
    ["content_type_uid"] = "sale_page",
    ["entry_uid"] = "black_friday_2024",
    ["preview_timestamp"] = "2024-11-29T00:00:00.000Z",
    ["release_id"] = "black_friday_rollout"
});

var page = await client.ContentType("sale_page")
    .Entry("black_friday_2024")
    .Fetch<SalePageModel>();

Console.WriteLine(page.PromoBanner);
```

**Validation checkpoint**: Confirm your response reflects the scheduled state for the provided preview\_timestamp, release\_id, or both.

How timeline filters work:

-   Use preview\_timestamp to view content at a specific date and time or use release\_id to view content from a specific release.
-   Use both to narrow results to content that matches that release at that time.
-   If no match is found, return the standard not-found result for timeline lookup.

For complex content models, scenario-driven testing, and reusable snippet patterns, continue with the companion guide: [.NET SDK Timeline Preview Advanced Patterns](/docs/developers/sdks/content-delivery-sdk/dot-net/dot-net-sdk-timeline-preview-advanced-patterns).

## Step-by-Step Guide

### Step 1: Install the SDK

Run one of the following package manager commands:

-   **Via Package Manager**: Open the terminal and install the contentstack module using the following “Package Manager” command:

```
PM> Install-Package contentstack.csharp
```

-   **Via .NET CLI**: Run the following .NET CLI command:

```
dotnet add package contentstack.csharp
```

After the installation, add the following namespaces:

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType
using Contentstack.Core.Configuration; // ContentstackOptions
```

For ASP.NET Core apps, register the SDK in ConfigureServices before injecting ContentstackClient into middleware or controllers:

```
public void ConfigureServices(IServiceCollection services)
{
    services.AddContentstack(Configuration);
}
```

### Step 2: Initializing the Stack with Live Preview

The [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication. Initialize it within your stack and add the appsettings.json command to initialize the stack:

Store secrets in environment variables and bind them to configuration options.

-   Use placeholders (${...}) when your configuration pipeline resolves them at runtime.
-   Map environment variables directly in [ASP.NET Core configuration](https://learn.microsoft.com/aspnet/core/fundamentals/configuration/) when you are not using a placeholder-based pipeline.

**Note:** Load CONTENTSTACK\_PREVIEW\_TOKEN only in your .NET server environment. Never expose it in client bundles or browser-readable config. This applies to both rendering modes:

-   In SSR, the server reads the token for each preview request.
-   In CSR, the browser never accesses the token; a backend endpoint uses it and returns preview data.

```
{
  "ContentstackOptions": {
    "ApiKey": "${CONTENTSTACK_API_KEY}",
    "DeliveryToken": "${CONTENTSTACK_DELIVERY_TOKEN}",
    "Environment": "${CONTENTSTACK_ENVIRONMENT}",
    "LivePreview": {
      "Enable": true,
      "PreviewToken": "${CONTENTSTACK_PREVIEW_TOKEN}",
      "Host": "${CONTENTSTACK_PREVIEW_HOST}"
    }
  }
}
```

**Validation**: Verify PreviewToken and Host match the same stack and regional preview host.

**Note:** By default, the host parameter points to the North America endpoint. If your website is hosted on the other endpoints, then pass that [region endpoint](/docs/administration/about-regions) against the Host parameter.

### Step 3: Configure middleware with explicit errors

Do not hide preview errors. Log them and continue so the rest of the middleware pipeline still runs.

**Note:** This middleware pattern is for SSR request pipelines. For CSR, move this logic into an authenticated backend preview endpoint and keep the browser as a caller to your backend only. Do not apply both patterns to the same request path.

```
app.UseCors(policy =>
{
    policy.WithOrigins(
            "https://app.contentstack.com",
            builder.Configuration["PREVIEW_UI_ORIGIN"]
          )
          .AllowAnyHeader()
          .AllowAnyMethod();
});

app.Use(async (context, next) =>
{
    var contentstackClient = app.ApplicationServices.GetService<ContentstackClient>();
    var timelineQuery = new Dictionary<string, string>();

    if (context.Request.Query.TryGetValue("content_type_uid", out var contentTypeUid))
        timelineQuery["content_type_uid"] = contentTypeUid.ToString();

    if (context.Request.Query.TryGetValue("entry_uid", out var entryUid))
        timelineQuery["entry_uid"] = entryUid.ToString();

    if (context.Request.Query.TryGetValue("preview_timestamp", out var previewTimestamp))
        timelineQuery["preview_timestamp"] = previewTimestamp.ToString();

    if (context.Request.Query.TryGetValue("release_id", out var releaseId))
        timelineQuery["release_id"] = releaseId.ToString();

    try
    {
        await contentstackClient.LivePreviewQueryAsync(timelineQuery);
    }
    catch (Exception ex)
    {
        // Keep app response healthy, but do not hide failures.
        app.Logger.LogWarning(ex, "Timeline preview query setup failed.");
    }

    await next.Invoke();
});
```

**Validation**: Unsupported query parameters should be ignored, and invalid timeline values should produce warning logs instead of silent failures.

**Note:** Avoid empty catch blocks (catch { }). At minimum, log the exception or translate it into a deliberate response so preview failures stay observable.

### Step 4: Preview content at a timestamp

```
await client.LivePreviewQueryAsync(new Dictionary<string, string>
{
    ["content_type_uid"] = "homepage",
    ["entry_uid"] = "main_home",
    ["preview_timestamp"] = "2024-04-27T15:00:00.000Z"
});

var homepage = await client.ContentType("homepage")
    .Entry("main_home")
    .Fetch<HomepageModel>();
```

Use this pattern for launch rehearsal and historical debugging.

### Step 5: Preview scheduled releases

```
await client.LivePreviewQueryAsync(new Dictionary<string, string>
{
    ["content_type_uid"] = "product_catalog",
    ["entry_uid"] = "new_smartphone_launch",
    ["release_id"] = "q1_product_launch"
});

var productPage = await client.ContentType("product_catalog")
    .Entry("new_smartphone_launch")
    .Fetch<ProductModel>();
```

### Step 6: Isolate multiple timelines with Fork

Use Fork() when testing multiple campaigns in parallel.

```
var valentinesClient = client.Fork();
var easterClient = client.Fork();

await valentinesClient.LivePreviewQueryAsync(new Dictionary<string, string>
{
    ["content_type_uid"] = "campaign_page",
    ["entry_uid"] = "valentines_2024",
    ["release_id"] = "valentines_release"
});

await easterClient.LivePreviewQueryAsync(new Dictionary<string, string>
{
    ["content_type_uid"] = "campaign_page",
    ["entry_uid"] = "easter_2024",
    ["release_id"] = "easter_release"
});
```

**Validation**: Each fork returns campaign-specific data without cross-contamination.

## Query Request Basics

Contentstack SDKs interact with the [Content Delivery API](/docs/developers/apis/content-delivery-api) to retrieve read-only content. Use Query().Find() for multiple entries and Entry(...).Find() (or Fetch<T>()) for a single entry:

```
client.ContentType("CONTENT_TYPE_UID").Query().Find();
client.ContentType("CONTENT_TYPE_UID").Entry("ENTRY_UID").Find();
```

For advanced filters, includes, and pagination behavior, use the [.NET SDK API Reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference).

## Integrate a Preview Endpoint (ASP.NET Core)

This endpoint pattern is the backend timeline boundary for both SSR and CSR flows. SSR server routes can call this controller directly, and CSR frontends call it through authenticated backend routing. Use one entry path per request flow so timeline state is applied once.

### Security and operations

The following rules is applicable for both SSR + CSR rendering

-   Keep CONTENTSTACK\_PREVIEW\_TOKEN and other preview credentials in server-side configuration only.
-   Preview state is scoped to the ContentstackClient instance and stored in memory.
-   Multiple timelines require isolated client instances; use Fork() or separate clients (see Step 6).
-   Gate preview routes with the same authentication used for other privileged backend APIs.
-   Log preview failures with timeline context so investigations stay consistent across SSR and CSR.
-   Avoid returning raw draft-only fields (for example, \_in\_progress markers) that production UI should not render.

### Server-Side Rendering (SSR)

If your SSR site uses the JavaScript Live Preview bridge, initialize it in your server-rendered host page (\_Host.cshtml or Index.cshtml) and keep timeline data fetching in your .NET backend:

```
<script>
  ContentstackLivePreview.init({
    enable: true,
    ssr: true,
    stackDetails: {
      apiKey: "API_KEY"
    }
  });
</script>
```

For full SSR setup details, see [Set Up Live Preview for your Website (SSR)](/docs/headless-cms/set-up-live-preview-for-your-website).

```
[ApiController]
[Route("api/[controller]")]
public class PreviewController : ControllerBase
{
    private readonly ContentstackClient _client;
    private readonly ILogger<PreviewController> _logger;

    public PreviewController(ContentstackClient client, ILogger<PreviewController> logger)
    {
        _client = client;
        _logger = logger;
    }

    [HttpGet("page/{pageId}")]
    public async Task<IActionResult> PreviewPage(string pageId)
    {
        var timelineParams = new Dictionary<string, string>
        {
            ["content_type_uid"] = "page",
            ["entry_uid"] = pageId
        };

        if (Request.Query.ContainsKey("preview_timestamp"))
            timelineParams["preview_timestamp"] = Request.Query["preview_timestamp"];

        if (Request.Query.ContainsKey("release_id"))
            timelineParams["release_id"] = Request.Query["release_id"];

        try
        {
            await _client.LivePreviewQueryAsync(timelineParams);
            var page = await _client.ContentType("page").Entry(pageId).Fetch<PageModel>();
            return Ok(page);
        }
        catch (Contentstack.Core.Internals.EntryException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
            _logger.LogInformation(ex, "Timeline entry not found.");
            return NotFound("No content is available for the requested timeline context.");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Preview failed.");
            return BadRequest("Preview failed. Check timeline parameters and preview token.");
        }
    }
}
```

**Note:** Prefer explicit HTTP results and bodies for timeline failures (for example, distinct NotFound versus BadRequest with actionable text) instead of a generic error that hides whether the entry, token, or parameters are wrong.

#### Example preview URLs

Timestamp preview:

```
https://yourapp.com/api/preview/page/black_friday_2024?preview_timestamp=2024-11-29T00:00:00.000Z
```

Release preview:

```
https://yourapp.com/api/preview/page/holiday_products?release_id=winter_sale_2024
```

Combined preview:

```
https://yourapp.com/api/preview/page/sale_homepage?preview_timestamp=2024-12-01T12:00:00.000Z&release_id=december_launch
```

### Client-Side Rendering (CSR)

CSR apps (Blazor WebAssembly, React, Angular, Vue, or any browser-rendered frontend) use the same backend preview endpoint pattern as SSR:

-   The browser calls your [ASP.NET Core API](https://learn.microsoft.com/aspnet/core/)
-   The server runs LivePreviewQueryAsync and performs the entry fetch

You still follow standard preview fundamentals. CSR adds concerns at the browser boundary, including:

-   CORS configuration
-   What data is returned to the client

#### Preview request flow

-   The browser calls your .NET preview route (for example, api/preview/page/{pageId}), not Contentstack preview hosts.
-   Map preview\_timestamp and release\_id from the incoming request to the dictionary passed to LivePreviewQueryAsync (along with content\_type\_uid and entry\_uid).
-   The SDK forwards preview\_timestamp and release\_id as HTTP headers to the preview host
-   The server returns rendered HTML or a sanitized JSON projection of the entry, not unfiltered draft payloads.

**Note:**

-   Timeline parameters can be sent as query parameters to your backend only
-   Do not send preview tokens or other secrets from the browser

**Browser call example:**

```
const qs = new URLSearchParams({ preview_timestamp: "2024-11-29T00:00:00.000Z" });
// qs.set("release_id", "winter_sale_2024");
await fetch(`/api/preview/page/${encodeURIComponent(pageId)}?${qs}`);
```

#### Secrets and hosts

-   Do not:
    -   Expose them in client bundles, browser-accessible environment variables, local storage, or URL fragments
    -   Include tokens in query strings
-   Do not call rest-preview.contentstack.com (or your regional preview host) from the browser. Route all preview requests through your .NET layer to preserve validation and error handling (see [Step 3](#step-3-configure-middleware-with-explicit-errors))

**CORS**

-   Restrict origins to trusted preview UI hosts
    -   Include Contentstack tooling (for example, https://app.contentstack.com) and your CSR preview origin (for example, https://preview.yourapp.com)
    -   Align with the configuration described in [Step 3](#step-3-configure-middleware-with-explicit-errors)
-   Do not use AllowAnyOrigin() in production, as it removes origin checks.

## Preview Performance Factors and Caching Guidance

### Response time factors

Preview request response time depends on the following factors:

-   Network latency
-   Stack region
-   Entry payload size
-   Whether the request hits the preview host

### Draft data reuse

With Live Preview enabled, the SDK can reduce repeated calls by reusing draft data within the same timeline.

LivePreviewQueryAsync retrieves draft content from the preview host and stores the entry JSON on the ContentstackClient for the active timeline. A subsequent Fetch call for the same content type and entry reuses this data when the timeline matches.

The SDK determines a matching timeline using:

-   preview\_timestamp
-   release\_id
-   live\_preview hash (an internal fingerprint of preview context used for timeline matching)

This ensures that Fetch does not return stale draft data from earlier queries.

Each call to LivePreviewQueryAsync resets the existing preview state and repopulates it based on the current inputs. When timeline inputs change, a new call establishes a new preview state.

### Timeline isolation

Preview data is stored in memory on the client instance, and timeline state is scoped to that instance.

Concurrent timelines require separate client instances. This isolation can be achieved by creating independent clients or by using Fork() as described in [Step 6: Isolate multiple timelines with Fork](#step-6-isolate-multiple-timelines-with-fork).

### Fallback behavior and benchmark reporting

If prefetch does not succeed, Fetch retrieves the entry using preview headers on the standard request path.

Benchmark results vary based on environment, and measurements shared in documentation or support tickets are treated as environment-specific samples.

## Troubleshooting

### Content not found for timeline

**Issue**

Fetch returns no entry for the requested timeline context.

**Cause**

Timeline preview uses the following inputs to resolve entries:

-   content\_type\_uid, entry\_uid
-   preview\_timestamp, release\_id

Failures typically fall into two categories:

**1\. No matching entry for the given timeline**

-   Incorrect UIDs
-   Locale or environment mismatch
-   Entry not present in the specified release or timestamp

**2\. Prefetch did not populate draft data**

-   The prefetch stage in LivePreviewQueryAsync fails
-   PreviewResponse remains unset
-   Fetch falls back to the standard request path using preview headers

**Resolution**

-   Verify the entry exists for the target environment and timeline in the CMS
-   Ensure dictionary keys match SDK expectations:
    -   content\_type\_uid, entry\_uid, preview\_timestamp, release\_id
-   To compare with non-timeline behavior:
    -   Clear preview state using ResetLivePreview()
    -   Or use a separate ContentstackClient (or Fork()) without timeline context
    -   Fetch the entry again to avoid residual timeline state
-   For preview and QA routes, you can optionally fall back to current content when timeline setup or fetch fails:

```
public async Task<PageModel> GetPreviewWithFallbackAsync(
    ContentstackClient client,
    ILogger logger,
    string pageId,
    string previewTimestamp = null,
    string releaseId = null)
{
    var timelineParams = new Dictionary<string, string>
    {
        ["content_type_uid"] = "page",
        ["entry_uid"] = pageId
    };

    if (!string.IsNullOrWhiteSpace(previewTimestamp))
        timelineParams["preview_timestamp"] = previewTimestamp;

    if (!string.IsNullOrWhiteSpace(releaseId))
        timelineParams["release_id"] = releaseId;

    try
    {
        await client.LivePreviewQueryAsync(timelineParams);
        return await client.ContentType("page").Entry(pageId).Fetch<PageModel>();
    }
    catch (Contentstack.Core.Internals.EntryException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
    {
        logger.LogInformation(ex, "Timeline content not found. Falling back to current content.");
    }
    catch (Exception ex)
    {
        logger.LogWarning(ex, "Timeline preview failed. Falling back to current content.");
    }

    client.ResetLivePreview();
    return await client.ContentType("page").Entry(pageId).Fetch<PageModel>();
}
```

For production APIs, decide route-by-route whether fallback is appropriate. If callers must distinguish timeline failures, return explicit NotFound or BadRequest responses instead of masking the error.

**Verification**

-   Run the same request with validated content\_type\_uid, entry\_uid, and one known-good timeline value.
-   Confirm the endpoint returns either the expected entry or a deterministic NotFound response with no token/config errors.

### Invalid preview token

**Issue**

The SDK throws InvalidOperationException, LivePreviewException, or preview-host HTTP errors indicating the token was not accepted.

**Root cause**

Preview requests require a valid token. The SDK sends credentials as:

-   preview\_token header when PreviewToken is set
-   authorization header when ManagementToken is set

Failures occur in the following scenarios:

-   **Token not configured**
    -   Live Preview is enabled, but no token is set
    -   The prefetch stage throws InvalidOperationException
    -   Entry.Fetch throws LivePreviewException when preview context is active
-   **Invalid or mismatched token**
    -   Token is incorrect, revoked, or belongs to a different stack
    -   The preview API rejects the request
-   **Configuration not loaded**
    -   Environment variables or server configuration are not bound at runtime
    -   Results in missing-token behavior instead of a remote 401/403 response

**Resolution**

-   Set LivePreview.PreviewToken (or ManagementToken, where applicable) to a valid value for the same stack as the ApiKey and delivery credentials. Regenerate the token in the CMS if required.
-   Ensure that LivePreview.Host matches your region. If not set, the SDK defaults to rest-preview.contentstack.com for preview token mode.
-   Confirm that server-side configuration and environment variables are loaded at runtime. Missing configuration results in the “token missing” behavior rather than a remote 401 or 403 response.

**Verification**

-   Call the preview endpoint with a known-valid token and confirm the request no longer returns token-related exceptions.
-   Confirm logs no longer show token-missing initialization errors for the same request path.

### Inconsistent results across tests

**Issue**

Parallel or back-to-back tests return different entry payloads, timelines, or cache behavior, even when inputs appear identical.

**Root cause**

Preview state is stored on each ContentstackClient instance.

Each call to LivePreviewQueryAsync:

-   Clears previous preview state (LivePreview, PreviewTimestamp, ReleaseId, cached PreviewResponse, and fingerprint fields)
-   Repopulates state based on the current inputs

Entry.Fetch reuses cached draft data only when the current query matches:

-   preview\_timestamp
-   release\_id
-   live\_preview hash

Otherwise, it performs a fresh request.

Inconsistent results occur in the following scenarios:

-   **Shared client across concurrent tests**
    -   Parallel tests update the same client instance
    -   Preview state is overwritten, causing race conditions
-   **Client reuse across sequential tests**
    -   Timeline state from a previous test remains on the instance
    -   Subsequent tests inherit unintended preview context
-   **Prefetch not applied**
    -   LivePreviewQueryAsync does not populate PreviewResponse
    -   Fetch falls back to the network request path using preview headers

**Resolution**

Isolate client state per test scenario:

-   Use Fork() to create an independent client with separate preview state
-   Or create separate ContentstackClient instances

For a clean state on an existing client:

-   Use ResetLivePreview()

Ensure each test:

-   Calls LivePreviewQueryAsync once per logical timeline before Fetch
-   Does not assume prefetch succeeded

**Verification**

-   Re-run parallel and sequential tests using isolated clients and confirm stable payloads across repeated runs.
-   Validate that each test case sets timeline context explicitly before Fetch.

## Next Steps

1.  Add preview links in your QA workflow for major launches.
2.  Create integration tests that validate known timeline payloads.
3.  Add a simple UI date picker to test preview\_timestamp in non-production environments.
4.  Document your team-specific release naming conventions for release\_id.
5.  Use advanced scenario templates from [.NET SDK Timeline Preview Advanced Patterns](/docs/developers/sdks/content-delivery-sdk/dot-net/dot-net-sdk-timeline-preview-advanced-patterns) for release rehearsals and complex schema validation.

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [.NET News App](/docs/developers/sdks/content-delivery-sdk/dot-net/get-started-with-dot-net-delivery-sdk)
-   [.NET SDK API Reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/)
-   [.NET SDK Changelog](/docs/developers/sdks/content-delivery-sdk/dot-net/dot-net-sdk-changelog/)
-   [Contentstack .NET SDK Repository](https://github.com/contentstack/contentstack-dotnet)
