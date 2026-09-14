---
title: "Schema Versions"
description: "Schema Versions"
url: /lytics/schema-versions
---

# Schema Versions

## Schema Versions

**[Schema Drafts](/docs/lytics/schema-drafts) is the recommended way to manage schema changes.** Drafts let your team stage several independent changesets, review each diff, and apply them separately — rather than sharing the single unpublished draft this page describes.

Version history applies either way. Applying a draft publishes a new schema version, and this page is where you review what shipped and when. The **Publish Changes** and **Discard Changes** flow below is the legacy single-draft workflow, used by accounts that haven't enabled Schema Drafts.

## Introduction

Schema versions allow changes to be made in advance of publishing changes directly to the pipeline. A version combines the changes from **fields**, **mappings**, and **rankings**. After making changes to fields, mappings, or rankings

Since mappings occur within Lytics' real-time profile pipeline, mappings will only be applied to data that passes through the pipeline and will not be retroactively applied to historical data. For information on creating profile attributes with data outside of Lytics collection APIs.

![img-0278.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc90b0015bb0ba563/4edd5fa431a94255772ebb06/img-0278.png)

## Publishing & Reverting Schema Changes

Publishing changes is easy. You can first determine if there are any unpublished changes to your schema by visiting **Building Profiles > Schema > Versions** in the main navigation. There you will see a summary of your version history and the number of unpublished changes.

![shortcode-img-0034.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a6a6f2ec4850a24/a09f39df9409d28188f64604/shortcode-img-0034.png)

### Publishing Changes

If you have unpublished changes, click on the **Publish Changes** button to review those changes and ultimately publish when ready.

Once you have opted to publish the changes, you will be asked to complete a final review. This review will outline the changes to `fields`, `mappings`, and `rankings`. On the final step, you'll have an opportunity to provide a description to associate with the version and ultimately publish. This ensures any changes have a clear history and reduces any change of accidental schema changes.

### Reverting Changes

#### Discarding Unpublished Changes

If you determine that you would like to discard all the current unpublished changes to the schema, click on the **Discard Changes** button. This will open a dialog box that will confirm that you wish to reset the schema to the last published version. Select the **Discard Changes** button to discard all changes.

![shortcode-img-0035.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amed57db44f8251258/53c0afd10e675b480665008c/shortcode-img-0035.png)

#### Reverting Published Changes

**Revert to Schema** is unavailable on accounts with [Schema Drafts](/docs/lytics/schema-drafts) enabled — the button is shown but disabled.

If you would like to remove the changes you published in your most recent schema version(s), navigate to the version you would like to return your schema to and click the **Revert to Schema** button.

![shortcode-img-0036.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am76da9daef042b5db/5cf1c69e540d6a2fcb0f2dae/shortcode-img-0036.png)

This will create a new unpublished version that contains all the changes needed to return all the fields, mappings and ranks back to the state of the desired schema version. Your will then need to publish these changes in order to complete the reversion.
