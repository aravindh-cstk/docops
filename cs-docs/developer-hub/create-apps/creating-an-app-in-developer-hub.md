---
title: "Creating an App in Developer Hub"
description: "Learning how to create an app in Developer Hub"
url: /developer-hub/creating-an-app-in-developer-hub
uid: blt728de66bbf0c2878
---

# Creating an App in Developer Hub

## Creating an App in Developer Hub

Developer Hub lets you create an app that extends Contentstack. You can create a Standard app or a Machine to Machine app, then open its Basic Information page to configure it.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions, to create Machine to Machine or Organization apps

## What You Will Learn

-   How to create a Standard app in Developer Hub.

-   How to create a Machine to Machine app.

-   The difference between the Standard and Machine to Machine app categories.


## Create an app

To create a new app, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and follow the steps below:

1.  Navigate to **App Switcher** in the top-right corner and select **Developer Hub**.
2.  Click the **\+ New App** button.
3.  In the **Create New App** modal, select the category of app you want to create, i.e., **Standard** or **Machine to Machine**.

    1.  **Standard:** You can create a versatile app with UI Locations, Webhooks, OAuth 2.0 Integrations, and App Hosting capabilities.
    2.  **Machine to Machine:** You can create an OAuth-only app for seamless machine-to-machine interactions with Contentstack’s API.

    Only organization Admin(s) or the owner have the option to create both Standard and Machine-to-Machine applications. Other users can only create Standard applications. For more information about the different application categories, please refer to the "[Introduction to Contentstack Applications.](/docs/developer-hub/introduction-to-contentstack-applications)"

    ### Standard Category

4.  You can create both Organization and Stack apps within the Standard category. Please note that only organization admin(s)/owner can create organization apps.

5.  In the **Create New App** modal, add the following details to create an app under the Standard Category:

    1.  **App Type (required):** Select the type of app you want to create: Organization or Stack. Read more about [Types of App](/docs/developer-hub/types-of-apps/).
    2.  **Name (required):** Enter a suitable name for your app (for example, Sample App).
    3.  **Description (optional):** Enter a description for your app.  
        ![Create_Standard_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b26142e1ad9e51a/66e3cc3ebc8b1c457e3aab5f/Create_Standard_App.png)
    4.  Click the **Create** button.
    5.  Once you create the app, you will be navigated to the Basic Information page, where you will find the details of the apps.
    6.  On the left navigation panel, you will find [OAuth](/docs/developer-hub/contentstack-oauth), [UI Locations](/docs/developer-hub#managing-ui-locations), [Webhooks](/docs/developer-hub/managing-webhooks-in-an-app), [Hosting](/docs/developer-hub/app-hosting), App [Manifest](/docs/developer-hub/app-manifest), and [Version Log](/docs/developer-hub/app-versioning/) options.

        By using the **App Manifest** and **Version** options, you can view the current and previous versions of the app, whereas the remaining options let you configure or define the app.  

        ![Standard_App_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte009e563bf1ca422/66e3cc3ec91aebc9c86104c5/Standard_App_Page.png)

    **Note:** Once the app is created, you can manage and update it. Refer to the “More Articles” section to know more about it.

    ### Machine to Machine Category

6.  You can create Organization apps within the Machine to Machine category.

7.  Let’s see how to create a Machine to Machine Organization app.

    1.  **Name (required):** Enter a suitable name for your app (for example, Sample App).
    2.  **Description (optional):** Enter a description for your app.  
        ![Create_M2M_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c2bf206baef6612/66e3cc3e07e58b072c800525/Create_M2M_App.png)
    3.  Click the **Create** button.
    4.  Once you create the app, you will be navigated to the **Basic Information** page, where you will find the details of the app.
    5.  In the left navigation panel, you will find the OAuth tab, which allows you to further configure the **OAuth** settings for your app.  
        ![M2M_App_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16afb3986ff49fe3/66e3cc3f4623eb04bd2b3bfd/M2M_App_Page.png)

You created an app in Developer Hub under the Standard or Machine to Machine category and reached its Basic Information page, where you can configure it further.
