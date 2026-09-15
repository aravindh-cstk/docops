---
title: "Sitecore to Contentstack"
description: "Effortlessly migrate content from legacy CMS to Contentstack with our intuitive framework. Streamline the process with easy steps and video guidance."
url: /headless-cms/sitecore-to-contentstack
uid: blt6d3432421f9c6556
---

# Sitecore to Contentstack

## Sitecore to Contentstack

The **Contentstack Migration Framework** is designed to help users seamlessly migrate content from a legacy **Content Management System** (**CMS**) to Contentstack. The framework simplifies the migration process by providing an intuitive interface and step-by-step workflow for importing content, mapping content types, and migrating data into a [stack](/docs/headless-cms/about-stack) within Contentstack. This guide outlines the process for performing a content migration.

## Tutorial Video

Watch the tutorial video to get a complete walkthrough of the framework.

## Prerequisites

Before you begin the migration process, ensure that you have the following prerequisite:

-   [Contentstack account](https://www.contentstack.com/login) with [Admin](/docs/administration/about-administration-roles#organization-admin) or [Owner](/docs/administration/about-administration-roles#organization-owner) role access

**Note:** The Migration Framework must be installed and running on your system. Refer to the [Setup Guides](/docs/headless-cms/set-up-content-migration-framework-macos) for installation instructions.

## Migrate Content from Sitecore

Follow these steps to perform the content migration for Sitecore:

### Step 1 - Log In to the Migration Framework

1.  From the welcome page, click **Sign in with Contentstack**.![S2C_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16eb7dc1de93584f/6814a46979652b3b2e648424/S2C_1.png)
2.  You will be redirected to the login page with region selection.![S2C_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0baffe5177cb5403/6814a46ac4a377c4d41a6d20/S2C_2.png)
3.  Log in using your Contentstack credentials.

### Step 2 - Select Your Organization

1.  After logging in, you will see an empty dashboard.
2.  Select your organization from the dropdown in the top left corner.![S2C_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ae92a84f6b33d31/6814a4690dc84ff4d3858c53/S2C_3.png)

### Step 3 - Create a New Project

1.  Click **\+ New Project**.
2.  Enter a **Name** and **Description** for your project.![S2C_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt848ad8693502634f/6814a469c4a3774aea1a6d1c/S2C_4.png)
3.  Click **Create Project**.

### Step 4 - Select and Validate Legacy CMS Data

1.  Select your legacy CMS version.![S2C_5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97de56be13ad5db8/6814a469b259395db2bced04/S2C_5.png)
2.  Add a **2–5 character affix** for the source name. Use only letters, no numbers or special characters. Make sure the affix does not match with one of the [restricted keywords](/docs/headless-cms/restricted-keywords-for-uids).

    **Note:** The affix will function as a prefix if the content type UID matches with restricted UIDs. The affix will function as a suffix for field UIDs.

3.  Click **Validate File** to validate the exported content.![S2C_6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b33ff717090eda2/6814a469b7c4fc05676980b7/S2C_6.png)

    **Note:** If validation fails, it may be caused by one or more of the following issues:

    -   **File Format Error**: Ensure the file is in the desired format.
    -   **Missing Content**: Ensure the exported data contains all required content.
    -   **Incomplete Files**: Verify that no files are missing or corrupted.

4.  Click **Save and Continue**.

### Step 5 - Configure Destination Stack

1.  Either select an existing stack with content types or create a new stack.
2.  For this guide, we will migrate content to an existing stack.

    ![S2C_7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1dc42f41946ab7f9/6814a46ab55bf310ba07cdd3/S2C_7.png)
3.  In the **Language Mapping** section, map the source CMS locale to a predefined language in Contentstack.
4.  Click **Add Language** if multiple locales need to be mapped.![S2C_8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46e3f59bd33349ba/6814a46a9b09255830dee8ce/S2C_8.png)
5.  Click **Save and Continue**.

### Step 6 - Map Content Types

This step is crucial in ensuring that fields from your legacy CMS are correctly aligned with their corresponding fields in Contentstack.

![S2C_9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt177027b5f28d1215/6814a469478db2f2d2756fb5/S2C_9.png)

#### Search and Preview Content Models

On the left-hand side, a list of content types and global fields imported from the legacy CMS is displayed.

-   Use the search bar to quickly locate specific content types within the list.
-   Each content type has a status icon beside it:
    -   **Blue tick**: The content type was successfully mapped from the legacy CMS to Contentstack.
    -   **Red cross**: The mapping failed.
    -   **Green tick**: A previously mapped (blue ticked) content type was updated or saved.
-   A filters dropdown is available next to the search bar, allowing users to filter content types based on:
    -   All
    -   Failed mappings
    -   Successfully mapped
    -   Updated mappings
-   A 'Schema Preview' icon next to each content type allows you to view the schema and fields.

![S2C-10.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d3ea54909d2fe03/6814a4ae0bf88d0c08d39ef4/S2C-10.gif)

**Note:** If mapping fails, it could be due to a UID mismatch between the legacy CMS and the destination stack. Check the UIDs of the content types in both the legacy CMS and the destination stack and ensure they align.

#### Map Content Fields

The interface consists of two sections:

-   **Source content type**: Displays the fields for the selected content type from the legacy CMS.
-   **Destination (Contentstack) content types**: Displays the fields mapped to the corresponding Contentstack content type.

By default, all fields are selected for migration, but users can uncheck fields they don’t want to migrate.

![S2C-11.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt522b5e37895ebb26/6814a4b0b55bf37bcd07cddc/S2C-11.gif)

The framework attempts to auto-map fields based on the selected source CMS.

**Note:** The **Title** and **URL** fields are auto-mapped and cannot be edited.

#### Handle Different Mapping Scenarios

Select a content type from the dropdown to map fields accordingly. Adjust mappings manually if needed.

**Note:** If the stack is empty, mappings rely solely on Contentstack’s field data types.

Use the following advanced options to efficiently manage your mappings:

-   **Search fields**: Use the search bar in the mapping interface to locate specific field names.
-   **Reset to system mapping**: Click the ‘Reset to system mapping’ icon to revert any changes done to the default mappings.
-   **Select content type from destination stack**: Override the default behavior of creating new content types.
-   **Fetch content types from destination stack**: If updates are made in the stack during migration, click the icon to fetch changes.

    **Note:** If the user has created a new stack in [Step 5](/docs/headless-cms/sitecore-to-contentstack#step-5-configure-destination-stack), they will not see the ‘Fetch content types from destination stack’ icon and the ‘Select Content Type from Destination Stack’ dropdown unless an existing stack was used.

-   **Advanced properties**: Use this option to fine-tune individual field mappings.

![S2C-12.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbeb557c6b72670e2/6814a4b27a3a7c636eaa6d0e/S2C-12.gif)

Click **Save** to preserve the current mapping settings.

This step ensures that the migrated data retains its integrity and is structured correctly within the destination stack.

Click **Continue**.

### Step 7 - Run a Test Migration

1.  Click **Create Test Stack** to create a sample stack within your organization.
2.  Click **Start Test Migration** to perform a test migration.![S2C_13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt541f8d5e55e2d72c/6814a4990dc84f1d4f858c58/S2C_13.png)

    **Note:** This migration runs on a small chunk of data to ensure reliability before the full migration.

3.  A success or error message will be displayed in the logs after completion.![S2C_14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc6413a9832954ac/6814a4996b233b5b805bb94b/S2C_14.png)
4.  Click **Continue**.

### Step 8 - Execute the Migration

1.  After a successful test, click **Start Migration** to initiate full migration.![S2C_15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb1311f3393fb28c/6814a499a50a9d82e2184bc1/S2C_15.png)
2.  Upon completion, a success message appears in the logs with a link to your stack. The migrated data is now available in the destination stack within Contentstack.

**Note:** Once a migration has been performed on a stack, it cannot be used to perform another migration.

You have now successfully migrated your content from Sitecore to Contentstack. If you encounter any issues during the installation or migration process, reach out to our [support](mailto:support@contentstack.com) team for assistance.

Happy migrating!
