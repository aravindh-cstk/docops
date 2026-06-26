---
title: "clientRendererModeUtil"
description: "The `clientRendererModeUtil` utility determines the renderer mode and environment. It provides methods to check the current rendering context and adjust component behavior accordingly."
url: "https://www.contentstack.com/untitled"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## clientRendererModeUtil

The `clientRendererModeUtil`utility determines the renderer mode and environment. It provides methods to check the current rendering context and adjust component behavior accordingly.

No parameters.

```
import { clientRendererModeUtil } from '@contentstack/studio-react';

// Check environment
const isInStudio = clientRendererModeUtil.isInsideStudioFrame();
const isInVisualBuilder = clientRendererModeUtil.isInsideVisualBuilderFrame();
const isInIframe = clientRendererModeUtil.isInsideIframe();

// Check specific composition state
const isEditing = clientRendererModeUtil.isEditingCurrentComposition('my-composition-uid');

// Get current renderer mode
const mode = clientRendererModeUtil.getMode('my-composition-uid');
```
