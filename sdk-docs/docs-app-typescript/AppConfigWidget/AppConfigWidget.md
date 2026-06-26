---
title: "AppConfigWidget"
description: "The `AppConfigWidget` object enables app configuration and settings management within the Contentstack UI. const appConfig = sdk.location.AppConfigWidget; if (appConfig) { const stack = appConfig.stack; const installation = appConfig.installation; } It supports only the stack core object."
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/appconfigwidget"
product: "Contentstack"
doc_type: "guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# AppConfigWidget

## AppConfigWidget

The `AppConfigWidget` object enables app configuration and settings management within the Contentstack UI.

```
const appConfig = sdk.location.AppConfigWidget;
if (appConfig) {
  const stack = appConfig.stack;
  const installation = appConfig.installation;
}
```

It supports only the [stack](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#stack-object) core object.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
|  |  | No | — | The `installation` property manages app installation data, including retrieval and updates. const installation = appConfig.installation; const data = await installation.getInstallationData(); await installation.setInstallationData(newData); installation.setValidity(true); |
