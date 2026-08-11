---
title: "Errors while Running Elasticsearch Adapters in Launch"
description: "Errors while Running Elasticsearch Adapters in Launch"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/05-edge-functions-frameworks/04-errors-while-running-elasticsearch-adapters-in-launch
doc_type: faq
_cms_section_uid: csdb00c5f9828f74b1
_cms_faq_uid: csb256f5fb75cf08d0
---

# Errors while Running Elasticsearch Adapters in Launch

Deploying an Elasticsearch adapter via a webhook in Launch can result in 404 errors. While converting the adapter to an Edge Function may provide an immediate workaround, it introduces potential stability concerns due to runtime compatibility requirements.

**Root Cause**

Launch Edge Functions require code to be WinterCG-compliant. Some adapters or third-party libraries may not fully support this standard, leading to unexpected behavior or limited functionality during execution.

**Resolution**

1.  Use Launch Cloud Functions instead of Edge Functions for adapters that require a more robust Node.js environment or lack WinterCG compliance.
2.  Alternatively, implement a dedicated route within your application framework to handle the adapter's logic directly.
3.  Ensure that any code run within an Edge Function environment is verified for compatibility with the WinterCG standard.

Trigger the webhook or adapter logic and verify the response status. The issue is resolved when the 404 error is replaced by a successful data exchange and the function executes successfully in the logs.
