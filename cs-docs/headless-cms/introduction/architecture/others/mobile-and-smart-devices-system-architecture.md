---
title: "Mobile and Smart Devices System Architecture"
description: "Architecture diagram for a mobile or a smart device"
url: /headless-cms/mobile-and-smart-devices-system-architecture
---

# Mobile and Smart Devices System Architecture

## Mobile and Smart Devices System Architecture

Contentstack being a headless CMS empowers organizations to use the frontend of their choice. Its flexible architecture allows you to connect mobile, desktop, or smart devices with ease.

This guide gives an overview of the mobile and IoT system architecture powered by Contentstack.

![Mobile_IoT_System_Architecture.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9b24cf404f2547b3/6102b5e1e0115e5a01a07ce0/Mobile_IoT_System_Architecture.jpg)

(Download Diagram: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt1ceccab8ba82913d/6122b3b65e232866ad769c92/Mobile_and_Smart_Devices_Architecture.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0f5f20e3ec736934/6122b3b3504fe365615e0c03/Mobile_and_Smart_Devices_Architecture.svg?disposition=download), and [JPEG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt51147bf7459912ce/6122b3b45e232866ad769c8e/Mobile_and_Smart_Devices_Architecture.jpg?disposition=download))

## Diagram Overview

In the above diagram, the Devices component comprises a mobile application or an IoT device. The other elements of this component include Realm, Contentstack Sync Persistent SDK for syncing data between the connected device and Contentstack. 

The Contentstack SDK creates a bridge between the CMS and the device’s component. With Contentstack, you can connect different SaaS applications for content translations, digital asset management, implementing search for your app, and so on.

Let’s look at this architectural diagram in detail.  

## Devices Component

The Devices component in the architectural diagram consists of various elements. 

-   The first element is your frontend device. Contentstack’s flexible architecture allows you to connect any front-end device of your choice. You can choose to associate either an intelligent IoT device or a mobile application. Irrespective of what your front-end component is, the architecture will remain the same. 
-   The second element of the Device component is the database system. Devices such as mobile or IoT have their own databases to store data to display on the frontend once fetched from the CMS.  
      
    One of the widely used database systems for mobile devices is Realm. It is an open-source, cross-platform database management solution for mobile operating systems such as Android and iOS.  
    
-   The third element is the Sync Persistent SDK that is part of the Contentstack SDK. You can think of it as a middleware required to sync content between Contentstack and the Realm database.  
      
    Contentstack's Realm Persistence Library for iOS SDK helps you save the app data on the accessed device. This SDK enables your app to serve data offline. This Persistent Library contains methods required to map your content types data fields and use Realm for data storage.

## Contentstack Component

This component of the architecture diagram consists of your headless CMS. 

-   All your content management operations and information displayed on your mobile or the IoT device is fetched from Contentstack using the APIs and SDKs. 
-   You can connect different SaaS and other microservices with Contentstack using Extensions for various requirements such as content translation, search operations, data analytics, website optimization, personalization, etc.

## Next Steps

### More Architecture Diagrams

-   [Static website architecture](/docs/headless-cms/static-website-detailed-architecture)
-   [Simple Website](/docs/headless-cms/simple-website-detailed-architecture)
-   [Dynamic website architecture](/docs/headless-cms/dynamic-website-detailed-architecture)
-   [Partially headless setup architecture](/docs/headless-cms/partially-headless-setup-detailed-architecture)  
    
-   [Layered architecture for Contentstack-powered websites](/docs/headless-cms/contentstack-powered-website-layered-architecture)  
    
-   [Cloud infrastructure diagram](/docs/headless-cms/cloud-infrastructure-architecture-for-contentstack-powered-websites)
-   [Simple Website using DataSync](/docs/headless-cms/simple-website-using-datasync)
-   [MACH System Architecture](/docs/headless-cms/mach-architecture-diagram)

### Resources to Get Started

-   [Quickstart in 5 minutes](/docs/headless-cms/quickstart-in-5-mins)
-   [Sample applications](/docs/developers/sample-apps)
-   [How to start using Contentstack](/docs/headless-cms/how-to-start-using-contentstack)
