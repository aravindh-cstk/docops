---
title: "Salesforce Commerce App Installation Guide"
description: "Learn how to install and configure the Salesforce Commerce app in Contentstack to sync products, manage categories, and build unified commerce experiences."
url: /marketplace/salesforce-commerce
uid: blt932332f47526b774
---

# Salesforce Commerce App Installation Guide

## Salesforce Commerce App Installation Guide

Salesforce Commerce is a seamless cloud-based eCommerce platform that can help deliver a personalized and cohesive commerce experience. With its robust online store management features, you can set up an online store, create AI-powered shopping experiences and grow your online businesses.

Contentstack Marketplace allows you to easily install the Salesforce Commerce app and use it within your stack to add products and categories from the Salesforce Commerce store within your entries.

## Prerequisites

-   [Salesforce Commerce account](https://account.demandware.com/dwsso/realms/ccam/login-actions/authenticate?execution=ca8aa426-19e1-43e7-8d3c-631ad7023f69&client_id=70e0d585-9115-4cd2-89cd-1c8758ed2ce2&tab_id=q6VbtETAhMU&client_data=eyJydSI6Imh0dHBzOi8vYWNjb3VudC5kZW1hbmR3YXJlLmNvbTo0NDMvZHcvb2lkYy9vcGVuaWRfY29ubmVjdF9sb2dpbiIsInJ0IjoiY29kZSIsInN0IjoibDcxOFlCOFRURzFlWjJfbmtyR3poR1ExSkZaekVjbmt6V0xZUkwtWWNUOD0ifQ)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure the Salesforce Commerce app.

## Steps for Execution

1.  [Retrieve your client credentials from Salesforce Commerce](#retrieve-your-client-credentials-from-salesforce-commerce)
2.  [Install and Configure the Salesforce Commerce app in Marketplace](#install-and-configure-the-salesforce-commerce-app-in-marketplace)
3.  [Use the Salesforce Commerce app within your Stack](#use-the-salesforce-commerce-app-within-your-stack)

1.  ## Retrieve your Client Credentials from Salesforce Commerce

    **Note:** Ensure you have a working [Salesforce account](https://login.salesforce.com/?locale=in). If not, visit the official website.

    ### Get API Client ID

    To retrieve the API client ID, login in to Commerce Cloud Account Manager, and follow the steps given below:

    1.  Click **API Client** from the menu.![Salesforce-Commerce-API-Client](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0ad0cdce04803f28/62e26a2a5c954177895abf99/SFCC-API_Client.png)
    2.  Click the **Add API Client** button.![Salesforce-Commerce-Add-API-Client](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb528bc27ba5d912a/62e26a2819ee366ebba55b4d/SFCC-Add_API_Client.png)
    3.  Provide the following details for the new API client:
        1.  Enter a **Display Name** and set a **Password**.![Salesforce-Commerce-API-Client-Name-and-Password](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte8f54045e3cd559b/62e26a2a022e5e700e65b253/SFCC-API_Client-Name_and_Password.png)
        2.  Add an organization.
            1.  Click the **Add** button for Organizations.![Salesforce-Commerce-Organization-Add](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc753fe1a07d16366/62e26a57e71af410b83bd1da/SFCC-Organization-Add.png)
            2.  Select your organization and click the **Add** button.![Salesforce-Assign-Organization-Add](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltdbbe88b652481762/62e26a2919ee366ebba55b51/SFCC-Assign_Organization-Add.png)
        3.  Add roles.
            1.  Click the **Add** button for Roles.![Salesforce-Assign-Roles-Add](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1bb52b8cb8aa3129/62e26a85552d0a1146320cf6/SFCC-Roles-Add.png)
            2.  Select the required roles and click the **Add** button.![Salesforce-Commerce-Assign-Roles-Add](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd4e7e0a2e51c4f7f/62e26a2a552d0a1146320cee/SFCC-Assign_Roles-Add.png)
        4.  Add scopes under OpenID Connect.

            Enter the following scopes in **Default Scopes**:

            ```
            mail
            roles
            tenantFilter
            profile
            openId
            ```

            Enter the following scopes in **Allowed Scopes**:

            ```
            sfcc.shopper-baskets-orders.rw
            sfcc.shopper-promotions
            sfcc.shopper-gift-certificates
            sfcc.shopper-categories
            sfcc.shopper-product-search
            sfcc.shopper.stores
            sfcc.shopper-customers.register
            sfcc.shopper-customers.login
            sfcc.shopper-myaccount.rw
            sfcc.shopper-myaccount.addresses.rw
            sfcc.shopper-myaccount.baskets
            sfcc.shopper-myaccount.orders
            sfcc.shopper-myaccount.paymentinstruments.rw
            sfcc.shopper-myaccount.productlists.rw
            sfcc.products.rw
            sfcc.catalogs.rw
            sfcc.shopper-products
            sfcc.shopper-productlists
            ```

            ![Salesforce-Commerce-Scopes](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4c302de8724ef53d/62e26a86e717bf11519a93dd/SFCC-Scopes.png)

            **Note:** By default, you will see the scope **mail** in the **Default Scopes**.

        5.  Select **client\_secret\_post** as the **Token Endpoint Auth Method**.![Salesforce-Commerce-Client-Secret-Post](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltaa94914b21371832/62e26a2912f4cd75109ded73/SFCC-client-secret-post.png)
        6.  Click the **Save** button. You can see your API client ID in the **Account Manager** screen.
        7.  Copy the **API client ID** to use in the **Client ID** field during app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace).![Salesforce-Commerce-API-Client-Displayed](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbbc4cea4a960fb53/62e26a2a7e18987096ab765f/SFCC-API_Client-Displayed.png)

    ### Get Short Code, Organization ID, and Site ID

    To get the **Short Code**, **Organization ID**, and **Site ID**, follow the steps given below:

    1.  Log in to Business Manager using the Account Manager credentials.

        **Note:** Contact the Salesforce support team to get the Business Manager account link.

    2.  Navigate to **Administration**, go to **Site Development**, and click **Salesforce Commerce API Settings**. You can copy the **Short Code** and **Organization ID** to use in app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace).![Salesforce-Commerce-Credentials-Short-Code-And-Org-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8932fa3f7692e471/690a216999b3e2ed990aa2e6/Salesforce-Commerce-Credentials-Short-Code-And-Org-ID.png)
    3.  Navigate to **Administration** and click **Manage Sites**. Note down the required **Site ID** from the list or create a new one to use during app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace).![Salesforce-Commerce-Credentials-Site-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c7336792de12f2d/690a21684f0dee735fefbfb8/Salesforce-Commerce-Credentials-Site-ID.png)

    **Note:** Before retrieving the **Client Secret**, go to the [Authorization for Shopper APIs](https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-shopper-apis.html) guide and follow the steps listed in the [Set Up User Roles and Filters](https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-shopper-apis.html#slas-admin-ui-set-up-user-roles-and-filters) section to set the SLAS Organization Administrator roles.

    ### Get Client Secret

    To get the **Client Secret**, follow the steps given below:

    1.  Use the following URL to open the SLAS User Login page:

        ```
        https://{{short-code}}.api.commercecloud.salesforce.com/shopper/auth-admin/v1/ui/
        ```

        **Note:** Replace the {{short-code}} in the URL with the **Short Code** retrieved in the previous step.

    2.  Log in to **SLAS Admin UI** using the Account Manager credentials.
    3.  Navigate to **Clients** and click the **Add Client** button.![Salesforce-Commerce-Credentials-Add-Client-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ebd1b284c46cc27/690a2168450d167aa293d12a/Salesforce-Commerce-Credentials-Add-Client-Button.png)
    4.  On the next screen that appears, provide the following details:
        1.  From the **What tenant will be used?** drop-down, select your tenant ID.

            **Note:** The tenant ID will be the same as the last portion of your organization ID. For example, if the organization ID is abc\_zybz\_001, the tenant ID will be zybz\_001.

        2.  From the **What site will be used?** drop-down, enter the site name if the site is not already populated.
        3.  Enter the API client ID retrieved in the previous steps in the **Client Id** field.![Salesforce-Commerce-Credentials-Add-Client-Info](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt410ff23bfa33f354/690a2168c1ae536831f89b03/Salesforce-Commerce-Credentials-Add-Client-Info.png)
    5.  Click the **Add** button. You can view the Client Secret generated at the top. Copy and save the **Client Secret** to use in app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace).

        **Note:** Your app, by default, is _Public_.

    6.  To make your app private, go to **Clients** from the top menu, click **Edit** for your Client ID, select the **Private?** checkbox, and click **Save.**![Salesforce-Commerce-Credentials-Set-As-Private](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta44bdf267e884605/690a216883a0d6c454cd77b4/Salesforce-Commerce-Credentials-Set-As-Private.png)
2.  ## Install and Configure the Salesforce Commerce App in Marketplace

    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Salesforce Commerce** app and click the **Install** button.
    4.  In the pop-up window, select the stack where you want to install the Salesforce Commerce app, accept the **Terms of Service**, and click **Install**.![Salesforce-Commerce-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97bf45457780f107/67d87d97ce729c1a70ae22d0/Salesforce-Commerce-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for Salesforce Commerce. To do this, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.![Salesforce-Commerce-New-Confirguration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5459e36b1bbbe6ad/67d87da79c716d865f10b188/Salesforce-Commerce-New-Confirguration.png)
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![Salesforce-Commerce-Add-Confirguration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt828c4347e9f6e94e/67d87d6fa782ba797e8daa2e/Salesforce-Commerce-Add-Confirguration.png)
        3.  After adding the configuration, enter the following details:
            1.  Enter the **Client ID** (API client ID), **Client Secret**, **Organization ID**, **Short Code**, and **Site ID** retrieved from your Salesforce Commerce account in [step 1](#retrieve-your-client-credentials-from-salesforce-commerce).
            2.  **Category Levels**: This represents the nesting of product categories on the selector page.

                **Note:** If you do not specify any value, the default value sets to **1**.

                ![Salesforce-Commerce-Configuration-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46772f17bb89d43e/67d87d9702de2095f65a67b4/Salesforce-Commerce-Configuration-Credentials.png)
            3.  **Set as Default**: To set this configuration as the default, click this checkbox.

                Alternatively, you can set a configuration as the default by clicking the three dots on the top-right side of the configuration section and then selecting **Set as Default**.

                ![Salesforce-Commerce-Configuration-Set-As-Default-Option.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae5b4c5338a04382/67d87d97bb041a2af9c46c34/Salesforce-Commerce-Configuration-Set-As-Default-Option.png)

                **Note:** At least one app configuration should be selected as the default.

                Similarly, you can add multiple configurations by following the steps discussed above.

        4.  To delete the configuration, click the three dots and select **Delete**.![Salesforce-Commerce-Delete-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62634cd64bf3baa8/67d87d98b003920c9dc22359/Salesforce-Commerce-Delete-Configuration.png)

            In the **Confirm Deletion** modal, add the configuration name and click **Delete**.

            ![Salesforce-Commerce-Delete-Configuration-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13efa10d24767639/67d87d975baf4852ff3aec39/Salesforce-Commerce-Delete-Configuration-Modal.png)
        5.  For an existing user, the credentials will be added as the default configuration, and named as **legacy\_config**.![Salesforce-Commerce-Legacy-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0ecb4d91d502562/67d87da72e696070ad33d3d6/Salesforce-Commerce-Legacy-Configuration.png)

            **Warning:**

            -   **legacy\_config** is a reserved keyword and you cannot use it in adding new configurations.
            -   If you delete the **legacy\_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.

        6.  **Advanced Settings**: Enable **Advanced Settings** to support two features – Locale Support and URL Auto Populate.![Salesforce-Commerce-Advanced-Settings.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88f82210265004d7/690a27f076772e47a7677a36/Salesforce-Commerce-Advanced-Settings.png)

            **Note:** When you disable the **Advanced Settings**, all the saved configurations will be cleared.

            1.  **Locale Support**: The **Locale Support** feature allows you to map Contentstack locales with corresponding Salesforce Commerce locale codes to ensure consistent localization across products and categories.

                Enable the **Locale Support** toggle to add localized products and categories based on the selected locale in your entry.

                ![Salesforce-Commerce-Advanced-Settings-Locale-Support](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cdf6819241200b0/690a27f06e7c72ecc60a095f/Salesforce-Commerce-Advanced-Settings-Locale-Support.png)

                **Locale Support and Mapping Locales:** Use the **Locale Mapping** section to define mappings between your Contentstack locales and Salesforce Commerce locale codes.

                Click **Add Locale** to create a new mapping. Each mapping ensures that when you switch locales in Contentstack, the corresponding Salesforce Commerce data loads automatically in the selector page.

                ![Salesforce-Commerce-Advanced-Settings-Locale-Support-Mapping](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94adb51210221fcf/690a27ef5ba74c77c3869ba9/Salesforce-Commerce-Advanced-Settings-Locale-Support-Mapping.png)

                **Note:** This is a one-to-many mapping, allowing all Salesforce Commerce locales to be easily mapped to a Contentstack locale.

                **Locale Fallback Configuration**

                For reliable product retrieval across all languages, you must ensure your Salesforce Commerce locale fallback is correctly configured in the Business Manager.

                Navigate to **Merchant Tools > Site Preferences > Locales**. For each active locale, verify the **Fallback Locale** setting.

                ![Salesforce-Commerce-Credentials-Locale-Fallback](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacb219ec5f0253f1/690a22a8f78cb4ba835e3c93/Salesforce-Commerce-Credentials-Locale-Fallback.png)

                **Tip:** To ensure maximum content availability, set the **Fallback Locale ID** to **Default**. This ensures that if content is unavailable in a specific language, Salesforce Commerce will automatically retrieve the content from the universally configured **Default** Locale.

            2.  **URL Auto Populate**: The **URL Auto Populate** feature automatically fills in product and category URLs within entries. Enable the **URL Auto Populate** toggle button to define the rules under **Product Custom Fields** and **Category Custom Fields** to determine where URLs should be auto-populated.

                Each rule requires the following details:

                -   **Content Type:** Select the content type in which the URL will appear.
                -   **Custom Field:** Choose the custom field whose URL should be automatically populated in the URL field.
                -   **Key Name:** Specify the field key that stores the populated URL.
                -   **Entry Level:** Enable the **Entry Level** toggle button to decide whether you can turn the functionality on or off at the entry level.
                    -   **Toggle ON:** You will see a corresponding toggle in the entry, allowing users to turn the automation OFF for that individual entry.
                    -   **Toggle OFF (Default):** The rule is enforced, and you cannot disable the automation at the entry level.

                        Once configured, when you select a product or category in the specified content type, the URL automatically populates in the mapped field.

                        ![Salesforce-Commerce-Configuration-URL-Auto-Populate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32f3d73598a43142/690a27efdd2b1aadb79c51f3/Salesforce-Commerce-Configuration-URL-Auto-Populate.png)
        7.  **Choose the Salesforce Commerce Keys to Save in Entry**: Choose how to save the data fetched from the Salesforce Commerce account in Contentstack entries.
            1.  If you select the **All Fields** option, you can select only a limited number of products in the entry
            2.  For **Custom Fields**, you can search and add specific Salesforce Commerce Fields you want to save in entries.![Salesforce-Commerce-Save-In-Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta330d8dcf88c0136/690a295258d2e55dfcc2dfd3/Salesforce-Commerce-Save-In-Entry.png)

                If you select **Custom Fields** then the **Salesforce Commerce Keys** drop-down appears. By default, **id** and **name** keys are already selected.

                **Note:** To view the variants of products in the selector page and custom field within the entry, select the **variants** key.

                If you want to create a new key, click the **\+ New Key Field** option.

                ![Salesforce-Commerce-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fed9b3d7dc7080b/67d87da7fa2ac2d54b35f48a/Salesforce-Commerce-Keys.png)

                In the **Add Salesforce Commerce Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.

                ![Salesforce-Commerce-Add-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt72d717f850f65cdd/67d87d6f0c5905a0acfcff63/Salesforce-Commerce-Add-Key.png)
        8.  **Customize List View Options**: The **Customizable List View Columns** feature lets you choose which fields appear in the product and category list views within your entries.
            1.  **Product List View Columns:** Choose and display specific product fields in the product list view within entries. By default, **name**, **image**, and **price** columns are selected.
            2.  **Category List View Columns:** Select and show specific category fields in the category list view within entries. By default, **id**, **name**, and **image** columns are selected.![Salesforce-Commerce-Customize-List-View-Options.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta103df12984b667f/690a27f037acae57ff5ab71d/Salesforce-Commerce-Customize-List-View-Options.png)

                Once you save your configuration, the selected columns appear in the custom field’s list view on the entry page. You can also update or remove columns at any time to refine the view.

    6.  After adding the configuration details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Salesforce-Commerce-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt367f62e4446435ec/67d87da7b003925793c2235d/Salesforce-Commerce-UI-Locations.png)

        **Note:** The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.

    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    9.  Click **Open Stack** to start using the Salesforce Commerce app.
3.  ## Use the Salesforce Commerce App within your Stack

    To use the Salesforce Commerce app within an entry of your stack, follow the steps given below:

    1.  Navigate to the stack dashboard, click **Content Models** in the header, then **New Content Type**. From the dropdown, select **Create New**.
    2.  Create a content type by entering relevant details as given below:![Salesforce-Commerce-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacbe8feb700ab02d/67d87d9717c80060e6cd9f3a/Salesforce-Commerce-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field for product in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension or App**, select **Salesforce Commerce - Product** and click the **Proceed** button.![Salesforce-Commerce-Add-Product-In Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt896302684e2c76aa/67d87d7007d0f904bb5d1c76/Salesforce-Commerce-Add-Product-In_Custom-Field.png)

        This adds Salesforce Commerce - Product in the custom field.

        ![Salesforce-Commerce-Added-Product-In Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt137e04c3e853bb8c/67d87d70a5c0432e71715dae/Salesforce-Commerce-Added-Product-In_Custom-Field.png)
    5.  Add another [Custom](/docs/headless-cms/custom) field for category in your content type by clicking the **Insert a field** link represented by a **+** sign.
    6.  Under **Select Extension or App**, select **Salesforce Commerce - Category** and click the **Proceed** button.![Salesforce-Commerce-Add-Category-In Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fdd484e11295bab/67d87d6f1c7222b284439247/Salesforce-Commerce-Add-Category-In_Custom-Field.png)

        This adds Salesforce Commerce - Category in the custom field.

        ![Salesforce-Commerce-Added-Category-In Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd45b6422cde86ffd/67d87d6fce729c4e25ae22c9/Salesforce-Commerce-Added-Category-In_Custom-Field.png)
    7.  Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration you set at the time of app installation on the Configuration screen.

        The **key:value** passed in the configuration object overrides the default app configuration settings.

        -   If you want to use a different Salesforce Commerce configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter as follows:

            **Configuration Object**:

            ```
            {
              "config_label": [
                "Configuration-2"
              ]
            }
            ```

            ![Salesforce-Commerce-Advanced-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteced4d917783f5e0/67d87d70d822de46d39e2b60/Salesforce-Commerce-Advanced-Configuration.png)
        -   **Locale Based Configuration Object**: To add a locale-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.

            **Locale Configuration Object**:

            ```
            {
              "config_label": [
             	   "Configuration-1",
             	   "Configuration-2"
              ],
              "locale": {
                	"en-us": {
                 	 "config_label": []
               	 },
              	  "en-ZA": {
              	    "config_label": []
              	  }
                  }
            }
            ```

        -   **Max Limit**: You can set the maximum number of assets that can be added in the Custom field. In our example, it is 4.

            ```
            { 
            	"advanced": { 
            		"max_limit":4 
            	} 
            }
            ```


        **Note:** If any configuration value is not added, or if all the values are empty in the **Config Parameter** properties settings, the Salesforce Commerce app uses the default credentials configured in the installation in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace).

    8.  After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.
    9.  To use the Salesforce Commerce app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. In the left navigation panel, navigate to the Entries page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

        You can see the Salesforce Commerce app’s custom fields on your entry page as shown below:

        ![Salesforce-Commerce-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfcbd558ca7968e8/67d87da75baf488f3d3aec3f/Salesforce-Commerce-Sample-Entry.png)
    10.  Click the **\+ Add Product(s)** button to choose the product(s).![Salesforce-Commerce-Add-Products](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt490bb5a05f441a0c/67d87d70fe8d6a565c48ba66/Salesforce-Commerce-Add-Products.png)
    11.  Select the products from your Salesforce Commerce store and click the **\+ Add Product(s)** button to add them to your entry.![SS1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e42828f5bb6be52/690a3141d18878e1e95ab1f1/SS1.png)

         You can select the products from multiple configurations at once using the **Configuration** drop-down.

         ![SS2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c92a75667e89d6e/690a314158d2e5a919c2e07e/SS2.png)

         When the **Locale Support** is enabled during the app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace), you can select the locale-based products using the **Locale** drop-down in the selector page.

         ![SS3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt17d393c5deb3b4a5/690a3142d315050c576abf88/SS3.png)

         **Note:**

         -   If the locale is **Unlocalized**, both the **Master** and **Current** locale options will appear in the selector page. Ensure that the nesting fallback locales are properly configured in both **Salesforce Commerce** and **Contentstack** for consistent product visibility.
         -   For existing users, all the products are added in the **default** locale to view all the already selected products in the selector page.

         You can also search for products in the Salesforce Commerce selector page based on the product name.

         Hover over the product on the Salesforce Commerce selector page, and you can see the **View in Salesforce Commerce** option to go directly to the Salesforce Commerce platform.

         ![SS5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt278d5904c31e4858/690a31426e7c7238b70a09bc/SS5.png)

         The products you selected get referenced within your entry in the thumbnail view.

         ![SS6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt993feaf5f53d1b44/690a3141f78cb429695e3d0a/SS6.png)

         Select the list view option from the dropdown to view the products in the list view.

         ![SS7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7440152694d8d4de/690a3141d3150541a96abf84/SS7.png)

         The products you selected get referenced within your entry in the list view.

         ![SS8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt428d44322949ab64/690a3bc44f0dee12acefc0a4/SS8.png)
    12.  ### Variants in Products

         If you select **All Fields** to save in the entry or add the **Variants** key in the **Custom Fields** option during app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace), you can add and view the **Variants** of the products directly within the entry.

         While adding products in the entry, you can view the variants corresponding to a product in the selector page. Select the product and respective variants, and then click the **Add Products** button.

         ![Salesforce-Commerce-Variants-Selector-Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbed4c44874962998/690a2c4676772ef4fd677a60/Salesforce-Commerce-Variants-Selector-Page.png)

         You can view the product in the entry along with the variants at the bottom within each product card.

         ![Salesforce-Commerce-Varaints-Thumbnail.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt150274d81340dbfd/690a2c46d0bcbe0c1dc4f61a/Salesforce-Commerce-Varaints-Thumbnail.png)

         To view the variants in Product List view, you need to select the variant checkbox under the **Customize List View Options** during app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace).

         ![Salesforce-Commerce-Variants-List.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0707eb525c061ef0/690a2c45637bf667304112b4/Salesforce-Commerce-Variants-List.png)
    13.  To reorder, open in Salesforce Commerce, or delete the selected product, hover over the product to get the available options, then perform the following:

         1.  Click the **Drag** icon to drag and reorder the product.
         2.  Click the **Open in Salesforce Commerce** icon to open the product in the Salesforce Commerce app.
         3.  Click the **Remove** icon to delete the product.

         **Thumbnail View**

         ![SS9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt581960377a5f60bc/690a3141e1d936edbfff12c0/SS9.png)

         **List View**

         ![SS10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4ff1073852f03e5/690a3bd09d9a57543682519a/SS10.png)
    14.  Click the **Save** button to save your entry.
    15.  You can view more product details in the Sidebar Widget.![SS20.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36d8f4843a86a8d7/690a3bec9d9a572c4682519e/SS20.png)

         **Note:** You must save your entry to get the product details in the Sidebar Widget.

    16.  Click the **\+ Add Category(s)** button to choose the category(s).![Salesforce-Commerce-Add-Category](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbad2b37618025bf7/67d87d6f2e6960e0b533d3d2/Salesforce-Commerce-Add-Category.png)
    17.  Select the categories from your Salesforce Commerce selector page and click the **\+ Add Category(s)** button to add them to your entry.![SS11.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf50afc9eb7c43047/690a3bed99b3e21bfd0aa434/SS11.png)

         You can select the categories from multiple configurations at once using the **Configuration** drop-down.

         ![SS12.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec6a0596a90edd80/690a3becd3077fda4cd622ee/SS12.png)

         When the **Locale Support** is enabled during the app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace), you can select the locale-based categories using the **Locale** drop-down in the selector page.

         ![SS13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb408ba65ef011548/690a3bec45e784a570be53a8/SS13.png)

         **Note:**

         -   If the locale is **Unlocalized**, both the **Master** and **Current** locale options will appear in the selector page. Ensure that the nesting fallback locales are properly configured in both **Salesforce Commerce** and **Contentstack** for consistent product visibility.
         -   For existing users, all the categories are added in the **default** locale to view all the already selected categories in the selector page.

         You can also search for categories in the Salesforce Commerce selector page using the **Category Name**.

         Hover over the category on the Salesforce Commerce selector page, and you can see the **View in Salesforce Commerce** option to go directly to the Salesforce Commerce platform.

         ![SS14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4dea1d98b98b1e93/690a3bec33d9084db0172c44/SS14.png)

         The categories you selected get referenced within your entry in the thumbnail view.

         ![SS15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte55756a1af866168/690a3beb7e4cc4691e87baf8/SS15.png)

         Select the list view option from the dropdown to view the categories in the list view.

         ![SS16.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcdf6d4eedfb73c3a/690a3bec99b3e25a2b0aa430/SS16.png)

         The categories you selected get referenced within your entry in the list view.

         ![SS17.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe780c473276f49e/690a3bec72ff6e3308bd425d/SS17.png)
    18.  To reorder, open in Salesforce Commerce, or delete the selected category, hover over the category to get the options available, then perform the following:

         1.  Click the **Drag** icon to drag and reorder the category.
         2.  Click the **Open in Salesforce Commerce** icon to open the category in the Salesforce Commerce app.
         3.  Click the **Remove** icon to delete the category.

         **Thumbnail View**

         ![SS18.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92fc523f6f6cd95a/690a3e78d31505626f6abff1/SS18.png)

         **List View**

         ![SS19.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a40fc45938533e4/690a3beb64009a617a585e6a/SS19.png)
    19.  Click the **Save** button to save your entry.

    ### URL Auto Populate in Entry

    When you have enabled the **URL Auto Populate** feature and configured **Rules** during app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace), it activates automatically when you start working with an entry.

    ![Salesforce-Commerce-Configuration-URL-Auto-Populate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32f3d73598a43142/690a27efdd2b1aadb79c51f3/Salesforce-Commerce-Configuration-URL-Auto-Populate.png)

    When you open an entry for the configured **Content Type** and select a product or category via the **Custom Field**, the app instantly fetches the corresponding data from Salesforce Commerce, extracts the value from the defined **Key Name**, and updates the Contentstack entry's main **URL** field.

    For **Product Custom Field**, the **slugURL** is appended to the URL field.

    ![Salesforce-Commerce-URL-Auto-Populate-Product.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4cf1ac7f3bba6b05/690a27f1524658905af8388b/Salesforce-Commerce-URL-Auto-Populate-Product.png)

    For **Category Custom Field**, the **id** is appended to the URL field.

    ![Salesforce-Commerce-URL-Auto-Populate-Category.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6575ffd93aa3cee3/690a27f0cdd56aec780c4046/Salesforce-Commerce-URL-Auto-Populate-Category.png)

    **Note:** If the custom field allows multiple selections, the URL Auto Populate feature will always use the URL of the first product or category added to the field.

    While defining the rule in the app configuration in [step 2](#install-and-configure-the-salesforce-commerce-app-in-marketplace), if the **Entry Level** toggle was set to **ON**, then you see the **URL Auto Populate** toggle button within the custom field.

    ![Salesforce-Commerce-URL-Auto-Populate-Entry-Level.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0cb67411cf8f455/690a27efa3c85faa55cb7246/Salesforce-Commerce-URL-Auto-Populate-Entry-Level.png)

    By default, the **URL Auto Populate** toggle is disabled within the entry. You need to enable the toggle button to add the unique URL automatically in the entry.

    ![Salesforce-Commerce-URL-Auto-Populate-Entry-Level-URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e6903023f5dc1d0/690a27f032e5df58c9dfd5f8/Salesforce-Commerce-URL-Auto-Populate-Entry-Level-URL.png)

    **Note:**

    -   Add the **URL** field to the content type for the auto-populate functionality to work.
    -   A content type can be linked to only **one rule**. Once assigned, it cannot be reused for another rule.
    -   You can select only **one custom field** from a content type per rule.
    -   For **product custom fields**, configure the rule under the **Product Custom Fields** section on the Configuration page.
    -   Similarly, for **category custom fields**, configure the rule under the **Category Custom Fields** section. Rules added under the wrong section will not work.
    -   To restore the original product or category URL, disable and re-enable the **URL Auto Populate** toggle within the custom field. It acts as a quick refresh for the URL field.

    **Tip:** Recommended to use the max-limit functionality to restrict the number of products or categories that can be added to a custom field. For URL Auto Populate, set the limit to **1** to ensure only a single product or category is selected per rule for accurate URL mapping.
