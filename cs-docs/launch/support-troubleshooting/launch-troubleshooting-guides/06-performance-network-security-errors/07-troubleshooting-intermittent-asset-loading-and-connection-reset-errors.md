---
title: "Troubleshooting Intermittent Asset Loading and Connection Reset Errors"
description: "Troubleshooting Intermittent Asset Loading and Connection Reset Errors"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/06-performance-network-security-errors/07-troubleshooting-intermittent-asset-loading-and-connection-reset-errors
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: cs19e8ba5e1fa4f045
---

# Troubleshooting Intermittent Asset Loading and Connection Reset Errors

A website experiences intermittent application errors such as net::ERR\_INCOMPLETE\_CHUNKED\_ENCODING and net::ERR\_CONNECTION\_RESET. These errors prevent static assets from loading completely, even though the site remains functional on the default platform-provided domain.

**Root Cause**

When errors are restricted to a custom domain and not reproducible on the default domain, the root cause is typically located in intermediary network layers, such as a user-managed proxy, Netscaler, or load balancer.

**Resolution**

1.  Verify if the issue persists on the default platform domain.
2.  If the default domain is unaffected, investigate the configuration of any managed proxies or load balancers through which the custom domain traffic is routed.
3.  Review proxy and load balancer settings to ensure they are not prematurely terminating connections or mishandling chunked encoding.

The issue is resolved when static assets load consistently across all domains and the connection reset errors no longer appear during site navigation.
