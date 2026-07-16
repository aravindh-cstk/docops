---
title: "[Automations guides and connectors] - Data Store"
description: Data Store connector documentation for storing and retrieving key-value data at Automation, Organizational, and Execution levels, including Set Data, Get Data, Append Data, and Clear Data actions.
url: https://www.contentstack.com/docs/agent-os/data-store
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Data Store

This page explains how to configure and use the Data Store connector in Automation Hub, including how to store, retrieve, append, and clear key-value data at different storage levels. It is intended for developers and automation builders who need to persist data across steps, automations, organizations, or individual executions.

## Data Store

The Data Store connector helps you store keys and their corresponding values within a database, that you can retrieve later. With the Data Store connector, you can also store and fetch the data stored in the instance of an execution.

**Note:** The limit for the key value pair is 5 KB.

## Set up the Data Store

Perform the following steps to set up the Data Store action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Data Store **connector.![Select_the_Connector_Datastore.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt52e76662b115407f/6527d139ff3bbd7e69ad0827/Select_the_Connector_Datastore.png)
- Under **Choose an Action** tab, you will see three actions: **Get Data** (retrieve data stored in Data Store) and **Set Data** (add data into Data Store), **Append Data** (append new data to an existing data in the form of an array), and **Clear Data**.

### Action 1: Select the Append Data action:

On the **Append Data** **Configure Action** page, you need to provide at what level you need to store your data, i.e., at **Automation Level**, **Organizational Level**, and **Execution Level. **Lets see their difference:
- **Automation Level**: Data set at this level can be retrieved when working only on the current automation you are setting it for.
- **Organizational Level**: Data set at this level can be retrieved when working with any automation within the organization.
- **Execution Level**: Data set at this level can be retrieved when working for one completed execution of an automation. Even with parallel executions of an automation, the data is tightly coupled to an individual execution.

Once you select the **Store At** value, enter the **Data **values, i.e., **Key **and corresponding **Value** for the same.
- Click the **Proceed **button.
- Check if the details are correct. If yes, click the **Test Action** button.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d104d50b5075416/6793cd50a057852df77747a0/Test_Action.png)
- Once set, click the **Save and Exit** button.

Append action will create an array with the provided value.

Let’s see a simple use-case of Append Data action using Repeat Path.

Append Data action is helpful while working with bulk data. In this example, we are sending bulk data through Postman. You can use any other trigger or third-party source to send your data.  
We are sending two arrays via Postman which will append and form a single array. For example: {"array1":["start"], "array2":[1,2,3]}.
- Configure the **HTTP Trigger **connector. For more details, refer to the [HTTP Trigger](./http-trigger.md) connector documentation.

  **Note:** Send a request to the HTTP trigger URL via Postman to send bulk data and test the trigger. Once you click **Test Trigger**, you can see the data sent via Postman in the output.
- Once the trigger is configured, configure an** Action Step** and click the **Data Store **connector.
- Under **Choose an Action** step, select the **Set Data** action. In the **Store At **dropdown, select **Automation** Level.
- In the **Set Data** action, set the **Key** and **Value**. Fetch the array data coming from the previous step. Select the value of array1 in the **Value** field.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0155f1a8a78c4388/6794a0b15169f21e54a23ea8/Select_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbae2c106e2d812a0/6794a0a5fe452967305cc60e/Save_Exit.png)

Once the data is fetched and stored, use the Repeat Path step to fetch the array of numbers from the HTTP trigger, i.e., array2. To do so, follow the steps below:
- Click **+ Add New Step** to add a new step.
- Click **Configure Action Step** from the left navigation panel.
- Click **Repeat Path** to configure repeat path.![Select_Repeat_Path_Step](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b75203a2038ceca/6442e15a717a360937d75d22/Select-Repeat-Path-Step.png)
- In the Repeat Path configuration, select the **Data source** to fetch the array of numbers configured previously.

We have set the value of the first array in the Set Data action, and now, we are fetching the array of numbers (array 2) using the Repeat Path, to append both arrays.

