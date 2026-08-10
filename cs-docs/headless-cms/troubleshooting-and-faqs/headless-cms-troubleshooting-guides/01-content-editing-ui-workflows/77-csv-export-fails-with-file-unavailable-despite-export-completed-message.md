---
title: "CSV Export Fails With ‘File Unavailable’ Despite ‘Export Completed’ Message"
description: "CSV Export Fails With ‘File Unavailable’ Despite ‘Export Completed’ Message"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/77-csv-export-fails-with-file-unavailable-despite-export-completed-message
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs3b819877b8db8e95
---

# CSV Export Fails With ‘File Unavailable’ Despite ‘Export Completed’ Message

A user attempts to export filtered entries from the Entries view as a CSV file. The export process starts, shows ‘processing’, then displays ‘Export Completed’ - but the browser reports ‘file failure - file unavailable’ and no CSV or ZIP file is downloaded. The Network tab shows a 200 status code but the response is JSON rather than a file.

**Root Cause**

This was a bug in the Search Export functionality. The search-grpc service was not returning the correct document set when the requesting user had a custom role with restricted permissions, causing the export file generation to fail silently. The UI reported success but no file was generated on the backend.

**Resolution**

A platform fix has been deployed. CSV export from the Entries view now works correctly for users with custom roles.

1.  If the export still fails after the fix deployment, contact Contentstack Support with the stack API key, the custom role configuration, and the filter criteria used in the export.
2.  As a workaround before the fix: use a higher-privileged role (Developer or Admin) to perform the export, or use the CMA to fetch and export entries programmatically.

After the fix, apply filters to the Entries view, trigger a CSV export, and confirm the file downloads successfully without a ‘file unavailable’ error.
