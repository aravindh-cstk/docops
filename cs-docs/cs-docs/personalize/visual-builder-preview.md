---
title: "[Personalize] - Visual Builder & Preview"
description: Troubleshooting issues related to the Personalize Visual Builder and Preview, including editing failures, non-interactive shared preview links, and CDA personalization limits.
url: /personalize/visual-builder-preview
product: Contentstack Personalize
doc_type: troubleshooting
audience:
  - developers
  - content-managers
  - implementers
version: unknown
last_updated: 2026-04-08
---

# [Personalize] - Visual Builder & Preview

This page covers common troubleshooting scenarios for Contentstack Personalize Visual Builder and Preview, intended for developers and implementers diagnosing Visual Builder editing issues, shared preview link behavior, and experience delivery limitations via the CDA.

## 1. Unable to Edit Entries in Visual Builder

### Summary
Editing entries within the Visual Builder interface may fail to function correctly. This issue prevents users from restoring or using full editing capabilities while working in the interface.

### Root Cause
This is typically caused by a version mismatch in the initialization method. Using an outdated version of the Live Preview SDK leads to compatibility failures within the Visual Builder.

### Resolution
- Update the Live Preview SDK to the latest available version.
- Verify that the init method in your code is aligned with the current implementation requirements.

### Verification
After updating the SDK and the init method, open the Visual Builder and attempt to edit an entry. If the editing functionality works as expected, the issue is resolved.

## 2. Non-interactive Elements in Shared Preview Links

### Summary
When loading a shared preview link, interactive page elements—such as accordions, modals, or links—may become non-functional. This prevents stakeholders from fully testing the user experience within the preview context.

### Root Cause
This issue is generally caused by external environment or public link (publink) configurations that interfere with client-side script execution, rather than a defect within Contentstack.

### Resolution
- Verify if the shared URL is a valid public link and ensure it is loading successfully.
- Coordinate with your development team to ensure the sandbox environment is configured to support interactive elements.
- Check the preview link access settings to ensure all required scripts and styles are permitted to load.

### Verification
Navigate to the shared preview link and attempt to trigger an interactive element, such as a modal. If these elements function correctly, the issue is resolved.

## 3. Visual Builder Experiences Failing to Apply Due to CDA Personalization Limits

### Summary
Active experiences created in the Visual Builder may fail to apply to a live website if the project exceeds the established personalization limits within the Content Delivery API (CDA). This results in only top-priority variants being displayed, while others are ignored during delivery.

### Root Cause
The CDA has a hard cap on the number of active experiences allowed per request. Every experience passed in a request counts toward this limit (previously set to 5), regardless of whether a specific entry has a personalized variant defined for it. When a project contains more experiences than this cap, the additional variants are not rendered.

### Resolution
- Review your project configuration to determine the total number of active experiences requested via the CDA.
- Confirm if the total number of experiences exceeds the current system limit of 5.
- Submit a request to Contentstack support to increase the personalization limit for your specific project (e.g., increasing the limit to 10).

### Verification
Once the limit has been increased, reload the target page. If all active experiences are correctly evaluated and visible on the site and within the Visual Builder, the issue is resolved.

## Common questions

### How do I know if my Live Preview SDK version is causing Visual Builder editing issues?
If editing fails in the Visual Builder and your implementation uses an older Live Preview SDK or an init method that doesn’t match current requirements, updating both is the recommended fix.

### Why do interactive elements break only in shared preview links?
Shared preview links can be affected by external environment or public link (publink) configurations that block or interfere with client-side scripts, rather than an issue in Contentstack itself.

### What happens when the CDA personalization limit is exceeded?
Only top-priority variants are displayed, and additional experiences beyond the cap are ignored during delivery.

### How can I increase the CDA personalization limit for my project?
Submit a request to Contentstack support to increase the personalization limit for your specific project (for example, from 5 to 10).