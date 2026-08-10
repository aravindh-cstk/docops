---
title: "Intermittent Null Entry IDs Resolved by Rotating the Production Delivery Token"
description: "Intermittent Null Entry IDs Resolved by Rotating the Production Delivery Token"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/044-intermittent-null-entry-ids-resolved-by-rotating-the-production-delivery-token
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csc1a0fd84235edf63
---

# Intermittent Null Entry IDs Resolved by Rotating the Production Delivery Token

Production GraphQL API responses intermittently return null for entry IDs with the error “Failed to fetch item – Object not found.” The issue occurs only in the production environment and not in staging or development.

**Root Cause**

Intermittent authentication or token-related inconsistencies can cause the API to fail to resolve entries correctly, returning null IDs. Token rotation - generating a new delivery token - resolves stale token states that may accumulate over time in production environments.

**Resolution**

1.  Navigate to Settings > Tokens in the Contentstack dashboard.
2.  Regenerate or rotate the production delivery token.
3.  Update the application configuration to use the new delivery token.
4.  Re-run the affected GraphQL queries and confirm that entry IDs are returned correctly without null values.

After rotating the delivery token and updating the application, execute the previously failing queries in production. If entry IDs are returned consistently without null values, the token rotation has resolved the inconsistency.
