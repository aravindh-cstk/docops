---
title: "Node.js Version Incompatibility with CLI and SDK"
description: "Node.js Version Incompatibility with CLI and SDK"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/01-installation-initialization-environments/02-node-js-version-incompatibility-with-cli-and-sdk
doc_type: faq
_cms_section_uid: csd49f7fff9eb0385d
_cms_faq_uid: cs494a3d2a9f0038ad
---

# Node.js Version Incompatibility with CLI and SDK

Runtime/module parse errors can occur when project Node runtime is incompatible with package expectations.

**Root Cause** The project's Node.js runtime version falls outside the supported range of the specific SDK or CLI package, causing syntax errors or module parsing failures during execution.

**Resolution**

1.  Check node -v.
2.  Use an Active LTS Node version unless the specific SDK/CLI package documents different requirements.
3.  Reinstall dependencies after runtime switch.
4.  Avoid blanket downgrade guidance. Align Node version per package constraints in your lockfile/CI.

Install/import completes and sample SDK calls run without syntax/module loader errors.
