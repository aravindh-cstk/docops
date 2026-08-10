---
title: "422 Error on Workflow Stage Change Endpoint - Entry Requires Initial Stage First"
description: "422 Error on Workflow Stage Change Endpoint - Entry Requires Initial Stage First"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/19-422-error-on-workflow-stage-change-endpoint-entry-requires-initial-stage-first
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs1df8221ffe0c2df1
---

# 422 Error on Workflow Stage Change Endpoint - Entry Requires Initial Stage First

A CMA request to the workflow stage change endpoint returns a 422 error. The entry exists and the workflow is configured correctly, but the stage transition fails.

**Root Cause**

The /workflow endpoint can only transition an entry between workflow stages if the entry already has an initial workflow stage assigned. If the entry was created without a workflow stage (for example, programmatically via API without setting a stage), it has no current stage and the transition endpoint cannot operate on it.

**Resolution**

1.  First, assign the initial workflow stage to the entry using the Entry Update API (PUT /v3/content\_types/{uid}/entries/{entry\_uid}). Include the workflow stage in the update payload: { "entry": { "\_workflow": { "uid": "<initial\_stage\_uid>" } } }
2.  After the initial stage is set, use the workflow stage change endpoint to perform subsequent transitions.

After setting the initial stage via the Entry Update API, retry the workflow stage change endpoint. If the transition completes without a 422 error, the entry now has a valid starting stage.
