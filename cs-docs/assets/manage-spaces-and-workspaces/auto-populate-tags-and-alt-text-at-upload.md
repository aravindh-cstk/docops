---
title: "Auto-Populate Tags and Alt Text at Upload"
description: "Configure a space so AI writes suggested tags and alt text into every new asset as it is uploaded, on the first version, with no review step."
url: /assets/auto-populate-tags-and-alt-text-at-upload
---

# Auto-Populate Tags and Alt Text at Upload

Auto-populate writes AI-suggested metadata into an asset while the asset is being created. When you enable it for a space, every image uploaded to that space arrives with tags applied and alt text in place, so the asset is searchable and accessible without a manual enrichment pass.

Auto-populate is configured per space and applies only to assets uploaded after you enable it. It is a space-level alternative to the per-asset **Suggest with AI** action, which stays available for teams that prefer to review each suggestion. For more information on the review-based flow, refer to the [Enhance Asset Management with AI](/docs/assets/enhance-asset-management-with-ai) document.

## When to Use Auto-Populate

Enable auto-populate when your team has already validated the quality of AI suggestions and reviewing each new upload has become the bottleneck. It suits high-volume ingest workflows, such as campaign drops or product photography batches, where every asset needs baseline metadata before anyone searches for it.

Keep auto-populate off when metadata accuracy is contractual or regulated, or when a subject-matter reviewer must approve wording before it reaches a live channel. In those cases, use the per-asset **Suggest with AI** action instead.

## Prerequisites

- An Assets space with AI enrichment available to your organization.
- The Assets Product admin, space admin, or space owner role. Configuring auto-populate requires the space settings edit permission.
- For alt text routed to a user-defined field, a single-line text field that is associated with the asset types you upload.

## How Auto-Populate Works

Auto-populate runs as part of asset creation, not as a follow-up edit:

1. You upload an asset to a space that has auto-populate enabled.
2. Assets sends the binary to the AI vault, which returns suggested tags and a suggested alt text description.
3. Assets filters the suggestions against your configuration and writes the surviving values into the asset.
4. The asset appears in the listing with the metadata already applied.

The write lands on version 1 of the asset. No second version is created, and the **Last Modified By** and **Last Modified At** values stay as the upload recorded them. Downstream consumers therefore must not expect a second version or a post-upload update event for the AI write.

Auto-populate is best-effort. If the AI vault or the metadata write fails, the asset is still created and the upload is not blocked. The failure is logged, and you can run **Suggest with AI** on the asset manually.

**Note:** AI-generated alt text is available in English only.

## Configure Auto-Populate for a Space

Auto-populate settings are stored on the space as an `ai_metadata` block and are saved through the space settings endpoint. Send only the section you are changing. Any key you omit keeps its stored value, so the tags section and the alt text section can be saved independently.

The following request enables both sections for a space, routing alt text to the **Description** field:

```json
{
  "settings": {
    "ai_metadata": {
      "auto_populate_tags": true,
      "tags_confidence_level": 0.8,
      "tags_max_count": 10,
      "auto_populate_alt_text": true,
      "alt_text_field_uid": null
    }
  }
}
```

Send the payload as a `PUT` request to `/api/spaces/{space_uid}/settings`. The general space update endpoint ignores an `ai_metadata` block, so use the settings endpoint for these values.

**Note:** Turning on a section requires that section's settings in the same request. Sending `auto_populate_tags` as `true` without both tag values, or `auto_populate_alt_text` as `true` without a stated destination, returns a `422` response naming the missing fields.

### Tags settings

| Field | Description |
| --- | --- |
| `auto_populate_tags` | Turns the tags section on or off. Defaults to off. |
| `tags_confidence_level` | The minimum confidence a suggested tag needs to be written, as a fraction between `0.1` and `1`. A value of `0.8` keeps tags the AI vault scored at 88 percent and above. |
| `tags_max_count` | The maximum number of AI tags written to one asset. The minimum value is `1`. |

### Alt text settings

| Field | Description |
| --- | --- |
| `auto_populate_alt_text` | Turns the alt text section on or off. Defaults to off. |
| `alt_text_field_uid` | The destination for the alt text. Send `null` to write to the **Description** system field, or the UID of a single-line text user-defined field to write there. Omit the key to keep the stored destination. |

A space has exactly one alt text destination. Assets does not write the same alt text to both **Description** and a user-defined field.

## How AI Tags Are Selected

Assets applies your tag configuration in this order:

1. Discards every suggested tag scored below `tags_confidence_level`.
2. Removes duplicates, ignoring case, including tags already on the asset.
3. Keeps at most `tags_max_count` of the remaining suggestions.
4. Appends the result to the tags supplied with the upload.

Tags supplied with the upload are never removed and do not count against `tags_max_count`. The cap bounds what the AI contributes, so an asset uploaded with eight tags and a cap of ten can end up with eighteen tags.

## How AI Alt Text Is Written

Alt text is written only when the destination field is empty. A value entered by the person uploading the asset is never overwritten, even when the AI suggestion would be more descriptive.

A default value configured on a user-defined field counts as empty for this check, so the AI alt text replaces the default. A value that a person typed is preserved even when it matches the default exactly.

Assets skips the alt text write, and logs the reason, when any of the following applies to the destination:

- The field is not associated with the asset type of the uploaded asset.
- The uploaded asset has no asset type.
- The field no longer exists, is no longer a single-line text field, or is a system field.
- The field accepts multiple values.

A skipped alt text write does not affect the tags write. Tags are still applied to the asset.

**Tip:** Before you point a space at a user-defined field, confirm the field is associated with every asset type your team uploads to that space. A field that covers only some asset types leaves the rest without alt text.

## Limitations

- Auto-populate applies to the initial upload of a new asset. Replacing a file or creating a new version does not re-run it.
- Assets already in the space when you enable auto-populate are not enriched retroactively.
- Settings are read when the asset is processed, so an asset uploaded moments before you enable a section can still be enriched.
- The alt text destination must be a single-line text field. Other field types are not supported as destinations.

**Additional Resource:** To review and edit AI suggestions on a single asset instead, refer to the [Edit Configurable Metadata](/docs/assets/edit-configurable-metadata) document.
