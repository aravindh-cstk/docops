---
title: "Deliver Targeted Content"
description: "Learn how to use Lytics' content affinity engine to build a content-affinity audience, create content collections, and set up a Recommend Content experience that surfaces personalized content to each visitor."
url: /lytics/deliver-targeted-content
uid: blt6aeed3afae33c981
---

# Deliver Targeted Content

## Deliver Targeted Content

Lytics makes it possible to recommend content to a user based on their affinity for certain types of content, linking them directly to the content they value, increasing engagement. Lytics [content affinity engine](/docs/lytics/content-affinity-engine-introduction) automatically [scans and categorizes the content](/docs/lytics/topic-extraction) that is associated with each page on your site producing a [topic taxonomy](/docs/lytics/topic-taxonomy). Users who visit each page are then mapped against that semantic understanding of your site’s content producing a [user affinity score](https://docs.lytics.com/documentation/product/features/content-affinity-engine/user-level-topic-affinities) for each content topic within your site.

You can create a **Recommend Content** Experience by following these [steps](https://docs.lytics.com/documentation/product/features/experiences/experience-editor/choose-content) but the keys to creating an effective recommended content campaign are building an audience and content collection.

## Build a Content Affinity Audience

You can use the [**Content Affinity**](https://docs.lytics.com/documentation/product/features/audiences/building-audiences-content-affinity) tab of the audience builder to build an audience of users who show interest in a particular group of Topics (what Lytics calls an Affinity). Then, that audience can be used to target users with the desired Affinity in a personalized Experience.

1.  From your [Lytics dashboard](https://app.lytics.com/dashboard) select **Audience**.
2.  Click **Create New Audience**.
3.  Select the **Content Affinity** tab.
4.  Select the Affinity you would like to target.
5.  **Any Affinity** is selected by default. You can adjust the affinity score range to refine the users who will be targeted or select one of the predefined ranges.
6.  In the **Name your audience...** field, give your audience a [descriptive name](https://docs.lytics.com/documentation/product/features/audiences/managing-audiences#naming-your-audiences).
7.  Select **Enable API Access**.
8.  In the **ID** field, enter an audience ID.
9.  Click **Save**.

![content-affinity-audience-builder-data-science](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a9fe98286642a33/30bc00c1c9b181d46c7c6c07/img-0068.png)  
_Audience with any affinity for articles about "data science"_

This audience can now be used in a **Recommend Content** (or any other) campaign to target users who have the desired level of interest for your chosen Affinity. You can combine [multiple rules and rulesets](https://docs.lytics.com/documentation/product/features/audiences/building-audiences-multiple-rules-and-rulesets) to create highly refined audiences. You are also not limited to audiences based on content affinity, see the [Audiences](/docs/lytics/audiences) section for other options.

## Content Collections

Content collections give you the ability to group content together that you can then recommend in your campaigns. Collections can be a group of articles related by Affinities, Topics, recently published, author, hand picked by you, or a combination of any of these criteria. In addition, these collections can be dynamic. Content in a dynamic collection will be added to or removed automatically when they match or fail to match your criteria. For more information, see [Content Collections](/docs/lytics/content-collections).

![targeted-content-topic-select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amecc9f63de9a5cdff/d3b9ca9edf9aade20283c3c9/img-0069.png)  
_Content collection grouping article related to "data science" on learn.lytics.com._

## Build Your Campaign

Next, you’ll need to navigate to the Experiences tab and pick the "Recommend Content" tactic for Lytics. The first step will be to choose the content collection you want to feature:  
![recommend-content-select-collection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am52bb34bd2a253c34/5b0c8980a72d086462ed8cef/img-0070.png)

Next, select whether you want this to be based on a user's interests ("Highest Affinity"), content or product freshness ("Freshness"), or what a user has engaged with most recently ("Last Interaction"):  
![Screen Shot 2021-06-07 at 11.23.57 AM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am36d46361c8654fe5/828539f58177b2635eed1b2f/img-0071.png)

Don’t forget to give your Experience a name. See our [Experience editor](https://docs.lytics.com/documentation/product/features/experiences/experience-editor/choose-content) documentation for step-by-step instructions.
