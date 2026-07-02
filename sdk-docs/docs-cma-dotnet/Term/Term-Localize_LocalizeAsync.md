---
title: "Localize / LocalizeAsync"
description: "The Localize and LocalizeAsync actions create or update a localized version of a term node."
url: "https://www.contentstack.com/term-localize-localizeasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Localize / LocalizeAsync

The `Localize` and `LocalizeAsync` actions create or update a localized version of a term node.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TermModel | Yes | NA | Localized term data for `Localize()` . Provide values to submit the localized payload. |
| collection | ParameterCollection | Yes | null | Query parameters for `Localize()` to designate the target locale. Provide values to assign the term to the correct locale code. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async)  containing the localized term entity.

The following example shows how to create a localized entry for the specific term targeting the "fr-fr" locale.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Queryable;
using Contentstack.Management.Core.Exceptions;

try 
{
    // Initialize the Contentstack client and target the stack
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");


    // Set up the localized name or properties for the specific term node
    TermModel model = new TermModel { Name = "Électronique" };


    // Configure the localization target (in this case, french mapping via 'fr-fr')
    ParameterCollection collection = new ParameterCollection();
    collection.Add("locale", "fr-fr");


    // Push the updated translation payload specific to the targeted term
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").LocalizeAsync(model, collection);


    // Output success message
    Console.WriteLine("Term localized.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
