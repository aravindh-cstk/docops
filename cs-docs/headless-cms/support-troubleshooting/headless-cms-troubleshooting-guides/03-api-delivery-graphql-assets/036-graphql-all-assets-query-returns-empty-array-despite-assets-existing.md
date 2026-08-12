---
title: "GraphQL all_assets Query Returns Empty Array Despite Assets Existing"
description: "GraphQL all_assets Query Returns Empty Array Despite Assets Existing"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/036-graphql-all-assets-query-returns-empty-array-despite-assets-existing
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs83db0b5f861d9fef
---

# GraphQL all_assets Query Returns Empty Array Despite Assets Existing

A GraphQL query using all\_assets { items { system { … } } } returns an empty array even though assets are visible in the CMS and the API call returns a 200 status.

**Root Cause**

The GraphQL query returns an empty result when either of the following conditions is true:

-   The delivery token used in the request does not have access to the environment being queried
-   No assets have been published to the environment specified in the query

The API returns a 200 with an empty array rather than an error, which can make the root cause difficult to identify.

**Resolution**

1.  Verify the delivery token’s environment access in Settings > Tokens and ensure the token has access to the target environment.
2.  Confirm that at least one asset has been published to the environment referenced in the query.
3.  If using the default environment, ensure the delivery token explicitly includes that environment.
4.  Re-run the query after verifying token permissions and asset publish status.

After confirming the token has environment access and assets are published, execute the all\_assets query. If assets are returned in the response, the token and environment configuration are correct.
