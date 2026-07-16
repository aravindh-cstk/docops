---
title: "Unlocalize"
description: "The `Unlocalize` method removes an existing localized asset version for a specific locale so the locale no longer has independent localized asset content. Use `Stack.Asset(\"ASSETUID\")` before calling this method. The asynchronous counterpart is `UnlocalizeAsync` . Validation and Behavior A missing asset UID follows the existing asset instance pattern, resulting in an `InvalidOperationException` . If the locale values are: Null or empty, the SDK throws `ArgumentNullException` . Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response, which is handled as a `ContentstackErrorException` . The SDK does not supply fallback content. The API handles inheritance after removal. Additional Resources: For more information on the API errors, refer to the Errors section in the Content Management API document. Performance Behavior: Each `Unlocalize` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits. To avoid throttling: Use bounded parallelism (limit simultaneous requests) Add delays between requests Implement retries with backoff if you receive `429 Too Many Requests`"
url: "https://www.contentstack.com/dotnet-management-asset-unlocalize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Unlocalize

The `Unlocalize` method removes an existing localized asset version for a specific locale so the locale no longer has independent localized asset content. Use `Stack.Asset("ASSETUID")` before calling this method. The asynchronous counterpart is `UnlocalizeAsync`.

**Validation and Behavior**

- A missing asset UID follows the existing asset instance pattern, resulting in an `InvalidOperationException`.
- If the locale values are:
  - Null or empty, the SDK throws `ArgumentNullException`.
  - Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response, which is handled as a `ContentstackErrorException`.
- The SDK does not supply fallback content. The API handles inheritance after removal.

**Additional Resources:** For more information on the API errors, refer to the [Errors](/docs/developers/apis/content-management-api#errors) section in the Content Management API document.
**Performance Behavior:**

- Each `Unlocalize` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits.
- To avoid throttling:
  - Use bounded parallelism (limit simultaneous requests)
  - Add delays between requests
  - [Implement retries with backoff](/docs/developers/sdks/content-management-sdk/dot-net/retry-mechanism) if you receive `429 Too Many Requests`

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | Yes | NA | Locale code whose locale-specific asset version you remove. |
| collection | ParameterCollection | Yes | NA | Additional query parameters for the request. |

Returns:
Type
A ContentstackResponse for the asset unlocalization request.

This example removes the localized asset version for the `fr-fr` locale.

```
using System;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Services.Models;

public class Program
{
    public static void Main()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");

            ContentstackResponse response = stack
                .Asset("ASSETUID")
                .Unlocalize("fr-fr");

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
        catch (ContentstackErrorException ex) // Management API failures
        {
            Console.WriteLine($"{ex.StatusCode}: {ex.ErrorMessage} (error_code: {ex.ErrorCode})");
        }
    }
}
```
