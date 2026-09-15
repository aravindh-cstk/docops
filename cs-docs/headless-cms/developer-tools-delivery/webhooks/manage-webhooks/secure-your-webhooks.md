---
title: "Secure Your Webhooks"
description: "Secure your webhooks with Contentstack using basic auth, OAuth 2.0, bearer tokens, custom headers, webhook signatures, time stamped messages, and IP whitelisting."
url: /headless-cms/secure-your-webhooks
uid: bltd34932f1628440b7
---

# Secure Your Webhooks

## Secure Your Webhooks

[Webhooks](/docs/headless-cms/about-webhooks) are an ideal way to send information automatically to an external application. However, it is critical to ensure that the receiving app or server validates the source before accepting requests. To avoid potential security threats, you can secure your webhooks.

Contentstack offers security measures that you can implement when setting up a webhook. These include **Basic Auth**, **OAuth 2.0 Client Credential**, **Bearer Token**, **Custom Headers**, **Default (Contentstack Certificate) Signature**, **HMAC Signature**, **Time Stamped Messages**, and **IP Whitelisting**.

Contentstack signs every webhook payload so the receiving application can verify it came from Contentstack. Two signing methods are available, and you select one per webhook with the **Request Signing Method** field:

-   **Default (Contentstack Certificate)**: The default method. Contentstack signs payloads with a shared platform certificate, and consumers verify them using Contentstack's public key.
-   **HMAC Signature**: Contentstack signs payloads with a secret key unique to your organization. Consumers verify them using the shared secret.

Let’s look at the ways you can secure your webhook event data in detail.

## Basic Auth

When setting up a webhook, basic authentication, i.e., **Basic Auth**, allows you to set a username and password associated with your HTTP endpoint. With this method, your basic auth field values are included in the header of the HTTP request.

To configure this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Navigate to **Settings** > **Webhooks**, then click **\+ New Webhook** and select the **Basic Auth** method.
2.  Add the basic auth details by providing values for the following fields:
    -   HTTP Basic Auth Username
    -   HTTP Basic Auth Password

Your URL is now secured with the basic auth username and password.

## OAuth 2.0 Client Credential

OAuth 2.0 provides a more secure and robust authentication method by allowing you to authenticate requests using access tokens.

**Note:** The Basic Auth method is available by default. To enable the OAuth 2.0 authentication method for your organization, contact our [support](mailto:support@contentstack.com) team.

To configure this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Navigate to **Settings** > **Webhooks**, then click **\+ New Webhook** and select the **OAuth 2.0 Client Credential** method.
2.  Add the client credential details by providing values for the following fields:
    -   Access Token URL
    -   Client ID
    -   Client Secret
    -   Request Query Parameters

**Note:** To get the values for the above fields, refer to your OAuth application settings. The request query parameters are appended to the access token URL.

## Bearer Token

Bearer token is an authentication method that allows you to securely pass a token in the HTTP header of your webhook requests. The server then verifies the token to authenticate the request.

**Note:** The Basic Auth method is available by default. To enable the Bearer Token authentication method for your organization, contact our [support](mailto:support@contentstack.com) team.

To configure this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Navigate to **Settings** > **Webhooks**, then click **\+ New Webhook** and select the **Bearer Token** method.
2.  Add the **Bearer Token**.

## Custom Headers

Custom headers provide an additional validation signal but should not replace proper authentication or signature verification.

Custom headers are key-value parameters that you send and receive in the header of each call to your notifying URL.

To set this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Navigate to **Settings** > **Webhooks**, then click **\+ New Webhook**.
2.  Add custom headers by providing values for the following fields under **Custom Headers**:
    -   Key
    -   Value

**Note:** You can set multiple custom header key-value pairs.

## Default (Contentstack Certificate) Signature

The **Default (Contentstack Certificate) signature** is the default signing method, shown as **Default (CS Cert)** in the **Request Signing Method** field on a webhook. Contentstack signs all webhook events sent to your endpoints with this signature, which appears in each event's X-Contentstack-Request-Signature header. It allows you to verify the integrity of the data and the authenticity of the provider (Contentstack) the data comes from.

