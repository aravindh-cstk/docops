---
title: "[Developer Hub guides] - Guide to Convert Contentstack Extensions to Marketplace Apps"
description: Guide to convert your existing Contentstack extension to a marketplace app.
url: https://www.contentstack.com/docs/developer-hub/guide-to-convert-contentstack-extensions-to-marketplace-apps
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Developer Hub guides] - Guide to Convert Contentstack Extensions to Marketplace Apps

This page explains how to convert an existing Contentstack extension into a Marketplace app, including prerequisites, step-by-step conversion instructions, and example code; it is intended for developers and admins who manage stacks and build UI integrations in Contentstack.

## Guide to Convert Contentstack Extensions to Marketplace Apps

This comprehensive guide will help you convert your existing Contentstack extension to a marketplace app.

**Note:** Refer to the [Difference Between Apps and Extensions](../marketplace-platform-guides/difference-between-marketplace-apps-and-extensions.md) document to know more about the difference between them.

## Prerequisites

- Contentstack account with **Admin** role to stack
- **Important:** Get access to `app-sdk` repository from a concerned technical person of Contentstack
- Development requirements:Node.js - v20
- Npm - v8.1.4
- Your own development requirements, for example - React.js, Express.js, etc.
- Rest API client, such as [Postman](https://www.postman.com/)

## Steps to Convert Contentstack extension to a Marketplace App

- [Remove Existing Extension from the Stack](#remove-existing-extension-from-the-stack)
- [Develop your Marketplace App](#develop-your-marketplace-app)
- [Create an App in Contentstack Developer Hub](#creating-an-app-in-contentstack-developer-hub)
- [Install the App](#install-the-app)
- [Use your App in Content Types and Entries](#use-your-app-in-content-types-and-entries)

Let’s look at the steps in detail.

## Remove Existing Extension from the Stack

The first step to convert an extension into a marketplace app is to remove your existing extension.
Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps to remove your extension:

Click the “Stacks” icon and select the stack where you’ve created your extension.

- Click “Settings” and select “Extensions”. You’ll get a list of all the extensions that you’ve created.
- Hover over the extension that you want to convert into an app and click the “Delete” icon.
- Click “Delete” again to confirm your action.

## Develop your Marketplace App

When developing a Marketplace app, there are two parts that you need to work on: frontend and backend.
You can skip the backend part if your app doesn’t require server-side processing or logic. While the backend could be built in any programming language or framework of your choice, make sure to develop the frontend of your app in a JavaScript environment.
This is to ensure that your app can communicate with the NPM module `app-sdk `.

Let’s get started with the setup of your UI app.

Create your app’s root directory.

- Open your terminal/ command line, and navigate to your app’s root directory.
- Run `npm init` to initialize your project to start using npm packages.
- Navigate to your app’s root directory via the terminal/ command prompt, and run this command to install `app-sdk`:

```
npm install @contentstack/app-sdk
```

- Click “Delete” again to confirm your action.
- First, you must initialize `app-sdk` using the following code snippet, you can also refer to the example section which is at the end of this documentation:

```
ContentstackAppSdk.init().then(function (appSdk) {
                // Add your UI logic here
});
```

- A Marketplace app could have one or more UI locations in Contentstack. The UI locations are as follows:[Custom Field](./custom-field-location.md)
- [Sidebar Widget](./asset-sidebar-location.md)
- [Dashboard Widget](./dashboard-location.md)
- [RTE - Rich Text Editor](./rte-location.md)
- Config Screen with Webhooks

**Note:** In an extension, you can only add one Contentstack UI location.

Please make sure that your UI app has the respective URL routing for the selected locations:

| Sl. No. | Contentstack Location | Your app’s URL |
|---|---|---|
| 1. | Custom Field | `https://{yourwebsite.com}/custom-field` |
| 2. | Sidebar Widget | `https://{yourwebsite.com}/sidebar-widget` |
| 3. | Dashboard Widget | `https://{yourwebsite.com}/dashboard-widget` |
| 4. | Config Screen | `https://{yourwebsite.com}/config` |
| 4. | RTE - Rich Text Editor | `https://{yourwebsite.com}/rte` |

After successfully developing your app, deploy both the frontend and backend code of your app on any cloud platform of your choice and make a note of the URL where your app is hosted.
Based on the location, your app’s Base URL will change accordingly.
For example, if you're building a marketplace app for a custom field, your Base URL will look like this: `https://`{yourwebsite.com}`/custom-field`.
Contentstack will then render this URL on its webpage.

## Creating an App in Contentstack Developer Hub

It’s time to put your newly built app into action.
Connect your deployed app to Contentstack. For that, you need to create a Marketplace app.

To create an app in Marketplace, perform the steps given in the [Create an App in Marketplace](./creating-an-app-in-developer-hub.md) document.

Once done, your Marketplace app is now ready.

## Install the App

Now let’s install the Marketplace app in one of your stack.

To install your app, perform the steps covered in the[Installing an App in Developer Hub](./installing-your-app-via-developer-hub.md) guide.

Once done, your app is now installed and ready to use.

## Use your App in Content Types and Entries

Once your app is installed, navigate to the respective UI locations and check the rendering of your app in its defined locations.
For example, if your app has a “Custom Field” location, let’s see how you can use it in your content type:

Navigate to the stack where the app is installed.

- Create a content type with the custom field or [add your app as a custom field](../create-custom-fields/use-custom-field-in-content-types.md)in your existing content type.
- Finally, start add an entry for that content type using your app.

Similarly, test the app in other locations where you have installed it.

This concludes the setup guide of converting Contentstack extensions to marketplace apps.

## Example Code Featuring extension-sdk and app-sdk

Let’s say you have an extension with a custom field as its UI location, and it stores some data in Contentstack and retrieves it back. You need to convert it into its corresponding Marketplace app.

Here’s a simple extension that stores and retrieves some data from/ to Contentstack:

```

        // initialize Field Extension
        window.extensionField = {};

        // find color input element
        var HtmlElement = document.getElementById("input1");

        ContentstackUIExtension.init().then(function(extension) {
            // make extension object globally available
            extensionField = extension;

            // update the field height
            extensionField.window.updateHeight();

            // Get current color field value from Contentstack and update the color picker input element
            HtmlElement.value = extensionField.field.getData();
        })

        // on click of element we will set setFocus on field
        function setFocus(){
            extensionField.field.setFocus();
        }

        // On color change event, pass new value to Contentstack
        function onChange(){
            extensionField.field.setData(HtmlElement.value);
        }

```

Here’s the code for the Marketplace app built using React.js with TypeScript, for the above extension:

```
import React, { useEffect, useState } from 'react';

import ContentstackAppSdk from '@contentstack/app-sdk';
import { isEmpty } from 'lodash';

import { TypeDataSDK } from '../../common/types';

import InputElement from '../../components/inputelement/index';

const CustomField: React.FC = function () {
   const [state, setState] = useState({
       config: {},
       location: {},
       appSdkInitialized: false,
   });

   const [inputData, setInputData] = useState('');

   useEffect(() => {
       ContentstackAppSdk.init().then(async appSdk => {
           const config = await appSdk?.getConfig();

           setState({
               config,
               location: appSdk.location,
               appSdkInitialized: true,
           });

           appSdk.location.CustomField?.frame.updateHeight(300);

           const initialData = appSdk.location.CustomField?.field.getData();

           if (initialData && !isEmpty(initialData)) {
               setInputData(initialData);
           }
       });
   }, []);

   const onChangeSave = (saveData: any) => {
       state.location?.CustomField?.field?.setData(saveData.toString());
   };

   return (

           {state.appSdkInitialized && (

           )}

   );
};

export default CustomField;

```

## Common questions

### Do I need a backend to build a Marketplace app?
You can skip the backend part if your app doesn’t require server-side processing or logic.

### What SDK do I need to initialize in a Marketplace app?
You must initialize `app-sdk` (for example, `ContentstackAppSdk.init().then(function (appSdk) { ... });`).

### Can a Marketplace app have multiple UI locations?
A Marketplace app could have one or more UI locations in Contentstack.

### What should I do before converting an extension to an app?
The first step to convert an extension into a marketplace app is to remove your existing extension from the stack.