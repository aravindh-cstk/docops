---
title: "[Automations guides and connectors] - Contentstack Trigger"
description: Contentstack Trigger for Automation Hub connectors, including prerequisites and setup steps for supported trigger events.
url: https://www.contentstack.com/docs/agent-os/contentstack-trigger
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
  - automation-builders
version: current
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Contentstack Trigger

This page explains how to configure the Contentstack Trigger in Automate, including prerequisites, connecting your Contentstack account, and setting up supported trigger events. It is intended for developers and automation builders who want to trigger automations based on Contentstack events such as entry, asset, workflow, release, and branch activity.

## Contentstack Trigger

The Contentstack trigger lets you add Contentstack-specific trigger events, such as the creation/updating/publishing/unpublishing/deletion/deployment, etc., of workflows, entries, releases, global fields, assets, branches, and/or content types. With the Entry Comment Trigger, you can trigger an automation when an entry comment is created, updated or deleted.

## Prerequisites

To use the Contentstack Management connector, you first need to add your [Contentstack account](https://www.contentstack.com/login). To do so, follow the steps given below:

### Connect your Contentstack Account to Automate

- Click **Configure Trigger **from the left navigation panel.
- Within the **Configure Trigger**, click the **Contentstack **connector.![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd102e7034cb29a0/6683e87a3d793f9f92768f8f/Select_Trigger.png)
- Under **Choose Trigger** tab, select any one trigger event from the list. Here, we are selecting the **Entry Comment **trigger.![Select_Entry_Comment_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt947af919a8cc9aad/663da06aabb6506fa03bde89/Select_Entry_Comment_Trigger.png)
- On the **Configure Trigger **page, click the **+ Add New Account** to add your Contentstack account.![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt121e93d37ea8568f/6683e87a62008a349910bc50/Add_Account.png)
- Select a way to add a new account. You can authenticate your account in two ways: **Contentstack OAuth** or **Management Token**.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b3e4620943849cf/660a41ca1b5a584959adc9e8/Authorize_Account.png)

      If you select **Contentstack OAuth** and click **Proceed**, the Manage Permissions modal will open, as shown below. Provide the OAuth permissions for all the values by checking the boxes and click **Authorize**.

        **Note: **Contentstack offers support for [Branches](../developers/branches/about-branches.md) in Automate. You must authenticate and re-authorize your existing account by checking all the permissions to add your Contentstack account.

- In the pop-up, select your organization to complete the authorization.![Select_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt96ced61a3a48f48b/656daf7dae62f7796af682fd/Select_Organization.png)
- In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize **to complete authorization.![Authorize_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58cd95e87f126f3f/6602bc9bdb68ba97b139e838/Authorize_Organization.png)
- Provide an Account Name** **and then click **Save**.![Save_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa0dd4d11504d599/6601a877c19510f2b7decebe/Save_Account.png)
- If you select **Management Token **and click **Proceed**, the **Authorize **modal will open. Enter a **Title **and the **Management Token **of your stack and click **Authorize**.

Once done, you can go ahead and set up your Contentstack Trigger.

## Set up the Contentstack Trigger

Perform the following steps to set up the Contentstack Trigger:

- From the left navigation panel, click **Configure Trigger**.
- Within the **Configure Trigger **Step, click the **Contentstack **connector.![Select_Contentstack_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6454fb2a4242c11/66a8c4b62fce4524936fce16/Select_Contentstack_Trigger.png)
- Under **Choose Trigger**, you will find the following trigger events for the Contentstack trigger:
      **Asset Trigger: **Triggered when you create/update/publish/unpublish/delete assets.
- **Branch Trigger: **Triggered when you create/delete branch and assign/unassign branch aliases.
- **Content Type Trigger: **Triggered when you create/update/delete content types.
- **Entry Comment Trigger:** Triggered when you create/update/delete entry comments.
- **Entry Trigger: **Triggered whenever you create/update/publish/unpublish/delete entries.
- **Global Field Trigger: **Triggered when you create/update/delete global fields.
- **Release Trigger:** Triggered when you deploy a release to an environment.
- **Workflow Trigger:** Triggered when a workflow stage changes.![Select_Trigger_Events.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt99ddca20423a5936/663da06a044f23484d59f37e/Select_Trigger_Events.png)

**Note: **After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the Revert Changes button.

Let’s look at each of them in detail.

### Asset Trigger

