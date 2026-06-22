---
title: "GraphQL | Retrieving Referenced Entries or Assets"
description: Query referenced entries and assets in GraphQL responses, including nested references and linked content structures.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/retrieving-referenced-entries-or-assets
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Retrieving Referenced Entries or Assets

In this section, we learn how to fetch one or more [entries](/docs/content-managers/working-with-entries/about-entries) referred in the [reference](/docs/developers/create-content-types/reference) fields or [assets](/docs/content-managers/working-with-assets/about-assets) used in the entries while retrieving the entries of a [content type](/docs/developers/create-content-types/about-content-types). We also learn how to retrieve entries and assets referenced inside the JSON Rich Text Editor fields of the content type. Contentstack’s GraphQL API uses [relay type connection specification](https://relay.dev/docs/guides/graphql-server-specification/) to fetch referred content.

**Relay specification** measures the Reference-Graph-Object structure for an application. The data graph specifies the different connections that exist between each entity of the stack. The following entities form a part of the graph structure:

- Node: A node represents an individual resource of the stack, for example, an entry, an asset, or a specific content type (e..g., Product).
- Edges: Edges represent the connection between two content types, for instance, when a Product content type refers to the entries of another content type (e.g., Category).
- Connection: Connection represents the one-to-many relationships between a parent content type and its referenced child content types.

You can paginate the list of referenced entries or assets returned in the response body using the [skip](/docs/developers/apis/graphql-content-delivery-api#skip-operator) and [limit](/docs/developers/apis/graphql-content-delivery-api#limit-operator) parameters.

**Note**: You can only paginate the response returned for reference fields (referencing entries/assets) that have been marked as “Multiple”.

Contentstack’s GraphQL API paginates all the items referred in the Reference field, irrespective of whether they have been published or not.

For instance, the **Related Blogs** reference field (multi content type referencing) refers to a total of **10** related blog posts. You want to skip the first **2** referenced blogs in the list and limit the total number of blogs returned by the reference field to **5**. You can use the skip and limit parameters in your query as follows:

```
query {
  all_blogs {
    items {
      related_blogsConnection(skip: 2, limit: 5) {
        totalCount
        edges {
          node {
            ... on SalesBlogs {
              title
            }
            ... on MarketingBlogs {
              title
            }
          }
        }
      }
    }
  }
}
```

The above query will paginate all the referenced blog content irrespective of whether it has been published or not.

**Note**: To query Reference fields, you need to append the Connection term to the reference field UID as postfix (e.g., **related_blogsConnection**). Subsequently, you need to specify the name of the referenced content type in [PascalCase](https://techterms.com/definition/pascalcase#:~:text=PascalCase%20is%20a%20naming%20convention,in%20PascalCase%20is%20always%20capitalized.) to fetch referenced data through the node (e.g., **SalesBlogs**).

To fetch entries or assets embedded inside a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor), you need to specify the reference connections under the embedded_itemsConnection field. For entries, specify the content type name; and for assets, specify the system-generated SysAsset typename in Pascal casing format, e.g. SysAsset.

**Note**: You cannot filter the GraphQL query response based on embedded items or references inside an embedded entry.

If the field has been marked as "Multiple", use the [skip](/docs/developers/apis/graphql-content-delivery-api#skip-operator) and [limit](/docs/developers/apis/graphql-content-delivery-api#limit-operator) parameters to paginate the list of embedded items returned in the response.

For instance, the **Recent Articles** JSON Rich Text Editor provides a snapshot of the recently published articles for a news-related website. Each snapshot is represented by embedded items within the rich text editor, along with an embedded asset to make for better reading. To fetch only the last five recently published articles, your query will look as follows:

```
query {
  all_articles {
    total
    items {
      title
      url
      recent_articles {
        embedded_itemsConnection(limit: 5) {
          edges {
            node {
              ... on HistoryArticles {
                title
                description
              }
              ... on SysAsset {
                title
                description
              }
            }
          }
        }
      }
    }
  }
}
```

The above query will paginate all the embedded entries and assets returned in the API response.

**Note**: You cannot fetch entries or assets referenced inside an embedded entry.

Let us fetch reference fields and assets while retrieving entries.

## Related Pages

- [Include Single Content Type Reference Fields](https://www.contentstack.com/docs)
- [Include Multi Content Type Reference Fields](https://www.contentstack.com/docs)
- [Include Assets Added to a Content Type](https://www.contentstack.com/docs)
- [Include Embedded RTE Items](https://www.contentstack.com/docs)
- [Search within Referenced Entries from a Single Content Type](https://www.contentstack.com/docs)
- [Search within Referenced Entries from Multiple Content Types](https://www.contentstack.com/docs)
- [Get Entries by Referenced Asset](https://www.contentstack.com/docs)
- [Nested Reference Filtering](https://www.contentstack.com/docs)
