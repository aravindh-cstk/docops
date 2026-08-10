---
title: "Exporting Webhook Execution Logs - No Native S3 Integration"
description: "Exporting Webhook Execution Logs - No Native S3 Integration"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/53-exporting-webhook-execution-logs-no-native-s3-integration
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs4a79ead5834298ab
---

# Exporting Webhook Execution Logs - No Native S3 Integration

A customer wants to export webhook execution logs and audit logs to an S3 bucket for long-term storage and monitoring. They ask whether Contentstack provides an S3 destination or similar log export capability.

**Root Cause**

Contentstack does not currently provide a native integration to export webhook execution logs or audit logs directly to an external storage destination such as Amazon S3, Google Cloud Storage, or Azure Blob Storage. Log export is not available as a built-in platform feature.

**Resolution**

1.  Use the Contentstack webhook execution logs API to programmatically retrieve logs. The API returns a list of webhook execution records including event type, payload, response code, timestamp, and delivery status.
2.  Schedule a periodic job (AWS Lambda, cron, or similar) to call the logs API and write the results to S3 or your preferred log storage.
3.  For audit logs specifically, use the Contentstack Audit Log API: GET /v3/audit-logs - this returns organization-level activity records that can be periodically exported.
4.  If real-time log streaming is required, configure your webhook receiver to log all inbound webhook payloads to your preferred observability platform (Datadog, Splunk, CloudWatch) as they arrive, rather than relying on Contentstack’s log export.

After setting up a scheduled log export script, confirm that webhook execution records are correctly written to S3 with the required fields and that the script handles pagination for large log volumes.
