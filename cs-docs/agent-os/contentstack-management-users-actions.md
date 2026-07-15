---
title: "[Automations guides and connectors] - Contentstack Management - Users Actions"
description: Contentstack Management - Users Actions in Automation Hub connectors, including the Get User Information action.
url: https://www.contentstack.com/docs/agent-os/contentstack-management-users-actions
product: Contentstack
doc_type: automation-hub-connector
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Contentstack Management - Users Actions

This page describes the Contentstack Management Users action available in Automation Hub connectors, intended for developers and admins who need to fetch user-related details (such as name and email) from a Contentstack stack while configuring automations.

## Contentstack Management - Users Actions

Contentstack, being an Enterprise Content Management (ECM) system, accommodates numerous [users](../developers/invite-users-and-assign-roles/about-stack-users.md) with different permissions collaborating together. In Contentstack, all the member accounts of a stack are referred to as users. By using the Contentstack Management Users action, you can fetch user-related details, such as name, email, and so on.

Let’s look at the action in detail.

## Get User Information

This action gets a user's first name, last name and email address based on the user ID.

- Under **Choose an Action** tab, select the **Get User Information** action.
- On the **Get User Information Configure Action** page, enter the details given below:  
  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Provide a **User ID **to fetch the user details.

  **Note:** To fetch the user ID, you need to configure an action and select the dropdown to fetch from the previous step, where user details can be fetched.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc896ef7ecb20da38/66f28a30ee6d37e2aea74767/Select_Fields.png)
- You can easily select multiple user IDs from the **Suggested Data Elements** drop-down. This will automatically retrieve all the user IDs generated in the previous steps, streamlining the process.![Select_Fields_User_Profile.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba274015f55e0c4c/682b22e5725241c7d18ceee4/Select_Fields_User_Profile.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6f30aabc225fdc31/66f28a2f8429273a92eed865/Save_Exit.png)

## Common questions

### What does the Get User Information action return?
This action gets a user's first name, last name and email address based on the user ID.

### Where do I get the User ID for this action?
**Note:** To fetch the user ID, you need to configure an action and select the dropdown to fetch from the previous step, where user details can be fetched.

### Can I use more than one User ID in a single action configuration?
You can easily select multiple user IDs from the **Suggested Data Elements** drop-down. This will automatically retrieve all the user IDs generated in the previous steps, streamlining the process.

### Do I need to connect my Contentstack account before testing the action?
Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.