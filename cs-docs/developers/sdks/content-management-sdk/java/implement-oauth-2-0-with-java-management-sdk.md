---
title: "[Java Management] - Implement OAuth 2.0 with Java Management SDK"
description: Use OAuth 2.0 in the Java Management SDK to securely access Contentstack Content Management APIs through token-based authentication.
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/java/implement-oauth-2-0-with-java-management-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - java
version: v1.8.0+
last_updated: 2026-03-25
---

# [Java Management] - Implement OAuth 2.0 with Java Management SDK

This page explains how to use OAuth 2.0 with the Java Management SDK to authenticate against Contentstack Content Management APIs, including authorization, token exchange, token storage, refresh, and logout. It is intended for developers integrating Contentstack into Java applications and should be used when you want token-based authentication managed by the SDK.

## Implement OAuth 2.0 with Java Management SDK

Use OAuth 2.0 in the [Java Management SDK](./about-java-management-sdk.md) to securely access Contentstack [Content Management APIs](../../../../../api-docs/api-detail/content-management-api.md) through token-based authentication. The SDK handles token acquisition, refresh, and management for you, so developers can focus on building features instead of handling authentication.

## Prerequisites

- Install [**contentstack-management-java v1.8.0 or later**](https://central.sonatype.com/artifact/com.contentstack.sdk/cms)
- [Register an OAuth application](../../../developer-hub/contentstack-oauth.md) in Contentstack
- Collect required credentials:`client_id`
- `client_secret` (optional, not needed for PKCE flow)
- `app_id`
- `redirect_uri`

## OAuth 2.0 Flow

The SDK simplifies the OAuth 2.0 flow by handling token acquisition, refresh, and storage.

- **User Authorization:** The SDK generates an authorization URL and directs the user to Contentstack’s Authorization Server to log in and grant access to the application.
- **Access Granted:** The Authorization Server redirects the user back to the app’s `redirect_uri` with an authorization code.
- **Exchange Authorization Code for Tokens:** The SDK exchanges the code for:An **access token** for authenticated API requests.
- A **refresh token** to renew the access token when it expires.
- **Store Tokens:** The SDK stores tokens in memory and provides hooks to persist them securely across sessions.
- **Make Authenticated API Requests:** The SDK automatically attaches the access token to outgoing API requests, allowing your app to securely interact with Contentstack APIs.
- **Automatically Refresh Tokens:** When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.
- **Logout and Clear Tokens:** On logout, the SDK clears stored tokens and can optionally revoke access.

## Using OAuth in Java Management SDK

The following steps show the OAuth 2.0 flow in the Java Management SDK, from authorization to logout.

### Initialize the OAuth Handler

Use the following code to initialize OAuth with the required credentials.

```
Contentstack client = new Contentstack.Builder()
.setHost("api.contentstack.io") // optional, region-specific
.setOAuth(APP_ID, CLIENT_ID,REDIRECT_URI, CLIENT_SECRET) // Standard OAuth
// or use PKCE if client_secret is not available
.build();
```

**Parameters**

| Parameter | Type | Description |
|---|---|---|
| `appId` | Required | Your registered App ID. |
| `clientId` | Required | Your OAuth Client ID. |
| `redirectUri` | Required | The URL where the user is redirected after login and consent. |
| `responseType` | Optional | Set to `code` by default. You can customize it based on your OAuth settings. |
| `clientSecret` | Optional | Required for standard OAuth flows (skip if using PKCE). |
| `scope` | Optional | Permissions requested, such as read-only or full access, depending on your app’s requirements. |

### Start the Authorization Flow

The `getOAuthAuthorizationUrl()` method redirects the user to Contentstack’s OAuth server to login and authorize your app. To log in, use the code below:

```
String authUrl = client.getOAuthAuthorizationUrl();
// Example: open in browser
Desktop.getDesktop().browse(new URI(authUrl));
// Example: load in WebView
webView.loadUrl(authUrl);
```

### Handle Redirect and Exchange Token

After authorization, the server redirects the user back to your `redirect_uri` with an authorization code. Handle this redirect in your app using the `exchangeOAuthCode(code)` method.

```
// Example: Android WebView
webView.setWebViewClient(new WebViewClient() {
  @Override
  public boolean shouldOverrideUrlLoading(WebView view, String url) {
    if (url.startsWith(REDIRECT_URI)) {
      Uri uri = Uri.parse(url);
      String code = uri.getQueryParameter("code");
      if (code != null) {
        client.exchangeOAuthCode(code)
          .thenAccept(tokens -> {
            // Success - SDK will use tokens automatically
          })
          .exceptionally(error -> {
            // Add error-handling logic here
            return null;
          });
      }
      return true;
    }
    return false;
  }
});
```

The `exchangeOAuthCode(code)` method returns a `CompletableFuture` with access and refresh tokens.

### Token Storage

Use the `TokenCallback` interface to implement custom logic for securely storing and clearing tokens in memory.

```
public class TokenStorageHandler implements TokenCallback {
  @Override
  public void onTokensUpdated(OAuthTokens tokens) {
    // TODO: Implement your storage logic
    // Examples:
    // - Save to SharedPreferences (Android)
    // - Save to encrypted file (Desktop)
    // - Save to secure database (Server)
  }

  @Override
  public void onTokensCleared() {
    // TODO: Implement your clear logic
    // Remove tokens from your storage
  }
}

// Add the handler to your OAuth handler
Contentstack client = new Contentstack.Builder()
  .setTokenCallback(new TokenStorageHandler())
  .setOAuth(APP_ID, CLIENT_ID, REDIRECT_URI, CLIENT_SECRET)
  .build();
```

### Make Authenticated API Requests

To make authenticated API requests, use the following code snippet. The SDK automatically adds the access token to the Authorization header as a Bearer token for all outgoing requests.

```
Stack stack = client.stack("stack_api_key");
Response entryResult =
  stack.contentType("contentType_uid").entry("entry_uid").fetch().execute();
```

### Refresh Access Token

To refresh the access token when it expires, use the following code snippet. The SDK uses the refresh token to automatically request a new one.

```
client.refreshOAuthToken()
  .thenAccept(newTokens -> {
    // Tokens refreshed - SDK will use them automatically
  })
  .exceptionally(error -> {
    // Add logic to handle token refresh errors
    return null;
  });
```

This ensures that your application continues to make authenticated requests without requiring the user to log in again.

### Logout and Revoke Access

Use the `logout()` method to log out the user and revoke authorization:

```
// logout (clear tokens)
client.oauthLogout()
  .thenRun(() -> {
    // Logged out successfully
  });

// Logout and revoke authorization
client.oauthLogout(true) // true = revoke authorization
  .thenRun(() -> {
    // Logged out and revoked
  });
```

**Reference**

| Methods | Description |
|---|---|
| `getOAuthAuthorizationUrl()` | Get authorization URL for user login. |
| `exchangeOAuthCode`(code) | Exchange authorization code for tokens. |
| `refreshOAuthToken()` | Manually refresh the access token. |
| `setTokenCallback(callback)` | Set handler for token storage events. |
| `oauthLogout()` | Logout and clear tokens. |
| `oauthLogout(true)` | Logout and revoke authorization. |

## Token Storage

After authentication, tokens are managed in memory. However, if needed, you can store them using the following methods:

### Web Applications

Choose a storage strategy based on session duration and security:

- **Session Storage:** Temporary storage that lasts only till the browser session. Ideally used for short-lived sessions for increased security.

```
sessionStorage.setItem('access_token', oauthHandler.getAccessToken());
```

- **Local Storage:** Stores tokens persistently across sessions but is more vulnerable to XSS. Use it carefully.

```
localStorage.setItem('access_token', oauthHandler.getAccessToken());
```

- **Cookies:** Tokens are sent automatically with HTTP requests. Use secure attributes to enhance protection.

```
document.cookie = `access_token=${oauthHandler.getAccessToken()}; path=/; Secure; HttpOnly`;
```

### Mobile and Server Applications

- **Android Applications**Choose based on your security requirements:

**EncryptedSharedPreferences**Android's recommended secure storage
- Handles encryption automatically
- Best for most Android applications

- **Android Keystore**Hardware-backed security when available
- Highest level of security
- Suitable for storing sensitive credentials

- **Desktop/Server Applications**Choose based on your application's needs:

**In-memory Storage**Tokens exist only during runtime
- Cleared when application exits
- Best for short-running applications

- **Encrypted File Storage**Persistent storage between sessions
- Must implement proper encryption
- Suitable for long-running applications

## Common questions

### Does the SDK automatically attach the access token to API requests?
Yes. “The SDK automatically adds the access token to the Authorization header as a Bearer token for all outgoing requests.”

### How do I persist tokens across sessions?
Use the `TokenCallback` interface to implement custom logic for securely storing and clearing tokens, and persist them in your preferred storage (for example, encrypted storage on mobile/desktop/server).

### What should I do if I don’t have a `client_secret`?
Use PKCE: “or use PKCE if client_secret is not available”.

### How do I revoke authorization on logout?
Call `client.oauthLogout(true) // true = revoke authorization`.