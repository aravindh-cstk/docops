---
title: "[Set Up Your Project] - Why Management Tokens"
description: Why Management Tokens
url: https://www.contentstack.com/docs/headless-cms/why-management-tokens
product: Contentstack
doc_type: concept
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - Why Management Tokens

This page explains why management tokens are used for interacting with your stack via the Content Management API (CMA). It is intended for developers and teams setting up authentication for scripts, integrations, or SSO-enabled organizations, and should be used when deciding between management tokens and traditional user-based authentication.

## Why Management Tokens

Management tokens offer a secure and scalable way to interact with your [stack](../set-up-stack/about-stack.md) via the Content Management API (CMA), especially in scenarios where traditional authentication methods may not be ideal.

Here are some common use cases where management tokens are particularly useful:
- **Useful for SSO Users:** In [SSO](../single-sign-on/about-single-sign-on-sso.md)-enabled organizations, users authenticate through an Identity Provider (IdP) and do not receive an Authtoken, which is typically required for CMA access. While it’s possible to disable [SSO Strict Mode](../single-sign-on/set-up-sso-in-contentstack.md#user-management-in-contentstack) and log in using traditional credentials, management tokens provide a better alternative. SSO users can use management tokens to make authorized [CMA requests](../../../api-docs/api-detail/content-management-api.md)—without logging in through the traditional Contentstack login flow.
- **Run Scripts and Integrations Without Personal Tokens:** Management tokens can perform most of the operations that an Authtoken can (except certain actions involving Users, Workflows, and Publish Rules).
This makes them ideal for:
      Automation scripts
- CI/CD pipelines
- External system integrationsUsing management tokens ensures that you don’t have to expose or share your **personal Authtoken**, keeping your credentials secure.
- **Risk Mitigation:** Management tokens can be invalidated at any time, providing flexibility and control. If a token is ever exposed or compromised, it can be revoked immediately—minimizing risk without affecting user accounts or requiring password resets.

## Common questions

### Do management tokens replace Authtokens for all CMA operations?
Management tokens can perform most of the operations that an Authtoken can (except certain actions involving Users, Workflows, and Publish Rules).

### Why are management tokens useful for SSO-enabled organizations?
In SSO-enabled organizations, users authenticate through an Identity Provider (IdP) and do not receive an Authtoken; management tokens allow authorized CMA requests without logging in through the traditional Contentstack login flow.

### What should I do if a management token is exposed?
Management tokens can be invalidated at any time and can be revoked immediately—minimizing risk without affecting user accounts or requiring password resets.