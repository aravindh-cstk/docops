---
title: "Serving Assets via Custom Domains"
description: "Serving Assets via Custom Domains"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/04-domains-dns-ssl/02-serving-assets-via-custom-domains
doc_type: faq
_cms_section_uid: cs0cde65547d489645
_cms_faq_uid: csb66575bb50b64c50
---

# Serving Assets via Custom Domains

Standard asset delivery utilizes default platform domains, which may not align with organizational branding requirements. This necessitates a technical configuration to serve asset public URLs through a custom branded domain.

**Root Cause**

Default platform URLs are used for standard asset delivery. Masking these with a custom domain requires additional network configurations, such as DNS or proxy layers.

**Resolution**

Two supported approaches exist for serving assets via a custom domain:

1.  **Implement a Web Proxy**: Configure a web proxy server to act as an intermediary that rewrites asset requests to utilize the custom domain.
2.  **Reverse Proxy Setup**: Implement a reverse proxy configuration to direct traffic from the custom domain to the platform's asset origin.
3.  **Configure CNAME Record**: Establish a CNAME record at the authoritative DNS provider to map the custom domain to the platform's asset delivery endpoint.
4.  **Refer to Documentation**: Consult official guides for specific reverse proxy configuration logic and DNS mapping details.

The issue is resolved when asset public URLs successfully resolve and serve content through the configured custom domain.
