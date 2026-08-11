---
title: "Fixing Deployment Failures Caused by SSH Key Formatting (CF001 Error)"
description: "Fixing Deployment Failures Caused by SSH Key Formatting (CF001 Error)"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/09-advanced-builds-deployments/05-fixing-deployment-failures-caused-by-ssh-key-formatting-cf001-error
doc_type: faq
_cms_section_uid: csd47552ea36a54ebe
_cms_faq_uid: cs178c0c473d4dfbae
---

# Fixing Deployment Failures Caused by SSH Key Formatting (CF001 Error)

A Launch deployment fails with a CF001 error or a “Deployment failed: Please try to redeploy the site” message. The error is often associated with SSH key configuration for private repository access or server-side deployment settings.

**Root Cause**

CF001 deployment errors can occur when an SSH private key has been pasted into the Launch environment variable field with incorrect formatting, specifically, missing or broken line breaks. The PEM format of SSH private keys requires precise line breaks, and a key pasted as a single line or with escaped newlines will be rejected during the deployment authentication step.

**Resolution**

1.  Navigate to the affected Launch environment settings and locate the SSH private key environment variable.
2.  Click the Form Edit mode (or equivalent multi-line input option) for the SSH key field rather than the standard single-line text input.
3.  Paste the SSH private key in Form Edit mode, ensuring that all line breaks within the PEM block are preserved correctly (each line of the key on its own row).
4.  Save the updated environment variable and trigger a new deployment.
5.  Monitor the deployment logs to confirm the SSH key is accepted and the deployment progresses past the authentication step.

The issue is resolved when the deployment completes successfully without CF001 errors and the live environment reflects the deployed changes.
