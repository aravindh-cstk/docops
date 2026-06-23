---
title: "[.NET Management] - Implement OAuth 2.0 with .NET Management SDK"
description: Use OAuth 2.0 with the .NET Management SDK to authenticate with Contentstack’s Content Management API (CMA), including token handling, refresh, and storage.
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/dot-net/implement-oauth-2-0-with-dot-net-management-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - dotnet
  - sdk-users
version: v0.4.0+
last_updated: 2026-03-25
---

# [.NET Management] - Implement OAuth 2.0 with .NET Management SDK

This page explains how to implement OAuth 2.0 authentication using the .NET Management SDK for Contentstack’s Content Management API (CMA). It is intended for developers building web apps, CLI tools, or other .NET applications that need secure authentication, token refresh, and token storage patterns.

## Implement OAuth 2.0 with .NET Management SDK

Use OAuth 2.0 with the .NET Management SDK to securely authenticate your app with [Contentstack’s Content Management API](../../../../../api-docs/api-detail/content-management-api.md) (CMA). The SDK stores tokens securely and refreshes access tokens automatically.

Apply this flow across web applications, CLI tools, and other .NET environments to streamline authentication and enable role-based access control.

## Prerequisites
- Install `contentstack.management.csharp` **v0.4.0** or **later**.
- [Register an OAuth application.](../../../developer-hub/contentstack-oauth.md) If none is registered, the SDK defaults to the Contentstack CLI App.
- Ensure you have the following credentials:`AppId`
- `ClientId`
- `RedirectUri`
- `ClientSecret` (optional)

## OAuth 2.0 Flow
The SDK simplifies the OAuth 2.0 flow by handling token acquisition, refresh, and storage.
- **User Authorization:** The SDK generates an authorization URL and directs the user to Contentstack’s Authorization Server to log in and grant access to the application.
- **Access Granted:** The Authorization Server redirects the user back to the app’s `redirect_uri` with an authorization code.
- **Exchange Authorization Code for Tokens:**An **access token** for authenticated API requests.
- A **refresh token** to renew the access token when it expires.
- **Store Tokens:** The SDK stores tokens in memory and provides hooks to persist them securely across sessions.
- **Make Authenticated API Requests:** The SDK automatically attaches the access token to outgoing API requests, allowing your app to securely interact with Contentstack APIs.
- **Automatically Refresh Tokens:** When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.
- **Logout and Clear Tokens:** On logout, the SDK clears stored tokens and can optionally revoke access.

## Using OAuth in .NET Management SDK
The following steps show the OAuth 2.0 flow in the .NET Management SDK, from authorization to logout.
- ### Initialize the OAuth Handler
Use the `OAuth()` method to configure your app for OAuth 2.0 authentication. Then, call `AuthorizeAsync()` to generate the authorization URL and begin the login flow.

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

// Initialize client
var client = new ContentstackClient();

// Configure OAuth options
OAuthOptions oauthOptions = new OAuthOptions
{
   AppId = "your-app-id",
   ClientId = "your-client-id",
   RedirectUri = "https://yourapp.com/callback",
   Scope = new[] { "content_management" }
   // Leave ClientSecret unset to enable PKCE flow (recommended for public clients)
};

// Create OAuth handler
IOAuthHandler oauthHandler = client.OAuth(oauthOptions);

// Generate authorization URL
var authUrl = await oauthHandler.AuthorizeAsync();
```

**Parameters:**

The following parameters are required to initialize OAuth 2.0 with the SDK:

| Parameter | Type | Description |
|---|---|---|
| AppId (required) | string | The App ID you registered with Contentstack. |
| ClientId (required) | string | The OAuth client ID associated with your app. |
| RedirectUri (required) | string | The URL to redirect users after they log in and grant access. |
| Scope | string[] | The permissions your app is requesting (e.g., read-only, write). Use scopes based on your app’s needs. |
| ClientSecret | string | Required for standard OAuth flows. Not needed if you're using PKCE. |
| responseType | string | Set to `code` by default. You can override this based on your OAuth configuration. |

- ### Start the Authorization Flow
Use the `AuthorizeAsync()` method to generate the Authorization URL for Contentstack’s OAuth server. This URL includes parameters such as response type, client ID, scope, and the PKCE code challenge (if used). Direct users to this URL so they can log in and authorize your app.

```
string authUrl = await oauthHandler.AuthorizeAsync();
```

- ### Handle Redirect and Exchange Token
Use the `HandleRedirectAsync()` method to capture the authorization code from the redirected URL after the user logs in and approves access. This method should be called when your app receives the redirect to your specified `redirect_uri`.

```
// Example: redirect URL contains ?code=authorization_code
await oauthHandler.HandleRedirectAsync(url);
```

Alternatively, use the `ExchangeCodeForTokenAsync()` method if you already have access to the authorization code from the query parameters.

```
// Example: extract the code from the URL query string (?code=authorization_code)
await oauthHandler.ExchangeCodeForTokenAsync(code);
```

- ### Token Access and Storage
Use the `GetOAuthTokens()` method to access the stored OAuth tokens after a successful authentication. The SDK stores these tokens securely in memory.

```
OAuthTokens tokens = client.GetOAuthTokens(clientId);

