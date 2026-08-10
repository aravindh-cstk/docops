---
title: "Users Receiving Unexpected Publish Approval Emails"
description: "Users Receiving Unexpected Publish Approval Emails"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/39-users-receiving-unexpected-publish-approval-emails
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs3dfb08a351cd6e6b
---

# Users Receiving Unexpected Publish Approval Emails

A user receives an email requesting them to grant permission or approve a publish action, but the email was not intended for them. They want to understand why they are receiving these notifications.

**Root Cause**

Publish approval emails are sent to all users listed as approvers in the publish rule for the relevant content type and environment. If a user’s email was added to the approvers list - intentionally or by mistake - they will receive approval request emails for every publish action that triggers that rule, even if they are not actively involved in the workflow.

**Resolution**

1.  Contact the stack Owner or Admin and ask them to review the publish rule configuration in Settings > Workflows.
2.  Locate the publish rule sending the approval emails and review the list of configured approvers.
3.  Remove any incorrectly added email addresses from the approvers list.
4.  Save the updated publish rule.

After updating the approvers list, confirm the affected user no longer receives publish approval emails for that rule.
