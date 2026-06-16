---
title: "[Contentstack Launch] - Go-Live Guide"
description: Go-live preparation and routing, TLS, proxying, Cloudflare O2O, and checklist guidance for Contentstack Launch.
url: https://www.contentstack.com/docs/developers/launch/go-live-guide
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - devops
  - site-reliability-engineers
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Go-Live Guide

This page explains how to prepare for and execute a first production go-live on Contentstack Launch, including traffic routing options, TLS certificate considerations, proxy/CDN guidance (including Cloudflare O2O), and a practical go-live checklist. It is intended for developers and operations teams planning a cutover to Launch and should be used during go-live planning and pre-production readiness reviews.

## Go-Live Guide

An important milestone in hosting your website on Launch is your first go-live.

This document helps you prepare for a smooth, reliable, and trouble-free go-live experience on Contentstack Launch.

## Routing Traffic to Launch

Websites have different routing rules and configurations. Typically, hosting is done at the Apex Domain and/or Subdomains. Additionally, you may also want to serve traffic from a different website on a certain URL path. In this section, we’ll discuss different routing configurations.

### Apex Domain Routing

An apex domain—also known as a naked domain or zone apex—refers to the root of a domain that does not include any subdomains. For example, `example.com` is an apex domain, whereas `www.example.com` is not.

Launch **supports** serving content directly from apex domains. It also **supports** redirecting apex domain traffic to a subdomain, such as `www.example.com`, which is a widely adopted industry best practice. On visiting the website on the apex domain, they’re redirected to the subdomain.

Redirecting to a subdomain offers several benefits:

- **Simplified management** – Only one domain is responsible for serving website traffic, making configuration and maintenance easier.
- **Improved cookie handling** – Cookies set at the apex domain are inherited by subdomains, which can pose a security risk in multi-tenant environments.
- **SEO consistency** – Redirection helps avoid duplicate content issues when multiple domains serve the same content.

Launch supports redirection to any valid URL—not just to `www` subdomains.

