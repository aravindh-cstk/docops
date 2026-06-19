---
title: "[Set Up Your Project] - Secure Your Webhooks"
description: Secure Your Webhooks
url: https://www.contentstack.com/docs/headless-cms/secure-your-webhooks
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: unknown
---

# [Set Up Your Project] - Secure Your Webhooks

This page explains how to secure Contentstack webhooks using supported authentication and verification methods. It is intended for developers configuring webhook endpoints and should be used when setting up or hardening webhook security for receiving applications or servers.

[Webhooks](https://www.contentstack.com/docs/developers/set-up-webhooks/about-webhooks) are an ideal way to send information automatically to an external application. However, it is critical to ensure that the receiving app or server validates the source before accepting requests. To avoid potential security threats, users can secure your webhooks.

Contentstack offers some highly recommended security measures that you can implement when setting up a webhook. These include **Basic Auth**, **OAuth 2.0 Client Credential**, **Bearer Token**, **Custom Headers**, **Webhook Signature**, **Time Stamped Messages**, and **IP Whitelisting**.

Let’s look at the ways you can secure your webhook event data in detail.

## Basic Auth

When setting up a webhook, basic authentication, i.e., **Basic Auth**, allows users to set a username and password associated with your HTTP endpoint. With this method, your basic auth field values are included in the header of the HTTP request.

To configure this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack), and perform the following steps:

- Navigate to **Settings** > **Webhooks**, then click on **+ New Webhook** and select the **Basic Auth** method.
- Here, you can add the basic auth details by providing the values for the following fields:HTTP Basic Auth Username
- HTTP Basic Auth Password

Now, your URL is secure with the above basic auth username and password.

## OAuth 2.0 Client Credential

OAuth 2.0 provides a more secure and robust authentication method by allowing you to authenticate requests using access tokens.

**Note**: The Basic Auth method is available by default. To enable the OAuth 2.0 authentication method for your organization, please contact our [support](mailto: support@contentstack.com) team.

To configure this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack), and perform the following steps:

- Navigate to **Settings** > **Webhooks**, then click on **+ New Webhook** and select the **OAuth 2.0 Client Credential** method.
- Here, you can add the client credential details by providing the values for the following fields:Access Token URL
- Cl
- Client Secret
- Request Query Parameters

**Note**: To get the values for above fields refer to your OAuth application settings. The request query parameters will be appended to the access token URL.

## Bearer Token

Bearer token is an authentication method that allows you to securely pass a token in the HTTP header of your webhook requests. The server then verifies the token to authenticate the request.

**Note**: The Basic Auth method is available by default. To enable the Bearer Token authentication method for your organization, please contact our [support](mailto: support@contentstack.com) team.

To configure this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack), and perform the following steps:

- Navigate to **Settings** > **Webhooks**, then click on **+ New Webhook** and select the **Bearer Token** method.
- Here, you can add the **Bearer Token**.

## Custom Headers

As an additional method of security, you can specify custom headers that Contentstack will use while sending the payload to the specified endpoint. Custom headers give the destination application an option to authenticate your webhook requests, and reject any that do not contain these custom headers.

Custom headers are key-value parameters that you send/receive in the header of each call of your notifying URL.

To set this method, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack), and perform the following steps:

- Navigate to **Settings** > **Webhooks**, then click on **+ New Webhook**.
- Here, you can add custom headers by providing the values for the following fields under **Custom Headers**:Key
- Value

**Note:** You can set multiple custom header key-value pairs.

## Webhook Signature

Contentstack signs all webhook events sent to your endpoints with a signature. This signature appears in each event's `X-Contentstack-Request-Signature` header. It allows you to verify the integrity of the data and the provider's authenticity (Contentstack) from which data is coming.

### Verify Webhook Data That Contentstack Sends to Your Webhook Endpoints

Whenever a webhook is triggered for a specific event, Contentstack generates a signature based on the payload and appends it to the `X-Contentstack-Request-Signature` header of the HTTP request. This header is used while sending the payload to the specified webhook endpoint.

