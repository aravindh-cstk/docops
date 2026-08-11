---
title: "Preparing for Node.js v18 Deprecation in Launch"
description: "Preparing for Node.js v18 Deprecation in Launch"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/10-node-js-frameworks-runtime/01-preparing-for-node-js-v18-deprecation-in-launch
doc_type: faq
_cms_section_uid: cs0cbe8f9b2482f217
_cms_faq_uid: csf303a9679f1a8f50
---

# Preparing for Node.js v18 Deprecation in Launch

Contentstack Launch is deprecating Node.js v18 support. After the deprecation date, any deployment or redeployment that targets Node.js v18 will fail. Existing live sites running on Node.js v18 will continue to serve traffic until they are next redeployed.

**Root Cause**

Node.js v18 has reached end-of-life and is no longer receiving security updates. Launch is removing support for deprecated runtime versions to maintain a secure build environment.

**Resolution**

1.  Identify all Launch projects currently running on Node.js v18 by reviewing the package.json engines field or the build log output that states the Node.js version in use.
2.  Update the Node.js version in package.json to a supported LTS version (such as v20 or v22) in the engines field: { "engines": { "node": ">=20" } }.
3.  Test the updated configuration locally and in a non-production Launch environment before promoting to production.
4.  Trigger a new deployment in each affected Launch environment to apply the Node.js version change.
5.  Monitor official Contentstack release notes for the exact deprecation date and confirm all projects are migrated before that date.

The issue is resolved when all Launch projects build and deploy successfully using a supported Node.js version, and no v18-related deprecation warnings appear in the deployment logs.
