---
title: "Taxonomy"
description: "The `Taxonomy` class allows you to organize and categorize content using a hierarchical structure of terms. It serves as the central manager for taxonomy-level operations such as create, manage, export, or retrieve taxonomies, within a specific Stack. Initialization To interact with taxonomies, initialize the class through your stack instance. Syntax: stack.Taxonomy(string uid = null) Returns: Type : `Taxonomy` Description : Returns a Taxonomy instance. UID and Request Scope The `uid` determines the request scope. The SDK uses it to bind the `Taxonomy` instance either to the collection ( `/taxonomies` ) or to a single taxonomy ( `/taxonomies/{uid}` ), and validates this before sending the request. Using the wrong scope throws `InvalidOperationException` . Use collection scope by calling `stack.Taxonomy()` (omit or pass `null` for `uid` ). This maps to `/taxonomies` and supports: `Create` / `CreateAsync` `Query().Find()` / `Query().FindAsync()` `Import` / `ImportAsync` Use single-taxonomy scope by calling `stack.Taxonomy(\"<TAXONOMY_UID>\")` with a non-empty UID. This maps to `/taxonomies/{uid}` . Method Index Method Name Description `Find()` / `FindAsync()` Queries and retrieves a list of taxonomies with optional filters. `Create()` / `CreateAsync()` Creates a new taxonomy within the stack. `Update()` / `UpdateAsync()` Updates the details of an existing taxonomy. `Fetch()` / `FetchAsync()` Retrieves the complete details of a single taxonomy. `Delete()` / `DeleteAsync()` Permanently removes a taxonomy from the stack. `Export()` / `ExportAsync()` Exports taxonomy data as a payload. `Locales()` / `LocalesAsync()` Retrieves the localized versions for the targeted taxonomy. `Localize()` / `LocalizeAsync()` Creates or updates a localized version of the taxonomy. `Import()` / `ImportAsync()` Imports a taxonomy from a file stream. `Terms()` Returns a `Term` instance scoped to this taxonomy. Synchronous vs Asynchronous Methods Synchronous Blocks the executing thread until the API responds. Use for simple console scripts or background workers where blocking is acceptable. Asynchronous ( `Async` ) Releases the thread while waiting for the network response. Recommended for modern .NET apps (e.g., [ASP.NET](http://ASP.NET) Core) and UI apps. Ensures better scalability and responsiveness. Common Usage Example Shows an end-to-end async workflow to initialize `Taxonomy` , authenticate the client, target a Stack, and create a \"Categories\" taxonomy with basic error handling. using System; using System.Threading.Tasks; using Contentstack.Management.Core; using Contentstack.Management.Core.Models; using Contentstack.Management.Core.Services.Models; using Contentstack.Management.Core.Exceptions; namespace ContentstackExample { class Program { static async Task Main(string\\[\\] args) { try { // Initialize the Contentstack client with the authentication token ContentstackClient client = new ContentstackClient(\"<AUTHTOKEN>\"); // Target the specific stack using its API key Stack stack = client.Stack(\"<API\\_KEY>\"); // Define the payload for the new taxonomy TaxonomyModel model = new TaxonomyModel { Uid = \"<TAXONOMY\\_UID>\", Name = \"Categories\", Description = \"Global categories taxonomy\" }; // Optional query parameters (merged as query string when non-empty); pass null if none ContentstackResponse response = await stack.Taxonomy().CreateAsync(model, collection: null); if (response.IsSuccessStatusCode) { Console.WriteLine(\"Taxonomy created successfully.\"); } else { Console.WriteLine($\"Taxonomy create failed: HTTP {(int)response.StatusCode}\"); } } catch (ContentstackException ex) { Console.WriteLine($\"Contentstack Error: {ex.ErrorMessage}\"); } catch (Exception ex) { Console.WriteLine($\"System Error: {ex.Message}\"); } } } }"
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/taxonomy"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Taxonomy

## Taxonomy

The `Taxonomy` class allows you to organize and categorize content using a hierarchical structure of terms. It serves as the central manager for taxonomy-level operations such as create, manage, export, or retrieve taxonomies, within a specific Stack.

**Initialization**

To interact with taxonomies, initialize the class through your stack instance.

- **Syntax:**stack.Taxonomy(string uid = null)
- **Returns:**
 - **Type**: `Taxonomy`
 - **Description**: Returns a Taxonomy instance.

**UID and Request Scope**

- The `uid` determines the request scope. The SDK uses it to bind the `Taxonomy` instance either to the collection (`/taxonomies`) or to a single taxonomy (`/taxonomies/{uid}`), and validates this before sending the request. Using the wrong scope throws `InvalidOperationException`.
- Use collection scope by calling `stack.Taxonomy()` (omit or pass `null` for `uid`). This maps to `/taxonomies` and supports:
 - `Create` / `CreateAsync`
 - `Query().Find()` / `Query().FindAsync()`
 - `Import` / `ImportAsync`
- Use single-taxonomy scope by calling `stack.Taxonomy("<TAXONOMY_UID>")` with a non-empty UID. This maps to `/taxonomies/{uid}`.

**Method Index**

| **Method Name** | **Description** |
|---|---|
| `Find()` / `FindAsync()` | Queries and retrieves a list of taxonomies with optional filters. |
| `Create()` / `CreateAsync()` | Creates a new taxonomy within the stack. |
| `Update()` / `UpdateAsync()` | Updates the details of an existing taxonomy. |
| `Fetch()` / `FetchAsync()` | Retrieves the complete details of a single taxonomy. |
| `Delete()` / `DeleteAsync()` | Permanently removes a taxonomy from the stack. |
| `Export()` / `ExportAsync()` | Exports taxonomy data as a payload. |
| `Locales()` / `LocalesAsync()` | Retrieves the localized versions for the targeted taxonomy. |
| `Localize()` / `LocalizeAsync()` | Creates or updates a localized version of the taxonomy. |
| `Import()` / `ImportAsync()` | Imports a taxonomy from a file stream. |
| `Terms()` | Returns a `Term` instance scoped to this taxonomy. |

**Synchronous vs Asynchronous Methods**

**Synchronous**

- Blocks the executing thread until the API responds.
- Use for simple console scripts or background workers where blocking is acceptable.

**Asynchronous (**`Async`**)**

- Releases the thread while waiting for the network response.
- Recommended for modern .NET apps (e.g., ASP.NET Core) and UI apps.
- Ensures better scalability and responsiveness.

**Common Usage Example**

Shows an end-to-end async workflow to initialize `Taxonomy`, authenticate the client, target a Stack, and create a "Categories" taxonomy with basic error handling.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Services.Models;
using Contentstack.Management.Core.Exceptions;

namespace ContentstackExample
{
    class Program
    {
        static async Task Main(string[] args)
        {
            try 
            {
                // Initialize the Contentstack client with the authentication token
                ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");


                // Target the specific stack using its API key
                Stack stack = client.Stack("<API_KEY>");


                // Define the payload for the new taxonomy
                TaxonomyModel model = new TaxonomyModel
                {
                    Uid = "<TAXONOMY_UID>",
                    Name = "Categories",
                    Description = "Global categories taxonomy"
                };


                // Optional query parameters (merged as query string when non-empty); pass null if none
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
                Console.WriteLine($"Contentstack Error: {ex.ErrorMessage}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"System Error: {ex.Message}");
            }
        }
    }
}
```
