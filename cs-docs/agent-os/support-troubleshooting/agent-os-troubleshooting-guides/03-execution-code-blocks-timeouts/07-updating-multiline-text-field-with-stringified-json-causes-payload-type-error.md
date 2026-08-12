---
title: "Updating Multiline Text Field With Stringified JSON Causes Payload Type Error"
description: "Updating Multiline Text Field With Stringified JSON Causes Payload Type Error"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/07-updating-multiline-text-field-with-stringified-json-causes-payload-type-error
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs95020a7dbbf73d2b
---

# Updating Multiline Text Field With Stringified JSON Causes Payload Type Error

When an automation attempts to store JSON inside a multiline text field by injecting a stringified JSON variable, the update action may fail because the platform interprets the injected content as an object instead of a string.

**Root Cause** Variable injection and JSON rendering in automation payloads can cause a “stringified JSON” to be treated as a JSON object unless explicitly escaped.

**Resolution**

1.  In the script/code step, apply **double serialization**:

-   JSON.stringify(JSON.stringify(obj))

3.  Confirm the resulting payload includes proper quoting when embedded in outer JSON.
4.  Retest the Update Entry action.

Entry updates successfully, and the multiline text field contains the intended JSON string (not a parsed object).
