---
title: "Asset Limitations"
description: "Learn Contentstack asset limitations, including filename restrictions, file size limits, image dimensions, and animated GIF frame caps."
url: /headless-cms/asset-limitations
---

# Asset Limitations

## Asset Limitations

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