The Asset Trigger event lets you trigger an automation when you create/update/publish/unpublish/delete assets.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger **tab, select **Asset Trigger**.
- On the **Asset Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the dropdown, i.e., **Asset Created **and select a **Stack**, and **Branch** from the **Lookup **dropdown.
  For Asset Trigger, you will find the following events:
          **Asset Created: **When you create a new asset in your stack.
- **Asset Updated: **When you update an asset.
- **Asset Deleted: **When you delete an asset.
- **Asset Published: **When you publish your assets to a publishing environment.
- **Asset Publish Failed: **When asset publishing fails due to error.
- **Asset Unpublished: **When you unpublish or remove your assets from a publishing environment.
- **Asset Unpublish Failed: **When the asset unpublishing activity fails.
- **ALL: **When you perform any of the above activities on an asset.

        **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).

- **[Optional] **Enable the **Show Optional Fields **toggle button to display the **Environment **field.![Select_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6a2e4ca52e57051e/66a8c42ac10344956206767f/Select_Environment.png)
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2bfedc823c5ef13f/66a8c42aa4a657a6b81de3cb/Test_Trigger.png)
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8410dde08406a29/66a8c42a2b7be56790a76668/Save_Exit_Button.png)

This sets your **Asset **Trigger.

### Branch Trigger

The Branch Trigger event lets you trigger an automation when you create or delete a branch. It also invokes the trigger when branch aliases are assigned or unassigned.

**Example:**
Set up an automation with the Branch Trigger and Slack Action. With this automation, you can send a slack notification to the relevant team members/Slack channel when a new branch is created, informing the users about the purpose of the new branch.

**Note:** You must have the [Branches](../developers/branches/about-branches.md) feature enabled for your stack. For more information, please reach out to our [Support Team](mailto:support@contentstack.com).

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger** tab, select **Branch Trigger**.
- On the **Branch Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the drop-down, i.e, **Branch Created**. Select a **Stack** from the **Lookup** drop-down.
  For Branch Trigger, you will find the following module-specific sub-events:
          **Branch Created**: Triggers when you create a new branch in the selected stack.
- **Branch Deleted**: Triggers when you update a branch in the selected stack.
- **Branch Alias Assigned**: Triggers when you assign an alias to a branch in the selected stack.
- **Branch Alias Unassigned**: Triggers when you unassign an alias from a branch in the selected stack.
- **All**: Triggers when you perform any of the above activities on a branch or branch alias in the selected stack.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58b59cb4c311e248/663dd3b52a72d9c4e617a4c8/Select_Fields.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.

  **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click **Retest** to fetch the data you created in Contentstack.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24e8d29ae35d4edc/663dd3b5e7f45d8a038b0889/Test_Trigger.png)
- When successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde5c57a395066086/663dd3b5f6a9a3c7cb286b79/Save_Exit.png)

This sets your Branch Trigger.

### Content Type Trigger

The Content Type Trigger event lets you trigger an automation when you create/update/delete content types.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger **tab, select **Content Type Trigger **.
- On the **Content Type Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the dropdown, i.e., **Content Type Created **and select a **Stack,** and **Branch** from the **Lookup **dropdown
  For Content Type Trigger, you will find the following events:
          **Content Type Created: **When you create a new content type.
- **Content Type Updated: **When you update a content type.
- **Content Type Deleted: **When you delete a content type.
- **ALL: **When you perform any of the above activities on a content type.

        **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).

- **[Optional] **Enable the **Show Optional Fields **toggle button to display the specific **Content Type.**![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfaea3f83a9644f0b/66a8c6d12fce4547746fce33/Show_Optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.

  **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click Retest to fetch the data you created in Contentstack.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte1f5a4cabcbbd040/66a8c6d2610c41ad51420395/Test_Trigger.png)
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91022d0b2bbd08c8/66a8c6d1a3b12ea8d05f5e13/Save_Exit.png)

This sets your **Content Type **trigger.

### Entry Trigger

The Entry Trigger event lets you trigger an automation when you create/update/publish/unpublish/delete entries.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger **tab, select **Entry Trigger**.
- On the **Entry Trigger Configure Trigger **page, enter the details given below:

      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.

- Select the trigger event from the dropdown, i.e, **All. **Select a **Stack,** and **Branch** from the **Lookup **dropdown.
  For Entries, you will find the following module-specific sub-events:
          **Entry Created: **Triggers when you create a new entry
