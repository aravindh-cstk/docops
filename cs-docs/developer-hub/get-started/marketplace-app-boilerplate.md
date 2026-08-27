---
title: "Marketplace App Boilerplate"
description: "Quickly build Contentstack apps using the Marketplace App Boilerplate with support for custom fields, entry sidebars, dashboards, and secure integrations."
url: /developer-hub/marketplace-app-boilerplate
uid: blt7f57b643eb3dd44a
---

# Marketplace App Boilerplate

## Marketplace App Boilerplate

A boilerplate is a fitting template to describe distinct repetitive segments of a project to help build projects quickly and efficiently.

They can define project-level elements or standard methods for one or more projects.

For more details about the **Marketplace App Boilerplate**, [download](https://github.com/contentstack/marketplace-app-boilerplate) the GitHub repository.

## What You Will Learn

-   How to install and run the Marketplace App Boilerplate locally.

-   How to create an app in Developer Hub and add UI locations.

-   How to install and configure the app in a stack.

-   How to integrate the Venus Component Library and set up public key verification.


## Why You Should Use the Marketplace App Boilerplate?

1.  The boilerplate code includes all categories of applications you can create in Contentstack, i.e., custom fields, sidebar extensions, and dashboard extensions.
2.  You can quickly create an application since the routes and infrastructure are already built for you.
3.  We have built a boilerplate that incorporates best practices to help you build your Contentstack application.
4.  With this template, you can save a considerable amount of development time.
5.  You can use the JSON RTE plugin within the Boilerplate App. For more information, please refer to the [JSON RTE plugin](/docs/developer-hub/rte-location/) documentation.
6.  The boilerplate now includes native support for signed requests using the reusable useVerifyAppToken hook. This enhancement allows for secure API integrations, particularly when working with protected server routes or external services that require authentication or sensitive token validation.

## Structure of the Marketplace App Boilerplate

The boilerplate folder structure consists of relative files and references, making it easy to acclimate within your project. This structure also allows the boilerplate to be thoroughly portable between different stacks in Contentstack.

Below is the folder structure of the boilerplate:

```
MARKETPLACE-APP-BOILERPLATE/
│
├── e2e/
│   ├── pages/
│   │   ├── AssetPage.ts
│   │   ├── EntryPage.ts
│   │   ├── GlobalFullpage.ts
│   │   └── LoginPage.ts
│   ├── tests/
│   │   ├── app-flow.spec.ts
│   │   └── org-app-flow.spec.ts
│   ├── types.ts
│   └── utils/
│       └── helper.ts
│
├── public/
│   ├── default-app-icon.svg
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── appconfig.svg
│   │   ├── Asset-Sidebar-Logo.svg
│   │   ├── assetsidebar.svg
│   │   ├── close-button.svg
│   │   ├── Content-Type-Sidebar-Logo.svg
│   │   ├── Custom-Field-Logo.svg
│   │   ├── customfield.svg
│   │   ├── Entry-Sidebar-Logo.svg
│   │   ├── Field_Modifier.svg
│   │   ├── Field-Modifier-Icon.svg
│   │   ├── Full-Page-Logo.svg
│   │   ├── fullscreen.svg
│   │   ├── fullScreenGraphics.svg
│   │   ├── GearSix.svg
│   │   ├── help_icon.svg
│   │   ├── Icon.svg
│   │   ├── JsonView.svg
│   │   ├── lock.svg
│   │   └── sidebarwidget.svg
│   │
│   ├── common/
│   │   ├── contexts/
│   │   │   ├── appConfigurationExtensionContext.ts
│   │   │   ├── customFieldExtensionContext.ts
│   │   │   ├── entrySidebarExtensionContext.ts
│   │   │   └── marketplaceContext.ts
│   │   ├── hooks/
│   │   │   ├── useAppConfig.test.tsx
│   │   │   ├── useAppConfig.ts
│   │   │   ├── useAppLocation.ts
│   │   │   ├── useAppSdk.test.tsx
│   │   │   ├── useAppSdk.tsx
│   │   │   ├── useCustomField.test.tsx
│   │   │   ├── useCustomField.tsx
│   │   │   ├── useEntry.tsx
│   │   │   ├── useFrame.ts
│   │   │   ├── useHostUrl.ts
│   │   │   ├── useInstallationData.tsx
│   │   │   ├── useSdkDataByPath.test.tsx
│   │   │   ├── useSdkDataByPath.ts
│   │   │   └── useVerifyAppToken.tsx
│   │   ├── locales/
│   │   │   └── en-us/
│   │   │       └── index.ts
│   │   ├── providers/
│   │   │   ├── AppConfigurationExtensionProvider.tsx
│   │   │   ├── CustomFieldExtensionProvider.tsx
│   │   │   ├── EntrySidebarExtensionProvider.tsx
│   │   │   └── MarketplaceAppProvider.tsx
│   │   ├── types/
│   │   │   └── types.ts
│   │   └── utils/
│   │       └── functions.ts
│   │
│   ├── components/
│   │   ├── ConfigModal/
│   │   │   ├── ConfigModal.css
│   │   │   └── ConfigModal.tsx
│   │   ├── AppFailed.tsx
│   │   └── ErrorBoundary.tsx
│   │
│   ├── containers/
│   │   ├── 404/
│   │   │   └── 404.tsx
│   │   ├── App/
│   │   │   └── App.tsx
│   │   ├── AppConfiguration/
│   │   │   ├── AppConfiguration.module.css
│   │   │   └── AppConfiguration.tsx
│   │   ├── AssetSidebarWidget/
│   │   │   ├── AssetSidebar.css
│   │   │   └── AssetSidebar.tsx
│   │   ├── ContentTypeSidebar/
│   │   │   ├── ContentTypeSidebar.css
│   │   │   ��─�� ContentTypeSidebar.tsx
│   │   ├── CustomField/
│   │   │   ├── CustomField.css
│   │   │   ├── CustomField.test.tsx
│   │   │   └── CustomField.tsx
│   │   ├── DashboardWidget/
│   │   │   ├── StackDashboard.css
│   │   │   └── StackDashboard.tsx
│   │   ├── FieldModifier/
│   │   │   ├── FieldModifier.module.css
│   │   │   └── FieldModifier.tsx
│   │   ├── FullPage/
│   │   │   ├── FullPage.css
│   │   │   └── FullPage.tsx
│   │   ├── GlobalFullPage/
│   │   │   ├── GlobalFullPage.css
│   │   │   └── GlobalFullPage.tsx
│   │   ├── SidebarWidget/
│   │   │   ├── EntrySidebar.css
│   │   │   ├── EntrySidebar.test.tsx
│   │   │   └── EntrySidebar.tsx
│   │   ├── Tooltip/
│   │   │   ├── Tooltip.module.css
│   │   │   └── Tooltip.tsx
│   │   ├── index.css
│   │   └── index.tsx
│   │
│   ├── test-utils/
│   │   └── test-utils.tsx
│   │
│   ├── cssModules.d.ts
│   ├── custom.d.ts
│   ├── env.d.ts
│   ├── index.css
│   ├── main.tsx
│   ├── react-app-env.d.ts
│   └── setupTests.ts
│
├── CODEOWNERS
├── global-setup.ts
├── global-teardown.ts
├── index.html
├── LICENSE
├── manifest.json
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
├── SECURITY.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Below are the app routes for each location in App.tsx: You can check the folder containing the file as shown below: src/containers/App/App.tsx

```
function App() {
  return (
    <ErrorBoundary>
      <MarketplaceAppProvider>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route
            path="/custom-field"
            element={
              <Suspense>
                <CustomFieldExtensionProvider>
                  <CustomFieldExtension />
                </CustomFieldExtensionProvider>
              </Suspense>
            }
          />
          <Route
            path="/entry-sidebar"
            element={
              <Suspense>
                <EntrySidebarExtensionProvider>
                  <EntrySidebarExtension />
                </EntrySidebarExtensionProvider>
              </Suspense>
            }
          />
          <Route
            path="/app-configuration"
            element={
              <Suspense>
                <AppConfigurationExtensionProvider>
                  <AppConfigurationExtension />
                </AppConfigurationExtensionProvider>
              </Suspense>
            }
          />
          <Route
            path="/asset-sidebar"
            element={
              <Suspense>
                <AssetSidebarExtension />
              </Suspense>
            }
          />
          <Route
            path="/stack-dashboard"
            element={
              <Suspense>
                <StackDashboardExtension />
              </Suspense>
            }
          />
          <Route
            path="/full-page"
            element={
              <Suspense>
                <FullPageExtension />
              </Suspense>
            }
          />
          <Route
            path="/global-full-page"
            element={
              <Suspense>
                <GlobalFullPageExtension />
              </Suspense>
            }
          />
          <Route
            path="/field-modifier"
            element={
              <Suspense>
                <FieldModifierExtension />
              </Suspense>
            }
          />
          <Route
            path="/content-type-sidebar"
            element={
              <Suspense>
                <ContentTypeSidebarExtension />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MarketplaceAppProvider>
    </ErrorBoundary>
  );
}
export default App;
```

## Using the Marketplace App Boilerplate to Develop Custom Applications

To get started with building applications using the boilerplate, follow the steps given below:

### Prerequisites

1.  [Contentstack account](https://www.contentstack.com/login)
2.  Contentstack App Framework and knowledge of app development
3.  Reference to [App SDK](https://github.com/contentstack/app-sdk)
4.  [Node.js 20.17.0](https://nodejs.org/en/download/current/) or higher for Venus-components and boilerplate

### Install Dependencies

1.  Navigate to the root directory of the downloaded zip file.
2.  Run the following command to install the necessary packages:

    ```
    npm install
    ```

3.  After you install the packages, run the following command to get started:

    ```
    npm run dev
    ```


The following output appears in your browser once the localhost is running. This indicates everything is working as expected.

![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9edee2ac610347c1/6908cfc60edfcf82a6cf5a48/Output.png)

### Creating a Project Using the Boilerplate

To use your application, you need to upload it to Contentstack. To do so, follow the steps given below:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
2.  On the Dashboard page, click the **Developer Hub** icon as shown below:  
    ![Developer_Hub_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd183a670891dc235/6908cfb85e75bb3ef8ed9139/Developer_Hub_Icon.png)
3.  Click the **\+ New App** button.
4.  Contentstack supports two types of Apps based on two categories: [Standard and Machine to Machine](/docs/developer-hub/introduction-to-contentstack-applications).

    **Additional Resource:** Refer to the [Creating an App in Developer Hub](/docs/developer-hub/creating-an-app-in-developer-hub) document to know more about Standard and Machine to Machine app categories.

5.  In the **Create Standard App** modal, select the **App Type**, and give a suitable app **Name** and an optional **Description**.![Create_Standard_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc532d72938e03f3d/6908cfb8e09550293e84218b/Create_Standard_App.png)
6.  Click **Create**. You will be redirected to the **UI Locations** landing page.
7.  To continue, go to the **Manage** section and select the **Basic** **Information** tab.
8.  On the resulting **Basic** **Information** page, upload your app’s icon and **Save** the changes.

    **Note:** The **Save** button is **enabled only** after you edit the app’s editable details.

    ![Basic_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61d8ccb8a4caa74c/6908cfb800b05480f8f06209/Basic_Information.png)
9.  Click the **UI Locations** tab. To set the **App URL**, click the **View** **Hosting** link. You will be redirected to the **Hosting** tab.![View_Hostin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt885d513fa56db29b/6908cfc6a45e96e25fb5aeeb/View_Hostin.png)
10.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom** **Hosting** option to enter the hosted URL of your application. Enter the **App URL** and click **Save** to confirm your hosting configuration.![Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10375b557d636598/6908cfb8a15f04f883b5e0c1/Hosting.png)
11.  Navigate back to the UI Locations tab, click the vertical ellipses, then click the **\+ Add UI Location** button to add as needed.![Adding_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb8fd692a702aff29/6908cfb8f373fd8866fa9d8c/Adding_UI_Location.png)
12.  Add the below routes for each UI Location to get the desired results.

     **Note:** The name for each UI Location is optional, and can be used to override the default app name.

     1.  **Stack Dashboard**

         Enter a **Name**, use /stack-dashboard as the **Path**, and select the **Default** **Width**, then click **Save** to apply and store your configuration. This setup ensures your app appears as a widget on the Stack Dashboard.

         **Note:** The **Save** button becomes active once all required fields are completed.

         ![Stack_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8ad5d43684aa065/6908cfc6377457619c0e30e7/Stack_Dashboard.png)
     2.  **Asset Sidebar**

         Enter a **Name** and use /asset-sidebar as the **Path**, then click **Save** to apply and store your configuration. This setup ensures your app appears in the sidebar of the Asset panel, allowing users to interact with asset-related functionality.

         ![Asset_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30c5cb97542ad91e/6908cfb88310e88286ad81e5/Asset_Sidebar.png)
     3.  **Custom Field**

         Enter a **Name**, use /custom-field as the **Path**, and select the **Data Type**, then click **Save** to apply and store your configuration. This setup ensures your app appears as a custom field within entries, allowing users to input or display data through your app’s interface.

         **Note:** The **Save** button becomes active once all required fields are completed.

         ![Custom_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt250bf04f5c88ba24/6908cfb805649120eb6c9501/Custom_Field.png)
     4.  **Entry Sidebar**

         Enter a **Name** and use/entry-sidebaras the **Path**, then click **Save** to apply and store your configuration. This setup ensures your app appears in the sidebar of the entry editor, allowing users to perform actions or view information related to an entry.  

         ![Entry_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50ab20b36b39be0b/6908cfb95e75bb4ce1ed913d/Entry_Sidebar.png)
     5.  **App Configuration**

         Enter /app-configuration as the **Path**, then click **Save** to apply and store your configuration. This setup allows your app to display a dedicated app configuration page (after app installation) where users can manage app configuration.

         ![App_Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d4d084a178686c8/6908cfb88d96912a226675a8/App_Config.png)
     6.  **Full Page**

         Enter a **Name** and use /full-page as the **Path**, then click **Save** to apply and store your configuration. This setup enables your app to appear as a standalone full-page view within the stack.

         ![Full_Page_Boilerplate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53d5e337d737c477/6909d655aad664849ce34e2d/Full_Page_Boilerplate.png)
     7.  **Field Modifier**

         Enter a **Name**, use /field-modifier as the **Path**, and select the **Allowed Field Types**, then click **Save** to apply and store your configuration. This setup ensures your app can modify the specified field types within entries.

         **Note:** The **Save** button becomes active once all required fields are completed.

         ![Field_Modifier.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc756e6991bb38aa6/6909d8130570b2059f99b089/Field_Modifier.png)
     8.  **Content Type Sidebar**

         Enter a **Name** and use /content-type-sidebar as the **Path**, then click **Save** to apply and store your configuration. This setup ensures your app appears in the sidebar of the Content Type editor, allowing users to manage content type settings directly through your app.

         ![Content_Type_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2ebf2ae87e253fb/6909d655198de80a383b9991/Content_Type_Sidebar.png)
     9.  **Global Full Page**

         Enter a **Name** and use /global-full-page as the **Path**, then click **Save** to apply and store your configuration. This setup enables your app to appear as a full-page view accessible across all stacks in the organization.

         **Note:** You **must** create an **Organization app** to use this UI location.

         ![Global_Full.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt787fd47b1ea5a26f/6908cfb8531ab074072818c0/Global_Full.png)
13.  **Note:** After saving the locations, on the **UI Locations** screen, click **Install App** to install the app in a stack.

14.  Select the stack where you want to install the app and click the **Install** button.![Install_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97db2fa23e46faf5/6908cfc60564912ab86c9505/Install_App.png)
15.  You will be redirected to the configuration page of the app.

     **Note:** The **App Configuration** page is visible **only** if the **App Configuration** UI Location is set up. Not all apps (for example, the [Color Picker](/docs/marketplace/color-picker) app) require this configuration. Set up the App Configuration location **only if** your app needs any configuration.

     ![Sample_App_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5842694232731756/6908cfc6a15f0471cfb5e0c9/Sample_App_Configuration.png)
16.  On the **App Configuration** page, enter the values for **Sample App Configuration** field and **Sample Server Configuration** field.

     Let’s understand the configuration fields:

     1.  **Sample App Configuration:** You can save non-sensitive data that you want to show in different UI locations. For example, if you want to create a form with Username, Date, Email Address, etc. then, you can add the value in the field and view the data in the configured UI location(s).
     2.  **Sample Server Configuration:** You can save sensitive data. For example, if you want to create a form with Password, Client Secret, and Client ID then, you can enter a value in the Sample Server Configuration Field and the value will be stored in the backend via webhooks.

         **Additional Resource:** To learn more, refer to the [App Configuration](/docs/developer-hub/app-config-location) document.

         ![Sample_Configuration_with_Values.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc056ff1e328e2bac/6908cfc65e75bb9aa1ed9151/Sample_Configuration_with_Values.png)

     **Note:** The values entered in the **Sample App Configuration** and **Sample Server Configuration** fields are displayed across all UI locations configured for the app.

     Let’s understand how you can use the Sample App Configuration and Sample Server Configuration fields. These fields act as a template to use before developing an application. You can save the values in these fields based on the requirement (sensitive and non-sensitive) and view them in the configured UI location(s).

     Here is a sample code snippet for **Sample App Configuration** and **Sample Server Configuration** fields:

     Add the code in the ../src/containers/AppConfiguration/AppConfiguration.tsx file.

     ```
     import React, { useRef } from "react";
     import Icon from "../../assets/GearSix.svg";
     import localeTexts from "../../common/locales/en-us/index";
     import parse from "html-react-parser";
     import styles from "./AppConfiguration.module.css";
     import { useInstallationData } from "../../common/hooks/useInstallationData";
     import Tooltip from "../Tooltip/Tooltip";

     const AppConfigurationExtension: React.FC = () => {
       const { installationData, setInstallationData } = useInstallationData();
       const appConfigDataRef = useRef<HTMLInputElement>(null);
       const serverConfigDataRef = useRef<HTMLInputElement>(null);

       const updateConfig = async () => {
         if (typeof setInstallationData !== "undefined") {
           setInstallationData({
             configuration: { sample_app_configuration: appConfigDataRef.current?.value },
             serverConfiguration: { sampl_server_configuration: serverConfigDataRef.current?.value },
           });
         }
       };

       return (
         <div className={`${styles.layoutContainer}`}>
           <div className={`${styles.appConfig}`}>
             <div className={`${styles.appConfigLogoContainer}`}>
               <img src={Icon} alt="icon" />
               <p>{localeTexts.ConfigScreen.title}</p>
             </div>

             <div className={`${styles.configWrapper}`}>
               <div className={`${styles.configContainer}`}>
                 <div className={`${styles.infoContainerWrapper}`}>
                   <div className={`${styles.infoContainer}`}>
                     <div className={`${styles.labelWrapper}`}>
                       <label htmlFor="appConfigData">Sample App Configuration</label>
                       <Tooltip content="You can save this field for information such as Username, Email, Number, Date, etc." />
                     </div>
                   </div>
                   <div className={`${styles.inputContainer}`}>
                     <input
                       type="text"
                       ref={appConfigDataRef}
                       required
                       value={installationData.configuration.sample_app_configuration as string}
                       placeholder="Enter Field Value"
                       name="appConfigData"
                       autoComplete="off"
                       className={`${styles.fieldInput}`}
                       onChange={updateConfig} />
                   </div>
                 </div>
                 <div className={`${styles.descriptionContainer}`}>
                   <p>Use this field to share non-sensitive configurations of your app with other locations.</p>
                 </div>
               </div>

               <div className={`${styles.configContainer}`}>
                 <div className={`${styles.infoContainerWrapper}`}>
                   <div className={`${styles.infoContainer}`}>
                     <div className={`${styles.labelWrapper}`}>
                       <label htmlFor="serverConfigData">Sample Server Configuration Field </label>
                       <Tooltip content="You can use this field for information such as Passwords, API Key, Client Secret, Client ID, etc." />
                     </div>
                   </div>
                   <div className={`${styles.inputContainer}`}>
                     <input
                       type="text"
                       ref={serverConfigDataRef}
                       required
                       value={installationData.serverConfiguration.sample_app_configuration as string}
                       placeholder="Enter Field Value"
                       name="serverConfigData"
                       autoComplete="off"
                       onChange={updateConfig} />
                   </div>
                 </div>
                 <div className={`${styles.descriptionContainer}`}>
                   <p>
                     Use this field to store sensitive configurations of your app. It is directly shared with the backend via
                     webhooks.
                   </p>
                 </div>
               </div>
             </div>

             <div className={`${styles.locationDescription}`}>
               <p className={`${styles.locationDescriptionText}`}>{parse(localeTexts.ConfigScreen.body)}</p>
               <a target="_blank" rel="noreferrer" href={localeTexts.ConfigScreen.button.url}>
                 <span className={`${styles.locationDescriptionLink}`}>{localeTexts.ConfigScreen.button.text}</span>
               </a>
             </div>
           </div>
         </div>
       );
     };
     export default AppConfigurationExtension;
     ```

17.  Click **Save** and click **Open Stack** to start using the application.
18.  Navigate to the stack where your application is installed and view your application in the configured UI location.

     **Note:** You **must** open the app in the configured UI location to view it.

19.  ### Installing JSON RTE Plugin

20.  To install the JSON RTE Plugin, refer to the [RTE Location](/docs/developer-hub/rte-location) documentation.

21.  ## Integrating Venus Component Library

22.  [Venus Component Library](https://venus-storybook.contentstack.com/) is Contentstack’s official React-based UI library that offers a collection of pre-built, reusable components designed to ensure consistency and accessibility across **Marketplace** apps and **Developer** **Hub** tools.

23.  The library includes ready-to-use components such as buttons, modals, inputs, dropdowns, tables, and form controls, all built in alignment with Contentstack’s design system and accessibility guidelines.

24.  [Venus](/docs/headless-cms/venus-component-library) components can be seamlessly integrated into any React project, regardless of the build tool, including Vite, Webpack, or other modern bundlers.

25.  Follow the instructions given below to integrate the components with existing UI extensions built using React.

26.  **Note:** The following code snippet is provided for demonstration purposes only and is not available in the GitHub repository. You can use this code as a reference for integration.

27.  #### Installation

28.  Run the following command to install the Venus Component Library elements:

29.  ```
     npm i @contentstack/venus-components
     ```

30.  Use the following code snippet to import the css styles for the venus components.

31.  ```
     import @contentstack/venus-components/build/main.css;
     ```

32.  #### Usage

33.  Navigate to ../src/containers/DashboardWidget/StackDashboard.tsxand use the following code snippet to integrate the venus components into your file.

34.  ```
     import { Heading, Button } from "@contentstack/venus-components";
     import "@contentstack/venus-components/build/main.css";
     import "../index.css";
     import "./StackDashboard.css";

     const StackDashboardExtension = () => {
       return (
         <div className="layout-container">
           <div className="ui-location">
             <div className="ui-container">
               <Heading tagName="h2" text="Build App using Venus component" />
               <Button
                 buttonType="primary"
                 onClick={() => {
                   console.log("You clicked on Venus button");
                 }}>
                 Click on me
               </Button>
             </div>
           </div>
         </div>
       );
     };
     export default StackDashboardExtension;
     ```

35.  **Using Modal Component for Fullscreen View:**

36.  A modal component for fullscreen view can be added for any of the UI locations. Let us consider **Stack Dashboard** UI location as an example here:

37.  **Step 1:** Go to /src/components/ and create a Fullscreen component “DashBoardModal.tsx” to integrate within your app

38.  ```
     import React from "react";
     import { Icon } from "@contentstack/venus-components";
     import "@contentstack/venus-components/build/main.css";
     export type DashBoardModalProps = {
       closeModal: () => void;
       children: React.ReactNode;
     };

     const DashBoardModal: React.FC<DashBoardModalProps> = ({ closeModal, children }) => {
       return (
         <div
           style={{
             width: "calc(100vw - 100px)",
             height: "calc(100vh - 100px)",
             borderRadius: "inherit",
             overflow: "hidden",
             display: "flex",
             flexDirection: "column",
           }}>
           <div className="flex FullPage_Modal_Header">
             <h6 style={{ margin: "auto auto auto 22px" }}>FullScreen View</h6>

             <Icon
               icon="Compress"
               size="small"
               className="Tab__icon mt-20"
               hover={true}
               hoverType="secondary"
               style={{ marginRight: "30px", marginLeft: "auto", cursor: "pointer" }}
               onClick={() => {
                 closeModal();
               }}
             />
           </div>

           <div className="fullscreen h-full">{children}</div>
         </div>
       );
     };
     export default DashBoardModal;
     ```

39.  **Step 2:** Create a **ModalComponent.tsx** file inside /src/components/ which will be used to render in the fullscreen mode.

40.  ```
     const ModalComponent = () => {
       return (
         <div style={{ margin: "10px", padding: "10px" }}>
           <h1>Title</h1>

           <p style={{ textAlign: "justify", padding: "8px" }}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
             ducimus doloremque eum, a dolorum repudiandae, nostrum quas quae
             dolor tenetur saepe. Voluptas eaque praesentium ab velit consequatur
             deserunt totam, hic quidem, ipsam blanditiis vitae tempore nostrum
             officia tempora magni repudiandae consectetur laborum sint adipisci
             ex minima quas soluta esse id? Cupiditate saepe corporis suscipit!
             Molestias maiores quae blanditiis ipsa possimus, repudiandae cum?
             Iure deserunt quam blanditiis et?
           </p>
         </div>
       );
     };

     export default ModalComponent;
     ```

41.  **Step 3:** Go to /src/containers/DashboardWidget/StackDashboard.tsx file and add the following:

42.  ```
     import { useEffect, useRef, useState } from "react";
     import { Button, cbModal } from "@contentstack/venus-components";
     import { useAppSdk } from "../../common/hooks/useAppSdk";
     import DashBoardModal from "../../components/DashBoardModal";
     import ModalComponent from "../../components/ModalComponent";

     interface StackDashboardExtensionProps {
       fullScreen?: boolean;
     }

     /** Stack Dashboard page component. */

     const StackDashboardExtension = ({ fullScreen }: StackDashboardExtensionProps) => {
       const ref = useRef(null);
       const appSdk = useAppSdk();
       const [entries, setEntries] = useState([]);

       const selectedEnvironmentUid = "bltccf267c55327a117";
       const contentTypeUid = "content_type_changes";

       useEffect(() => {
         if (!fullScreen) {
           // @ts-ignore
           window.iframeRef = ref.current;
         }

         appSdk?.location.DashboardWidget?.frame.updateHeight(600);

         // Fetch entries
         const fetchEntries = async () => {
           if (!appSdk?.stack) return;

           const searchQuery = {
             type: "entries",
             include_publish_details: true,
             // query: { content_type_uid: contentTypeUid },
             limit: 100,
             skip: 0,
           };

           try {
             const searchResults = await appSdk.stack.search(searchQuery);
             console.log("searchResults", searchResults);

             const filteredEntries = searchResults.items
               ?.filter((entry: any) =>
                 entry.publish_details?.some((detail: any) => detail.environment === selectedEnvironmentUid)
               )
               .map((entry: any) => ({
                 ...entry,
                 publish_details: entry.publish_details?.filter(
                   (detail: any) => detail.environment === selectedEnvironmentUid
                 ),
               }));

             console.log("Entries published to environment:", filteredEntries);
             setEntries(filteredEntries || []);
           } catch (error) {
             console.error("Search error:", error);
           }
         };

         fetchEntries();
       }, [appSdk, fullScreen]);

       const openModal = () => {
         cbModal({
           component: (modalProps: any) => (
             <DashBoardModal {...modalProps}>
               <StackDashboardExtension fullScreen={true} />
             </DashBoardModal>
           ),

           modalProps: {
             size: "customSize",
           },
         });
       };

       let dynamicClassName = fullScreen ? "fullScreenWrapper" : "h-screen";

       return (
         <div ref={ref} className={dynamicClassName}>
           <ModalComponent />

           {!fullScreen && (
             <Button buttonType="primary" onClick={openModal} style={{ position: "fixed", marginLeft: "20px" }}>
               Fullscreen
             </Button>
           )}
         </div>
       );
     };

     export default StackDashboardExtension;
     ```

43.  ### Public Key Verification Setup for Signed Feature

44.  To enable JWT verification for signed requests, you must configure a specific environment variable in your .env file.

45.  **Step 1: Add Environment Variable**

46.  Add the following line to your .env file:

47.  ```
     VITE_PUBLIC_KEY_BASE_URL=https://app.contentstack.com
     ```

48.  **Step 2: Understand the Configuration**

49.  **What This Does**

50.  This variable specifies the **base URL** from which your application retrieves the **public key** used to verify JWT (JSON Web Token) signatures. By default, it points to Contentstack's **AWS North America (NA) region**.

51.  **Region-specific Configuration**

52.  If you are working with a Contentstack instance hosted in a different region, you can update this URL to reflect the appropriate region-specific endpoint.

53.  ## Next Step

54.  Next, you can refer to the [Get Started with Building Apps using Contentstack’s App SDK](/docs/developer-hub/getting-started-with-your-first-app) guide to start creating apps using the Contentstack App SDK.
