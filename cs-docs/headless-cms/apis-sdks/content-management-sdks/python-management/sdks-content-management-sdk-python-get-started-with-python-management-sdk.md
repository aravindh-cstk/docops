---
title: "Get Started with Python Management SDK"
description: "Learn to install and use the Contentstack Python Management SDK. Authenticate CMA requests, initialize stack clients, create entries, and upload assets via API."
url: /developers/sdks/content-management-sdk/python/get-started-with-python-management-sdk
uid: blte483c24375fa4969
---

# Get Started with Python Management SDK

## Get Started with Python Management SDK

Use the Python Management SDK to create, update, delete, or manage stack resources with the [Content Management API](/docs/developers/apis/content-management-api) (CMA).

**Note:** If you only need to fetch published content, use the [Contentstack Python Delivery SDK.](/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk)

## What You'll Learn

In this guide, you:

-   Install the Python Management SDK
-   Authenticate with an Authtoken, login credentials, a management token, or OAuth
-   Initialize a stack client
-   Run basic CMA operations, such as fetching stack details, creating an entry, and uploading an asset

## Prerequisites

Before you begin, make sure you have the following:

-   A [Contentstack account](https://www.contentstack.com/login/)
-   [Python 3](https://www.python.org/downloads/) version 3.7 or later
-   A stack API key and the authentication credentials that match the method you plan to use

Once you have these prerequisites, install the package in your Python environment.

## Install the Python Management SDK

Run the following command:

With the package installed, choose the authentication method that matches your workflow.

## Authentication Methods

The SDK supports four authentication methods. Use the one that matches your access pattern and account setup.

### Use an authtoken

Use an [Authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-auth-tokens) when you want a user-specific, read-write token for CMA requests.

### Use login credentials

Use login credentials when you want to authenticate with your Contentstack email address and password.

### Use a management token

Use a [management token](/docs/headless-cms/about-management-tokens) when you want stack-level access without a user-specific token.

### Use OAuth

Use [OAuth](/docs/developer-hub/contentstack-oauth) when you need an app-driven authorization flow.

After you authenticate, create a stack object so you can run CMA requests against a specific stack.

## Initialize the Client

Initialize the client with the authentication method you selected, and then create a stack-scoped object with your API key.

The following example uses an Authtoken. If you used login credentials, a management token, or OAuth, reuse that authenticated client object and create the same stack object.

With the stack object ready, you can run basic CMA operations.

## Run Basic CMA Operations

The following examples show common operations you can use to confirm your setup and start working with stack data.

### Fetch stack details

Fetch stack details to confirm that your client is authenticated and your API key is correct.

### Create an entry

Create an entry by passing an entry payload to a content type in your stack.

### Upload an asset

Upload an asset by passing the local file path to the asset upload method.

After these requests succeed, move to the full reference and repository examples for broader SDK coverage.

## Next Steps

-   Review the [Python Management SDK API Reference](/docs/developers/sdks/content-management-sdk/python/about-python-management-sdk)
-   Explore the [Python Management GitHub repository](https://github.com/contentstack/contentstack-management-python/)
-   Learn more about [Content Management API authentication](/docs/developers/apis/content-management-api#authentication)
