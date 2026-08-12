---
title: "Resolving language mismatches in RWS Trados Marketplace integration"
description: "Resolving language mismatches in RWS Trados Marketplace integration"
url: /marketplace/support-troubleshooting/marketplace-troubleshooting-guides/05-vendor-specific-integrations/02-resolving-language-mismatches-in-rws-trados-marketplace-integration
doc_type: faq
_cms_section_uid: cs67a4a479b31c55a2
_cms_faq_uid: cs4eff1eac1777b618
---

# Resolving language mismatches in RWS Trados Marketplace integration

Integrating RWS Trados in a stack may fail when the master language is set to a generic locale not supported by the vendor. This prevents the selection of source content for translation projects.

**Root Cause**

The third-party translation tool requires region-specific language variants (such as en-us) and does not recognize generic root locales (such as en).

**Resolution**

1.  Create a new regional language variant, such as English - United States (en-us), within the stack settings.
2.  Configure the generic master language (en) as the fallback for the newly created regional locale.
3.  Select the regional locale when initiating translation projects through the Trados app.

After creating the regional locale with a fallback, navigate to the Trados app and attempt to select the language.

If the language appears as an available option and allows project creation, the mismatch is resolved.
