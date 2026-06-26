---
title: "[Publish Content] - Cancel Scheduled Publish/Unpublish Activity for Assets"
description: Cancel scheduled publishing or unpublishing activity for assets via the Publish Queue or using the Content Management API.
url: https://www.contentstack.com/docs/headless-cms/cancel-scheduled-publish-unpublish-activity-for-assets
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Publish Content] - Cancel Scheduled Publish/Unpublish Activity for Assets

This page explains how to cancel scheduled publishing or unpublishing actions for assets in Contentstack, either from the Publish Queue UI or via the Content Management API. Content managers should use this when they need to stop a scheduled publish/unpublish, and developers should use the API steps for automation or bulk operations.

## Cancel Scheduled Publish/Unpublish Activity for Assets

You can cancel any scheduled publishing or unpublishing activity for a specific asset when you no longer wish to publish or unpublish the asset. Subsequently, you can also remove assets from a release that is scheduled for deployment.

Follow the below steps to cancel a scheduled publish or unpublish action for an asset:
- Go to your stack, and click on the “Publish Queue” icon on the left navigation panel. You can also use the shortcut key “alt + P” for Windows OS users, and “option + P” for Mac OS users to access Publish Queue.

You can view the list of historical or current publishing or unpublishing activities on screen.
- Under **FILTERS**, apply the date range filter to refine the publish queue results based on the specific date on which the asset is scheduled for publishing or unpublishing.
- From the refined activity list, click on the **Cancel (x)** icon beside an asset that needs to be removed from the publish queue.  
**Additional Resource**: Learn how to [cancel scheduled publishing or unpublishing activity for an asset](../../../api-docs/api-detail/content-management-api.md#cancel-scheduled-action) using Contentstack's [Content Management API](../../../api-docs/api-detail/content-management-api.md).

**Note**: You need to cancel scheduled publishing activity by performing the above steps for each individual asset in the publish queue.

## Cancel Scheduled Publish/Unpublish Activity Using the Content Management API

To cancel the publishing or unpublishing action for assets using Contentstack’s Content Management API, perform the following steps:
- Log in to Contentstack using the [Authtoken](../../developers/create-tokens/types-of-tokens.md#authentication-tokens-authtokens-) or use the stack’s [Management Token](../../developers/create-tokens/types-of-tokens.md#management-tokens) to authorize your API requests.
- Make a Content Management API request to retrieve details for publishing or unpublishing activities scheduled on or after a specific date. The API request will look as follows:

```
https://api.contentstack.io/v3/publish-queue?query={"scheduled_at": {"$gte": "scheduled_publishing_date" }}
```

**Note:** You need to pass the scheduled publish/unpublish date and time in the ISO format.
- From the publish queue details retrieved in the response body of the previous API request, you can access the publish queue UIDs for each activity that you want to remove from the publishing queue.
- Make an API request to cancel the scheduled publishing or unpublishing action using each publish queue UID. The API request will look as follows:

```
https://api.contentstack.io/v3/publish-queue/{publish_queue_UID}/unschedule
```

- If you need to cancel scheduled actions for multiple assets, you can write a script and fetch the publish queue details from the response body of the API request mentioned in **Step 2**.

## API Reference

To cancel scheduled publishing or unpublishing activity of an asset via the API, refer the [Cancel Scheduled Action](../../../api-docs/api-detail/content-management-api.md#cancel-scheduled-action) API request.

## Common questions

### Can I cancel scheduled publish/unpublish actions for multiple assets at once in the UI?
No. **Note**: You need to cancel scheduled publishing activity by performing the above steps for each individual asset in the publish queue.

### What date/time format is required when querying scheduled actions via the API?
**Note:** You need to pass the scheduled publish/unpublish date and time in the ISO format.

### Which API endpoint cancels a scheduled publish/unpublish action?
```
https://api.contentstack.io/v3/publish-queue/{publish_queue_UID}/unschedule
```

### Where do I find the publish queue UID needed to unschedule an action?
From the publish queue details retrieved in the response body of the request:
```
https://api.contentstack.io/v3/publish-queue?query={"scheduled_at": {"$gte": "scheduled_publishing_date" }}
```