---
title: "Create / CreateAsync"
description: "The Create and CreateAsync actions add a new taxonomy to the stack."
url: "https://www.contentstack.com/taxonomy-create-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Create / CreateAsync

The `Create` and `CreateAsync` actions add a new taxonomy to the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TaxonomyModel | Yes | NA | The taxonomy payload for `Create()` . Provide UID, name, and optionally description to create a new taxonomy entity. |
| collection | ParameterCollection | No | null | Defines optional query parameters for the creation request. Provide values to modify the default API response. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the created taxonomy details.

The following example shows how to asynchronously create a new taxonomy with a specific UID and Name.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Exceptions;

try 
{
    // Initialize the Contentstack client and target the stack
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");


    // Construct the payload with required taxonomy properties
    TaxonomyModel model = new TaxonomyModel
    {
        Uid = "<TAXONOMY_UID>",
        Name = "Product Taxonomy"
    };


    // Execute the creation request (second argument: optional ParameterCollection, or null)
    ContentstackResponse response = await stack.Taxonomy().CreateAsync(model, collection: null);

    if (response.IsSuccessStatusCode)
    {
        Console.WriteLine("Taxonomy created successfully.");
    }
    else
    {
        Console.WriteLine($"Taxonomy create failed: HTTP {(int)response.StatusCode}");
    }
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
