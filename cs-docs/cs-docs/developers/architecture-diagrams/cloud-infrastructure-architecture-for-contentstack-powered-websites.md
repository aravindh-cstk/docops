---
title: "[Architecture Diagrams] - Cloud Infrastructure"
description: Cloud infrastructure architecture diagram and explanation for Contentstack-powered websites using Amazon Web Services (AWS).
url: https://www.contentstack.com/docs/developers/architecture-diagrams/cloud-infrastructure-architecture-for-contentstack-powered-websites
product: Contentstack
doc_type: architecture-diagram
audience:
  - developers
  - architects
  - devops
version: unknown
last_updated: 2026-03-26
---

# [Architecture Diagrams] - Cloud Infrastructure

This page provides a cloud infrastructure architecture diagram and detailed explanation for Contentstack-powered websites using AWS. It is intended for developers, architects, and DevOps teams who need to understand the components involved and how traffic, deployments, and third-party integrations flow through the system.

## Cloud Infrastructure

This diagram outlines the architecture details of a [simple](/docs/developers/architecture-diagrams/simple-website-detailed-architecture) or [dynamic](/docs/developers/architecture-diagrams/dynamic-website-detailed-architecture) website that uses Amazon Web Services (AWS) as its cloud infrastructure provider. It explains the various components of your infrastructure and highlights how the client interacts with your app, and how your app communicates with the third-party services.

