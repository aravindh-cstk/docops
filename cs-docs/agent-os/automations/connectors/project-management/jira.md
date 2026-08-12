---
title: "JIRA"
description: "JIRA"
url: /agent-os/jira
---

# JIRA

## JIRA

The JIRA action connector lets you create a task, create an issue, and update an issue in JIRA.  

## Set up JIRA

Perform the following steps to set up JIRA action connector:

1.  Click **Configure Action Step** from the left navigation panel.  
    
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Jira** connector.  
    ![JIRA.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8704562b858e8036/6527f8c9931d631e7f9f18a9/JIRA.png)  
    
4.  Under **Choose an Action** tab, you will see three actions: **Create a Task** (creating a ticket in Jira), **Create an Issue** (creating an issue in Jira) , and **Update an Issue** (updating an issue in Jira).  
      
    Let’s look at each of them in detail.
Action 1: Select the **Create a Task** action:

![Jira-Create-Task.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc7215b8965514fb/63dcadec7c1d576b69792e9f/Jira-Create-Task.png)

1.  Click the **\+ Add New Account** button to set up your Jira account (see screenshot in next step).  
    ![Jira-Create-Task-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5193adcaaae9e02b/63dcadecc338484e3b194f4a/Jira-Create-Task-Add-New-Account.png)  
    