**Note**: Contentstack uses the SHA-256 algorithm and RSA algorithm based private key to generate webhook signatures.

Each signature is denoted by a unique identifier and prefixed with "`v1=`". Let us look at an example to understand the possible values for this response header.

```
X-Contentstack-Request-Signature:
v1=gk2f/Hzbm7TcNPs8g/AoKaGsK1yXaa5/EnEpNEzyQ67RElj09S
```

**Note**: Each webhook signature contains **256 characters** in length.

Perform the following steps to check whether the webhook data comes from an authenticated source.

#### Step 1 - Retrieve the Public Key

To verify a webhook signature, you need to use the Contentstack Signing Public Key shared in the response. To obtain the public key, hit the below API endpoint.

```
https://[DOMAIN]/.well-known/public-keys.json
```

**Note:** Here, `DOMAIN` refers to the host in the [region-specific login endpoint](/docs/developers/contentstack-regions/login-endpoints) that you are currently using to access the Contentstack app.

The above API endpoint returns the signing public key in the response body:

```
// RESPONSE
const response = {
    "signing-key": "-----BEGIN RSA PUBLIC KEY-----\212313131\n-----END RSA PUBLIC KEY-----"
;
const publicKey = response["signing-key"];
}
```

**Note**: You can also store the content of the public key in a file for access whenever needed.

#### Step 2 - Extract the Webhook Signature from the Header

To extract the webhook signature from the response header, use the "`,`" character as a separator and split the header. This will fetch a list of elements. Now, use the "`=`" character as a separator to split each element in the list and retrieve a prefix and integer value pair.

```
const signatureString = req.get('X-Contentstack-Request-Signature');
const signature = signatureString.split(",")[0].split("=")[1];

const body = req.body;
```

#### Step 3 - Verify the Webhook Signature

You can use the `crypto.verify()` method to verify the webhook signature attached to a specific webhook event. You need to pass the request body, signature, and public key within this method. Check the below example.

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

The `crypto.verify()` method returns a boolean value. It returns `true` if verification is successful. If verification fails, it returns `false`. In case it’s `false`, reject the request.

**Note**: In case you fail to verify the webhook signature, use these parameters with their respective values:

- **Hash Algorithm:** Name of the message digest (RSA-PSS).
Value: `sha256`
- **Salt Length: **RSA-PSS defines a default salt length that corresponds to the output length of the digest. If you do not specify a salt length, the system defaults to 32. Signature verification fails if you explicitly specify an outdated salt value such as 222.
Value: `32`

