---
title: "Overview of Tokens"
description: "Learn how Contentstack token-based authentication secures API access using Delivery and Management tokens."
url: /headless-cms/overview-of-tokens
---

# Overview of Tokens

## Overview of Tokens

A token is a unique, encoded string issued to authorize users or systems when accessing APIs.

Contentstack uses token-based authentication to ensure secure access and operations on your account. You can create, update, delete, and fetch content using tokens. The type of token required depends on the API you're working with.

![CMS-Tokens](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltca16b0779d8c1cad/69f359ac709daf47b42ab886/CMS-Tokens.png)

## Content Delivery API Authentication

You need a [Delivery Token](/docs/headless-cms/about-delivery-tokens) to authenticate the [Content Delivery API](/docs/developers/apis/content-delivery-api) request. This token is environment-specific, so you must assign it to a publishing [environment](/docs/headless-cms/about-environments) from which you want to retrieve content.

## Content Management API Authentication

You can authenticate requests to the [Content Management API](/docs/developers/apis/content-management-api) using one of the following methods:

### Method 1: API Key + Authtoken

Use the following parameters in your request headers:

-   api\_key: The stack’s API Key.
-   authtoken: The user’s [Authtoken](https://www.contentstack.com/docs/headless-cms/types-of-tokens#authentication-tokens-auth-tokens).

### Method 2: API Key + Management Token

Use the following parameters in your request headers:

-   api\_key: The stack’s API Key.
-   authorization: The [Management Token](https://www.contentstack.com/docs/headless-cms/types-of-tokens#management-tokens) value.

**Note:** Management Tokens are restricted to the [stack](/docs/headless-cms/about-stack) in which they were generated. They cannot be shared across other stacks or used with unrelated Content Management API modules such as [organization management](/docs/developers/apis/administration-api/organizations), [user sessions](/docs/developers/apis/administration-api/user-session), or token generation.
