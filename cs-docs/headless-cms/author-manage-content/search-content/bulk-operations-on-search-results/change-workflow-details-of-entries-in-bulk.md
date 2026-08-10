---
title: "Change Workflow Details of Entries in Bulk"
description: "Update workflow stages in bulk for multiple entries in Contentstack using search, filters, and views."
url: /headless-cms/change-workflow-details-of-entries-in-bulk
---

# Change Workflow Details of Entries in Bulk

## Change Workflow Details of Entries in Bulk

To change the workflow details of multiple entries from your search results, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) and select the “[Entries](https://www.contentstack.com/docs/headless-cms/about-entries)” or “[Assets](https://www.contentstack.com/docs/headless-cms/about-assets)” module.
2.  Perform a search based on your requirements using [Basic Search](/docs/headless-cms/basic-search), [Advanced Search](/docs/headless-cms/advanced-search), [Filters](/docs/headless-cms/use-filters), and [Views](/docs/headless-cms/about-views) to narrow down your search results.
3.  From the search results, select the entries you want to update. Then, click **Change Workflow Details** from the floating bar.![Change Workflow Details of Entries in Bulk_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt017e8907d66adf64/67d96704ef4ce60e22d27e83/1._Bulk_Workflow_Change-Worflow_Icon.png)
4.  On the **Edit Workflow Settings** screen:
    1.  Under **Workflow Stage**, select the stage that you want to set for this entry.
    2.  Set a due date for this new stage by using the **Date Picker** tool.
    3.  You can assign this stage to multiple users by selecting a user from the **Assign to User(s)** dropdown.
        
        **Tip:** When you assign an entry stage to a user, it is added as a new task in the assignee’s **Tasks** section. Learn more about [Tasks](/docs/headless-cms/about-workflow-tasks).
        
    4.  You can also assign the stage to multiple roles by selecting a role from the **Assign to Role(s)** dropdown.
    5.  Send a notification email to the assignee by selecting the **Notify via email** checkbox.
    6.  Use the **Add Comment** field to provide any additional information or instructions.![Change Workflow Details of Entries in Bulk_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt634fb2da15c1d976/67d9670407d0f90bcf5d2540/2._Bulk_Workflow_Change-Edit_Workflow_Modal.png)
5.  Click **Update Workflow** to apply the changes to the selected entries.

**Note:** You can only change the workflow stage of multiple entries if all selected entries are associated with the same workflow and have been assigned the same workflow stage.

## Limitations for Updating Workflow Details in Bulk

-   You can change the workflow stage of up to **10** **entries** at a time, provided they belong to the same workflow and are at the same workflow stage.
-   You can move these entries to a common workflow stage. For example, you can move entries currently in the "Ready for Review" stage to the "Complete" stage.
