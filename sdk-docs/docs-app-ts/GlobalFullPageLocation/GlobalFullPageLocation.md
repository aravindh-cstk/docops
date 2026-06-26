---
title: "GlobalFullPageLocation"
description: "The `GlobalFullPageLocation` object provides cross-stack functionality for global applications that operate across multiple stacks or organizations. const globalFullPage = sdk.location.GlobalFullPageLocation; if (globalFullPage) { const currentOrg = globalFullPage.currentOrganization; console.log('Current organization:', currentOrg); }"
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/globalfullpagelocation"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# GlobalFullPageLocation

## GlobalFullPageLocation

The `GlobalFullPageLocation` object provides cross-stack functionality for global applications that operate across multiple stacks or organizations.

```
const globalFullPage = sdk.location.GlobalFullPageLocation;
if (globalFullPage) {
  const currentOrg = globalFullPage.currentOrganization;
  console.log('Current organization:', currentOrg);
}
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
|  |  | No | — | The `currentOrganization` property provides the current organization details. const currentOrg = globalFullPage.currentOrganization; console.log('Organization name:', currentOrg.name); console.log('Organization UID:', currentOrg.uid); |
