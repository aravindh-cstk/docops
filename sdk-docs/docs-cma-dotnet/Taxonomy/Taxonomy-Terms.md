---
title: "Terms"
description: "The Terms() method returns a Term instance scoped to the parent taxonomy. It does not make an API call. The SDK constructs the resourcePath based on scope: Collection scope: /taxonomies/{taxonomy_uid}/terms Single-term scope: /taxonomies/{taxonomy_uid}/terms/{term_uid} Use this method to navigate to term-level APIs within a taxonomy. Note: The Terms() method acts as a navigation layer and does not execute an API request. It returns a Term instance scoped to the parent taxonomy, which is used to perform term-level operations such as Create() , Fetch() , Move() , Delete() , and Descendants() . Validation Calling Terms() on stack.Taxonomy(\"TAXONOMYUID\") with an empty taxonomy UID throws InvalidOperationException before any HTTP request. Pass null or omit termUid to use collection scope. Terms() does not throw in this case. Pass a non-empty termUid only when you need single-term scope. Methods that require a term UID (for example Descendants ) throw InvalidOperationException if called on a collection-scoped instance. The SDK does not validate whether termUid exists. Invalid or unknown UIDs produce ContentstackErrorException only when a terminal API call is executed. Passing an empty string for termUid behaves like null (collection scope) for path construction. Methods requiring a term UID still fail client-side. Behavior Each terminal method you call on the returned Term maps to one HTTP request. The SDK does not fetch data automatically; use Query().Find() / FindAsync() for listing and handle pagination explicitly if supported."
url: "https://www.contentstack.com/taxonomy-terms"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Terms

The `Terms()` method returns a `Term` instance scoped to the parent taxonomy. It does not make an API call.

The SDK constructs the `resourcePath` based on scope:

- **Collection scope:** `/taxonomies/{taxonomy_uid}/terms`
- **Single-term scope:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

Use this method to navigate to term-level APIs within a taxonomy.

**Note:** The `Terms()` method acts as a navigation layer and does not execute an API request. It returns a `Term` instance scoped to the parent taxonomy, which is used to perform term-level operations such as `Create()`, `Fetch()`, `Move()`, `Delete()`, and `Descendants()`.
**Validation**

- Calling `Terms()` on `stack.Taxonomy("TAXONOMYUID")` with an empty taxonomy UID throws `InvalidOperationException` before any HTTP request.
- Pass `null` or omit `termUid` to use collection scope. `Terms()` does not throw in this case.
- Pass a non-empty `termUid` only when you need single-term scope. Methods that require a term UID (for example `Descendants`) throw `InvalidOperationException` if called on a collection-scoped instance.
- The SDK does not validate whether `termUid` exists. Invalid or unknown UIDs produce `ContentstackErrorException` only when a terminal API call is executed.
- Passing an empty string for `termUid` behaves like `null` (collection scope) for path construction. Methods requiring a term UID still fail client-side.

**Behavior**

- Each terminal method you call on the returned `Term` maps to one HTTP request.
- The SDK does not fetch data automatically; use `Query().Find()` / `FindAsync()` for listing and handle pagination explicitly if supported.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | No | null | Defines the term UID for `Terms(termUid)` . Provide a value to target a specific term, or use `null` to operate on a collection. |

Returns:
Type
The Term API instance scoped to the taxonomy.

The following example shows how to obtain a general term collection scope versus a single specific term scope.

```
using System;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

// Initialize the Contentstack client with the authentication token
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

// Target the specific stack using its API key
Stack stack = client.Stack("<API_KEY>");

// Collection Context (returns a Terms instance for creation or multi-item queries)
Term termsCollection = stack.Taxonomy("<TAXONOMY_UID>").Terms();

// Single Term Context (returns a specific Term instance for fetch, update, delete)
Term singleTerm = stack.Taxonomy("<TAXONOMY_UID>").Terms("<TERM_UID>");
```
