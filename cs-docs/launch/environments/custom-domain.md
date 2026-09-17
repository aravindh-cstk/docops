---
title: "Custom Domains"
description: "Learn how to create, deploy, and manage custom domains in Contentstack Launch."
url: /launch/custom-domain
uid: blt6d870761d3e3bea6
---

# Custom Domains

## Custom Domains

By default, Launch generates a unique URL of the form example.contentstackapps.com for every environment. Each environment is assigned to a unique subdomain at contentstackapps.com.

To make your site easy to access and remember, you need a human-friendly domain name. Contentstack Launch allows you to add custom domains to your environment. Follow the steps below to configure your custom domain.

**Note:** Custom subdomains must not exceed **255 characters** in total length, as per the [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) specification. For example, www.example.com, www.example.org, subdomain.example.in

**Tip:** After setting up a custom domain, the default \*.contentstackapps.com domain remains accessible. Launch automatically prevents this default domain from appearing in search results by applying an X-Robots-Tag: noindex header; no action needed on your part. For additional protection options, refer to the [Blocking Default Launch Domains From Google Search](/docs/developers/launch/blocking-default-launch-domains-from-google-search) guide.

## What You Will Learn

-   How to add a custom subdomain or apex domain to an environment.

-   How to configure redirection options for apex domains.

-   How to verify domain ownership and provision an SSL certificate.

-   How to read domain and certificate statuses, and how to delete a custom domain.


## Adding a Custom Domain

Contentstack Launch lets you add custom apex domains and subdomains to your environments for more flexible domain management.

Follow the steps below to add a custom domain to an existing domain. In this example, we will configure a subdomain for example.com.

1.  Click the **project card** to open your project from the Launch landing page.
2.  In the **Environments** screen, click an existing environment or create a new [environment](/docs/launch/environments/). We will add a custom domain to the Default environment for this tutorial.
3.  In the **Default** environment, click the **vertical ellipses** under **Actions** and then click **Settings** to go to the Settings page.

    ![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)