### Default signature header format

Whenever a webhook is triggered for a specific event, Contentstack generates a Default (Contentstack Certificate) signature based on the payload and appends it to the X-Contentstack-Request-Signature header of the HTTP request.

**Note:** Contentstack uses the SHA-256 algorithm and an RSA-based private key to generate webhook signatures.

Each signature is denoted by a unique identifier and prefixed with v1=. The following example shows the possible values for this response header.

```
X-Contentstack-Request-Signature:
v1=gk2f/Hzbm7TcNPs8g/AoKaGsK1yXaa5/EnEpNEzyQ67RElj09S
```

**Note:** Each webhook signature contains 256 characters.

Perform the following steps to check whether the webhook data comes from an authenticated source.

### Verify default signature

To verify a webhook signature, you need the Contentstack Signing Public Key shared in the response. To obtain the public key, hit the API endpoint below.

```
https://[DOMAIN]/.well-known/public-keys.json
```

**Note:** Here, DOMAIN refers to the host in the [region-specific login endpoint](/docs/administration/login-endpoints) that you are currently using to access the Contentstack app.

The API endpoint returns the signing public key in the response body:

```
// RESPONSE
const response = {
    "signing-key": "-----BEGIN RSA PUBLIC KEY-----\212313131\n-----END RSA PUBLIC KEY-----"
;
const publicKey = response["signing-key"];
}
```

**Note:** You can also store the content of the public key in a file for access whenever needed.

To extract the webhook signature from the response header, use the , character as a separator and split the header. This returns a list of elements. Then use the \= character as a separator to split each element and retrieve a prefix and value pair.

```
const signatureString = req.get('X-Contentstack-Request-Signature');
const signature = signatureString.split(",")[0].split("=")[1];

const body = req.body;
```

You can use the crypto.verify() method to verify the webhook signature attached to a specific webhook event. Pass the request body, signature, and public key to this method, as shown below.

```
const hashAlgo = 'sha256';

const isVerified = crypto.verify(
  hashAlgo,
   Buffer.from(JSON.stringify(body)),
   {
     key: publicKey,
     padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
   },
   Buffer.from(signature, 'base64')
 );
```

The crypto.verify() method returns a boolean value. It returns true if verification is successful and false if it fails. If it returns false, reject the request.

**Note**: If you fail to verify the webhook signature, use these parameters with their respective values:

-   **Hash Algorithm**: Name of the message digest (RSA-PSS). Value: sha256
-   **Salt Length**: RSA-PSS defines a default salt length that corresponds to the output length of the digest. If you do not specify a salt length, the system defaults to 32. Signature verification fails if you explicitly specify an outdated salt value such as 222. Value: 32

Here is a sample codebase of what your verification script (Node.js) should look like:

```
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');

const HASH_ALGO = 'sha256';
const PORT = 3000;
const PUBLIC_KEY = importPublicKey();

const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {  
  const signature = req.get('X-Contentstack-Request-Signature');
  const body = req.body;
  const isVerified = crypto.verify(
    HASH_ALGO,
    Buffer.from(JSON.stringify(body)),
    {
      key: PUBLIC_KEY,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    Buffer.from(signature.split(',')[0].split('=')[1], 'base64')
  );

  if (isVerified) {
    console.log('verified!', body)
    res.json();
  } else {
    console.log('failed!')
    res.send('Unable to verify signature');
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

function importPublicKey() {
  const publicKeyFile = fs.readFileSync('public.key', 'utf8');
  return crypto.createPublicKey({
    key: publicKeyFile,
    format: 'pem',
    type: 'pkcs1'
  });
}
```

Here is a sample codebase of what your verification script (Java) should look like:

