---
title: Set Up Shopify Live Preview
description: Set up Shopify Live Preview to connect Contentstack with Shopify Liquid themes for real-time preview without publishing or reloading.
url: https://www.contentstack.com/docs/headless-cms/set-up-shopify-live-preview
product: Contentstack
doc_type: setup-guide
audience:
  - developers
  - content-editors
version: unknown
last_updated: 2026-03-25
---

# Set Up Shopify Live Preview

This page explains how to configure Shopify Live Preview to connect Contentstack with Shopify Liquid themes so editors and developers can preview changes in real time. Use it when setting up Live Preview for a Shopify storefront, including extending preview support beyond Product pages.

**Note**: The Shopify Live Preview is a plan-based feature and may not be accessible to all users. For more information or to request access, contact our [support](mailto:support@contentstack.com) team.

Shopify Live Preview connects Contentstack with Shopify Liquid themes, enabling editors to preview changes in real time, without publishing or reloading the page. This reduces errors, accelerates workflows, and helps validate storefront updates before deployment.

To configure Shopify Live Preview, log in to your [Contentstack Account](https://www.contentstack.com/login/) and perform these steps:

## Install the Shopify Live Preview App

Install the Live Preview app to connect Contentstack with your Shopify storefront.

Navigate to the **Marketplace**.

- In the **Apps** panel, search for **Shopify Live Preview**.![1. Shopify Live Preview App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb82c51c4b06cc1a5/690479a1e09550caaf841640/1._Shopify_Live_Preview_App.png)
- Click **Install**.
- In the pop-up, select the stack where you want to install the app, accept the **Terms of Service **checkbox, and click **Authorize & Install**.![2. Authorize Shopify Live Preview.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fb1cde01dda5337/690479a2f62d8cdca2c2f5dd/2._Authorize_Shopify_Live_Preview.png)
- Choose your **Organization** and authorize user access.![3. Select Org.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3914968abd1a9730/690479a2772cdc8cde8b8e70/3._Select_Org.png)

## Deploy the Node.js Middleware on Launch

The Node.js middleware enables live syncing between Contentstack and Shopify.

Select the **Environment** for Live Preview.

- Choose the **Delivery Token**.
- Click **Deploy on Launch**.![4. Server Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4efe3183fa936f63/690479a17fbc0da673e5a059/4._Server_Config.png)
- After deployment, copy the **Live Preview Middleware URL** displayed. ![5. Live Preview Middleware URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86badca28a864646/690479a1a947a9e452bcd578/5._Live_Preview_Middleware_URL.png)

  **Note:** You can add this URL in your Shopify theme's `cs-lp-script.liquid` file.

## Add Live Preview Files to Your Shopify Theme

To sync Contentstack with Shopify:

Copy the [code](https://github.com/contentstack/shopify-live-preview-sdk/blob/main/shareable/cs-lp-script.liquid) from `cs-lp-script.liquid` and paste it into your Shopify theme's **snippets** folder.

- In the file, replace `your_middleware_url` with the copied middleware URL.
- Copy the [code](https://github.com/contentstack/shopify-live-preview-sdk/blob/main/shareable/data-cslp-tags.liquid) from `data-cslp-tags.liquid` and paste it into the same folder.

  **Note:** Keep original file names unchanged, `cs-lp-script.liquid` and `data-cslp-tags.liquid`, to ensure proper syncing.

## Authenticate with GitHub

Click **Authenticate GitHub** and grant Contentstack permission to access your GitHub repository.

## Sync Your Theme Repository

Link your theme files with the middleware to enable real-time rendering.

Select your **Repository** and **Branch**.

- Click **Sync GitHub**. **![7. Website Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69108dfe173c00e2/690479a1a15f0424e4b5d4f9/7._Website_Config.png)Note:** A copy of your Shopify theme is stored in the middleware and re-rendered with each update.

## Enable “Always Open in New Tab”

For easier access, you can configure Live Preview to [open in a new tab](./open-live-preview-in-a-new-tab.md).

In your stack, go to **Settings** and select **Visual Experience**.

- In the **General** tab, enable the **Always Open in New Tab** toggle.
- Click **Save**.![Enable_LP_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b2de40925240e2f/69bd80e04440ed410cb1da8e/Enable_LP_Open_in_New_Tab.png)

## Extend Live Preview to Non-Product Pages

By default, Shopify Live Preview is optimized for **Product** pages, where associated Metaobjects are automatically available in the Liquid file. However, on non-Product pages, such as **Home**, **Collection**, or custom pages, Metaobjects are not pre-populated. Each Metaobject must be manually referenced using its **type** and **handle**.

**Why this matters**

Without automatic Metaobject resolution, implementing Live Preview across your storefront becomes more complex and error-prone. Each Metaobject must be hardcoded, increasing the risk of inconsistencies and making it harder to maintain as content grows or changes.

To simplify this process and create parity with Product pages, we recommend creating a **Master Metaobject**. This Master Metaobject references all required Metaobjects, enabling you to fetch and manage them through a single entry.

**Benefits of using a Master Metaobject**

- **Consistent data access** across templates
- **Simplified maintenance** as Metaobjects evolve
- **Seamless integration** with Live Preview on non-Product pages

This approach creates a scalable, reliable setup for your entire storefront and helps both developers and content editors work more efficiently with Contentstack data in Shopify.

### Create Definition and Entry for Metaobject Mapping

To connect Shopify with Contentstack Live Preview, you’ll need to create a definition and an entry that stores the Metaobject information generated by the **Contentstack App**. This setup ensures accurate mapping and avoids configuration issues.

To sync Shopify with Contentstack Live Preview:

- Create a new text file in your code editor.![9. Create a new text file.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8746b55eea44887/690479a1772cdc3b218b8e6c/9._Create_a_new_text_file.png)
- Log in to your Shopify store using a browser.![10. Log in to your Shopify store.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd6350ae4f259518/690479a2f62d8ca48dc2f5e1/10._Log_in_to_your_Shopify_store.png)
- In the left panel, click **Content**. The **Metaobjects** page will open by default.![11. Content Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb85dce013e8bcea0/690479a9a45e9613bbb5a368/11._Content_Tab.png)
- Select or click the first Metaobject that was added by Contentstack.![12. Select Metaobject.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt34a794e359116e5c/690479a9a15f047b6eb5d4fd/12._Select_Metaobject.png)
- Click the **Manage definition** button.![13. Manage Definition button..png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8c0b58c149f9af4/690479a97fbc0dc415e5a05d/13._Manage_Definition_button..png)
- Click the **Copy** icon to copy the Metaobject type.![14. Copy Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteeab0b4cf623dc8b/690479a9772cdc37eb8b8e74/14._Copy_Icon.png)
- Return to the text file you created and paste the copied type.![15. Paste the copied type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt358c724f2a9ab03d/690479a9e24850e6a2aed5ef/15._Paste_the_copied_type.png)
- After pasting, add a period (.) to the end of the type, followed by the handle to form the `type.handle` format.![16. Add a period.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc18311a3bbbc1c33/690479aae09550777e841644/16._Add_a_period.png)
- Go back to the Metaobject page by pressing the browser **Back** button.![17. Metaobject page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc2b055a42f75cfd/690479a98d96912c916669cd/17._Metaobject_page.png)
- Click the **first entry** of the Metaobject.
- On the entry page, hover over the **Handle** section to display the **Copy** icon. Click it to copy the handle.![18. copy the handle.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2015e8cbde9df5e5/690479a9529fa0456e5b8496/18._copy_the_handle.png)
- Paste the copied handle into your text file after the corresponding type. Your text file should now display one complete `type.handle` string.![19. Paste the copied handle.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc95ed163dd9ac0e4/690479b6a947a97e1dbcd57c/19._Paste_the_copied_handle.png)
- Repeat **steps 3–13** for all Metaobjects used outside of Product pages that were added by Contentstack during the app sync.![20. Repeat steps 3–13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte24e6b479eef533b/690479b70edfcfee13cf4f15/20._Repeat_steps_3–13.png)

**Note:** Ensure the format strictly follows `type.handle` as shown in the steps above. Once completed, your text file will resemble the reference screenshot provided.

Now your text file is ready to be used later in the process.

### Create a New Definition

Create a new Metaobject definition in Shopify to hold your identifiers:

- Go to **Settings > Metafields and Metaobjects** in your Shopify store.![21. Metafields and Metaobjects.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb296360a321b578e/690479bb88e4ea42263b218e/21._Metafields_and_Metaobjects.png)
- Click **Add definition**.![22. Add Definition.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltabb35f6b5ba8ec8d/690479ba6e5003a8b0d2c804/22._Add_Definition.png)
- In the **Name** field, enter `contentstack_lp_metaobjects_list`.![23. Add Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb5e9b36e70bfbd6/690479baa947a981cebcd580/23._Add_Name.png)
- Click **Add field** and select **Single line text**.![24. Add Single line text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb7d72b7905b72c0e/690479bb531ab03896280c95/24._Add_Single_line_text.png)
- Enter `type` as the field name.
- Select **List of values** as the input type.
- Click **Add**, then click **Save** to finalize the definition.![25. Single Line Text Definition.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5030296981d0199d/690479bba947a9b90ebcd584/25._Single_Line_Text_Definition.png)

### Create a New Entry

Now, use your text file to populate the new entry:

- Click **Add entry** to create a new entry for the definition you just made.![26. Add Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde2452503b270814/690479bb0edfcfaa96cf4f19/26._Add_Entry.png)
- In the **Handle** section, click **Edit**.![27. Edit handle.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9500d8f8366cae47/690479bba15f048396b5d501/27._Edit_handle.png)
- Set the handle name to `contentstack_lp_metaobjects_list_entry`.
- In the **Types** input field, add your first `type.handle` value from the text file.
- Click **Add item** to include more values from your list.![28. Type Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc236d963f683c6e/690479bba947a95995bcd588/28._Type_Input.png)
- Click **Save**.

**Warning:** Use the exact field names, `contentstack_lp_metaobjects_list``` and `contentstack_lp_metaobjects_list_entry`. Any deviation will result in a failed setup.

With these configurations in place, any changes made in Contentstack are reflected in real time on your Shopify storefront, even on non-Product pages.

Shopify Live Preview in Contentstack enables seamless, real-time updates between your CMS and Shopify storefront, eliminating the need for manual publishing or page reloads. By following the steps outlined in this guide, you can configure a scalable, reliable preview experience for both Product and non-Product pages.

## Common questions

### Is Shopify Live Preview available on all plans?
No. **Note**: The Shopify Live Preview is a plan-based feature and may not be accessible to all users. For more information or to request access, contact [support](mailto:support@contentstack.com).

### Where do I use the Live Preview Middleware URL?
After deployment, copy the **Live Preview Middleware URL** displayed. **Note:** You can add this URL in your Shopify theme's `cs-lp-script.liquid` file.

### Do I need to keep the snippet filenames unchanged?
Yes. **Note:** Keep original file names unchanged, `cs-lp-script.liquid` and `data-cslp-tags.liquid`, to ensure proper syncing.

### Can Live Preview work on non-Product pages?
Yes, but Metaobjects are not pre-populated on non-Product pages and must be manually referenced using `type.handle`, or managed via a recommended **Master Metaobject** approach described on this page.