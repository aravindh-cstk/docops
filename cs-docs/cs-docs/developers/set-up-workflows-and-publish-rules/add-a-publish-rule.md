---
title: "[Publish Rules] - Add a Publish Rule"
description: Adding a publish rule lets you define approval or workflow requirements before entries can be published or unpublished.
url: https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/add-a-publish-rule
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Publish Rules] - Add a Publish Rule

This page explains how to add a publish rule in Contentstack Workflows to enforce approval and workflow-stage requirements before entries can be published or unpublished. It is intended for stack owners, admins, and developers who manage publishing governance and workflow compliance.

## Add a Publish Rule

Adding a publish rule lets you define approval or workflow requirements before entries can be published or unpublished. This ensures compliance and quality by enforcing organizational standards requiring each entry to meet the designated workflow stage before it can be published or unpublished.

**Note:** Only the stack [owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), or [developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can add a publish rule.

Setting up publish rules within a workflow is optional. However, because publishing and unpublishing are critical to content operations, publish rules are managed within the **Workflows** feature.

To add a publish rule in your stack, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
- Select **Workflows** and go to the **Publish Rules** tab.
- Click **+ New Publish Rule**.
- On the **Rule Details** page:**Branch(es):** Select one or more branches to apply the rule.**Tip:** You can select multiple branches.
- **Content Type:****All Content Types:** Apply the rule globally.
- **Specific Content Type(s):** Select one or more types from the dropdown.**Note:** You cannot add more than one rule to the same content type.
- **Language:****All Languages:** Apply the rule to all languages.
- **Specific Language(s):** Choose desired languages from the dropdown.
- **Environment:** Select the environment for which the rule applies (e.g., Production or Staging).
- **Action:** Choose whether this rule applies to **Publish**, **Unpublish**, or **All** (both actions).**Note:** All parameters are required fields.
- Expand the **Conditions** section (if not expanded by default). You must define at least one condition.**Approver:** Add one or more users or roles who must approve before publishing or unpublishing.
- **Workflow Stage:** Specify the workflow stage (e.g., Final Review or Legal Approved) that an entry must reach before it can be published or unpublished.
- Enable **Prevent self-approval** to ensure independent validation:The last editor cannot approve or publish the entry.
- Two distinct users must approve before publishing or unpublishing.
- If only one user is assigned, the system displays a validation prompt asking you to add an additional approver.**Tip:** Enable this option to maintain separation of duties between content creators and reviewers, ensuring independent review and accountability in workflows.
- After completing all required fields and conditions, click **Save**.

This creates a publish rule that governs publishing and unpublishing actions based on the selected parameters and conditions within your defined workflow.

**Note:**
- Publish rules apply only to **unpublished versions** of an entry.
- Once an entry version meets the rule conditions and is published to an environment, it can be republished to the same environment without restriction, even if it moves to a different stage.
- To re-trigger rule validation, the entry must be modified to create a new version.

This approach streamlines publishing across locales and environments by eliminating redundant approvals, reducing delays, and ensuring timely content distribution.

## Example Scenario
Your team creates a blog post titled **“Holiday Sale Preview.”** The publish rule requires **Legal** approval and that the entry reaches the **Final Review** stage before it can be published.
- When the post is first published, it’s routed for approval and validated against the required workflow stage.
- If a content manager republishes the same version in a different environment, the rule isn’t triggered again since the version already met the required conditions.
- If the post is edited (e.g., updating prices or images), a **new version** is created. The rule is enforced again, requiring fresh approval and workflow validation.

## API Reference
To add a publish rule via API, refer to the [Create publish rules](/docs/developers/apis/content-management-api#create-publish-rules) API request.

## Common questions

### Who can add a publish rule?
Only the stack owner, admin, or developer can add a publish rule.

### Do publish rules apply to already-published entries?
Publish rules apply only to unpublished versions of an entry.

### When does a publish rule get re-triggered?
To re-trigger rule validation, the entry must be modified to create a new version.

### Can I apply a publish rule to multiple branches?
Yes, you can select one or more branches to apply the rule.