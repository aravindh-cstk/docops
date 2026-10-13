---
title: "commercetools"
description: "Use the commercetools connector in Agent OS automations to create, retrieve, and update products and customers, retrieve and update orders, create carts, and manage inventory."
url: /agent-os/commercetools
uid: blt957daeb7db953a06
---

# commercetools

## commercetools

commercetools is a headless commerce platform that manages products, customers, orders, carts, and inventory through APIs. The commercetools connector lets your automations work with the products, customers, orders, carts, and inventory in your commercetools project.

## Prerequisites

-   A commercetools project
-   Permission to create API clients in that project in the commercetools Merchant Center
-   An automation in your Agent OS project. For steps, refer to the [Get Started with Automations](/docs/agent-os/get-started-with-automations) documentation.

## Set Up commercetools

Connect a commercetools account once, and every commercetools action in your project can reuse it.

To set up the commercetools action connector, perform the following steps:

1.  In the **Configure Action Step**, click the **Commercetools** connector.

2.  Under **Choose an Action**, select the action you want to use. For details on each action, refer to the [commercetools Actions](#commercetools-actions) section.

    ![Choose an Action list showing the commercetools actions grouped by Carts, Customers, Inventory, Orders, and Products](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambb337e20671ebd60/32ce7aac51cfe9b94edc2434/commercetools-choose-an-action.png)
3.  In the **Configure Action** section, under **Select Account**, click **\+ Add New Account**. If you have already connected an account, open the **Select Account** drop-down and click **\+ Add an Account...**.

4.  In the **Authorize** window, enter the details of your commercetools API client. For detailed steps, refer to the [Connect Your commercetools Account](#connect-your-commercetools-account) section. If you don't have an API client yet, refer to the [Create a commercetools API Client](#create-a-commercetools-api-client) section.

5.  Configure the fields for the action you selected, and then click **Proceed**.

6.  Click **Test Action** to test the configured action. You can also click **Skip and Save** to test it later.

7.  Check the **Output**, and then click **Save and Exit**. To change the configuration and run the test again, click **Retest**.


### Create a commercetools API Client

The connector authenticates with an API client from your commercetools project. To create one, perform the following steps:

1.  Sign in to the commercetools Merchant Center and open your project.
2.  Go to **Settings** > **Developer settings**. On the **API clients** tab, click **Create new API client**.
3.  Enter a **Name** for the API client, for example Agent OS.
4.  Under **Scopes**, open the template drop-down and select **Admin client**.
5.  Click **Create API client**.
6.  In the **Client credential flow** section, copy the **project\_key**, **client\_id**, and **secret**. The **API URL** and **Auth URL** in the same section show your project's region, for example https://auth.us-east-2.aws.commercetools.com for US East (AWS).

**Note:** commercetools shows the API client details only once. Copy them before you leave the page. If you lose the client secret, create a new API client.

### Connect Your commercetools Account

1.  In the **Authorize** window, enter a **Title** for the account. By default, the title is your name followed by "Personal" and a number.

    ![Authorize window for Commercetools with the Title, API Region, Project Key, and Client ID fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf4cabd8a34b5444/b3badfa955ec6cd88258948c/commercetools-authorize.png)
2.  Fill in the following fields:

    -   **API Region** (required): Select the region your commercetools project is hosted in. It must match the region in your API client's API and Auth URLs. The options are:
        -   Europe (GCP - europe-west1) (default)
        -   US Central (GCP - us-central1)
        -   Australia (GCP - australia-southeast1)
        -   US East (AWS - us-east-2)
        -   EU Central (AWS - eu-central-1)
    -   **Project Key** (required): Enter your commercetools project key.
    -   **Client ID** (required): Enter the client ID of the API client.
    -   **Client Secret** (required): Enter the client secret of the API client.
3.  Click **Authorize**.


The connector checks the details by requesting an access token from commercetools. If the region or any value is wrong, the account doesn't connect. The connector needs the scopes in the **Admin client** template, which give full access to the project. Treat the client secret like a password. Don't share it or store it in plain text.

## commercetools Actions

The commercetools connector offers the following actions:

| Category | Actions |
| --- | --- |
| [Products](#products) | Create Product, Get Product, Update Product |
| [Customers](#customers) | Create Customer, Get Customer, Update Customer |
| [Orders](#orders) | Get Order, Update Order |
| [Carts](#carts) | Create Cart |
| [Inventory](#inventory) | Get Inventory, Create Inventory Entry, Update Inventory |

Every action starts with the **Select Account** (required) field, where you select the commercetools account you connected. In a new step, select the account from the drop-down. To see the optional fields of an action, enable the **Show Optional Fields** toggle.

### Select Values from Your Project

When you click a field such as **Product**, **Customer**, **Order**, or **SKU**, the **Insert Data** panel opens with two tabs:

-   **Lookup Data from Commercetools**: Lists items from your commercetools project. Click **Load More** to see more.
-   **Output from Previous Steps**: Lists values from earlier steps in the automation, such as a product ID or a SKU.

Select a value to add it to the field. The panel stays open after you type in a field. To close it, click **✕**.

The lists show items as follows:

| Field | Shows | Example |
| --- | --- | --- |
| **Product** | The product name in the first project language that has one, or the product key if it has no name | Oak Dining Chair |
| **Customer** | The customer's first and last name, or their email address if they have no name | Jane Doe |
| **Order** | The order number, newest first. Orders without an order number show the first eight characters of the order ID. | Order 8e782079 |
| **SKU** | The SKU, followed by the product name or key | CT-CHAIR-001 (Oak Dining Chair) |
| **Inventory Entry** | The SKU of the inventory entry | CT-CHAIR-001 |
| **Product Type** | The product type name | Furniture |
| **Categories** and **Add to Category** | The category name in the first project language that has one, or the category key if it has no name | Home Decor |

Searching these lists matches the full value only, and the search is case-sensitive. For example, to find the product "Oak Dining Chair", enter Oak Dining Chair. Entering Oak or oak dining chair returns no results. Search works as follows:

-   **Product**: Enter the full product name in any of your project's languages, or the product key.
-   **Categories** and **Add to Category**: Enter the full category name in any of your project's languages, or the category key.
-   **Customer**: Enter an email address, a first name, or a last name, one at a time. Entering a full name returns no results.
-   **SKU** and **Inventory Entry**: Enter the full SKU.
-   **Order**: Enter the order number. Orders without an order number can't be found by search. Select them from the list instead.

### Action Output

Every action returns the commercetools record as the commercetools API returns it, including its id and version. **Create Customer** returns the new customer inside a customer object, so use customer.id to reference it in later steps.

For example, **Get Inventory** returns the following output:

```
{
  "id": "a1b2c3d4-1234-4abc-9def-0123456789ab",
  "version": 1,
  "createdAt": "2026-10-07T10:54:33.481Z",
  "lastModifiedAt": "2026-10-07T10:54:33.481Z",
  "lastModifiedBy": {
    "clientId": "<your-client-id>",
    "isPlatformClient": false
  },
  "createdBy": {
    "clientId": "<your-client-id>",
    "isPlatformClient": false
  },
  "sku": "CT-CHAIR-001",
  "quantityOnStock": 25,
  "availableQuantity": 25
}
```

## Products

Product names, slugs, and descriptions are written in the language you select in the **Locale** field. If you leave it empty, the action uses the first language of your commercetools project.

### Create Product

Creates a product.

-   **Product Type** (required): Select the product type.
-   **Product Name** (required): Enter the product name.
-   **Slug** (required): Enter a URL-friendly identifier for the product, for example oak-dining-chair. The slug must be unique and can contain only letters, numbers, hyphens (-), and underscores (\_).

Enable the **Show Optional Fields** toggle to configure the following fields:

-   **Description**: Enter the product description.
-   **Locale**: Select or enter the language to write the name, slug, and description in, for example en-US. The list shows your project's languages. If you leave it empty, the action uses the project's first language.
-   **Product Key**: Enter a unique key for the product.
-   **Categories**: Click **\+ Add Categories** and select a category. Repeat to add more categories.
-   **Master Variant SKU**: Enter the SKU of the product's master variant.
-   **Price (in cents)**: Enter the price in cents. For example, 1000 is 10.00.
-   **Currency Code**: Enter the currency code of the price, for example USD. The field is prefilled with EUR. It applies only when you set a price.
-   **Publish Immediately**: Select to publish the product when it's created. Otherwise, the product is created unpublished.

### Get Product

Retrieves a product.

-   **Product** (required): Select the product to retrieve.

The output includes both the published data (masterData.current) and the unpublished changes (masterData.staged).

### Update Product

Changes the name or description of a product, adds it to a category, or publishes its changes.

-   **Product** (required): Select the product to update.

Enable the **Show Optional Fields** toggle to configure the following fields. Set at least one.

-   **New Name**: Enter the new product name.
-   **New Description**: Enter the new product description.
-   **Locale**: Select or enter the language of the new name and description, for example en-US. If you leave it empty, the action uses the project's first language. Values in other languages are kept.
-   **Add to Category**: Select a category to add the product to.
-   **Publish Changes**: Select to publish the changes.

Changes to the name, description, and categories are saved as unpublished changes (masterData.staged). They go live when you select **Publish Changes**. To publish changes that are already saved, select only **Publish Changes**.

## Customers

Customer actions work with the customer accounts in your commercetools project.

### Create Customer

Creates a customer account.

-   **Email** (required): Enter the customer's email address. It must be unique in the project.
-   **Password** (required): Enter the customer's password. It must be at least six characters long.

**Note:** Anyone who can open the automation can see the password in the step's configuration and test results.

Enable the **Show Optional Fields** toggle to configure the following fields:

-   **First Name**: Enter the customer's first name.
-   **Last Name**: Enter the customer's last name.
-   **Company Name**: Enter the customer's company name.
-   **Customer Key**: Enter a unique key for the customer.
-   **External ID**: Enter the customer's ID in another system.

### Get Customer

Retrieves a customer.

-   **Customer** (required): Select the customer to retrieve.

The output includes the customer's details and addresses. Its password field holds a masked value, not the password.

### Update Customer

Updates a customer's name, email address, or company name.

-   **Customer** (required): Select the customer to update.

Enable the **Show Optional Fields** toggle to configure the following fields. Set at least one.

-   **First Name**: Enter the new first name.
-   **Last Name**: Enter the new last name.
-   **Email**: Enter the new email address.
-   **Company Name**: Enter the new company name.

Fields you leave empty don't change.

## Orders

Order actions retrieve orders and change their states. The connector doesn't create orders.

### Get Order

Retrieves an order.

-   **Order** (required): Select the order to retrieve.

### Update Order

Changes the order state, payment state, or shipment state of an order.

-   **Order** (required): Select the order to update.

Enable the **Show Optional Fields** toggle to configure the following fields. Set at least one. States you leave empty don't change.

-   **Order State**: Select **Open**, **Confirmed**, **Complete**, or **Cancelled**.
-   **Payment State**: Select **Balance Due**, **Failed**, **Pending**, **Credit Owed**, or **Paid**.
-   **Shipment State**: Select **Shipped**, **Delivered**, **Ready**, **Pending**, **Delayed**, **Partial**, or **Backorder**.

## Carts

A cart holds the items a customer intends to buy.

### Create Cart

Creates an empty shopping cart.

-   **Currency** (required): Enter the three-letter currency code in uppercase, for example USD. The field is prefilled with EUR.

Enable the **Show Optional Fields** toggle to configure the following fields:

-   **Customer**: Select the customer the cart belongs to.
-   **Country**: Enter the two-letter country code, for example US.
-   **Customer Email**: Enter an email address for the cart, if you don't select a customer.
-   **Tax Mode**: Select **Platform (default)**, **External**, **External Amount**, or **Disabled**. If you leave it empty, the cart uses **Platform**.

**Note:** If you click in **Customer Email** and leave it empty, you can't proceed. Enter a valid email address, or remove the step and add it again.

## Inventory

Inventory entries track the stock of a SKU.

### Get Inventory

Retrieves the inventory entry of a SKU, including the quantity on stock and the available quantity.

-   **SKU** (required): Select the SKU or enter it.

If the SKU has inventory entries in several supply channels, the action returns the entry that has no supply channel. If every entry has a supply channel, it returns the first one.

### Create Inventory Entry

Creates an inventory entry for a SKU, with its starting stock.

-   **SKU** (required): Select the SKU or enter it.
-   **Quantity on Stock** (required): Enter the starting quantity on stock.

Enable the **Show Optional Fields** toggle to configure the following fields:

-   **Inventory Key**: Enter a unique key for the inventory entry.
-   **Expected Delivery**: Enter the expected delivery date and time in ISO 8601 format, for example 2026-10-20T10:00:00.000Z.
-   **Restockable in Days**: Enter the number of days until the SKU is restocked.

A SKU can have only one inventory entry without a supply channel. To change the stock of an existing entry, use **Update Inventory**.

### Update Inventory

Sets the stock of an inventory entry.

-   **Inventory Entry** (required): Select the inventory entry.
-   **Quantity on Stock** (required): Enter the new total quantity on stock.

Enable the **Show Optional Fields** toggle to configure the following fields:

-   **Expected Delivery**: Enter the expected delivery date and time in ISO 8601 format.
-   **Restockable in Days**: Enter the number of days until the SKU is restocked.

If the quantity equals the current stock and you don't set any other field, the action returns the entry unchanged.

## Common Errors

| Error | Cause | Resolution |
| --- | --- | --- |
| The account doesn't connect | The **API Region** doesn't match the project's region, or the project key, client ID, or client secret is wrong. | Check the region in your API client's Auth URL and enter the values again. |
| No Options Available | The search text isn't the full value, or its case doesn't match. | Enter the full value with the exact case, or select the item from the list. |
| No update actions specified. Please provide at least one field to update. | **Update Product** or **Update Customer** ran with no optional field set. | Enable **Show Optional Fields** and set at least one field. |
| No update actions specified. Please provide at least one state to update. | **Update Order** ran with no state set. | Enable **Show Optional Fields** and select at least one state. |
| There is already an existing customer with the provided email. | **Create Customer** used an email address that another customer has. | Use a different email address, or update the existing customer with **Update Customer**. |
| A duplicate value '"<SKU>"' exists for field 'sku'. | **Create Inventory Entry** ran for a SKU that already has an inventory entry. | Use **Update Inventory** to change its stock. |

## Limitations

-   Searching the lookup lists matches the full value only and is case-sensitive.
-   **Create Inventory Entry** doesn't check that the SKU belongs to a product.
