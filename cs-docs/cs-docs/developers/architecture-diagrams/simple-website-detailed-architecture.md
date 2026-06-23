---
title: "[Architecture Diagrams] - Simple Website"
description: Detailed architecture diagram and explanation for a simple website using Contentstack with SaaS integrations, IaaS infrastructure, and a CDN layer.
url: https://www.contentstack.com/docs/headless-cms/simple-website-detailed-architecture
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
  - architects
version: current
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Simple Website

This page provides a detailed architecture diagram and explanation for setting up a simple (small to medium) website using Contentstack, including how SaaS integrations, IaaS infrastructure components, and a CDN layer work together. It is intended for developers and solution architects who are designing or evaluating a headless setup for a marketing or similar website.

## Simple Website

**(Download Diagram**: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/bltc62755c42fbc693d/5f3d0779752d292b6ca4e79d/Simple_Website_-_Detailed_Architecture.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9ed2f0ecd155b643/5f3d07b95f7d2953ae821a9e/Simple_Website_-_Detailed_Architecture.svg?disposition=download), and [JPEG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt722cadfc63b9fcbb/5f3d05c129a49b740ae68798/Simple_Website_-_Detailed_Architecture.jpeg?disposition=download), and [VSDX)](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/bltcd2a27415e2e24da/5f3d08463ebefc321efdd048/Simple_Website_-_Detailed_Architecture.vsdx?disposition=download)

A simple website represents an app or website that is small or medium in size, that uses only a few SaaS integrations to support some basic functions such as search, analytics, and marketing forms. One of the most common examples of a simple website is any organization’s marketing website.

Though simple, this architecture is flexible enough to scale quickly, and provides the ability to support dynamic content (personalization, etc.) or allow user interaction. This diagram is a zoomed-in view of the [layered diagram](./contentstack-powered-website-layered-architecture.md) that explains the architecture that you would need to set up a simple site. Let’s dig a little deeper into the architecture and understand the different components of the diagram.

## Diagram Overview

When a user requests for a page through a browser or any device, the request is served through the CDN cache, if available. If the cache is not available, the request is sent to your application via load balancers. Your app generates the requested page, after fetching content from Contentstack, and sends it to the user. Contentstack interacts with other SaaS apps to help provide the best possible experience to the client or to the content manager.

## Detailed Explanation

Let's look at the components of this architecture and how you can use them to set up your app or a website. To understand this diagram, let's break this down into the following components:
- IaaS - Infrastructure as a Service
- SaaS - Software as a Service
- CDN - Content Delivery Network

## SaaS (Software as a Service) Layer

Setting up a headless architecture enables you to adopt a microservices approach, where you can plug in and replace applications with ease. Your app can communicate and work with different SaaS applications through APIs. Let’s look at examples of some of the popular SaaS apps that most simple websites use and how they interact with the other components of your architecture.
- The content that your app will eventually deliver to your website visitors is created and managed within Contentstack. Contentstack communicates with other SaaS apps as well as your application, as required. We will look at the details of this communication below.
- Algolia is an example of a SaaS that can power search operations for your app. Its job is to interact with the website for indexing data and provide the requested content to the user every time a search operation is executed on the website.**Search initiation**: The client, from a browser or a mobile device, initiates the search request.
- **Data indexing**: For data indexing, you can set up a webhook in Contentstack to trigger an action when content is updated or published or when a code change takes place. The POST call in your webhook should have the logic to index the data in Algolia.
- Marketo Forms represents a SaaS provider that helps you create marketing forms (for product campaigns, etc.) for your app.It is connected with Contentstack (as a custom field extension) so that it can be added easily to the entries for form filling.
- When Marketo Form is connected with Contentstack as a custom field, you can easily select a form (from different available form options) and add it to your entries. When the page loads on the frontend, the form also loads through and embedded code.
- You can use Google Analytics to get analytics of your website usage.While you can fetch data directly from Google Analytics, it can also be connected with Contentstack as an extension (as a custom widget or dashboard widget). Using it as an extension allows you to show user behavior of each entry within the entry page, or show overall analytics on Contentstack’s stack dashboard.
- For smooth code deployment you can use GitHub as a third-party microservice.
 You can set up a developer workflow to ensure code changes in Contentstack are reflected correctly in GitHub through CI/CD (Continuous Integration/Continuous Deployment). This allows for smooth code deployments on GitHub when code changes are made in Contentstack.

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

Through this approach Client/ Browser can directly access Contentstack Delivery APIs.

## Pros and Cons:

**Pros: **
- Easy to setup these types of websites as you don’t require a specific backend service in your infrastructure to communicate with Contentstack APIs.
- This helps you deliver your content at a lightning speed through the POPs of your CDN.

**Cons: **
- The website setup is simple which makes it vulnerable to security risks.
- With a simple website, your API keys and delivery tokens are visible in your browser, which could be exploited by malicious attackers.

**Additional Resource**: To create and run a simple website refer to our detailed guide on how to [Build a Marketing App using Contenstack and React JS](/docs/developers/sample-apps/build-a-marketing-app-using-contentstack-and-react-js).

## Next Steps

### More Architecture Diagrams
- [Static website architecture](./static-website-detailed-architecture.md)
- [Dynamic website architecture](./dynamic-website-detailed-architecture.md)
- [Partially headless setup architecture](./partially-headless-setup-detailed-architecture.md)
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

### What is a “simple website” in this architecture?
A simple website represents an app or website that is small or medium in size, that uses only a few SaaS integrations to support some basic functions such as search, analytics, and marketing forms.

### What happens when the CDN does not have cached content?
If the cache is not available, the request is sent to your application via load balancers. Your app generates the requested page, after fetching content from Contentstack, and sends it to the user.

### Which layers are included in the diagram breakdown?
To understand this diagram, let's break this down into the following components: IaaS - Infrastructure as a Service, SaaS - Software as a Service, CDN - Content Delivery Network.

### What is one security concern mentioned for a simple website?
With a simple website, your API keys and delivery tokens are visible in your browser, which could be exploited by malicious attackers.