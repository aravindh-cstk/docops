---
title: "ETIMEDOUT Errors on Contentstack Launch Domain"
description: "ETIMEDOUT Errors on Contentstack Launch Domain"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/062-etimedout-errors-on-contentstack-launch-domain
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs57375f51224e3970
---

# ETIMEDOUT Errors on Contentstack Launch Domain

Applications hosted on Contentstack Launch experience intermittent ETIMEDOUT errors when fetching page entries. The errors occur on consecutive days and affect specific URL paths.

**Root Cause**

ETIMEDOUT errors from a Launch domain indicate the connection attempt to the Contentstack CDA timed out before establishing a connection. This is typically caused by a CDN edge issue, a platform-level service degradation, or an overloaded query that takes too long to process.

**Resolution**

1.  Check the Contentstack Status Page (status.contentstack.com) for any active incidents during the observed timeframe.
2.  Review the specific API queries generating ETIMEDOUT errors for complexity - queries with deep reference chains or large result sets can time out under load.
3.  Simplify or paginate the affected queries to reduce per-request processing time.
4.  Implement timeout handling and retry logic in the application so ETIMEDOUT errors trigger a retry rather than a permanent failure.
5.  If ETIMEDOUT errors persist without an active platform incident, contact Contentstack Support with sample failing request URLs and the time window.

After simplifying queries and implementing retry logic, confirm ETIMEDOUT errors no longer cause permanent page load failures.
