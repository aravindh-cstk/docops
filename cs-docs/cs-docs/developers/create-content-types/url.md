---
title: "[Headless CMS | Fields] - URL"
description: Use the URL field to define relative webpage paths, configure URL field properties, prefixes, patterns, formatting, and enforce unique entry URLs via the Content Management API.
url: https://www.contentstack.com/docs/headless-cms/url
product: Contentstack
doc_type: field-reference
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-05-26
---

# [Headless CMS | Fields] - URL

This page explains how to use and configure the **URL** field in Contentstack content types, including field properties, prefixes, patterns, formatting, and enforcing unique URLs via API. It is intended for developers and content modelers setting up consistent routing and URL generation for entries.

### URL

Use the **URL** field to define the relative path of your webpage (for example, `/home` or `/projects/new-project`) where your content is published. This helps maintain consistent routing and improves content discoverability.

You can configure [field properties](/docs/developers/create-content-types/about-field-properties) and set a [default URL pattern](/docs/developers/create-content-types/understand-default-url-pattern) for entries of a specific content type.

## Configure URL Field Properties

You can:
- Edit the help text shown to content creators
- Add a placeholder to indicate the expected input format
- Provide an instructional value with examples or context
- Set the field as mandatory or optional based on your validation needs

**Tip:** Use the **Instruction Value** to provide examples such as `/about` or `/blog/title` to guide contributors.

After you configure this field in a content type, it appears in the entry editor.

**Note:**
- You can only add the URL field at the parent level. It cannot be added within modular blocks or group fields.
- You can’t set URL field properties for content types set to [Single](/docs/developers/create-content-types/single-vs-multiple-content-types#single).

## Configure URL Prefixes

You can define a prefix to prepend a static path to generated URLs. Prefixes help organize URLs into consistent sections such as blogs, products, documentation, or campaigns.

**Examples**:
- `/blog`
- `/products`
- `/docs`

When a prefix is configured, it is automatically added before the generated URL pattern.

**Example**:
- Prefix: `/blog`
- URL pattern: `/:year/:month/:field[title]`

**Generated URL**: `/blog/2026/04/my-first-post`

## Configure URL Patterns

You can define URL patterns and prefixes to automatically generate structured entry URLs. Use patterns when you want consistent, scalable URL structures across entries.

In the **Content Type Builder**, you can enter a pattern manually or select values from a dropdown. These values are replaced with entry data when generating the URL.

**Note:** URL pattern configuration and advanced formatting options are available only when **URL Management V2** is enabled for your plan. Check your version under **Settings > Stack Settings** or contact support to enable V2.

You can include:
- System values such as title, date, month, or year
- Locale values such as locale code or full locale name
- Values from supported root-level text fields. Multiple fields, JSON Rich Text Editor, and Rich Text Editor fields are excluded.
- Taxonomy values

**Syntax: **`/blog/:locale/:field[title]`

**Example**: /blog/en-us/my-new-post

**Note:** Only single-value text fields (such as Single Line Textbox or Multi Line Textbox) can be used in URL patterns. Multiple-value fields are not supported.

### Configure URL Formatting

In the **Advanced** tab, you can control how URL values are formatted.

You can define:
- **Case:** Convert values to lowercase, uppercase, or capitalized format
- **Word separator:** Replace spaces and special characters with a separator such as a hyphen (`-`), underscore (`_`), or plus (`+`)
- **JSON mapping**: Define custom character or string replacements for URL formatting
- **Default empty value:** Specify a fallback value when a field does not contain content
- **Regex rules:** Apply custom formatting rules to transform URL values

## Enforce Unique Entry URLs Using the Content Management API

Use the [Content Management API](/docs/developers/apis/content-management-api) to prevent duplicate entry URLs across your [stack](/docs/developers/set-up-stack/about-stack).

To enforce unique URLs using the API, perform the following steps:
- Authenticate to Contentstack using your [Authtoken](/docs/developers/create-tokens/types-of-tokens#authentication-tokens-auth-tokens) and the stack’s [Management Token](/docs/developers/create-tokens/types-of-tokens#management-tokens).
- Make a request to the [Add Stack Settings](/docs/developers/apis/content-management-api#add-stack-settings) API. Use a REST API client (e.g., Postman) to run your API call.
- In the **Body** section of your request, include the `"enforce_unique_urls": true` parameter to maintain unique URLs across your stack.

If a duplicate URL is detected, the URL field displays an error and prevents publishing until a unique URL is entered.

**Additional Resources:**
- For details on configuring default patterns, refer to our [Use Default URL Pattern](/docs/developers/create-content-types/use-default-url-pattern) documentation.
- To know more about redirecting URLs, read our documentation on [Redirecting URLs](/docs/developers/how-to-guides/redirecting-urls).
- Learn more about [Field Visibility Rules](/docs/developers/create-content-types/about-field-visibility-rules) and how to configure them.

## API Reference

To enforce unique entry URLs via API, refer to the [Add Stack Settings](/docs/developers/apis/content-management-api#add-stack-settings) API request.

## Common questions

### Can I add the URL field inside modular blocks or group fields?
No. You can only add the URL field at the parent level. It cannot be added within modular blocks or group fields.

### What do I need enabled to configure URL patterns and advanced formatting?
URL pattern configuration and advanced formatting options are available only when **URL Management V2** is enabled for your plan.

### How do I enforce unique URLs across my stack?
Use the Content Management API and include the `"enforce_unique_urls": true` parameter in the **Body** of your request to the **Add Stack Settings** API.

### Can multiple-value fields be used in URL patterns?
No. Only single-value text fields (such as Single Line Textbox or Multi Line Textbox) can be used in URL patterns. Multiple-value fields are not supported.