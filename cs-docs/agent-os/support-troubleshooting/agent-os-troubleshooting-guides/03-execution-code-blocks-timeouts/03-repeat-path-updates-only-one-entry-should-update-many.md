---
title: "Repeat Path Updates Only One Entry (Should Update Many)"
description: "Repeat Path Updates Only One Entry (Should Update Many)"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/03-repeat-path-updates-only-one-entry-should-update-many
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: csbe19ce233b4d872a
---

# Repeat Path Updates Only One Entry (Should Update Many)

Automation iterating over entries updates only the first item, leaving remaining entries unchanged.

**Root Cause** Incorrect repeat-path variable reference; the update action was not using the current iteration UID.

**Resolution**

1.  Ensure repeat path is correctly configured to iterate over entry list.
2.  Reference the current iteration UID using {{current.value.uid}}.
3.  Add a condition to prevent unnecessary updates (e.g., only update if meta\_description is blank).
4.  Retest.

Each entry in the repeat iteration is updated as expected.
