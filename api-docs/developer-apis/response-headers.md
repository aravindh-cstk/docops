---
title: "GraphQL | Response Headers"
description: Review GraphQL response headers for rate limits, request metadata, caching, and delivery diagnostics.
url: https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/response-headers
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Response Headers

Contentstack returns response headers to specify information about the status of an API request. These headers also contain details about other objects that you are retrieving through the API.

Let’s learn about these response headers and what to infer from the possible values that you may get.

**x-api-key**

This header provides the API Key of the stack that you are trying to access. The API Key can be used to authorize GraphQL API requests.

The possible values for this header can be of string datatype, for example, **blt7263876d7362**.

**x-contentstack-organization**

This header provides the Organization ID of the organization to which the stack that you are trying to access belongs.

The possible values for this header can be of string datatype, for example, **blt72663654f6532**.

**x-query-complexity**

This header calculates the complexity value for each API request made to the Contentstack database server. It represents the total number of entries and/or assets that were retrieved from the server by a specific GraphQL API request. Read more about it in the [Query Complexity and Cost Calculation](../../../api-detail/graphql-content-delivery-api.md#query-complexity-and-cost-calculation) section.

**x-resolver-cost**

This header calculates the total number of database calls that need to be made to fetch the data requested by a specific GraphQL API request. Read more about it in the [Query Complexity and Cost Calculation](../../../api-detail/graphql-content-delivery-api.md#query-complexity-and-cost-calculation) section.

**x-reference-depth**

This header specifies the depth up to which a specific GraphQL query traverses to retrieve nested items (entries and/or assets).

**x-runtime**

This response header specifies the time (in milliseconds) that Contentstack takes to process a single GraphQL API request.

The x-runtime header is an integer value specified in the milliseconds unit of time, e.g., **15 ms**.
