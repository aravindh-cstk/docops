---
title: "Optimize Remarketing Spend"
description: "Optimize Remarketing Spend"
url: /lytics/optimize-remarketing-spend
---

# Optimize Remarketing Spend

## Optimize Remarketing Spend

Remarketing is considered to be one of the most efficient channels available for return on ad spend. If done correctly, this is a great channel for customer acquisition. However, most advertisers remarket wastefully. If your remarketing partners were more efficient you’d have more dollars to pursue new customers or more dollars to return to the bottom line.

Lytics can quantify recency, depth of visit, likelihood to return, likelihood to transact, and other metrics based on predictive data science and combine those scores with discrete factors such as categories browsed, content affinities, and whether or not someone is a subscriber or customer. Using this data alone can enable most of our clients to pay back their investment in Lytics within days or weeks.

### Build an Effective Remarketing Audience

Remarketing to users most likely to transact starts by building an audience that includes the users who show the greatest depth of engagement and have the most recent activity. Advertisers have had success measuring engagement with a semi-arbitrary metrics such as 3 or more pageviews but Lytics has found greater success (up to 60% more efficient) by using [Lytics data science scores](/documentation/product/features/descriptive-and-predictive-modeling/lytics-scores), in this case [quantity](/documentation/product/features/descriptive-and-predictive-modeling/lytics-scores#quantity). Similarly, using [Lytics recency score](/documentation/product/features/descriptive-and-predictive-modeling/lytics-scores#recency) has been more effective than a fixed date range in targeting the most recent users.

Using the [Lytics audience builder](/documentation/product/features/audiences/building-audiences), you can build an audience based on two [custom rules](/product-docs/audiences/building-audiences-custom-rules). The goal is to produce an audience that represents the top 10% of your total audience. First, add a custom rule based on **score\\\_quantity**, setting the value that includes the top \\~15% of your total audience. Second, add a custom rule based on **score\\\_recency**, setting a value that leaves \\~10% of your total audience. You should play with these numbers to find the audience that makes the most sense for your campaign. A higher quantity score will produce an audience of users who are more deeply engaged while a higher recency score will target users who have been active more recently.

![remarketing-audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am729d93c3780c79b5/7720f6106767629f59e5e16e/img-0235.png)

Finally, if you’re really looking to get the extra mile, you can avoid spending on remarketing to users that you can already reach through other channels such as email. Consider removing users for whom you have an email address. To filter users with known email addresses, add a [existing audience rule](/documentation/product/features/audiences/building-audiences-existing-audiences) based on the **Email Capture Status: Known Email** characteristic and toggle **Excluded**.

![remarketing-audience-filtered](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am13adf79e9163173a/f295008907e8c0458abb4f15/img-0236.png)

### Export Remarketing Audience to Ad Networks

Your remarketing audience can be exported to [Facebook](/docs/lytics/meta), [Google Ads](/documentation/product/integrations/google-adwords), or other ad networks for use in your advertising campaign.
