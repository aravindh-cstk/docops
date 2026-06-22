---
title: "GraphQL | Limitations"
description: Review GraphQL Content Delivery API limitations, constraints, and supported query behavior.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/limitations
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Limitations

There are certain limitations that we have applied for Contentstack GraphQL. Let’s understand what they are:

| Features | Limitations |
| --- | --- |
| GraphQL | If there are any typename collisions on GraphiQL Explorer, the introspection schema will fail to load.Avoid using special characters while naming content types or fields to prevent typename collisions.If your content type UIDs and field UIDs start with a number, you won't be able to run any GraphQL queries. |
| Maximum content type schema generated in a single request | The maximum limit for the number of content types for which schema definition can be generated in a single API request is 100. |
| Sorting | The ‘Order by Asc’ and ‘Order by Desc’ operators can only be used on the following system-defined fields:Created atUpdated at |
| Searching based on reference | You can use referenced fields that lie up to three levels deep in the “where” argument to search for top-level content. |
| Nested reference fetching depth | The maximum depth limit for fetching nested items (entries and/or assets) is three. |
| Maximum objects | The maximum objects that can be fetched in a single query is 7,500. |
| Maximum reference objects for a single Reference field | The maximum referenced items that can be fetched for a single Reference field is 100. |
| Maximum embedded objects (entries and assets combined) for a JSON Rich Text Editor field | The maximum embedded items (entries and assets combined) that can be fetched for a single JSON Rich Text Editor field is 100. |
| Querying multiple content types | The maximum content types that can be queried in a single request is three. |
| Response Size | The maximum size limit for the response returned by a GraphQL query is 7 MB. |
| Regular Expressions | The Contentstack GraphQL API does not support the use of regular expressions to filter query responses. |
