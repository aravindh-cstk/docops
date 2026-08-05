---
title: "Localize"
description: "The `Localize` method creates a locale-specific version of an asset so that the target locale can have its own file or metadata. Use `Stack.Asset(\"ASSETUID\")` before calling this method. The asynchronous counterpart is `LocalizeAsync` . Validation and Behavior In the shared `LocalizationService<T>` , a null data model throws `ArgumentNullException` . `AssetModel` construction has its own validation before `Localize` is called: A null `fileName` throws `ArgumentNullException` . Missing upload content throws `ArgumentNullException` . When you use the `filePath` constructor overload, an invalid file path can throw file-system exceptions during `File.OpenRead(...)` before the SDK builds the localization request. If the locale values are: Null or empty, the SDK throws `ArgumentNullException` . Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response, which is handled as a `ContentstackErrorException` . Additional Resources: For more information on the API errors, refer to the Errors section in the Content Management API document. Performance Behavior: Each `localize` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits. To avoid throttling: Use bounded parallelism (limit simultaneous requests) Add delays between requests Implement retries with backoff if you receive `429 Too Many Requests`"
url: "https://www.contentstack.com/dotnet-management-asset-localize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Localize

The `Localize` method creates a locale-specific version of an asset so that the target locale can have its own file or metadata. Use `Stack.Asset("ASSETUID")` before calling this method. The asynchronous counterpart is `LocalizeAsync`.

**Validation and Behavior**

- In the shared `LocalizationService<T>`, a null data model throws `ArgumentNullException`.
- `AssetModel` construction has its own validation before `Localize` is called:
  - A null `fileName` throws `ArgumentNullException`.
  - Missing upload content throws `ArgumentNullException`.
  - When you use the `filePath` constructor overload, an invalid file path can throw file-system exceptions during `File.OpenRead(...)` before the SDK builds the localization request.
- If the locale values are:
  - Null or empty, the SDK throws `ArgumentNullException`.
  - Invalid, the SDK forwards the value unchanged. If the Management API rejects it, the client receives a failed HTTP response, which is handled as a `ContentstackErrorException`.

**Additional Resources:** For more information on the API errors, refer to the [Errors](/docs/developers/apis/content-management-api#errors) section in the Content Management API document.
**Performance Behavior:**

- Each `localize` call triggers one Management API request. High concurrency (many parallel or batched calls) can quickly reach rate limits.
- To avoid throttling:
  - Use bounded parallelism (limit simultaneous requests)
  - Add delays between requests
  - [Implement retries with backoff](/docs/developers/sdks/content-management-sdk/dot-net/retry-mechanism) if you receive `429 Too Many Requests`

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | AssetModel | Yes | NA | Payload for the locale-specific asset (upload content and optional metadata). |
| locale | string | Yes | NA | Target locale code (e.g., `en-us` or `fr-fr` ). This value determines which locale receives independent asset content. |
| collection | ParameterCollection | No | NA | Optional extra query parameters for the request (e.g., `version` to supply the asset revision the API should use). |

Returns:
Type
A ContentstackResponse for the asset localization request.

The following example:

- Builds a localized `AssetModel` for `fr-fr` locale
- Add optional `version` in `ParameterCollection` (useful for concurrency/revision control)
- Call `Localize` with these parameters to create/replace the localized asset

```
using System;
using System.IO;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Queryable;
using Contentstack.Management.Core.Services.Models;
public class Program
{
    public static void Main()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");

            string filePath = Path.Combine(Environment.CurrentDirectory, "localized-image-fr.jpg");
            AssetModel localizedAsset = new AssetModel(
                fileName: "localized-image-fr.jpg",
                filePath: filePath,
                contentType: "image/jpeg",
                title: "Image en Francais",
                description: "Version francaise de l'asset"
            );

            // Optional query parameters (e.g. version for concurrency); omit the third argument to Localize if not needed.
            ParameterCollection queryParams = new ParameterCollection();
            queryParams.Add("version", 3);

            ContentstackResponse response = stack
                .Asset("ASSETUID")
                .Localize(localizedAsset, "fr-fr", queryParams);
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
        catch (ContentstackErrorException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
```
