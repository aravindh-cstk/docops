---
title: "[Personalize] - Create an Audience"
description: Creating custom Audiences in Contentstack Personalize empowers you to target specific user segments with tailored content and experiences based on various attributes and behaviors.
url: https://www.contentstack.com/docs/personalize/create-audience
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-25
---

# [Personalize] - Create an Audience

This page explains how to create an Audience in Contentstack Personalize, including prerequisites, step-by-step instructions, and limits. It is intended for users with access to a Personalize-enabled organization and project, and should be used when you need to define user segments for targeted personalized experiences.

## Create an Audience

Creating custom Audiences in Contentstack Personalize empowers you to target specific user segments with tailored content and experiences based on various attributes and behaviors.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization that has Personalize enabled
- Access to a project in Personalize
- [Custom attributes](./create-custom-attribute.md) created in the project, if you want to assign custom attributes to your audience

**Note: **Users with Owner and Member access to a Personalize project can create new audiences.

**Note: **To preview audience-specific content in real time or manage variants visually, make sure [Live Preview](../content-managers/author-content/about-live-preview.md) and [Visual Builder](/docs/content-managers/visual-builder/about-visual-builder) are enabled and set up on your stack.

## Steps for Execution
**Note: **For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](./create-personalize-project.md) and create a project in Personalize.

To create an audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create an audience.
- Click the **Audiences **tab. On the Audiences page, click the **+ New Audience** button to create a new audience.![app-switcher-personalize-audience-new-audience.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e3add3f274854c9/68945fbe11f3880b1a4b1481/app-switcher-personalize-audience-new-audience.png)
- On the **New Audience **page,**Name:** Provide a meaningful name for the audience.
- **Description:** (Optional) Add a brief explanation of the audience's purpose.
- **Rules**: Rules are criteria that define how visitors (audience) are grouped and targeted for tailored experiences based on their characteristics and behaviors. In this section, you need to provide a combination of [preset or custom attributes](./create-custom-attribute.md) to define your audience as follows:Under the **Match {All/Any} of the below conditions** section, you can set the below condition to satisfy either **All** or **Any **of the rules.
- Click the **+ Add Group** button to group rules together to create more complex rules, then click the **+ Add Rule** button within the new group.![AD_4nXfLQoXZeOuLJIQLOU_DXj12cTHgh87g5R4AnLM2h4v-67WScp7Cbmz95ME6NrUxnZtIeuNW1MR_uKPmXoSrDciWmaNTXpvBTjMEPPOFkOr6n1yWp8uVmqjgoh6MJfm7LDuHsK4jrcRuvA49zhOdIkcy1qjt](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLQoXZeOuLJIQLOU_DXj12cTHgh87g5R4AnLM2h4v-67WScp7Cbmz95ME6NrUxnZtIeuNW1MR_uKPmXoSrDciWmaNTXpvBTjMEPPOFkOr6n1yWp8uVmqjgoh6MJfm7LDuHsK4jrcRuvA49zhOdIkcy1qjt?key=G5rRKi8VlwmpsHbMIyOf1A)Similar, add multiple rules within a group to build complex scenarios by clicking the **+ Add Rule** button.
- Create a rule by clicking the **Select Attribute **drop-down and select either a preset attribute or a custom one. Click **Select Operator** to select an attribute-specific operator and then select a matching criteria for the condition by clicking the **Select Value** drop-down.Similarly to add multiple rules, click the** + Add Rule** button.

**Note: **By default**, **you can add upto **50** **rules** in each Audience. To increase this limit, please contact our [support team](mailto:support@contact.com).

**Additional Resource:** You can use the [Personalize Edge API](../../api-docs/api-detail/personalize-edge-api.md#user-attributes) to set and update the user attributes.
- Once you have defined your audience, click the **Save **button. This creates a new audience in your Personalize project.

**Note:**
- Users with Owner and Member access to a Personalize project can create new audiences, and edit/delete existing audiences.
- The default number of Audiences allowed per project is **100**.

**Additional Resource:** You can use the [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md#audiences) to create, edit, delete, and retrieve all existing audiences.

## Next Steps
You can now [add the audience to a Segmented experience](./create-segmented-experience.md) into *Variants* or to [an A/B Test experience](./create-ab-test-experience.md) as a *Target Group* for granular targeting of your personalized content.

## Common questions

### Who can create new audiences in a Personalize project?
Users with Owner and Member access to a Personalize project can create new audiences.

### What is the default limit for rules in an Audience?
By default, you can add upto 50 rules in each Audience.

### How many Audiences are allowed per project by default?
The default number of Audiences allowed per project is 100.

### Which APIs can help manage or update audience-related data?
You can use the Personalize Edge API to set and update the user attributes, and the Personalize Management API to create, edit, delete, and retrieve all existing audiences.