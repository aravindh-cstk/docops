---
title: "[Developer Hub guides] - Marketplace DAM App Boilerplate"
description: Marketplace DAM App Boilerplate guide for building a DAM (Digital Asset Management) Marketplace app using the Marketplace DAM App Boilerplate.
url: https://www.contentstack.com/docs/developer-hub/marketplace-dam-app-boilerplate
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Developer Hub guides] - Marketplace DAM App Boilerplate

This page explains how to build a DAM (Digital Asset Management) Marketplace app using the Marketplace DAM App Boilerplate in Contentstack’s Developer Hub. It is intended for developers building stack apps with specific UI locations (App Configuration, Custom Field, JSON RTE) and should be used when setting up, running, and configuring the boilerplate locally and inside a Contentstack stack.

## Marketplace DAM App Boilerplate

A boilerplate streamlines your workflow with pre-configured templates, ensuring rapid development and seamless integration within the [Contentstack's Developer Hub](../developer-hub.md). It elevates digital asset management capabilities and enhances content delivery across diverse platforms.

They can define project-level elements or standard methods for one or more projects.

The following guide shows how to build a DAM (Digital Asset Management) Marketplace app using our Marketplace DAM App Boilerplate. For more information about the Marketplace DAM App Boilerplate, you can check the GitHub repository [here](https://github.com/contentstack/marketplace-dam-boilerplate-app).

## Why should you use the Marketplace DAM App Boilerplate?

- The DAM app boilerplate provides a standard code structure for all the required [UI locations](./about-ui-locations.md) of a DAM app. You can quickly start developing the app by changing the `root_config` files as needed for the third-party DAM application.
- Creating an application is quick since you only need to modify the required functions in `root_config` for your UI locations to work.
- We have built a boilerplate that incorporates all the best practices you can use while building your application in Contentstack.
- With this boilerplate, you can save a considerable amount of development time when building a third-party DAM Application.
- The boilerplate uses the [Venus Components Library](https://venus-storybook.contentstack.com/) to make your application correspond with our Contentstack user interface.

## Structure of the Marketplace App Boilerplate

The boilerplate folder structure consists of relative files and references, making it easy to acclimate within your project.

**Additional Resource**: To view the folder structure, please refer to the [README.md](https://github.com/contentstack/marketplace-dam-boilerplate-app/blob/main/README.md) file.

Below are the app routes for each location in App.tsx:

```
function App() {
  return (

             }>

                }
              />
              }>

                }
              />
              }>

                }
              />

  );
}
```

## Using Marketplace DAM App Boilerplate to Develop Custom Applications

To get started with building applications using the boilerplate, follow the steps given below:

### Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- Knowledge of ReactApp Framework and App Development
- Reference to [App SDK](https://github.com/contentstack/app-sdk-docs)

### Install Dependencies

- Navigate to the root directory of the downloaded zip [file](https://github.com/contentstack/marketplace-dam-boilerplate-app/blob/main/TEMPLATE.md).
- Run the following command to install the necessary packages:

In the terminal, go to the APP_DIRECTORY and install the necessary dependencies.

```
cd
```

```
npm i
```

**For UI**

- To install the necessary packages for the UI, navigate to the UI folder.

```
cd /ui
```

```
npm i
```

- Once the packages are installed, run the following command in the UI folder to get started. The UI server will start at port 4000.For Linux/MacOS:

```
npm run start
```

For Windows:

```
npm run winStart
```

**For RTE**

- To install the necessary packages for the JSON RTE, navigate to the RTE folder.

```
cd /ui/rte
```

```
npm i
```

- After you install the packages, run the following command in the RTE folder to get started. The RTE server will start at port 1268.

```
npm run start
```

**Note**: Add `.env` files to UI and JSON RTE before starting the server. The `.env` values are mentioned in the [README.md](https://github.com/contentstack/marketplace-dam-boilerplate-app/blob/main/README.md) file.

**Warning**: The UI and RTE are accessible on different ports.

### Creating a Project Using The Boilerplate

To use your application, you need to set it up in Contentstack. To do so, perform the steps given below:

- Log in to your [Contentstack account](https://www.contentstack.com/login).
- In the left-hand-side primary navigation, click the **Developer Hub** icon to go to the Developer Hub.
- Click the **+ New App** button.
- In the **New App** modal, select **Stack App** as the **Type of App**. Enter a suitable **Name** for your app and an optional **Description**, and then click the **Create** button. By default, the **Status** of the created app will be **Private**.
![DAM-Biolerplate-Create-New-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt80aed3ac76d45231/6567905c2d2f23288ff3dcb6/DAM-Biolerplate-Create-New-App.png)  **Warning**: While selecting the **Type of App** in the above step, ensure you select **Stack App**, as this boilerplate supports stack apps only.
- On the resulting **Basic information** page, upload your app’s icon and **Save** the changes.![Baisc_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta0034dffa9ea7108/65b7d9971be7ff87855da256/Baisc_Information.png)
- Click the **UI Locations **tab. To set the **App URL**, click the **View Hosting Settings **link. You will be redirected to the **Hosting **tab. On the resulting page, enter the **App URL**. In the development phase, this will be the UI server URL i.e,![UI_Locations.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38db2e08ff92ad55/65b7d997292a0ed66887d241/UI_Locations.png)  
  `http://localhost:4000/#

`
- Add the UI locations for your app, as per your requirement, inside the **App location(s)** option. The DAM template supports the following 3 UI locations:App Configuration
  - Custom Field
  - JSON RTE
- Add the below routes for each UI Location to get the desired results.**Note**: The name for each UI location is optional. By default, the app name is the UI location name.

**App Configuration**: In the App Configuration UI location, use `/config` for Path.![App_Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2fc6122feb21150/65b75f13c6000541ead5a8a9/App_Config.png)

- **Custom Field**: In the Custom Field UI location, use `<Your_App_Name>` for Name and `/custom-field` for Path. Select the **Data Type** as **JSON** to store JSON data in your entry.![Custom_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ca358bf3dd72966/65b75f14d2067b9be28c45cc/Custom_Field.png)

**Note**: For configuring JSON RTE UI location, please refer to the [Add JSON RTE UI Location](#add-json-rte-ui-location) section, as it works on different ports.

- After saving the recently added UI locations, click the **Install App** button to install the DAM app.
- Select the stack where you want to install the app, accept the terms of service, and click the **Install** button.![DAM-Biolerplate-Install-Sample-DAM-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3cf566341217a68a/656799a76a1419b99f416ceb/DAM-Biolerplate-Install-Sample-DAM-App.png)
- You will be redirected to the configuration page of the app. On the **Configuration** page, enter the following details:**Text input**: You can enter the input text for the Sample DAM app and save the data. You can also use any other app configuration as per your DAM website.
  - **Select input**: You can use the Select input field to select any option from the dropdown options.
  - **DAM radio input**: You can use the radio input field to choose an option from the given options (**Single Select** or **Multi Select**).

    **Note**: You can customize the app configuration with your dedicated fields.
  - **Save in Entry** [Mandatory]: If you select the **Custom Fields** option, you can select the structure of the data you want to save in the entry. If the **All Fields** option is selected, you might be able to add limited products in the custom field depending on the size of the data (Refer to the [Custom Fields Limitations](../create-custom-fields/limitations-of-custom-fields.md) documentation for more details).
- Click the **Save** button and then click **Open Stack** to start using the application.

**Additional Resource**: To learn more, refer to the [App Configuration](./app-config-location.md) document.

Having the basic DAM app setup ready, you can now update `root_config` files in the UI directories.

**Note**: You can go through the [Template.MD](https://github.com/contentstack/marketplace-dam-boilerplate-app/blob/main/TEMPLATE.md) file in our code repository documentation for complete details on `root_config` and update it as per the DAM platform that you are trying to integrate.

### Add JSON RTE UI Location

Before adding the JSON RTE UI Location, you have to update the **App URL** i.e. `http://localhost:1268`

**Warning**: After changing the port for JSON RTE UI location, you will be unable to view the Configuration screen and Custom field. The app configuration settings were already saved at the time of configuring the app, but will not be visible In the development phase.

In the JSON RTE UI Location, use `<Your_ App_Name>` for Name and `/dam.js` for Path.

Having the basic DAM app setup ready, you can now update `rte_config` files in the UI directories.

**Note**: You can go through the [Template.MD](https://github.com/contentstack/marketplace-dam-boilerplate-app/blob/main/TEMPLATE.md) file in our code repository documentation for complete details on `rte_config` and update it as per the DAM platform that you are trying to integrate.

## Use the DAM Application within your Stack

To use the DAM application within an entry of your stack, follow the steps given below:

- Go to your stack, click the [Content Models](../marketplace-platform-guides/content-models/about-content-models.md) icon in the left navigation panel, and click the **+ New Content Type** button.
- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:![DAM-Biolerplate-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee354d55bc8c985d/6567905c1204cdc284ca69e8/DAM-Biolerplate-Content-Type.png)

### Steps to use the DAM App within the Custom Field

- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a + sign.
- Under **Select Extension/App**, select names defined for the Custom Field UI location and click the **Proceed** button.  
  ![DAM-Biolerplate-Add-App-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte55b13c19c5aa9f1/6567905cac4c413a8194da09/DAM-Biolerplate-Add-App-In-Custom-Field.png)This adds the DAM app in the custom field.![DAM-Biolerplate-Added-App-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta3b6b13a3407cea8/6567905c5af539a7b959fd8c/DAM-Biolerplate-Added-App-In-Custom-Field.png)
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the DAM app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.  
  You can see the DAM app’s custom field on your entry page as shown below:![DAM-Biolerplate-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted94ee14828c2658/656799a7753911eb69d065ee/DAM-Biolerplate-Custom-Field-Sample-Entry.png)
- Click the **+ Choose Asset(s)** button.![DAM-Biolerplate-Custom-Field-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77e018a7c564a09e/656799a71204cdc692ca6ab3/DAM-Biolerplate-Custom-Field-Choose-Assets.png)
- Select assets from the third-party DAM website to add them to your entry.![DAM_Assets.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f9244e0e1d29409/68a6b523026f3dd05e1dd20b/DAM_Assets.png)
- The asset(s) you selected are referenced within your entry. You can reorder the assets to arrange them in required order in both **Thumbnail** and **List** views.![DAM-Biolerplate-Custom-Field-With-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ebbf42e7bee9d77/656799a7753911b851d065f2/DAM-Biolerplate-Custom-Field-With-Assets.png)
- Click **Save** to save the entry.

### Steps to use the DAM App within the JSON RTE

- In the **Content Type Builder** page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field in your content type by clicking the **Insert a field** link represented by a + sign.
- Under **Select JSON RTE Plugin(s)**, choose the names defined for the JSON RTE UI location, and then click the **Add Plugin(s)** button.  
  ![DAM-Biolerplate-Add-App-In-JSON-RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf45412ce1e1d16d4/6567905c399417cf82b4a21d/DAM-Biolerplate-Add-App-In-JSON-RTE.png)This adds the DAM app in the JSON RTE.![DAM-Biolerplate-Added-Plugin-In-JSON-RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc09aa6167ff01620/6567905cdd39861d631453b0/DAM-Biolerplate-Added-Plugin-In-JSON-RTE.png)
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the DAM app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.  
  You can see the DAM app’s icon in the JSON RTE on your entry page as shown below:![DAM-Biolerplate-JSON-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cdcbe39b5c266b9/656799a8d411313e3c249aed/DAM-Biolerplate-JSON-Sample-Entry.png)
- Click the DAM app's icon.![DAM-Biolerplate-JSON-DAM-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt144b96a353d07875/656799a7df428296402f0578/DAM-Biolerplate-JSON-DAM-Icon.png)
- Select assets from the third-party DAM website to add them to your entry.
- The asset(s) you select are referenced within your entry. You can reorder the assets to arrange them in the required order within the JSON RTE.![DAM-Biolerplate-JSON-With-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbddc25938e964f93/656799a894e6c952d4216b33/DAM-Biolerplate-JSON-With-Assets.png)
- Click **Save** to save the entry.

## How to Use Predefined Examples in the Marketplace DAM App Boilerplate

You can check examples of some DAM (Digital Asset Management) apps, such as Bynder and Cloudinary in the GitHub code you downloaded to get started.

To do so, follow the steps below:

- Select the app example and configure the changes:**For UI**

Navigate to the `ui > example > sample_dam_app` folder and copy the `root_config` folder.

- Navigate to the `ui > src` folder and replace the `root_config` folder with the `ui > example > sample_dam_app > root_config` folder.

**For RTE**

- Navigate to the `ui > example > sample_dam_app` folder and copy the `rte_config` folder.
- Navigate to the `ui > rte > src` folder and replace the `rte_config` folder with the `ui > example > sample_dam_app > rte_config` folder.
- After configuration, restart both the servers for UI and RTE using the `npm` command as shown in the [Install Dependencies](#install-dependencies) section.
- Navigate to the stack where your application is installed and view your application in the configured UI location.

**Note**:

- You must open the app in the configured UI location to view it.
- The screenshots shown in this document are using **example/sample_dam_app** from the UI directory.

**Additional Resource**: To learn about the use of **Bynder** and **Cloudinary** DAM apps, please refer to the [Bynder App Installation Guide](../marketplace-apps/bynder.md) and [Cloudinary App Installation Guide](../marketplace-apps/cloudinary.md).

## Common questions

### What ports do the UI and JSON RTE servers run on?
The UI server will start at port 4000 and the RTE server will start at port 1268.

### Where do I configure the DAM app behavior for UI locations?
You can quickly start developing the app by changing the `root_config` files as needed for the third-party DAM application.

### What type of app should I create in Developer Hub for this boilerplate?
In the **New App** modal, select **Stack App** as the **Type of App**.

### Where can I find the boilerplate’s folder structure and environment variable values?
Please refer to the [README.md](https://github.com/contentstack/marketplace-dam-boilerplate-app/blob/main/README.md) file.