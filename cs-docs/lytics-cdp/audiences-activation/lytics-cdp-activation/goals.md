---
title: "Goals"
description: "Goals"
url: /lytics/goals
---

# Goals

## Goals

## Overview

Lytics defines **Goals** as high-level objectives that measure marketing success, such as improving conversion rates, decreasing churn, and increasing customer lifetime value (LTV).

The Lytics Goals Canvas provides a framework for moving your customers through their lifecycle and driving them towards your brand’s top-level marketing goals. This approach allows you as a marketer to focus on defining your Goal and creating relevant Experiences that allow customers to take any path to get there.

**The Lytics Goals Canvas is oriented around a few concepts: Goals, Experiences, and Stages.**

-   **Goals:** Goals allow you to influence and measure the progress of your customers toward your business goals. Goals can include Experiences and Stages that you define to drive customers towards specific conversion events.
-   **Experiences:** Experiences are individual marketing tactics. Each Experience has its own report view, allowing you to track reach, conversions (such as clicks), and conversion rates.
-   **Stages:** Stages are the phases or steps that guide customers towards your Goal. Your audience members will move from one Stage to the next as they qualify for the conversion events applied to each Stage. Stages contain Experiences intended to encourage people to complete the conversion event such as registering their email or making a first purchase.

## Goals

Lytics Goals allow you to guide users through highly personalized experiences that increase customer lifetime value and drive progress towards your primary business goals.

You will use the Lytics Canvas to create, edit, and monitor your Goals. Navigate to **Goals** and click **New Goal** in the top right of your screen to create a new one. ![goals example 0820](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7987497d887bed0/fdf27b085170a9a299239f82/img-0108.png)

### Choose an audience

The first step in configuring a Goal is picking your starting audience. Select this audience by clicking the "Audience" button (blue circle) on the left-hand side of the Lytics Canvas. You can choose an existing audience or you can build a new one by clicking **New audience**.

![Screen Shot 2019-02-01 at 11.04.03 AM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am21f4510fa0e029c5/207b6de8a6be3f84deffebe5/img-0109.png)

Lytics recommends keeping this starting audience as broad as possible, as there will be ample opportunity to add filters and refine your targeting through Stages and Experiences.

You will be able to change this audience at any time, although that may drastically affect target audiences and reporting metrics.

### Stages

Each Stage represents a significant step towards your Goal, as defined by a conversion event. A common conversion event is finding "known users" by collecting email addresses on a newsletter sign-up or registration page.

Stages contain Experiences that give users opportunities to complete conversion events in various channels, such as on your website, through an email newsletter or Facebook ad. A Goal can have one or more Stages, based on the needs of your use case. After defining the first conversion event, you will see an option to **Add a Stage**.

![stage-2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am317dbe16eaee6389/fdbdebf62a312e6ce11cfca3/img-0110.png)

#### Moving through Conversion Events

Users move to the next Stage when they complete the selected conversion event. Goals are always configured so that users move through your Stages from left-to-right as they complete conversion events. Keep in mind that users don't always complete conversion events in the order anticipated, which means they may end up skipping a Stage. If you want to prevent this, you can include additional logic in your conversion event definition.

And remember, users can never be in more than one Stage per Goal at a time.

### Experience Drawer

The Experience drawer contains Experience templates and Experiences that aren't part of a Goal yet. Add any of these to your Goal by dragging them into a Stage. Open the drawer by clicking the icons labeled **Experience template** or **Experience**.

![templates](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amca632657795a8471/952b24186b234f3bfb6b1eb5/img-0111.png)

If you drag an Experience that is activated into your Goal, you will need to pause it before being able to save your Goal. You can do so from the Lytics Canvas by hovering over the Experience card and then clicking the **Pause** button.

![Screenshot from 2019-05-01 14-01-30](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama2a3ce38504136e7/af3a28c6ef4121425076ffaa/img-0112.png)

Once you're ready to reactivate the Experience in the context of the Goal, click **Resume**.

### Prioritizing Goals

![prioritizing-goals-0820](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8e9b951965a66965/8c77d55e5a8a8ebda1d8607d/img-0113.png)

