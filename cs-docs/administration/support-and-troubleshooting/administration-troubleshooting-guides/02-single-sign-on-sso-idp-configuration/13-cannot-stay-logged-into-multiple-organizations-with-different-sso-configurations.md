---
title: "Cannot Stay Logged Into Multiple Organizations With Different SSO Configurations"
description: "Cannot Stay Logged Into Multiple Organizations With Different SSO Configurations"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/13-cannot-stay-logged-into-multiple-organizations-with-different-sso-configurations
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cse346c337b1d850bf
---

# Cannot Stay Logged Into Multiple Organizations With Different SSO Configurations

Users who belong to two organizations with different SSO configurations may be unable to use the Org Switcher to move between both in the same browser session.

**Root Cause**

Contentstack manages sessions using browser cookies scoped to the application hostname (for example, app.contentstack.com). When two organizations use different SSO configurations but share the same hostname, only one active session is possible per browser at a time, so the Org Switcher cannot maintain simultaneous sessions across both.

**Resolution**

The Org Switcher does not support two concurrent SSO sessions on a shared hostname.

1.  Use separate browser sessions, such as a second browser or an incognito window, to access each organization at the same time if simultaneous access is required.
2.  Contact your Customer Success Manager to discuss a dedicated hostname or alternative configuration if this limitation affects regular workflows.

Confirm that each organization can be accessed individually, and that simultaneous access across both is possible using separate browser sessions.
