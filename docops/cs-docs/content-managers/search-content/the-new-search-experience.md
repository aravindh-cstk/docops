---
title: "[Search Content] - The New Search Experience1"
description: Overview of the New Search Experience, including enhanced basic search, quick filters, My Views, and simplified advanced search.
url: https://www.contentstack.com/docs/headless-cms/the-new-search-experience
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - users
version: unknown
last_updated: 2026-03-26
---

# [Search Content] - The New Search Experience1

This page explains Contentstack’s New Search Experience for content managers and users who search entries or assets in a stack, including basic search, filters, saved views, and advanced search, and should be used when you want to find and refine content quickly in the Entries or Assets list pages.

The New Search Experience

**Note**: The New Search Experience is currently released as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com)team.

We have made our search simpler, more intuitive, and powerful so you can find needles in a haystack, in seconds. With enhanced search features, new capabilities, and simplified advanced search, you can now get to your content quickly without any hassle. Dive in and explore the new search experience!

## What's New
- [Enhanced Basic Search](#enhanced-basic-search)
- [Quick and Customized Filters](#quick-and-customized-filters)
- [My Views](#my-views)
- [Simplified Advanced Search](#simplified-advanced-search)

## Enhanced Basic Search
Basic Search conducts a full-text search, comparing each word of your search phrase with all values in the fields of entries or assets. The results are sorted based on a robust algorithm for optimal matches.

To access Basic Search, navigate to your stack’s Entries or Assets list page and locate the “Search” input area within the table.

You will notice a new dropdown before the search bar, with the options “All”, “Title”, and “Specific field”. These options let you define the scope of search, and allow you to narrow down your search to find exactly what you are looking for. Let’s look at these options in detail:
- **All**: This is the default option that allows you to search for a given keyword within all fields of all the entries or assets.![Enhanced Basic Search - Search All.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd63295ca5defce7/665470802da50d322f472b81/Enhanced_Basic_Search_-_Search_All.png)
- **Title**: This option exclusively retrieves entries or assets with the searched term (in this case, “Ramification”) in the title field.![Enhanced Basic Search - Search Title.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e0bfd971a4a2e0b/665470803adef8e0aded00cd/Enhanced_Basic_Search_-_Search_Title.png)
- **Specific field**: This option allows you to search for entries where a specific field of a specific content type contains the given keyword.

In order to do this, select the “Specific field” option. This will open up a new dialog, which lists all the content types and their respective fields. You can choose any field from any content type of your choice. In case you have many content types with many different fields, you can choose to search for a field using the given search box.

Your search results are filtered depending on the field selected.

**Note**: Specific field search is exclusive to entries.

## Quick and Customized Filters
The new search brings all the filters to the left-hand side of the Entries or Assets list page, allowing you to refine your search quickly. What’s more? You can decide what filters you want to see on the left panel, so it’s customized for your task.

On the Entries on Assets list page, you will see the **Filters** tab in the left panel.

You will see some predefined filters that you can use. These filters are multi-select checkboxes that allow you to select multiple values. Once you select a value from the given filters, you will see a filter pill or tag on the entries list table. It lets you see what filters you have applied.

If you have more than five values available for a filter, you can click the “View All” link, which shows all the values in a separate dialog. You can then select the required values and click “Apply” to see the results.

**Note:** If you wish to see content types grouped by labels, that option is available on the dialog that appears by clicking on the “View All” link.

To customize the visibility of filters in the left panel, simply click on the **Manage Filters** button at the bottom of the panel. From there, you can choose which filters to display by selecting only the ones you need.

Additionally, you can rearrange the filters according to your preferences, further tailoring the view to suit your requirements.

## My Views
The “My Views” feature allows you to save a custom list of entries or assets for future reference or repeat usage. It is like saving a snapshot of your applied search queries, filters, and/or table column preferences, so you don’t have to apply these changes again the next time you visit the entries or assets list page.

Here are the list of changes or preference that you can apply to the entries or assets list page and save the view as your own View:
- Search text results
- Applied filters
- Advanced search results
- Customized filters preferences (applied through “Manage Filters”)
- Changes made to table columns (custom column widths, show/hide/freeze columns, reorder columns, etc.)
- All of the above

Additionally, predefined popular views are available, offering pre-configured sets of settings and filters tailored to common search scenarios. These predefined views make navigation seamless and facilitate quick access to relevant information, reducing the need for extensive manual setup.

**Note:** All your previous saved searches have been moved under **My Views**.

To save your views within your stack, follow these steps:
- Navigate to your stack and select the entries or assets module.
- By default, you will land on the **Views **tab in the left panel.
If you previously selected the Filters tab and left it at that, you will be on the **Filters** tab by default. In such a case, switch to the **View **tab.![Click on Views in the left panel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1e7b90ca8d51efa/6654708120b6e0787dfabf95/Click_on_Views_in_the_left_panel.png)
- You will find a set of predefined views under the **Popular views** section:
**All Entries**: Displays a list of all entries available in the stack.
- **Modified by Me**: Lists all entries modified by you.
- **Published by Me**: Lists all entries published by you.
- **Not Published**: Lists entries not published in any environment.
- Within the **My Views** section, you can see the views you have saved.
![My Views - Views you saved.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7066b9cfb0c8beb0/6654708089ebe6a1740aac54/My_Views_-_Views_you_saved.png)To save a view, perform any type of searches or table changes mentioned above and click the **Save View** button.![Click on Save View.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5c8aaa5905d142c/6654708186ba8be9321d5933/Click_on_Save_View.png)
- In the **Save View** modal, enter the **Name **of the view and click **Save**.![Save View - Enter a View name and click on Save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt004dc464d55c23ac/665470802da50d2d05472b7d/Save_View_-_Enter_a_View_name_and_click_on_Save.png)
- For a saved view, you can click on the vertical ellipsis and perform the following actions:**Rename**: Modify the name of the saved view.
- **Copy Link**: Share the link of a specific view with collaborators.

  **Note**: Your saved views are visible only to you and not to other users of the stack. Once you share the link with others, they will be able to save the applied changes as their own view.
- **Delete View**: Permanently remove the view.

## Simplified Advanced Search
We have simplified the Advanced Search interface, so that every type of user can use it. The advanced search option enables you to perform a content type or field-level search on entries and assets, refining search results based on specific parameters by adding conditions to the query.

Here’s how to perform an advanced search within your Contentstack app:
- Navigate to your stack and select the “Entries” or “Assets” module.
- Click on the **Advanced Search** button next to the search bar.![Simplified Advanced Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03931a1f3267cc32/66547081fab3253bf734c893/Simplified_Advanced_Search.png)
- Choose a condition; by default, you’ll see **Match All Conditions**, but you can switch to **Match Any Conditions** if needed.
- Under the condition, enter your search query comprising a field, an operator, and the expected value. Here’s what you need to select:The **Content Type or Field** drop-down allows you to select the relevant options such as, **Content Type**, **Published Environment**, **Published At**, **Published By**, **Language**, **Modified At**, **Modified By**, **Created At**, **Created By**, **UID**, and **Tag**.
- Depending on the chosen field, select an **Operator** from the drop-down menu.

  **Note**: The operators depend on the data type of the field that you have chosen. We have covered more about this in the [Supported Operators for Various Data Types](https://docs.google.com/document/d/1502Gl2Xxs0YU_Rz59N_Oic5q9Rux6CiU3KZPCvJBf5w/edit#heading=h.9w8dz75jj2xu) section.
- Select or enter a **Value** depending on the field and operator selected.![Enter value depending on the field and operator selected.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf46dad6601d05af8/665470800d63477a1079f208/Enter_value_depending_on_the_field_and_operator_selected.png)
- To add multiple search queries, click on **+ New Condition** and add another query.

  **Note**: All the conditions or queries that you add on the same level will work with either “ALL” or “ANY” operators, not a mix of both.
- You can also add nested conditions. Nested conditions help you build complex queries to further refine your search.
To add a nested condition, click the **+ New Sub-condition** button. You will see a nested block, within which you can select the **Match All Conditions** or **Match Any Conditions** option. You can build your query in the same way as explained above.![Click the + New Condition or + New Sub-condition.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0cfa96b3c749e9e1/665470804de1f07d599390cf/Click_the_New_Condition_or_New_Sub-condition.png)
- Once satisfied with your query, click on **Search **at the top-right corner. You will see the results page based on your query.
- You can also modify your query and search again. To do that, click on **Modify Advanced Search**.
![Click on Modify Advanced Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf65ee84c384f3260/66547e082da50de482472c30/Click_on_Modify_Advanced_Search.png)Click on **Reset** to reset your search query.
If you want to remove certain query levels, simply click the** Remove** button across each query.![Click on Reset to reset your search query and click the Remove button across each query.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ad7a7a5b6e32744/66547080fab3255c6d34c88f/Click_on_Reset_to_reset_your_search_query_and_click_the_Remove_button_across_each_query.png)

## Common questions

### Is the New Search Experience available to all users?
**Note**: The New Search Experience is currently released as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com)team.

### Where do I find Basic Search?
To access Basic Search, navigate to your stack’s Entries or Assets list page and locate the “Search” input area within the table.

### Can I save my searches and filters for later?
The “My Views” feature allows you to save a custom list of entries or assets for future reference or repeat usage.

### Can I build complex queries in Advanced Search?
You can also add nested conditions. Nested conditions help you build complex queries to further refine your search.