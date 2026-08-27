---
title: "Securing your App"
description: "Secure your Contentstack app with Signed Webhooks, JWT for UI Locations, IP whitelisting, and replay attack protection."
url: /developer-hub/securing-your-app
uid: blt2fcd9c90884f095f
---

# Securing your App

## Securing your App

Your Marketplace App communicates with Contentstack via two touchpoints:

-   [Securing Webhooks](#securing-webhooks)
-   [Securing UI Locations](#securing-ui-locations)

Contentstack provides signed support for both integrations.

## Prerequisites

-   A Contentstack Marketplace app

## What You Will Learn

-   How to secure webhooks with the signed webhooks feature.

-   How to secure UI locations using a JWT app-token.

-   How to retrieve the signing public key and verify a JWT app-token.

-   How IP whitelisting restricts access to your domains.


## Securing Webhooks

If your app wants to receive any data from webhook, we encourage you to use the [signed webhooks](https://www.contentstack.com/docs/headless-cms/secure-your-webhooks/#webhook-signature) feature on the server side.

This feature allows App developers to verify whether the webhook requests are originating from Contentstack itself, and helps them build robust apps and secure any multi-tenant data stored within the Apps.

## Securing UI Locations

If your app manages any configuration or has data communication between the UI and backend server, we strongly suggest to use the Signed Locations feature offered by the App Framework.

When you enable this, all the initial page load calls will contain a JWT token that can be used to verify whether the page load request originated from Contentstack itself.

With the JWT app-token payload, you should only respond with the data relevant to the current Organization and Stack. You can build your own session and validate the Ajax call via your own session.

**Note:** Please do **not** use the JWT app-token as session for further API calls. The token has an expiration of a few minutes. Use the payload to build your own user session.

### Step 1 - Retrieve the Public Key

To verify a JWT app-token, you need to use the Contentstack’s Signing Public Key shared in the response. To obtain the public key, hit the below API endpoint:

```
`https://[DOMAIN]/.well-known/public-keys.json`
```

Here, DOMAIN refers to the host in the region-specific login endpoint that you are currently using to access the Contentstack app.

The above API endpoint returns the Signing Public Key in the response body as follows:

```
/// RESPONSE
const response = {
   "signing-key": "-----BEGIN RSA PUBLIC KEY-----\212313131\n-----END RSA PUBLIC KEY-----"
;
const publicKey = response["signing-key"];
```

**Note:** You can also store the content of the public key in a file, for access whenever needed.

### Step 2 - Verify the JWT app-token

Here is a sample codebase of what your verification script (Node.js) should look like:

```
const jwt = require("jsonwebtoken");
const appToken = req.params["app-token"];
const publicKey = await (
  await fetch("https://app.contentstack.com/.well-known/public-keys.json")
).json();
try {
  const {
    app_uid,
    installation_uid,
    organization_uid,
    user_uid,
    stack_api_key,
  } = jwt.verify(appToken, publicKey["signing-key"]);
  console.info("App token is valid!");
} catch (e) {
  console.error(
    "App token is invalid or request is not initiated from Contentstack!"
  );
}
```

## IP Whitelisting with Contentstack

IP Whitelisting is another security feature that gives only an approved list of IP addresses, the permission to access your domain(s).

To protect your domain from potential attacks, Contentstack provides you with a specific set of IP addresses that you can whitelist. This allows you to limit and control access only to trusted IPs and lets you verify whether the data is sent from Contentstack.

To receive the Contentstack IPs, contact our [Support](mailto:support@contentstack.com) team today.

**Additional Resource:** You can also read further on how to [Pass Contentstack Webhooks through Firewall](https://www.contentstack.com/docs/developers/how-to-guides/pass-contentstack-webhooks-through-firewalls), in our detailed documentation.
