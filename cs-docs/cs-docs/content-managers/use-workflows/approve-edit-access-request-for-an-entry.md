---
title: "[Use Workflows] - Approve Edit Access Request for an Entry"
description: Approve Edit Access Request for an Entry
url: https://www.contentstack.com/docs/content-managers/use-workflows/approve-edit-access-request-for-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Use Workflows] - Approve Edit Access Request for an Entry

This page explains how to approve or reject edit access requests for an entry when stage access rules are enabled in Workflows. It is intended for Contentstack content managers and approvers who manage entries in workflow stages and need to grant temporary edit access to other users.

## Approve Edit Access Request for an Entry

**Note**: It is important to familiarize yourself with the basic concepts of Workflows before starting to work with them. You can refer to these articles: [Workflows,](/docs/developers/set-up-workflows-and-publish-rules/about-workflows)[Workflow Stages](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-stages), and [Tasks](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks).

When a stage access rule is set for an entry on a particular workflow stage, only users or roles with workflow stage transition rights over an entry have edit access rights. Other users have to request them to grant edit access rights to the entry over that stage of the workflow.

**Additional Resource**: Learn more about [how stage access rules work](/docs/developers/set-up-workflows-and-publish-rules/add-workflows-and-stages#add-stage-transition-and-access-rules).

To approve an edit access request for an entry, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack), and open the entry.
- On the entry page, click on the “Information” icon on the right panel.

The **Pending Access Requests** dialog box appears on screen.
- In the **Pending Access Requests** dialog box, you can view the set of edit access requests sent by different users. Click on **Allow** to grant edit access to the entry or **Reject** to disallow edit access to the entry.

**Note**: Any one of the users with edit access rights over the entry in the current stage can go ahead and approve or reject the request.

The approvers can also navigate to the **Tasks** section to view the request for edit access and directly allow or reject access to the entry from that section.

## Common questions

**Q: Who can approve or reject an edit access request?**  
A: Any one of the users with edit access rights over the entry in the current stage can go ahead and approve or reject the request.

**Q: Where do I find edit access requests for an entry?**  
A: On the entry page, click on the “Information” icon on the right panel to open the **Pending Access Requests** dialog box.

**Q: Can I approve or reject edit access requests from somewhere other than the entry page?**  
A: The approvers can also navigate to the **Tasks** section to view the request for edit access and directly allow or reject access to the entry from that section.