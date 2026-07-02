---
title: "Search / SearchAsync"
description: "The Search and SearchAsync actions perform a typeahead search across terms in all taxonomies globally within the stack."
url: "https://www.contentstack.com/term-search-searchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Search / SearchAsync

The `Search` and `SearchAsync` actions perform a typeahead search across terms in *all* taxonomies globally within the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| typeahead | string | Yes | NA | The typeahead search string for `Search()` . Provide values to locate matching terms globally. |
| collection | ParameterCollection | No | null | Query parameters for `Search()` . Provide values to refine search results. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing matching terms.

The following example shows how to execute a typeahead search to find terms matching a designated string across the stack's taxonomies.

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


    // Note: Called on the collection context without a specific term UID.
    // Conducts an asynchronous typeahead search through all term collections globally
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms().SearchAsync("<TYPEAHEAD_STRING>");


    // Output success message
    Console.WriteLine("Search completed.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
