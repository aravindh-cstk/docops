---
title: "Type Error During SDK Initialization or App Configuration"
description: "Type Error During SDK Initialization or App Configuration"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/01-installation-initialization-environments/01-type-error-during-sdk-initialization-or-app-configuration
doc_type: faq
_cms_section_uid: csd49f7fff9eb0385d
_cms_faq_uid: cs5fbff173ab32c39b
---

# Type Error During SDK Initialization or App Configuration

Initialization fails with type/runtime errors when config values have the wrong shape (for example, passing a string where an object is expected).

**Root Cause** Initialization parameters do not match the expected data types (e.g., passing stringified JSON instead of a raw object), or Marketplace app configuration schemas are misaligned with defined parameter shapes.

**Resolution**

1.  Validate the SDK initialization object against the SDK README/types.
2.  Ensure nested options (proxy/retry/cache/plugin options) are objects, not stringified JSON.
3.  For Marketplace apps, verify config schema matches app parameter definitions.

SDK initializes without exception and the first API call returns a 2xx JSON response. Escalate with a redacted config object and full stack trace if error persists.
