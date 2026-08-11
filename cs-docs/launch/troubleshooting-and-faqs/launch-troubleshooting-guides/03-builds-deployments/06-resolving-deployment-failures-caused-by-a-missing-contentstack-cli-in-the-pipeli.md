---
title: "Resolving Deployment Failures Caused by a Missing Contentstack CLI in the Pipeline PATH"
description: "Resolving Deployment Failures Caused by a Missing Contentstack CLI in the Pipeline PATH"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/03-builds-deployments/06-resolving-deployment-failures-caused-by-a-missing-contentstack-cli-in-the-pipeli
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: cs1225304548686e8c
---

# Resolving Deployment Failures Caused by a Missing Contentstack CLI in the Pipeline PATH

A deployment pipeline fails because it cannot locate the Contentstack CLI (cs or csdx command), indicating the CLI is either not installed or not accessible in the system PATH during pipeline execution.

**Root Cause**

The CLI was either missing from the pipeline’s build environment or installed in a location not included in the system PATH at execution time, causing the deployment script to fail when attempting to invoke CLI commands.

**Resolution**

1.  Verify whether the Contentstack CLI is installed as part of the pipeline’s dependency installation step by checking package.json and the pipeline configuration.
2.  Install the Contentstack CLI globally in the pipeline environment using npm install -g @contentstack/cli, and confirm the global npm bin directory is included in the PATH.
3.  As a more portable alternative that avoids PATH issues entirely, invoke the CLI using npx @contentstack/cli <command> rather than relying on a global install.
4.  Review package.json to confirm all required dependencies for the CLI and deployment scripts are correctly declared.
5.  Re-run the pipeline to confirm the CLI is now found and the deployment proceeds without PATH-related errors.

The issue is resolved when the pipeline successfully locates and invokes the Contentstack CLI, either via a correctly configured global install or via npx, and deployments complete without PATH errors.
