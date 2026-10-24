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
-   A paid subscription

**Note:** Cancellation is available on paid subscription options only. On Free, the subscription card offers **Upgrade** and nothing else, so there is no option to cancel or delete the account yourself. To close a Free account, contact the [support](mailto:support@contentstack.com) team.

## Before You Cancel

**Warning:** Export anything you want to keep before the end of your current billing period. Once that period ends, Contentstack deactivates your organization and you cannot sign in to retrieve content.

1.  Export your entries, assets, and content types. Refer to the [Contentstack CLI](/docs/headless-cms/install-the-cli) documentation for exporting a stack.
2.  Download any invoices your finance team needs, from the billing portal. Refer to the [Manage Your Billing Details](/docs/administration/manage-your-billing-details) documentation.
3.  Record any API keys, delivery tokens, or management tokens your applications depend on, so you know what stops working.

## Cancel Your Subscription

Cancellation runs through three dialog boxes. You can stop at any of them, and nothing is scheduled until you complete the last one.

To cancel, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Click your avatar in the top-right corner, and then click **Manage Subscription**. Contentstack opens the **Subscription** page in your account settings.
2.  On the subscription card, click the vertical ellipsis (⋮), and then click **Cancel & Delete Account**.
3.  In **Before You Go**, Contentstack shows the lower subscription options you could move to instead. To keep your organization on a smaller subscription, click **Downgrade Instead**. To continue cancelling, click **Cancel & Delete Account**.
4.  Select the reason you are cancelling, and then click **Continue**. To stop here, click **Keep My Plan**.
5.  Read **What happens next**, type DELETE in the confirmation field, and then click **Cancel & Delete Account**.

**Tip:** If your aim is a smaller bill rather than leaving, downgrading keeps your organization, your content, and your access. Refer to the [Change Your Subscription or Add-Ons](/docs/administration/change-your-subscription-or-add-ons) documentation.

## What Happens After You Cancel

Cancellation does not take effect immediately. Your subscription runs to the end of the billing period you have already paid for, and you keep full access until then.

At the end of that period:

1.  Contentstack deactivates your organization, and you lose access to it. Your stacks, entries, and assets are no longer reachable, and requests to the content delivery API and the content management API stop working. Any live site that depends on them stops receiving content.
2.  Contentstack retains the deactivated organization for **90 days**.
3.  After 90 days, Contentstack permanently deletes the organization and everything in it.

**Warning:** A deactivated organization is not read-only. You cannot sign in and read your content during the 90-day retention period. Export everything you need before the end of your billing period, not after.

### Restoring Your Account Within 90 Days

Resubscribing during the 90-day retention window restores full access to your organization and its content. The confirmation dialog box states this before you confirm, and repeats the date your access ends.

Restoring requires taking out a subscription again. It is not a way to read or export your content in the meantime, so still export anything you need before your billing period ends. If you cannot resubscribe, contact the [support](mailto:support@contentstack.com) team while the organization is still within the 90 days. Once the 90 days elapse, the organization and its content cannot be recovered by anyone.

## Alternatives to Cancelling

-   To pay less while keeping your organization and its content, move to a lower subscription option. Your usage has to fit within the limits of the option you choose. Refer to the [Change Your Subscription or Add-Ons](/docs/administration/change-your-subscription-or-add-ons) documentation.
-   To reduce cost without changing your subscription, remove add-ons you no longer need. Refer to the [Change Your Subscription or Add-Ons](/docs/administration/change-your-subscription-or-add-ons) documentation.
-   To stop paying for usage above your allowance, turn off extra usage. Refer to the [Track and Extend Your Subscription Usage](/docs/administration/track-and-extend-your-subscription-usage) documentation.
