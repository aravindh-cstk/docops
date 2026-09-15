---
title: "IP-based Access Control Using Edge Functions in Launch"
description: "Implement IP-based access control in Contentstack Launch using Edge Functions to allow or block traffic based on IP rules."
url: /launch/ip-based-access-control-using-edge-functions
uid: blt2e44c0068f4017c5
---

# IP-based Access Control Using Edge Functions in Launch

## IP-based Access Control Using Edge Functions in Launch

This guide explains how to implement **IP-based access control** using [**Edge Functions**](/docs/launch/edge-functions) in **Contentstack Launch**. This feature helps you restrict or allow traffic to your site’s origin only from specific IP ranges, such as internal networks or trusted CDN providers.

## What You Will Learn

-   How to allow traffic only from a trusted list of IP addresses.

-   How to deny traffic from a blocked list of IP addresses.


## Implementing IP Filtering with Edge Functions

In many enterprise scenarios, you may want to restrict access to your Launch-hosted site so that only specific IP addresses (e.g., from your CDN provider like Akamai) can reach the origin server. This can be achieved by implementing IP Allowlisting or Restricting using Edge Functions.

With Contentstack Launch, you can set up IP-based access rules using custom logic deployed at the edge (Edge Functions), enabling real-time filtering before the request hits your origin.

## Common Use Cases for IP-based Access Control

-   Restrict access to origin servers only to requests from a particular CDN.
-   Block specific malicious or unwanted IP addresses from accessing your site.
-   Allow internal teams (based on corporate IPs) to preview restricted environments.

**Additional Resource:** Refer to the [Edge Functions Guide](/docs/launch/edge-functions) to set up an edge function in your Launch application to add the custom logic for IP access control.

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

-   Refer to the [Launch Edge IP Allowlist Example](https://github.com/contentstack-launch-examples/launch-edge-ip-allowlist-example) for a quick understanding.
-   Learn more about [x-forwarded-for](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For).

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
