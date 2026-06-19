---
title: "[Publish Rules] - Update a Publish Rule"
description: How to update an existing Publish Rule in Contentstack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/update-a-publish-rule
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Publish Rules] - Update a Publish Rule

This page explains how to update an existing Publish Rule in Contentstack, including where to find the rule in the UI, what settings you can modify, and where to reference the API request. It is intended for stack users (such as Owners, Admins, and Developers) who manage publishing governance and need to adjust rules as workflows or compliance needs change.

## Update a Publish Rule

You can update an existing Publish Rule in Contentstack to modify its parameters or conditions. This ensures that your content governance remains accurate and aligned with evolving workflows or compliance policies.

**Note:** By default, the [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) roles can update a publish rule within a stack.

To update a publish rule in your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
- Select **Workflows**, then go to the **Publish Rules** tab.
- Click the vertical ellipsis icon in the **Actions** column for the desired rule and select **Edit**, or click the rule name directly.
- On the **Rule Details** page, you can modify the rule’s [parameters](/docs/developers/set-up-workflows-and-publish-rules/about-publish-rule-components#parameters) and [conditions](/docs/developers/set-up-workflows-and-publish-rules/about-publish-rule-components#conditions) as needed.
- To enhance publishing governance, enable the **Prevent self-approval** toggle. When enabled, the last person who edited or updated an entry cannot approve or publish it, even if they belong to the approvers list.
- Once all updates are complete, click **Save**.

## API Reference

To update a publish rule via API, refer to the [Update publish rules](/docs/developers/apis/content-management-api#update-publish-rules) API request.

## Common questions

**Who can update a publish rule by default?**  
By default, the Owner, Admin, and Developer roles can update a publish rule within a stack.

**Where do I edit an existing publish rule in the UI?**  
Go to your stack **Settings**, select **Workflows**, then open the **Publish Rules** tab and choose **Edit** from the Actions menu (or click the rule name).

**What does “Prevent self-approval” do?**  
When enabled, the last person who edited or updated an entry cannot approve or publish it, even if they belong to the approvers list.

**Can I update publish rules via API?**  
Yes. Refer to the **Update publish rules** API request in the API Reference section.