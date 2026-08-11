---
title: "Transfer Ownership of an Automation Project"
description: "Transfer Ownership of an Automation Project"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/06-transfer-ownership-of-an-automation-project
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: cs4ac6bc580fce8d20
---

# Transfer Ownership of an Automation Project

Customer requests to transfer Automation project ownership to another user for governance or access continuity.

**Root Cause** Direct ownership transfer is not supported.

**Resolution**

1.  Export automations from the existing project (requires org admin).
2.  Create a new Automation project under the target owner account.
3.  Import the exported automation(s) into the new project.
4.  Validate connections and credentials.

Automation runs under the new project and is administered by the intended owner.
