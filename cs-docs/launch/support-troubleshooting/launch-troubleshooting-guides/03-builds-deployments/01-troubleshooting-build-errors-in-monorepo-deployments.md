---
title: "Troubleshooting Build Errors in Monorepo Deployments"
description: "Troubleshooting Build Errors in Monorepo Deployments"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/03-builds-deployments/01-troubleshooting-build-errors-in-monorepo-deployments
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: cs573938e1306e5b69
---

# Troubleshooting Build Errors in Monorepo Deployments

Build failures can occur when attempting to deploy an application to Launch from a monorepo setup. The deployment fails during the build phase, preventing the application from going live.

**Root Cause**

Build failures in monorepos are often caused by missing shared dependencies in the configuration files or an incorrectly formatted build command that fails to target the specific project folder.

**Resolution**

1.  Ensure the build command correctly targets the intended project folder using the appropriate filter flags.
2.  Identify if any storefront files import logic from shared internal packages.
3.  Add any missing internal shared packages to the project's dependency list.

Check the **Deployment Logs** in the Launch dashboard for the new build attempt. If the build completes successfully and the "Deployment Succeeded" message appears, the issue is resolved.