Much like prioritizing Experiences within Stages, you can also prioritize Goals. Since membership is not mutually exclusive (that is, users can be moving towards multiple Goals at a time), it is possible that a user will be eligible for two simultaneous Experiences from two different Goals. When that happens, Lytics will take into account Goal priority when determining which Experience will be delivered. The higher on the Goal list, the higher the priority.

## Stages

Stages are the individual steps that move customers towards your Goal. Users in your overall audience will automatically enter the first Stage. When a user completes the first conversion event, they will move to the second Stage, and so on through the last Stage within your Goal. A user can only be in one Stage at a time.

![stage-2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am317dbe16eaee6389/fdbdebf62a312e6ce11cfca3/img-0110.png)

### Conversion events

Conversion events within Lytics are behavior-based audiences such as purchasers, highly engaged users, known users, etc. These determine which users are eligible for the Experiences within a Stage. When a user fulfills conversion event applied to a Stage, they move to the next Stage until they reach the last conversion event for that Goal.

If users have completed the conversion event applied to a Stage, they **will not** be eligible for any of the Experiences in the Stage. This prevents overlapping targeting such as continuing to show a Facebook ad to a user who has already converted on a particular campaign.

![Screen Shot 2019-02-01 at 11.18.38 AM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am394ce75d46555ba6/4047154a04186133541e5354/img-0114.png)

To assign a conversion event to a Stage, click the “Trophy” icon to open a menu of available conversion events. A red dot next to the “Trophy” icon indicates a Stage that still needs to be assigned a conversion event. A conversion event is required to populate the metrics for a Stage.

#### Stage metrics

Lytics tracks three key metrics to measure Stage performance: **Potential reach**, **Converted**, and **Conversion rate**.

![Stage-metrics](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amea8b87c05a34d75b/55dd0852d2a8dda6999eacf4/img-0115.png) The table below defines these metrics and how often they are updated in the Lytics UI.

| Metric | Definition | Updated |
| --- | --- | --- |
| Potential Reach | Number of users eligible to be targeted in a Stage (source audience). | Every 2 hours |
| Converted | Number of users who have completed the conversion event for a Stage (target audience). | Every 2 hours |
| Conversion Rate | Proportion of users who completed the conversion event, compared to the number of users who were reached. | Every 2 hours |

#### Adding and rearranging Experiences

Experiences can be added to a Stage in several ways. You can add an Experience directly to a Stage by clicking **Add a new Experience** along the bottom of a Stage. You can drag an Experience template into a Stage, which will create an Experience with boilerplate settings to use as a starting point. You can also drag an existing Experience into a Stage, either from another Stage or from the Experience drawer.

**Note:** This will significantly change the audience for that Experience.

#### Prioritizing Experiences

To ensure that your audience receives the right amount of messaging, each user will only be eligible for one Experience per Stage at a time. That means that no matter how many web modals you add to a Stage, your audience members will only see one at a time. Lytics won't just choose one at random though; there is a sophisticated decision engine that determines which Experience will be delivered to the end user. Part of the input into that engine is the order of Experiences within a Stage. The closer to the top of a Stage an Experience is, the more likely it is that it will be delivered to the end user.

## Goal Canvas Audiences

You can think of the Lytics Canvas as an intelligent audience builder. When you create new Stages and add conversion events, you are effectively building new audiences based on the desired flow of users towards achieving your Goal. Unlike drip campaigns or more traditional journey builders, Lytics doesn't require you to build complicated audiences. Keep them simple, and the Lytics Canvas will do the heavy lifting for you.

### Selecting audiences for your Goals

The following tips will assist you when building and selecting audiences for the conversion events and Experiences within your Goals.

#### Building block audiences

When you’re creating audiences to use in a Goal, it’s helpful to think about each audience as a "building block" rather than a complete definition of who you want to be targeting.

Below are examples of good building block audiences:

_All users_ ![all users audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2358a60694bdf2b1/13a57751ce8c1b7d955c94a3/img-0116.png)

_Users who have shared their email address_ ![has email audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amedbd007407c7f250/0e7fb85306d6d366d6ed81e6/img-0117.png)

