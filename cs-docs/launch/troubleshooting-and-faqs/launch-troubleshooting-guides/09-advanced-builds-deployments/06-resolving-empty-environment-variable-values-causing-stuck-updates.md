---
title: "Resolving Empty Environment Variable Values Causing Stuck Updates"
description: "Resolving Empty Environment Variable Values Causing Stuck Updates"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/09-advanced-builds-deployments/06-resolving-empty-environment-variable-values-causing-stuck-updates
doc_type: faq
_cms_section_uid: csd47552ea36a54ebe
_cms_faq_uid: cs0cb12d197da6b9d5
---

# Resolving Empty Environment Variable Values Causing Stuck Updates

Updating an environment variable in a Launch project - for example, clearing its value to make it empty - causes the update process to get stuck without displaying an error message or completing. The environment variable update spinner runs indefinitely.

**Root Cause**

Launch does not support empty string values for environment variables. When a variable value is cleared and saved, the platform attempts to process an empty value, which causes the update operation to hang rather than returning a clear validation error.

**Resolution**

1.  If an environment variable is no longer needed, delete it entirely from the environment variables list rather than clearing its value.
2.  If a placeholder value is required, set a non-empty string (such as a space, a zero, or a placeholder like DISABLED) that the application can handle appropriately.
3.  If the update is already stuck, refresh the page to cancel the pending operation, then either delete the variable or set it to a non-empty value.

The issue is resolved when the environment variable is successfully deleted or updated to a valid non-empty value, and the Launch environment reflects the intended configuration.
