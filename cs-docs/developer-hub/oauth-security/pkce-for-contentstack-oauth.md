---
title: "PKCE for Contentstack OAuth"
description: "PKCE for Contentstack OAuth"
url: /developer-hub/pkce-for-contentstack-oauth
---

# PKCE for Contentstack OAuth

## PKCE for Contentstack OAuth

Proof Key for Code Exchange (PKCE) is a security extension for OAuth 2.0 to avoid malicious attacks and perform a secure authorization flow.

In PKCE flow, the calling application creates a secret key that the authorization server can verify, called the code verifier. The calling application converts the code verifier value into a code challenge and sends it over HTTPS to retrieve the authorization code. The entire process prevents attackers from interfering with the authorization flow, therefore enhancing its security.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   An app created in [Developer Hub](/docs/developer-hub/creating-an-app-in-developer-hub)

## What You Will Learn

-   How PKCE secures the OAuth 2.0 authorization flow.
    
-   How the code verifier and code challenge work.
    
-   How the PKCE authorization, token, and refresh requests differ from the standard flow.
    
-   How to enable PKCE for your app in Developer Hub.
    

## Working of PKCE

1.  PKCE makes use of a unique string code\_verifier making client\_secret an optional parameter.
    
2.  In the authorization request, the unique string code\_challenge\_method is used to derive the code\_challenge parameter. The code\_challenge\_method can be either plain or S256.
    
3.  The code\_challenge\_method is optional. If it is not mentioned in the request, the system takes plain as the default method.
    

## PKCE Flow

The standard authorization flow serves as the foundation for PKCE enabled authorization flows.

Some modifications for the PKCE authorization flow are as follows:

1.  While creating the **User Token** for requesting Authorization Token, certain parameters are added in the request. The new request will be:
2.  ```
    {BASE_URL}/#!/apps/{app_uid}/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&scope={scope}&state={state}&code_challenge={code_challenge}&code_challenge_method={plain/S256}
    ```
    
3.  **Note:** The parameter code\_challenge\_method is optional and when not included in the request, the default value plain is considered.
    
4.  After authorization is granted, the user will exchange this auth code for an access token. The request will be as follows:  
    
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
    
    **Note:** \- After enabling PKCE, the client\_secret parameter is optional. If you still provide the parameter for the User Token, then it should also be added for the **Refresh Token**.  
    \- If a user requests re-authorization for the same set or subset of scopes that were once granted, the user is automatically redirected to the redirect URL.
    
5.  While exchanging the refresh token, the client\_secret parameter is not included in the request. The request will be as follows:
6.  ```
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

1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and navigate to **Developer Hub**
2.  Open your app in the **Developer Hub** console.
3.  Click the **OAuth** tab**.**![Select_OAuh.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f20df46c15f15dc/65b69c2b55a88a8094da672c/Select_OAuh.png)
4.  Within the **User Token** section, add user scopes to enable PKCE.  
    ![User_Scop.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc03e553cff231d4e/65b69c2bc600052b5ed5a758/User_Scop.png)
5.  Enable the **Allow PKCE** toggle button.  
    ![Allow_PKCE.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6f2a53c36d065c1/65b69c2b24ea49ea9dde57d3/Allow_PKCE.png)
6.  Click **Save** to save your OAuth configurations.
