---
title: "Configuring Secure GRPC OTLP Endpoints for Launch Log Targets"
description: "Configuring Secure GRPC OTLP Endpoints for Launch Log Targets"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/06-performance-network-security-errors/04-configuring-secure-grpc-otlp-endpoints-for-launch-log-targets
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: csc914322c92e50caa
---

# Configuring Secure GRPC OTLP Endpoints for Launch Log Targets

Forwarding logs to an external destination in Launch may fail when the Log Target is incorrectly configured. This prevents accessing consolidated application and edge function logs within your preferred monitoring tool.

**Root Cause**

The Log Target configuration requires a secure GRPC OTLP endpoint to function; using an unsupported protocol or insecure endpoint prevents Launch from successfully forwarding log data.

**Resolution**

1.  Navigate to your Log Target settings in the Launch dashboard.
2.  Verify that the configured Log Target Endpoint is a secure GRPC OTLP endpoint.
3.  Update the endpoint URL and security settings to meet the GRPC OTLP requirements if they do not match.
4.  Check the "Server Logs" tab in the Launch interface to confirm that application logs are being generated internally.
5.  Ensure that your external log management tool is prepared to receive OTLP data from Launch.

After completing the resolution steps, trigger an action that generates logs (such as a site visit or a function execution) and check your external log destination. If both application logs and edge function logs appear in your designated log target, the issue is resolved.
