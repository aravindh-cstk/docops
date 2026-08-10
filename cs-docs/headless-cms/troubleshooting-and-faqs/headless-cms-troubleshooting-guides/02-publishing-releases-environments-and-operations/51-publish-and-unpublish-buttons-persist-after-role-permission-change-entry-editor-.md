---
title: "Publish and Unpublish Buttons Persist After Role Permission Change - Entry Editor Not Auto-Refreshing"
description: "Publish and Unpublish Buttons Persist After Role Permission Change - Entry Editor Not Auto-Refreshing"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/51-publish-and-unpublish-buttons-persist-after-role-permission-change-entry-editor-
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs26fd193ac28a3ebc
---

# Publish and Unpublish Buttons Persist After Role Permission Change - Entry Editor Not Auto-Refreshing

After a user’s role permissions are updated (for example, removing publish access), the Publish and Unpublish buttons remain visible in the entry editor for that user without a page refresh. The user can see buttons that suggest they have permissions they no longer hold.

**Root Cause**

The entry editor UI does not automatically refresh its permission state after role changes are applied. The buttons displayed in the editor reflect the permissions loaded when the page was last loaded - not the current server-side permission state. This is expected behavior. The display is cosmetic only: server-side validation is always applied when a publish or unpublish action is actually attempted.

**Resolution**

This is expected behavior and not a security issue. The actual permission check is always performed server-side when the publish/unpublish action is triggered. The visible buttons are cached from the last page load.

1.  To update the button state immediately: ask the affected user to reload the entry page. The buttons will reflect the current role permissions after reload.
2.  Communicate to editors that button visibility may lag behind role changes and a page reload is needed to see the updated state.

After reloading the entry page, confirm the Publish and Unpublish buttons are no longer visible for the user whose permissions were revoked.
