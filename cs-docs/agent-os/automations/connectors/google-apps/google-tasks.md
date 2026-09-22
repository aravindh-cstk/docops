---
title: "Google Tasks"
description: "Use the Google Tasks connector to automate task and task list management, including creating, updating, retrieving, and organizing tasks in your Google account."
url: /agent-os/google-tasks
uid: blteb4631351a76843b
---

# Google Tasks

## Google Tasks

The **Google Tasks** connector enables you to automate task and task list management, including creating, updating, retrieving, and organizing tasks in your Google account.

## Prerequisites

To use the Google Tasks connector, you first need to connect your Google account using the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.  
    ![App_Swicther.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amd7e68fcdec0fb3bc/83b10b5589776cc115e07e88/App_Swicther.png?locale=en-us)
3.  Click **\+ New Project** or select an existing one.
4.  In the top navigation panel, click **Automations**.
5.  Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
6.  Within the **Choose Connector**, click the **Google Tasks** connector.![Google_Task_Connector.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am9480c47e22ce3316/f36e0d274e45860211c65fc8/Google_Task_Connector.png?locale=en-us)
7.  Under **Choose an Action**, select any action (for example, **Create a Task List**).
8.  In the **Configure Action** section, click **\+ Add New Account** to add your Google account.
9.  In the **Manage Permissions** modal, review the permission that will be granted: **Full access to calendars (read, write, and delete)**. **Note** In the next step, you will be prompted to sign into your Gmail OAuth account and authorize the connection. To enable this, please allow pop-ups in your browser.
10.  Click the **Authorize** button.

This sets up your Google account for the Google Tasks connector.

## Set Up the Google Calendar Connector

Perform the following steps to set up the Google Tasks connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Choose Connector**, click the **Google Tasks** connector.
4.  Under **Choose an Action**, you will see the actions grouped under **Task List** and **Task**, described below:

### Create a Task List

