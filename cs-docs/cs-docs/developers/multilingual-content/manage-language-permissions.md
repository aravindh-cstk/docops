---
title: "[Set Up Your Project] - Manage Language Permissions"
description: Manage language-specific access for custom roles, including restrictions, exceptions, and fallback inheritance scenarios for localized and unlocalized entries.
url: https://www.contentstack.com/docs/developers/multilingual-content/manage-language-permissions
product: Set Up Your Project
doc_type: guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Manage Language Permissions

This page explains how to manage language-specific permissions for custom roles, including how restricting languages affects access to localized and unlocalized entries via fallback inheritance. It is intended for stack Owners/Developers and administrators configuring role-based access in multilingual projects, and should be used when setting up or troubleshooting language access and exceptions.

## Manage Language Permissions

When creating custom roles, the Owner or the Developer of the stack can also assign language-specific access. You can select or deselect specific languages under Languages in the Permissions section to allow/restrict users from creating, updating or deleting entries localized in specific language variants.

Once you deselect a language from the list, any user assigned to that specific custom role will not be able to view entries localized in the deselected language.

You can also deselect the master language to deny access to a specific custom role. However, if you deselect the master language, then any unlocalized language entry that inherits content from the master language will not be accessible.

The custom role will still be able to see other language variants of the entry if the user has access to those languages.

**Note**: Refer to the [Language-Specific Restrictions on Entries Scenarios](/docs/developers/multilingual-content/manage-language-permissions#language-specific-restrictions-on-entries-scenarios) section to understand how language-specific restrictions affect a user's entry access permissions.

You can also set language-based exceptions that disallow a new role to "Create," "Update" and/or "Delete" entries localized in specific languages. For example, restrict a role from being able to "Create" or "Update" entries localized in English (United States) or French (France).

**Note**: Although a user may have restricted access to entries available in the selected languages, they may still possess publishing rights based on the assigned publishing environments.

## Convert Localized Entry to Master Language Entry

If the entry created in the master language is deleted by another user, other localized language variants of that entry continue to exist independently. In such cases, a user with access to the master language can create a new master language entry using the data available in any one of the localized entry versions.

For example, if the entry in the master language, i.e., English (United States), does not exist, a custom user role with access to the master language can use data from the entry localized in French (France) to create a new master language entry.

## Language-Specific Restrictions on Entries Scenarios

A fallback language is the parent language from which a given language inherits data. When you restrict access to entries of the fallback language, similar restrictions apply to the unlocalized entries that inherit content from the restricted fallback language.

When you localize a child entry, it breaks inheritance from the restricted fallback language and exists independently. In such a scenario, a user role with appropriate permissions to the child language can still access the localized entry.

**Additional Resource**: To understand more about language-specific permissions in roles, refer to the [Exceptions on Languages](/docs/developers/invite-users-and-assign-roles/create-a-role#exceptions-on-languages) documentation.

Let’s look at a few real-world scenarios to understand how language-specific permissions work with your localized and unlocalized entries in terms of fallback inheritance.

Suppose you have the following languages available within your stack: English (United States), French (France), German (Germany), and Spanish (Spain). English (United States) is set as the master language of the stack, while German (Germany) is set as the fallback language for Spanish (Spain).

### Scenario 1: Restrict access to the master language [English (United States)] for a specific custom role

Consider a scenario where you have created a “Product” entry in the master language (i.e., English (United States) in our case). Now, if a custom user role does not have access to the master language but can access other language variants of the entry, let's see how entry access works.

Now, let's consider the following scenarios:
- The “Product” entry version present in French (France) is a localized version
- The “Product” entry version present in German (Germany) is an unlocalized version
- The “Product” entry version present in Spanish (Spain) is an unlocalized version

When the custom user role opens the entry list page, the user will only be able to see the independently available **French (France)** entry version. If required, he can save entry data in German - (Germany) and Spanish (Spain) to also create entries in those languages.

**Note**: If a separate localized entry has not yet been created in any of the available language variants, except the master language, then the custom user role will not be able to see the “Product” entry in the stack.

### Scenario 2: Restrict access to the German (Germany) language for a specific custom role

Consider a scenario where you have created a “Product” entry in the master language (i.e., English (United States) in our case). Now, if a custom user role does not have access to the German (Germany) language variant of the entry but has access to its child language variant, i.e., Spanish (Spain) and the English (United States) language entry, let's see how entry access works.

Now, let's consider the following scenarios:
- English (United States) entry version present
- The “Product” entry version present in French (France) is a localized version
- The “Product” entry version present in German (Germany) is not accessible
- The “Product” entry version present in Spanish (Spain) is an unlocalized version

Since no entry has been created yet in Spanish (Spain), when the custom user role tries to open the entry page of Spanish (Spain), it will try to fetch data from the fallback language, i.e. German (Germany). If the German (Germany) language variant is not accessible, it will then inherit data from the master language, i.e., **English (United States)**.

### Scenario 3: Restrict access to the Spanish (Spain) language for a specific custom role through Exceptions

Consider a scenario where you have created a “Product” entry in the master language (i.e., English (United States) in our case). Now, if a custom user role can view entries localized in the Spanish (Spain) language variant of the entry but cannot create, update or delete entries localized in this language, let's see how entry access works.

Now, let's consider the following scenarios:
- English (United States) entry version present
- The “Product” entry version present in French (France) is a localized version
- The “Product” entry version present in German (Germany) is an unlocalized version
- The “Product” entry version present in Spanish (Spain) is a localized version

When the custom user role tries to open the entry page of Spanish (Spain), the user will see the latest entry version present in Spanish (Spain). However, the user **CANNOT** update or delete its data.

**Note**: The user role will only be able to publish the entry if the required publishing environment access is available.

## Common questions

### Who can assign language-specific access when creating custom roles?
The Owner or the Developer of the stack can assign language-specific access when creating custom roles.

### What happens if a language is deselected for a custom role?
Once you deselect a language from the list, any user assigned to that specific custom role will not be able to view entries localized in the deselected language.

### What is the impact of deselecting the master language?
If you deselect the master language, then any unlocalized language entry that inherits content from the master language will not be accessible.

### Can a role still publish entries if language access is restricted?
Although a user may have restricted access to entries available in the selected languages, they may still possess publishing rights based on the assigned publishing environments.

<!-- filename: set-up-your-project-manage-language-permissions.md -->