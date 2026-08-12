---
title: "Resolving Serverless Function Webhook Timeout Errors (ECONNABORTED)"
description: "Resolving Serverless Function Webhook Timeout Errors (ECONNABORTED)"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/10-node-js-frameworks-runtime/04-resolving-serverless-function-webhook-timeout-errors-econnaborted
doc_type: faq
_cms_section_uid: cs0cbe8f9b2482f217
_cms_faq_uid: cs2c167bb95cad876f
---

# Resolving Serverless Function Webhook Timeout Errors (ECONNABORTED)

A webhook configured to trigger a Launch serverless function consistently fails with a timeout error (ECONNABORTED). The webhook logs show that requests are being sent but the function does not return a response within the expected timeframe.

**Root Cause**

Launch serverless function environments may expect a synchronous handler signature. When an async function is used without a synchronous wrapper, the runtime may not correctly await the response, causing the connection to time out before the function completes execution.

**Resolution**

1.  Wrap the async function logic inside a synchronous handler function that the Launch runtime can correctly invoke.
2.  Within the synchronous wrapper, call the async function and ensure the promise resolves before the handler exits, for example by using a callback or by structuring the wrapper to block until resolution.
3.  Test the function locally with a simulated webhook payload to confirm it responds within the expected timeout window.
4.  Redeploy and trigger the webhook again, checking the function logs to confirm a successful response is returned.

The issue is resolved when the webhook receives a successful HTTP response from the Launch function within the timeout threshold and ECONNABORTED errors no longer appear in the webhook logs.
