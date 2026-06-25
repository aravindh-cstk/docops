---
title: "[Headless CMS | Default URL Pattern] - Use Default URL Pattern"
description: Use Default URL Pattern
url: https://www.contentstack.com/docs/headless-cms/use-default-url-pattern
product: Contentstack
doc_type: guide
audience:
  - developers
version: v2
last_updated: 2026-05-26
---

# [Headless CMS | Default URL Pattern] - Use Default URL Pattern

This page explains how to configure and use default URL patterns for generating entry URLs after adding a URL field. It is intended for developers and content modelers who set up content types and need consistent, structured URLs, especially when URL Management V2 is enabled.

## Use Default URL Pattern

After adding a [URL](./url.md) field, you can define how entry URLs are generated using a URL pattern.

A URL pattern determines the structure of your URLs by combining static text and dynamic values (tokens). These values are replaced with actual entry data when the URL is generated.

**Note:** URL pattern configuration and advanced formatting options are available only when **URL Management V2** is enabled.

## Configure URL Patterns

You can define URL patterns using a combination of:
- Static text (for example, `/blog/`)
- Values derived from fields such as title or date
- Locale values
- Field values
- Taxonomy values

Enter a pattern manually or select supported values from the dropdown.

**Example: **`/blog/:locale/:field[title]`

This generates URLs such as:

```
// blog/:locale/:field[title]
www.examplesite.com/blog/en-us/my-first-page
```

To add and configure a URL field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click **Content Models**.
- Select the content type where you want to add the URL field.

      **Tip:** You can also click the **vertical ellipsis** icon in the **Actions** column next to the content type and select **Edit**.
- In the **Content Type Builder** page, hover over a field, and click the “+” (Insert a field) icon.
- Click the **URL** field from the field selector to add it to your content type.
- In the **URL Properties** modal, you can configure the URL settings as needed.

  **Note:**
- For content types set as **Multiple**, both the **Basic** and **Advanced** tabs appear in the **URL Properties** modal.
- For content types set as **Single**, only the **Advanced** tab appears.

## Supported Pattern Values

You can include the following values in your URL pattern:

| Type | Description |
|---|---|
| Title, date, month, year | System-generated entry values |
| Locale code | Adds locale code (for example, `en-us`) |
| Locale full name | Adds locale name (for example, `English (US)`) |
| Field values | Uses values from supported text fields |
| Taxonomy | Uses taxonomy values in the URL |

**Note:** Only single-value text fields (such as Single Line Textbox or Multi Line Textbox) can be used. Multiple-value fields are not supported.

### Example Patterns

| Pattern | Generated URL |
|---|---|
| `/blog/:field[title]` | `/blog/my-first-page` |
| `/:locale/:field[title]` | `/en-us/my-first-page` |
| `/shop/:taxonomy[category]/:field[title]` | `/shop/electronics/my-first-page` |

## Configure URL Formatting

You can control how URL values are formatted using advanced settings.

Available options include:
- **Case:** Convert values to lowercase, uppercase, or capitalized format
- **Word separator:** Replace spaces and special characters with a separator such as hyphen (`-`), underscore (`_`), or plus (`+`)
- **JSON mapping:** Define custom character or string replacements for URL formatting
- **Default empty value:** Define a fallback value when a field is empty
- **Regex rules:** Apply custom formatting rules to transform URL values

These settings help ensure URLs follow your organization’s standards. URL formatting is applied in the following order: default value, casing, word separator, JSON mapping, and regex rules.

## Editing and Customizing URLs

You can edit or modify the URL when creating or editing an entry.

Depending on your configuration:
- URLs may be generated automatically based on the defined pattern
- URLs may update when referenced values change
- You can manually override the generated URL if allowed

### Disable URL Auto-Generation

If auto-generation is disabled, the URL field remains empty, allowing you to enter a custom URL manually.

Using default URL patterns helps you generate consistent and structured URLs across your entries. With the ability to customize patterns, control formatting, and override URLs when needed, you can ensure your URLs remain clean, readable, and optimized for your application’s requirements.

## Common questions

### Do I need URL Management V2 to configure URL patterns?
**Note:** URL pattern configuration and advanced formatting options are available only when **URL Management V2** is enabled.

### What field types can be used as `:field[...]` values in a URL pattern?
**Note:** Only single-value text fields (such as Single Line Textbox or Multi Line Textbox) can be used. Multiple-value fields are not supported.

### Can I manually change a URL after it is generated?
You can edit or modify the URL when creating or editing an entry.

Depending on your configuration:
- URLs may be generated automatically based on the defined pattern
- URLs may update when referenced values change
- You can manually override the generated URL if allowed

### What happens if URL auto-generation is disabled?
If auto-generation is disabled, the URL field remains empty, allowing you to enter a custom URL manually.