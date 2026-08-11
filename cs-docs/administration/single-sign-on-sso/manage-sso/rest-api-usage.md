---
title: "REST API Usage"
description: "Discover how SSO affects Contentstack's Content Management API for seamless integration with management tokens and user authtokens."
url: /administration/rest-api-usage
---

# REST API Usage

## REST API Usage

Enabling SSO for an organization may affect your REST API integrations, particularly the ones using [Content Management APIs](/docs/developers/apis/content-management-api). It is therefore recommended that you read this section carefully.

## Content Delivery API

For an SSO-enabled organization, [Content Delivery APIs](/docs/developers/apis/content-delivery-api) work as expected. The Content Delivery API requests are GET calls and they use the stack’s [delivery tokens](/docs/headless-cms/about-delivery-tokens) to fetch content. No changes are required.

## Content Management API

Any user who accesses the SSO-enabled organization through IdP login cannot make [Content Management API](/docs/developers/apis/content-management-api) requests since it requires a user authtoken. Below we will explain a couple of options on how to utilize the Content Management API for specific users when SSO is enabled.

Since the [owner](/docs/headless-cms/types-of-roles#owner) of an organization can access an SSO-enabled organization through Contentstack credentials as well, he/she has a user authtoken. The owner can use this authtoken (received in the response of the “[Login](/docs/developers/apis/administration-api/user-session)” request) to make Content Management API requests.

Similarly, if you have disabled **Strict Mode** for an SSO-enabled organization and granted a few users the permission to access the organization through Contentstack credentials (by enabling the **[Allow Access Without SSO](/docs/administration/invite-users-to-organization#invite-users-to-sso-enabled-organizations)** option in the **Organization** **Users** page), then these users can use the authtoken to make Content Management API requests.

**Additional Resource:** For SSO-enabled organizations, instead of logging in with credentials and generating an authtoken, users can directly use the Content Management APIs to read, create, update, or delete content using the [management token](/docs/headless-cms/types-of-tokens#management-tokens).
