---
title: [Personalize] - Create a Segmented Experience
description: Learn how to create segmented experiences to deliver personalized content to specific audiences.
url: https://www.contentstack.com/docs/personalize/create-segmented-experience
product: Personalize
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-03-25
filename: create-a-segmented-experience.md
---

# [Personalize] - Create a Segmented Experience

This page explains [Personalize] - Create a Segmented Experience for Personalize. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Create a Segmented Experience

In Contentstack Personalize, Segmented Experiences empower you to create highly targeted, individualized content experiences for distinct audience segments. By dynamically displaying personalized content variations based on demographics, referral sources, behaviors, and other critical attributes, you can:

* Maximize Engagement
* Boost Conversions
* Enhance Customer Satisfaction

**When to use Segmented Experience in Contentstack Personalize?**

* Diverse Audience with Varied Needs
* High Level of Content Customization
* Focus on Engagement and Conversion Metrics
* Technical Expertise and Resources
* Contentstack's Segmentation and Analytics Capabilities

By carefully considering these factors, you can determine whether Segmented Experiences are the right fit for your personalization strategy and leverage them to maximize the impact of your campaigns.

### Prerequisites

* [Contentstack account](https://www.contentstack.com/login/)
* Access to the Contentstack Organization that has Personalize enabled
* Access to a project in Personalize
* [Audience created](./create-audience.md) in your Personalize project

**Note:** Users with Owner and Member access to a Personalize project can create a Segmented Experience.

### Steps for Execution

**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

**Note:** To preview how your experience appears for different audiences and manage its content in real time, or to control variants visually, make sure [Live Preview](../content-managers/author-content/about-live-preview.md) and [Visual Builder](/docs/content-managers/visual-builder/about-visual-builder) are enabled and set up on your stack.

To create a Segmented Experience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1. In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2. You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create a Segmented Experience.
3. On the **Experiences** page, click the **+ New Experience** button.
4. In the **Select Experience Type** modal, click the **Segmented** experience type.![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcEAcWcIPprIMs1uBBB6Wj8TDq4DxBlkXJ1peQ-bzsrju5UzVZm2LDluSnPwYaGwJObjg2HZogqn1QdNt4yVFHrspQi1OWx-mlTmZ24-wVfgl0iyHRVCjAXB4b4QL4covcaQmTRRxPjxFaZ786mffu-lts?key=eVzPWtXYIm1CLs8J22GD7Q)
5. On the experience draft page, in the **Overview** tab, provide a suitable **Name** and an optional **Description** for the experience and then click the **Save General Details** button.![rewards_program.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ed4477d03756530/68cb9c115e308629eb708fc2/rewards_program.png)
6. Click the **Configuration** tab.
7. To create variants for your experience, click the **+ Add Variant** button. **Variants** are alternative versions ([CMS Entry Variants](../content-managers/entry-variants/about-entry-variants.md)) of content or experiences designed to cater to specific audiences. You need to provide a combination of conditions and audiences as follows:
   1. **Short UID:** This unique ID is automatically assigned to each variant and used in [Personalize Edge SDK](../developers/sdks/personalize-edge-sdk/javascript.md) and [Personalize AP](../../api-docs/api-detail/personalize-management-api.md)I requests.
   2. **Variant Name:** Provide a meaningful name for the variant. This name will be reflected in the Entry Editor for the Entry Variants in the CMS.

      **Note:** Each Segmented Experience must contain at least **1** variant. Each experience is reflected in the CMS as the Variant Group with the same experience name and you can create Entry Variants for each of these variants via the Entry Editor.
   3. **Condition:** You can set the rule to satisfy either all audiences (**Match All**) or at least one of them (**Match Any**) by selecting from the dropdown.
   4. **Audiences:** Click inside the **Audiences** field to open the **Select Audience(s)** modal and select one or more (if available) audiences, and click the **Apply Selected Audiences** button to set the audience criteria for the experience.![Variants.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt321afb98e59cce36/69c3e76016a1f880cf1c6844/Variants.png)Similarly, you can add multiple variants by clicking the **+ Add Variant** button.![Add_Variant.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09b9c41c65d3def7/69c3e7515a7cd80f657a900f/Add_Variant.gif)

      **Note:** If your audience condition matches multiple variants and you wish to prioritize a specific variant, simply drag and drop the variants to reorder them. The variant at the top of the list will take priority for personalization when the experience is activated.
   5. **Save Draft:** Once you have defined your variant, click the **Save Draft** button.

      **Note:** Personalize adds metadata to the Variant Group, including the Personalize project UID, experience UID, and experience short UID.
8. If you want to activate the draft now, click the **Activate Draft** button, and click **Activate**. This will activate the experience on your site for your visitors.

   **Note:** Ensure you [create Entry Variants](../content-managers/entry-variants/create-an-entry-variant.md) in the CMS before activating an experience for a seamless personalized campaign for your visitors.

This creates a new Segmented Experience in your Personalize project. For managing experience versions (activated/draft/paused), please refer to [this guide](./experience-versioning.md).

**Additional Information:** To achieve optimal personalization for your users, prioritize experiences and variants independently. Use experience priority when multiple experiences customize the same element on a digital property, and apply variant priority when audience conditions match multiple variants. For more details, please refer to [this guide](./prioritize-experiences.md).

After activating your Segmented Experience, the Analytics are updated within a few minutes when your visitors start accessing and interacting with your content.

**Note:**

* Users with Owner and Member access to a Personalize project can create new experiences, and edit/delete existing experiences.
* The default number of Experiences allowed per project is **100**. To increase this limit, please contact our [support team](mailto:support@contact.com). By Contentstack permissions, they can be extended till **1000** per project.
* The default number of Variants allowed per experience is **20**. To increase this limit, please contact our [support team](mailto:support@contact.com). And each variant can be mapped to a maximum of **50** **audiences**.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#experiences) to create, edit, delete, and retrieve all existing experiences.

## Common questions
### What is covered in [Personalize] - Create a Segmented Experience?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Personalize] - Create a Segmented Experience?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
