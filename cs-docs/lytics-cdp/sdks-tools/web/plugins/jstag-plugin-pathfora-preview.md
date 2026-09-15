---
title: "pathfora.preview Plugin"
description: "Preview Pathfora widgets before publishing"
url: /lytics/jstag-plugin-pathfora-preview
uid: bltd789268dead5a04c
---

# pathfora.preview Plugin

## pathfora.preview Plugin

Preview Pathfora widgets before publishing

## \`pathfora.preview\` plugin

Preview Pathfora widgets

| Pathfora preview |
| --- |
| namespace pathfora.preview |
| preview widgets |
| disabled by default |

### Configuration

```
pathfora: {
  preview: {
    disabled: true,
    format: undefined,
    global: 'pathfora',
    polling: {
      retries: 5
    },
    variation: {
      previewKey: 'lytics_variation_preview_id',
      id: undefined,
      src: `${config.url}/api/program/campaign/variation/preview/${
        config.cid
      }/{id}/config.js`,
    },
    experience: {
      previewKey: 'lytics_preview_id',
      id: undefined,
      src: `${config.url}/api/experience/preview/${
        config.cid
      }/{id}/config.js`,
    }
  }
}
```

#### pathfora.preview.disabled

-   Type boolean
-   Optional
-   Defaults to true

Set disabled to false to enable this plugin.

**Advanced options**

Advanced options generally do not need to be configured.

#### pathfora.preview.global

-   Type string
-   Optional
-   Defaults to "pathfora"

The global variable of the Pathfora SDK.

#### pathfora.preview.polling.retries

-   Type number
-   Optional
-   Defaults to 5

Maximum number of times to poll for the Pathfora SDK before giving up.

#### pathfora.preview.variation.id

-   Type string
-   Optional
-   Defaults to undefined

The current legacy Lytics Personalize variation ID to preview. Whatever value is provided here may be overwritten by the value of the query parameter. See also [pathfora.preview.variation.previewKey](#pathforapreviewvariationpreviewkey).

#### pathfora.preview.variation.previewKey

-   Type string
-   Optional
-   Defaults to "lytics\_variation\_preview\_id"

The name of the query parameter representing the preview variation ID for a legacy Lytics Personalize campaign. See also [pathfora.preview.variation.id](#pathforapreviewvariationid).

#### pathfora.preview.variation.src

-   Type string
-   Optional
-   Defaults to ${config.url}/api/program/campaign/variation/preview/${config.cid}/{id}/config.js, where ${...} indicates string interpolation and {id} indicates a placeholder for the preview id which will be substituted at runtime.

The URL of the Pathfora preview config for a legacy Lytics Personalize campaign.

#### pathfora.preview.experience.id

-   Type string
-   Optional
-   Defaults to undefined

The current Lytics Experience ID to preview. Whatever value is provided here may be overwritten by the value of the query parameter. See also [pathfora.preview.experience.previewKey](#pathforapreviewexperiencepreviewkey).

#### pathfora.preview.experience.previewKey

-   Type string
-   Optional
-   Defaults to "lytics\_variation\_preview\_id"

The name of the query parameter representing the preview variation ID for a Lytics Experience. See also [pathfora.preview.experience.id](#pathforapreviewexperienceid).

#### pathfora.preview.experience.src

-   Type string
-   Optional
-   Defaults to ${config.url}/api/program/campaign/variation/preview/${config.cid}/{id}/config.js, where ${...} indicates string interpolation and {id} indicates a placeholder for the preview id which will be substituted at runtime.

The URL of the Pathfora preview config for a Lytics Experience.

[Learn more about configuration](/docs/lytics/jstag-configuration)

### Mechanism

This plugin works by appending script or link elements to the document and firing events notifying readiness of the requested resources.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| pathfora.preview.done | the preview is initialized | _none_ |
| pathfora.preview.sdkNotDetected | the Pathfora JavaScript SDK was not detected | _none_ |

[Learn more about events](/docs/lytics/jstag-events)
