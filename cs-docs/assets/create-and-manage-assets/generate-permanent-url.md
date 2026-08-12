---
title: "Generate Permanent URL"
description: "Discover how Contentstack's permanent URLs ensure stable asset references, even after updates. Learn to generate consistent links effortlessly."
url: /assets/generate-permanent-url
---

# Generate Permanent URL

## Generate Permanent URL

Assets allows you to assign a permanent URL to an asset. A permanent URL provides a stable, unchanging reference to the asset, even if the underlying file is updated or replaced. This eliminates the need to manually update asset references in entries whenever the asset file changes.

Every asset has two types of URLs:

-   **Auto-generated asset URL**: The default system-generated URL for the asset that changes whenever the asset is updated or replaced.
-   **Permanent asset URL**: A constant, non-editable URL that remains the same regardless of file updates or replacements.

**Example:**

-   Initial upload URL:
    
    ```
    https://assets.contentstack.io/spaces/ambc6ed3deb2dbba87/assets/am3740ef98897fc99a/ad2ed624b04a86eec6476408/sample_logo.png
    ```
    
-   After replacing the file, the auto-generated URL changes to:
    
    ```
    https://assets.contentstack.io/spaces/ambc6ed3deb2dbba87/assets/am3740ef98897fc99a/fecd4e011526cf7beaa85faa/new_sample_logo.png
    ```
    
-   With a permanent URL, the reference stays unchanged:
    
    ```
    https://assets.contentstack.io/spaces/ambc6ed3deb2dbba87/assets/am3740ef98897fc99a/sample_logo.png
    ```
    

**Permanent URL Structure:**

A permanent URL follows this structure:

```
https://{base_url}/v3/spaces/{space_uid}/assets/{asset_uid}/{slug}
```

Here:

-   space\_uid uniquely identifies your space.
-   asset\_uid is the unique identifier for the asset.
-   slug is a user-defined identifier (up to 255 characters) that describes the asset.

**Example:**

```
https://assets.contentstack.io/spaces/ambc6ed3deb2dbba87/assets/am3740ef98897fc99a/sample_logo.png
```

To generate a permanent URL for an asset:

1.  Select the asset.
2.  In the right-hand panel, click the “Non-Editable Metadata” icon.
3.  The **System Metadata** section displays all system-managed fields. Click the "**+**" icon beside **Permanent URL**.
4.  Enter a slug for the permanent URL that describes the asset meaningfully.
    
    **Note:** The slug supports a maximum of **255 characters** and accepts only letters (A-Z, a-z), digits (0-9), underscores (\_), hyphens (-), and dots (.). Any other character is replaced with an underscore (\_). For example, my logo@2x.png becomes my\_logo\_2x.png.
    
5.  Click **Save Asset** to generate the permanent URL.

The permanent URL becomes active immediately and can be used in entries, APIs, or external systems.

## Limitations

-   You can generate a permanent URL for an asset only once. Once created, it cannot be modified or regenerated.
-   The maximum length of the slug is **255 characters**.
