---
title: "Descendants / DescendantsAsync"
description: "The Descendants and DescendantsAsync actions return all child nodes downward in the taxonomy hierarchy for the given term."
url: "https://www.contentstack.com/term-descendants-descendantsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Descendants / DescendantsAsync

The `Descendants` and `DescendantsAsync` actions return all child nodes downward in the taxonomy hierarchy for the given term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines query parameters for `Descendants()` . Provide values to customize the retrieved descendant payload. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing descendant term data

The following example shows how to query all underlying child nodes beneath the specified term.

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


    // Asynchronously retrieve all child term hierarchies attached to the specific term node
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").DescendantsAsync();


    // Output success message
    Console.WriteLine("Descendants fetched.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
