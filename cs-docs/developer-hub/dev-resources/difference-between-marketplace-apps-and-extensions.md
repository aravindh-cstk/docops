---
title: "Difference Between Marketplace Apps and Extensions"
description: "Difference Between Marketplace Apps and Extensions"
url: /marketplace/difference-between-marketplace-apps-and-extensions
---

# Difference Between Marketplace Apps and Extensions

## Difference Between Marketplace Apps and Extensions

**Warning:** Extensions are no longer actively maintained. We recommend using [Marketplace Apps](/docs/marketplace) for all new implementations. While existing extensions will continue to work, we encourage migrating to [Marketplace Apps](/docs/marketplace) for improved functionality, security, and support.

Apps are the future of integrating and implementing third-party solutions within your CMS. In comparison to extensions, apps offer advanced functionalities as they extend all the features of your current extensions and more to provide a seamless integration with your favorite third party platforms.

## Benefits of Using Apps Over Extensions

Here are a few important points that explain how apps can prove beneficial over extensions.

### **Ease of Use**

-   Contentstack apps are much easier to **develop**, **distribute**, and **discover**.
-   Apps can be easily located, installed, and managed from the Marketplace.
-   Contentstack apps provides an interactive UI to manage your custom app configuration from a centralized location.

### **Developer Friendly**

-   Apps minimizes the efforts that developers have to put into developing, deploying, and maintaining a solution.
-   With apps, developers can build complex functionalities in less time with better features.
-   Developers can effortlessly share app related upgrades with the customers.
-   Customers can use the latest and best version of the solution with updated app features from the Marketplace.

### **Packaging UI Locations**

-   Extensions are now added as [UI Locations](/docs/developer-hub/about-ui-locations) inside an app. This lets you pack and install multiple instances of UI locations from a single app, which means that a single app can be used as a custom field, sidebar extension, dashboard extension, etc.
-   As different UI locations can be merged and packaged into a single app, they can be installed/ uninstalled with a single click.
-   As you can package UI locations together for apps, you only need to configure the apps once and use them in multiple forms.

### **Other Advantages**

-   **Private Stack Apps** can be installed in all stacks of the same organization, reducing the code management in each stack whereas **Public Apps** can be installed in any stack and any organization, which reduces the code management multifold.
-   Apps allow you to merge the power of webhooks and UI locations and build compelling solutions.
-   Apps offer more security features and are scalable than extensions.

**Note:** We strongly recommend you to create and use Contentstack Marketplace apps instead of extensions.  
Refer to our detailed guide on how to [convert extensions into Marketplace apps](/docs/developer-hub/guide-to-convert-contentstack-extensions-to-marketplace-apps).

Now, let’s understand some core differences between Apps and Extensions.

## Difference Between App and Extension

The following table lists down the main differences between App and Extension:

<table><tbody><tr><td spellcheck="\"><strong>App</strong></td><td spellcheck="\"><strong>Extension</strong></td></tr><tr><td>An app is a single entity that can be reused in multiple stacks or organizations with just one click.</td><td>An extension can only be used for a specific stack.<br>This means that if you want to use a specific extension for multiple stacks, you need to create the same extension in all the stacks where you need it.</td></tr><tr><td>An app is a single entity that can be reused in multiple stacks or organizations with just one click.</td><td>An extension is scoped to a stack. Needs to be replicated across stacks to reuse</td></tr><tr><td><span data-type="inlineCode">app-sdk</span> is newer than <span data-type="inlineCode">extension-sdk</span> and has comparatively more features.<br>Hence, apps are compatible with newer versions of development building blocks like Node.js, npm, etc.</td><td><span data-type="inlineCode">extension-sdk </span>has limited capabilities.</td></tr><tr><td>You can build a config page for your app and pass the configurations in it.<br>For example, <span data-type="inlineCode">https://{yourwebsite.com}/config </span>will be your config page's location.</td><td>You can configure an extension through JSON.</td></tr><tr><td>You can open an app in a configuration window using your app's UI Locations feature during each installation.<br>There is no need to provide it in the config file while creating the app.</td><td>You can open an extension in a pop-up window using a separate URL that you can provide in config while creating your extension.</td></tr><tr><td><p>Here's an example of how you can use <span data-type="inlineCode">app-sdk</span> and initialize it:</p><pre>npm install @Contentstack_automation_test
/app-sdk
import ContentstackAppSdk from '
@Contentstack_automation_test
/app-sdk';
ContentstackAppSdk.init().then(function (appSdk) {    // Your UI logic goes here});</pre></td><td><p>Here's an example of how you can use <span data-type="inlineCode">extension-sdk</span> and initialize it:</p><pre>&lt;link href=\"https://unpkg.com/@contentstack/ui-extensions-sdk@2.2.0/dist/ui-extension-sdk.css\" rel=\"stylesheet\" &gt;
ContentstackUIExtension.init().then(function (extension) {
// Your UI logic goes here})</pre></td></tr></tbody></table>

  

**Additional Resource:** Refer to our [App Development pages](/docs/developer-hub), to learn how to build an app for Contentstack Marketplace.