**Note:** Repeat Path will iterate through the number of items in the array.
- Click **Save Configuration** to save the Repeat Path configuration.![Save_Repeat_Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda39f882a1149929/6442e1c1d57e320df0d8064a/Save-Repeat-Configuration.png)

On successful completion, use the Append Data action inside Repeat Path. Follow the steps below:
- Click **+ Add Step**.![Repeat_Path_Add_Step](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7561cac75862e701/6442e1f47f34014b36bee157/Repeat-Path-Add-Step.png)
- In the** Configure Action Step**, click the **Data Store** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7630d1bb1eadb0d/6793cd50b042f5b3a820b757/Select_Connector.png)
- Under **Choose an Action** step, select the **Append Data** action.![Append_Data_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc49df42f0003ae57/6793cd506a4ee834e6ad8dc0/Append_Data_Action.png)
- In the **Store At** field dropdown, select **Automation** Level.

  **Note: **You can use organization or execution level from the dropdown.
- In the** Append Data **action, set the **Key** and **Value**. Provide the **Key** value specified in the **Set Data** action and fetch the current_item data from the Repeat Path step in the Value field.  
  The current_item data will fetch the data iterated using the Repeat Path for the array of numbers and append it to the first array.![Repeat_path.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedd5329368a1cb60/6794a0a52108d897bb7fd002/Repeat_path.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Click the **Save and Exit **button.

Now, to fetch the data outside of the Repeat Path, follow the steps below:
- Click **+ Add New Step**.![Get_Data_New_Step](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta378c11a6f5e1641/6442e3461d4d37184e1cda1a/Get-Data-New-Step.png)
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Data Store** connector. Select the **Get Data** action.
- In the **Get Value At** field, select **Automation** **Level**. In the **Keys** field, provide the name of the key in which the data is stored in the previous step.![Get_Data.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c453cf159e06630/6794a0a54cebb24a5815dc24/Get_Data.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Click the **Save and Exit **button. You will be able to see the appended data in the key.

To check the output, we will configure the **Response** action connector.
- In the **Configure Action Step**, select the **Response** connector.
- In the **Choose an Action** step, select the **Response** action.
- Provide a **Response Status**, and in the **Response Body**, choose the data fetched in the previous step (Get Data).![Response_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e131044f5c1d614/6794a0a5d83ec1545100d207/Response_Fields.png)
- Click the **Proceed **button.
- Click the **Test Action** button to test the configured action.
- Once done, click the** Save and Exit** button.

To view the data, activate the automation and hit the trigger URL in Postman. You will see data combined in one single array.

This sets the **Data Store** action connector.

Let’s understand more about the Execution Level storage with a simple example:

With Execution Level, the data is stored in the instance of execution of an automation i.e., the access to the data is limited only in the instance in which the automation is executed. Even if there are parallel executions of an automation, the values are not overridden with multiple executions.

Let’s set up our automation by following these simple steps:
- Configure the **HTTP Trigger** connector. For more details, refer to the [HTTP Trigger](./http-trigger.md)connector documentation.
- Once the trigger is configured, click the **Data Store **connector.
- Under **Choose an Action** step, select the** Set Data** action. In the dropdown, select **Execution Level** to store the data at execution level.
- Enter the **Data** values, i.e., **Key** and corresponding **Value** for the same.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.
- In the **Configure Action** Step, click the **Data Store** connector and select the **Get Data** action.
- In the **Get Value At** field, select **Execution Level** from the dropdown.
- Enter the key data in the **Keys **field i.e., **Key**.

**Note: **If you are using the Pause action, you can only get the data which you have set before configuring the Pause connector. You can preserve the data in the Pause connector and retrieve the preserved value afterwards. This is applicable only when you select Execution Level storage.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.

**Note:** While testing the automation, you will get null value but the data will be available at the time of execution.

To see the output data, we will configure the Response connector. Perform the following steps to set up the Response action connector:
- Click **Configure Action** **Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Response** connector.![Select_Connector_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt989a3de697b52177/6527d3ec3347f3071d027a01/Select_Connector_Response.png)
- Under **Choose an Action **tab, select the **Response** action.![Select_Response_Aciton.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfdecb64cabe09b09/6794a0b17cdcd34b205c399e/Select_Response_Aciton.png)
- Based on the results of your configured action, enter the **Response Status**.
- In the **Response Body** field, you can add the data that you want to send as the response. You can also fetch the output from the previous step i.e. Get Data action.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- You will see the below output. Click **Save and Exit**.![Save_Exit_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a90b60713a6529f/6794a0b1937ff07df22fc475/Save_Exit_Response.png)

Now, to view the output, activate the automation and hit the HTTP trigger URL. You will see the key:value pair as provided in the Data Store connector.

### Action 2: Select the Clear Data action:
- On the **Clear Data** **Configure Action** page, you need to provide at what level you need to store your data, i.e., at **Automation Level**, **Organizational Level**, and **Execution Level.**
  **Note**:
  - Clear Data requires manual configuration to initiate the data deletion.
- Clear Data can delete the data both from Set Data and Append Data actions.
- In the **Enter** **Key** field, enter the data key to clear. Click the** + Add Key(s) **button to add multiple keys you want to clear.![Clear_Data_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt149bbee41ef93942/6793cd50259b9a1aea273d54/Clear_Data_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test** **Action**.
- Once set, click **Save and Exit**.![Save_Exit_Clear.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta596b7cc06311b91/6793cd509d626e52d611f930/Save_Exit_Clear.png)

### Action 3: Select the Get Data action
- On the **Get Data** **Configure Action** page, you need to provide at what level you need to get/retrieve your data, i.e., at **Automation Level**, **Organizational Level**, and **Execution Level**. Lets see their difference:
- **Automation Level:** This will retrieve data stored at Automation Level.
- **Organization Level:** This will retrieve data stored at Organization Level.
- **Execution Level: **This will retrieve data stored at Execution Level.

Once you select the **Get Value At** value in the **Keys **field, you need to enter the keys you want to retrieve. For the Execution Level, the data will be retrieved only at the time of execution and not at the time of configuration of automation.

**Note: **For retrieving multiple values, enter the keys in a comma-separated manner.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.![Save_Exit_Get.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5b7804f4ff4e9dcc/6794a0a572b169d552d9b684/Save_Exit_Get.png)

### Action 4: Select the Set Data action:
- On the **Set Data** **Configure Action** page, you need to provide at what level you need to store your data, i.e., at **Automation Level**, **Organizational Level**, and **Execution Level. **Lets see their difference:
- **Automation Level**: Data set at this level can be retrieved when working only on the current automation you are setting it for.
- **Organizational Level**: Data set at this level can be retrieved when working with any automation within the organization.
- **Execution Level**: Data set at this level can be retrieved when working for one completed execution of an automation. Even with parallel executions of an automation, the data is tightly coupled to an individual execution.

**Note: **You can store the data inside the steps of the Conditional Path statement and access the data outside of it, as the output data for the conditional path steps is not accessible otherwise. This is applicable for all the storage levels.

Once you select the **Store At** value, enter the **Data **values, i.e., **Key **and corresponding **Value** for the same.
- Optionally, enable the **Show Optional Fields** setting to display the **Data** **Expiration** **Time** field. This field allows you to specify the expiration time for the data in minutes. This is the duration after which the data will no longer be valid.![Set_Data_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51fc60ee9fa6aaaf/6793cfb1a5499b54b314ec82/Set_Data_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.![Save_Exit_Set_Data.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95a98bd995792641/6794a0b16202a13f8910d72f/Save_Exit_Set_Data.png)

This sets the **Data Store** action connector.

## Common questions

### What is the maximum size allowed for a key value pair in Data Store?
**Note:** The limit for the key value pair is 5 KB.

### What is the difference between Automation Level, Organizational Level, and Execution Level?
Automation Level is for the current automation, Organizational Level is for any automation within the organization, and Execution Level is limited to the instance of execution of an automation.

### Can Clear Data delete data created by both Set Data and Append Data?
Yes, Clear Data can delete the data both from Set Data and Append Data actions.

### When is Execution Level data available when using Get Data?
For the Execution Level, the data will be retrieved only at the time of execution and not at the time of configuration of automation.