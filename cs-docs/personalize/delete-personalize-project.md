---
title: "[Personalize] - Delete a Personalize Project"
description: How to permanently delete a project in Contentstack Personalize.
url: https://www.contentstack.com/docs/personalize/delete-personalize-project
product: Contentstack Personalize
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Personalize] - Delete a Personalize Project

This page explains how to permanently delete a project in Contentstack Personalize. It is intended for Organization Owners/Admins managing Personalize-enabled organizations and should be used when you need to remove a project and all associated personalization configuration.

## Delete a Personalize Project

This guide explains how to permanently delete a project in Contentstack Personalize.

Deleting a project in Contentstack Personalize removes all personalization configuration associated with that project. After deletion, you cannot use the project to deliver personalized experiences.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login)
- Access to the Contentstack Organization as the [Owner](../developers/organization/organization-roles.md#organization-owner)/[Admin](../developers/organization/organization-roles.md#organization-admin) that has Personalize enabled.

## Steps for Execution

To delete a Personalize project, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

- In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
- On the Personalize Projects landing page, select the project you want to delete.
- In the top navigation bar, click **Settings**.
- Scroll to the **Delete Project** section.
- Click **Delete Project**.
- Review the warning message carefully.
- To exit without deleting the project, click **Cancel**.
- To confirm deletion, type **DELETE** in the confirmation field, then click **Delete**.

You will get a success message after the project is deleted from Personalize.

**Warning: **Personalize immediately removes the project and permanently deletes all associated experiences and configuration data. You cannot recover or restore the project after deletion.

## Common questions

**Q: Can I recover a Personalize project after deleting it?**  
A: No. Personalize immediately removes the project and permanently deletes all associated experiences and configuration data. You cannot recover or restore the project after deletion.

**Q: What permissions do I need to delete a Personalize project?**  
A: Access to the Contentstack Organization as the Owner/Admin that has Personalize enabled.

**Q: What do I need to type to confirm deletion?**  
A: Type **DELETE** in the confirmation field, then click **Delete**.