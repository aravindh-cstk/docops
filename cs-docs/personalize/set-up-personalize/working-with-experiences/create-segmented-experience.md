---
title: "Create a Segmented Experience"
description: "Learn how to create segmented experiences to deliver personalized content to specific audiences."
url: /personalize/create-segmented-experience
---

# Create a Segmented Experience

## Create a Segmented Experience

In Contentstack Personalize, Segmented Experiences empower you to create highly targeted, individualized content experiences for distinct audience segments. By dynamically displaying personalized content variations based on demographics, referral sources, behaviors, and other critical attributes, you can:

-   Maximize Engagement
-   Boost Conversions
-   Enhance Customer Satisfaction

**When to use Segmented Experience in Contentstack Personalize?**

-   Diverse Audience with Varied Needs
-   High Level of Content Customization
-   Focus on Engagement and Conversion Metrics
-   Technical Expertise and Resources
-   Contentstack's Segmentation and Analytics Capabilities

By carefully considering these factors, you can determine whether Segmented Experiences are the right fit for your personalization strategy and leverage them to maximize the impact of your campaigns.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
    
    **Note:** Users with **Owner** and **Member** access to a Personalize project can create a Segmented Experience.
    
-   Access to Personalize project
    
    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.
    
-   [Audience created](/docs/personalize/create-audience) in your Personalize project

**Note:** To preview how your experience appears for different audiences and manage its content in real time, or to control variants visually, make sure [Live Preview](/docs/headless-cms/about-live-preview) and [Visual Builder](/docs/content-managers/visual-editor/about-visual-editor) are enabled and set up on your stack.

## What You Will Learn

-   How to create a Segmented Experience in a Personalize project.
    
-   How to add variants and set audience conditions for an experience.
    
-   How to save a draft and activate the experience.
    

## Steps for Execution

To create a Segmented Experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create a Segmented Experience.
3.  On the **Experiences** page, click the **\+ New Experience** button.
4.  In the **Select Experience Type** modal, click the **Segmented** experience type.![Select Experience Type modal with Segmented option](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcEAcWcIPprIMs1uBBB6Wj8TDq4DxBlkXJ1peQ-bzsrju5UzVZm2LDluSnPwYaGwJObjg2HZogqn1QdNt4yVFHrspQi1OWx-mlTmZ24-wVfgl0iyHRVCjAXB4b4QL4covcaQmTRRxPjxFaZ786mffu-lts?key=eVzPWtXYIm1CLs8J22GD7Q)
5.  On the experience draft page, in the **Overview** tab, provide a suitable **Name** and an optional **Description** for the experience. In the **Tags** field, click inside the input area and type a tag to categorize this experience, for example, env:productionor section:homepage. Press **Enter** or **comma** to confirm each tag as a pill. For more information on experience tags, see the [Experience Tags](/docs/personalize/experience-tags) documentation. Once done, click the **Save General Details** button.  
    ![Expereince_Overview_seg_experience.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am88445dc1c3d87440/23480e98fef92385edd9379a/Expereince_Overview_A_B_experience.png?locale=en-us)
6.  Click the **Configuration** tab.
7.  To create variants for your experience, click the **\+ Add Variant** button. **Variants** are alternative versions ([CMS Entry Variants](/docs/headless-cms/about-entry-variants)) of content or experiences designed to cater to specific audiences. You need to provide a combination of conditions and audiences as follows:
    1.  **Short UID:** This unique ID is automatically assigned to each variant and used in [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk) and [Personalize API](/docs/developers/apis/personalize-management-api) requests.
    2.  **Variant Name:** Provide a meaningful name for the variant. This name will be reflected in the Entry Editor for the Entry Variants in the CMS.
        
        **Note:** Each Segmented Experience must contain at least **1** variant. Each experience is reflected in the CMS as the Variant Group with the same experience name and you can create Entry Variants for each of these variants via the Entry Editor.
        
    3.  **Condition:** You can set the rule to satisfy either all audiences (**Match All**) or at least one of them (**Match Any**) by selecting from the dropdown.
    4.  **Audiences:** Click inside the **Audiences** field to open the **Select Audience(s)** modal and select one or more (if available) audiences, and click the **Apply Selected Audiences** button to set the audience criteria for the experience.![Variant configuration with condition and audiences](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt321afb98e59cce36/69c3e76016a1f880cf1c6844/Variants.png)Similarly, you can add multiple variants by clicking the **\+ Add Variant** button.![Adding multiple variants to an experience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09b9c41c65d3def7/69c3e7515a7cd80f657a900f/Add_Variant.gif)
        
        **Note:** If your audience condition matches multiple variants and you wish to prioritize a specific variant, simply drag and drop the variants to reorder them. The variant at the top of the list will take priority for personalization when the experience is activated.
        
    5.  **Save Draft:** Once you have defined your variant, click the **Save Draft** button.
        
        **Note:** Personalize adds metadata to the Variant Group, including the Personalize project UID, experience UID, and experience short UID.
        
8.  If you want to activate the draft now, click the **Activate Draft** button, and click **Activate**. This will activate the experience on your site for your visitors.
    
    **Note:** Ensure you [create Entry Variants](/docs/headless-cms/create-an-entry-variant) in the CMS before activating an experience for a seamless personalized campaign for your visitors.
    

This creates a new Segmented Experience in your Personalize project. For managing experience versions (activated/draft/paused), please refer to [this guide](/docs/personalize/experience-versioning).

**Tip:** To achieve optimal personalization for your users, prioritize experiences and variants independently. Use experience priority when multiple experiences customize the same element on a digital property, and apply variant priority when audience conditions match multiple variants. For more details, please refer to [this guide](/docs/personalize/prioritize-experiences).

After activating your Segmented Experience, the Analytics are updated within a few minutes when your visitors start accessing and interacting with your content.

**Note:**

-   Users with Owner and Member access to a Personalize project can create new experiences, and edit/delete existing experiences.
-   The default number of Experiences allowed per project is **100**. To increase this limit, please contact our [support team](mailto:support@contact.com). By Contentstack permissions, they can be extended till **1000** per project.
-   The default number of Variants allowed per experience is **20**. To increase this limit, please contact our [support team](mailto:support@contact.com). And each variant can be mapped to a maximum of **50** **audiences**.

## Related Resource

-   [Personalize Management API: Create an Experience](/docs/developers/apis/personalize-management-api/experiences#create-an-experience)
