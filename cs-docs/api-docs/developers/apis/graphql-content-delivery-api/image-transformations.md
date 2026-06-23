---
title: "GraphQL | Image Transformations"
description: Apply image transformation parameters in GraphQL queries to resize, crop, optimize, and format delivered assets.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/image-transformations
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Image Transformations

You can use the parameters of Contentstack’s [Image Delivery API](/docs/developers/apis/image-delivery-api) in GraphQL queries to transform images while fetching them.  
  
The following table consists of the different parameters that Contentstack GraphQL supports for image delivery, along with their acceptable values:

| Parameter | Supported Values |
| --- | --- |
| auto | WEBP |
| width | String |
| height | String |
| disable | UPSCALE |
| format | GIFPNGJPGPJPGWEBPWEBPLLWEBPLY |
| fit | BOUNDSCROP |
| quality | Integer |
| crop | String |
| trim | String |
| orient | DEFAULTHORIZONTALLYBOTHVERTICALLYROTATE90LEFTROTATE90RIGHT |
| overlay | String |
| overlay_align | TOPBOTTOMLEFTRIGHTMIDDLECENTER |
| overlay_repeat | XYBOTH |
| overlay_width | String |
| overlay_height | String |
| pad | String |
| bg_color | String |
| dpr | String |
| disposition | ATTACHMENTINLINE |

Let us look at a few simple and complex examples to understand how Contentstack’s Image Delivery parameters work with GraphQL queries to transform images.

## Using a Single Parameter

### Try 'Format' Parameter

**** `/stacks/apiKey/explore`

Let’s get started by using a single format parameter to understand how these parameters function.

To convert an image placed on your Contenstack website from one format to another, use the format parameter. For example, we have set the format parameter to GIF in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
            url(transform: {format: GIF})
    }
  }
}
```

This query will convert the current image format to a GIF format.




## Using Multiple Parameters

### Try 'Width' and 'Height' Parameters

**** `/stacks/apiKey/explore`

Let’s look at a few sample GraphQL queries that make use of multiple parameters.

##### Changing the Width and Height

To dynamically resize the width and height of your output image, use the width and height parameters. For example, we have set the values of the width and height parameters to ‘650’ and ‘400’, respectively, in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {width: "650", height: "400", disable: UPSCALE})
    }
  }
}
```

This query will render an output image with width and height values of 650 and 400 pixels, respectively.

**Note**: We have also set the disable parameter to UPSCALE to disable the upscale image feature for the output image in the above image transformation query.


### Try 'Overlay' and 'Overlay Align' Parameters

**** `/stacks/apiKey/explore`

##### Using the Overlay and Overlay Align Parameters

To place one image on top of another, use the overlay parameter. In addition, use the overlay_align parameter to define the position of the overlay image.

For example, we have specified the value of the overlay parameter as the URL of the image to be placed on top. We have also set the value of the overlay_align parameter as ‘LEFT’ in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {overlay: "/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/download", overlay_align: LEFT})
    }
  }
}
```

This query will place the image lying at the specified URL on top of the original image. It will also align the overlay image toward the left side of the original image.

