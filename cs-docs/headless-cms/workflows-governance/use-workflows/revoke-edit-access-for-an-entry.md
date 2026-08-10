---
title: "Revoke Edit Access for an Entry"
description: "Revoke edit access for an entry"
url: /headless-cms/revoke-edit-access-for-an-entry
---

# Revoke Edit Access for an Entry

## Revoke Edit Access for an Entry

**Note:** If you are not familiar with Workflow and its related concepts, we recommend you to check out these articles before you start working with them: [Workflow](/docs/headless-cms/about-workflows), [Workflow Stages](/docs/headless-cms/about-workflow-stages), and [Tasks](/docs/headless-cms/about-workflow-tasks).

Users or roles with workflow stage transition rights over an entry can also revoke edit access for other users who can edit the entry in the current workflow stage. This helps eliminate the possibility of unwanted modifications to the entry.

For example, a user with the “Editor” role can grant a content manager edit access over the entry when on the “Ready for Review” stage. The content manager then incorporates the changes suggested by the editor in the entry. Once all changes have been made, the editor can revoke edit access for the content manager over the “Ready for Review” stage to avoid any further modifications to the finalized content.

To revoke edit access for other users who can edit an entry in a particular workflow stage, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack), and open the entry.
2.  On the entry page, go to the **Workflow Details** section under the **Status** panel on the right. The current workflow stage of the entry and its color label appear under this section.  
    ![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt62a6055a40a500ea/60de1a2d9ec66d5af9c1aef1/image.png)  
    
3.  Further below, you will also see a section that displays the **Users to whom edit access is granted** over the current workflow stage. Click on the “**x**” icon beside a user name to revoke edit access for that user.  
    
4.  When more than four users are able to edit the entry over the current workflow stage, click on **View All** to view the entire list of users.  
    
5.  In the **All Other users** dialog box that appears on screen, you can click on the “**x**” icon beside a user name to revoke those users’ edit access rights over the entry.  
    
6.  Once done, click on **Close**.
