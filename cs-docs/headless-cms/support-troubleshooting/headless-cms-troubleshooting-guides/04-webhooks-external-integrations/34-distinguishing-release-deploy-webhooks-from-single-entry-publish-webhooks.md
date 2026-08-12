---
title: "Distinguishing Release Deploy Webhooks from Single Entry Publish Webhooks"
description: "Distinguishing Release Deploy Webhooks from Single Entry Publish Webhooks"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/34-distinguishing-release-deploy-webhooks-from-single-entry-publish-webhooks
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cse9230e6955468f64
---

# Distinguishing Release Deploy Webhooks from Single Entry Publish Webhooks

A customer needs to differentiate between webhook payloads triggered by a release deployment and those triggered by a direct single-entry publish outside of a release. The payload structure appears similar.

**Root Cause**

Contentstack generates distinct webhook event types for release deployments versus individual entry publishes. These events have different structures and identifiers that allow downstream systems to distinguish between them.

**Resolution**

1.  For release deployments, configure the webhook to listen for the Release Deployed event type. The payload for this event includes release-level details (release UID, release name) and an array of all deployed entries.
2.  For individual entry publishes, the webhook payload uses the standard entry publish event type and contains only the single entry’s data.
3.  In the receiving endpoint, check the event type field in the webhook payload header or body to determine whether the event originated from a release or a direct publish.

After configuring the Release Deployed event type in the webhook, deploy a release and confirm the payload includes the release UID and the list of deployed entries, distinguishing it from single-entry publish payloads.
