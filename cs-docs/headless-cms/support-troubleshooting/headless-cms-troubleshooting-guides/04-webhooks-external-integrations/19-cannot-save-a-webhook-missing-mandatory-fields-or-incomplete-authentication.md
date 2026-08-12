---
title: "Cannot Save a Webhook - Missing Mandatory Fields or Incomplete Authentication"
description: "Cannot Save a Webhook - Missing Mandatory Fields or Incomplete Authentication"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/19-cannot-save-a-webhook-missing-mandatory-fields-or-incomplete-authentication
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csfd24d9cfd6cf476f
---

# Cannot Save a Webhook - Missing Mandatory Fields or Incomplete Authentication

Clicking Save in the webhook configuration UI does nothing. No confirmation is shown and no error message appears. The webhook cannot be created or updated.

**Root Cause**

The most common cause is incomplete or invalid authentication configuration. If Basic Auth is selected as the authentication method but valid credentials are not provided, or if another authentication method is selected without completing its required fields, the webhook form prevents saving without surfacing an obvious error message.

**Resolution**

1.  Review all fields in the webhook configuration for completeness, paying particular attention to the Authentication Method section.
2.  If Basic Auth is selected, ensure both the username and password fields are populated with valid values.
3.  If no authentication is needed, change the Authentication Method to None.
4.  Check that the notification URL is correctly formatted and begins with https://.
5.  After completing all required fields, attempt to save again.

After correcting the authentication configuration, attempt to save the webhook. If the save succeeds and a confirmation is shown, the required fields are now complete.
