---
title: "Troubleshooting CLI Execution Failures on Node.js 22.2.0+"
description: "Troubleshooting CLI Execution Failures on Node.js 22.2.0+"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/04-troubleshooting-cli-execution-failures-on-node-js-22-2-0
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs38efe812cb20d567
---

# Troubleshooting CLI Execution Failures on Node.js 22.2.0+

CLI command execution failures occur when running Contentstack CLI on Node.js versions higher than 22.2.0.

**Root Cause**

Specific incompatibilities exist between the Contentstack CLI and Node.js versions exceeding 22.2.0, which prevent commands from executing.

**Resolution**

1.  Verify your current Node.js version by running node -v.
2.  If you are running a version higher than 22.2.0, downgrade to Node.js 22.2.0 or a stable Long Term Support (LTS) version below it.
3.  Subscribe to the Contentstack CLI changelog to monitor updates and compatibility fixes.

CLI commands execute successfully once your environment is configured to a compatible Node.js version. After completing these steps, re-run your CLI commands to verify functionality. If errors persist, ensure your CLI is up to date and check the release notes for any newer compatibility patches.
