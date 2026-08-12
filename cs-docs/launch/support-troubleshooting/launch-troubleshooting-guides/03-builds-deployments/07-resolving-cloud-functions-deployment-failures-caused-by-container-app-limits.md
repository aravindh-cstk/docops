---
title: "Resolving Cloud Functions Deployment Failures Caused by Container App Limits"
description: "Resolving Cloud Functions Deployment Failures Caused by Container App Limits"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/03-builds-deployments/07-resolving-cloud-functions-deployment-failures-caused-by-container-app-limits
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: cs01326030137d243f
---

# Resolving Cloud Functions Deployment Failures Caused by Container App Limits

A Cloud Functions deployment error occurs when deploying to a development or non-production environment, even when redeploying a previously successful build. In related cases, multiple environments (such as Integration, Stage, and Stage Canada) are left in a “failed state,” with server logs becoming inaccessible.

**Root Cause**

These failures were caused by the container app limit being reached on the production infrastructure underlying the organization’s Launch environments. This is a distinct root cause from environment-variable size limits, once the container app limit is reached at the infrastructure level, deployments across affected environments can fail or enter a failed state, even when the specific environment being deployed to is not itself production.

**Resolution**

1.  If a Cloud Functions deployment fails and the total environment variable size is confirmed to be within limits, consider whether a container app limit may have been reached at the infrastructure level rather than an application-side misconfiguration.
2.  Report the issue to Contentstack Support, including the affected project UID, the specific environments showing failures, and whether server logs have become inaccessible as a symptom.
3.  Contentstack Engineering investigates and addresses the container app limit on the affected production infrastructure.
4.  Once the limit issue is resolved on the platform side, retry deployments to the previously failing environments to confirm they now complete successfully and server logs are accessible again.

The issue is resolved when Cloud Functions deployments complete successfully across all affected environments and server logs are accessible, confirming the container app limit has been addressed.
