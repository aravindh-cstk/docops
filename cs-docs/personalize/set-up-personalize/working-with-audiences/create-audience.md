---
title: "Create an Audience"
description: "Learn how to create audiences that adapt to real-time user behavior and context changes for delivering personalized content experiences."
url: /personalize/create-audience
---

# Create an Audience

## Create an Audience

Creating custom Audiences in Contentstack Personalize empowers you to target specific user segments with tailored content and experiences based on various attributes and behaviors.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization that has Personalize enabled
-   Access to a project in Personalize
-   [Custom attributes](/docs/personalize/create-custom-attribute/) created in the project, if you want to assign custom attributes to your audience

**Note:** Users with Owner and Member access to a Personalize project can create new audiences.

**Note:** To preview audience-specific content in real time or manage variants visually, make sure [Live Preview](/docs/headless-cms/about-live-preview) and [Visual Builder](/docs/content-managers/visual-editor/about-visual-editor) are enabled and set up on your stack.

## Steps for Execution

**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](/docs/personalize/create-personalize-project) and create a project in Personalize.

To create an audience, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create an audience.
3.  Click the **Audiences** tab. On the Audiences page, click the **\+ New Audience** button to create a new audience.  
    ![app-switcher-personalize-audience-new-audience.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e3add3f274854c9/68945fbe11f3880b1a4b1481/app-switcher-personalize-audience-new-audience.png)
4.  On the **New Audience** page,
    
    1.  **Name:** Provide a meaningful name for the audience.
    2.  **Description:** (Optional) Add a brief explanation of the audience's purpose.
    3.  **Rules**: Rules are criteria that define how visitors (audience) are grouped and targeted for tailored experiences based on their characteristics and behaviors. In this section, you need to provide a combination of [preset or custom attributes](/docs/personalize/create-custom-attribute/) to define your audience as follows:
        1.  Under the **Match {All/Any} of the below conditions** section, you can set the below condition to satisfy either **All** or **Any** of the rules.![AD_4nXfBVyKqgEHoCDnzZH6sIE30JWduZxNqXABl0NJ0h1eG8Hdd6wmfxdR17db1AD1Ha6LBogAy6iuo9teS6an-lGPilI4kNtqeQPjS3RAr_jGr5XTiMe-ao9-KyWw-m5KEVbbKwUx1C9RhthaRrAASkv1tQak](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfBVyKqgEHoCDnzZH6sIE30JWduZxNqXABl0NJ0h1eG8Hdd6wmfxdR17db1AD1Ha6LBogAy6iuo9teS6an-lGPilI4kNtqeQPjS3RAr_jGr5XTiMe-ao9-KyWw-m5KEVbbKwUx1C9RhthaRrAASkv1tQak?key=G5rRKi8VlwmpsHbMIyOf1A)
        2.  Click the **\+ Add Group** button to group rules together to create more complex rules, then click the **\+ Add Rule** button within the new group.![AD_4nXfLQoXZeOuLJIQLOU_DXj12cTHgh87g5R4AnLM2h4v-67WScp7Cbmz95ME6NrUxnZtIeuNW1MR_uKPmXoSrDciWmaNTXpvBTjMEPPOFkOr6n1yWp8uVmqjgoh6MJfm7LDuHsK4jrcRuvA49zhOdIkcy1qjt](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLQoXZeOuLJIQLOU_DXj12cTHgh87g5R4AnLM2h4v-67WScp7Cbmz95ME6NrUxnZtIeuNW1MR_uKPmXoSrDciWmaNTXpvBTjMEPPOFkOr6n1yWp8uVmqjgoh6MJfm7LDuHsK4jrcRuvA49zhOdIkcy1qjt?key=G5rRKi8VlwmpsHbMIyOf1A)
            
            Similar, add multiple rules within a group to build complex scenarios by clicking the **\+ Add Rule** button.
            
        3.  Create a rule by clicking the **Select Attribute** drop-down and select either a preset attribute or a custom one. Click **Select Operator** to select an attribute-specific operator and then select a matching criteria for the condition by clicking the **Select Value** drop-down.![AD_4nXfsPb9t1ffeNp3AE0tra883m5vVowGgM0QgAYtPJzwcvGoZqjRIM9WfvY0S01bPCV9VuBpx-LpH1QLYA51XZHFx_0ZJ3cXgKzUj0G_kD_kr1VkwZGrY996NchSaUUfj4Jf8S9bTJA8DgcxW0iztOw6EwGg](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfsPb9t1ffeNp3AE0tra883m5vVowGgM0QgAYtPJzwcvGoZqjRIM9WfvY0S01bPCV9VuBpx-LpH1QLYA51XZHFx_0ZJ3cXgKzUj0G_kD_kr1VkwZGrY996NchSaUUfj4Jf8S9bTJA8DgcxW0iztOw6EwGg?key=G5rRKi8VlwmpsHbMIyOf1A)
            
            Similarly to add multiple rules, click the **+ Add Rule** button.
            
            **Note:** By default**,** you can add upto **50** **rules** in each Audience. To increase this limit, please contact our [support team](mailto:support@contact.com).
            
            **Additional Resource:** You can use the [Personalize Edge API](/docs/developers/apis/personalize-edge-api/user-attributes) to set and update the user attributes.
            
    
    ![AD_4nXddO116x3-JuZTzTJ15DcKYbuvj3xKdWyL_9v8piv452rlqbpp4XJpq21UiUXglfG-rzwBj-i3vWVGefIfg69Xvw0UHWuNjjcnbRvUwLnkJsGirCIIJUhcISMKK5QYOTDXr71upU1FfoR_fCMxRVk9sBaEN](https://lh7-rt.googleusercontent.com/docsz/AD_4nXddO116x3-JuZTzTJ15DcKYbuvj3xKdWyL_9v8piv452rlqbpp4XJpq21UiUXglfG-rzwBj-i3vWVGefIfg69Xvw0UHWuNjjcnbRvUwLnkJsGirCIIJUhcISMKK5QYOTDXr71upU1FfoR_fCMxRVk9sBaEN?key=G5rRKi8VlwmpsHbMIyOf1A)
    
5.  Once you have defined your audience, click the **Save** button. This creates a new audience in your Personalize project.

**Note:**

-   Users with Owner and Member access to a Personalize project can create new audiences, and edit/delete existing audiences.
-   The default number of Audiences allowed per project is **100**.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api/audiences) to create, edit, delete, and retrieve all existing audiences.

## Next Steps

You can now [add the audience to a Segmented experience](/docs/personalize/create-segmented-experience/) into _Variants_ or to [an A/B Test experience](/docs/personalize/create-ab-test-experience/) as a _Target Group_ for granular targeting of your personalized content.
