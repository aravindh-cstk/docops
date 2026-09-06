---
title: "Private Network Deployments"
description: "Learn to configure Private Network Deployments with static egress IPs and AWS VPC peering for secure connectivity to your backend infrastructure."
url: /launch/private-network-deployments
uid: blt1103c2f3dbdeefff
---

# Private Network Deployments

## Private Network Deployments

Private Network Deployments create a dedicated, isolated network for your Launch application runtime infrastructure. Each network is assigned its own static egress IP addresses and can be connected directly to your AWS VPC through VPC peering, allowing traffic between your application and backend systems to stay on private network paths instead of the public internet.

By providing dedicated networking and predictable egress IP addresses, Private Network Deployments simplify IP allowlisting, strengthen network isolation, and help organizations meet security and compliance requirements.

**Note:** Currently, Private Network Deployments are available for Launch on AWS.

## Prerequisites

-   Contentstack Launch on AWS
-   An AWS VPC hosting your backend infrastructure
-   Enterprise plan with the Private Network Deployments add-on

## What You Will Learn

-   What Private Network Deployments and Egress IPs are.

-   When to use a private network.

-   How to set up VPC peering to your AWS VPC.

-   How to test both the peered and public traffic paths.


## Use Cases

Use Private Network Deployments when:

-   Your database, internal API, or other backend service restricts access to an approved list of IP addresses.
-   Your organization has compliance requirements, such as data residency or data protection standards, that call for private network paths between your application and backend infrastructure.
-   You want to remove public internet exposure between your application and your backend systems.
-   You require a dedicated network with static IP addresses for your deployments, ensuring your application’s outgoing traffic remains isolated from other Launch organizations.

**Note:** If you only need static egress IP addresses for IP allowlisting, without features like dedicated infrastructure, VPC peering, or complete network isolation, consider Static IPs.

## How Private Network Deployments Work

When Private Network Deployments are enabled, your application's runtime servers are placed inside a dedicated network. This network is not shared with any other organization on Contentstack Launch.

### Private Networks and Dedicated IP Addresses

Each private network is assigned its own pair of static IP addresses, referred to as Egress IPs. These addresses:

-   Are unique to your network and are never shared with another team or customer.
-   Remain fixed for the lifetime of the network. They do not change as you deploy new versions of your application.
-   Are used for outbound traffic that is not routed through a VPC peering connection, such as requests to third-party APIs.

A single private network can support multiple Launch projects and environments.

**Note:** Currently, build machines are not included in the dedicated network. Only runtime (server) machines are connected. Backend calls made during the build process do not use the private network or the assigned Egress IPs.

### VPC Peering

VPC peering connects your private network directly to your AWS VPC, so traffic between your application and your backend infrastructure stays within AWS. Because this traffic no longer travels over the public internet, it typically sees more consistent latency than a standard public connection. Once VPC peering is configured:

-   Traffic destined for your VPC's IP range is routed through the peering connection rather than the public internet.
-   Traffic to destinations outside your VPC continues to use the Egress IPs described above.

Setting up VPC peering requires an update to the route table in your AWS VPC. This step is covered below.

## Setting Up VPC Peering

### Information Required

To provision a private network, provide the following:

-   **VPC ID:** The AWS VPC that hosts your backend infrastructure.
-   **Subnet CIDR:** The IP address range used by your VPC, so we can confirm there is no overlap with our network.
-   **Region:** The AWS region your backend infrastructure runs in.

### Information Provided

Once your private network is provisioned, we share:

-   **AWS Account ID:** The account ID of our private network. You'll need this to create the peering connection request.
-   **VPC ID:** The VPC ID of our private network. You'll need this to create the peering connection request.
-   **Subnet CIDR:** The IP address range assigned to your private network.
-   **Egress IPs:** The static IP address pair assigned to your private network.

### Setup Steps

