---
title: "Using Repeat Paths to Automate Repetitive Task"
description: "Using Repeat Paths to Automate Repetitive Tasks"
url: /agent-os/using-repeat-paths-to-automate-repetitive-tasks
uid: blt06fbfbd53ca5b7e7
---

# Using Repeat Paths to Automate Repetitive Task

## Using Repeat Paths to Automate Repetitive Tasks

This use case covers a scenario where you can dynamically create multiple entries in Contentstack using the Repeat Path feature.

In this use case, we send bulk data via Postman and fetch the data in the HTTP trigger. Once the data is fetched, you need to configure the Repeat Path. Select the HTTP trigger data via the Data source field in the Repeat Path configuration.

**Note:** You can use any trigger or action to fetch the data from any source.

Configure the Contentstack action and select the Create an Entry action inside the repeat path. In the Create an Entry action, fetch the current-item value from the Repeat Path step. The current\_item will iterate through each item in the data array and create the entries in Contentstack.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:

-   **Set up the “HTTP'' Trigger Event:** This trigger event is activated whenever a user makes a HTTP GET/POST request to the configured URL. In this case, the data is collected from Postman to the HTTP trigger.
-   **Set up the Contentstack “Repeat Path”:** Once the above event triggers the automation, it checks for the configuration provided within the repeat path.
-   **Set up the Contentstack “Create an Entry” action:** When the Repeat Path configurations are set, the create an entry action will create different entries in Contentstack.

    **Note:** Once you configure any action inside the Repeat Path, it will execute the action step repeatedly until the condition is met.


The steps to set up the Automation are as follows:

