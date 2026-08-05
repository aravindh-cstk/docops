---
title: "Update / UpdateAsync"
description: "The `Update` and `UpdateAsync` actions modify the details of an existing taxonomy. Update Behavior and UID Requirement The taxonomy is identified only by the UID passed to `stack.Taxonomy(\"<TAXONOMY_UID>\")` , which is used in the request path `PUT /taxonomies/{uid}` . The SDK does not infer the target from `TaxonomyModel` . You must call `Update` or `UpdateAsync` with a non-empty UID. Calling `stack.Taxonomy()` without a UID throws `InvalidOperationException` before any request is sent. You can set `TaxonomyModel.Uid` in the request body for consistency, but it does not determine which taxonomy is updated. Deserializing the Response `ContentstackResponse` does not include a `Result` property. Use `OpenTResponse<T>()` to deserialize the response, or `OpenJObjectResponse()` / `OpenResponse()` for raw access. The API wraps the response inside a `taxonomy` field, so define a DTO with `[JsonProperty(\"taxonomy\")]` to match the structure."
url: "https://www.contentstack.com/taxonomy-update-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update / UpdateAsync

The `Update` and `UpdateAsync` actions modify the details of an existing taxonomy.

**Update Behavior and UID Requirement**

- The taxonomy is identified only by the UID passed to `stack.Taxonomy("<TAXONOMY_UID>")`, which is used in the request path `PUT /taxonomies/{uid}`. The SDK does not infer the target from `TaxonomyModel`.
- You must call `Update` or `UpdateAsync` with a non-empty UID. Calling `stack.Taxonomy()` without a UID throws `InvalidOperationException` before any request is sent.
- You can set `TaxonomyModel.Uid` in the request body for consistency, but it does not determine which taxonomy is updated.

**Deserializing the Response**

- `ContentstackResponse` does not include a `Result` property.
- Use `OpenTResponse<T>()` to deserialize the response, or `OpenJObjectResponse()` / `OpenResponse()` for raw access.
- The API wraps the response inside a `taxonomy` field, so define a DTO with `[JsonProperty("taxonomy")]` to match the structure.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TaxonomyModel | Yes | NA | Defines fields (Name, Description) for `Update()` . Provide values to update the taxonomy. |
| collection | ParameterCollection | No | null | Defines optional query parameters for the update request. Provide values to modify the API response. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async)

The following example shows how to update the name and description of an explicitly targeted taxonomy and verify the persisted values from the response body. It assumes a [top-level statements](https://learn.microsoft.com/dotnet/csharp/fundamentals/program-structure/top-level-statements) entry file. If you use a classic `Main` method instead, define `TaxonomyResponseEnvelope` in another source file (or above `Main` in the same file) and invoke the same logic from `Main`.

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


    // Define the properties to be updated
    TaxonomyModel model = new TaxonomyModel 
    { 
        Name = "<UPDATED_NAME>", 
        Description = "<UPDATED_DESCRIPTION>" 
    };


    // Target the taxonomy by UID and apply the updates (optional ParameterCollection as second arg)
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").UpdateAsync(model, collection: null);

    if (response.IsSuccessStatusCode)
    {
        TaxonomyResponseEnvelope body = response.OpenTResponse<TaxonomyResponseEnvelope>();
        TaxonomyModel updated = body?.Taxonomy;

        if (updated != null
            && updated.Name == "<UPDATED_NAME>"
            && updated.Description == "<UPDATED_DESCRIPTION>")
        {
            Console.WriteLine($"Taxonomy updated successfully (uid: {updated.Uid}, updated_at: {updated.UpdatedAt}).");
        }
        else
        {
            Console.WriteLine("Update reported success but response body did not match expected fields.");
        }
    }
    else
    {
        Console.WriteLine($"Taxonomy update failed: HTTP {(int)response.StatusCode}");
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
