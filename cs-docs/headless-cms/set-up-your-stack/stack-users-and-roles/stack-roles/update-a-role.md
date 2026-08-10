---
title: "Update a Role"
description: "steps to update a custom role"
url: /headless-cms/update-a-role
---

# Update a Role

## Update a Role

Only the [stack owner](/docs/headless-cms/types-of-roles#owner), or the users assigned [admin](/docs/headless-cms/types-of-roles#admin) and [developer](/docs/headless-cms/types-of-roles#developer) roles, who created the role, can update that particular role.

To update a role, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to the [stack](/docs/headless-cms/about-stack), navigate to the “Settings” icon on the left navigation panel, and select **Users &** **Roles.**
2.  Select the **Roles** tab and select the role that you want to update.
3.  Edit the details such as **Name** and **Description** of the role, if required.
4.  Under the **PERMISSIONS** section, you can update the permissions assigned to the role by making changes to the “Entry-/Field-level permissions” and/or to the “Asset-level permissions.” Also, you can make changes to the **Publishing Environments**, or the **Languages** sections.
5.  You can then make changes to the **Publishing Environments** section.
6.  Under the **Languages** section, you can update the [language-related permissions](/docs/headless-cms/manage-language-permissions) assigned to the role by selecting or deselecting a language from the available list. Additionally, you can also update the [exceptions set on different language variants](/docs/headless-cms/create-a-role#exceptions-on-languages) of all entries in the stack.![Language_Permissions_Exceptions.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaafaa5db116b3369/61f86a11c0b94b3fdbdd20ce/Language_Permissions_Exceptions.png)  
      
    You can also restrict access for a specific role to the [master language](/docs/headless-cms/set-the-master-language). To understand how this restriction affects entry access, refer to the [Language-Specific Restrictions on Entries Scenarios](/docs/headless-cms/manage-language-permissions#language-specific-restrictions-on-entries-scenarios) section.  
    ![Deselect_Master_Language.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt33ca1672af8622f0/61f86a312feb6a1bad2bbd81/Deselect_Master_Language.png)  
    
    **Warning:** If you deselect the master language, then any [unlocalized language entry](/docs/headless-cms/unlocalize-an-entry) that inherits content from the master language will not be accessible.
    
7.  **Save** the changes.

**Note:** The stack owner can update any role in the stack irrespective of the role being created by any other user.

## API Reference

Here are the links to the API requests related to this action:

-   [Update role](/docs/developers/apis/content-management-api/roles#update-role)
-   [Create role](/docs/developers/apis/content-management-api/roles#create-a-role)