1.  [Configure HTTP Trigger](#configure-http-trigger)
2.  [Configure Repeat Path](#configure-repeat-path)
3.  [Configure Contentstack Connector within the Repeat Path Step](#configure-contentstack-connector-within-the-repeat-path-step)

Let’s look at the setup in detail.

1.  ## Configure HTTP Trigger

    1.  Log in to your [Contentstack account.](https://www.contentstack.com/login/)
    2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.  
        ![image14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6084ca969044590/699d9d51af65af3c581da429/image14.png)[](https://www.contentstack.com/login/)
    3.  Click **\+ New Project** to add a new project.
    4.  Click **\+ New Automation**.
    5.  Enter the **Automation Name** and **Description**.
    6.  Click **Create**.
    7.  Select **Configure Trigger** from the left navigation panel.  
        ![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51088f75e1d8eb90/699d9d6bbc49c470948a793e/image3.png)
    8.  Within the **Configure Trigger** step, click the **HTTP** trigger connector.  
        ![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt407a17262b4691b4/699d9d8162d1393fbf846391/image6.png)
    9.  Select **HTTP Request Trigger**. This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.  
        ![Select_HTTP_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted3d78295677ac15/6602dcb1aabcc9a37f2f4bc5/Select_HTTP_Trigger.png)
    10.  Select a **Method**, i.e., **GET/POST**.  
         ![image19.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f8ab0078d66f3be/699d9db1b009382400832b31/image19.png)
    11.  Click the **Proceed** button.
    12.  You will find the applicable input “URL.” This URL will be the webhook URL to see the rule working. To send the data, hit the URL with a POST call in Postman.

         **Note:** Let’s consider the following dummy data from Postman.

         ```
         {
         "Students":
         [                   {"studentName":"test1","studentClass":"6","studentSection":"A"},
                             {"studentName":"test2","studentClass":"7","studentSection":"B"},
                             {"studentName":"test3","studentClass":"8","studentSection":"C"},
                             {"studentName":"test4","studentClass":"9","studentSection":"D"}
         ]}
         ```

    13.  Click the **Test Trigger** button to test the configured trigger.  

    14.  On successful configuration, you can see the below output. Click the **Save and Exit** button.  
         ![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt610de13b1763451c/699d9de0ba238f8fbf2f3b45/image7.png)
2.  ## Configure Repeat Path

    1.  Click **Configure Action Step** from the left navigation panel.  
        ![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef898b893fc322b0/699d9e057c3275df7f2add65/image8.png)
    2.  Click **Repeat Path** to configure and select the Repeat type.

        ![image24.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6293722c990a3f07/699d9e5040b0345c890f74b1/image24.png)
    3.  In the Repeat Path Configurations, select the **Data source** to iterate the array received in the trigger.  
        ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta0a52812bfb323d3/699d9eb07e22a9176ffaba44/image2.png)![image23.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ca28dc21305a3c6/699d9e8c62d139cda8846399/image23.png)
    4.  Click **Save Configuration**.  
        ![Save_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cf4577e56ac2813/6602dca6d057551183001074/Save_Configuration.png)
    5.  You can click the **Reload** icon to access the most recent data fetched from the **Data Source** field for the Repeat Path output without affecting the configuration.  
        ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e87e461ce210caa/699d9ece62d13967bb84639d/image2.png)
3.  ## Configure Contentstack Connector within the Repeat Path Step

    Configuring an action step inside the Repeat Path will iterate and run the action until the end of the data source is reached.

    1.  Click **\+ Add Step** under the Repeat Path from the left navigation panel.  
        ![image15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb6da81299052891/699d9f19f8f186aea78896a7/image15.png)
    2.  Within the **Configure Action Step**, click the **Contentstack** connector.  
        ![image9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf6b98a7d9d437a9/699d9f357b66ce5285c65c34/image9.png)
    3.  Select the **Contentstack Management** connector to perform CMS tasks.  

    4.  Under **Choose an Action** tab, select the **Create an Entry** action.  
        ![image10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2cc410afaed2add4/699d9f63af65af7e8f1da439/image10.png)
    5.  In the **Configure Action** tab, click **\+ Add New Account** to add your Contentstack account.  

    6.  Select a way to add a new account. You can authenticate your account in two ways: **Contentstack OAuth** or **Management Token**.  
        ![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt583530c9a76bca24/66042d3f0a7895c103d7f6ea/Authorize_Account.png)
        1.  If you select **Contentstack OAuth** and click **Proceed**, the Manage Permissions modal will open, as shown below. Provide the OAuth permissions for all the values by checking the boxes and click **Authorize**.  
            ![image21.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfd263628304106b/699d9fc4a215682668108ce5/image21.png)
        2.  In the pop-up that appears, select your organization to complete the authorization.  
            ![image22.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1dad3b394b877d3c/699d9ff80f1f9e679f129f18/image22.png)
        3.  In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize** to complete authorization.  
            ![Authorize_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc14717a94926f294/6602de7ed057550cc2001092/Authorize_Organization.png)
        4.  Provide an **Account Name** and click the **Save** button.  
            ![image16.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2a72d6a7b25bb6a4/699da02356ca117f3abb4831/image16.png)
    7.  Select a **Stack**, **Branch**, and a **Content Type** from the **Lookup** list.  
        ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb7cdc3680eef224/699da03bf8f186543e8896af/image1.png)
    8.  Provide your entry data in the **Entry Data** field. Fetch the data from the Repeat Path step.

        **Note:** Provide your entry data as per your content type schema in [JSON format](/docs/headless-cms/json-schema-for-creating-a-content-type/) only.

        ![image26.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3b0c7e0a33f53e1/699da04c883c63efe24d7b33/image26.png)
    9.  Click the **Proceed** button.
    10.  Click the **Test Action** button to test the configured action.  

    11.  Click the **Save and Exit** button.  
         ![image20.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1c4407f2140a92f/699da08a62d139044f8463a3/image20.png)

    You can also add another action step using the Quick Select screen after you have configured the Contentstack connector.

    ![image17.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b54e831ad6ab598/699da0b2b2b7de9d44b4997d/image17.png)


    In the output, you will see one entry. To view all the entries created, you must activate the automation.

    ![image25.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4470275979359193/699da0d93b580ea3f7249f5f/image25.png)


    After activating the automation, you must send the data via Postman to the HTTP trigger URL. Navigate to Contentstack to view the entries in the selected content type.

    ![Entry_Ouput_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c629d9a685126a9/6603ed360a78958f32d7f4a9/Entry_Ouput_1.png)


    You can view the details of the entry as shown below:

    ![Entry_Output_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdec92afc47263f5a/6603ed366f7fa77366eadec7/Entry_Output_2.png)
