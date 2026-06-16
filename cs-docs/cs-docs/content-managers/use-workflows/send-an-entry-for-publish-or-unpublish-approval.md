---
title: "[Use Workflows] - Send an Entry for Publish or Unpublish Approval"
description: "How to send an entry for publish or unpublish approval using Workflows and Publish Rules."
url: https://www.contentstack.com/docs/content-managers/use-workflows/send-an-entry-for-publish-or-unpublish-approval
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

**Note**: If you are new to [Workflows](/docs/developers/set-up-workflows-and-publish-rules/about-workflows) and [Publish Rules](/docs/developers/set-up-workflows-and-publish-rules/about-publish-rules), we recommend reading about them before proceeding to the steps given below.

If a Publish Rule has been set for a particular [content type](/docs/developers/create-content-types/about-content-types), you will see it under the **Publish Rules** section in the right side panel of the [entry](/docs/content-managers/working-with-entries/about-entries). There are two ways to send an entry for publishing or unpublishing approval.

To perform this action, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform any one of the following approaches.

## Via the right-side panel

- Go to your [stack](/docs/developers/set-up-stack/about-stack), and open the entry.
- On the entry page, click on the “Status” icon on the right panel.
- In the **Publish Rules** section, you will see the applicable publishing rules (if any). Click on **Request Approval** to send the entry for approval to the approvers.
- Once a request has been sent, you will see the current status of the request (awaiting approval, approved, rejected) in the same section.

## Via the Publish modal

- On the entry page, click on **Publish **at the bottom. This will open the publish modal to select the environment and language for publishing the entry.
- If a rule has been applied to any of the selected environment(s) or language(s), clicking on **Send **will send the entry for approval to the approver(s).

## API Reference

To perform allowed actions with publish request via API, refer to the [Request/Accept/Reject Entry Publish Request](/docs/developers/apis/content-management-api#request-accept-reject-entry-publish-request) API request.

## Common questions

### What if I don’t see the Publish Rules section for an entry?
If a Publish Rule has been set for a particular content type, you will see it under the **Publish Rules** section in the right side panel of the entry.

### How can I check the status of an approval request after sending it?
Once a request has been sent, you will see the current status of the request (awaiting approval, approved, rejected) in the same section.

### Can I send an entry for approval from the Publish modal?
Yes. If a rule has been applied to any of the selected environment(s) or language(s), clicking on **Send **will send the entry for approval to the approver(s).

### Is there an API to request, accept, or reject an entry publish request?
Yes. Refer to the [Request/Accept/Reject Entry Publish Request](/docs/developers/apis/content-management-api#request-accept-reject-entry-publish-request) API request.