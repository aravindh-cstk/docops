---
title: "Bulk Workflow UpdateAsync"
description: "The updateAsync method updates an existing workflow with the specified configuration details"
url: "https://www.contentstack.com/dotnet-management-bulk-operations-bulk-workflow-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Bulk Workflow UpdateAsync

The `updateAsync` method updates an existing workflow with the specified configuration details

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | BulkWorkflowUpdateBody | No | — | Data containing the entries and assets to be added. |

Returns:
Type
Task<ContentstackResponse>

**Example:**

```
var updateBody = new BulkWorkflowUpdateBody
{
    Entries = new List<BulkWorkflowEntry>
    {
        new BulkWorkflowEntry
        {
            Uid = "entry_uid",
            ContentType = "content_type_uid",
            Locale = "en-us"
        }
    },
    Workflow = new BulkWorkflowStage
    {
        Uid = "workflow_stage_uid",
        Comment = "Please review this content",
        DueDate = "2023-12-15",
        Notify = true,
        AssignedTo = new List<BulkWorkflowUser>
        {
            new BulkWorkflowUser
            {
                Uid = "user_uid",
                Name = "John Doe",
                Email = "john.doe@example.com"
            }
        },
        AssignedByRoles = new List<BulkWorkflowRole>
        {
            new BulkWorkflowRole
            {
                Uid = "role_uid",
                Name = "Content Editor"
            }
        }
    }
};

ContentstackResponse response = bulkOperation.Update(updateBody);
```
