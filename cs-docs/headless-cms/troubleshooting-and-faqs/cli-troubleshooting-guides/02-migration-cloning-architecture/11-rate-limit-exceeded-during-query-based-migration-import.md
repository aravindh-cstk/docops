---
title: "Rate Limit Exceeded During Query-Based Migration Import"
description: "Rate Limit Exceeded During Query-Based Migration Import"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/11-rate-limit-exceeded-during-query-based-migration-import
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: cs72238134d3f14ca7
---

# Rate Limit Exceeded During Query-Based Migration Import

"Rate Limit Exceeded" errors occurred while importing entries during a query-based content migration, resulting in incomplete reference mapping.

**Root Cause**

The retry behavior is not import-specific: any command against the Management API retries up to 3 times on 401, 408, 422, and 429 responses, with a randomized 3-8 second delay. The default import concurrency of 5 governs three separate settings - importConcurrency, fetchConcurrency, and writeConcurrency - with importConcurrency responsible for entry and reference-mapping writes. There is no --concurrency flag; these settings can only be changed through an external configuration file passed to --config.

**Resolution**

1.  Reduce import concurrency below the default of 5 using a configuration file, for example { "importConcurrency": 2 } passed as csdx cm:stacks:import --config <path/to/config.json> ....
2.  If rate limits affect modules other than entries, lower fetchConcurrency or writeConcurrency as well; these govern other modules' batching independently.
3.  If rate limits persist after reducing concurrency, request an increase to the organization's write limit.
