---
title: "Acquire New Customers with Lytics"
description: "A step-by-step Lytics playbook for acquiring new customers, covering suppression audiences, lookalike modeling, data-science-based remarketing, email collection, and targeted offers."
url: /lytics/acquire-new-customers-with-lytics
---

# Acquire New Customers with Lytics

## Acquire New Customers with Lytics

Customer acquisition is a core focus for all marketing departments. Traditionally, B2C marketers have relied upon specialist teams and agencies to drive strategy and spend money on ad placements. However, these teams often do not have access to key customer data, and thus have to rely upon third-party data and contextual guesswork. Additionally, these teams and agencies typically do not have access to personalize the customer experience on site.

There is a better way. First-party data can be extremely valuable for ad targeting on certain networks, and marketers with the right tools can personalize their landing page experiences.

The following is the Lytics Playbook for acquiring new customers.

## The framework

There are two important concepts within acquisition marketing as it pertains to Lytics:

-   **Driving traffic**: advertise to relevant audiences by using your first-party data.
-   **Generating leads**: deliver personalized experiences to new visitors to create leads.

## How Lytics helps

Lytics helps marketers to drive quality traffic by unleashing streams of powerful first-party data to ad platforms such as Google, Facebook, and Yahoo, which can leverage that data for building lookalike audiences.

How effective is this? Most companies see their return on ad spend (ROAS) of campaigns on these platforms improve by 10-80%. 30-40% improvements are typical.

Using your first-party data, Lytics helps to improve the retargeting of your past visitors in two main ways: by identifying their [Affinities](/docs/lytics/affinities), and calculating [Behavioral Scores](/docs/lytics/behavioral-scores) of who is most likely to return.

You can then use Lytics to target personalized experiences on site to encourage the right visitors to sign up for your lists. Finally, Lytics can help to identify the subscribers and visitors who could/should be targeted with offers and content to drive a first purchase.

## The playbook

### Step 1: Send all customers to ad platforms for suppression

Why would you want to throw valuable acquisition dollars on a wasteful audience of existing customers? The answer, you don’t. But your teams are probably doing this today (almost everyone is) because they don’t have a good source for this audience. With Lytics, you can send all customers to Facebook, Google, Verizon (Yahoo) and other platforms for suppression from lead generating advertising.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low | Medium | No |



**Building the audience**

The key to building the right audience is to include all the customers and/or free subscribers you don’t want to spend money on. If you are new to using Lytics, see our [Audiences documentation](/docs/lytics/audiences#creating-audiences) to get started. The following examples skip the first few steps and jump right into building custom audiences.

For most companies, an audience to suppress would resemble something like this:\\ ![All customers sample audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1f560574827129ee/dd7dc56c2c17c991965eeed3/img-0000.png)

Be sure to suppress active users on all your lists and products. This will give the most comprehensive set of customers to limit from targeting.

**Export a continuously updated file**

Export these audiences to the key ad platforms: [Google Ads](/docs/lytics/google-ads-overview), [Facebook](/docs/lytics/meta) and, [Yahoo Ads](/docs/lytics/yahoo-ads).

**Build suppression in your ad campaigns**

And then create suppression lists in your ad campaigns. See the respective help docs for more information on [Facebook](/docs/lytics/meta)or [Google Ads](/docs/lytics/google-ads-overview).

### Step 2: Build lookalikes of your best customers

If you’re using lookalikes of your customer file as a targeting audience, it’s likely already the best performing audience in your ad campaigns. Have you heard of the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle) or the 80/20 Rule? 80% of your revenue comes from 20% of your customers. For most companies, it’s more like 90/10.

If you can build lookalikes off your absolute best customers, you’ll help Google, Facebook, and Verizon Media to identify the absolute best audiences for your advertising.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low | High | No |



**Building the audience**

In order to help train the big ad platforms as to who your best users are, send the audience over that most resembles your goal audience. For many companies, this is likely to be people with a high lifetime value (LTV) or multiple purchases. For example, your audiences might look like this:

![audience-high-ltv-example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama94c932d23d340f5/e77d388cf1c3eae81950ec8e/img-0001.png)

Note that there are several ways to determine high LTV, so feel free to customize to your specific requirements. The important concept is that you should be targeting lookalikes of your best customers, not lookalikes of all customers.

