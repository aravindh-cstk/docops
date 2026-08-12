---
title: "Fixing Stale Build Delivery and ECONNRESET Errors During Dependency Installation"
description: "Fixing Stale Build Delivery and ECONNRESET Errors During Dependency Installation"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/03-builds-deployments/04-fixing-stale-build-delivery-and-econnreset-errors-during-dependency-installation
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: cse0f0942937cf578b
---

# Fixing Stale Build Delivery and ECONNRESET Errors During Dependency Installation

A Launch-hosted site intermittently serves outdated builds despite successful new deployments, alongside a higher-than-normal rate of build failures showing ECONNRESET errors during the dependency installation step.

**Root Cause**

Intermittent connection resets (ECONNRESET) during dependency installation destabilized the deployment workflow, occasionally leaving edge environments out of sync and continuing to serve a previously successful build instead of the latest one. In this case, an outdated version of the sharp image-processing library was a significant contributor to installation instability.

**Resolution**

1.  Review build logs for ECONNRESET errors occurring specifically during the dependency installation phase.
2.  Identify native or binary dependencies (such as sharp) in your package.json that are known to have installation stability issues in certain versions.
3.  Upgrade the affected dependency to a more recent, stable version (for example, sharp to ^0.33.5 or later).
4.  Redeploy the application and monitor subsequent builds for a reduction in ECONNRESET errors and stale-build delivery incidents.
5.  Continue monitoring over the following deployment cycles to confirm both build stability and consistent build delivery have been restored.

The issue is resolved when builds complete consistently without ECONNRESET errors and the live site reliably serves the most recently deployed build.
