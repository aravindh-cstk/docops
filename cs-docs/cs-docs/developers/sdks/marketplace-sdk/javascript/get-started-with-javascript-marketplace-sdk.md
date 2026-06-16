---
title: "[JavaScript Marketplace] Get Started with JavaScript Marketplace SDK"
description: Step-by-step guide to install, authenticate, initialize, configure, and run basic queries with the JavaScript Marketplace SDK.
url: https://www.contentstack.com/docs/developers/sdks/marketplace-sdk/javascript/get-started-with-javascript-marketplace-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - javascript-developers
version: latest
last_updated: 2026-03-25
---

# [JavaScript Marketplace] Get Started with JavaScript Marketplace SDK

This page is a step-by-step guide for developers who want to install and start using the JavaScript Marketplace SDK with Contentstack, including authentication, region configuration, custom configuration, and basic Marketplace queries.

## Get Started with JavaScript Marketplace SDK

This step-by-step guide will help you get started with the [JavaScript Marketplace SDK](/docs/developers/sdks/marketplace-sdk/javascript/about-javascript-marketplace-sdk) and build apps powered by Contentstack.

## Prerequisites
To get started with the JavaScript Marketplace SDK, you will need the following:
- [Contentstack account](https://www.contentstack.com/login/)
- [Node.js](https://nodejs.org/) version 22 or later

## Installation and Setup
Execute the following command to install the JavaScript Marketplace SDK via npm:

```
npm i @contentstack/marketplace-sdk
```

## Authentication
To use this SDK, you must authenticate yourself using one of the following methods during initialization:
- Authtoken
- Login Credentials
- OAuth Token

Let’s look at each of them in detail.

### Authtoken
An [Authtoken](/docs/developers/create-tokens/types-of-tokens#authentication-tokens-authtokens) is a user-specific, read-write token used to make authorized Content Management API requests. You can retrieve an Authtoken by logging in to Contentstack using the “Log in to your account” request.

```
contentstackClient = contentstack.client({ authtoken: 'AUTHTOKEN' });
```

### Login
To log in to Contentstack using your credentials, execute the below code in your terminal:

```
contentstackClient.login({ email: 'EMAIL', password: 'PASSWORD'});
```

### OAuth Token
[Contentstack OAuth](/docs/developers/developer-hub/contentstack-oauth) uses the OAuth 2.0 protocol that allows external applications and services to access Contentstack APIs on your behalf.

```
contentstackClient = contentstack.client({ authorization: 'OAUTH_TOKEN' });
```

## Initialize the SDK
To initialize the SDK and import its library into your system, execute the following command:

```
import contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid');
```
**Note:** By default, the SDK uses the North American region, so configuration changes are not required for North American region users. Users of other regions can refer to the following section.

### Region Support
Contentstack offers four [regions](/docs/developers/contentstack-regions/about-regions) North America (NA), Europe (EU), Azure North America (Azure NA), and Azure Europe (Azure EU) as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the EU, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, given below, and the rest of the instructions remain the same.

```
import contentstack from '@contentstack/marketplace-sdk'
const contentstackClient = contentstack.client({ region: contentstack.Region.EU })
```
To set the Europe, Azure North America, or Azure Europe region, refer to the code below:

**Note:**
- For Europe, set region as** EU**
- For Azure North America, set region as **AZURE_NA**
- For Azure Europe, set the region as **AZURE_EU**

## Custom Configuration
Custom Configurations offer developers the flexibility to customize and adapt the SDK's behavior to suit their specific needs.

Here's an overview of the common customizable configurations within the JavaScript Marketplace SDK.

### Host
Contentstack provides the option for custom host configuration when initializing the Marketplace JavaScript SDK. This enables users to tailor the host to their specific data center / region preferences, allowing them to use a custom host instead of the default one.

The following host options are available:

| Datacenter | URL |
|---|---|
| AWS NA | https://developerhub-api.contentstack.com |
| AWS EU | https://developerhub-api.contentstack.com |
| AZURE EU | https://azure-eu-developerhub-api.contentstack.com |
| AZURE NA | https://azure-na-developerhub-api.contentstack.com |

Execute the below code for custom host configuration:

```
import contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ host: 'api.contentstack.io' });
```

### Refresh Token
If the authentication token provided is at risk of expiring during a process, users have the option to pass an optional `refreshToken` function. This function allows users to refresh the token without the need to re-authenticate the request.

Execute the below code for Refresh Token:

```
import contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({
    refreshToken: () => {
      return new Promise((resolve, reject) => {
        return issueToken().then((res) => {
          resolve({
              authorization: res.authorization
            })
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
)
```

## Basic Queries
Contentstack SDKs are designed exclusively for read-only purposes and utilize our robust and efficient CDN to fetch and deliver content from the nearest server.

This section focuses explicitly on the JavaScript Marketplace SDK and provides an overview of basic queries.

### Find All Marketplace Apps
To retrieve the details of all the apps in your Contentstack organization, execute the following code:

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').findAllApps()
.then((collection) => console.log(collection));
```

### Fetch Single App Details
To retrieve the details of a particular app, execute the following code:

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').fetch()
.then((app) => console.log(app));
```

### Create A New App
To create a new app/manifest in your Contentstack organization, execute the following code:

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
const app = {
 name: 'APP_NAME',
 description: 'APP_DESCRIPTION',
 target_type: 'stack'/'organization',
 webhook: // optional
  {
    target_url: 'TARGET_URL',
    channel: 'CHANNEL'
  },
 oauth: // optional
  {
    redirect_uri: 'REDIRECT_URI',
    enabled: true,
  }
}

client.marketplace('organization_uid').app().create(app)
.then((app) => console.log(app));

```

### More Resources
[JavaScript Marketplace GitHub Repository](https://github.com/contentstack/contentstack-marketplace-javascript)

### Next Steps
[JavaScript Marketplace SDK API Reference](/docs/developers/sdks/marketplace-sdk/javascript/reference)

## Common questions

### Which Node.js version is required?
[Node.js](https://nodejs.org/) version 22 or later.

### What authentication methods can I use with the SDK?
Authtoken, Login Credentials, or OAuth Token.

### Do I need to configure a region for North America?
**Note:** By default, the SDK uses the North American region, so configuration changes are not required for North American region users.

### Where can I find more examples and reference documentation?
[JavaScript Marketplace GitHub Repository](https://github.com/contentstack/contentstack-marketplace-javascript) and [JavaScript Marketplace SDK API Reference](/docs/developers/sdks/marketplace-sdk/javascript/reference).