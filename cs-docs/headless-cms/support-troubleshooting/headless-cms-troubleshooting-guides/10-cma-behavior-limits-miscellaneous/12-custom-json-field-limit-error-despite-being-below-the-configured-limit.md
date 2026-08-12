---
title: "Custom JSON Field Limit Error Despite Being Below the Configured Limit"
description: "Custom JSON Field Limit Error Despite Being Below the Configured Limit"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/12-custom-json-field-limit-error-despite-being-below-the-configured-limit
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csb92eff7e5f900ee2
---

# Custom JSON Field Limit Error Despite Being Below the Configured Limit

Adding a new custom JSON field to a content type returns an error stating the maximum allowed limit for custom field extensions has been reached, even though the current field count appears to be below the configured limit of 70.

**Root Cause**

The error occurs because a plan-level configuration key that governs the custom JSON field limit was not correctly applied to the stack. The platform is enforcing a lower default limit rather than the raised limit. This is a backend configuration issue, not a content type schema error.

**Resolution**

1.  Contact Contentstack Support and report the error, providing the stack API key and the current custom JSON field count.
2.  Engineering will add the appropriate plan key to raise the effective limit to the configured level.
3.  After the fix is applied, retry adding the custom JSON field and confirm the limit error no longer appears.

After the plan key is applied, verify that custom JSON fields can be added up to the expected limit without errors.
