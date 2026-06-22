---
title: "GraphQL | Query Complexity and Cost Calculation"
description: Understand GraphQL query complexity, cost calculation, and limits for efficient Contentstack content delivery.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/query-complexity-and-cost-calculation
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Query Complexity and Cost Calculation

Contentstack GraphQL API prevents malicious queries from requesting for excessive amounts of data that can overload the server or database.

To mitigate risks posed by such queries, we set the following standards:

- A single GraphQL query can fetch a maximum of 7,500 records
- A single GraphQL query can fetch a maximum of 100 referenced records for a single Reference field connection
- You can use the skip and limit pagination parameters to fetch more reference connection records

We do a cost and complexity analysis before the query is actually executed, and restrict the query from being executed if it exceeds our limits. The API takes into account:

- Query complexity: Represents the total number of entries the query attempts to fetch
- Query cost: Represents the total number of database calls to be made to fetch the desired entries and their fields

Let’s look at an example to understand how we do this:

```
query {
  all_blogs(limit:100) {
    items {
      related_blogsConnection(limit:75) {
        totalCount
        edges {
          node {
            ... on Blogs {
              title
            }
          }
        }
      }
    }
  }
}
```

Now, we calculate the total records the above query is trying to fetch:

**Depth 0 (Blogs Content Type)** = 100 blog entries

**Depth 1 (Related Blogs Reference Field)**: 100 x 75 = 7,500 related blog entries

**Total Blog Entries**: 100 blog entries + 7,500 related blog entries = **7,600 entries**

Since the total entry count exceeds the maximum allowed limit of 7,500, we can prevent this query from connecting to the database.

To fetch more data, we recommend you to paginate the references effectively and make multiple requests.
