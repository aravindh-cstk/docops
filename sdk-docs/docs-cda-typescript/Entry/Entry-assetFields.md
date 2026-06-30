---
title: "assetFields"
description: "The `assetFields` method specifies the optional asset field groups to include for assets returned with an entry. Note: The `assetFields` method is supported only in the North America (NA) region. Response Behavior: Retrieves only the required asset metadata, keeping the entry payloads smaller when entries reference assets. Applies to published assets referenced or embedded on the entry. It applies to both single-entry and multi-entry responses. Adds optional metadata fields to each asset in the response. It does not filter assets or control file types. Requests optional metadata groups in addition to standard asset fields such as file MIME type ( `content_type` ) and folder flag ( `is_dir` ). It does not replace or modify core asset fields. Note: On asset objects, `content_type` represents the file’s MIME type, not a Contentstack CMS content type. Supported field groups (values): `user_defined_fields` : Includes stack-defined custom fields on the asset (author-managed key-value data). `embedded_metadata` : Includes metadata extracted from the file (e.g, EXIF or IPTC). `ai_generated_metadata` : Includes AI-generated data (e.g., tags, descriptions, classifications). `visual_markups` : Includes annotation data (e.g., regions, notes, overlays)"
url: "https://www.contentstack.com/typescript-delivery-entry-assetfields"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## assetFields

The `assetFields` method specifies the optional asset field groups to include for assets returned with an entry.

**Note:** The `assetFields` method is supported only in the North America (NA) region.

**Response Behavior:**

- Retrieves only the required asset metadata, keeping the entry payloads smaller when entries reference assets.
- Applies to published assets referenced or embedded on the entry. It applies to both single-entry and multi-entry responses.
- Adds optional metadata fields to each asset in the response. It does not filter assets or control file types.
- Requests optional metadata groups in addition to standard asset fields such as file MIME type (`content_type`) and folder flag (`is_dir`). It does not replace or modify core asset fields.

**Note:** On asset objects, `content_type` represents the file’s MIME type, not a Contentstack CMS content type.

**Supported field groups (values):**

- `user_defined_fields`: Includes stack-defined custom fields on the asset (author-managed key-value data).
- `embedded_metadata`: Includes metadata extracted from the file (e.g, EXIF or IPTC).
- `ai_generated_metadata`: Includes AI-generated data (e.g., tags, descriptions, classifications).
- `visual_markups`: Includes annotation data (e.g., regions, notes, overlays)

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldGroups | string | No | NA | Keys that specify asset field groups to retrieve for assets in the entry response. Provide them as arguments before `.fetch()` or `.find()` . |

Returns:
Type
Entry, if called with a UID. Entries, if called without a UID.

**Note:** The SDK forwards invalid or empty field group strings without validating them. The API handles the errors.

**Usage and Behavior:**

- Chain on a single entry or on an entry query, for example:`stack.contentType('<CONTENT_TYPE_UID>').entry('<ENTRY_UID>').assetFields(...).fetch()`or`stack.contentType('<CONTENT_TYPE_UID>').entry().assetFields(...).find()`.
- Multiple calls overwrite prior values. Calling with no arguments omits `asset_fields[]` from the request.

**Examples:**

The following example fetches a single `BlogEntry`. Nested assets include the optional metadata. Asset fields and structure depend on your content type.

```
import contentstack, { BaseAsset, BaseEntry } from '@contentstack/delivery-sdk';

interface HeroAsset extends BaseAsset {
  user_defined_fields?: {
    photographer?: string;
    license?: string;
  };
  ai_generated_metadata?: {
    tags?: string[];
    description?: string;
  };
  // Visual annotation / overlay payload shape is app-specific; use `unknown` until you define a narrow interface.
  visual_markups?: unknown;
  // Binary-embedded file metadata (e.g. EXIF-style); structure varies by file type. Type narrowly or validate at runtime.
  embedded_metadata?: unknown;
}

interface BlogEntry extends BaseEntry {
  // Replace `hero_image` with your file-field UID; linked asset shape matches your stack.
  hero_image?: HeroAsset;
}

async function main() {
  try {
    const stack = contentstack.stack({
      apiKey: '<API_KEY>',
      deliveryToken: '<DELIVERY_TOKEN>',
      environment: '<ENVIRONMENT>',
    });
    const entryResponse = await stack
      .contentType('<CONTENT_TYPE_UID>')
      .entry('<ENTRY_UID>')
      .assetFields(
        'user_defined_fields',
        'embedded_metadata',
        'ai_generated_metadata',
        'visual_markups'
      )
      // Generic tells TypeScript the resolved entry shape (including nested asset field groups above).
      .fetch<BlogEntry>();
    console.log(entryResponse);
  } catch (error) {
    console.error(error);
  }
}
```

This example runs an entry query with two asset field groups and reads results from `entries` on the find response.

```
import contentstack from '@contentstack/delivery-sdk';
async function main() {
  try {
    const stack = contentstack.stack({
      apiKey: '<API_KEY>',
      deliveryToken: '<DELIVERY_TOKEN>',
      environment: '<ENVIRONMENT>',
    });
    const result = await stack
      .contentType('<CONTENT_TYPE_UID>')
      .entry()
      .assetFields('ai_generated_metadata', 'visual_markups')
      .find();
    // Collection responses use `entries` on FindResponse (not `items`).
    console.log(result.entries);
  } catch (error) {
    console.error(error);
  }
}
```

**Data Retrieval Behavior:**

- **Typing dynamic responses:** Optional blocks returned for `assetFields` on nested assets are not part of the SDK’s `BaseAsset` type and vary by stack and field. Extend and compose `BaseAsset` in types that match your entry’s file fields, pass the entry type to `.fetch<MyEntry>()` or `.find<MyEntry>()`, then validate or narrow the payload before use.
- **Pagination and execution:** Terminal methods (`.fetch()`, `.find()`) trigger a single HTTP request. Control page size and offset using query modifiers (e.g., `limit`, `skip`), or the system falls back to API defaults.

**Additional Resources:** For detailed API payload schemas and default behaviors, refer to [Contentstack Delivery API Documentation](/docs/developers/apis/content-delivery-api#api-best-practices).
