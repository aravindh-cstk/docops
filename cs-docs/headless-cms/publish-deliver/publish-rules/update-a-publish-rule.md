---
title: "Update a Publish Rule"
description: "Learn how to modify a publish rule in Contentstack to update its parameters or conditions for accurate content governance."
url: /headless-cms/update-a-publish-rule
uid: blta24f720d894897cf
---

# Update a Publish Rule

## Update a Publish Rule

You can update an existing Publish Rule in Contentstack to modify its parameters or conditions. This ensures that your content governance remains accurate and aligned with evolving workflows or compliance policies.

**Note:** By default, the [Owner](/docs/headless-cms/types-of-roles#owner), [Admin](/docs/headless-cms/types-of-roles#admin), and [Developer](/docs/headless-cms/types-of-roles#developer) roles can update a publish rule within a stack.

To update a publish rule in your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
2.  Select **Workflows**, then go to the **Publish Rules** tab.
3.  Click the vertical ellipsis icon in the **Actions** column for the desired rule and select **Edit**, or click the rule name directly.
4.  On the **Rule Details** page, you can modify the rule’s [parameters](/docs/headless-cms/about-publish-rule-components#parameters) and [conditions](/docs/headless-cms/about-publish-rule-components#conditions) as needed.
5.  To enhance publishing governance, enable the **Prevent self-approval** toggle. When enabled, the last person who edited or updated an entry cannot approve or publish it, even if they belong to the approvers list.
6.  Once all updates are complete, click **Save**.

## API Reference

To update a publish rule via API, refer to the [Update publish rules](/docs/developers/apis/content-management-api/workflows#update-publish-rules) API request.
