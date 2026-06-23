---
title: "[Python Management] - Get Started with Python Management SDK"
description: Step-by-step guide to install, authenticate, initialize, and run basic queries using the Python Management SDK with Content Management APIs (CMA).
url: https://www.contentstack.com/docs/developers/sdks/content-management-sdk/python/get-started-with-python-management-sdk
product: Contentstack
doc_type: sdk-getting-started
audience:
  - developers
  - python-developers
version: v1
last_updated: 2026-03-26
---

# [Python Management] - Get Started with Python Management SDK

This page provides a step-by-step guide to install and set up the Python Management SDK, authenticate, initialize the client, and run basic Content Management API (CMA) operations. It is intended for developers managing Contentstack-powered Python applications and should be used when you need to perform CRUD operations or manage stack content and assets.

## Get Started with Python Management SDK

This step-by-step guide will help you get started with the [Python Management SDK](/docs/developers/sdks/content-management-sdk/python/about-python-management-sdk), which utilizes [Content Management APIs](/docs/developers/apis/content-management-api) (CMA), for managing Python applications powered by Contentstack.

**Note:** If you intend to only fetch data without performing any CRUD operations, please use the [Contentstack Python Delivery SDK](/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk).

## Prerequisites

To get started with the Python Management SDK, you will need the following:
- [Contentstack account](https://www.contentstack.com/login/)
- [Python 3](https://www.python.org/downloads/) version 3.7 or later

## Installation and Setup

Execute the following command to install the Python Management SDK:

```
pip install contentstack_management
```

To import the SDK, execute the following command:

```
import contentstack_management
client = contentstack_management.Client()
```

## Authentication

To use this SDK, you must authenticate yourself using one of the following methods during initialization:
- Authtoken
- Login Credentials (your login email and password)
- OAuth Token

Let’s look at each of them in detail.

### Authtoken

An [AuthToken](/docs/developers/create-tokens/types-of-tokens#authentication-tokens-authtokens) is a user-specific, read-write token used to make authorized Content Management API requests. You can retrieve an Authtoken by logging in to Contentstack using the “Log in to your account” request.

```
client = contentstack_management.Client(authtoken='authtoken')
```

### Login

To log in to Contentstack using your credentials, you use the following lines of code:

```
client.login(email="email", password="password")
```

### Management Token

[Management Tokens](/docs/developers/create-tokens/about-management-tokens) are credentials that grant you read-write access to your stack's content. When used in conjunction with the stack API key, they enable authorized CMA requests for managing your stack's content.

```
result = client.stack(api_key='api_key', management_token='management_token' ).content_type('content_type_uid')
.fetch().json()
print(result)
```

## Initialize your SDK

To initialize the SDK, execute the following command:

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
```

## Basic Queries

This section focuses explicitly on the Python Management SDK and provides an overview of basic queries. You will learn how to retrieve the stack details, create an entry, or upload an asset.

### Fetch Stack Details

To retrieve the details of your stack, execute the following command:

```
result = client.stack(api_key='api_key').fetch().json()
print(result)
```

### Create Entry

To create an entry in a specific content type within a stack, execute the following command:

```
“# prepare your request body”
entry  = {
  title: 'Sample Entry',
  url: '/sampleEntry'
}

result = client.stack(api_key='api_key').content_types('content_type_uid').entry().create(entry)
print(result.json())
```

### Upload Asset

To upload an asset within a stack, execute the following command:

```
“# prepare your request body as dictionary”
asset  = {
   upload: 'path/to/file',
   title: 'Asset Title'
}
asset = client.stack(api_key='api_key').assets()
result = asset.upload(asset)
```

## More Resources

[Python Management Github Repository](https://github.com/contentstack/contentstack-management-python)

## Next Steps

[Python Management SDK API Reference](/docs/developers/sdks/content-management-sdk/python/reference/)

## Common questions

### When should I use the Python Management SDK instead of the Python Delivery SDK?
Use the Python Management SDK when you need to perform CRUD operations or manage content and assets via Content Management APIs (CMA). If you intend to only fetch data without performing any CRUD operations, use the Contentstack Python Delivery SDK.

### What authentication methods can I use with the SDK?
You can authenticate using Authtoken, Login Credentials (your login email and password), or OAuth Token during initialization.

### What do I need before installing the SDK?
You need a Contentstack account and Python 3 version 3.7 or later.

### Where can I find more examples and reference documentation?
See the [Python Management Github Repository](https://github.com/contentstack/contentstack-management-python) and the [Python Management SDK API Reference](/docs/developers/sdks/content-management-sdk/python/reference/).