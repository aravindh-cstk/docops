---
title: "Drupal to Contentstack - New"
description: "Effortlessly migrate content from Drupal to Contentstack with our intuitive Migration Tool, featuring a seamless step-by-step workflow."
url: /headless-cms/drupal-to-contentstack
---

# Drupal to Contentstack - New

## Drupal to Contentstack

The **Contentstack Migration Tool** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The tool simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](/docs/headless-cms/about-stack) within Contentstack. This guide outlines the process for performing a Drupal content migration.

## Tutorial Video

Watch the tutorial video to get a complete walkthrough of the framework.

## Prerequisites

Before you begin, ensure that you have the following:

-   A **Contentstack Account** with [Admin](/docs/administration/about-administration-roles#organization-admin) or [Owner](/docs/administration/about-administration-roles#organization-owner) role access.
-   The Migration Tool installed and running on your system. Refer to the [Drupal Setup Guide](/docs/headless-cms/set-up-content-migration-framework-drupal) for installation instructions.
-   The MySQL database is loaded with the Drupal **structured query language** (**SQL**) dump and reachable from your local environment.

## Migrate Content from Drupal

Follow these steps to migrate your Drupal content into Contentstack:

### Step 1: Log in to the Migration Tool

1.  From the welcome page, click **Sign In with Contentstack**. Or refer to the [Authenticate the Migration Tool via SSO](/docs/headless-cms/authenticate-the-migration-framework-via-sso) guide to log in via SSO for a more secure migration.![Sign in page.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am2e8fdd374c5d3b03/457b814fed8498241783788c/Sign_in_page.png?locale=en-us)
2.  You get redirected to the login page with region selection.![region-page.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am56dbd8d6fe037cb3/296786d0f8a629147cd16849/region-page.png?locale=en-us)
3.  Log in using your Contentstack credentials.

### Step 2: Select Your Organization

1.  After logging in, you see an empty dashboard.
2.  Select your organization from the dropdown in the top-left corner.![project-dashboard.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ame7c798fe6f68a3c6/963189f77c03015e6d6f7eff/project-dashboard.png?locale=en-us)

### Step 3: Create a New Project

1.  Click **\+ New Project**.
2.  Enter a **Title** and **Description** for your project.![project-modal.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7a53cc1b2213ee83/a5d57f35901c25f2e9e970d7/project-modal.png?locale=en-us)
3.  Click **Create Project**.

### Step 4: Select and Validate Legacy CMS Data

1.  By default, Drupal is selected as your legacy CMS.
2.  Enter a 2–5 character affix for the source name. 
    
    -   Use only letters (no numbers or special characters).
    -   Make sure the affix does not match any of the [restricted keywords](https://www.contentstack.com/docs/headless-cms/restricted-keywords-for-uids).
    -   The affix is used as:
        -   A prefix if the content type UID matches the restricted UIDs.
        -   A suffix for field UIDs.
    
    ![select cms-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd26b4e915ce01c7e/e1857c94eb683532ba14b7bc/select_cms-screen.png?locale=en-us)
3.  Click **Validate File** to validate the exported Drupal content.
    
    **Note**: If validation fails, check for the following issues:
    
    -   **File Format Error**: Ensure the file is in the desired format.
    -   **Missing Content**: Ensure the exported data contains all required content.
    -   **Incomplete Files**: Verify that no files are missing or corrupted.
    
    ![legacy-cms-validation-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am41058dbd128523a0/7598d80628b1817d58f35611/legacy-cms-validation-screen.png?locale=en-us)
4.  Click **Save and Continue**.

### Step 5: Configure Destination Stack

1.  You can either select an existing stack with content types or create a new stack. For this guide, let’s migrate content to an existing stack.
2.  In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
3.  Click **\+ Add Language** to map multiple locales.![language-mapper-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am19441d6ff873b2b9/bf5f88d7765378c9e93cd2cf/language-mapper-screen.png?locale=en-us)
4.  Click **Save and Continue**.

### Step 6: Map Content Types

This step ensures that fields from your legacy CMS are correctly mapped to their corresponding fields in your Contentstack stack.

![map-content-fields-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7eb2ffaa112d25d9/5fd8276506889c728250491e/map-content-fields-screen.png?locale=en-us)

#### Search and Preview Content Models

On the left, a list of content types and global fields imported from the Drupal CMS is displayed. You can:

-   Use the search bar to quickly locate specific content types within the list.
-   Use the filters dropdown, next to the search bar, to filter content types based on **All**, **Failed**, **Mapped**, or **Updated**.
-   Click the 'Schema Preview' icon next to each content type to view the structure of the content type with schema and fields.
-   Each content type has a status icon:
    -   **Blue tick**: The content type was successfully mapped from the legacy CMS to Contentstack.
    -   **Red cross**: The mapping failed.
    -   **Green tick**: A previously mapped (blue ticked) content type was updated or saved.

![content-mapper-1.mp4](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am2cfbbc7710ecb927/0e0200521949604a7b526f39/content-mapper-1.gif?locale=en-us)

**Note:** Mapping failures could be due to a UID mismatch between the legacy CMS (Drupal) and the destination stack. Check and align UIDs if needed.

#### Map Content Fields

The mapping interface consists of two columns:

-   **Source Content Type Field List**: Displays extracted field titles from Drupal.
-   **Destination Contentstack Field Data Types Dropdowns**: Allows users to select the desired field data type for mapping in Contentstack.

By default, all fields are selected for migration; however, you can uncheck fields that you don’t want to migrate.

![content-mapper-2.mp4](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1d1cfaea4b1f2c18/8212929994f455696ea664e4/content-mapper-2.gif?locale=en-us)

**Note**:

-   The tool attempts to auto-map fields based on the selected source CMS.
-   The **Title** and **URL** fields are auto-mapped and cannot be edited.

#### Handle Different Mapping Scenarios

1.  Select a content type from the dropdown to map fields accordingly. Adjust mappings manually if needed.
    
    **Note:** If the stack is empty, mappings rely solely on Contentstack’s field data types.
    
    Use the following advanced options to efficiently manage your mappings:
    
    1.  **Search for Specific Fields**: Use the search bar in the mapping interface to locate field names.
    2.  **Reset Content Mapping**: Click the ‘Reset to default mapping’ icon to revert any changes made to the default mappings.
    3.  **Select an Existing Content Type from Destination Stack**: By default, the tool maps the source models to the destination stack as new content types. For example, a ‘Contact Us’ page model from your source CMS gets mapped as a new ‘Contact Us’ content type during migration. However, you can select an existing content type from the destination stack if it exists.
    4.  **Fetch Content Types**: During migration, if new content types or fields are created/updated/deleted in the destination stack, retrieve them by clicking the ‘Fetch content type’ icon to update the schema.
        
        **Note**:
        
        -   If you have created a new stack in [Step 5](/docs/headless-cms/drupal-to-contentstack#step-5-configure-destination-stack), the ‘Fetch content type’ or the ‘Select Content Type from Destination Stack’ icons do not appear.
        -   If an existing stack was selected (even if it is empty), the icons are available. You can go back to the stack, create new content types, and later use the 'Fetch content type' icon to update the schema and include the newly added content types.
        
    5.  **Advanced Properties**: Click the ‘Advanced properties’ icon next to each field to adjust field-specific properties.
    
    ![content-mapper-3.mp4](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am56b1bda809074fd2/2b5e55c83e1b4ce6106b8c5b/content-mapper-3.gif?locale=en-us)
2.  Click **Save** after completing the mapping for each content type.
3.  Click **Continue**.

### Step 7: Run a Test Migration

1.  Click **Create Test Stack** to create a sample stack within your organization to test the migration.
2.  Click **Start Test Migration**.![test-migration-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am35b91ed7b1092272/c17adb1019c63378ecce5423/test-migration-screen.png?locale=en-us)
    
    **Note:** This migrates a small subset of your data to validate the mapping before running the full migration.
    
3.  A success or error message will be displayed in the logs after completion.![test-migartion-completion-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am334abd2a562692a9/9e2217b92b76515b864ed87d/test-migartion-completion-screen.png?locale=en-us)

### Step 8: Execute the Migration

1.  After a successful test migration, click **Start Migration** to perform the full migration to your selected stack.![migration-execution-screen.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am65f675854dbeed56/889ca57e482600fa393e0b22/migration-execution-screen.png?locale=en-us)
2.  Upon completion, a success message appears in the logs with a link to your destination stack.

Your migrated data is now available in Contentstack.

**Note:** A stack that has already been used for migration cannot be used to perform another migration.

You have now successfully migrated your content from Drupal to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.
