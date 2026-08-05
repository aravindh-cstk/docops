---
title: "[Automations guides and connectors] - Utility"
description: Utility action connector for managing automation workflow, including Continue Automation If, Continue Repeat If, Log Action, and Wait.
url: https://www.contentstack.com/docs/agent-os/utility
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: current
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Utility

This page explains how to use the Utility action connector in Contentstack Automations to manage automation flow control and execution timing. It is intended for developers and automation builders configuring action steps (including conditional continuation, repeat-path continuation, logging, and waiting) within automation workflows.

## Utility

The Utility action connector helps to manage your automation workflow. With the wait action, you can put your automation on hold for some time before the following automation action runs.

## Set up the Utility Connector

Perform the following steps to set up the Utility connector. You can set up four actions: Continue Automation If, Continue Repeat If, Log Action, and Wait.

**Note:** **Continue Repeat If** action can be used **only** inside the Repeat Path step.
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Utility** connector.![Select_Utility_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaefed41f4795f02d/66cd7901d97a0ca773550061/Select_Utility_Connector.png)
- You will see these actions under the **Choose an Action tab**: **Continue Automation If**,** Continue Repeat If (inside Repeat Path only)**, **Log Action**, and **Wait**.

Let's look at each of them in detail.

## Continue Automation If

Continue Automation If will execute the automation based on the defined conditions. It will exit out of automation completely if the condition(s) is not met or it will continue to execute the automation if the condition(s) is met.
- Under **Choose an Action** tab, select the **Continue Automation If** action.![Continue_Automation_If.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa42bda8bfb41071/66c4ad6b1ee8050b5816680d/Continue_Automation_If.png)
- Provide the conditions you want to set up in the input box.
Suppose you want to continue the automation only if the entry title is John. If the condition matches, automation continues to execute; otherwise, the automation terminates.![Continue_Automation_If_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59a49c1460c6b26b/66c4ad6caff77d2ae9c42314/Continue_Automation_If_Fields.png)
- Click the **Proceed** button.
- To test the configured action, click the **Test Action** button.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt800a019105f2d22d/66c4ad83c7117108c8699b87/Test_Action.png)
- On successful configuration, you can see the below output. Click the **Save and Exit **button.![Save_Exit_Continue_If.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8328ec063a67400b/66c4ad78c711711702699b7b/Save_Exit_Continue_If.png)

Let's see a simple use case of the Continue Automation If action.

**Note: **Continue Automation If action can be used inside **Repeat Path**, **Conditional Path**, or as a **separate Action Step**.

In this use case, we send data via Postman and fetch the data in the HTTP trigger to create an entry in Contentstack. Once the data is fetched, you need to configure Continue Automation If action to provide the conditions for the automation. You need to configure the Transform action to execute, if the condition matches.

The condition(s) provided in the Continue Automation If is checked, and if it matches, the Transform action gets executed.

If the condition(s) does not match, the automation exits completely.

Sample data:

```
{
    "title": "Art 2323",
    "body": "body",
    "tags": ["tag1", "tag2"],
    "pdf": "yes"
}

```

**Note: **The primary differences between a **Conditional Path Statement** and C**ontinue Automation If **are:
- Conditional Path is a special action with a defined flow, which executes actions based on the condition, and Continue Automation If is a simple action to continue the execution of an automation only if the condition(s) is met.
- In the Conditional Path, conditions are checked, and if the condition matches, the IF block is executed; if not, the flow moves to the ELSE block. Whereas in Continue Automation If, if the condition is true, it executes the succeeding step, and if it is false, the automation exits completely.
- Configure the **HTTP Trigger** connector.

    **Additional Resource: **Refer to the [HTTP Trigger connector](./http-trigger.md) documentation for more details.
- Under the **Choose Trigger **tab, select the **HTTP Request Trigger** action. Select **HTTP Request Trigger**. This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.
- Select a **Method**,** **i.e., GET/POST.
- You will find the applicable** **input “URL.” This URL will be the webhook URL to trigger the automation. You can send your Postman data via this trigger URL.![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0c8e112ce91bbfb/66c4ad83c71171851a699b8b/Test_Trigger.png)
- Click the **Test Trigger **button.
- You will be able to see the entire data in the output. Click the **Save and Exit** button.![Save_Exit_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3394b8aebac8876b/66cd7add19b683aa550899cc/Save_Exit_Trigger.png)

