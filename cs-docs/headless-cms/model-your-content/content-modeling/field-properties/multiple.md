---
title: "Multiple"
description: "Learn how to use the Multiple property in Contentstack to allow users to add multiple values to a field, along with minimum and maximum instance limits."
url: /headless-cms/multiple
---

# Multiple

## Multiple

The **Multiple** property lets users enter more than one value for a field. When you enable this option, users can add multiple instances of the field in an entry.

Once you select the **Multiple** option for a field, a plus (**+**) icon appears beside the field on the entry page. Users can click this icon to add additional input areas.

For example, if you create a field named **Languages** and want users to list the languages they know, you can add a **Single Line Textbox** field to your content type and enable the **Multiple** option.

On the entry page, users click the (**+**) icon to add new instances of the field and enter multiple values.

When limits are set for a field, such as defining minimum and maximum number of instances, a **Field Rules** pop-up appears in the entry editor. This dialog informs users of the rules applied to the field. For example, it might display:

-   This field is **optional**/**required**
-   If added, add at least {minimum\_limit} **instances**
-   Up to {maximum\_limit} **instances** allowed

![Field Rules Pop-up.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6e1679fab8010ad/686ccd92966f79e01b00939c/Field_Rules_Pop-up.png)

## Set Minimum Limit

When you mark a field as **Multiple**, the **Set Minimum Limit** option appears under **Advanced Properties**. Use this to define the minimum number of instances that users must create for the field.

For example, if you set the **minimum limit** to **2**, users must add at least two instances for the field, but this applies only if they add at least one instance of the field. If they attempt to save or publish the entry with fewer than two instances, a validation message prompting them to meet the minimum requirement appears.

This helps enforce structured data entry, especially when you expect a certain level of input from users.

## Set Maximum Limit

When a field is marked as **Multiple**, the **Set Maximum Limit** option also appears under **Advanced Properties**. Use this to specify the maximum number of instances a user can add for that field.

For example, if you add a **Single Line Textbox** field, mark it as **Multiple**, and set the maximum limit to **3**, users can add up to three instances. Once they reach the limit, the (**+**) icon is disabled.

![Max Instances.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3cb1afebaa275a04/686ccd9219cab23c36ced52f/Max_Instances.png)

The **Multiple** property helps you collect structured data by allowing multiple values per field with clear limits and guidance for users.
