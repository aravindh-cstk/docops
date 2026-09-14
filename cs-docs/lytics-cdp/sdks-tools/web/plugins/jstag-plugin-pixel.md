---
title: "pixel Plugin"
description: "Send data using an img element"
url: /lytics/jstag-plugin-pixel
uid: blt91226f984dfd1732
---

# pixel Plugin

## pixel Plugin

Send data using an img element

## \`pixel\` plugin

Send data using an img element

| Pixel |
| --- |
| namespace pixel |
| pixel utility |

### Interfaces

#### PixelOptions

##### properties

-   **src** string - the URL of the pixel to send data to
-   **success** _optional_ PixelSuccessCallback - a callback to call on success
-   **failure** _optional_ PixelFailureCallback - a callback to call on failure

#### PixelSuccessCallback

-   Type () => void;

#### PixelFailureCallback

-   Type (reason: any) => void;

### Plugin API

#### pixel(options: PixelOptions): void;

Send data using an img element.

##### parameters

-   **options** [PixelOptions](#pixeloptions)

##### example

```
jstag.use(plugin => {
  plugin.pixel({
    src: 'https://doesnt.exist/pixel.gif?data=whatever',

    success() {
      console.log('data sent!');
    },

    failure() {
      console.error('data not sent!');
    }
  })
});
```

### Mechanism

This plugin works by appending an [<img> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) to the DOM.

### Events

| Event | Fires when | Payload |
| --- | --- | --- |
| pixel.succeeded | the pixel request completes successfully. | the pixel URL |
| pixel.failed | the pixel request fails. | the pixel URL |

[Learn more about events](/docs/lytics/jstag-events)