- **Entry Updated: **Triggers when you update an entry
- **Entry Deleted: **Triggers when you delete an entry
- **Entry Published: **Triggers when you publish an entry
- **Entry Unpublished: **Triggers when you unpublish an entry
- **Entry Publish Failed: **Triggers when an entry publish activity fails
- **Entry Unpublish Failed: **Triggers when an entry unpublish activity fails
- **ALL: **Triggers when you perform any of the above activities on an entry

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

- **[Optional] **Enable the **Show Optional Fields **toggle button to display the **Content Type **and **Environment **fields.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt34fd59d3f677bf5e/66a8c763bb9512d459022a5c/Show_Optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.

    **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click Retest to fetch the data you created in Contentstack.

- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte25d7f8ba6a86685/66a8c762610c4192cb4203a5/Save_Exit.png)

This sets your **Entry **trigger.

### Entry Comment Trigger

The Entry Comment Trigger event lets you trigger an automation when a comment is created/updated/deleted for an entry.

**Example:**
Set up an automation with the Entry Comment Trigger and Slack Action. With this automation, you can send a slack notification to the relevant team members/Slack channel when a user creates, updates or deletes an entry’s comment.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger** tab, select **Entry Comment Trigger**.
- On the **Entry Comment Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the drop-down, i.e, **Entry Comment Created**. Select a **Stack**, and **Branch** from the **Lookup** drop-down.
  For Entry Comment Trigger, you will find the following module-specific sub-events:
          **Entry Comment Created**: Triggers when you create a new entry comment.
- **Entry Comment Updated**: Triggers when you update an entry comment.
- **Entry Comment Deleted**: Triggers when you delete an entry comment.
- **All**: Triggers when you perform any of the above activities on an entry comment.

        **Note:** By default, the main branch is selected (even if the **Branch** field is empty).

- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Content Type** and **Entry** fields.

  **Note:** If you do not select any content type or entry, you will be able to invoke the trigger event on all entries or content types within the selected stack.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt005448c74ebcb302/663d993d907afe2ae9af8b0d/Show_Optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.

  **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click **Retest** to fetch the data you created in Contentstack.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc5c9c19d0b2d8f1/663d993dd94eaf19afd2b50f/Test_Trigger.png)
- When successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90b3ebc958a4cfde/663d993df807b270b8e9c783/Save_Exit.png)

This sets your Entry Comment Trigger.

### Entry Variant Trigger

The Entry Variant Trigger event lets you trigger an automation when an entry’s variants are created, updated, or deleted.

**Note:** The [Entry Variants](../content-managers/entry-variants/about-entry-variants.md) feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

**Example**

You can set up an automation with the Entry Variant Trigger and Slack Connector to send a Slack notification to the relevant team members or Slack channel when a user creates, updates, or deletes an entry’s variant in the CMS.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger** tab, select **Entry Variant Trigger**.
- On the **Entry Variant Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the dropdown, for example, **All**. Then, select a **Stack** and a **Branch** from the **Lookup** list.For Entry Variant Trigger, you will find the following module-specific sub-events:

          **Entry Variant Created**: Triggers when you create a new entry variant.
- **Entry Variant Updated**: Triggers when you update an entry’s variant.
- **Entry Variant Deleted**: Triggers when you delete an entry’s variant.
- **All**: Triggers when you perform any of the above activities (create/update/delete) on an entry variant.

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

- **Optionally**, enable the **Show Optional Fields** toggle button to display the **Content Type**, **Entry**, **Variant Group**, and **Variant** fields.

  **Note:** If you do not select any of the optional fields, you will be able to invoke the trigger event on **all **entries, content types, and variants within the selected stack.![ShowOptionalFields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt174c3e2582a4476a/678f78dcee8f383da0aa3858/ShowOptionalFields.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.
![TestTrigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltca4639637c6ae4fc/678f78dcff9d110e7b7d9f08/TestTrigger.png)    **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click **Retest** to fetch the data you created in Contentstack.
- When successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![SaveandExit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedaad628d6cb4908/678f78dc4a780327276c05da/SaveandExit.png)

This sets your Entry Variant Trigger.

### Global Field Trigger

The Global Field Trigger event lets you trigger an automation when you create/update/delete global fields.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger **tab, select **Global Field Trigger **.
- On the **Global Field Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the dropdown, i.e., **Global Field Created **and select a **Stack**, and **Branch **from the **Lookup **dropdown.
  For Global Field, you will find the following events:
          **Global Field Created: **When you create a global field.
- **Global Field Updated: **When you update a global field.
- **Global Field Deleted: **When you delete a global field.
- **ALL: **When you perform any of the above activities on a global field.

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

- **[Optional] **Enable the **Show Optional Fields **toggle button to display the specific **Global Field**.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa2dc451a42560aa/66a8c8952b7be565f8a766ab/Show_Optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.

  **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click Retest to fetch the data you created in Contentstack.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt166006749e78202d/66a8c895adec83574f2d0cd8/Test_Trigger.png)
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9410922cf0c39ae2/66a8c89555b2352912e7ad99/Save_Exit.png)

