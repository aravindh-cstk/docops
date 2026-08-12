---
title: "Automation Cannot Be Activated: More Than 10 If-Else Blocks Cause the Automations Page to Crash"
description: "Automation Cannot Be Activated: More Than 10 If-Else Blocks Cause the Automations Page to Crash"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/02-triggers-filters-workflow-logic/06-automation-cannot-be-activated-more-than-10-if-else-blocks-cause-the-automations-page-to-crash
doc_type: faq
_cms_section_uid: csb9fe1273d6bf308c
_cms_faq_uid: cs46967419ed2093db
---

# Automation Cannot Be Activated: More Than 10 If-Else Blocks Cause the Automations Page to Crash

An automation with a large number of If-Else conditional blocks cannot be activated. After opening the Automation page, the UI goes blank after a few seconds, and the browser console shows repeated 429 (Too Many Requests) errors from the Automations API followed by an “Invalid array length” JavaScript error.

**Root Cause**

Agent OS currently supports up to 10 If-Else blocks in a single automation. Configuring more than that (for example, 18 blocks) triggers the UI crash described above when the page attempts to render the automation. Support confirmed the 429 errors in the console were not the actual issue in this case, the block count was the limiting factor, though the source ticket does not establish why the 429 errors appear alongside the crash.

**Resolution**

1.  Count the number of If-Else blocks in the automation that will not activate.
2.  If the count exceeds 10, reduce the number of If-Else blocks, for example, by consolidating conditions or restructuring logic into fewer branches.
3.  If the workflow genuinely requires more than 10 conditional branches, split the logic across multiple automations (using sub-automations or separate triggers) rather than building all branches into a single automation.
4.  Reopen the Automation page after reducing the block count to confirm it loads and the automation can be activated.

With the If-Else block count at or below 10, the Automation page loads normally and the automation activates without the UI crashing.
