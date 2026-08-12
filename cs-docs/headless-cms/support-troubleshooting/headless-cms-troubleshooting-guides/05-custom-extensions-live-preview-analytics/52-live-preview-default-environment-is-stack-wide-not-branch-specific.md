---
title: "Live Preview Default Environment Is Stack-Wide, Not Branch-Specific"
description: "Live Preview Default Environment Is Stack-Wide, Not Branch-Specific"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/52-live-preview-default-environment-is-stack-wide-not-branch-specific
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs6a727561cd869361
---

# Live Preview Default Environment Is Stack-Wide, Not Branch-Specific

The Live Preview Default Environment setting is shared across all branches in the stack. Changing the preview environment in one branch (for example, dev) automatically updates it for all other branches (including main), causing ‘requested tracker was created for the main branch’ errors in the dev branch.

**Root Cause**

The Live Preview Default Environment setting is a stack-level configuration, not a branch-level one. There is currently no way to configure different default preview environments per branch within the same stack. When the setting is updated in any branch context, it applies globally to the entire stack.

**Resolution**

This is a current platform limitation. Available workarounds:

1.  Configure the default environment to the one used by the most critical branch (typically main/production) and accept that other branches will need to manually select the correct environment when opening Live Preview.
2.  When switching to a branch for editing, manually update the active preview environment in the Live Preview settings before starting the session. Remember to switch it back after.
3.  If branch-specific preview environments are critical for the workflow, contact Contentstack Support to submit an enhancement request for per-branch Live Preview environment configuration.

After establishing a consistent convention for which environment to set as the default, communicate the manual switching steps to the editorial team to avoid tracker mismatch errors.
