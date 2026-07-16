---
title: "Find/FindAsync"
description: "The `Find` and `FindAsync` actions retrieve all terms within a taxonomy. Note: Results are paginated, so a single `Find()` may not return all items. Use `limit` and `skip` to retrieve additional pages. Validation If you omit `collection` or pass `null` , the SDK sends only the parameters defined by fluent `Query` methods (for example `Limit` , `Skip` , `IncludeCount` ). The SDK forwards all entries in `ParameterCollection` as query parameters without validation. The API validates parameter names and values and returns errors for invalid or unsupported inputs. Behavior The API returns a JSON response based on the Management API for listing terms. The structure depends on the query parameters you send. Responses typically include a `terms` array, and may include a total count when you use `IncludeCount` . Each `Find` or `FindAsync` call sends one HTTP GET request to `/taxonomies/{taxonomy_uid}/terms` with query parameters. The SDK returns one page per call. It does not automatically retrieve all results. Control pagination using `Query.Limit` , `Query.Skip` , and optionally `Query.IncludeCount` , or pass equivalent parameters through `collection` . The SDK merges `collection` with the fluent query before sending the request. Use `Terms(termUid).Ancestors()` or `Terms(termUid).Descendants()` to retrieve hierarchy data for a specific term instead of `Query().Find()` . The SDK does not provide a fluent `Depth()` method on `Query` . When the API includes hierarchy data, deserialize it using `TermModel` , which exposes optional `Depth` , `Ancestors` , and `Descendants` properties."
url: "https://www.contentstack.com/term-find-findasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Find/FindAsync

The `Find` and `FindAsync` actions retrieve all terms within a taxonomy.

**Note:** Results are paginated, so a single `Find()` may not return all items. Use `limit` and `skip` to retrieve additional pages.
**Validation**

- If you omit `collection` or pass `null`, the SDK sends only the parameters defined by fluent `Query` methods (for example `Limit`, `Skip`, `IncludeCount`).
- The SDK forwards all entries in `ParameterCollection` as query parameters without validation. The API validates parameter names and values and returns errors for invalid or unsupported inputs.

**Behavior**

- The API returns a JSON response based on the Management API for listing terms. The structure depends on the query parameters you send. Responses typically include a `terms` array, and may include a total count when you use `IncludeCount`.
- Each `Find` or `FindAsync` call sends one HTTP GET request to `/taxonomies/{taxonomy_uid}/terms` with query parameters.
- The SDK returns one page per call. It does not automatically retrieve all results. Control pagination using `Query.Limit`, `Query.Skip`, and optionally `Query.IncludeCount`, or pass equivalent parameters through `collection`. The SDK merges `collection` with the fluent query before sending the request.
- Use `Terms(termUid).Ancestors()` or `Terms(termUid).Descendants()` to retrieve hierarchy data for a specific term instead of `Query().Find()`.
- The SDK does not provide a fluent `Depth()` method on `Query`. When the API includes hierarchy data, deserialize it using `TermModel`, which exposes optional `Depth`, `Ancestors`, and `Descendants` properties.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for Query().Find(). Provide explicit values to control retrieval results using filters. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the list of terms.

The following example lists taxonomy terms with optional pagination and count. It uses `OpenTResponse<TermsQueryResponse>` with a matching DTO, and demonstrates handling HTTP failures, API errors, and SDK preconditions.

```
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Exceptions;
using Newtonsoft.Json;

// Matches a common list-terms shape: { "terms": [ ... ], "count": ... } when include_count is used.
public sealed class TermsQueryResponse
{
    [JsonProperty("terms")]
    public List<TermModel> Terms { get; set; }

    [JsonProperty("count")]
    public int? Count { get; set; }
}

public static class TermsFindExample
{
    public static async Task RunAsync()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");

            ContentstackResponse response = await stack
                .Taxonomy("TAXONOMYUID")
                .Terms()
                .Query()
                .Limit(50)
                .Skip(0)
                .IncludeCount()
                .FindAsync(collection: null);

            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine($"Terms query failed: HTTP {(int)response.StatusCode}");
                return;
            }

            var data = response.OpenTResponse<TermsQueryResponse>();
            if (data?.Terms != null)
            {
                foreach (var term in data.Terms)
                {
                    Console.WriteLine(term.Name);
                }
            }

            if (data?.Count is int total)
            {
                Console.WriteLine($"Total terms (per API): {total}");
            }

            Console.WriteLine("Terms retrieved.");
        }
        catch (ContentstackErrorException ex)
        {
            Console.WriteLine($"API error ({(int)ex.StatusCode}): {ex.ErrorMessage}");
        }
        catch (ContentstackException ex)
        {
            Console.WriteLine($"Contentstack error: {ex.Message}");
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine($"Invalid operation: {ex.Message}");
        }
    }
}
```
