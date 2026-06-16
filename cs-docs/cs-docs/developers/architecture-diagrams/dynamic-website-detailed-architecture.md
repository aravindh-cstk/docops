---
title: "[Architecture Diagrams] - Dynamic Website"
description: Detailed architecture diagram and explanation for a dynamic website setup using Contentstack, including SaaS, IaaS, and CDN layers.
url: https://www.contentstack.com/docs/developers/architecture-diagrams/dynamic-website-detailed-architecture
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
  - architects
version: current
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Dynamic Website

This page provides a detailed architecture diagram and explanation for a Dynamic Website setup, including how requests flow through CDN, IaaS, and SaaS components and how Contentstack integrates with third-party services. It is intended for developers and solution architects designing or evaluating a scalable, microservices-friendly headless architecture for complex, dynamic web experiences.

(**Download Diagram**: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt96ee0ca0ac70639a/5f4e0d0c4c9f7223b8cd7f45/Dynamic_Website_-_Detailed_Arhitecture1.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0d6c0d3d067fe577/5f4e0cf295701623b75e560a/Dynamic_Website_-_Detailed_Arhitecture1.svg?disposition=download), [JPG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9421b607467c8ae4/5f4e0cdfb4ebcc25c4c57b1d/Dynamic_Website_-_Detailed_Arhitecture1.jpeg?disposition=download), and [VSDX)](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt5f55de0763901d2a/5f4e0d2a99431928ffc0e2ad/Dynamic_Website_-_Detailed_Arhitecture1.vsdx?disposition=download)

Complex websites would be apps and websites that interact and integrate with several third-party applications or services, serve dynamic content to users, and are capable of performing numerous complex operations such as personalization, video streaming, online shopping, and so on. Some popular examples of complex websites are e-commerce and real-time video sharing and streaming websites. In terms of scaling, this is the best setup to deploy as it gives you enough flexibility and agility to add more third-party services as required.

## Diagram Overview

When a user requests for a page through a browser or any device, the request is served through the CDN cache, if available. If the cache is not available, the request is sent to your application (via load balancers). Your app generates the requested page (after fetching content from Contentstack) and sends it to the user. Contentstack interacts with other SaaS apps to help provide the best possible experience to the client or to the content manager.

## Detailed Explanation

We can divide the architecture into the following components:
- IaaS - Infrastructure as a Service
- SaaS - Software as a Service
- CDN - Content Delivery Network

## SaaS (Software as a Service) Layer

Setting up a headless architecture enables you to adopt a microservices approach, where you can plug in and replace applications with ease. Your app can communicate and work with different SaaS applications through APIs. Let’s look at examples of some of the popular SaaS apps that most simple websites use and how they interact with the other components of your architecture.
- The content that your app will eventually deliver to your website visitors is created and managed within Contentstack. Contentstack communicates with other SaaS apps as well as your application, as required. We will look at the details of this communication below.
- A Single Sign-On (SSO) service, such as Okta, enables you and your team members to access company applications, such as Contentstack.You can integrate Okta with Contentstack easily to provide single sign-on to your CMS through Okta.
- When any user wants to access Contentstack (through credentials), the request is directed through Okta to Contentstack.
- Okta creates a secured channel and requests Contentstack to provide access to that particular user.
- Contentstack, after validating the user, sends a token to Okta. By using this token the user gets access to Contentstack.
- A SaaS service, such as commercetools, can be integrated with Contentstack as a custom field.

The commercetools custom field fetches product details and relevant product assets from Contentstack and displays them in the field itself.
- The custom field also fetches product's price details, cart and transaction information from the commercetools platform through APIs. This makes it possible for the client to see the product content and execute transactions on his browsers or other devices.
- Another SaaS service, such as Brightcove, can be integrated with Contentstack as a custom field to manage videos for your pages (entries) in Contentstack.

By using the Brightcove custom field, you can populate videos from the Brightcove video library in the entry of your content type.
- The user can then fetch the videos from the library and insert them into the field of their entry.
- To implement personalization in your website, you can integrate a service such as Dynamic Yield, with Contentstack as a dashboard widget.

Dynamic Yield fetches the content from Contentstack and performs different experiments on your content.
- The results of these experiments are pushed back to Contentstack which can be viewed on your Contentstack dashboard.
- This experiment data is then forwarded to other third party services via the internet gateway.
- Marketo Forms represents a SaaS provider that helps you create marketing forms (for product campaigns, etc.) for your app.

It is connected with Contentstack (as a custom field extension) so that it can be added easily to the entries for form filling.
- When Marketo Form is connected with Contentstack as a custom field, you can easily select a form (from different available form options) and add it to your entries. When the page loads on the frontend, the form also loads through and embedded code.
- You can use Google Analytics to get analytics of your website usage.

While you can fetch data directly from Google Analytics, it can also be connected with Contentstack as an extension (as a custom widget or dashboard widget).
- By using it as an extension, you can see user behavior of each entry within the entry page, or show overall analytics on Contentstack’s stack dashboard.
- You can integrate a search service such as Algolia with Contentstack for carrying out search operations on your Contentstack-powered website.

