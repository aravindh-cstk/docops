---
title: Set Up Your Project - File
description: Documentation for the File field used to upload and use files in an entry, including configurable properties and related resources.
url: https://www.contentstack.com/docs/developers/create-content-types/file
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# Set Up Your Project - File

This page describes the **File** field, how it is used to upload and manage files within entries, and which field properties can be configured. It is intended for developers and content managers setting up or maintaining content types, and should be used when modeling content that requires file or asset uploads.

## File

The **File **field enables users to upload and use files in an [entry](/docs/content-managers/working-with-entries/about-entries). The File field can be used to add assets, such as images, videos, PDFs, and audio files to your entries.

The File field possesses certain [properties](/docs/developers/create-content-types/about-field-properties) that you can change at any time as per your requirements. The properties that can be modified are “[Display Name](/docs/developers/create-content-types/display-name),” “[Unique ID](/docs/developers/create-content-types/unique-id),” “[Instruction Value](/docs/developers/create-content-types/instruction-value),” “[Help Text](/docs/developers/create-content-types/help-text),” “[Mandatory](/docs/developers/create-content-types/mandatory),” “[Multiple](/docs/developers/create-content-types/multiple),” “[Allow Images Only](/docs/developers/create-content-types/allow-images-only),” “[Non-localizable](/docs/developers/create-content-types/non-localizable),” “[Allowed file type(s)](/docs/developers/create-content-types/allowed-file-types),” and “[File size limit](/docs/developers/create-content-types/file-size-limit) (MB).”

**Note**: If you select the **Multiple** property for this field and mentioned a number, for example 5, in the **Set Maximum Limit** sub-property, then at once you can upload only those numbers of files.

After adding this field in content type, you will see it on your entry page as shown below:

**Additional Resource**:
- If you want to hide/show a field when certain conditions are met, you can use [Field Visibility Rules.](/docs/developers/create-content-types/about-field-visibility-rules)
- To learn how you can use a field for a given scenario, we recommend you to check out our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide.
- Editing any current field in existing Content Type might result in data loss. To prevent data loss, make sure to check out our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide.

## Common questions

1. **What kinds of assets can the File field store?**  
   The File field can be used to add assets, such as images, videos, PDFs, and audio files to your entries.

2. **Which properties can be modified for the File field?**  
   The properties that can be modified are “Display Name,” “Unique ID,” “Instruction Value,” “Help Text,” “Mandatory,” “Multiple,” “Allow Images Only,” “Non-localizable,” “Allowed file type(s),” and “File size limit (MB).”

3. **How does the Multiple property affect uploads?**  
   If you select the **Multiple** property and set a number in **Set Maximum Limit**, then at once you can upload only those numbers of files.

4. **Where can I learn about hiding/showing fields based on conditions?**  
   You can use [Field Visibility Rules.](/docs/developers/create-content-types/about-field-visibility-rules)