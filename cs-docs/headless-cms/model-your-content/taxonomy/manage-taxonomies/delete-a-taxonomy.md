---
title: "Delete a Taxonomy"
description: "Effortlessly delete a Contentstack taxonomy with our step-by-step guide."
url: /headless-cms/delete-a-taxonomy
---

# Delete a Taxonomy

## Delete a Taxonomy

Contentstack allows you to delete a taxonomy that you create in your stack.

**Note:** Unless you are the [Owner](/docs/headless-cms/types-of-roles#owner) or [Admin](/docs/headless-cms/types-of-roles#admin) of the stack, you cannot delete taxonomies created by other stakeholders.

To delete a taxonomy, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) where you want to delete a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
2.  Navigate to the taxonomy you want to delete and click the vertical ellipsis in the **Actions** column.
3.  Click the **Delete** button. ![Delete Taxonomy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4955ab3a9f9c2324/6929bfd9d74c8918a61e5e5b/Delete_Taxonomy.png)
    
    **Warning:** Deleting a taxonomy removes its connections to any linked content types. This also increments the entry version because the terms associated with the deleted taxonomy were removed from the entry.
    
4.  In the **Delete Taxonomy** modal, you need to type “DELETE”, and confirm the **Delete** action.![Delete_Taxonomy_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce44d52631dd265f/66166c480d9945ec86033551/Delete_Taxonomy_Modal.png)
    
    **Note**:
    
    -   If your content type includes a taxonomy field with multiple taxonomies configured, deleting one of them will not remove the entire field. Instead, only the term associations of the deleted taxonomy will be removed from the respective entries.
    -   However, if the taxonomy field only has one taxonomy configured and it is deleted, then the entire field will be removed from the content type.
    
5.  Alternatively, select a taxonomy and click the trash icon at the top-right corner to delete it.
    
    ![Delete_Taxonomy_from_Details_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24013ccb0d4e366a/69162eab1baa6da21b7bed05/Delete_Taxonomy_from_Details_Page.png)

**Additional Resource:** To recover a deleted term, consult our documentation on [restoring deleted taxonomies](/docs/headless-cms/restore-a-deleted-taxonomy).

## API Reference

To delete taxonomies via the API, refer to the [Delete a Taxonomy](/docs/developers/apis/content-management-api/taxonomy#delete-a-taxonomy) API request.

**Note:** While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.
