---
title: "Understanding How Publishing Works with Entry Variants"
description: "Learn how Contentstack's Entry Variants feature enables independent publishing for multiple versions of an entry, allowing you to manage targeted content for different audiences and environments."
url: /headless-cms/understanding-how-publishing-works-with-entry-variants
uid: blt68425c2eea23c2c8
---

# Understanding How Publishing Works with Entry Variants

## Understanding How Publishing Works with Entry Variants

**Note:** The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

The Entry Variants feature allows you to create multiple versions of a single entry, each tailored for specific audiences, campaigns, or contexts. This document outlines how publishing interacts with entry variants, ensuring you deliver the right content to the right [audience](/docs/personalize/about-audiences).

## Publishing Behavior

The publishing mechanism for entry variants offers flexibility and precision. Let’s look at each behavior in detail.

### Independent Publishing

Each entry variant can be published independently. You have full control over which entry variants are live at any given time. Publishing one entry variant does not impact the published status of other variants of the same entry.

### Environment-Specific Publishing

Publishing is tied to a specific environment. You can publish an entry variant in one environment (e.g., "staging") without affecting its status in another environment (e.g., "production").

This enables safe testing and review before pushing content live.

### Language-Specific Publishing

Entry variants can be published in any of the available languages within your stack.

**Note:** An entry variant can only be created for a language if the base entry is already localized for that specific language. The localized base entry serves as the foundation for the entry variants in that language.

### Reference Field Considerations

When a base entry or an entry variant is referenced in another entry (via a reference field), and you send that entry for publishing, then as per the configurations for Nested Reference Publishing (NRP) for your organization, all nested references up to depth level 5 will be published.

### Unpublishing

Unpublishing an entry variant removes it from public view without affecting other published variants of the same entry.

## Entry Variant Publishing Scenarios

Let’s consider a scenario where you want to publish an entry variant for the Europe region. There are three possible outcomes when publishing a specific entry variant, depending on the base entry’s status.

1.  ### Base Entry Not Published

    If the base entry for the entry variant is not published in the specified environment(s) and language(s), the system will first publish the base entry, followed by the entry variant.

    **Note:** Nested references for the base entry and entry variant will be published up to a depth of 5 levels, but entry variants of the nested references will not be published.

2.  ### Base Entry Published in an Older Version

    If the base entry is published in a non-latest version, the system will skip republishing the base entry and only publish the entry variant as requested.

    **Note:** Nested references for the base entry will not be republished, and the entry variants of the nested references will not be published.

3.  ### Base Entry Published in the Latest Version

    If the base entry is already published in its latest version, the system will skip republishing the base entry and the entry variant will be published directly.

    **Note:** Nested references for the base entry will not be republished, and the entry variants of the nested references will not be published.


Contentstack's Entry Variants offer flexibility for creating and managing targeted content. By understanding how publishing works with entry variants, you can ensure that your content reaches the right audience at the right time.
