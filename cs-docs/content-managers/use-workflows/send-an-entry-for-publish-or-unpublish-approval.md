---
title: "[Use Workflows] - Send an Entry for Publish or Unpublish Approval"
description: "How to send an entry for publish or unpublish approval using Workflows and Publish Rules."
url: https://www.contentstack.com/docs/headless-cms/send-an-entry-for-publish-or-unpublish-approval
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Use Workflows] - Send an Entry for Publish or Unpublish Approval

This page explains how to send an entry for publish or unpublish approval in Contentstack when Publish Rules are configured. Content managers and developers should use it when an entry requires approval before it can be published or unpublished.

**Note**: If you are new to [Workflows](../../developers/set-up-workflows-and-publish-rules/about-workflows.md) and [Publish Rules](../../developers/set-up-workflows-and-publish-rules/about-publish-rules.md), we recommend reading about them before proceeding to the steps given below.

If a Publish Rule has been set for a particular [content type](../../developers/create-content-types/about-content-types.md), you will see it under the **Publish Rules** section in the right side panel of the [entry](../author-content/about-entries.md). There are two ways to send an entry for publishing or unpublishing approval.

To perform this action, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform any one of the following approaches.

## Via the right-side panel

- Go to your [stack](../../developers/set-up-stack/about-stack.md), and open the entry.
- On the entry page, click on the “Status” icon on the right panel.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte9c95f0256bd13ef/60de0cbaa1ff3159b593961c/image.png)
- In the **Publish Rules** section, you will see the applicable publishing rules (if any). Click on **Request Approval** to send the entry for approval to the approvers.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt899f962a4772f1e1/60de0d269ef42b48592721af/image.png)
- Once a request has been sent, you will see the current status of the request (awaiting approval, approved, rejected) in the same section.

## Via the Publish modal

- On the entry page, click on **Publish **at the bottom. This will open the publish modal to select the environment and language for publishing the entry.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3fabd9d707726eda/60de0d699ef42b48592721b3/image.png)
- If a rule has been applied to any of the selected environment(s) or language(s), clicking on **Send **will send the entry for approval to the approver(s).

## API Reference

To perform allowed actions with publish request via API, refer to the [Request/Accept/Reject Entry Publish Request](../../../api-docs/api-detail/content-management-api.md#request-accept-reject-entry-publish-request) API request.

## Common questions

### What if I don’t see the Publish Rules section for an entry?
If a Publish Rule has been set for a particular content type, you will see it under the **Publish Rules** section in the right side panel of the entry.

### How can I check the status of an approval request after sending it?
Once a request has been sent, you will see the current status of the request (awaiting approval, approved, rejected) in the same section.

### Can I send an entry for approval from the Publish modal?
Yes. If a rule has been applied to any of the selected environment(s) or language(s), clicking on **Send **will send the entry for approval to the approver(s).

### Is there an API to request, accept, or reject an entry publish request?
Yes. Refer to the [Request/Accept/Reject Entry Publish Request](../../../api-docs/api-detail/content-management-api.md#request-accept-reject-entry-publish-request) API request.