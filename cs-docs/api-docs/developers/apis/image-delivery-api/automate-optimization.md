---
title: "Image | Automate Optimization"
description: Use Image Delivery API endpoints for automate optimization operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/automate-optimization
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Automate Optimization



## Auto

The auto parameter lets you enable the functionality that automates certain image optimization features. As of now, there are two possible values for this field, i.e., webp and avif. When the auto parameter is set to webp, it enables WebP image support. When set to avif, it enables AVIF image support. Both formats produce images at a higher compression ratio with a lower loss of quality compared to JPEG.

**Additional Resources**: The AVIF and WebP formats are not supported in all browsers. For more information on browsers and operating systems that support WebP images, refer the official [WebP](https://developers.google.com/speed/webp) doc by Google. You will find additional information on their [WebP FAQs](https://developers.google.com/speed/webp/faq) page. For more information on WebP and AVIF support, refer to Fastly's [auto](https://www.fastly.com/documentation/reference/io/auto/) documentation.

**Note:** Currently, the auto parameter doesn't work for GIF files.

Let's try enabling the auto parameter.

### Enable auto optimization

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&auto={auto_value}`

WebP and AVIF images are not supported by all browsers. If the auto parameter is used along with the format parameter, the former overrides the latter in browsers that support WebP and AVIF formats. In browsers that do not support WebP or AVIF format, the format parameter will be applied.

Let's try enabling the auto parameter along with the format parameter, for browsers that do not support WebP or AVIF formats, and encode them to progressive JPEG.

#### Query Parameters

- **auto** (optional)
  Enter value for auto optimization of the image.
  Default: `webp`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

#### Headers

- **accept** (optional)
  Enter value image/webp or image/avif depending on the value of auto parameter. **Note**: The internal server handling this API call does not support AVIF or WEBP formats. Hence this additional header needs to be included to receive the converted image. However, when running this query via Postman or on any browser that supports AVIF or WEBP format, the accept header is not required.
  Default: `image/webp`


### Enable auto optimization and encode to progressive JPEG

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}&auto={auto}`

##### Additional Notes

1. WEBP and AVIF formats are not supported by all browsers.
2. If the format parameter is used with this parameter, the format parameter will be ignored in browsers that support WEBP and AVIF formats.

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **auto** (optional)
  Enter value for auto optimization of the image. It can either be webp or avif.
  Default: `webp`
- **format** (optional)
  Enter the format that the image needs to be converted to for browsers that don’t support WEBP or AVIF.
  Default: `pjpg`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

