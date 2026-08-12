---
title: "How do I restore a previous version of a content type?"
description: "How do I restore a previous version of a content type?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/07-content-type-faqs/12-how-do-i-restore-a-previous-version-of-a-content-type
doc_type: faq
_cms_section_uid: csfe40a3d097ce1730
_cms_faq_uid: cs47805f19bd76a00e
---

# How do I restore a previous version of a content type?

You can restore a content type using APIs:

1.  Fetch the previous version of the content type using the [Versioning API](/docs/developers/apis/content-management-api#get-a-single-content-type).
2.  Use the [Import a Content Type API](/docs/developers/apis/content-management-api#import-content-type) to import the version you fetched.

**Warning**: Restoring a previous version saves it as a new version, which may lead to data loss.
