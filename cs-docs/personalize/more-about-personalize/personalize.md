---
title: "Personalize Connector"
description: "Use the Personalize connector to automate the retrieval of audiences and experiences from Contentstack’s Personalize platform.
"
url: /agent-os/personalize
---

# Personalize Connector

## Personalize Connector

Contentstack [Personalize](/docs/personalize/about-personalize) is an optimization engine designed to tailor content based on information gathered about user preferences. By using the logged observations, you can provide targeted content experiences in real time to your customers or audiences depending on their own preferences.

Personalize offers two distinct types of experiences:

-   **Segmented Experience:** Used when you want to show a particular variation to the visitor based on demographics, referrers, and other relevant factors.
-   **A/B Test Experience:** Used when you want to measure the performance of multiple variations.

Within experiences, you can create different Variants of content which you can use within the CMS Entries for Content Types.

**Note:** Variant Groups in the CMS are equivalent to Experiences created in a Personalize project. You can create variants (entries) in the CMS for these Variant Groups.

The Personalize connector lets you fetch the details of all the Audiences and Experiences created in your Personalize project.

Details of each action are covered in their respective sections.

## What You Will Learn

-   How to connect your Personalize account to the connector.
    
-   How to set up the Personalize connector in a Configure Action Step.
    
-   How to configure each connector action to fetch audiences, experiences, and versions.
    

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   A Personalize project with audiences and experiences
-   A connected Personalize account  
    
    To use the Personalize connector, you must first add your account. To do so, follow the steps given below:
    
    ### Connect your Personalize Account
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **Personalize** connector.![Select the Personalize connector](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4f95eba2d182b52/66477249d4d02e94412ea5fe/Select_Connector.png)
    4.  Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Get All Audiences** action.![Select the Get All Audiences action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13130d60aa1da223/66f41100848c0a89806175f2/Get_All_Audiences_Action.png)
    5.  On the **Configure Action** page, click the **\+ Add New Account** to add your Personalize account.![Add a new Personalize account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt669d4d1d9ac25f69/664773acb2e852c2d44513f6/Add_Account.png)
    6.  In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.![Authorize OAuth permissions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf496420cba6f1bd8/66477249d4d02e67e52ea5fa/Authorize_Account.png)
    7.  In the pop-up, select your organization to complete the authorization.![Select your organization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12017a380cdf6437/66477249dda14b7494dff0a7/Select_Organization.png)
    8.  In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize** to complete authorization.![Authorize module-specific access rights](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf02285070ae2f6a1/66477249a3f9df01f9c105f0/Authorize_Organization.png)
    9.  Provide an Account Name and then click **Save**.![Name and save the account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f0fcc80d0639197/6647744c4ac76e724740f33b/Save.png)

Once done, you can go ahead and set up your Personalize connector.

## Set up the Personalize Connector

Perform the following steps to set up the Personalize connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Personalize** connector.![Select the Personalize connector](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4f95eba2d182b52/66477249d4d02e94412ea5fe/Select_Connector.png)
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
4.  Under **Choose an Action**, you will see these actions: **Get All Audiences**, **Get All Experiences**, **Get All Versions**, **Get a Single Audience**, **Get a Single Experience**, and **Get Audience(s) of a Variant**.![Choose an Action list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd394bce7ebdd9682/66f411003666b01f92badd41/Select_Actions.png)

Let’s look at each of them in detail.

## Get All Audiences

This action fetches the details of all the audiences from a Personalize project.

