---
title: "Delete a Publish Rule"
description: "Learn to delete Contentstack publish rules to maintain content governance by editing approval conditions, workflows, and policy settings."
url: /headless-cms/delete-a-publish-rule
---

# Delete a Publish Rule

## Delete a Publish Rule

Deleting a [publish rule](/docs/headless-cms/about-publish-rules) removes outdated configurations such as those tied to deprecated [branches](/docs/headless-cms/about-branches), [environments](/docs/headless-cms/about-environments), [content types](/docs/headless-cms/about-content-types), or [languages](/docs/headless-cms/about-languages). This streamlines the workflow and reduces complexity.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), or [developer](/docs/headless-cms/types-of-roles#developer) can delete a publish rule.

To delete a Publish Rule, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon in the left navigation panel, or press the shortcut key “S” (on both Windows and macOS).
2.  In the left panel, select [**Workflows**](/docs/headless-cms/about-workflow-stages) and go to the **Publish Rules** tab.
3.  Click the vertical ellipsis icon in the **Actions** column of the desired publish rule and select **Delete**. Alternatively, open the publish rule and click **Delete** at the bottom of the page.
    
    ![Delete option in Publish Rule actions menu](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt695573b630f8eaaa/682b33666a59be08c6dd4a85/1._Delete_option_Navigation.png)
    
4.  In the **Confirmation** modal that appears, click **Delete**.
    
    ![Confirmation modal for deleting a Publish Rule](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteeb822d9e8e0650f/682b3366a4165a65c3adec1b/2._confirmation_popup.png)
    

**Warning:** Deleting a publish rule removes the associated constraints on content within the stack. This action is permanent and cannot be undone.

## API Reference

To delete a publish rule via API, refer to the [Delete Publish Rules](/docs/developers/apis/content-management-api/workflows#delete-publish-rules) API request.
