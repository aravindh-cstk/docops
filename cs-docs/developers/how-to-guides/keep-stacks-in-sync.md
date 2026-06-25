---
title: "[How-to Guides and Knowledgebase articles] - Keep Stacks in Sync"
description: How to keep stacks in sync by using multiple environments or multiple stacks.
url: https://www.contentstack.com/docs/developers/how-to-guides/keep-stacks-in-sync
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: unknown
---

# [How-to Guides and Knowledgebase articles] - Keep Stacks in Sync

This page explains approaches for keeping content in sync across environments or stacks, intended for developers and teams managing content promotion workflows (for example, moving content from testing/staging to production) without impacting existing content or code.

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn more about stacks, refer to the [Stack](../set-up-stack/about-stack.md) documentation.

If you have some [content published](/docs/content-managers/publish-content) on an environment (for example, “testing” or “staging”), and you want to publish the same content on another environment (say “production”) without impacting any content or code, you can do this in two possible ways.

Also, cross referencing between stack is not supported while using a [reference field](../create-content-types/reference.md). Even in this case, you can use the following two methods to keep your stacks' data in sync.

## Use Multiple Environments

The first recommended way is to create and use multiple [environments](/docs/developers/set-up-environments). For example, you can create two environments in your [stack](../set-up-stack/about-stack.md), let's say “development” and “production.” In this case, “development” will serve as a test environment and “production” is the environment where your feature or content will be available for users.

When using multiple environments, you can first publish the content on the development environment. Here, you can verify that all changes that you have made are correct and there are no errors. Your production or other environments will not be affected by this action.

Once you are satisfied, then you can publish the content on the production environment. Another alternative is to use Workflows as it will help you restrict users from publishing to the “Production” environment and only authorized users can make content live or public. This also gives you an opportunity to verify content before it goes live.

## Use Multiple Stacks

If you want to maintain separate content types and entries, you can use the multiple stack option. In this way, all the content types and entries will be isolated from each other. You can use a script, in this case, to enable our [Content Management API](../../../api-docs/api-detail/content-management-api.md) requests to reflect the changes on each stack using [Webhooks](../set-up-webhooks/about-webhooks.md) and the [REST API requests](/docs/developers/apis/).

**Note**: SSO-enabled organizations can use the management token to make API requests.

We have crated a few guides on how to keep stacks in sync. Refer to the following guides for more information:

- [Share Content Between Stacks Using a Web Proxy](./share-content-between-stacks-using-a-web-proxy.md)
- [Sync Data Between Stacks Using Contentstack Webhooks and AWS Lambda](./sync-data-between-stacks-using-contentstack-webhooks-and-aws-lambda.md)
- [Share Assets Between Stacks Using an Extension](./sharing-assets-between-stacks-using-an-extension.md)

## Common questions

### When should I use multiple environments instead of multiple stacks?
Use multiple environments when you want to publish the same content through stages (for example, development/testing to production) within the same stack without impacting other environments.

### When should I use multiple stacks?
Use multiple stacks when you want to maintain separate content types and entries so that content is isolated between stacks.

### Can I cross reference between stacks using a reference field?
No. Cross referencing between stack is not supported while using a [reference field](../create-content-types/reference.md).

### How can I keep multiple stacks in sync?
You can use a script to enable [Content Management API](../../../api-docs/api-detail/content-management-api.md) requests to reflect changes on each stack using [Webhooks](../set-up-webhooks/about-webhooks.md) and the [REST API requests](/docs/developers/apis/).