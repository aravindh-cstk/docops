---
title: "Image | Convert Formats"
description: Use Image Delivery API endpoints for convert formats operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/convert-formats
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Convert Formats



## Format

The format parameter lets you convert a given image from one format to another. The formats that the source image can be converted to are auto, gif, png, jpg (for JPEG), pjpg (for Progressive JPEG), webp, webpll (Lossless), webply (Lossy), and avif.

Of the formats mentioned above, JPEG, Progressive JPEG, AVIF, and WEBP (Lossy) support the quality parameter.

**Note**:

- If your source image is in HEIC format, you must specify an output format due to limited browser support.
- Check the applicable limitations here.

The format=auto parameter will serve the WebP or AVIF format to browsers that support it. If this option is not specified, a standard format like JPEG or PNG will be used.

### Auto format

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

Let’s try converting an image to **GIF** format.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `auto`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

#### Headers

- **accept** (optional)
  Enter value image/webp or image/avif. **Note**: The internal server handling this API call does not support AVIF or WEBP formats. Hence this additional header needs to be included to receive the converted image. However, when running this query via Postman or on any browser that supports AVIF or WEBP format, the accept header is not required.
  Default: `image/webp`


### Convert to GIF

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

Images can also be easily converted to **PNG** format.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `gif`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to PNG

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format_value}`

**JPEG** is one of most common image formats.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `png`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to JPEG

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

A **Progressive JPEG** is an image file created using a compression method that displays higher detail in progression. When a Progressive JPEG image is loaded, it first loads a lower-quality pixelated version, and then gradually increases in quality and detail. Due to this, Progressive JPEG files (or its lower-quality version) loads faster than the baseline JPEG files.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `jpg`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to Progressive JPEG

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**AVIF** images provide better compression and quality.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `pjpg`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to AVIF

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**WEBP** images are usually lower in size and have good quality. The WEBP images files are currently supported only in Google Chrome, Opera, and Android browsers.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `avif`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to WEBP

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

WEBP images are of two types: Lossy and Lossless. In the former, the data lost while compression cannot be reversed, hence the quality can be lower. While with the later format, no data is lost while compression and quality remains the same even after compression. 

Let’s try converting to **WEBP Lossy** first.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `webp`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to WEBP Lossy

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

Now let’s convert an image to **WEBP Lossless** format.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `webply`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Convert to WEBP Lossless

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**Additional Notes**:

1. The quality parameter can used only with JPEG, Progressive JPEG, AVIF, or WEBP (Lossy) image types.
2. The WEBP and AVIF image type is supported only by Google Chrome, Opera, and Android browsers.
3. GIF transcoding is not supported as of now.
4. If 'auto=webp' or 'auto=avif' is used with the format parameter, the browsers that support the WEBP format will ignore the format parameter.

#### Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `webpll`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

