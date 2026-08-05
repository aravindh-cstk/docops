---
title: "assetFields"
description: "The `assetFields` method determines the optional asset field groups to include in the response. Note: The assetFields method is supported only in the North America (NA) region. Response Behavior: Retrieves only the requested asset metadata, keeping asset payloads smaller. Applies to published assets from the asset API. It applies to both single-asset responses and multi-asset responses. Does not filter which assets appear in the response or restrict them by file type (MIME). Requests optional metadata groups in addition to the core fields on `BaseAsset` , such as the file MIME type ( `content_type` ) and the folder flag ( `is_dir` ). It does not replace or modify those fields. Note: On asset objects, `content_type` represents the file’s MIME type, not a Contentstack CMS content type. Supported field groups (values): `user_defined_fields` : Includes stack-defined custom fields on the asset (author-managed key-value data). `embedded_metadata` : Includes metadata extracted from the file (e.g, EXIF or IPTC). `ai_generated_metadata` : Includes AI-generated data (e.g., tags, descriptions, classifications). `visual_markups` : Includes annotation data (e.g., regions, notes, overlays)"
url: "https://www.contentstack.com/asset-assetFields"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## assetFields

The `assetFields` method determines the optional asset field groups to include in the response.

**Note:** The assetFields method is supported only in the North America (NA) region.

**Response Behavior:**

- Retrieves only the requested asset metadata, keeping asset payloads smaller.
- Applies to published assets from the asset API. It applies to both single-asset responses and multi-asset responses.
- Does not filter which assets appear in the response or restrict them by file type (MIME).
- Requests optional metadata groups in addition to the core fields on `BaseAsset`, such as the file MIME type (`content_type`) and the folder flag (`is_dir`). It does not replace or modify those fields.

**Note:** On asset objects, `content_type` represents the file’s MIME type, not a Contentstack CMS content type.

**Supported field groups (values):**

- `user_defined_fields`: Includes stack-defined custom fields on the asset (author-managed key-value data).
- `embedded_metadata`: Includes metadata extracted from the file (e.g, EXIF or IPTC).
- `ai_generated_metadata`: Includes AI-generated data (e.g., tags, descriptions, classifications).
- `visual_markups`: Includes annotation data (e.g., regions, notes, overlays)

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldGroups | string | No | NA | Keys that specify asset field groups to retrieve. Provide them as arguments before `.fetch()` or `.find()` . |

Returns:
Type
Asset when called with UID. AssetQuery, when called without a UID

**Note:** The SDK forwards invalid or empty `fieldGroup` strings without validating them. The Delivery API handles the errors.

**Usage and Behavior:**

- Chain on a single asset or on an asset query, for example:stack.asset('<ASSET_UID>').assetFields(...).fetch()or`stack.asset().assetFields(...).find()`.
- Multiple calls overwrite prior values. Calling with no arguments omits `asset_fields[]` from the request.

**Example:**

The following example fetches a single asset with selected field groups. The promise resolves to one asset as `BlogAsset`, including the requested field groups.

```
import contentstack, { BaseAsset } from '@contentstack/delivery-sdk';
interface BlogAsset extends BaseAsset {
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
async function main() {
  try {
    const stack = contentstack.stack({
      apiKey: '<API_KEY>',
      deliveryToken: '<DELIVERY_TOKEN>',
      environment: '<ENVIRONMENT>',
    });
    const assetResponse = await stack
      .asset('<ASSET_UID>')
      .assetFields(
        'user_defined_fields',
        'embedded_metadata',
        'ai_generated_metadata',
        'visual_markups'
      )
      // Generic tells TypeScript the resolved asset shape (including optional field groups above).
      .fetch<BlogAsset>();
    console.log(assetResponse);
  } catch (error) {
    console.error(error);
  }
}
```

The following example runs an asset query with two field groups and reads results from assets on the find response.

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
      .asset()
      .assetFields('ai_generated_metadata', 'visual_markups')
      .find();
    // Collection responses use `assets` on FindResponse (not `items`).
    console.log(result.assets);
  } catch (error) {
    console.error(error);
  }
}
```

**Data Retrieval Behavior:**

- **Typing dynamic responses:** Optional blocks returned for `assetFields` are not part of the SDK’s `BaseAsset` type and vary by stack. Extend `BaseAsset` in your own interface, pass that type to `.fetch<MyAsset>()` or `.find<MyAsset>()`, then validate or narrow the payload before use.
- **Pagination and execution:** Terminal methods (`.fetch()`, `.find()`) trigger a single HTTP request. Control page size and offset using query modifiers (e.g., `limit`, `skip`), or the system falls back to API defaults.

**Additional Resources:** For detailed API payload schemas and default behaviors, refer to [Contentstack Delivery API Documentation](/docs/developers/apis/content-delivery-api#api-best-practices).
