---
title: "Create an A/B Test Experience"
description: "Create A/B Test experiences in Personalize to deliver personalized content that boosts engagement and conversions."
url: /personalize/create-ab-test-experience
---

# Create an A/B Test Experience

## Create an A/B Test Experience

An A/B test experience is a randomized experiment that lets you present two or more content variants of a web page or an app and display them to different sets of users at the same time to verify the effectiveness of these variants.

In Contentstack Personalize, A/B Testing empowers you to make data-driven decisions and optimize your content strategy by experimenting with different content variations. By creating and comparing these variations, you can:

-   Identifying Effective Content
-   Optimizing for Conversions
-   Personalizing Experiences
-   Reducing Bounce Rates
-   Improving Customer Satisfaction

**When to use A/B Test experiences in Contentstack Personalize?**

-   Comparing Content Variations
-   Data-Driven Decision Making
-   Optimizing for Conversions
-   Experimentation and Iteration
-   Technical Expertise and Resources
-   Contentstack's A/B Testing Capabilities

By carefully considering these factors, you can determine whether A/B testing is the right fit for your optimization strategy and leverage it to drive better results.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can create A/B Test experiences.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    
-   [Audience created](/docs/personalize/create-audience) in your Personalize project
-   [Event created](/docs/personalize/create-event/) in your Personalize project

## What You Will Learn

-   How to create an A/B Test Experience in a Personalize project.
    
-   How to choose a variant distribution model and add variants.
    
-   How to add metrics and target audiences, then activate the experience.
    

## Steps for Execution

To create an A/B Test Experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create a A/B Test Experience.
3.  On the **Experiences** page, click the **\+ New Experience** button.
4.  In the **Select Experience Type** modal, click the **A/B Test** experience type.![Select Experience Type modal with A/B Test option](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-Ta63EI7SCkbz4uazyL5IMkzIpmEnis6MlqdRqCuBks-NL0ODY94tGT0HM-mGoZh6WDi4KdaKGcGQB3j4uepJA2JZaJF4TLVUFhM88_M01-W3C395FT6ZDQrY4PjpBvMcRLSudiHv9sGL7LIYorn8FEe1?key=dDaeMy9JHUzH107PmzBkWw)
5.  On the experience draft page, in the **Overview** tab, provide a suitable **Name** and an optional **Description** for the experience. In the **Tags** field, click inside the input area and type a tag to categorize this experience, for example, env:productionor section:homepage. Press **Enter** or **comma** to confirm each tag as a pill. For more information on experience tags, see the [Experience Tags](/docs/personalize/experience-tags) documentation. Once done, click the **Save General Details** button.  
    ![Experience Overview tab with Name, Description, and Tags](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am96ee07dc5e8f5332/6bb9fc8831e68cce16b35ddd/Expereince_Overview_segmented_experience.png?locale=en-us)
6.  Click the **Configuration** tab.
7.  **Under the Variants** section,
    
    1.  **Variant Distribution:** Variant Distribution in A/B testing is the process of determining how traffic is to be divided between the different variants of your content. You can choose from the following distribution options:
        
        1.  **Equally split:** Distributes traffic evenly across all variants. Use this option when you want a controlled and unbiased comparison, validate a hypothesis, or ensure that each variant receives the same audience size.
        2.  **Custom:** Allows you to manually assign traffic percentages to each variant, letting you favor one variant over another.
        3.  **Multi-Armed Bandit:** Automatically optimizes traffic distribution across variants based on real-time conversion performance. Use this option when your primary goal is to maximize conversions while the test is running and you are comfortable with traffic distribution changing dynamically.![Variant Distribution options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt712406f070a89223/696484c2ced4ad0008b40acb/image7.png)  
            By default, Variant Distribution is set to **Equally split**.
        
        <table><tbody><tr><td style="text-align: center;"><strong>Distribution Option</strong></td><td style="text-align: center;"><strong>Description</strong></td><td style="text-align: center;"><strong>When to Use it</strong></td></tr><tr><td style="text-align: center;">Equally split</td><td style="text-align: center;">Distributes traffic evenly across all variants for the entire duration of the test.</td><td style="text-align: center;">Use when you want a controlled and unbiased comparison between variants, validate a hypothesis, or ensure that each variant receives the same audience size.</td></tr><tr><td style="text-align: center;">Custom</td><td style="text-align: center;">Allows you to manually assign fixed traffic percentages to each variant.</td><td style="text-align: center;">Use when you need precise control over traffic exposure, such as soft launches, phased rollouts, or limiting risk for new or experimental variants.</td></tr><tr><td style="text-align: center;">Multi-Armed Bandit</td><td style="text-align: center;">Automatically adjusts traffic distribution over time based on real-time conversion performance.</td><td style="text-align: center;">Use when your primary goal is to maximize conversions during the test and you are comfortable with dynamic traffic allocation.</td></tr></tbody></table>
        
        **Multi-Armed Bandit Behavior:**
        
        -   Traffic is initially distributed equally across all variants.
        -   You cannot manually edit traffic percentages.
        -   Traffic allocation is adjusted automatically over time as performance data is collected.
        -   Traffic redistribution begins only after the experience reaches **either** of the following thresholds across all variants:
            
            -   At least **1,000 total impressions**, or
            -   At least **30 total conversions**.
            
            Once one of these thresholds is met, traffic redistribution occurs **every minute**, as long as the system continues to receive impression and conversion events.
            
            To ensure continued learning, every Multi-Armed Bandit test reserves a **minimum exploratory traffic share of 1%**, which is split equally across all variants. Until the threshold is met, all variants continue to receive equal traffic.
            
    2.  After selecting the variant distribution, you can create variants for the A/B Test. Variants are alternative versions ([CMS Entry Variants](/docs/headless-cms/about-entry-variants)) of content or experiences created for testing against each other. To create variants for your experience, click the **\+ Add Variant** button.
        1.  **Short UID:** This unique ID is automatically assigned to each variant and used in [Personalize API requests](/docs/developers/sdks/personalize-edge-sdk/javascript/reference).
        2.  **Variant Name:** Provide a meaningful name for the variant. This name will be reflected in the Entry Editor for the [Entry Variants](/docs/headless-cms/about-entry-variants) in the CMS.
            
            **Note:** Each A/B Test experience must contain at least **2 variants**. Each experience is reflected in the CMS as Variant Group and you can [create Entry Variants](/docs/headless-cms/create-an-entry-variant) for each of these variants via the Entry Editor.
            
    3.  **Traffic Distribution in %:**
        1.  For **Equally split**, the distribution percentage is calculated automatically.  
            ![Equally split traffic distribution percentages](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcca94b5d6929b669/696486213986ad0008142663/image5.png)
        2.  For **Custom**, you can specify the percentage as per your preference.  
            ![Custom traffic distribution percentages](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36726b77f774b973/6964863af4f25c00087a9142/image4.png)
        3.  For **Multi-Armed Bandit**, traffic percentages are managed automatically and cannot be edited manually.  
            ![Multi-Armed Bandit traffic distribution](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2eaf8dd47cb2fc15/69648647420bc50008aa1c4c/image2.png)
    
    Similarly, you can add multiple variants by clicking the **\+ Add Variant** button.
    
