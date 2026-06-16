---
title: "[Content Migration] - The Content Migration Checklist"
description: Content migration checklist for migrating content from WordPress or Drupal to Contentstack, including planning, execution, and verification/monitoring stages.
url: https://www.contentstack.com/docs/developers/content-migration/the-content-migration-checklist
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Content Migration] - The Content Migration Checklist

This page provides a checklist for content migration to Contentstack, covering planning, execution, and verification/monitoring stages. It is intended for developers and teams migrating from traditional CMSs (such as WordPress or Drupal) and should be used as a reference during migration preparation and execution.

## The Content Migration Checklist

**Warning:** This document is deprecated and no longer reflects the latest process for content migration. Reach out to our [support](mailto:support@contentstack.com) team for more information.

Content migration refers to the process of migrating or moving content from one source to another. The source can be anything including content management systems.

In this guide, we'll look at a checklist which you should have handy while migrating content from your current CMS (WordPress or Drupal) to Contentstack.

This migration checklist consists of 3 critical stages: planning, execution, and verification and monitoring stages. Let's discuss these in more detail.

## Planning the Migration

Let us check the points to be considered when planning the CMS migration:

- Define Migration goals.
- Make sure that you have read and understood the requirements for migrating from your cms (Wordpress or Drupal) to Contentstacks Headless CMS.
- **Note:** You can get details of the requirements in the Read Me section of the migration guides on our Github pages for [WordPress](/docs/developers/content-migration/wordpress-to-contentstack/) and [Drupal](/docs/developers/content-migration/drupal-to-contentstack/).
- Note all the CMS-specific plugins that affect the content
- Review custom styling, content annotation
- Migration plan of comments associated with the post
- Banner spaces that may or may not be migrated
- Original content HTML tags
- Categories and tags associated with the content
- Table of contents when migrating a series
- User data if there are registered users

## Executing the Migration

**Note: **Always remember to migrate to a test environment first. This way, if there is a critical failure, you already have a backup site running.

Make sure to check the following points when executing migrations:

- Execute and verify the backup of the original site.
- Remember to disable your website’s crawlability.
- Execute a test migration on a test environment.
- Verify each and every point of your acceptance criteria.
- If your domain is to be changed, update DNS and perform all administration and automatic redirection.
- Perform the actual migration
- Enable the new site and restore crawlability

## Verification and monitoring stage

- Go through the acceptance criteria and ensure they are met
- Manually test your content to confirm you haven’t missed out on anything critical.
- Check the 360° performance of the migrated site.
- Track the ranking and indexing of your new site

## Additional Resources

To know more about migrating from your traditional CMSs such as WordPress and Drupal, make sure you read our documentation on [Export Content from other CMS](/docs/developers/content-migration/#export-guides-for-cmss).

## Common questions

### Is this checklist still current?

**Warning:** This document is deprecated and no longer reflects the latest process for content migration. Reach out to our [support](mailto:support@contentstack.com) team for more information.

### What are the critical stages in this migration checklist?

This migration checklist consists of 3 critical stages: planning, execution, and verification and monitoring stages.

### Should I migrate directly to production?

**Note: **Always remember to migrate to a test environment first. This way, if there is a critical failure, you already have a backup site running.

### Where can I find more resources for WordPress or Drupal migrations?

You can get details of the requirements in the Read Me section of the migration guides on our Github pages for [WordPress](/docs/developers/content-migration/wordpress-to-contentstack/) and [Drupal](/docs/developers/content-migration/drupal-to-contentstack/).