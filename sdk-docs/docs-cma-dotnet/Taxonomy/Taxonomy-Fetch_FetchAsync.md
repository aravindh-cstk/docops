---
title: "Fetch / FetchAsync"
description: "The Fetch and FetchAsync actions retrieve the details of a single, specific taxonomy. Fetching a Taxonomy (UID Requirement) The taxonomy returned is determined only by the UID passed to stack.Taxonomy(\"<TAXONOMY_UID>\") , which maps to GET /taxonomies/{uid} . Calling Fetch or FetchAsync on stack.Taxonomy() without a UID throws InvalidOperationException before any request is sent. The same entry point without a UID is used for collection operations such as create or query, not for fetching a single taxonomy. Handling the Response ContentstackResponse does not include a Result property. Use OpenTResponse<T>() to deserialize the response, or OpenJObjectResponse() / OpenResponse() for raw access. The response is wrapped in a taxonomy field, so define a DTO with [JsonProperty(\"taxonomy\")] to match the payload."
url: "https://www.contentstack.com/taxonomy-fetch-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Fetch / FetchAsync

The `Fetch` and `FetchAsync` actions retrieve the details of a single, specific taxonomy.

**Fetching a Taxonomy (UID Requirement)**

- The taxonomy returned is determined only by the UID passed to `stack.Taxonomy("<TAXONOMY_UID>")`, which maps to `GET /taxonomies/{uid}`.
- Calling `Fetch` or `FetchAsync` on `stack.Taxonomy()` without a UID throws `InvalidOperationException` before any request is sent.
- The same entry point without a UID is used for collection operations such as create or query, not for fetching a single taxonomy.

**Handling the Response**

- `ContentstackResponse` does not include a `Result` property.
- Use `OpenTResponse<T>()` to deserialize the response, or `OpenJObjectResponse()` / `OpenResponse()` for raw access.
- The response is wrapped in a `taxonomy` field, so define a DTO with `[JsonProperty("taxonomy")]` to match the payload.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for `Fetch()` . Provide values to modify the retrieved payload. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the target taxonomy.

The following example fetches a taxonomy by UID and reads the returned `TaxonomyModel` from the body. It assumes [top-level statements](https://learn.microsoft.com/dotnet/csharp/fundamentals/program-structure/top-level-statements). If you use a classic `Main` method, define `TaxonomyResponseEnvelope` in another source file (or above `Main`) and call the same logic from `Main`.

```
using System;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Exceptions;

try 
{
    // Initialize the Contentstack client and target the stack
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").FetchAsync(collection: null);

    if (response.IsSuccessStatusCode)
    {
        TaxonomyResponseEnvelope body = response.OpenTResponse<TaxonomyResponseEnvelope>();
        TaxonomyModel taxonomy = body?.Taxonomy;

        if (taxonomy != null && taxonomy.Uid == "<TAXONOMY_UID>")
        {
            Console.WriteLine($"Fetched taxonomy: {taxonomy.Name} (updated_at: {taxonomy.UpdatedAt}).");
        }
        else
        {
            Console.WriteLine("Fetch reported success but response body was missing or did not match the requested UID.");
        }
    }
    else
    {
        Console.WriteLine($"Taxonomy fetch failed: HTTP {(int)response.StatusCode}");
    }
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Invalid operation: {ex.Message}");
}

// Matches the API envelope: { "taxonomy": { ... } }. In top-level programs, declare helper types after statements.
public class TaxonomyResponseEnvelope
{
    [JsonProperty("taxonomy")]
    public TaxonomyModel Taxonomy { get; set; }
}
```
