---
title: "[Automations guides and connectors] - Translate Data using Smartling"
description: Translate Data using Smartling
url: https://www.contentstack.com/docs/agent-os/translate-data-using-smartling
product: Contentstack Automate
doc_type: automation-hub-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Translate Data using Smartling

This page explains how to use Contentstack Automate with the Smartling connector to set up an end-to-end automated translation workflow for Contentstack entries, including pausing/resuming automations and sending Slack notifications. It is intended for developers or implementers configuring Automation Hub projects and connectors, and should be used when you want to translate entry content automatically upon create/update events.

## Translate Data using Smartling

The End-to-End Translation use case shows how you can use Contentstack Automate to set up an automated language translation system for your Contentstack-powered website.

In this use case, you will walk through the steps required to perform end-to-end translation of an entry created/updated in contentstack. Also, you will integrate a communication medium (say slack) to notify us whenever an entry gets successfully translated.
The entire translation process consists of eight major steps right from configuring the entry trigger to setting up the slack channel.

Here is the list of processes we need to execute.
- [Configure Entry Trigger](#configure-entry-trigger)
- [Add Content to a Project](#add-content-to-a-project)
- [Pause an Automation](#pause-an-automation)
- [Download Translated Content](#download-translated-content)
- [Add the Transform Function](#add-the-transform-function)
- [Localize an Entry](#localize-an-entry)
- [Set Entry Workflow](#set-entry-workflow)
- [Send Message](#send-message)

Let’s have a look at the steps in detail.

## Configure Entry Trigger

Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the “Automate” icon.
- Click **+ New Project** to add a new project.
- Click **+ New Automation**.
- Enter the **Automation Name** and **Description**.
- Click **Create**.
- Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger **step, click the **Contentstack** connector.![Select_the_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbcef0c6da43f7209/651b9d4b5554e958f463c8d1/Select_the_Trigger.png)
- Select **Entry ****Trigger**.![Choose-trigger-Event.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8eee1811e4b40ca/63d8ef8cf1b8c22282814f42/Choose-trigger-Event.png)
- Click **+ Add New Account** to add your Contentstack account.![Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94e5f3667a603735/63d8ef8bc9787852a26be6b6/Add-New-Account.png)
- Select the **Event** and the **Stack** for which you want to configure the trigger.![Select-Event-Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89df0b8adeeefab6/63d8efa8071fae111ebfd852/Select-Event-Stack.png)
- Click **Proceed**.
- Click **Test Trigger**.![Test-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf109c95101766b5/63d8efb448166810e8b60c82/Test-Trigger.png)
- Click **Save and Exit**.

## Add Content to a Project

After you configure the entry trigger, the next step is to configure the Smartling action connector by adding a project and the content you want to translate.

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Smartling** connector.![Select_the_Smartling_Connecto.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0947f0ff260594b/651b9d4b7bedef004194c15d/Select_the_Smartling_Connecto.png)
- Click **Add Content to a Project** action.![Add-Content-To-Project-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt663730a635e49cda/63d8ef8bca59cf11374cee2b/Add-Content-To-Project-Action.png)
- Click **+ Add New Account** to add your Smartling account.

  **Note:** To add your Smartling account, refer to the [Smartling Connector](/docs/developers/automation-hub-connectors/smartling/) document.![Add-Smartling-Account-AddContent.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28ca62a2b30cf46a/63d8ef8be4e29e75dc5deac7/Add-Smartling-Account-AddContent.png)
- Select the **Project ID**, the **Locale** in which you want the content to be translated, and add the **Contents**.
- Add the **Callback URL** and click **Proceed**.

  **Note**: Smartling uses the **Callback URL** to resume the automations once the content is translated.![Select-AddProject-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9a56608ee9fdbd6/63d8ef9c9d7bcb54223511a3/Select-AddProject-Fields.png)
- Click **Test Action**.
- You will get the following response once the action is successfully executed.

  **Note:** From the given set of response, preserve the `fileuri` as it will be used in the next steps.![Save-Exit-Smartling.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb19a09c1a6704c9e/63d8ef9c5ba46f75ddba0ef3/Save-Exit-Smartling.png)
- If all looks good, click **Save and Exit** to finish the process.

This sets the Smartling action connector and **Add Content to a Project** step.

## Pause an Automation

The third step requires you to configure the **Pause** connector. The Pause connector lets you pause the automation until Smartling executes the translation process.

Click **+ Add Step** under the Else step from the left navigation panel.
- Within the **Configure Action Step**, click the **Pause** connector.![Select_the_Pause_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf458e817563f5577/651b9d4b8dc13fa7bf8ecab9/Select_the_Pause_Connector.png)
- Under **Choose an Action**, select the **Pause an Automation** action.![Select-pause-Action.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc7898c53f4159cca/63be89dca0db4d3e821efdab/Select-pause-Action.png)
- Specify the properties you preserved in the previous steps such as `file_uri`,`content_type`, and`entry_id` in the given fields. Then, click **Proceed**.![Pause-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt985369d03b80f892/63d8ef9caaf5cc62cfa66136/Pause-Fields.png)
- Click **Test Action**.![Test-Action-Contentstack-Localize-Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1070ebfdb8a76485/63d8efb49d7bcb54223511a7/Test-Action-Contentstack-Localize-Entry.png)
- You will get the following response once the action is successfully executed.![Save-Exit-Pause.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2cad6334b7d4e1b/63d8ef9c2d94ad4c89edc291/Save-Exit-Pause.png)
- If all looks good, click **Save and Exit** to finish the process.

This sets the **Pause** action connector.

## Download Translated Content

Once the content is successfully translated, the next step is to download the translated content.

Click **+ Add Step **under the Else step from the left navigation panel.
- Within the **Configure Action Step**, click the **Smartling** connector.
- Under **Choose an Action**, select the **Download Translated Content **action.![Download-Translated-Content-Smartling.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10485b56c0c756df/63d8ef9cca59cf11374cee2f/Download-Translated-Content-Smartling.png)
- Click **+ Add New Account** to add an account.![Add-Smartling-Account-Download-Content.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98a273d4761e9b65/63d8ef8b35e4be151745b234/Add-Smartling-Account-Download-Content.png)
- Specify the **Project ID**, the **Locale**, and the **File URI** you preserved in the previous steps.![Download-Translated-Content-Smartling-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt621db309a9cdcfe7/63d8ef9ce480c910d1acb5d8/Download-Translated-Content-Smartling-Fields.png)
- Once done, click **Proceed**.
- Click **Test Action**
- You will get the following response once the action is successfully executed.
The translated content is appended in the **data1** response shown here.![Save-Exit-Download-Content-Smartling.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6b5c5b2efef8f07/63d8ef9c59f4a64dd3157d0f/Save-Exit-Download-Content-Smartling.png)
- Click **Save and Exit** to finish the process.

This sets the download translated content action for your **Smartling** connector.

## Add the Transform Function

In the fifth step, you will add the **data1** response preserved in the previous step in a Transform function. This step is required because the Contentstack API expects the translated data in a particular format.

Within the **Configure Action Step**, click the **Transform** connector.![Select_the_Transform_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4be97b73ee864abf/651b9d4becf48b7de0c37b84/Select_the_Transform_Connector.png)
- Under **Choose an Action**, select the **Transform** action.![Select-Transform-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe38533a2536eaac/63d8efa85c5c9c52a32ed048/Select-Transform-Action.png)
- Specify the **Input Name** and **Input Value** for the function in the given fields.![Transform-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt401ad6edadafeb6c/63d8efb48e456d21046c7695/Transform-Fields.png)
- Once done, click **Proceed**.
- Click **Test Action.**********
- You will get the following response once the action is successfully executed.![Save-Exit-Transform.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1b87a7335e9d167/63d8ef9cffb41a7454dbf1fa/Save-Exit-Transform.png)
- Click **Save and Exit** to finish the process.

This sets the **Transform** function.

## Localize an Entry

Click **+ Add Step** under the Else step from the left navigation panel.
- Within the **Configure Action Step**, click the **Contentstack** connector.![Select_the_Contentstack_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcbb6c86df31e48c2/651b9d4becf48b9b44c37b80/Select_the_Contentstack_Connector.png)
- Under **Choose an Action**, select the **Localize Entry** action.![Select-Localize-Entry-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2c485a1e227b1aa/63d8efa8e7a6981129095878/Select-Localize-Entry-Action.png)
- Click **+ Add New Account** to add your Contentstack account.![Add-Contentstack-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7c451250446fd65/63d8ef8b5b2c1e6188c568f0/Add-Contentstack-Account.png)
- Enter details such as **Stack**, **Content Type**, **Entry**, and **Locale**. Also, add the** Entry Data **preserved from the Transform function step ([step 5](#add-the-transform-function)).![Select-Localize-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d89783928564e5f/63d8efa8771d7f10c63c29d7/Select-Localize-Fields.png)
- Once done, click **Proceed**.
- Click **Test Action**.
- You will get the following response once the action is successfully executed.![Save-Exit-Localize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5b32962b2d9ea440/63d8ef9cbbcc27228d8e0219/Save-Exit-Localize.png)
- Click **Save and Exit** to finish the process.

This sets the Localizing an Entry step.

## Set Entry Workflow

The seventh step requires you to add workflow stages for your stack. This will allow you to define different stages of the review process for your team.

Click **+ Add Step** under the Else step from the left navigation panel.
- Within the **Configure Action Step**, click the **Contentstack** connector.
- Under **Choose an Action**, select the **Set Entry Workflow** action.![Select-Workflow-Stage-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9038a8b2a21b008/63d8efb4ddb7a921030a76a5/Select-Workflow-Stage-Action.png)
- Click **+ Add New Account** to add your Contenstack account.![Add-Set-Workflow-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb74f37df2f15dc7b/63d8ef8be480c910d1acb5d4/Add-Set-Workflow-Account.png)
- Add details such as **Stack**, **Content Type**, **Entry**, **Workflow Stage**. You can add dynamic parameters such as **Assignee Name**, **Assignee Role**, **Set Due Date**, **Notify via Email**, **Locale** and let you add **Workflow Comments**.![Set_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f7de6fe582c5de1/651b9f426c9e36dd6bc0a55c/Set_Entry.png)
- Once done, click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit** to finish the process.![Save-Exit-Workflow-Stage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2918c787016b971/63d8ef9c99f0c910e171a237/Save-Exit-Workflow-Stage.png)

This sets the **Set Entry Workflow** step.

## Send Message

The last step is to set up a notification channel in Slack.

Click** + Add Step** under the Else step from the left navigation panel.
- Within the** Configure Action Step**, click the **Slack** connector.![Select_the_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5340c62e4ebe25de/651b9d4bf156d5247caf0c5d/Select_the_Connector.png)
- Under **Choose an Action**, select the **Send Message** action.![Send-Message-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4f1718b33cec990/63d8efb46977b36187ca4e68/Send-Message-Action.png)
- Click **+ Add New Account **to add your Slack account.![Add-Slack-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2a193d8e206426c1/63d908f7e408254c88fc038c/Add-Slack-Account.png)
- Add the desired **Slack Channel** where you want to get the notifications. Enter the **Message** body.![Select-Slack-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf42ea9ffb6d3480f/63d8efa8e4e29e75dc5deacb/Select-Slack-Fields.png)
- Click **Proceed**.
- Click **Test Action.******
- Click **Save and Exit** to finish the process.![Slack-Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea5b783de295a792/63d8efb43f562662ce10ab5f/Slack-Save-Exit.png)

This sets the last step to set up a notification channel in Slack.

## Common questions

### What is the overall goal of this automation?
To set up an automated end-to-end translation workflow for Contentstack entries using Smartling, including resuming the automation after translation and notifying via Slack.

### Why is the Pause connector used?
The Pause connector lets you pause the automation until Smartling executes the translation process.

### What value should be preserved from the Smartling “Add Content to a Project” step?
Preserve the `fileuri` as it will be used in the next steps.

### Where does the translated content appear after download?
The translated content is appended in the **data1** response shown here.