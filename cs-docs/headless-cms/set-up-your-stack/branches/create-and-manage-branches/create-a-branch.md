---
title: "Create a Branch"
description: "Discover how to create a branch in Contentstack's developer documentation. Learn the step-by-step process for creating branches in your version control system. "
url: /headless-cms/create-a-branch
---

# Create a Branch

## Create a Branch

You can create a [branch](/docs/headless-cms/about-branches) off of your stack's main (default) branch. The child branch you create inherits all of the content types, entries, assets, languages, extensions, releases, etc. that were part of the main branch as it is.

**Note:** Only stack owners, admins, and developers can create a new branch.

Both developers and content managers can make changes to different copies (branches) of the same stack content in isolation.

**Additional Resource:** For all child branches created subsequently, you can select any other branch apart from main to act as source branch.

To create a branch, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your stack, and perform the following steps:

1.  Click the “Settings” icon on the left navigation panel, and select **Branches**.  
    
    **Note:** The main branch is the default branch for any stack.
    
2.  Click on **\+ New Branch**.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt703918a3b3965e27/615a7e87a4d10c511f1ad381/image.png)
3.  The **Create New Branch** form appears for you to add the following details:  
    
    -   **Branch ID:** Enter a unique ID for the branch, such as “staging” or “development”.
    -   **Source:** Select a branch from the dropdown from which this new branch should inherit data.
    
    **Note:** By default, the main branch will be the source branch for the first child branch you create.
    
4.  Finally, click **Create** to save your branch.  
    ![Create_a_new_Branch.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcd5d38d2a971ac14/62192f313837bf67467a92cd/Create_a_new_Branch.png)

**Note:** At a time only **one** branch can be created across an organization. The creation actions triggered for any other branches will remain in the “in-queue” state till the current branch creation action is completed. You can view the status of these actions within the [organization's bulk task queue](/docs/administration/organization-bulk-task-queue).

## API Reference

To perform operations related to Branches within your stack via API, refer to the [Branches collection](/docs/developers/apis/content-management-api/branches) in our Content Management API documentation.
