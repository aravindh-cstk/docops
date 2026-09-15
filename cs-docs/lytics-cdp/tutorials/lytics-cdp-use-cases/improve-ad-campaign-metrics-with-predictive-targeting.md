---
title: "Improve Ad Campaign Metrics with Predictive Targeting"
description: "Improve Ad Campaign Metrics with Predictive Targeting"
url: /lytics/improve-ad-campaign-metrics-with-predictive-targeting
uid: blt03b05bdbfa37fe45
---

# Improve Ad Campaign Metrics with Predictive Targeting

## Improve Ad Campaign Metrics with Predictive Targeting

Lytics predictive audiences can be leveraged in advertising tools to make intelligent targeting and bid strategy decisions within remarketing campaigns. While Lytics can populate audiences in your ad tools as seed audiences for lookalike modeling, this use case specifically uses Lytics [data science scores](/documentation/product/features/descriptive-and-predictive-modeling/lytics-scores) against your own first-party data to optimize remarketing efforts around users most likely to complete an action instead of anyone who may be eligible for a remarketing experience.

-   [Build a Predictive Audience in Lytics](#build-a-predictive-audience-in-lytics)
-   [Leverage Content Affinity in Audiences](#leverage-content-affinity-in-audiences)
-   [Custom Predictive Audiences](#custom-predictive-audiences)

### Build a Predictive Audience in Lytics

There are several ways to build your audience in Lytics that you can utilize in your ad platform for targeting. To begin testing this strategy, Lytics recommends defining and building the deterministic rule for who you’d like to retarget in your ad strategy. This most commonly looks like:

-   “Has done event X but not Y.”
-   “Has web activity but is not a paying subscriber.”

It’s likely that you have rules like this already set up in your ad tools. To improve the performance metrics of these campaigns, you can use Lytics to decrease the overall audience size available for targeting but increase the likelihood of conversion against your business goal. This will impact your ad KPIs by potentially decreasing the total number of unique impressions but increasing conversion rate and/or decreasing cost per acquisition.

To do this, layer in one of the Lytics out-of-the-box [behavioral audiences](/documentation/product/features/descriptive-and-predictive-modeling/behavioral-audiences) that use data science, such as **Engagement: Deeply Engaged Users**.

![build predictive audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am78e0dbaaf284c536/bd9074fc6f150456d621497b/img-0161.png) \\\*This rule set includes all deeply engaged users who haven’t made a purchase.

\*

By passing this audience directly into an ad channel, your remarketing efforts will be more refined to only include users who are deeply engaged and more likely to convert than your total user base.

### Leverage Content Affinity in Audiences

Lytics can also create data-science based audiences specific to a topic of interest for an individual user. This logic is more robust than retargeting users around a site category that they have shown past interest in because it evaluates changes in topics in real-time and assesses a user’s interest in a topic in relation to all existing users within your account and their actions. Read more about [user-level topic affinities here](/documentation/product/features/content-affinity-engine/user-level-topic-affinities).

You can utilize a [content-affinity audience](/docs/lytics/content-affinity) for remarketing as a single rule for an audience, or as part of a rule set as demonstrated below.

![content affinity audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9b63a9a82f0feb2c/762337f2c5787c8844397862/img-0162.png) _This rule set includes users with a high affinity for ‘Chicken’ and who have their membership on pause._

By using content affinity-based audiences for remarketing in ad channels, your ad copy and creative can be strategically paired to be more relevant to your customers based on what they have previously shown an interest in.

### Custom Predictive Audiences

The last strategy for predictive audiences within Lytics is to rely on our proprietary [SegmentML](/reference/segmentml) product to do lookalike modeling across your own first-party data. Most advertisers are familiar with lookalike modeling within ad channels to extend your reach. You can also mine your own first-party data for more relevant lookalikes to offer your products and services to within an ad channel.

Your Lytics Account Manager or Services team can help you create predictive audiences within your account, which can then be exported into downstream ad tools the same way as any other audience built within Lytics. See the [Integrations documentation](/docs/lytics/lytics-integration-options) for provider-specific information.

![segml audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37d0110befda6266/54555162850bc8b40ebf4dd4/img-0163.png)

_This summary report shows the growth of a custom predictive audience over a week._

While these audiences may be smaller than the lookalikes you’ll get back from [Facebook](/docs/lytics/meta) or [Google Ads](/documentation/product/integrations/google/google-adwords/overview) directly, because these users have interacted with your brand previously, and are showing signals towards behaving like your seed audience, they will have a higher conversion rate that can be influenced by additional ad campaigns with the right strategy and messaging.
