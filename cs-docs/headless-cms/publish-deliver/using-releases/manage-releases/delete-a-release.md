---
title: "Delete a Release"
description: "Learn how to delete releases in Contentstack, including rollback releases, effectively managing your content with step-by-step guidance and API support."
url: /headless-cms/delete-a-release
---

# Delete a Release

## Delete a Release

Deleting release in Contentstack allows you to remove that specific release if no longer required.

**Warning:** Once deleted a release cannot be restored.

To delete a release, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow these steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Releases” icon.
2.  Hover over the release you want to delete in the left panel.
3.  Click the “Delete” icon in the popup modal. Alternatively, click the horizontal ellipsis in the top right corner and click **Delete**.
4.  In the resulting **Delete Release** modal, click the **Delete** button to delete your release.
    
    ![Delete-a-Release.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3add117ce6899c6/67fe44050bdcf170155f6578/Delete-a-Release.gif)
    

## Delete a Rollback Release

Deleting a rollback release removes the system-generated duplicate used to revert a deployment. The original deployed release is not affected. However, rollback for that deployment is no longer available until the release is redeployed.

**Warning:** If you delete a rollback release, you cannot create another rollback release for the original deployed release unless you redeploy that release. Redeploying the original release re-enables rollback creation.

## API Reference

To perform this delete action via API, refer to the [Delete a release](/docs/developers/apis/content-management-api/releases#delete-a-release) API request.
