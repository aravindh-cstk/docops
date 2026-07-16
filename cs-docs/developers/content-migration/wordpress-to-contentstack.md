---
title: "[Content Migration] - Wordpress to Contentstack"
description: Guide to migrating content from Wordpress to Contentstack using the Contentstack Migration Framework.
url: https://www.contentstack.com/docs/headless-cms/wordpress-to-contentstack
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Content Migration] - Wordpress to Contentstack

This page explains how to use the Contentstack Migration Framework to migrate content from Wordpress into a Contentstack stack. It is intended for Contentstack users with Admin or Owner access who are setting up and running a Wordpress-to-Contentstack migration workflow.

## Wordpress to Contentstack

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](../set-up-stack/about-stack.md) within Contentstack. This guide outlines the process for performing a content migration.

## Tutorial Video

Watch the tutorial video to get a complete walkthrough of the framework.

## Prerequisites

Before you begin the installation and migration process, ensure that you have the following prerequisites:

- [Contentstack account](https://www.contentstack.com/login) with [Admin](../organization/organization-roles.md#organization-admin) or [Owner](../organization/organization-roles.md#organization-owner) role access

**Note:** The Migration Framework must be installed and running on your system. Refer to the [Setup Guides](../content-migration.md#setup-guides) for installation instructions.

## Migrate Content from Wordpress

Follow these steps to perform the content migration for Wordpress:

### Step 1 - Log In to the Migration Framework

- From the welcome page, click **Sign in with Contentstack**.![W2C_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5365c1c72fd09e2/68398980116bcf65be21ceff/W2C_1.png)
- You will be redirected to the login page with region selection.![W2C_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt63e6558c11019eef/68398980df13924a03f5a5f6/W2C_2.png)
- Log in using your Contentstack credentials.

### Step 2 - Select Your Organization

- After logging in, you will see an empty dashboard.
- Select your organization from the dropdown in the top left corner.![W2C_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d6188de29a0ebf5/683989807f9f73ea787dc1a7/W2C_3.png)

### Step 3 - Create a New Project

- Click **+ New Project**.
- Enter a **Name** and **Description** for your project.![W2C_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3cf86d295f786af/68398974fd6bfcfc2098e5ed/W2C_4.png)
- Click **Create Project**.

### Step 4 - Select and Validate Legacy CMS Data

- By default Wordpress will be selected as your legacy CMS.
- Add a **2–5 character affix** for the source name. Use only letters, no numbers or special characters. Make sure the affix does not match with one of the [restricted keywords](../create-content-types/restricted-keywords-for-uids.md).![W2C_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedc5d31b1a2074f5/68398974bac1ae5ea43cb935/W2C_5.png)

  **Note:** The affix will function as a prefix if the content type UID matches with restricted UIDs. The affix will function as a suffix for field UIDs.
- Click **Validate File** to validate the exported content.![W2C_6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2741ea5731579208/68398975f809c103dc3dfbd3/W2C_6.png)

  **Note:** If validation fails, it may be caused by one or more of the following issues:

**File Format Error**: Ensure the file is in the desired format.
- **Missing Content**: Ensure the exported data contains all required content.
- **Incomplete Files**: Verify that no files are missing or corrupted.
- Click **Save and Continue**.

### Step 5 - Configure Destination Stack

- Either select an existing stack with content types or create a new stack.
- For this guide, we will migrate content to an existing stack.![W2C_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt556df30ef0bdfe86/683989743c2a371640e1a457/W2C_7.png)
- In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
- Click **Add Language** if multiple locales need to be mapped.![W2C_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt982a124473aebbbd/68398c2f9822ae8333f38061/W2C_8.png)
- Click **Save and Continue**.

### Step 6 - Map Content Types

This step is crucial in ensuring that fields from your legacy CMS are correctly aligned with their corresponding fields in Contentstack.

#### Search and Preview Content Models

On the left-hand side, a list of content types and global fields imported from the legacy CMS is displayed.

- Use the search bar to quickly locate specific content types within the list.
- Each content type has a status icon beside it:**Blue tick**: The content type was successfully mapped from the legacy CMS to Contentstack.
- **Red cross**: The mapping failed.
- **Green tick**: A previously mapped (blue ticked) content type was updated or saved.
- A filters dropdown is available next to the search bar, allowing users to filter content types based on:All
- Failed
- Mapped
- Updated
- A 'Schema Preview' icon next to each content type allows you to view the schema and fields.

**Note:** If mapping fails, it could be due to a UID mismatch between the legacy CMS and the destination stack.

#### Map Content Fields

The interface consists of two sections:

- **Source content types**: Displays the fields for the selected content type from the legacy CMS.
- **Destination (Contentstack) content types**: Displays the fields mapped to the corresponding Contentstack content type.

By default, all fields are selected for migration, but users can uncheck fields they don’t want to migrate.

The framework attempts to auto-map fields based on the selected source CMS.

**Note:** The **Title** and **URL** fields are auto-mapped and cannot be edited.

#### Handle Different Mapping Scenarios

Select a content type from the dropdown to map fields accordingly. Adjust mappings manually if needed.

**Note:** If the stack is empty, mappings rely solely on Contentstack’s field data types.

Use the following advanced options to efficiently manage your mappings:

- **Search for Specific Fields**: Use the search bar in the mapping interface to locate specific field names.
- **Reset to system mapping**: Click the ‘Reset to system mapping’ icon to revert any changes done to the default mappings.
- **Select content type from destination stack**: Override the default behavior of creating new content types.
- **Fetch content types from destination stack**: If updates are made in the stack during migration, click the icon to fetch changes.

  **Note:** If the user has created a new stack in [Step 5](./wordpress-to-contentstack.md#step-5-configure-destination-stack), they will not see the ‘Fetch content types from destination stack’ icon and the ‘Select Content Type from Destination Stack’ dropdown. However, if an existing stack was selected, the icons will be available.
- **Advanced properties**: Click the ‘Advanced properties’ icon next to each field to adjust field specific properties.

Click **Save** to preserve the current mapping settings. Ensure the mapping for all content types is completed for a seamless migration experience.

Click **Continue**.

### Step 7 - Run a Test Migration

- Click **Create Test Stack** to create a sample stack within your organization.
- Click **Start Test Migration** to perform a test migration.![W2C_13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c654af63b6da172/6839897522d56982a7353826/W2C_13.png)
- A success or error message will be displayed in the logs after completion.![W2C_14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6efa9b4df1a19fb9/6839897522d5691a0f353822/W2C_14.png)

  **Note:** Test migration performs the migration on a small chunk of data to validate success.
- Click **Continue**.

### Step 8 - Execute the Migration

- After a successful test migration, click **Start Migration** to perform the full migration to your selected stack.![W2C_15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0387709d9d91b5b3/683989749822ae0204f38040/W2C_15.png)
- Upon completion, a success message appears in the logs with a link to your stack. The migrated data is now available in the destination stack within Contentstack.

**Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.

You have now successfully migrated your content from Wordpress to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.

Happy migrating!

## Common questions

### What role access do I need to run this migration?
You need a [Contentstack account](https://www.contentstack.com/login) with [Admin](../organization/organization-roles.md#organization-admin) or [Owner](../organization/organization-roles.md#organization-owner) role access.

### What should I do if “Validate File” fails?
Check the listed causes: **File Format Error**, **Missing Content**, and **Incomplete Files**, then validate again.

### Can I edit the Title and URL field mappings?
No. **Note:** The **Title** and **URL** fields are auto-mapped and cannot be edited.

### Can I run another migration on the same stack after one completes?
No. **Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.