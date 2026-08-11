---
title: "Contentstack Management - Users Actions"
description: "Use the Contentstack Management Users action to automate fetching all user info."
url: /agent-os/contentstack-management-users-actions
---

# Contentstack Management - Users Actions

## Contentstack Management - Users Actions

Contentstack, being an Enterprise Content Management (ECM) system, accommodates numerous [users](/docs/headless-cms/about-stack-users) with different permissions collaborating together. In Contentstack, all the member accounts of a stack are referred to as users. By using the Contentstack Management Users action, you can fetch user-related details, such as name, email, and so on.

![User_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt790fe49aa6552bd0/6601ade20901369680d96fe8/User_Information.png)

Let’s look at the action in detail.

## Get User Information

This action gets a user's first name, last name and email address based on the user ID.

1.  Under **Choose an Action** tab, select the **Get User Information** action.
2.  On the **Get User Information Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/agent-os/contentstack-management#connect-your-contentstack-account-to-automate) step.
    2.  Provide a **User ID** to fetch the user details.
        
        **Note:** To fetch the user ID, you need to configure an action and select the dropdown to fetch from the previous step, where user details can be fetched.
        
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc896ef7ecb20da38/66f28a30ee6d37e2aea74767/Select_Fields.png)
    3.  You can easily select multiple user IDs from the **Suggested Data Elements** drop-down. This will automatically retrieve all the user IDs generated in the previous steps, streamlining the process.  
        ![Select_Fields_User_Profile.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba274015f55e0c4c/682b22e5725241c7d18ceee4/Select_Fields_User_Profile.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6f30aabc225fdc31/66f28a2f8429273a92eed865/Save_Exit.png)
