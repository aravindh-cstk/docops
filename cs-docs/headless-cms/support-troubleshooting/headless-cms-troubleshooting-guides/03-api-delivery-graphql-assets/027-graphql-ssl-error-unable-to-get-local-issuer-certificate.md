---
title: "GraphQL SSL Error: Unable to Get Local Issuer Certificate"
description: "GraphQL SSL Error: Unable to Get Local Issuer Certificate"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/027-graphql-ssl-error-unable-to-get-local-issuer-certificate
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs0d99dc4f0d1f1bee
---

# GraphQL SSL Error: Unable to Get Local Issuer Certificate

GraphQL API requests fail with an SSL error: “unable to get local issuer certificate.” The error occurs on the client side and prevents any successful connection to the Contentstack GraphQL endpoint.

**Root Cause**

This error is client-side and is not caused by a change on Contentstack’s infrastructure. Common causes include:

-   A corporate proxy that intercepts HTTPS traffic and presents its own certificate, which the client does not trust
-   An outdated version of Node.js or the HTTP client library with an incomplete or outdated CA certificate bundle
-   Missing or improperly configured CA certificates in the runtime environment

**Resolution**

1.  Test the request using cURL to isolate whether the issue is environment-specific: curl -v https://graphql.contentstack.com
2.  Update Node.js to the latest stable version to ensure the CA certificate bundle is current.
3.  If a corporate proxy is in use, obtain the proxy’s CA certificate and add it to the trusted certificate store of the runtime environment.

After updating the runtime environment and CA certificates, retry the GraphQL request. If the SSL error no longer appears and the connection succeeds, the certificate trust chain is correctly configured.