Once the data is fetched, configure the **Create an Entry** action to create an entry in Contentstack with the data fetched in the trigger.
- Click **+ Add New Step** to add a new step.
- Click **Configure Action Step** from the left navigation panel.
- Within the **Configure Action Step**, click the **Contentstack **connector.
- Under** Choose an Action** tab, select the **Create an Entry **action.
- In the **Configure Action** tab, click **+ Add New Account** to add your Contentstack account.

    **Additional Resource: **For more details on how to add an account, refer to the [Contentstack Action](https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-action/) documentation.
- Select a **Stack**, **Branch**, and** Content Type **from the **Lookup **list.
In the **Entry Data** field, fetch the data output from the HTTP trigger.

    **Note: **In the **Entry Data** field, you can add a predefined schema template for your entry data. You must manually configure the entry data for **JSON Rich Text Editor**, **Custom**, and **Experience Container** fields.
- Click the **Proceed **button.
- Click the **Test Action** button.
- Click the **Save and Exit** button.![Save_Exit_Create_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4cf56ab0c393a124/66c4b31783db67057faed88e/Save_Exit_Create_Entry.png)

Once the entry is created, configure the **Continue Automation If **action inside the **Utility **connector.
- Under **Choose an Action** tab, select the **Continue Automation If **action.
- Click **+ Add Condition**. In the **Select Input** box, select the pdf field UID from the HTTP Request Body. Select **Loosely Matches (Text)**, and provide the value “yes.”

    *This means Continue Automation If checks the value for the pdf field based on the trigger data sent via Postman. If the value is yes, i.e.. the condition matches, the automation continues to execute. If the value is no, i.e., the condition does not match; the automation exits completely.*
- Click the** Test Action** button.
- You will see the output if the condition is met. Click the **Save and Exit** button.

Let's configure a **Transform **action to execute if the condition is true.
- Click **+ Add New Step** to add a new step.
- Click **Configure Action Step** from the left navigation panel.
- Within the **Configure Action Step**, click the **Transform **connector.
- Under** Choose an Action** tab, select the **Transform **action.
- In the **Transformation **Box, provide a value as shown below:![Transform_Continue_If.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fc4dc487e53ce99/66c4ad834c3912c5f9abf65b/Transform_Continue_If.png)
- Click the **Proceed **button.
- Click the **Test Action** button.
- Click the **Save and Exit** button.

Let's see what happens if the condition is **true**.
- Navigate to the **Execution Log** section.
- Click the **Continue Automation If** execution details.
- A pop-up appears. In the **Additional Details** section, you will see the number of steps executed for the automation. The succeeding step, i.e., the Transform action will run completely.![Execution_Log_Output_For_True.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt278c1029cc0ca92f/64bf7d0e27713f287e6a20ac/Execution_Log_Output_For_True.png)

Let's see what happens if the condition is **false**.
- Navigate to the **Execution Log** section.
- Click the **Continue Automation If** execution details.
- A pop-up appears. In the **Additional Details** section, you will see that the automation breaks completely after the **Continue Automation If** step **without executing** the **Transform **action step.![Execution_Log_Output_For_False.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt230bd39f746916d3/64bf7d0e0c8acebe5e02f9c0/Execution_Log_Output_For_False.png)

## Continue Repeat If

Continue Repeat If executes the automation based on the defined conditions. You must select the exit behavior to exit out of the Repeat Path or current iteration.

**Note: **Continue Repeat If action can be configured **only **inside a Repeat Path step.
- Under **Choose an Action** tab, select the **Continue Repeat If **action.![Continue_Repeat_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5eb50eb6cb90497b/66c4ad6bab1b69597e3ca6d4/Continue_Repeat_Action.png)
- Provide the conditions you want to set up in the input box.

Suppose you want to execute succeeding steps inside of a Repeat Path only if the condition is **true**,** **i.e., the value of the pdf field is **yes**, then the succeeding steps after the Continue Repeat If action will execute inside the Repeat Path.
- Select the exit behavior in case the condition is not met. You can either exit the Repeat Path completely, i.e, the steps outside the Repeat Path will continue to execute or you can exit the current iteration and continue with the next iteration in the Repeat Path.![Continue_Repeat_Path_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01a3478700e1272e/66c4ad6bc7117123c3699b77/Continue_Repeat_Path_Fields.png)
- Click the **Proceed** button.
- To test the configured action, click the **Test Action** button.
- On successful configuration, you can see the below output. Click the **Save and Exit** button.![Repeat_Path_Iteration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e392b012631f5e7/66c4ad78dd1a360cb440b863/Repeat_Path_Iteration.png)

Let's see a simple use case of the Continue Repeat If action.

In this use case, we send bulk data via Postman and fetch the data in the HTTP trigger to create entries in Contentstack. On each iteration, an entry is created, and the conditions provided in the Continue Repeat If are checked; if it is true, the Transform action will execute.