Here is a sample codebase of what your verification script (NodeJS) should look like:

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
import java.security.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
public class CoreVerifyPublic {
    private static final String SIGNATURE_ALGO = "SHA256withRSA";
    public static void main(String[] args) {
        try {
            PublicKey publicKey = getPublicKeyFromPem("public_key.pem");
            String signature = "X-Contentstack-Request-Signature";
             //Replace X-Contentstack-Request-Signature with your public key.
            String signatureBase64 = signature.split(",")[0].split("=")[1];
             // Convert the signature from Base64 string to byte array
            byte[] receivedSignatureBytes = Base64.getDecoder().decode(signatureBase64);
            boolean isVerified = verifySignature(publicKey, receivedSignatureBytes, getJsonBody());
            if (isVerified) {
                System.out.println("Verified!");
            } else {
                System.out.println("Failed!");
            }
        } catch (IOException | NoSuchAlgorithmException | InvalidKeyException | SignatureException | InvalidKeySpecException e) {
            e.printStackTrace();
        }
    }
    private static PublicKey getPublicKeyFromPem(String filePath) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        Path path = Paths.get(filePath);
        System.out.println(filePath);
        byte[] publicKeyBytes = Files.readAllBytes(path);
        String publicKeyPem = new String(publicKeyBytes, StandardCharsets.UTF_8);
        publicKeyPem = publicKeyPem.replace("-----BEGIN RSA PUBLIC KEY-----", "");
        publicKeyPem = publicKeyPem.replace("-----END RSA PUBLIC KEY-----", "");
        publicKeyPem = publicKeyPem.replaceAll("\\s+", "");
        System.out.println(publicKeyPem.length());
        byte[] publicKeyDecoded = Base64.getMimeDecoder().decode(publicKeyPem);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyDecoded);
        return keyFactory.generatePublic(keySpec);
    }
    private static boolean verifySignature(PublicKey publicKey, byte[] signatureBytes, byte[] messageBytes)
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {
        Signature signature = Signature.getInstance(SIGNATURE_ALGO);
        signature.initVerify(publicKey);
        signature.update(messageBytes);
        return signature.verify(signatureBytes);
    }
    private static byte[] getJsonBody() {
        String jsonString = "{ \"module\": \"entry\", \"api_key\": \"bltd83b84cfa0c48b61\", \"event\": \"publish\", \"triggered_at\": \"2023-03-28T19:35:13.578Z\", \"data\": { \"entry\": { \"uid\": \"blte9ebf4643da326b4\", \"title\": \"How do I deposit money into my digital checking account?\", \"locale\": \"en-us\", \"_version\": 5 }, \"content_type\": { \"uid\": \"help_center_article_template\", \"title\": \"Help Center Article\" }, \"environment\": { \"uid\": \"blte8035ec83616b4bc\", \"name\": \"integration\", \"urls\": [{ \"url\": \"\", \"locale\": \"en-us\" }] }, \"action\": \"publish\", \"status\": \"success\", \"locale\": \"en-us\" } }";
        return jsonString.getBytes(StandardCharsets.UTF_8);
    }
}
```

### Help Prevent Replay Attacks

A replay attack occurs when an attacker repeatedly sends data to a specific webhook endpoint and overwhelms the third-party application. To help prevent such attacks, Contentstack attaches a timestamp in the request body. The timestamp is passed against the `triggered_at` key.

The `triggered_at` key generates new signatures every time Contentstack generates a new payload. This makes it difficult for attackers to decipher signatures and helps avoid replay attacks.

The `triggered_at` key denotes the timestamp at which a specific webhook event was triggered. You can compare the received timestamp to the current local timestamp to determine whether it is outside your defined tolerance. If the received timestamp exceeds the tolerance limits, your application can reject the request.

Here is a sample code that defines the signature and timestamp:

```
let receivedTimestamp = req.body['triggered_at'];
let localTimestamp = Date.now();
// in case the defined tolerance is 1 minute, 60*1000  milliseconds
if (localTimestamp - receivedTimestamp > 60000) {
// reject request
}
```

## IP Whitelisting with Contentstack

IP whitelisting is another security feature that gives only an approved list of IP addresses the permission to access your domain(s).

To protect your domain from potential attacks, Contentstack will provide you with a specific set of IP addresses that you can whitelist. This will allow you to limit and control access only to trusted IPs and lets you verify whether the data is sent from Contentstack.

To receive the Contentstack IPs, contact our [Support](mailto:support@contentstack.com) team today.

**Additional Resource: **You can also read on how to [Pass Contentstack Webhooks through Firewall](/docs/developers/how-to-guides/pass-contentstack-webhooks-through-firewalls), in our detailed documentation.

## Common questions

### Which webhook security methods are available in Contentstack?
Contentstack offers **Basic Auth**, **OAuth 2.0 Client Credential**, **Bearer Token**, **Custom Headers**, **Webhook Signature**, **Time Stamped Messages**, and **IP Whitelisting**.

### Where is the webhook signature sent?
The signature appears in each event's `X-Contentstack-Request-Signature` header.

### How do I retrieve the public key used to verify webhook signatures?
Hit the API endpoint:
`https://[DOMAIN]/.well-known/public-keys.json`

### How can I help prevent replay attacks?
Use the timestamp passed against the `triggered_at` key in the request body and compare it to your current local timestamp to determine whether it is outside your defined tolerance.