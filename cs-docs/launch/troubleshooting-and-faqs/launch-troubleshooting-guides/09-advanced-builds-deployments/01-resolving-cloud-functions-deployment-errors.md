---
title: "Resolving Cloud Functions Deployment Errors"
description: "Resolving Cloud Functions Deployment Errors"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/09-advanced-builds-deployments/01-resolving-cloud-functions-deployment-errors
doc_type: faq
_cms_section_uid: csd47552ea36a54ebe
_cms_faq_uid: cs2397fde19cd125b0
---

# Resolving Cloud Functions Deployment Errors

Deployments that include Cloud Functions consistently fail with a “Cloud functions deployment error” message, while deployments without Cloud Functions succeed. The error persists even after verifying package.json syntax and re-triggering the deployment.

**Root Cause**

Cloud Functions deployment errors can occur when the total size of environment variables set for the Cloud Function exceeds Launch’s 4 KB limit, or when the runtime encounters a transient platform-side issue. Exceeding the environment variable limit causes a silent failure during the Cloud Functions packaging step.

**Resolution**

1.  Check the total size of all environment variables configured for the affected Launch environment, particularly those used by Cloud Functions.
2.  If the combined size of environment variable keys and values exceeds 4 KB, move large values out of environment variables. Use an external secrets manager (such as AWS Secrets Manager or Azure Key Vault) and fetch the values at runtime within the function code.
3.  Alternatively, store large configuration payloads in a Contentstack entry and retrieve them via the Delivery API within the function.
4.  If the environment variable size is within the limit, wait a few minutes and retry the deployment, as transient platform issues can cause temporary Cloud Functions failures.
5.  If the error persists, contact Contentstack Support with the project UID, environment UID, and the full deployment log output.

The issue is resolved when the Cloud Functions deployment step completes successfully and the deployed function is reachable and responds correctly.