_Users who have purchased something_ ![current customer audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am50ffb5e1472d0fbd/92a8ad5a1c0bd427be2b7af5/img-0118.png)

#### Excluding users

Building block audiences work best when they don’t exclude anyone. It can be tempting to try to exclude users from a building block audience — for example, excluding “Known Users” from “All” in order to target only anonymous users — but the Lytics Canvas will do this for you automatically if one of your future conversion events is the audience "Known Users".

**NOTE:** If you do end up doing this yourself, you can create a “dead-end” path, where users are unable to progress due to the definition of the automatically generated audiences, which are explained in more detail below.

**There is one important exception to this rule.** If you want to _suppress_ a subset of your entire audience from your Goal, you can exclude them from your "overall audience". This will work so long as the exclusion rule is _not_ related to the downstream conversion events. An “overall audience” is the first audience you select on the Lytics Canvas, which is represented by the left-most blue circle as shown below. ![goals example 0820](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7987497d887bed0/fdf27b085170a9a299239f82/img-0108.png)

For example, if you used the audience below as your overall audience, you would exclude "Realtors" from the entire Goal. This will not create a "dead-end" if none of the subsequent Stages have conversion events dependent on the "Realtors" criteria.

_All users, excluding Realtors_ ![exluding users example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am93dd8847cefc431e/e511da5aa985577ced67643b/img-0119.png)

#### Filter audiences

If you want to target with more granularity than a Stage audience allows, you can add a filter on individual Experiences within a Stage.

![filter audience stage](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5266752b97e9906d/5cc805dfc8bf10ed59a909d5/img-0120.png)

This is a great point to target users based on behavior, such as engagement level. The audience you choose here will be added to your Stage audience with an "AND" statement.

#### Experience conversions

A common pattern may be that you want any users who converted on the Experiences in your Stage to enter the next Stage. Learn how to target users based on Experience interactions to build a conversion event like this.

### How audiences are used in the Canvas

Now that you've learned how to select and build audiences, take a deeper look into how the Lytics Canvas uses these audiences to help users flow towards your Goal.

#### Automatically generated audiences

The Lytics Canvas automatically generates audiences based on your selected conversion events. For example, let's say you want to create a the first Stage to target users who haven’t shared their email address, and the second Stage will target known users who haven’t purchased yet.

Even though you haven’t explicitly created an audience for users who haven’t shared their email, or users who haven’t purchased, Lytics will create these audiences for you. This example would look as follows in the UI: ![audience building journey](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambab3006c0b9d5696/858eaa63b542afac588eea9d/img-0121.png)

