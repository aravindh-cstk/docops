---
title: "[Manage Asset Security] - Secure Public URLs of Assets"
description: Contentstack provides asset URL security, allowing teams to protect content by restricting public access to asset URLs.
url: https://www.contentstack.com/docs/administration/secure-public-urls-of-assets
product: Contentstack
doc_type: security-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Manage Asset Security] - Secure Public URLs of Assets

This page explains how Contentstack asset URL security works, how to access secured published and draft assets, and what limitations apply. It is intended for developers and stack administrators who need to protect asset access and validate requests using tokens and environment context.

## Secure Public URLs of Assets

Contentstack provides asset URL security, allowing teams to protect content by restricting public access to asset URLs. When enabled for a stack, assets cannot be accessed directly by their URLs without valid authentication parameters, helping prevent unauthorized retrieval of sensitive or private content.

## How To Access Secured Published Assets

To access a secured asset, you must include both a [delivery token](/docs/developers/create-tokens/about-delivery-tokens) and an [environment](/docs/developers/set-up-environments/about-environments) name as query parameters in the asset URL.

Example URLs:
- `https://assets.contentstack.io/v3/assets/{stack_uid}/{asset_uid}/{asset_version_id}/asset_file_of_pdf.pdf?access_token={delivery_token}&environment={environment_name}`
- `https://images.contentstack.io/v3/assets/{stack_uid}/{asset_uid}/{asset_version_id}/image_file_name.jpeg?access_token={delivery_token}&environment={environment_name}`

**Note:** Delivery tokens are scoped to environments. Adding the `environment` parameter strengthens validation by ensuring the asset is authorized in the correct context.

## Behavior and Limitations

When secure asset URLs are enabled, the following limitations apply:
- **Rich Text Fields (RTE, JSON RTE, and Markdown):** Once asset privatization is enabled, these fields would no longer support asset or image insertion using the standard file picker. As a workaround, to include a secured asset, manually append the required authentication parameters to the URL.**Warning:** Manually appending the asset URL is not recommended for rich text fields due to maintainability and potential security exposure.
- **Image Delivery API Limitations:** The [overlay](/docs/developers/apis/image-delivery-api#overlay) transformation parameter does not function with secured assets.

## How To Access Draft Assets

To access draft (unpublished) assets, use either an [Authtoken](/docs/developers/apis/content-management-api#how-to-get-authtoken) or a [Management Token](/docs/developers/apis/content-management-api#how-to-get-management-tokens) with the [Content Management APIs](/docs/developers/apis/content-management-api#api-reference).

**Note**: Delivery tokens work only for published assets and cannot be used to fetch draft versions.

## How To Enable Secure Asset URLs

To enable asset URL security for your stack, contact our [support](mailto:support@contentstack.com) team.

**Note:** Asset security is applied at the stack level. Authenticated users can still download and manage assets directly through the Contentstack web app.

Securing asset URLs adds an additional layer of control and protection for your content.

## Common questions

### Do I need both `access_token` and `environment` to access a secured published asset?
Yes. To access a secured asset, you must include both a delivery token (`access_token`) and an environment name (`environment`) as query parameters in the asset URL.

### Can I use a delivery token to access draft (unpublished) assets?
No. Delivery tokens work only for published assets and cannot be used to fetch draft versions.

### What token should I use to access draft assets?
Use either an Authtoken or a Management Token with the Content Management APIs.

### How do I enable secure asset URLs for my stack?
To enable asset URL security for your stack, contact the support team at [support@contentstack.com](mailto:support@contentstack.com).