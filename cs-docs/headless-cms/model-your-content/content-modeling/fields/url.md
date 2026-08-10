---
title: "URL"
description: "Configure the URL field in Contentstack, apply default patterns, and enforce unique URLs to ensure consistent and SEO-friendly entry paths."
url: /headless-cms/url
---

# URL

## URL

Use the **URL** field to define the relative path of your webpage (for example, /home or /projects/new-project) where your content is published. This helps maintain consistent routing and improves content discoverability.

You can configure [field properties](/docs/headless-cms/about-field-properties) and set a [default URL pattern](/docs/headless-cms/understand-default-url-pattern) for entries of a specific content type.

## Configure URL Field Properties

You can:

-   Edit the help text shown to content creators
-   Add a placeholder to indicate the expected input format
-   Provide an instructional value with examples or context
-   Set the field as mandatory or optional based on your validation needs

**Tip:** Use the **Instruction Value** to provide examples such as /about or /blog/title to guide contributors.

After you configure this field in a content type, it appears in the entry editor.

**Note:**

-   You can only add the URL field at the parent level. It cannot be added within modular blocks or group fields.
-   You can’t set URL field properties for content types set to [Single](/docs/headless-cms/single-vs-multiple-content-types#single).

## Set Regex Validation for a URL Field

You can add a regular expression (regex) to a URL field to validate accepted URL formats. If a value does not match the pattern, a custom validation error message appears.

Add regex validation when a URL field must follow a specific structure, for example, when you accept only HTTPS links, only URLs from a specific domain, or only paths that match a naming convention.

To set regex validation for a URL field, perform the following steps:

1.  In your content type, add a URL field or edit an existing one.
2.  Open the field properties and go to the **Advanced** section.
3.  In the **Validation (Regex)** field, enter your regular expression or the regex pattern.
4.  In the **Validation Error Message** field, enter the message to display when a value does not match the pattern.
5.  **Save** the content type.

**Note:** Validation is applied when an entry is saved. If a value does not match the regex, the configured validation message appears. Learn more about the [Validation (Regex)](/docs/headless-cms/validation-regex) property through our documentation.

## Configure URL Prefixes

You can define a prefix to prepend a static path to generated URLs. Prefixes help organize URLs into consistent sections such as blogs, products, documentation, or campaigns.

**Examples**:

-   /blog
-   /products
-   /docs

When a prefix is configured, it is automatically added before the generated URL pattern.

**Example**:

-   Prefix: /blog
-   URL pattern: /:year/:month/:field\[title\]

**Generated URL**: /blog/2026/04/my-first-post

## Configure URL Patterns

You can define URL patterns and prefixes to automatically generate structured entry URLs. Use patterns when you want consistent, scalable URL structures across entries.

In the **Content Type Builder**, you can enter a pattern manually or select values from a dropdown. These values are replaced with entry data when generating the URL.

**Note:** URL pattern configuration and advanced formatting options are available only with **URL Management V2**. Contact our [support](mailto:support@contentstack.com) team to enable this feature.

You can include:

-   System values such as title, date, month, or year
-   Locale values such as locale code or full locale name
-   Values from supported root-level text fields. Multiple fields, JSON Rich Text Editor, and Rich Text Editor fields are excluded.
-   Taxonomy values

**Syntax:** /blog/:locale/:field\[title\]

**Example**: /blog/en-us/my-new-post

**Note:** Only single-value text fields (such as Single Line Textbox or Multi Line Textbox) can be used in URL patterns. Multiple-value fields are not supported.

### Configure URL Formatting

In the **Advanced** tab, you can control how URL values are formatted.

You can define:

-   **Case:** Convert values to lowercase, uppercase, or capitalized format
-   **Word separator:** Replace spaces and special characters with a separator such as a hyphen (\-), underscore (\_), or plus (+)
-   **JSON mapping**: Define custom character or string replacements for URL formatting
-   **Default empty value:** Specify a fallback value when a field does not contain content
-   **Regex rules:** Apply custom formatting rules to transform URL values

## Enforce Unique Entry URLs Using the Content Management API

Use the [Content Management API](/docs/developers/apis/content-management-api) to prevent duplicate entry URLs across your [stack](/docs/headless-cms/about-stack).

To enforce unique URLs using the API, perform the following steps:

1.  Authenticate to Contentstack using your [Authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-auth-tokens) and the stack’s [Management Token](/docs/headless-cms/types-of-tokens#management-tokens).
2.  Make a request to the [Add Stack Settings](/docs/developers/apis/content-management-api/stacks#add-stack-settings) API. Use a REST API client (e.g., Postman) to run your API call.
3.  In the **Body** section of your request, include the "enforce\_unique\_urls": true parameter to maintain unique URLs across your stack.

If a duplicate URL is detected, the URL field displays an error and prevents publishing until a unique URL is entered.

**Additional Resources:**

-   For details on configuring default patterns, refer to our [Use Default URL Pattern](/docs/headless-cms/use-default-url-pattern) documentation.
-   To know more about redirecting URLs, read our documentation on [Redirecting URLs](/docs/developers/how-to-guides/redirecting-urls).
-   Learn more about [Field Visibility Rules](/docs/headless-cms/about-field-visibility-rules) and how to configure them.

## API Reference

To enforce unique entry URLs via API, refer to the [Add Stack Settings](/docs/developers/apis/content-management-api/stacks#add-stack-settings) API request.
