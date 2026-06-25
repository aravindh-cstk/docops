---
title: "Analytics | Postman Collection"
description: Import the Postman collection for Analytics API endpoints and test requests with ready-to-use examples.
url: https://www.contentstack.com/docs/developer-apis/analytics-api/postman-collection
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Analytics | Postman Collection



## About Postman Collection

The Postman collection is a set of preconfigured REST API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developers/apis) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.



## Install Postman

To use the Postman collection you will need to have the [Postman](https://www.postman.com/downloads/) app. You can either download the **Desktop app**or use **Postman for Web**.

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection](#download-latest-collection) section.

Postman is available for [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64) / [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.



## Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the REST API endpoints for Contentstack.

**Note:** The Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app](https://www.postman.com/downloads).

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Postman collection in the following ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection
- Download Collection from GitHub Page

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the Analytics API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation. Note: If you want to try out the API requests, you can either import a copy of the collection or fork the collection.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the Analytics API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.
3. You will see a copy of the latest Postman collection in the left navigation panel.

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the Analytics API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Under Notifications, check Watch original collection to get notified of any changes that are made to the original collection.
5. Once done, click Fork collection to fork the Postman collection into your selected workspace.



## Configure Environment Variables

When you download and install the latest version of the Analytics API Postman Collection, you also download and import the respective environment along with the environment variables.

Once your environment is imported, next you need to set your environment specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman Collection.

Some of the important variables that you need to set are as follows:

| Environment Variable | Value |
| --- | --- |
| base_url | app.contentstack.com (region-speciifc URL) |
| organization_uid  | your_organization_uid |
| authtoken | your_authtoken |

**Note:** The Postman Collection will require a valid Authtoken to make API calls. Check out the [Authentication](../../../api-detail/analytics-api.md#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select Analytics API - Environment.
3. Click the "Open Environment" icon present in the top right corner of Postman. It opens up in the environment variables window.
4. In the Variable field, enter the name of the environment variables required to run the Analytics API, that is, base_url, authtoken, orgUid, and jobId (to retrieve the actual response). In the Current value field, enter your account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API requests from your Analytics Postman collection using your environment.



## Make an API Request

With the Analytics Postman Collection loaded into the Postman app (on the left panel) and the environment created, you can now make API requests to the Analytics API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, Analytics API - Environment, from the dropdown.
2. Select an API request from the Analytics Postman Collection. In this example, we will use the Subscription Usage request.Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click Send at the top right to make the API request. The API call should return a jobId in the response under the Body tab in the bottom half of the screen.
4. Copy the jobId received in the response of your request and pass it as a URL parameter in the Retrieve Data API request to retrieve the actual response.
5. Click Send to retrieve the actual response.



## Secure Organization UID and Tokens

We strongly advise against storing your Organization UID and authtokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your account-specific organization UID and tokens in your environment or directly to the sample requests.

#### Users using Authtoken

For users who use authtoken to authenticate their calls, when you make the **Log in to your account** API request, your authtoken will be saved in cookies.

If you want to prevent this action, perform the steps given below:

1. From the Postman collection, click Cookies.
2. In the Cookies modal under the Manage Cookies tab, click the Domains Allowlist at the bottom left.
3. Add app.contentstack.com or your region specific URL and click Add.

This will allow you to access [cookies of this domain in scripts](https://learning.postman.com/docs/sending-requests/cookies/#accessing-cookies-in-scripts) programmatically.

**Note:** To avoid this situation, we recommend you to use the organization UID along with the Authtoken to make valid Analytics API requests. For more information, refer to [Authentication](../../../api-detail/analytics-api.md#authentication).



## Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](../../../api-detail/analytics-api.md#download-latest-collection) again and you are good to go.
