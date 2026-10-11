---
title: "Auto-Populate AI Metadata at Upload"
description: "Configure a space so AI writes tags and alt text into assets as they are uploaded, without overwriting anything an uploader supplies."
url: /assets/auto-populate-ai-metadata
uid: bltb7845c5f2584fbb5
---

# Auto-Populate AI Metadata at Upload

## Auto-Populate AI Metadata at Upload

Assets can generate tags and alt text for an image on request. You can also have a space write them for you, so an asset arrives already tagged and described instead of waiting for someone to remember.

Metadata that depends on someone remembering is metadata you do not have. Alt text in particular tends to be added only when an accessibility audit forces it, long after the asset is in use.

## What Gets Written, and When

Auto-populate applies to **new uploads only**. Enabling it does not enrich assets that are already in the space, and it does not run when you replace the file on an existing asset.

The values are written into the asset's **first version**. No second version is created, nothing is queued for review, and the upload itself is never blocked or slowed while enrichment runs.

**Note:** Anything the uploader supplies wins. AI writes only where the destination is empty, so a tag list or a description entered during upload is never replaced.

## Turn On AI Tags

To have AI tags added to new uploads, sign in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Open **Assets** and select the space you want to configure.
2.  Click **Space Settings** in the top navigation panel.
3.  In the left navigation panel, select **AI Settings**.
4.  Under **AI Tags**, select **Enable auto populating tags for images during upload**.
5.  In **Advanced Properties**, set **Maximum Number of tags**. This is the cap on how many tags are written to an asset, up to a maximum of 10.
6.  Set the **Confidence Level**, a percentage between 10% and 100%. A higher value keeps only the tags the model is most certain about, and returns fewer of them.
7.  Click **Save Properties**.

The defaults are 10 tags at 80% confidence. Click **Reset Changes** to discard edits you have not saved.

Tags are added to whatever the asset already has. Existing tags are never removed, so turning this on cannot cost you metadata you already rely on.

**Tip:** Start with a high confidence level and a small cap. Loose tagging makes search noisier rather than better, and you can widen it once you see what the model returns for your library.

## Turn On AI Alt Text

Alt text is written to one destination, which you choose. It is either the asset’s **Description** field, or a single user-defined field that you nominate.

1.  Open **Space Settings** for the space and select **AI Settings**.
2.  Under **Alt Text**, select **Enable auto-populating alt text for images during upload**.
3.  Under **Write Alt-text to**, choose where the alt text is written:
    -   **Description**: The system-defined description field, which is part of every asset type.
    -   **User-defined field**: A single-line textbox field of your own. Open **Select Field**, choose one, and click **Apply Selection**.
4.  Click **Save Properties**.

The field picker lists the single-line textbox fields defined in your organization, with a **Used In** count of how many asset types use each one, so you can tell a widely used field from an unused one before you choose it.

**Note:** Alt text is generated in English only.

### When Alt Text Is Skipped

Alt text is written only where it has somewhere valid to go. It is skipped, without affecting anything else on the asset, when:

-   The asset already has a value in the destination.
-   The nominated user-defined field is not part of the asset's asset type. Tags are still written if that setting is on.
-   The nominated field has been deleted, or changed to a type other than single-line text.
