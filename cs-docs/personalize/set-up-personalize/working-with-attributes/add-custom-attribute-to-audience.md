---
title: "Add a Custom Attribute to an Audience"
description: "Learn how to add custom attributes to an audience in Contentstack Personalize for improved content targeting."
url: /personalize/add-custom-attribute-to-audience
---

# Add a Custom Attribute to an Audience

## Add a Custom Attribute to an Audience

After successfully creating the custom attribute in Personalize, you can add it to an Audience for better content targeting.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization that has Personalize enabled
-   Access to a project in Personalize
-   A custom attribute already created in Personalize

## Steps for Execution

**Note:** For this guide, we have assumed that you have already created a Personalize project. If not, please follow [this guide](/docs/personalize/create-personalize-project) and create a project in Personalize.

After [creating a custom attribute](/docs/personalize/create-custom-attribute/), you can add it to an Audience. Log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize.**
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to add the custom attribute.
3.  Click the **Audiences** tab, and then click the **\+ New Audience** button to create a new audience if you have not created one already.
    
    **Note:** If you have an existing Audience in your Personalize project, open it or click the corresponding vertical ellipses under the **Actions** section, select **Edit**, and jump directly to step 5.
    
4.  On the **Audience** page, provide a suitable **Name** and an optional **Description** for the audience.
5.  In the **Rules** section, click the **\+ Add Rule** button. ![Add Rule button screenshot](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfIeee7sbfn8aL8f0xKfjuhjmRzajciE1q5lAgW-nKkWlbgD4KtxNnY-Ghacv1KA0ig_MWV4wsElDxv32a4b3YWh7dLgI-wqrvULfPIQgxrclP7JC-B5h5CCAZ6MTeUhdv505BOreVvfglc4VBeLSfVDYqv?key=xdiy-Lh4PD3Y48RoXD83ZA)
    
    To add the custom attribute:
    
    -   Click the **Select attribute** dropdown.
    -   Scroll through the dropdown and select the custom attribute you want to add.
    -   Click **Select Operator** to select an attribute-specific operator.
    -   Enter a matching criterion for the condition in the **Select Value** field. ![Select Value screenshot](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdBS9JhGBRXPGsbg18Er3T6aexmtDPN88qZrBUGpSqp-mTYZLV_YsHjAmOLliDh61W2zcGvOMH-jv_zZEOqCILwfn3BjETgCdhiA-rZi9XUfGDsrFvgOKWCHm4xa-0sOmqQowXc5TIOv18wCMu6dh1eNFRo?key=xdiy-Lh4PD3Y48RoXD83ZA)
    
    Similarly, you can add multiple attributes (preset and custom) to an Audience.
    
    **Additional Resource:** You can use the [Personalize Edge API](/docs/developers/apis/personalize-edge-api/user-attributes) to set and update user attributes.
    
6.  Click **Save** to complete the setup.

This adds the new custom attribute to your audience.

**Additional Resource:** You can use the [Personalize Management API](/docs/developers/apis/personalize-management-api/attributes) to create or update audiences with a custom attribute, delete, and retrieve all existing attributes.
