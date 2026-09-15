---
title: "Content Modularization in Email with Lytics Audiences"
description: "Learn how to modularize an email template using Lytics audience membership so a single Campaign Monitor email can show different content, images, and calls-to-action to different audience segments."
url: /lytics/content-modularization-in-email-with-lytics-audiences
uid: blt90c16fec5cc0bbed
---

# Content Modularization in Email with Lytics Audiences

## Content Modularization in Email with Lytics Audiences

Running a complex nurture program can be difficult to manage, especially if you're using countless static email templates. Luckily most email service providers (ESPs) offer a templating language to allow for dynamic user data to be embedded in an email. Dynamic templates are not only useful for transactional emails, but you can build them to use valuable Lytics user data such as audience membership and other user profile fields to simplify your email marketing programs all while personalizing the emails to increase user engagement.

This guide will walk through how to modularize major components of an email based on Lytics audience membership using Lytics and a single [Campaign Monitor](https://www.campaignmonitor.com/) template. This technique is applicable to most ESPs that Lytics integrates with, just be sure to refer to the your ESP's documentation for dynamic templating.

### Before you begin

![static email template](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8db8390daa13b6b6/27ff8b9b9cb0a6cf7506dffe/img-0058.png)

You should have a generic HTML email template set up in your ESP. This guide uses an email template promoting new products of a shoes retailer and personalizes it based on the types of shoes the user is interested in. Think about what parts of the email you would like to change based on audience membership.

### Build your audiences

In Lytics you'll need a target audience - the group of users to send the email to - and one or more additional audiences that the email can be personalized for. In this guide we have **Promotional List** as the target audience, and two audiences built with [content affinity](https://docs.lytics.com/documentation/product/features/audiences/building-audiences-content-affinity), **Interested in Dress Shoes** and **Interested in Athletic Shoes** which we will build out separate content pieces for.

![content-modularization-audience-0621](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am62b39a141c6d8c0c/4daf79ad7add6c0a12f1f850/img-0059.png)

### Sync the audience to your email tool

Once you have your audiences ready, you will sync your target audience to an ESP. This can be done with a Lytics export integration. In this guide we will [export to Campaign Monitor](/docs/lytics/campaign-monitor). If you're using another ESP browse our list of [integrations](/docs/lytics/lytics-integration-options) and the read the instructions for exporting an audience.

Select **Promotional List** as the target audience to sync. For Campaign Monitor the other two audiences will be recorded in a custom field called `LyticsAudiences`. This is the field we will use in the template to determine what to show and hide for the user.

![campaign monitor export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfdeba97319494cff/e2973426502a9cacaf37f79b/img-0060.png)

Regardless of the provider you choose you should see the Lytics users in your email tool not long after you click the **Start Export** button.

### Modify your email template

In this example the header of the email will change based on audience membership. For every element we want to personalize we need to have three versions of the content:

-   Users in the **Interested in Dress Shoes** audience.
-   Users in the **Interested in Athletic Shoes** audience.
-   Users in the **Promotional List** who have not shown interest in either shoe type (generic promotion).

If a user is interested in both dress shoes and athletic shoes we can prioritize which to show based on the order of the conditionals we will set up in the template. We will opt to promote dress shoes in this example for that case.

![email modularization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2aafa659624c1b81/45802672c1430d4491ebc853/img-0061.gif)

Follow these steps to personalize your email template in this manor:

1.  Open your template in an HTML editor, locate the text, image or HTML element you want to change based on audience membership.
2.  Use the custom `LyticsAudience` field and conditional logic to bind your HTML content in if/else statements. Take a look at the following example, which the example template uses to change the text on the banner of the example email:

    ```
    <!-- custom headline -->
    [if:LyticsAudiences=Interested in Dress Shoes]Dress shoes for any occasion
    [elseif:LyticsAudiences=Interested in Athletic Shoes]Kick start your summer with new shoes
    [else]Shoes of all shapes and sizes you'll love[endif]
    ```

3.  Continue to edit your template to modularize the content of your email. In our example, we also switch out the image in the banner as well as the CTA link and text based on audience membership:

    ```
    <!-- custom image -->
    [if:LyticsAudiences=Interested in Dress Shoes]<img src="dress-shoes.png" alt="dress shoes" />
    [elseif:LyticsAudiences=Interested in Athletic Shoes]<img src="athletic-shoes.png" alt="athletic shoes" />
    [else]<img src="default-shoes.png" alt="shoes" />[endif]

    ...

    <!-- custom CTA -->
    [if:LyticsAudiences=Interested in Dress Shoes]<a href="https://shoepalace.com/products/dress-shoes">Shop Dress Shoes</a>
    [elseif:LyticsAudiences=Interested in Athletic Shoes]<a href="https://shoepalace.com/products/athletic-shoes">Shop Athletic Shoes</a>
    [else]<a href="https://shoepalace.com/products/shoes">Shop New Shoes</a>[endif]
    ```


In the next step you will be able to see the rendering of the templates in each of the three contexts.

### Send your campaign to the target audience

1.  Create a new campaign in Campaign Monitor. On the **Content** step upload the HTML template you've created that includes your conditionals. After you've successfully uploaded, you can preview the email and toggle between the `LyticsAudience` dynamic content options to view each of the expected outputs. ![campaign monitor preview](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb7b13dc7e586f902/86befcb4a7bb25b1e63b53cf/img-0062.png)
2.  On the **Recipients** step be sure to select the audience you exported to Campaign Monitor from Lytics. ![lytics audience in campaign monitor](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3915bb5ede6a2bbc/23bc38e453635d3a8f921194/img-0063.png)
3.  Continue on to the **Delivery** step. You can send a test email to yourself and/or schedule your campaign for delivery.

This guide has demonstrated how you can send three distinct, personalized emails to users based on their interests in a single campaign. Instead of sending a generic email to all your customers, you can send an email that speaks to a user's interests.

This is just the tip of iceberg, think of how you can personalize and modularize your email templates for more advanced use cases. Conditionals can be used for any number of audiences, and you can show and hide entire content sections in an email based on audience membership. Your Lytics representative can help! If you have any further questions or would like to talk through use cases reach out to the [Lytics team](https://support.lytics.com/hc/en-us).
