---
title: "[Author Content] - Update Entry Workflow Details in Bulk"
description: "How to update workflow details such as stage, assignee, due date, and comments for multiple entries simultaneously in Contentstack."
url: https://www.contentstack.com/docs/content-managers/author-content/update-entry-workflow-details-in-bulk
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: current
last_updated: 2026-03-25
---

# [Author Content] - Update Entry Workflow Details in Bulk

This page explains how content managers and authors can bulk update workflow details (such as stage, assignee, due date, and comments) for multiple entries at once in Contentstack, and when the bulk update option can be used.

## Update Entry Workflow Details in Bulk

You can update workflow details such as stage, assignee, due date, and comments for multiple entries simultaneously. For example, you can move all entries in the “Ready for Review” stage to the “Review Complete” stage at once.

To bulk update the workflow details for multiple entries, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
- Use the checkboxes to select the entries where you want to update the workflow stage.
- Click the **Change Workflow Details** option in the floating panel that appears. **Additional Resource**: Read more about how Contentstack’s [Search](/docs/content-managers/search-content) functionality supports [changing workflow details of entries in bulk](/docs/content-managers/search-content/change-workflow-details-of-entries-in-bulk).
- In the **Edit Workflow Settings** modal:**Set Workflow Stage**: Under **Workflow Stage**, select the stage to assign to the selected entries.
- **Set Due Date**: Use the date picker tool under **Set Due Date** to assign a due date for this stage.
- **Assign to Users**: Click the **Assign to User(s)** field and select user(s) from the drop-down list.**Tip**: Once an entry stage is assigned to a user, it appears as a new task in their **Tasks** section. Read more about [Tasks](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks).
- **Assign to Roles**: Click the **Assign to Role(s)** field to assign the stage to a role.
- **Send Notifications**: To send a notification email to the assignee, select the **Notify via email** checkbox.
- **Add Comments (Optional)**: Enter comments in the **Add Comment** field.
- **Apply Updates**: Click **Update Workflow** to save changes to the selected entries.

**Note**:
- You can change the workflow stage of multiple entries only if all the entries are assigned the same workflow stage and belong to the same workflow.
- You can update the workflow stage for a maximum of **10 entries** at a time, provided they share the same workflow and workflow stage.
- You can change the workflow stage of up to **10 selected entries** to a common stage. For example, you can move entries in the “Ready for Review” stage to the “Complete” stage at once.

## Common questions

**Q: What workflow details can I update in bulk for entries?**  
A: You can update workflow details such as stage, assignee, due date, and comments for multiple entries simultaneously.

**Q: When can I change the workflow stage of multiple entries?**  
A: You can change the workflow stage of multiple entries only if all the entries are assigned the same workflow stage and belong to the same workflow.

**Q: How many entries can I update at a time?**  
A: You can update the workflow stage for a maximum of **10 entries** at a time, provided they share the same workflow and workflow stage.

**Q: Can I notify assignees when applying bulk workflow updates?**  
A: To send a notification email to the assignee, select the **Notify via email** checkbox.