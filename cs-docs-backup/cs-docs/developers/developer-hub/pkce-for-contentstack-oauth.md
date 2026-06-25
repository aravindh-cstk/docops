---
title: "[Developer Hub guides] - PKCE for Contentstack OAuth"
description: PKCE for Contentstack OAuth
url: https://www.contentstack.com/docs/developer-hub/pkce-for-contentstack-oauth
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Developer Hub guides] - PKCE for Contentstack OAuth

This page explains how Proof Key for Code Exchange (PKCE) works with Contentstack OAuth, including the PKCE authorization and token exchange flow and how to enable PKCE in the Developer Hub. It is intended for developers implementing OAuth for Contentstack apps and should be used when configuring secure authorization flows without relying on a client secret.

## PKCE for Contentstack OAuth

Proof Key for Code Exchange (PKCE) is a security extension for OAuth 2.0 to avoid malicious attacks and perform a secure authorization flow.

In PKCE flow, the calling application creates a secret key that the authorization server can verify, called the code verifier. The calling application converts the code verifier value into a code challenge and sends it over HTTPS to retrieve the authorization code. The entire process prevents attackers from interfering with the authorization flow, therefore enhancing its security.

## Working of PKCE
- PKCE makes use of a unique string `code_verifier` making `client_secret` an optional parameter.
- In the authorization request, the unique string `code_challenge_method` is used to derive the `code_challenge `parameter. The `code_challenge_method` can be either `plain` or `S256`.
- The `code_challenge_method` is optional. If it is not mentioned in the request, the system takes `plain` as the default method.

## PKCE Flow

The standard authorization flow serves as the foundation for PKCE enabled authorization flows.

Some modifications for the PKCE authorization flow are as follows:
- While creating the **User Token **for requesting Authorization Token, certain parameters are added in the request. The new request will be:

```
{BASE_URL}/#!/apps/{app_uid}/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&scope={scope}&state={state}&code_challenge={code_challenge}&code_challenge_method={plain/S256}
```

**Note: **The parameter `code_challenge_method` is optional and when not included in the request, the default value `plain` is considered.
- After authorization is granted, the user will exchange this auth code for an access token. The request will be as follows:

```
POST {BASE_URL}/apps-api/apps/token
Headers:
  Content-Type: application/x-www-form-urlencoded
Request Body:
  grant_type:authorization_code
  client_id:{client_id}
  redirect_uri:{redirect_uri}
  code:{authorization_code}
  code_verifier:{code_verifier}
```

**Note:**
- After enabling PKCE, the `client_secret` parameter is optional. If you still provide the parameter for the User Token, then it should also be added for the **Refresh Token**.
- If a user requests re-authorization for the same set or subset of scopes that were once granted, the user is automatically redirected to the redirect URL.
- While exchanging the refresh token, the `client_secret` parameter is not included in the request. The request will be as follows:

```
POST {BASE_URL}/apps-api/apps/token
Headers:
  Content-Type: application/x-www-form-urlencoded
Request Body:
  grant_type:refresh_token
  client_id:{client_id}
  redirect_uri:{redirect_uri}
  refresh_token:{refresh_token}
```

## Enabling PKCE in Contentstack

To enable PKCE for your application, follow the steps given below:
- Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and navigate to **Developer Hub**
- Open your app in the **Developer Hub** console.
- Click the **OAuth** tab**.
**
- ****Within the **User Token **section, add user scopes to enable PKCE.
- Enable the **Allow PKCE** toggle button.
- Click **Save** to save your OAuth configurations.

## Common questions

### Do I need to provide `client_secret` when PKCE is enabled?
After enabling PKCE, the `client_secret` parameter is optional.

### What values can `code_challenge_method` take?
The `code_challenge_method` can be either `plain` or `S256`.

### What happens if `code_challenge_method` is not included?
If it is not mentioned in the request, the system takes `plain` as the default method.

### Where do I enable PKCE in Contentstack?
Enable it in the **Developer Hub** by opening your app, going to the **OAuth** tab, and enabling the **Allow PKCE** toggle button.

<!-- filename: developer-hub-guides---pkce-for-contentstack-oauth.md -->