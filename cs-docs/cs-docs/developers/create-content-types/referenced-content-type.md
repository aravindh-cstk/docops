---
title: "[Field Properties] - Referenced Content Type"
description: Documentation for the Referenced Content Type field property used with reference fields in Contentstack content types.
url: https://www.contentstack.com/docs/developers/create-content-types/referenced-content-type
product: Contentstack
doc_type: field-properties
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-05-14
---

# [Field Properties] - Referenced Content Type

This page explains how the **Referenced Content Type** property works for a **Reference** field in Contentstack, who should use it (developers and content modelers configuring content types), and when to apply it (when you need to restrict which content types can be referenced while creating or editing entries).

## Referenced Content Type

A [reference](/docs/developers/create-content-types/reference) field allows you to link entries from one content type to entries from another content type. This helps you reuse and manage related content across entries instead of duplicating information.

Use the **Referenced Content Type** property to define which content types users can select entries from while creating or editing entries.

To configure referenced content types, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](/docs/developers/set-up-stack/about-stack) and open the content type where you want to add the reference field.
- Add a **Reference** field and click the **Properties** icon.
- In the **Referenced Content Type** section, select one or more content types.
- Click **Save** or **Save and Close** to apply the changes.

After you configure the referenced content types, content managers can select entries only from the specified content types within the reference field while creating or editing entries.

## Common questions

### What does the Referenced Content Type property do?
It defines which content types users can select entries from while creating or editing entries in a reference field.

### Can I allow referencing entries from more than one content type?
Yes. In the **Referenced Content Type** section, you can select one or more content types.

### Where do I configure this setting?
In the content type where you add the **Reference** field, click the **Properties** icon and use the **Referenced Content Type** section.