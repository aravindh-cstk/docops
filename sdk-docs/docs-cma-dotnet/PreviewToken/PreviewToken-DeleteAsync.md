---
title: "DeleteAsync"
description: "Asynchronously deletes the preview token associated with the specified delivery token."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/previewtoken-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-24"
---

### DeleteAsync

Asynchronously deletes the preview token associated with the specified delivery token.

This method does not require a separate preview token UID. It deletes the preview token associated with the `deliveryTokenUid` passed to the class constructor.

> **Warning:** This operation is irreversible. Deleted preview tokens cannot be recovered. Verify the delivery token UID before calling this method.

#### Returns

| Type | Description |
|---|---|
| Task\<ContentstackResponse\> | The deletion result, resolved asynchronously. |

#### Parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Optional query parameters appended to the request. See Class-Level Notes. |

#### Validation

Throws `InvalidOperationException` with message "You are not logged in. Sign in and try again." if the client has no active auth session.

For authentication and rate-limit errors (401, 403, 429), see Class-Level Notes.

| HTTP Status | Cause | Fix |
|---|---|---|
| 404 | The `deliveryTokenUid` does not exist or has no associated preview token. | Verify the delivery token UID before calling `DeleteAsync()`. |

#### Behavior

Executes the HTTP DELETE asynchronously and does not block the calling thread. This operation is irreversible and cannot be undone via the SDK. For await and exception behavior, see Class-Level Notes, Async Methods.

#### Implementation & Examples

**Basic usage - asynchronously delete the preview token for a delivery token**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

// Initialize the client
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

try
{
    // Await the async delete call
    ContentstackResponse contentstackResponse = await client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .DeleteAsync();
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**All parameters - async with a ParameterCollection**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;
using Contentstack.Management.Core.Queryable;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

ParameterCollection collection = new ParameterCollection();
collection.Add("include_branch", true);

try
{
    ContentstackResponse contentstackResponse = await client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .DeleteAsync(collection);
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**Error handling - catching async exceptions on a missing preview token**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

try
{
    // Always await directly to surface exceptions correctly
    ContentstackResponse contentstackResponse = await client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .DeleteAsync();
}
catch (ContentstackErrorException ex)
{
    // A 404 indicates the delivery token UID does not exist or has no associated preview token
    Console.WriteLine($"API error {ex.StatusCode}: {ex.ErrorMessage}");
}
catch (InvalidOperationException ex)
{
    // Authentication failure
    Console.WriteLine($"State error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
}
```
