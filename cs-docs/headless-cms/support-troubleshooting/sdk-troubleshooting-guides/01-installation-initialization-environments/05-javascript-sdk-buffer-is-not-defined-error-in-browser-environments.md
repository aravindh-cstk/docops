---
title: "Javascript SDK \"Buffer is not defined\" Error in Browser Environments"
description: "Javascript SDK \"Buffer is not defined\" Error in Browser Environments"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/01-installation-initialization-environments/05-javascript-sdk-buffer-is-not-defined-error-in-browser-environments
doc_type: faq
_cms_section_uid: csd49f7fff9eb0385d
_cms_faq_uid: cs9770e09b92206828
---

# Javascript SDK "Buffer is not defined" Error in Browser Environments

Browser runtime errors occur when Node-only globals/modules are pulled into client bundles.

**Root Cause** The application is attempting to use Node.js-specific modules (like Buffer) in a client-side browser environment without the necessary polyfills or the use of a browser-safe SDK build.

**Resolution**

1.  Upgrade to the latest supported SDK/browser-safe package build.
2.  Remove Node-only imports from client-side bundles.
3.  Add polyfills only when upgrade/refactor is not immediately possible.

Browser flow completes without Buffer being defined, and SDK calls return expected data. Escalate with bundler config and import graph if error persists.
