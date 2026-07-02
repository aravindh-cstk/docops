---
title: "UnlocalizeAsync"
description: "The UnlocalizeAsync method asynchronously removes an existing localized asset version for a specific locale. Use this method after Stack.Asset(\"ASSETUID\") . Validation and Behavior A missing asset UID follows the existing asset instance pattern, resulting in an InvalidOperationException . If the locale values are: Null or empty, the SDK throws ArgumentNullException . Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response, which is handled as a ContentstackErrorException . The SDK does not supply fallback content. The API handles inheritance after removal. Performance Behavior: Each UnlocalizeAsync call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits. To avoid throttling: Use bounded parallelism (limit simultaneous requests) Add delays between requests Implement retries with backoff if you receive 429 Too Many Requests"
url: "https://www.contentstack.com/dotnet-management-asset-unlocalizeasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UnlocalizeAsync

The `UnlocalizeAsync` method asynchronously removes an existing localized asset version for a specific locale. Use this method after `Stack.Asset("ASSETUID")`.

**Validation and Behavior**

- A missing asset UID follows the existing asset instance pattern, resulting in an `InvalidOperationException`.
- If the locale values are:
  - Null or empty, the SDK throws `ArgumentNullException`.
  - Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response, which is handled as a `ContentstackErrorException`.
- The SDK does not supply fallback content. The API handles inheritance after removal.

**Performance Behavior:**

- Each `UnlocalizeAsync` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits.
- To avoid throttling:
  - Use bounded parallelism (limit simultaneous requests)
  - Add delays between requests
  - [Implement retries with backoff](/docs/developers/sdks/content-management-sdk/dot-net/retry-mechanism) if you receive `429 Too Many Requests`

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | Yes | NA | Locale code whose locale-specific asset version you want to remove. |
| collection | ParameterCollection | No | NA | Defines additional query parameters for the request. |

Returns:
Type
A Task<ContentstackResponse> for the asset unlocalization request.

The following example:

- Asynchronously removes the localized asset for the `de-de` locale.
- It handles the following:
  - `ArgumentNullException` (null/empty locale)
  - `InvalidOperationException` (missing asset UID)
  - `ContentstackErrorException` (Management API errors, including invalid locale)

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Services.Models;

public class Program
{
    public static async Task Main()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");

            ContentstackResponse response = await stack
                .Asset("ASSETUID")
                .UnlocalizeAsync("de-de");

            Console.WriteLine(response != null ? "Asset unlocalized successfully." : "No response received.");
        }
        catch (ArgumentNullException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (ContentstackErrorException ex)
        {
            // Invalid locale (or other API error): failed HTTP response from the API.
            Console.WriteLine($"{ex.StatusCode}: {ex.ErrorMessage} (error_code: {ex.ErrorCode})");
        }
    }
}
```