If the condition(s) is not met, there are two exit ways to select. You can exit the current iteration or completely exit out of the Repeat Path. In the latter situation, the action outside the Repeat Path will execute.

**Note: **With the Continue Automation If action, if the condition is not met, the automation exits completely, whereas with Continue Repeat If, the flow breaks out of the Repeat Path (not terminating the entire automation).

Sample data to be sent via Postman:

```
{
    "entries": [
        {
            "title": "Article 183",
            "pdf": "yes"
        },
        {
            "title": "Article 184",
            "pdf": "no"
        },
        {
            "title": "Article 185",
            "pdf": "yes"
        }
    ]
}

```
- Configure the **HTTP Trigger** connector.

    **Additional Resource: **Refer to the [HTTP Trigger connector](./http-trigger.md) documentation for more details.
- Under the **Choose Trigger **tab, select the **HTTP Request Trigger** action. Select **HTTP Request Trigger**. This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.
- Select a **Method**, i.e., GET/POST.
- You will find the applicable** **input “URL.” This URL will be the webhook URL to trigger the automation. You can send your Postman data via this trigger URL.
- Click the **Test Trigger **button.
- You will be able to see the entire data in the output. Click the **Save and Exit** button.![Trigger_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte72086060729daae/66c4ad833bab112343a2c19c/Trigger_Save_Exit.png)

Let's configure the **Repeat Path** to use **Continue Repeat If** action.
- Click **Configure Action Step **from the left navigation panel.
- Click **Repeat Path** to configure and select the Repeat Type.
- In the Repeat Path Configurations, select the **Data source** to fetch the entries data to iterate the array received in the trigger.![Save_Repeat_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c698f6d6f379443/64c0ce74bae80f1347d9d342/Save_Repeat_Configuration.png)
- Click the **Save Configuration** button.

After the Repeat Path configurations are done, configure the Contentstack connector within the Repeat Path step and configure the** Create an Entry **action.

Configuring an action step inside the Repeat Path will iterate and run the action until the end of the data source is reached.
- Click **+ Add Step** under the Repeat Path from the left navigation panel.
- Click **Configure Action Step** from the left navigation panel.
- Within the **Configure Action Step**, click the **Contentstack **connector.
- Under** Choose an Action** tab, select the **Create an Entry **action.
- In the **Configure Action** tab, click **+ Add New Account** to add your Contentstack account.

    **Additional Resource: **For more details on how to add an account, refer to the [Contentstack Action](https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-action/) documentation.
- Select a **Stack**, **Branch**, and** Content Type **from the **Lookup **list.
In the **Entry Data** field, fetch the data output from the HTTP trigger as shown below:

    **Note: **In the **Entry Data** field, you can add a predefined schema template for your entry data. You must manually configure the entry data for **JSON Rich Text Editor**, **Custom**, and **Experience Container** fields.
- Click the **Proceed **button.
- Click the **Test Action** button.
- Click the **Save and Exit** button.

Once the entry is created, configure the **Continue Repeat If **action present in the **Utility **connector.
- Under **Choose an Action** tab, select the **Continue Repeat If **action.
- Click **+ Add Condition**. In the **Select Input** box, enter the UID of the pdf field from the HTTP trigger step. Select **Loosely Matches (Text)**, and provide the value “yes.”

    *This means Continue Repeat If will continue to iterate through the array data if the value for the pdf field is yes for an entry. If the value is yes, i.e., the condition matches, the Repeat Path will execute the succeeding action and continue to iterate through the array data.*

    *If the value is no i.e. the condition does not match, then based on the exit behavior defined in the configuration, Repeat Path will break and execute the succeeding action in the automation or it will break the current iteration and continue to create entries as per the defined conditions.*
- Click the** Test Action** button.
- You will see the output as shown below. Click the **Save and Exit** button.

Let's configure a **Transform **action to execute if the condition is true.
- Under** Choose an Action** tab, select the **Transform **action.
- In the **Transformation **Box, provide a value as shown below:
- Click the **Proceed **button.
- Click the **Test Action** button.
- Click the **Save and Exit** button.![Transform_Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc8939f829177b208/66c4ad830baf9b1b9daf6030/Transform_Save_Exit_Button.png)

