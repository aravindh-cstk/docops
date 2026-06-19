---
title: "[Set Up Your Project] - Releases Limitations"
description: Releases Limitations
url: https://www.contentstack.com/docs/headless-cms/releases-limitations
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Releases Limitations

This page lists the Releases Limitations for the Set Up Your Project developer documentation. It is intended for developers creating or updating releases (including via API) and should be used to understand constraints and behaviors when working with release items.

## Releases Limitations

- Max character length of the ‘Title’ field is **50**.
- Max items that can be added in a Release is **5****00**.
- Max items allowed to be added in a Release, in a single instance via API, is **25**.
- The update release items option doesn't add the new references added to an updated version of a release item automatically. Manual addition is required.
- The update release items option doesn't update the entries with newer in-progress versions.

## Common questions

### What is the maximum character length for a Release Title?
The max character length of the ‘Title’ field is **50**.

### How many items can be added to a Release?
Max items that can be added in a Release is **5****00**.

### How many items can be added to a Release via API in a single instance?
Max items allowed to be added in a Release, in a single instance via API, is **25**.

### Does updating release items automatically add new references or update to newer in-progress versions?
No. The update release items option doesn't add the new references added to an updated version of a release item automatically (manual addition is required), and it doesn't update the entries with newer in-progress versions.