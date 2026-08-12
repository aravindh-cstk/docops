---
title: "Managing SSL Provisioning and Redirections for Large Domain Sets"
description: "Managing SSL Provisioning and Redirections for Large Domain Sets"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/04-domains-dns-ssl/03-managing-ssl-provisioning-and-redirections-for-large-domain-sets
doc_type: faq
_cms_section_uid: cs0cde65547d489645
_cms_faq_uid: cs685fd5c252010960
---

# Managing SSL Provisioning and Redirections for Large Domain Sets

The inability to effectively provision SSL certificates and manage redirections across a large volume of domains can lead to site unavailability and certificate provisioning failures.

**Root Cause**

Attempting to manage a very large set of domains under a single service can exceed standard manageability thresholds, complicating the SSL SAN (Subject Alternative Name) update process and certificate issuance.

**Resolution**

1.  **Segment Domain Groups**: Split large sets of domains into smaller, manageable groups across separate services to facilitate better processing.
2.  **Configure Service Redirections**: Set up the necessary redirections between the split services to ensure all traffic points to the primary domain.
3.  **Implement CNAME Records**: Add the required CNAME records for each domain at the authoritative DNS provider to trigger validation.
4.  **Automate SSL Provisioning**: Once CNAMEs are verified, allow the platform to automatically provision certificates for the newly added domains.

The issue is resolved when all domains are successfully added, redirections are functional, and SSL certificates have provisioned automatically across both groups.
