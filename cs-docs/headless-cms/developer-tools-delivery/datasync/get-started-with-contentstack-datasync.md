---
title: "Get started with Contentstack DataSync"
description: "steps to get started with DataSync"
url: /headless-cms/get-started-with-contentstack-datasync
uid: blt52a7eb2688aee58e
---

# Get started with Contentstack DataSync

## Get started with Contentstack DataSync

With this step-by-step guide, you will learn how to start Contentstack DataSync on your localhost.

## Prerequisites

You need the following tools to run Contentstack DataSync:

-   [Node.js 20 or above](https://nodejs.org/en/download/)
-   [ngrok](https://ngrok.com/download/mac-os) for local system

## Installation and Setup

1.  ### Clone the boilerplate

    Clone the boilerplate by using the following git clone command.  

    ```
    git clone https://github.com/contentstack/datasync-boilerplate
    ```

    **Note:** By default, the boilerplate uses @contentstack/datasync-content-store-filesystem for storing JSON data, and @contentstack/datasync-asset-store-filesystem for storing media files.

2.  ### Add stack API key and delivery token

    Go to the config folder and open the all.js file. Add your [stack's API key](/docs/headless-cms/view-stack-details) and the [delivery token](/docs/headless-cms/about-delivery-tokens) of the [environment](/docs/headless-cms/about-environments):

    ```
    const config = {
      contentStoreModule: '@contentstack/datasync-content-store-filesystem',
      assetStoreModule: '@contentstack/datasync-asset-store-filesystem',
      listenerModule: '@contentstack/webhook-listener',
      contentstack: {
        apiKey: '<<Your API Key>>',
        deliveryToken:'<<Delivery Token>>',
       },                
    }
    ```

    **For AWS EU, AWS AU Azure NA, Azure EU, GCP-NA, or GCP-EU Region**:  
    By default, the app runs in the AWS NA region. If you are hosting your app in the AWS EU, AWS AU, Azure NA, Azure EU, GCP-NA, GCP-EU region, you will have to specify the host in the **all.js** file as shown below:  

    ```
    const config = {
      contentStoreModule: '@contentstack/datasync-content-store-filesystem',
      assetStoreModule: '@contentstack/datasync-asset-store-filesystem',
      listenerModule: '@contentstack/webhook-listener',
      contentstack: {
        apiKey: '<<your_api_key>>',
        deliveryToken:'<<your_delivery_token>>',
         host: '<<your_region_host_url>>' // Refer following table for host URLs
    },
    }
    ```

    Here’s the list of region-specific host URLs:

    <table><tbody><tr><td>Region</td><td>Host URLs</td></tr><tr><td>AWS NA</td><td><span class="code">cdn.contentstack.io</span></td></tr><tr><td>AWS EU</td><td><span class="code">eu-cdn.contentstack.com</span></td></tr><tr><td>AWS AU</td><td><span class="code">au-cdn.contentstack.com</span></td></tr><tr><td>Azure NA</td><td><span class="code">azure-na-cdn.contentstack.com</span></td></tr><tr><td>Azure EU</td><td><span class="code">azure-eu-cdn.contentstack.com</span></td></tr><tr><td>GCP NA</td><td><span class="code">gcp-na-cdn.contentstack.com</span></td></tr><tr><td><p>GCP EU</p></td><td><span class="code">gcp-eu-cdn.contentstack.com</span></td></tr></tbody></table>

3.  ### Install dependencies

    Open the command prompt and navigate to the project directory. Now, install npm dependencies by using the following command:

    ```
    npm install
    ```

4.  ### Run Contentstack DataSync

    Now start Contentstack DataSync by executing the following command.

    **On Linux**:

    ```
    NODE_ENV=development SYNC_ENV=development npm start
    ```

    **On Windows**:

    ```
    set NODE_ENV=development 
    set SYNC_ENV=development
    npm start
    ```

    **Note:**

    -   Set NODE\_ENV to the name of the environment for which the Delivery Token was added in [Step 2](#add-stack-api-key-and-delivery-token).
    -   Set SYNC\_ENV to the environment name selected during the [Delivery Token creation process](/docs/headless-cms/create-a-delivery-token).

    After running the above command, the server starts on **port 5000** and all the published items of your stack syncs on your infrastructure.  
    If your environment has any published content, the sync utility creates a \_contents folder in your project, and stores [assets](/docs/headless-cms/about-assets) inside the \_content/en-us/assets folder and [entries](/docs/headless-cms/about-entries) inside the \_content/en-us/data folder.

5.  ### Install and run ngrok (for localhost only)

    **Note:** If you use a deployment environment, such as production, you don't need ngrok. Skip this step and move to creating a [webhook](/docs/headless-cms/about-webhooks). Else, follow this step.

    [Contentstack DataSync](/docs/headless-cms/about-contentstack-datasync) is a webhook-based utility, and webhooks get triggered only on public domains. So, if you are setting up Contentstack DataSync on your local machine, you will require a public domain to receive webhook notifications.

    ngrok creates a public URL for your localhost and creates a secure tunnel between the two. So, you need to:  

    -   [Download and install ngrok](https://ngrok.com/download/mac-os) for your local host.
    -   Run ngrok  
        **On Linux**:

        ```
        ./ngrok http 5000
        ```

        **On Windows**:

        ```
        ngrok http 5000
        ```


    **Warning:** Make a note of the "Forwarding URL," you will need this URL while creating webhooks. Also, **DO NOT** close the ngrok console during the process, else Contentstack DataSync will not receive webhook notifications.

    ![ngrok.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfa412f8cf4f8398e/5d650d4379adf9235f38e80e/ngrok.gif)
6.  ### Create a webhook

    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your stack, and click on the "Settings" icon on the left navigation panel.
    2.  Select **Webhooks** and click on **\+ New Webhook**.
    3.  On the **Create Webhook** page, enter a specific name for your webhook and inside the **URL to notify** field, provide the ngrok URL (generated in the above step) and append "/notify" to the URL (for example, "https://ca1a27e9.ngrok.io/notify").

        **Tip:** If you using a deployment environment, such as "production," you will have to provide the public URL of your environment inside the **URL to notify** field (for example, "https://(your\_environment\_name).com/notify")

    4.  In the **When** section, click on the **Code View** option and paste the following code snippet in it:

        ```
        content_types.entries.environments.development.publish.success,
        assets.environments.development.publish.success,
        assets.environments.development.unpublish.success,
        content_types.entries.environments.development.unpublish.success,
        content_types.entries.delete,
        content_types.delete,
        assets.delete
        ```

        **Note:** We have used the "development" environment in the above code snippet. Please replace it with your environment name in your code snippet.

    5.  Click on **Save**.By adding this code, we have added webhook events that get triggered when data is published, updated, or deleted, and when any content type is deleted.
7.  ### Test the execution

    Now try publishing new entries or assets and test if it syncs as expected. Check whether the **\_contents** folder inside your project has all the synced data that you just published.
