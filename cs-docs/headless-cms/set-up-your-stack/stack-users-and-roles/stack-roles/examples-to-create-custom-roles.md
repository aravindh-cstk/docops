---
title: "Examples to Create Custom Roles"
description: "Learn how to create custom roles in Contentstack with entry, field, asset, language, and taxonomy permissions using common configuration examples."
url: /headless-cms/examples-to-create-custom-roles
---

# Examples to Create Custom Roles

## Examples to Create Custom Roles

Custom roles help you control access to content, assets, languages, and taxonomies within your stack. This guide provides common role configuration examples to help you manage permissions for different user responsibilities and workflows.

## Prerequisites

Before you begin, ensure that you:

-   Have access to the organization and stack
-   Have permission to create and manage roles
-   Understand the content types, assets, languages, or taxonomies you want to manage

## Entry-Level Permissions

### Scenario 1: Grant All Permissions to Specific Content Types

Use this configuration when users need complete access to entries within selected content types while restricting access to other content types in the stack.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
6.  Select **All Permissions** in the **Select Permissions** field.
7.  Select **Specific Content Types**.
8.  Click **Select Content Types** and select the required content types, for example, **Products**.
9.  Click **Add Content Types**.
10.  **Save** the role.

### Scenario 2: Grant Specific Permissions to Specific Content Types

Use this configuration when users require limited access, such as read-only or publish-only permissions, for selected content types.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
6.  Select **Read** in the **Select Permissions** field.
7.  Select **Specific Content Types**.
8.  Click **Select Content Types** and select the required content types, for example, **Contact Us**.
9.  Click **Add Content Types**.
10.  **Save** the role.

### Scenario 3: Restrict Access to Specific Entries

Use exceptions when users should have broad access to a content type but must be restricted from accessing specific entries.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
6.  Select **All Permissions** in the **Select Permissions** field.
7.  Select **All Content Types**.
8.  Scroll down and click **Add Exceptions**.
9.  Under **Specific Entries**, click **Add Rule**.
10.  Under **Permissions**, select **Read**.
11.  Click **Select Content Type** and select the **Products** content type.
12.  Select the “Introducing iPhone X” entry.
13.  Click **Add Entries**.
14.  **Save** the role.

## Field-Level Permissions

### Scenario 4: Restrict Editing Access to Specific Fields

Use field-level restrictions to protect sensitive or system-managed fields while allowing users to edit the rest of the entry.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Entries** in the **Permissions** section, go to **All Entries of Content Types / Taxonomies** and click **Add Rule**.
6.  Select **All Permissions** in the **Select Permissions** field.
7.  Select **All Content Types**.
8.  Scroll down and click **Add Exceptions**.
9.  Under **Specific Entries**, click **Add Rule**.
10.  Under **Permissions**, select **Edit**.
11.  Click **Select Content Type** and select the **Products** content type.
12.  Select the **Description** field.
13.  Click **Add Entries**.
14.  **Save** the role.

## Taxonomy Management Permissions

### Scenario 5: Grant Permissions to Specific Taxonomies

Use taxonomy permissions to allow custom role users to manage taxonomy structures without requiring Admin or Developer access.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Taxonomies** in the **Permissions** section, click **Add Rule**.
6.  In the **Select Permissions** field, select **Create**, **Update**, and **Publish/Unpublish**.
7.  Select **Specific Taxonomies**.
8.  Click **Select Taxonomies** and select the required taxonomies.
9.  Click **Add Taxonomies**.
10.  **Save** the role.

**Note:** Taxonomy management permissions control access to taxonomy structures only. Entry-level taxonomy access is managed separately through entry permissions.

### Scenario 6: Restrict Actions on Specific Taxonomies

Use taxonomy exceptions when users need broad taxonomy management access but must be restricted from performing actions on specific taxonomies.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Taxonomies** in the **Permissions** section, click **Add Rule**.
6.  Select **All Permissions**.
7.  Select **All Taxonomies**.
8.  Scroll down and click **Add Exceptions**.
9.  Under **Specific Taxonomies**, click **Add Rule**.
10.  Select **Delete** in the **Permissions** field. This allows the user to manage everything except for the accidental permanent removal of the critical 'Regions' taxonomy.
11.  Click **Select Taxonomies** and select the **Regions** taxonomy.
12.  Click **Add Taxonomies**.
13.  **Save** the role.

**Note:** Taxonomy exceptions apply only to taxonomy management permissions. They do not affect entry-level taxonomy access configured under entry permissions.

## Asset-Level Permissions

### Scenario 7: Grant Permissions to Specific Assets

Use asset-level permissions to control access to selected files or media assets within the stack.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Assets** in the **Permissions** section, click **Add Rule**.
6.  Select **Read** in the **Select Permissions** field.
7.  Select **Specific Assets**.
8.  Click **Select Assets**.
9.  Select the required assets, for example, Image 1 and Image 2.
10.  **Save** the role.

## Language-Level Permissions

### Scenario 8: Restrict Actions for Specific Languages

Use language exceptions when users need access to most localized content but should not manage content for specific languages.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Languages** in the **Permissions** section, select the **All Languages** checkbox.
6.  Click **Add Exceptions**.
7.  Click **Add Rule**.
8.  Select **Create**, **Update**, and **Delete** in the **Select Permissions** field.
9.  Select **French - France** and **German - Germany**.
10.  **Save** the role.

### Scenario 9: Restrict Access to the Master Language

Use this configuration when localization teams should work only on translated content and should not modify the master language.

**Warning:** If you deselect the master language, unlocalized entries that inherit content from the master language may not be accessible.

To create this role, log in to your [Contentstack account](https://app.contentstack.com/?_gl=1*1on6thl*_gcl_au*MTMyNDg0OTY4My4xNzc3MjcyMTY2#!/login) and perform the following steps:

1.  Navigate to the stack where you want to create the role.
2.  Click the **Settings** icon and select **Users & Roles**.
3.  Click **Roles**.
4.  Click **New Role** and enter a name and description for the role.
5.  Under **Languages** in the **Permissions** section, deselect **English - United States**.
6.  Click **Add Exceptions**.
7.  Click **Add Rule**.
8.  Select **Create**, **Update**, and **Delete** in the **Select Permissions** field.
9.  Select the required languages, for example, **French - France**.
10.  **Save** the role.

## API Reference

To perform role management operations via API, refer to the following API requests:

-   [Create role](/docs/developers/apis/content-management-api/roles#create-a-role)
-   [Update role](/docs/developers/apis/content-management-api/roles#update-role)
-   [Delete role](/docs/developers/apis/content-management-api/roles#delete-role)

Custom roles help you control access across entries, assets, languages, and taxonomies while ensuring users only have the permissions required for their responsibilities. By combining permissions and exceptions, you can create flexible access models that align with your organization’s workflows and governance requirements.