The following graphic shows how the Lytics Canvas takes your simple building blocks and creates more refined audiences. [See the full size diagram](https://images.ctfassets.net/p3327y1wyjsx/42goHRPNvQnqsKtw9V156F/aa7ae386516ddd3d6ecdca173a3736d8/audience-building-strategies_diagram.png). ![audience-building-strategies diagram](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am370878057f59edf6/72ce04e9f7dc8081f3558491/img-0122.png)

Remember, if you exclude converted users on a building block audience, it can cause problems and prevent users from moving between Stages. Let the Lytics Canvas do the work for you!

#### Mutually exclusivity

Stage audiences are **mutually exclusive**, meaning a user can only be in one Stage at a time. This is a result of the automatic audience building done by the Lytics Canvas.

If a user in “Unknown Users” shares their email and now qualifies for “Known users” they will automatically move into that Stage without any manual intervention.

## Goal Intelligence

The Goal Intelligence Report provides a holistic view of how your existing campaigns are contributing towards the marketing goal you selected during the onboarding process. This report will help you answer questions about how effectively your marketing campaigns are driving conversions, how many engaged customers you have, and whether you are producing the right content for your users.

The Goal Intelligence Report contains modules that focus on answering a specific marketing question. Each module is described below, along with definitions for the associated metrics and how often they are updated.

![goal-intelligence-report-0920](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am000309a3fa387f33/e9c823b40fd78fc27622c55a/img-0123.png)

### Goal Progress

The Goal Progres module contains three top-level metrics for the campaigns you’ve imported into Lytics. Use this summary to measure how your campaigns are working together to achieve your goal.

| Name | Description | Updated |
| --- | --- | --- |
| Users Have Not Completed Goal | Number of users who are currently eligible to convert on your goal. | Every 2 hours |
| Users Have Completed Goal | Number of users who have converted on your goal. | Every 2 hours |
| Completion Rate | Percentage equal to (number of converted users / number of all users who have ever been eligible for converting on the goal). | Every 2 hours |

### Experience Performance

The Experience Performance module gives a summary view of all the campaigns you imported into Lytics including the conversion rate of each campaign, and how much this conversion is impacting your marketing goal.

Use these metrics to prompt discovery into your campaign performance. Select an Experience from the list to view its specific Intelligence Report to surface additional actions and recommendations.

| Name | Description | Updated |
| --- | --- | --- |
| Conversion Rate | Percentage equal to (number of users who have converted on the Experience / number of all users who have ever been eligible for receiving the Experience). | Every 2 hours |
| Goal Attribution | Percentage equal to (attributed conversions for an Experience / number of users that engaged with the Experience) | Weekly |

### Connected Customers

The Connected Customers module shows what percentage of your users are actively engaged on multiple channels. Lytics defines Connected Customers as users who are identified on two or more channels, and who are consistently engaged with your brand as measured by the Lytics Momentum Score.

Connected Customers are valuable to your business. Use this KPI to create a stronger base of users who are more likely to convert on current and future campaigns.

| Name | Description | Updated |
| --- | --- | --- |
| Percentage for Account | Percentage equal to (the number of current Connected Customers / the number of all users in your account). | Every 2 hours |
| Connected Customers Graph | Size of the Connected Customer audience over the past week. | Every 2 hours |

### Content Classification

The Content Classification module shows a list of the topics, documents, and relevance scores for the content used across your connected channels. Lytics automatically analyzes the topics within your website content and determines user-level affinities for those topics, which can help you decide what content to produce.

Use these metrics to ensure you are creating the right content to engage your target audience.

| Name | Description | Updated |
| --- | --- | --- |
| Topic Relevance | Percentage of the audience that has an affinity for this topic. | Weekly |
| Documents | Number of documents present in the account for the topic. | Every 12 hours |

### Content Recommendation

The Content Recommendation module surfaces content that is likely to resonate with your users based on their past behavior. Lytics analyzes the content on your website through the Lytics JavaScript Tag. The relevancy percentage is calculated by determining the total number of users with various content affinities and comparing this to the total number of users within the audience that visited your site.

Create and deliver content that aligns with your users’ interests to drive engagement and conversions.

| Name | Description | Updated |
| --- | --- | --- |
| Topic Relevance | Percentage of the audience that has an affinity for this topic. | Weekly |
| Content Recommendations | Suggestions for content to serve to users in the target audience for your Experience. | Weekly |

## Connected Customers

Connected Customers represent the number of active users who are engaged with your brand across multiple channels. This is a Lytics proprietary KPI that offers a quick and comprehensive understanding of the performance of your account’s identity resolution strategy.

Lytics defines a Connected Customer as a user who has:

-   Activity data collected from 2 or more channels, including web, email, or mobile.
-   A positive and increasing Momentum Score, which represents the rate at which users are interacting with your brand.

You can find the Connected Customer KPI in the Goal Intelligence Report. These metrics come from a Lytics audience that is automatically generated under-the-hood using the criteria described above.

![lytics-view-connected-customer-kpi](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc3d3b68bfef3e858/ef45d892af80dab5881e4264/img-0124.png)

### Why is this KPI important?

Connected Customers are valuable to your business. This KPI helps you understand how many Connected Customers you have and the impact of your marketing programs on user engagement. Lytics helps you gain more Connected Customers by refining your audience targeting and messaging strategies to improve engagement and ultimately increase the ROI for your marketing efforts.

### What can I do with it?

Track your Connected Customers for a pulse on engagement levels across your active campaigns. Use this KPI to create a stronger base of users who are more likely to convert on current and future campaigns. You can also activate this Connected Customer audience in your downstream marketing tools such as Facebook, Salesforce Marketing Cloud, and more.