// Tokens used for authenticating and refreshing access token
string accessToken = tokens.AccessToken;
string refreshToken = tokens.RefreshToken;

// Additional context about the authenticated session
DateTime expiresAt = tokens.ExpiresAt;
string organizationUid = tokens.OrganizationUid;
string userUid = tokens.UserUid;

// Token status properties
bool isValid = tokens.IsValid;
bool isExpired = tokens.IsExpired;
bool needsRefresh = tokens.NeedsRefresh;
```

- ### Make Authenticated API Requests
Use the access token to authenticate your API requests. The SDK automatically adds the token to the Authorization header as a Bearer token for all outgoing requests.

```
var stack = client.Stack(stackApiKey);
ContentstackResponse contentTypesResponse = await stack.ContentType().Query().FindAsync();
```

- ### Refresh Access Token
Use the `RefreshTokenAsync()` method to get a new access token when the current one expires. The SDK handles this automatically using the refresh token, ensuring uninterrupted authenticated requests without requiring the user to log in again.

```
OAuthTokens refreshedTokens = await oauthHandler.RefreshTokenAsync();
```

- ### Logout and Revoke Access
Use the `LogoutAsync()` method to log out the user and revoke their authorization. This clears stored tokens and ends the current authenticated session.

```
string result = await oauthHandler.LogoutAsync();
```

## Token Storage
After authentication, tokens are managed in memory. You can access them using the `clientId`. However, if needed, you can store them using the following methods:

### Web Applications
In web applications, you can store tokens in session storage or cookies, depending on your security and persistence requirements.
- ### Session Storage (ASP.NET Core)
Use ASP.NET Core session storage to persist OAuth tokens securely between requests. The following example configures session services and stores tokens after a successful authorization flow.

**Note:** Avoid storing access tokens in `localStorage` or `sessionStorage`, as they are vulnerable to cross-site scripting (XSS) attacks. Instead, use secure, HttpOnly cookies configured with the `Secure` and `SameSite=Strict` attributes to protect sensitive tokens. Additionally, implement regular refresh token rotation and expiration to minimize security risks.

```
// Configure session middleware in Program.cs or Startup.cs
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
    options.Cookie.HttpOnly = true; // Secure session cookie
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always; // HTTPS only
    options.Cookie.SameSite = SameSiteMode.Strict; // Mitigate CSRF

});

public async Task OAuthCallback(string code)
{
    try
    {
        // Exchange authorization code for access and refresh tokens
        OAuthTokens tokens = await oauthHandler.ExchangeCodeForTokenAsync(code);

        // Store essential OAuth token values in session for later use
        HttpContext.Session.SetString("access_token", tokens.AccessToken);
        HttpContext.Session.SetString("refresh_token", tokens.RefreshToken ?? string.Empty);
        HttpContext.Session.SetString("organization_uid", tokens.OrganizationUid ?? string.Empty);
        HttpContext.Session.SetString("user_uid", tokens.UserUid ?? string.Empty);
        HttpContext.Session.SetString("client_id", tokens.ClientId);
    }
    catch (Exception ex)
    {
        return View("Error", $"OAuth error: {ex.Message}"); // Show error view if token exchange fails
    }
}
```

- ### Cookie Storage
Use secure HTTP cookies to persist OAuth tokens in ASP.NET Core. The following example sets encrypted, HttpOnly cookies after exchanging the authorization code for tokens.

```
// Exchange authorization code for tokens
OAuthTokens tokens = await oauthHandler.ExchangeCodeForTokenAsync(code);

// Define secure cookie options
var cookieOptions = new CookieOptions
{
    HttpOnly = true,
    Secure = true, // HTTPS only
    SameSite = SameSiteMode.Strict,
    Expires = tokens.ExpiresAt
};

// Store tokens and user context in cookies
Response.Cookies.Append("access_token", tokens.AccessToken, cookieOptions);
Response.Cookies.Append("refresh_token", tokens.RefreshToken ?? string.Empty, cookieOptions);
Response.Cookies.Append("organization_uid", tokens.OrganizationUid ?? string.Empty, cookieOptions);
Response.Cookies.Append("user_uid", tokens.UserUid ?? string.Empty, cookieOptions);
```

### CLI Applications
Choose a token storage strategy based on your session duration and security requirements:
- **In-Memory Storage**Stores tokens in the application’s memory during runtime.
- Ideal for short-lived CLI scripts or one-time tasks where persistence isn't needed.
- **File-Based Storage**Persists tokens across runs by saving them to encrypted files.
- Ensure the file has restricted permissions to prevent unauthorized access.

## Common questions

### Does the SDK refresh access tokens automatically?
Yes. “When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.”

### When should I set `ClientSecret` vs using PKCE?
Set `ClientSecret` for standard OAuth flows. Leave `ClientSecret` unset to enable PKCE flow (recommended for public clients).

### Where are tokens stored by default?
After authentication, tokens are managed in memory, and you can access them using the `clientId`.

### What storage should I use for web apps?
Use session storage or cookies depending on your security and persistence requirements, and prefer secure, HttpOnly cookies with appropriate `Secure` and `SameSite=Strict` settings.