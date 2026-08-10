---
title: "Delete a Term"
description: "Effortlessly delete a term within a taxonomy with our step-by-step guide."
url: /headless-cms/delete-a-term
---

# Delete a Term

## Delete a Term

Within your stack, you can delete terms from a taxonomy.

**Note:** Unless you are the [Owner](/docs/headless-cms/types-of-roles#owner), [Admin](/docs/headless-cms/types-of-roles#admin), or [Developer](/docs/headless-cms/types-of-roles#developer) of the stack, you cannot delete terms created by other stakeholders.

To delete a term, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) where you want to delete term(s) from a taxonomy, navigate to the “Settings” icon (press “S”), and select **Taxonomy**.
2.  Select the taxonomy from which you want to delete terms.
3.  Click the vertical ellipsis next to the term and select **Delete Term**.
    
    ![Delete_a_Term.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta57c13e39fe3da92/691637c0accf611660f6e13b/Delete_a_Term.png)
4.  Click **Delete Term**. In the modal, type "DELETE" and confirm your action.
    
    **Warning:** Following these steps will detach the term(s) association from the entries. As a result, the entry version will increase because the terms were removed from the entry.
    
    ![Delete_Term_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0b039fd6468adc2/66166c5cadd0c9592b5e4ac5/Delete_Term_Modal.png)

**Additional Resource:** To recover a deleted term, consult our documentation on [restoring deleted terms](/docs/headless-cms/restore-a-deleted-term).

## API Reference

To delete a term via API, refer to the [Delete a Term](/docs/developers/apis/content-management-api/taxonomy#delete-a-term) API request.

**Note:** While restoring a taxonomy or term, or when creating or deleting a branch, avoid performing additional delete or restore operations until the ongoing process is complete. This restriction is implemented to prevent conflicts, as multiple entries are modified simultaneously during these processes.
