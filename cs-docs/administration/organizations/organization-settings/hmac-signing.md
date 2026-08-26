---
title: "HMAC Signing"
description: "Enable HMAC signing to sign your organization's webhook payloads with a secret key unique to your organization, with zero-downtime key rotation."
url: /administration/hmac-signing
uid: blt87d0fbec8f3cc5ca
---

# HMAC Signing

## HMAC Signing

**Hash-based Message Authentication Code** (**HMAC**) signing lets you sign your organization's webhook payloads with a secret key that belongs only to your organization. When a webhook is triggered, Contentstack adds an HMAC signature to the request so the receiving application can confirm the payload came from Contentstack and was not altered in transit.

By default, Contentstack signs webhook payloads with a single, platform-wide certificate, and consumers verify them using Contentstack's public key. HMAC signing replaces that shared model with a per-organization secret, giving you isolated trust boundaries and full control over your own signing key, including the ability to rotate it on your own schedule.

**Note:** HMAC Signing might not be enabled by default on all organizations. To enable it for your organization, reach out to our [support](mailto:support@contentstack.com) team.

## When to Use HMAC Signing

Enable HMAC signing when your organization needs tighter control over how webhook payloads are signed and verified. It is the right choice when:

-   You want a signing key that is unique to your organization rather than shared across the platform.
-   Your security or compliance policies require you to rotate signing keys periodically.
-   You need to revoke and replace a signing key quickly in response to a security event, without coordinating a platform-wide change.
-   You want to verify payload integrity using a shared secret your own team manages.

If you do not have these requirements, the default certificate-based signing continues to work and needs no configuration.

## Key Benefits

-   **Isolated signing keys**: Each organization signs with its own secret key, so a key used by one organization never affects another.
-   **Self-managed key rotation**: You generate and regenerate your signing key from the UI, on your own schedule.
-   **Zero-downtime rotation**: When you regenerate a key, the previous key stays valid for a grace period you choose, so existing consumers keep working while you update them.
-   **Replay protection**: Each payload is signed using HMAC-SHA256 together with a timestamp, which helps your application reject stale or replayed requests.

## How It Works

When HMAC signing is enabled, Contentstack signs each webhook payload with your organization's active secret key using the HMAC-SHA256 algorithm and adds the signature to the x-contentstack-hmac-signature header. The receiving application computes its own HMAC using the shared secret and compares it against the signature in the header. If they match, the request is authentic.

During a key rotation grace period, the header contains more than one v1 signature, one for the new key and one for the deprecated key. The receiving application should treat the request as valid if any one of the signatures matches.

**Note:** HMAC signing is configured at the organization level, but each webhook chooses its signing method individually. A webhook signs with HMAC only when its **Request Signing Method** is set to **HMAC Signing**. For details, refer to [Secure Your Webhooks](/docs/headless-cms/secure-your-webhooks).

## Prerequisites

Users with the Owner, Admin, Security Manager, or a custom role with the required permissions within Administration can view and change the HMAC signing configuration.

## Enable HMAC Signing

Enabling HMAC signing generates your organization's first signing key. No key exists until you turn the feature on.

To enable HMAC signing, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Navigate to **Administration** through the App Switcher.
2.  Click the **Security Configuration** tab and select **HMAC Signing**.
3.  Toggle the **Enable HMAC Signing** switch on. Contentstack generates your first secret key and marks it as active.
4.  Click **Show** to reveal the key, then **Copy** to copy it.
5.  Store the secret key in your application so it can verify incoming webhook signatures.

**Note:** The secret key is shown so you can copy it when you need it. Treat it like a password: store it securely and avoid revealing it on shared screens.

After enabling it, set the **Request Signing Method** to **HMAC Signing** on each webhook that should use it.

## Regenerate the Secret Key

Regenerate the secret key when you want to rotate it on schedule or replace it after a suspected exposure. Regenerating creates a new active key and starts a grace period during which the previous key remains valid, so existing consumers keep working while you update them.

To regenerate the secret key, perform the steps below:

1.  On the **HMAC Signing** screen, click **Regenerate**.
2.  In the **Regenerate HMAC Secret** dialog, select a **Secret expiration time**. This is how long the current key stays valid before it expires.
    -   Choose a grace period (for example, **24 hours**, the default) to give your consumers time to switch to the new key.
    -   Choose **Immediately** to revoke the current key the moment you regenerate.
3.  Review the warning, then click **Regenerate Secret**.
4.  Copy the new key and update your applications before the old key expires.

**Warning:** If you select **Immediately**, the current key stops working as soon as you regenerate it. Any consumer still using the old key fails verification until you update it with the new key. Use this option only when you need to revoke the old key right away.

**Note:** During the grace period, Contentstack signs payloads with both the new and the deprecated key, and the x-contentstack-hmac-signature header includes both signatures. Your application should accept the request if any signature matches. After the grace period ends, only the new key is used for signing.

## Disable HMAC Signing

Disable HMAC signing when your organization no longer wants to sign webhook payloads with its own secret key. When you disable it, webhooks that use HMAC signing fall back to the default certificate and keep working, but their payloads no longer carry an HMAC signature for consumers to verify.

To disable HMAC signing, perform the steps below:

1.  On the **HMAC Signing** screen, toggle the **Enable HMAC Signing** switch off.
2.  In the **Disable HMAC Signing** dialog, review the impact.
3.  Click **Disable** to confirm.

**Warning:** Disabling HMAC signing affects every webhook in your organization that uses it. Those webhooks switch to default signing, and any consumer that verifies HMAC signatures stops receiving them. Update your consumers before you disable HMAC signing.

## Important Notes

-   **Roles**: Users with the Owner, Admin, Security Manager, or a custom role with the required permissions can enable, regenerate, or disable HMAC signing.
-   **Algorithm and encoding**: Contentstack signs payloads using HMAC-SHA256 and sends the signature as a hexadecimal value in the x-contentstack-hmac-signature header.
-   **Use the raw request body**: Verify signatures against the exact raw request body you receive. Do not parse and re-stringify the JSON, change whitespace, or reorder fields, as any change to the payload causes verification to fail. The signed payload format is ${timestamp}.${raw\_request\_body}.
-   **Replay protection**: Validate the timestamp (t) in the signature header and reject requests older than your chosen tolerance, such as five minutes.
-   **Rotation limits**: To prevent abuse, the number of regenerations within a period is limited. Avoid regenerating repeatedly in a short window.

## Verify an HMAC Signature

The signature header has the following format, where t is the Unix timestamp used to generate the signature and each v1 is an HMAC-SHA256 signature:

```
x-contentstack-hmac-signature: t=1778729300,v1=<signature>,v1=<signature>
```

The example below verifies an incoming webhook signature in Node.js. Replace the secret with your organization's HMAC secret key. The function returns true if any signature in the header matches:

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

**Additional Resource**:

-   To learn about the other ways to secure webhook payloads, refer to [Secure Your Webhooks](/docs/headless-cms/secure-your-webhooks).
-   To choose a signing method when you create or edit a webhook, refer to [Create a Webhook](/docs/headless-cms/create-a-webhook).
