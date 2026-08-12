---
title: "Publishing Status Takes 15+ Seconds to Load on High-Volume Stacks"
description: "Publishing Status Takes 15+ Seconds to Load on High-Volume Stacks"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/48-publishing-status-takes-15-seconds-to-load-on-high-volume-stacks
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs59a6339dd18701cc
---

# Publishing Status Takes 15+ Seconds to Load on High-Volume Stacks

The Publish Status panel and version history take 15+ seconds to load for stacks with many environments (15+) and languages (14+).

**Root Cause**

The new Publish Status and Version History interface fetches status data for all environments and languages simultaneously. For stacks with many combinations, this generates a large number of parallel queries causing significant latency.

**Resolution**

1.  Contact Contentstack Support and request enablement of the ‘disablePublishStatusV2’ configuration key for the affected organization.
2.  This reverts the organization to the legacy Publish Status interface which uses a faster data loading pattern.

After the key is enabled, reload an entry with many locales and environments and confirm the Publish Status panel loads within a normal timeframe.