**Export a continuously updated file**

Export these audiences to the key ad platforms: [Google Ads](/docs/lytics/google-ads-overview), [Facebook](/docs/lytics/meta) and, [Yahoo Ads](/docs/lytics/yahoo-ads).

**Build lookalikes in your campaigns**

Build a lookalike in [Facebook](/docs/lytics/meta) or a “similar audience” (lookalike) in [Google Ads](/docs/lytics/google-ads-overview).

### Step 3: Setup data science based remarketing audiences

The next step is to route audiences to the most impactful remarketing campaigns. For example, you may have certain creative stored in Google and Facebook that better address one content affinity over another. Additionally, you probably want to consider engagement-based suppressions for remarketing over carpet bombing all of your site visitors.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low | Medium | No |



**Building the audience**

Think through which content affinities best align to your creatives. For example, break out your core audiences based on content affinity. At Lytics, our customers tend to look like the following:

![audience-marketer-affinity](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc4e6930c85d76bfc/c8bf530567bda11d2931bbe4/img-0002.png)

...or the user might belong to this group:

![audience-technical-affinity](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame169658d27fbc219/b51b07988adaec88072b2797/img-0003.png)

You can and should use “Any Affinity” to start. You’ll note that users with any affinity for a topic show above-average interest in that affinity. To narrow your focus, you might try limiting to “High Affinity.”

Also, be thinking about the likelihood of a user to re-engage. Typically, your time window of attention is very short. Consider filtering for users with high [Recency](/docs/lytics/descriptive-predictive-modeling#recency). [Descriptive & Predictive Modeling](/docs/lytics/descriptive-predictive-modeling#quantity) of interactions may also play a role. Your audience might look something like the following:\\ ![audience-score-example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8f4aad2d21fcfbf9/cb8521c59205f2f9e900d3a3/img-0004.png)

**Exporting the audience**

Anonymous audiences are continuously exported from the Lytics [JavaScript Tag](/docs/developers/sdks/lytics/web/lytics-javascript-tag) to [Facebook](/docs/lytics/meta) and [Google Analytics](/docs/lytics/google-marketing-overview) tags.

Continue with step-by-step instructions to [promote relevant content to users based on their interests](/docs/lytics/promote-relevant-content-to-users-based-on-their-interests).

### Step 4: Collect emails

As we mentioned at the start of this playbook, acquisition marketers seldom have the ability to personalize web landing page experiences. With Lytics, they can. The next step in upping your acquisition marketing game is to extend the lead generating efforts to your site with targeted email collection.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low-medium | Medium-high | No, but useful for customizing the look and feel |



**Building the audience**

Don’t taint the user experience with untargeted email collection. For known users, suppress your email collection experiences:\\ ![audience-build-email](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8017a858ed7b5d94/7923d1eaef3eff6a12279104/img-0005.png)

**Building email collection campaigns**

See the [Experience editor doc](/docs/lytics/experiences#experience-editor) for how to set up this type of campaign in Lytics. The [Pathfora SDK](https://lytics.github.io/pathforadocs/) allows easy customization of the look and feel such as the example below.\\ ![personalize-example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am55798d910dbf4ac8/455ea67ed1d1e81acc62e91d/img-0006.png)

Continue with step-by-step instructions on how to [grow your email marketing list](/docs/lytics/grow-your-email-marketing-list).

### Step 5: Targeted offers

Many prospective customers will need an additional nudge to make a first purchase. The big advantage of using Lytics is the ability to target an offer consistently between site, email, and ads. This consistent approach between channels frequently provides up to a 10% lift in conversion rates.

| Effort | Impact | Developer Required |
| --- | --- | --- |
| Low-medium | Medium-high | No, but useful for customizing the look and feel |



**Building the audience**

Your audience can be limited to non-customers for special incentives, and may include engagement filters or price sensitivity (e.g. if you’re trying to sell to a known cheapskate). This is a common starting audience:

![audience-known-non-customers-example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amad9bb842b84d1631/ca08bf7c1c9ee3a6116bb202/img-0007.png)

As a final note, keep in mind there are many other areas to cover including copy choices, optimizations, and common pitfalls to avoid. These are beyond the scope of this playbook, but should be taken into consideration while developing your marketing strategy to acquire new customers.
