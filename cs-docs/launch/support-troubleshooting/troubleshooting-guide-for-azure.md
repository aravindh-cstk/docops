---
title: "Troubleshooting Guide for Azure"
description: "Troubleshoot Azure App Service timeout errors with keep-alive agents and IPv4 DNS settings for stable Contentstack SDK outbound connections under load."
url: /launch/troubleshooting-guide-for-azure
---

# Troubleshooting Guide for Azure

## Troubleshooting Guide for Azure

Launch applications run reliably on Microsoft Azure across the full supported feature set. In certain high-concurrency environments, however, applications hosted on Azure managed runtimes such as Azure App Service, Azure Container Apps or Azure Functions may intermittently experience outbound request timeouts when communicating with the External APIs.

These failures commonly appear as ETIMEDOUT, UNKNOWN\_ERROR, or intermittent HTTP 500 responses and are typically observed during periods of sustained traffic or workloads involving large volumes of concurrent outbound requests.

This behavior originates from the way Azure managed runtimes allocate outbound SNAT ports and manage outbound connection lifecycles under load, as documented by Microsoft. Launch infrastructure, application business logic, and the External API itself do not cause these failures.

This guide outlines the recommended troubleshooting and configuration approach for Launch applications deployed on Azure managed runtimes. The configurations described below improve outbound connection reuse and stabilize outbound request routing, significantly reducing the likelihood of intermittent timeout-related failures under load.

## Troubleshooting Steps

Apply the following two configuration changes where the [Contentstack SDK](/docs/developers/sdks) is initialized to stabilize outbound request behavior on Azure managed runtimes:

-   Enable HTTP keep-alive via custom HTTP and HTTPS agents, so connections are reused instead of re-established on every request.
-   Force IPv4 DNS resolution for outbound requests, which produces consistent routing on Azure infrastructure.

**Note:** These configurations are recommended specifically for Azure managed runtime environments handling high-concurrency outbound workloads.

1.  ### Enable Connection Reuse (Keep-Alive)
    
    Attach custom HTTP and HTTPS agents to the SDK initialization. The agents enable keep-alive, define socket pool limits, and apply request-level retries with backoff for transient failures.
    
    The following code snippet demonstrates an example implementation using the [Content Delivery API](/docs/developers/apis/content-delivery-api) as the external API reference.
    
    ```
    import contentstack from "@contentstack/delivery-sdk";
    import http from "http";
    import https from "https";
    
    const agentOptions = {
      keepAlive: true,
      keepAliveMsecs: 180000,
      maxSockets: 50,
      maxFreeSockets: 20,
      timeout: 60000,
    };
    
    const httpAgent = new http.Agent(agentOptions);
    const httpsAgent = new https.Agent(agentOptions);
    
    const RETRYABLE_NETWORK_CODES = ["ETIMEDOUT", "ECONNRESET", "ECONNABORTED", "EPIPE", "EAI_AGAIN"];
    const RETRYABLE_STATUS_CODES = [408, 429, 500, 502, 503, 504];
    
    const httpClientConfig = {
      httpAgent,
      httpsAgent,
      retryLimit: 5,
      retryCondition: (error) => {
        if (error?.code && RETRYABLE_NETWORK_CODES.includes(error.code)) {
          return true;
        }
    
        if (error?.message && RETRYABLE_NETWORK_CODES.some((code) => error.message.includes(code))) {
          return true;
        }
    
        const status = error?.status || error?.response?.status;
        if (status && RETRYABLE_STATUS_CODES.includes(status)) {
          return true;
        }
    
        return false;
      },
      retryDelayOptions: { base: 300 },
      timeout: 30000,
    };
    
    export const stack = contentstack.stack({
      apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
      region: process.env.NEXT_PUBLIC_CONTENTSTACK_REGION,
      host: process.env.NEXT_PUBLIC_CONTENTSTACK_CONTENT_DELIVERY,
      ...httpClientConfig,
    });
    ```
    
2.  ### Enforce IPv4 for Outbound Requests
    
    On the server side, force IPv4 DNS resolution so outbound calls take a consistent network path. This reduces variability introduced by IPv4/IPv6 routing differences in the underlying Azure infrastructure.
    
    ```
    // Force IPv4 DNS resolution on the server side
    if (typeof window === "undefined") {
      const dns = require("dns");
      const http = require("http");
      const https = require("https");
     
      const ipv4Lookup = (hostname, options, callback) => {
        dns.lookup(hostname, { ...options, family: 4 }, callback);
      };
     
      const client = stack.getClient();
      client.defaults.httpAgent = new http.Agent({ lookup: ipv4Lookup });
      client.defaults.httpsAgent = new https.Agent({ lookup: ipv4Lookup });
    }
    ```
    
    **Additional Resource:** Refer to the [Azure Container Apps Networking Overview](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/app-platform/container-apps/networking#considerations) for details on outbound connection behavior.
    

### Expected Outcome

Once both changes are deployed, timeout errors on Azure managed runtimes should drop significantly, and outbound request behavior should remain consistent under load. Functional behavior is unchanged; these adjustments tune only the underlying networking layer.
