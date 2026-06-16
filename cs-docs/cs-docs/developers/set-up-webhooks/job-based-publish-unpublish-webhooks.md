---
title: "[Set Up Your Project] - Job-Based Publish/Unpublish Webhooks"
description: Job-based webhook events trigger when bulk publish/unpublish operations complete.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/job-based-publish-unpublish-webhooks
product: Set Up Your Project
doc_type: webhook-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - Job-Based Publish/Unpublish Webhooks

This page explains job-based publish/unpublish webhook events, how they differ from entry/asset-based webhooks, and how to use the `job_id` in webhook payloads to retrieve the entries/assets affected by a bulk operation. It is intended for developers implementing webhook-driven workflows for bulk publishing or unpublishing.

## Job-Based Publish/Unpublish Webhooks

Job-based webhook events trigger when bulk publish/unpublish operations complete. These are typically used when you need a single webhook notification summarizing the outcome of a job, rather than one webhook notification per entry or asset.

## Event Types

| **Event Name** | **Description** |
|---|---|
| jobs.environments.publish.completed | Triggered when a bulk publish job completes in any environment |
| jobs.environments.unpublish.completed | Triggered when a bulk unpublish job completes in any environment |
| jobs.environments.{environment_name}.publish.completed | Triggered when a bulk publish job completes in a specific environment |
| jobs.environments.{environment_name}.unpublish.completed | Triggered when a bulk unpublish job completes in a specific environment |

## Entry or Asset-Based vs. Job-Based Webhooks

| **Differentiating Factor** | **Entry-/Asset-based Webhooks** | **Job-based Webhooks** |
|---|---|---|
| **Trigger Condition** | Per entry/asset action | Per job completion |
| **Bulk Publish/Unpublish of N Items** | Webhook triggered N times | Webhook triggered once |
| **Single Item Publish/Unpublish** | Webhook triggered once | Webhook triggered once |
| **Payload Content** | Full entry/asset details | Summary (job ID, status counts) |
| **Use Cases** | Per-item tracking | Summary-based cache updates |

## Using Job-based Webhooks to Retrieve Entries/Assets

Job-based webhooks are especially useful for post-processing bulk operations. You can use the `job_id` from the webhook payload to retrieve the list of items involved.

Follow the steps below to retrieve entry/asset information via `job_id`:
- In the payload for job-based webhooks, you receive a `job_id` similar to the following:
```
{
  ...
  "job_id": "00906443-2ba3-420e-a3bd-2b6b4cd7c5745"
}
```
- Use this `job_id` in the [Get job items status](/docs/developers/apis/content-management-api#get-job-items-status) API request to retrieve a list of entries and assets that were published or unpublished as part of the job.
- Use the [Get a single entry](/docs/developers/apis/content-delivery-api#get-a-single-entry) or [Get a single asset](/docs/developers/apis/content-delivery-api#get-a-single-asset) APIs to further fetch the complete details.

These steps help you retrieve full metadata and content for assets/entries within a job-based webhook.

## Common questions

### When should I use job-based webhooks instead of entry/asset-based webhooks?
Use job-based webhooks when you want a single notification after a bulk publish/unpublish job completes, rather than receiving one webhook per entry or asset.

### What information do job-based webhook payloads include?
Job-based webhook payloads include a summary such as the job ID and status counts, rather than full entry/asset details.

### How do I find which entries/assets were affected by a job-based webhook?
Use the `job_id` from the webhook payload with the [Get job items status](/docs/developers/apis/content-management-api#get-job-items-status) API request to retrieve the list of items involved.

### How do I fetch full details for an entry or asset from a job?
Use the [Get a single entry](/docs/developers/apis/content-delivery-api#get-a-single-entry) or [Get a single asset](/docs/developers/apis/content-delivery-api#get-a-single-asset) APIs to fetch complete details.