---
title: "Job-Based Publish/Unpublish Webhooks"
description: "Discover how job-based webhooks summarize bulk publish/unpublish tasks, reducing notifications with key job outcomes for efficient post-processing."
url: /headless-cms/job-based-publish-unpublish-webhooks
---

# Job-Based Publish/Unpublish Webhooks

## Job-Based Publish/Unpublish Webhooks

Job-based webhook events trigger when bulk publish/unpublish operations complete. These are typically used when you need a single webhook notification summarizing the outcome of a job, rather than one webhook notification per entry or asset.

## Event Types

<table><tbody><tr><td><strong>Event Name</strong></td><td><strong>Description</strong></td></tr><tr><td>jobs.environments.publish.completed</td><td>Triggered when a bulk publish job completes in any environment</td></tr><tr><td>jobs.environments.unpublish.completed</td><td>Triggered when a bulk unpublish job completes in any environment</td></tr><tr><td>jobs.environments.{environment_name}.publish.completed</td><td>Triggered when a bulk publish job completes in a specific environment</td></tr><tr><td>jobs.environments.{environment_name}.unpublish.completed</td><td>Triggered when a bulk unpublish job completes in a specific environment</td></tr></tbody></table>

## Entry or Asset-Based vs. Job-Based Webhooks

<table><tbody><tr><td><strong>Differentiating Factor</strong></td><td><strong>Entry-/Asset-based Webhooks</strong></td><td><strong>Job-based Webhooks</strong></td></tr><tr><td><strong>Trigger Condition</strong></td><td>Per entry/asset action</td><td>Per job completion</td></tr><tr><td><strong>Bulk Publish/Unpublish of N Items</strong></td><td>Webhook triggered N times</td><td>Webhook triggered once</td></tr><tr><td><strong>Single Item Publish/Unpublish</strong></td><td>Webhook triggered once</td><td>Webhook triggered once</td></tr><tr><td><strong>Payload Content</strong></td><td>Full entry/asset details</td><td>Summary (job ID, status counts)</td></tr><tr><td><strong>Use Cases</strong></td><td>Per-item tracking</td><td>Summary-based cache updates</td></tr></tbody></table>

## Using Job-based Webhooks to Retrieve Entries/Assets

Job-based webhooks are especially useful for post-processing bulk operations. You can use the job\_id from the webhook payload to retrieve the list of items involved.

Follow the steps below to retrieve entry/asset information via job\_id:

1.  In the payload for job-based webhooks, you receive a job\_id similar to the following:
    
    ```
    {
      ...
      "job_id": "00906443-2ba3-420e-a3bd-2b6b4cd7c5745"
    }
    ```
    
2.  Use this job\_id in the [Get job items status](/docs/developers/apis/content-management-api/job-status#get-job-items-status) API request to retrieve a list of entries and assets that were published or unpublished as part of the job.
3.  Use the [Get a single entry](/docs/developers/apis/content-delivery-api/entries#single-entry) or [Get a single asset](/docs/developers/apis/content-delivery-api/assets#single-asset) APIs to further fetch the complete details.

These steps help you retrieve full metadata and content for assets/entries within a job-based webhook.
