---
title: "About Python Management SDK"
description: "This documentation on Python Management SDK provides insights into leveraging the SDK to manage and manipulate content within your Python applications efficiently."
url: /developers/sdks/content-management-sdk/python/about-python-management-sdk
uid: blt1fb67d03df573dce
---

# About Python Management SDK

## About Python Management SDK

Contentstack offers the Python Management SDK that leverages [Content Management APIs](/docs/developers/apis/content-management-api) to help you efficiently manage your content within your Contentstack account.

With this SDK, you can seamlessly create, update, delete, and retrieve content.

Explore our tutorials and guides for seamless integration with Contentstack's supported tools and start your project effortlessly.

**Note:** The Contentstack Python Management SDK supports [Python 3 version 3.7](https://www.python.org/downloads/release/python-370/) or later.

To seamlessly integrate your Python application with Contentstack’s Python Management SDK, follow the steps outlined in the [Get Started with Python Management SDK](/docs/developers/sdks/content-management-sdk/python/get-started-with-python-management-sdk) documentation.

## Key Features

Here are some of the key features of the Python Management SDK:

1.  **Resource Management:** Management SDKs offer APIs and tools for tasks such as creating, updating, deleting, and retrieving data within your stack.
2.  **Authentication and Authorization:** You can authenticate and authorize users or applications to perform management operations in your stack using AuthTokens or Management Tokens.
3.  **Configuration Management:** These SDKs allow you to configure settings and parameters for different resources and services. This can include network configurations, access control policies, and system settings.
4.  **Automation:** You can automate repetitive tasks and processes with these SDKs, reducing manual effort and the likelihood of errors.
5.  **Integration:** Management SDKs seamlessly integrate with other tools, services, and platforms. This can involve API integration, compatibility with common development languages, and support for various operating systems.

## Quickstart with Python Management SDK

Here is an example of how you can start using the Python Management SDK.

### Initializing the SDK

To initialize the SDK and import its library into your system, execute the following command:

```
import contentstack_management 
client = contentstack_management.Client(authtoken= 'authtoken')
```

### Fetch Stack Details

To retrieve the details of your stack, execute the following command:

```
result = client.stack(api_key= 'api_key').fetch().json()
print(result)
```

### Execute Queries

Once you have access to the stack instance, you can execute any query.

For example, if you need to upload an asset in your stack, execute the following command:

```
“# prepare your request body”
asset  = {
   upload: 'path/to/file',
   title: 'Asset Title'
}
asset = client.stack(api_key='api_key').assets()
result = asset.upload(asset)
```

## More Resources

[Python Management Github Repository](https://github.com/contentstack/contentstack-management-python)
