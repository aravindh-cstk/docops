---
title: "Resolving JavaScript Heap Out-of-Memory Errors During Builds"
description: "Resolving JavaScript Heap Out-of-Memory Errors During Builds"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/09-advanced-builds-deployments/03-resolving-javascript-heap-out-of-memory-errors-during-builds
doc_type: faq
_cms_section_uid: csd47552ea36a54ebe
_cms_faq_uid: cs22b9fc476d4fc92f
---

# Resolving JavaScript Heap Out-of-Memory Errors During Builds

A Launch build fails with a fatal error: Reached heap limit / Allocation failed - JavaScript heap out of memory. The error appears in deployment logs during the build step and prevents the deployment from completing.

**Root Cause**

The Node.js process used during the build exceeds the memory allocated to it. This is common in large Next.js or JavaScript applications with many pages, large dependency trees, or memory-intensive build steps such as static site generation with many routes. Node.js has a default heap size limit that can be exceeded during complex builds.

**Resolution**

1.  Increase the Node.js heap size by adding the NODE\_OPTIONS environment variable to your Launch environment with the value --max-old-space-size=<MB> (e.g., --max-old-space-size=4096 for 4 GB).
2.  Set this variable in the Launch UI under the environment’s environment variables section.
3.  Reduce the memory footprint of the build where possible by code splitting, reducing the number of pages generated at build time, or deferring static generation to runtime (ISR).
4.  Redeploy and monitor the build logs to confirm the heap error no longer appears.

The issue is resolved when the build completes successfully without memory allocation errors and the deployment proceeds to the live environment.
