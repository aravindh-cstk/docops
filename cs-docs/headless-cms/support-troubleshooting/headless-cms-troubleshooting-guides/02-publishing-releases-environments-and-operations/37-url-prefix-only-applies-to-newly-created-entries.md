---
title: "URL Prefix Only Applies to Newly Created Entries"
description: "URL Prefix Only Applies to Newly Created Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/37-url-prefix-only-applies-to-newly-created-entries
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs022ed32b888ac4f5
---

# URL Prefix Only Applies to Newly Created Entries

A URL prefix is configured in the content type’s URL field settings (for example, /insights-hub/). The prefix works for newly created entries but does not update existing entries that already have URLs.

**Root Cause**

URL prefix configuration applies to entries created after the prefix is configured. Existing entries retain their previously generated URL and are not automatically updated when the prefix is changed. This is by design to prevent unintended URL changes to live content.

**Resolution**

1.  For existing entries, manually update the URL field in each entry to include the new prefix.
2.  For large volumes of existing entries, use a CMA script to fetch all entries, update the URL field programmatically, and push the updates back.
3.  Going forward, all new entries created after the prefix was configured will automatically receive the prefix.

After updating existing entry URLs, verify that all entries (old and new) have the correct prefix by checking their URL fields.
