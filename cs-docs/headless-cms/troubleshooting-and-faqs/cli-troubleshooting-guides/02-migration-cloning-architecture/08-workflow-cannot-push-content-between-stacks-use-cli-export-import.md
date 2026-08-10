---
title: "Workflow Cannot Push Content Between Stacks (Use CLI Export/Import)"
description: "Workflow Cannot Push Content Between Stacks (Use CLI Export/Import)"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/08-workflow-cannot-push-content-between-stacks-use-cli-export-import
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csf43876f3962ca99f
---

# Workflow Cannot Push Content Between Stacks (Use CLI Export/Import)

The customer asked whether authors can push content from one stack to another automatically through a workflow stage transition (as part of workflow).

**Root Cause**

**Product behavior (workflows):** Contentstack workflows do not support cross-stack content migration as an action tied to stage transitions. Cross-stack transfer is outside workflow capabilities.

**Resolution**

1.  Confirm that workflow actions cannot migrate content between stacks.
2.  Recommend supported approaches for stack-to-stack migration:
    -   CLI export import utilities (contentstack-export / contentstack-import workflows)
    -   Custom scripts (for controlled migration automation if needed)
3.  Position this as the standard supported method for cross-stack migration workflows.
