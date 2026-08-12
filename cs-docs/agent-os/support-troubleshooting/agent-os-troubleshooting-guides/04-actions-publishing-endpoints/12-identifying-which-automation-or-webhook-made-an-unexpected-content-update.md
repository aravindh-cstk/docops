---
title: "Identifying Which Automation or Webhook Made an Unexpected Content Update"
description: "Identifying Which Automation or Webhook Made an Unexpected Content Update"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/12-identifying-which-automation-or-webhook-made-an-unexpected-content-update
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs7bd0b194f505436f
---

# Identifying Which Automation or Webhook Made an Unexpected Content Update

Entries appear to be updated (new versions created) without any user actively saving or publishing them, and it is unclear which automation or webhook is responsible.

**Root Cause**

Updates performed by an automation or an external script using the Management API are recorded under the relevant automation’s identity (for example, “Syndication Automation”), not under a human user’s name, which can make the change look like it happened at random if you are only checking for manual user activity.

**Resolution**

1.  Go to Agent OS Execution Log in your stack to see which automations ran and at what time.
2.  Cross-reference the timestamps of the unexpected updates with the Execution Log to identify the specific automation responsible.
3.  Check Agent OS Activities in the Audit Log for a detailed view of the actions each automation performed, including which entries were affected.

The Execution Log and Audit Log identify the specific automation (or external script) responsible for the update, resolving the “random” update behavior.
