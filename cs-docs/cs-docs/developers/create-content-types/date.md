---
title: "[Fields] - Date"
description: Documentation for the Date field, including key features, configurable properties, and best practices.
url: https://www.contentstack.com/docs/headless-cms/date
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Fields] - Date

This page describes the **Date** field, including what it does, how it can be configured in a Content Type, and guidance for using it correctly. It is intended for developers and content modelers configuring Content Types and scheduling content across locales and time zones.

### Item 1

#### Article section

##### Heading

Date

##### Content

The **Date** field enables users to select a specific date and time through a calendar UI. It uses the ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`) and supports timezone settings for accurate scheduling across different regions and user [locales](/docs/developers/multilingual-content/about-languages).

## Key Features
- Displays a calendar with date and time pickers on the [entry](/docs/content-managers/working-with-entries/about-entries) page.
- Optionally hides the time picker using the **Hide Time** property under the field settings.
- Supports time zone configurations based on user locale and stack settings.

## Configurable Properties
You can edit the following field [properties](/docs/developers/create-content-types/about-field-properties) at any time:
- [Display Name](/docs/developers/create-content-types/display-name)
- [Unique ID](/docs/developers/create-content-types/unique-id)
- [Instruction Value](/docs/developers/create-content-types/instruction-value)
- [Help Text](/docs/developers/create-content-types/help-text)
- [Default Value](/docs/developers/create-content-types/default-value)

Additionally, toggleable settings include:
- [Mandatory](/docs/developers/create-content-types/mandatory)
- Hide Time
- [Set Date Range](/docs/developers/create-content-types/set-date-range)
- [Multiple](/docs/developers/create-content-types/multiple)
- [Non-localizable](/docs/developers/create-content-types/non-localizable)

**Warning:** Changing the configuration of an existing field in a published Content Type may result in data loss. To avoid this, refer to the [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide.

## Setting Date and Time
After adding the Date field to your Content Type, open **Date Properties** and select the **Custom Date** option to configure your preferred date and time format.

**Tip:** Consider the target audience's local time zones when configuring default values. This ensures accurate content scheduling across global teams.

**Additional Resource:**
- To dynamically show or hide this field based on user input, use the [Field Visibility Rule](/docs/developers/create-content-types/about-field-visibility-rules) feature.
- To add a Date field using the Content Management API, refer to the [JSON payload](/docs/developers/create-content-types/json-schema-for-creating-a-content-type#date) example in our CMA [request](/docs/developers/apis/content-management-api#create-a-content-type).

## Best Practices
- Use the ISO format for all programmatic operations to ensure compatibility.
- Always account for the user’s time zone to prevent scheduling conflicts.
- Clearly communicate the purpose and constraints of the field in the **Help Text**.

**Additional Resource:** For broader field use cases and modeling strategies, explore our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide.

## Common questions

### Does the Date field support time zones?
Yes. The **Date** field supports timezone settings for accurate scheduling across different regions and user locales.

### Can I hide the time picker?
Yes. You can optionally hide the time picker using the **Hide Time** property under the field settings.

### What format does the Date field use?
It uses the ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`).

### Is it safe to change Date field settings after publishing?
**Warning:** Changing the configuration of an existing field in a published Content Type may result in data loss. Refer to the [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide.