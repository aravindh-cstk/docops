---
title: "[Content Migration] - Sitecore to Contentstack"
description: Guide for using the Contentstack Migration Framework to migrate content from Sitecore to Contentstack.
url: https://www.contentstack.com/docs/headless-cms/sitecore-to-contentstack
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Content Migration] - Sitecore to Contentstack

This page explains how to use the Contentstack Migration Framework to migrate content from a legacy CMS (Sitecore) into Contentstack. It is intended for Contentstack Admins/Owners and developers responsible for planning and executing migrations, and should be used when setting up and running a Sitecore-to-Contentstack migration project.

## Sitecore to Contentstack

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](../set-up-stack/about-stack.md) within Contentstack. This guide outlines the process for performing a content migration.

## Tutorial Video

Watch the tutorial video to get a complete walkthrough of the framework.

## Prerequisites

Before you begin the migration process, ensure that you have the following prerequisite:
- [Contentstack account](https://www.contentstack.com/login) with [Admin](../organization/organization-roles.md#organization-admin) or [Owner](../organization/organization-roles.md#organization-owner) role access

**Note:** The Migration Framework must be installed and running on your system. Refer to the [Setup Guides](../content-migration.md#setup-guides) for installation instructions.

## Migrate Content from Sitecore

Follow these steps to perform the content migration for Sitecore:

### Step 1 - Log In to the Migration Framework
- From the welcome page, click **Sign in with Contentstack**.![S2C_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16eb7dc1de93584f/6814a46979652b3b2e648424/S2C_1.png)
- You will be redirected to the login page with region selection.![S2C_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0baffe5177cb5403/6814a46ac4a377c4d41a6d20/S2C_2.png)
- Log in using your Contentstack credentials.

### Step 2 - Select Your Organization
- After logging in, you will see an empty dashboard.
- Select your organization from the dropdown in the top left corner.![S2C_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ae92a84f6b33d31/6814a4690dc84ff4d3858c53/S2C_3.png)

### Step 3 - Create a New Project
- Click **+ New Project**.
- Enter a **Name** and **Description** for your project.![S2C_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt848ad8693502634f/6814a469c4a3774aea1a6d1c/S2C_4.png)
- Click **Create Project**.

### Step 4 - Select and Validate Legacy CMS Data
- Select your legacy CMS version.![S2C_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97de56be13ad5db8/6814a469b259395db2bced04/S2C_5.png)
- Add a **2–5 character affix** for the source name. Use only letters, no numbers or special characters. Make sure the affix does not match with one of the [restricted keywords](../create-content-types/restricted-keywords-for-uids.md).

  **Note:** The affix will function as a prefix if the content type UID matches with restricted UIDs. The affix will function as a suffix for field UIDs.
- Click **Validate File** to validate the exported content.**Note:** If validation fails, it may be caused by one or more of the following issues:**File Format Error**: Ensure the file is in the desired format.
- **Missing Content**: Ensure the exported data contains all required content.
- **Incomplete Files**: Verify that no files are missing or corrupted.
- Click **Save and Continue**.

### Step 5 - Configure Destination Stack
- Either select an existing stack with content types or create a new stack.
- For this guide, we will migrate content to an existing stack.![S2C_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1dc42f41946ab7f9/6814a46ab55bf310ba07cdd3/S2C_7.png)
- In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
- Click **Add Language** if multiple locales need to be mapped.![S2C_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46e3f59bd33349ba/6814a46a9b09255830dee8ce/S2C_8.png)
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
- Failed mappings
- Successfully mapped
- Updated mappings
- A 'Schema Preview' icon next to each content type allows you to view the schema and fields.

**Note:** If mapping fails, it could be due to a UID mismatch between the legacy CMS and the destination stack. Check the UIDs of the content types in both the legacy CMS and the destination stack and ensure they align.

#### Map Content Fields

The interface consists of two sections:
- **Source content type**: Displays the fields for the selected content type from the legacy CMS.
- **Destination (Contentstack) content types**: Displays the fields mapped to the corresponding Contentstack content type.

By default, all fields are selected for migration, but users can uncheck fields they don’t want to migrate.

The framework attempts to auto-map fields based on the selected source CMS.

**Note:** The **Title** and **URL** fields are auto-mapped and cannot be edited.

#### Handle Different Mapping Scenarios

Select a content type from the dropdown to map fields accordingly. Adjust mappings manually if needed.

**Note:** If the stack is empty, mappings rely solely on Contentstack’s field data types.

Use the following advanced options to efficiently manage your mappings:
- **Search fields**: Use the search bar in the mapping interface to locate specific field names.
- **Reset to system mapping**: Click the ‘Reset to system mapping’ icon to revert any changes done to the default mappings.
- **Select content type from destination stack**: Override the default behavior of creating new content types.
- **Fetch content types from destination stack**: If updates are made in the stack during migration, click the icon to fetch changes.

  **Note:** If the user has created a new stack in [Step 5](./sitecore-to-contentstack.md#step-5-configure-destination-stack), they will not see the ‘Fetch content types from destination stack’ icon and the ‘Select Content Type from Destination Stack’ dropdown unless an existing stack was used.
- **Advanced properties**: Use this option to fine-tune individual field mappings.

Click **Save** to preserve the current mapping settings.

This step ensures that the migrated data retains its integrity and is structured correctly within the destination stack.

Click **Continue**.

### Step 7 - Run a Test Migration
- Click **Create Test Stack** to create a sample stack within your organization.
- Click **Start Test Migration** to perform a test migration.![S2C_13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt541f8d5e55e2d72c/6814a4990dc84f1d4f858c58/S2C_13.png)

  **Note:** This migration runs on a small chunk of data to ensure reliability before the full migration.
- A success or error message will be displayed in the logs after completion.![S2C_14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc6413a9832954ac/6814a4996b233b5b805bb94b/S2C_14.png)
- Click **Continue**.

### Step 8 - Execute the Migration
- After a successful test, click **Start Migration** to initiate full migration.![S2C_15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb1311f3393fb28c/6814a499a50a9d82e2184bc1/S2C_15.png)
- Upon completion, a success message appears in the logs with a link to your stack. The migrated data is now available in the destination stack within Contentstack.

**Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.

You have now successfully migrated your content from Sitecore to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.

Happy migrating!

## Common questions

### Who can run a Sitecore to Contentstack migration?
You need a [Contentstack account](https://www.contentstack.com/login) with [Admin](../organization/organization-roles.md#organization-admin) or [Owner](../organization/organization-roles.md#organization-owner) role access.

### Do I need to install anything before starting?
Yes. **Note:** The Migration Framework must be installed and running on your system. Refer to the [Setup Guides](../content-migration.md#setup-guides) for installation instructions.

### Why might “Validate File” fail?
**Note:** If validation fails, it may be caused by one or more of the following issues:**File Format Error**: Ensure the file is in the desired format.
- **Missing Content**: Ensure the exported data contains all required content.
- **Incomplete Files**: Verify that no files are missing or corrupted.

### Can I run another migration on the same stack after finishing one?
**Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.