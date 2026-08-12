---
title: "Investigating and Resolving CMA 429 Error Spikes"
description: "Investigating and Resolving CMA 429 Error Spikes"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/04-investigating-and-resolving-cma-429-error-spikes
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: csb17ad1eba937fcbd
---

# Investigating and Resolving CMA 429 Error Spikes

A spike in 429 errors is observed on a CMA-heavy stack. The errors appear in bursts and may be triggered by a specific automated workflow or integration.

**Root Cause**

429 spikes on CMA are typically caused by unthrottled automated processes, integrations, or SDK-based migrations hitting the CMA simultaneously or in rapid succession. Common triggers include bulk content migrations, automated publish pipelines, third-party integrations without backoff logic, and concurrent CLI or SDK operations.

**Resolution**

1.  Contact Contentstack Support and request CMA error logs for the affected time window and stack. Logs will identify which endpoints and operations are generating the most requests.
2.  Review all active integrations, scheduled jobs, and CLI operations that interact with the CMA and identify which are running without throttling.
3.  Add per-operation rate limiting, delays, and retry-with-backoff to the identified workflows.
4.  Stagger automated jobs so they do not overlap with peak editorial usage periods.

After applying throttling to the identified workflows, monitor CMA usage during the next scheduled run. If 429 spikes do not recur at the same magnitude, the workflows are operating within rate limits.
