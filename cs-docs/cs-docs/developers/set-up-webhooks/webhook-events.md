---
title: "[Set Up Your Project] - Webhook Events"
description: Here's a complete list of events available for Webhooks.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/webhook-events
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Webhook Events

This page lists the available webhook event methods and their descriptions. It is intended for developers configuring webhooks and webhook conditions, and should be used when selecting which events to subscribe to for content, assets, workflows, releases, and related operations.

## Webhook Events

Here's a complete list of events available for Webhooks.

## Branches

| Method | Description |
|---|---|
| branch.create.initiated | Any new branch creation is initiated on a stack |
| branch.create.completed | Any new branch creation is completed on a stack |
| branch.delete.initiated | Any new branch deletion is initiated on a stack |
| branch.delete.completed | Any new branch deletion is completed on a stack |
| branch.{branch_uid}.delete.initiated | A specific branch deletion is initiated on a stack |
| branch.{branch_uid}.delete.completed | A specific branch deletion is completed on a stack |
| branch_alias.assigned | A new branch alias is assigned to an existing branch |
| branch_alias.unassigned | Any branch alias is unassigned |

## Content Type

| Method | Description |
|---|---|
| content_types.create | New content type is created |
| content_types.update | Any content type is updated |
| content_types.{contenttype_uid}.update | A specific content type is updated |
| content_types.delete | Any content type is deleted |
| content_types.{contenttype_uid}.delete | A specific content type is deleted |

## Global Fields

| Method | Description |
|---|---|
| global_fields.create | Any global field is created |
| global_fields.update | Any global field is updated |
| global_fields.delete | Any global field is deleted |
| global_fields.{global_fields_uid}.update | A specific global field is updated |
| global_fields.{global_fields_uid}.delete | A specific global field is deleted |

## Entries

| Method | Description |
|---|---|
| content_types.entries.create | Any entry is created |
| content_types.{contenttype_uid}.entries.create | An entry is created within a content type |
| content_types.entries.update | Any entry is updated |
| content_types.{contenttype_uid}.entries.update | An entry from a specific content type is updated |
| content_types.{contenttype_uid}.entries.{entry_uid}.update | A specific entry of a specific content type is updated |
| content_types.entries.publish | Any entry is published |
| content_types.entries.publish.fail | Any entry failed to publish |
| content_types.entries.unpublish | Any entry is unpublished |
| content_types.entries.unpublish.fail | Any entry failed to unpublish |
| content_types.entries.delete | Any entry is deleted |
| content_types.{contenttype_uid}.entries.delete | Any entry from a specific content type is deleted |
| content_types.{contenttype_uid}.entries.{entry_uid}.delete | A specific entry of a specific content type is deleted |

## Entry Comments

| Method | Description |
|---|---|
| content_types.entries.comments.create | Any comment is created within any entry of any content type |
| content_types.{contenttype_uid}.entries.comments.create | Any comment is created within any entry of a specific content type |
| content_types.{contenttype_uid}.entries.{entry_uid}.comments.create | Any comment is created within a specific entry of a specific content type |
| content_types.entries.comments.update | Any comment within any entry of any content type is updated |
| content_types.{contenttype_uid}.entries.comments.update | Any comment within any entry of a specific content type is updated |
| content_types.{contenttype_uid}.entries.{entry_uid}.comments.update | Any comment within a specific entry of a specific content type is updated |
| content_types.entries.comments.delete | Any comment within any entry of any content type is deleted |
| content_types.{contenttype_uid}.entries.comments.delete | Any comment within any entry of a specific content type is deleted |
| content_types.{contenttype_uid}.entries.{entry_uid}.comments.delete | Any comment within a specific entry of a specific content type is deleted |

**Note**: You cannot set webhook conditions that are triggered on events performed around a specific entry comment.

## Entry Discussions

