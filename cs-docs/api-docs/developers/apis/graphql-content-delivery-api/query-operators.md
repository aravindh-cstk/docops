---
title: "GraphQL | Query Operators"
description: Use GraphQL query operators to filter, match, compare, and refine Contentstack content results.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/query-operators
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Query Operators

Query operators allow you to filter a list of entries or assets by specifying filter conditions in the root content type’s query. You can postfix each of these operators to the field UIDs.

Here’s a list of query operators that you can use to filter your list queries:

| Filter | Postfix | Value Accepted |
| --- | --- | --- |
| equals |   | Any |
| not equals | _ne | Any |
| exists | _exists | Boolean |
| equals any value in the specified array | _in | String, Number, ISODate |
| not equal to any value in the specified array | _nin | String, Number, ISODate |
| greater than | _gt | Number, ISODate |
| greater than or equals to | _gte | Number, ISODate |
| less than | _lt | Number, ISODate |
| less than or equals to | _lte | Number, ISODate |

Additionally, you can also use logical operators (AND/OR) or pagination parameters (skip/limit) to fetch filtered query results.

**Complex Fields**

Contentstack classifies content types, group fields, global fields, assets, reference fields, and modular blocks as complex fields because they belong to either the GraphQLObject or GraphQLUnion type.

Each of these fields has its own set of filters. Filter names typically follow this pattern and are postfixed by Where. For example, ContentType.Group.Reference is equivalent to ProductGroupReferenceWhere in GraphQL.

Each filter has a subcategory of available filter types based on the fields that make up the complex type. You can refer to the [Naming Convention](/docs/developers/apis/graphql-content-delivery-api#naming-convention) section to know more about how filter names are generated.

Let’s understand how to use these query operators with GraphQL.

## Related Pages

- [Taxonomy](https://www.contentstack.com/docs)
- [Terms](https://www.contentstack.com/docs)
- [Equals Operator](https://www.contentstack.com/docs)
- [Not-equals Operator](https://www.contentstack.com/docs)
- [In Operator](https://www.contentstack.com/docs)
- [Not In Operator](https://www.contentstack.com/docs)
- [AND Operator](https://www.contentstack.com/docs)
- [OR Operator](https://www.contentstack.com/docs)
- [Less Than Operator](https://www.contentstack.com/docs)
- [Less Than Or Equal To Operator](https://www.contentstack.com/docs)
- [Greater Than Operator](https://www.contentstack.com/docs)
- [Greater Than Or Equal To Operator](https://www.contentstack.com/docs)
- [Limit Operator](https://www.contentstack.com/docs)
- [Skip Operator](https://www.contentstack.com/docs)
- [Order by Asc Operator](https://www.contentstack.com/docs)
- [Order by Desc Operator](https://www.contentstack.com/docs)
- [Exists Operator](https://www.contentstack.com/docs)
- [Total](https://www.contentstack.com/docs)
- [Count](https://www.contentstack.com/docs)
- [Pagination](https://www.contentstack.com/docs)
