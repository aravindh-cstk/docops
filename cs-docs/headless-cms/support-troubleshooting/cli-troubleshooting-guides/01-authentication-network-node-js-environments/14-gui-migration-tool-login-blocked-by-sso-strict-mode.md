---
title: "GUI Migration Tool Login Blocked by SSO Strict Mode"
description: "GUI Migration Tool Login Blocked by SSO Strict Mode"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/14-gui-migration-tool-login-blocked-by-sso-strict-mode
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs4be8a1a2fbdc061e
---

# GUI Migration Tool Login Blocked by SSO Strict Mode

Login to the GUI migration tool was blocked because it requires a standard Contentstack username and password, and the organization uses SSO without a Contentstack password.

**Root Cause**

Organizations with SSO Strict Mode enabled prevent password-based logins entirely, which blocks access to the migration tool since it doesn't yet support SSO authentication.

**Resolution**

1.  Preferred: create a separate non-SSO user account with a standard password dedicated to migration tasks. This affects only that one account and doesn't change SSO enforcement for anyone else in the organization.
2.  Alternative, only if a separate account isn't workable: temporarily disable SSO Strict Mode so the user can set a standard password, then log in. This removes password-login enforcement organization-wide, not just for one user, so treat it as a temporary exception.
3.  If Strict Mode was disabled, re-enable it immediately once the migration work is complete.