1.  Under **Choose an Action** tab, select the **Get All Audiences** action.
2.  On the **Get All Audiences Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account](#connect-your-personalize-account) step.
    2.  Select a **Project** from the **Lookup** list.
    3.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Select Audiences** field.![Get All Audiences configuration fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb3352c1a18d057f/66477220a3f9df4bbfc105ea/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test the Get All Audiences action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.![Get All Audiences output, then Save and Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec579e8c4a31f086/66477220a3f9dfa7b9c105e8/Save_Exit.png)

## Get All Experiences

This action fetches the details of all the experiences from a Personalize project.

1.  Under **Choose an Action** tab, select the **Get All Experiences** action.
2.  On the **Get All Experiences Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account](#connect-your-personalize-account) step.
    2.  Select a **Project** from the **Lookup** list.![Get All Experiences configuration fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9f0af8cf7b4f901/66477213342fb51b6f62c699/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test the Get All Experiences action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.![Get All Experiences output, then Save and Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb9f32a44fd6eb49/66477213efc97aba284c04ee/Save_Exit.png)

## Get All Versions

This action fetches the details of all the versions of an experience from a Personalize project.

**Note:** By default, the audiences of the active version will be fetched.

1.  Under **Choose an Action** tab, select the **Get All Versions** action.
2.  On the **Get All Versions Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account](#connect-your-personalize-account) step.
    2.  Select a **Project** and **Experience** from the **Lookup** list. This will fetch all the versions of an experience.![Get All Versions configuration fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47adfe0a835acd0b/66f410cc003e8e4da23f5d69/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.![Test the Get All Versions action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.![Get All Versions output, then Save and Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a59aa1504d8eea2/66f410cc520e9c67ccb42ca5/Save_Exit.png)

## Get a Single Audience

This action fetches the details of a single audience from a Personalize project.

1.  Under **Choose an Action** tab, select the **Get a Single Audience** action.
2.  On the **Get a Single Audience Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account](#connect-your-personalize-account) step.
    2.  Select a **Project** and an **Audience** from the **Lookup** list.![Get a Single Audience configuration fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7935f56922773e27/6647722dacadaf587d727d35/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.![Test the Get a Single Audience action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.![Get a Single Audience output, then Save and Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8012a4429c501b09/6647722dd4d02e7fbf2ea5f6/Save_Exit.png)

## Get a Single Experience

This action fetches the details of a single experience from a Personalize project.

1.  Under **Choose an Action** tab, select the **Get a Single Experience** action.
2.  On the **Get a Single Experience Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account](#connect-your-personalize-account) step.
    2.  Select a **Project** and an **Experience** from the **Lookup** list.![Get a Single Experience configuration fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22cc3627981c3a8d/6647723cefc97a85394c04f3/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.![Test the Get a Single Experience action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.![Get a Single Experience output, then Save and Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57b9a4d13b1bacb7/6647723c0a0de68a883146e6/Save_Exit.png)

## Get Audience(s) of a Variant

This action fetches the details of all the audiences of a variant in a variant group.

1.  Under **Choose an Action** tab, select the **Get Audience(s) of a Variant** action.
2.  On the **Get Audience(s) of a Variant Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Personalize account as shown in the [Connect your Personalize Account](#connect-your-personalize-account) step.
    2.  Select a **Stack**, **Variant Group**, and **Variant** from the **Lookup** list.![Get Audience(s) of a Variant configuration fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a32778daacdf43a/66f410eeee6d378b5ea75964/Select_Fields.png)
    3.  Optionally, enable the **Show Optional Fields** toggle to mark the **Fetch audiences of the draft version** checkbox. This will fetch the audiences defined in the draft version of the variant.![Enable Fetch audiences of the draft version](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38b19ff7574571ea/66f410ee833cff293bebc7b7/Show_Optional_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.![Test the Get Audience(s) of a Variant action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.![Get Audience(s) of a Variant output, then Save and Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf271ea2023cf4913/66f410eee397230929391685/Save_Exit_Action.png)

This sets the **Personalize** connector.

## Related Resources

-   [Personalize Management API: Get All Audiences](/docs/developers/apis/personalize-management-api/audiences#get-all-audiences)
-   [Personalize Management API: Get All Experiences](/docs/developers/apis/personalize-management-api/experiences#get-all-experiences)
-   [Personalize Management API: Get All Experience Versions](/docs/developers/apis/personalize-management-api/experiences#get-all-experience-versions)
