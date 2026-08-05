---
title: "[Automations guides and connectors] - Contentstack Management - Branches Actions"
description: Contentstack Management - Branches Actions
url: https://www.contentstack.com/docs/agent-os/contentstack-management-branches-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Contentstack Management - Branches Actions

This page describes the available Contentstack Management Branches actions in Automation Hub, including how to configure and test each action. It is intended for developers and automation builders who need to perform branch-based operations (create, delete, fetch, merge) on Contentstack stacks using connector actions.

## Contentstack Management - Branches Actions

[Branches](../developers/branches/about-branches.md) offer isolated workspaces for safe, independent development of new features or updates. With branches you can create multiple copies of your stack content. You can perform branch-based operations using the following Contentstack Management Branches actions.

**Note: **You must have the [Branches](../developers/branches/about-branches.md) feature enabled for your stack. For more information, please reach out to our [Support Team](mailto:support@contentstack.com).

Let’s look at each of them in detail.

## Create a Branch

This action creates a new branch in a stack.

- Under **Choose an Action** tab, select the **Create a Branch** action.
- On the **Create a Branch** **Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate)step.
- Select a **Stack **and **Branch **from the **Lookup **list. The new branch will be a copy of the source branch.

  **Note:** By default, the **main **branch is selected.
- Provide a **Branch UID**. The Branch UID must be lowercase, with no spaces, and maximum 15 characters.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta07a84d693b91307/6628a385cac84890bf28d7aa/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3046ad289994d899/65df076172b3870ba422b7ab/Test_Action.png)
- On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt942b266709cfb3d1/6628a385528fc1dc4655b36a/Save_Exit.png)

## Delete a Branch

This action deletes an existing branch in a stack.

- Under **Choose an Action** tab, select the **Delete a Branch **action.
- On the **Delete a Branch Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Branch **from the **Lookup **list. The selected branch will be deleted.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2b10497e8aea9db/6628a391c9de465b73d48dc6/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.

  **Warning: **This deletes all the content types and assets in the selected branch.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f01134bb4086947/6628a39145f9899bc3cf572d/Save_Exit.png)

## Get All Branches

This action fetches the details of all the branches in a stack.

- Under **Choose an Action** tab, select the **Get All Branches** action.
- On the **Get All Branches** **Configure Action **page, enter the details given below:Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list.
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the **Branch Limit **and **Skip Branch (Pagination)** fields.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a81ece4a5d8c195/662f634da9b0ab21f6b946bd/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c88ea1501605b38/6628ad40b8b5ce433adc1e43/Save_Exit.png)

## Get a Single Branch

This action fetches the details of a single branch in a stack.

- Under **Choose an Action **tab, select the **Get a Single Branch **action.
- On the **Get a Single Branch Configure Action **page, enter the details given below:Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Branch **from the **Lookup **list. The details of the selected branch will be fetched.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21363845e5cecaea/6628b57551b16f2837c4e019/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.

## Merge Branch

This action lets you merge the content types and global fields from a compare branch into the base branch.

- Under **Choose an Action** tab, select the **Merge Branch **action.
- On the **Merge Branch Configure Action **page, enter the details given below:Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Compare Branch**, and **Base Branch** from the **Lookup **list.The content types and global fields are copied from the **Compare **(source) branch into the **Base **(target) branch based on the **Merge Strategy**.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24890b50c623d9d4/662a59b9b0544170749a0c71/Select_Fields.png)
- Select a **Merge Strategy** to merge the branch content.Let’s look at each of them in detail:

**Merge Prefer Base: **This will merge the changes from the compare branch into the base branch. In case of conflicts, it will retain the base branch changes.

- **Merge Prefer Compare: **This will merge the changes from the compare branch into the base branch. In case of conflicts, it will retain the compare branch changes.
- **Overwrite With Compare:** This will overwrite the base branch changes with compare branch changes.
- **Merge New Only: **This will only merge the new changes in the base branch.
- **Merge Modified Only Prefer Base: **This will only merge the modified changes from the compare branch into the base branch, and will keep the base branch changes in case of conflicts.
- **Merge Modified Only Prefer Compare: **This will only merge the modified changes from the compare branch into the base branch, and will keep the compare branch changes in case of conflicts.
- **Ignore: **This is a default value, which will not merge the branch content.
- Enter additional descriptive comment(s) for the merge action in the **Merge Comment** field. The specified comments can be fetched via the ‘Get a Single Merge Job’ actions for future reference.![Merge_Strategy_Comments.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65672cf91a3ab443/662a59b9b8b5ce0b7bdc2e55/Merge_Strategy_Comments.png)
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- On successful configuration, you can see the below output. Click **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0b2b7d5dccab5db/662a59b9a02ad71461eea9cd/Save_Exit.png)

## Get a Single Merge Job

This action fetches the details of a single merge job in a stack.

- Under **Choose an Action** tab, select the **Get a Single Merge Job **action.
- On the **Get a Single Merge Job** **Configure Action **page, enter the details given below:Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Merge Job **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt424a33befd419ee7/662a59aba02ad73f2aeea9c9/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87239bea4479f0e7/662a59ab107b28a0f96c7486/Save_Exit.png)

## Common questions

### Do I need to enable anything before using these actions?
Yes. **Note: **You must have the [Branches](../developers/branches/about-branches.md) feature enabled for your stack.

### What happens if I delete a branch?
**Warning: **This deletes all the content types and assets in the selected branch.

### What is the default source branch when creating a branch?
**Note:** By default, the **main **branch is selected.

### Where can I reference merge comments later?
The specified comments can be fetched via the ‘Get a Single Merge Job’ actions for future reference.

<!-- filename: automations-guides-and-connectors-contentstack-management-branches-actions.md -->