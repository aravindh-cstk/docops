---
title: "[Extensions] - About Custom Fields"
description: Overview of Custom Fields extensions, including legacy Experience Extensions guidance and ways to add custom fields to Contentstack content types.
url: https://www.contentstack.com/docs/developers/create-custom-fields/about-custom-fields
product: Contentstack
doc_type: concept
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Extensions] - About Custom Fields

This page explains what Custom Fields are in Contentstack, including notes about legacy Experience Extensions, and outlines the available ways developers can add custom fields to content types. It is intended for developers extending content types with custom functionality or integrating external business applications.

## About Custom Fields

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [Custom Field UI location](../developer-hub/custom-field-location.md) for the Contentstack App Framework to extend the functionality of your apps.

The Custom Fields extension lets you** add/create custom fields **that you can use in your content type. Apart from using the default [fields](../create-content-types/about-fields.md) such as “Single-line textbox,” “Rich Text Editor,” and so on, you can integrate with numerous business applications, such as “[Marketo Forms](https://developers.marketo.com/javascript-api/forms/),” “[Optimizely](https://www.optimizely.com/),” “[Brightcove](https://www.brightcove.com/en/),” by adding them as [custom](./about-custom-fields.md) fields to your Contentstack [content type](../create-content-types/about-content-types.md).

**Note:** Custom fields are stack-specific, i.e., it cannot be used in or shared across multiple stacks.

The following are the two ways to add custom fields to your content types:
- **Create new custom fields** - Create your own custom fields by writing your custom code and use it in your content types
- **Use prebuilt templates** - Use the prebuilt templates by modifying the given code to suit your requirements. Contentstack provides certain basic pre-built custom fields such as **color picker**, **code editor**, **video selector**, and more.

## Common questions

### Are Experience Extensions still recommended for Custom Fields?
Experience Extensions use the legacy approach with extensions. We recommend using the [Custom Field UI location](../developer-hub/custom-field-location.md) for the Contentstack App Framework to extend the functionality of your apps.

### Can Custom Fields be shared across multiple stacks?
No. Custom fields are stack-specific, i.e., it cannot be used in or shared across multiple stacks.

### What are the ways to add custom fields to content types?
The following are the two ways to add custom fields to your content types: **Create new custom fields** and **Use prebuilt templates**.

### What can Custom Fields integrate with?
You can integrate with numerous business applications, such as “[Marketo Forms](https://developers.marketo.com/javascript-api/forms/),” “[Optimizely](https://www.optimizely.com/),” “[Brightcove](https://www.brightcove.com/en/),” by adding them as custom fields to your Contentstack content type.