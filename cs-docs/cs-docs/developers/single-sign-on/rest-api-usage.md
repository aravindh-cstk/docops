---
title: "[Security Management] - REST API Usage"
description: REST API usage considerations when enabling SSO for an organization, including Content Delivery API and Content Management API behavior.
url: https://www.contentstack.com/docs/administration/rest-api-usage
product: Contentstack
doc_type: security-management
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Security Management] - REST API Usage

This page explains how enabling SSO for an organization impacts REST API integrations, especially Content Management API usage, and is intended for developers and administrators who maintain API-based integrations for SSO-enabled organizations.

Enabling SSO for an organization may affect your REST API integrations, particularly the ones using [Content Management APIs](/docs/developers/apis/content-management-api). It is therefore recommended that you read this section carefully.

## Content Delivery API

For an SSO-enabled organization, [Content Delivery APIs](/docs/developers/apis/content-delivery-api) work as expected. The Content Delivery API requests are GET calls and they use the stack’s [delivery tokens](/docs/developers/create-tokens/about-delivery-tokens) to fetch content. No changes are required.

## Content Management API

Any user who accesses the SSO-enabled organization through IdP login cannot make [Content Management API](/docs/developers/apis/content-management-api) requests since it requires a user authtoken. Below we will explain a couple of options on how to utilize the Content Management API for specific users when SSO is enabled.

Since the [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) of an organization can access an SSO-enabled organization through Contentstack credentials as well, he/she has a user authtoken. The owner can use this authtoken (received in the response of the  “[Login](/docs/developers/apis/content-management-api#logging-in-out)” request) to make Content Management API requests.

Similarly, if you have disabled **Strict Mode **for an SSO-enabled organization and granted a few users the permission to access the organization through Contentstack credentials (by enabling the **Allow Access Without SSO** option in the **Organization** **Users **page), then these users can use the authtoken to make Content Management API requests.

**Additional Resource**: For SSO-enabled organizations, instead of logging in with credentials and generating an authtoken, users can directly use the Content Management APIs to read, create, update, or delete content using the [management token](/docs/developers/create-tokens/types-of-tokens#management-tokens).

## Common questions

### Do Content Delivery APIs require changes when SSO is enabled?
No. For an SSO-enabled organization, Content Delivery API requests are GET calls and use the stack’s delivery tokens to fetch content, and no changes are required.

### Why can’t IdP-logged-in users make Content Management API requests?
Any user who accesses the SSO-enabled organization through IdP login cannot make Content Management API requests since it requires a user authtoken.

### Who can use a user authtoken to access the Content Management API in an SSO-enabled organization?
The owner can access an SSO-enabled organization through Contentstack credentials and use the authtoken received in the response of the “Login” request to make Content Management API requests.

### What is an alternative to generating a user authtoken for Content Management APIs in SSO-enabled organizations?
Users can directly use the Content Management APIs to read, create, update, or delete content using the management token.