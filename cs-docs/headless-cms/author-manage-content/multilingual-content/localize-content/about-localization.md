---
title: "About Localization"
description: "Learn how localization works in Contentstack, including fallback behavior, publishing, and Delivery API responses across locales and environments."
url: /headless-cms/about-localization
uid: blt76f45cde7063c6fd
---

# About Localization

## About Localization

Localization is the process of adapting content for different locales. When you localize an entry, it no longer inherits values from its fallback language and becomes an independent version.

Unlocalized entries inherit content from their fallback locale. To make changes specific to a locale, you must first localize the entry. This is done by saving the entry in the target locale.

Once localized, the entry becomes independent and can have its own content, version history, and publishing status.

## How Localization Works

When an entry is localized:

-   The inheritance from the master or fallback locale is removed.
-   A separate, independent copy of the entry is created.
-   The structure remains the same as the original entry, but the content can differ.
-   The localized entry maintains its own versioning and publishing lifecycle.

As shown in the diagram below, localizing an entry breaks the inheritance chain between master, fallback, and child entries, resulting in a standalone localized version.

![How Localization Works.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2b2d125602f8815c/a6eefdccd7ae746f953a92a9/How_Localization_Works.png)

Once an entry has been localized, you can also unlocalize it at any time to restore inheritance from the fallback locale.

## Localization and Delivery API Behavior

Localization determines how content is returned in Delivery API responses across locales and environments. This is particularly important when building frontend applications or debugging content issues.

-   If no locale is specified in the request, content is returned in the master locale.
-   If a locale is specified, content is returned for that localized entry (if it is published).
-   If the specified locale is not published, you can use include\_fallback=true to return content from the configured fallback locale.
-   To verify publish status across locales and environments, use include\_publish\_details=true.

**Note:** Fallback behavior works only if a fallback locale is configured in your stack.

Because localization creates independent versions of entries, content and publish status can vary across locales.

## Publish Checklist for Localized Entries

Before troubleshooting missing or incorrect localized content, ensure that:

-   The entry is localized in the target locale.
-   The localized entry is saved and published.
-   The entry is published to the correct environment.
-   The API request includes the correct locale.
-   If fallback behavior is expected, include\_fallback=true is included in the request.

## Example API Requests

### Fetch a localized entry

Use this request to retrieve content for a specific locale:

```
curl -sS "https://<cdn-host>/v3/content_types/<content_type_uid>/entries/<entry_uid>?environment=<environment>&locale=fr-fr" \
 -H "api_key: <stack_api_key>" \
 -H "access_token: <delivery_token>"
```

### Fetch content with fallback

Use this when the localized version may not be published:

```
curl -sS "https://<cdn-host>/v3/content_types/<content_type_uid>/entries/<entry_uid>?environment=<environment>&locale=fr-fr&include_fallback=true" \
 -H "api_key: <stack_api_key>" \
 -H "access_token: <delivery_token>"
```

### Fetch with publish details

Use this to debug publish status across locales and environments:

```
curl -sS "https://<cdn-host>/v3/content_types/<content_type_uid>/entries/<entry_uid>?environment=<environment>&locale=fr-fr&include_publish_details=true" \
 -H "api_key: <stack_api_key>" \
 -H "access_token: <delivery_token>"
```

## Troubleshooting Localized Responses

| Symptom | Likely Cause | What to Check |
| --- | --- | --- |
| Locale returns empty or missing fields | Localized entry is not published | Verify publish status for the locale and environment |
| Incorrect language is returned | Locale not specified in request | Ensure locale=<target-locale> is included |
| Fallback not working as expected | Fallback configuration mismatch | Confirm fallback locale setup and use include\_fallback=true |
| Works in one environment but not another | Environment mismatch | Verify the environment parameter and token scope |

**Note:**

-   Localization and publishing are closely linked. A localized entry must be published to be available via the Delivery API.
-   Use include\_publish\_details=true to debug differences between saved and published states.
-   Validate locale behavior during integration testing, including:
    -   Master locale response
    -   Localized locale response
    -   Fallback behavior
