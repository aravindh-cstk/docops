---
title: "Configuring a Custom Rate Limit for Bulk Publishing via CLI"
description: "Configuring a Custom Rate Limit for Bulk Publishing via CLI"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/01-authentication-network-node-js-environments/11-configuring-a-custom-rate-limit-for-bulk-publishing-via-cli
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: csb0a7b78fe17468ee
---

# Configuring a Custom Rate Limit for Bulk Publishing via CLI

CLI publishing limits were hit during large-scale bulk publish operations.

**Root Cause**

csdx config:set:rate-limit raises throughput for the CLI's core bulk publish commands (cm:entries:publish, cm:assets:publish, and related commands), which default to roughly 1 request per second. This must be configured for the organization before bulk publishing runs faster. It does not apply to the separate CLI Bulk Operations plugin (cm:stacks:bulk-entries / cm:stacks:bulk-assets), which controls its own throughput independently through rateLimit.requestsPerSecond and rateLimit.maxConcurrent in its own --config file.

**Resolution**

1.  Set a custom rate limit for the organization: csdx config:set:rate-limit --org <your\_org\_uid> --utilize <percentage> --limit-name bulkLimit. Start moderate and raise gradually.
2.  Confirm with csdx config:get:rate-limit. Reset to default with --default, or remove the custom configuration with csdx config:remove:rate-limit --org <your\_org\_uid>.
3.  If bulk publishing through the CLI Bulk Operations plugin instead, configure throughput through that command's own --config file (rateLimit.requestsPerSecond, rateLimit.maxConcurrent); config:set:rate-limit does not apply to it.
4.  If still rate-limited after raising the configured limit, request a plan-level rate limit increase from Contentstack, since no local configuration can exceed the organization's actual backend limit.
