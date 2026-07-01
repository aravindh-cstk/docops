---
title: "Delete"
description: "Deletes the preview token associated with the specified delivery token."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/previewtoken-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-24"
---

### Delete

Deletes the preview token associated with the specified delivery token.

This method does not require a separate preview token UID. It deletes the preview token associated with the `deliveryTokenUid` passed to the class constructor.

> **Warning:** This operation is irreversible. Deleted preview tokens cannot be recovered. Verify the delivery token UID before calling this method.

#### Returns

| Type | Description |
|---|---|
| ContentstackResponse | The deletion result. |

#### Parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Optional query parameters appended to the request. See Class-Level Notes. |

#### Validation

Throws `InvalidOperationException` with message "You are not logged in. Log in and try again." if the client has no active auth session.

For authentication and rate-limit errors (401, 403, 429), see Class-Level Notes.

| HTTP Status | Cause | Fix |
|---|---|---|
| 404 | The `deliveryTokenUid` does not exist or has no associated preview token. | Verify the delivery token UID before calling `Delete()`. |

#### Behavior

Sends a single HTTP DELETE request to the Management API. This operation is irreversible and cannot be undone via the SDK.

#### Implementation & Examples

**Basic usage — delete the preview token for a delivery token**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

// Initialize the client
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

try
{
    // Delete the preview token scoped to the specified delivery token
    ContentstackResponse contentstackResponse = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Delete();
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**All parameters — with a ParameterCollection**

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
    ContentstackResponse contentstackResponse = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Delete(collection);
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**Error handling — catching a 404 when the preview token does not exist**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

try
{
    // Ensure deliveryTokenUid is correct before calling Delete
    ContentstackResponse contentstackResponse = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Delete();
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
