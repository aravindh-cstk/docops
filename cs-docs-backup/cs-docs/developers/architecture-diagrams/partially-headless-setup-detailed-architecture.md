---
title: "[Architecture Diagrams] - Partially Headless Setup"
description: Architecture diagram and explanation for a partially headless setup, showing migration from a traditional CMS to a headless CMS (Contentstack).
url: https://www.contentstack.com/docs/headless-cms/partially-headless-setup-detailed-architecture
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
  - architects
version: unknown
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Partially Headless Setup

This page provides an architecture diagram and detailed explanation of a partially headless setup, intended for developers and solution architects planning a phased migration from a traditional CMS to a headless CMS (Contentstack). Use it when you want to move one digital property (or one section of a site) to headless while keeping the rest on a conventional setup.

## Partially Headless Setup

****(**Download Diagram**: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blta306f83a8f3970b4/5f3d0779d5b383280ff0f103/Hybrid_Website_-_Detailed_Architecture.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4d34764dd49c9e50/5f3d07b9327a6201d7ebcc7b/Hybrid_Website_-_Detailed_Architecture.svg?disposition=download), [JPG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt62cf734efab1c8e9/5f3d05c2cc17142ec0f0c22d/Hybrid_Website_-_Detailed_Architecture.jpeg?disposition=download), and [VSDX)](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt811e83dfad182407/5f3d084aabab4a23d938ad6a/Hybrid_Website_-_Detailed_Architecture.vsdx?disposition=download)

A partially headless setup shows how you can move one of your digital properties to headless, while the rest continue to use the conventional setup.

If you wish to move your traditional website to Contentstack, you can use the architecture depicted below. To ensure that you are able to move everything to a headless setup, without impacting the availability, you can migrate one section of your website at a time.

## Diagram Overview

This architecture diagram shows various components of a headless and conventional CMS. This typical setup showcases an example of migration from a traditional setup to a completely headless setup (with Contentstack as your headless CMS), the recommended way is to migrate one site at a time.   If, for instance, your marketing site and the blog site are two different sites, you can consider moving one (e.g., blog) to a headless architecture. We have used this example to explain this in an easier way.

## Detailed Explanation

We can divide the architecture into the following components:
- IaaS - Infrastructure as a Service
- SaaS - Software as a Service
- CDN - Content Delivery Network

## SaaS (Software as a Service) Layer

Setting up a headless architecture enables you to adopt a microservices approach, where you can plug in and replace applications with ease. Your app can communicate and work with different SaaS applications through APIs. Let’s look at examples of some of the popular SaaS apps that most simple websites use and how they interact with the other components of your architecture.
- The content that your app will eventually deliver to your website visitors is created and managed within Contentstack. Contentstack communicates with other SaaS apps as well as your application, as required. We will look at the details of this communication below.
- A SaaS service, such as commercetools, can be integrated with Contentstack as a custom field.The commercetools custom field fetches product details and relevant product assets from Contentstack and displays them in the field itself.
- The custom field also fetches product's price details, cart and transaction information from the commercetools platform through APIs. This makes it possible for the client to see the product content and execute transactions on his browsers or other devices.
- Marketo Forms represents a SaaS provider that helps you create marketing forms (for product campaigns, etc.) for your app.It is connected with Contentstack (as a custom field extension) so that it can be added easily to the entries for form filling.
- When Marketo Form is connected with Contentstack as a custom field, you can easily select a form (from different available form options) and add it to your entries. When the page loads on the frontend, the form also loads through and embedded code.
- You can use Google Analytics to get analytics of your website usage.While you can fetch data directly from Google Analytics, it can also be connected with Contentstack as an extension (as a custom widget or dashboard widget). Using it as an extension allows you to show user behavior of each entry within the entry page, or show overall analytics on Contentstack’s stack dashboard.
- For smooth code deployment you can use GitHub as a third-party microservice.You can set up a developer workflow to ensure code changes in Contentstack are reflected correctly in GitHub through CI/CD (Continuous Integration/Continuous Deployment). This allows for smooth code deployments on GitHub when code changes are made in Contentstack.

## IaaS (Infrastructure as a Service ) Layer

This layer is where your app infrastructure sits. It holds your application code, frontend server, load balancers, firewalls, and other important components. Some of the services will be offered by your cloud infrastructure provider (such as AWS, Azure, or Google Cloud), while you may need to set up the other parts.

The architecture shows headless CMS (Contentstack) and traditional CMS as part of the IaaS layer. Let's discuss them separately.

### Headless CMS

Contentstack is a headless CMS that lets you manage and deliver content of your web application using APIs. This flexibility allows you to adopt a best-of-breed approach and bundle up multiple microservices to create websites and applications.
- Set up an auto-scaling group that auto-scales on demand. This group would contain your frontend app cluster, load balancer and firewall.
- The load balancers help your app distribute traffic to different servers, generally front-end servers.
- Network filtering through firewalls allow only legitimate requests to enter your infrastructure.
- You can set up multiple instances of your frontend app (aka frontend app cluster), with each one containing the frontend server and your app code.
- Frontend servers provide all functionalities and services to ensure all connected microservices and Contentstack have the expected infrastructure to operate smoothly.
- Content fetching requests from the web app are performed through the Content Delivery APIs.

### Conventional CMS

This can be any traditional CMS from where you want to migrate to Contentstack. It has a typical set up of a conventional CMS.
- A typical traditional CMS set up with databases, web servers, frontend UI, and templates for creating website pages.
- This is where you have your entire website and its content.
- One section of your website such as "blog" can be migrated to headless CMS at a time.

## CDN (Content Delivery Network) Layer

- A CDN is responsible for serving user requests through caches. You can use a CDN service, such as Fastly, to deliver content quickly to your clients.
- All user requests first hit the CDN. If it has the cache of the requested content, it delivers it to the client. Else, it asks the app to provide updated content.
- It also reduces the load on the server as the content is delivered through cache, instead of having to fetch content from your app every time.
- You can set up load balancers to filter out unwanted requests and manage network traffic and reverse proxy (for masking) between the CDN and the headless infrastructure.

## Next Steps

### More Architecture Diagrams
- [Simple website architecture](./simple-website-detailed-architecture.md)
- [Static website architecture](./static-website-detailed-architecture.md)
- [Dynamic website architecture](./dynamic-website-detailed-architecture.md)
- [Layered architecture for Contentstack-powered websites](./contentstack-powered-website-layered-architecture.md)
- [Cloud infrastructure diagram](./cloud-infrastructure-architecture-for-contentstack-powered-websites.md)
- [MACH System Architecture](./mach-architecture-diagram.md)
- [Simple Website Using DataSync](./simple-website-using-datasync.md)
- [Mobile and Smart Devices System Architecture](./mobile-and-smart-devices-system-architecture.md)

### Resources to Get Started
- [Quickstart in 5 minutes](../quickstart-in-5-mins.md)
- [Sample applications](/docs/developers/sample-apps)
- [How to start using Contentstack](../contentstack-basics/how-to-start-using-contentstack.md)

## Common questions

### What does “partially headless” mean in this diagram?
It shows how you can move one of your digital properties to headless, while the rest continue to use the conventional setup.

### How should migration be approached in this setup?
To ensure that you are able to move everything to a headless setup, without impacting the availability, you can migrate one section of your website at a time.

### What are the main layers/components described in the architecture?
We can divide the architecture into the following components: IaaS - Infrastructure as a Service, SaaS - Software as a Service, CDN - Content Delivery Network.

### What is the role of the CDN in this setup?
All user requests first hit the CDN. If it has the cache of the requested content, it delivers it to the client. Else, it asks the app to provide updated content.