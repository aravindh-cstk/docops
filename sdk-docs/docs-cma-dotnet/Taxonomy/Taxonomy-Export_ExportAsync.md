---
title: "Export / ExportAsync"
description: "The `Export` and `ExportAsync` actions retrieve a full export of a single taxonomy for backup, migration, or external processing. The response body is the raw export payload (JSON document or CSV text). The SDK does not provide a typed model. Use `OpenResponse()` , `OpenJObjectResponse()` , or `OpenTResponse<T>()` with your own DTOs. Inspect `ContentType` and `ContentLength` to distinguish JSON vs CSV. Validation Calling `stack.Taxonomy()` without a UID and then `Export` / `ExportAsync` throws `InvalidOperationException` before the request. If the client is not authorized, `ThrowIfNotLoggedIn()` is thrown before the request. Unsupported `ParameterCollection` value types can throw `ContentstackException` . Passing `null` for `collection` is valid and only fails at the API or during response parsing. Behavior The taxonomy is selected only by the UID passed to `stack.Taxonomy(\"<TAXONOMY_UID>\")` . Each call maps to a single `GET /taxonomies/{uid}/export` request. Optional flags are sent via `ParameterCollection` as query parameters. Supported keys and behavior are defined by the Management API. The response shape depends on the API. The response is not written to disk automatically. Persist the output from `OpenResponse()` if needed. Use `Import` / `ImportAsync` to re-upload exports, and `Fetch` / `FetchAsync` for live taxonomy data without export."
url: "https://www.contentstack.com/taxonomy-export-exportasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Export / ExportAsync

The `Export` and `ExportAsync` actions retrieve a full export of a single taxonomy for backup, migration, or external processing.

The response body is the raw export payload (JSON document or CSV text). The SDK does not provide a typed model. Use `OpenResponse()`, `OpenJObjectResponse()`, or `OpenTResponse<T>()` with your own DTOs. Inspect `ContentType` and `ContentLength` to distinguish JSON vs CSV.

**Validation**

- Calling `stack.Taxonomy()` without a UID and then `Export` / `ExportAsync` throws `InvalidOperationException` before the request.
- If the client is not authorized, `ThrowIfNotLoggedIn()` is thrown before the request.
- Unsupported `ParameterCollection` value types can throw `ContentstackException`.
- Passing `null` for `collection` is valid and only fails at the API or during response parsing.

**Behavior**

- The taxonomy is selected only by the UID passed to `stack.Taxonomy("<TAXONOMY_UID>")`.
- Each call maps to a single `GET /taxonomies/{uid}/export` request.
- Optional flags are sent via `ParameterCollection` as query parameters. Supported keys and behavior are defined by the Management API.
- The response shape depends on the API.
- The response is not written to disk automatically. Persist the output from `OpenResponse()` if needed.
- Use `Import` / `ImportAsync` to re-upload exports, and `Fetch` / `FetchAsync` for live taxonomy data without export.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for the `Export()` method. Provide values to control exported data. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the exported taxonomy data payload.

The following example requests a JSON export using an optional `format` query parameter, reads the body as JSON, and handles API and client-side errors.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Queryable;
using Newtonsoft.Json.Linq;

try 
{
    ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
    Stack stack = client.Stack("<API_KEY>");

    ParameterCollection collection = new ParameterCollection();
    collection.Add("format", "json");

    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").ExportAsync(collection);

    JObject json = response.OpenJObjectResponse();

    Console.WriteLine($"Export succeeded. Content-Type: {response.ContentType}, length: {response.ContentLength}");
    Console.WriteLine(json.ToString(Newtonsoft.Json.Formatting.None));
}
catch (ContentstackErrorException ex)
{
    Console.WriteLine($"API error ({(int)ex.StatusCode}): {ex.ErrorMessage}");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Invalid operation: {ex.Message}");
}
```
