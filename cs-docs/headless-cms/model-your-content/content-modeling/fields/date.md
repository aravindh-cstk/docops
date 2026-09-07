---
title: "Date"
description: "Learn how to use the Date field to configure date and time values with timezone support in Contentstack."
url: /headless-cms/date
uid: bltae6d8a7e53b631bb
---

# Date

## Date

The **Date** field enables users to select a specific date and time through a calendar UI. It uses the ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) and supports timezone settings for accurate scheduling across different regions and user [locales](/docs/headless-cms/about-languages).

## Key Features

-   Displays a calendar with date and time pickers on the [entry](/docs/headless-cms/about-entries) page.
-   Optionally hides the time picker using the **Hide Time** property under the field settings.
-   Supports time zone configurations based on user locale and stack settings.

## Configurable Properties

You can edit the following field [properties](/docs/headless-cms/about-field-properties) at any time:

-   [Display Name](/docs/headless-cms/display-name)
-   [Unique ID](/docs/headless-cms/unique-id)
-   [Instruction Value](/docs/headless-cms/instruction-value)
-   [Help Text](/docs/headless-cms/help-text)
-   [Default Value](/docs/headless-cms/default-value)

Additionally, toggleable settings include:

-   [Mandatory](/docs/headless-cms/mandatory)
-   Hide Time
-   [Set Date Range](/docs/headless-cms/set-date-range)
-   [Multiple](/docs/headless-cms/multiple)
-   [Non-localizable](/docs/headless-cms/non-localizable)

**Warning:** Changing the configuration of an existing field in a published Content Type may result in data loss. To avoid this, refer to the [Content Type Change Management](/docs/headless-cms/content-type-change-management) guide.

![Date_Field_Properties.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90e75510db5b535a/6903087daad66466e5e33472/Date_Field_Properties.png)

## Setting Date and Time

After adding the Date field to your Content Type, open **Date Properties** and select the **Custom Date** option to configure your preferred date and time format.

**Tip:** Consider the target audience's local time zones when configuring default values. This ensures accurate content scheduling across global teams.

**Additional Resource:**

-   To dynamically show or hide this field based on user input, use the [Field Visibility Rule](/docs/headless-cms/about-field-visibility-rules) feature.
-   To add a Date field using the Content Management API, refer to the [JSON payload](/docs/headless-cms/json-schema-for-creating-a-content-type#date) example in our CMA [request](/docs/developers/apis/content-management-api/content-types#create-a-content-type).

## Best Practices

-   Use the ISO format for all programmatic operations to ensure compatibility.
-   Always account for the user’s time zone to prevent scheduling conflicts.
-   Clearly communicate the purpose and constraints of the field in the **Help Text**.

**Additional Resource:** For broader field use cases and modeling strategies, explore our [Content Modeling](/docs/headless-cms/about-content-modeling) guide.
