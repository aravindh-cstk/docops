---
title: "Update Entry Workflow Details in Bulk"
description: "Learn how to update entry workflow details in bulk in Contentstack."
url: /headless-cms/update-entry-workflow-details-in-bulk
---

# Update Entry Workflow Details in Bulk

## Update Entry Workflow Details in Bulk

You can update workflow details such as stage, assignee, due date, and comments for multiple entries simultaneously. For example, you can move all entries in the “Ready for Review” stage to the “Review Complete” stage at once.

To bulk update the workflow details for multiple entries, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
2.  Use the checkboxes to select the entries where you want to update the workflow stage.
3.  Click the **Change Workflow Details** option in the floating panel that appears. ![Bulk_Entry_WF_Details_Change_WF.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0740fcd6cfabf193/677cb94066c78767ddba10fb/Bulk_Entry_WF_Details_Change_WF.png)
    
    **Additional Resource:** Read more about how Contentstack’s [Search](/docs/headless-cms/about-search) functionality supports [changing workflow details of entries in bulk](/docs/headless-cms/change-workflow-details-of-entries-in-bulk).
    
4.  In the **Edit Workflow Settings** modal:
    
    1.  **Set Workflow Stage**: Under **Workflow Stage**, select the stage to assign to the selected entries.
    2.  **Set Due Date**: Use the date picker tool under **Set Due Date** to assign a due date for this stage.
    3.  **Assign to Users**: Click the **Assign to User(s)** field and select user(s) from the drop-down list.
        
        **Tip:** Once an entry stage is assigned to a user, it appears as a new task in their **Tasks** section. Read more about [Tasks](/docs/headless-cms/about-workflow-tasks).
        
    4.  **Assign to Roles**: Click the **Assign to Role(s)** field to assign the stage to a role.
    5.  **Send Notifications**: To send a notification email to the assignee, select the **Notify via email** checkbox.
    6.  **Add Comments (Optional)**: Enter comments in the **Add Comment** field.
    7.  **Apply Updates**: Click **Update Workflow** to save changes to the selected entries.
    
    ![Bulk_Entry_WF_Details_Change_WF_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte55b7e901dff438e/677cb9401cd05f37cf4ae2d8/Bulk_Entry_WF_Details_Change_WF_Modal.png)

**Note**:

-   You can change the workflow stage of multiple entries only if all the entries are assigned the same workflow stage and belong to the same workflow.
-   You can update the workflow stage for a maximum of **10 entries** at a time, provided they share the same workflow and workflow stage.
-   You can change the workflow stage of up to **10 selected entries** to a common stage. For example, you can move entries in the “Ready for Review” stage to the “Complete” stage at once.
