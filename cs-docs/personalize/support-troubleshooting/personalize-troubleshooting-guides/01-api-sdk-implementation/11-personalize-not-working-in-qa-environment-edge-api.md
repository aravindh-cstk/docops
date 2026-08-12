---
title: "Personalize Not Working in QA Environment (Edge API)"
description: "Personalize Not Working in QA Environment (Edge API)"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/01-api-sdk-implementation/11-personalize-not-working-in-qa-environment-edge-api
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs71fb405d406eec49
---

# Personalize Not Working in QA Environment (Edge API)

Personalization appears to function correctly in a local development environment but fails in a QA application environment. The /manifest endpoint returns unexpected results or variants are not applied as expected.

**Root Cause**

The Personalize /manifest endpoint is publicly accessible and does not require IP allowlisting. If personalization works locally but not in QA, the issue is typically caused by a misconfiguration in the QA application setup rather than a platform restriction.

**Resolution**

1.  Confirm that the QA environment URL is correctly configured and accessible. An unreachable QA endpoint will prevent the Personalize SDK from operating.
2.  Verify there is no IP allowlisting or firewall rule in the QA environment that would block outbound requests to Personalize endpoints.
3.  Check whether the Personalize SDK initialization code in the QA environment is identical to the working local configuration. Ensure environment variables such as the Project UID are correctly set for QA.
4.  Review Cloudflare or CDN security event logs to confirm no rules are blocking network calls from the QA environment.
5.  Isolate the issue by making a direct cURL request to the /manifest endpoint from the QA environment and inspecting the response.

If a direct cURL request to /manifest returns the correct response from the QA environment, the issue is in the application-level setup rather than the platform. Review SDK initialization order and environment configuration.
