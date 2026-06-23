---
title: "CDA | Postman Collection"
description: Import the Postman collection for Content Delivery API endpoints and test requests with ready-to-use examples.
url: https://www.contentstack.com/docs/developers/apis/content-delivery-api/postman-collection
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CDA | Postman Collection



## About Contentstack Postman Collection

The Contentstack Postman collection is a set of preconfigured REST API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developers/apis/) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.



## Install Postman

To use the Contentstack Postman collection you will need to have the [Postman](https://www.postman.com/). You can either download the **Desktop app** or use **Postman for Web.**

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection for Contentstack](#download-latest-collection) section.

Postman is available for [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64) / [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.



## Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the Content Delivery API endpoints for Contentstack.

**Note:** The Contentstack Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app.](https://www.postman.com/downloads/)

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Contentstack Postman collection in the following three ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the Content Delivery API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation.
2. Note: If you want to try out the API requests, you can either import a copy of the collection or fork the collection.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the Content Delivery API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.
3. You will see a copy of the latest Postman collection in the left navigation panel.
4. 
5.  

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the Content Delivery API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Under Notifications, check Watch original collection to get notified of any changes that are made to the original collection.
5. 
6. Once done, click Fork Collection to fork the Postman collection into your selected workspace.

#### Download Collection from GitHub Page

We have also hosted our Postman collection on [GitHub](https://github.com/contentstack/contentstack-postman-collections). You can follow the steps mentioned in the [Readme](https://github.com/contentstack/contentstack-postman-collections/blob/development/README.md) file to download and start using it.

You can also choose to watch the latest Postman collection to get notifications of new releases or updates.

To do so, click on the following **Watch** button and select **Watching**.



## Configure Environment Variables

When you download and install the latest version of the Content Delivery API (CDA) Postman collection, you also download and import the respective environment along with the environment variables.

Once your environment is imported, next you need to set your Contentstack account specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman collection.

Some of the important variables that you need to set are as follows:

| Environment Variable | Value |
| --- | --- |
| base_url | cdn.contentstack.io |
| api_key | your_stack_api_key |
| access_token | your_environment-specific_delivery_token |

**Note:** The Contentstack Postman collection will require a valid environment-specific [Delivery token](/docs/developers/create-tokens/about-delivery-tokens) to make API calls. Check out the [Authentication](#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select Content Delivery API - Environment..
3. Click the "eye" icon present in the top right corner of Postman. It opens up in the environment variables modal. Click Edit tomake changes in the variables.
4. In the VARIABLE field, enter the name of the environment variable.In the INITIAL VALUE field, enter your Contentstack-account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API Requests from your Contentstack Postman collection using your environment.



## Make an API Request

With the Contentstack Postman Collection loaded into the Postman app (on the left pane) and the environment created, you can now make API requests to the Contentstack API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, Content Delivery API-Environment, from the dropdown.
2. Select an API Request from the Contentstack Postman Collection. In this example, we will use the Get all content types request which is a part of the Content types folder.Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click on Send at the top right to make the API request.

The API call should return with a response under the **Body** tab in the bottom half of the screen.



## Working with Queries

Contentstack provides certain queries that you can use to fetch filtered results. You can use queries for Entries and Assets API requests.

#### Querying Entries

You can add queries to extend the functionality of an entry-specific API call. To add a query, you can either append the query parameter directly to the entry URL or append the query parameter along with your conditional query (in JSON format) to the entry URL.

**Case 1: Append the query parameter**

If you want to return a specific number of entries in your response output, you can use the limit query parameter. For example, if you want to retrieve only the first 2 entries of a content type, pass '2' as the value for the limit parameter.

```
https://cdn.contentstack.io/v3/content_types/{{content_type_uid}}/entries?limit=2
```

**Case 2: Append the conditional query**

If you want to retrieve all the entries of a content type in which the value for the Title ("uid":"title") field is “ABC”, you can append the query parameters to the entry URL as follows:

```
https://cdn.contentstack.io/v3/content_types/{{content_type_uid}}/entries?query={"title": "ABC"}
```

Let’s say you want to retrieve all the entries that have their start date as 8th December 2017. Now, you need to append the query with the start date in the ISO Date format as below:

```
https://cdn.contentstack.io/v3/content_types/{{content_type_uid}}/entries?query={ "start_date": "2017-12-08T00:00:00.000Z"  }
```

You can append multiple queries in a single API Request as follows:

```
{{entry_URL}}?environment={{environment}}&locale={{locale}}&include_count=true&skip={skip_value}&limit={limit_value}
```

#### Querying Assets

You can use Image Delivery APIs by appending queries to the image URL:

```
{{image_url}}?query_parameter
```

For example, to resize the width of an image to 100px, you need to append ?width={100} to the image URL. So, the API request would be:

```
https://images.contentstack.io/v3/assets/blteae40eb499811073/bltc5064f36b5855343/59e0c41ac0eddd140d5a8e3e/image_name?width=100.
```

You can also use multiple queries in a single API request as follows:

```
{{image_url}}?width={width_value}&height={height_value}&resize-filter={resize-filter_value}
```



## Secure API Keys and Tokens

We strongly advise against storing your API keys and tokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your Contentstack account-specific API keys and tokens in your environment or directly to the sample requests.



## Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](#download-latest-collection) again and you are good to go.

You can also choose to watch for the latest Postman Collection updates on our [GitHub repository](https://github.com/contentstack/contentstack-postman-collections) and get notifications of new releases or updates to the repository. The [GitHub Readme](https://github.com/contentstack/contentstack-postman-collections/blob/development/README.md) doc will help you with the steps that you need to follow.
