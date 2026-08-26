---
title: "Limitations for Drafts and Auto Save"
description: "Explore Contentstack's Drafts & Auto Save features: connectivity, collaboration, and versioning limits for seamless content management."
url: /headless-cms/limitations-for-drafts-and-auto-save
uid: blt67210ac0c43249c5
---

# Limitations for Drafts and Auto Save

## Limitations for Drafts and Auto Save

**Note:** Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team for more information.

## Connectivity Limitations

-   Offline editing is not supported. An active internet connection is required for draft synchronization.
-   If the network connection is interrupted, the editor becomes temporarily read-only until the connection is restored.

## Field Locking and Collaboration Limitations

-   A field can only be edited by **one user at a time**. Other users cannot edit that field until the lock is released.
-   Locks automatically expire after a period of user inactivity.
-   In **Group** or **Modular Blocks** fields, structural actions such as adding, deleting, or reordering blocks are restricted if a nested field is locked.
-   Custom fields lock when a user interacts within the iframe, preventing other users from editing the field during that interaction.

## Versioning Limitations

-   Only explicit **Save** or **Publish** actions create major versions.
-   Minor auto-saved updates remain grouped within draft logs until a major version is created.

### Draft Retention

Draft logs are retained only for the **five most recent major versions** of an entry. When a new major version is created, draft logs associated with older versions are automatically removed.

## Conflict Handling Limitations

If another user saves a newer version while you are editing an entry, you must review and compare versions before saving to avoid overwriting changes.

## Data Safety Considerations

Auto Save captures changes frequently, but very recent edits may still be lost in rare situations such as:

-   browser crashes
-   system failures
-   forced application closure

Because Auto Save processes edits at short intervals, changes made within the **last few seconds before the interruption** may not be saved.

## Integration Limitations

-   Marketplace apps that update field values using the App SDK setData method can bypass standard field locking. When this occurs, updates made by the app may override a locked field. Users who currently hold the lock are notified when the field data changes.
-   Draft data created through Drafts and Auto Save is not currently supported in Visual Editor.


### Live Preview Limitations

-   With Drafts and Auto Save enabled, Live Preview is not available for unlocalized entries or variant drafts. The Live Preview tab is hidden in these states.


### Visual Editor Limitations

-   Drafts and Auto Save is not yet supported in Visual Editor. Until support is added, draft changes do not appear in the form or on the canvas.
-   Draft changes may still appear in interface elements that show an entry's title or URL, such as the page search dropdown and entry status information.

### Preview API Limitations

-   With Drafts and Auto Save enabled, the Preview Service API matches on saved content only, not on draft changes: the query parameter (REST) or where argument (GraphQL) ignores draft changes. The returned entries still include draft changes, so results may contain entries that would not match once their draft changes are taken into account.
