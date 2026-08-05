---
title: "Delete / DeleteAsync"
description: "The `Delete` and `DeleteAsync` actions remove a taxonomy from the stack. Warning: Deleting a taxonomy is permanent and cannot be undone. This action removes all associated terms and breaks their links with entries. Use only when you intend to remove this structure from the stack. Validation You must call `Delete` or `DeleteAsync` on `stack.Taxonomy(\"<TAXONOMY_UID>\")` . Calling `stack.Taxonomy()` without a UID throws `InvalidOperationException` before the request is sent. If the API rejects the request (for example, due to permissions, dependencies, or a missing resource), the client throws `ContentstackErrorException` . Errors are not returned as a failed `ContentstackResponse` . Inspect `StatusCode` , `ErrorMessage` , and `ErrorCode` on the exception. Behavior Optional flags are sent as query parameters using `ParameterCollection` . Boolean values are serialized as lowercase ( `true` / `false` ) in the URL. For example, to force delete (if supported): ParameterCollection collection = new ParameterCollection(); collection.Add(\"force\", true); // becomes ?force=true ContentstackResponse response = await stack .Taxonomy(\"<TAXONOMY\\_UID>\") .DeleteAsync(collection); Use of parameters not supported by the Management API for taxonomies may be ignored or throw errors."
url: "https://www.contentstack.com/taxonomy-delete-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete / DeleteAsync

The `Delete` and `DeleteAsync` actions remove a taxonomy from the stack.

**Warning:** Deleting a taxonomy is permanent and cannot be undone. This action removes all associated terms and breaks their links with entries. Use only when you intend to remove this structure from the stack.
**Validation**

- You must call `Delete` or `DeleteAsync` on `stack.Taxonomy("<TAXONOMY_UID>")`. Calling `stack.Taxonomy()` without a UID throws `InvalidOperationException` before the request is sent.
- If the API rejects the request (for example, due to permissions, dependencies, or a missing resource), the client throws `ContentstackErrorException`.
- Errors are not returned as a failed `ContentstackResponse`. Inspect `StatusCode`, `ErrorMessage`, and `ErrorCode` on the exception.

**Behavior**

- Optional flags are sent as query parameters using `ParameterCollection`.
- Boolean values are serialized as lowercase (`true` / `false`) in the URL.
- For example, to force delete (if supported):ParameterCollection collection = new ParameterCollection();
collection.Add("force", true); // becomes ?force=true
ContentstackResponse response = await stack
 .Taxonomy("<TAXONOMY_UID>")
 .DeleteAsync(collection);
- Use of parameters not supported by the Management API for taxonomies may be ignored or throw errors.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for `Delete()` . Provide values to control deletion behavior. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) confirming the delete operation.

The following example removes a taxonomy by UID. It omits `collection` for a plain delete and adds a `ParameterCollection` with `force` only when your API contract requires it.

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


    // Execute the deletion request for a targeted taxonomy asynchronously
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").DeleteAsync(collection: null);


    Console.WriteLine("Taxonomy deleted successfully.");
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
