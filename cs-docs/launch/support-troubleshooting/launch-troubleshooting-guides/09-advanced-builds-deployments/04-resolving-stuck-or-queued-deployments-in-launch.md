---
title: "Resolving Stuck or Queued Deployments in Launch"
description: "Resolving Stuck or Queued Deployments in Launch"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/09-advanced-builds-deployments/04-resolving-stuck-or-queued-deployments-in-launch
doc_type: faq
_cms_section_uid: csd47552ea36a54ebe
_cms_faq_uid: cscf44543dd32bf953
---

# Resolving Stuck or Queued Deployments in Launch

Deployments in a Launch project remain in a “Queued” state for an extended period without progressing to the build or deployment phase. Retrying or redeploying does not resolve the queue blockage.

**Root Cause**

Deployment queues can become blocked due to a previous failed or stuck deployment that did not release its queue slot, or due to a transient platform-side infrastructure issue on the Launch cluster. In some cases, a failed deployment leaves the queue in an inconsistent state that prevents subsequent deployments from starting.

**Resolution**

1.  Wait for 10–15 minutes to allow the queue to self-clear, as some transient queue states resolve automatically.
2.  Navigate to the Deployments section of the affected Launch environment and attempt a manual redeploy by clicking the Redeploy button on the most recent deployment.
3.  If the queue remains stuck after redeployment attempts, contact Contentstack Support with the project UID, environment UID, and the time the queue became stuck so that the Launch team can manually clear the queue.
4.  Once the queue is cleared, trigger a fresh deployment and monitor the deployment logs to confirm it progresses through the build and deployment stages.

The issue is resolved when the deployment exits the queued state, completes successfully, and the live environment reflects the intended changes.
