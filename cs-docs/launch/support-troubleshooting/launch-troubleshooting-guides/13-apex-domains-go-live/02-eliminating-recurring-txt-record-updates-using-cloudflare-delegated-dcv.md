---
title: "Eliminating Recurring TXT Record Updates Using Cloudflare Delegated DCV"
description: "Eliminating Recurring TXT Record Updates Using Cloudflare Delegated DCV"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/13-apex-domains-go-live/02-eliminating-recurring-txt-record-updates-using-cloudflare-delegated-dcv
doc_type: faq
_cms_section_uid: cs700e25dad612ade1
_cms_faq_uid: cs632664cc2453f11b
---

# Eliminating Recurring TXT Record Updates Using Cloudflare Delegated DCV

TXT records used for SSL certificate domain control validation (DCV) must be updated manually each time the certificate renews. For organizations with many domains, this creates a recurring operational burden.

**Root Cause**

Standard TXT-based DCV requires a new unique TXT record value each time a certificate renews. Cloudflare’s Delegated Domain Control Validation (DCV) feature eliminates this by allowing the platform to complete DCV automatically using a CNAME delegation, removing the need for recurring manual TXT record updates.

**Resolution**

1.  At your authoritative DNS provider, add a CNAME record for the \_acme-challenge subdomain of each affected domain, pointing it to the Cloudflare DCV endpoint provided by the Launch team. Example: \_acme-challenge.www.example.com CNAME www.example.com.<unique-id>.dcv.cloudflare.com
2.  Contact Contentstack Support to obtain the specific unique-id value for your domain from the Launch team.
3.  Once the CNAME record is in place, Cloudflare will handle DCV automatically on each certificate renewal without requiring further manual TXT record changes.
4.  Verify that SSL certificates for the affected domains auto-renew without generating DCV validation errors in the Launch dashboard.

The issue is resolved when SSL certificates renew automatically and no manual TXT record updates are required at renewal time.
