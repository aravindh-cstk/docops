---
title: "Types of Tokens"
description: "Learn about Contentstack token types: Delivery, Auth, and Management. Each token type has different scopes, use cases, access levels, and creation permissions."
url: /headless-cms/types-of-tokens
---

# Types of Tokens

## Types of Tokens

Contentstack uses different types of tokens to authorize and authenticate API requests for accessing or managing content within a [stack](/docs/headless-cms/about-stack). Each token type has a specific purpose and serves different levels of access.

This section provides a quick overview of the token types, their uses, limitations, and the roles that can create or manage them.

## Token Types Overview

The following table provides a quick comparison of the different token types available in Contentstack:

<table><tbody><tr><td><strong>Token Type</strong></td><td><strong>Access Level</strong></td><td><strong>Scope</strong></td><td><strong>Content Accessibility</strong></td><td><strong>Reset Capability</strong></td><td><strong>Creation Permissions</strong></td></tr><tr><td>Delivery Token</td><td>Read-only</td><td>Environment-level</td><td>Published only</td><td>No</td><td><p>Stack owners, Admins, and Developers</p></td></tr><tr><td>Access Token</td><td>Read-only</td><td>Stack-level</td><td>Both Published and Unpublished</td><td>Yes</td><td>Available by default. Can be reset by Stack owners, Admins, and Developers</td></tr><tr><td>Auth Token</td><td>Read/Write</td><td>Stack-level and specific to a user.</td><td>Both Published and Unpublished</td><td>No (the oldest one expires when the limit is reached)</td><td>Generated via login; only eligible users can retrieve</td></tr><tr><td>Management Token</td><td>Read/Write (configurable)</td><td>Stack-level</td><td>Both Published and Unpublished (excluding some modules)</td><td>Yes (during creation)</td><td>Stack owners, Admins only</td></tr></tbody></table>

**Note:** Both [Delivery Tokens](/docs/headless-cms/about-delivery-tokens) and [Management Tokens](/docs/headless-cms/about-management-tokens) can be assigned to all [branches](/docs/headless-cms/about-branches) or a specific branch. Similarly, they can be assigned to all [aliases](/docs/headless-cms/about-aliases) or specific aliases. This lets you fetch or manage data from their associated branches efficiently.

## Delivery Tokens

A Delivery Token is a **read-only**, **environment-specific** token used to fetch published content from a particular [environment](/docs/headless-cms/about-environments) via [Content Delivery APIs](/docs/developers/apis/content-delivery-api).

It ensures secure access to published content from specific environments such as staging or production, without exposing draft or unpublished data.

### Usage Characteristics

-   Must be **used along with the stack API key** to authorize requests.
-   Can only fetch published content (no access to drafts or unpublished data).
-   Each delivery token is scoped to a specific environment and cannot be shared across multiple environments.
-   Multiple Delivery Tokens can be created and associated with the same environment.
-   Can be created by Stack [Owners](/docs/headless-cms/types-of-roles#owner), [Admins](/docs/headless-cms/types-of-roles#admin), and [Developers](/docs/headless-cms/types-of-roles#developer).

### Limitations

-   This token, once created, cannot be reset and remains constant.
-   Cannot be used to create, update, or delete any content.

### Example Use Cases

-   Provide a staging delivery token to QA or testers for validating published content without exposing production data.
-   Assign separate tokens to different frontend applications, each restricted to their environment.
-   Allow third-party services to safely pull published content without granting write access.

## Access Tokens

**Note:** Access Tokens are no longer supported for stacks created after **December 16, 2020.** For newer stacks, Contentstack recommends using Delivery Tokens to fetch published content and Management Tokens to perform content management operations.

An Access Token is a **read-only**, **stack-level token** used to fetch both published and unpublished (draft) content using Content Delivery APIs.

### Usage Characteristics

-   Works **with the stack API key** to authorize API requests.
-   Can fetch **content from all environments**, regardless of publishing status.

### Creation and Reset Permissions

-   Available by default when a stack is created (for stacks created before December 16, 2020).
-   Can be reset by the **Stack Owners**, **Admins**, and **Developers**.

## Authentication Tokens (Auth Tokens)

An Authtoken is a **user-specific**, **read/write token** used to perform authorized operations via the [Content Management API](/docs/developers/apis/content-management-api). It allows users to create, read, update, or delete content in a stack based on their permissions.

### Usage Characteristics

-   Must be **used along with the stack API key** to authorize requests.
-   Supports read/write operations, including the creation of delivery and management tokens.

### Generation and Expiry

-   An Authtoken is generated when a user logs in using the [Log in to your account](/docs/developers/apis/administration-api/user-session#log-in-to-your-account) API request.
-   The maximum number of active Authtokens a user can hold is **20**.
-   When the 21st token is generated, the oldest token is automatically expired.

### Limitations

-   In [SSO](/docs/administration/about-single-sign-on-sso)\-enabled organizations, only the owner and users with permission to access the organization without SSO can generate Authtokens.
-   Users logging in using an Identity Provider (IdP) such as Google or Okta cannot generate Authtokens.

### Example Use Case

An automated content script, scheduled for overnight execution, maintains product inventory within a stack in Contentstack. The script leverages an Authtoken and the stack API key to authenticate requests and update the product inventory based on data sourced from an external system.

Since Authtokens support **read and write access**, the script can:

-   Fetch existing entries
-   Update stock levels
-   Publish changes automatically

This setup ensures secure automated updates without manual intervention.

## Management Tokens

A [Management Token](/docs/headless-cms/about-management-tokens) is a **stack-level**, **read-write** token used to perform various content management operations such as creating, reading, updating, and deleting content within your stack.

It is ideal for use in integrations, scripts, and third-party services that require authenticated access without relying on user-specific Authtokens.

### Usage Characteristics

-   Must be **used along with the stack API key** to authorize requests.
-   Can be configured as **read-only** or **write-only** at the time of creation.
-   Optionally, a **token expiration date** can be set for added control.
-   Provides access to most content management functions, but cannot be used for administrative modules such as **organization**, **stack**, **user sessions**, and **tokens**.

### Creation and Permissions

-   Can be created **only by Stack Owners and Admins**.
-   Cannot be created by **Developers** or **Content Managers**.

### Example Use Case

-   External developers can use a Management Token to perform automated read/write operations when integrating with third-party applications without needing personal Authtokens.
-   In SSO-enabled organizations, Management Tokens allow direct access to Content Management APIs, eliminating the need for login-based authentication.
