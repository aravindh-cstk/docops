---
title: Automations guides and connectors - Lytics
description: Lytics connector documentation for Automate, including prerequisites and available actions.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/lytics
product: Contentstack Automate
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# Automations guides and connectors - Lytics

This page explains how to connect Lytics to Automate and use the Lytics connector actions. It is intended for developers and automation builders who need to classify or enrich content and retrieve audience/user data from a Lytics account while configuring an Automate action step.

## Lytics

[Lytics](https://www.lytics.com/) is a leading Customer Data Platform (CDP) that helps businesses harness audience insights to deliver personalized experiences. By unifying data from multiple sources, Lytics empowers organizations to understand customer behavior, segment audiences, and optimize content strategies for improved engagement and marketing performance.

The Lytics Connector enables you to manage and generate content based on audience insights from your Lytics account. You can classify website content, enrich it with inferred topics, and retrieve user and audience information using various actions. The Lytics Connector currently offers multiple actions, including **Classify Content,** **Enrich Content**, **Get All Audiences**, **Get Content Topics**, **Get Field Information**, **Get a Single Audience**, and Get a User Profile.

## Prerequisites

To use the Lytics connector, you first need to connect your [Lytics](https://app.lytics.com/) with Automate using the following steps:

**Note: **In Lytics, an **Account** refers to the specific **Organization** or **Workspace** that holds and manages all of a company’s customer data, audiences, content classifications, and configurations.

- [Log in to your Contentstack account](https://www.contentstack.com/login) and click the **Automate **icon from the left navigation panel.
- Select your project and then the automation.
- Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
- Within the **Choose Connector**, click the **Lytics **connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0367b31e8082da93/682c345bd8c026cef01c4082/Select_Connector.png)
- Under **Choose an Action**, select the **Classify Content **action.![Select_Classify_Content_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaba23271e7fd3464/682c345bf16fa0041bf7d923/Select_Classify_Content_Action.png)
- In the **Configure Action** section, click **+ Add New Account **to add your Lytics account.![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87f9ac7349fc3c11/682c3447377d2d317023157b/Add_Account.png)
- In the **Authorize** modal, provide details such as **Title** and **Access Token **from Lytics. To generate an Access Token in Lytics, follow the steps below:

  Go to [Lytics](https://app.lytics.com/).
- Click the **Account** option in the left navigation and then click the **Security** button.
- From the dropdown, click **Access Tokens**.![Access_Token.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltffd49fb20689a66a/682c3447ef59b1c8446b5e94/Access_Token.png)
- Click **+ Create New**.![Access_Token_Creation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa395e2a101c0308/682c34471d36a1b5e4b23161/Access_Token_Creation.png)
- In the **Create a new Access Token **popup, fill in the token details such as, **Name**, **Description**, **Expiration**, and select the **Token Roles**.![Access_Token_Creation_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb11f8c363d16de8/682c3447725241c4798cfa77/Access_Token_Creation_Screen.png)
- Once done, click** Generate Token**. **Copy** the Access Token from the screen.![Copy_Access.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e4e8598d09f60bd/682c34471ec434602e5eb00f/Copy_Access.png)
- Click the **Authorize **button.![Click_Authorize_Butto.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6019c2fec4ba5d05/682c34471ec434b3485eb00b/Click_Authorize_Butto.png)

This sets up your Lytics account for the Lytics connector.

## Set up the Lytics Connector

Perform the following steps to set up the Gemini connector:

- From the left navigation panel, click **Configure Action Step**.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Lytics **connector.
- Under **Choose an Action**, you will see the different actions. Select any one of them.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt109965dd0dc51d34/682c345b61e0eaf7bf9c7932/Select_Actions.png)

### Classify Content

The **Classify Content** action in Automate allows you to analyze and categorize the key content from your website using Lytics' audience insights. When you provide a website URL, this action scrapes the site to extract meaningful content and automatically classifies it into relevant topics and categories. Later, stores it in Lytics. To use the Classify Content action, follow the steps below:

- Under **Choose an Action **tab, select the **Classify Content** action.
- On the **Classify Content Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account** from the dropdown list.
- In the **Website URL** field, enter the URL of your website to classify.![Select_Fields_Classify_Content.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b4ea408d8125f54/682c345ba14cef79b6798cb7/Select_Fields_Classify_Content.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action **button.
- You get the response. Click **Save and Exit**.![Save_Exit_Button_Classify_Content.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bc3d5f89344c973/682c34477ce594be1b0c75e6/Save_Exit_Button_Classify_Content.png)

### Enrich Content

The **Enrich Content** action enhances your website or text content by adding inferred topics generated from Lytics' audience insights. By sending your content to Lytics, the system analyzes it and returns enriched metadata, such as topics, interests, and classifications, making your content more valuable for personalization, targeting, and audience engagement. To use the Enrich Content action, follow the steps below:

- Under **Choose an Action **tab, select the **Enrich Content** action.
- On the **Enrich Content Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account **from the dropdown list.
- In the** Website URL **field, enter the URL of your website to enrich. You can also add text content in the **Text** **Data** field.![Select_Fields_Enrich.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3ab26117acac605/682c345c676bf7b5bce492e0/Select_Fields_Enrich.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action** button.
- You get the response. Click **Save and Exit.**![Save_Exit_Button_Enrich_Content.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta10e135720912fd9/682c3448655521f52931672a/Save_Exit_Button_Enrich_Content.png)

### Get All Audiences

The **Get All Audiences** action retrieves a complete list of all the audiences stored in your Lytics account. Each audience represents a segment of users grouped by behaviors, attributes, or marketing criteria. You can filter the audiences based on their usage status (valid or invalid) and type (such as Aspect, Conversion, Goal, Managed, or Segment) to get only the data you need. To use the Get All Audiences action, follow the steps below:

- Under **Choose an Action **tab, select the **Get All Audiences** action.
- On the **Get All Audiences Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account **from the dropdown list.
- In the **Select Data Type (Table)** field, select the table to fetch the audiences. The **Select Data Type** field allows you to choose the type of data you want to work with in your Lytics account — either **User** or **Content**.![Select_Fields_Get_All_Audiences.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt143fd1b80935212c/682c345c6a59be3daddd5640/Select_Fields_Get_All_Audiences.png)
  
  **User **refers to audience records like individual users, customers, or prospects, based on unique identifiers such as email addresses or user IDs.
- **Content **refers to pieces of content users interact with, such as articles, videos, products, or web pages.
- Click the **Show Optional Fields** toggle button to use the optional fields:
  
  Select the **Audience Usage (Valid) **from the dropdown.The **Audience Usage (Valid) f**ield lets you filter audiences based on their **validity status i**n Lytics.
  
  **All: **Retrieves both valid and invalid audiences without filtering.
- **Valid (True):** Audiences that are properly set up and ready for use in campaigns or workflows.
- **Invalid (False): **Audiences that may have configuration issues, missing data, or have become outdated.
  
  This helps you quickly select only the audiences that are currently active and reliable for your automation flow.
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action** button.
- You get the response. Click **Save and Exit.**![Save_Exit_Get_All_Audiences.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0dd69f7b8495d254/682c3448e8320109b42606b6/Save_Exit_Get_All_Audiences.png)

### Get Content Topics

The **Get Content Topics** action retrieves a list of all the topics associated with your content from your Lytics account. These topics are inferred based on the content analysis done within Lytics and help categorize your assets for better audience targeting, personalization, and content strategy planning. To use the Get Content Topics action, follow the steps below:

- Under **Choose an Action **tab, select the **Get Content Topics** action.
- On the **Get Content Topics Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account** from the dropdown list.![Select_Fields_Topics.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88393e6142317691/682c346ef16fa008adf7d927/Select_Fields_Topics.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action **button.
- You get the response. Click **Save and Exit**.![Save_Exit_Topic.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6797c64587f36779/682c345b2b27190d385e6bcb/Save_Exit_Topic.png)

### Get Field Information

The **Get Field Information** action retrieves detailed metadata about specific fields within a selected audience from your Lytics account. Fields represent individual pieces of information about users or content, such as email addresses, user IDs, behavior scores, product preferences, and more. To use the Get Field Information action, follow the steps below:

- Under **Choose an Action **tab, select the **Get Field Information** action.
- On the **Get Field Information Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account** from the dropdown list.
- In the **Select Audience **field, select the audience to fetch the field details.![Select_Fields_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89d47e5b8b32ec1c/682c345cb728367cbd404aba/Select_Fields_Field.png)
- Click the **Show Optional Fields **toggle button to use the **Field(s) **optional field. You can select multiple fields to fetch its details.![Show_Optional_Fields_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltafd9ced622b92b64/682c346f11a6510d3aa9c1b7/Show_Optional_Fields_Field.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action **button.
- You get the response. Click **Save and Exit**.![Save_exit_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3af4babb14acbb18/682c34486d16c7e52d368ca3/Save_exit_Field.png)

### Get a Single Audience

The **Get a Single Audience **action retrieves detailed information about a specific audience from your Lytics account. An audience represents a segmented group of users based on behaviors, attributes, or engagement patterns. To use the **Get a Single Audience** action, follow the steps below:

- Under **Choose an Action **tab, select the **Get a Single Audience** action.
- On the **Get a Single Audience Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account** from the dropdown list.
- In the **Select Audience **field, select the audience to fetch its details.![Select_Fields_Single_Audience.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltff15acb61916fa73/682c346f64f73f9990902822/Select_Fields_Single_Audience.png)
- Click the **Show Optional Fields** toggle button to use the **Include audience size (count of users in an audience group) **checkbox.![Show_Optional_Single_Audience.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf53273c68b19a7c6/682c346eb728364fdf404abe/Show_Optional_Single_Audience.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action **button.
- You get the response. Click **Save and Exit**.![Save_Exit_Single_Audience.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0078e55d3b35e576/682c345be8320130692606ba/Save_Exit_Single_Audience.png)

### Get a User Profile

The **Get a User Profile** action retrieves detailed information about an individual user from your Lytics account. To use the Get a User Profile action, follow the steps below:

- Under **Choose an Action **tab, select the **Get a User Profile** action.
- On the **Get a User Profile Configure Action **page, enter the details given below:
  
  Click** + Add New Account** button to connect your Lytics account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Lytics Account** from the dropdown list.
- In the **Select Data Type (Table) **field, select the table to fetch the user profile.The **Select Data Type** field allows you to choose the type of data you want to work with in your Lytics account — either **User** or **Content**.
  
  **User** refers to audience records like individual users, customers, or prospects, based on unique identifiers such as email addresses or user IDs.
- **Content** refers to pieces of content users interact with, such as articles, videos, products, or web pages.
- Click the **Show Optional Fields** toggle button to use the optional fields:Enter the **Identity Key** and **Identity Value**.
  
  Let’s understand the fields:
  
  The **Identity Key **represents the type of identifier you want to use to find a user in Lytics. Common identity keys include **email address**, **user ID**, **device ID**, or any other unique attribute that can link to a user's profile.
  
  Examples of Identity Keys:
  
  `email`
- `user_id`
- `device_id`
- `customer_number`
  
  The **Identity Value** is the actual value that corresponds to the chosen Identity Key. It is the specific piece of information you use to identify and retrieve a user’s profile.
  
  Examples of Identity Values:
- If the Identity Key is `email`, the value could be `john.doe@example.com`.
- If the Identity Key is `user_id`, the value could be `12345678`.
- If the Identity Key is `device_id`, the value could be a specific `device UUID`.
- Click **Proceed**.
- Check if the details are correct. If yes, then click the **Test Action **button.
- You get the response. Click **Save and Exit**.![Save_Exit_User_Profile.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc937920aca5f1a60/682c345b6a59be1751dd563c/Save_Exit_User_Profile.png)

This sets the **Lytics **connector.

## Common questions

### What actions are available in the Lytics Connector?
The Lytics Connector currently offers multiple actions, including **Classify Content,** **Enrich Content**, **Get All Audiences**, **Get Content Topics**, **Get Field Information**, **Get a Single Audience**, and Get a User Profile.

### Where do I get the Lytics Access Token used for authorization?
In Lytics, go to **Account** > **Security** > **Access Tokens**, click **+ Create New**, then **Generate Token**, and copy the Access Token from the screen.

### What is the difference between **User** and **Content** in **Select Data Type (Table)**?
The **Select Data Type** field allows you to choose the type of data you want to work with in your Lytics account — either **User** or **Content**.

### Can I use optional fields when retrieving audiences or user profiles?
Yes. Use the **Show Optional Fields** toggle button to access optional fields such as **Audience Usage (Valid)** or entering the **Identity Key** and **Identity Value**.

<!-- filename: automations-guides-and-connectors-lytics.md -->