| Method | Description |
|---|---|
| content_types.entries.discussions.create | Any discussion is created within any entry of any content type |
| content_types.{contenttype_uid}.entries.discussions.create | Any discussion is created within any entry of a specific content type |
| content_types.{contenttype_uid}.entries.{entry_uid}.discussions.create | Any discussion is created within a specific entry of a specific content type |
| content_types.entries.discussions.resolve | Any discussion within any entry of any content type is resolved |
| content_types.{contenttype_uid}.entries.discussions.resolve | Any discussion within any entry of a specific content type is resolved |
| content_types.{contenttype_uid}.entries.{entry_uid}.discussions.resolve | Any discussion within a specific entry of a specific content type is resolved |
| content_types.entries.discussions.reopen | Any discussion within any entry of any content type is reopened |
| content_types.{contenttype_uid}.entries.discussions.reopen | Any discussion within any entry of a specific content type is reopened |
| content_types.{contenttype_uid}.entries.{entry_uid}.discussions.reopen | Any discussion within a specific entry of a specific content type is reopened |

**Note**: You cannot set webhook conditions that are triggered on events performed around a specific entry discussion.

## Entry Workflows

| Method | Description |
|---|---|
| content_types.{contenttype_uid}.entries.{entry_uid}.workflows.{workflow_uid} | Any stage of a specific workflow is changed within a specific entry of a specific content type |
| content_types.{contenttype_uid}.entries.workflows.{workflow_uid} | Any stage of a specific workflow is changed within any entry of a specific content type |
| content_types.entries.workflows.{workflow_uid} | Any stage of a specific workflow is changed within any entry of any content type |
| content_types.{contenttype_uid}.entries.{entry_uid}.workflows.{workflow_uid}.{workflow_stages_uid} | Specific stage of a specific workflow is changed within a specific entry of a specific content type |
| content_types.{contenttype_uid}.entries.workflows.{workflow_uid}.{workflow_stages_uid} | Specific stage of a specific workflow is changed within any entry of a specific content type |
| content_types.entries.workflows.{workflow_uid}.{workflow_stages_uid} | Specific stage of a specific workflow is changed within any entry of any content type |
| content_types.entries.workflows | Any stage of any workflow is changed within any entry of any content type |

## Entry Variants

| Method | Description |
|---|---|
| content_types.entries.variants.create | Any entry variant created for any entry in any content type. |
| content_types.entries.variants.update | Any entry variant updated for any entry in any content type. |
| content_types.entries.variants.delete | Any entry variant deleted from any entry in any content type. |
| content_types.{content_type_uid}.entries.variants.create | Any entry variant created for any entry in a specific content type. |
| content_types.{content_type_uid}.entries.variants.update | Any entry variant updated for any entry in a specific content type. |
| content_types.{content_type_uid}.entries.variants.delete | Any entry variant deleted from any entry in a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.create | Any entry variant created for a specific entry in a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.update | Any entry variant updated for a specific entry in a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.delete | Any entry variant deleted from a specific entry in a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.update | A specific entry variant updated for a specific entry in a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.delete | A specific entry variant deleted from a specific entry in a specific content type. |

## Entry Variant Comments

| Method | Description |
|---|---|
| content_types.entries.variants.comments.create | Any comment created within any entry variant of any entry from any content type. |
| content_types.entries.variants.comments.update | Any comment updated within any entry variant of any entry from any content type. |
| content_types.entries.variants.comments.delete | Any comment deleted from any entry variant of any entry from any content type. |
| content_types.{content_type_uid}.entries.variants.comments.create | Any comment created within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.variants.comments.update | Any comment updated within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.variants.comments.delete | Any comment deleted from any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.comments.create | Any comment created within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.comments.update | Any comment updated within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.comments.delete | Any comment deleted from any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.comments.create | Any comment created within a specific entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.comments.update | Any comment updated within a specific entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.comments.delete | Any comment deleted from a specific entry variant of a specific entry from a specific content type. |

**Note**: Webhook conditions cannot be configured for actions performed on entry comments within specific entry variants.

