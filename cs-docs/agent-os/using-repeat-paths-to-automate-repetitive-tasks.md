---
title: "[Automations guides and connectors] - Using Repeat Paths to Automate Repetitive Task"
description: Using Repeat Paths to Automate Repetitive Tasks in Contentstack Agent OS Automation Hub.
url: https://www.contentstack.com/docs/agent-os/using-repeat-paths-to-automate-repetitive-tasks
product: Contentstack
doc_type: automation-hub-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Using Repeat Paths to Automate Repetitive Task

This page explains how to use the Repeat Path feature in Contentstack Agent OS automations to iterate over an array of incoming data (for example, from an HTTP trigger) and repeatedly run an action such as creating multiple entries in Contentstack. It is intended for developers and automation builders who need to process bulk payloads and perform repeated CMS operations.

## Using Repeat Paths to Automate Repetitive Tasks

This use case covers a scenario where you can dynamically create multiple entries in Contentstack using the Repeat Path feature.

In this use case, we send bulk data via Postman and fetch the data in the HTTP trigger. Once the data is fetched, you need to configure the Repeat Path. Select the HTTP trigger data via the Data source field in the Repeat Path configuration.

**Note:** You can use any trigger or action to fetch the data from any source.

Configure the Contentstack action and select the Create an Entry action inside the repeat path. In the Create an Entry action, fetch the current-item value from the Repeat Path step. The current_item will iterate through each item in the data array and create the entries in Contentstack.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:
- **Set up the “HTTP'' Trigger Event:** This trigger event is activated whenever a user makes a HTTP GET/POST request to the configured URL. In this case, the data is collected from Postman to the HTTP trigger.
- **Set up the Contentstack “Repeat Path”:** Once the above event triggers the automation, it checks for the configuration provided within the repeat path.
- **Set up the Contentstack “Create an Entry” action:** When the Repeat Path configurations are set, the create an entry action will create different entries in Contentstack.

  **Note:** Once you configure any action inside the Repeat Path, it will execute the action step repeatedly until the condition is met.

