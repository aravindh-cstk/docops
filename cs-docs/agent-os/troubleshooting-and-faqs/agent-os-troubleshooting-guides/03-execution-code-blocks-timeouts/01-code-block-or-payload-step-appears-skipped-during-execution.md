---
title: "Code Block or Payload Step Appears Skipped During Execution"
description: "Code Block or Payload Step Appears Skipped During Execution"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/01-code-block-or-payload-step-appears-skipped-during-execution
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs9bc12c9e569afffe
---

# Code Block or Payload Step Appears Skipped During Execution

Automations containing Code Block steps may appear to skip execution or fail to process logic during a run. This often results in downstream actions failing due to missing data from the skipped step.

**Root Cause** CodeBlock executions are tracked as a diff count per organization. Once the org's allotted limit is reached, code blocks may be bypassed during workflow execution, resulting in missing fields or incomplete transformations for downstream steps.

**Resolution**

1.  Confirm whether the org has hit its CodeBlock execution (diff count) limit by checking usage in **SuperAdmin**.
2.  If the limit has been reached, it can be **increased or decreased per org** via SuperAdmin settings.
3.  Adjust the limit to an appropriate value based on the org's workflow requirements.
4.  Ask the user to retest the affected workflow after the limit has been updated.

Run History shows the code block executing successfully and producing structured output used by downstream steps, with no further skipped steps.