## Entry Variant Discussions

| Method | Description |
|---|---|
| content_types.entries.variants.discussions.create | Any discussion created within any entry variant of any entry from any content type. |
| content_types.{content_type_uid}.entries.variants.discussions.create | Any discussion created within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.discussions.create | Any discussion created within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.discussions.create | Any discussion created within a specific entry variant of a specific entry from a specific content type. |
| content_types.entries.variants.discussions.resolve | Any discussion resolved within any entry variant of any entry from any content type. |
| content_types.{content_type_uid}.entries.variants.discussions.resolve | Any discussion resolved within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.discussions.resolve | Any discussion resolved within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.discussions.resolve | Any discussion resolved within a specific entry variant of a specific entry from a specific content type. |
| content_types.entries.variants.discussions.reopen | Any resolved discussion reopened within any entry variant of any entry from any content type. |
| content_types.{content_type_uid}.entries.variants.discussions.reopen | Any resolved discussion reopened within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.discussions.reopen | Any resolved discussion reopened within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.discussions.reopen | Any resolved discussion reopened within a specific entry variant of a specific entry from a specific content type. |

**Note**: Webhook conditions cannot be set for events related to specific entry discussions.

## Entry Variant Workflows

| Method | Description |
|---|---|
| content_types.entries.variants.workflows.{workflow_uid} | Any stage of a specific workflow changed within any entry variant of any entry from any content type. |
| content_types.{content_type_uid}.entries.variants.workflows.{workflow_uid} | Any stage of a specific workflow changed within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.workflows.{workflow_uid} | Any stage of a specific workflow changed within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.workflows.{workflow_uid} | Any stage of a specific workflow changed within a specific entry variant of a specific entry from a specific content type. |
| content_types.entries.variants.workflows.{workflow_uid}.{workflow_stage_uid} | A specific workflow stage changed within any entry variant of any entry from any content type. |
| content_types.{content_type_uid}.entries.variants.workflows.{workflow_uid}.{workflow_stage_uid} | A specific workflow stage changed within any entry variant of any entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.workflows.{workflow_uid}.{workflow_stage_uid} | A specific workflow stage changed within any entry variant of a specific entry from a specific content type. |
| content_types.{content_type_uid}.entries.{entry_uid}.variants.{variant_uid}.workflows.{workflow_uid}.{workflow_stage_uid} | A specific workflow stage changed within a specific entry variant of a specific entry from a specific content type. |

## Entry Variant Environments

