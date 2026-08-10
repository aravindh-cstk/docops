---
title: "Why Management Tokens"
description: "Use Management Tokens to securely access Contentstack CMA for scripts, SSO users, and integrations—no personal Authtoken needed."
url: /headless-cms/why-management-tokens
---

# Why Management Tokens

## Why Management Tokens

Management tokens offer a secure and scalable way to interact with your [stack](/docs/headless-cms/about-stack) via the Content Management API (CMA), especially in scenarios where traditional authentication methods may not be ideal.

Here are some common use cases where management tokens are particularly useful:

-   **Useful for SSO Users:** In [SSO](/docs/administration/about-single-sign-on-sso)\-enabled organizations, users authenticate through an Identity Provider (IdP) and do not receive an Authtoken, which is typically required for CMA access. While it’s possible to disable [SSO Strict Mode](/docs/administration/set-up-sso-in-contentstack#user-management-in-contentstack) and log in using traditional credentials, management tokens provide a better alternative. SSO users can use management tokens to make authorized [CMA requests](/docs/developers/apis/content-management-api)—without logging in through the traditional Contentstack login flow.
-   **Run Scripts and Integrations Without Personal Tokens:** Management tokens can perform most of the operations that an Authtoken can (except certain actions involving Users, Workflows, and Publish Rules).  
    This makes them ideal for:
    -   Automation scripts
    -   CI/CD pipelines
    -   External system integrations
        
        Using management tokens ensures that you don’t have to expose or share your **personal Authtoken**, keeping your credentials secure.
        
-   **Risk Mitigation:** Management tokens can be invalidated at any time, providing flexibility and control. If a token is ever exposed or compromised, it can be revoked immediately—minimizing risk without affecting user accounts or requiring password resets.
