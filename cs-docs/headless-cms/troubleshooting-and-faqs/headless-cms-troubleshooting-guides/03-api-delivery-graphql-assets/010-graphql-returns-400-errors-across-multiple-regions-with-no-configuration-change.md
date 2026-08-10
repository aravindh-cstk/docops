---
title: "GraphQL Returns 400 Errors Across Multiple Regions With No Configuration Change"
description: "GraphQL Returns 400 Errors Across Multiple Regions With No Configuration Change"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/010-graphql-returns-400-errors-across-multiple-regions-with-no-configuration-change
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs43f0a23dca2029fc
---

# GraphQL Returns 400 Errors Across Multiple Regions With No Configuration Change

GraphQL Delivery API requests begin returning unexpected HTTP 400 status code errors in production. The issue affects multiple regions simultaneously (for example, both US and EU). No changes were made on the customer side before the errors began.

**Root Cause**

When 400 errors appear simultaneously across multiple regions without any customer-side configuration change, the root cause is typically a platform-level infrastructure issue - such as a misconfiguration in the GraphQL service, a deployment that introduced a regression, or a DNS/routing issue. This is not caused by the query structure or the delivery token, and it resolves after Contentstack engineering performs a rollback or applies a platform-level fix.

**Resolution**

1.  Confirm the error is not caused by a recent query change or token expiry by testing with a simple known-good query (for example, fetching a single entry with minimal fields).
2.  Check the Contentstack Status Page (status.contentstack.com) for any active incidents affecting the GraphQL API.
3.  If no active incident is listed but the error persists across regions, contact Contentstack Support immediately with: the affected stack API key, the regions where the error is observed, the approximate start time, and a sample failing request.
4.  Engineering will investigate the platform-level cause and apply a fix. No configuration change is required on the customer side.

After the engineering fix is applied, re-test the previously failing GraphQL request. If it returns a valid response, the platform-level issue has been resolved.
