---
title: "Contentful to Contentstack"
description: "Effortlessly migrate content to Contentstack with our intuitive framework. Enjoy seamless data transfer from legacy CMS to your stack. Start today!"
url: /headless-cms/contentful-to-contentstack
---

# Contentful to Contentstack

## Contentful to Contentstack

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](/docs/headless-cms/about-stack) within Contentstack. This guide outlines the process for performing a content migration.

## Tutorial Video

Watch the tutorial video to get a complete walkthrough of the framework.

## Prerequisites

Before you begin the installation and migration process, ensure that you have the following prerequisites:

-   [Contentstack account](https://www.contentstack.com/login) with [Admin](/docs/administration/about-administration-roles#organization-admin) or [Owner](/docs/administration/about-administration-roles#organization-owner) role access

**Note:** The Migration Framework must be installed and running on your system. Refer to the [Setup Guides](/docs/headless-cms/set-up-content-migration-framework-macos) for installation instructions.

## Migrate Content from Contentful

Follow these steps to perform the content migration for Contentful:

### Step 1 - Log In to the Migration Framework

1.  From the welcome page, click **Sign in with Contentstack**.![C2C_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e64f22a78ca71a8/681ca3f56a96c052bc564dbe/C2C_1.png)
2.  You will be redirected to the login page with region selection.![C2C_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46ba8e72e23cc87d/681ca3f53b45e0039d25a0ff/C2C_2.png)
3.  Log in using your Contentstack credentials.

### Step 2 - Select Your Organization

1.  After logging in, you will see an empty dashboard.
2.  Select your organization from the dropdown in the top left corner.![C2C_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2beff91a4183b2ae/681ca3f566b976370beb33fd/C2C_3.png)

### Step 3 - Create a New Project

1.  Click **\+ New Project**.
2.  Enter a **Name** and **Description** for your project.![C2C_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd55b4af6492611b4/681ca3f65ec9f819f11f0797/C2C_4.png)
3.  Click **Create Project**.

### Step 4 - Select and Validate Legacy CMS Data

1.  By default Contentful will be selected as your legacy CMS.
2.  Add a **2–5 character affix** for the source name. Use only letters, no numbers or special characters. Make sure the affix does not match with one of the [restricted keywords](/docs/headless-cms/restricted-keywords-for-uids).![C2C_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt702a5dab25e93d73/681ca3f62ac67c7ac366b5f7/C2C_5.png)
    
    **Note:** The affix will function as a prefix if the content type UID matches with restricted UIDs. The affix will function as a suffix for field UIDs.
    
3.  Click **Validate File** to validate the exported content.![C2C-6.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2bbd6a8aea79e038/681ca3e6a50a9db459188b0c/C2C-6.gif)
    
    **Note:** If validation fails, it may be caused by one or more of the following issues:
    
    -   **File Format Error**: Ensure the file is in the desired format.
    -   **Missing Content**: Ensure the exported data contains all required content.
    -   **Incomplete Files**: Verify that no files are missing or corrupted.
    
4.  Click **Save and Continue**.

### Step 5 - Configure Destination Stack

1.  Either select an existing stack with content types or create a new stack.
2.  For this guide, we will migrate content to an existing stack.![C2C_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte1f359db4cf9a140/681ca3f63b45e022f625a103/C2C_7.png)
3.  In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
4.  Click **Add Language** if multiple locales need to be mapped.![C2C_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1140e386848e280e/681ca3e55ec9f829d51f078f/C2C_8.png)
5.  Click **Save and Continue**.

### Step 6 - Map Content Types

This step is crucial in ensuring that fields from your legacy CMS are correctly aligned with their corresponding fields in Contentstack.

![C2C_9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f220e8f15720c21/681ca3e53b45e0886525a0fb/C2C_9.png)

#### Search and Preview Content Models

On the left-hand side, a list of content types and global fields imported from the legacy CMS is displayed.

-   Use the search bar to quickly locate specific content types within the list.
-   Each content type has a status icon beside it:
    -   **Blue tick**: The content type was successfully mapped from the legacy CMS to Contentstack.
    -   **Red cross**: The mapping failed.
    -   **Green tick**: A previously mapped (blue ticked) content type was updated or saved.
-   A filters dropdown is available next to the search bar, allowing users to filter content types based on:
    -   All
    -   Failed
    -   Mapped
    -   Updated
-   A 'Schema Preview' icon next to each content type allows you to view the schema and fields.

![C2C-10.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt680978901eb7f2fd/681ca3e75ec9f8524f1f0793/C2C-10.gif)

**Note:** If mapping fails, it could be due to a UID mismatch between the legacy CMS and the destination stack.

#### Map Content Fields

The interface consists of two sections:

-   **Source content types**: Displays the fields for the selected content type from the legacy CMS.
-   **Destination (Contentstack) content types**: Displays the fields mapped to the corresponding Contentstack content type.

By default, all fields are selected for migration, but users can uncheck fields they don’t want to migrate.

![C2C-11.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte37926d73c1227d7/681ca3e70dc84fb68b85c99c/C2C-11.gif)

The framework attempts to auto-map fields based on the selected source CMS.

**Note:** The **Title** and **URL** fields are auto-mapped and cannot be edited.

#### Handle Different Mapping Scenarios

Select a content type from the dropdown to map fields accordingly. Adjust mappings manually if needed.

**Note:** If the stack is empty, mappings rely solely on Contentstack’s field data types.

Use the following advanced options to efficiently manage your mappings:

-   **Search for Specific Fields**: Use the search bar in the mapping interface to locate specific field names.
-   **Reset to system mapping**: Click the ‘Reset to system mapping’ icon to revert any changes done to the default mappings.
-   **Select content type from destination stack**: Override the default behavior of creating new content types.
-   **Fetch content types from destination stack**: If updates are made in the stack during migration, click the icon to fetch changes.
    
    **Note:** If the user has created a new stack in [Step 5](/docs/headless-cms/contentful-to-contentstack#step-5-configure-destination-stack), they will not see the ‘Fetch content types from destination stack’ icon and the ‘Select Content Type from Destination Stack’ dropdown. However, if an existing stack was selected, the icons will be available.
    
-   **Advanced properties**: Click the ‘Advanced properties’ icon next to each field to adjust field specific properties.

![C2C-12.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6dba7a71179b1eb0/681ca3e8b7c4fcb59469bf3d/C2C-12.gif)

Click **Save** to preserve the current mapping settings. Ensure the mapping for all content types is completed for a seamless migration experience.

Click **Continue**.

### Step 7 - Run a Test Migration

1.  Click **Create Test Stack** to create a sample stack within your organization.
2.  Click **Start Test Migration** to perform a test migration.  
    ![C2C_13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcfd5fec934cca35/681ca3e57a319668cf3e3330/C2C_13.png)
3.  A success or error message will be displayed in the logs after completion.![C2C_14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ef05654cbc5c993/681ca3e566b9766306eb33f7/C2C_14.png)
    
    **Note:** Test migration performs the migration on a small chunk of data to validate success.
    
4.  Click **Continue**.

### Step 8 - Execute the Migration

1.  After a successful test migration, click **Start Migration** to perform the full migration to your selected stack.![C2C_15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd47098b8262c86c8/681ca3e56b233b49e05bf61b/C2C_15.png)
2.  Upon completion, a success message appears in the logs with a link to your stack. The migrated data is now available in the destination stack within Contentstack.

**Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.

You have now successfully migrated your content from Contentful to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.

Happy migrating!
