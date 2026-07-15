---
title: "[Automations guides and connectors] - JIRA"
description: Set up and use the JIRA action connector to create a task, create an issue, and update an issue in JIRA.
url: https://www.contentstack.com/docs/agent-os/jira
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - JIRA

This page explains how to set up and use the JIRA action connector in Automation Hub. It is intended for developers and automation builders who need to configure Jira account authorization and run actions to create tasks, create issues, or update issues in JIRA.

## JIRA

The JIRA action connector lets you create a task, create an issue, and update an issue in JIRA.

## Set up JIRA

Perform the following steps to set up JIRA action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Jira **connector.![JIRA.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8704562b858e8036/6527f8c9931d631e7f9f18a9/JIRA.png)
- Under **Choose an Action** tab, you will see three actions: **Create a Task** (creating a ticket in Jira), **Create an Issue** (creating an issue in Jira) , and **Update an Issue** (updating an issue in Jira).

Let’s look at each of them in detail.

Action 1: Select the** Create a Task** action:
- Click the **+ Add New Account **button to set up your Jira account (see screenshot in next step).![Jira-Create-Task-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5193adcaaae9e02b/63dcadecc338484e3b194f4a/Jira-Create-Task-Add-New-Account.png)
- In the **Authorize modal**, enter a **Title**, an **Email**, an** API Token** and a **Cloud Instance URL**, and then click** Authorize**.
To generate the API Token and Cloud Instance URL, log in to the JIRA dashboard and perform the following steps:
Log in to JIRA using your authorized email address and go to your **Account Settings**.
- In the **Security** section, click **Create and manage API tokens**.
- Click **Create API token**.![Jira-API-Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43f0cea33a8ef66a/63dd0138f4b2e369e5c73021/Jira-API-Dashboard.png)
- Provide a **Label** for the token and click **Create**.
- **Copy** this token and save it somewhere as you won’t be available to view it once you close the modal.
**Note:** For more information on API Tokens, refer to the How to create API Tokens in JIRA document.
- Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.

Additional Resource: Read more on [Create a Project | Customize your project](https://support.atlassian.com/jira-work-management/docs/create-a-project/#Createaproject-Customizeyourprojectstage2).
- On the **Create a Task** **Configure Action** page, enter the details given below:Select the **Assignee ID** of the user to whom you want to assign the ticket from the Lookup list.
- Select **Project Key** of the project in which you want to create the ticket from the Lookup list.
- Provide a suitable **Title **for the task.

Click the **Show optional fields** toggle button to provide the **Description** and **Labels.**
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Jira-Create-Task-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc4f3fd0e6305451e/63dcadecf4b2e369e5c72f03/Jira-Create-Task-Input.png)
- Check if the details are correct. If yes, click **Test Action**.![Jira-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d6e2ff9fd48c959/63dcadec7ccfaf4bc687f044/Jira-Test-Action.png)
- Once set, click **Save and Exit**.
- Navigate to your JIRA Project. You should see that the ticket has been generated and is placed under **Backlog.
**![Jira-Board-Task.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea5368aa37630b4b/63dd066e4af9a97be711cef3/Jira-Board-Task.png)

Action 2: Select the** Create an Issue** action:
- Click the **+ Add New Account **button to set up your Jira account (see screenshot in next step).![Jira-Create-Issue-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5599788643f505ee/63dcade090fb3569e47fafb6/Jira-Create-Issue-Add-New-Account.png)
- In the **Authorize modal**, enter a **Title**, an **Email**, an** API Token** and a **Cloud Instance URL**, and then click** Authorize**.
To generate the API Token and Cloud Instance URL, log in to the JIRA dashboard and perform the following steps:
Log in to JIRA using your authorized email address and go to your **Account Settings**.
- In the **Security** section, click **Create and manage API tokens**.
- Click **Create API token**.
- Provide a **Label** for the token and click **Create**.
- **Copy** this token and save it somewhere as you won’t be available to view it once you close the modal.
**Note:** For more information on API Tokens, refer to the How to create API Tokens in JIRA document.
- Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.

Additional Resource: Read more on [Create a Project | Customize your project](https://support.atlassian.com/jira-work-management/docs/create-a-project/#Createaproject-Customizeyourprojectstage2).
- On the **Create an Issue ****Configure Action** page, enter the details given below:Select a **Project Key **of the project in which you want to create an issue from the Lookup list.
- Select an **Issue Type** from the Lookup list.
**Note: **It is mandatory to select a **Parent Issue** if you choose the issue type as a sub-task.
- Select the **Assignee ID** from the Lookup list.
- Provide a suitable **Title **for the issue.

Click the **Show optional fields** toggle button to provide the **Description** and **Labels.**
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Jira-Create-Issue-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt017e61b1d11dc03e/63dcadec14a2b44fa11def43/Jira-Create-Issue-Input.png)
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.
- Navigate to your JIRA Project. You should see that the ticket has been generated and is placed under **Backlog.
**![Jira-Board-Issue.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt60d09d5b8f645dd5/63dd066e842f040f19e3e9b5/Jira-Board-Issue.png)

Action 3: Select the** Update an Issue** action:
- Click the **+ Add New Account **button to set up your Jira account (see screenshot in next step).![Jira-Update-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1db53650ddc8689/63dcade0bd97af5094b65962/Jira-Update-Add-New-Account.png)
- In the **Authorize modal**, enter a **Title**, an **Email**, an** API Token** and a **Cloud Instance URL**, and then click** Authorize**.
To generate the API Token and Cloud Instance URL, log in to the JIRA dashboard and perform the following steps:
Log in to JIRA using your authorized email address and go to your **Account Settings**.
- In the **Security** section, click **Create and manage API tokens**.
- Click **Create API token**.
- Provide a **Label** for the token and click **Create**.
- **Copy** this token and save it somewhere as you won’t be available to view it once you close the modal.
**Note:** For more information on API Tokens, refer to the How to create API Tokens in JIRA document.
- Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.

Additional Resource: Read more on [Create a Project | Customize your project](https://support.atlassian.com/jira-work-management/docs/create-a-project/#Createaproject-Customizeyourprojectstage2).
- On the **Update an Issue** **Configure Action** page, enter the details given below:Select a **Project Key **of the project in which you want to update an issue from the Lookup list.
- Select an **Issue **(of which you want to update the status) from the Lookup list.
- Select the **Status** from the Lookup list.![Jira-Update-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3e839b738a1fb68/63dcade0d0a39b6b6a9bdbcb/Jira-Update-Configure-Action.png)
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Jira-Update-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a30ed2f9eaf9a7e/63dcade06d590c21c347cd3f/Jira-Update-Input.png)
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.
- Navigate to your JIRA Project. You should see that the ticket has been generated and is placed under **Backlog.
**![Jira-Board-Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d457e5225e77ead/63dd066e295f164f53ab3448/Jira-Board-Update.png)

This sets your **JIRA** action connector.

## Common questions

### Do I need an API Token to use the JIRA action connector?
Yes. In the **Authorize modal**, you must enter an **API Token** along with **Title**, **Email**, and **Cloud Instance URL**.

### Where do I find the Cloud Instance URL?
Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.

### What actions are available in the JIRA connector?
Under **Choose an Action** tab, you will see three actions: **Create a Task**, **Create an Issue**, and **Update an Issue**.

### What should I do after testing an action?
After you click **Test Action** and confirm the details are correct, click **Save and Exit**.