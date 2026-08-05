---
title: "Ancestors / AncestorsAsync"
description: "The `Ancestors` and `AncestorsAsync` actions return all parent nodes upward in the taxonomy hierarchy for the given term."
url: "https://www.contentstack.com/term-ancestors-ancestorsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Ancestors / AncestorsAsync

The `Ancestors` and `AncestorsAsync` actions return all parent nodes upward in the taxonomy hierarchy for the given term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for `Ancestors()` . Provide explicit values to customize the retrieved ancestor payload. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the ancestor term data.

The following example shows how to query all parent hierarchy structures above the specified term.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;

try 
{
    // Initialize the Contentstack client and target the stack
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");


    // Query for all hierarchical parent terms connected to the specific term node
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").AncestorsAsync();


    // Output success message
    Console.WriteLine("Ancestors fetched.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
