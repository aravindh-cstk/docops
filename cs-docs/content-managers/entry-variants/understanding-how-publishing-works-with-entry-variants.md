---
title: "[Variants CMS] - Understanding How Publishing Works with Entry Variants"
description: How publishing interacts with entry variants, including independent, environment-specific, and language-specific publishing behaviors and scenarios.
url: https://www.contentstack.com/docs/headless-cms/understanding-how-publishing-works-with-entry-variants
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Variants CMS] - Understanding How Publishing Works with Entry Variants

This page explains how publishing works with Entry Variants in Contentstack, including key publishing behaviors and common publishing scenarios. It is intended for content managers and teams who create and publish targeted content across environments, languages, and audiences.

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

The Entry Variants feature allows you to create multiple versions of a single entry, each tailored for specific audiences, campaigns, or contexts. This document outlines how publishing interacts with entry variants, ensuring you deliver the right content to the right [audience](../../personalize/about-audiences.md).

## Publishing Behavior

The publishing mechanism for entry variants offers flexibility and precision. Let’s look at each behavior in detail.

### Independent Publishing

Each entry variant can be published independently. You have full control over which entry variants are live at any given time. Publishing one entry variant does not impact the published status of other variants of the same entry.

### Environment-Specific Publishing

Publishing is tied to a specific environment. You can publish an entry variant in one environment (e.g., "staging") without affecting its status in another environment (e.g., "production").

This enables safe testing and review before pushing content live.

### Language-Specific Publishing

Entry variants can be published in any of the available languages within your stack.

**Note: **An entry variant can only be created for a language if the base entry is already localized for that specific language. The localized base entry serves as the foundation for the entry variants in that language.

### Reference Field Considerations

When a base entry or an entry variant is referenced in another entry (via a reference field), and you send that entry for publishing, then as per the configurations for Nested Reference Publishing (NRP) for your organization, all nested references up to depth level 5 will be published.

### Unpublishing

Unpublishing an entry variant removes it from public view without affecting other published variants of the same entry.

## Entry Variant Publishing Scenarios

Let’s consider a scenario where you want to publish an entry variant for the Europe region. There are three possible outcomes when publishing a specific entry variant, depending on the base entry’s status.

- ### Base Entry Not Published

  If the base entry for the entry variant is not published in the specified environment(s) and language(s), the system will first publish the base entry, followed by the entry variant.

  **Note: **Nested references for the base entry and entry variant will be published up to a depth of 5 levels, but entry variants of the nested references will not be published.

- ### Base Entry Published in an Older Version

  If the base entry is published in a non-latest version, the system will skip republishing the base entry and only publish the entry variant as requested.

  **Note: **Nested references for the base entry will not be republished, and the entry variants of the nested references will not be published.

- ### Base Entry Published in the Latest Version

  If the base entry is already published in its latest version, the system will skip republishing the base entry and the entry variant will be published directly.

  **Note: **Nested references for the base entry will not be republished, and the entry variants of the nested references will not be published.

Contentstack's Entry Variants offer flexibility for creating and managing targeted content. By understanding how publishing works with entry variants, you can ensure that your content reaches the right audience at the right time.

## Common questions

### Can I publish one entry variant without publishing the others?
Yes. Each entry variant can be published independently, and publishing one entry variant does not impact the published status of other variants of the same entry.

### Does publishing an entry variant affect other environments?
No. Publishing is tied to a specific environment, so publishing in one environment (e.g., "staging") does not affect another environment (e.g., "production").

### Can I create and publish entry variants for any language?
Entry variants can be published in any available language within your stack, but an entry variant can only be created for a language if the base entry is already localized for that specific language.

### What happens to nested references when publishing an entry variant?
As per Nested Reference Publishing (NRP) configurations, nested references up to depth level 5 will be published when sending an entry for publishing, but entry variants of the nested references will not be published in the scenarios described.