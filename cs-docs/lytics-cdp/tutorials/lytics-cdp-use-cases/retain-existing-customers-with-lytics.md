---
title: "Retain Existing Customers With Lytics"
description: "Retain Existing Customers With Lytics"
url: /lytics/retain-existing-customers-with-lytics
---

# Retain Existing Customers With Lytics

## Retain Existing Customers With Lytics

Now more than ever, companies must focus on retaining and growing their existing customers. [Acquiring customers](/marketing/use-cases/advertising/acquire-new-customers) is expensive, and most companies are seeing diminishing returns on acquisition tactics. For this reason, lower to mid-funnel tactics are gaining attention from CMOs. Companies can no longer rely upon gimmicky brand advertising on mass channels.

The following is the Lytics Playbook for retaining existing subscribers.

### The framework

There are two important concepts within retention marketing as it pertains to Lytics. While these concepts apply across industries, we will focus on the subscription vertical for this playbook. For our purposes, we will define these concepts as follows:

-   **Renewals**: customers who have an upcoming renewal date.
-   **Winbacks**: recovery efforts for subscribers whose renewal date has lapsed.

### How Lytics helps

Lytics helps you renew and winback customers in multiple ways:

1.  Identifying individual users who have upcoming renewals.
2.  Scoring the likelihood of renewal or churn.
3.  Triggering cross-channel messaging to encourage renewal.
4.  Executing targeted promotions and discounts.
5.  Recognizing a user whose renewal date has past or subscription has expired.
6.  Driving personalized winback communications across channels.

The big breakthrough for marketers is that retention teams now have the opportunity to automate consistent messaging across multiple channels. In their research, [The Aberdeen Group](https://v12data.com/blog/25-amazing-omnichannel-statistics-every-marketer-should-know/) found “Companies with extremely strong omnichannel customer engagement see a 9.5% year-over-year increase in annual revenue, compared to 3.4% for weak omnichannel companies. Similarly, strong omnichannel companies see a 7.5% year-over-year decrease in cost per contact, compared to a 0.2% year-over-year decrease for weak companies.”

### The playbook

#### Step 1: Create a renewals audience

Consider the fields available for renewal in your audiences. Some common ones might include the time of last purchase, subscription start date, and subscription end date. You might add additional criteria such as filters excluding complementary subscriptions. ![Subscription-Screenshot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0f9f33e4010e4c90/d3731ed94fb720328b05b853/img-0261.png)

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low | Low (building block for cross-channel use cases) | No |



Consider that you will likely have several renewals audiences - one per subscription.

#### Step 2: Export audience to all key integrations

The focus of renewals and winbacks will be cross-channel which can include: [Google](/understanding/integrations/google/google-adwords#export-to-an-adwords-remarketing-list), [Facebook](/docs/lytics/meta), [Verizon Media (Yahoo Gemini)](/docs/lytics/yahoo-ads), your email service provider (ESP) available as [Integrations](/docs/lytics/lytics-integration-options), and the Lytics [Journey Canvas](/documentation/product/features/journeys/journey-canvas-overview) (not an export).

#### Step 3: Create on-site modals targeting renewals

The most common renewal tactic is to deliver on-site modals to users with an upcoming renewal. Take the renewal audience you created in step one, and then add custom personalized Experiences to target them. See the slide-out modal on the left side below as an example.

![On-side Modals](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am69bea04f8f22ad6a/8e83936be7036444495a5d65/img-0262.png)

Further instructions are available for [business users](/understanding/product-docs/orchestrate/experience-editor) and for [developers](/docs/developers/sdks/lytics/web/lytics-javascript-tag).

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low | High | No, but helpful for detailed customization |



#### Step 4: Add targeted email to your renewal journeys

The email inbox is one of the most impactful places to reach your renewal users. First, build an email in your ESP that can be triggered based on a Lytics audience. You’ll need to follow the instructions in your ESP to do so, and this varies considerably by tool.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Medium | High | No, but helpful for detailed customization of the email template |



Once you have a triggered email built in your ESP, make use of the triggered email feature your ESP likely has.

Whatever ESP you have, you probably do not want to include “Existing Users” in the audience, so we recommend leaving that box unchecked. Once this export is configured, new customers who enter your renewal audience will be sent the automated message. For examples of how you can go a step further and embed custom content in your email templates, check out this [Iterable use case](/docs/lytics/personalize-your-iterable-emails-with-lytics-content-recommendations).

#### Step 5: Involve telesales (optional)

Imagine incorporating your message across channels to even include telesales. Your telesales team likely has a stronger closing rate on renewals than your site or your email programs ever could. There are two ways to incorporate telesales:

-   Encourage visitors to call inbound.
-   Deliver a list of leads for targeted outbound.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low | Medium | No |



**Encourage Visitors To Call Inbound**

Leveraging very simple HTML, you can create [click to call](https://developers.google.com/web/fundamentals/native-hardware/click-to-call/) campaigns in [Orchestrate](/understanding/product-docs/orchestrate/experience-editor). Then, users on a mobile phone will be able to immediately talk to a rep on the phone:

![click-to-call-modal-small](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3b4922c42bdec15a/2a2cbee6fd112289f755e961/img-0263.png)

**Deliver a List of Leads for Targeted Outbound**

Build a list of all the upcoming renewals you care about. Here’s an example using several audiences of subscriptions expiring within the next 30 days as building blocks for a master telesales list:

![subscription-building-block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcec12654bca147e6/a672fa50c10953a8619fde61/img-0264.png)

#### Step 6: Incorporate direct mail (optional)

Using the same example as above, consider adding address information to the export and sending it to a fulfillment provider who can send direct mail to your renewals.

![direct-mail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am840018b2d20c5453/4621d46b6fc4be8bac63847b/img-0265.png)

As a final note, keep in mind there are many other areas to cover including copy choices, step-by-step optimization, and common pitfalls to avoid. These are beyond the scope of this playbook, but should be taken into consideration while developing your marketing strategy to retain customers.
