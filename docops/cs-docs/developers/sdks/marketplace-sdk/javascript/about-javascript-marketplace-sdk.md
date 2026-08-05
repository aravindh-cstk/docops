---
title: "[JavaScript Marketplace] About JavaScript Marketplace SDK"
description: About JavaScript Marketplace SDK for managing Contentstack Marketplace apps and integrations using Content Marketplace APIs.
url: https://www.contentstack.com/docs/developers/sdks/marketplace-sdk/javascript/about-javascript-marketplace-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - integrators
version: latest
last_updated: 2026-03-26
---

# [JavaScript Marketplace] About JavaScript Marketplace SDK

This page explains what the Contentstack JavaScript Marketplace SDK is, what it can do, and how to quickly start using it to authenticate and run Marketplace queries for apps and integrations in a Contentstack account.

## About JavaScript Marketplace SDK

Contentstack provides a JavaScript Marketplace SDK (that uses Content Marketplace APIs) that developers can use to manage the content of your [Contentstack account](https://www.contentstack.com/login/).

It houses third-party integrations, UI extensions (such as dashboard, sidebar, custom field, and RTE plugins), and other tools that you can plug into Contentstack at the stack as well as organizational level.

## Key Features

- **Perform operations on Apps:** Using the JavaScript Marketplace SDK, you have the capability to execute various operations on Marketplace apps, including Installation, Authorization, Configuration, and more.
- **Easy Request for App Installation: **A user who does not have access to install apps from the Marketplace can request the stack or organization admin to get the app installed. Only organization admins can accept or reject the request raised by the user.
- **Secured access with authorization: **When authorizing a Contentstack app, the app requests access to perform specific operations on behalf of the user. After the user authenticates and grants access, the app receives an access token. This token is then used as a credential when making calls to the Contentstack APIs.
- **Install Marketplace Apps with Ease: **Starter Apps can be [installed via the Marketplace](../../../marketplace-platform-guides/installing-a-starter.md#install-starter-via-marketplace-app). Additionally you can [Install Starter via Stack Creation Experience](../../../marketplace-platform-guides/installing-a-starter.md#install-starter-via-stack-creation-experience) as well.

## Quickstart With JavaScript Marketplace SDK

Here is an example of how you can start working with Contentstack JavaScript Marketplace SDK.

### Initializing the SDK

To initialize the SDK and import its library into your system, execute the following command:

```
import contentstack from '@contentstack/marketplace-sdk'
```

### Login to Contentstack

Next, log in to Contentstack via client using either an authtoken, authorization token, or your email and password.

To do so, execute the following command:

```
const client = contentstack.client({ authtoken: 'TOKEN'});
// OR
const client = contentstack.client({ authorization: 'TOKEN'});
// OR
const client = contentstack.client();
client.login({ email: ‘your@email.com’, password: ‘your_pwd’ });
```

### Execute Queries

Once you have access to the client instance, you can execute any Marketplace query.

For example, to retrieve details for an app, execute the following command and enter the UID of the app.

```
client.marketplace('organization_uid').app('manifest_uid').fetch()
.then((app) => console.log(app))
```

### More Resources

[JavaScript Marketplace SDK GitHub Repository](https://github.com/contentstack/contentstack-marketplace-javascript)

## Common questions

### What can I manage with the JavaScript Marketplace SDK?
You can perform operations on Marketplace apps, including Installation, Authorization, Configuration, and more.

### How can I authenticate when logging in via the SDK?
You can log in via client using either an authtoken, authorization token, or your email and password.

### Where can I find the SDK source and updates?
Use the [JavaScript Marketplace SDK GitHub Repository](https://github.com/contentstack/contentstack-marketplace-javascript).

### Can non-admin users install Marketplace apps directly?
A user who does not have access to install apps from the Marketplace can request the stack or organization admin to get the app installed, and only organization admins can accept or reject the request.