---
title: "Move / MoveAsync"
description: "The Move and MoveAsync actions change the parent and/or sibling order of a specific term within the taxonomy hierarchy. Note: The SDK uses a TermMoveModel (not separate parameters) for move operations. Set ParentUid to the target parent term and optionally Order for sibling position. The SDK serializes this model under the term key in the request body. You can pass optional query parameters (for example, force ) using a ParameterCollection as the second argument to Move / MoveAsync ."
url: "https://www.contentstack.com/term-move-moveasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Move / MoveAsync

The `Move` and `MoveAsync` actions change the parent and/or sibling order of a specific term within the taxonomy hierarchy.

**Note:** The SDK uses a `TermMoveModel` (not separate parameters) for move operations. Set `ParentUid` to the target parent term and optionally `Order` for sibling position. The SDK serializes this model under the `term` key in the request body. You can pass optional query parameters (for example, `force`) using a `ParameterCollection` as the second argument to `Move` / `MoveAsync`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| moveModel | TermMoveModel | Yes | NA | Defines the target parent UID and optional sibling order for `Move()` . Provide values to restructure the term hierarchy. |
| collection | ParameterCollection | No | null | Defines optional query parameters (for example, `force` ) for `Move()` . Provide values to control move behavior. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the updated term details.

The following example shows how to move a specific term to a new parent ID at order rank 1.

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


    // Configure the restructuring behavior, outlining the target parent and sibling order
    TermMoveModel moveModel = new TermMoveModel 
    { 
        ParentUid = "<NEW_PARENT_TERM_UID>", 
        Order = 1 
    };


    // Add 'force' condition to safely allow move bypassing certain dependency constraints
    ParameterCollection collection = new ParameterCollection();
    collection.Add("force", true);


    // Execute the asynchronous term move update applying the configuration
    ContentstackResponse response = await stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>").MoveAsync(moveModel, collection);


    // Output success message
    Console.WriteLine("Term moved successfully.");
} 
catch (ContentstackException ex) 
{
    Console.WriteLine($"Error: {ex.ErrorMessage}");
}
```
