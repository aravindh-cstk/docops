---
title: "WAF Blocking Large or Alias-Heavy GraphQL Queries with 404 DOWNSTREAM_SERVICE_ERROR"
description: "WAF Blocking Large or Alias-Heavy GraphQL Queries with 404 DOWNSTREAM_SERVICE_ERROR"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/025-waf-blocking-large-or-alias-heavy-graphql-queries-with-404-downstream-service-error
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs6b67d72812c0bd27
---

# WAF Blocking Large or Alias-Heavy GraphQL Queries with 404 DOWNSTREAM_SERVICE_ERROR

A GraphQL query consistently fails with a 404 DOWNSTREAM\_SERVICE\_ERROR in the production environment, while the same query works correctly in the GraphQL Explorer. The query is large, contains many aliases, or both.

**Root Cause**

A Web Application Firewall (WAF) rule on the customer’s domain is blocking large or alias-heavy GraphQL queries. WAF rules designed to prevent abuse may treat complex GraphQL query patterns as suspicious and block them before they reach the Contentstack origin, returning a 404 error.

**Resolution**

1.  Contact Contentstack Support and report the 404 DOWNSTREAM\_SERVICE\_ERROR along with a sample of the failing query.
2.  Support will review WAF configuration for the affected domain and update the rules to allow valid complex GraphQL queries.
3.  As a temporary measure, reduce query complexity by splitting large queries or removing aliases where possible.
4.  After the WAF configuration is updated, re-run the original query and confirm it succeeds.

After the WAF rules are adjusted, execute the affected query in the production environment. If the query completes without a DOWNSTREAM\_SERVICE\_ERROR, the WAF is no longer blocking the request.