This sets your **Global Field **trigger.

### Job Trigger

The Job Trigger event lets you trigger an automation when you publish or unpublish a job. A job refers to any **bulk action **you perform, such as publishing or unpublishing entries, assets, and releases. Each job can include multiple related items that require a specific action. For example, publishing an entry along with all the assets and entries it references would be considered a single job.

**Note:** You must have the [Nested Reference Publishing](../content-managers/publish-content/about-nested-reference-publishing.md) feature enabled for your organization. For more information, please reach out to our [Support Team](mailto:support@contentstack.com).

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger** tab, select **Job Trigger**.
- On the **Job Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the drop-down, i.e, **Job Published**. Select a **Stack **from the **Lookup **drop-down.
  For Job Trigger, you will find the following module-specific sub-events:
          **Job Published:** Triggers when you bulk publish entries/assets/releases.
- **Job Unpublished:** Triggers when you bulk unpublish entries/assets/releases.
- **All:** Triggers when you perform any of the above activities.
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the **Environment **field.

  **Note:** If you do not select any environment, the trigger event will be invoked across all environments within the selected stack.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad794c28b9e351b2/668250fbc8ca77feb1cdf564/Show_Optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger** to execute and test the trigger that you configured.

  **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click **Retest** to fetch the data you created in Contentstack.
- When successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd06831c4cbb3eda4/668250fbe31634667871db05/Save_Exit.png)

This sets your Job Trigger.

### Release Trigger

The Release Trigger event lets you trigger an automation when you deploy a release in an environment.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger **tab, select **Release Trigger **.
- On the **Release Trigger Configure Trigger** page, enter the details given below:
      Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.
- Select the trigger event from the dropdown, i.e., **Release Deployed **and select a **Stack **, and **Branch** from the **Lookup **dropdown.

        **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).

- **[Optional] **Enable the **Show Optional Fields **toggle button to display the **Release **, and **Environment **fields.![Show_optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6afa0993379c16c/66a8c94fcfbd230c247d7834/Show_optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.

  **Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click Retest to fetch the data you created in Contentstack.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e6568105f8940ba/66a8c94feb20b470672cfa00/Test_Trigger.png)
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit **.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20d0138139860a4a/66a8c94fc56a10408b3c10e7/Save_Exit.png)

This sets your **Release **trigger.

### Workflow Trigger

The Workflow Trigger event lets you trigger an automation when a workflow stage changes.

Let’s look at the steps to set up the trigger event.

- Under the **Choose Trigger **tab, select **Workflow Trigger**.
- On the **Workflow Trigger Configure Trigger **page, enter the details given below:Click** + Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](#connect-your-contentstack-account-to-automate) step.Select the trigger event from the dropdown, i.e., **Workflow Stage Changed **.
- Select a **Stack **, **Branch, Content Type **, and **Workflow **from the **Lookup **dropdown.

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

- **[Optional] **Enable the **Show Optional Fields **toggle button to display the **Workflow Stage **field.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte31c8fc9e43b6272/66a8c9bfadec834cf42d0d03/Show_Optional_Fields.png)
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5423f11615bd9c50/66a8c763610c41ff4d4203a9/Test_Trigger.png)
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit **.![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19fe29b63b0f6970/66a8c9bf7f0b6778c3fd1be3/Save-Exit.png)

This sets your **Workflow **trigger.

## Common questions

### Which authentication methods can I use to connect my Contentstack account?
You can authenticate your account in two ways: **Contentstack OAuth** or **Management Token**.

### What happens if I re-configure a different trigger after configuring one?
After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the Revert Changes button.

### Why is the **main** branch selected even when the **Branch** field is empty?
**Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

### Can I test a trigger without performing the trigger event in Contentstack?
**Note:** You can preview the latest data created in Contentstack without performing the trigger event. The latest data will be fetched and displayed to you after you test the trigger. You must click **Retest** to fetch the data you created in Contentstack.