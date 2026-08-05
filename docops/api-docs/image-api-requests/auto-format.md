---
title: "Auto format"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: /auto-format
product: Contentstack
doc_type: api-request
created_at: 2026-02-19T07:13:20.180Z
updated_at: 2026-02-23T12:30:03.400Z
---

# Auto format

<p>Let’s try converting an image to <strong>GIF</strong> format.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**Method**: `GET`

## Query Parameters

- **format** (optional)
  <p>Enter the format into which the source image needs to be converted.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

## Headers

- **accept** (optional)
  <p>Enter value <span class="code">image/webp</span> or <span class="code">image/avif</span>.</p><p class="note"><strong>Note</strong>: The internal server handling this API call does not support AVIF or WEBP formats. Hence this additional header needs to be included to receive the converted image. However, when running this query via Postman or on any browser that supports AVIF or WEBP format, the <span class="code">accept</span> header is not required.</p>

