---
title: "Unique ID"
description: "Explore the importance of Unique ID (UID) in content fields. Learn about its role, restrictions, and tips for customizing UIDs effectively."
url: /headless-cms/unique-id
uid: blt24c9719cf79cccbe
---

# Unique ID

## Unique ID

The **Unique ID** (**UID**) property represents a unique alphanumeric string that is associated with a [field](/docs/headless-cms/about-fields). The system identifies each field with its UID.

By default, the UID of each field is the same as the [display name](/docs/headless-cms/display-name) of the field. While you can change the UID as per your requirements, you cannot have two fields with the same UID within a content type.

![unique-id.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2beee5f8c0632ee2/65cedc0ac5f7763929fa7205/unique-id.png)

**Warning:** If you change the UID after an entry has been saved under a [content type](/docs/headless-cms/about-content-types), the data for that field will be lost and you will have to enter it again. Also, there are certain restrictions when providing a user-defined UID. These restrictions are covered in the [**Restricted keywords for UIDs**](/docs/headless-cms/restricted-keywords-for-uids) section.
