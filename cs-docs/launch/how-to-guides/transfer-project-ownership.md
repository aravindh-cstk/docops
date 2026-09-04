---
title: "Transfer Project Ownership"
description: "Learn how to transfer ownership of a Contentstack Launch project to another collaborator, including prerequisites and post-transfer steps."
url: /launch/transfer-project-ownership
uid: blte40d461c5e927467
---

# Transfer Project Ownership

## Transfer Project Ownership

You can transfer ownership of a Launch project to another collaborator during role changes, team handoffs, or organizational changes. Transferring ownership hands over administrative control of the project to the recipient. The project's deployments, analytics, and configuration remain untouched.

## Prerequisites

-   You must be the current owner of the project to initiate a transfer.
-   The recipient must already be an active project collaborator with Admin access and have an active [Contentstack account](https://www.contentstack.com/login/). You cannot transfer ownership to someone outside the project or invite a new user directly from this flow.
-   Once the recipient accepts the transfer, you lose owner access to the project.

## Transfer Ownership

To transfer project ownership, log in to your [Contentstack account](https://www.contentstack.com/login/), open the Launch project you want to transfer, and perform the following steps:

1.  Click the **project card** to open your project from the Launch landing page.
2.  Go to **Settings > General**.
3.  Click **Transfer Ownership** in the top-right corner of the page. ![Launch_Project_Transfer_Ownership_button.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am8e75edbb05adcaa6/fa00f46fe73bae7c3fc6e5a9/Launch_Project_Transfer_Ownership_button.png?locale=en-us)  
    Alternatively, scroll down to the **Git Connection** section and click **Transfer Project Ownership** below it. ![Launch_Project_Transfer_Ownership_2ndbutton.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am514f2eb6e935145f/e8da430228d3be91309093be/Launch_Project_Transfer_Ownership_2ndbutton.png?locale=en-us)
4.  In the **Transfer Project Ownership** dialog, select the **Recipient** from the dropdown. You can search by name or email; only existing project collaborators appear in the list.
5.  Select the checkbox: **I understand I will lose administrative access once the new owner accepts this transfer**.
6.  Click **Send Transfer Invite**.![Launch_Project_Transfer_Ownership_UpdatedSendTransferInvite.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am1c420017295a0282/3a92ce3400959970b1ad2121/Launch_Project_Transfer_Ownership_UpdatedSendTransferInvite.png?locale=en-us)

**Note:** The **Send Transfer Invite** button stays disabled until you have selected a recipient and checked the confirmation checkbox.

The recipient receives an email invitation with a link to accept the transfer. Once they accept, they become the new project owner, and you no longer have owner access to the project.

## Cancel Ownership Transfer

If you change your mind after sending a transfer invite, you can cancel it before the recipient accepts. Canceling the transfer restores your full administrative access and invalidates the invite link sent to the recipient.

To cancel an ownership transfer, follow the steps below:

1.  Go to **Settings → General**.
2.  In the **Transfer pending · awaiting acceptance** banner, click **Cancel Ownership Transfer**. ![Launch_Proj_Ownership_CancelButtonSS.png.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ama10aa1b95e6eb95c/c908deee9533682707bdd11a/Launch_Proj_Ownership_CancelButtonSS.png.png?locale=en-us)

The transfer is canceled immediately. If the recipient clicks the invite link after cancellation, they see an **Invitation Cancelled** screen indicating the sender canceled the transfer before they could accept it. 

![Launch_Proj_Ownership_CancelSS.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amce8fce49de1857aa/641599634ce380624390b713/Launch_Proj_Ownership_CancelSS.png?locale=en-us)

**Note:** The invite link expires automatically after **7 days** if the recipient does not accept it. You do not need to cancel it manually in that case. If the recipient clicks the link after it expires, they see an **Invitation Expired** screen indicating the acceptance window has closed.

![Launch_Proj_Ownership_Expired.png.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am35bee2c0ba047f52/5e921e4adfc70a91158454ad/Launch_Proj_Ownership_Expired.png.png?locale=en-us)

## Verify the Ownership Change

Once the recipient accepts the invite, you can confirm the change from the project's **Users** section:

1.  Go to **Project Settings > Users**.
2.  Find the recipient in the collaborator list and confirm their role now shows as **Owner**.

## Switch GitHub Connection

After the ownership transfer, the project's GitHub connection remains linked to the previous owner's GitHub account. If the new owner wants to connect the project to their own repository, they must switch the GitHub connection from **Settings → General ��� Git Connection**. Follow the steps in [Switch GitHub Connection and Change Repository for an Existing Project](/docs/launch/change-git-repository-for-a-project#switch-github-connection-and-change-repository-for-an-existing-project) to select and link a different repository.
