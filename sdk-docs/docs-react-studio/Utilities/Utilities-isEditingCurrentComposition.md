---
title: "isEditingCurrentComposition"
description: "The `isEditingCurrentComposition()` method verifies whether a specific composition, identified by its UID, is currently being edited. This ensures that interactive or editable features activate only when the targeted composition is in edit mode. Use this method when multiple compositions are displayed on a single page and you need to identify which one is currently active for editing."
url: "https://www.contentstack.com/react-studio-sdk-utilities-iseditingcurrentcomposition"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## isEditingCurrentComposition

The `isEditingCurrentComposition()` method verifies whether a specific composition, identified by its UID, is currently being edited. This ensures that interactive or editable features activate only when the targeted composition is in edit mode.

Use this method when multiple compositions are displayed on a single page and you need to identify which one is currently active for editing.

No parameters.

Returns:
Type
Boolean

**Parameters:**

| **Name** | **Type** | **Description** |
|---|---|---|
| `compositionUid`compositionUid | string | The UID of the composition used to check if it is currently in edit mode. |

```
import { isCompositionBeingEdited } from '@contentstack/studio-react';
const isEdited = isCompositionBeingEdited();
```
