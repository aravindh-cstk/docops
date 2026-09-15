---
title: "Bulk Operations App Installation Guide"
description: "Save time with the Contentstack's Bulk Operations app. Perform operations on entries, assets, and releases all at once, enhancing your content management."
url: /marketplace/bulk-operations
uid: bltfb6f60f24b7f69ba
---

# Bulk Operations App Installation Guide

## Bulk Operations App Installation Guide

The Bulk Operations Marketplace app in Contentstack allows you to perform various operations on bulk content together in one go. The app includes operations for updating multiple entries within the Contentstack environment. Bulk operations save time and effort by allowing operations on multiple entries in a single request, improving efficiency, performance, and user experience.

The Bulk Operations app enables you to use the following operation:

**Entries**: Bulk operations for Contentstack [Entries](/docs/headless-cms/about-entries/), allow you to perform bulk publishing, unpublishing, and deleting multiple entries at once. Content editors save time by avoiding repetitive tasks on more than one entry.

**Assets**: Bulk operations on Contentstack [Assets](/docs/headless-cms/about-assets/), allow you to perform multiple asset-related operations such as uploading, publishing, unpublishing, and deleting in bulk. Bulk operations are available for images and videos stored within the Assets section of CMS.

**Releases**: Bulk operations on Contentstack [Releases](/docs/headless-cms/about-releases), allow you to add multiple entries and assets at once and also create a new release. This benefits faster deployments and greater visibility into the content publishing process.

**Find and Replace**: The Find and Replace operation quickly searches for a specific text, such as a word or a phrase, and replaces it with another. The app lets you edit the text in multiple entries at once. It can correct typos or spelling mistakes, update outdated information, and make changes throughout the content.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure the Bulk Operations app within your stack.

## Steps for Execution

