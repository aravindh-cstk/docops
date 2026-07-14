---
title: "[Automations guides and connectors] - Contentstack Management - Branch Alias Actions"
description: Contentstack Management - Branch Alias Actions for Automation Hub connectors, including assigning/reassigning, deleting, and retrieving branch aliases.
url: https://www.contentstack.com/docs/agent-os/contentstack-management-branch-alias-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Contentstack Management - Branch Alias Actions

This page explains the Contentstack Management connector’s Branch Alias actions in Automation Hub, including how to assign/reassign aliases, delete aliases, and retrieve alias details. It is intended for developers and automation builders configuring workflows that manage branches and aliases in a Contentstack stack.

## Contentstack Management - Branch Alias Actions

Contentstack enables the assignment of [aliases](../developers/branches/about-aliases.md) to any [branch](../developers/branches/about-branches.md) of your stack, acting as pointers to specific branches. With the Branch Alias actions, you can retrieve details of all branch aliases, assign or reassign aliases to a specific branch, and delete them as required. These actions streamline branch control, ensuring an organized and efficient development process with Contentstack Management Branch Alias.

**Note: **You must have the [Branches](../developers/branches/about-branches.md) feature enabled for your stack to use the Branch Alias actions. For more information, please reach out to our [Support Team](mailto:support@contentstack.com).

Let’s look at the action in detail.

## Assign/Reassign a Branch Alias

This action assigns/reassigns an existing/new alias to a branch in a stack.

- Under the **Choose an Action** tab, select the **Assign/Reassign a Branch Alias** action.
- On the **Assign/Reassign a Branch Alias Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate)step.
- Select a **Stack** from the **Lookup** list.
- Select an **Action** from the dropdown. You have two options: **Assign** and **Reassign**.**Assign**: Select this option to assign a new alias name to a branch.
- **Reassign**: Select this option to assign an existing alias to a branch.
- Select or enter a **Branch Alias** from the **Lookup** list.

  **Note:** If you select the **Assign** action, make sure to manually enter the new alias name before assigning it to the branch to prevent errors.
- Select the **Target Branch** from the **Lookup** list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf46aa7b509b3556b/67906fa1ee8f384cd7aa42cb/Select_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3d25209fe710a45/67906fa2cc4fb93e1ccecd8b/Test_Action.png)
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddad16f914468dfb/67906fa13b4213478d05bb61/Save_Exit.png)

## Delete a Branch Alias

This action deletes a branch alias from a stack.

- Under the **Choose an Action** tab, select the **Delete a Branch Alias** action.
- On the **Delete a Branch Alias Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and a **Branch Alias **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c9bccca01274906/67906f33bc13493863d5bc1c/Select_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0250045647b27be3/67906f33259b9a3e32266905/Test_Action.png)
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e6a17b24f510ee5/67906f339d626e20bd11d61a/Save_Exit.png)

## Get All Branch Aliases

This action fetches the details of all the branch aliases from a stack.

- Under the **Choose an Action** tab, select the **Get All Branch Aliases** action.
- On the **Get All Branch Aliases Configure Action **page, enter the details given below:Click** + Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **from the **Lookup **list.
- **Optionally**, enable the **Show Optional Fields** toggle button to display the **Branch Alias Limit** and **Skip Branch Alias (Pagination)** fields.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f4e646525b5cea5/67906ead79558d5d724d0943/Select_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c9c62fbf9ff6661/67906eacd8a19e70f01b4283/Test_Action.png)
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb67fb1526285c856/67906eace05cbf43a3562152/Save_Exit.png)

## Get a Single Branch Alias

This action fetches the details of a single branch alias from a stack.

- Under the **Choose an Action **tab, select the **Get a Single Branch Alias **action.
- On the **Get a Single Branch Alias Configure Action **page, enter the details given below:Click **+ Add New Account **button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Branch Alias **from the **Lookup **list.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltffef3fda9ffdda90/67906ef7a5499b0f2714c989/Select_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb8ac1c494bb8324/67906ef7e92e099530c64bfc/Save_Exit.png)

## Common questions

### Do I need any feature enabled to use these actions?
Yes. **Note: **You must have the [Branches](../developers/branches/about-branches.md) feature enabled for your stack to use the Branch Alias actions.

### What is the difference between Assign and Reassign?
**Assign**: Select this option to assign a new alias name to a branch.  
**Reassign**: Select this option to assign an existing alias to a branch.

### Where do I connect my Contentstack account for these actions?
Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.

### How do I test an action after configuring it?
Click the **Test Action** button to test the configured action.