The steps to set up the Automation are as follows:
- [Configure HTTP Trigger](#configure-http-trigger)
- [Configure Repeat Path](#configure-repeat-path)
- [Configure Contentstack Connector within the Repeat Path Step](#configure-contentstack-connector-within-the-repeat-path-step)

Let’s look at the setup in detail.

## Configure HTTP Trigger

Log in to your [Contentstack account.](https://www.contentstack.com/login/)

- After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.  
  [https://www.contentstack.com/login/](https://www.contentstack.com/login/)
- Click **+ New Project** to add a new project.
- Click **+ New Automation**.
- Enter the **Automation Name** and **Description**.
- Click **Create**.
- Select **Configure Trigger** from the left navigation panel.![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51088f75e1d8eb90/699d9d6bbc49c470948a793e/image3.png)
- Within the **Configure Trigger** step, click the **HTTP** trigger connector.![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt407a17262b4691b4/699d9d8162d1393fbf846391/image6.png)
- Select **HTTP Request Trigger**. This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.![Select_HTTP_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted3d78295677ac15/6602dcb1aabcc9a37f2f4bc5/Select_HTTP_Trigger.png)
- Select a **Method**, i.e., **GET/POST**.![image19.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f8ab0078d66f3be/699d9db1b009382400832b31/image19.png)
- Click the **Proceed** button.
- You will find the applicable input “URL.” This URL will be the webhook URL to see the rule working. To send the data, hit the URL with a POST call in Postman.**Note:** Let’s consider the following dummy data from Postman.

```
{
"Students":
[                   {"studentName":"test1","studentClass":"6","studentSection":"A"},
                    {"studentName":"test2","studentClass":"7","studentSection":"B"},
                    {"studentName":"test3","studentClass":"8","studentSection":"C"},
                    {"studentName":"test4","studentClass":"9","studentSection":"D"}
]}
```

- Click the **Test Trigger** button to test the configured trigger.
- On successful configuration, you can see the below output. Click the **Save and Exit** button.![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt610de13b1763451c/699d9de0ba238f8fbf2f3b45/image7.png)

## Configure Repeat Path

Click **Configure Action Step** from the left navigation panel.![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef898b893fc322b0/699d9e057c3275df7f2add65/image8.png)

- Click **Repeat Path** to configure and select the Repeat type.![image24.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6293722c990a3f07/699d9e5040b0345c890f74b1/image24.png)
- In the Repeat Path Configurations, select the **Data source** to iterate the array received in the trigger.![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta0a52812bfb323d3/699d9eb07e22a9176ffaba44/image2.png)![image23.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ca28dc21305a3c6/699d9e8c62d139cda8846399/image23.png)
- Click **Save Configuration**.![Save_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cf4577e56ac2813/6602dca6d057551183001074/Save_Configuration.png)
- You can click the **Reload **icon to access the most recent data fetched from the** Data Source** field for the Repeat Path output without affecting the configuration.![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e87e461ce210caa/699d9ece62d13967bb84639d/image2.png)

## Configure Contentstack Connector within the Repeat Path Step

Configuring an action step inside the Repeat Path will iterate and run the action until the end of the data source is reached.

Click **+ Add Step** under the Repeat Path from the left navigation panel.![image15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb6da81299052891/699d9f19f8f186aea78896a7/image15.png)

- Within the **Configure Action Step**, click the **Contentstack **connector.![image9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf6b98a7d9d437a9/699d9f357b66ce5285c65c34/image9.png)
- Select the** Contentstack Management **connector to perform CMS tasks.
- Under **Choose an Action** tab, select the **Create an Entry** action.![image10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2cc410afaed2add4/699d9f63af65af7e8f1da439/image10.png)
- In the **Configure Action** tab, click **+ Add New Account** to add your Contentstack account.
- Select a way to add a new account. You can authenticate your account in two ways: **Contentstack OAuth** or **Management Token**.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt583530c9a76bca24/66042d3f0a7895c103d7f6ea/Authorize_Account.png)
- If you select **Contentstack OAuth **and click **Proceed**, the Manage Permissions modal will open, as shown below. Provide the OAuth permissions for all the values by checking the boxes and click **Authorize**.![image21.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfd263628304106b/699d9fc4a215682668108ce5/image21.png)
- In the pop-up that appears, select your organization to complete the authorization.![image22.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1dad3b394b877d3c/699d9ff80f1f9e679f129f18/image22.png)
- In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize **to complete authorization.![Authorize_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc14717a94926f294/6602de7ed057550cc2001092/Authorize_Organization.png)
- Provide an **Account Name** and click the **Save **button.![image16.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2a72d6a7b25bb6a4/699da02356ca117f3abb4831/image16.png)
- Select a **Stack**, **Branch**, and a **Content Type **from the **Lookup **list.![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb7cdc3680eef224/699da03bf8f186543e8896af/image1.png)
- Provide your entry data in the **Entry Data** field. Fetch the data from the Repeat Path step.

  **Note:** Provide your entry data as per your content type schema in [JSON format](../developers/create-content-types/json-schema-for-creating-a-content-type.md) only.![image26.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3b0c7e0a33f53e1/699da04c883c63efe24d7b33/image26.png)
- Click the **Proceed **button.
- Click the **Test Action** button to test the configured action.
- Click the **Save and Exit** button.![image20.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1c4407f2140a92f/699da08a62d139044f8463a3/image20.png)

You can also add another action step using the Quick Select screen after you have configured the Contentstack connector.

In the output, you will see one entry. To view all the entries created, you must activate the automation.

After activating the automation, you must send the data via Postman to the HTTP trigger URL. Navigate to Contentstack to view the entries in the selected content type.

You can view the details of the entry as shown below:

## Common questions

### What does the Repeat Path “Data source” refer to?
The **Data source** is the trigger or action output you select in the Repeat Path configuration to iterate the array received in the trigger.

### How do I access the current item while creating entries?
In the Create an Entry action inside the repeat path, fetch the **current-item** value from the Repeat Path step; the **current_item** will iterate through each item in the data array.

### Do I have to use the HTTP trigger for Repeat Path?
No. **Note:** You can use any trigger or action to fetch the data from any source.

### Why do I only see one entry in the output?
In the output, you will see one entry. To view all the entries created, you must activate the automation and then send the data via Postman to the HTTP trigger URL.