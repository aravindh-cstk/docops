---
title: "Auto-populate Environment Variables from a Linked Stack"
description: "Learn how to auto-populate environment variables from a linked stack in Contentstack Launch."
url: /launch/auto-populate-environment-variables-from-a-linked-stack
uid: blt834198d7a4c90c11
---

# Auto-populate Environment Variables from a Linked Stack

## Auto-populate Environment Variables from a Linked Stack

Importing a Starter app or any application with the Contentstack SDK requires adding key-value pairs of environment variables like CONTENTSTACK\_API\_KEY, CONTENTSTACK\_DELIVERY\_TOKEN, etc. Adding these environment variables manually is a tedious task.

Launch allows you to auto-populate the Environment Variables from your stack, by linking the stack to your project. This allows you to easily use the CMS environment variables while deploying your Launch project.

This step-by-step guide lets you link a stack to your project to auto-populate Environment Variables.

**Note:** This feature can also be used when creating or configuring an environment.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization

## What You Will Learn

-   How to link a stack to a project to auto-populate environment variables.

-   How to view the stack linked to a project.

-   How to update the linked stack and sync its variables.


## Steps for Execution

Follow the steps to link a stack to your project:

1.  Click **Launch** from the dashboard.
2.  Click the **\+ New Project** button.
3.  Select [Import from a Git Repository](/docs/launch/import-project-using-github) or [Upload a file](/docs/launch/import-project-using-file-upload) as usual from the **Create New Project** modal.
4.  In the **Environment Variables** section, click the **Connect and Import Variables** button. ![Launch_Connect_Import_variable.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltff766b13bdd08973/69d7468ce0ba035263fd62df/Launch_Connect_Import_variable.png)
5.  Select the **Stack** which has the Starter app installed and then select the **Delivery Token** for your stack.

    **Note:** On selecting a delivery token, Launch automatically selects a Stack environment available for the selected token.

    ![Launch-LinkedStack-Select_Stack_DeliveryToken.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2e9d91734b317c0/6435082d41f63e1131dec78c/Launch-LinkedStack-Select_Stack_DeliveryToken.png)

6.  Click the **Import Variables** button.  
    ![Launch-LinkedStack-Import_Variables.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4490387c1d2ef2ad/6435082db2ef0d11ece9fee2/Launch-LinkedStack-Import_Variables.png)

    You can see that the Environment Variables were auto-populated from your selected stack.

    ![Launch_Populate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb45c69c4d02738cf/69d74751fc095357e26c85f9/Launch_Populate.png)
7.  Click the **Deploy** button.![Launch-LinkedStack-Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79477571bdc5e9e7/66050025fa138c802287c7e8/Launch-LinkedStack-Deployment.png)

    Your project is now deployed.


## View a linked stack

Follow the step to view the linked stack after project creation:

1.  Click the **Settings** icon in the left panel and then click **Stack Integration** to view the linked stack.

    You can see the linked stack.

    ![Launch_Linked_Stack_Venus2_ExistingStack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt453d8de5d3ed155b/65c1afd8f02705be0cea63e6/Launch_Linked_Stack_Venus2_ExistingStack.png)


## Update a linked stack

Follow the steps below to update a linked stack:

1.  Click the **Settings** icon in the top panel and then click **Stack Integration**.  
    ![Launch_Populat_save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f49e8e9a7f6ccd8/69d748c4e0ba03953efd62e3/Launch_Populat_save.png)
2.  Choose a stack from the dropdown and then click **Connect Stack** button.

    ![Launch_Linked_Stack_Venus2_NewStack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45d84eedf039a865/65c1afd9793431da5caa83c3/Launch_Linked_Stack_Venus2_NewStack.png)

3.  Once you choose a different stack, you must sync the stack variables. To do this, follow the steps below:

    1.  Click **Environments** under Settings.
    2.  Select your environment (Default in this example).
    3.  Click **Environment Variables**.
    4.  Click **Sync Stack Variables.**![Launch_Linked_Stack_Venus2_Sync_Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6591ddbeb0c611dd/65c1afd9c2586417d408ae31/Launch_Linked_Stack_Venus2_Sync_Stack.png)
    5.  A popup displays asking for your confirmation. Select your delivery token and then click the **Sync Stack Variables** button.![Launch_Linked_Stack_Venus2_Sync_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b796bcc94bc9523/65c1afd97958f98d3c5129e4/Launch_Linked_Stack_Venus2_Sync_Modal.png)
    6.  Click the **Save** button.

    This will sync your new stack’s Environment Variables to your project.
