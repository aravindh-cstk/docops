---
title: "Guide to Convert Contentstack Extensions to Marketplace Apps"
description: "Guide to Convert Contentstack Extensions to Marketplace Apps"
url: /developer-hub/guide-to-convert-contentstack-extensions-to-marketplace-apps
---

# Guide to Convert Contentstack Extensions to Marketplace Apps

## Guide to Convert Contentstack Extensions to Marketplace Apps

This comprehensive guide will help you convert your existing Contentstack extension to a marketplace app.

**Note:** Refer to the [Difference Between Apps and Extensions](/docs/marketplace/difference-between-marketplace-apps-and-extensions) document to know more about the difference between them.

## What You Will Learn

-   How to remove an existing extension from a stack.
    
-   How to develop a Marketplace app frontend (and optional backend) against app-sdk.
    
-   How to create and install the app in Developer Hub.
    
-   How to use the app in content types and entries.
    

## Prerequisites

-   Contentstack account with **Admin** role to stack
-   **Important:** Get access to app-sdk repository from a concerned technical person of Contentstack
-   Development requirements:
    -   Node.js - v20
    -   Npm - v8.1.4
    -   Your own development requirements, for example - React.js, Express.js, etc.
-   Rest API client, such as [Postman](https://www.postman.com/)

## Steps to Convert Contentstack extension to a Marketplace App

1.  [Remove Existing Extension from the Stack](#remove-existing-extension-from-the-stack)
2.  [Develop your Marketplace App](#develop-your-marketplace-app)
3.  [Create an App in Contentstack Developer Hub](#creating-an-app-in-contentstack-developer-hub)
4.  [Install the App](#install-the-app)
5.  [Use your App in Content Types and Entries](#using-your-app-in-content-types-and-entries)

Let’s look at the steps in detail.

1.  ## Remove Existing Extension from the Stack
    
    The first step to convert an extension into a marketplace app is to remove your existing extension.  
    Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps to remove your extension:
    
    1.  Click the “Stacks” icon and select the stack where you’ve created your extension.
    2.  Click “Settings” and select “Extensions”. You’ll get a list of all the extensions that you’ve created.
    3.  Hover over the extension that you want to convert into an app and click the “Delete” icon.
    4.  Click “Delete” again to confirm your action.
2.  ## Develop your Marketplace App
    
    When developing a Marketplace app, there are two parts that you need to work on: frontend and backend.  
    You can skip the backend part if your app doesn’t require server-side processing or logic. While the backend could be built in any programming language or framework of your choice, make sure to develop the frontend of your app in a JavaScript environment.  
    This is to ensure that your app can communicate with the NPM module app-sdk .
    
    Let’s get started with the setup of your UI app.
    
    1.  Create your app’s root directory.
    2.  Open your terminal/ command line, and navigate to your app’s root directory.
    3.  Run npm init to initialize your project to start using npm packages.
    4.  Navigate to your app’s root directory via the terminal/ command prompt, and run this command to install app-sdk:
        
        ```
        npm install @contentstack/app-sdk
        ```
        
    5.  Click “Delete” again to confirm your action.
    6.  First, you must initialize app-sdk using the following code snippet, you can also refer to the example section which is at the end of this documentation:
        
        ```
        ContentstackAppSdk.init().then(function (appSdk) {
                        // Add your UI logic here
        });
        ```
        
    7.  A Marketplace app could have one or more UI locations in Contentstack. The UI locations are as follows:
        
        -   [Custom Field](/docs/developer-hub/custom-field-location)
        -   [Sidebar Widget](/docs/developer-hub/asset-sidebar-location)
        -   [Dashboard Widget](/docs/developer-hub/dashboard-location)
        -   [RTE - Rich Text Editor](/docs/developer-hub/rte-location)
        -   Config Screen with Webhooks
        
        **Note:** In an extension, you can only add one Contentstack UI location.
        
        Please make sure that your UI app has the respective URL routing for the selected locations:
        
        <table><tbody><tr><td spellcheck="false"><strong></strong><strong>Sl. No.</strong></td><td spellcheck="false"><strong>Contentstack Location</strong></td><td spellcheck="false"><strong>Your app’s URL</strong></td></tr><tr><td><p>1.</p></td><td><p>Custom Field</p></td><td spellcheck="false"><span class="code">https://{yourwebsite.com}<yourwebsite.com>/custom-field</yourwebsite.com></span></td></tr><tr><td><p>2.</p></td><td><p>Sidebar Widget</p></td><td spellcheck="false"><span class="code">https://{yourwebsite.com}<yourwebsite.com>/sidebar-widget</yourwebsite.com></span></td></tr><tr><td><p>3.</p></td><td><p>Dashboard Widget</p></td><td spellcheck="false"><span class="code">https://{yourwebsite.com}<yourwebsite.com>/dashboard-widget</yourwebsite.com></span></td></tr><tr><td><p>4.</p></td><td><p>Config Screen</p></td><td spellcheck="false"><span class="code">https://{yourwebsite.com}<yourwebsite.com>/config</yourwebsite.com></span></td></tr><tr><td><p>4.</p></td><td><p>RTE - Rich Text Editor</p></td><td spellcheck="false"><span class="code">https://{yourwebsite.com}<yourwebsite.com>/rte</yourwebsite.com></span></td></tr></tbody></table>
        
3.  After successfully developing your app, deploy both the frontend and backend code of your app on any cloud platform of your choice and make a note of the URL where your app is hosted.  
    Based on the location, your app’s Base URL will change accordingly.  
    For example, if you're building a marketplace app for a custom field, your Base URL will look like this: https://{yourwebsite.com}/custom-field.  
    Contentstack will then render this URL on its webpage.
    
4.  ## Creating an App in Contentstack Developer Hub
    
    It’s time to put your newly built app into action.  
    Connect your deployed app to Contentstack. For that, you need to create a Marketplace app.
    
    To create an app in Marketplace, perform the steps given in the [Create an App in Marketplace](/docs/developer-hub/creating-an-app-in-developer-hub) document.
    
    Once done, your Marketplace app is now ready.
    
5.  ## Install the App
    
    Now let’s install the Marketplace app in one of your stack.
    
    To install your app, perform the steps covered in the [Installing an App in Developer Hub](/docs/developer-hub/installing-your-app-via-developer-hub) guide.
    
    Once done, your app is now installed and ready to use.
    
6.  ## Use your App in Content Types and Entries
    
    Once your app is installed, navigate to the respective UI locations and check the rendering of your app in its defined locations.  
    For example, if your app has a “Custom Field” location, let’s see how you can use it in your content type:
    
    1.  Navigate to the stack where the app is installed.
    2.  Create a content type with the custom field or [add your app as a custom field](/docs/headless-cms/custom) in your existing content type.
    3.  Finally, start add an entry for that content type using your app.
    
    Similarly, test the app in other locations where you have installed it.
    
    This concludes the setup guide of converting Contentstack extensions to marketplace apps.
    

## Example Code Featuring extension-sdk and app-sdk

Let’s say you have an extension with a custom field as its UI location, and it stores some data in Contentstack and retrieves it back. You need to convert it into its corresponding Marketplace app.  

Here’s a simple extension that stores and retrieves some data from/ to Contentstack:

```
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://www.contentstack.com/sdks/contentstack-ui-extensions/dist/latest/ui-extension-sdk.js"></script>
<link href="https://www.contentstack.com/sdks/contentstack-ui-extensions/dist/latest/ui-extension-sdk.css" rel="stylesheet" type="text/css" media="all">
</head>
<body>
    <input type="text" id="input1" onchange="onChange()" onclick="setFocus()">
    <script>
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

    </script>
</body>
</html>
```

Here’s the code for the Marketplace app built using React.js with TypeScript, for the above extension:

```
import React, { useEffect, useState } from 'react';
 
import ContentstackAppSdk from '@contentstack/app-sdk';
import { isEmpty } from 'lodash';
 
import { TypeDataSDK } from '../../common/types';
 
import InputElement from '../../components/inputelement/index';
 
const CustomField: React.FC = function () {
   const [state, setState] = useState<TypeDataSDK>({
       config: {},
       location: {},
       appSdkInitialized: false,
   });
 
   const [inputData, setInputData] = useState<String>('');
 
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
       <div>
           {state.appSdkInitialized && (
               <InputElement onChange={onChangeSave} value={inputData} />
           )}
       </div>
   );
};
 
export default CustomField;
```
