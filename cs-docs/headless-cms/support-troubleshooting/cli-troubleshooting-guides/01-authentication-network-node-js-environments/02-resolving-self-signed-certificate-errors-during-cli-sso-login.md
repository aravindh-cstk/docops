---
title: "Resolving Self-Signed Certificate Errors During CLI SSO Login"
description: "Resolving Self-Signed Certificate Errors During CLI SSO Login"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/02-resolving-self-signed-certificate-errors-during-cli-sso-login
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: csfaebd04036e45d12
---

# Resolving Self-Signed Certificate Errors During CLI SSO Login

A "self-signed certificate in certificate chain" error occurs during CLI authentication via SSO, preventing successful login.

**Root Cause**

The error is caused by a failure in the environment-side trust path, typically resulting from corporate proxies, SSL inspection, or missing enterprise root Certificate Authorities (CAs).

**Resolution**

1.  Work with your internal IT or security team to add the enterprise root CA certificate to your system's trusted store.
2.  Alternatively, as a temporary workaround, disable SSL verification by running the command: npm config set strict-ssl false.

Authentication proceeds successfully once the certificate trust path is established or SSL verification is temporarily disabled. After completing these steps, attempt the CLI login again. If the issue persists, escalate with your system's security configuration details and the specific error output.
