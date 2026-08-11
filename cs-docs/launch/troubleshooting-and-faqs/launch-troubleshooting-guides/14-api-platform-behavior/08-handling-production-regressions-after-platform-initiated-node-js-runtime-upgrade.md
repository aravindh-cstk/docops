---
title: "Handling Production Regressions After Platform-Initiated Node.js Runtime Upgrades"
description: "Handling Production Regressions After Platform-Initiated Node.js Runtime Upgrades"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/14-api-platform-behavior/08-handling-production-regressions-after-platform-initiated-node-js-runtime-upgrade
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: cs5b36c5f937d6277d
---

# Handling Production Regressions After Platform-Initiated Node.js Runtime Upgrades

Following a platform-initiated upgrade of the Node.js runtime (for example, from v22 to v24), a Launch-hosted application experiences production regressions despite builds and deployments completing successfully. Symptoms include failures in Chromium-based PDF generation and filesystem errors (ENOENT and EROFS) when the application attempts to write to its build cache directory.

**Root Cause**

Two distinct issues surfaced from the runtime upgrade: first, Chromium-based functionality failed due to a missing system-level dependency (libnspr4.so) in the newer Node.js runtime image. Second, filesystem errors occurred because Launch environments operate on a read-only filesystem across all Node.js versions, with only the /tmp directory writable—a behavior that was likely already present but became more apparent or differently triggered after the upgrade.

**Resolution**

1.  For Chromium-related failures, temporarily pin the application to the previous stable Node.js version by specifying it in the engines field of package.json (e.g., "node": "22.x") while the missing dependency is investigated by the platform team.
2.  For filesystem errors, update the application configuration to redirect all cache writes to the /tmp directory - for example, by setting NEXT\_CACHE\_DIR=/tmp/.next/cache for Next.js applications.
3.  Audit the application for any other file write operations that target directories outside of /tmp, and redirect those as well.
4.  Share details of your Chromium setup (such as the specific library or headless browser configuration in use) with Contentstack Support to assist in resolving the missing dependency on the platform side.
5.  Monitor for platform updates addressing the missing Chromium dependency, and plan to remove the Node.js version pin once confirmed resolved.

The issue is resolved when Chromium-based functionality operates correctly (either via the version pin or a platform-side dependency fix) and all application file writes succeed by targeting only the /tmp directory.
