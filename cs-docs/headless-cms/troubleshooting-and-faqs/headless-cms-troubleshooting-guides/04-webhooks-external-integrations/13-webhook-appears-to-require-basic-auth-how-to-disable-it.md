---
title: "Webhook Appears to Require Basic Auth - How to Disable It"
description: "Webhook Appears to Require Basic Auth - How to Disable It"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/13-webhook-appears-to-require-basic-auth-how-to-disable-it
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs5c48e9f13dc9270f
---

# Webhook Appears to Require Basic Auth - How to Disable It

After a webhook configuration change, webhooks appear to require Basic Auth credentials, causing delivery failures for endpoints that do not use authentication. The expectation is that authentication is optional.

**Root Cause**

Basic Auth (and other authentication methods) in Contentstack webhook configuration are optional. If Basic Auth is selected and credentials are partially entered or left blank, the webhook save may fail or the auth method may appear required. This confusion arises from the UI presenting authentication fields when Basic Auth is selected.

**Resolution**

1.  Open the webhook configuration in the Contentstack dashboard.
2.  Navigate to the Authentication Method section.
3.  Select None to disable authentication entirely.
4.  Save the webhook configuration.

After setting Authentication Method to None and saving, trigger a test webhook and confirm delivery succeeds without any authentication header being required by the endpoint.
