---
title: "Difficulty Activating Data Layer Without Launch Project Selection"
description: "Difficulty Activating Data Layer Without Launch Project Selection"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/05-platform-settings-permissions/02-difficulty-activating-data-layer-without-launch-project-selection
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: csbbcb32ef7b5bb594
---

# Difficulty Activating Data Layer Without Launch Project Selection

Activating the Data Layer in Personalize may appear to require a Launch project selection, even when using external tools like Google Tag Manager. This prevents setup completion if Launch is not part of the tech stack.

**Root Cause**

This issue is caused by client-side caching.

**Resolution**

1.  Check the current browser cache and clear it to ensure the latest interface state is loaded.
2.  Attempt to activate the Data Layer without selecting a Launch project to verify if the requirement persists.
3.  Coordinate a troubleshooting call to observe the behavior in real-time if the interface does not allow progression.

After clearing the client-side cache, navigate to the Data Layer activation screen. If the Data Layer can be activated without selecting a Launch project, the issue is resolved.
