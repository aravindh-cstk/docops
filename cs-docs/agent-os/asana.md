---
title: Automations guides and connectors - Asana
description: Documentation for the Asana action connector, including setup and available actions (Create a Task, Get Tasks from Project, Get a User, Update a Task).
url: https://www.contentstack.com/docs/agent-os/asana
product: Automation Hub Connectors
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Asana

This page explains how to set up and use the **Asana** action connector in an automation workflow. It is intended for users configuring third-party action steps and should be used when you need to create, fetch, or update Asana tasks or retrieve Asana user information.

## Asana

The Asana action connector lets you create a task, fetch tasks details from a project, get user information, and update a task in the Asana dashboard.

## Set up Asana
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Asana** connector.![Select_the_Connector_Asana.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcbe9f977868ad6be/6527c9503347f307770279cc/Select_the_Connector_Asana.png)
- Under **Choose an Action** tab, you will see four actions:

        [**Create a Task**](#action-1-select-the-create-a-task-action) (creating a task in Asana)
- [**Get Tasks from Project**](#action-2-select-the-get-tasks-from-project-action) (fetching tasks from Asana project)
- [**Get a User**](#action-3-select-the-get-a-user-action) (getting user information from Asana)
- [**Update a Task**](#action-4-select-the-update-a-task-action) (updating a task in Asana)

    Let’s look at each of them in detail.

## Action 1: Select the Create a Task action
- Click the **+ Add New Account** button to add your Asana account (see screenshot in next step).![Asana-Create-A-Task-Action-Add-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0463725e9a93f18/64e76961f1ac3d0145f8fc83/Asana-Create-A-Task-Action-Add-Account.png)
- In the **Manage Permissions** modal, click the **Checkbox** and click **Authorize**.![Asana-Account-Authorization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2128f92a43c39e92/64e76961ea7fb3a73412e520/Asana-Account-Authorization.png)
- In the **Set Account Name** modal, enter the **Title** and click **Save** to add your Asana account.![Asana-Set-Account-Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltabff4387cbb00621/64e768bc566653897911961b/Asana-Set-Account-Name.png)
- On the **Create a Task - Configure Action** page, enter the details given below:

            Select the **Project Name** from the lookup values to create a task.
- Enter an appropriate **Title** to the task.
- Click the **Show optional fields** toggle button to use the optional fields.
- Enter the **Description** for the task.
- Select the **Assignee Name** from the lookup values to whom you want to assign this task.
- Select the **Parent Task Name** from the lookup list if creating a sub-task.
- Choose the section from the **Select Section** dropdown where you want to place the task.

            **Note**: When you want to change the section, the task must be assigned to a user.
- **Custom Fields** are the user-specified fields that store the task information in the Asana project—for example, Priority, Status, etc. You can add a Custom Field as a key-value pair from the lookup data.
- Choose the value from the **Select Approval Status** dropdown to set the approval status. The status can be **Pending**, **Approved**, **Rejected**, and **Changes Requested**.
- Check the **Mark a task as complete** checkbox to set the task status as complete.
- Click **Proceed**.
- Click **Test Action** to test the configured action.![Asana-Test-Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5d036fc8f66f6bea/64e768bc29a514788594de4f/Asana-Test-Action.png)
- You will get the response. Once set, click **Save and Exit**.![Asana-Create-A-Task-Output](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06adacd183727733/64e76962bce87814ea629b58/Asana-Create-A-Task-Output.png)
- Navigate to your Asana Project. You should see that the task has been created successfully.

## Action 2: Select the Get Tasks from Project action
- Click the **+ Add New Account** button to add your Asana account (see screenshot in next step).![Asana-Get-Tasks-From-Project-Action-Add-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt67a7ad7984602d1a/64e768bc14f0612352b3c3ff/Asana-Get-Tasks-From-Project-Action-Add-Account.png)
- In the **Manage Permissions** modal, click the **Checkbox** and click **Authorize**.
- In the **Set Account Name** modal, enter the **Title** and click **Save** to add your Asana account.
- On the **Get Tasks from Project - Configure Action** page, enter the details given below:
- Select **Project Name** from the lookup List to fetch the tasks.
- Click the **Show optional fields** toggle button to use the optional fields.
- Provide the value to set the **Task Limit** to retrieve the tasks. For example, if you set the limit to 10, 10 tasks will be fetched.

            **Note**: The maximum task limit is 100.
- Provide the **Offset Token** value returned from the Asana platform. It acts as a benchmark to fetch the next set of tasks as per the limit.

            **Additional Resource**: For more information, please refer to the [Get tasks from a project API Reference](https://developers.asana.com/reference/gettasksforproject) documentation.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- You will get the response. Once set, click **Save and Exit**.![Asana-Get-Tasks-From-Project-Output](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c70bf93538e68f8/64e768bcad2e080ed102ff61/Asana-Get-Tasks-From-Project-Output.png)

## Action 3: Select the Get a User action
- Click the **+ Add New Account** button to add your Asana account (see screenshot in next step).![Asana-Get-A-User-Action-Add-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9678c67b0585252/64e76962bce8785b3e629b56/Asana-Get-A-User-Action-Add-Account.png)
- In the **Manage Permissions** modal, click the **Checkbox** and click **Authorize**.
- In the **Set Account Name** modal, enter the **Title** and click **Save** to add your Asana account.
- On the **Get a User - Configure Action** page, select the **User Name** or **Email ID** from the lookup values to retrieve the user details.![Asana-Get-A-User-Configure-Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1df0a73e3728a062/64e768bc29a0627b71b809c1/Asana-Get-A-User-Configure-Action.png)
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- You will get the response. Once set, click **Save and Exit**.![Asana-Get-A-User-Output](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18504cc018f0c3bb/64e768bc33cfb1327288229b/Asana-Get-A-User-Output.png)

## Action 4: Select the Update a Task action
- Click the **+ Add New Account** button to add your Asana account (see screenshot in next step).![Asana-Update-A-Task-Action-Add-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7baa55c85a3d1c97/64e76916ffe8ee9e233e7a7a/Asana-Update-A-Task-Action-Add-Account.png)
- In the **Manage Permissions** modal, click the **Checkbox** and click **Authorize**.
- In the **Set Account Name** modal, enter the **Title** and click **Save** to add your Asana account.
- On the **Update a Task - Configure Action** page, enter the details given below:

            Select the **Project Name** from the lookup values to update a task.
- Select the **Task Name** which you want to update.
- Click the **Show optional fields** toggle button to use the optional fields.
- Enter the suitable **Title** to update the title of the task.
- Enter the **Description** to update the task description.
- Select the **Assignee Name** from the lookup values to whom you want to assign this task.
- Choose the section from the **Select Section** dropdown where you want to place the task.

            **Note**: When you want to change the section, the task must be assigned to a user.
- **Custom Fields** are the user-specified fields that store the task information in the Asana project—for example, Priority, Status, etc. You can add a Custom Field as a key-value pair from the lookup data.
- Choose the value from the **Select Approval Status** dropdown to set the approval status. The status can be **Pending**, **Approved**, **Rejected**, and **Changes Requested**.
- Check the **Mark a task as complete** checkbox to set the task status as complete.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- You will get the response. Once set, click **Save and Exit**.![Asana-Update-A-Task-Configure-Output](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcfb4af0c674196d6/64e7691656ef586fc08ee89c/Asana-Update-A-Task-Configure-Output.png)
- Navigate to your Asana Project. You should see that the task has been updated successfully.

This sets the **Asana** action connector.

## Common questions

### Do I need to add a new Asana account for each action?
Each action includes steps to click the **+ Add New Account** button and authorize Asana, so you should add an account when prompted during action configuration.

### What is the maximum **Task Limit** for fetching tasks from a project?
**Note**: The maximum task limit is 100.

### Why can’t I change the section for a task?
**Note**: When you want to change the section, the task must be assigned to a user.

### Where can I find more information about fetching tasks from a project?
**Additional Resource**: For more information, please refer to the [Get tasks from a project API Reference](https://developers.asana.com/reference/gettasksforproject) documentation.