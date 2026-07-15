---
title: "Fetch / FetchAsync"
description: "The `Fetch` and `FetchAsync` actions retrieve the properties and configuration of a single targeted term."
url: "https://www.contentstack.com/terms-fetch-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch / FetchAsync

The `Fetch` and `FetchAsync` actions retrieve the properties and configuration of a single targeted term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for `Fetch()` . Provide values to customize the returned payload. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async)  containing the term payload.

The following example shows how to fetch the precise details of a specific term node.

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


    // Asynchronously retrieve the payload of a specific term node
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").FetchAsync();


    // Output success message
    Console.WriteLine("Term fetched.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
