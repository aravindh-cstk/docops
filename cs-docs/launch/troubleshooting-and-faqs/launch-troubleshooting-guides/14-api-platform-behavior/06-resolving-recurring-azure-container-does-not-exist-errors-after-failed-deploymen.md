---
title: "Resolving Recurring “Azure Container Does Not Exist” Errors After Failed Deployments"
description: "Resolving Recurring “Azure Container Does Not Exist” Errors After Failed Deployments"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/14-api-platform-behavior/06-resolving-recurring-azure-container-does-not-exist-errors-after-failed-deploymen
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: cs63bf53c7c8101722
---

# Resolving Recurring “Azure Container Does Not Exist” Errors After Failed Deployments

A Launch-hosted site repeatedly goes down with an “Azure container does NOT exist” error, occurring shortly after a failed deployment. The error had previously been reported and addressed, but recurred following a subsequent failed deployment.

**Root Cause**

When a deployment fails, the underlying container infrastructure could, in some cases, enter a state where the previous live container was already being torn down before the new one was confirmed healthy, resulting in a window where no valid container existed to serve traffic. This caused customer-facing downtime rather than a graceful fallback to the last known-good deployment.

**Resolution**

1.  Confirm the timing correlation between the failed deployment and the onset of the “Azure container does NOT exist” error by reviewing deployment logs and incident timestamps.
2.  Report the recurrence to Contentstack Support with the organization ID, the failed deployment ID, and the exact timestamps of failure and downtime.
3.  Contentstack Engineering implements platform-level safeguards to ensure a site does not enter a non-serving state due to a failed deployment, regardless of whether the failure is an application build error or an infrastructure-related issue.
4.  After the safeguard is deployed, monitor subsequent deployments (including any that fail) to confirm the live site remains available rather than entering the container-not-found state.
5.  If ETIMEDOUT-related deployment failures continue to occur as a separate but related issue, track them under a dedicated case for ongoing resolution.

The issue is resolved when failed deployments no longer cause customer-facing downtime, with the platform retaining the last successful container until a new deployment is confirmed.
