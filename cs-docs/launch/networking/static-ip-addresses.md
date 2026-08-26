---
title: "Static IPs (Egress)"
description: "Learn how Static IP addresses work in Contentstack Launch and how to set up outbound IP allowlisting for your backend systems."
url: /launch/static-ip-addresses
uid: blt67315f9cda7e9b1e
---

# Static IPs (Egress)

## Static IPs (Egress)

Usually, when your Launch server app talks to other services, its address keeps changing. This makes it hard for those services to recognize your app. Static IPs fix this by giving your app a single, permanent address for all its outgoing requests.

Static IPs give your Launch application a fixed set of **outbound** IP addresses. You add those addresses to the allowlist on your backend systems, such as databases and internal or third-party APIs, so they can recognize and authorize traffic that comes from your application.

**Note:** Static IPs are currently available for Launch on AWS.

## What You Will Learn

-   When Static IPs are, and are not, the right fit.
-   How Static IPs route outbound traffic through a fixed set of addresses.
-   How Static IPs compare to Private Network Deployments.
-   How to enable, allowlist, and test Static IPs.

## When to Use Static IPs

-   Your database only accepts connections from an approved list of IP addresses.
-   You call APIs that check the source IP before allowing a request, such as payment providers, authentication providers, or internal company APIs.
-   You connect to services that sit behind a firewall and authorize traffic by IP.

## When Static IPs Are Not the Right Fit

-   You need traffic to reach your backend over a private path that never touches the public internet, or you need to be fully isolated from other organizations. Use [Private Network Deployments](/docs/launch/private-network-deployments) for that.
-   You need IP addresses that belong only to your organization. Static IPs are shared with a small group of other customers, as explained below.
-   You need a fixed public address that external clients connect to. Static IPs only cover outbound traffic.

## How Static IPs Work

When the Static IPs feature is enabled for your organization:

-   Your application's runtime servers run inside a Launch-managed AWS network that is shared with a small group of other Static IPs customers. Launch keeps each customer separate from the others at the subnet level.
-   Every outbound request from your application leaves through this network's NAT gateway, which uses a fixed set of IP addresses. Those are your static IPs.
-   The addresses stay the same when you deploy new versions of your application, so you can allowlist them once and rely on them.
-   Traffic to your backend still travels over the public internet, but it now comes from a source you can allowlist.
-   Static IPs only work for **outbound** or **egress** requests sent from your Launch server app to other services.

**Note:** Only your runtime servers use the static IPs. Traffic from the build process and Launch edge functions does not, so any calls they make to a backend come from a different address.

## Static IPs vs. Private Network Deployments

Launch gives you two ways to manage how your application reaches your backend. Static IPs is the simpler option, and Private Network Deployments is the dedicated one. Here is how they compare.

| Feature | Static IPs | Private Network Deployments |
| --- | --- | --- |
| **IP addresses** | Fixed outbound IPs in a shared network | Fixed outbound IPs in a dedicated network |
| **Isolation** | Shared with a small group of customers, separated at the subnet level | A dedicated network for your organization only |
| **VPC peering** | Not available | Available, for a private path into your AWS VPC |
| **Common uses** | IP allowlisting, database and API access | IP allowlisting, VPC peering, full isolation, compliance |
| **Pricing** | Lower than Private Network Deployments | Higher than Static IPs |

**Note:** If your organization has both Static IPs and Private Network Deployments turned on, Private Network Deployments takes priority.

## Set up Static IPs

The Launch team handles the setup, so there is nothing to configure on each deployment. Once the feature is on, you can see your addresses any time from the Launch UI.

![Launch_Static_IPs_image1.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am4057ccf1b5585429/0cec6780b9764e35797d3697/Launch_Static_IPs_image1.png?locale=en-us)

1.  Contact your account manager or [Contentstack Support](mailto:support@contentstack.com) to turn on Static IPs for your organization.
2.  Once it is enabled, in Launch, go to **Settings** → **Networking**.
3.  Under **Static IPs**, you can see your organization's outbound IP addresses listed under Outbound IP addresses (shared pool). Use the copy icon next to an address to grab it. ![Launch_Static_IPs_image3.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amdb0ef046fa6c86a4/cd0f53fddf28799ddd69576e/Launch_Static_IPs_image3.png?locale=en-us)
4.  Add every address in that list to the allowlist on each backend your application needs to reach. This is usually a firewall rule, a security group, or an IP allowlist.
5.  Deploy the way you normally do. Your outbound requests now come from those addresses.

    **Note:**

    -   If the **Networking** tab shows "Static IPs are not enabled. To enable them, contact your organization admin.", the feature isn't turned on for your organization yet. Reach out to your [organization admin](/docs/administration/about-administration-roles#out-of-the-box-administration-roles) or [Contentstack Support](mailto:support@contentstack.com) to get it enabled.
    -   If your organization also has **Private Network Deployments** turned on, the Static IPs card is greyed out and shows a message saying **Private Network Deployments** take precedence. In that case your traffic uses the PND addresses instead, and the static IPs listed here aren't used. See [Private Network Deployments](/docs/launch/private-network-deployments).


## Test Your Static IP Configuration

After the Static IPs feature is enabled and you have added the addresses to your allowlist, you can confirm everything works with a small Launch cloud function. The function below does two things: it calls one of your allowlisted backends, and it reports the public IP address from which your traffic leaves.

1.  Deploy the following as a Launch cloud function, replacing the backend URL with an allowlisted endpoint, such as a health-check endpoint:

    ```
    const BACKEND_URL = 'https://api.example.com/health';

    async function tryFetch(url) {
      try { 
       const res = await fetch(url, { signal: AbortSignal.timeout(5000) }); 
       return { ok: true, body: (await res.text()).trim() }; 
       } catch (err) { 
         return { ok: false, error: err.message }; 
       }
    }

    export default async function handler(request, response) {
      const backend = await tryFetch(BACKEND_URL);
      const egress = await tryFetch('https://checkip.amazonaws.com');

      response.status(200).json({ backend, egress });
    }
    ```

2.  Invoke the function and check the JSON response:

    ```
    {
      "backend": {
        "ok": true,
        "body": "OK"
      },
      "egress": {
        "ok": true,
        "body": "203.0.113.10"
      }
    }
    ```

    Verify two things:

    -   The egress value matches one of the addresses listed under **Settings → Networking → Static IPs**.
    -   The backend call succeeds: ok is true and a body is returned.

    If the backend call fails, confirm every static IP address has been added to that backend's allowlist.


## How Static IPs Apply Across Your Projects

Launch sets Static IPs at the organization level, so they apply to all of your projects and every environment within them. You cannot limit them to a single project or a single environment.

## Pricing and Support

The Static IPs feature is available as an add-on. To turn it on for your organization, contact your account manager or [Contentstack Support](mailto:support@contentstack.com). They confirm pricing and enable the feature. After that, your addresses show up in **Settings → Networking**.
