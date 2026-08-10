---
title: "Workflows Disabled After CLI Import/Export Between Branches"
description: "Workflows Disabled After CLI Import/Export Between Branches"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/28-workflows-disabled-after-cli-import-export-between-branches
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs05cc945510dd8aa7
---

# Workflows Disabled After CLI Import/Export Between Branches

Workflows are intermittently disabled with an error stating ‘no content type selected’, even though content types were previously assigned to the workflow. The issue occurs specifically after CLI import/export operations used to migrate data between branches.

**Root Cause**

During CLI import operations, content type UIDs in the workflow configuration can become detached if the UIDs differ between the source and target branches. The CLI import restores the workflow schema but does not re-bind the content type references when the UIDs are mismatched or the content types do not yet exist in the target branch at import time. The workflow is created but its content type associations are empty.

**Resolution**

1.  After a CLI import, navigate to Settings > Workflows in the target branch and open each workflow.
2.  Re-add the required content types to each workflow stage that shows ‘no content type selected’.
3.  Save the workflow configuration.
4.  To prevent recurrence, import content types before workflows in the CLI import sequence, ensuring content type UIDs exist in the target branch before the workflow configuration references them.
5.  If using automated CLI migrations, add a post-import verification step that checks workflow configurations and re-applies content type assignments if they are missing.

After re-adding content types to the workflow configuration, verify that workflow stage transitions function correctly and editorial users are assigned to the correct stages.
