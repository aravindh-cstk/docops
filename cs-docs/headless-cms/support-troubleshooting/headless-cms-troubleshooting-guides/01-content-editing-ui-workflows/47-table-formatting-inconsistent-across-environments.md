---
title: "Table Formatting Inconsistent Across Environments"
description: "Table Formatting Inconsistent Across Environments"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/47-table-formatting-inconsistent-across-environments
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csda1dba06d880b490
---

# Table Formatting Inconsistent Across Environments

Tables that appear correctly inside the Contentstack editor display with different sizes or lose dimension attributes when rendered in a testing or production environment.

**Root Cause**

Table dimension attributes may be stripped or inconsistently preserved depending on the HTML structure used. Non-standard or incomplete table markup can result in attributes being dropped during HTML processing.

**Resolution**

1.  Use a recommended HTML table structure that includes explicit width attributes and proper <table>, <colgroup>, <tr>, <th>, and <td> elements.
2.  Avoid using inline style properties for dimensions; use width and height attributes directly on the table elements.
3.  Apply the corrected structure to the affected entries and republish.

After updating the table markup to follow the recommended structure, verify that table dimensions are consistent between the CMS editor and the rendered frontend environment.
