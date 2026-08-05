---
title: "Localize / LocalizeAsync"
description: "The `Localize` and `LocalizeAsync` actions create or update the localized fields for an existing taxonomy, using optional query parameters (typically `locale` ) to select the target locale. Validation A non-empty taxonomy UID must be provided; otherwise, `stack.Taxonomy()` throws `InvalidOperationException` . Passing `null` for `model` throws `ArgumentNullException` when the internal `CreateUpdateService` is constructed. You can pass `null` for `collection` . The SDK does not validate query parameters and defers validation to the API. Behavior Add entries to `ParameterCollection` to send query parameters (for example, `locale` ). The SDK forwards these values without validation. The SDK sends one HTTP POST request to `/taxonomies/{taxonomy_uid}` with the body `{ \"taxonomy\": … }` . Query parameters are included only when `collection` is non-empty. The API returns a JSON response. Deserialize it using `OpenTResponse<T>()` or similar if needed. Call `Locales` / `LocalesAsync` to read locale data, and call `stack.Locale().Query()` to list available locale codes."
url: "https://www.contentstack.com/taxonomy-localize-localizeasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Localize / LocalizeAsync

The `Localize` and `LocalizeAsync` actions create or update the localized fields for an existing taxonomy, using optional query parameters (typically `locale`) to select the target locale.

**Validation**

- A non-empty taxonomy UID must be provided; otherwise, `stack.Taxonomy()` throws `InvalidOperationException`.
- Passing `null` for `model` throws `ArgumentNullException` when the internal `CreateUpdateService` is constructed.
- You can pass `null` for `collection`. The SDK does not validate query parameters and defers validation to the API.

**Behavior**

- Add entries to `ParameterCollection` to send query parameters (for example, `locale`). The SDK forwards these values without validation.
- The SDK sends one HTTP POST request to `/taxonomies/{taxonomy_uid}` with the body `{ "taxonomy": … }`. Query parameters are included only when `collection` is non-empty.
- The API returns a JSON response. Deserialize it using `OpenTResponse<T>()` or similar if needed.
- Call `Locales` / `LocalesAsync` to read locale data, and call `stack.Locale().Query()` to list available locale codes.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TaxonomyModel | Yes | NA | Defines the localized taxonomy data for `Localize()` . Provide values to send the localized payload to the server. |
| collection | ParameterCollection | Yes | null | Defines query parameters for `Localize()` that specify the target locale. Provide values to ensure the payload is assigned to the correct locale code. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the newly localized taxonomy entity

The following example shows how to create a localized version for the taxonomy targeting the `fr-fr` locale.

**Note:** The targeted locale must exist on the stack.
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


    // Define the translated properties for the taxonomy
    TaxonomyModel model = new TaxonomyModel
    {
        Uid = "<TAXONOMY_UID>",
        Name = "Catégories",
        Description = "Catégories globales"
    };


    // Initialize query parameters to target the specific locale (e.g., 'fr-fr')
    ParameterCollection collection = new ParameterCollection();
    collection.Add("locale", "fr-fr");


    // Execute the localization request asynchronously passing both model and params
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").LocalizeAsync(model, collection);


    // Output success message
    Console.WriteLine("Taxonomy localized.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
