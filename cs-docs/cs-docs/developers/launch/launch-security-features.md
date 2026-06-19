---
title: "[Contentstack Launch] - Security Features in Contentstack Launch"
description: Security features and practices in Contentstack Launch, including DDoS protection, access control, encryption, and shared responsibility model.
url: https://www.contentstack.com/docs/launch/launch-security-features
product: Contentstack Launch
doc_type: security-guide
audience:
  - developers
  - security-engineers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Security Features in Contentstack Launch

This page outlines the security features and practices available in Contentstack Launch and explains the shared responsibility model for platform-managed security versus customer-managed application code and configuration. It is intended for developers and security teams deploying or operating applications on Contentstack Launch, especially when planning security controls, incident visibility, and environment protections.

## Security Features in Contentstack Launch

This document outlines the security features and practices available in [Contentstack Launch](https://app.contentstack.com/#!/launch), along with the shared responsibility model for applications deployed on the platform. It explains how Launch helps secure applications at the platform level and what responsibilities apply to customer-managed application code and configurations.

## Security Architecture

Contentstack Launch follows a **layered security model** designed to protect applications at multiple levels, including:
- CDN (Edge) and request-handling layer
- Contentstack platform layer alongside the Launch runtime layer
- User Application Layer

This approach ensures application availability, performance, and protection against common security threats.

## Distributed Denial of Service (DDoS) Protection

### What is a DDoS Attack?

A [Distributed Denial of Service (DDoS)](https://developer.mozilla.org/en-US/docs/Glossary/Distributed_Denial_of_Service) attack is a type of malicious activity that attempts to make an application or service unavailable by overwhelming it with traffic from multiple sources. The objective of a DDoS attack is not to gain unauthorized access, but to **exhaust system resources** so legitimate users are unable to access the application.

Unlike a single-source denial-of-service (DoS) attack, DDoS attacks are **distributed**, meaning the traffic originates from many systems simultaneously. These systems are often compromised devices that are coordinated to send requests at scale, making the traffic difficult to block using simple filtering techniques.

### How DDoS Attacks Work

DDoS attacks typically target different layers of the network and application stack, depending on the resources they aim to exhaust.

**Network-Layer Attacks (Layer 3/4)**

Network-layer attacks focus on overwhelming the underlying network infrastructure.

These attacks typically attempt to:
- Saturate network bandwidth.
- Exhaust connection-handling capacity.
- Disrupt communication between clients and servers.

Such attacks generate large volumes of traffic and can impact availability before requests reach the application logic.

**Application-Layer Attacks (Layer 7)**

Application-layer attacks target the application itself by sending large numbers of requests that may appear legitimate.

These attacks typically attempt to:
- Exhaust server CPU or memory.
- Overload specific application endpoints.
- Consume backend resources through repeated execution of application logic.

Since the traffic often resembles normal user behavior, application-layer attacks can be more difficult to detect.

### DDoS Mitigation on Launch

All applications hosted on Contentstack Launch are protected by a **CDN layer**, which provides **automatic detection and mitigation** of DDoS attacks.

**Key characteristics:**
- Continuous traffic monitoring at the CDN layer.
- Automatic mitigation before traffic reaches the application runtime.
- No user configuration or manual intervention is required.
- Protection for both static and server-rendered applications.

This ensures malicious traffic is absorbed and filtered at the network edge, helping maintain application availability.

### DDoS Notifications on Launch

When an Application Layer DDoS attack is detected:
- Users are notified through the **Contentstack platform notifications system**.
- Notifications are triggered **as soon as the attack is identified**.

**Note:** A notification is sent **when a DDoS attack starts**, but **not when it ends**. Ensure you monitor the system manually to confirm when the attack has stopped.

This approach gives users visibility into security incidents without generating excessive notifications.

**Additional Resource:** Learn more about [managing notifications](/docs/manage-notifications).

### Recommended Practices Using Launch

While DDoS mitigation is handled automatically, users can further strengthen application resilience using Launch-native capabilities:
- Apply request validation or routing logic using [Edge Functions](/docs/launch/edge-functions).
- Restrict access to trusted networks using [IP-based access control](/docs/launch/ip-based-access-control-using-edge-functions).
- Restrict access to bot and automated traffic using [AI crawler and bot](/docs/launch/blocking-ai-crawlers) access controls.
- Limit the exposure of backend logic implemented through [Cloud Functions](/docs/launch/cloud-functions).

## IP-Based Access Control

Contentstack Launch supports [IP-based access control](/docs/launch/ip-based-access-control-using-edge-functions) using [Edge Functions](/docs/launch/edge-functions), allowing you to restrict access to applications based on IP address rules.

This is commonly used to:
- Protect internal or non-production environments.
- Allow access only from trusted IP ranges.
- Reduce exposure to unauthorized networks.

IP-based rules are evaluated at the **edge**, ensuring requests are filtered before reaching the application runtime.

## Bot and Automated Traffic Management

Applications hosted on Launch benefit from **CDN-level bot detection and mitigation**, which helps reduce unwanted automated traffic. Additionally, Launch enables the [blocking or controlling of bot traffic](/docs/launch/blocking-ai-crawlers), including **AI crawlers**, using [Edge Functions](/docs/launch/edge-functions).

This helps protect applications from:
- Unwanted scraping
- Excessive automated traffic
- Non-approved crawlers accessing the site content

## Geolocation-based Traffic Control

Contentstack Launch automatically includes [geolocation headers](/docs/launch/geolocation-headers) with incoming requests, providing geographic information such as **country**, **region**, and **city** based on the **visitor’s IP address**.

These headers can be used in [Edge Functions](/docs/launch/edge-functions) or application logic to apply geolocation-based access and routing controls, such as allowing or blocking traffic from specific countries or regions.

Geolocation rules are evaluated before requests reach the application runtime, helping enforce region-specific access policies and reduce unwanted traffic.

## Password Protection

Contentstack Launch supports [password protection](/docs/launch/password-protection) for environments, allowing you to restrict access to specific deployments using a password prompt.

This feature is commonly used to:
- Restrict access to staging or review environments.
- Share pre-release versions with stakeholders.
- Prevent search indexing of non-public builds.

Password protection operates at the **edge**, ensuring requests are validated before reaching the application runtime. When accessing a protected environment, users are prompted to enter a password before content is served.

Password protection is configured per environment and can be enabled or disabled through the Launch dashboard.

In addition, Launch allows you to apply password protection to specific domains within an environment using [Edge Functions](/docs/launch/edge-functions). This enables more granular access control when an environment is associated with multiple domains.

**Additional Resource:** Learn more about password protection with an [example](https://github.com/contentstack-launch-examples/Launch-Edge-custom-Password-Protection-example).

## Content Security Policy (CSP)

Contentstack Launch supports the enforcement of [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) to help mitigate client-side security risks such as cross-site scripting (XSS) and data injection attacks.

CSP allows you to control:
- Approved script and style sources
- Allowed image, font, and media origins
- Frame and embed restrictions

CSP rules should be configured based on application requirements and third-party integrations.

**Additional Resource:** Learn more about Content Security Policy with an [example](https://github.com/contentstack-launch-examples/content-security-policy-example).

## Custom Domain Removal and DNS Security

When a custom domain is removed from a Launch environment, associated DNS records should also be removed from your DNS provider.

After [deleting a domain](/docs/launch/custom-domain#delete-a-custom-domain) in Launch, **remove all related DNS records** (such as A, CNAME, ALIAS, or TXT records) from your DNS provider to prevent them from inadvertently pointing to your application or exposing unused endpoints.

Proper DNS housekeeping helps reduce the risk of domain hijacking and prevents unintended traffic from being routed to stale or deprecated resources.

## Traffic Encryption

Contentstack Launch provides **secure, encrypted connections** for all deployments to protect data in transit.

### HTTPS Support

Launch serves all deployed applications over **HTTPS by default**, using industry-standard encryption protocols to safeguard end-user data and ensure privacy. Secure certificates are provisioned and managed automatically for custom and default domains.

### Automatic HTTPS Redirection

Launch automatically redirects all incoming **HTTP requests to HTTPS** using permanent redirect status codes. This redirect is enforced and cannot be disabled, providing consistent enforcement of encrypted connections across environments.

### TLS Support

Launch supports modern versions of the **Transport Layer Security (TLS)** protocol to help ensure data integrity and confidentiality during transmission, including:
- TLS 1.2
- TLS 1.3

This helps protect applications from network-based eavesdropping and man-in-the-middle attacks, supporting secure delivery and compliance with modern security standards.

**Additional Resource:** Learn more about [traffic encryption](/docs/launch/traffic-encryption) in Launch.

## Runtime and Platform Security

### Platform-Level Vulnerability Management

Contentstack Launch manages the security of the underlying platform, including:
- Base runtime images
- Operating system dependencies
- Node.js runtime versions provided by Launch

**Note:**
- Any vulnerability identified in the base runtime image or Node.js is promptly reviewed and addressed by the Launch team as part of regular maintenance activities.
- Node.js patch versions are updated at least once a month on Launch.

### Customer Application Responsibilities

Customers are responsible for addressing vulnerabilities related to:
- Application code
- Framework implementations
- Third-party libraries and dependencies used within the application

**Note:** Any vulnerabilities identified in the customer-managed code must be fixed and redeployed by the user.

### Environment Variables and Secrets

Launch provides secure management of [environment variables](/docs/launch/environment-variables) at the [environment](/docs/launch/environments) level.

**Best practices:**
- Store secrets and credentials as environment variables.
- Avoid hardcoding sensitive values in application code.
- Scope sensitive values only to the environments that require them.

**Note:** Any change to environment variables requires a new deployment to take effect.

## Summary

Contentstack Launch provides a hosting platform with security enabled by default:
- Automatic DDoS detection and mitigation
- CDN-level traffic and bot protection
- Regular runtime and Node.js security updates
- Security event notifications
- Configuration-based security controls

By combining these platform capabilities with secure development practices, users can deploy and operate applications using documented platform and development controls on Launch.

## Common questions

### Does Contentstack Launch require manual configuration to enable DDoS protection?
No. All applications hosted on Contentstack Launch are protected by a **CDN layer**, which provides **automatic detection and mitigation** of DDoS attacks, and **no user configuration or manual intervention is required**.

### Will I receive a notification when a DDoS attack ends?
No. **A notification is sent when a DDoS attack starts, but not when it ends.** Ensure you monitor the system manually to confirm when the attack has stopped.

### Where should I store secrets for my Launch application?
Use Launch [environment variables](/docs/launch/environment-variables) and follow the listed best practices (store secrets and credentials as environment variables, avoid hardcoding sensitive values, and scope sensitive values only to the environments that require them).

### Who is responsible for fixing vulnerabilities in third-party libraries used by my application?
Customers are responsible for addressing vulnerabilities related to **third-party libraries and dependencies used within the application**, and any vulnerabilities identified in the customer-managed code must be fixed and redeployed by the user.