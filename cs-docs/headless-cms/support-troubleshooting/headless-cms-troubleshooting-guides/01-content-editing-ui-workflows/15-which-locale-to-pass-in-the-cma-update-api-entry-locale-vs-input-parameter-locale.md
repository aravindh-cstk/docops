---
title: "Which Locale to Pass in the CMA Update API - Entry Locale vs. Input Parameter Locale"
description: "Which Locale to Pass in the CMA Update API - Entry Locale vs. Input Parameter Locale"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/15-which-locale-to-pass-in-the-cma-update-api-entry-locale-vs-input-parameter-locale
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csef033fdda85dc6d7
---

# Which Locale to Pass in the CMA Update API - Entry Locale vs. Input Parameter Locale

There is confusion about which locale value should be passed in a CMA update API call: the locale of the entry being updated, or the locale from an input parameter in the workflow. Passing the wrong locale causes unexpected behavior or errors.

**Root Cause**

The locale parameter in a CMA update request determines which locale version of the entry is being updated. Passing the wrong locale either creates or modifies the wrong locale version of the entry, or fails validation if the specified locale does not exist for that entry.

**Resolution**

1.  Always pass the locale of the specific entry version you intend to update.
2.  If updating the master locale version, pass the master locale code (for example, en-us).
3.  If updating a localized version, pass the exact locale code of that localized version (for example, fr-fr, de-de).
4.  Do not pass the input parameter locale from an external system unless it has been validated against the locales configured in the Contentstack stack.
5.  To confirm which locales exist for an entry, call: GET /v3/content\_types/{uid}/entries/{entry\_uid}/locales before updating.

After confirming the correct locale code and updating the request, re-run the CMA update. If the correct locale version of the entry is updated, the locale parameter is now correctly specified.
