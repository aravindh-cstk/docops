---
title: "Contentstack Management - Branches Actions"
description: "Use the Contentstack Management Branches actions to automate branch based operations."
url: /agent-os/contentstack-management-branches-actions
uid: bltf9b14a962e48773e
---

# Contentstack Management - Branches Actions

## Contentstack Management - Branches Actions

[Branches](/docs/headless-cms/about-branches) offer isolated workspaces for safe, independent development of new features or updates. With branches you can create multiple copies of your stack content. You can perform branch-based operations using the following Contentstack Management Branches actions.

![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9adf98a7447450af/662a5a54a02ad77f64eea9e0/Select_Actions.png)

**Note:** You must have the [Branches](/docs/headless-cms/about-branches/) feature enabled for your stack. For more information, please reach out to our [Support Team](mailto:support@contentstack.com).

Let’s look at each of them in detail.

## Create a Branch

This action creates a new branch in a stack.

1.  Under **Choose an Action** tab, select the **Create a Branch** action.
2.  On the **Create a Branch** **Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions)step.
    2.  Select a **Stack** and **Branch** from the **Lookup** list. The new branch will be a copy of the source branch.

        **Note:** By default, the **main** branch is selected.

    3.  Provide a **Branch UID**. The Branch UID must be lowercase, with no spaces, and maximum 15 characters.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta07a84d693b91307/6628a385cac84890bf28d7aa/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3046ad289994d899/65df076172b3870ba422b7ab/Test_Action.png)
5.  On successful configuration, you can see the below output. Click **Save and Exit**.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt942b266709cfb3d1/6628a385528fc1dc4655b36a/Save_Exit.png)

## Delete a Branch

This action deletes an existing branch in a stack.

1.  Under **Choose an Action** tab, select the **Delete a Branch** action.
2.  On the **Delete a Branch Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** and **Branch** from the **Lookup** list. The selected branch will be deleted.  

        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2b10497e8aea9db/6628a391c9de465b73d48dc6/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.

    **Warning:** This deletes all the content types and assets in the selected branch.

    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f01134bb4086947/6628a39145f9899bc3cf572d/Save_Exit.png)

## Get All Branches

This action fetches the details of all the branches in a stack.

1.  Under **Choose an Action** tab, select the **Get All Branches** action.
2.  On the **Get All Branches** **Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** from the **Lookup** list.
    3.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Branch Limit** and **Skip Branch (Pagination)** fields.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a81ece4a5d8c195/662f634da9b0ab21f6b946bd/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c88ea1501605b38/6628ad40b8b5ce433adc1e43/Save_Exit.png)

## Get a Single Branch

This action fetches the details of a single branch in a stack.

1.  Under **Choose an Action** tab, select the **Get a Single Branch** action.
2.  On the **Get a Single Branch Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** and **Branch** from the **Lookup** list. The details of the selected branch will be fetched.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21363845e5cecaea/6628b57551b16f2837c4e019/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c88ea1501605b38/6628ad40b8b5ce433adc1e43/Save_Exit.png)

## Merge Branch

This action lets you merge the content types and global fields from a compare branch into the base branch.

1.  Under **Choose an Action** tab, select the **Merge Branch** action.
2.  On the **Merge Branch Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Compare Branch**, and **Base Branch** from the **Lookup** list.

        The content types and global fields are copied from the **Compare** (source) branch into the **Base** (target) branch based on the **Merge Strategy**.

        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24890b50c623d9d4/662a59b9b0544170749a0c71/Select_Fields.png)
    3.  Select a **Merge Strategy** to merge the branch content.

        Let’s look at each of them in detail:

        1.  **Merge Prefer Base:** This will merge the changes from the compare branch into the base branch. In case of conflicts, it will retain the base branch changes.
        2.  **Merge Prefer Compare:** This will merge the changes from the compare branch into the base branch. In case of conflicts, it will retain the compare branch changes.
        3.  **Overwrite With Compare:** This will overwrite the base branch changes with compare branch changes.
        4.  **Merge New Only:** This will only merge the new changes in the base branch.
        5.  **Merge Modified Only Prefer Base:** This will only merge the modified changes from the compare branch into the base branch, and will keep the base branch changes in case of conflicts.
        6.  **Merge Modified Only Prefer Compare:** This will only merge the modified changes from the compare branch into the base branch, and will keep the compare branch changes in case of conflicts.
        7.  **Ignore:** This is a default value, which will not merge the branch content.
    4.  Enter additional descriptive comment(s) for the merge action in the **Merge Comment** field. The specified comments can be fetched via the ‘Get a Single Merge Job’ actions for future reference.  
        ![Merge_Strategy_Comments.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65672cf91a3ab443/662a59b9b8b5ce0b7bdc2e55/Merge_Strategy_Comments.png)
3.  Once done, click **Proceed**. 
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
5.  On successful configuration, you can see the below output. Click **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0b2b7d5dccab5db/662a59b9a02ad71461eea9cd/Save_Exit.png)

## Get a Single Merge Job

This action fetches the details of a single merge job in a stack.

1.  Under **Choose an Action** tab, select the **Get a Single Merge Job** action.
2.  On the **Get a Single Merge Job** **Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** and **Merge Job** from the **Lookup** list.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt424a33befd419ee7/662a59aba02ad73f2aeea9c9/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
5.  On successful configuration, you can see the below output. Click **Save and Exit**.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87239bea4479f0e7/662a59ab107b28a0f96c7486/Save_Exit.png)
