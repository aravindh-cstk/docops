---
title: "Bandwidth and API Overages Without Application Errors"
description: "Bandwidth and API Overages Without Application Errors"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/039-bandwidth-and-api-overages-without-application-errors
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs656dffe87733d4ac
---

# Bandwidth and API Overages Without Application Errors

Bandwidth and API usage are significantly over contracted limits (in some cases 6x or more), yet no errors are visible in the application. The overage is not accompanied by noticeable performance degradation.

**Root Cause**

High usage can occur without triggering errors as long as the traffic is being served successfully. Common causes of unexpected overages include:

-   Increased consumption from CDN and Images API endpoints
-   High-resolution or unoptimized assets being served repeatedly
-   Bots, crawlers, or unintended traffic patterns hitting the delivery endpoints
-   A spike in legitimate end-user traffic or new integration workflows

**Resolution**

1.  Review historical usage trends in the Contentstack dashboard to identify when the overage began and which endpoints are driving the increase.
2.  Analyze CDN and Images endpoint consumption specifically, as these commonly drive bandwidth overages.
3.  Audit asset sizes and implement image optimization or resizing to reduce per-request bandwidth.
4.  Check for unexpected bot traffic or crawler activity hitting the delivery endpoints.
5.  Contact the Contentstack account team to review overage charges and discuss plan adjustments if increased usage is legitimate and expected to continue.

After identifying the traffic source and implementing optimization, monitor bandwidth and API metrics for a 7-day period. If consumption returns to within contracted limits, the optimization measures are effective.
