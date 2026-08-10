---
title: "Restore Updated Content"
description: "Learn to restore lost entry data from entries after content type updates using Contentstack’s Versioning API or by contacting support."
url: /headless-cms/restore-updated-content
---

# Restore Updated Content

## Restore Updated Content

Updating an existing content type—particularly when deleting a field—can lead to data loss in the associated entries. Additionally, restoring previous versions of the updated content type through the UI is not possible.

In such cases, an organization admin or owner can request assistance from the Contentstack [Customer Support](mailto:support@contentstack.com) team to restore lost content.

**Note:** Only a **Stack** [**Owner**](/docs/administration/about-administration-roles#stack-owner)**/**[**Admin**](/docs/administration/about-administration-roles#stack-admin) or **Organization** [**Owner**](/docs/administration/about-administration-roles#organization-owner)**/**[**Admin**](/docs/administration/about-administration-roles#organization-admin) can submit or approve requests to restore content.

This guide provides an overview of how to restore data lost due to entries and content type updates.

## Content Types

If changes were made to a content type (e.g., modifying a field UID or deleting a field), you can retrieve previous versions of the content type using the [Contentstack Management API](/docs/developers/apis/content-management-api/).

Perform the following steps to restore a prior version of a content type:

1.  Use a REST API client, such as [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/tools/swagger-ui/), and execute the [Get a single content type API](/docs/developers/apis/content-management-api/content-types#get-a-single-content-type) request.
2.  In the API request, specify the version parameter to fetch a previous version of the content type.

This API call allows you to retrieve older versions of the updated content type and restore the schema as needed.

## Entries

When fields are updated or deleted from a content type schema, any data associated with those fields in the entries may be lost. To address this, follow our step-by-step guide to [restore lost entry data](/docs/headless-cms/content-type-change-management).
