---
title: "[Automations guides and connectors] - Launch Trigger"
description: Documentation for configuring Deployment and Environment trigger events for the Contentstack Launch connector in Automation Hub.
url: https://www.contentstack.com/docs/agent-os/launch-trigger
product: Contentstack
doc_type: automation-hub-connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Launch Trigger

This page explains how to set up the Contentstack Launch connector trigger events in Automation Hub, including Deployment and Environment triggers. It is intended for developers and automation builders who want to run automations based on Launch deployment or environment lifecycle events.

## Launch Trigger

The Launch trigger lets you add Deployment and Environment based trigger events, such as create/update/delete/start/fail/complete, etc., for your [Contentstack Launch](../developers/launch.md) projects.

With the Launch trigger, you can create trigger events when a deployment has started/failed/completed. Similarly, you can create trigger events when an environment is created/updated/deleted in the Contentstack Launch.

## Set up Launch

You will find the following trigger events for the Launch connector:
- [**Deployment Trigger**](#deployment-trigger)**:** Triggered whenever a deployment is started/completed/failed in the Contentstack Launch.
- [**Environment Trigger**](#environment-trigger)**:** Triggered whenever an environment is created/deleted/updated in the Contentstack Launch.

Let’s look at each of them in detail.

### Deployment Trigger

The Deployment trigger event lets you trigger an automation whenever a deployment is modified.

Let’s look at the steps to set up the trigger event.
- Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger **step, click the **Launch** connector.![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt832e09bd54a49834/667142a96e8ad04f3d1bbe64/Select_Trigger.png)
- Under the **Choose Trigger** tab, select **Deployment** Trigger.![Select_Deployment_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt111c99a01a9b1020/667142987b258d189ec8a7b5/Select_Deployment_Trigger.png)
- In the **Configure Trigger **tab, click** + Add New Account** to add your Launch account.![Add_Account_Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt292478e6254dacc6/667142984969e4ba1885b414/Add_Account_Deployment.png)
- In the pop-up window, mark the checkbox for all the OAuth permissions and then click the **Authorize** button.![Authorize](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefd741e3039e446e/64252a3bba298210fbb60042/Authorize.png)
- In the pop-up that appears, select your organization to complete the authorization.![Organization-Access](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38b4d047eb7c7b15/64252a3c961eef10e9c7bf71/Organization-Access.png)
- Enter an **Account Name** and then click the **Save** button.![Save-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta901d2e426ce6a6f/64252a3b2cf9c710750b3c05/Save-Account.png)
- Select the trigger event from the dropdown, i.e, **All**.
For Deployment, you will find the following sub-events:
      **Deployment Started: **Triggers when a new deployment is initiated.
- **Deployment Failed: **Triggers when a deployment fails.
- **Deployment Completed: **Triggers when a deployment is completed.
- **All:** Triggers when any of the above events is performed on a deployment.
- Select a Launch **Project** from the **Lookup** dropdown.![Select_Fields_Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94e2d8634dc98a53/667142991774d27261a16ac5/Select_Fields_Deployment.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.![Test_Trigger_Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51a36249c0908c22/667142a97b258d6ea0c8a7b9/Test_Trigger_Deployment.png)
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.

    **Note: **In the Contentstack Launch, you can either [import your project](../developers/launch/import-project-using-github.md) from a GitHub repository or [upload a zip file from your system](../developers/launch/import-project-using-file-upload.md).

This sets your **Deployment** trigger.

### Environment Trigger

The Environment trigger event lets you trigger an automation whenever an environment is modified.

Let’s look at the steps to set up the trigger event.
- Click **Configure Trigger** from the left navigation panel.
- Within the** Configure Trigger** step, click the **Launch** trigger.
- Under the **Choose Trigger** tab, select **Environment** Trigger.![Select_Environment_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d0ec4f4d2d03cac/66714298d3f1302c4c3dbabd/Select_Environment_Trigger.png)
- In the** Configure Trigger** tab, click **+ Add New Account **to add your Launch account.![Add_Account_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bce217f378c4509/667142987b258df33fc8a7b1/Add_Account_Environment.png)
- In the pop-up window, mark the checkbox for all the OAuth permissions and then click the **Authorize** button.
- In the pop-up that appears, select your organization to complete the authorization.
- Enter an **Account Name** and then click the **Save** button.
- Select the trigger event from the dropdown, i.e, **All**.
For Environment, you will find the following sub-events:
      **Environment Created:** Triggers when a new environment is created.
- **Environment Deleted:** Triggers when an environment is deleted.
- **Environment Updated:** Triggers when an environment is updated.
- **All: **Triggers when any of the above events is performed on an environment.
- Select a Launch **Project** from the **Lookup** dropdown.![Select_Fields_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f1a4e749c09a0dc/6671429946a037c935a29524/Select_Fields_Environment.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.

    **Note:** While creating a new [environment](../developers/launch/environments.md) for a Launch project, you must [upload a zip file of your project](../developers/launch/import-project-using-file-upload.md). For projects deployed on GitHub, you must select a branch to fetch the project and create a new environment.
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7228778dc451beef/6671429876906d78ff9ee66d/Save_Exit_Environment.png)

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert ****Changes **button.

This sets your Environment trigger.

## Common questions

### What events can I trigger with the Launch connector?
You can use Deployment Trigger and Environment Trigger events, including started/failed/completed for deployments and created/deleted/updated for environments, or select **All**.

### Do I need to authorize OAuth permissions when adding a Launch account?
Yes. When you click **+ Add New Account**, you must mark the checkbox for all the OAuth permissions and then click the **Authorize** button.

### What does “Test Trigger” do?
It executes and tests the trigger that you configured so you can verify the output before clicking **Save and Exit**.

### Can I revert trigger configuration changes?
Yes. If you re-configure any other trigger you will be prompted to revert to the previously configured trigger, and you can revert back by clicking the **Revert Changes** button.

Filename: automations-guides-and-connectors-launch-trigger.md