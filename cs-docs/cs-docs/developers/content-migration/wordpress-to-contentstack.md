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

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](/docs/developers/set-up-stack/about-stack) within Contentstack. This guide outlines the process for performing a content migration.

## Tutorial Video

Watch the tutorial video to get a complete walkthrough of the framework.

## Prerequisites

Before you begin the installation and migration process, ensure that you have the following prerequisites:

- [Contentstack account](https://www.contentstack.com/login) with [Admin](/docs/developers/organization/organization-roles#organization-admin) or [Owner](/docs/developers/organization/organization-roles#organization-owner) role access

**Note:** The Migration Framework must be installed and running on your system. Refer to the [Setup Guides](/docs/developers/content-migration#setup-guides) for installation instructions.

## Migrate Content from Wordpress

Follow these steps to perform the content migration for Wordpress:

### Step 1 - Log In to the Migration Framework

- From the welcome page, click **Sign in with Contentstack**.
- You will be redirected to the login page with region selection.
- Log in using your Contentstack credentials.

### Step 2 - Select Your Organization

- After logging in, you will see an empty dashboard.
- Select your organization from the dropdown in the top left corner.

### Step 3 - Create a New Project

- Click **+ New Project**.
- Enter a **Name** and **Description** for your project.
- Click **Create Project**.

### Step 4 - Select and Validate Legacy CMS Data

- By default Wordpress will be selected as your legacy CMS.
- Add a **2–5 character affix** for the source name. Use only letters, no numbers or special characters. Make sure the affix does not match with one of the [restricted keywords](/docs/developers/create-content-types/restricted-keywords-for-uids).**Note:** The affix will function as a prefix if the content type UID matches with restricted UIDs. The affix will function as a suffix for field UIDs.
- Click **Validate File** to validate the exported content.**Note:** If validation fails, it may be caused by one or more of the following issues:

**File Format Error**: Ensure the file is in the desired format.
- **Missing Content**: Ensure the exported data contains all required content.
- **Incomplete Files**: Verify that no files are missing or corrupted.
- Click **Save and Continue**.

### Step 5 - Configure Destination Stack

- Either select an existing stack with content types or create a new stack.
- For this guide, we will migrate content to an existing stack.
- In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
- Click **Add Language** if multiple locales need to be mapped.
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
- **Fetch content types from destination stack**: If updates are made in the stack during migration, click the icon to fetch changes.**Note:** If the user has created a new stack in [Step 5](/docs/developers/content-migration/wordpress-to-contentstack#step-5-configure-destination-stack), they will not see the ‘Fetch content types from destination stack’ icon and the ‘Select Content Type from Destination Stack’ dropdown. However, if an existing stack was selected, the icons will be available.
- **Advanced properties**: Click the ‘Advanced properties’ icon next to each field to adjust field specific properties.

Click **Save** to preserve the current mapping settings. Ensure the mapping for all content types is completed for a seamless migration experience.

Click **Continue**.

### Step 7 - Run a Test Migration

- Click **Create Test Stack** to create a sample stack within your organization.
- Click **Start Test Migration** to perform a test migration.
- A success or error message will be displayed in the logs after completion.**Note:** Test migration performs the migration on a small chunk of data to validate success.
- Click **Continue**.

### Step 8 - Execute the Migration

- After a successful test migration, click **Start Migration** to perform the full migration to your selected stack.
- Upon completion, a success message appears in the logs with a link to your stack. The migrated data is now available in the destination stack within Contentstack.

**Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.

You have now successfully migrated your content from Wordpress to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.

Happy migrating!

## Common questions

### What role access do I need to run this migration?
You need a [Contentstack account](https://www.contentstack.com/login) with [Admin](/docs/developers/organization/organization-roles#organization-admin) or [Owner](/docs/developers/organization/organization-roles#organization-owner) role access.

### What should I do if “Validate File” fails?
Check the listed causes: **File Format Error**, **Missing Content**, and **Incomplete Files**, then validate again.

### Can I edit the Title and URL field mappings?
No. **Note:** The **Title** and **URL** fields are auto-mapped and cannot be edited.

### Can I run another migration on the same stack after one completes?
No. **Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.