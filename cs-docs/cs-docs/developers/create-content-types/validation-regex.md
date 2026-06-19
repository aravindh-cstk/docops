---
title: "[Field Properties] - Validation (Regex)"
description: The Validation (Regex) field property allows you to define custom validation rules for field values using regular expressions (regex).
url: https://www.contentstack.com/docs/headless-cms/validation-regex
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-modelers
version: v3
last_updated: 2026-05-25
---

# [Field Properties] - Validation (Regex)

This page explains how to use the **Validation (Regex)** field property in Contentstack to enforce custom input formats using regular expressions, including setup steps, example patterns, and best practices for performance and security. It is intended for developers and content modelers configuring field validations in content types, and should be used when built-in validations are insufficient.

## Validation (Regex)

The **Validation (Regex)** field property allows you to define custom validation rules for field values using regular expressions (regex). You can use regex validation to ensure users enter values in a specific format, such as email addresses, URLs, phone numbers, IDs, or dates.

When a field value does not match the configured regex pattern, Contentstack displays a validation error and prevents users from saving the entry.

Use regex validation when you need to:
- Enforce consistent formatting across entries
- Restrict invalid user input
- Validate structured values such as email addresses, URLs, IDs, or dates
- Apply custom validation rules beyond built-in field validations

The Validation (Regex) property is available only for the following field types:
- [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox)
- [Multi-Line Textbox](/docs/developers/create-content-types/multi-line-textbox)

## Add Regex Validation to a Field

To configure regex validation for a field, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](/docs/developers/set-up-stack/about-stack) and open the content type where you want to configure regex validation.
- Add or edit a **Single Line Textbox** or **Multi-Line Textbox** field.
- Open the field properties panel and click the **Advanced** tab.
- In the **Validation (Regex)** field, enter the required regex pattern.
- Save the content type.

When users enter a value that does not match the configured pattern, Contentstack displays a validation error and prevents the entry from being saved.

## Example Regex Patterns

The following examples demonstrate commonly used regex validation patterns.

### Validate an Email Address

Use the following regex pattern to validate email addresses:

```
^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$
```

### Validate a URL

Use the following regex pattern to validate URLs:

```
^(http:\/\/|https:\/\/)?www\.[a-zA-Z0-9:?&=._/-]+\.[a-zA-Z]{2,3}$
```

### Validate a Date Format

Use the following regex pattern to validate dates in the following formats:
- dd/mm/yyyy
- dd-mm-yyyy
- dd.mm.yyyy

This pattern also validates leap years.

```
^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$
```

## Regex Validation Best Practices

Use the following recommendations when creating regex validation rules in Contentstack.

### Keep Regex Patterns Simple

Avoid overly complex expressions with deeply nested groups or excessive repetition operators. Complex regex patterns can slow down validation and affect browser performance.

For example, avoid patterns such as:

```
^(a+)+$
```

Patterns like these can trigger excessive backtracking when validating long input strings.

Instead, use more specific and constrained patterns whenever possible.

### Avoid Nested Repetition Operators

Do not combine multiple repeating operators such as `*`, `+`, or `{}` inside nested groups unless necessary.

Problematic example:

```
(.+)+
```

Recommended approach:

```
.+
```

You can also define explicit character limits:

```
^[a-zA-Z0-9._-]{1,100}$
```

### Define Clear Input Boundaries

Use anchors (`^` and `) to validate the complete field value instead of partial matches.

Example:

```
^[a-zA-Z0-9._-]+$
```

This ensures that the entire input matches the expected format.

### Limit Unrestricted Wildcards

Avoid broad wildcard patterns such as:

```
.*.*
```

These patterns increase the number of matching combinations the browser must evaluate.

Instead, define expected character sets explicitly wherever possible.

### Test Regex Patterns with Large Inputs

Before using a regex pattern in production, test it against:
- Long text values
- Empty values
- Invalid characters
- Unexpected input formats
- Repeated character sequences

Testing helps identify validation gaps and performance issues early.

### Understand Browser-Based Regex Execution

Regex validation in Contentstack executes within the browser using the browser’s regular expression engine. Poorly optimized patterns can affect validation performance and responsiveness.

Inefficient regex patterns may:
- Slow down validation
- Freeze the browser tab
- Cause high CPU usage
- Result in validation failures

**Warning**: Complex regex patterns combined with large input values can negatively affect browser performance during entry creation and editing.

## Prevent Catastrophic Backtracking

When a regular expression contains complex matching logic or receives lengthy input strings, the browser may attempt millions of matching combinations while evaluating the validation rule. This behavior is known as catastrophic backtracking.

Catastrophic backtracking can:
- Freeze the browser
- Increase CPU usage significantly
- Slow down entry creation and editing
- Affect overall application performance

To reduce the risk of catastrophic backtracking:
- Avoid nested quantifiers
- Use explicit character classes instead of broad wildcards
- Add anchors (`^` and `) where applicable
- Restrict input length whenever possible
- Prefer specific patterns over ambiguous expressions

## Regex Security Considerations

Poorly optimized regex patterns can also increase the risk of Regular Expression Denial of Service (ReDoS) attacks.

A ReDoS attack occurs when a malicious or extremely large input causes the regex engine to consume excessive processing time.

To reduce security risks:
- Avoid ambiguous regex patterns
- Restrict unnecessary repetition operators
- Keep validation logic focused and predictable
- Test patterns with large and invalid input values

**Warning**: Inefficient regex patterns may expose applications to performance degradation and denial-of-service scenarios when processing malicious input values.

**Additional Resources**:
- Use the [Regex Validation CLI Plugin](https://assets.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbae3e9885165e3b2/Regex_Validation_CLI_Plugin_Doc) guide to identify potentially unsafe or invalid regex patterns within your stack.
- Refer to the [Regular Expressions](http://www.regular-expressions.info/) documentation for more information about regex syntax and usage.
- Learn more about [catastrophic backtracking](https://www.regular-expressions.info/catastrophic.html) and how to prevent inefficient regex processing.
- Refer to the [OWASP ReDoS](https://www.regular-expressions.info/redos.html) guide to understand regex-related security risks.

Regex validation helps enforce structured and consistent field input across your content models. Well-designed regex patterns improve content quality, reduce invalid input, and support predictable data formatting.

When creating regex validation rules, prefer simple and specific patterns, test them thoroughly with realistic input values, and avoid overly complex expressions that may affect browser performance or introduce security risks.

## Common questions

### Which field types support the Validation (Regex) property?
The Validation (Regex) property is available only for the following field types: **Single Line Textbox** and **Multi-Line Textbox**.

### What happens if a field value does not match the configured regex pattern?
When a field value does not match the configured regex pattern, Contentstack displays a validation error and prevents users from saving the entry.

### Where do I configure regex validation for a field?
Open the field properties panel for a **Single Line Textbox** or **Multi-Line Textbox** field, click the **Advanced** tab, and enter the pattern in the **Validation (Regex)** field.

### Why should I avoid complex regex patterns?
Complex regex patterns combined with large input values can negatively affect browser performance during entry creation and editing, and may increase the risk of catastrophic backtracking and ReDoS attacks.