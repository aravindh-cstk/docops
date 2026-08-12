---
title: "Planning a Large Bulk Migration Through Agent OS Without Hitting Rate Limits"
description: "Planning a Large Bulk Migration Through Agent OS Without Hitting Rate Limits"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/05-architecture-recipes-supported-workflows/05-planning-a-large-bulk-migration-through-agent-os-without-hitting-rate-limits
doc_type: faq
_cms_section_uid: cs851bc67aab8774ee
_cms_faq_uid: csa66e370efb0bbfdb
---

# Planning a Large Bulk Migration Through Agent OS Without Hitting Rate Limits

Ahead of a large migration (for example, importing more than 10,000 entries) driven by an Automation, initial testing shows each execution taking several seconds, raising concern that the volume and pace could trigger rate limits or a failure loop during the live migration. Enabling “Throttle Execution” in the settings does not show any per-second or per-minute field, which adds to the uncertainty.

**Root Cause**

Throttle Execution does not expose a manual per-second or per-minute input because it works differently: once enabled, it uses an intelligent internal queue that paces requests automatically based on system capacity, rather than requiring you to configure a fixed rate yourself.

**Resolution**

1.  Enable **Throttle Execution** in the automation’s settings before running the migration.
2.  Do not look for or expect a manual per-second/per-minute rate field, the internal queue handles pacing automatically once the setting is on.
3.  Before running the full migration, run a smaller test batch (for example, around 500 entries) through the same automation.
4.  Monitor the Execution Log during the test batch to confirm executions complete without rate-limit failures, even if individual executions are slow.
5.  Once the test batch completes cleanly, proceed with the full migration using the same throttled configuration.

The full migration completes without triggering rate-limit failures, because **Throttle Execution** paces requests automatically rather than sending them all at the execution’s native (slower) pace in an uncontrolled burst.