1.  [Install and configure the Bulk Operations app in Marketplace](#install-and-configure-the-bulk-operations-app-in-marketplace)
2.  [Use the Bulk Operations app within your Stack](#use-the-bulk-operations-app-within-your-stack)

1.  ## Install and Configure the Bulk Operations App in Marketplace

    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Bulk Operations** app and click **Install**.![Bulk-Operations-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49dc9e47c40895ff/68f68d69a6c7daa048559e12/Bulk-Operations-App.png)
    4.  In the pop-up window, select the stack where you want to install the Bulk Operations app, accept the **Terms of Service**, and click the **Authorize & Install** button.![Bulk-Operations-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c738e2f60af37b8/6889dee779c9e469c8e73954/Bulk-Operations-App-Install.png)
    5.  On the **UI Locations** tab, you can see the predefined app location ([Stack Dashboard Location](/docs/developer-hub/dashboard-location)). You can use the toggle button corresponding to enable or disable it based on your requirements.![Bulk-Operations-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68eaf94fe0dd48c3/69d7d09b1c2210d6c2970994/Bulk-Operations-UI-Locations.png)
    6.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    7.  Click **Open Stack** to start using the Bulk Operations app.
2.  ## Use the Bulk Operations App within your Stack

    To use the Bulk Operations app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the stack dashboard to view the Bulk Operations app within your CMS.![Bulk-Operations-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfbc8ad16a6bfd805/690c8a1f0af1a828e7efb074/Bulk-Operations-Dashboard.png)

    ### Entries Operation

    1.  Click **Entries** to perform bulk operations like publish, unpublish, and delete on entries.![Bulk-Operations-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37df56b2c6dfbbd4/68b76c6c1b488d4b79bff87e/Bulk-Operations-Entries.png)
    2.  In the Dashboard, choose the **Content Type** from all the available content types of your stack.![Bulk-Operations-Entries-Select-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10f19a02c487d27c/68b77a94a312d30277d5e977/Bulk-Operations-Entries-Select-Content-Type.png)

        You can see all the entries of the selected content type.

        ![Bulk-Operations-Entries-Selected-Content-Type-And-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc95eff078bae7eb0/68b77a94887ef814a1f631b5/Bulk-Operations-Entries-Selected-Content-Type-And-Entries.png)
    3.  Select the entries and click **Publish** to publish all the selected entries at once.![Bulk-Operations-Entries-Publish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49d478b548a068a3/68b77a7c12dfd783a3f7ac04/Bulk-Operations-Entries-Publish.png)
    4.  In the **Publish Entries** modal, select the **Environment(s)** where you want to publish the entries. The stack **Language** is selected, by default; you can add more languages if needed. Choose the option to publish now or schedule it for later, and then click **Publish** to continue.![Bulk-Operations-Entries-Publish-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ffd5dc83b31ca45/68b784a2cf9666f767ec7445/Bulk-Operations-Entries-Publish-Modal.png)

        After successful publishing of entries, you can see the **Queued** status.

        ![Bulk-Operations-Entries-Published-And-Queued](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b59bc0f6e3ad5d6/69d7c8f11c221067f797095b/Bulk-Operations-Entries-Published-And-Queued.png)

        Click the vertical ellipsis under **Actions** next to an entry and select **View Entry** to open the entry editor. Alternatively, you can click **View in Publish Queue** to view the status in the publish queue.

        ![Bulk-Operations-Entries-Published-And-Queued-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3d004fac0151527/69d7c92cfec90641e048c9a5/Bulk-Operations-Entries-Published-And-Queued-View-Options.png)
    5.  If you want to unpublish the entries, select entries and click **Unpublish**.![Bulk-Operations-Entries-Unpublish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14e00a38c2e7830a/68b77a94a312d39a1ed5e979/Bulk-Operations-Entries-Unpublish.png)
    6.  In the **Unpublish Entries** modal, select the **Environment(s)** where you want to unpublish the entries. The stack **Language** is selected, by default; you can add more languages if needed. Choose the option to unpublish now or schedule it for later, then click **Unpublish** to continue.![Bulk-Operations-Assets-Unpublish-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd34fc122f362f1f/68b76143c42f68b513c526b1/Bulk-Operations-Assets-Unpublish-Modal.png)

        Once unpublished, the entry status will update to Unpublished.

        ![Bulk-Operations-Entries-Unpublished](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ecd7c348315af17/68b77a94a312d3cd5fd5e97d/Bulk-Operations-Entries-Unpublished.png)

        Click the vertical ellipsis under **Actions** next to an entry and select **View Entry** to open the entry editor. Alternatively, you can click **View in Publish Queue** to view the status in the publish queue.

        ![Bulk-Operations-Entries-Unpublished-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e70fe0212a0505c/68b77a9495b27d89a1c6f6cd/Bulk-Operations-Entries-Unpublished-View-Options.png)
    7.  The **Delete** button allows you to delete all the selected entries of the respective locale and move them to trash.![Bulk-Operations-Entries-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc32fb29742a5012b/68b77a7ca312d38393d5e971/Bulk-Operations-Entries-Delete.png)
    8.  In the **Delete Entries** modal, click **Delete** to delete all the selected entries.![Bulk-Operations-Entries-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0778af1df629f03d/68b77a7cf827001a8384e565/Bulk-Operations-Entries-Delete-Modal.png)

        After successful deletion, you can see the status.

        ![Bulk-Operations-Entries-Deleted](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7f80209fa392c61/68b77a7cc6107940ced8887c/Bulk-Operations-Entries-Deleted.png)

        Click the vertical ellipsis under **Actions** next to an entry and select **View in Trash** to view the entry in trash.

        ![Bulk-Operations-Entries-Deleted-View-In-Trash](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2188dd94b25ef7c/68b77a7bc53b04affef96fd3/Bulk-Operations-Entries-Deleted-View-In-Trash.png)

        **Note:** Deleted entries stay in [Trash](/docs/headless-cms/about-trash) for **14 days** before they are permanently removed.

    9.  Click the **Reset** button to reset the content type field to start a new search.![Bulk-Operations-Entries-Reset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0fd0669b4dc0ad32/68b77a7dcf96662dc2ec7418/Bulk-Operations-Entries-Reset.png)
    10.  Confirm and click the **Reset** button again to reset the content type drop-down.![Bulk-Operations-Entries-Reset-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32ab9ae678c6b60f/68b77a7dc0da10f80ede7980/Bulk-Operations-Entries-Reset-Modal.png)

         **Note:** You can publish, unpublish, or delete up to **1000 entries** at a time.


    ### Assets Operation

    1.  Click **Assets** to upload, publish, unpublish, and delete assets.![Bulk-Operations-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15476fd321bb8287/68b76c6bb3421a11b009b302/Bulk-Operations-Assets.png)
    2.  In the Dashboard, you can see all the assets and assets folders. Click the **\+ New Asset** button for adding new assets in your stack.![Bulk-Operations-Assets-Add-New-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt811c4fa1aa99a4a8/68b7612779acbb13d065bae5/Bulk-Operations-Assets-Add-New-Assets.png)
    3.  You can directly upload assets or you can create a folder and upload assets by clicking the **Upload Here** button.![Bulk-Operations-Assets-Upload-Here](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef7a7012a308bf14/68b761441b488d4910bff843/Bulk-Operations-Assets-Upload-Here.png)

        **Note:** You can create a nested folder structure with up to **5 levels**.

        A confirmation message appears after successful upload of assets.

        ![Bulk-Operations-Assets-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7275bb4dfafd5e6/68b76127887ef87b74f63134/Bulk-Operations-Assets-Added.png)

        **Note:** You can upload the maximum number of assets based on your organization’s limit.

        Click the vertical ellipsis under **Actions** next to an asset and select **View Asset** to view it in CMS.

        ![Bulk-Operations-Assets-View-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf4abe13c2e7c3a9/68b76143c0da10637fde78fd/Bulk-Operations-Assets-View-Assets.png)
    4.  Select the assets and click **Publish** to publish all the selected assets at once.![Bulk-Operations-Assets-Publish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt179f8748922a24fe/68b761287e8fa90e421367d6/Bulk-Operations-Assets-Publish.png)
    5.  In the **Publish Assets** modal, select the **Environment(s)** where you want to publish the assets. The stack **Language** is selected, by default; you can add more languages if needed. Choose the option to publish now or schedule it for later, then click **Publish** to continue.![Bulk-Operations-Assets-Publish-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddfc85c97977c8bd/68b7612812dfd703b7f7aba5/Bulk-Operations-Assets-Publish-Modal.png)

        After successful publishing of assets, you can see the published status.

        ![Bulk-Operations-Assets-Published](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaad4b21bf7269139/68b7612898564fda43b4cb73/Bulk-Operations-Assets-Published.png)

        Click the vertical ellipsis under **Actions** next to an asset and select **View Asset** to view it in CMS. Alternatively, you can click **View in Publish Queue** to view the status in the publish queue.

        ![Bulk-Operations-Assets-Published-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ccab8f2b827d8e6/68b7614312dfd78458f7aba9/Bulk-Operations-Assets-Published-View-Options.png)
    6.  If you want to unpublish the assets, select assets and click **Unpublish**.![Bulk-Operations-Assets-Unpublish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt631d248a3676c0dd/68b76143974c2b7bfae702d0/Bulk-Operations-Assets-Unpublish.png)
    7.  In the **Unpublish Assets** modal, select the **Environment(s)** where you want to unpublish the assets. The stack **Language** is selected, by default; you can add more languages if needed. Choose the option to unpublish now or schedule it for later, and then click **Unpublish** to continue.![Bulk-Operations-Assets-Unpublish-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd34fc122f362f1f/68b76143c42f68b513c526b1/Bulk-Operations-Assets-Unpublish-Modal.png)

        After successful unpublishing of assets, you can see the unpublished status.

        ![Bulk-Operations-Assets-Unpublished](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb97118377076389e/68b76144a312d3d019d5e8cf/Bulk-Operations-Assets-Unpublished.png)

        Click the vertical ellipsis under **Actions** next to an asset and select **View Asset** to view it in CMS. Alternatively, you can click **View in Publish Queue** to view the status in the publish queue.

        ![Bulk-Operations-Assets-Unpublished-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7404a05690b8ce9a/68b761436f1cb911f5ef531a/Bulk-Operations-Assets-Unpublished-View-Options.png)
    8.  The **Delete** button can delete all the selected assets and move them to trash.![Bulk-Operations-Assets-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfedf0b6cdd7d7d9b/68b761276f1cb91198ef5316/Bulk-Operations-Assets-Delete.png)
    9.  In the **Delete Assets** modal, click **Delete** to delete all the selected assets.![Bulk-Operations-Assets-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f5ae436f1ff7c1c/68b76127471af67e981ece35/Bulk-Operations-Assets-Delete-Modal.png)

        After successful deletion, you can see the status.

        ![Bulk-Operations-Assets-Deleted](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0e4a8a5471a31c2/68b76127c6107919ccd88828/Bulk-Operations-Assets-Deleted.png)

        Click the vertical ellipsis under **Actions** next to an asset and select **View in Trash** to view the asset in trash.

        ![Bulk-Operations-Assets-Deleted-View-In-Trash](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt368232aa526ce7ea/68b7612736f57e645ee78ce2/Bulk-Operations-Assets-Deleted-View-In-Trash.png)

        **Note:** Deleted assets stay in [Trash](/docs/headless-cms/about-trash) for 14 days before they are permanently removed.

    10.  You can click the folder path links to move between folders.![Bulk-Operations-Assets-Navigation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd7158f7733b17d5/68b76128af26f1d555748eae/Bulk-Operations-Assets-Navigation.png)
    11.  Click the **Reset** button to reset the dashboard to start a new search.![Bulk-Operations-Assets-Reset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b196f2d376b4495/68b761437e8fa9e6df1367de/Bulk-Operations-Assets-Reset.png)
    12.  Confirm and click the **Reset** button again to reset the dashboard view.![Bulk-Operations-Assets-Reset-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde3e24434c502fa1/68b761437e8fa97d3d1367e2/Bulk-Operations-Assets-Reset-Modal.png)

         **Note:** You can publish, unpublish, or delete up to **1000 assets** at a time.


    ### Releases Operation

    Click **Releases** to add multiple entries and assets to a release or create a new release.

    ![Bulk-Operations-Releases](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt825ce5220ed8b02e/68b72fd7732f7d73f4a2eb54/Bulk-Operations-Releases.png)

    #### Add Entries to a Release

    1.  In the Dashboard, click **Entries** to add entries to a release.![Bulk-Operations-Releases-Add-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76cb5db8ac918b0c/68b72fd85075c301e6a00793/Bulk-Operations-Releases-Add-Entries.png)
    2.  Choose the **Content Type** from all the available content types of your stack.![Bulk-Operations-Releases-Entries-Choose-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec4004d8eba748e1/68b72ff0887ef848b4f62ff2/Bulk-Operations-Releases-Entries-Choose-Content-Type.png)

        You can see all the entries of the selected content type.

        ![Bulk-Operations-Releases-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt707baa342752820b/68b72fd912dfd7fee2f7aa0b/Bulk-Operations-Releases-Entries.png)

        Click the vertical ellipsis under **Actions** next to an entry and select **View Entry** to open the entry editor.

        ![Bulk-Operations-Releases-View-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e71cfaa25d71b5d/68b72ff0b54b06d210ca3284/Bulk-Operations-Releases-View-Entry.png)

        **Note:** To change the language, click the **Locales** drop-down in the top-right corner of the dashboard and choose the required locale.

    3.  Select the entries and click **Add to Release** to add all the selected entries to the release at once.![Bulk-Operations-Releases-Entries-Add-To-Release](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc91c7bb26e67425d/68b72fd9c6107956b0d88710/Bulk-Operations-Releases-Entries-Add-To-Release.png)
    4.  In the **Add to Release** modal, select the **Release**. The stack **Language** is selected, by default. Choose the **Publish** or **Unpublish** action option. And then click **Add without References** or **Add with References** to add all the selected entries without or with references to the release.![Bulk-Operations-Releases-Entries-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb83fe1c4873facb5/69dd92ccd8262a57cad758cc/Bulk-Operations-Releases-Entries-Modal.png)

        **Note:**

        -   Release **version 1.0** does not support the inclusion of references; only the selected items will be added to the release.
        -   Release **version 2.0** automatically includes nested references based on your organization plan, with a default of **5 nesting levels**.

    5.  Alternatively, click **\+ Create Release** in the **Select Release** drop-down to create a new release.![Bulk-Operations-Releases-Entries-Create-Release](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt385b3a95e4bfdec2/69dd92d3587a5677588426a7/Bulk-Operations-Releases-Entries-Create-Release.png)
    6.  In the **Create A New Release** modal, enter the **Name** and **Description** of the release and click **Create**.![Bulk-Operations-Releases-Create-Release-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c33b9ddb9b72909/68b72fd8e1265f65d9ce1743/Bulk-Operations-Releases-Create-Release-Modal.png)

        A new release is created and can be seen in the **Select Release** drop-down options.

        **Note:** You can add up to **500 entries** if the release version is v1.0 and **1000 entries** if the release version is v2.0.


    #### Add Assets to a Release

    1.  In the Dashboard, click **Assets** to add assets to a release.![Bulk-Operations-Releases-Add-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt05931bc3d30af8c2/68b72fd81b488d1373bff6b7/Bulk-Operations-Releases-Add-Assets.png)
    2.  Choose any **Asset** from all the available assets and assets folder.![Bulk-Operations-Releases-Assets-And-Folders](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte7c1c902a37c0e2c/68b72fd9c0da10ef06de7785/Bulk-Operations-Releases-Assets-And-Folders.png)

        Click the vertical ellipsis under **Actions** next to an asset and select **View Asset** to view it in CMS.

        ![Bulk-Operations-Releases-View-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e61af0ea9d34a3a/68b72ff0c34d5a135030f5ce/Bulk-Operations-Releases-View-Assets.png)
    3.  Select the assets and click **Add to Release** to add all the selected assets to the release at once.![Bulk-Operations-Releases-Assets-Add-To-Release](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb84691298c58ddc5/68b72fd85ee14d59c0624219/Bulk-Operations-Releases-Assets-Add-To-Release.png)
    4.  In the **Add to Release** modal, select the **Release**. The stack **Languages** is selected, by default; you can add more languages if needed. Choose the **Publish** or **Unpublish** action option, then click the **\+ Add To Release** button to add all the selected assets to the release.![Bulk-Operations-Releases-Assets-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta085f36f65545ac0/68b72fd94f9d3d897b82607c/Bulk-Operations-Releases-Assets-Modal.png)
    5.  Alternatively, click **\+ Create Release** in the **Select Release** drop-down to create a new release.![Bulk-Operations-Releases-Assets-Create-Release](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfcd4541b7d07604a/68b72fd8c42f6869e9c5252e/Bulk-Operations-Releases-Assets-Create-Release.png)
    6.  In the **Create A New Release** modal, enter the **Name** and **Description** of the release and click **Create**.![Bulk-Operations-Releases-Create-Release-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c33b9ddb9b72909/68b72fd8e1265f65d9ce1743/Bulk-Operations-Releases-Create-Release-Modal.png)

        A new release is created and can be seen in the **Select Release** drop-down options.

        **Note:** You can add up to **500 assets** if the release version is v1.0 and **1000 assets** if the release version is v2.0.


    **Additional Resource:** To know more about Releases, please refer to [Create and Manage Releases](/docs/headless-cms/about-releases) documentation.

    ### Find and Replace Operation

    1.  Click **Find and Replace** to search and replace the content in the entries.![Bulk-Operations-Find-And-Replace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95f09674bc8ec632/68b6fcca5075c3ab63a00615/Bulk-Operations-Find-And-Replace.png)
    2.  In the Dashboard, enter the following mandatory details:

        1.  Select the **Content Type** from all the available content types of your stack.
        2.  Select the **Locale** from the available languages.
        3.  The **Field Name/Path** drop-down shows all fields of the selected content type. Choose the field in which you want to search the content.

            **Note:** **Field Name/Path** signifies the [Unique ID](/docs/headless-cms/unique-id/) of the field, which is generated when you add a field in the content type.

        4.  Enter a word or phrase in the **Search Value** field for searching.

            **Note:** The search value is case-sensitive.


        ![Bulk-Operations-Find-And-Replace-Filters](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07ce07cf4f9638d7/68b6fccc471af6722f1ecb33/Bulk-Operations-Find-And-Replace-Filters.png)
    3.  Click the **Search** button to find the search values in the entries of that content type.![Bulk-Operations-Find-And-Replace-Find](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78575d17ceae3681/68b6fcccf827007c6f84e22d/Bulk-Operations-Find-And-Replace-Find.png)

        **Note:** After the search results for entries are generated, the **Replace** button is enabled.

    4.  In the **Replace Value** field, enter a word or phrase which you want to replace, select the entries from the searched items, and then click the **Replace** button.![Bulk-Operations-Find-And-Replace-Replace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b5f5281802b4950/68b6fcf0887ef84e96f62e9e/Bulk-Operations-Find-And-Replace-Replace.png)

        **Note:** The replace value is case-sensitive.

    5.  In the **Replace Entry Fields** modal, you can view the **Search Value**, **Replace Value**, and the total number of **Fields** to be updated.

        In the following screenshot, **Sample** represents the value to be replaced, **sample** represents the replacement value, and **2** is the number of fields in which this replacement will take effect.

        Click the **Replace** button again to replace and update the searched text in the entries.

        ![Bulk-Operations-Find-And-Replace-Replace-Confirm](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5784d8e72e53a6b1/68b6fcea12dfd7b632f7a896/Bulk-Operations-Find-And-Replace-Replace-Confirm.png)

        After updating the content successfully, the status changes to **Success**. Scroll right to view the status and message.

        ![Bulk-Operations-Find-And-Replace-Replace-Status](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5eb6839818a5f0b1/68b6fcf05075c32740a00619/Bulk-Operations-Find-And-Replace-Replace-Status.png)

        **Note:** Every **Replace** action creates a new version of an entry being updated.

    6.  Select the entries and click the **Publish** button for bulk publishing.![Bulk-Operations-Find-And-Replace-Publish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf2c1f296a0d23ce4/68b6fccc974c2b7497e70023/Bulk-Operations-Find-And-Replace-Publish.png)
    7.  In the **Publish Entries** modal, select the **Environment(s)** where you want to publish the entries. The stack **Language** is selected, by default. Choose the option to publish now or schedule it for later, and then click **Publish** to continue.![Bulk-Operations-Find-And-Replace-Publish-Confirm](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf226ecf9262951d6/68b6fccc981e960e862a1fe2/Bulk-Operations-Find-And-Replace-Publish-Confirm.png)

        **Note:** The app takes into account the Language which is configured at the time of selecting the locale in the Search filters.

        After successful publishing of entries, you can see the **Queued** status.

        ![Bulk-Operations-Find-And-Replace-Published-And-Queued-Entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b97a6e35a4e3ff2/69d7cce884864884c0cd7cd0/Bulk-Operations-Find-And-Replace-Published-And-Queued-Entries.png)

        Click the vertical ellipsis under **Actions** next to an entry and select **View Entry** to open the entry editor. Alternatively, you can click **View in Publish Queue** to view the status in the publish queue.

        ![Bulk-Operations-Find-And-Replace-Published-And-Queued-Entries-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54d093e3ea44fe8f/69d7cf9afec906083d48c9f9/Bulk-Operations-Find-And-Replace-Published-And-Queued-Entries-View-Options.png)

        **Note:** You cannot perform search, replace, and publish if it is restricted in your custom roles permissions. For more details, refer to the [Custom Roles](/docs/headless-cms/types-of-roles/#custom-role) documentation.

    8.  Click the **Reset** button to reset all the fields to start a new search.![Bulk-Operations-Find-And-Replace-Reset-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82c8ea431cbda56f/69d7ccf85344ac74f9fd3355/Bulk-Operations-Find-And-Replace-Reset-Button.png)
    9.  Confirm and click the **Reset** button again to reset the search filters.![Bulk-Operations-Find-And-Replace-Reset-Button-Confirm](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt446c7af2a913f7c9/68b6fce9887ef84230f62e9a/Bulk-Operations-Find-And-Replace-Reset-Button-Confirm.png)

        You can also reset the filters by updating any value in the mandatory filters.

        ![Bulk-Operations-Find-And-Replace-Reset-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d6cc3b39ef2f2d5/68b6fcf0c53b0450a0f96c90/Bulk-Operations-Find-And-Replace-Reset-Filter.png)

    ### Find and Replace based on Field Types

    You can apply the Find and Replace Bulk operation based on the field types. The app supports all the Text Fields, [Number](/docs/headless-cms/number/), [Date](/docs/headless-cms/date/) (without Time), [Boolean](/docs/headless-cms/boolean/), and [References](/docs/headless-cms/reference/).

    **Note:** The app currently does not support **Select**, **Date** (with Time), **File**, and **Custom** fields.

    Let’s apply the Find and Replace operation on different Content Type Fields.

    1.  **Text Fields**: You can apply search on all the text-supported fields such as [Title](/docs/headless-cms/title/), [URL](/docs/headless-cms/url/), [Single Line Textbox](/docs/headless-cms/single-line-textbox/), [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/), [HTML-based Rich Text Editor](/docs/headless-cms/rich-text-editor/), [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/), [Markdown](/docs/headless-cms/markdown/), and [Link](/docs/headless-cms/link/).

        Enter the **Search Value** text, click **Search**, then enter the **Replace Value** text, select the entries, and then click the **Replace** button to update the content in all the selected field instances at once.

        ![Bulk-Operations-Find-And-Replace-Text-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteacaac87fd3784b5/68bff24a6aa0be7c4b9c45b5/Bulk-Operations-Find-And-Replace-Text-Field.png)

        The **Fields Name/Path** displays the Unique ID of the field along with the field instance number in which the content is found and replaced. For example, **single\_line** is the Unique ID, and **\[0\]** signifies the first single line textbox within the entry.

        When you select and replace the content in multiple instances of an entry, the entry is updated once for all the replaced values, and then this updated version of an entry is created.

        ![Bulk-Operations-Find-And-Replace-Text-Field-Publish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e66a211312fc73d/69d7cecaef3c046972f7f832/Bulk-Operations-Find-And-Replace-Text-Field-Publish.png)
    2.  **Number**: You can apply the find and replace operation on the entire number.![Bulk-Operations-Find-And-Replace-Number-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5affb062f70c92b4/68b6fccbcf9666acf9ec7075/Bulk-Operations-Find-And-Replace-Number-Field.png)
    3.  **Date (with Hide Time)**: You can use the search filter only on dates, not time.

        **Note:** When adding a **Date** field to the content type, go to the **Advanced** properties, and select the **Hide Time** checkbox from the options provided.

        Select any date in the **Search Value** date selector and replace it with another date selected in the **Replace Value** date selector.![Bulk-Operations-Find-And-Replace-Date-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c39560deeebd440/68b6fcca36f57e2dc1e78a16/Bulk-Operations-Find-And-Replace-Date-Field.png)
    4.  **Boolean**: You can apply the search filter to change the Boolean value to **True** if it is set to **False** and vice versa.![Bulk-Operations-Find-And-Replace-Boolean-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9b807dbe2d212af/68b6fccac53b04301bf96c8a/Bulk-Operations-Find-And-Replace-Boolean-Field.png)
    5.  **References**: You can use the Find and Replace operation in two ways:

        1.  When the reference field has one referenced content type.

            Select a referenced entry in the **Search Value** drop-down and replace it with another referenced entry selected in the **Replace Value** drop-down.

            ![Bulk-Operations-Find-And-Replace-Reference-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c6fbead88c551ce/68b6fcea471af6afae1ecb37/Bulk-Operations-Find-And-Replace-Reference-Field.png)
        2.  When the referenced field has more than one referenced content type.

            Select the content type in the **Search Value** drop-down, then select the referenced entry from another drop-down. Similarly, in the **Replace Value** drop-down, select the content type first and then select the referenced entry to be updated.

            ![Bulk-Operations-Find-And-Replace-Multiple-Reference-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5d473946c0701fb2/68b6fccb471af6d68d1ecb2f/Bulk-Operations-Find-And-Replace-Multiple-Reference-Field.png)

        **Note**:

        -   The app also supports all the supported fields inside the [Modular Blocks](/docs/headless-cms/modular-blocks/), [Group](/docs/headless-cms/group/), and [Global](/docs/headless-cms/global/) fields.
        -   You can select up to **300 table items** for Find & Replace.
