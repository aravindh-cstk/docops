---
title: "[Automations guides and connectors] - Trigger Conditions"
description: Trigger Conditions operators for configuring automation triggers in Automation Hub.
url: https://www.contentstack.com/docs/agent-os/trigger-conditions
product: Automation Hub
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Trigger Conditions

This page explains how to apply Trigger Conditions while configuring automation triggers, including the available operators and what each one checks. It is intended for developers configuring automations who need to control when an automation runs based on input values and types.

## Trigger Conditions

While configuring automation triggers, you can customize the automation by applying certain conditions. The automation runs only if the trigger conditions are met.

With the Trigger Conditions, match the input using a predefined operator with a specific value. You can add multiple operators and customize the trigger condition.

Let’s look at each one of the operators and see how you can manipulate your automation output based on the conditions.

**Matches (Text)**
- Matches the input with the string value provided and is case-sensitive.

**Loosely matches (Text)**
- Matches the input with the string value provided and is not case-sensitive.

**Does not match (Text)**
- Checks whether the input does not match the string value provided and is case-sensitive.

**Does not loosely match (Text)**
- Checks whether the input does not match the string value provided and is not case-insensitive.

**Contains (Text)**
- Checks whether the input contains the value provided.

**Does not contain (Text)**
- Checks whether the input does not contain the value provided.

**Starts with (Text)**
- Checks whether the input (string) starts with the value provided.

**Does not start with (Text)**
- Checks whether the input (string) does not start with the value provided.

**Ends with (Text)**
- Checks whether the input (string) ends with the value provided.

**Does not end with (Text)**
- Checks whether the input (string) does not end with the value provided.

**Is empty (Text)**
- Checks whether the input (string) is empty based on the selected boolean value.

**Equals (Number)**
- Checks whether the input is equal to the numeric value provided.

**Not equals (Number)**
- Checks whether the input is not equal to the numeric value provided.

**Greater than (Number)**
- Checks whether the input is greater than the numeric value provided.

**Less than (Number)**
- Checks whether the input is less than the numeric value provided.

**Greater than or equals (Number)**
- Checks whether the input is greater than or equal to the numeric value provided.

**Less than or equals (Number)**
- Checks whether the input is less than or equal to the numeric value provided.

**Is positive (Number)**
- Checks whether the input is a positive numeric value based on the boolean value selected.

**Equals (Date)**
- Checks whether the input is equal to the date value provided. The format should be DD/MM/YYYY.

**Less than (Date)**
- Checks whether the input date comes before the date value provided.

**Greater than (Date)**
- Checks whether the input date comes after the date value provided.

**Less than or equals (Date)**
- Checks whether the input date comes before or on the date value provided.

**Greater than or equals (Date)**
- Checks whether the input date comes after or on the date value provided.

**Equals (Date/Time)**
- Checks whether the input equals the date/time value provided. The format should be DD/MM/YYYY.

**Less than (Date/Time)**
- Checks whether the input date comes before the date/time value provided.

**Greater than (Date/Time)**
- Checks whether the input date comes after the date/time value provided.

**Less than or equals (Date/Time)**
- Checks whether the input date comes before or on the date/time value provided.

**Greater than or equals (Date/Time)**
- Checks whether the input date comes after or on the date/time value provided.

**Has property (Object)**
- Checks whether the input (Object) contains the property (key) provided.

**Does not have property (Object)**
- Checks whether the input (Object) does not contain the property (key) provided.

**Is empty (Object)**
- Checks whether the input (Object) is empty, based on the selected boolean value.

**Is an object (Input)**
- Checks whether the input is an object, based on the selected boolean value.

**Is a number (Input)**
- Checks whether the input is a number, based on the selected boolean value.

**Is an array (Input)**
- Checks whether the input is an array, based on the selected boolean value.

**Is a number text (Input)**
- Checks whether the input is a number text, based on the boolean value selected.

**Is a text (Input)**
- Checks whether the input is a text (string), based on the boolean value selected.

**Is a date (Input)**
- Checks whether the input is a date, based on the boolean value selected.

**Is a falsy value(Input)**
- Checks whether the input is a falsy value (null/empty) etc., or not; based on the boolean value selected.

**Data type (Input)**
- Checks whether the input data type matches the data type selected in the value field.

**Is empty (Array)**
- Checks whether the input (array) is empty, based on the boolean value selected.

**Value exists (Array)**
- Checks whether the input (array) contains the value provided.

**Value does not exists (Array)**
- Checks whether the input (array) does not contain the value provided.

**Length greater than (Array)**
- Checks whether the length of the input (array) is greater than the length provided in the value field.

**Length less than (Array)**
- Checks whether the length of the input (array) is less than the length provided in the value field.

## Common questions

**How many Trigger Conditions can I add?**  
You can add multiple operators and customize the trigger condition.

**Do text matching operators care about letter case?**  
Yes for **Matches (Text)** and **Does not match (Text)**; no for **Loosely matches (Text)** and **Does not loosely match (Text)**.

**What date format should I use for date and date/time operators?**  
The format should be DD/MM/YYYY.

**Can Trigger Conditions check input types (like object, array, number, or text)?**  
Yes, there are operators such as **Is an object (Input)**, **Is a number (Input)**, **Is an array (Input)**, **Is a text (Input)**, and **Data type (Input)**.