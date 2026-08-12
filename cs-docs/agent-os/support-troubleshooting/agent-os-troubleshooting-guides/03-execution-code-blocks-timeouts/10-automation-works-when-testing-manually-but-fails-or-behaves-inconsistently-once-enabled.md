---
title: "Automation Works When Testing Manually, but Fails or Behaves Inconsistently Once Enabled"
description: "Automation Works When Testing Manually, but Fails or Behaves Inconsistently Once Enabled"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/10-automation-works-when-testing-manually-but-fails-or-behaves-inconsistently-once-enabled
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs16c6db0de1ecc9f6
---

# Automation Works When Testing Manually, but Fails or Behaves Inconsistently Once Enabled

An automation runs correctly every time it is triggered manually through Test, but once enabled for live use, executions are inconsistent: some expected branches never run, entries appear to be skipped, or bulk operations that use the automation start failing.

**Root Cause**

Live triggers (such as publish) can fire far more frequently and in bigger bursts than manual test runs, especially during bulk operations. This drives requests past the CMA write-request limit (20 requests per second), producing 429 “Rate limit exceeded” errors, and a single publish or entry change can fan out into multiple triggers running in parallel, which increases the chance of hitting that ceiling and causing inconsistent branch execution under load.

**Resolution**

1.  For bulk operations (e.g., publishing many entries at once), trigger the automation off a job rather than off each individual entry or reference, so it does not execute once per entry.
2.  Add **Wait** steps between API-heavy steps in the automation to spread out requests instead of firing them in a tight burst.
3.  Enable **Throttle Execution** in the Agent OS settings for the automation; this paces requests automatically through an internal queue rather than requiring a manual per-second value.
4.  Review the Execution Logs for the automation and filter for 429 errors to confirm rate limiting is the cause of the inconsistent behavior.
5.  Narrow the publish queue or trigger filters so the automation only fires on the specific entry types or events it needs to handle, reducing unnecessary trigger volume.
6.  After making these changes, re-run the live workflow and review one full execution log to confirm the branches you expect to run are all completed.

With a job-based trigger, throttling, and **Wait** steps in place, the automation completes its expected branches consistently under live load, and the Execution Logs no longer show 429 errors for the affected automation.
