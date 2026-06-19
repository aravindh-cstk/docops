---
title: "[Author Content] - Restore Updated Content"
description: Restore data lost due to entries and content type updates.
url: https://www.contentstack.com/docs/headless-cms/restore-updated-content
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - admins
version: current
last_updated: 2026-03-26
---

# [Author Content] - Restore Updated Content

This page explains how to restore data that may be lost when updating existing content types (especially when deleting fields) and how to recover previous versions when UI-based restoration is not possible. It is intended for Contentstack organization and stack admins/owners who need to coordinate restoration via APIs or Customer Support after content model or entry updates.

## Restore Updated Content

Updating an existing content type—particularly when deleting a field—can lead to data loss in the associated entries. Additionally, restoring previous versions of the updated content type through the UI is not possible.

In such cases, an organization admin or owner can request assistance from the Contentstack[Customer Support](mailto:support@contentstack.com) team to restore lost content.

**Note:** Only a **Stack**[** Owner**](/docs/developers/organization/organization-roles#stack-owner)**/**[**Admin**](/docs/developers/organization/organization-roles#stack-admin) or **Organization **[**Owner**](/docs/developers/organization/organization-roles#organization-owner)**/**[**Admin**](/docs/developers/organization/organization-roles#organization-admin) can submit or approve requests to restore content.

This guide provides an overview of how to restore data lost due to entries and content type updates.

## Content Types

If changes were made to a content type (e.g., modifying a field UID or deleting a field), you can retrieve previous versions of the content type using the [Contentstack Management API](/docs/developers/apis/content-management-api/).

Perform the following steps to restore a prior version of a content type:
- Use a REST API client, such as [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/tools/swagger-ui/), and execute the [Get a single content type API](/docs/developers/apis/content-management-api/#get-a-single-content-type) request.
- In the API request, specify the `version` parameter to fetch a previous version of the content type.

This API call allows you to retrieve older versions of the updated content type and restore the schema as needed.

## Entries

When fields are updated or deleted from a content type schema, any data associated with those fields in the entries may be lost. To address this, follow our step-by-step guide to [restore lost entry data](/docs/developers/how-to-guides/content-type-change-management).

## Common questions

### Can I restore a previous version of a content type through the UI?
No. “restoring previous versions of the updated content type through the UI is not possible.”

### Who can submit or approve requests to restore content?
Only a Stack Owner/Admin or Organization Owner/Admin can submit or approve requests to restore content.

### How do I retrieve an older version of a content type?
Use the Contentstack Management API “Get a single content type API” request and specify the `version` parameter to fetch a previous version.

### What should I do if entry field data was lost after a schema change?
Follow the step-by-step guide to “restore lost entry data” at `/docs/developers/how-to-guides/content-type-change-management`.