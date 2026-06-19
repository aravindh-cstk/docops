---
title: "[Search Content] - Change Workflow Details of Entries in Bulk"
description: Change the workflow details of multiple entries from search results in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/change-workflow-details-of-entries-in-bulk
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Search Content] - Change Workflow Details of Entries in Bulk

This page explains how to change workflow details for multiple entries at once from search results in Contentstack. It is intended for content managers working with Entries or Assets who need to update workflow stages, assignments, due dates, and notifications in bulk.

## Change Workflow Details of Entries in Bulk

To change the workflow details of multiple entries from your search results, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) and select the “[Entries](https://www.contentstack.com/docs/content-managers/author-content/about-entries)” or “[Assets](https://www.contentstack.com/docs/content-managers/author-content/about-assets)” module.
- Perform a search based on your requirements using [Basic Search](/docs/content-managers/search-content/basic-search), [Advanced Search](/docs/content-managers/search-content/advanced-search), [Filters](/docs/content-managers/search-content/use-filters), and [Views](/docs/content-managers/search-content/about-views) to narrow down your search results.
- From the search results, select the entries you want to update. Then, click **Change Workflow Details** from the floating bar.
- On the **Edit Workflow Settings** screen:Under **Workflow Stage**, select the stage that you want to set for this entry.
- Set a due date for this new stage by using the **Date Picker** tool.
- You can assign this stage to multiple users by selecting a user from the **Assign to User(s)** dropdown.**Tip**: When you assign an entry stage to a user, it is added as a new task in the assignee’s **Tasks** section. Learn more about [Tasks](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks).
- You can also assign the stage to multiple roles by selecting a role from the **Assign to Role(s)** dropdown.
- Send a notification email to the assignee by selecting the **Notify via email** checkbox.
- Use the **Add Comment** field to provide any additional information or instructions.
- Click **Update Workflow** to apply the changes to the selected entries.

**Note**: You can only change the workflow stage of multiple entries if all selected entries are associated with the same workflow and have been assigned the same workflow stage.

## Limitations for Updating Workflow Details in Bulk

- You can change the workflow stage of up to **10** **entries** at a time, provided they belong to the same workflow and are at the same workflow stage.
- You can move these entries to a common workflow stage. For example, you can move entries currently in the "Ready for Review" stage to the "Complete" stage.

## Common questions

**Q: Why is the “Change Workflow Details” option unavailable for my selection?**  
A: You can only change the workflow stage of multiple entries if all selected entries are associated with the same workflow and have been assigned the same workflow stage.

**Q: How many entries can I update at once?**  
A: You can change the workflow stage of up to **10** **entries** at a time, provided they belong to the same workflow and are at the same workflow stage.

**Q: Will assignees be notified when I update workflow details in bulk?**  
A: You can send a notification email to the assignee by selecting the **Notify via email** checkbox.