(**Download Diagram**: [PDF](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt3abe5e13b572f2f3/5f3d0778cc17142ec0f0c235/Cloud_Infrastructure_Diagram.pdf?disposition=download), [SVG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt49fd361e86581722/5f3d07b8cc17142ec0f0c245/Cloud_Infrastructure_Diagram.svg?disposition=download), [JPG](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt024eb4485ba5b61f/5f3d05c36e9660261c55bade/Cloud_Infrastructure_Diagram.jpeg?disposition=download), and [VSDX)](https://assets.contentstack.io/v3/assets/blt23180bf2502c7444/blt0906bcccc8dcb488/5f3d084962013530f82eb71f/Cloud_Infrastructure_Diagram.vsdx?disposition=download)

Let’s dig a little deeper into the various components of the diagram and understand how the set up works as a whole to provide a seamless experience to the user.

## Cloud Infrastructure

This is where microservices, firewalls, front-end servers, and other services run. To understand it better, let's further break this infrastructure down into the following components:
- **Deployment Pipeline**: Developers who want to get their code deployed use the dedicated development pipeline for efficient code management. All code changes are pushed to this pipeline where they wait until they are picked up by respected node applications in the private subnet.
- **

Isolated Cloud**: This portion of the cloud infrastructure is not exposed to the internet. It's the internal infrastructure of Contentstack where all services run and communicate with each other. Let's look at its internal components:**

Availability Zones**: Within the isolated cloud, there are several availability zones that are operational to ensure the continuous availability of services. Each **Availability Zone** (**AZ**) can have multiple private subnets. It is also an auto-scaling group to scale up the infrastructure on demand.
- **

Microservices**: Each private subnet within the AZ has microservices that are internal to Contentstack. They carry out the necessary operations as and when requested.
- **

Load Balancer**: The public subnet or the "demilitarized zone (DMZ)" has load balancers that help distribute the network traffic into the private subnet. It allows limited access to Contentstack's private subnets from the Internet to ensure on-premises services are secured.
- **

Web Application Firewall**: this is the first line of defense (application firewall) that helps in monitoring, filtering, and blocking data packets as they travel between the Internet and Contentstack's private cloud.
- **Internet Gateway**: To provide access to all network traffic that enters the private cloud you can set up an Internet Gateway. The network traffic further gets filtered out by the firewall and only allowed requests are permitted to enter the network.
- **

Managed Services**: To simplify your infrastructure management, you can set up different services and tools, known as "managed services." In Contentstack, webhook management and CDN purge are handled through managed services as they require a different mechanism for handling operations related to these services.**

Webhook**: Webhooks are used to trigger a notification when content is updated in Contentstack. By programming it to our requirements, you can use webhooks to notify microservices within the Contentstack app or other third-party services to perform the required operations.
- **

Application Gateway**: You can set up an application gateway to manage traffic between your Contentstack app and the infrastructure.
- **

CDN Purge**: This is where the caching mechanism runs to help purge the CDN cache when the request for caching is received.

Let’s dig a little deeper into the various components of the diagram and understand how the set up works as a whole to provide a seamless experience to the user.

## CDN (Content Delivery Network) Layer
- A CDN is responsible for serving user requests through caches. You can use a CDN service, such as Fastly, to deliver content quickly to your clients.
- All user requests first hit the CDN. If it has the cache of the requested content, it delivers it to the client. Else, it asks the app to provide updated content.
- It also reduces the load on the server as the content is delivered through cache, instead of having to fetch content from your app every time.
- You can set up load balancers to filter out unwanted requests and manage network traffic and reverse proxy (for masking) between the CDN and the headless infrastructure.

## Working of the Cloud Infrastructure Set up

To understand how the system or architecture functions, let's break its working into three sections:
- Developer deploying the code
- Regular user consuming the content
- Contentstack app accessing the infrastructure

### Developer Deploying the Code

Whenever there's a change in the code, this is how it is managed:
- The developer writes the code and pushes it into the development pipeline.
- Referring to the diagram, the development pipeline is connected to the node worker (which can be an Express.js app or an app built using Contentstack Datasync) in the private subnet. The node worker then picks up the code and gets it deployed.
- The developers at times want to clear the cache in the CDN. The development pipeline is connected to CDN Purge in Managed Services. So a purge webhook is triggered to initiate purging of the cache.
- Once the changes are pushed, the CDN Purge mechanism performs the request and updates the CDN (Fastly or CloudFront).

### Regular User Consuming the Content

When a user requests for a page from the frontend, the chain of events that take place are listed below:
- The user issues a request for a page. If it is available in the CDN cache, it is delivered to the user immediately.
- If the requested page is not in the cache, the CDN forwards the request to the origin server.
- This request then hits the firewall and only if the WAF confirms that it's a legitimate request from the CDN, it passes it on to the load balancer.
- The load balancer identifies a healthy (working condition) and available node that can handle this request. After identifying the node, it forwards that request to it.
- That particular node then takes the required actions and sends back the requested page.
- The page is then fetched through the origin server to the user and the CDN gets purged and the delivered page gets cached in the CDN.

### Contentstack App Accessing the Infrastructure

While working with the Contentstack app and when changes in the content are made, this is how the events occur:
- When any updates are made or when any content is published in Contentstack, a mechanism triggers a webhook.
- The webhook then makes a call at a particular endpoint in the infrastructure, that is the Application Gateway, and informs that some event has occurred in Contentstack.
- The Application Gateway then transfers that call and informs the application that is running in the private subnet that something is published in Contentstack.
- The microservices in the private subnet through a set mechanism fetch or pull the data from the Contentstack.

## Managing Third Party Services

By integrating other third-party applications with Contentstack, you can extend the functionality of your CMS. You can connect different third-party apps with Contentstack as shown in the above architecture.

Below we have discussed some of the popular third-party apps and their interactions with Contentstack to understand the flow.
- **Marketo Forms**: Marketo Forms helps you create marketing forms, let's say for a product campaign.

You can connect it with Contentstack as a custom field in your content type. This enables entries to display the list of available forms from which the user can select anyone of his choice.
- This form becomes visible to the user on the frontend. When the page loads on the frontend, the form also loads through an embedded code.
- When the user fills the data in the form through a browser, the data gets added to the Marketo Form.
- It becomes easier to identify forms that are attached to an entry of the page by integrating Marketo Forms with Contentstack as a custom field.
- **Okta**: Okta provides Single Sign-On (SSO) services enabling you and your team members to access company applications, such as Contentstack.

You can integrate Okta with Contentstack easily to provide single sign-on to your CMS through Okta.
- When any user wants to access Contentstack (through credentials), the request is directed through Okta to Contentstack.
- Okta requests Contentstack to provide access to that particular user.
- Contentstack, after validating the user, sends a token to Okta using which the user gets access to Contentstack.
- **commercetools**: commercetools can be integrated with Contentstack as a custom field.

The interaction happens in such a way that Contentstack manages the description and images for each product.
- You can add other product details such as price and product IDs in commercetools.
- The user can then use this commercetools custom field to fetch product details from Contentstack, and pricing details and transactions can be handled through commercetools.
- **Brightcove**: Brightcove can be integrated with Contentstack as a custom field to manage videos for your pages in Contentstack.

By using the Brightcove custom field, you can populate videos from the Brightcove video library in the entry of your content type.
- The user can then fetch the videos from the library and insert them into the field of their entry.
- **Memsource**: Memsource can be integrated with Contentstack to enable users to translate content into a language of their choice.

You can create locals in Contentstack and save the localized entries.
- Memsource, if integrated with Contentstack, gets notified of this through a webhook. It then fetches the content from Contentstack and performs content translation in the required language.
- Once the translation completes, it sends the translated content back to Contentstack which can be viewed within the entry in Contentstack.
- **Dynamic Yield**: You can implement personalization by integrating a service such as Dynamic Yield with Contentstack as a dashboard extension.

Dynamic Yield fetches the content from Contentstack and performs different experiments on your content.
- The results of these experiments are pushed back to Contentstack which can be viewed on your Contentstack dashboard.
- This experiment data is then forwarded to other third party services via the internet gateway.
- **Bynder**: For Digital Asset Management, you can integrate a service, such as Bynder with Contentstack as a custom field.

 By using the Bynder custom field, you can populate assets from the Bynder image or asset library in the entry of your content type.
- The user can then fetch the assets from the library and insert them into the field of their entry.
- **Algolia**: You can integrate a search service such as Algolia with Contentstack for carrying out search operations on your Contentstack-powered website.

It helps with crawling the data (data indexing) to add the updated content in its databases.
- The user using a browser or mobile device initiates a search request. This request is accepted by Algolia and then it fetches the required results and displays them to the user.
- **Google Analytics**: You can integrate Google Analytics with Contentstack as a Dashboard Extension or as a Custom Sidebar Extension.

Google Analytics tracks user behavior or actions on your website. It collects useful data for your pages and provides the experiment data on your dashboard or on the entry page in Contentstack.
- If you have integrated it as a Custom Sidebar Extension, it shows the analytics of the page on the respective entry page in Contentstack.
- Similarly, if it is integrated as a Dashboard Extension, you can see the analytics on your Stack Dashboard.

## Next Steps

### More Architecture Diagrams
- [Simple website architecture](/docs/developers/architecture-diagrams/simple-website-detailed-architecture)
- [Static website architecture](/docs/developers/architecture-diagrams/static-website-detailed-architecture)
- [Dynamic website architecture](/docs/developers/architecture-diagrams/dynamic-website-detailed-architecture)
- [Partially headless setup architecture](/docs/developers/architecture-diagrams/partially-headless-setup-detailed-architecture)
- [Layered architecture for Contentstack-powered websites](/docs/developers/architecture-diagrams/contentstack-powered-website-layered-architecture)
- [MACH System Architecture](/docs/developers/architecture-diagrams/mach-architecture-diagram)
- [Simple Website Using DataSync](/docs/developers/architecture-diagrams/simple-website-using-datasync)
- [Mobile and Smart Devices System Architecture](/docs/developers/architecture-diagrams/mobile-and-smart-devices-system-architecture)

### Resources to Get Started
- [Quickstart in 5 minutes](/docs/developers/quickstart-in-5-mins)
- [Sample applications](/docs/developers/sample-apps)
- [How to start using Contentstack](/docs/developers/contentstack-basics/how-to-start-using-contentstack)

## Common questions

### Where can I download the Cloud Infrastructure diagram?
Use the **Download Diagram** links provided for PDF, SVG, JPG, and VSDX formats.

### What happens when a requested page is not in the CDN cache?
The CDN forwards the request to the origin server, where it passes through the firewall and load balancer to a node that handles the request and returns the page, which then gets cached.

### How does Contentstack notify the infrastructure about content changes?
When content is updated or published, a mechanism triggers a webhook that calls the Application Gateway endpoint and informs the application running in the private subnet.

### Which third-party services are mentioned as common integrations?
The page lists Marketo Forms, Okta, commercetools, Brightcove, Memsource, Dynamic Yield, Bynder, Algolia, and Google Analytics.