It helps with crawling the data (data indexing) to add the updated content in its databases.
- The user using a browser or mobile device initiates a search request. This request is accepted by Algolia and then it fetches the required results and displays them to the user.
- A translation SaaS service such as Memsource can be integrated with Contentstack to enable users to translate content into a language of their choice.

You can create locals in Contentstack and save the localized entries.
- Memsource, if integrated with Contentstack, gets notified of this through a webhook. It then fetches the content from Contentstack and performs content translation in the required language.
- Once the translation completes, it sends the translated content back to Contentstack which can be viewed within the entry in Contentstack.
- For Digital Asset Management (DAM), you can integrate a service, such as Bynder with Contentstack as a custom field.
- By using the Bynder custom field, you can populate assets from the Bynder image or asset library in the entry of your content type.
- The user can then fetch the assets from the library and insert them into the field of their entry.

## IaaS (Infrastructure as a Service) Layer

This layer is where your app infrastructure sits. It holds your application code, frontend server, load balancers, firewalls, and other important components. Some of the services will be offered by your cloud infrastructure provider (such as AWS, Azure, or Google Cloud), while you may need to set up the other parts.
- Set up an auto-scaling group that auto-scales on demand. This group would contain your frontend app cluster, load balancer and firewall.
- The load balancers help your app distribute traffic to different servers, generally front-end servers.
- Network filtering through firewalls allow only legitimate requests to enter your infrastructure.
- You can set up multiple instances of your frontend app (aka frontend app cluster), with each one containing the frontend server and your app code.
- Frontend servers provide all functionalities and services to ensure all connected microservices and Contentstack have the expected infrastructure to operate smoothly.
- When the client requests for any data, it is first served through the CDN. If it is not available in CDN, the request is passed on to the application servers, where the page is created and served to the client through the CDN. The app fetches content from Contentstack via Contentstack’s Content Delivery APIs.

## CDN (Content Delivery Network) Layer

- A CDN is responsible for serving user requests through caches. You can use a CDN service, such as Fastly, to deliver content quickly to your clients.
- All user requests first hit the CDN. If it has the cache of the requested content, it delivers it to the client. Else, it asks the app to provide updated content.
- It also reduces the load on the server as the content is delivered through cache, instead of having to fetch content from your app every time.
- You can set up load balancers to filter out unwanted requests and manage network traffic and reverse proxy (for masking) between the CDN and the headless infrastructure.

The Dynamic Website setup allows your Webserver/ Node or any other backend service in any framework to access Contentstack Delivery APIs.

### Pros and Cons:

**Pros: **
- With Dynamic Website setup, your API keys and delivery tokens are not exposed to the end users.
- Depending on your use case, you can implement caching on the application side.
- Complicated queries specific to your use case can be done in the application or your dedicated micro (service).
This will help you easily deliver content to the end user and even modify/ automate the content creation process.

**Cons:**
Dynamic websites require more development resources and infrastructure costs are higher.

**Additional Resource**: To create and run a simple website refer to our detailed guide on how to build different[ starter apps](/docs/developers/sample-apps#starter-apps).

## Next Steps

### More Architecture Diagrams

- [Static website architecture](/docs/developers/architecture-diagrams/static-website-detailed-architecture)
- [Simple website architecture](/docs/developers/architecture-diagrams/simple-website-detailed-architecture)
- [Partially headless setup architecture](/docs/developers/architecture-diagrams/partially-headless-setup-detailed-architecture)
- [Layered architecture for Contentstack-powered websites](/docs/developers/architecture-diagrams/contentstack-powered-website-layered-architecture)
- [Cloud infrastructure diagram](/docs/developers/architecture-diagrams/cloud-infrastructure-architecture-for-contentstack-powered-websites)
- [MACH System Architecture](/docs/developers/architecture-diagrams/mach-architecture-diagram)
- [Simple Website Using DataSync](/docs/developers/architecture-diagrams/simple-website-using-datasync)
- [Mobile and Smart Devices System Architecture](/docs/developers/architecture-diagrams/mobile-and-smart-devices-system-architecture)

### Resources to Get Started

- [Quickstart in 5 minutes](/docs/developers/quickstart-in-5-mins)
- [Sample applications](/docs/developers/sample-apps)
- [How to start using Contentstack](/docs/developers/contentstack-basics/how-to-start-using-contentstack)

## Common questions

### Where does caching happen in this Dynamic Website setup?
Caching happens at the CDN layer, where user requests are served through caches when available.

### What happens if the CDN cache is not available?
If the cache is not available, the request is sent to your application (via load balancers), and your app generates the requested page (after fetching content from Contentstack) and sends it to the user.

### What are the main layers in the architecture?
The architecture is divided into IaaS - Infrastructure as a Service, SaaS - Software as a Service, and CDN - Content Delivery Network.

### Why use a Dynamic Website setup?
With Dynamic Website setup, your API keys and delivery tokens are not exposed to the end users, and depending on your use case, you can implement caching on the application side.