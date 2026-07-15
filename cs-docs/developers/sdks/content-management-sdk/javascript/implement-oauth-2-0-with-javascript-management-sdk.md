---
title: "[JavaScript Management] - Implement OAuth 2.0 with JavaScript Management SDK"
description: Implement OAuth 2.0 with the JavaScript Management SDK to enable secure, token-based access to Contentstack APIs, including token acquisition, refresh, storage, and logout.
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/javascript/implement-oauth-2-0-with-javascript-management-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - javascript-developers
  - integrators
version: "@contentstack/management >= 1.20.0"
last_updated: 2026-03-25
---

# [JavaScript Management] - Implement OAuth 2.0 with JavaScript Management SDK

This page explains how to use OAuth 2.0 with the Contentstack JavaScript Management SDK to authenticate users and make secure, token-based API requests. It is intended for developers building web apps, CLI tools, or other integrations that need OAuth-based access to Contentstack APIs, including token refresh and logout handling.

## Implement OAuth 2.0 with JavaScript Management SDK

The JavaScript Management SDK supports OAuth 2.0, enabling secure, token-based access to Contentstack APIs. It handles token acquisition, refresh, and storage automatically, simplifying the authentication flow.

You can use this integration across web applications, CLI tools, and other platforms to enable seamless authentication.

**Note:** OAuth support requires `@contentstack/management` **version 1.20.0** or later and a registered OAuth app with Contentstack.

## Prerequisites
- Install `@contentstack/management` **version 1.20.0** or later
- Register an OAuth application. If none is registered, the SDK defaults to the Contentstack CLI App.
- Ensure you have the following credentials:`client_id`
- `client_secret` (optional)
- `app_id`
- `redirect_uri`

## OAuth 2.0 Flow
The SDK guides you through the full OAuth 2.0 flow in a streamlined way. Here’s how it works, step-by-step:
- **User Authorization:** The SDK redirects you to Contentstack’s Authorization Server to login and grant access to the app.
- **Access Granted:** After granting permission, you are redirected to your app’s `redirect_uri` with an authorization code.
- **Exchange Authorization Code for Tokens: **The SDK takes this authorization code and exchanges it for two things:An **access token** to make authenticated API requests.
- A **refresh token** to get a new access token when the current one expires.
- **Store Tokens: **The SDK stores these tokens internally for API calls in future without the user having to log in again.
- **Make Authenticated API Requests: **The SDK attaches the access token to the API requests, allowing your app to securely interact with Contentstack’s APIs on the user’s behalf.
- **Automatically Refresh Tokens:** When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.
- **Log Out and Clear Tokens: **Once you are done with your session and log out, the SDK clears all the stored tokens and optionally revokes the access.

## Using OAuth in JavaScript Management SDK

### Initialize the OAuth Handler
During initialization, configure OAuth with the required credentials.

```
import * as contentstack from '@contentstack/management'
const contentstackClient = contentstack.client()
const oauthHandler = contentstackClient.oauth({appId: 'your-app-id', clientId: 'your-client-id',redirectUri: 'Redirect-Uri'})

```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| appId | Required | Your registered App ID |
| clientId | Required | Your OAuth Client ID |
| redirectUri | Required | The URL where the user is redirected after login and consent |
| responseType | Optional | Set to code by default. You can customize it based on your OAuth settings. |
| clientSecret | Optional | Required for standard OAuth flows (skip if using PKCE) |
| scope | Optional | Permissions requested, such as read-only or full access, depending on your app’s requirements |

### Start the Authorization Flow
The `authorize()` method redirects the user to Contentstack’s OAuth server to login and authorize your app. To log in, use the code below:

```
oauthHandler.authorize();

```

### Handle Redirect and Exchange Token
After authorization, the server redirects the user back to your redirect_uri with an authorization code. Handle this redirect in your app using the `handleRedirect()` method.

```
// Assuming the redirect URL has query parameters like ?code=authorization_code
oauthHandler.handleRedirect(window.location.href);

```

The `handleRedirect()` method automatically processes the authorization code and retrieves access and refresh tokens.

### Token Access and Storage
The SDK securely stores tokens in memory. To access them manually, use the following code:

```
const accessToken = oauthHandler.getAccessToken();
const refreshToken = oauthHandler.getRefreshToken();

```

You can store the tokens in `sessionStorage`, `localStorage`, or `cookies`, depending on your use case.

### Make Authenticated API Requests
Once the tokens are obtained, use the access token to make authenticated API requests. The SDK automatically appends the token to the `Authorization` header as a Bearer token for all outgoing requests.

```
try {
const user = await contentstackClient.getUser();
console.log(user);
} catch (error) {
console.error('Failed to fetch user:', error);
}
```

### Refresh Access Token
If your access token expires, the SDK uses the refresh token to request a new one.

```
oauthHandler.refreshAccessToken()
  .then(newAccessToken => {
    console.log('New Access Token:', newAccessToken);
  })
  .catch(error => {
    console.error('Failed to refresh access token:', error);
  });

```

This ensures that your application continues to make authenticated requests without requiring the user to log in again.

### Logout and Revoke Access
The `logout()` method logs out the user and revokes authorization:

```
oauthHandler.logout();

```

This clears all your saved tokens and authorizations associated with the session.

## Token Storage
After authentication, tokens are managed in memory. However, if needed, you can store them using the following methods:

### Web Applications
Choose a storage strategy based on session duration and security:
- **Session Storage: **Temporary storage that lasts only till the browser session. Ideally used for short-lived sessions for increased security.
```
sessionStorage.setItem('access_token', oauthHandler.getAccessToken());

```
- **Local Storage: **Stores tokens persistently across sessions but is more vulnerable to XSS. Use it carefully.
```
localStorage.setItem('access_token', oauthHandler.getAccessToken());
```
- **Cookies: **Tokens are sent automatically with HTTP requests. Use secure attributes to enhance protection.
```
document.cookie = `access_token=${oauthHandler.getAccessToken()}; path=/; Secure; HttpOnly`;

```

### CLI Applications
Choose a storage strategy based on session duration and security:.
- **In-memory Storage:** Stores tokens in the application’s memory during runtime. Best for short scripts or one-time tasks.
- **File-based Storage:** Allows tokens to persist between runs. Store them in encrypted files with restricted access.

For sample implementation, refer to the code on [GitHub](https://github.com/contentstack/cli/blob/development/packages/contentstack-utilities/src/auth-handler.ts).

## Common questions

### What version of `@contentstack/management` is required for OAuth support?
OAuth support requires `@contentstack/management` **version 1.20.0** or later.

### What happens if I don’t register an OAuth application?
Register an OAuth application. If none is registered, the SDK defaults to the Contentstack CLI App.

### Does the SDK refresh access tokens automatically?
**Automatically Refresh Tokens:** When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.

### Where can I find a sample implementation?
For sample implementation, refer to the code on [GitHub](https://github.com/contentstack/cli/blob/development/packages/contentstack-utilities/src/auth-handler.ts).

<!-- filename: javascript-management-implement-oauth-2-0-with-javascript-management-sdk.md -->