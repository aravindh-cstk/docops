---
title: "CreateAsync"
description: "Asynchronously creates a preview token for the specified delivery token in the stack."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/previewtoken-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

### CreateAsync

Asynchronously creates a preview token for the specified delivery token in the stack.

#### Returns

| Type | Description |
|---|---|
| Task\<ContentstackResponse\> | The created preview token, resolved asynchronously. |

#### Parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | PreviewTokenModel | Yes | - | The request payload containing preview token details. |
| collection | ParameterCollection | No | null | Optional query parameters appended to the request. See Class-Level Notes. |

#### Validation

Throws `InvalidOperationException` with message:

- "You are not logged in. Sign in and try again." if the client has no active auth session.
- "Operation not allowed on this model. Update your request and try again." if the `PreviewToken` object already has a UID assigned. `CreateAsync()` only supports creating new preview tokens.

For authentication and rate-limit errors (401, 403, 429), see Class-Level Notes.

| HTTP Status | Cause | Fix |
|---|---|---|
| 404 | The `deliveryTokenUid` passed to the constructor does not exist in this stack. | Verify the delivery token UID in the Contentstack UI before calling. |
| 422 | The request payload is invalid, malformed, or missing required fields. | Ensure `PreviewTokenModel` has all required fields set before calling `CreateAsync()`. |

#### Behavior

Executes the HTTP POST asynchronously and does not block the calling thread. Retry behavior applies. See Class-Level Notes, Rate Limiting & Retry. For await and exception behavior, see Class-Level Notes, Async Methods.

#### Implementation & Examples

**Basic usage - asynchronously create a preview token**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

// Initialize the client
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

// Build the preview token model
PreviewTokenModel model = new PreviewTokenModel()
{
    Name = "Sample Preview Token",
    Description = "This is a sample preview token."
};

try
{
    // Await the async create call
    ContentstackResponse contentstackResponse = await client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .CreateAsync(model);
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

PreviewTokenModel model = new PreviewTokenModel()
{
    Name = "Sample Preview Token",
    Description = "This is a sample preview token."
};

ParameterCollection collection = new ParameterCollection();
collection.Add("include_branch", true);

try
{
    ContentstackResponse contentstackResponse = await client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .CreateAsync(model, collection);
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**Error handling - catching async exceptions**

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

PreviewTokenModel model = new PreviewTokenModel()
{
    Name = "Sample Preview Token",
    Description = "This is a sample preview token."
};

try
{
    // Always await directly to surface exceptions correctly
    ContentstackResponse contentstackResponse = await client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .CreateAsync(model);
}
catch (ContentstackErrorException ex)
{
    // A 422 or 404 often means the deliveryTokenUid is incorrect
    Console.WriteLine($"API error {ex.StatusCode}: {ex.ErrorMessage}");
}
catch (InvalidOperationException ex)
{
    // Authentication failure or invalid object state
    Console.WriteLine($"State error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
}
```