4.  In **Environments** under **Settings**, click **Domains**. ![Launch_Custom_Domains_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt570dfc27ac11fe8e/6916aad6d7b05e7b77e1bc70/Launch_Custom_Domains_Tab.png)
5.  Click the **\+ New Domain** button.![Launch_Custom_Domains_NewDomainFixed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73caf71ea217583a/6916b32b94c7931157f4c3b6/Launch_Custom_Domains_NewDomainFixed.png)
6.  In the **Domain Name** field, enter the subdomain name in the following format: <name>.<apex domain>  
    For example: www.example.com, domain.example.com  
    If you are creating an apex domain instead, enter only the <apex domain>, such as example.com  
    After entering the subdomain name, the **DNS Details** section gets auto-populated as shown below:![Launch_Custom_Domains_CreateModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfda392220b84bffe/6916aac5dab4da68bfbac7ed/Launch_Custom_Domains_CreateModal.png)The **Value** field displays the default subdomain.

    **Note:**

    -   If you create an **apex domain** instead, an **A record** appears in the **DNS** section, instead of the **CNAME record** shown above.
    -   When you create an **apex domain**, No Redirection is selected by default. To enable redirection, learn [how to add apex domains with redirects](/docs/launch/custom-domain#adding-apex-domains-with-redirects).

7.  Click the **Create Custom Domain** button.  
    You can see the newly created domain listed in the Domains page. ![Launch_Custom_Domains_CreatedDomain.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ff5c873ccef10f6/6916aac596cf168c0264b327/Launch_Custom_Domains_CreatedDomain.png)

## Adding Apex Domains with Redirects

Contentstack Launch supports **redirection-only services** for apex domains, following industry best practices. Rather than serving traffic directly from the apex domain (e.g., example.com), many top websites redirect users to a subdomain like www.example.com.

This approach offers several key advantages:

-   **Improved Security:** Segregating content delivery and domain management helps reduce the attack surface and enhances overall security.
-   **Enhanced Flexibility:** Easily switch infrastructure or hosting setups without impacting the user-facing subdomain.
-   **Consistent User Experience:** Delivering content via a subdomain ensures better structure, brand consistency, and trust.
-   **Improved Performance:** Subdomains support **CNAMEs**, enabling CDNs to route traffic across multiple geolocations for faster content delivery.
-   **Better Cookie Handling:** Cookies set on the apex domain apply to all subdomains, which can pose a **security risk in multi-tenant systems**. Redirecting helps isolate this behavior.
-   **SEO Benefits:** Redirecting to a single subdomain helps **avoid duplicate content issues**, supporting cleaner SEO practices.

In this setup, Launch ensures that all content is exclusively served from the designated subdomain, providing users with a seamless and efficient hosting solution for their websites.

To configure redirection for an apex domain, choose from the following options when [creating the domain](/docs/launch/custom-domain#adding-a-custom-domain):

-   **No Redirection:** This option allows you to add an apex domain without redirecting it to another subdomain or apex domain. Use this when you want the apex domain (e.g., example.com) to serve content directly.![Launch_Custom_Domains_NoRedirection.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b3d525aa23d8d5c/6916aac68cc78676c46b0384/Launch_Custom_Domains_NoRedirection.png)
-   **Add www.apex.com (subdomain) and redirect apex domain to it:** This option allows you to add an apex domain (e.g., example.com) and redirect it to a subdomain (e.g., www.example.com). As a result, traffic to the apex domain is redirected to the www subdomain, rather than being served directly from the apex domain.![Launch_Custom_Domains_Opt2Redirection.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4595c274f3702b0c/6916aad6dab4da59adbac7f1/Launch_Custom_Domains_Opt2Redirection.png)

    **Note:** When you select this option, two domains are created. An apex domain and a www subdomain.

-   **Custom Redirection:** This option allows you to add an apex domain (e.g., example.com) and redirect it to an existing subdomain (e.g., blog.example.com), or another apex domain within the same environment. ![Launch_Custom_Domains_CustomRedirection.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt450778099011d135/6916aac5d7b05e826de1bc6c/Launch_Custom_Domains_CustomRedirection.png)

    You can also choose a [redirection status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#redirection_messages) from the following options:

    -   **308**: Permanent Redirect
    -   **307**: Temporary Redirect
    -   **301**: Moved Permanently
    -   **302**: Found

## Choosing an SSL Certificate for Your Domain

By default, Launch automatically issues and manages an SSL certificate for every custom domain. If your organization requires a certificate from your own Certificate Authority (CA), you can upload one instead.

This choice appears in the **Add Domain** (and **Edit Domain**) modal, under **SSL Certificate**:

1.  Choose one of:

-   **Automatic (recommended)**: Launch issues and renew the certificate for you. Continue to Domain Ownership Verification, below.
-   **Custom certificate**: supply your own certificate, private key, and (if needed) intermediate certificates.

1.  If you select **Custom certificate**, three fields appear:

Each field also accepts a click on **Upload file** to select a .pem, .crt, .cer, .key, or .txt file, its contents loaded into the field, where you can still review or edit them before submitting.

### What these look like

Every field expects standard PEM format — a block starting with a \-----BEGIN...----- line and ending with a matching \-----END...----- line. The example below is illustrative only (a throwaway test certificate, shortened for readability) — your real files will be longer and provided by your CA, but the shape is the same:

**Certificate (PEM)**, for a domain named abc.example.com:

```
-----BEGIN CERTIFICATE-----
MIIBwDCCAWagAwIBAgIUDxcdOJ92uYUKPE4ZCD3S5W50KecwCgYIKoZIzj0EAwIw
JjEkMCIGA1UEAwwbTGF1bmNoIFRlc3QgSW50ZXJtZWRpYXRlIENBMCAXDTI2MDgz
...
YmMuZXhhbXBsZS5jb20wHQYDVR0OBBYEFFicWDerfGxx3rTD4EpX31H0ZFe2MB8G
-----END CERTIFICATE-----
```

**Private Key (PEM)**: the key generated together with that certificate's request:

```
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIOUGGqduUUtzQMWKq7SQ1e5fG2pqrxath69mOyZ7xRTvoAoGCCqGSM49
AwEHoUQDQgAEH2HRPPdRQDujYjU9nWfHiHqd0TL3AirHdeMGyAifPnDNt4Aninw5
2jnogi9JFXcKGEbcLxsz/9QAzJu+0KzPhw==
-----END EC PRIVATE KEY-----
```

**Intermediate certificates (PEM)**: the CA's own chain certificate, not specific to your domain:

```
-----BEGIN CERTIFICATE-----
MIIBsjCCAVmgAwIBAgIUdP8jXAc7ZtHacIOmZKPrStujmMcwCgYIKoZIzj0EAwIw
JjEkMCIGA1UEAwwbTGF1bmNoIFRlc3QgSW50ZXJtZWRpYXRlIENBMCAXDTI2MDgz
...
XG/6hqxSfKU2D8W1GFdvDEYb8b4CICsxFF0MhQB2qeoYr82PkKLStBAYE0Lx10pN
-----END CERTIFICATE-----
```

**Note:** If your certificate authority already gave you the full chain, your certificate and its intermediates concatenated into one file, you can paste that whole file into **Certificate** and leave **Intermediate certificates** empty; Launch reads the chain from whichever field you use.

![image (5).png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am3d7595bbcae54073/8e843bf44f15404f39eb9b34/image__5_.png?locale=en-us)![image (6).png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ama9ded99c2f63e9f3/c58343ed4c1212a48f365de1/image__6_.png?locale=en-us)

**Note:** Launch checks the certificate before saving it, that it's correctly formatted, that the private key matches it, that the chain is complete and in order, and that it isn't expired. If a check fails, an error notification names the specific reason.

To switch a domain back to Launch-managed certificates later, edit the domain, choose **Automatic (recommended)**, and save.

### What each error means

| **Message you may see** | **What to do** |
| --- | --- |
| The certificate is missing its intermediate certificates. Add the CA certificate chain so browsers can verify your domain. | Paste your CA's intermediate certificate(s) into the Intermediate certificates field. |
| The certificate chain is out of order. List the domain certificate first, followed by each issuing certificate. | Reorder so your certificate comes first, then each certificate that issued it. |
| The private key does not match the certificate. Check that both files belong to the same certificate. | Confirm you're pasting the key generated for this exact certificate. |
| The certificate could not be read. Make sure it is PEM formatted and was copied in full. (or the equivalent message for the private key) | Re-copy the full file, including the -----BEGIN and -----END lines. |
| This certificate has already expired. Upload a current certificate from your certificate authority. | Get a renewed certificate from your CA and upload it. |
| This certificate is not valid yet. Check its start date, or upload the currently active certificate. | Confirm you're uploading the certificate meant for right now, not one issued for a future date. |
| This certificate was not issued for this domain. Upload a certificate that covers it, either by name or with a matching wildcard. | Upload the certificate issued specifically for this domain (or a matching wildcard). |

**Note:** Renaming a domain that uses a custom certificate re-issues its SSL configuration, so you'll need to supply a certificate covering the new name before saving or switch the domain to Automatic first.

### Staying on top of renewal

Launch does not renew a custom certificate for you. When you add or update one, you will get a notification confirming it and stating its expiry date, and two more reminders as it approaches expiry, at 30 days and again at 14 days before it expires (Cloudflare's fixed thresholds; not adjustable), so you have time to renew with your CA and re-upload. A domain using a custom certificate is also marked in the domains list, so you can tell at a glance which ones you're responsible for renewing.

## Domain Ownership Verification and Automatic SSL Provisioning

Domain validation confirms your ownership or control of a domain. This helps prevent unauthorized use and ensures secure traffic routing through your platform. Contentstack Launch uses **TXT record validation** to verify domain ownership and DCV records to provision SSL certificates. This method is secure, easy to set up, and widely supported.

Use these methods **before adding A or CNAME records and routing traffic to Launch**, especially for **existing live sites migrating to Launch**.

| SSL Mode | Hostname CNAME Record | Certificate Validation Record (DCV) |
| --- | --- | --- |
| Automatic | Required | Required (for Let's Encrypt / ACME) |
| Custom Certificate | Required | Not Required |

After successfully creating an apex or subdomain, you must validate both the hostname and the associated SSL certificate. To do so, perform the following steps:

1.  Click the **vertical ellipses** under **Actions** for the domain you have added, and then click **Edit**.![Launch_Custom_Domains_Edit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3e1905cdb10a5cd/6916aac68cc78604786b0380/Launch_Custom_Domains_Edit.png)
2.  In the **DNS Details** section, perform the following steps to validate:
    -   **Hostname Validation Record**:

        1.  Locate the **Hostname Validation Record** section to view the TXT records required for validation.
        2.  Click the **copy** icon next to the **Name** and **Value** fields to copy the **TXT record** details.![Launch_Custom_Domains_HostnameValidation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7390e915f96aea66/6916aac6a582d786151acbdd/Launch_Custom_Domains_HostnameValidation.png)
        3.  Paste the copied details into your domain provider platform.

        Below are the documentation links to common DNS providers for adding **TXT** records.

        -   [Go-Daddy](https://www.godaddy.com/en-in/help/add-a-txt-record-19232)
        -   [Bluehost](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries#add)
        -   [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/#f)
    -   **Certificate Validation Record**:

        1.  Locate the **Certificate Validation Record** section.
        2.  Click the **copy** icon next to the **Name** and **Value** fields to copy the **DCV CNAME record** details.![Launch_Custom_Domains_CertificateValidation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3876040be43efb0d/6916aac5c53e5bc76fcb6a45/Launch_Custom_Domains_CertificateValidation.png)
        3.  Create a new **CNAME record** in your domain provider and add these DCV name and values.

        Below are the documentation links to common DNS providers for adding **DCV** records.

        -   [Go-Daddy](https://www.godaddy.com/en-in/help/add-a-cname-record-19236)
        -   [Bluehost](https://www.bluehost.com/blog/how-to-add-a-cname-record/)
        -   [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)
3.  After adding the records, check your domain status in the **Domain Status** section.

**Note:**

-   DNS changes may take up to **48 hours**, depending on your domain provider and your TTL settings.
-   Click the **Refresh** button at the top if the records are not visible.
-   Once you’ve added the **TXT** and **DCV** records, Launch automatically validates the hostname and provision the SSL certificate, updating the status to **Active**. If the process takes longer than expected, you can use the **Revalidate** option in the **Actions** menu for your domain to trigger the validation again.

After both the domain and certificate statuses are active, add an **A record** or **CNAME record** under **DNS Record** section with your DNS provider:

1.  In the **Edit** modal, locate the **DNS Record** section below the **Certificate Validation Record (DCV)** section.
2.  Copy the provided **Name** and **Value**, then paste them into your DNS provider's settings.![Launch_Custom_Domains_DNSRecord.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt607b64dd22df105d/6916aac6b04bebb7c3d0621f/Launch_Custom_Domains_DNSRecord.png)

**Note:** The **TXT record** will no longer be visible once your hostname status is active.

### Domain and Certificate Statuses:

-   **Active:** The custom domain has successfully completed validation and is active.
-   **Pending:** The custom domain is awaiting validation.
-   **Error:** The custom domain could not be validated. Review the DNS settings and try again.

    **Note:** Hover over the **Pending** or **Error** status to view the error message and error code in a tooltip. **Copy the message** for further troubleshooting.


**Note:** If your DNS is managed through a Cloudflare zone, an additional Orange-to-Orange (O2O) setup is required. The detailed steps for this configuration are outlined in the [Contentstack Go-Live Guide](/docs/launch/go-live-guide), which can be referred for the implementation guidance.

A domain using a custom certificate also shows a document icon next to its status. Hovering it displays: Custom certificate - renewal is manual, you'll need to re-upload it before it expires.

## Delete a Custom Domain

Launch allows you to delete a custom domain that you no longer require.

Follow the steps below to delete a custom domain:

1.  In the **Environments** screen, go to the environment for which you want to delete the domain.
2.  In the selected environment, click the **vertical ellipses** under **Actions**, and then click **Settings**.
3.  In the **Settings** page, click **Domains** under **Environments**.
4.  In the selected domain, click the **vertical ellipses** under **Actions** and then click **Delete**.
5.  A confirmation modal appears. Click **Yes, Delete** to confirm. ![Launch_Delete_Domain.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0069c042de00a96d/696472245913b60008624cb7/Launch_Delete_Domain.png)

**Warning:** After deleting this domain, remove all related DNS records from your DNS provider to keep your domain secure.
