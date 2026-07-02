---
title: "Locales / LocalesAsync"
description: "The Locales and LocalesAsync actions return locale information strictly for the specified term."
url: "https://www.contentstack.com/term-locales-localesasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Locales / LocalesAsync

The `Locales` and `LocalesAsync` actions return locale information strictly for the specified term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Query parameters for `Locales()` . Provide values to customize the returned locale list. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing term locale data.

The following example shows how to retrieve all locales under which this exact term has been localized.

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


    // Request a fetch array representing the localized variants for a specific term
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").LocalesAsync();


    // Output success message
    Console.WriteLine("Term Locales fetched.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
