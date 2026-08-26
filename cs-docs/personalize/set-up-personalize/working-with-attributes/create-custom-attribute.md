---
title: "Create a Custom Attribute"
description: "Create custom attributes in Contentstack Personalize to better target and segment your audience. Enhance personalization and improve your marketing campaigns."
url: /personalize/create-custom-attribute
uid: blt61853f78a5c750c8
---

# Create a Custom Attribute

## Create a Custom Attribute

Custom attributes in Contentstack Personalize empower you to fine-tune your audience targeting. This guide provides a clear, step-by-step walkthrough for creating these attributes, enhancing your ability to deliver personalized content experiences.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   Access to Personalize project

    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.


## What You Will Learn

-   How to create a custom attribute in a Personalize project.

-   How to set a name, key, and optional description for the attribute.

-   Who can create, edit, and delete custom attributes.


## Steps for Execution

Suppose you want to create a custom attribute for users who are a member of a Loyalty Program on your website. To create the custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to create a custom attribute.
3.  Click the **Attributes** tab and then click the **\+ New Attribute** button.
4.  In the **New Attribute** modal, provide a suitable **Name** and **Key** for the attribute along with an optional **Description**.![New Attribute modal](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2UAfoj02N3Aw3jRc5sF4fxxvDB676pGbi1ga2r1PxJWFiqfuaZJxXcKoZexsGop-B1d4mmLCsrYR6xLj0AwGSOF7Awzb1_Fk_zr8WHhc9jMfdFTlTdfJpytN5otD4HO1IWO1L05rQGA2XPZi8W7Guzgxe?key=o0cFCswM-PkQlmna90sc-g)
5.  Once you have done that, click the **Create** button.

This creates a new custom attribute in your Personalize project. You can now [add the custom attribute to an audience](/docs/personalize/add-custom-attribute-to-audience).

**Note:**

-   Users with Owner and Member access to a Personalize project can create new custom attributes, and edit/delete existing custom attributes.
-   The default number of Custom Attributes allowed per project is **100**.

### Next Steps

After creating a custom attribute in your project, the data needs to be collected for the attribute. This can be done using the [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk) or the [Personalize Edge API](/docs/developers/apis/personalize-edge-api). You can also use tools like [Google Tag Manager](/docs/personalize/about-gtm-integration/) and [Customer Data Platform](/docs/personalize/about-cdp-integration/) integrations for collecting the data.

## Related Resource

-   [Personalize Management API: Create an Attribute](/docs/developers/apis/personalize-management-api/attributes#create-an-attribute)
