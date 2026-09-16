---
title: "About Your Subscription"
description: "Learn what the Subscription page shows, how subscription limits and billing periods work, and who can manage your organization's subscription."
url: /administration/about-your-subscription
uid: bltfa373510f45c5f18
---

# About Your Subscription

## About Your Subscription

Your subscription determines which Contentstack features your organization can use and how much of each resource it gets. The Subscription page is where you see your current subscription, check your usage, change subscription options, buy add-ons, and manage billing.

Your subscription belongs to the organization, not to an individual user. Everyone in the organization works within the same subscription and shares the same allowances.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization Owner permissions

**Note:** Only the organization Owner can view and manage the subscription. Organization Admins and custom roles cannot open the Subscription page, regardless of their other permissions.

## Open the Subscription Page

To open your subscription, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Click your avatar in the top-right corner, and then click **Manage Subscription**. Contentstack opens the **Subscription** page in your account settings.

## What the Subscription Page Shows

The page has up to four sections, depending on your subscription.

-   **Subscription** — your current subscription, its status, and the date of your next payment. Use **Upgrade** to move to a higher subscription option, and the vertical ellipsis (⋮) to reach billing and cancellation options.
-   **Add-ons** — appears on subscription options that support them. Use **Manage Add-Ons** to raise an individual limit, such as the number of users or stacks.
-   **Usage Overview** — every resource your subscription includes, with how much you have used and how much remains. Metered resources also show the controls for allowing usage beyond your allowance.
-   **Billing Information** — the details that appear on your invoices. **Manage Billing** opens the billing portal.

## Subscription Options

Contentstack offers four subscription options: **Free**, **Build**, **Growth**, and **Enterprise**.

-   **Free** does not expire and does not require a credit card. Use it to learn the platform or build a prototype.
-   **Build** and **Growth** are paid monthly by card. You can move to either yourself, and the change applies immediately.
-   **Enterprise** is arranged with the Contentstack sales team and covers requirements that Build and Growth do not, including personalization, a customer data platform, custom data residency, and contractual support terms.

To compare what each subscription option includes and see current pricing, go to the [pricing page](https://www.contentstack.com/pricing). To contact the sales team about an Enterprise subscription, use the [contact form](https://www.contentstack.com/contact-us).

## How Subscription Limits Work

Every subscription option sets an allowance for each resource. Contentstack tracks two kinds of limit, and the difference determines how you get more.

-   **Metered resources** reset at the start of each billing period. API requests, bandwidth, and AI credits are metered. On a paid subscription, you can allow usage beyond the allowance and pay for what you use.
-   **Fixed resources** are a standing ceiling rather than a monthly total. Users, stacks, content types, entries, assets, locales, and custom roles are fixed. When you reach the ceiling, you cannot create more until you raise it with an add-on or a subscription change.

### Find Your Own Limits

Your limits depend on your subscription and on any add-ons you have bought, so the Subscription page is the accurate source for your organization:

-   **Metered resources** — the **Usage Overview** section shows each resource, how much you have used, how much remains, and any extra usage alongside your allowance.
-   **Fixed resources** — the same section shows what your subscription includes and the quantity any add-on has contributed.

**Additional Resource:** For a detailed view of AI credit consumption by product and by day, refer to the [Analytics for AI Credits](/docs/analytics/analytics-for-ai-credits) documentation.

## How Your Billing Period Works

Paid subscriptions are billed monthly. Your subscription renews automatically on the same day each month until you cancel it, and the Subscription page shows that date as **Next Billing Date**.

Two things are charged at different times:

-   The **subscription price** is charged at the start of each billing period.
-   **Extra usage** and **add-ons** are calculated for the period in which you used them, and appear on the invoice at the end of that period.

When you move to a higher subscription option partway through a period, Contentstack charges a prorated amount for the days remaining and credits the unused part of your current subscription. You see both amounts before you confirm.

## Subscription Statuses

| Status | What it means |
| --- | --- |
| **Active** | Your subscription is current, and it renews on the next billing date. |
| **Overdue** | A payment has failed. Your subscription remains in place while the payment provider retries the charge. Update your payment method to clear the status. |
| **Cancelled** | You have cancelled. Your subscription runs to the end of the current billing period, and the organization is deactivated after that. |

## If a Payment Fails

When a scheduled payment fails, your subscription status changes to **Overdue** and the payment provider emails you directly at the address on your billing details. It then retries the charge automatically, choosing the timing of each attempt based on when it is most likely to succeed. There is no fixed retry schedule.

To clear an **Overdue** status, update your payment method in the billing portal.

**Note:** Contentstack does not display a prompt inside the product when a payment fails. Watch for the email from the payment provider, and check the **Subscription** page if you suspect a charge has not gone through.

\[R1 — add one sentence stating the point at which access is downgraded or cut off if the retries never succeed. Dean Haddock has asked this in the thread and it is unanswered. A reader in an Overdue state needs to know how long they have.\]

## Next Steps

**Additional Resource:** To move to a higher subscription option or buy add-ons, refer to the [Change Your Subscription or Add-Ons](/docs/administration/change-your-subscription-or-add-ons) documentation.
