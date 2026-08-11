---
title: "Polaris Use Cases"
description: "Explore common Polaris use cases in Contentstack, including schema generation, entry creation with Brand Kit, translation at scale, personalization, and campaign scheduling."
url: /agent-os/polaris-use-cases
---

# Polaris Use Cases

## Polaris Use Cases

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

This page walks through five common Polaris use cases, covering the problem each solves, example prompts, and a step-by-step walkthrough of how Polaris plans, previews, and executes the request.

-   [Creating Content Models](#creating-content-models)
-   [Entry creation including Brand Kit](#entry-creation-including-brand-kit)
-   [Translation at scale](#translation-at-scale)
-   [Personalization at scale](#personalization-at-scale)
-   [Scheduling a campaign](#scheduling-a-campaign)

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   [Admin](/docs/headless-cms/types-of-roles#admin)/[Owner](/docs/headless-cms/types-of-roles#owner) access for the Contentstack stack
-   Polaris plan for your organization

## Creating Content Models

Building a content model usually means translating a requirements doc or whiteboard sketch into fields, groups, and validations, one field at a time, inside the Content Type builder. With Polaris, you can describe the content type you need in plain language, and Polaris creates the content model for you.

**Example prompts:**

-   _Model a content model for a blog post with a title, author reference, hero image, body, tags, and SEO fields._
-   _Attach a website image and ask polaris to create a content model based on the image reference._

Let's look at the steps to build a **Content Model** using **Polaris**:

### Open a stack

-   Log in to your Contentstack [account](https://www.contentstack.com/login) and navigate to your [stack](/docs/headless-cms/about-stack).
-   Open the **Polaris** panel.
-   In the **Polaris** panel, describe the structure you want in plain language. In the prompt text box, click **+** to add an image.
    
    **Example:** Attach a website image. In the **Polaris** prompt enter, "Create a **Content Model** based on the attached image."
    
    Polaris enters a planning state. No changes are made to the content type at this stage.
    

### Review the preview

Since this is a write operation, Polaris displays a preview showing the proposed fields, types, and structure before anything is created.

**Note:** If your prompt is read-only, for example, asking Polaris to explain or review an existing schema, Polaris responds immediately in the panel without a preview or confirmation step.

### Confirm the update

-   Review the proposed fields and structure.
-   Click **Update** or **Create** to create or modify the content type.
-   Click **Cancel** to discard the proposed changes.

### Review the result

Once confirmed, the content type reflects the new fields and structure and you can continue refining it with additional prompts or by editing fields directly.

## Entry Creation including Brand Kit

Drafting entries often means writing copy from scratch, then editing it to match brand tone and terminology. Polaris can draft [entry](/docs/headless-cms/about-entries) content directly against the open content type schema, and align the content to your organization's Brand Kit, so tone, voice, and terminology stay consistent without a separate review pass.

**Example prompts:**

-   _Draft a new blog entry about the role of AI in content management, following the_ _{{brand\_kit\_name}}_ _Brand Kit._
-   _Improve the tone and clarity of this entry to make it more engaging and on-brand using_ _{{brand\_kit\_name}}__._

### Open an entry context

-   Log in to your Contentstack [account](https://www.contentstack.com/login) and navigate to your stack.
-   Open the **Polaris** panel.
-   In the **Polaris** panel, describe the structure you want in plain language.

**Example:** Draft a new blog entry for {{content\_model\_name}} about the role of AI in content management, following our {{brand\_kit\_name}} Brand Kit tone.

Polaris identifies the relevant fields (title, body, summary, and so on), and prepares a write action. No changes are made to the entry at this stage.

### Review the preview

Polaris displays the proposed content against each field, so you can compare it before anything is saved.

**Note:** Read-only requests, such as asking Polaris to explain Brand Kit guidelines, execute immediately without a preview or confirmation step.

### Confirm the update

-   Review the drafted content.
-   Click **Update or Create** to apply it to the entry.
-   Click **Cancel** to discard it.

### Review the result

The entry fields are populated with the drafted, Brand Kit aligned copy. The entry remains in draft state unless you publish it. Keep iterating on the draft with additional prompts until the tone lands.

## Translation at Scale

Translating entries one field, one locale at a time does not scale once you are supporting multiple markets. Polaris can translate an entry into one or more locales in a single request, while preserving structure, formatting, and industry-specific terminology.

**Example prompts:**

-   _Translate this blog entry into French, German, and Japanese, keeping industry terminology accurate._
-   _Translate all text fields in this entry into Spanish._

### Open an entry context

-   Log in to your Contentstack [account](https://www.contentstack.com/login) and navigate to your stack.
-   Open the **Polaris** panel.
-   In the **Polaris** prompt enter a prompt.

**Example:** Translate this blog entry into French, German, and Japanese, keeping industry terminology accurate.

**Note:** If your stack does not have the prompted locales, the entry will not be localized. You can add the locales via Polaris to your stack to translate the entry.

Polaris identifies the translatable fields, determines the target locales, and prepares a write action for each locale. No locale versions are created at this stage.

**Note:** Asking Polaris to review or explain an existing translation, rather than create one, is treated as a read-only action and returns a result immediately.

### Confirm the update

-   Review the translations for each locale.
-   Click **Update** or **Create** to apply them.
-   Click **Cancel** to discard any locale you do not want to save.

### Review the result

The translated locale versions are populated with the new content. You can continue refining specific locales with follow-up prompts, for example, adjusting tone in just one language.

## Personalization at Scale

Building personalized content variants for different audiences, regions, or segments is time-consuming when done manually for each variation. Polaris can generate and update audience-specific content variants for an entry, keeping the base content and each variant aligned to the same structure.

**Example prompts:**

-   _Create a personalized version of this entry's hero copy for a first-time visitor audience._
-   _Update the CTA text in this entry for three variants: new users, returning users, and enterprise buyers._

### Open an entry context

-   Log in to your Contentstack [account](https://www.contentstack.com/login) and navigate to your stack.
-   Open the **Polaris** panel. Polaris receives the base entry content and any existing variant structure.
-   In the **Polaris** prompt enter a prompt.  
      
    **Example:** Update the CTA text in this entry for three variants: new users, returning users, and enterprise buyers.  
      
    Polaris identifies which fields need variant-specific content, and prepares a write action for each audience segment. No variants are created at this stage.

**Review the preview**

Polaris displays the proposed copy for each variant side-by-side with the base content, so you can compare tone and messaging before applying anything.

**Note:** Asking Polaris to explain or compare existing variants, without requesting changes, is a read-only action and returns a result immediately.

### Confirm the update

-   Review each proposed variant.
-   Click **Update** or **Create** to apply the variants you want to keep.
-   Click **Cancel** to discard any you do not want to save.

### Review the result

The entry now has updated content for each confirmed variant. You can keep adjusting individual segments with additional prompts, one variant at a time.

## Scheduling a Campaign

Getting a campaign entry ready for launch usually involves several small tasks: setting publish and unpublish dates, tagging it for the right release, and assigning it to the correct environment. Polaris can handle these as one request, so a short instruction sets up the full schedule.

**Example prompts:**

-   _Schedule this entry to publish next_ _**Monday**_ _at_ _**9 AM**_ _and unpublish two weeks later._
-   _Tag this entry for the_ _**Q3 release**_ _and add it to the upcoming release._
-   _Publish this entry to the_ _**staging**_ _environment now, and_ _**production**_ _next Friday._

### Open an entry context

-   Log in to your Contentstack [account](https://www.contentstack.com/login) and navigate to your stack.
-   Open the **Polaris** panel.

-   In the **Polaris** prompt enter a prompt.  
      
    **Example:** Schedule this entry to publish next Monday at 9 AM and unpublish two weeks later.  
      
    Polaris interprets the dates and environments referenced, and prepares a write action covering the publish and unpublish schedule. No scheduling changes are made at this stage.

### Review the preview

Polaris displays the proposed publish date, unpublish date, environment, and release assignment, so you can confirm the schedule is correct before it's applied.

**Note:** Asking Polaris what an entry's current schedule is, without requesting a change, is a read-only action and returns a result immediately.

### Confirm the update

-   Review the proposed schedule.
-   Click **Update** or **Create** to apply it.
-   Click **Cancel** to discard it.

### Review the result

The entry is scheduled according to the confirmed dates, environment, and release. You can continue adjusting the schedule with follow-up prompts at any time before it goes live.

## Best Practices

-   **Be specific about scope:** Naming the exact fields, locales, or variants you want updated reduces back-and-forth in the preview step.
-   **Break large requests into smaller ones:** For complex campaigns or multi-locale translations, confirming smaller batches makes it easier to catch issues early.
-   **Use read-only prompts to check before you commit:** Asking Polaris to explain or review first can validate your assumptions before you request a write action.
-   **Always review the preview:** Preview-first execution exists so you can catch unintended changes before they're applied, especially for multi-field or multi-locale updates.