**Additional Resource:** To configure apex domain redirection, refer to the [Apex Domain Redirection Guide](/docs/developers/launch/custom-domain#adding-apex-domains-with-redirects).

### Subdomain Routing

Subdomains are prefixes added to an apex domain to organize and structure a website—for example, `www.example.com` is a common subdomain used to serve website traffic.

Launch allows you to assign custom subdomains to your environments, with each subdomain mapped to a specific environment. You can also configure multiple subdomains as needed.

To add a subdomain:

- Create a custom domain within the environment settings.
- Point the subdomain to Launch using a CNAME record.

**Additional Resource:** For step-by-step instructions, refer to the [Custom Subdomain Guide](/docs/developers/launch/custom-domain#add-a-custom-subdomain).

### URL Path Routing

Launch supports proxying traffic on specific URL paths to internal or external sources. For example, you might want to serve traffic on `www.example.com/marketplace` from `marketplace.example.org`.

Supported proxy sources include:

- A different environment within the same Launch project
- A different Launch project
- An external domain or service

You can implement path-based routing using one of the following approaches:

- **Edge URL Rewrites**: Use a configuration file to define flexible, regex-based routing rules. Refer to the [Edge URL Rewrites](/docs/developers/launch/edge-url-rewrites) for details.
- **Edge Functions**: Write JavaScript logic for more advanced routing needs. Use this approach when configuration-based rewrites are not sufficient. Refer to the [Edge Functions](/docs/developers/launch/edge-functions) to get started.

Both methods are processed at the edge layer, which means the HTTP request never reaches the Launch origin. This ensures a high-performance, low-latency setup optimized for speed and scalability.

## TLS Certificates

**Transport Layer Security (TLS)** is a cryptographic protocol that secures communication between users and websites by encrypting transmitted data. Launch provides built-in support for TLS, ensuring privacy, integrity, and data protection for all hosted content.

### Universal Certificates

Universal certificates are TLS certificates automatically provisioned and renewed by Launch. They secure both apex domains and subdomains without requiring manual configuration. These certificates simplify deployment and maintenance while ensuring encrypted communication across all environments.

Currently, Launch supports the following two TLS versions:

- [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246)
- [TLS 1.3](https://datatracker.ietf.org/doc/html/rfc8446)

### Custom Certificates

Launch allows you to use your own certificates instead of the default Universal Certificates. Adding a custom certificate requires a **manual request** to the Launch support team, along with the necessary certificate and private key files. However, **we recommend** leveraging Universal Certificates, as they eliminate the need for manual effort and ongoing maintenance.

### Pre-Provisioning Certificates Before Go-Live

Pre-Provisioned Certificates are TLS certificates generated and set up in advance to ensure a seamless transition between hosting platforms. When switching hosting providers, TLS certificates are reissued. If not handled beforehand, this process can cause delays, security warnings, or even downtime.

**Example Scenario:** If `www.example.com` is currently hosted on another platform with an active TLS certificate, switching to Launch will trigger issuance of a new certificate. If not handled in advance, visitors may encounter security warnings or temporary access issues while the new certificate is being validated.

To ensure a seamless cutover:

- **Create a custom domain** in Launch.
- **Generate the TXT records** required for domain validation directly through the Launch UI. For detailed steps, see [Adding apex domains with redirects](/docs/developers/launch/custom-domain#adding-apex-domains-with-redirects).
- **Add the TXT records** to your DNS settings to verify domain ownership.
- Once the certificate is issued and marked active, **update your DNS records** to point to Launch’s CDN.

This approach ensures your certificate is active and validated before user traffic is directed to Launch, preventing disruptions and maintaining a secure user experience.

## Proxying Traffic to Launch

Using an external proxy—such as a CDN or Application Delivery Controller (ADC)—in front of Launch’s built-in CDN is **not recommended**. While it may seem beneficial, it often introduces unnecessary overhead and can negatively impact performance.

Launch already includes robust features such as DNS management, caching, DDoS protection, and a Web Application Firewall (WAF). Adding another proxy or CDN layer typically results in redundancy without meaningful gain.

**Why External Proxies Are Not Recommended:**

- **Redundant CDN and Increased Latency:** Launch handles DNS, caching, and security natively. Layering another CDN can slow down content delivery rather than improve it.
- **Cache Management and Manual Configuration:** Launch automatically purges cache on deployment. External CDNs often require manual cache purging and additional configuration, increasing maintenance complexity.
- **Security Limitations:** If traffic is routed through a proxy, Launch’s built-in DDoS protection and firewall rules are bypassed—shifting the security responsibility entirely to the external service.

**We do not recommend** using a proxy, but **if you choose to use a proxy**, proceed only if you're comfortable with the tradeoffs in performance, security, and maintenance. If you decide to implement a proxy, ensure the following:

- **Security:** The proxy must handle DDoS protection and firewall configurations, as these features won’t be available for you from Launch with a proxy.
- **Caching:** Caching must be managed by the proxy. For example, you’ll need to purge cache manually on every deployment in Launch. A recommended alternative is to **turn off caching entirely** for your CDN, so that it can be managed by Launch.
- **Host Header Forwarding:** The proxy must correctly forward the `Host` header to Launch to prevent request failures and ensure proper routing.

**Note:** If you use Cloudflare as a CDN layer on top of the Launch CDN, refer to the next section for configuration details.

## Cloudflare Orange-to-Orange (O2O)

Cloudflare Orange-to-Orange (O2O) is a routing setup where traffic flows between two Cloudflare-managed zones, one controlled by you and the other by Launch.

Since Launch uses Cloudflare as its CDN, a specific configuration is required to ensure proper request routing. Without this, Cloudflare may fail to resolve the correct routing path between your domain and Launch.

**Steps to Set Up O2O:**

- **Create a CNAME Record**  
  In your Cloudflare-managed DNS, add a CNAME record for your custom domain that points to the CNAME provided by Launch.
- **Enable Proxying**  
  Ensure the CNAME record is proxied in Cloudflare (i.e., the orange cloud is enabled in your DNS settings).
- **Request O2O Enablement**  
  Contact your Cloudflare account team and request that **Orange-to-Orange routing** be enabled. This step is necessary to allow traffic to flow properly between the two Cloudflare zones—your domain and Launch’s infrastructure.

## Go-Live Checklist

The Go-Live Checklist helps ensure your web application is fully prepared for a smooth, secure, and reliable go-live on **Contentstack Launch**. Review each area below to avoid common pitfalls and ensure a successful transition to production.

### Test Lower Environments

Before going live, thoroughly test your application in all configured environments—**development**, **staging**, and **pre-production**. This helps identify and resolve any issues early, ensuring that the production environment is stable and ready for user traffic.

### Security

- Implement a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to control the sources of scripts, styles, and images, reducing potential vulnerabilities.
- Utilize [Role-Based Access Control (RBAC)](/docs/developers/launch/users) in Launch to manage team access effectively.
- Regularly audit and update user access to ensure only authorized users have the appropriate roles.
- Implement IP-based access controls (Allow and Restrict) to manage access to trusted networks, block suspicious or malicious IPs, protect internal environments, and support compliance with regulatory standards (see: [IP Allow Example](https://github.com/contentstack-launch-examples/launch-edge-ip-allowlist-example), [IP Restrict Example](https://github.com/contentstack-launch-examples/launch-edge-ip-restrict-example)).

### Monitoring

- Set up health checks for critical endpoints to monitor availability.
- Configure alerts for system failures or anomalies.
- Continuously monitor all external dependencies, such as APIs, databases, and third-party services.
- Use the [Log Target](/docs/developers/launch/log-targets) feature to forward logs to a monitoring service, enabling real-time tracking and alerting based on error logs.

### Performance Optimization

There are several ways to optimize your site's performance while fully leveraging Launch's capabilities:

- **Caching Strategy**: Configure caching headers and cache-control rules to reduce origin requests and improve load times.
- **Optimize Images**: Use Contentstack’s [Image Delivery API](/docs/developers/apis/image-delivery-api) to serve optimized image formats for faster loading.
- **Improve Script & Font Loading**: Defer or asynchronously load non-critical scripts. Serve fonts locally to reduce external requests and enhance privacy.
- **Configure Launch Edge Features**: Set up and test [Redirects](/docs/developers/launch/edge-url-redirects), [Rewrites](/docs/developers/launch/edge-url-rewrites), or [Edge functions](/docs/developers/launch/edge-functions) to ensure smooth operation.
- **Enable CDN Cache Revalidation**: Ensure that [cache revalidation in Launch](/docs/developers/launch/revalidate-cdn-cache) is enabled so outdated content is not served.
- **Perform Load Test**: [Load testing](/docs/developers/launch/load-testing) is essential to assess your application's performance, scalability, and reliability under expected traffic conditions. By simulating high traffic, it helps identify potential bottlenecks and ensures readiness for real-world scenarios.
- **Search Engine Optimization**: After setting up a custom domain, the default `*.contentstackapps.com` domain remains accessible. To prevent duplicate content issues and ensure the default domain is not indexed by search engines, follow the [Blocking Default Launch Domains From Google Search](/docs/developers/launch/blocking-default-launch-domains-from-google-search) guide.

### Plans and Entitlements

- Ensure your Launch plan and resource limits align with your project requirements to avoid service interruptions.
- Check the Product Analytics section on Contentstack to review your usage and limits. For more details, refer to the [Product Analytics](/docs/developers/organization/product-analytics) guide.
- Contact [support](mailto:support@contentstack.com) if any limits appear incorrect.

### Cutover With Online Support

Contentstack Launch offers real-time go-live support to ensure a smooth transition. Our team can join a live session to assist with deployment, troubleshooting, or last-minute questions.

To schedule your go-live support call, contact us at least two weeks in advance via [support](mailto:support@contentstack.com) or the in-app chat.

## Common questions

**Q: Does Launch support apex domains and redirects to subdomains?**  
A: Yes. Launch **supports** serving content directly from apex domains and **supports** redirecting apex domain traffic to a subdomain, such as `www.example.com`.

**Q: Can I route only a specific URL path to another source?**  
A: Yes. Launch supports proxying traffic on specific URL paths to internal or external sources using **Edge URL Rewrites** or **Edge Functions**.

**Q: Should I put another CDN or proxy in front of Launch?**  
A: Using an external proxy—such as a CDN or Application Delivery Controller (ADC)—in front of Launch’s built-in CDN is **not recommended** due to redundancy, latency, cache management overhead, and security limitations.

**Q: What is required for Cloudflare Orange-to-Orange (O2O) with Launch?**  
A: Create a proxied CNAME record in Cloudflare pointing to the CNAME provided by Launch, and contact your Cloudflare account team to request **Orange-to-Orange routing** be enabled.

<!-- filename: contentstack-launch-go-live-guide.md -->