---
title: "[Create Tokens] - Overview of Tokens"
description: Overview of tokens and how to authenticate Content Delivery API and Content Management API requests in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/overview-of-tokens
product: Contentstack
doc_type: overview
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Create Tokens] - Overview of Tokens

This page explains what tokens are in Contentstack and how they are used to authenticate requests to the Content Delivery API and Content Management API. It is intended for developers who need to choose the correct token type and authentication method when working with Contentstack APIs.

## Overview of Tokens

A token is a unique, encoded string issued to authorize users or systems when accessing APIs.

Contentstack uses token-based authentication to ensure secure access and operations on your account. You can create, update, delete, and fetch content using tokens. The type of token required depends on the API you're working with.

## Content Delivery API Authentication

You need a [Delivery Token](/docs/developers/create-tokens/about-delivery-tokens) to authenticate the [Content Delivery API](/docs/developers/apis/content-delivery-api) request. This token is environment-specific, so you must assign it to a publishing [environment](/docs/developers/set-up-environments/about-environments) from which you want to retrieve content.

## Content Management API Authentication

You can authenticate requests to the [Content Management API](/docs/developers/apis/content-management-api) using one of the following methods:

### Method 1: API Key + Authtoken

Use the following parameters in your request headers:
- `api_key:` The stack’s API Key.
- `authtoken:` The user’s [Authtoken](https://www.contentstack.com/docs/developers/create-tokens/types-of-tokens#authentication-tokens-auth-tokens).

### Method 2: API Key + Management Token

Use the following parameters in your request headers:
- `api_key:` The stack’s API Key.
- `authorization:` The [Management Token](https://www.contentstack.com/docs/developers/create-tokens/types-of-tokens#management-tokens) value.

**Note:** Management Tokens are restricted to the [stack](/docs/developers/set-up-stack/about-stack) in which they were generated. They cannot be shared across other stacks or used with unrelated Content Management API modules such as [organization management](/docs/developers/apis/content-management-api#organizations), [user sessions](/docs/developers/apis/content-management-api#user-session), or token generation.

## Common questions

### Which token do I need for the Content Delivery API?
You need a [Delivery Token](/docs/developers/create-tokens/about-delivery-tokens) to authenticate the [Content Delivery API](/docs/developers/apis/content-delivery-api) request.

### Can I use a Management Token across multiple stacks?
No. **Management Tokens are restricted to the [stack](/docs/developers/set-up-stack/about-stack) in which they were generated.**

### What headers are used for Content Management API authentication?
You can use either:
- `api_key:` + `authtoken:`
- `api_key:` + `authorization:` (Management Token)

### Can a Management Token be used with organization management or user sessions modules?
No. Management Tokens cannot be used with unrelated Content Management API modules such as [organization management](/docs/developers/apis/content-management-api#organizations) or [user sessions](/docs/developers/apis/content-management-api#user-session).