---
title: "Fixing Deployment Failures Caused by Environment Variable Formatting"
description: "Fixing Deployment Failures Caused by Environment Variable Formatting"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/03-builds-deployments/02-fixing-deployment-failures-caused-by-environment-variable-formatting
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: cs7016aed28fdc3aa3
---

# Fixing Deployment Failures Caused by Environment Variable Formatting

A deployment may succeed in one environment (such as Development) but fail in another (such as Staging) using the same code branch. These discrepancies often prevent specific environments from reflecting the latest updates.

**Root Cause**

Environment-specific build failures are frequently caused by improperly formatted environment variables, such as values containing unnecessary quotation marks or stray spaces that the build process cannot parse correctly.

**Resolution**

Inspect environment variable values for formatting errors. Remove any enclosing quotation marks or unnecessary spaces from the variable strings.

Monitor the build status of the Staging environment in the Launch dashboard. If the deployment completes successfully after the formatting changes, the issue is resolved.
