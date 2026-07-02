---
title: "Import / ImportAsync"
description: "The Import and ImportAsync actions upload a taxonomy configuration file into the stack via multipart form data. Validation Use stack.Taxonomy() (no UID) for import. Calling stack.Taxonomy(\"TAXONOMYUID\").Import(...) throws InvalidOperationException before the request. Passing null for the model parameter throws ArgumentNullException when constructing the upload service. Provide valid inputs to TaxonomyImportModel: filePath must be non-null and accessible. Invalid paths or permissions throw IOException (or related System.IO exceptions). A null stream throws ArgumentNullException . Passing a null or empty collection does not throw. The API validates any query parameters after the request."
url: "https://www.contentstack.com/taxonomy-import-importasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Import / ImportAsync

The `Import` and `ImportAsync` actions upload a taxonomy configuration file into the stack via multipart form data.

**Validation**

- Use `stack.Taxonomy()` (no UID) for import. Calling `stack.Taxonomy("TAXONOMYUID").Import(...)` throws `InvalidOperationException` before the request.
- Passing `null` for the `model` parameter throws `ArgumentNullException` when constructing the upload service.
- Provide valid inputs to TaxonomyImportModel:
  - `filePath` must be non-null and accessible. Invalid paths or permissions throw `IOException` (or related `System.IO` exceptions).
  - A null `stream` throws `ArgumentNullException`.
- Passing a `null` or empty `collection` does not throw. The API validates any query parameters after the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | TaxonomyImportModel | Yes | NA | Defines the file stream and filename for `Import()` . Provide values to upload the taxonomy configuration file to the stack. |
| collection | ParameterCollection | No | null | Defines optional query parameters for `Import()` . Provide values to control import processing rules. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the successfully imported taxonomy details.

The following example shows how to read a taxonomy JSON file from the local disk and import it into the stack.

```
using System;
using System.IO;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Exceptions;

try 
{
    // Initialize the Contentstack client and target the stack
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");


    // Open the local JSON file containing the taxonomy data as a stream
    using Stream stream = File.OpenRead("path/to/taxonomy.json");


    // Assign the file stream and expected file name to the import model
    TaxonomyImportModel model = new TaxonomyImportModel(stream, "taxonomy.json");


    // Execute the import process asynchronously
    ContentstackResponse response = await stack.Taxonomy().ImportAsync(model);


    // Output success message
    Console.WriteLine("Taxonomy imported successfully.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
catch (IOException ex)
{
    Console.WriteLine($"File Error: {ex.Message}");
}
```