| Method | Description |
|---|---|
| content_types.entries.variants.environments.publish.success | Any entry variant from any entry in any content type is successfully published to any environment. |
| content_types.entries.variants.environments.unpublish.success | Any entry variant from any entry in any content type is successfully unpublished from any environment. |
| content_types.entries.variants.environments.{environment_uid}.publish.success | Any entry variant from any entry in any content type is successfully published to a specific environment. |
| content_types.entries.variants.environments.{environment_uid}.unpublish.success | Any entry variant from any entry in any content type is successfully unpublished from a specific environment. |
| content_types.entries.variants.environments.publish.fail | Any entry variant from any entry in any content type failed to publish to any environment. |
| content_types.entries.variants.environments.unpublish.fail | Any entry variant from any entry in any content type failed to unpublish from any environment. |
| content_types.entries.variants.environments.{environment_uid}.publish.fail | Any entry variant from any entry in any content type failed to publish to a specific environment. |
| content_types.entries.variants.environments.{environment_uid}.unpublish.fail | Any entry variant from any entry in any content type failed to unpublish from a specific environment. |
| content_types.{content_type_id}.entries.variants.environments.publish.success | Any entry variant from any entry in a specific content type is successfully published to any environment. |
| content_types.{content_type_id}.entries.variants.environments.unpublish.success | Any entry variant from any entry in a specific content type is successfully unpublished from any environment. |
| content_types.{content_type_id}.entries.variants.environments.{environment_uid}.publish.success | Any entry variant from any entry in a specific content type is successfully published to a specific environment. |
| content_types.{content_type_id}.entries.variants.environments.{environment_uid}.unpublish.success | Any entry variant from any entry in a specific content type is successfully unpublished from a specific environment. |
| content_types.{content_type_id}.entries.variants.environments.publish.fail | Any entry variant from any entry in a specific content type failed to publish to any environment. |
| content_types.{content_type_id}.entries.variants.environments.unpublish.fail | Any entry variant from any entry in a specific content type failed to unpublish from any environment. |
| content_types.{content_type_id}.entries.variants.environments.{environment_uid}.publish.fail | Any entry variant from any entry in a specific content type failed to publish to a specific environment. |
| content_types.{content_type_id}.entries.variants.environments.{environment_uid}.unpublish.fail | Any entry variant from any entry in a specific content type failed to unpublish from a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.publish.success | Any entry variant from a specific entry in a specific content type is successfully published to any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.unpublish.success | Any entry variant from a specific entry in a specific content type is successfully unpublished from any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.{environment_uid}.publish.success | Any entry variant from a specific entry in a specific content type is successfully published to a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.{environment_uid}.unpublish.success | Any entry variant from a specific entry in a specific content type is successfully unpublished from a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.publish.fail | Any entry variant from a specific entry in a specific content type failed to publish to any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.unpublish.fail | Any entry variant from a specific entry in a specific content type failed to unpublish from any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.{environment_uid}.publish.fail | Any entry variant from a specific entry in a specific content type failed to publish to a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.environments.{environment_uid}.unpublish.fail | Any entry variant from a specific entry in a specific content type failed to unpublish from a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.publish.success | A specific entry variant from a specific entry in a specific content type is successfully published to any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.unpublish.success | A specific entry variant from a specific entry in a specific content type is successfully unpublished from any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.{environment_uid}.publish.success | A specific entry variant from a specific entry in a specific content type is successfully published to a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.{environment_uid}.unpublish.success | A specific entry variant from a specific entry in a specific content type is successfully unpublished from a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.publish.fail | A specific entry variant from a specific entry in a specific content type failed to publish to any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.unpublish.fail | A specific entry variant from a specific entry in a specific content type failed to unpublish from any environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.{environment_uid}.publish.fail | A specific entry variant from a specific entry in a specific content type failed to publish to a specific environment. |
| content_types.{content_type_id}.entries.{entry_uid}.variants.{variant_uid}.environments.{environment_uid}.unpublish.fail | A specific entry variant from a specific entry in a specific content type failed to unpublish from a specific environment. |

## Taxonomy

| Method | Description |
|---|---|
| taxonomies.create | Any new taxonomy is created |
| taxonomies.update | Any existing taxonomy is updated |
| taxonomies.delete | Any taxonomy is deleted |
| taxonomies.{taxonomy_uid}.update | A specific taxonomy is updated |
| taxonomies.{taxonomy_uid}.delete | A specific taxonomy is deleted |
| taxonomies.terms.create | Any term is created in any taxonomy |
| taxonomies.terms.update | Any term is updated in any taxonomy |
| taxonomies.terms.delete | Any term is deleted from any taxonomy |
| taxonomies.{taxonomy_uid}.terms.created | Any term is created in a specific taxonomy |
| taxonomies.{taxonomy_uid}.terms.update | Any term is updated in a specific taxonomy |
| taxonomies.{taxonomy_uid}.terms.delete | Any term is deleted from a specific taxonomy |
| taxonomies.localize | Any taxonomy is localized |
| taxonomies.unlocalize | Any taxonomy is unlocalized |
| taxonomies.{taxonomy_uid}.localize | A specific taxonomy is localized |
| taxonomies.{taxonomy_uid}.unlocalize | A specific taxonomy is unlocalized |
| taxonomies.terms.localize | Any term in any taxonomy is localized |
| taxonomies.terms.unlocalize | Any term in any taxonomy is unlocalized |
| taxonomies.{taxonomy_uid}.terms.localize | Any term in a specific taxonomy is localized |
| taxonomies.{taxonomy_uid}.terms.unlocalize | Any term in a specific taxonomy is unlocalized |

