---
title: "Creating JavaScript Templates"
description: "JavaScript Templates enable users to define custom JavaScript functions that transform data structures while maintaining code simplicity and readability…"
url: /lytics/creating-javascript-templates
---

# Creating JavaScript Templates

## Creating JavaScript Templates

## JavaScript Templates

JavaScript Templates enable users to define custom JavaScript functions that transform data structures while maintaining code simplicity and readability. This system provides a more powerful alternative to traditional templating solutions such as Handlebars.js and Jsonnet.

### Implementation Overview

JavaScript Templates are implemented through a function named template that processes input data and returns a transformed JSON-able output structure. The function **must** be named template and accept a single data argument — that is the entity record the template renders against. The function can be created either manually or through the AI-powered Template Co-Pilot.

### Creating JavaScript Templates

#### UI Implementation

1.  Access the **Template Builder**
2.  Define the desired JSON output structure in the Template Co-Pilot form (Box 2)
3.  Provide additional context for the AI Co-Pilot
4.  Generate the template using the Generate Template button
5.  Customize the generated template in the **Customize Template** form

![29da2aa61d45baf300fbb738487a4c1b726f59d45be7cf3b6a69a0f7652e0402-Screenshot_2025-04-21_at_2.25.04_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amae5f797d7446c87b/ecae126264df8ada60b8bce7/29da2aa61d45baf300fbb738487a4c1b726f59d45be7cf3b6a69a0f7652e0402-Screenshot_2025-04-21_at_2.25.04_PM.png)

In the example above, our desired JSON output contains a users' email, name, ltv, and purchase count. To guide the AI Co-Pilot, we'll add an additional prompt to combine the first and last fields on the user profile to derive the name field in the output. Once the JavaScript function is generated, the function can be edited to customize the Template.

#### API Implementation

Templates can be created programmatically using the Lytics API. The following example demonstrates template creation via API:

```
echo "function template(data) {
  const email = data['email'] || '';
  const firstName = data['first_name'] || '';
  const lastName = data['last_name'] || '';
  const name = `${firstName} ${lastName}`.trim();
  const ltv = data['ltv'] || 0;
  const purchase_count = data['shopify_purchase_ct'] || 0;

  return {
    email,
    name,
    ltv,
    purchase_count,
  };
}" | http https://api.lytics.io/v2/template key==<your API key> name=="JS Template" type=="js1"
```

### Function Structure

The template function follows this pattern:

```
function template(data) {
  // Field extraction with fallback values
  const email = data['email'] || '';
  const firstName = data['first_name'] || '';
  const lastName = data['last_name'] || '';

  // Data transformation
  const name = `${firstName} ${lastName}`.trim();

  // Return transformed structure
  return {
    email,
    name,
    // Additional fields
  };
}
```

### Implementation Guidelines

#### Data Access

-   Utilize bracket notation or dot notation for field access: data\['field\_name'\]or data.field\_name
-   Implement fallback values for all fields
-   Handle nested object access appropriately

#### Error Handling

-   Implement graceful field absence handling
-   Utilize appropriate default values
-   Validate data types when necessary

#### Best Practices

-   Maintain transformation simplicity
-   Avoid complex nested operations
-   Utilize efficient data structures

### Helper Library

JavaScript templates have access to a built-in helper library for common operations on profiles, segment events, hashing, and job/auth configuration. The helpers are available as top-level globals — no import is needed. Examples:

-   segSlug(data) — concatenates segment-event slugs for slug-suffixed event names
-   sha256(value) / sha1(value) — hash a value for sending to advertising platforms
-   jobConfGet(key, default) / authConfGet(key, default) — read job and auth configuration without manually parsing the env-var globals
-   profileFieldFromConfig(...) and hashedProfileFieldFromConfig(...) — the canonical pattern for "look up the field name in job config, then read it from the entity (and optionally hash it)"
-   unixTimestamp() / unixTimestampDateTime(dt, tz) — current and parsed timestamps
-   toPhoneE164(phone, region) — normalize a phone number to E.164 format
-   hmacSha256(message, key) — sign webhook payloads

See [Using the JavaScript Library](/docs/lytics/using-the-javascript-library) for the complete reference, signatures, and a full GA4-style audience-export example.

### Troubleshooting

#### Common Issues

1.  **Missing Fields**
    -   Implement fallback values
    -   Validate field existence
    -   Handle null/undefined cases
2.  **Type Errors**
    -   Validate data types
    -   Implement type conversion
    -   Utilize appropriate fallbacks

For additional information or specific use cases, please refer to the API documentation or contact technical support.
