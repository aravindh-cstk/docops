---
title: "BigCommerce"
description: "BigCommerce is an ecommerce platform that allows for online store creation, hosting, marketing, and security for small and medium-sized businesses."
url: /lytics/bigcommerce
uid: blt25d917ccb0417ef8
---

# BigCommerce

## BigCommerce

## Overview

[BigCommerce](https://www.bigcommerce.com/) is an ecommerce platform that allows for online store creation, hosting, marketing, and security for small and medium-sized businesses.

Integrating Lytics with BigCommerce allows you to import customer, order, and product data into Lytics so that you can run segmented marketing campaigns and offer relevant recommendations for your BigCommerce customers.

## Authorization

If you haven't already done so, you will need to set up a BigCommerce account before you begin the process described below. To generate a long term access token, follow the [Obtaining Store API Credentials](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials#obtaining-store-api-credentials) instructions on BigCommerce. The minimum scopes required are _Customers_ and _Orders_.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **BigCommerce** from the list of providers.
2.  Select the **BigCommerce Access Token** method for authorization.
3.  In the **Label** text box, enter a name for the authorization.
4.  (optional) In the **Description** text box, enter a description for this authorization.
5.  In the **Store Hash** text box, enter your unique store hash ID.
6.  In the **Access Token** password box, enter your access token. This must have read-access scopes to Customers and Orders for imports and modify scope to Customers and read-access scope to Orders for exports.
7.  Click **Save Authorization**.

## Import Users & Activity Data

Importing your BigCommerce customers and their order activity data into Lytics enables you to run personalized marketing campaigns for your BigCommerce customers.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration
-   **Resulting data**: User profiles and raw event data

This integration utilizes the [BigCommerce API](https://developer.bigcommerce.com/api-docs/) to import user and activity data. Once the import is started, the job will:

1.  From the start-date, import [new customers](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersget) from your BigCommerce account into the bicommerce\_users stream.
2.  From the start-date, import [new orders](https://developer.bigcommerce.com/api-reference/store-management/orders/orders/getallorders) and [related product activity](https://developer.bigcommerce.com/api-reference/store-management/orders/order-products/getallorderproducts) from your BigCommerce account into the bigcommerce\_orders stream.
3.  Continue to import any new customers and activity on an hourly basis.

### Fields

The following fields are included in the default mapping of the bigcommerce\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| accepts\\\_product\\\_review\\\_abandoned\\\_cart\\\_emails | bigcommerce\\\_accepts\\\_marketing | BigCommerce Accepts Marketing | bool |
| company | company | Company | string |
| customer\\\_group\\\_id | bigcommerce\\\_customer\\\_group\\\_id | BigCommerce Customer Group ID | int |
| date\\\_created | bigcommerce\\\_created\\\_ts | BigCommerce Customer Created Time | date |
| date\\\_modified | bigcommerce\\\_modified\\\_ts | BigCommerce Customer Modified Time | date |
| email(email) | email unique id | Email Address | string |
| first\\\_name | first\\\_name | First Name | string |
| id | bigcommerce\\\_customer\\\_id unique id | BigCommerce Customer Id | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone | phone | Phone Number | string |
| registration\\\_ip\\\_address | ip\\\_address | IP address | string |
| set(addresses.address1) | bigcommerce\\\_address\\\_1s | BigCommerce Customer Address 1 | \\\[\]string |
| set(addresses.address2) | bigcommerce\\\_address\\\_2s | BigCommerce Customer Address 2 | \\\[\]string |
| set(addresses.address\\\_type) | bigcommerce\\\_address\\\_types | BigCommerce Customer Address Type | \\\[\]string |
| set(addresses.city) | bigcommerce\\\_cities | BigCommerce Customer City | \\\[\]string |
| set(addresses.country\\\_code) | country\\\_codes | Customer Country Code | \\\[\]string |
| set(addresses.country) | bigcommerce\\\_countries | BigCommerce Customer Country | \\\[\]string |
| set(addresses.id) | bigcommerce\\\_address\\\_ids | BigCommerce Customer Address ID | \\\[\]string |
| set(addresses.postal\\\_code) | bigcommerce\\\_postal\\\_codes | BigCommerce Customer Zip | \\\[\]string |
| set(addresses.state\\\_or\\\_province) | bigcommerce\\\_states | BigCommerce Customer State | \\\[\]string |
| set(attributes.attribute\\\_id) | bigcommerce\\\_attr\\\_id | BigCommerce Attribute ID | \\\[\]string |
| set(attributes.attribute\\\_value) | bigcommerce\\\_attr\\\_value | BigCommerce Attribute Value | \\\[\]string |
| set(attributes.date\\\_created) | bigcommerce\\\_attr\\\_created\\\_ts | BigCommerce Attribute Created Time | \\\[\]string |
| set(attributes.date\\\_modified) | bigcommerce\\\_attr\\\_modified\\\_ts | BigCommerce Attribute Modified Time | \\\[\]string |
| set(form\\\_fields.name) | bigcommerce\\\_field\\\_name | BigCommerce Form Field Name | \\\[\]string |
| set(form\\\_fields.value) | bigcommerce\\\_field\\\_value | BigCommerce Form Field Value | \\\[\]string |
| set(store\\\_credit\\\_amounts.amount) | bigcommerce\\\_credit\\\_amounts | BigCommerce Store Credit Amounts | \\\[\]string |
| tax\\\_exempt\\\_category | bigcommerce\\\_tax\\\_exempt | BigCommerce Tax Exempt | string |



The following fields are included in the default mapping of the bigcommerce\_orders stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| base\\\_handling\\\_cost | bigcommerce\\\_base\\\_handling\\\_cost | BigCommerce Base Handling Cost | number |
| base\\\_shipping\\\_cost | bigcommerce\\\_base\\\_shipping\\\_cost | BigCommerce Base Shipping Cost | number |
| coupon\\\_discount | bigcommerce\\\_coupon\\\_discount | BigCommerce Coupon Discount | number |
| customer\\\_id | bigcommerce\\\_customer\\\_id unique id | BigCommerce Customer Id | string |
| discount\\\_amount | bigcommerce\\\_discount\\\_amount | BigCommerce Discount Amount | number |
| gift\\\_certificate\\\_amount | bigcommerce\\\_gift\\\_certificate\\\_amount | BigCommerce Gift Certificate Amount | number |
| is\\\_email\\\_opt\\\_in | bigcommerce\\\_is\\\_email\\\_opt\\\_in | BigCommerce Customer Selected Email Opt-In | bool |
| items\\\_shipped | bigcommerce\\\_items\\\_shipped | BigCommerce Number of Items Shipped | number |
| items\\\_total | bigcommerce\\\_items\\\_total | BigCommerce Total Items in the Order | number |
| max(todate(date\\\_created)) | last\\\_purchase\\\_ts | Most Recent Order Time | date |
| min(todate(date\\\_created)) | bigcommerce\\\_first\\\_order\\\_ts | BigCommerce First Order Time | date |
| payment\\\_method | bigcommerce\\\_payment\\\_method | BigCommerce payment method | string |
| refunded\\\_amount | bigcommerce\\\_refund\\\_amount | BigCommerce Transaction Refund Amount | number |
| set(id) | bigcommerce\\\_order\\\_product\\\_ids | BigCommerce Product ID within Order | \\\[\]string |
| set(name\\\_customer) | bigcommerce\\\_name\\\_customers | BigCommerce Product Name Shown to Customer | \\\[\]string |
| set(name\\\_merchant) | bigcommerce\\\_name\\\_merchants | BigCommerce Product Name Shown to Merchant | \\\[\]string |
| set(order\\\_id) | bigcommerce\\\_order\\\_ids | BigCommerce Order IDs | \\\[\]string |
| set(product\\\_id) | bigcommerce\\\_product\\\_ids | BigCommerce Product ID | \\\[\]string |
| store\\\_credit\\\_amount | bigcommerce\\\_store\\\_credit\\\_amount | BigCommerce Store Credit Amount | number |

### Configuration

Follow these steps to set up and configure an import job for BigCommerce in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources)documentation for more information.

1.  Select **BigCommerce** from the list of providers.
2.  Select the **Import Users & Activity Data** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.\\

![Screen_Shot_2021-08-20_at_1.59.02_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8f9d172aadad7ae8/1a172b2dd733b2005a40ec08/Screen_Shot_2021-08-20_at_1.59.02_PM.png)

1.  (Optional) From the **Additional Customer Fields** input, select additional customer fields to import.
2.  (Optional) Select the **Skip importing customer profiles** checkbox to skip importing customer profiles.
3.  (Optional) Select the **Skip importing customer order data** checkbox to skip importing customer orders.
4.  (Optional) In the **Start Date** text box, enter a date to start your import from. If no date is selected, all users and activity data will be imported. Please use the format yyyy-mm-dd, e.g. 2021-01-25.
5.  (Optional) Select the **Keep Updated** checkbox to continuously import data.
6.  Click **Start Import**.

## Export Audience

Sync Lytics audiences with [BigCommerce](https://www.bigcommerce.com/) to identify and target the right users to improve the performance of your store campaigns.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after job setup.
-   **Resulting data**: [BigCommerce Customer Accounts](https://support.bigcommerce.com/s/article/Customer-Account-Creation?language=en_US) updated with user data from Lytics.

This integration utilizes the [BigCommerce API](https://developer.bigcommerce.com/api-docs/) to export Lytics users. Once the export is started, the job will:

1.  Scan the selected Lytics audience. BigCommerce [standard fields](https://support.bigcommerce.com/s/article/Customer-Account-Management?language=en_US#add-edit) and [customer attributes](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customer-attribute-values/customersattributevaluesput) will be sent as part of each user's profile if configured to do so. If you don't select an Audience Attribute, Lytics will create a [Lytics-Audience customer attribute](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customer-attributes/customersattributespost) (i.e. LyticsAudience\_\\{Job\_Id}) in your account. The attribute value will be set to the Lytics Audience Slug. Users are exported using BigCommerce's [Update Customer's Endpoint](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersput). Only users with BigCommerce Customer IDs will be exported.
2.  The export job will run continuously. As users enter the Lytics audience, they will be added to the queue. The queue will be sent to BigCommerce every minute or or when the queue reaches 100 users.

### Fields

By default, Lytics exports the following fields to BigCommerce:

| Lytics User Field | Description | BigCommerce Field | Type |
| --- | --- | --- | --- |
| email | Email Address | Email | string |
|  |  |  |  |

### Configuration

Follow these steps to set up and configure an export job for BigCommerce in the Lytics platform.

1.  Select **BigCommerce** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.\\

![Screen_Shot_2021-12-13_at_3.00.38_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7b263212f68fe325/f2d0dbfda5d928c118a85f2a/Screen_Shot_2021-12-13_at_3.00.38_PM.png)

1.  From the **ID Field** input, select the field that contains the user's BigCommerce ID field.
2.  (optional) From the **Audience Attribute Field** input, select the attribute field that should contain the Lytics audience name. If none is selected, one with the name 'LyticsAudience\\\_\\{Job\\\_Id}' will be created for your account.
3.  (optional) From the **Map Standard Fields** input, map standard fields from Lytics to BigCommerce by selecting the Lytics field on the left, and its BigCommerce destination on the right.
4.  (optional) From the **Map Custom Attributes** input, map custom attributes from Lytics to BigCommerce by selecting the Lytics field on the left, and its BigCommerce destination on the right.
5.  (optional) Select the **Existing Users** checkbox to send users who already exist in the selected Lytics audience.
6.  Click the **Start job** button to start the job
