---
title: "PreviewToken"
description: "The PreviewToken class creates and deletes preview tokens scoped to a specific delivery token."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/previewtoken"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-24"
---

## PreviewToken

**One-line summary:** The `PreviewToken` class creates and deletes preview tokens scoped to a specific delivery token.

**When to Use This Class:** Use this class when you need to programmatically create or revoke preview tokens for a specific delivery token without navigating the Contentstack UI.

**Conceptual Role:** Acts as a scoped token manager for a single delivery token. Call `client.Stack(apiKey).PreviewToken(deliveryTokenUid)` to target it and enable Create, CreateAsync, Delete, and DeleteAsync.

**Warning:** `deliveryTokenUid` is a positional string parameter. The SDK does not validate it client-side. Passing an incorrect or empty value causes a runtime API error (typically 422 or 404) with no indication that the constructor argument is the source. Always verify the delivery token UID before calling any method on this class.

### Class-Level Notes

**Endpoint Compatibility:** All methods in this class target the `rest-preview.contentstack.com` endpoint exclusively. They are not compatible with the standard `cdn.contentstack.io` delivery endpoint. Ensure your `ContentstackClient` is initialized with the preview endpoint when using this class.

**Authentication:** All methods require a valid auth token passed to `ContentstackClient`. For 401 (missing or invalid auth token) and 403 (insufficient permissions) errors, see [Management API Errors](https://www.contentstack.com/docs/developers/apis/content-management-api#errors).

**Rate Limiting & Retry:** This SDK automatically retries requests that return 429 (Too Many Requests) and 5xx errors. By default, `RetryLimit` is 5 attempts and `RetryDelay` is 300 ms, with the delay increasing between each retry attempt. See [Retry Mechanism](https://www.contentstack.com/docs/developers/sdks/content-management-sdk/dot-net/retry-mechanism) to configure retry limits and delay.

**Query Parameters:** All methods accept an optional `collection` parameter of type `ParameterCollection`, used to append query parameters to the request. The default value is `null`.

**Async Methods:** Always use `await` at the call site. If an async method is not awaited directly, exceptions are thrown as `AggregateException` instead of surfacing directly.

### Method Index

| Method Name | Returns | Description |
|---|---|---|
| Create | ContentstackResponse | Creates a preview token. |
| CreateAsync | Task\<ContentstackResponse\> | Creates a preview token asynchronously. |
| Delete | ContentstackResponse | Deletes a preview token. |
| DeleteAsync | Task\<ContentstackResponse\> | Deletes a preview token asynchronously. |

### Create a Preview Token

Creates a preview token for a delivery token and handles errors. Demonstrates the complete setup-to-response workflow.

```csharp
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Token;

// Initialize the client with your auth token
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");

// Build the model describing the preview token
PreviewTokenModel model = new PreviewTokenModel()
{
    Name = "Sample Preview Token",
    Description = "This is a sample preview token."
};

try
{
    // Create the preview token scoped to a specific delivery token
    ContentstackResponse response = client
        .Stack("<API_KEY>")
        .PreviewToken("<DELIVERY_TOKEN_UID>")
        .Create(model);
}
catch (Exception ex)
{
    // A 404 or 422 error usually indicates an invalid or missing deliveryTokenUid.
    Console.WriteLine($"Error creating preview token: {ex.Message}");
}
```

---

## PreviewTokenModel Class

Represents the request payload used to create a preview token.

| Property | Type | Access | Default | Description |
|---|---|---|---|---|
| Name | string? | Read/Write | null | The name of the preview token. |
| Description | string? | Read/Write | null | An optional description for the preview token. |
