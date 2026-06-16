---
title: "[Author Content] - About Entries"
description: About Entries
url: https://www.contentstack.com/docs/content-managers/author-content/about-entries
product: Contentstack
doc_type: concept
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - About Entries

This page explains what entries are in Contentstack, how they relate to content types and branches, and when to create and manage them. It is intended for content managers and authors who create, update, and publish content in Contentstack, especially when working with structured content models and branches.

## About Entries

In Contentstack, an **entry** is a specific piece of content created within a predefined content type. Entries serve as the actual content units that populate your digital platforms, such as web pages, blog posts, or product descriptions. Each entry adheres to the structure and fields defined by its associated content type, ensuring consistency and organization across your content.

**Key Characteristics of Entries:**
- **Content Representation:** Entries embody the actual content you intend to publish, following the blueprint established by their content type.
- **Content Types Dependency:** You can create entries only within existing content types. Hence, it is essential to [define your content types](/docs/developers/create-content-types/create-a-content-type) before adding entries.
- **Branch Specificity:** When working with branches, entries created or updated are [specific to that particular branch](/docs/developers/branches/branch-specific-modules). This means that an entry in one branch won't automatically appear in another, allowing for isolated development and content management.

**Tip:** If you plan to create multiple entries for a content type, ensure the **Multiple** option is selected during content type creation.

Entries can be edited, published, unpublished, and deleted as needed. By structuring your content through well-defined content types and populating them with entries, you ensure a scalable and organized approach to managing your digital content.

## Tutorial Video

## Common questions

### What is an entry in Contentstack?
An **entry** is a specific piece of content created within a predefined content type.

### Do I need to create content types before creating entries?
Yes. You can create entries only within existing content types, so it is essential to [define your content types](/docs/developers/create-content-types/create-a-content-type) before adding entries.

### Are entries shared across branches automatically?
No. When working with branches, entries created or updated are [specific to that particular branch](/docs/developers/branches/branch-specific-modules).

### What should I do if I plan to create multiple entries for a content type?
Ensure the **Multiple** option is selected during content type creation.