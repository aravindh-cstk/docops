---
title: "[Automations guides and connectors] - Personalize Connector"
description: Documentation for the Personalize Connector in Automation Hub, including prerequisites and available actions.
url: https://www.contentstack.com/docs/agent-os/personalize
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Personalize Connector

This page explains how to connect Contentstack Personalize to Automate (Automation Hub) and configure the Personalize connector actions to fetch audiences, experiences, versions, and variant audience details. It is intended for users setting up third-party service action steps in Automate.

## Personalize Connector

Contentstack [Personalize](../personalize/about-personalize.md) is an optimization engine designed to tailor content based on information gathered about user preferences. By using the logged observations, you can provide targeted content experiences in real time to your customers or audiences depending on their own preferences.

Personalize offers two distinct types of experiences:
- **Segmented Experience:** Used when you want to show a particular variation to the visitor based on demographics, referrers, and other relevant factors.
- **A/B Test Experience:** Used when you want to measure the performance of multiple variations.

Within experiences, you can create different Variants of content which you can use within the CMS Entries for Content Types.

**Note:** Variant Groups in the CMS are equivalent to Experiences created in a Personalize project. You can create variants (entries) in the CMS for these Variant Groups.

The Personalize connector lets you fetch the details of all the Audiences and Experiences created in your Personalize project.

Details of each action are covered in their respective sections.

## Prerequisites

To use the Personalize connector, you must first add your account. To do so, follow the steps given below:

### Connect your Personalize Account to Automate

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Personalize **connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4f95eba2d182b52/66477249d4d02e94412ea5fe/Select_Connector.png)
- Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Get All Audiences** action.![Get_All_Audiences_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13130d60aa1da223/66f41100848c0a89806175f2/Get_All_Audiences_Action.png)
- On the **Configure Action **page, click the **+ Add New Account** to add your Personalize account.![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt669d4d1d9ac25f69/664773acb2e852c2d44513f6/Add_Account.png)
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize **button.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf496420cba6f1bd8/66477249d4d02e67e52ea5fa/Authorize_Account.png)
- In the pop-up, select your organization to complete the authorization.![Select_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12017a380cdf6437/66477249dda14b7494dff0a7/Select_Organization.png)
- In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize **to complete authorization.![Authorize_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf02285070ae2f6a1/66477249a3f9df01f9c105f0/Authorize_Organization.png)
- Provide an Account Name and then click **Save**.![Save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f0fcc80d0639197/6647744c4ac76e724740f33b/Save.png)

Once done, you can go ahead and set up your Personalize connector.

## Set up the Personalize Connector

Perform the following steps to set up the Personalize connector:

- From the left navigation panel, click **Configure Action Step**.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Personalize **connector.

  **Note: **You can sort and search the connector(s) based on the filter.
- Under **Choose an Action**, you will see these actions: **Get All Audiences**, **Get All Experiences**, **Get All Versions**, **Get a Single Audience**, **Get a Single Experience**, and **Get Audience(s) of a Variant**.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd394bce7ebdd9682/66f411003666b01f92badd41/Select_Actions.png)

Let’s look at each of them in detail.

## Get All Audiences

This action fetches the details of all the audiences from a Personalize project.

- Under **Choose an Action** tab, select the **Get All Audiences** action.
- On the **Get All Audiences Configure Action** page, enter the details given below:  
  Click** + Add New Account **button to connect your Personalize account as shown in the [Connect your Personalize Account to Automate](#connect-your-personalize-account-to-automate) step.
- Select a **Project **from the **Lookup **list.
- **[Optional] **Enable the **Show Optional Fields **toggle button to display the **Select Audiences **field.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb3352c1a18d057f/66477220a3f9df4bbfc105ea/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec579e8c4a31f086/66477220a3f9dfa7b9c105e8/Save_Exit.png)

## Get All Experiences

This action fetches the details of all the experiences from a Personalize project.

