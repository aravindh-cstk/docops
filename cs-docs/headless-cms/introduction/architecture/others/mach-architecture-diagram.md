---
title: "MACH Architecture Diagram"
description: "Comprehensive MACH System Architecture Diagram"
url: /headless-cms/mach-architecture-diagram
---

# MACH Architecture Diagram

## MACH Architecture Diagram

Technologies built on **MACH** (**microservices**, **API-first**, **cloud-native**, **headless**) principles are modular, pluggable, scalable, and provide a foundation to ensure that your enterprise architecture is always evolving. MACH enterprise architecture offers the flexibility to choose from the best-in-breed tools available today and makes it easy to plug, replace, or remove technologies anytime.  

The following examines the architecture of a sample digital property built using MACH principles:

![MACH_Architecture.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf0640c8f8db656f6/6387097b5bd399105c6fdecd/MACH_Architecture.jpg)

(Download Diagram: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt26fc38a49d41be94/6122b1479db95e7ff74b1d27/MACH_Architecture_Diagram.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd4ef301ec276c895/6122b147cc95cf70fa043297/MACH_Architecture_Diagram.svg?disposition=download), and [JPG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt026cb3dac54415dc/6122b1464d39656a33b07853/MACH_Architecture_Diagram.jpg?disposition=download))

## Diagram Overview

In the above diagram, we have different SaaS applications connected to Contentstack. It takes care of all your content management-related tasks and delivers content to your digital property.

The AWS Lambda in the architecture diagram represents the “microservice” component of MACH. The communication between the systems happens through the APIs (REST or GraphQL). The arrows in the diagram represent this communication and form the “API-first” component.

Apps such as commercetools, Bynder, etc. in the architecture make up the “Cloud-native SaaS” component. Lastly, Contentstack represents the “headless” component of the MACH architecture diagram.

Let's discuss these architectural components in detail.   

## Microservices-based Component

-   In traditional architectures, all the app features are part of a single instance and database. In a Microservices-based architecture, applications can work as stand-alone applications designed to execute a single function. Thus, you get the flexibility to upgrade apps seamlessly when a particular instance goes down without affecting the production work. 
-   The services are independent of each other. 
-   This allows businesses to auto-scale each service on-demand as the entire setup is now modular. An excellent example of a microservices-based component is AWS Lambda.
-   In the above architecture, AWS Lambda forms a bridge between Contentstack and other third-party apps such as SendGrid (for email management), Elasticsearch (for search-related operations), and Memsource (for content translation).
-   You can invoke it by using Contentstack webhooks when a particular event takes place in Contentstack. Using the APIs, it fetches the information from Contentstack and sends it to a third-party app, such as Memsource and vice versa.  
    

## API-first Component 

-   API-first approach indicates that all connected apps or services in the infrastructure communicate with each other by using the API.
-   The API allows your infrastructure to be modular by enabling apps to run independently of each other as services are not tightly coupled and use the APIs to fetch, store, and inject information in different systems or apps. 
-   All SaaS applications and microservices are connected through the APIs (arrows indicate API communication) in the above architecture. 
-   Commercertools, SendGrid, Google Analytics, and other services communicate with Contentstack using APIs. Thus, if you replace commercetools with any other app, the infrastructure will still not be affected as you can use other apps and establish communication with Contentstack using the APIs.  
    

## Cloud-native Component

-   Cloud-native in MACH refers to software delivered by using the SaaS framework. Businesses can leverage the full capabilities of cloud technology beyond storage and hosting, including elastic scaling of highly available resources. 
-   The full functionality of cloud-based apps is updated automatically by the vendor and requires no manual effort whatsoever in its management.
-   Examples of cloud-native apps include Memsource, SendGrid, Google Analytics, and so on. As a business, you don't have to worry about managing these apps at your end. 
-   You need to create APIs and connect your systems with these apps. The APIs will exchange information between SaaS apps and your CMS, Contentstack.    
    

## Headless Component

-   The headless setup refers to the decoupling of the application frontend with the backend. Thus, as a business, you get the flexibility of customizing your frontend experience for your customers. It can be smart devices, desktop or mobile devices, or any other digital touchpoint. 
-   In the above diagram, Contentstack is an excellent example of a headless system. It lets you choose and use the frontend of your choice and any other DAM, video platform, translation service provider, or email management solution that you may find fit for your infrastructure or business.   
    

## Next Steps

### More Architecture Diagrams

-   [Static website architecture](/docs/headless-cms/static-website-detailed-architecture)
-   [Simple Website](/docs/headless-cms/simple-website-detailed-architecture)
-   [Dynamic website architecture](/docs/headless-cms/dynamic-website-detailed-architecture)
-   [Partially headless setup architecture](/docs/headless-cms/partially-headless-setup-detailed-architecture)  
    
-   [Layered architecture for Contentstack-powered websites](/docs/headless-cms/contentstack-powered-website-layered-architecture)  
    
-   [Cloud infrastructure diagram](/docs/headless-cms/cloud-infrastructure-architecture-for-contentstack-powered-websites)
-   [Simple Website using DataSync](/docs/headless-cms/simple-website-using-datasync)
-   [Mobile or Smart Devices System Architecture](/docs/headless-cms/mobile-and-smart-devices-system-architecture) 

### Resources to Get Started

-   [Quickstart in 5 minutes](/docs/headless-cms/quickstart-in-5-mins)
-   [Sample applications](/docs/developers/sample-apps)
-   [How to start using Contentstack](/docs/headless-cms/how-to-start-using-contentstack)
