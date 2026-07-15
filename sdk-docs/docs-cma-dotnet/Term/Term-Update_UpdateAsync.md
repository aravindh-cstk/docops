---
title: "Update / UpdateAsync"
description: "The `Update` and `UpdateAsync` actions modify the metadata of an existing term."
url: "https://www.contentstack.com/term-update-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update / UpdateAsync

The `Update` and `UpdateAsync` actions modify the metadata of an existing term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TermModel | Yes | NA | Defines the fields to update (e.g., Name) for `Update()` . Provide values to overwrite existing term data. |
| collection | ParameterCollection | No | null | Defines optional query parameters for the update request. Provide values to control the API response. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the updated term details.

The following example shows how to target a specific term and update its display name.

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


    // Set the updated term values
    TermModel model = new TermModel { Name = "<UPDATED_NAME>" };


    // Apply updates asynchronously to the targeted term within the specific taxonomy
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").UpdateAsync(model);


    // Output success message
    Console.WriteLine("Term updated.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
