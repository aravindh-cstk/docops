---
title: "Prevent Self-Approval’ Setting Not Working"
description: "Prevent Self-Approval’ Setting Not Working"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/29-prevent-self-approval-setting-not-working
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4a7b12080deb30ad
---

# Prevent Self-Approval’ Setting Not Working

The ‘Prevent self-approval’ setting is configured on a publish rule, but users with direct publish permission to production can still publish entries without going through an approval step. The self-approval prevention appears to have no effect.

**Root Cause**

The ‘Prevent self-approval’ setting only applies when an approval step is enforced by the workflow. If the workflow does not have a stage that requires approval before the publish rule is triggered, there is nothing to prevent self-approval of - the user is publishing directly, not approving their own request. The setting is irrelevant when no approval step exists in the publishing flow.

**Resolution**

1.  Review the workflow configuration. Confirm whether a stage is configured that requires approval before publishing to the target environment.
2.  If no approval stage exists, add one: create a workflow stage (for example, ‘Pending Approval’) that must be completed before content can be published to production. Assign approvers to this stage.
3.  Enable ‘Prevent self-approval’ on the publish rule in conjunction with the approval stage. This prevents the original author from approving their own content at that stage.
4.  Assign the approval permission to a different user or role from the one that originally creates or edits entries.

After adding an approval stage and re-enabling ‘Prevent self-approval’, verify that authors cannot approve their own publish requests and must wait for a designated approver.
