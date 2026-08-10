---
title: "Troubleshooting Authentication Errors During CLI Stack Operations"
description: "Troubleshooting Authentication Errors During CLI Stack Operations"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/01-authentication-network-node-js-environments/05-troubleshooting-authentication-errors-during-cli-stack-operations
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: csea9a36c5b41cfe0e
---

# Troubleshooting Authentication Errors During CLI Stack Operations

CLI commands fail with authentication errors during stack operations.

**Root Cause**

The failure is caused by an invalid, expired, revoked, or incorrectly generated authentication token that lacks the necessary permissions to execute the requested command.

**Resolution**

1.  Verify that your current Management Token or authentication token is valid and has not expired.
2.  Generate a new Management Token if you suspect the existing token is invalid, revoked, or lacks necessary permissions.
3.  Update your CLI configuration with the new token using csdx auth:tokens:add.
4.  Re-run the command to confirm successful authentication.

CLI commands execute successfully once a valid token with appropriate permissions is configured. After completing these steps, attempt your stack operations again to verify that the authentication error is resolved. If the issue persists, ensure that the newly generated token has the correct scope and permissions assigned within the stack settings.
