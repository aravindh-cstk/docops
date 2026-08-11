---
title: "Contentstack Management - Variants Actions"
description: "Use the Contentstack Management Variants actions to automate variants based operations.
"
url: /agent-os/contentstack-management-variants-actions
---

# Contentstack Management - Variants Actions

## Contentstack Management - Variants Actions

[Variants](/docs/personalize/about-variants) are the different variations of an entry displayed to different audiences created within a Personalize project.

The Contentstack Management Variant Actions lets you update, publish, and fetch the details of all the variants in a Variant Group.

**Note:** You can create an [Entry Variant](/docs/headless-cms/create-an-entry-variant) for Variant Groups via Automations or the CMS. However, audiences for Experiences can be created **only** via the Contentstack Personalize platform.

![image1.jpg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91ef7ea1a19cf36c/671901c61491ac32ca4c7794/image1.jpg)

Let’s look at each of them in detail.

## Get All Variants of a Content Type

This action fetches the details of all the variants for the selected content type.

1.  Under **Choose an Action** tab, select the **Get All Variants of a Content Type** action.
2.  On the **Get All Variants of a Content Type** **Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
    2.  Select a **Stack** and **Content** **Type** from the **Lookup** list.  
        ![Select_Fields_Get_All_Variants_of_a_Content_Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf56f0c26be1e677b/682b052b377d2d7e5723089d/Select_Fields_Get_All_Variants_of_a_Content_Type.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  On successful configuration, you can see the below output. Click **Save and Exit**.
    
    ![image3.jpg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1660b4b08476773e/67190169a8ba14e2346eef94/image3.jpg)

## Get All Variants of an Entry

This action fetches the details of all the variants of a specific entry for the selected content type.

1.  Under **Choose an Action** tab, select the **Get All Variants of an Entry** action.
2.  On the **Get All Variants of an Entry** **Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
    2.  Select a **Stack**, **Content Type**, and **Entry** from the **Lookup** list.![Select_Fields_Get_All_Variants_of_an_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted873bcd130b59e6/682b052b64f73f1196901b1d/Select_Fields_Get_All_Variants_of_an_Entry.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdbfef8846801a1e3/66f417a4f82be113727f7dd2/Save_Exit.png)

## Get a Single Variant

This action fetches the details of a single variant from a selected Variant Group.

1.  Under **Choose an Action** tab, select the **Get a Single Variant** action.
2.  On the **Get a Single Variant Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
    2.  Select a **Stack**, **Variant Group**, and **Variant** from the **Lookup** list.
        
        ![Select_Fields_Get_a_Single_Variant.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d3206e0c66a97a1/682b052ba4165a1b24adea32/Select_Fields_Get_a_Single_Variant.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d5f3e689d01ddfe/66f417b21c93ab52fbd54dcd/Save_Exit.png)

## Publish Variant(s) of an Entry

This action publishes the entry’s existing variant(s).

1.  Under **Choose an Action** tab, select the **Publish Variant(s) of an Entry** action.
2.  On the **Publish Variant(s) of an Entry Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
    2.  Select a **Stack**, **Branch**, **Content Type**, **Entry**, **Variant Group**, and **Variant(s)** from the **Lookup** list.  
        ![Select_Fields_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5adbf883c3955585/682b06e6a4165af6c9adea40/Select_Fields_Publish.png)
    3.  Select the **Locale(s)** and **Environment(s)** to publish the entry’s variant. You can select multiple locales and environments.
        
        ![Select_Field2_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f3bb2826904785a/682b06e5951e4b7605042ef7/Select_Field2_Publish.png)
    4.  Optionally, enable the **Show Optional Fields** toggle button to schedule the publishing activity. You can mark the checkboxes for **Nested reference publishing**, **Publish latest base**, **Publish latest base conditionally**.
        
        **Additional Resource:** Refer to the [Publish an Entry Variant](https://www.contentstack.com/docs/headless-cms/publish-an-entry-variant/) document to learn more.
        
        ![Show_Optional_Fields_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta67f23368b2bffce/682b07347ce594fa5e0c6993/Show_Optional_Fields_Publish.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1a8db4999de08fe/66f417c78a50c0151068fbed/Save_Exit.png)

## Update a Variant of an Entry

This action updates the content of an entry’s existing variant in the Variant Group.

1.  Under **Choose an Action** tab, select the **Update a Variant of an Entry** action.
2.  On the **Update a Variant of an Entry Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
    2.  Select a **Stack**, **Content Type**, **Entry**, **Variant Group**, and **Variant** from the **Lookup** list. ![Select_Fields_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc3f1dce0f5d297f/682b0812ef59b107cf6b5290/Select_Fields_Update.png)
    3.  Enter the **Entry Data** to update the variant in JSON format.![Entry_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt803fc691cd009d04/66f417d33816cb0a7ccfec2c/Entry_Field.png)
        
        **Sample JSON:**
        
        ```
        {
          "entry": {
            "title": "Sample Title Updated",
            "name": "Jane Doe",
            "group": {
              "multi_line": "This is the updated multi-line field content."
            },
            "global_field": {
              "single_line": "This is the updated single-line field content."
            }
          }
        }
        ```
        
    4.  Enter or fetch the **Change** **Set** data to update the variant content in JSON format.
        
        Change Set represents a subset of fields and their updated values from the entry data. It indicates that only certain fields are updated, while the rest of the data remains unchanged.
        
        ![Change_Set.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d7d45123f659a99/6794ebf4a326205e43291f47/Change_Set.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bade2d32b9c9036/66f417d3ee6d374962a759c8/Save_Exit.png)
