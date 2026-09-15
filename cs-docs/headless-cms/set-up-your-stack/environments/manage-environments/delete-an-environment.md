---
title: "Delete an Environment"
description: "Learn to delete an Environment in Contentstack via UI or API request."
url: /headless-cms/delete-an-environment
uid: blt80f56c3d8f248b40
---

# Delete an Environment

## Delete an Environment

Deleting an environment allows you to remove unnecessary or outdated environments, streamline workflows, and simplify content deployment.

**Note:** Only the stack [Admin](/docs/headless-cms/types-of-roles#admin) and [Developer](/docs/headless-cms/types-of-roles#developer) can delete an environment.

To delete an [environment](/docs/headless-cms/about-environments), log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2.  Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
3.  Click the vertical ellipsis icon next to an environment in the **Actions** menu and select **Delete**.
4.  Click **Delete** to confirm your action.

    ![Confirmation prompt for deleting an environment](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd748a7f3152531d0/67dd5c4abbf93e4c9b586b9e/2-Delete-an-Environment-gif.gif)


**Warning:** Once you delete an Environment, it is permanently removed from your stack, and its associated [delivery tokens](/docs/headless-cms/about-delivery-tokens) become invalid.

## API Reference

To delete an environment via API, refer to the [Delete an Environment](/docs/developers/apis/content-management-api/environment#delete-environment) request.
