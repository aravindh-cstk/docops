---
title: "SDK Not Reflecting Published Entry Updates - Wrong SDK Import"
description: "SDK Not Reflecting Published Entry Updates - Wrong SDK Import"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/089-sdk-not-reflecting-published-entry-updates-wrong-sdk-import
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cse61a9e3e69d9c16f
---

# SDK Not Reflecting Published Entry Updates - Wrong SDK Import

Entry updates are visible via CMA, direct CDA calls, and cURL, but changes are not reflected in the application when using the TypeScript or JavaScript SDK. The SDK appears to be fetching stale or incorrect data.

**Root Cause**

The application is using an incorrect or mismatched SDK import. For example, importing the Content Management SDK when the Delivery SDK is required, or using an import path that points to a cached or incorrectly resolved module. This causes the SDK to query a different endpoint or use incorrect credentials, returning outdated or mismatched data.

**Resolution**

1.  Verify the SDK import statement in the application code. For delivery use cases, ensure the import is from the Contentstack Delivery SDK, not the Management SDK.
2.  Correct delivery SDK import example: import Contentstack from ‘@contentstack/delivery-sdk’
3.  Confirm the SDK is initialized with the correct API key, delivery token, and environment.
4.  Clear the module cache (npm cache clean --force or equivalent) and reinstall dependencies if the import appears correct but the issue persists.

After correcting the SDK import, re-run the application query and confirm that the latest published entry data is returned.
