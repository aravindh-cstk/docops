---
title: "[How-to Guides and Knowledgebase articles] - Pass Contentstack Webhooks through Firewalls"
description: Guidance and best practices for allowing Contentstack webhook requests to pass through firewalls, including reverse proxies, IP allowlisting, simulation, and polling alternatives.
url: https://www.contentstack.com/docs/developers/how-to-guides/pass-contentstack-webhooks-through-firewalls
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Pass Contentstack Webhooks through Firewalls

This page explains how Contentstack webhooks interact with firewalls and outlines options for ensuring webhook requests can reach systems that are not publicly accessible. It is intended for developers and administrators troubleshooting webhook delivery in restricted network environments or local/VM development setups.

## Pass Contentstack Webhooks through Firewalls

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to configure and manage webhook integrations in Contentstack, refer to the [Webhooks](/docs/developers/webhooks) documentation.

A firewall is an essential element in network security systems. It secures the organization's internal network and monitors the flow of inbound and outbound traffic based on predetermined rules and protocols.

At times, firewalls tend to block legitimate inbound requests that come in from an unknown source. This is because it is programmed to block all such requests that do not have a genuine source as determined in its protocol.

This might affect system communication, especially if you're using third-party apps that communicate with your internal apps. Contentstack Webhooks communicate with other apps to inform them about some event that occurred in Contentstack. Such requests or triggers can also get blocked by firewalls.

Therefore, in this guide, we will discuss some options that you can use to let the firewalls accept legitimate requests.

**Note:** To facilitate IP netblocks for receiving [webhook ](/docs/developers/set-up-webhooks/secure-your-webhooks#ip-whitelisting-with-contentstack)callbacks from Contentstack, kindly reach out to administrators authorized by Contentstack. They will provide the necessary guidance in configuring the relevant settings.

## Webhooks in Contentstack

[Webhooks](/docs/developers/set-up-webhooks/about-webhooks) are URLs invoked by Contentstack to signal events or post data to your third-party application whenever an event occurs in your stack. By sending real-time information, webhooks keep your application in sync with your Contentstack account.

Any firewall mustn't block Webhook notifications; otherwise, your app might not receive timely notifications from taking the next course of action.

**Additional Resource**: [Contentstack's Webhook Integration](/docs/developers/set-up-webhooks/webhook-integrations) guide will help you integrate any third-party application to create custom solutions.

## Test Webhooks Through Firewalls

Testing and using webhooks is a smooth procedure as long as the connectivity is end-to-end. If the user is developing locally or within a virtual machine that is not publicly accessible over the internet, webhooks get tricky. Development systems don't have public DNS entry which makes it difficult to access them online.

In such cases, the webhooks are not active as the local URLs are publicly not accessible by the app sending the webhooks. Real-time development and request monitoring are not possible in these scenarios.

The intranet or VM system is often protected by the firewall around it, which generally should not use IP addresses. Thus, the webhook cannot get through the firewall that blocks the required ports.

Now, let's understand how Contentstack invokes webhooks on development systems.

## Best Practices for Contentstack to Pass Requests Through Firewalls

Here are some of the best practices or the recommendations for letting Contentstack pass requests to your app through the firewall.
- [Use third-party tools to reverse proxy webhook calls](#use-third-party-tools-to-reverse-proxy-webhook-calls)
- [Open Contentstack provided IP addresses](#open-contentstack-provided-ip-addresses)
- [Simulate the webhooks calls using API development platforms](#simulate-the-webhooks-calls-using-api-development-platforms)
- [Use polling techniques instead of webhooks](#use-polling-techniques-instead-of-webhooks)

Let's understand each of these in detail.

## Use Third-party Tools to Reverse Proxy Webhook Calls

Using a third-party tool to invoke webhooks is the most common and preferred method used by developers to expose the local server behind firewalls.

Third-party tools for Windows, Linux, and Mac OS, including [ngrok](https://ngrok.com/) and [smee](https://smee.io/), create secure tunnels to access local servers through publicly available endpoints on the internet. ngrok and smee are reverse proxies that make your test system DNS addressable on the internet by penetrating the firewall.

**Process overview**:
- The Contentstack cloud has two basic environments, i.e., the content management repository to manage and the content delivery repository to deliver the content.
- Whenever we publish content on Contentstack, we're migrating data or updating a flag in the content delivery repository that this version of the entry is updated/ deleted/ live.
- While we publish, if we've configured webhooks, then they can call external reverse proxies like ngrok.
- The CMS and visitors can access our ngrok URL that is publicly available on the internet. We have the ngrok process running on the workstation (local server) inside the firewall, polling ngrok.io to get requests and forward requests on our local host's secure and unsecured ports.

**Additional Resource**: For more detailed information, check ngrok's [documentation](https://ngrok.com/docs).

Customers who prefer to avoid reverse proxies can use any of the following alternatives.

## Open Contentstack provided IP Addresses

Developers can open the IP Address of the firewall, which Contentstack provides. Then firewall is open to receive events from the Contentstack provided IP addresses

This practice works well for developers who can administer their firewall and configure DNS to invoke webhooks on their local systems.

## Simulate the Webhooks Calls Using API Development Platforms

By simulating the webhooks calls, we can quickly check if the webhook is functioning internally. Here, instead of having Contentstack invoke the webhooks, we can copy the REST API call of the webhooks and post it to apps like [Postman](https://www.postman.com/) and check the functionality of the webhooks.

Though we get the status of webhooks functionality, this practice invalidates integration testing as we do not use the complete system to test.

## Use Polling Techniques Instead of Webhooks

The** Polling** technique is an architectural approach that we can use instead of using webhooks. Most CMS products, including Contentstack, use Sync APIs to check for updates periodically. This is done by setting timestamps to monitor the content at frequent intervals.

While this is an excellent solution for some applications, it does not fit some specific use cases.

## Common questions

### Is this page still maintained?
No. **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported.

### What is the recommended approach for local development behind a firewall?
Using third-party reverse proxy tools such as [ngrok](https://ngrok.com/) or [smee](https://smee.io/) to expose a local server through a publicly available endpoint.

### Can I allowlist Contentstack IPs instead of using a reverse proxy?
Yes. You can open Contentstack provided IP addresses on your firewall; for IP netblocks guidance, reach out to administrators authorized by Contentstack.

### What is an alternative to webhooks if inbound requests are blocked?
You can use polling techniques (for example, Sync APIs) to check for updates periodically.