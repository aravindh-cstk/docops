---
title: "Fixing Module Resolution Errors When Using Turbopack in Launch"
description: "Fixing Module Resolution Errors When Using Turbopack in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/10-node-js-frameworks-runtime/02-fixing-module-resolution-errors-when-using-turbopack-in-launch
doc_type: faq
_cms_section_uid: cs0cbe8f9b2482f217
_cms_faq_uid: cs648a38996ade596c
---

# Fixing Module Resolution Errors When Using Turbopack in Launch

A Launch deployment fails during the build phase with module not found or module resolution errors. The project builds successfully locally but fails in the Launch environment. The build command does not include the Turbopack flag.

**Root Cause**

When a Next.js project uses path aliases (configured via tsconfig.json or jsconfig.json) and Turbopack as the bundler, the build command must explicitly include the --turbo flag for Launch to resolve module paths correctly. Without this flag, the build environment may use a different resolution strategy that does not honor the path alias configuration.

**Resolution**

1.  Verify that path aliases are defined in tsconfig.json or jsconfig.json and that the project uses Turbopack as the bundler (indicated by next dev --turbo in local scripts).
2.  Update the Launch build command to include the --turbo flag: next build --turbo.
3.  Validate that the alias paths configured in tsconfig.json correspond to the actual directory structure within the build output directory.
4.  Trigger a new deployment with the updated build command and review the deployment logs to confirm module resolution succeeds.

The issue is resolved when the build completes without module resolution errors and the deployed application renders correctly in the Launch environment.
