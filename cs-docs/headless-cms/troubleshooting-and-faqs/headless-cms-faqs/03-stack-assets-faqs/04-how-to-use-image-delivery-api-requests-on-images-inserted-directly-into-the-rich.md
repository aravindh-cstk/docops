---
title: "How to use Image Delivery API requests on images inserted directly into the Rich Text Editor (RTE)?"
description: "How to use Image Delivery API requests on images inserted directly into the Rich Text Editor (RTE)?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/03-stack-assets-faqs/04-how-to-use-image-delivery-api-requests-on-images-inserted-directly-into-the-rich
doc_type: faq
_cms_section_uid: cs6981e9f59ce0aec5
_cms_faq_uid: cs8c6bd006922b628b
---

# How to use Image Delivery API requests on images inserted directly into the Rich Text Editor (RTE)?

Contentstack does not support applying [Image Delivery API](/docs/developers/apis/image-delivery-api/) requests on images directly inserted into text fields. However, you can achieve this by following these steps:

1.  **Upload the Image as an Asset**: Upload the image to the Asset module using the [Upload Asset](/docs/developers/apis/content-management-api#upload-asset) API call. The response body will include the url parameter containing the asset’s URL and a unique uid for the uploaded asset.
2.  **Insert the URL into the Text Field**: In the **Rich Text Editor** (**RTE**) or any other text field, switch to the HTML code view and use the asset URL as the image source instead of directly inserting the image.
3.  **Use the Image Delivery API**: With the asset’s UID and URL, you can apply Image Delivery API requests to modify the image as needed.
