---
title: "Sub Automation Action"
description: "Use this action to fetch the sub automation created in a project."
url: /agent-os/sub-automation-action
---

# Sub Automation Action

## Sub Automation Action

A sub automation involves creating smaller, specialized automation tasks as part of a larger automation process. These sub automations help break down complex tasks into more manageable steps, making it easier to design, implement, and maintain the overall automation process. The Automate Sub Automation action connector lets you fetch the sub automation created in a project. This can be useful while working with the ChatGPT based [Function Calling](/docs/agent-os/chatgpt#action-4-select-the-function-calling-action) action.

## Set up the Sub Automation Action

Perform the following steps to configure the Sub Automation action:

1.  Click **Configure Action** from the left navigation panel.
2.  Within the **Configure Action Step**, click the **Sub Automation** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24f95e27987c07e6/65c3110cf02705dcceea77e2/Select_Connector.png)
3.  Under **Choose an Action** tab, select the **Sub Automation** action.  
    ![Select_Actio.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56f4484473a7870d/65c3110ceed32e6d97ac3344/Select_Actio.png)
4.  Select the **Sub Automation** from the dropdown. This fetches a list of all the sub automations created in a project.
5.  Enter the values in the **Sub Automation Template**. The schema is fetched from the configured sub automation.
    
    **Note:** Only **Live** Sub Automation(s) will be displayed in the drop-down menu.
    
    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40d0b729693ba9cf/65c3110cab9c0f4608b92990/Select_Fields.png)
6.  Click the **Proceed** button.
7.  To test the configured action, click the **Test Action** button.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3abb49e62d6998b3/65c311167998da328a6b4897/Test_Action.png)
8.  Click the **Save and Exit** button.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt809c4e8ab8492d5e/65c3110c7998da492b6b4893/Save_Exit_Button.png)

This completes the configuration of your **Sub Automation** action connector.

Let’s see an example to understand the use of Sub Automation action connector.

In this use case, we will cover a scenario where, if a user creates a new entry in Contentstack, the automations should be able convert the given entry in German language and create a new entry for German language in Contentstack.

### Configure Entry Trigger

1.  Click **Configure Trigger** from the left navigation panel.
2.  Within the **Configure Trigger** **Step**, click the **Contentstack** connector.
3.  Under the **Choose Trigger** step, select the **Entry Trigger**.
4.  Click **\+ Add New Account** to add your Contentstack account. For more information refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger) documentation.
5.  Select the **Event** and the **Stack** for which you want to configure the trigger.
6.  Optionally enable the **Show Optional Fields** toggle to select the Content Type in which you want to create an entry.  
    ![Entry_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20d7151c43f69d76/65c3110ca3c2028f15251cd4/Entry_Trigger_Fields.png)
7.  Click the **Proceed** button.
8.  Click the **Test Trigger** button.  
    ![Test_Entry_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62434347030f2ece/65c3111649edef30c96a1cef/Test_Entry_Trigger.png)
9.  Click the **Save and Exit** button. An entry will be created in the selected content type as shown below.  
    ![Save_Exit_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c302fc96a79ee4f/65c3110cf027050a40ea77de/Save_Exit_Trigger.png)

### Configure Sub Automation Action

1.  Click **Configure Action** from the left navigation panel.
2.  Within the **Configure Action step**, click the **Sub Automation** connector.
3.  Under **Choose an Action**, select the **Sub Automation** action.
4.  Select the **Sub Automation** from the Lookup dropdown. You see a list of all the sub automations created in a project.
5.  Enter the data in the **Sub Automation Template**. This fetches the template for the selected sub automation. In our case, we are using a [Sub Automation](/docs/agent-os/sub-automation-trigger) trigger.  
    In the **Value** field, select the entry name created in the entry trigger as shown below:  
    ![Select_Sub_Automation_Action_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt572884c3d67fe721/65c31116fb34d054aa1b0b39/Select_Sub_Automation_Action_Field.png)
6.  Click the **Proceed** button.
7.  Click the **Test Action** button.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3abb49e62d6998b3/65c311167998da328a6b4897/Test_Action.png)
8.  Click the **Save and Exit** button. You see the entry is converted in to German language as shown below:  
    ![Save_Exit_Sub_Automation_Entry_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd88798c50f59f23a/65c3110c49edef70e76a1ceb/Save_Exit_Sub_Automation_Entry_Trigger.png)

In the next step, we will create a new entry for the translated text.

### Configure Create an Entry Action

1.  Under **Choose an Action** tab, select the **Create Entry** action.
2.  In the **Configure Action** tab, click + Add New Account to add your Contentstack account. Refer to the [Contentstack](/docs/agent-os/about-contentstack-management-actions) action connector for adding an account.
3.  Select a **Stack**, **Branch**, and **Content Type** from the **Lookup** list. Provide your entry data in the **Entry Data** field.
    
    **Note:** Provide your entry data as per your content type schema in JSON format only.
    
    You can fetch the UID for all the previously configured automation steps directly from the Lookup list as shown below:
    
    ![Create_Etry_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b7cfff0ee49ae78/65c3110cab9c0f46dcb9298c/Create_Etry_Fields.png)
4.  In the **Entry Data** field, you can add a predefined schema template for your entry data. This will add a structure to provide your entry data in a particular format for different fields. Enter the “title” value from the previous step, i.e. the title of the translated content.
    
    **Note:** You must manually configure the entry data for JSON Rich Text Editor, Custom, and Experience Container fields.
    
5.  Click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3abb49e62d6998b3/65c311167998da328a6b4897/Test_Action.png)
7.  Click the **Save and Exit** button.
8.  Activate the automation and create an entry in Contentstack. You see a new translated entry is also created.

Activate the automation to check the output. You can use this sub automation trigger to invoke a sub automation action. Both are **interdependent** on each other.
