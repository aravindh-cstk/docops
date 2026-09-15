---
title: "Importing External Experiences"
description: "Importing External Experiences"
url: /lytics/importing-external-experiences
uid: blt76dbb113a3a23e54
---

# Importing External Experiences

## Importing External Experiences

## Importing External Experiences

You can import existing marketing initiatives currently managed by your channel providers, which enables you to quickly gain insights about the campaigns you’re already running. You can then take action by connecting these Experiences to your Lytics audiences.

While you can monitor Experiences and activate audiences for them within Lytics, the management of external Experiences still happens inside your channel tools. If you want to stop, delete, or edit the execution of an Experience, you need to do so within the provider. If you choose to delete an Experience in Lytics that still has a matching campaign in your channel tool, it will show up on the import list and can be re-imported.

### Centralize cross-channel reporting

Lytics serves as a central hub to monitor your cross-channel marketing, making it easier to understand and improve the performance of your campaigns. For example, instead of logging into Facebook to check your ad campaign metrics and Iterable to check your email newsletter open rates, you can monitor the performance of both tools within your Lytics dashboard.

To start monitoring external Experiences on Lytics, follow the batch import steps.

### Monitor Experiences via batch import

On your Lytics dashboard, navigate to **Experiences**, and select **Add Experiences > Import**. ![import experiences 0820](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am853965f5d1578402/47c83b19b8f101dd3c7d6870/img-0152.png)

#### Select your provider

The Lytics Canvas connects out-of-the-box with select channel providers. Over time, more providers will be added to this list. If you want to use a provider that is not currently available, you can use the "Generic Experience" workflow to export Lytics audiences to any of your integrated providers.

![batch-import-experiences-providers-0920](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2c72d85ad53df230/5a1f2b14821e0d628b46dec9/img-0153.png)

#### Authorize

Next, you will be prompted to select an authorization for your chosen provider. Existing authorizations will be shown. If you have multiple accounts within a particular channel such as Facebook, you will choose which account to import from. If you don’t have an authorization, you will be prompted to add one before continuing. For Facebook, there is a second step for authorizing Ad Set ID after you’ve selected your account ID.

#### Import Experiences

Finally, select the Experiences you want to import into Lytics (up to 10 at a time). The total number of Experiences you can bring into Lytics is only limited by the amount in your connected provider. However, to have meaningful and accurate reporting, it's recommended to only import Experiences that will add value to your use cases.

![select import adsets 2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama01bef2fb9647729/e2e0dfccb2f8f0a63c9f5ecd/img-0154.png)

Completed experiences, such as an Ad Set that previously "ended", will not show on the list of importable Experiences. But if you have Ad Sets in Facebook that are saved as drafts, paused, or currently running, those will be available to import.

### Connect Experiences with Lytics audiences

Once you start monitoring external Experiences, you can activate them by adding a Lytics audience. This lets you enrich your existing campaigns with Lytics behavioral audiences, content affinities, and delivery optimization. An example use case is to conserve Facebook ad spend by only targeting “Currently Engaged” users who have a high affinity for the content of a particular campaign. Leveraging data science under the hood, Lytics audiences can bring immediate value to your existing marketing campaigns.

If you have already imported an external Experience, you can activate it from the Experience summary view by clicking **Edit** in the top right.

![add fb audience experience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7d6f1e658fcaa806/508a1ab825424f4f10f50884/img-0155.png)

If you want to activate an Experience that you haven't imported yet, follow the single import steps below, which will guide you through the Experience editor.

### Activate Experiences via single import

To activate an Experience that you haven't imported yet, you will follow the workflow of creating a new Experience in Lytics. From the Experiences list view, click **Add Experiences** > **New**. ![create new experience 0820](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0aa2c7506898d3af/612f6367173be4198cacec4c/img-0156.png)

Select your chosen provider and then **Import** the campaign, ad set, or journey. This example will continue with importing a SendGrid campaign.

![import-sendgrid-campaign-1219](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amea4909f1d4ff6413/3fe5fe4ba21ecb1874bcaf02/img-0157.png)

Next you will select an Authorization for your chosen provider as described above.

![sendgrid-import-exp-auth](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9ea7e77e9f90ad4e/9a7ef68802e7273f79652103/img-0158.png)

Then you will select the campaign or ad set to import. Note that here you can only import one Experience at a time. Click **Import 1 Experience** to continue. ![sendgrid-import-campaign](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8cafc41b238abca0/140c6da6be062ebeaf628b55/img-0159.png)

#### Complete the Experience Editor steps

Finally, you will complete the following Experience Editor steps:

1.  Target: configure your target audience for this Experience.
2.  Configure provider: choose how the audience for your Experience will be exported to the third-party tool.
3.  Configure delivery: option to automatically determine when to deliver messages to individual users on the third-party tool.

Upon completion, your Experience will be ready to publish.

![experience-editor-steps-sendgrid](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf943cce577da1143/38069586bc3ecb118ea7e379/img-0160.png)
