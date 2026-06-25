---
title: "[Variants CMS] - About Entry Variants"
description: Overview of Entry Variants in Contentstack, including key concepts, benefits, and related API references.
url: https://www.contentstack.com/docs/headless-cms/about-entry-variants
product: Contentstack
doc_type: concept-guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Variants CMS] - About Entry Variants

This page explains what Entry Variants are in Contentstack, the key concepts and benefits, and where to find related API references. It is intended for content managers and developers who need to create, manage, or integrate content variations for different audiences, segmented experiences, or A/B tests.

## About Entry Variants

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Contentstack's Entry Variants feature empowers you to seamlessly create and manage variations of your [entries](../author-content/about-entries.md), catering to diverse [audiences](../../personalize/about-audiences.md), [segmented experiences](../../personalize/create-segmented-experience.md), and [A/B test experiences](../../personalize/create-ab-test-experience.md).

Similar to localized entries, entry variants are variations of a base entry. You can use entry variants to tailor content for different experiences, scenarios, or user groups. This guide provides an overview about entry variants within your stack.

## Key Concepts

Here are some key concepts that will help you understand Entry Variants:

- **Variant Group**: A collection of related [variants](../../personalize/about-variants.md) grouped based on a common purpose or audience. For example, you might have variant groups for location-based experiences, targeted promotions, or personalized recommendations.**Note**: Each [experiences](../../personalize/about-experiences.md) created in your Personalize project appears as a Variant Group (with the same name as the Experience) in the linked stack.
- **Base Entry**: This is the original entry from which all entry variants are derived. A base entry must exist before you can create any variations of it. The base entry contains the core content that is inherited by all its entry variants unless customized based on a variant.
- **Entry Variant**: An entry variant is a version of the base entry that includes specific customizations. These customizations can be applied to any fields you select, allowing for personalized or scenario-specific content delivery.For example, consider you have a region-based experience (variant group) for a travel website that includes variants such as "Luxury Europe" and "Budget Adventure South America." Using entry variants, you can create tailored content based on these variants. This way, audiences from the Europe region will specifically see content associated with the "Luxury Europe" variant.

## Key Benefits

Entry variants provide a streamlined approach to delivering personalized content. They help reduce duplication, improve consistency, and simplify content updates. By using entry variants, you can:

- **Personalize Content Delivery**: Customize specific fields of an entry to create different versions that cater to various user segments or scenarios.
- **Maintain Consistency**: Ensure that core content remains consistent across all variants, while still allowing for necessary adjustments.
- **Improve Content Management**: Reduce the need to create and manage multiple entries for different variations, simplifying content updates and maintenance.
- **Personalization**: Tailor content based on user preferences, demographics, or behavior, fostering deeper connections.

Entry Variants in Contentstack offer a powerful solution for managing content variations, enabling you to deliver personalized experiences, optimize engagement, and expand your global reach.

## Tutorial Video

## API Reference

To perform operations related to Entry Variants within your stack via API, refer to the following documents:

- [Variant Groups](../../../api-docs/api-detail/content-management-api.md#variant-groups) and [Entry Variants](../../../api-docs/api-detail/content-management-api.md#entry-variants) collection in our Content Management API
- [Entry Variants](../../../api-docs/api-detail/content-delivery-api.md#entry-variants) collection in our Content Delivery API

## Common questions

### Who can access the Entry Variants feature?

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

### What is the relationship between Variant Groups and Experiences?

Each [experiences](../../personalize/about-experiences.md) created in your Personalize project appears as a Variant Group (with the same name as the Experience) in the linked stack.

### Do entry variants replace the need to create multiple entries?

Entry variants provide a streamlined approach to delivering personalized content. They help reduce duplication, improve consistency, and simplify content updates. By using entry variants, you can reduce the need to create and manage multiple entries for different variations, simplifying content updates and maintenance.

### Where can I find API documentation for Entry Variants?

To perform operations related to Entry Variants within your stack via API, refer to the following documents:
- [Variant Groups](../../../api-docs/api-detail/content-management-api.md#variant-groups) and [Entry Variants](../../../api-docs/api-detail/content-management-api.md#entry-variants) collection in our Content Management API
- [Entry Variants](../../../api-docs/api-detail/content-delivery-api.md#entry-variants) collection in our Content Delivery API