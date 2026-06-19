---
title: "[Marketplace guides and apps] - OLD Algolia"
description: Install and configure the OLD Algolia Marketplace app to update Algolia indices on publish, unpublish, or delete events in Contentstack.
url: https://www.contentstack.com/docs/marketplace/algolia-old
product: Contentstack Marketplace
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - OLD Algolia

This page explains how to install and configure the OLD Algolia app from the Contentstack Marketplace so your Algolia indices are updated when entries and assets are published, unpublished, or deleted. It is intended for Contentstack stack owners/admins and developers setting up search indexing with Algolia.

Algolia is an AI-powered search and discovery platform for dynamic experiences. It helps businesses discover and access the necessary content quicker and more efficiently.

Marketplace lets you install and use the Algolia application to update Algolia indices whenever entries and assets are published, unpublished, or deleted from Contentstack.

## Prerequisites
- [Algolia account](https://www.algolia.com/users/sign_in)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/ Stack as the Owner/ Admin

This step-by-step guide explains how to install and configure Algolia within your stack.

## Steps for Execution
- [Retrieve Algolia Credentials](#retrieve-algolia-credentials)
- [Install and Configure Algolia  in Contentstack Marketplace](#install-and-configure-algolia-in-contentstack-marketplace)
- [Use Algolia within your Stack](#use-algolia-within-your-stack)

## Retrieve Algolia Credentials

To configure the app, you need to get the **application_id** and **index name **from Algolia. To do that, follow the steps gives below:

Login to your Algolia account.
- Click on the **Settings** button in the left navigation bar, under **Team and Access** open the **API Keys** option.
- Keys are available here if they are already created:

**Note:** While creating new API keys, make sure you select the **Indices**.
Also, provide the **ACL** options to perform indexing, as shown below:
- On the API Keys page you will get an **Application ID**, copy the Application ID and note it down, you will need it to configure your app in Contentstack.
- Click on the copy icon in the search dashboard to save or copy the index name as shown below:

Now that you have the required credentials to configure the app, goto Contentstack and set up the app.

## Install and Configure Algolia in Contentstack Marketplace

To install the application in Contentstack, follow the steps below:

Login to your Contentstack account.
- On the left-hand side primary navigation, you will find the Marketplace icon (as shown below). Click on the icon to go to the Marketplace.
- Within the Marketplace, you will be able to see all the apps available, hover over the **Algolia** app and click on **Install App**.
- On the next screen, select the stack where you want to install the Algolia app, click on the checkbox to agree to the Terms of Service and Privacy Policy, and click on **Install**.
- On the **Configuration** page, enter the Algolia credentials that we retrieved in step 1.
- Select the **Add Configuration** button to add more configurations.
- If you want to add Webhook triggers to specific content types with selected mapping rules, click on the **Additional settings** toggle and add rules.

**Note:** Ensure that atleast one configuration is added before you go for additional settings.
- Click on the **Add Rule** button to add one or more rules, by selecting content type and appropriate mapping fields.
**Note:** 1. The webhook will be triggered only for the content types added in mapping rule(s).
 2. The added rules(s) will be applicable for all environments selected in the previous configuration.
- Select **Trigger Webhook for all Content Types** checkbox if you want to trigger the webhook for all the content types along with the content types for which rules are set by selecting mapping fields.
If we select this option, the content types with the specified rules will be added to Algolia with the rules and the data from other content types will be added to Algolia as it is.
- Select **Trigger Webhook for Asset** checkbox if you want to trigger the webhook for assets.
Selecting this option will add your assets data to Algolia index on publishing. Similarly, this option will remove your data from Algolia index on performing unpublish/delete.

Using the “**+ Add Field**” option in the Mapping Fields dropdown, you can map nested or complex structures.

For example,
- While mapping nested fields, you must specify the object and its field using the dot(.) notation. For example, Object.age for accessing the age field within the object.
- While mapping arrays, use indexing. For example, Array[1] for accessing the second value of an array.
- You can use the above rules to create mapping rules for complex structures that include objects and arrays.
- Click on **Save** and **Open Stack **to start using the Algolia application.

## Use Algolia within your Stack

To use the Algolia application in an entry of your stack, follow the steps given below:

Go to your stack and click the “Content Models” icon on the left navigation panel, and click on the **+ New Content Type** button.
- Create a content type by adding relevant details and click on the **Save and proceed button**.
- In the Content Type Builder page, add the required fields in your content type. Now create an entry within the content type we just created and add details as shown below:
- **Save** your entry and publish in the environment you selected while configuring the app in the [step 5](#install-and-configure-algolia-in-contentstack-marketplace).

**Note:** Publish the entries only in the environment you select while configuring the Algolia app.
- Navigate to your Algolia app index to see the published entry indexed in the publish event.

**Note:** 1. If you unpublish/delete an entry on a specified environment, the entry will be deleted from Algolia's index.
 2. If you delete a content type, all the published entries of that content type that were added to Algolia will be deleted from Algolia's index.

## View Algolia analytics in the dashboard (Optional)

The dashboard displays data coming from multiple environments of the Algolia app.
- In the configuration page, select the environment which you want to make as the default environment.

**Note:** If you don't choose a default environment, then the first environment in the configuration will be displayed as the default environment in the dashboard.
- In the dashboard, select the dropdown in the top-right corner of the table to display data for a specific environment.
- You can view the data for **Top Searches** and **Top Searches With No Results** by switching between the tabs.

## Common questions

### What events cause Contentstack to update Algolia indices?
Entries and assets are updated in Algolia indices whenever they are published, unpublished, or deleted from Contentstack.

### What Algolia details are required to configure the app?
You need the **application_id** and the **index name **from Algolia.

### Can I trigger webhooks for only specific content types or assets?
Yes. You can add rules under **Additional settings** for specific content types and mapping fields, and you can also select **Trigger Webhook for Asset** to trigger the webhook for assets.

### What happens in Algolia when I unpublish/delete an entry or delete a content type?
If you unpublish/delete an entry on a specified environment, the entry will be deleted from Algolia's index. If you delete a content type, all the published entries of that content type that were added to Algolia will be deleted from Algolia's index.