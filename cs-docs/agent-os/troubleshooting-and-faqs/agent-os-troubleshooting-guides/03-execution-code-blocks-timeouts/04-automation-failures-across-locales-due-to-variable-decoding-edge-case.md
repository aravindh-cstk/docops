---
title: "Automation Failures Across Locales Due to Variable-Decoding Edge Case"
description: "Automation Failures Across Locales Due to Variable-Decoding Edge Case"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/04-automation-failures-across-locales-due-to-variable-decoding-edge-case
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: csfb906e75f27a696c
---

# Automation Failures Across Locales Due to Variable-Decoding Edge Case

Automations may fail repeatedly across multiple locales while showing limited troubleshooting detail in the UI, impacting downstream systems (e.g., search indexing).

**Root Cause** Backend edge case related to decoding variables when incorrect variable references are used in action configurations.

**Resolution**

1.  Escalate with run IDs and failure timestamps.
2.  Engineering applies platform fix for decoding edge cases.
3.  Retest the same automation run.

Runs complete successfully and no longer fail due to variable decoding.
