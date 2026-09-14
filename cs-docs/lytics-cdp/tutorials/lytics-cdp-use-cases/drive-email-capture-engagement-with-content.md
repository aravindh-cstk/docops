---
title: "Drive Email Capture & Engagement with Content"
description: "Content recommendations are a powerful, direct method for driving engagement of anonymous users with the goal of capturing their email address. Using…"
url: /lytics/drive-email-capture-engagement-with-content
---

# Drive Email Capture & Engagement with Content

## Drive Email Capture & Engagement with Content

Content recommendations are a powerful, direct method for driving engagement of anonymous users with the goal of capturing their email address. Using Lytics, you can create audiences to present personalized ad sets through marketing platforms like Google Ads and Facebook. You can take the personalization one step further. Lytics can power inline content that serve content based on each user’s personal audience membership and content affinity.

### Leveraging user behavior

Lytics uses [data science scores](/docs/lytics/behavioral-scores-1) to move users into preconfigured audiences based on their behavior. This use case relies on a user’s [frequency](/docs/lytics/behavioral-scores-1#frequency), [recency](/docs/lytics/behavioral-scores-1#recency), and [intensity](/docs/lytics/behavioral-scores-1#intensity) scores to identify those who are highly engaged with your content generally and, through further refining, individual content items, topics, or collections.

### Building your target audience

Users can be members of preconfigured audiences determined by a combination of\\_\\_[characteristics](/docs/lytics/audiences#audience-characteristics) .

#### Anonymous Deeply Engaged

For this use case we want to combine the **characteristic** **Email Capture Status: Unknown email** with the **behavioral audience** **Lytics Deeply Engaged** using the “AND” rule. This new audience will target users without email addresses, i.e. anonymous users, who are deeply engaged with your content. What content that user is engaged with will vary and each user can receive different ads or emails based off the content they engage with the most.

![image](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2b45934761364894/09cccd912d7f2d98d1100d79/53205832-4cdedb80-35e4-11e9-980e-fac768817fb9.png)

##### Using fields to refine your audience

While all the users in your **Anonymous Deeply Engaged** audience are engaged with your content different behaviors have led to this outcome. Some may have consistently engaged over a long time period while others may have consumed content over a relatively short period of time. Using the [frequency](/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#frequency) score, you could present message or recommend content specific to longtime anonymous, engaged users in effort to convert them to know users. Similarly, the [recency](/understanding/product-docs/descriptive-and-predictive-modeling/lytics-scores#recency) score can be used to target new, but engaged users with a specific experience to convert them.

### Activating Your Audience

Your **Anonymous Deeply Engaged** audience is a great target audience for site personalizations, content recommendations, and well-timed email capture forms.

#### Delivering targeted content

To deliver the content most relevant to a user’s interest you can build additional audiences based on **Anonymous Deeply Engaged** with added content affinity filters. See [Building Audiences: Content Affinity](/docs/lytics/audiences#building-audiences-content-affinity) to learn how to add content affinity rules to new and existing audiences.

#### Driving email capture

Your **Anonymous Deeply Engaged** audience is an excellent target to capture email address and convert users to a known status. See our build [Collect Leads Campaign\\](/docs/lytics/collect-leads-campaign) documentation to learn how.

#### Individualized content recommendations

Lytics offers a Content API that provides recommendations based on user content affinity. Our Developer Academy article [Inline Content Recommendations](/docs/lytics/inline-content-recommendations) and our [Content API documentation](https://docs.lytics.com/reference/content-recommendation) provide guidance on delivering content recommendations programmatically. These documents are targeted for a more technical audience, so please contact [Lytics support](https://support.lytics.com) if you need some guidance.
