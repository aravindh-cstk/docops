---
title: "Find / FindAsync"
description: "The Find and FindAsync methods retrieve all taxonomies available in the stack. Note: Results are paginated, so a single Find() / FindAsync() may not return every taxonomy. Refer to the Content Management API documentation for page size and maximum limit."
url: "https://www.contentstack.com/taxonomy-find-findasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Find / FindAsync

The `Find` and `FindAsync` methods retrieve all taxonomies available in the stack.

**Note:** Results are paginated, so a single `Find()` / `FindAsync()` may not return every taxonomy. Refer to the [Content Management API](/docs/developers/apis/content-management-api) documentation for page size and maximum limit.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Query modifiers for `Query().Find()` provide values to refine retrieval results using applied filters. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the list of taxonomies.

Use the `Query` fluent helpers or pass a `ParameterCollection` into `Find` / `FindAsync` to page results (for example `limit`, `skip`, and `include_count`).

**Example:**

The following example shows how to asynchronously query the stack for taxonomies, page with `Limit` / `Skip`, and read the `taxonomies` array from the response.

```
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Queryable;
using Contentstack.Management.Core.Exceptions;
using Newtonsoft.Json;

namespace ContentstackExample
{
    // GET /taxonomies → { "taxonomies": [ ... ] }
    class TaxonomiesResponseModel
    {
        [JsonProperty("taxonomies")]
        public List<TaxonomyModel> Taxonomies { get; set; }
    }

    class Program
    {
        static async Task Main(string[] args)
        {
            try
            {
                ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
                Stack stack = client.Stack("<API_KEY>");

                // Merge extra query params: .FindAsync(new ParameterCollection { ... })
                ContentstackResponse response = await stack.Taxonomy().Query()
                    .Limit(20)
                    .Skip(0)
                    .FindAsync();

                if (!response.IsSuccessStatusCode)
                {
                    Console.WriteLine($"Request failed: HTTP {(int)response.StatusCode}");
                    return;
                }

                var wrapper = response.OpenTResponse<TaxonomiesResponseModel>();
                if (wrapper?.Taxonomies != null)
                {
                    foreach (var taxonomy in wrapper.Taxonomies)
                    {
                        Console.WriteLine($"{taxonomy.Uid}: {taxonomy.Name}");
                    }
                }
            }
            catch (ContentstackException ex)
            {
                Console.WriteLine($"Error: {ex.ErrorMessage}");
            }
        }
    }
}
```
