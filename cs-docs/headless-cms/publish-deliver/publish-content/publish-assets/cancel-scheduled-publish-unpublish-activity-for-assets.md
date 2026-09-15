---
title: "Cancel Scheduled Publish/Unpublish Activity for Assets"
description: "Cancel Scheduled Publish/Unpublish Activity for Assets"
url: /headless-cms/cancel-scheduled-publish-unpublish-activity-for-assets
uid: blt01801308c4993153
---

# Cancel Scheduled Publish/Unpublish Activity for Assets

## Cancel Scheduled Publish/Unpublish Activity for Assets

You can cancel any scheduled publishing or unpublishing activity for a specific asset when you no longer wish to publish or unpublish the asset. Subsequently, you can also remove assets from a release that is scheduled for deployment.

Follow the below steps to cancel a scheduled publish or unpublish action for an asset:

1.  Go to your stack, and click on the “Publish Queue” icon on the left navigation panel. You can also use the shortcut key “alt + P” for Windows OS users, and “option + P” for Mac OS users to access Publish Queue.    
    ![Cancel_sheduled_publish_unpublish_entries_1_no_highlight.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1fbf39028e62691e/6398db2d76819321543df7a8/Cancel_sheduled_publish_unpublish_entries_1_no_highlight.jpg)     
    You can view the list of historical or current publishing or unpublishing activities on screen.
2.  Under **FILTERS**, apply the date range filter to refine the publish queue results based on the specific date on which the asset is scheduled for publishing or unpublishing.![Cancel_sheduled_publish_unpublish_entries_2_no_highlight.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8f2cf6d22261f9a2/6398db66a8100f5f84908324/Cancel_sheduled_publish_unpublish_entries_2_no_highlight.jpg)  


3.  From the refined activity list, click on the **Cancel (x)** icon beside an asset that needs to be removed from the publish queue.  

    **Additional Resource:** Learn how to [cancel scheduled publishing or unpublishing activity for an asset](/docs/developers/apis/content-management-api/publish-queue#cancel-scheduled-action) using Contentstack's [Content Management API](/docs/developers/apis/content-management-api).


**Note:** You need to cancel scheduled publishing activity by performing the above steps for each individual asset in the publish queue.

## Cancel Scheduled Publish/Unpublish Activity Using the Content Management API

To cancel the publishing or unpublishing action for assets using Contentstack’s Content Management API, perform the following steps:

1.  Log in to Contentstack using the [Authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-authtokens-) or use the stack’s [Management Token](/docs/headless-cms/types-of-tokens#management-tokens) to authorize your API requests.
2.  Make a Content Management API request to retrieve details for publishing or unpublishing activities scheduled on or after a specific date. The API request will look as follows:  

    ```
    https://api.contentstack.io/v3/publish-queue?query={"scheduled_at": {"$gte": "scheduled_publishing_date" }}
    ```

    **Note:** You need to pass the scheduled publish/unpublish date and time in the ISO format.

3.  From the publish queue details retrieved in the response body of the previous API request, you can access the publish queue UIDs for each activity that you want to remove from the publishing queue.
4.  Make an API request to cancel the scheduled publishing or unpublishing action using each publish queue UID. The API request will look as follows:  

    ```
    https://api.contentstack.io/v3/publish-queue/{publish_queue_UID}/unschedule
    ```

5.  If you need to cancel scheduled actions for multiple assets, you can write a script and fetch the publish queue details from the response body of the API request mentioned in **Step 2**.

## API Reference

To cancel scheduled publishing or unpublishing activity of an asset via the API, refer the [Cancel Scheduled Action](/docs/developers/apis/content-management-api/publish-queue#cancel-scheduled-action) API request.