```
import java.io.IOException;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.GeneralSecurityException;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.Signature;
import java.security.spec.MGF1ParameterSpec;
import java.security.spec.PSSParameterSpec;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;

public class CoreVerifyPublic {

    public static void main(String[] args) throws Exception {
        PublicKey publicKey = getPublicKeyFromPem("public_key.pem");

        // Use the value your server actually received on this header:
        String receivedHeaderValue = request.getHeader("X-Contentstack-Request-Signature");
        String signatureBase64 = receivedHeaderValue.split(",")[0].split("=", 2)[1];
        byte[] signatureBytes = Base64.getDecoder().decode(signatureBase64);

        byte[] messageBytes = getJsonBody(); // raw request body bytes, exactly as received

        boolean isVerified = verifySignature(publicKey, signatureBytes, messageBytes);
        System.out.println(isVerified ? "Verified!" : "Failed!");
    }

    // The public key from /.well-known/public-keys.json is PKCS#1
    // ("-----BEGIN RSA PUBLIC KEY-----"). Decode its DER
    // (SEQUENCE { INTEGER modulus, INTEGER publicExponent }) directly.
    private static PublicKey getPublicKeyFromPem(String filePath) throws IOException, GeneralSecurityException {
        Path path = Paths.get(filePath);
        String publicKeyPem = new String(Files.readAllBytes(path), StandardCharsets.UTF_8);
        publicKeyPem = publicKeyPem.replace("-----BEGIN RSA PUBLIC KEY-----", "");
        publicKeyPem = publicKeyPem.replace("-----END RSA PUBLIC KEY-----", "");
        publicKeyPem = publicKeyPem.replaceAll("\\s+", "");
        byte[] der = Base64.getMimeDecoder().decode(publicKeyPem);

        int[] pos = {0};
        expectTag(der, pos, 0x30); // SEQUENCE
        readLength(der, pos);
        expectTag(der, pos, 0x02); // INTEGER modulus
        BigInteger modulus = new BigInteger(readValue(der, pos));
        expectTag(der, pos, 0x02); // INTEGER publicExponent
        BigInteger exponent = new BigInteger(readValue(der, pos));

        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePublic(new RSAPublicKeySpec(modulus, exponent));
    }

    // Contentstack signs with RSA-PSS (SHA-256, MGF1/SHA-256, salt length 32) -
    // NOT plain "SHA256withRSA" (PKCS#1 v1.5).
    private static boolean verifySignature(PublicKey publicKey, byte[] signatureBytes, byte[] messageBytes)
            throws GeneralSecurityException {
        Signature signature = Signature.getInstance("RSASSA-PSS");
        signature.setParameter(new PSSParameterSpec("SHA-256", "MGF1", MGF1ParameterSpec.SHA256, 32, 1));
        signature.initVerify(publicKey);
        signature.update(messageBytes);
        return signature.verify(signatureBytes);
    }

    private static byte[] getJsonBody() throws IOException {
        return Files.readAllBytes(Paths.get("payload.json"));
    }

    private static void expectTag(byte[] der, int[] pos, int tag) {
        if ((der[pos[0]] & 0xFF) != tag) {
            throw new IllegalArgumentException("Expected DER tag " + tag + " at offset " + pos[0]);
        }
        pos[0]++;
    }

    private static int readLength(byte[] der, int[] pos) {
        int b = der[pos[0]++] & 0xFF;
        if (b < 0x80) return b;
        int numBytes = b & 0x7F;
        int len = 0;
        for (int i = 0; i < numBytes; i++) {
            len = (len << 8) | (der[pos[0]++] & 0xFF);
        }
        return len;
    }

    private static byte[] readValue(byte[] der, int[] pos) {
        int len = readLength(der, pos);
        byte[] value = new byte[len];
        System.arraycopy(der, pos[0], value, 0, len);
        pos[0] += len;
        return value;
    }
}
```

## HMAC Signature

In addition to the Default (Contentstack Certificate) signature, Contentstack supports **HMAC signing**. With HMAC signing, Contentstack signs each webhook payload using a secret key that is unique to your organization and the HMAC-SHA256 algorithm, rather than the shared Contentstack certificate. This gives your organization an isolated signing key that you can rotate on your own schedule.

A webhook uses HMAC signing only when both of the following are true:

-   HMAC signing is enabled for your organization in **Administration** > **Security Configuration** > **HMAC Signing**.
-   The webhook's **Request Signing Method** is set to **HMAC Signing**.

