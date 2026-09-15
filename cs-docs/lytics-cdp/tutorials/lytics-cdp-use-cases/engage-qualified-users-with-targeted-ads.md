---
title: "Engage Qualified Users with Targeted Ads"
description: "Learn how to build Lytics audiences—like Anonymous Deeply Engaged, Known High LTV, and Known Leads—and activate them in Facebook and Google Ads to retarget qualified anonymous and known users."
url: /lytics/engage-qualified-users-with-targeted-ads
uid: bltf41971ef516bb299
---

# Engage Qualified Users with Targeted Ads

## Engage Qualified Users with Targeted Ads

Using Lytics audiences you can identify anonymous traffic with higher potential to engage and/or convert. A powerful marketing use case is to retarget these users with Facebook and Google Ads, driving them to further interact with your brand.

## Leveraging user data

This use case will provide a few suggested audience definitions to support your retargeting effort. These audiences will leverage the following building blocks:

-   Lytics preconfigured audiences such as [characteristics](https://docs.lytics.com/understanding/faq#what-are-characteristics) and [behavioral audiences](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/behavioral-audiences).
-   Commerce user fields such as **Lifetime Value (LTV)** or **Lead Status**.
-   Lytics data science scores such as [frequency](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#frequency), [recency](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#recency), and [intensity](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#intensity).

**Note:** The Lytics StartSmart data schema supports a standard set of commerce fields including the two used in this use case. If you aren't using the StartSmart schema these fields may also be mapped to your account, for example if you've imported data from [Salesforce](/docs/lytics/salesforce) you should have access to the field **Salesforce: Most Recent Lead Status**.

## Building your target audiences

Using the building blocks mentioned above you can build one or more of these suggested audience to use in ad campaigns.

### Anonymous Deeply Engaged

This audience combines the characteristic **Email Capture Status: Unknown email** with the behavioral audience **Lytics Deeply Engaged** using the “AND” rule. The deeply engaged characteristic uses the [intensity](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#intensity) score, and is a great way to qualify anonymous traffic for targeting.

![anonymous-deeply-engaged](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6725062043c8d7a4/d98f735e6ddd0b607f744bd3/img-0074.png)

### Known High LTV

Combine the **Email Capture Status: Known email** with the **User's Lifetime Value** field using the "AND" rule to create a target audience of just your best customers. This audience would be a great source audience to generate a lookalike audience.

![known-high-ltv](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9dbb598005a05460/6711c1ee637a1a5957d7ffe8/img-0075.png)

### Known Leads

For B2B marketing you can substitute LTV with a field like **Lead Status** to build an audience of open leads for retargeting or for use in a lookalike audience.

![known-leads](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am27247982f8d9883e/79b288f3f224f124a21d8a4c/img-0076.png)

### Refining your audiences with user fields

Want to further narrow your audience to only the most qualified users? Try experimenting with additional rules using the [frequency score](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#frequency) to bring in more consistent users, or the [recency score](https://docs.lytics.com/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#recency) to target users who recently interacted with your brand. These qualifiers can help you create a further refined audience of users who are more likely to convert.

## Activating your audience

Once you've built your audience(s) you can export them to your ads platform for use using Lytics' build in integrations.

### Retargeting anonymous users

Anonymous users can be advertised to directly in Facebook. You can access the **Anonymous Deeply Engaged** you built in Facebook with the [Create Web Traffic Audiences workflow](/docs/lytics/meta). You can also target anonymous users in Google platforms such as Adwords through our [JavaScript integration](https://docs.lytics.com/understanding/integrations/google/google-analytics#connect-google-analytics-to-adwords) with Google Analytics.

### Reach new, qualified users with Lookalike audiences

Known users can be targeted across both Facebook and Google, as well as drive lookalike audiences. You can export your **Known High LTV** and **Known Leads** audiences via [Facebook custom audiences](/docs/lytics/meta) and [Google Adwords remarketing lists](https://docs.lytics.com/understanding/integrations/google-adwords).

To power lookalike audiences which will find users similar to your best customers, read more on creating a [lookalike audience in Facebook](https://docs.lytics.com/use-cases/using-lytics-with-facebook-lookalike-audiences), or using [Google Customer Match](https://support.google.com/google-ads/answer/6379332?hl=en).
