---
title: "[Field Properties] - Multiple"
description: Documentation for the Multiple field property, including how it works and how to set minimum and maximum limits.
url: https://www.contentstack.com/docs/developers/create-content-types/multiple
product: Field Properties
doc_type: reference
audience:
  - developers
  - content-modelers
version: v1
last_updated: 2026-03-25
---

# [Field Properties] - Multiple

This page explains the **Multiple** field property, how it allows users to enter more than one value for a field, and how to configure minimum and maximum instance limits. It is intended for developers and content modelers configuring content types and validating entry input rules.

## Multiple

The **Multiple** property lets users enter more than one value for a field. When you enable this option, users can add multiple instances of the field in an entry.

Once you select the **Multiple** option for a field, a plus (**+**) icon appears beside the field on the entry page. Users can click this icon to add additional input areas.

For example, if you create a field named **Languages** and want users to list the languages they know, you can add a **Single Line Textbox** field to your content type and enable the **Multiple** option.

On the entry page, users click the (**+**) icon to add new instances of the field and enter multiple values.

When limits are set for a field, such as defining minimum and maximum number of instances, a **Field Rules** pop-up appears in the entry editor. This dialog informs users of the rules applied to the field. For example, it might display:
- This field is **optional**/**required**
- If added, add at least {minimum_limit}** instances**
- Up to {maximum_limit}** instances** allowed

## Set Minimum Limit

When you mark a field as **Multiple**, the **Set Minimum Limit** option appears under **Advanced Properties**. Use this to define the minimum number of instances that users must create for the field.

For example, if you set the **minimum limit** to **2**, users must add at least two instances for the field, but this applies only if they add at least one instance of the field. If they attempt to save or publish the entry with fewer than two instances, a validation message prompting them to meet the minimum requirement appears.

This helps enforce structured data entry, especially when you expect a certain level of input from users.

## Set Maximum Limit

When a field is marked as **Multiple**, the **Set Maximum Limit** option also appears under **Advanced Properties**. Use this to specify the maximum number of instances a user can add for that field.

For example, if you add a **Single Line Textbox** field, mark it as **Multiple**, and set the maximum limit to **3**, users can add up to three instances. Once they reach the limit, the (**+**) icon is disabled.

The **Multiple** property helps you collect structured data by allowing multiple values per field with clear limits and guidance for users.

## Common questions

**Q: What changes in the entry editor when a field is set to Multiple?**  
A: A plus (**+**) icon appears beside the field, allowing users to add additional instances of the field.

**Q: When does the Set Minimum Limit validation apply?**  
A: It applies only if users add at least one instance of the field; if they save or publish with fewer than the minimum required instances, a validation message appears.

**Q: What happens when users reach the maximum limit for a Multiple field?**  
A: The (**+**) icon is disabled once the maximum number of instances is reached.

**Q: Where do minimum and maximum limits appear in the UI?**  
A: When limits are set, a **Field Rules** pop-up appears in the entry editor to inform users of the rules applied to the field.