**Additional Resource:** To enable, regenerate, or disable the organization's HMAC secret key, refer to [HMAC Signing](/docs/administration/hmac-signing).

### Signature header format

When HMAC signing is active, Contentstack adds the signature to the x-contentstack-hmac-signature header. The header contains a timestamp (t) and one or more HMAC-SHA256 signatures (v1):

```
x-contentstack-hmac-signature: t=1778729300,v1=<signature>
```

During a key rotation grace period, both the new and the deprecated key sign the payload, so the header contains more than one v1 value:

```
x-contentstack-hmac-signature: t=1778729300,v1=<new_signature>,v1=<old_signature>
```

Your application should treat the request as valid if any one of the v1 signatures matches.

| Parameter | Description |
| --- | --- |
| t | Unix timestamp used to generate the signature. |
| v1 | HMAC-SHA256 signature. |
| Multiple v1 values | Present during a secret rotation grace period. |

### Verify an HMAC signature

Verify the signature against the exact raw request body you receive. Do not parse and re-stringify the JSON, change whitespace, or reorder fields, because any change to the payload causes verification to fail. The signed payload format is:

```
${timestamp}.${raw_request_body}
```

The example below verifies an incoming signature in Node.js. Replace secret with your organization's HMAC secret key. The function returns true if any signature in the header matches:

```
import crypto from "crypto";

function verifyWebhookSignature({ signatureHeader, rawBody, secret }) {
  if (!signatureHeader) return false;

  // Example header: t=1778729300,v1=abc,v1=def
  const parts = signatureHeader.split(",");
  let timestamp = "";
  const signatures = [];

  for (const part of parts) {
    const [key, value] = part.trim().split("=");
    if (key === "t") timestamp = value;
    if (key === "v1") signatures.push(value);
  }

  if (!timestamp || signatures.length === 0) return false;

  // Use the raw request body exactly as received.
  const signedPayload = `${timestamp}.${rawBody}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  // Match against any v1 signature.
  return signatures.some((signature) =>
    crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expectedSignature, "hex")
    )
  );
}
```

When you read the raw body in Express, use the raw body parser so the payload is not modified before verification:

```
import express from "express";

const app = express();

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const signatureHeader = req.headers["x-contentstack-hmac-signature"];
    const rawBody = req.body.toString("utf8");

    const isValid = verifyWebhookSignature({
      signatureHeader,
      rawBody,
      secret: process.env.WEBHOOK_SECRET,
    });

    if (!isValid) {
      return res.status(401).send("Invalid signature");
    }

    res.sendStatus(200);
  }
);
```

## Help Prevent Replay Attacks

A replay attack occurs when an attacker captures a valid webhook request and resends it later to trigger duplicate or unauthorized processing. To help prevent such attacks, Contentstack attaches a timestamp to the request. For the Default (Contentstack Certificate) signature, the timestamp is passed against the triggered\_at key in the request body. For HMAC signatures, the timestamp is the t value in the x-contentstack-hmac-signature header.

Compare the received timestamp to your current local timestamp to determine whether it is outside your defined tolerance. If it exceeds the tolerance limit, your application can reject the request.

The following sample defines the signature timestamp tolerance for the Default (Contentstack Certificate) signature:

```
let receivedTimestamp = req.body['triggered_at'];
let localTimestamp = Date.now();
// in case the defined tolerance is 1 minute, 60*1000 milliseconds
if (localTimestamp - receivedTimestamp > 60000) {
// reject request
}
```

## IP Whitelisting with Contentstack

IP whitelisting is another security feature that gives only an approved list of IP addresses permission to access your domains.

To protect your domain from potential attacks, Contentstack provides you with a specific set of IP addresses that you can whitelist. This lets you limit and control access to trusted IPs only and verify whether the data is sent from Contentstack.

To receive the Contentstack IPs, contact our [support](mailto:support@contentstack.com) team today.

**Additional Resource:** You can also read about how to [Pass Contentstack Webhooks through Firewall](/docs/developers/how-to-guides/pass-contentstack-webhooks-through-firewalls) in our detailed documentation.
