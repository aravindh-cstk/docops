---
title: "SSL Certificate Errors After CDN Migration to Cloudflare"
description: "SSL Certificate Errors After CDN Migration to Cloudflare"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/063-ssl-certificate-errors-after-cdn-migration-to-cloudflare
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cscdd31bb7e7eade20
---

# SSL Certificate Errors After CDN Migration to Cloudflare

After a CDN migration, all subdomains of a custom domain return SSL certificate errors. Users receive SSL handshake failure messages and content cannot be delivered.

**Root Cause**

SSL certificate errors after a CDN migration to Cloudflare are typically caused by an incomplete certificate chain or misconfigured intermediate certificates on Cloudflare. During the CDN migration, the certificate provisioning process may not have completed correctly, leaving the intermediate certificate chain broken. This causes SSL handshake failures for all clients that do not already have the root certificate cached.

**Resolution**

1.  Contact Contentstack Support and report the SSL certificate errors, providing the affected domain(s) and a sample SSL error message.
2.  The CDA team will investigate the certificate chain on Cloudflare and re-issue or correct the intermediate certificate configuration.
3.  To verify the issue, use an SSL certificate checker tool (such as SSL Labs) to inspect the certificate chain for the affected domain.
4.  Do not attempt to manually modify DNS or certificate settings during investigation, as this can compound the issue.

After the certificate chain is corrected, verify using an SSL checker that the full chain is complete and test content delivery on the affected domain.
