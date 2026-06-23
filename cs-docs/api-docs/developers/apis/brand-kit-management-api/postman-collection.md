---
title: "Brand Kit | Postman Collection"
description: Import the Postman collection for Brand Kit Management API endpoints and test requests with ready-to-use examples.
url: https://www.contentstack.com/docs/developers/apis/brand-kit-management-api/postman-collection
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Brand Kit | Postman Collection



## About Brand Kit Postman Collection

The Brand Kit Postman collection is a set of preconfigured REST API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developers/apis/) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.



## Install Postman

To use the Brand Kit Postman collection you will need to have the [Postman](https://www.postman.com/downloads/). You can either download the **Desktop app**or use **Postman for Web**.

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection for Brand Kit](#download-latest-collection) section.

Postman is available for [Windows (x32)](https://dl.pstmn.io/download/latest/win32), [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64) / [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.



## Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the Brand Kit Management API endpoints for Contentstack.

**Note:** The Brand Kit Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app](https://www.postman.com/downloads/).

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Brand Kit Postman collection in the following three ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection
- Download Collection from GitHub Page

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the Brand Kit Management API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation.Note: If you want to try out the API requests, you can either import a copy of the collection or fork the collection.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the Brand Kit Management API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.
3. You will see a copy of the latest Postman collection in the left navigation panel.

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the Brand Kit Management API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Under Notifications, check Watch original collection to get notified of any changes that are made to the original collection.
5. Once done, click Fork Collection to fork the Postman collection into your selected workspace.

#### Download Collection from GitHub Page

We have also hosted our Postman collection on GitHub. You can follow the steps mentioned in the Readme file to download and start using it.

You can also choose to watch the latest Postman collection to get notifications of new releases or updates.

To do so, click the following **Watch**button and select **Watching**.



## Configure Environment Variables

When you download and install the latest version of the Brand Kit Management API Postman Collection, you also download and import the respective environment along with the environment variables.

Once your Environment is imported, next you need to set your Brand Kit account specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman Collection.

Some of the important variables that you need to set are as follows:

  
    

| Environment Variable | Value |
| --- | --- |
| base_url | https://ai.contentstack.com/brand-kits |
| brand_kit_uid | your_brand_kit_uid |
| authtoken | your_authtoken |

  

**Note:** The Brand Kit Postman Collection will require a valid Authtoken to make API calls. Check out the [Authentication](/docs/developers/apis/brand-kit-management-api#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select Brand Kit Management API - Environment.
3. Click the "eye" icon present in the top right corner of Postman. It opens up in the environment variables modal. Click Edit to make changes in the variables.
4. In the VARIABLE field, enter the name of the environment variable. In the INITIAL VALUE field, enter your Brand Kit-account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API Requests from your Brand Kit Postman collection using your environment.



## Make an API Request

With the Brand Kit Postman Collection loaded into the Postman app (on the left panel) and the environment created, you can now make API requests to the Brand Kit Management API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, Brand Kit Management API - Environment, from the dropdown.
2. Select an API Request from the Brand Kit Postman Collection. In this example, we will use the Get all projects request which is a part of the Projects folder.
    Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click Send at the top right to make the API request.The API call should return with a response under the Body tab in the bottom half of the screen.



## Secure Organization UID and Tokens

We strongly advise against storing your Organization UID and authtokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your Brand Kit account-specific Organization UID and tokens in your environment or directly to the sample requests.

#### Users using Authtoken

For users who use authtoken to authenticate their calls, when you make the **Log in to your account** API Request, your authtoken will be saved in cookies.

If you want to prevent this action, perform the steps given below:

1. Click Cookies on the far right corner.
2. In the Cookies modal under the Manage Cookies tab, click the Domains Allowlist at the bottom left.
3. Add ai.contentstack.com/brand-kits and click Add.

This will allow you to access [cookies of this domain in scripts](https://learning.postman.com/docs/sending-requests/cookies/#accessing-cookies-in-scripts) programmatically.

**Note:** To avoid this situation, we recommend you to use the Brand Kit UID along with the Authtoken to make valid Brand Kit Management API requests. For more information, refer to [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).



## Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](/docs/developers/apis/brand-kit-management-api#download-latest-collection) again and you are good to go.

You can also choose to watch for the latest Postman Collection updates on our GitHub repository and get notifications of new releases or updates to the repository. The GitHub Readme doc will help you with the steps that you need to follow.
