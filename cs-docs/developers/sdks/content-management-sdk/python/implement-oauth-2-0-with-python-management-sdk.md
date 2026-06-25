---
title: "[Python Management] - Implement OAuth 2.0 with Python Management SDK"
description: Use OAuth 2.0 with the Python Management SDK to authenticate applications with Contentstack’s Content Management API (CMA), including token acquisition, refresh, storage, and logout.
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/python/implement-oauth-2-0-with-python-management-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - python-developers
version: v1.7.0+
last_updated: 2026-03-25
---

# [Python Management] - Implement OAuth 2.0 with Python Management SDK

This page explains how to use OAuth 2.0 with the Contentstack Python Management SDK to authenticate against the Content Management API, including how to initialize OAuth, authorize users, exchange codes for tokens, refresh tokens, store tokens, and log out. It is intended for developers building server-side apps, CLI tools, or other Python environments that need scoped, authorized access to Contentstack.

## Implement OAuth 2.0 with Python Management SDK

Use OAuth 2.0 with the [Python Management SDK](./about-python-management-sdk.md) to authenticate applications with [Contentstack’s Content Management API](../../../../../api-docs/api-detail/content-management-api.md) (CMA). The SDK helps you obtain and refresh tokens, store them securely, and make authorized API requests.

Apply this flow in server-side applications, CLI tools, and other Python environments to control access with scoped permissions.

## Prerequisites

- Install [`contentstack-management`](https://pypi.org/project/contentstack-management/) **v1.7.0** or **later**.
- [Register an OAuth application.](../../../developer-hub/contentstack-oauth.md) If none is registered, the SDK defaults to the Contentstack CLI App.
- Ensure you have the following credentials:`client_id`
- `client_secret` (optional)
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

## Using OAuth in Python Management SDK

The following steps show the OAuth 2.0 flow in the Python Management SDK, from initialization to logout.

- ### Initialize the OAuth Handler

Initialize the Python Management SDK with your OAuth credentials to set up authentication. This configuration prepares the client to generate authorization URLs and manage tokens during the OAuth flow.

```
import contentstack_management
client = contentstack_management.Client()
oauth_handler = client.oauth(
    app_id=oauth_config['app_id'],
    client_id=oauth_config['client_id'],
    redirect_uri=oauth_config['redirect_uri'],
    client_secret=oauth_config['client_secret'] #Optional
)
```

**Parameters:**

The following parameters are required to initialize OAuth 2.0 with the SDK:

| Parameter | Required | Description |
|---|---|---|
| `appId` | Yes | The App ID registered with Contentstack. |
| `clientId` | Yes | The OAuth client ID associated with your app. |
| `redirectUri` | Yes | The URL to redirect users after login and consent. |
| `responseType` | No | Defaults to `code`. You can override this based on your OAuth settings. |
| `clientSecret` | No | Required for standard OAuth flows. Skip this if you're using PKCE. |
| `scope` | No | Defines the requested permissions (e.g., read-only or full access) based on your app’s requirements. |

- ### Start the Authorization Flow

Call `authorize()` to start the OAuth flow and redirect the user to Contentstack’s OAuth server:

```
oauth_handler.authorize()
```

- ### Handle Redirect and Exchange Token

After authorization, the server redirects the user back to your `redirect_uri` with an authorization code. Handle this redirect in your app using the `handleRedirect()` method.

```
# Assuming the redirect URL has query parameters like ?code=authorization_code
oauth_handler.handle_redirect(callback_url)
```

The `handleRedirect()` method automatically processes the authorization code and retrieves access and refresh tokens.

- ### Token Access and Storage

The SDK securely stores tokens in memory. To access them manually, use the following code:

```
accessToken = oauthHandler.get_access_token();
refreshToken = oauthHandler.refresh_access_token();
```

You can store tokens in different ways, depending on the use case:

`sessionStorage`: For short-lived browser sessions.
- `localStorage`: To maintain login sessions across visits.
- `cookies`: To automatically send tokens with HTTP requests.

- ### Make Authenticated API Requests

Once the tokens are obtained, use the access token to make authenticated API requests. The SDK automatically appends the token to the `Authorization` header as a Bearer token for all outgoing requests.

```
response = client.stack(stack_api_key).content_types(content_type_uid).entry().find()
print(response)
```

- ### Refresh Access Token

When the token expires, the SDK uses the refresh token to request a new one.

```
oauth_handler.refresh_access_token()
```

This ensures that your application continues to make authenticated requests without requiring the user to log in again.

- ### Logout and Revoke Access

The `logout()` method logs out the user and revokes authorization:

```
oauth_handler.logout();
```

This clears all your saved tokens and authorizations associated with the session.

## Token Storage

After authentication, tokens are managed in memory. However, if needed, you can store them using the following methods:

### Web Applications

Choose a storage strategy based on session duration and security:

- **Session Storage:** Tokens remain available only during runtime for increased security. This option works for short-lived scripts or temporary sessions.

```
session['access_token'] = oauth_handler.get_access_token()
session['refresh_token'] = oauth_handler.get_refresh_token()
```

- **Environment Variables:** Tokens are available to all processes. Use secure attributes to enhance protection.

```
os.environ['CONTENTSTACK_ACCESS_TOKEN'] = oauth_handler.get_access_token()
os.environ['CONTENTSTACK_REFRESH_TOKEN'] = oauth_handler.get_refresh_token()
```

### CLI Applications

Choose a storage strategy based on session duration and security:

- **In-memory Storage:** Stores tokens in the application’s memory during runtime. Best for short scripts or one-time tasks.
- **File-based Storage:** Allows tokens to persist between runs. Store them in encrypted files with restricted access.

## Common questions

### What version of `contentstack-management` is required for OAuth 2.0 support?
Install [`contentstack-management`](https://pypi.org/project/contentstack-management/) **v1.7.0** or **later**.

### What happens if I don’t register an OAuth application?
If none is registered, the SDK defaults to the Contentstack CLI App.

### How does the SDK handle access token expiration?
When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.

### How do I revoke authorization and clear tokens?
Use the `logout()` method: `oauth_handler.logout();`