- Under **Choose an Action** tab, select the **Get All Experiences** action.
- On the **Get All Experiences Configure Action** page, enter the details given below:  
  Click **+ Add New Account **button to connect your Personalize account as shown in the [Connect your Personalize Account to Automate](#connect-your-personalize-account-to-automate) step.
- Select a **Project **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9f0af8cf7b4f901/66477213342fb51b6f62c699/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb9f32a44fd6eb49/66477213efc97aba284c04ee/Save_Exit.png)

## Get All Versions

This action fetches the details of all the versions of an experience from a Personalize project.

**Note:** By default, the audiences of the active version will be fetched.

- Under **Choose an Action** tab, select the **Get All Versions** action.
- On the **Get All Versions Configure Action** page, enter the details given below:  
  Click **+ Add New Account **button to connect your Personalize account as shown in the [Connect your Personalize Account to Automate](#connect-your-personalize-account-to-automate) step.
- Select a **Project **and **Experience **from the **Lookup **list. This will fetch all the versions of an experience.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47adfe0a835acd0b/66f410cc003e8e4da23f5d69/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a59aa1504d8eea2/66f410cc520e9c67ccb42ca5/Save_Exit.png)

## Get a Single Audience

This action fetches the details of a single audience from a Personalize project.

- Under **Choose an Action** tab, select the **Get a Single Audience** action.
- On the **Get a Single Audience Configure Action** page, enter the details given below:  
  Click **+ Add New Account **button to connect your Personalize account as shown in the [Connect your Personalize Account to Automate](#connect-your-personalize-account-to-automate) step.
- Select a **Project **and an **Audience **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7935f56922773e27/6647722dacadaf587d727d35/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8012a4429c501b09/6647722dd4d02e7fbf2ea5f6/Save_Exit.png)

## Get a Single Experience

This action fetches the details of a single experience from a Personalize project.

- Under **Choose an Action** tab, select the **Get a Single Experience** action.
- On the **Get a Single Experience Configure Action** page, enter the details given below:  
  Click **+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account to Automate](#connect-your-personalize-account-to-automate) step.
- Select a **Project **and an **Experience **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22cc3627981c3a8d/6647723cefc97a85394c04f3/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57b9a4d13b1bacb7/6647723c0a0de68a883146e6/Save_Exit.png)

## Get Audience(s) of a Variant

This action fetches the details of all the audiences of a variant in a variant group.

- Under **Choose an Action** tab, select the **Get Audience(s) of a Variant** action.
- On the **Get Audience(s) of a Variant Configure Action** page, enter the details given below:  
  Click **+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account to Automate](#connect-your-personalize-account-to-automate) step.
- Select a **Stack**, **Variant Group**, and **Variant **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a32778daacdf43a/66f410eeee6d378b5ea75964/Select_Fields.png)
- Optionally, enable the **Show Optional Fields** toggle to mark the **Fetch audiences of the draft version** checkbox. This will fetch the audiences defined in the draft version of the variant.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38b19ff7574571ea/66f410ee833cff293bebc7b7/Show_Optional_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.![Save_Exit_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf271ea2023cf4913/66f410eee397230929391685/Save_Exit_Action.png)

This sets the **Personalize **connector.

## Common questions

### Do I need to add a Personalize account before using any action?
Yes. You must add your account using **+ Add New Account** and complete the OAuth authorization before configuring actions.

### Which actions are available in the Personalize connector?
The available actions are **Get All Audiences**, **Get All Experiences**, **Get All Versions**, **Get a Single Audience**, **Get a Single Experience**, and **Get Audience(s) of a Variant**.

### What does “Get All Versions” return by default?
**Note:** By default, the audiences of the active version will be fetched.

### When should I use “Get Audience(s) of a Variant”?
Use it when you need the details of all the audiences of a variant in a variant group, and optionally to fetch audiences defined in the draft version by enabling **Show Optional Fields** and selecting **Fetch audiences of the draft version**.