---
title: "Assign an Alias to a Branch"
description: "Learn how to effectively assign aliases to branches, enabling easier navigation and identification within your version control system."
url: /headless-cms/assign-an-alias-to-a-branch
---

# Assign an Alias to a Branch

## Assign an Alias to a Branch

An [Alias](/docs/headless-cms/about-aliases) helps point to a particular [branch](/docs/headless-cms/about-branches) in your stack. When your alias points to a specific branch, that branch acts as the primary branch from which you deliver content to your website. You can display the modifications made in this branch on your website without the need to alter any code.

To create an alias, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon on the left navigation panel, select **Branches,** and click on the **Aliases** tab.
2.  Click on **\+ Assign Alias**.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8f22beca860c29c0/615a7fbf6d2d465121b1c0fc/image.png)
3.  The **Assign New Alias** form appears for you to add the following details:  
    -   **Alias ID:** Enter a name for the alias, such as “alias\_1,” “manager\_alias,” or so on.
    -   **Target Branch:** Select a branch to which you want your alias to point from the dropdown.
4.  Finally, click **Save** to save your alias.  
    ![Assign_an_Alias.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte4f055851fbeb4e1/62192f31f002d14904e68404/Assign_an_Alias.png)

## API Reference

To perform operations related to aliases within your stack via API, refer to the following documents:

-   [Aliases collection](/docs/developers/apis/content-management-api/aliases) in our Content Management API
-   [GraphQL API](/docs/developers/apis/graphql-content-delivery-api)
