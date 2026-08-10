---
title: "Send an Entry for Publish or Unpublish Approval"
description: "Send an entry for publish or unpublish approval"
url: /headless-cms/send-an-entry-for-publish-or-unpublish-approval
---

# Send an Entry for Publish or Unpublish Approval

## Send an Entry for Publish or Unpublish Approval

**Note:** If you are new to [Workflows](/docs/headless-cms/about-workflows) and [Publish Rules](/docs/headless-cms/about-publish-rules), we recommend reading about them before proceeding to the steps given below.

If a Publish Rule has been set for a particular [content type](/docs/headless-cms/about-content-types), you will see it under the **Publish Rules** section in the right side panel of the [entry](/docs/headless-cms/about-entries). There are two ways to send an entry for publishing or unpublishing approval.

To perform this action, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform any one of the following approaches.

## Via the right-side panel

1.  Go to your [stack](/docs/headless-cms/about-stack), and open the entry.
2.  On the entry page, click on the “Status” icon on the right panel. ![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte9c95f0256bd13ef/60de0cbaa1ff3159b593961c/image.png)
3.  In the **Publish Rules** section, you will see the applicable publishing rules (if any). Click on **Request Approval** to send the entry for approval to the approvers. ![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt899f962a4772f1e1/60de0d269ef42b48592721af/image.png)
4.  Once a request has been sent, you will see the current status of the request (awaiting approval, approved, rejected) in the same section.
    

## **Via the Publish modal**

1.  On the entry page, click on **Publish** at the bottom. This will open the publish modal to select the environment and language for publishing the entry.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3fabd9d707726eda/60de0d699ef42b48592721b3/image.png)
2.  If a rule has been applied to any of the selected environment(s) or language(s), clicking on **Send** will send the entry for approval to the approver(s).

## API Reference

To perform allowed actions with publish request via API, refer to the [Request/Accept/Reject Entry Publish Request](/docs/developers/apis/content-management-api/workflows#requestacceptreject-entry-publish-request) API request.
