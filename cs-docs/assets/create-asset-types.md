---
title: "[AM2.0] - Create Asset Types"
description: Create asset types to define how a file format is identified and which user-defined fields apply to it.
url: https://www.contentstack.com/docs/assets/create-asset-types
product: Contentstack Assets
doc_type: guide
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Create Asset Types

This page explains how to create asset types in Assets so you can identify files by MIME type and extension and control which user-defined metadata fields apply. It is intended for users configuring asset management rules and metadata requirements, and should be used when you need consistent file classification and enforced metadata entry.

### Create Asset Types

Create asset types to define how a file format is identified and which user-defined fields apply to it. An asset type combines a MIME type and a file extension under a user-friendly name that makes it easier for contributors to recognize and work with. For example:
- The MIME type image/jpeg with the extension `.jpg` can be named **JPG Image**.
- The MIME type image/jpeg with the extension `.jpeg` can be named **JPEG Image**.

This approach gives you precise control over file identification while offering a familiar, accessible naming convention for users.

Beyond naming, asset types also let you define which metadata [fields](./create-user-defined-fields.md) apply to a given file format. When users upload or edit a file, the system automatically recognizes its asset type, displays the associated fields, and enforces your rules for metadata entry. This ensures that every file includes the right information, keeping your asset library consistent, searchable, and reliable.

To create asset types within Assets, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Assets** through “App Switcher” and select the **Asset Types** tab.
- Click **+ New Asset Type**.
- In the **Asset Type Properties** section, provide the following:**Asset Type Icon** (optional): Upload a PNG, JPG, or SVG under 256 KB.
- **Name** (required): A unique human-readable label (for example, JPEG Image, PNG Image, PDF Document). Maximum **50 characters**.
- **UID** (required): A unique system identifier using only letters, numbers, and underscores (e.g., jpeg). UID cannot be changed once saved.
- **Description** (optional): A short explanation of how this asset type is used.
- **Category** (optional): Select a predefined category (e.g., Images, Documents).
- **MIME Type** (required): Enter the MIME type for this asset type (for example, `image/jpeg`). An asset type corresponds to one MIME type.
- **File Extension** (required): Enter the extension for this asset type (for example, `.jpg`).The system verifies that the MIME type + file extension pair is unique across all asset types.
- In the **Fields** section, click the **+** “Insert a field” icon and select **Existing Field**.
- In the **Select Existing Fields** modal, search and select a field from the list of user-defined fields.**Tip:** Drag to reorder fields as needed.
- Click a field to open **Field Properties** on the right.**Note:** You can only view field properties on the right panel. To edit, go to the **Fields** section, open the field, and then make changes.
- Click **Save Asset Type**.

Your new asset type is now ready to classify files by MIME type and drive accurate, consistent metadata entry.

## Use Case: Creating a Custom 3MF Asset Type

Suppose you run an e-commerce site that allows customers to download 3D models of products. The `.3mf` format is not included in the out-of-the-box asset types, so you create it as a user-defined asset type.
- Click **+ New Asset Type**.
- In **Properties**, enter:**Name:** 3MF 3D Model
- **UID:** 3mf_model
- **Category:** 3D Models
- **MIME Type:** `model/3mf`
- **Extension:** `.3mf`
- **Description:** Custom 3D models for e-commerce products.
- In the **Fields** section, click **+** and select from existing fields:Product SKU (Mandatory)
- Model Dimensions
- Author Name
- License Expiration (Mandatory)
- Save the asset type.

Now, whenever a `.3mf` file is uploaded, Assets applies this asset type automatically and displays the mandatory fields for completion.

## Common questions

**Q: What uniquely identifies an asset type?**  
A: The system verifies that the MIME type + file extension pair is unique across all asset types.

**Q: Can I change the UID after saving an asset type?**  
A: No. “UID cannot be changed once saved.”

**Q: How do asset types affect metadata fields shown to users?**  
A: When users upload or edit a file, the system automatically recognizes its asset type, displays the associated fields, and enforces your rules for metadata entry.

**Q: Can I reorder fields on an asset type?**  
A: Yes. “Tip: Drag to reorder fields as needed.”