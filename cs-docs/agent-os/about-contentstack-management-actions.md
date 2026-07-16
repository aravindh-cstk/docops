---
title: "[Automations guides and connectors] - About Contentstack Management Actions"
description: About Contentstack Management Actions in Automation Hub connectors, including prerequisites and setup steps.
url: https://www.contentstack.com/docs/agent-os/contentstack-management
product: Contentstack
doc_type: automation-hub-connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - About Contentstack Management Actions

This page explains what the Contentstack Management connector does in Automation Hub, what actions it supports, and how to connect and set up your Contentstack account to use these actions. It is intended for developers and automation builders configuring CMS-related action steps in Automate.

## About Contentstack Management Actions

[#connect-your-contentstack-account-to-automate](#connect-your-contentstack-account-to-automate)The Contentstack Management connector lets you perform specific actions within your stack. With this connector, you can perform CRUD operations on entries, releases, content types, assets, branches, taxonomy, global fields, languages, branch alias, variants, and user-specific information such as first name, last name, etc.

- **Assets:** Within Contentstack, all uploaded files such as images, videos, PDFs, audio files, and more are stored in your repository for later access. This repository, where uploaded files reside, is referred to as [Assets](../content-managers/author-content/about-assets.md). You can perform asset based operations using the [Contentstack Management Assets Actions](./contentstack-management-assets-actions.md).
- **Branches:** [Branches](../developers/branches/about-branches.md) offer isolated workspaces for safe, independent development of new features or updates. With branches you can create multiple copies of your stack content. You can perform branch-based operations using the following [Contentstack Management Branches Actions](./contentstack-management-branches-actions.md).
- **Branch Alias: **An Alias acts as a pointer to a specific branch. The Branch Alias actions allow you to retrieve details of a single or all branch aliases, assign or reassign aliases to a specific branch, and delete them. These actions offer streamlined management of your branches, ensuring a well-organized and efficient development workflow using the [Contentstack Management Branch Alias Actions](./contentstack-management-branch-alias-actions.md).
- **Content Types: **A [Content Type](../developers/create-content-types/about-content-types.md) serves as the framework or blueprint for a page or section within your web or mobile platform. It allows you to establish the fundamental structure of this blueprint by incorporating fields and configuring their attributes. By using the [Contentstack Management Content Types Actions](./contentstack-management-content-types-actions.md), you can fetch all content types from a selected stack.
- **Entries: **An [Entry](../content-managers/author-content/about-entries.md) is a specific piece of content that you intend to publish. This could be a blog post, article, product description, or any other type of content that you want to make available to your audience. You can perform entry based operations using the [Contentstack Management Entries Actions](./contentstack-management-entries-actions.md).
- **Global Fields:** A [Global Field](../developers/global-field/about-global-field.md) is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. You can perform global field based operations using the following [Contentstack Management Global Fields Actions](./contentstack-management-global-fields-actions.md).
- **Languages: **Contentstack offers advanced [multilingual content](../developers/multilingual-content/about-languages.md) capabilities with over 200 pre-configured locales for creating and publishing entries in multiple languages. You can fetch the details of all the locales in a stack using the [Contentstack Management Language Actions](./contentstack-management-languages-actions.md).
- **Releases: **A [Release](../content-managers/create-and-manage-releases/about-releases.md) comprises entries and assets that need to be deployed at the same time, either in a published or unpublished state, to a designated environment. You can perform release based operations using the [Contentstack Management Releases Actions](./contentstack-management-releases-actions.md).
- **Taxonomy: **[Taxonomy](../developers/taxonomy/about-taxonomy.md) assists in organizing the content within stack into categories, making it easier to navigate, search, and retrieve information. You can perform taxonomy based operations using the following [Contentstack Management Taxonomy Actions](./contentstack-management-taxonomy-actions.md).
- **Users:** Contentstack, being an Enterprise Content Management (ECM) system, accommodates numerous [users](../developers/invite-users-and-assign-roles/about-stack-users.md) with different permissions collaborating together. In Contentstack, all the member accounts of a stack are referred to as users. By using the [Contentstack Management Users Actions](./contentstack-management-users-actions.md), you can fetch user related details, such as name, email, and so on.
- **Variants: **Variants are the different variations of an entry displayed to different audiences created within a Personalize project. You can perform variant-related operations using the [Contentstack Management Variants Actions](./contentstack-management-variants-actions.md).

Details of each action are covered in their respective documentation.

## Prerequisites

To use the Contentstack Management connector, you first need to add your [Contentstack account](https://www.contentstack.com/login). To do so, follow the steps given below:

### Connect your Contentstack Account to Automate

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Contentstack **connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4039a5663896ca2/682b25fe24eaf7fd0d8182e1/Select_Connector.png)
- Select the **Contentstack Management** connector to perform CMS tasks.![Select_CS_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt672cc3a63b5ae303/682b25feef59b13d396b53cd/Select_CS_Action.png)
- Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Get All Content Types** action.![Get_All_Content_Types.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84756b6905091ca9/6601a8776f2eedfabdc2edc3/Get_All_Content_Types.png)
- On the** Configure Action** page, click the **+ Add New Account **to add your Contentstack account.![Add_Account_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt299240b9e64d9d35/682b25fe7252414e898cef0a/Add_Account_Screen.png)
- Select a way to add a new account. You can authenticate your account in two ways: **Contentstack** or **Management Token**.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b3e4620943849cf/660a41ca1b5a584959adc9e8/Authorize_Account.png)

      If you select **Contentstack OAuth** and click **Proceed**, the Manage Permissions modal will open, as shown below. Provide the OAuth permissions for all the values by checking the boxes and click **Authorize**.

        **Note: **Contentstack offers support for [Branches](../developers/branches/about-branches.md) in Automate. You must authenticate and re-authorize your existing account by checking all the permissions to add your Contentstack account.

