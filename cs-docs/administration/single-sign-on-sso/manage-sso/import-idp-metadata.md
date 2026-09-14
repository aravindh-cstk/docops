---
title: "Import IdP Metadata"
description: "Configure an SSO connection by importing your identity provider's SAML metadata from a URL or an XML file, instead of entering each field manually."
url: /administration/import-idp-metadata
---

# Import IdP Metadata

## Import IdP Metadata

When you configure a single sign-on (SSO) connection, Contentstack needs two Security Assertion Markup Language 2.0 (SAML 2.0) details from your identity provider (IdP): the sign-in URL and the signing certificate. You can provide these details in three ways.

-   **Metadata URL**: Enter your IdP's metadata endpoint, and Contentstack reads and parses the details.
-   **Metadata XML**: Upload your IdP's metadata file, and Contentstack parses the details.
-   **Manual entry**: Fill in each field by hand.

Importing metadata removes the copy-and-paste steps of manual entry and reduces configuration errors.

**Note:** You provide these details in **Step 2: IdP Configuration** of the SSO wizard. Import from a metadata URL or an XML file to fill the fields automatically, or enter them manually. Whichever approach you use, review the fields before you save the connection.

## What Import Fills In

Both import methods read the same values from your IdP's metadata:

| Value | Where it goes |
| --- | --- |
| Sign-in URL | The **Single Sign-On URL** field. Contentstack prefers the HTTP-POST binding, and falls back to the first sign-on service in the file. |
| Signing certificate | The **Certificate** field. Contentstack prefers the certificate marked for signing, and falls back to the first certificate in the file. |
| Certificate expiry | Shown next to the **Certificate** field. |

Contentstack also shows your IdP's entity ID on the review screen for reference. This value is not written into the connection, because Contentstack's own entity ID is fixed and is not affected by import.

**Note:** IdP metadata does not carry the **Signature Algorithm** or the **Enable SAML Encryption** setting. Set both by hand after you import, whichever method you use.

## When to Use Each Method

-   **Metadata URL** is the fastest path when your IdP exposes a live metadata endpoint, as Okta, Microsoft Entra ID, OneLogin, and Ping Identity do. Contentstack reads the endpoint from your browser, so the endpoint has to be reachable from the machine you are working on, and it has to allow browser requests that come from another site. Many IdPs do not allow those requests, which is why the XML method exists.
-   **Metadata XML** works in every case where the URL method does not, including on-premises Active Directory Federation Services (AD FS), legacy IdPs, endpoints behind a corporate firewall, and endpoints that reject cross-site browser requests. If the URL method fails for any reason, download the XML from your IdP and use this method instead.
-   **Manual entry** is the fallback for IdPs that provide no structured metadata. Use it only when neither of the other methods applies.

## Prerequisites

-   The organization [owner](/docs/headless-cms/types-of-roles#owner) role, a security manager role, or a custom role with SSO write permissions in your Contentstack organization.
-   An SSO connection in progress. To start one, refer to [Set Up SSO in Contentstack](/docs/administration/set-up-sso-in-contentstack).
-   Your IdP's metadata URL, or its metadata XML file, depending on the method you choose.

## Import Metadata from a URL

To configure the connection from a metadata URL, perform the steps below:

1.  In **Step 2: IdP Configuration**, enter your IdP's metadata endpoint in the metadata URL field.

2.  Click **Fetch**.

    Contentstack checks the URL format, reads the metadata, and parses it.

3.  Review the parsed values on the review screen. The screen shows your IdP's entity ID, the sign-in URL, the certificate, and the file name Contentstack uses for the certificate, which you can edit.

4.  Click **Populate Fields** to apply the values to the connection form.

5.  Set the fields that IdP metadata does not include, **Signature Algorithm** and **Enable SAML Encryption**.

6.  Edit any imported value if you need to override it, and then click **Save**.


**Note:** The import fails if the metadata does not contain both a sign-in URL and a certificate. Contentstack does not partially apply an import.

**Note:** Importing metadata is a one-time action that fills in the form. Contentstack does not keep the metadata URL, and there is no way to re-fetch it later. When your IdP rotates its signing certificate or changes its sign-in URL, import the metadata again or update the fields by hand.

## Import Metadata from an XML File

To configure the connection from a metadata XML file, perform the steps below:

1.  In **Step 2: IdP Configuration**, open the metadata XML uploader, and either drag your IdP's metadata file onto it or browse for the file.

    **Note:** The file must be a .xml file. Contentstack rejects anything else, and rejects an XML file that does not contain the SAML metadata elements it needs, which are EntityDescriptor and IDPSSODescriptor.

2.  Review the parsed values on the review screen, which is the same screen the URL method uses.

3.  Click **Populate Fields** to apply the values to the connection form.

4.  Set the fields that IdP metadata does not include, **Signature Algorithm** and **Enable SAML Encryption**.

5.  Edit any imported value if you need to override it, and then click **Save**.


The example below shows the structure Contentstack reads. Your IdP's file contains more elements than this, which is expected. Contentstack reads the parts it needs and ignores the rest.

```
<?xml version="1.0" encoding="UTF-8"?><EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://idp.example.com/saml/metadata"><IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol" WantAuthnRequestsSigned="false"><KeyDescriptor use="signing"><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><X509Data><X509Certificate>MIIC...REPLACE_WITH_YOUR_CERT...IDAQAB</X509Certificate></X509Data></KeyInfo></KeyDescriptor><NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat><SingleSignOnServiceBinding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"Location="https://idp.example.com/saml/sso"/></IDPSSODescriptor></EntityDescriptor>
```

## Resolve Metadata Errors

| Symptom | Cause | What to do |
| --- | --- | --- |
| Fetch fails immediately, with no error returned from the IdP | Your IdP's metadata endpoint does not allow requests that come from another site in a browser. This is the most common reason a metadata URL fails, and it is a setting on the IdP, not a problem with the URL. | Download the metadata XML from your IdP and use the XML method instead |
| Fetch returns an error status | The endpoint rejected the request, or the URL points to the wrong resource | Confirm the URL, open it directly in your browser to check that it returns metadata, and retry |
| Fetch cannot reach the endpoint | The endpoint is not reachable from the machine you are working on, for example an internal URL behind a corporate network | Use the XML method, or retry from a machine that can reach the endpoint |
| Invalid URL format | The entered value is not a valid URL | Correct the URL and fetch again |
| File rejected on upload | The file is not XML, or does not contain the EntityDescriptor and IDPSSODescriptor elements | Export the metadata again from your IdP, and confirm you are uploading your IdP's metadata file rather than a service provider metadata file |
| Import reports missing details | The metadata contains no sign-in URL, no certificate, or neither | Confirm the file is your IdP's SAML 2.0 metadata, or enter the details manually |

**Note:** If your metadata lists more than one sign-on service or more than one certificate, Contentstack picks the HTTP-POST sign-on service and the signing certificate. If the file marks neither, it picks the first of each, which may not be the one you want. Check the imported values on the review screen before you populate the fields.

## Certificate Rotation

A connection stores one signing certificate. Contentstack does not track your IdP's metadata after an import, and does not pick up a new certificate on its own.

**Warning:** When your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through this connection fails until you upload the new certificate. Coordinate the change with your IdP team and update the connection at the same time the IdP switches, rather than waiting for the current certificate to expire.

**Additional Resource:** To provide your IdP with Contentstack's service provider metadata in return, refer to [Download Contentstack (SP) Metadata](/docs/administration/download-sp-metadata).
