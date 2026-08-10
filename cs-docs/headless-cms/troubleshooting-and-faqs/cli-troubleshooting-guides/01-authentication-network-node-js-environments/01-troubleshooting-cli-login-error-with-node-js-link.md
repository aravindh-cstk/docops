---
title: "Troubleshooting CLI Login Error with Node.js  link"
description: "Troubleshooting CLI Login Error with Node.js  link"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/01-authentication-network-node-js-environments/01-troubleshooting-cli-login-error-with-node-js-link
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs6a2bcc15fdbd84d4
---

# Troubleshooting CLI Login Error with Node.js  link

CLI authentication fails with a "Login Error {}" response despite the web portal authentication succeeding.

**Root Cause**

A compatibility issue exists between the Contentstack CLI and Node.js versions 22.13.1 and 22.14.1, which causes authentication failures.

**Resolution**

1.  Verify your current Node.js version using the command node -v.
2.  Downgrade to Node.js 20.18.
3.  Re-attempt your CLI login.

CLI authentication completes successfully after downgrading to the supported Node.js version. After completing these steps, attempt to authenticate into the CLI again. If the issue persists, escalate with your CLI version and current environment details.
