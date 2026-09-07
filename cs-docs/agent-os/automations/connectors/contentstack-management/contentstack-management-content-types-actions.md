---
title: "Contentstack Management - Content Types Actions"
description: "Use the Contentstack Management Content Types action to automate fetching all the content types from a stack."
url: /agent-os/contentstack-management-content-types-actions
uid: blt41e15f69760297ab
---

# Contentstack Management - Content Types Actions

## Contentstack Management - Content Types Actions

A [Content Type](/docs/headless-cms/about-content-types) serves as the framework or blueprint for a page or section within your web or mobile platform. It allows you to establish the fundamental structure of this blueprint by incorporating fields and configuring their attributes. By using the Contentstack Management Content Types action, you can fetch all content types from a selected stack.

![Select_Content_Type.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amdc19b23e8af05986/5257cdd5101c703dd03d42df/Select_Content_Type.png?locale=en-us)

Let’s look at the action in detail.

## Create a Content Type

This action creates a new content type in a stack.

1.  Under the **Choose an Action** tab, select the **Create a Content Type** action.
2.  On the **Create a Content Type Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack** and a **Branch** from the **Lookup** list.

        **Note:** By default, the main branch is selected (even if the Branch field is empty).

    3.  Provide the **Content Type Schema** as a JSON payload. The JSON object must include:
        -   **Title** (Required): Must be unique within the stack; also used to derive the content type's display name.
        -   **uid** (Required): Must be unique within the stack (unlike title, this is strictly enforced).
        -   **schema** (Required): The array of field definitions (e.g., text, number, reference fields) that make up the content type's structure.
        -   **Options** (Required): Configuration for the content type, including whether it is Single or Multiple.  
            ![Configure_Screen_Create.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am64b45db00d45c525/9844c694120f1f4031e24e1a/Configure_Screen_Create.png?locale=en-us)
3.  Click the **Proceed** button.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.

## Delete a Content Type

This action permanently deletes an existing content type from a stack.

**Warning:** Deleting a content type also permanently deletes all entries within that content type. This action cannot be undone.

1.  Under the **Choose an Action** tab, select the **Get a Single Content Type** action.
2.  On the **Get a Single Content Type Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Branch**, and a **Content Type** from the **Lookup** drop-down.

        **Note:** By default, the main branch is selected (even if the Branch field is empty).

    3.  Optionally, enable the **Show Optional Fields** toggle button to display the optional fields. You can check the **Force delete** box to delete the content type:

        -   **Unchecked (default):** If the content type is referenced by another content type (i.e., it is used as a **child** content type elsewhere), the delete call fails with a reference error.
        -   **Checked:** The content type is deleted even if it is referenced by another content type.

        **Note:** Deleting a **parent** content type does **not** delete its **child** content types, only the selected content type (and its entries) is removed.

        ![Delete_Content_Tyoe_Fields.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amfe319cd41bba33f1/3c7964b626ca636d92f61a5c/Delete_Content_Tyoe_Fields.png?locale=en-us)
3.  Click the **Proceed** button.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.

## Update a Content Type

This action updates the name, description, or JSON schema (including fields and other configuration) of an existing content type in a stack.

1.  Under the **Choose an Action** tab, select the **Update a Content Type** action.
2.  On the **Update a Content Type Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Branch**, and a **Content Type** from the **Lookup** drop-down.

        **Note:** By default, the main branch is selected (even if the Branch field is empty).

    3.  Provide the updated **Content Type Schema** as a JSON payload, including any changed values (e.g., updated title/display name, added or modified fields).![Update_Content_Type.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am22988d7fcaabd6aa/751179451a7bd60709d4c176/Update_Content_Type.png?locale=en-us)
3.  Click the **Proceed** button.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.

## Get All Content Types

This action fetches all the content types present in a stack.

1.  Under the **Choose an Action** tab, select the **Get All Content Types** action.
2.  On the **Get All Content Types Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, and **Branch** from the **Lookup** list.  
        ![Select_Fields_Get_All.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt834579ce017e7995/682ae84c951e4bbe10042db0/Select_Fields_Get_All.png)

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

    3.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Content Type Limit**, **Customized Data (query)**, and **Skip Content Type (Pagination)** fields.
    4.  Provide your data in the **Customized Data (query)** field to filter the retrieval of content types. Enter your data in the **Key**, and **Value** fields.
    5.  You can also include the total count of the content types, global field schema, and the branch details by clicking the respective checkboxes.

        **Additional Resource:** Refer to the [Content Delivery API Docs](/docs/developers/apis/content-delivery-api/queries) for more information on Queries.

        **Note:** The **Customized Data (query)** field acts as a filter to fetch the content types that fulfill the specifications provided in the Key-Value fields.

3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  

5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7ea64f8622dfa61/666686663dcdf6470a2c9e7d/Save_Exit_Button.png)

## Get a Single Content Type

This action fetches the details of a specific content type in a stack.

1.  Under the **Choose an Action** tab, select the **Get a Single Content Type** action.
2.  On the **Get a Single Content Type Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/about-contentstack-management-actions) step.
    2.  Select a **Stack**, **Branch**, and a **Content** **Type** from the **Lookup** list.

        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).

        ![Select_Fields_Get_Single.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4827b1d6e01fcf2/682ae901a211e78168c7aa41/Select_Fields_Get_Single.png)
    3.  Optionally, enable the **Show Optional Fields** toggle button to display the optional fields. You can check the **Include global field schema** and **Include branch** boxes to include the details of the branch and the global field(s).  
        ![Show_Optional_Fields_Get_Single.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9c68e590f5f94ee/682ae901b728367183403d2b/Show_Optional_Fields_Get_Single.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_and_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49632183cb17c41a/67446b30c21e6028ad26163f/Save_and_Exit.png)
