---
title: "ContentTypeSidebarWidget"
description: "The `ContentTypeSidebarWidget` object provides content type management and schema tools within the Contentstack UI. const contentTypeSidebar = sdk.location.ContentTypeSidebarWidget; if (contentTypeSidebar) { const contentTypeData = contentTypeSidebar.getData(); contentTypeSidebar.onSave((updatedType) => { console.log('Content type updated:', updatedType); }); }"
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/contenttypesidebarwidget"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentTypeSidebarWidget

## ContentTypeSidebarWidget

The `ContentTypeSidebarWidget` object provides content type management and schema tools within the Contentstack UI.

```
const contentTypeSidebar = sdk.location.ContentTypeSidebarWidget;
if (contentTypeSidebar) {
  const contentTypeData = contentTypeSidebar.getData();
  contentTypeSidebar.onSave((updatedType) => {
    console.log('Content type updated:', updatedType);
  });
}
```