2.  In the **Authorize modal**, enter a **Title**, an **Email**, an **API Token** and a **Cloud Instance URL**, and then click **Authorize**.  
    To generate the API Token and Cloud Instance URL, log in to the JIRA dashboard and perform the following steps:  
    1.  Log in to JIRA using your authorized email address and go to your **Account Settings**.
    2.  In the **Security** section, click **Create and manage API tokens**.
    3.  Click **Create API token**.  
        ![Jira-API-Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43f0cea33a8ef66a/63dd0138f4b2e369e5c73021/Jira-API-Dashboard.png)
    4.  Provide a **Label** for the token and click **Create**.
    5.  **Copy** this token and save it somewhere as you won’t be available to view it once you close the modal.  
        
        **Note:** For more information on API Tokens, refer to the How to create API Tokens in JIRA document.
        
    6.  Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.  
        
        **Additional Resource:** Additional Resource: Read more on [Create a Project | Customize your project](https://support.atlassian.com/jira-work-management/docs/create-a-project/#Createaproject-Customizeyourprojectstage2).
        
          
        ![Jira-Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd03ec0a36b711bc1/63dcade045febe7be921288b/Jira-Authorize.png)
3.  On the **Create a Task** **Configure Action** page, enter the details given below:
    1.  Select the **Assignee ID** of the user to whom you want to assign the ticket from the Lookup list.
    2.  Select **Project Key** of the project in which you want to create the ticket from the Lookup list.
    3.  Provide a suitable **Title** for the task.  
        ![Jira-Create-Task-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf446bc2d79663097/63dcadec260a9a2054c6cb8f/Jira-Create-Task-Configure-Action.png)  
        Click the **Show optional fields** toggle button to provide the **Description** and **Labels.**
4.  Click **Proceed**.
5.  You will see the input values which you have configured in the **Configure Action** modal.  
    ![Jira-Create-Task-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc4f3fd0e6305451e/63dcadecf4b2e369e5c72f03/Jira-Create-Task-Input.png)
6.  Check if the details are correct. If yes, click **Test Action**.  
    ![Jira-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d6e2ff9fd48c959/63dcadec7ccfaf4bc687f044/Jira-Test-Action.png)
7.  Once set, click **Save and Exit**.  
    
8.  Navigate to your JIRA Project. You should see that the ticket has been generated and is placed under **Backlog.  
    ![Jira-Board-Task.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea5368aa37630b4b/63dd066e4af9a97be711cef3/Jira-Board-Task.png)**

Action 2: Select the **Create an Issue** action:

![Jira-Create-An-Issue.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7fb33000efbfb88b/63dcade08c69354d3e0552f8/Jira-Create-An-Issue.png)

1.  Click the **\+ Add New Account** button to set up your Jira account (see screenshot in next step).  
    ![Jira-Create-Issue-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5599788643f505ee/63dcade090fb3569e47fafb6/Jira-Create-Issue-Add-New-Account.png)  
    
2.  In the **Authorize modal**, enter a **Title**, an **Email**, an **API Token** and a **Cloud Instance URL**, and then click **Authorize**.  
    To generate the API Token and Cloud Instance URL, log in to the JIRA dashboard and perform the following steps:  
    1.  Log in to JIRA using your authorized email address and go to your **Account Settings**.
    2.  In the **Security** section, click **Create and manage API tokens**.
    3.  Click **Create API token**.  
        ![Jira-API-Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43f0cea33a8ef66a/63dd0138f4b2e369e5c73021/Jira-API-Dashboard.png)
    4.  Provide a **Label** for the token and click **Create**.
    5.  **Copy** this token and save it somewhere as you won’t be available to view it once you close the modal.  
        
        **Note:** For more information on API Tokens, refer to the How to create API Tokens in JIRA document.
        
    6.  Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.  
        
        **Additional Resource:** Additional Resource: Read more on [Create a Project | Customize your project](https://support.atlassian.com/jira-work-management/docs/create-a-project/#Createaproject-Customizeyourprojectstage2).
        
          
        ![Jira-Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd03ec0a36b711bc1/63dcade045febe7be921288b/Jira-Authorize.png)
3.  On the **Create an Issue** **Configure Action** page, enter the details given below:
    1.  Select a **Project Key** of the project in which you want to create an issue from the Lookup list.  
        
    2.  Select an **Issue Type** from the Lookup list.  
        
        **Note:** It is mandatory to select a **Parent Issue** if you choose the issue type as a sub-task.
        
    3.  Select the **Assignee ID** from the Lookup list.
    4.  Provide a suitable **Title** for the issue.  
        ![Jira-Create-Issue-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ff4b8da36deabed/63dcade03d81ee204e8c4c30/Jira-Create-Issue-Configure-Action.png)  
        Click the **Show optional fields** toggle button to provide the **Description** and **Labels.**
4.  Click **Proceed**.
5.  You will see the input values which you have configured in the **Configure Action** modal.  
    ![Jira-Create-Issue-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt017e61b1d11dc03e/63dcadec14a2b44fa11def43/Jira-Create-Issue-Input.png)
6.  Check if the details are correct. If yes, click **Test Action**.  
    ![Jira-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d6e2ff9fd48c959/63dcadec7ccfaf4bc687f044/Jira-Test-Action.png)
7.  Once set, click **Save and Exit**.
8.  Navigate to your JIRA Project. You should see that the ticket has been generated and is placed under **Backlog.  
    ![Jira-Board-Issue.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt60d09d5b8f645dd5/63dd066e842f040f19e3e9b5/Jira-Board-Issue.png)**

Action 3: Select the ****Update an Issue**** action:

![Jira-Update-Issue.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30d2eeed7edd1feb/63dcade1cdbe917d7abd906f/Jira-Update-Issue.png)

1.  Click the **\+ Add New Account** button to set up your Jira account (see screenshot in next step).  
    ![Jira-Update-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1db53650ddc8689/63dcade0bd97af5094b65962/Jira-Update-Add-New-Account.png)  
    
2.  In the **Authorize modal**, enter a **Title**, an **Email**, an **API Token** and a **Cloud Instance URL**, and then click **Authorize**.  
    To generate the API Token and Cloud Instance URL, log in to the JIRA dashboard and perform the following steps:  
    1.  Log in to JIRA using your authorized email address and go to your **Account Settings**.
    2.  In the **Security** section, click **Create and manage API tokens**.
    3.  Click **Create API token**.  
        ![Jira-API-Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43f0cea33a8ef66a/63dd0138f4b2e369e5c73021/Jira-API-Dashboard.png)
    4.  Provide a **Label** for the token and click **Create**.
    5.  **Copy** this token and save it somewhere as you won’t be available to view it once you close the modal.  
        
        **Note:** For more information on API Tokens, refer to the How to create API Tokens in JIRA document.
        
    6.  Your **Cloud Instance URL** is the custom URL that you provide while creating a project, say `https://domain_name.atlassian.net/`.  
        
        **Additional Resource:** Additional Resource: Read more on [Create a Project | Customize your project](https://support.atlassian.com/jira-work-management/docs/create-a-project/#Createaproject-Customizeyourprojectstage2).
        
          
        ![Jira-Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd03ec0a36b711bc1/63dcade045febe7be921288b/Jira-Authorize.png)
3.  On the ****Update an Issue**** **Configure Action** page, enter the details given below:
    1.  Select a **Project Key** of the project in which you want to update an issue from the Lookup list.  
        
    2.  Select an **Issue** (of which you want to update the status) from the Lookup list.
    3.  Select the **Status** from the Lookup list.  
        ![Jira-Update-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3e839b738a1fb68/63dcade0d0a39b6b6a9bdbcb/Jira-Update-Configure-Action.png)
4.  Click **Proceed**.
5.  You will see the input values which you have configured in the **Configure Action** modal.  
    ![Jira-Update-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a30ed2f9eaf9a7e/63dcade06d590c21c347cd3f/Jira-Update-Input.png)
6.  Check if the details are correct. If yes, click **Test Action**.  
    ![Jira-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d6e2ff9fd48c959/63dcadec7ccfaf4bc687f044/Jira-Test-Action.png)
7.  Once set, click **Save and Exit**.
8.  Navigate to your JIRA Project. You should see that the ticket has been generated and is placed under **Backlog.  
    ![Jira-Board-Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d457e5225e77ead/63dd066e295f164f53ab3448/Jira-Board-Update.png)**

This sets your **JIRA** action connector.
