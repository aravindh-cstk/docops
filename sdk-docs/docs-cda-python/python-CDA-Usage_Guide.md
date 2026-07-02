---
title: "Contentstack - Python Delivery SDK"
description: "Contentstack - Python Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
cms_uid: "blt0f259937b4a7ce58"
---

# Contentstack - Python Delivery SDK

## Overview

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application front end, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/docs/developers/java/).

Contentstack provides Python Delivery SDK to build applications on top of Python. Given below is the detailed guide and helpful resources to get started with our Python Delivery SDK.

## Prerequisite

This guide will help you get started with Contentstack [Python SDK](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk/) to build apps powered by Contentstack.

- [Contentstack account](https://app.contentstack.com/#!/login)
- [Python 3](https://www.python.org/downloads/)

## SDK Installation and Setup

To use the Contentstack Python SDK with your existing project, perform the following steps:

1. Open the terminal, create a project, and move inside it as follows:
mkdir contentstack-example
cd contentstack-example
2. Create a virtual environment:
python3 -m venv venv
3. Activate the virtual environment:
source  venv/bin/activate
4. Install pip Contentstack as follows:
pip install contentstack

You can download the latest dependency version [here](https://pypi.org/project/Contentstack/)

## Quickstart in 5 mins

### Initializing your SDK

Contentstack offers seven [regions](/docs/developers/contentstack-regions/about-regions) AWS North America (AWS NA), AWS Europe (AWS EU), AWS Australia (AWS AU), Azure North America (AZURE NA), Azure Europe (AZURE EU), GCP North America (GCP NA), and GCP Europe (GCP EU) as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To initialize the SDK, the **stack’s api_key delivery token **and the name of the **environment **where you will publish the content, as shown in the snippet below:

```
import contentstack
stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
```

**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

Refer the below code if you want to use the Europe, Azure North America, Azure Europe, GCP North America, or GCP Europe region.

```
import contentstack
stack = contentstack.Stack("api_key", "delivery_token", "environment", region = "ContentstackRegion.AZURE_EU")
```

Once you have initialized the SDK, you can query entries to fetch the required content.

For Setting the branch for Europe, Azure North America, Azure Europe, GCP North America, or GCP Europe, refer the code below

**For Setting Branch:**

If you want to initialize SDK in a particular branch use the code given below:

```
import contentstack

stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token',environment= 'environment', branch='branch')
```

### Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](https://www.contentstack.com/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

**Get a Single Entry**

To retrieve a single [entry](https://www.contentstack.com/docs/content-managers/author-content/about-entries) from a [content type](https://www.contentstack.com/docs/developers/create-content-types/about-content-types), use the code snippet given below:

```
import contentstack

stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
contentType = stack.content_type("content_type_uid")
entry = content_type.entry("entry_uid")
response = entry.fetch()
```

**Get Multiple Entries**

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
import contentstack

stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
query = stack.content_type("content_type_uid").query()
response = query.find()
```

**Note:** By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Pagination

In a single instance, the [Get Multiple Entries](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/python/get-started-with-python-sdk/#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
stack = contentstack.Stack(api_key='api_key', delivery_token='delivery_token', environment='environment')
query = stack.content_type('content_type_uid').query()
response = query.locale('locale').limit(20).skip(20).find()
```
