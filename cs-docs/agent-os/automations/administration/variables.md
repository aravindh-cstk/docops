---
title: "Variables"
description: "Add and uniformly use project variables across all the automation to eliminate redundancy."
url: /agent-os/variables
uid: blt9cd48ed2e765aa6a
---

# Variables

## Variables

The Project Variables section helps you add project variables to use the same key-value pair across different automations. You can view and use the project variables under the **“Output from Previous Steps”** dropdown inside an automation.

To add the Project Variables, perform the following steps:

1.  log in to your [Contentstack account](https://www.contentstack.com/login/).
2.  Go to your project or [create](/docs/agent-os/variables) a new one.
3.  In the top navigation panel, click **Settings**. Then in the left navigation click **Variables**. You will see all the project variables defined in your project.![Variables_landing_page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd19ead74fa22d440/699c258131a5c5000890ea09/Variables_landing_page.png)

To add a new project variable, follow the steps below.

1.  Click the **"+"** icon on the Project Variables screen to add a new project variable.  
    ![Click_Add_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ea8b87a63569769/656c24f96a1419a37b417f26/Click_Add_Icon.png)
2.  A pop-up screen appears. Select a **Variable Type** to add a **Plain Text** or **Secret** variable.

    **Note:** Secret value cannot be viewed in an automation once saved.

3.  Enter the variable’s name in the **Key** field and value in the **Value** field.

    **Note:** Each **Key** must be unique in a project.

    ![Save_Variables.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8d088579329629a/656c24f94c0b9a9a83d564a4/Save_Variables.png)
4.  Click the **Save** button to create a project variable.

You can view the project variables in all the connectors with custom authentication.

For example, in the AWS S3 connector, you will see a list of all the project variables defined in your project as shown below:

![Custom_Authentication.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt410e11087b8a61f5/662b467bca8874abc0ed5345/Custom_Authentication.png)

Let's see how to add and use project variables in automation.

In this use case, we will cover a scenario where you can add project variables to create entries using the Contentstack [Content Management API](/docs/developers/apis/content-management-api).

We create two project variables: management token and stack key respectively. Once the variables are created, configure the [HTTP Trigger](/docs/agent-os/http-trigger), [HTTP Action](/docs/agent-os/http-action), and [Response](/docs/agent-os/response) connector.

Configure the HTTP Trigger to trigger the action. Later configure the HTTP Action to fetch the entries dynamically via the [Content Management API](/docs/developers/apis/content-management-api). You can display the response sent by the HTTP Action connector in the Response connector.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:

1.  **Set up the “HTTP Trigger" Event:** This trigger event is activated whenever a user makes a HTTP GET/POST request to the configured URL.
2.  **Set up the Contentstack “HTTP Action”:** Once the above event triggers the automation, you can fetch the data from the URL and add the Headers to authenticate the URL.
3.  **Set up the Contentstack “Response Action”:** You can check the data sent from the HTTP Action in the Response connector.

The steps to set up the Automation are as follows:

1.  [Configure HTTP Trigger](#configure-http-trigger)
2.  [Configure HTTP Action](#configure-http-action)
3.  [Configure Response Connector](#configure-response-connector)

Let’s look at the setup in detail.

1.  ## Configure HTTP Trigger

    1.  Select **Configure Trigger** from the left navigation panel.
    2.  Within the **Configure Trigger Step**, click the **HTTP** trigger connector.
    3.  Select **HTTP Request Trigger**. This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.
    4.  Select a **Method**, i.e., **GET/POST**.
    5.  Click the **Proceed** button.
    6.  You will find the applicable input “URL.” This URL will be the webhook URL to see the automation working.
    7.  Click the **Test Trigger** button to test the configured trigger.
    8.  On successful configuration, you can see the below output. Click the **Save and Exit** button.  
        ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4544c8b03a0c5fd/663093a024e181627cad160c/Save_Exit.png)
2.  ## Configure HTTP Action

    1.  Within the **Configure Action** **Step**, click the **HTTP** connector.

        **Note:** You can sort and search the connector(s) based on the filter.

    2.  Under **Choose an Action** tab, select the **HTTP Request** action.
    3.  On the **Configure Action** page, enter the **URL**. You can use any URL to fetch the data. Here, we are using a Content Management API URL to create an entry.  
        Select any one **HTTP method** from **GET**, **POST**, **PUT**, **DELETE**, and **PATCH**. For this example, we are choosing the **POST** HTTP method.
    4.  In the Post **Body**, enter the entry data you want to fetch in JSON format.
    5.  Click the **Show Optional Fields** toggle button to enter the respective names and values for **Headers**. Here we use the Header parameters defined in the Content Management API.  
        Use the Contentstack-defined header parameter in the **Header Name** field and the project variables in the **Value** field.  
        ![HTTP_Action_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5f816b4d755cdb3/656c24f994a2472ac434e1dd/HTTP_Action_Configuration.png)
    6.  Click the **Proceed** button.
    7.  Click the **Test Action** button to test the configured action.
    8.  Click the **Save and Exit** button.
    9.  You will see an entry created in the defined content type.
3.  ## Configure Response Connector

    1.  Within the **Configure Action Step**, click the **Response** connector.

        **Note:** You can sort and search the connector(s) based on the filter.

    2.  Under **Choose an Action** tab, select the **Response** action.
    3.  Based on the results of your configured action, enter the **Response Status**.
    4.  In the **Response Body** field, you can add the data that you want to send as the response. Fetch the data from the HTTP action.  
        ![Response_Body.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5541aa35fd297a3f/656c24f941d574823fc8164d/Response_Body.png)
    5.  Click the **Proceed** button.
    6.  Click the **Test Action** button to test the configured action.
    7.  Click the **Save and Exit** button.
4.  ## Test the Automation

    Now, let’s see how you can test out your Automation. To do so, perform the steps given below:

    1.  Toggle the **Activate Automation** button to activate the automation.
    2.  Hit the trigger URL to see the response generated.
    3.  To check the entries created in Contentstack, go to Contentstack, navigate to the desired content type. You will see entries created.
