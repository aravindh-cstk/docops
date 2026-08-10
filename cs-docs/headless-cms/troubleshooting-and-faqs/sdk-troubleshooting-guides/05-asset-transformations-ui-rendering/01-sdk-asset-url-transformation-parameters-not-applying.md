---
title: "SDK Asset URL Transformation Parameters Not Applying"
description: "SDK Asset URL Transformation Parameters Not Applying"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/05-asset-transformations-ui-rendering/01-sdk-asset-url-transformation-parameters-not-applying
doc_type: faq
_cms_section_uid: cs541cf84fe03e20d3
_cms_faq_uid: cs65c1dbca8008147d
---

# SDK Asset URL Transformation Parameters Not Applying

Developers attempt to resize an asset using SDK helper methods (e.g., .width(200)), but the resulting URL does not contain the transformation parameters.

**Root Cause**

Transformation methods are being chained on the URL string directly rather than using the ImageTransform class required by modern SDK versions to generate valid query parameters.

**Resolution**

Legacy chaining assumptions can generate unchanged URLs when transformation objects are not applied correctly.

1.  Build transform instructions with ImageTransform.
2.  Apply transformation through the SDK URL transform API.
3.  Confirm the asset is an image and not a non-transformable file type.

import

{

ImageTransform

,

Format

}

from

'@contentstack/delivery-sdk'

;

const

transform =

new

ImageTransform

().

resize

({

width

:

200

}).

format

(

Format

.

PJPG

);

const

transformedUrl = assetUrl.

transform

(transform);

The generated URL contains expected transform parameters (for example width=200) and transformed asset loads. Escalate with original URL, transformed URL, and asset MIME type.
