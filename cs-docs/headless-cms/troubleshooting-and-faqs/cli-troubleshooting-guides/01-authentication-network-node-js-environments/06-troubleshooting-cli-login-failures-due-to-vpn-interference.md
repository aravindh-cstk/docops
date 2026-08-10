---
title: "Troubleshooting CLI Login Failures Due to VPN Interference"
description: "Troubleshooting CLI Login Failures Due to VPN Interference"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/01-authentication-network-node-js-environments/06-troubleshooting-cli-login-failures-due-to-vpn-interference
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: csa61d176e029e769c
---

# Troubleshooting CLI Login Failures Due to VPN Interference

CLI authentication fails despite correct regional and account configurations, due to network interference from VPNs.

**Root Cause**

The failure is caused by VPN interference, which blocks authentication traffic, prevents proper network pathing, or enforces policies that prevent the CLI from connecting to the authentication service.

**Resolution**

1.  Verify that your configured Contentstack region matches your account settings.
2.  Ensure your CLI is updated to the latest available version.
3.  If authentication fails, temporarily disable your VPN to rule out network path or policy-based traffic blocks.

CLI authentication proceeds as expected once the VPN is disabled or the network path is cleared of interference. After completing these steps, attempt the CLI login again to verify the fix. If login still fails, inspect your firewall or corporate security settings for further network traffic restrictions.
