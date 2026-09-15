---
title: "Get Started with Python SDK"
description: "Work with Python SDK to create apps"
url: /developers/sdks/content-delivery-sdk/python/get-started-with-python-sdk
uid: blt173fdd3cb1ca1fb1
---

# Get Started with Python SDK

## Get Started with Python SDK

This guide will help you get started with Contentstack [Python SDK](/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk/) to build apps powered by Contentstack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   [Python 3](https://www.python.org/downloads/)

## Installation and Setup

To use the Contentstack Python SDK with your existing project, perform the following steps:

1.  Open the terminal, create a project, and move inside it as follows:

    ```
    mkdir project_name
    cd project_name
    ```

2.  Create a virtual environment:

    ```
    python3 -m venv venv
    ```

3.  Activate the virtual environment:

    ```
    source  venv/bin/activate
    ```

4.  Install pip Contentstack as follows:

    ```
    pip install contentstack
    ```


You can download the latest dependency version [here](https://pypi.org/project/Contentstack/).

## Initialize SDK

Contentstack offers six regions **AWS North America**, **AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America,** and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.  

To initialize the SDK, the stack’s API key, [**delivery token**](/docs/headless-cms/about-delivery-tokens), and name of the [**environment**](/docs/headless-cms/about-environments) where you will publish the content, as shown in the snippet below:

```
import contentstack
stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
```

**Note:** By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, Azure North America, or Azure Europe, check the code of your region and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For setting the branch for Europe, Azure North America, or Azure Europe, check the [code of your region](/docs/administration/selecting-region-in-sdks#python) and initialize SDK in a particular branch.

## Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To retrieve a single [entry](/docs/headless-cms/about-entries) from a [content type](/docs/headless-cms/about-content-types), use the code snippet given below:

```
import contentstack
stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')

contentType = stack.content_type("content_type_uid")
blog_entry = content_type.entry("entry_uid")
blog_entry.fetch()
```

### Get Multiple Entries

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
import contentstack
stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')

blog_query = stack.content_type("content_type_uid").query()
Response = blog_query.find()
```

These were examples of some of the basic queries of the SDK. For advanced queries, refer to Contentstack Python SDK [API reference documentation](/docs/developers/sdks/content-delivery-sdk/python/reference/).

**Note:** Currently, the Python SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/python/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/python/reference/#query-limit) parameters in subsequent requests.

```
import contentstack
stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
query = stack.content_type('content_type_uid').query()
result = query.locale('locale-code').limit(20).skip(20).find()
```

## Limitations

-   We have a URL size limitation of **8 KB** on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.
-   The Python SDK does not support multiple content types referencing in a single query.
-   Currently, the Python SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [API Reference](/docs/developers/sdks/content-delivery-sdk/python/reference/)
-   [Python SDK Changelog](/docs/changelog?filter=sdks)
-   [View and Download Python SDK repository on GitHub](https://github.com/contentstack/contentstack-python)
