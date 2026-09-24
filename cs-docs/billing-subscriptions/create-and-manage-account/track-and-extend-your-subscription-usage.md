---
title: "Track and Extend Your Subscription Usage"
description: "Monitor AI credits, API requests, and bandwidth against your allowance, and allow extra usage so your site stays available."
url: /billing-and-subscriptions/track-and-extend-your-subscription-usage
uid: blte1bddca54b0302db
---

# Track and Extend Your Subscription Usage

## Track and Extend Your Subscription Usage

The **Usage Overview** section of your subscription lists every resource your subscription includes, with how much you have used and how much remains. Three of them are measured over each billing period and reset when it ends: AI credits, API requests, and bandwidth. This article covers those three, because they are the ones you can extend by paying for what you use. For the rest, which are a standing ceiling raised with an add-on, refer to the [About Your Subscription](/docs/billing-and-subscriptions/about-your-subscription) documentation.

By default, these resources stop when you reach your allowance. On a paid subscription, you can allow usage beyond it and pay for what you use, so a traffic spike does not take your site offline.

## What Each Resource Measures

| Resource | What it measures |
| --- | --- |
| **AI Credits** | Each use of an AI-powered feature, including writing assistance, Brand Kit generation, and Agent OS automations |
| **API Requests** | Each call to the content delivery API or the content management API, whether your application fetches, updates, or previews content |
| **Bandwidth** | The volume of data served to your users when Contentstack delivers content through its content delivery network |

All three reset at the start of each billing period.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization Owner permissions
-   A paid subscription, to allow extra usage

## Check Your Usage

To review your usage, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:

1.  Click your avatar in the top-right corner, and then click **Manage Subscription**. Contentstack opens the **Subscription** page in your account settings.
2.  Review the **Usage Overview** section.

Each resource shows your consumption against your allowance, a progress bar, and the amount remaining as both a figure and a percentage. These figures reflect your own subscription and any add-ons you have bought.

## Allow Extra Usage

Extra usage is turned off by default. When it is off and you reach an allowance, requests against that resource stop until the next billing period.

**Note:** Extra usage is available on paid subscription options. On Free, the **Enable Extra Usage** toggle and the **Set Extra Usage** option do not appear, and reaching an allowance stops that resource until the next billing period. To allow extra usage, move to a paid subscription option.

1.  In the **Usage Overview** section, turn on the **Enable Extra Usage** toggle.
2.  Read the confirmation, and then click **Enable**.

Extra usage now applies to all three resources. The toggle changes to **Disable Extra Usage**, and a **Set Extra Usage** option becomes available for each resource.

**Note:** Usage beyond your allowance is charged per unit and appears on the invoice for the period in which you used it. It is not charged up front. For current rates, see the [pricing page](https://www.contentstack.com/pricing).

## Set a Cap on Extra Usage

Set a cap so your bill cannot grow without limit. Configure each resource separately.

1.  Next to the resource you want to cap, click **Set Extra Usage**.
2.  Enter the maximum extra amount you are prepared to buy for the period. The dialog box shows an **Estimated Cost** for the amount you have entered. Use that estimate rather than calculating the cost yourself, because it reflects your subscription and current rates.
3.  Click **Configure**.

Contentstack applies the cap immediately. When usage of that resource reaches the cap, requests against it stop for the rest of the billing period.

**Tip:** Set the cap slightly above your busiest month to date. That way a genuine spike is absorbed, and a runaway integration is still contained.

**Note:** On some subscription options, the amount of extra usage you can buy is capped per resource. To go beyond it, move to a higher subscription option.

## Turn Off Extra Usage

To stop paying for usage beyond your allowance, turn off the **Disable Extra Usage** toggle. Extra usage you have already consumed in the current period is still charged on that period's invoice.

**Warning:** With extra usage turned off, reaching an allowance stops that resource until the next billing period. If your production site depends on the content delivery API, this makes the site unavailable to your users.

## Where to Manage AI Credit Usage

AI credit consumption also appears on the [AI Credits](/docs/administration/ai-credits) page under AI Settings, which has its own control over usage beyond your allocation.

Manage extra usage from the **Subscription** page. The subscription holds your billing configuration, so its setting takes precedence over the equivalent setting in AI Settings. Use the AI Credits page to review consumption by product and by day, not to set limits.

**Additional Resource:** For usage trends over time and a breakdown by product, refer to the [Analytics for AI Credits](/docs/analytics/analytics-for-ai-credits) documentation.
