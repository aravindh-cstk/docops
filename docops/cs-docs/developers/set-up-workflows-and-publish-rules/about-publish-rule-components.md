---
title: "[Publish Rules] - About Publish Rule Components"
description: About Publish Rule Components
url: https://www.contentstack.com/docs/headless-cms/about-publish-rule-components
product: Contentstack
doc_type: concept
audience:
  - developers
  - content-managers
  - marketers
  - enterprise-teams
version: current
last_updated: 2026-03-25
---

# [Publish Rules] - About Publish Rule Components

This page explains the components that make up Publish Rules in Contentstack—what parameters and conditions are available, and how they affect publishing and unpublishing. It’s intended for stack owners, admins, and developers configuring governance for teams using review/approval processes.

## About Publish Rule Components

Publish Rules in Contentstack help manage the publishing and unpublishing of content based on defined parameters and conditions. They ensure compliance, maintain content accuracy, and uphold workflow integrity. This feature is especially useful for content managers, marketers, and enterprise teams working with multi-stage review or approval processes.

**Note:** Only the stack owner, admin, or developer can define Publish Rules. Setting up publish rules is optional.

Publish Rules consist of two components: **Parameters** and **Conditions.**

## Parameters

Each publish rule must include the following parameters:
- **Branch(es):** The branch or branches to which the publish rule applies.
- **Content Type:** The content type governed by the rule.
- **Language:** The language(s) to which the rule applies.
- **Environment:** The environment where the rule is effective.
- **Action:** The action to be regulated — Publish, Unpublish, or Both.

## Conditions

Each publish rule must include at least one of the following conditions. You can use one or both depending on your requirements.
- **Approver**Use this condition to require approval before publishing or unpublishing entries. Specify one or more users or roles authorized to approve these actions.

For example, if a role such as Content Manager is set as the approver, any entry that matches the defined parameters (such as content type, environment, or action) must be approved by at least one member of that role before publishing or unpublishing.

**Note:** A publish rule with approvers can function independently of workflows. You can configure approval rules even if no workflows exist in the stack.
- **Prevent Self-Approval**Enable this setting to prevent the same user who last edited an entry from approving or publishing it.

When enabled:

The last editor of an entry cannot approve or publish it, even if they are listed as an approver.
- The entry must be reviewed and approved by another user.
- At least two approvers, or a role with multiple members, must be assigned for the rule to take effect.
- If only one approver is defined, an error message appears prompting you to add more approvers.

This control enforces a dual-approval process, also known as the **Four-Eyes Principle**, ensuring that no individual can self-approve or self-publish their own changes.

**Tip:** Enable this option to enhance compliance and editorial governance by maintaining a clear separation between content creation and approval.
- **Stage****Note:** To use the Stage condition, at least one workflow must be set up in the stack.

Use this condition to restrict publishing or unpublishing until an entry reaches a specific workflow stage. Once applied, an entry cannot be published or unpublished unless it meets the defined stage criteria.

For example, if the condition is set to the **Complete** stage, only entries that reach this stage and match the defined parameters become eligible for publishing or unpublishing.

Once a publish rule is active, any attempt to publish or unpublish an entry in the specified environment triggers rule validation:
- If an approver is defined, the entry is sent for approval.
- If a stage is specified, Contentstack checks whether the entry has reached that defined stage.
- If **Prevent Self-Approval** is enabled, Contentstack verifies that the approver is not the last editor of the entry.

This ensures that every publishing action adheres to the configured compliance, workflow, and approval conditions.

## Best Practices

- **Define minimal yet effective conditions:** Use only the controls necessary to maintain compliance without overcomplicating the process.
- **Use Prevent Self-Approval selectively:** Apply it to critical content types where impartial review is required.
- **Align stage conditions with workflows:** Ensure that workflow stages accurately represent your organization’s publishing process.
- **Test before deploying:** Validate rules in a staging environment to confirm expected behavior before applying to production.

## Common questions

### Who can define Publish Rules?
Only the stack owner, admin, or developer can define Publish Rules.

### Are Publish Rules required to use Contentstack?
Setting up publish rules is optional.

### Can approver-based Publish Rules work without workflows?
Yes. A publish rule with approvers can function independently of workflows, and you can configure approval rules even if no workflows exist in the stack.

### What happens when a Publish Rule is active and someone tries to publish?
Any attempt to publish or unpublish an entry in the specified environment triggers rule validation, including approver checks, stage checks (if specified), and Prevent Self-Approval checks (if enabled).

<!-- filename: publish-rules-about-publish-rule-components.md -->