---
title: "Key Features of Management Tokens"
description: "Explore access levels, rate limits, and usage rules for management tokens in Contentstack."
url: /headless-cms/key-features
uid: bltf967827012b7d39d
---

# Key Features of Management Tokens

## Key Features of Management Tokens

Management Tokens provide secure read-write access to the content of your [stack](/docs/headless-cms/about-stack). They act as credentials, used in combination with your stack API key, to make authorized [Content Management API](/docs/developers/apis/content-management-api/) (CMA) requests for managing your stack's content.

Let’s look at the key features of [Management Token](/docs/headless-cms/about-management-tokens):

-   **Stack-level token and not a user-specific token:** One important aspect of a management token is that it’s a stack-level credential and not tied to any individual user. This means anyone with access to the token can use it to make authorized CMA requests.
-   **Provides access control:** When [generating a management token](/docs/headless-cms/generate-a-management-token), you can define its access level. You can allow it to perform read-only actions or grant it both read and write access to content modules.
-   **Provision to set expiry:** You can configure whether the management token should expire on a specific date or remain non-expiring, depending on your use case.
-   **Custom rate limits:** Management tokens allow you to define custom rate limits, specifying the maximum number of read (GET) and write (POST, PUT, DELETE) requests permitted per second.
-   **Owners/admins can create:** Only the stack [owners](/docs/headless-cms/types-of-roles#owner) or [admins](/docs/headless-cms/types-of-roles#admin) have the ability to create a management token, adding a layer of administrative control.

**Additional Resource:** Refer to the [limitations](/docs/headless-cms/limitations-of-management-tokens) document for more information.