- In the pop-up, select your organization to complete the authorization.![Select_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt96ced61a3a48f48b/656daf7dae62f7796af682fd/Select_Organization.png)
- In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize **to complete authorization.![Authorize_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58cd95e87f126f3f/6602bc9bdb68ba97b139e838/Authorize_Organization.png)
- Provide an Account Name** **and then click **Save**.![Save_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa0dd4d11504d599/6601a877c19510f2b7decebe/Save_Account.png)
- If you select **Management Token **and click **Proceed**, the **Authorize **modal will open, as shown below. Enter a **Title **and the **Management Token **of your stack and click **Authorize**.![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted5a118fd9dc145a/660423f81741ea31ee651dc6/Authorize_Button.png)

This sets up your Contentstack account for the Contentstack Management action connector.

## Set up the Contentstack Management Connector

Perform the following steps to set up the Contentstack Management connector:

- From the left navigation panel, click **Configure Action Step**.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action **Step, click the **Contentstack **connector.

    **Note: **You can sort and search the connector(s) based on the filter.

- Select the **Contentstack Management **connector to perform CMS tasks.
- Under **Choose an Action**, you will see nine categories of actions: **Asset**, **Branch**, **Branch Alias**, **Content Type**, **Entry**, **Global Fields**, **Locales**, **Release**,** Taxonomy**, **User**, and** Variant**.![List_of_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1fd78cb5475d5cc/66332ef68a4a137d8cfe486b/List_of_Actions.png)

Once done, you can go ahead and set up your Contentstack Management action connector.

## Common questions

### What can I do with the Contentstack Management connector?
You can perform CRUD operations on entries, releases, content types, assets, branches, taxonomy, global fields, languages, branch alias, variants, and user-specific information.

### How do I authenticate my Contentstack account for this connector?
You can authenticate in two ways: **Contentstack OAuth** or **Management Token**.

### Why do I need to re-authorize my existing account?
Contentstack offers support for [Branches](../developers/branches/about-branches.md) in Automate, and you must authenticate and re-authorize your existing account by checking all the permissions to add your Contentstack account.

### Where do I choose the action category (Asset, Branch, Entry, etc.)?
Under **Choose an Action**, you will see the categories of actions such as **Asset**, **Branch**, **Branch Alias**, **Content Type**, **Entry**, **Global Fields**, **Locales**, **Release**, **Taxonomy**, **User**, and **Variant**.