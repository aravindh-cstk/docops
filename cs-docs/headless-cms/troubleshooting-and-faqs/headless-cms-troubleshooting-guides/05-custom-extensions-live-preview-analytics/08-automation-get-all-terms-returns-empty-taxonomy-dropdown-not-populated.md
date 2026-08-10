---
title: "Automation ‘Get All Terms’ Returns Empty - Taxonomy Dropdown Not Populated"
description: "Automation ‘Get All Terms’ Returns Empty - Taxonomy Dropdown Not Populated"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/08-automation-get-all-terms-returns-empty-taxonomy-dropdown-not-populated
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csfdf6a33a7ec056f3
---

# Automation ‘Get All Terms’ Returns Empty - Taxonomy Dropdown Not Populated

The Automate Hub ‘Get All Terms (V2)’ action returns no taxonomy values. Although taxonomies exist in the stack and the automation has full authorization access, the ‘Select Taxonomy’ dropdown is empty and automation execution returns blank results. This breaks automations that compile taxonomy values and push data to downstream systems such as Algolia.

**Root Cause**

This was a platform-level bug in the Get All Terms (V2) action in the Automate Hub. A scoping issue caused the action to fail to retrieve taxonomy data despite correct authorization and taxonomy configuration.

**Resolution**

A hotfix was deployed to resolve the issue. The Get All Terms (V2) action should now correctly return taxonomy values.

1.  After the fix deployment, open the affected automation and re-test the Get All Terms (V2) action. If the taxonomy dropdown now populates and execution returns the expected terms, the fix is in effect.
2.  If the dropdown remains empty after the fix, try removing and re-adding the Get All Terms action step in the automation to force a refresh of the action’s configuration.
3.  If the issue persists, contact Contentstack Support and provide the automation ID, the affected taxonomy UID, and the stack API key.

After the fix, verify the full automation runs end-to-end and downstream systems (such as Algolia) receive the correct taxonomy data.
