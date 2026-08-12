---
title: "Modular Block Max Limit Appears Bypassed via the ‘+’ Icon"
description: "Modular Block Max Limit Appears Bypassed via the ‘+’ Icon"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/24-modular-block-max-limit-appears-bypassed-via-the-icon
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs0e7e091bb51fa14a
---

# Modular Block Max Limit Appears Bypassed via the ‘+’ Icon

Users can add block instances beyond the configured maximum by clicking ‘+’. The limit does not appear to be enforced.

**Root Cause**

This is expected behavior. Empty block instances added beyond the limit do not count because empty blocks are not saved. The extra empty instances will be discarded when the entry is saved - only blocks with at least one populated field are saved and counted.

**Resolution**

No action is required. The maximum limit is correctly enforced at save time. Empty instances beyond the limit are discarded on save. This is expected behavior.
