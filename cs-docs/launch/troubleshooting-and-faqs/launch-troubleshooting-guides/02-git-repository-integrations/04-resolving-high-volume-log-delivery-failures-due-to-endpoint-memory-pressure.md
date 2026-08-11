---
title: "Resolving High-Volume Log Delivery Failures Due to Endpoint Memory Pressure"
description: "Resolving High-Volume Log Delivery Failures Due to Endpoint Memory Pressure"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/02-git-repository-integrations/04-resolving-high-volume-log-delivery-failures-due-to-endpoint-memory-pressure
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: csbad43355d64e6308
---

# Resolving High-Volume Log Delivery Failures Due to Endpoint Memory Pressure

A configured Log Target endpoint stops accepting logs from Launch, with millions of failed export attempts occurring over a short period. The receiving endpoint reports data being refused due to high memory usage.

**Root Cause**

An unusually high volume of log entries, in this case, caused by debug logging code that had been left active in a production environment—overwhelmed the memory capacity of the receiving log endpoint, causing it to refuse incoming data (commonly surfacing as a gRPC/Protobuf-level rejection).

**Resolution**

1.  Confirm with your Log Target endpoint’s monitoring whether it is experiencing memory pressure or explicitly refusing incoming data due to resource constraints.
2.  Review your application code for any debug or verbose logging that may have been inadvertently left enabled in production, generating excessive log volume.
3.  Remove or significantly reduce the debug logging identified, and deploy the fix to production.
4.  Monitor log volume and delivery success rates over the following hours to confirm the endpoint is no longer rejecting data.
5.  Consider implementing log level controls (e.g., environment-based log verbosity) to prevent debug-level logging from being active in production in the future.

The issue is resolved when log delivery to the configured endpoint resumes successfully and log volume returns to expected levels for production traffic.