The **Create a Task List** action creates a new task list. To use the Create a Task List action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Create a Task List** action.
2.  On the **Create a Task List Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Enter the title for the new task list in the **Task List Title** field.![Create_a_Task_List.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am3d880d62ca4291ce/af8893199f8fef59a3b972dc/Create_a_Task_List.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Delete a Task List

The **Delete a Task List** action deletes a task list and all its associated tasks. To use the Delete a Task List action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Delete a Task List** action.
2.  On the **Delete a Task List Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list to delete in the **Task List** field. This will permanently delete all tasks in the list.![Delete_a_Task_List.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am0ae255c1ae93dc04/d526d9e7de5ca4e4deddf4b2/Delete_a_Task_List.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Get All Task Lists

The **Get All Task Lists** action retrieves all task lists for the authenticated user. To use the Get All Task Lists action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get All Task Lists** action.
2.  On the **Get All Task Lists Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Click the **Show Optional Fields** toggle button to use this optional field:
        1.  Enter the maximum number of task lists to return in the **Maximum Results**.![Get_All_Task_List.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am190cf2845f49c23e/1d7465b3f7ea21bcc5aa2044/Get_All_Task_List.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Get a Task List

The **Get a Task List** action retrieves a specific task list by ID. To use the Get a Task List action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get a Task List** action.
2.  On the **Get a Task List Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list to retrieve in the **Task List** field.![Get_a_Task_List.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am1c987cfadf771485/adb56519328606e393886dbd/Get_a_Task_List.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Update a Task List

The **Update a Task List** action updates a task list's title. To use the Update a Task List action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Update a Task List** action.
2.  On the **Update a Task List Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list to update in the **Task List** field.
    3.  Enter the new title for the task list in the **New Title** field.![Update_a_Task_List.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am1f380c43114ceee2/dd414a3de3e324e52dd88a31/Update_a_Task_List.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Clear Completed Tasks

The **Clear Completed Tasks** action clears all completed tasks from a task list. To use the Clear Completed Tasks action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Clear Completed Tasks** action.
2.  On the **Clear Completed Tasks Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list to clear completed tasks from in the **Task List** field.![Clear_Completed_Tasks.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amac048deac971a006/a485f72dbd8006039a090d87/Clear_Completed_Tasks.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

**Note**: Clearing completed tasks removes those tasks from the task list entirely.

### Create a Task

The **Create a Task** action creates a new task in a specified task list. To use the Create a Task action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Create a Task** action.
2.  On the **Create a Task Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list to add the task to in the **Task List** field.
    3.  Enter the title of the task in the **Task Title** field.
    4.  Enter additional notes or description for the task in the **Notes** field.
    5.  Enter the due date in RFC 3339 format in the **Due Date** field (e.g., 2024-12-31T00:00:00.000Z).
    6.  Select the current status of the task from the **Status** dropdown: **Action required**, **Completed**.
    7.  Select a parent task to make this a subtask in the **Parent Task** field.
    8.  Select a task to position this task after in the **Previous Task** field.![Create_Task.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amf5135f42290f48ac/fcc3ec0c8908335101b86df3/Create_Task.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Delete a Task

The **Delete a Task** action deletes a task from a task list. To use the Delete a Task action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Delete a Task** action.
2.  On the **Delete a Task Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list containing the task in the **Task List** field.
    3.  Select the task to delete in the **Task Name** field.![Delete_a_Task.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ame664b0864bdb45a9/13ec48d988be885ce40325a6/Delete_a_Task.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Get All Tasks

The **Get All Tasks** action retrieves all tasks from a specified task list with optional filtering. To use the Get All Tasks action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get All Tasks** action.
2.  On the **Get All Tasks Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list to retrieve tasks from in the **Task List** field.
    3.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter the maximum number of tasks to return in the **Maximum Results** (required) field (default: 100, max: 100).
        2.  Enter the lower bound for the due date filter in the **Due Date Minimum** (required) field (RFC 3339 format).
        3.  Enter the upper bound for the due date filter in the **Due Date Maximum** (required) field (RFC 3339 format).
        4.  Mark the **Show completed** checkbox to include completed tasks in the results.
        5.  Mark the **Show hidden** checkbox to include hidden tasks in the results.
        6.  Mark the **Show deleted** checkbox to include deleted tasks in the results.![Get_All_Tasks.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am7b166d9fbbb5ad7f/f1be2dc0064cb7e4a994dd7c/Get_All_Tasks.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Get a Task

The **Get a Task** action retrieves a specific task by ID. To use the Get a Task action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get a Task** action.
2.  On the **Get a Task Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list containing the task in the **Task List** field.
    3.  Select the task to retrieve in the **Task Name** field.![Get_a_Task.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am7392cb1e6a351904/359c71e4c6c40541ea8803af/Get_a_Task.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Move a Task

The **Move a Task** action moves a task to a different position or makes it a subtask of another task. To use the Move a Task action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Move a Task** action.
2.  On the **Move a Task Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list containing the task in the **Task List** field.
    3.  Select the task to move in the **Task Name** field.
    4.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Select a task to make this task a subtask of in the **New Parent Task** field.
        2.  Select a task to position this task after in the **Previous Sibling Task** field.![Move_a_Task.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am8ed94e4cad3d73a1/cb0df0111550817e1084dbba/Move_a_Task.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Update a Task

The Update a Task action updates an existing task's properties. To use the Update a Task action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Update a Task** action.
2.  On the **Update a Task Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google account](https://tasks.google.com/tasks/) as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the task list containing the task in the **Task List** field.
    3.  Select the task to update in the **Task Name** field.
    4.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter the new title for the task in the **New Title** field.
        2.  Enter new notes or description for the task in the **New Notes** field.
        3.  Enter the new due date in RFC 3339 format in the **New Due Date** field (e.g., 2024-12-31T00:00:00.000Z).
        4.  Select the new status for the task from the **New Status** dropdown: **Action required**, **Completed**.![Update_Task.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am4f141ab5a5bee422/d8de61471f98502aa653e88e/Update_Task.png?locale=en-us)

3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

This completes the **Google Tasks** connector's setup.