8.  Under the **Metrics** section,
    1.  Click **\+ Add Event** and select the preferred event from the drop-down list.![Add Event to Metrics section](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHx_aJrKBTSLYiDv6GTUQMVZscADf-OpmXPF21vcDB6inzMmWyFetKPE97uv8M0g1vmrPLGfQd_PYoJEHcWq35tJlkc1X1m3UnO483OMeR0JN8Pr4SkQLPtE_VNXLfn_OnxoAadlcsQa6mn5sAwI4iSyg?key=dDaeMy9JHUzH107PmzBkWw)You can add multiple events to an A/B Test experience as Metrics. Use the Personalize Edge SDK to trigger the events for your experiences using the triggerEvent method.
        
        **Note:** The first event that you add becomes the ‘primary’ metric. The 'primary' metric determines the winning variants, while secondary metrics offer additional insights. When any of the listed events occur, metrics calculate an increase in unique conversions per visitor, which you can view in the experience **Analytics** tab.
        
9.  Under the **Target Group** section,
    1.  **Target Group:** By default, **Everyone** is part of the A/B test, you can target the A/B test to a specific set of audiences (**Selective**). Here, we are using the **Selective** split option for the target group.
    2.  **Condition:** You can set the rule to satisfy either all audiences (**Match All**) or at least one of them (**Match Any**) by selecting from the dropdown.
    3.  **Audiences:** Click the **Audiences** field. From the **Select Audience(s)** modal, select one or multiple audiences, then click the **Apply Selected Audiences** button to set the audience criteria for the target group.![Target Group audience selection](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeP7rBa9quSyo8VoPGS6i0-agP-etUvlq1P2kMD0s2yHv6Yb27N90GxCY7MLLY6AKB_cYxLOCfSdpGt6DfaaYSi15DuUpFsrMu7bJoBnTzSghtEmHZxNjPU2rtt7NxeLNDZjY3G0pMknXFHSds07ylegTxQ?key=dDaeMy9JHUzH107PmzBkWw)
    4.  Once you have defined your variant, click the **Save Draft** button.
10.  Now click the **Activate Draft** button.
11.  Click **Activate** in the Activate Draft Modal to activate the experience on your site for your visitors.
     
     **Note:** Ensure you [create Entry Variants](/docs/headless-cms/create-an-entry-variant) in the CMS before activating an experience for a seamless personalized campaign for your visitors.
     

This creates a new A/B Test Experience in your Personalize project. For managing experience versions (activated/draft/paused), please refer to [this guide](/docs/personalize/experience-versioning).

**Additional Resource:** To achieve optimal personalization for your users, prioritize experiences and variants independently. Use experience priority when multiple experiences customize the same element on a digital property, and apply variant priority when audience conditions match multiple variants. For more details, please refer to [this guide](/docs/personalize/prioritize-experiences).

After activating your A/B Test experience, the Analytics are updated within a few minutes when your visitors start accessing and interacting with your content.

**Note:** To design, preview, and analyze A/B Test experiences effectively, make sure [Live Preview](/docs/headless-cms/about-live-preview) and [Visual Builder](/docs/headless-cms/about-visual-editor) are enabled and set up on your stack. **Live Preview** provides real-time visibility into how content appears across variants. **Visual Builder** allows editors to manage variant-specific content and preview multiple variants simultaneously based on different audience selections without developer involvement.

**Note:**

-   Users with Owner and Member access to a Personalize project can create new experiences, and edit/delete existing experiences.
-   The default number of Experiences allowed per project is **100**. To increase this limit, please contact our [support team](mailto:support@contact.com). By Contentstack permissions, they can be extended till **1000** per project.

**Note:** After the A/B test concludes and a winner is declared based on performance metrics, traditional cleanup requires manual entry updates and variant deletion. To streamline this, the [Clearwinner](/docs/marketplace/clear-winner) app can be used to review and merge winning content into your baseline entries automatically.

## Related Resource

-   [Personalize Management API: Create an Experience](/docs/developers/apis/personalize-management-api/experiences#create-an-experience)
