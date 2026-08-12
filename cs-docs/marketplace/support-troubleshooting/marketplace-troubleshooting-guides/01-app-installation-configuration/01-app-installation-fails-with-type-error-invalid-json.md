---
title: "App Installation Fails with \"Type Error\" (Invalid JSON)"
description: "App Installation Fails with \"Type Error\" (Invalid JSON)"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/01-app-installation-configuration/01-app-installation-fails-with-type-error-invalid-json
doc_type: faq
_cms_section_uid: cs66611234f4085992
_cms_faq_uid: cs37f8c8cdfd19cd8c
---

# App Installation Fails with "Type Error" (Invalid JSON)

Users encounter a TypeError during the installation of Marketplace apps when the configuration parameters do not match the expected JSON schema. This often happens when a string is provided where a JSON object is required.

**Resolution**

1.  Review the app's configuration documentation for required field formats.
2.  Ensure that complex fields, such as proxies or custom headers, are wrapped in valid JSON curly braces {}.
3.  Validate your JSON input using an external linter before saving the app configuration.

**Verification**

The app saves successfully, and the "Installation Complete" message appears without console errors.

**Note**

If valid JSON still triggers a type error, provide the configuration snippet and the specific app name to the support team.