Now, let's configure the **Response **connector to see what happens if the exit behavior is **Exit the Repeat Path completely**.
- Click **+ Add New Step** to configure third-party services.![Add_New_Step_Outside_Repeat_Path.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb62e2b36becf681a/64c0ce65384028771cd9e2ec/Add_New_Step_Outside_Repeat_Path.png)
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Response **connector.![Select_Connector_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt989a3de697b52177/6527d3ec3347f3071d027a01/Select_Connector_Response.png)
- Under **Choose an Action** tab, select the **Response** action.![Response_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte899ba81e2573a9a/66c4ad780baf9b2de8af602b/Response_Action.png)
- In the **Response Body **field, you can add the data that you want to send as the response.![Response_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte044ef00d6a69316/66c4ad7971186707d8aa1310/Response_Fields.png)
- Click **Proceed**.
- To execute and test the configured action, click **Test Action**.
- On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd95a4c299641725e/66c4ad79e712ef60bf310e00/Save_Exit_Response.png)

Let's see what happens if the exit option is - *Exit the Repeat Path completely*
- Navigate to the **Execution Log** section.
- Click the **Continue Repeat If** execution details.
- A pop-up appears. In the **Additional Details** section, you will see the sequence of actions executed based on the array data as shown below:![Exit_Repeat_Path_Completely.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0dd4cb2aa6fdec4c/64c0ce64b6e665178e511f82/Exit_Repeat_Path_Completely.png)

Let's see what happens if the exit option is - *Exit Current Repeat Iteration*
- Navigate to the **Execution Log** section.
- Click the **Continue Repeat If** execution details.
- A pop-up appears. In the **Additional Details** section, you will see that the third iteration for the Repeat Path is skipped and the loop exits the Repeat Path completely.![Execution_log_Repeat_If_Exit_Iteration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9079f3c4e9ff29e/64c0ce64c0f3050feeb6a9fd/Execution_log_Repeat_If_Exit_Iteration.png)![Exit_Repeat_Path_Iteration-2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7be255339e019f9d/64c0ce65ff3e9bde7a4d8a32/Exit_Repeat_Path_Iteration-2.png)

As per the sample data, the pdf flag for second data is no. So the Repeat Sequence did not execute the **Transform **action and moved to the next iteration.

## Wait Action
- Under **Choose an Action** tab, select the **Wait** action.![Select_Wait_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt880aa8e3a9e08940/66c4beb7b506aa1b6dc6e494/Select_Wait_Action.png)
- In the **Wait** drop-down, select the timeout value to delay the automation execution.![Select_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt433bfd8371f4edf8/66c4beb7134286c820c3d9d0/Select_Field.png)
- Click the **Proceed** button.
- To test the configured action, click the **Test Action** button.
- On successful configuration, you can see the below output. Click the **Save and Exit **button.![Save_and_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31d09f05ea5fc921/66c4beb6ab1b69afb63ca7df/Save_and_Exit.png)

Let’s see a simple use-case of the Utility connector using Repeat Path.

Wait action is useful while working with bulk data. Previously, if the number of API requests exceeded the defined limitation, the automation failed automatically due to rate limiting.

In this example, we are sending bulk data through the HTTP action with a limitation of 5 API requests per second, and we will use the Wait action to delay the API request per second in order to create multiple entries in Contentstack. We will also see how the user receives an error message in the Execution Log section for exceeding the rate limit.

**Note:** Rate Limit is organization based and needs to be set as per the requirement.
- Configure the HTTP Trigger connector. For more details, refer to the [HTTP Trigger connector](./http-trigger.md)documentation.
- Once the trigger is configured, configure an** Action Step** and click the **HTTP** action connector.![HTTP.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd11137c4b680ccf/6527f8c9a4cac20fe4c5d04c/HTTP.png)
- Under **Choose an Action **step, select the **HTTP Request** action.
- Under the Select Account drop-down, select one of the accounts connected to your project. The sensitive information, such as access code, secret key, API key, etc., can be fetched from the selected account.

  **Note:** Select Account is an optional field. You can still configure the action without selecting an account.
- Provide a **URL** to fetch the bulk data. In this example, we have set the limit to 20, i.e. the URL will fetch the data as per the limit.

  **Note: **You can provide any URL that can fetch bulk data from a source.![Select_HTTP_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c276bf0eb1ed372/66c4bf883f4c193ac41cca97/Select_HTTP_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5538ef47ff7b8a23/66c4bf881ee805b8461669cf/Test_Action.png)
- You will be able to see the entire data in the output. Click the **Save and Exit **button.

Once the data is fetched, configure the Repeat Path step to bring the data from the HTTP action. To do so, follow the steps below:

**Note:** The specific use of Repeat Path in this use-case is to iterate through the bulk data and create multiple entries in Contentstack. It will help if you define your content type schema as per the data fetched in the HTTP action.
- Click **+ Add New Step** to add a new step.
- Click **Configure Action Step** from the left navigation panel.
- Click **Repeat Path** to configure repeat path.![Repeat_Path.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt638fc6eca85ab119/66c4bf7f134286681cc3d9de/Repeat_Path.png)
- In the Repeat Path Configurations, select the **Data source** to fetch the array of data configured previously.![Repeat_Path_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf01461f8a887b08a/66c4bf7f3f4c19394e1cca90/Repeat_Path_Configuration.png)
- Click **Save Configuration** to save the Repeat Path configuration.

