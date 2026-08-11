---
title: "Secure Public URLs of Assets"
description: "Secure your Contentstack assets with URL protection, ensuring safe, authenticated access to prevent unauthorized content retrieval. Enable today for added security."
url: /administration/secure-public-urls-of-assets
---

# Secure Public URLs of Assets

## Secure Public URLs of Assets

Contentstack provides asset URL security, allowing teams to protect content by restricting public access to asset URLs. When enabled for a stack, assets cannot be accessed directly by their URLs without valid authentication parameters, helping prevent unauthorized retrieval of sensitive or private content.

## What You Will Learn

-   How to access secured published assets with a delivery token and environment.
    
-   How secure asset URLs affect rich text fields and the Image Delivery API.
    
-   How to access draft assets with an Authtoken or Management Token.
    
-   How to enable secure asset URLs for your stack.
    

## How To Access Secured Published Assets

To access a secured asset, you must include both a [delivery token](/docs/headless-cms/about-delivery-tokens) and an [environment](/docs/headless-cms/about-environments) name as query parameters in the asset URL.

Example URLs:

-   https://assets.contentstack.io/v3/assets/{stack\_uid}/{asset\_uid}/{asset\_version\_id}/asset\_file\_of\_pdf.pdf?access\_token={delivery\_token}&environment={environment\_name}
-   https://images.contentstack.io/v3/assets/{stack\_uid}/{asset\_uid}/{asset\_version\_id}/image\_file\_name.jpeg?access\_token={delivery\_token}&environment={environment\_name}

**Note:** Delivery tokens are scoped to environments. Adding the environment parameter strengthens validation by ensuring the asset is authorized in the correct context.

## Behavior and Limitations

When secure asset URLs are enabled, the following limitations apply:

-   **Rich Text Fields (RTE, JSON RTE, and Markdown):** Once asset privatization is enabled, these fields would no longer support asset or image insertion using the standard file picker. As a workaround, to include a secured asset, manually append the required authentication parameters to the URL.
    
    **Warning:** Manually appending the asset URL is not recommended for rich text fields due to maintainability and potential security exposure.
    
-   **Image Delivery API Limitations:** The [overlay](/docs/developers/apis/image-delivery-api#overlay) transformation parameter does not function with secured assets.

## How To Access Draft Assets

To access draft (unpublished) assets, use either an [Authtoken](/docs/developers/apis/content-management-api#how-to-get-authtoken) or a [Management Token](/docs/developers/apis/content-management-api#how-to-get-management-tokens) with the [Content Management APIs](/docs/developers/apis/content-management-api#api-reference).

**Note**: Delivery tokens work only for published assets and cannot be used to fetch draft versions.

## How To Enable Secure Asset URLs

To enable asset URL security for your stack, contact our [support](mailto:support@contentstack.com) team.

**Note:** Asset security is applied at the stack level. Authenticated users can still download and manage assets directly through the Contentstack web app.

Securing asset URLs adds an additional layer of control and protection for your content.
