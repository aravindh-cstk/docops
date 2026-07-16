---
title: "LocalizeAsync"
description: "The `LocalizeAsync` method asynchronously creates a locale-specific version of an asset for the supplied locale. Use `Stack.Asset(\"ASSETUID\")` before calling this method. Validation and Behavior In the shared `LocalizationService<T>` , a null data model throws `ArgumentNullException` . `AssetModel` construction has its own validation before `LocalizeAsync` is called: A null `fileName` throws `ArgumentNullException` . Missing upload content throws `ArgumentNullException` . When you use the `filePath` constructor overload, an invalid file path can throw file-system exceptions during `File.OpenRead(...)` before the SDK builds the localization request. A missing asset UID follows the existing asset instance pattern and results in an `InvalidOperationException` . If the locale values are: Null or empty, the SDK throws `ArgumentNullException` . Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response as a `ContentstackErrorException` . Additional Resources: For more information on the API errors, refer to the Errors section in the Content Management API document. Performance Behavior: Each `localizeAsync` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits. To avoid throttling: Use bounded parallelism (limit simultaneous requests) Add delays between requests Implement retries with backoff if you receive `429 Too Many Requests`"
url: "https://www.contentstack.com/dotnet-management-asset-localizeasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## LocalizeAsync

The `LocalizeAsync` method asynchronously creates a locale-specific version of an asset for the supplied locale. Use `Stack.Asset("ASSETUID")` before calling this method.

**Validation and Behavior**

- In the shared `LocalizationService<T>`, a null data model throws `ArgumentNullException`.
- `AssetModel` construction has its own validation before `LocalizeAsync` is called:
  - A null `fileName` throws `ArgumentNullException`.
  - Missing upload content throws `ArgumentNullException`.
  - When you use the `filePath` constructor overload, an invalid file path can throw file-system exceptions during `File.OpenRead(...)` before the SDK builds the localization request.
- A missing asset UID follows the existing asset instance pattern and results in an `InvalidOperationException`.
- If the locale values are:
  - Null or empty, the SDK throws `ArgumentNullException`.
  - Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response as a `ContentstackErrorException`.

**Additional Resources:** For more information on the API errors, refer to the [Errors](/docs/developers/apis/content-management-api#errors) section in the Content Management API document.
**Performance Behavior:**

- Each `localizeAsync` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits.
- To avoid throttling:
  - Use bounded parallelism (limit simultaneous requests)
  - Add delays between requests
  - [Implement retries with backoff](/docs/developers/sdks/content-management-sdk/dot-net/retry-mechanism) if you receive `429 Too Many Requests`

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | AssetModel | Yes | NA | Payload for the locale-specific asset (upload content and optional metadata). |
| locale | string | Yes | NA | Target locale code for the asynchronous request. |
| collection | ParameterCollection | No | NA | Optional query parameters forwarded to the Management API (e.g., `version` ). Keys and values must match the API for this endpoint. See the example below. |

Returns:
Type
A Task<ContentstackResponse> for the asset localization request.

This example asynchronously localizes an asset for `de-de`, passes an optional `ParameterCollection` with a sample query parameter (`version`), and handles common validation, I/O, and Management API errors.

```
using System;
using System.IO;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Queryable;
using Contentstack.Management.Core.Services.Models;

public class Program
{
    public static async Task Main()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");

            string filePath = Path.Combine(Environment.CurrentDirectory, "localized-image-de.jpg");
            AssetModel localizedAsset = new AssetModel(
                fileName: "localized-image-de.jpg",
                filePath: filePath,
                contentType: "image/jpeg",
                title: "Bild auf Deutsch",
                description: "Deutsche Version des Assets"
            );

            ParameterCollection collection = new ParameterCollection();
            collection.Add("version", 2); // Optional query keys must match the Management API for this request (replace if your endpoint documents different parameters).

            ContentstackResponse response = await stack
                .Asset("ASSETUID")
                .LocalizeAsync(localizedAsset, "de-de", collection);

            Console.WriteLine(response != null ? "Asset localized successfully." : "No response received.");
        }
        catch (ArgumentNullException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (IOException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (ContentstackErrorException ex) // Thrown when the Management API returns an error 
        {
            Console.WriteLine(ex.Message);
        }
    }
}
```
