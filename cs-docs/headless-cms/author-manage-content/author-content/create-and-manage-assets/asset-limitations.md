---
title: "Asset Limitations"
description: "Learn Contentstack asset limitations, including filename restrictions, file size limits, image dimensions, and animated GIF frame caps."
url: /headless-cms/asset-limitations
uid: bltd9e6ede9947b91c7
---

# Asset Limitations

## Asset Limitations

**Note:** These limits apply to assets stored in a stack. [New Assets](/docs/assets/assets-limitations) raises several of them, supporting files up to **1 GB** via the UI, **10 GB** via the API, and **500,000** assets per organization.

-   The filename or URL of an asset cannot include the following characters:

    ```
    # % ^ + \ / ? \ * : | " ' < > \ s { } = ,
    ```

    **Note:** Any restricted character will automatically be replaced with an underscore (\_).

-   The maximum file size allowed for an asset is **700 MB** via UI and **100 MB** via API.
-   A maximum of **10 assets** can be uploaded in a single batch.
-   Each stack can store up to **10,000** assets.
-   When optimizing images,
    -   The maximum input file size is **50 MB**
    -   The maximum input image dimensions cannot exceed **12,000 x 12,000 pixels**
    -   The maximum output image dimensions are limited to **8,192 x 8,192 pixels (8K Ultra HD)**
    -   Animated GIFs can include a maximum of **1,000 frames**

**Note:** To request an increase in any of the default limits, contact our [support](mailto:support@contentstack.com) team.
