---
title: "Delete a Custom Attribute"
description: "Learn how to delete referenced and non-referenced custom attributes in Contentstack Personalize."
url: /personalize/delete-custom-attribute
uid: blt09314362b8333067
---

# Delete a Custom Attribute

## Delete a Custom Attribute

Deleting a custom attribute from your Personalize project helps maintain an organized set of attributes and ensures that only relevant data is tracked.

This guide walks you through the steps required to delete non-referenced and referenced custom attributes from your project, allowing you to clean up unused or redundant attributes.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)

    **Note:** Users with **Owner** and **Member** access to a Personalize project can delete existing custom attributes.

-   Access to Personalize project

    **Note:** We assumed that you have already created a Personalize project. If not, follow [this guide](/docs/personalize/create-personalize-project) to create a project in Personalize.


## What You Will Learn

-   The difference between a non-referenced and a referenced custom attribute.

-   How to delete a non-referenced custom attribute.

-   How to remove a referenced attribute from audience rules and then delete it.


## Steps for Execution

To delete the custom attribute, follow the steps:

### Delete a Non-referenced Custom Attribute

A non-referenced attribute in Contentstack Personalize is a custom attribute that is not currently being used in any audience rules or segmentations within your project.

To delete an existing non-referenced custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete a custom attribute.
3.  Click the **Attributes** tab.
4.  You can delete an existing custom attribute by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.![Delete option under the Actions column in the Attributes tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c13122bbab7558b/68c10c117823e25de537d10f/Delete-custom-attribute.png)
5.  In the **Delete Attribute** modal, click **Delete** to permanently delete the custom attribute.![Delete Attribute confirmation modal](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdRR_NBA0Wq8C8julQ33cYBCwQTI4fmGZLtfBj40Xlk_yuJc5anKppUPr1JEonsBroUCTordjwAKfMQmGB6py2X4XTtdcy37AV2ah1NhW3HHJ3QjMuEz2AVptmga8g1lIiNXqEzL_YnzzHrAGe2eR1tgOI?key=hKIHfQblcnnfErhXCzHF4w)

You will get a success message after the custom attribute is deleted from Personalize.

### Delete a Referenced Custom Attribute

A referenced attribute in Contentstack Personalize is a custom attribute that is currently being used in audience rules or segmentations within your project.

This means that the attribute is actively involved in defining the conditions or criteria for targeting specific audiences with personalized experiences.

As a result, deleting a referenced attribute requires additional steps to ensure that existing audience definitions and personalization strategies are not disrupted. This involves first removing the attribute from any audience rules where it is used, and then proceeding with its deletion.

To delete an existing referenced custom attribute, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the **Personalize Projects** landing page. Click the project for which you want to delete a custom attribute.
3.  Click the **Audiences** tab.
4.  To remove a referenced custom attribute from the Audience, open the audience in one of the following ways:

    -   Click the audience name, or
    -   Click the vertical ellipses under **Actions** and select **Edit**.![Open an audience from the Audiences tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7e3ee405ecc3bb2/68c10c6707b4fa0e0538cd0c/Audience-attribute-delete.png)

    **Note:** To delete custom attributes from a referenced audience, ensure that the experience associated with that audience is in ‘Draft’ status.

5.  In the **Audience** page, scroll to the **Rules** section and then click the **Delete** icon next to the preferred custom attribute from the list.![Delete icon next to a custom attribute in the Rules section](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtBi_SNyrZXK4ezg1oc90NVzfvVdyaoBb_b2r48hht_AysKVLTD7Ep9s1R--TziPKl2MbHTv0fhJ1fsoqyckBHRsjTCFNgNBMBTTIh2ctnB8G30jKB4ZlZLIycXjc3c3gFYZedUtSqd7egAlU5D0HhgiI?key=hKIHfQblcnnfErhXCzHF4w)
6.  Once you have done that, click the **Save** button.
7.  Now that we have removed the custom attribute from the Audience’s Rules, click the **Attributes** tab in the left navigation panel.
8.  You can delete an existing custom attribute by clicking the corresponding vertical ellipses under the **Actions** section and selecting **Delete**.  
    ![Delete option under the Actions column in the Attributes tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40693e2597e997c7/68c10cae4a2c2dab9212159f/Attributes-delete-ellipsis.png)
9.  In the **Delete Attribute** modal, click **Delete** to permanently delete the custom attribute.![Delete Attribute confirmation modal](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdgiR5k0wMeVtTA0U3KZ0Q3jHTNInSsGKG_7m5tV79MwEzrvtyXltNEmhGUSEBl4DPGDiLtkhBIi0n4tC-GxpOsiaNcihYUoXNFhdKJt9njeEjcuGE99pmluu_ZhCOoZx2XOH9HJRMMja82Z-WTG4JpD1aQ?key=hKIHfQblcnnfErhXCzHF4w)

    You get a success message after the custom attribute is deleted from Personalize.

    **Warning:** Deleting a custom attribute might affect the Audience segmentation, experience performance, and the data for that attribute will no longer be collected from that point onward.


## Related Resource

-   [Personalize Management API: Delete an Attribute](/docs/developers/apis/personalize-management-api/attributes#delete-an-attribute)
