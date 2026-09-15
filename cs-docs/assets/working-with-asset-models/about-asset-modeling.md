---
title: "About Asset Modeling"
description: "Optimize your digital assets with Contentstack's asset modeling. Customize asset types and metadata fields for seamless management and smarter workflows."
url: /assets/about-asset-modeling
uid: bltcdc5d92449b2cf87
---

# About Asset Modeling

## About Asset Modeling

Asset modeling lets you structure, enrich, and manage your digital assets more effectively. You can **create user-defined fields**, **create asset types**, and **assign these fields to your asset types**, all at the product level.

Out of the box, Contentstack provides a wide range of system-defined asset types, including standard images, audio, video, documents, archives, and many more. But every business has unique formats. For example, you might need to handle 3MF 3D models, which are not supported by default. With asset modeling, you can create a custom asset type for .3mf files, map it to the MIME type model/3mf, and add fields such as product SKU, model dimensions, and license expiration.

This flexibility means you are not limited to what comes built in. You can expand the system to capture the exact metadata your workflows demand.

## Why Create User-Defined Fields?

User-defined fields are custom metadata fields that capture information specific to your assets. Unlike default file properties (such as file name or size), user-defined fields allow you to record data that aligns with your business processes, compliance needs, or campaign workflows.

Key features:

-   **Reusable Across Asset Types**: Define a field once and apply it to one or many asset types. For example, a photographer name field can be reused across all photography-related asset types.
-   **Configurable Metadata Input**: Choose from a wide range of field types, such as:
    -   Single Line Textbox
    -   Multi Line Textbox
    -   Link
    -   Select
    -   Number
    -   Date
    -   Boolean
    -   Group

**Note:** Currently, we support single line, number, and group fields. Rest of the fields will be available soon.

**Additional Resource:** Refer to the [Field Types](/docs/assets/field-types) document for more information on how to use these fields.

## Understand Asset Types

An asset type defines how Contentstack recognizes a file format and what metadata fields apply to it.

-   An asset type always corresponds to exactly one MIME type.
-   You can associate one file extension with each asset type.
-   Each asset type has a user-friendly name that makes it easier for contributors to identify and work with.

Example:

-   **MIME type:** image/jpeg
-   **Extension:** .jpg
-   **Asset Type Name:** JPG Image

You could also define:

-   **MIME type:** image/jpeg
-   **Extension:** .jpeg
-   **Asset Type Name:** JPEG Image

Both map to the same MIME type but represent different extensions with clear names.

## Example: 3MF 3D Model

A retailer that sells 3D-printable products wants to manage .3mf files in its library. Out of the box, .3mf is not supported, so the admin creates a custom asset type:

-   **Name:** 3MF 3D Model
-   **MIME Type:** model/3mf
-   **Extension:** .3mf
-   **Associated Fields:**
    -   Product SKU (Single Line Textbox, Mandatory)
    -   Model Dimensions (Single Line Textbox, for example 10x10x15 cm)
    -   Creator (Single Line Textbox)
    -   License Expiration (Date, Mandatory)

Whenever a file of MIME type model/3mf and extension .3mf is uploaded, the system automatically applies this asset type and displays the associated fields. Contributors cannot complete the upload until they provide values for all mandatory fields.

Start modeling your assets today to unlock smarter workflows, richer metadata, and a more powerful digital asset experience in Contentstack.
