---
title: "TEST- GraphQL Content Delivery API"
description: GraphQL is a flexible, customized API query language. Contentstack's Content Delivery API gives you the power to query for exactly what you need—in one request.
url: test-graphql-content-delivery-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: unknown
last_updated: 2025-09-17
api_version: ""
superscript: 1
select: ""
date_field_for_flag: ""
enable_openapi: false
openapi_schema_url: ""
enable_postman_button: true
enable_localization: true
enable_try_out: true
enable_edit_request_body: false
regions: "!clone_from:graphql-content-delivery-api"
navigation: "!clone_from:graphql-content-delivery-api"
---

# TEST- GraphQL Content Delivery API


## Introduction

### Base URL

- AWS North America (AWS NA): https://graphql.contentstack.com/
- AWS Europe (AWS EU): https://eu-graphql.contentstack.com/
- AWS Australia (AWS AU): https://au-graphql.contentstack.com/
- Azure North America (Azure NA): https://azure-na-graphql.contentstack.com/
- Azure Europe (Azure EU): https://azure-eu-graphql.contentstack.com/
- GCP North America (GCP NA): https://gcp-na-graphql.contentstack.com/
- GCP Europe (GCP EU): https://gcp-eu-graphql.contentstack.com/

### Base URLs for Live Preview

The GraphQL Content Delivery API offers live preview functionality, enabling users to view real-time previews of their content. To make use of this feature, use the following endpoints for different regions:

- US (North America, or NA): https://graphql-preview.contentstack.com/
- Europe (EU): https://eu-graphql-preview.contentstack.com/
- Azure North America (Azure NA): https://azure-na-graphql-preview.contentstack.com/
- Azure Europe (Azure EU): https://azure-eu-graphql-preview.contentstack.com/
- GCP North America (GCP NA): https://gcp-na-graphql-preview.contentstack.com/
- GCP Europe (GCP EU): https://gcp-eu-graphql-preview.contentstack.com/
- AWS Australia (AWS AU): https://au-api.contentstack.com/

**Additional Resource**: You can refer to our documentation on [Live Preview](../../cs-docs/developers/set-up-live-preview/set-up-live-preview-for-your-website.md) for more information.

### Overview

GraphQL Content Delivery API is a more efficient alternative to the Content Delivery APIs. It lets you fetch customized responses or retrieve data of nested or multiple resources through a single API request.

GraphQL is a flexible, customizable API query language. Contentstack's GraphQL API gives you the power to query for exactly what you need and nothing more, for instance, you can even fetch data from multiple content types via a single API request. You can customize your responses by defining the structure of your requests. Currently, Contentstack GraphQL supports only queries and each requested resource's GraphQL types are generated in real time, so your content remains current.

**Note**: Contentstack's GraphQL API does not support mutations and subscriptions.

**Warning**: Avoid using _regex or _exists in field UIDs. These are reserved keywords in GraphQL and may cause errors during queries. Use alternative naming to ensure smooth query execution.

If you are familiar with GraphQL, and want to get a hands-on experience of the API, here's a quick link to our sample stack:

[Query our sample stack](./graphql-content-delivery-api/explorer.md)

### Authentication

GraphQL API requests must be authenticated using the following details:

- Stack API key
- Environment
- Delivery token of the concerned environment

You need to pass the [stack API Key](../../cs-docs/developers/set-up-stack/view-stack-details.md) in the URL and the [publishing environment](../../cs-docs/developers/set-up-environments/about-environments.md) as a query parameter. Use the value of the [delivery token](/docs/developers/create-tokens#work-with-delivery-tokens) against the access_token key in the header to authenticate your API request.

**Note**: To fetch entries of a specific branch in your stack, you can pass the branch header while running the API request. This is an optional header that accepts the branch unique ID as value. You can also pass the alias ID as value for the branch header while querying the GraphQL API. If the branch header is not passed, then the API fetches details from the main branch by default.

The API Key is a unique key assigned to each stack. The delivery token is a read-only token, meaning this token can be used to fetch published content only, and not to edit or create new content in your stack.

### Rate Limiting

Rate limiting defines the maximum number of API requests your organization can make within a specific time frame.

**Request Types**

• **CDN Requests**: Contentstack's CDN serves cached responses. These requests are not subject to rate limiting.

• **Origin Server Requests**: Requests that are not cached and are routed to the origin server are subject to rate limits.

**Default Limits**

By default, origin server requests are limited to **80 requests per second per organization**. All requests made from the GraphQL API endpoint counts towards this rate limit. The exact rate limit depends on your plan. If required, you can request an increase by contacting [support](mailto:support@contentstack.com).

**Note**: While CDN requests are not rate-limited, all API requests (CDN and origin) count toward your organization's overall API usage quota. 

**Rate Limit Exceeded**

If your application exceeds the allowed rate limit within a given time period, the API will return an HTTP 429 (Too Many Requests) response.

**Monitoring Rate Limits**

You can track your current rate limit status using the **HTTP response headers** returned with each API request. These limits reset at the beginning of each time window.

| Headers | Description |
| --- | --- |
| X-RateLimit-Limit | Maximum number of requests allowed per second per organization. |
| X-RateLimit-Remaining | Number of requests remaining in the current time window. |

### Anatomy of a GraphQL Query

Let's look at the basic parts of a simple GraphQL query.

- Operation Type: GraphQL queries use the query keyword to indicate the type of operation we are performing.
- Arguments: An argument consists of a parameter-value set that can be used to specify arguments such as locale, skip, limit, where (conditions), etc.
- Fields: You can define the set of data for which you are asking.

The above query would look as follows when written in the form of a request:

```
https://graphql.contentstack.com/stacks/blt95a0a7afb9613f51?environment=production&query={all_product(where: {title: Galaxy Note}) { items { title description } } }
```

Within this API request, we state the stack API key and the publishing environment, followed by your query. The delivery token is passed as value of the access_token key in the header.

**Note**: To fetch entries of a specific branch in your stack, you can pass the branch ID as value of the optional branch key in the header.

This is a test entry created from the original GraphQL Content Delivery API documentation with TEST- prefix for Phase 1 workflow verification. All fields and content should match the original entry configuration in the CMS.