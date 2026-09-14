---
title: "Shopify"
description: "Shopify is an ecommerce platform that enables you to sell in multiple places including online with your ecommerce store, online marketplaces, social…"
url: /lytics/shopify
---

# Shopify

## Shopify

## Overview

[Shopify](https://www.shopify.com/) is an ecommerce platform that enables you to sell in multiple places including online with your ecommerce store, online marketplaces, social media, and in-person with point of sale.

Integrating Lytics with Shopify allows you to import customer, order, and product data into Lytics so that you can run segmented marketing campaigns and offer relevant recommendations for your Shopify customers.

## Authorization

If you haven't already done so, you will need to set up a Shopify custom app before you begin the process described below. To setup a custom app, follow the [custom apps documentation](https://help.shopify.com/en/manual/apps/app-types/custom-apps?shpxid=53b58620-E5C1-40B9-2756-62B8257F06C2). In order for Lytics to import the Shopify customer and order details, the permissions read\_orders, read\_customers and read\_products must be granted to the generated access token. To add these scopes to the API token, navigate to the Configuration tab within your custom app and select Edit to add additional scope permissions within the Shopify Admin API Integration.

To get the access token follow the [custom apps authentication](https://help.shopify.com/en/api/getting-started/authentication/private-authentication) instructions on Shopify.

If you are new to creating authorizations in Lytics, see the [Authorizations Dashboard](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Shopify** from the list of providers.
2.  Select the **Shopify API Token** authorization method.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  In the **Access Token** field, enter your Shopify access token.
6.  Enter your Shopify store **Subdomain**.
7.  Click **Authorize**.

![c710f37-shopify-authorization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc5ab39e5195cdb31/1d742172393c33640d64ca40/c710f37-shopify-authorization.png)

## Import Audiences & Activity Data

Importing your Shopify customers and their activity data into Lytics enables you to run personalized marketing campaigns for your Shopify customers.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: User Profiles and Raw Event Data.

This integration utilizes the [Shopify APIs](https://help.shopify.com/en/api/reference) to import user data. Once the import is started the job will:

1.  Import all customers and orders from your Shopify account into the shopify\_users and shopify\_orders streams, respectively.
2.  Continue to import any new customers and orders hourly.

### Fields

The following fields are included in the default mapping of the shopify\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| id | shopify\\\_customer\\\_id unique id | Shopify Customer Id | string |
| email | email unique id | Email | string |
| default\\\_address.address1 | address\\\_1 | Address 1 | string |
| default\\\_address.address2 | address\\\_2 | Address 2 | string |
| default\\\_address.city | city | City | string |
| default\\\_address.country, default\\\_address.country\\\_code | country | Country | string |
| first\\\_name | first\\\_name | First Name | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone | phone | Phone Number | string |
| default\\\_address.zip | postal\\\_code | Zip | string |
| email\\\_marketing\\\_consent.state | shopify\\\_email\\\_marketing\\\_consent | Shopify Accepts Email Marketing | string |
| email\\\_marketing\\\_consent.opt\\\_in\\\_level | shopify\\\_email\\\_marketing\\\_consent\\\_opt\\\_in\\\_level | Shopify Email Marketing Opt In Level | interface{} |
| email\\\_marketing\\\_consent.consent\\\_updated\\\_at | shopify\\\_email\\\_marketing\\\_consent\\\_updated\\\_ts | Shopify Email Marketing Consent Updated At | string |
| sms\\\_marketing\\\_consent.state | shopify\\\_sms\\\_marketing\\\_consent | Shopify Accepts SMS Marketing | string |
| sms\\\_marketing\\\_consent.opt\\\_in\\\_level | shopify\\\_sms\\\_marketing\\\_consent\\\_opt\\\_in\\\_level | Shopify SMS Marketing Opt In Level | string |
| sms\\\_marketing\\\_consent.consent\\\_updated\\\_at | shopify\\\_sms\\\_marketing\\\_consent\\\_updated\\\_ts | Shopify SMS Marketing Consent Updated At | string |
| sms\\\_marketing\\\_consent.consent\\\_collected\\\_from | shopify\\\_sms\\\_marketing\\\_consent\\\_collected\\\_from | Shopify SMS Marketing Consent Collected From | string |
| created\\\_at | shopify\\\_created\\\_ts | Shopify Created Time | string |
| last\\\_order\\\_name | shopify\\\_last\\\_order\\\_name | Shopify Name on Last Order | string |
| orders\\\_count | shopify\\\_purchase\\\_ct | Shopify Lifetime Number of Orders | string |
| shop\\\_name | shopify\\\_shops | Shopify Store Names | \\\[\]string |
| shop\\\_name,total\\\_spent | shopify\\\_shop\\\_ltv | Shopify LifeTime Total Spend by Shop | map\\\[string\]string |
| tax\\\_exempt | shopify\\\_tax\\\_exempt | Shopify Tax Exempt | string |
| tags | shopify\\\_customer\\\_tags | Shopify Tags Attached to the Customer | \\\[\]string |
| total\\\_spent | shopify\\\_total\\\_spent | Shopify Lifetime Total Spent | string |
| updated\\\_at | shopify\\\_updated\\\_ts | Shopify Updated Time | string |
| default\\\_address.state | state | State | string |



The following fields are included in the default mapping of the shopify\_orders stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| order\\\_id | shopify\\\_order\\\_ids unique id | Shopify Order IDs | \\\[\]string |
| email | email unique id | Email | string |
| customer\\\_id | shopify\\\_customer\\\_id unique id | Shopify Customer ID | string |
| created\\\_at | last\\\_purchase\\\_ts | Most Recent Order Time | date |
| discount\\\_codes | shopify\\\_discount\\\_codes | Shopify Discount Codes Used | \\\[\]string |
| created\\\_at | shopify\\\_first\\\_order\\\_ts | First Order Time | date |
| item\\\_ids | shopify\\\_item\\\_ids | Shopify Item Ids | \\\[\]string |
| currency | shopify\\\_last\\\_order\\\_currency | Last Order Currency | string |
| total\\\_price | shopify\\\_last\\\_order\\\_price | Last Order Price | string |
| product\\\_ids | shopify\\\_product\\\_ids | Shopify Product Ids Ordered | \\\[\]string |
| product\\\_names | shopify\\\_product\\\_names | Shopify Product Names Ordered | \\\[\]string |
| product\\\_titles | shopify\\\_product\\\_titles | Shopify Products Titles Ordered | \\\[\]string |
| shop\\\_name | shopify\\\_order\\\_shops | Shopify Order Store Names | \\\[\]string |
| variant\\\_ids | shopify\\\_variant\\\_ids | Shopify Variant Ids | \\\[\]string |

### Configuration

Follow these steps to set up and configure an import of Shopify data into the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Shopify** from the list of providers.
2.  Select the **Import Audiences & Activity Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) Select the **Import Customer Metafields** to import metafields associated with each Shopify user.
7.  Select the **Keep Updated** checkbox to continuously run this import.
8.  Click **Start Import**.\\

![shopify-import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1af33298cd653638/70d42cc4ad9173bd3bef6806/shopify-import.png)

## Import Products

Importing Shopify products allows you to enrich your use of [Affinities](/documentation/product/features/affinities/introduction) with product data from your Shopify store. Serve your customers with relevant messaging and product recommendations based on how they have engaged with your brand.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: Content

This import utilizes the [Shopify Product API](https://shopify.dev/docs/admin-api/rest/reference/products/product) to import user data. Once the import is started the job will:

1.  [Import all products](https://shopify.dev/docs/admin-api/rest/reference/products/product#index-2021-04) updated after the configured **Start Date** and up to the configured **End Date** into the shopify\_products stream. If no dates are specified in the configuration, all products will be imported.
2.  If **Keep Updated** is selected, the workflow will import modified products daily.

### Fields

The following fields are included in the default mapping of the shopify\_products stream:

| Source Field | Lytics Content Field | Description | Type |
| --- | --- | --- | --- |
| variants.created\_at | created | Date Created | date |
| variants.inventory\_quantity | inventory\\\_quantity | Inventory Quantity | number |
| variants.price | price | Price | number |
| variants.sku | sku | SKU | string |
| variants.updated\_at | updated | Date Updated | date |
| body\\\_html | long\\\_description |  | string |
| id | shopify\\\_product\\\_id unique id | Shopify Product ID | string |
| set(hash(urlmain(url))) | hashedurl unique id |  | \\\[\]string |
| set(tags) | shopify\\\_product\\\_tags |  | \\\[\]string |
| set(tags) | tags |  | \\\[\]string |
| source | source |  | string |
| title | description |  | string |
| title | shopify\\\_product\\\_title |  | string |
| url(image.src) | primary\\\_image |  | string |
| url(url) | url |  | string |

### Configuration

Follow these steps to set up and configure an import job for Shopify in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Shopify** from the list of providers.
2.  Select the **Import Products** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  In the **Start Date** input, enter a date in format yyyy-mm-dd to begin importing from.
7.  In the **End Date** input, enter a date in format yyyy-mm-dd to import until.
8.  Check the **Keep Updated** checkbox to import products daily.
9.  Click **Start Export**.\\

![shopify product configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama3a6871689b98f5e/f74490a139f606752c05cd24/shopify_product_config.png)
