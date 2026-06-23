---
title: "[Content Migration] - Drupal to Contentstack"
description: Drupal to Contentstack
url: https://www.contentstack.com/docs/headless-cms/drupal-to-contentstack
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: new
last_updated: 2026-05-29
---

# [Content Migration] - Drupal to Contentstack - New

This page explains how to use the Contentstack Migration Tool to migrate content from Drupal into Contentstack. It is intended for Contentstack Admins/Owners and developers responsible for running migrations, and should be used when planning and executing a Drupal-to-Contentstack content migration.

## Article content

### Item 1

#### Article section

##### Heading

Drupal to Contentstack

##### Content

The **Contentstack Migration Tool** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The tool simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](../developers/set-up-stack/about-stack.md) within Contentstack. This guide outlines the process for performing a Drupal content migration.

## Prerequisites
Before you begin, ensure that you have the following:
- A **Contentstack Account** with [Admin](../developers/organization/organization-roles.md#organization-admin) or [Owner](../developers/organization/organization-roles.md#organization-owner) role access.
- The Migration Tool installed and running on your system. Refer to the [Drupal Setup Guide](./set-up-content-migration-framework-drupal.md) for installation instructions.
- The MySQL database is loaded with the Drupal **structured query language** (**SQL**) dump and reachable from your local environment.

## Migrate Content from Drupal
Follow these steps to migrate your Drupal content into Contentstack:

### Step 1: Log in to the Migration Tool
- From the welcome page, click **Sign In with Contentstack**. Or refer to the [Authenticating the Migration Tool via SSO](/docs/headless-cms/authenticating-the-migration-tool-via-sso) guide to log in via SSO for a more secure migration.
- You get redirected to the login page with region selection.
- Log in using your Contentstack credentials.

### Step 2: Select Your Organization
- After logging in, you see an empty dashboard.
- Select your organization from the dropdown in the top-left corner.

### Step 3: Create a New Project
- Click **+ New Project**.
- Enter a **Title **and **Description** for your project.
- Click **Create Project**.

### Step 4: Select and Validate Legacy CMS Data
- By default, Drupal is selected as your legacy CMS.
- Enter a 2–5 character affix for the source name.Use only letters (no numbers or special characters).
- Make sure the affix does not match any of the [restricted keywords](../developers/create-content-types/restricted-keywords-for-uids.md).
- The affix is used as:A prefix if the content type UID matches the restricted UIDs.
- A suffix for field UIDs.
- Click **Validate File** to validate the exported Drupal content.**Note**: If validation fails, check for the following issues:
- **File Format Error**: Ensure the file is in the desired format.
- **Missing Content**: Ensure the exported data contains all required content.
- **Incomplete Files**: Verify that no files are missing or corrupted.

4. Click **Save and Continue**.

### Step 5: Configure Destination Stack
- You can either select an existing stack with content types or create a new stack. For this guide, let’s migrate content to an existing stack (eg., Sitecore).
- In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
- Click **+ Add Language** to map multiple locales.
- Click **Save and Continue**.

### Step 6: Map Content Types
This step ensures that fields from your legacy CMS are correctly mapped to their corresponding fields in your Contentstack stack.

#### Search and Preview Content Models
On the left, a list of content types and global fields imported from the Drupal CMS is displayed. You can:
- Use the search bar to quickly locate specific content types within the list.
- Use the filters dropdown, next to the search bar, to filter content types based on **All**, **Failed**, **Mapped**, or **Updated**.
- Click the 'Schema Preview' icon next to each content type to view the structure of the content type with schema and fields.
- Each content type has a status icon:**Blue tick**: The content type was successfully mapped from the legacy CMS to Contentstack.
- **Red cross**: The mapping failed.
- **Green tick**: A previously mapped (blue ticked) content type was updated or saved.

**Note**: Mapping failures could be due to a UID mismatch between the legacy CMS (Drupal) and the destination stack. Check and align UIDs if needed.

#### Map Content Fields
The mapping interface consists of two columns:
- **Source Content Type Field List**: Displays extracted field titles from Drupal.
- **Destination Contentstack Field Data Types Dropdowns**: Allows users to select the desired field data type for mapping in Contentstack.

By default, all fields are selected for migration; however, you can uncheck fields that you don’t want to migrate.

**Note**:
- The tool attempts to auto-map fields based on the selected source CMS.
- The **Title** and **URL** fields are auto-mapped and cannot be edited.

#### Handle Different Mapping Scenarios
- Select a content type from the dropdown to map fields accordingly. Adjust mappings manually if needed.**Note**: If the stack is empty, mappings rely solely on Contentstack’s field data types.

Use the following advanced options to efficiently manage your mappings:

**Search for Specific Fields**: Use the search bar in the mapping interface to locate field names.
- **Reset Content Mapping**: Click the ‘Reset to default mapping’ icon to revert any changes made to the default mappings.
- **Select an Existing Content Type from Destination Stack**: By default, the tool maps the source models to the destination stack as new content types. For example, a ‘Contact Us’ page model from your source CMS gets mapped as a new ‘Contact Us’ content type during migration. However, you can select an existing content type from the destination stack if it exists.
- **Fetch Content Types**: During migration, if new content types or fields are created/updated/deleted in the destination stack, retrieve them by clicking the ‘Fetch content type’ icon to update the schema.**Note**:If you have created a new stack in [Step 5](#heading=h.mz4xvaoqk159), the ‘Fetch content type’ or the ‘Select Content Type from Destination Stack’ icons do not appear.
- If an existing stack was selected (even if it is empty), the icons are available. You can go back to the stack, create new content types, and later use the 'Fetch content type' icon to update the schema and include the newly added content types.
- **Advanced Properties**: Click the ‘Advanced properties’ icon next to each field to adjust field-specific properties.
- Click **Save** after completing the mapping for each content type.
- Click **Continue**.

### Step 7: Run a Test Migration
- Click **Create Test Stack** to create a sample stack within your organization to test the migration.
- Click **Start Test Migration**.This migrates a small subset of your data to validate the mapping before running the full migration.

### Step 8: Execute the Migration
- After a successful test migration, click **Start Migration** to perform the full migration to your selected stack.
- Upon completion, a success message appears in the logs with a link to your destination stack.

Your migrated data is now available in Contentstack.

**Note**: A stack that has already been used for migration cannot be used to perform another migration.

You have now successfully migrated your content from Drupal to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.

## Title

[Content Migration] - Drupal to Contentstack - New

## Url

/headless-cms/drupal-to-contentstack

## Common questions

### Who can run a Drupal to Contentstack migration?
You need a **Contentstack Account** with [Admin](../developers/organization/organization-roles.md#organization-admin) or [Owner](../developers/organization/organization-roles.md#organization-owner) role access.

### What should I do if **Validate File** fails?
Check for **File Format Error**, **Missing Content**, and **Incomplete Files** as listed in the validation **Note**.

### Can I run multiple migrations into the same stack?
**Note**: A stack that has already been used for migration cannot be used to perform another migration.

### Where do I get help if I encounter issues?
Reach out to the [support](mailto:support@contentstack.com) team for assistance.