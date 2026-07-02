---
title: "Create"
description: "Creates a preview token for the specified delivery token in the stack."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/previewtoken-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

### Create

Creates a preview token for the specified delivery token in the stack.

#### Returns

| Type | Description |
|---|---|
| ContentstackResponse | The created preview token. |

#### Parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | PreviewTokenModel | Yes | - | The request payload containing preview token details. |
| collection | ParameterCollection | No | null | Optional query parameters appended to the request. See Class-Level Notes. |

#### Validation

Throws `InvalidOperationException` with message "Operation not allowed on this model. Update your request and try again." if the `PreviewToken` object already has a UID assigned. `Create()` only supports creating new preview tokens.

For authentication and rate-limit errors (401, 403, 429), see Class-Level Notes.

| HTTP Status | Cause | Fix |
|---|---|---|
| 404 | The `deliveryTokenUid` passed to the constructor does not exist in this stack. | Verify the delivery token UID in the Contentstack UI before calling. |
| 422 | The request payload is invalid, malformed, or missing required fields. | Ensure `PreviewTokenModel` has all required fields set before calling `Create()`. |

#### Behavior

Sends a single HTTP POST request to the Management API and returns the created preview token in the response. Retry behavior applies. See Class-Level Notes, Rate Limiting & Retry.

#### Implementation & Examples

**Basic usage - create a preview token for a delivery token**

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
    // Create the preview token for the specified delivery token
    ContentstackResponse contentstackResponse = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Create(model);
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**All parameters - with a ParameterCollection**

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
    ContentstackResponse contentstackResponse = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Create(model, collection);
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

**Error handling - catching a failed token creation**

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
    ContentstackResponse contentstackResponse = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Create(model);
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
