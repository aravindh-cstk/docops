---
title: "[Developer Hub guides] - Get Started with Building Apps using Contentstack’s App SDK"
description: Get started guide for developing an app using Contentstack’s App SDK, including prerequisites, boilerplate setup, library imports, styling, SDK initialization, and an example file.
url: https://www.contentstack.com/docs/developers/developer-hub/get-started-with-building-apps-using-contentstack-app-sdk
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Developer Hub guides] - Get Started with Building Apps using Contentstack’s App SDK

This page explains how to start developing an app using Contentstack’s App SDK, including setting up prerequisites, cloning the boilerplate repository, importing required libraries, styling your project, initializing the SDK, and reviewing an example implementation. It is intended for developers building custom apps that integrate with the Contentstack application and should be used when setting up a new app project or integrating the SDK into an existing one.

## Get Started with Building Apps using Contentstack’s App SDK

The [Contentstack App SDK](https://github.com/contentstack/app-sdk-docs) provides the necessary methods to interact with the Contentstack application. Our Venus Component Library allows you to design and develop custom web or mobile applications and the freedom to use different resources altogether to build your application from scratch.

This guide will help you get started with developing an app using Contentstack’s App SDK.

## Prerequisites
- Active Contentstack account
- Access to Contentstack Developerhub
- Should have been assigned the Organization owner/admin or a Stack owner/admin role
- React Version >= 16.8.0
- Installed App SDK

## Clone Boilerplate GitHub Repository
Create a clone of the [boilerplate](https://github.com/contentstack/marketplace-app-boilerplate) GitHub repository that contains the template needed to create a starter application using the [Contentstack App SDK](https://github.com/contentstack/app-sdk-docs).

## Import Libraries
To start working with the boilerplate, you need to import the following libraries:
- Venus component library
- Contentstack App Sdk

For best user experience design your web application to correspond with the Contentstack user interface, you need to import the venus component library. The Contentstack Venus Component Library is a collection of Contentstack's UI components that you can use to create Contentstack-based web or mobile applications.

**Note:** The Contentstack Venus Component Library best works with React **version** greater than or equal to **16.8.0**.

To import the venus component library follow the steps given below:
- Open/create the location file.
- Run the following code to import the library elements:

```
import {
  Field,
  FieldLabel,
} from '@contentstack/venus-components';
```

**Note:** Using React is not mandatory to create applications.

## Style your Project
Contentstack's Venus Component Library is a complete package with plenty of styles for your projects. But, inevitably, you will need to modify them as per your project requirements.

Once you have cloned the GitHub repository, you can add the visual part of your app(the tile, icon style, display, and element type) to the template code. These parameters can vary for various apps.

Here we are creating a Sample application. For this app, the style code added to the template is as follows:

```
import '@contentstack/venus-components/build/main.css';
import 'custom.css';
```

## Add your JS Modules
In this step, you need to add your JS modules and import the app SDK as follows:

```
import ContentstackAppSdk from '@contentstack/app-sdk'; # imports app sdk
```
The Contentstack app SDK allows your code to interact with the Contentstack application.

Implement the following code to initialize the app SDK:

```
// javascript
ContentstackAppSdk.init().then(function (appSdk) {
    // Get AppConfigWidget object
    // This is only initialized on the App configuration page.
    // On other locations, this will return undefined.
    var appConfigWidget = await appSdk.location.AppConfigWidget;

    // Fetch all Installation configuration related to
    // 1. App Configuration
    // 2. Server Configuration
    // 3. Webhooks channels
    // 4. UI Locations configured in the app
    var installationData = await appConfigWidget.getInstallationData();

    // Update all Installation configuration related to:
    // 1. App Configuration
    // 2. Server Configuration
    // 3. Webhooks channels
    // 4. UI Locations configured in the app
    var getInstallationData = await appConfigWidget.setInstallationData(
        installationData
    );
});
```

## Example File
The code for your application should look as follows:

```
/* Import React modules */
import React, { useEffect, useState } from "react";
/* Import other node modules */
import ContentstackAppSdk from "@contentstack/app-sdk";
import { FieldLabel } from "@contentstack/venus-components";
import { TypeSDKData } from "../../common/types";
/* Import our modules */
/* Import node module CSS */
/* Import our CSS */
import "./styles.scss";

const DashboardWidget: React.FC = function () {
  const [state, setState] = useState({
    config: {},
    location: {},
    appSdkInitialized: false,
  });

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      const config = await appSdk.getConfig();
      appSdk?.location?.DashboardWidget?.frame?.enableAutoResizing?.();
      setState({
        config,
        location: appSdk.location,
        appSdkInitialized: true,
      });
    });
  }, []);

  return (

      {state.appSdkInitialized && (
        // <>
        //   Your dashboard UI must be developed here based on the state variable
        //   {`Your current state is ${JSON.stringify(state)}`}
        //

          {state.config.configField1}

      )}

  );
};

export default DashboardWidget;
```

## Common questions

### Do I need React to create applications?
No. **Note:** Using React is not mandatory to create applications.

### What React version is recommended for the Venus Component Library?
**Note:** The Contentstack Venus Component Library best works with React **version** greater than or equal to **16.8.0**.

### Where do I get a starter template for building an app?
Create a clone of the [boilerplate](https://github.com/contentstack/marketplace-app-boilerplate) GitHub repository that contains the template needed to create a starter application using the [Contentstack App SDK](https://github.com/contentstack/app-sdk-docs).

### What does the Contentstack App SDK allow my code to do?
The Contentstack app SDK allows your code to interact with the Contentstack application.