---
title: "Lookup Data Error in Automation Action (Non-Reproducible)"
description: "Lookup Data Error in Automation Action (Non-Reproducible)"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/05-lookup-data-error-in-automation-action-non-reproducible
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs64e5ad6948f2c193
---

# Lookup Data Error in Automation Action (Non-Reproducible)

Customer reports lookup step error but it cannot be reproduced during validation.

**Root Cause** Transient error state; no active failure present during review.

**Resolution**

1.  If error recurs, collect:

-   Lookup step configuration
-   Run ID
-   Error screenshot and timestamp

3.  Validate whether lookup source credentials or query parameters changed.

The lookup step completes successfully without runtime errors.
