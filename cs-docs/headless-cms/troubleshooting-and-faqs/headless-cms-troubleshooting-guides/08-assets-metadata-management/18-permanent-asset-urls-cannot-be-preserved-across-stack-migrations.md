---
title: "Permanent Asset URLs Cannot Be Preserved Across Stack Migrations"
description: "Permanent Asset URLs Cannot Be Preserved Across Stack Migrations"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/18-permanent-asset-urls-cannot-be-preserved-across-stack-migrations
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs599dea7e451cc7a9
---

# Permanent Asset URLs Cannot Be Preserved Across Stack Migrations

During a migration to a new Contentstack stack, asset URLs change because new asset UIDs are generated. Existing application code and external links referencing the old asset URLs break after migration.

**Root Cause**

Contentstack asset delivery URLs are derived from the stack API key and the asset UID. When assets are imported into a new stack, the import process generates new asset UIDs. Because the UID is part of the URL, the permanent asset URL changes. There is no mechanism in Contentstack to preserve original asset UIDs, maintain the same URLs across stacks, or configure redirects or aliases at the CDN level.

**Resolution**

Plan for URL changes as part of the migration strategy:

1.  Build a mapping table of old asset URLs to new asset URLs during the migration process. Update all application code, content references, and external documentation to use the new URLs.
2.  Implement URL redirects at the application or CDN layer: map old asset URL patterns to new URL patterns using redirect rules in the application server, CDN, or a middleware layer.
3.  If the volume of asset URL changes is large, automate the redirect mapping using the asset migration data and implement the redirects programmatically.

After setting up URL redirects, verify that requests to old asset URLs are correctly redirected to the new URLs and return the expected assets.
