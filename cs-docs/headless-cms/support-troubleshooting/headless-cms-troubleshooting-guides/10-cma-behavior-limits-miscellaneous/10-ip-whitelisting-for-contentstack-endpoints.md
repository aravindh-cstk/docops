---
title: "IP Whitelisting for Contentstack Endpoints"
description: "IP Whitelisting for Contentstack Endpoints"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/10-ip-whitelisting-for-contentstack-endpoints
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csb7b7fc339b848fce
---

# IP Whitelisting for Contentstack Endpoints

A customer needs to whitelist Contentstack IP addresses on their firewall or network to allow outbound CMA and CDA requests. The AWS North America IP list does not resolve the connectivity issue.

**Root Cause**

Contentstack operates on multiple cloud providers and regions. If a stack is hosted on Azure North America (as opposed to AWS North America), the AWS IP ranges will not be the correct ones to whitelist. The correct IP ranges depend on which cloud and region the stack is provisioned on.

**Resolution**

1.  Identify the cloud provider and region for the stack from the Contentstack dashboard URL or the stack's API endpoint URL (for example, azure-na indicates Azure North America).
2.  Request the appropriate IP ranges from Contentstack Support based on the identified region:

-   AWS North America: api.contentstack.io / cdn.contentstack.io
-   Azure North America: azure-na-api.contentstack.com / azure-na-cdn.contentstack.com
-   AWS EU: eu-api.contentstack.com / eu-cdn.contentstack.com
-   Azure EU: azure-eu-api.contentstack.com / azure-eu-cdn.contentstack.com

4.  After receiving the correct IP ranges, update the firewall whitelist and retest connectivity.

After updating the whitelist with the correct region's IP ranges, confirm that API calls to the Contentstack endpoint succeed without connection errors.
