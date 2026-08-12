---
title: "Vertex AI Connector: Project Selection Fails After Successful Service Account Authorization"
description: "Vertex AI Connector: Project Selection Fails After Successful Service Account Authorization"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/07-vertex-ai-connector-project-selection-fails-after-successful-service-account-authorization
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs9d9181837683edf5
---

# Vertex AI Connector: Project Selection Fails After Successful Service Account Authorization

In an Automation step using the Vertex AI connector, the service account is added and successfully validated through the “Authorize” button, but an error occurs when trying to select a Google Cloud project, blocking further configuration of the step.

**Root Cause**

The service account does not have all of the Google Cloud APIs required for project listing and Vertex AI usage enabled, and/or its IAM role does not include the permission needed to list projects.

**Resolution**

1.  In your Google Cloud project, enable the Cloud Resource Manager API (cloudresourcemanager.googleapis.com), this is required for listing and fetching your Google Cloud projects in the connector UI.
2.  Enable the Vertex AI API (aiplatform.googleapis.com), this is required for sending prompts and using Gemini or function calling on Vertex AI.
3.  If your workflow uses catalog or product operations, also enable the Retail API (retail.googleapis.com); skip this if you are not using commerce features.
4.  Verify that the service account (or connected Google account) has an IAM role of at least Viewer, Browser, or Editor/Owner, or a custom role that includes the resourcemanager.projects.list permission.
5.  Allow time for the API and IAM changes to propagate, then return to the Vertex AI connector step and retry project selection.

After the required APIs and IAM permissions are in place, the connector can list and let you select your Google Cloud project without error.
