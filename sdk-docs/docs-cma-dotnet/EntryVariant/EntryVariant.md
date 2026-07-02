---
title: "EntryVariant"
description: "The EntryVariant class represents content variations for a specific entry. Use it to retrieve, create, update, delete, publish, or unpublish variants assigned to an entry within a content type. Access variant operations by chaining ContentType(uid).Entry(uid).Variant() on a Stack instance. Variant Instance State The behavior of each method depends on whether a variant UID is passed to .Variant() : Call .Variant() without a UID to operate on the collection of variants ( Find , FindAsync ). Call .Variant(uid) to operate on a specific variant ( Fetch , Create , Update , Delete , Publish , and Unpublish ). Optionally pass a branch as the second argument: .Variant(uid, branch) . IMPORTANT: The parameters passed to .Variant(string variantHeader, string branch) are positional. The SDK does not validate whether the values are supplied in the correct order. If the arguments are reversed, the SDK treats the first value as the variant identifier and the second value as the branch name. No SDK validation error is thrown, which can result in an unexpected API error that does not clearly indicate the root cause. Always pass the variant UID (or alias) as the first argument and the branch name as the second argument. Branch Scoping All methods support branch scoping through the optional branch parameter passed to .Variant(uid, branch) . When provided, the SDK sends the request against the specified branch."
url: "https://www.contentstack.com/dotnet-management-entryvariant"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# EntryVariant

## EntryVariant

The `EntryVariant` class represents content variations for a specific entry. Use it to retrieve, create, update, delete, publish, or unpublish variants assigned to an entry within a content type.

Access variant operations by chaining `ContentType(uid).Entry(uid).Variant()` on a `Stack` instance.

**Variant Instance State**

The behavior of each method depends on whether a variant UID is passed to `.Variant()`:

- Call `.Variant()` without a UID to operate on the collection of variants (`Find`, `FindAsync`).
- Call `.Variant(uid)` to operate on a specific variant (`Fetch`, `Create`, `Update`, `Delete`, `Publish`, and `Unpublish`).
- Optionally pass a branch as the second argument: `.Variant(uid, branch)`.

**IMPORTANT:** The parameters passed to `.Variant(string variantHeader, string branch)` are positional. The SDK does not validate whether the values are supplied in the correct order.

If the arguments are reversed, the SDK treats the first value as the variant identifier and the second value as the branch name. No SDK validation error is thrown, which can result in an unexpected API error that does not clearly indicate the root cause.

Always pass the variant UID (or alias) as the first argument and the branch name as the second argument.

**Branch Scoping**

All methods support branch scoping through the optional `branch` parameter passed to `.Variant(uid, branch)`. When provided, the SDK sends the request against the specified branch.
