---
title: "Delete / DeleteAsync"
description: "The Delete and DeleteAsync actions remove a specific term from the taxonomy hierarchy."
url: "https://www.contentstack.com/term-delete-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete / DeleteAsync

The `Delete` and `DeleteAsync` actions remove a specific term from the taxonomy hierarchy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters (e.g., `force` ) for `Delete()` . Provide values to control deletion behavior. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) for the delete operation.

The following example shows how to force-delete a term node even if dependencies exist.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Queryable;
using Contentstack.Management.Core.Exceptions;

try 
{
    // Initialize the Contentstack client and target the stack
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");


    // Setup a query parameter collection with the "force" delete setting enabled
    ParameterCollection collection = new ParameterCollection();
    collection.Add("force", true);


    // Asynchronously delete the specified term, enforcing the deletion operation
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").DeleteAsync(collection);


    // Output success message
    Console.WriteLine("Term deleted.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