## Jobs

| Method | Description |
|---|---|
| jobs.environments.publish.completed | Any bulk publish job in all environments is completed |
| jobs.environments.unpublish.completed | Any bulk unpublish job in all environments is completed |
| jobs.environments.{environment_name}.publish.completed | Any bulk publish job on specific environment is completed |
| jobs.environments.{environment_name}.unpublish.completed | Any bulk unpublish job on specific environment is completed |

### Difference Between Entry-/Asset-based and Job-based Webhook Events

| Differentiating Factors | Entry-/Asset-based Publish/Unpublish Webhooks | Job-based Publish/Unpublish Webhooks |
|---|---|---|
| How it functions | Triggers when an entry/asset is successfully published/unpublished/deleted/created on all/any environment | Triggers when a specific Job (Publish/Unpublish/Delete/Create) is completed on all/any environment |
| Bulk publish/unpublish of “N” items | Webhook is triggered “N” times for bulk actions | Webhook is triggered only once at the end for bulk actions (irrespective of the number of items, i.e., for one or many) |
| Publish/unpublish of single item | Webhook is triggered once | Webhook is triggered once |
| Webhook payload | Contains complete data about entry/asset (all the fields) | Contains only the summary of the job i.e., total count and its skipped, failed, success counts. |

## Assets

| Method | Description |
|---|---|
| assets.delete | Any asset is deleted |
| assets.{asset_uid}.delete | A specific asset is deleted |
| assets.publish | Any asset is published |
| assets.publish.fail | Any asset failed to publish |
| assets.unpublish | Any asset is unpublished |
| assets.unpublish.fail | All assets failed to unpublish |

## Releases

| Method | Description |
|---|---|
| releases.environments.deploy | Any release deployed on all environments |
| releases.environments.{environment_name}.deploy | Any release deployed on a specific environment |
| releases.{release_uid}.environments.deploy | A specific release deployed on all environments |
| releases.{release_uid}.environments.{environment_name}.deploy | A specific release deployed on a specific environment |
| releases.environments.deploy.{status} | The status of any release deployed on any environment |
| releases.{release_uid}.environments.deploy.{status} | The status of a specific release deployed on any environment |
| releases.environments.{environment_name}.deploy.{status} | The status of any release deployed on a specific environment |
| releases.{release_uid}.environments.{environment_name}.deploy.{status} | The status of a specific release deployed on a specific environment |

When a webhook is triggered for an entry or asset, because it was published/unpublished via a release, the webhook data of such as an event contains a 'source' key. This key contains the JSON data of the release (type, title, and UID) it was deployed through.

This is useful in cases where a lot depends on the webhook data. For example, in the case of static site generators, a build is generated every time an item (entry or asset) is published or unpublished. So, if a release is deployed with 200 items, it will generate a build 200 times, instead of just one time for the release. To avoid such cases, the developer can write custom code that ignores events whose response contains the `source` key. So, only one build will be generated for the whole release.

## Common questions

**Q: What is the difference between entry-/asset-based and job-based publish/unpublish webhook events?**  
A: Entry-/asset-based webhooks trigger per item, while job-based webhooks trigger when the job is completed and include a job summary.

**Q: Can webhook conditions be set for events around a specific entry comment or discussion?**  
A: **Note**: You cannot set webhook conditions that are triggered on events performed around a specific entry comment. **Note**: You cannot set webhook conditions that are triggered on events performed around a specific entry discussion.

**Q: Why might a webhook payload include a `source` key for releases?**  
A: When an entry or asset is published/unpublished via a release, the webhook data contains a 'source' key with JSON data of the release (type, title, and UID).

**Filename:** set-up-your-project-webhook-events.md