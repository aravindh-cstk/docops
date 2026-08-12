---
title: "Workflow Status Per Entry Version Not Available via API"
description: "Workflow Status Per Entry Version Not Available via API"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/16-workflow-status-per-entry-version-not-available-via-api
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs8324a51487da2cc6
---

# Workflow Status Per Entry Version Not Available via API

A customer wants to retrieve the complete version history of an entry along with the workflow status for each version. No API endpoint appears to provide this combination of data.

**Root Cause**

Contentstack does not provide workflow status per individual version through the API. The API returns the current workflow stage of the entry, not a history of stages across versions. This data is not natively persisted in a queryable per-version format.

**Resolution**

The following workarounds can be used to build a workflow history:

1.  Use the Audit Log API (GET /v3/audit-logs) to retrieve workflow stage change events, which include the user, timestamp, and new stage for each change. Cross-reference with version numbers to reconstruct a workflow history.
2.  Configure a webhook to fire on workflow stage change events. Capture and store the payload (which includes entry UID, version, and new stage) in an external system to build a persistent per-version workflow history.
3.  For ongoing tracking, log workflow status at the point of each version update in the external system.

After setting up the webhook listener or integrating the Audit Log API, validate that workflow stage change events are correctly captured and linked to the corresponding entry version.
