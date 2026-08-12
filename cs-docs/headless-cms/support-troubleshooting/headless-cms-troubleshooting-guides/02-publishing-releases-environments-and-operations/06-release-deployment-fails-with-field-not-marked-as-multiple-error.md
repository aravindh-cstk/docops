---
title: "Release Deployment Fails with \"Field Not Marked as Multiple\" Error"
description: "Release Deployment Fails with \"Field Not Marked as Multiple\" Error"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/06-release-deployment-fails-with-field-not-marked-as-multiple-error
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs3d4b0176c6158fea
---

# Release Deployment Fails with "Field Not Marked as Multiple" Error

A release deployment fails with an error stating that a field is not marked as multiple. The same entry can be published directly from the CMS without any error, making the release-specific failure confusing.

**Root Cause**

The multiple flag is set on the extension for the field but is not set on the field definition within the content type schema. Direct publishing may not enforce the schema validation as strictly as release deployment, which performs a full schema compliance check before deploying. The mismatch between the extension's multiple setting and the content type field definition causes the deployment to fail.

**Resolution**

1.  Navigate to the content type in the CMS and locate the affected field.
2.  In the field settings, enable the multiple flag on the field itself to match the extension's configuration.
3.  Save the updated content type schema.
4.  Re-add the entry to the release if required and attempt the deployment again.

After correcting the multiple flag on the field definition, re-run the release deployment. If the deployment completes without the validation error, the schema mismatch is resolved.
