---
title: "[Integrations] - Contentstack Triggers and Actions for Zapier"
description: Contentstack Triggers and Actions for Zapier
url: https://www.contentstack.com/docs/developers/integrations/zapier-integration/contentstack-triggers-and-actions-for-zapier
product: Contentstack
doc_type: integration-guide
audience:
  - developers
  - integrators
version: current
last_updated: 2026-03-26
---

# [Integrations] - Contentstack Triggers and Actions for Zapier

This page explains the triggers and actions available in Contentstack’s Zapier integration, intended for developers and integrators who want to automate workflows by creating Zaps that connect Contentstack with other cloud applications.

## Contentstack Triggers and Actions for Zapier

Our Zapier integration allows you to connect Contentstack with thousands of cloud applications and help you automate business workflows.

**Additional Resource: **To learn more about Contentstack's Zapier integration, please read our in-depth guide on [integrating Zapier with Contentstack and learning to build Zaps](/docs/developers/integrations/zapier-integration/integrate-contentstack-with-other-apps-using-zapier).

To set up a Zap in Zapier, you may need to set up a trigger and one or more actions. A **trigger **is an event that fires up a zap. And an **action **is a task that will be performed automatically once a zap is triggered. You can read more about [Triggers](https://platform.zapier.com/docs/triggers) and [Actions](https://platform.zapier.com/docs/actions) in detail.

As of now Contentstack offers the following triggers and actions:

## Contentstack Triggers for Zapier

Contentstack provides the following triggers that you can use in your zaps:
- **New Entry: **Triggers the zap when a new entry is created in the specified content type of the stack you connected with Zapier.
- **Update Entry: **Triggers the zap when an entry is updated in the specified content type of the stack you connected with Zapier.
- **Publish Entry: **Triggers the zap when an entry is published in the specified content type of the stack you connected with Zapier.
- **Update Workflow stage: **Triggers when a particular workflow stage of an entry is updated in the specified content type of the stack.
- **New Asset:** Triggers when a new asset is created/ uploaded in the stack you connected with Zapier.

## Contentstack Actions for Zapier

You can use the following Contentstack actions with your favorite cloud applications to make the zaps of your choice and requirement:
- **Create Entry: **The ******Create Entry **action creates a new entry in the specified content type of the stack you connected with Zapier.
- **Update Entry: **The **Update Entry **action updates the entry of a stack in Contentstack. In order to do this, users must choose which fields will be updated from another stack.
- **Publish Entry: **The **Publish Entry **action allows you to publish an entry to one or more environments.

The triggers and actions listed above can be combined to create multiple Zaps allowing you to connect Contenstack with over 3000 apps.

## Points to Remember

- While performing the **Update Entry** action make sure the fields you select from the "**Select Fields To Update**" drop-down should not be duplicated.
**For example**: If you select the **Title** of an entry as a field you want to update, do not reselect and add it to update.
- Using the **Create Entry** action you can create a clone of an existing entry in another stack. While cloning these entries, avoid cloning entries with **File** fields. Users won’t be able to clone entries which have** File** fields in it.
- When performing an operation on two entries of a stack, remember that the schemas of **Group**, **Modular Block**, and **Reference** fields of the two entries should be identical.
**For example**: If you want to use the** Update Entry** action to update the **Group** field of an entry in another stack. Make sure the schemas of the both **Group** fields are identical.

## Next Step

- [Recommended Zap Templates](/docs/developers/integrations/zapier-integration/recommended-zap-templates)

## Common questions

### What is the difference between a trigger and an action in Zapier?
A **trigger **is an event that fires up a zap, and an **action **is a task that will be performed automatically once a zap is triggered.

### What Contentstack triggers are available for Zapier?
Contentstack offers triggers such as **New Entry**, **Update Entry**, **Publish Entry**, **Update Workflow stage**, and **New Asset:**.

### What Contentstack actions are available for Zapier?
Contentstack offers actions such as **Create Entry: **, **Update Entry: **, and **Publish Entry: **.

### What should I watch out for when using the Update Entry action?
While performing the **Update Entry** action make sure the fields you select from the "**Select Fields To Update**" drop-down should not be duplicated.