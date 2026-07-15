---
title: "Term"
description: "The `Term` class represents a taxonomy term (a node in a hierarchy) in the .NET Management SDK. It operates on API paths rooted at `/taxonomies/{taxonomy_uid}/terms` and `/taxonomies/{taxonomy_uid}/terms/{term_uid}` when scoped to a single term. Initialization Access a `Term` instance through `stack.Taxonomy(\"TAXONOMYUID\").Terms(...)` rather than constructing it directly. Once obtained, use the instance to perform create, read, update, delete, hierarchy, move, locale, or search operations. Syntax: `stack.Taxonomy(\"<TAXONOMY_UID>\").Terms(string termUid = null)` Method Index Method Name Description `Find()` / `FindAsync()` Queries and retrieves terms within the specific taxonomy. `Create()` / `CreateAsync()` Creates a new term in the taxonomy. `Update()` / `UpdateAsync()` Updates an existing term's details. `Fetch()` / `FetchAsync()` Fetches details of a single term. `Delete()` / `DeleteAsync()` Deletes a term from the taxonomy. `Ancestors()` / `AncestorsAsync()` Retrieves the ancestor terms of a specific term. `Descendants()` / `DescendantsAsync()` Retrieves the descendant terms of a specific term. `Move()` / `MoveAsync()` Moves a term to a new parent and/or changes its sibling order. `Locales()` / `LocalesAsync()` Gets locales information for the term. `Localize()` / `LocalizeAsync()` Creates or updates a localized version of the term. `Search()` / `SearchAsync()` Performs a typeahead search across terms in all taxonomies. Synchronous vs Asynchronous Methods Synchronous Blocks the executing thread until the API responds. Use for simple console scripts or background workers where blocking is acceptable. Asynchronous ( `Async` ) Releases the thread while waiting for the network response. Recommended for modern .NET apps (e.g., [ASP.NET](http://ASP.NET) Core) and UI apps. Ensures better scalability and responsiveness. Common Usage Example The following example demonstrates a complete asynchronous workflow to create a new term under a specific taxonomy. using System; using System.Threading.Tasks; using Contentstack.Management.Core; using Contentstack.Management.Core.Models; using Contentstack.Management.Core.Exceptions; namespace ContentstackExample { class Program { static async Task Main(string\\[\\] args) { try { // Initialize the Contentstack client with the authentication token ContentstackClient client = new ContentstackClient(\"<AUTHTOKEN>\"); // Target the specific stack using its API key Stack stack = client.Stack(\"<API\\_KEY>\"); // Define the payload for the new term, indicating its relationship TermModel model = new TermModel { Uid = \"<TERM\\_UID>\", Name = \"Electronics\", ParentUid = null // Set to null for a root term }; // Target the taxonomy and execute the term creation request asynchronously ContentstackResponse response = await stack.Taxonomy(\"<TAXONOMY\\_UID>\").Terms().CreateAsync(model); // Output success message Console.WriteLine(\"Term Created Successfully\"); } catch (ContentstackException ex) { Console.WriteLine($\"Contentstack Error: {ex.ErrorMessage}\"); } catch (Exception ex) { Console.WriteLine($\"System Error: {ex.Message}\"); } } } }"
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/term"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Term

## Term

The `Term` class represents a taxonomy term (a node in a hierarchy) in the .NET Management SDK. It operates on API paths rooted at `/taxonomies/{taxonomy_uid}/terms` and `/taxonomies/{taxonomy_uid}/terms/{term_uid}` when scoped to a single term.

**Initialization**

Access a `Term` instance through `stack.Taxonomy("TAXONOMYUID").Terms(...)` rather than constructing it directly. Once obtained, use the instance to perform create, read, update, delete, hierarchy, move, locale, or search operations.

**Syntax:** `stack.Taxonomy("<TAXONOMY_UID>").Terms(string termUid = null)`

**Method Index**

| Method Name | Description |
|---|---|
| `Find()` / `FindAsync()` | Queries and retrieves terms within the specific taxonomy. |
| `Create()` / `CreateAsync()` | Creates a new term in the taxonomy. |
| `Update()` / `UpdateAsync()` | Updates an existing term's details. |
| `Fetch()` / `FetchAsync()` | Fetches details of a single term. |
| `Delete()` / `DeleteAsync()` | Deletes a term from the taxonomy. |
| `Ancestors()` / `AncestorsAsync()` | Retrieves the ancestor terms of a specific term. |
| `Descendants()` / `DescendantsAsync()` | Retrieves the descendant terms of a specific term. |
| `Move()` / `MoveAsync()` | Moves a term to a new parent and/or changes its sibling order. |
| `Locales()` / `LocalesAsync()` | Gets locales information for the term. |
| `Localize()` / `LocalizeAsync()` | Creates or updates a localized version of the term. |
| `Search()` / `SearchAsync()` | Performs a typeahead search across terms in all taxonomies. |

**Synchronous vs Asynchronous Methods**

**Synchronous**

- Blocks the executing thread until the API responds.
- Use for simple console scripts or background workers where blocking is acceptable.

**Asynchronous (**`Async`**)**

- Releases the thread while waiting for the network response.
- Recommended for modern .NET apps (e.g., ASP.NET Core) and UI apps.
- Ensures better scalability and responsiveness.

**Common Usage Example**

The following example demonstrates a complete asynchronous workflow to create a new term under a specific taxonomy.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
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

                // Define the payload for the new term, indicating its relationship
                TermModel model = new TermModel
                {
                    Uid = "<TERM_UID>",
                    Name = "Electronics",
                    ParentUid = null // Set to null for a root term
                };

                // Target the taxonomy and execute the term creation request asynchronously
                ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms().CreateAsync(model);

                // Output success message
                Console.WriteLine("Term Created Successfully");
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
