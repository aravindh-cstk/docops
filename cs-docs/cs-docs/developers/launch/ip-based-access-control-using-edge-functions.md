---
title: "[Contentstack Launch] - IP-based Access Control Using Edge Functions in Launch"
description: Implement IP-based access control using Edge Functions in Contentstack Launch to allowlist or restrict traffic to your site’s origin from specific IP ranges.
url: https://www.contentstack.com/docs/launch/ip-based-access-control-using-edge-functions
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - IP-based Access Control Using Edge Functions in Launch

This page explains how to implement IP-based access control using Edge Functions in Contentstack Launch. It is intended for developers and teams who need to restrict or allow access to a Launch-hosted site’s origin based on trusted or blocked IP ranges, and should be used when setting up enterprise access controls (for example, limiting origin access to a CDN or internal networks).

## IP-based Access Control Using Edge Functions in Launch

This guide explains how to implement **IP-based access control** using [**Edge Functions**](./edge-functions.md) in **Contentstack Launch**. This feature helps you restrict or allow traffic to your site’s origin only from specific IP ranges, such as internal networks or trusted CDN providers.

## Implementing IP Filtering with Edge Functions

In many enterprise scenarios, you may want to restrict access to your Launch-hosted site so that only specific IP addresses (e.g., from your CDN provider like Akamai) can reach the origin server. This can be achieved by implementing IP Allowlisting or Restricting using Edge Functions.

With Contentstack Launch, you can set up IP-based access rules using custom logic deployed at the edge (Edge Functions), enabling real-time filtering before the request hits your origin.

## Common Use Cases for IP-based Access Control

- Restrict access to origin servers only to requests from a particular CDN.
- Block specific malicious or unwanted IP addresses from accessing your site.
- Allow internal teams (based on corporate IPs) to preview restricted environments.

**Additional Resource:** Refer to the [Edge Functions Guide](./edge-functions.md) to set up an edge function in your Launch application to add the custom logic for IP access control.

## IP Allowlisting: Permit Traffic from Trusted IPs

Only allow traffic from a predefined list of IP addresses.  
You can achieve IP allowlisting through Launch Edge Functions as follows:

```
export default async function handler(request) {
  const allowedIPs = [
    // Add trusted IPs here
  ];

  const clientIP = request.headers.get("x-forwarded-for") || "";
  const clientIPList = clientIP.split(",").map(ip => ip.trim());

  const allowed = clientIPList.some(ip => allowedIPs.includes(ip));
 //your custom logic

  if (!allowed) {
    return new Response("Forbidden. Your IP is not allowed.", { status: 403 });
  }
  return fetch(request);
}
```

**Additional Resource:**

- Refer to the [Launch Edge IP Allowlist Example](https://github.com/contentstack-launch-examples/launch-edge-ip-allowlist-example) for a quick understanding.
- Learn more about [x-forwarded-for](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For).

## IP Restricting: Deny Access from Blocked IPs

Deny traffic from a specific set of IP addresses.

```
export default async function handler(request) {
  const blockedIPs = [
    // Add restricted IPs here
  ];
  const clientIP = request.headers.get("x-forwarded-for") || "";
  const clientIPList = clientIP.split(",").map(ip => ip.trim());
  const blocked = clientIPList.some(ip => blockedIPs.includes(ip));
  if (blocked) {
    return new Response("Forbidden. Your IP has been restricted.", { status: 403 });
  }
  return fetch(request);
}
```

**Additional Resource:** Refer to the [Launch Edge Restrict IP Example](https://github.com/contentstack-launch-examples/launch-edge-ip-restrict-example) for a quick understanding.

## Common questions

### How do I get the client IP address in an Edge Function?
Use the `x-forwarded-for` request header (for example: `request.headers.get("x-forwarded-for")`) and parse it as needed.

### Can I both allowlist and restrict IPs at the same time?
Yes. You can implement custom logic that checks an allowlist first and then applies a blocklist (or vice versa) based on your requirements.

### What should I return when an IP is not allowed?
Return a `403` response, such as `new Response("Forbidden. Your IP is not allowed.", { status: 403 })`.

### Where can I find working examples for Launch IP filtering?
Use the linked repositories: **Launch Edge IP Allowlist Example** and **Launch Edge Restrict IP Example**.