On successful completion, use the **Create an Entry** action inside Repeat Path. Follow the steps below:
- Click **+ Add Step**.
- In the **Configure Action Step**, click the **Contentstack** connector.![Select_Contentstack_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9021f52680da13e5/66c4bf7fe712ef7708310f4a/Select_Contentstack_Connector.png)
- Select the Contentstack Management connector to perform CMS tasks.
- Under **Choose an Action **step, select the **Create an Entry **action.![Create_an_Entry_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f9a8cd763302592/66c4bf7e20995e6f0ed2c2f2/Create_an_Entry_Action.png)
- Add your Contentstack account. For more information, refer to the [Contentstack action](/docs/developers/automation-hub-connectors/contentstack-action/) connector document.
- Select the **Stack**, **Branch**, **Content** **Type**, and **Entry** **Data** to create an entry in Contentstack.![Select_Create_an_Entry_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte7705d97bb2e23dd/66c4bf8803888131571ef067/Select_Create_an_Entry_Fields.png)
- Click the **Proceed** button.
- Click the **Test Action** button to test the configured action.
- Navigate to your stack. An entry will be created. Click the **Save and Exit** button.

Let’s see what happens if we do **not** configure the Wait action.
- Activate the automation.
- Hit the HTTP trigger URL.
- Navigate to the** Execution Log **section. You will see that the automation fails. Click to view the details of the failure.
- You will see the error message “Rate limit exceeded.”![Rate_Limit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3646b073daf25f7e/649583e87ad988097231c4c3/Rate_Limit.png)

**Note: **Rate limit exceeds based on the organization plan. The user gets this error if the number of API calls made in a second exceeds the maximum limit defined in a particular organization.

Let’s see how to configure the **Utility** connector. To do so, follow the steps below:
- Click** + Add Step**.
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Utility** connector. Select the **Wait** action.![Select_Wait.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd217f13944d739b9/66cd8055fb244e3c07701ccf/Select_Wait.png)
- Select the timeout duration for each API request from the drop-down.
- Click the **Proceed** button.
- Click the **Test Action **button to test the configured action.
- Click the **Save and Exit** button.

Let’s see what happens when we configure the Wait action.
- Activate the automation.
- Hit the HTTP trigger URL.
- Navigate to the **Execution Log** section. You will see a success message. Click to view the details of the execution.![Success_Message](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8644aa31e348dd7e/649583fae64f41ef2342cfe9/Success_Message.png)

## Log Action

Log Action in Automate allows you to view the output of the previous step in the Execution Log. To use Log Action, follow the steps given below:
- Under **Choose an Action** tab, select the **Log Action**.![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5139b19bb44e23ad/66c4ad83aff77d42d9c42319/Select_Action.png)
- On the **Log Action Configure Action** page, enter the details given below:
      Enter the **Key **and select the value from the previous step in the Value field. Click the **+ Add Data from Previous Step **button to add more keys. Please note that you can add up to 10 key value pairs.
- Click the **Proceed **button.
- To test the configured action, click the **Test Action **button.
- On successful configuration, you can see the following output. Click the **Save and Exit** button.![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaced6c6fe7e19d08/66c4ad78e712ef4c60310dfc/Save_Exit_Button.png)
- Activate the automation and test the configured trigger. For example, test the **HTTP **trigger.
- Now navigate back to the Automations landing page and click the **Execution Log** option from the left navigation panel.
- Click the **Code **icon to view the **Output **payload for the action step. Additionally, you can click the **Copy **icon to copy and debug the code.![Output_Execution_Log.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f40d7b4a2c18d6e/66d085799fc2b6643065cb98/Output_Execution_Log.png)

This sets the **Utility **action connector.

## Common questions

### When should I use Continue Automation If vs Continue Repeat If?
Use **Continue Automation If** to exit out of automation completely if the condition(s) is not met, and use **Continue Repeat If** to control behavior inside a Repeat Path step.

### Where can I use Continue Repeat If?
**Continue Repeat If** action can be configured **only **inside a Repeat Path step.

### What problem does the Wait action help with?
Wait action can delay automation execution and is useful while working with bulk data to help avoid failures due to rate limiting.

### What does Log Action do?
Log Action allows you to view the output of the previous step in the Execution Log and add up to 10 key value pairs for debugging.