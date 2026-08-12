---
title: "Implement OAuth 2.0 with Python Management SDK"
description: "Build secure Python apps with Contentstack CMA using OAuth 2.0. Simplify authentication with token refresh, session/env storage, and scoped access."
url: /developers/sdks/content-management-sdk/python/implement-oauth-2-0-with-python-management-sdk
---

# Implement OAuth 2.0 with Python Management SDK

## Implement OAuth 2.0 with Python Management SDK

Use OAuth 2.0 with the [Python Management SDK](/docs/developers/sdks/content-management-sdk/python/about-python-management-sdk) to authenticate applications with [Contentstack’s Content Management API](/docs/developers/apis/content-management-api) (CMA). The SDK helps you obtain and refresh tokens, store them securely, and make authorized API requests.

Apply this flow in server-side applications, CLI tools, and other Python environments to control access with scoped permissions.

## Prerequisites

-   Install [contentstack-management](https://pypi.org/project/contentstack-management/) **v1.7.0** or **later**.
-   [Register an OAuth application.](/docs/developer-hub/contentstack-oauth) If none is registered, the SDK defaults to the Contentstack CLI App.
-   Ensure you have the following credentials:
    -   client\_id
    -   client\_secret (optional)
    -   app\_id
    -   redirect\_uri

## OAuth 2.0 Flow

The SDK simplifies the OAuth 2.0 flow by handling token acquisition, refresh, and storage.

1.  **User Authorization:** The SDK generates an authorization URL and directs the user to Contentstack’s Authorization Server to log in and grant access to the application.
2.  **Access Granted:** The Authorization Server redirects the user back to the app’s redirect\_uri with an authorization code.
3.  **Exchange Authorization Code for Tokens:** The SDK exchanges the code for:
    -   An **access token** for authenticated API requests.
    -   A **refresh token** to renew the access token when it expires.
4.  **Store Tokens:** The SDK stores tokens in memory and provides hooks to persist them securely across sessions.
5.  **Make Authenticated API Requests:** The SDK automatically attaches the access token to outgoing API requests, allowing your app to securely interact with Contentstack APIs.
6.  **Automatically Refresh Tokens:** When the access token expires, the SDK uses the refresh token to request a new one without interrupting the current session.
7.  **Logout and Clear Tokens:** On logout, the SDK clears stored tokens and can optionally revoke access.

## Using OAuth in Python Management SDK

The following steps show the OAuth 2.0 flow in the Python Management SDK, from initialization to logout.

1.  ### Initialize the OAuth Handler
    
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
    
    <table><colgroup data-width="750"><col style="width:33.3333%"><col style="width:16.4%"><col style="width:50.2667%"></colgroup><tbody><tr><td><strong>Parameter</strong></td><td><strong>Required</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">appId</span></td><td>Yes</td><td style="text-align: left;">The App ID registered with Contentstack.</td></tr><tr><td><span class="code">clientId</span></td><td>Yes</td><td style="text-align: left;">The OAuth client ID associated with your app.</td></tr><tr><td><span class="code">redirectUri</span></td><td>Yes</td><td style="text-align: left;">The URL to redirect users after login and consent.</td></tr><tr><td><span class="code">responseType</span></td><td>No</td><td style="text-align: left;">Defaults to <span class="code">code</span>. You can override this based on your OAuth settings.</td></tr><tr><td><span class="code">clientSecret</span></td><td>No</td><td style="text-align: left;">Required for standard OAuth flows. Skip this if you're using PKCE.</td></tr><tr><td><span class="code">scope</span></td><td>No</td><td style="text-align: left;">Defines the requested permissions (e.g., read-only or full access) based on your app’s requirements.</td></tr></tbody></table>
    
2.  ### Start the Authorization Flow
    
    Call authorize() to start the OAuth flow and redirect the user to Contentstack’s OAuth server:
    
    ```
    oauth_handler.authorize()
    ```
    
3.  ### Handle Redirect and Exchange Token
    
    After authorization, the server redirects the user back to your redirect\_uri with an authorization code. Handle this redirect in your app using the handleRedirect() method.
    
    ```
    # Assuming the redirect URL has query parameters like ?code=authorization_code
    oauth_handler.handle_redirect(callback_url)
    ```
    
    The handleRedirect() method automatically processes the authorization code and retrieves access and refresh tokens.
    
4.  ### Token Access and Storage
    
    The SDK securely stores tokens in memory. To access them manually, use the following code:
    
    ```
    accessToken = oauthHandler.get_access_token();
    refreshToken = oauthHandler.refresh_access_token();
    ```
    
    You can store tokens in different ways, depending on the use case:
    
    -   sessionStorage: For short-lived browser sessions.
    -   localStorage: To maintain login sessions across visits.
    -   cookies: To automatically send tokens with HTTP requests.
5.  ### Make Authenticated API Requests
    
    Once the tokens are obtained, use the access token to make authenticated API requests. The SDK automatically appends the token to the Authorization header as a Bearer token for all outgoing requests.
    
    ```
    response = client.stack(stack_api_key).content_types(content_type_uid).entry().find()
    print(response)
    ```
    
6.  ### Refresh Access Token
    
    When the token expires, the SDK uses the refresh token to request a new one.
    
    ```
    oauth_handler.refresh_access_token()
    ```
    
    This ensures that your application continues to make authenticated requests without requiring the user to log in again.
    
7.  ### Logout and Revoke Access
    
    The logout() method logs out the user and revokes authorization:
    
    ```
    oauth_handler.logout();
    ```
    
    This clears all your saved tokens and authorizations associated with the session.
    

## Token Storage

After authentication, tokens are managed in memory. However, if needed, you can store them using the following methods:

### Web Applications

Choose a storage strategy based on session duration and security:

1.  **Session Storage:** Tokens remain available only during runtime for increased security. This option works for short-lived scripts or temporary sessions.
    
    ```
    session['access_token'] = oauth_handler.get_access_token()
    session['refresh_token'] = oauth_handler.get_refresh_token()
    ```
    
2.  **Environment Variables:** Tokens are available to all processes. Use secure attributes to enhance protection.
    
    ```
    os.environ['CONTENTSTACK_ACCESS_TOKEN'] = oauth_handler.get_access_token()
    os.environ['CONTENTSTACK_REFRESH_TOKEN'] = oauth_handler.get_refresh_token()
    ```
    

### CLI Applications

Choose a storage strategy based on session duration and security:

1.  **In-memory Storage:** Stores tokens in the application’s memory during runtime. Best for short scripts or one-time tasks.
2.  **File-based Storage:** Allows tokens to persist between runs. Store them in encrypted files with restricted access.
