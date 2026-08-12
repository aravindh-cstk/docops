---
title: "Permanent Asset URL Not Updating After File Replacement - Cloudflare Cache"
description: "Permanent Asset URL Not Updating After File Replacement - Cloudflare Cache"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/02-permanent-asset-url-not-updating-after-file-replacement-cloudflare-cache
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs59010078c6363b0b
---

# Permanent Asset URL Not Updating After File Replacement - Cloudflare Cache

After replacing a PDF or image asset in the CMS and republishing, the permanent URL continues to serve the old file. The file URL (versioned URL) reflects the latest version correctly, but the permanent URL does not.

**Root Cause**

The permanent URL is cached by Cloudflare CDN. After a file replacement, the origin correctly serves the new file, but the Cloudflare cache layer continues to serve the previously cached version of the permanent URL until the cache is purged.

**Resolution**

1.  Contact Contentstack Support and provide the affected asset UID and the permanent URL.
2.  Request a Cloudflare cache purge for the specific permanent URL.
3.  After the purge is completed, request the permanent URL again and confirm it now serves the updated file.
4.  As an interim workaround, use the versioned file URL (which reflects the latest version immediately) until the permanent URL cache is purged.

After the Cloudflare cache is purged, request the permanent URL and confirm the replacement file is served correctly.
