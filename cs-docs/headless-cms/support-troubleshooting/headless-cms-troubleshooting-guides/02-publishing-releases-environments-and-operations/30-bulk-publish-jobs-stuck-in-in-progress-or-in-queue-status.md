---
title: "Bulk Publish Jobs Stuck in ‘In Progress’ or ‘In Queue’ Status"
description: "Bulk Publish Jobs Stuck in ‘In Progress’ or ‘In Queue’ Status"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/30-bulk-publish-jobs-stuck-in-in-progress-or-in-queue-status
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs96e10236db78e488
---

# Bulk Publish Jobs Stuck in ‘In Progress’ or ‘In Queue’ Status

This article covers two related but distinct causes of bulk publish jobs appearing stuck in ‘In Progress’ or ‘In Queue’ status.

**Scenario A - Status Tracking Bug (Entries Actually Published)**

Bulk publish jobs initiated via the API with publish\_all\_localized=true appear stuck in ‘In Progress’ or ‘In Queue’ status indefinitely. Entries are actually published successfully in the background, but the job status never updates to ‘Complete’ in the UI or API.

**Root Cause**

This is a platform-level bug in the job status tracking for bulk publish operations with the publish\_all\_localized=true parameter. The background publish process completes successfully, but the job management layer fails to update the status to reflect completion. This makes it impossible to programmatically confirm success or failure from the job status API.

**Resolution**

1.  Verify that entries are actually published by querying the CDA for the affected entries and checking their published status directly, rather than relying on the job status.
2.  Contact Contentstack Support and provide the stuck job IDs. Engineering can investigate and apply a fix to the job status tracking system.
3.  As a workaround for job monitoring, implement a post-job verification step that checks the publish status of a sample of entries via the CDA rather than relying on the job status endpoint.

After the platform fix is applied, confirm that new bulk publish jobs with publish\_all\_localized=true show ‘Complete’ status correctly in the UI and API.

**Scenario B - Job Stuck with No Cancel Option (Processing Error, Not Status-Tracking)**

A bulk publish job has been in ‘In-Progress’ for an extended period with no UI Cancel option, and - unlike Scenario A - the underlying publish itself has not completed.

**Root Cause**

Bulk publish jobs can become stuck when the processing service encounters an error that leaves the job in a partial state without transitioning to ‘failed’. The Cancel option only appears for actively queued jobs.

**Resolution**

1.  Use the Retry Jobs API to attempt to clear or retry the stuck job: POST /v3/bulk/jobs/{job\_id}/retry.
2.  If the Retry API does not resolve the state, contact Contentstack Support with the stuck job ID and stack API key. Engineering can force-transition the job to a failed state.
3.  After the job state is cleared, retry the bulk publish operation.

After clearing the stuck job, confirm new bulk publish operations complete correctly.
