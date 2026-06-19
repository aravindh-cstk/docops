---
title: "[Solution Guides Articles] - Assigning Taxonomy Terms Based on Locale"
description: Assigning Taxonomy Terms Based on Locale
url: https://www.contentstack.com/docs/headless-cms/assigning-taxonomy-terms-based-on-locale
product: Contentstack
doc_type: solution-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Solution Guides Articles] - Assigning Taxonomy Terms Based on Locale

This page describes a solution for automatically assigning a “Region” taxonomy term based on an entry’s locale. It is intended for developers configuring Contentstack Taxonomies and Automations, and should be used when you want locale-driven taxonomy assignment during entry creation/localization.

## Assigning Taxonomy Terms Based on Locale

## Overview
This solution sets up a Taxonomy called “Region” that contains a list of countries, and each country has term UID. Then an Automation is created that does the following:
- Listens to the “Create Entry” event for a particular content type.
- Sets up mappings from locale codes to country term UIDs.
- If the country does not have the mapping, it will set the default term UID as 'usa'.

**Example:** Country “Netherlands” term UID is netherlands.

## Tactical Rundown
- Create the following Taxonomy in a stack:
- Create a Content Type which also has the Taxonomy field where the locale can be stored.
- Create an Automation to fill the Region term based on the present entry's language.With the **Contentstack** connector create an Entry Trigger for any new entry created based on the particular Content Type.
- Use the **CodeBlock** connector with the following JavaScript Code:

```
const mapping = {'sw':'sweden', 'en-us':'usa', 'en-uk':'england', 'nl-nl':'netherlands', 'de-de':'germany'}; return mapping[input.locale] || 'usa';
```
Here's how it looks:
- Use the **HTTP** connector to update an entry based on the localized country of the entry.

**Examples:**
- When the entry created in default locale, the term is set as “usa,” and when the entry gets localized into Dutch, the term is set as “netherlands.”
- Based on the above automation steps, when the entry is localized in Germany, the term is automatically added.

## Common questions

### What happens if a locale code is not in the mapping?
If the country does not have the mapping, it will set the default term UID as 'usa'.

### Where is the locale-to-term mapping defined?
The mapping is defined in the **CodeBlock** connector using the provided JavaScript code.

### When does the automation run?
It listens to the “Create Entry” event for a particular content type.

### How is the entry updated with the taxonomy term?
Use the **HTTP** connector to update an entry based on the localized country of the entry.