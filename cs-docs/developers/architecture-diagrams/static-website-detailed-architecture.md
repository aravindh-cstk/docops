---
title: "[Architecture Diagrams] - Static Website"
description: Detailed architecture diagram and explanation for building a static website with Contentstack and related SaaS and deployment services.
url: https://www.contentstack.com/docs/headless-cms/static-website-detailed-architecture
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Static Website

This page provides a detailed architecture diagram and explanation for building a static website using Contentstack, including how SaaS services and build/deploy tooling interact. It is intended for developers and architects planning or implementing a static site setup and deciding how content updates and code changes flow through deployment.

## Static Website

**(Download Diagram**: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blte89754231a381c41/5f3d077980360a1fd38bc7df/Static_Website_-_Detailed_Architecture_.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt39b5472b4d346658/5f3d07b8abab4a23d938ad54/Static_Website_-_Detailed_Architecture_.svg?disposition=download), and [JPEG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7a8bd01e775813a3/5f3d05be6e9660261c55bada/Static_Website_-_Detailed_Architecture_.jpeg?disposition=download), and [VSDX)](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt45b2de6adabac67b/5f3d084962013530f82eb723/Static_Website_-_Detailed_Architecture_.vsdx?disposition=download)

Static websites are fast, easy to build, and secure. Typical use cases include blog, documentation or informational websites, where the focus is on serving static content and not on content personalization or user interaction. With Contentstack as your CMS, you can create static websites fast, and update the content from Contentstack.

## Diagram Overview

When a page is requested, your app generates the page (after fetching content from Contentstack) and sends it to the user after it is built and deployed through a deployment service (such as Netlify). Contentstack interacts with other SaaS apps to help provide the best possible experience to the client or to the content manager.

## Detailed Explanation

Let's look at the components of this architecture and how you can use them to set up a static website.

To understand this diagram, let's break this down into the following components:
- SaaS (Software as a Service) Layer
- Build and Deploy

## SaaS (Software as a Service) Layer

Setting up a headless architecture enables you to adopt a microservices approach, where you can plug in and replace applications with ease. Your app can communicate and work with different SaaS applications through APIs. Let’s look at examples of some of the popular SaaS apps that most static websites use and how they interact with the other components of your architecture.
- **Contentstack**: The content that your app will eventually deliver to your website visitors is created and managed within Contentstack.You can fetch the content from Contentstack and render it on your frontend through Content Delivery APIs. Whenever any content gets updated, you can set up a webhook to trigger a notification. Netlify fetches the updated content and deploys it.
- Contentstack communicates with other SaaS apps as well as your application, as required.
- **Commercetools**: A SaaS service, such as commercetools, can be integrated with Contentstack as a custom field.The commercetools custom field fetches product details and relevant product assets from Contentstack and displays them in the field itself.
- The custom field also fetches product's price details, cart and transaction information from the commercetools platform through APIs. This makes it possible for the client to see the product content and execute transactions on his browsers or other devices.
- **GitHub**: For smooth code deployment you can use GitHub as a third-party microservice.

You can set up a developer workflow to ensure code changes in Contentstack are reflected correctly in GitHub through CI/CD (Continuous Integration/Continuous Deployment). This allows for smooth code deployments on GitHub when code changes are made in Contentstack by triggering a webhook.
- Netlify, using its APIs, fetches the code that we have uploaded on GitHub, creates a production build, and deploys the changes.

## Production Build and Deployment

A deployment service like Netlify helps you build, deploy and host your frontend. While you can use any deployment platform here, the overall architecture and communication will remain the same.
- Users request for a page through a browser or any device. The communication happens between the client's device and Netlify. Netlify provides a response to the client by fetching updated content from Contentstack.
- When any content is updated in Contentstack a webhook is triggered. This notifies Netlify and it creates a production build and deploys the changes on the frontend.
- Similarly, when any code push is performed on GitHub, a webhook is triggered again. Subsequently, Netlify fetches the code, builds and deploys it immediately.

### Pros and Cons:

**Pros:**
- This approach is easy to implement for simpler websites.
- Static websites don't make any requests to Contenstack APIs during runtime, which also speeds up content delivery.

**Cons:**
- Development **can **get complicated on larger/ dynamic websites.
- Incremental builds on larger sites not hosted in Gatsby Cloud can be a blocker for some customers.

**Additional Resource**: To create and run a simple website refer to our detailed guide on how to [Build a Static Website using Contentstack and Gatsby](../sample-apps/get-started-with-gatsby-and-contentstack.md).

## Next Steps

### More Architecture Diagrams
- [Simple website architecture](./simple-website-detailed-architecture.md)
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
- [Static site generators](/docs/developers#static-site-generators)

## Common questions

**How do content updates get published to the static site?**  
When any content is updated in Contentstack a webhook is triggered. This notifies Netlify and it creates a production build and deploys the changes on the frontend.

**Do static websites call Contentstack APIs at runtime in this approach?**  
Static websites don't make any requests to Contenstack APIs during runtime, which also speeds up content delivery.

**What triggers a new deployment besides content changes?**  
When any code push is performed on GitHub, a webhook is triggered again. Subsequently, Netlify fetches the code, builds and deploys it immediately.

**Where can I find related architecture diagrams?**  
See the "More Architecture Diagrams" section under "Next Steps" for links to additional diagrams.