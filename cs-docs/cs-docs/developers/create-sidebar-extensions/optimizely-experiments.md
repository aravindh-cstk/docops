---
title: "[Extensions] - Optimizely Experiments"
description: Integrate Optimizely Experiments with Contentstack’s UI using a Sidebar Extension to view and manage experiments from entry pages.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/optimizely-experiments
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Optimizely Experiments

This page explains how to create and configure the **Optimizely Experiments** Sidebar Extension in Contentstack, so developers and stack administrators can retrieve, display, and manage Optimizely experiment details directly within entry pages.

## Optimizely Experiments

The **Optimizely Experiments** extension integrates your existing Optimizely Experiments with [Contenstack’s UI](/docs) and allows you to retrieve and display the Experiment details into your entry page. Additionally, this extension enables you to start and pause Optimizely experiments directly from the sidebar and view their variations, traffic distributions, and Audiences.

**Warning:** The Optimizely Experiments Sidebar Extension will run only for the Optimizely X Web version.

This step-by-step guide explains how to create an **Optimizely Experiments** extension in Contentstack. The steps to be performed are as follows:
- [Retrieve your project ID](#retrieve-your-project-id)
- [Create an Experiment in Optimizely](#create-an-experiment-in-optimizely)
- [Generate access token](#generate-access-token)
- [Add “Optimizely Experiments” extension to your stack](#add-optimizely-experiments-extension-to-your-stack)
- [Use the extension](#use-the-extension)

## Retrieve your project ID

To use this extension, you will need the ID of your Optimizely project. If you haven’t created any projects, refer to the[Create a new project page](https://help.optimizely.com/Set_Up_Optimizely/Manage_projects_in_Optimizely_X_Web#Create_a_new_project) to create one.
On successful creation of your project, you will see your project ID in the URL.

**Note**: The project ID is the part after "projects/" in the URL. For example, in “https://app.optimizely.com/v2/projects/11111111111,” the number "11111111111" is the project ID.

Save this ID as you will need it in **Step 4** when configuring your Optimizely extension.

## Create an Experiment in Optimizely

Start by creating an Experiment in Optimizely. You can add variations, audiences, and other such parameters to your experiment. You can also choose or add Audiences to the experiment.

To create an Experiment in Optimizely, you can follow the steps given in the [Six steps to create an experiment in Optimizely Web](https://help.optimizely.com/Build_Campaigns_and_Experiments/Six_steps_to_create_an_experiment_in_Optimizely_X_Web) documentation[https://help.optimizely.com/Build_Campaigns_and_Experiments/Six_steps_to_create_an_experiment_in_Optimizely_X_Web](https://help.optimizely.com/Build_Campaigns_and_Experiments/Six_steps_to_create_an_experiment_in_Optimizely_X_Web).

## Generate access token

In order to use Optimizely resources within Contentstack, you will need to authenticate by providing your access token. You can create new tokens by following the steps given in this [guide](https://help.optimizely.com/Integrate_Other_Platforms/Generate_a_personal_access_token_in_Optimizely_X_Web).

Note down this token since you will need it while configuring the Optimizely extension in Step 4.

## Add "Optimizely Experiments" extension to your stack

To add Optimizely Experiments to your [stack](/docs/developers/set-up-stack/about-stack), log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to the stack and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- Click on the **+ New Extension** button on the top-right corner and select **Create new.**
- In the **Select Extension Type** dialog box, select **Sidebar Extension**.
- You will be led to the **Create New Extension** details page, where you need to enter details in the fields as given below:
**Title**: Provide a suitable title. For example, **Optimizely Experiments**.
- **Hosting method**: Select **Hosted on Contentstack**. As soon as you do this, you will see the **Extension Source Code** field below.
- **Extension Source Code**: In this field, you need to** enter the extension code**. Download the source code for the extension from its [GitHub](https://github.com/contentstack/extensions/tree/master/optimizely-experiments) page[https://github.com/contentstack/extensions/tree/master/optimizely-experiments](https://github.com/contentstack/extensions/tree/master/optimizely-experiments).
- **Config Parameters**: Enter the configuration details for the extension. Here, you need to mention the project ID you created in ****Step 1 and the Optimizely API access token you generated in ****Step 3.

```
{
    "access_token": "1:pl1abaBAbabaBabAb_aBa1BaBAb11ab4AbA1AB_A1Bab-ABabaBA",
    "project_id": "11111111111"
}
```

**Scope** - You can choose to incorporate this Sidebar Extension in either **All Content Types** or **Specific Content Types**. Selecting the latter option displays a list of [content types](/docs/developers/create-content-types/about-content-types) from which you can select the required ones.
- Click **Save** to create your Sidebar Extension.

Now, let’s understand how you can start using your Sidebar Extension extension in your entries.

## Use the extension

Once you have added this Sidebar Extension, you can use it in entries of selected content type(s). Let’s look at the steps involved in using this Sidebar Extension.

Go to your stack and click on the “Entries” icon on the left navigation panel.
- Select the content type for which you have enabled the Sidebar Extension and click on an [entry](/docs/content-managers/working-with-entries/about-entries)
- Click the “Sidebar Extensions” icon on the right side of the page, and select **Optimizely Experiments** from the dropdown menu.
- The selected Sidebar Extension expands on the sidebar displaying the list of experiments that you have already created.
- Click on the “Run” or “Pause” Action buttons to run or pause your experiments, respectively.

Clicking on the "Result" icon will lead you to the **Experiment Results** page of Optimizely, where you will see the detailed report of your experiment.

Finally, click on a particular experiment to view Experiment details such as Variations and their traffic distribution, and view their assigned Experiment Audiences within the sidebar.

Once done using the Sidebar Extension, click on the close (x) button.

## Common questions

### Does this extension work with all Optimizely versions?
No. **Warning:** The Optimizely Experiments Sidebar Extension will run only for the Optimizely X Web version.

### What configuration values are required to set up the extension?
You need the Optimizely **project ID** and an Optimizely **access token**, entered under **Config Parameters**.

### Where do I use the Optimizely Experiments Sidebar Extension after installing it?
You use it inside entries of the selected content type(s) by opening **Sidebar Extensions** and selecting **Optimizely Experiments**.

### Can I start or pause experiments from Contentstack?
Yes, you can click on the “Run” or “Pause” Action buttons to run or pause your experiments, respectively.