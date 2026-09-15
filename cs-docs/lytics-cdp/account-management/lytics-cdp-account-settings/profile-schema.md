---
title: "Profile Controls"
description: "Configuration options for the profile and/or schema related features."
url: /lytics/profile-schema
uid: blt8e426bb2772b60a7
---

# Profile Controls

## Profile Controls

Configuration options for the profile and/or schema related features.

The following configuration options are available within the account settings [Profile](https://app.lytics.com/vault/settings/schema) section.

## Enable Schema Patches

|  |
| --- |
| ![0606418fe2538d860997611b84e767b5b67f1cc0904d0036d99b508b6af2ee06-enable-schema-patches.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am694537b54811200e/24f58e1e56a60ce56ba3cfce/0606418fe2538d860997611b84e767b5b67f1cc0904d0036d99b508b6af2ee06-enable-schema-patches.png) |
| Enables the [Schema Patches](/docs/lytics/schema-patches) workflow for this account. With patches enabled, admins can stage a batch of schema changes — fields, mappings, and identity key ranks — into a named changeset, review the diff against the live schema, and apply everything as a single published version. Disabled accounts edit the schema directly through the unpublished draft. |

## Promoted Fields

|  |
| --- |
| ![101a7dc585667f480aaa04d60dfcd22e61b5f1fd7d252383f263f9e34a152001-promoted-fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8bf37c228286f79a/994854e18d7958a56a80ade5/101a7dc585667f480aaa04d60dfcd22e61b5f1fd7d252383f263f9e34a152001-promoted-fields.png) |
| List of fields outside the defaults that should be leveraged in data science modeling and reporting. |

## Hide Private Fields

|  |
| --- |
| ![9a1765a948c79b43b2a282602d9216aaa1da5b9055f56bbe0426ac9bf47fe2fb-hide-private-fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame43eb46f8f3b9087/a9ba9065d99da5360888cc50/9a1765a948c79b43b2a282602d9216aaa1da5b9055f56bbe0426ac9bf47fe2fb-hide-private-fields.png) |
| Hide PII/Private fields from audience exports and scans initiated by users who do not have access to private fields. |

## Cull User Filter

|  |
| --- |
| ![c48920269bd82bb001bab81e50bfadb544c90a39e18c12343713b234a6b38d98-cull-dialog-empty.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amee2f8cd03181878e/018fc9e050dc83e9c386ab5b/c48920269bd82bb001bab81e50bfadb544c90a39e18c12343713b234a6b38d98-cull-dialog-empty.png) |
| Segment expression that selects profiles to remove from the profile entity store and search index during the nightly cull job. Click the edit icon to compose the filter — the editor is the same one used to define an [audience](/docs/lytics/audiences), with a live size preview showing how many profiles currently match. The expression is validated when saved, so invalid filters are rejected immediately. When set, this filter takes precedence over **Cull Anonymous Users**; only one runs. |
| **Note:** Culling removes profiles from the profile store but does not delete the underlying event/identity data retained elsewhere in the pipeline. If new events later arrive for an identifier that belonged to a culled profile, the profile can be rebuilt with its prior event history. Use the **Clear filter** button to remove the filter entirely and disable filter-based culling. |

## Cull Anonymous Users

|  |
| --- |
| ![40d8da96ea4a924c83c1273d19fc012f08148dfa3008cffe1101d94b2f7d1079-cull-anonymous-row.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1b01063a48d9444c/3a34cd59479c112bab0d7a57/40d8da96ea4a924c83c1273d19fc012f08148dfa3008cffe1101d94b2f7d1079-cull-anonymous-row.png) |
| Age threshold, in days, for removing anonymous-only profiles during the nightly cull job. A profile is considered anonymous-only when it has a single alias and only auto-generated user IDs (\_uids) — i.e., no email, customer ID, or other persistent identifier. This setting is ignored when **Cull User Filter** is set; the two settings do not stack. |