1.  Submit your VPC ID, Subnet CIDR, and Region to our support team.
2.  We provision your private network and send back its AWS Account ID, VPC ID, Subnet CIDR, and Egress IPs.
3.  In your AWS VPC dashboard, enter the peering connection details using the values we provided:
    -   **Requester VPC ID:** Your VPC ID
    -   **Account ID:** AWS Account ID provided by us
    -   **VPC ID (Accepter):** VPC ID provided by us
4.  Click **Create Peering Connection** in your AWS console to send the request.
5.  We accept the peering connection request on our end.
6.  Update your route table to direct traffic for our Subnet CIDR through the new peering connection.

    **Example route table entry**

    <table><tbody><tr><td><strong>Destination</strong></td><td><strong>Target</strong></td></tr><tr><td><span class="code">10.100.0.0/16</span><p><br>(Our Subnet CIDR)</p></td><td><span class="code">pcx-0a1b2c3d4e5f6g7h8</span><p><br>(Your peering connection ID)</p></td></tr></tbody></table>

7.  Enable DNS resolution on your VPC. Open the peering connection in your AWS console, go to its DNS settings, and turn on **Requester DNS resolution**. This lets our systems resolve your private DNS hostnames over the connection. Most VPCs already have DNS hostnames and DNS resolution turned on by default, so this is usually a quick toggle. Skip this step if your application only connects to backend resources by IP address.
8.  Add the Launch-peered subnet to your **security group** inbound rules. Update the security group attached to your backend resources (and network ACL, if you use a custom one) to allow inbound traffic from **our Subnet CIDR**. The route table change only configures routing; your security group still needs to explicitly allow traffic through, or it'll be blocked even with the peering connection active.

    **Example security group inbound rule**

    <table><tbody><tr><td><strong>Type</strong></td><td><strong>Protocol</strong></td><td><strong>Port range</strong></td><td><strong>Source</strong></td></tr><tr><td>Custom TCP</td><td>TCP</td><td>5432</td><td><span class="code">10.100.0.0/16</span><p><br>(Our Subnet CIDR)</p></td></tr></tbody></table>


## Testing the Connection

Once VPC peering is configured and your route table, security group rules, and (if needed) DNS resolution are in place, you can verify the setup by deploying a small Launch function that exercises both traffic paths at once: a call to a backend resource over the peering connection, and a call to the public internet.

Deploy the following as a Launch cloud function, replacing PRIVATE\_URL with the hostname or internal IP of a resource inside your VPC (for example, a health-check endpoint on your internal API):

```
// Replace with your private resource's URL (hostname or internal IP)
const PRIVATE_URL = 'http://internal-api.corp.local:8080/health';

export default async function handler(request, response) {
// Test VPC peered endpoint
  let privateResult = null;
  let privateError = null;
  try {
    const res = await fetch(PRIVATE_URL, { signal: AbortSignal.timeout(5000) });
    privateResult = await res.text();
  } catch (err) {
    privateError = err.message;
  }

  // Test public internet access
  let publicIp = null;
  let publicError = null;
  try {
    const res = await fetch('https://checkip.amazonaws.com', { signal: AbortSignal.timeout(5000) });
    publicIp = (await res.text()).trim();
  } catch (err) {
    publicError = err.message;
  }

  response.status(200).json({
    privateVpc: { url: PRIVATE_URL, result: privateResult, error: privateError },
    publicInternet: { ip: publicIp, error: publicError },
    timestamp: new Date().toISOString(),
  });
}
```

Invoking the function returns a JSON response summarizing both tests, for example:

```
{
  "privateVpc": { "url": "http://internal-api.corp.local:8080/health", "result": "OK", "error": null },
  "publicInternet": { "ip": "203.0.113.10", "error": null },
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

If either test returns an error, review your route table entries, DNS resolution settings, and security group inbound rules (and network ACL, if you use a custom one) to confirm each is configured as described above.

## Pricing and Support

Private Network Deployments are available as an add-on Enterprise feature.

To enable Private Network Deployments for your account, contact the Contentstack [support](mailto:support@contentstack.com) team with your VPC ID, Subnet CIDR, and Region. Our team will confirm pricing and begin provisioning your network.
