---
title: "Cancel Your Subscription"
description: "Cancel your Contentstack subscription, understand what happens to your organization and content, and export your data first."
url: /administration/cancel-your-subscription
uid: bltfe04dce37098362a
---

# Cancel Your Subscription

## Cancel Your Subscription

You can cancel your subscription yourself, without contacting support. Cancellation stops future payments and, at the end of your current billing period, removes your access to the organization.

Read this article in full before you cancel. Cancellation deletes content on a fixed schedule, and that part cannot be undone.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization Owner permissions

## Before You Cancel

**Warning:** Export anything you want to keep before the end of your current billing period. Once that period ends, Contentstack deactivates your organization and you cannot sign in to retrieve content.

1.  Export your entries, assets, and content types. Refer to the [Contentstack CLI](/docs/headless-cms/install-the-cli) documentation for exporting a stack.
2.  Download any invoices your finance team needs, from the billing portal. Refer to the [Manage Your Billing Details](/docs/administration/manage-your-billing-details) documentation.
3.  Record any API keys, delivery tokens, or management tokens your applications depend on, so you know what stops working.

## Cancel Your Subscription

To cancel, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Click your avatar in the top-right corner, and then click **Manage Subscription**. Contentstack opens the **Subscription** page in your account settings.
2.  On the subscription card, click the vertical ellipsis (⋮).
3.  Click **Cancel & Delete Account**.
4.  Follow the prompts to confirm.

## What Happens After You Cancel

Cancellation does not take effect immediately. Your subscription runs to the end of the billing period you have already paid for, and you keep full access until then.

At the end of that period:

1.  Contentstack deactivates your organization, and you lose access to it. Your stacks, entries, and assets are no longer reachable, and requests to the content delivery API and the content management API stop working. Any live site that depends on them stops receiving content.
2.  Contentstack retains the deactivated organization for **90 days**.
3.  After 90 days, Contentstack permanently deletes the organization and everything in it.

**Warning:** A deactivated organization is not read-only. You cannot sign in and read your content during the 90-day retention period. Export everything you need before the end of your billing period, not after.

To recover an organization during the 90-day window, contact the [support](mailto:support@contentstack.com) team. Once the 90 days elapse, the content cannot be recovered.

## Alternatives to Cancelling

-   To reduce cost while keeping your organization, remove add-ons you no longer need. Refer to the [Change Your Subscription or Add-Ons](/docs/administration/change-your-subscription-or-add-ons) documentation.
-   To stop paying for usage above your allowance, turn off extra usage. Refer to the [Track and Extend Your Subscription Usage](/docs/administration/track-and-extend-your-subscription-usage) documentation.
-   To move to a lower paid subscription option, contact the [support](mailto:support@contentstack.com) team. This is not available in the product.
