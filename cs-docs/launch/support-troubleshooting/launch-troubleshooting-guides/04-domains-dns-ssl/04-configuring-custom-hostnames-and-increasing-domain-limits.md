---
title: "Configuring Custom Hostnames and Increasing Domain Limits"
description: "Configuring Custom Hostnames and Increasing Domain Limits"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/04-domains-dns-ssl/04-configuring-custom-hostnames-and-increasing-domain-limits
doc_type: faq
_cms_section_uid: cs0cde65547d489645
_cms_faq_uid: cs65a5043bd8c68bbf
---

# Configuring Custom Hostnames and Increasing Domain Limits

Subdomain traffic is failing to reach a Launch application despite having valid CNAME records in a DNS provider. Additionally, the user is unable to add the necessary domains to the Launch UI due to reaching a project-level limit.

**Root Cause**

Launch requires every domain intended to receive traffic to be explicitly registered as a "Custom Hostname" in the UI. Furthermore, projects have a default cap on the number of domains allowed, which requires manual intervention to increase.

**Resolution**

1.  Log in to the Launch dashboard and select your project.
2.  Go to **Settings** > **Domains** and click **Add Custom Hostname**.
3.  Enter the subdomains (e.g., blog.axonius.com) to link them to your application.
4.  If you receive an error stating the domain limit has been reached, contact Contentstack Support to request a limit increase.
5.  Once the limit is raised, complete the addition of the domains.
6.  Verify that your DNS CNAME records point to the correct Launch target.

After the domains are added and the limit is increased, navigate to the subdomains in a web browser. If the traffic is correctly routed to the Launch application without "Domain Not Found" or limit errors, the issue is resolved.
