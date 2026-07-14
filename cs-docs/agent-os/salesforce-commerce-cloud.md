---
title: Automations guides and connectors - Salesforce Commerce Cloud
description: Set up the Salesforce Commerce Cloud action connector to retrieve product details in Automation Hub.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/salesforce-commerce-cloud
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Salesforce Commerce Cloud

This page explains what the Salesforce Commerce Cloud connector does in Contentstack Automation Hub and how to configure it to retrieve product details. It is intended for developers or automation builders setting up an action step that connects to a Salesforce Commerce Cloud account.

## Salesforce Commerce Cloud

Salesforce Commerce Cloud is a cloud-based platform that helps you with sales, marketing, and cloud services to enhance your customer experience.

This action connector lets you retrieve product details from your Salesforce Commerce Cloud platform.

## Set up Salesforce Commerce Cloud

Perform the following steps to set up the Salesforce Commerce Cloud action connector:
- Within the **Configure Action Step**, click the **Salesforce Commerce Cloud **connector.![Salesforce_commerce_cloud.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e7f898bee81587e/6527f8d6a0980fec28edeada/Salesforce_commerce_cloud.png)
- Under **Choose an Action** tab, select the **Get Product Details** action.![Select_the_get_product_Details_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6952fe6eb70812c3/64e5dded0818cce6cc16117c/Select_the-Action.png)
- In the **Configure Action** tab, click **+ Add New Account** to add your Salesforce Commerce Cloud account.![Add_New_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2dbee143bcb145e2/64e5ddec29a5142c2e94d6d0/Add_new_Account.png)
- In the **Authorize **pop-up window, provide the **Organization ID**, **Site ID**, **Short Code**, **Client ID**, and **Client Secret**.
To generate the above details, log in to the Salesforce Commerce Cloud dashboard and perform the following steps:To generate Organization ID and Short Code, click **Administration **-> **Site Development **-> **Salesforce Commerce API Settings** -> Copy the Organization ID and Short Code.
- To fetch the Site ID, click **Administration **-> **Sites **-> **Manage Sites **-> Copy the Site ID of the respective site.
- To generate the **Client ID **and **Client Secret**, refer to our [Salesforce Commerce](../developers/marketplace-apps/salesforce-commerce.md#retrieve-your-client-credentials-from-salesforce-commerce)documentation.
- Once done, click **Authorize**.

**Note: **Contentstack Marketplace offers a [Salesforce Commerce](../developers/marketplace-apps/salesforce-commerce.md) app for its users, so they can fetch the products into their Contentstack CMS entry. With the Salesforce Commerce Cloud connector, you can fetch the product details from your Salesforce Commerce Cloud account and use it within your entry.
- Select the **Product Category** based on your preferred site to fetch the product details.
- Select the **Product ID** to fetch the product details.![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1e3c9247e5107c3/64e5ddec37cf46271213c2fd/Select_Different_Fields.png)
- Enable the **Show optional fields** toggle button to display the **Product Parameter(s)** field to fetch specific details of a product. Click the checkboxes to fetch the image model and the price details of the product.

The first checkbox will fetch the *Image Model* for the product, i.e. the entire collection of the images for that product along with the details and the second checkbox will fetch the price for each product based on the price book.
**Note: **You can enter only predefined values in the Product Parameter(s) field. Refer to the [Reference](https://developer.salesforce.com/docs/commerce/commerce-api/references/shopper-products?meta=getProduct) document to learn more.
- Click the **Proceed **button.
- To execute and test the configured action, click the **Test Action **button.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt26aa8731d19b512b/64e5ddedae976690210cb8c0/Test_Action.png)
- On successful configuration, you can see the below output. Click the **Save and Exit **button.![save_and_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11cf70790487e255/64e5dded29a062c9aeb80281/Save_and_Exit.png)

This sets the **Salesforce Commerce Cloud** action connector.

## Common questions

### What does the Salesforce Commerce Cloud connector do?
It lets you retrieve product details from your Salesforce Commerce Cloud platform.

### What credentials are required to authorize the connector?
You need the **Organization ID**, **Site ID**, **Short Code**, **Client ID**, and **Client Secret**.

### How do I fetch optional product details like images and price?
Enable the **Show optional fields** toggle button to display the **Product Parameter(s)** field, then click the checkboxes to fetch the image model and the price details of the product.

### Where can I find the predefined values allowed for Product Parameter(s)?
Refer to the [Reference](https://developer.salesforce.com/docs/commerce/commerce-api/references/shopper-products?meta=getProduct) document to learn more.