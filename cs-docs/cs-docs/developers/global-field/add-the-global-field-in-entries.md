---
title: "[Global Field] - Add the Global Field in Entries"
description: "How to add a Global field in entries and manage nested Global fields."
url: https://www.contentstack.com/docs/developers/global-field/add-the-global-field-in-entries
product: "Documentation"
doc_type: "how-to"
audience:
  - content-managers
  - developers
version: "current"
last_updated: 2026-03-25
---

# [Global Field] - Add the Global Field in Entries

This page explains how Global fields behave when added to entries, including how nested Global fields appear and how updates propagate across entries. It is intended for content managers and developers who configure or manage entry fields and need consistent reusable structures.

## Add the Global Field in Entries

For a Content Manager, Global fields function similarly to [Group](/docs/developers/create-content-types/group/) fields. When you add a Global field to an entry, it appears along with its subfields.

On the entry page, nested Global fields appear as grouped field sets, allowing content managers to manage related data efficiently within a single interface.

Using Global fields in entries allows you to maintain consistency across multiple entries by reusing predefined structures. Any updates to the Global field automatically reflect in all entries where it is used, ensuring uniformity without manual changes.

**Additional Resource**: You can copy the values of an instance in a Global field and paste them into another instance in the same entry or in a different entry. Learn more about [copying field values](/docs/developers/create-content-types/global#copy-field-values-across-global-fields) across Global fields.

## Common questions

**How do Global fields appear when added to an entry?**  
When you add a Global field to an entry, it appears along with its subfields.

**How are nested Global fields displayed on the entry page?**  
Nested Global fields appear as grouped field sets.

**Do changes to a Global field update existing entries?**  
Any updates to the Global field automatically reflect in all entries where it is used.

**Can I copy values between Global field instances?**  
Yes. You can copy the values of an instance in a Global field and paste them into another instance in the same entry or in a different entry. Learn more about [copying field values](/docs/developers/create-content-types/global#copy-field-values-across-global-fields) across Global fields.