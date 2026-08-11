---
title: "Validating Domain Ownership via CNAME Records"
description: "Validating Domain Ownership via CNAME Records"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/04-domains-dns-ssl/01-validating-domain-ownership-via-cname-records
doc_type: faq
_cms_section_uid: cs0cde65547d489645
_cms_faq_uid: cs1d36a74372e71230
---

# Validating Domain Ownership via CNAME Records

Incompatibility between the requested TXT record validation method and the specific environment workflow prevents successful domain ownership verification during the Go-Live process.

**Root Cause**

The domain validation workflow for certain edge configurations requires a CNAME record instead of a TXT record to successfully complete the Domain Control Validation (DCV) process.

**Resolution**

To validate domain ownership for the Launch project, the following DNS configuration must be implemented:

1.  **Identify Validation Type**: Confirm that the specific domain validation workflow requires a CNAME-based ACME challenge rather than a standard TXT record.
2.  **Configure CNAME Record**: Add a CNAME record at your authoritative DNS provider for the \_acme-challenge subdomain.
3.  **Point to Validation Endpoint**: Direct the CNAME record to the platform’s designated validation URL (e.g., \_acme-challenge.www.\[domain\].com CNAME www.\[domain\].com.\[unique-id\].dcv.cloudflare.com).
4.  **Refer to Documentation**: Consult the platform’s Go-Live instructions for the specific unique identifier and endpoint required for your custom domain.

The issue is resolved when the DNS configuration allows for proper domain validation and the SSL certificate provisions automatically.
