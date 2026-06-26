---
title: "Create / CreateAsync"
description: "The `Create` and `CreateAsync` actions add a new term node under the designated taxonomy hierarchy. Validation Passing a null `model` throws `ArgumentNullException` before the request. Call `Create` / `CreateAsync` on `Terms()` (collection scope). Calling it on `Terms(termUid)` throws `InvalidOperationException` . You can set `ParentUid = null` to create a root term. The SDK omits null properties from the request body. Behavior Each call sends one HTTP POST to `/taxonomies/{taxonomy_uid}/terms` with the body `{ \"term\": … }` . The SDK serializes `TermModel` under the `term` key and does not derive `uid` from `Name` . The API returns a JSON response, commonly wrapping the created term under a `term` field. Define a matching DTO when using `OpenTResponse<T>()` . Pass `collection` to include query parameters. The SDK forwards them without validation and the API defines supported keys."
url: "https://www.contentstack.com/term-create-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create / CreateAsync

The `Create` and `CreateAsync` actions add a new term node under the designated taxonomy hierarchy.

**Validation**

- Passing a null `model` throws `ArgumentNullException` before the request.
- Call `Create` / `CreateAsync` on `Terms()` (collection scope). Calling it on `Terms(termUid)` throws `InvalidOperationException`.
- You can set `ParentUid = null` to create a root term. The SDK omits null properties from the request body.

**Behavior**

- Each call sends one HTTP POST to `/taxonomies/{taxonomy_uid}/terms` with the body `{ "term": … }`.
- The SDK serializes `TermModel` under the `term` key and does not derive `uid` from `Name`.
- The API returns a JSON response, commonly wrapping the created term under a `term` field. Define a matching DTO when using `OpenTResponse<T>()`.
- Pass `collection` to include query parameters. The SDK forwards them without validation and the API defines supported keys.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TermModel | Yes | NA | Defines the term payload (Name, ParentUid, etc.) for `Create()` . Provide values to create a term node. |
| collection | ParameterCollection | No | null | Defines query parameters for the creation request. Provide values to control the default API behavior. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the newly created term details.

The following example:

- Creates a root term (`ParentUid = null`) and a child term using the root’s `Uid` as `ParentUid`.
- Calls `CreateAsync` on collection-scoped `Terms()`.
- Uses unique term UIDs to avoid collisions, and requires valid `AUTHTOKEN`, `APIKEY`, and an existing `TAXONOMYUID`.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Exceptions;
using Newtonsoft.Json;

// Matches a common create-term response body: { "term": { ... } }.
public sealed class TermCreateResponse
{
    [JsonProperty("term")]
    public TermModel Term { get; set; }
}

public static class TermCreateExample
{
    public static async Task RunAsync()
    {
        try
        {
            ContentstackClient client = new ContentstackClient("AUTHTOKEN");
            Stack stack = client.Stack("APIKEY");
            string taxonomyUid = "TAXONOMYUID";

            // Root term — ParentUid null (same pattern as SDK integration tests).
            string rootUid = "term_root_" + Guid.NewGuid().ToString("N").Substring(0, 8);
            var rootModel = new TermModel
            {
                Uid = rootUid,
                Name = "Electronics",
                ParentUid = null
            };

            ContentstackResponse rootResponse = await stack.Taxonomy(taxonomyUid).Terms()
                .CreateAsync(rootModel, collection: null);

            if (!rootResponse.IsSuccessStatusCode)
            {
                Console.WriteLine($"Root term create failed: HTTP {(int)rootResponse.StatusCode}");
                return;
            }

            // Child term — ParentUid must reference an existing term in this taxonomy.
            string childUid = "term_child_" + Guid.NewGuid().ToString("N").Substring(0, 8);
            var childModel = new TermModel
            {
                Uid = childUid,
                Name = "Smartphones",
                ParentUid = rootUid
            };

            ContentstackResponse childResponse = await stack.Taxonomy(taxonomyUid).Terms()
                .CreateAsync(childModel, collection: null);

            if (!childResponse.IsSuccessStatusCode)
            {
                Console.WriteLine($"Child term create failed: HTTP {(int)childResponse.StatusCode}");
                return;
            }

            TermCreateResponse created = childResponse.OpenTResponse<TermCreateResponse>();
            if (created?.Term != null)
            {
                Console.WriteLine($"Created child term '{created.Term.Name}' (uid: {created.Term.Uid}).");
            }
            else
            {
                Console.WriteLine("Child term create succeeded; response did not deserialize with the sample DTO.");
            }
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
