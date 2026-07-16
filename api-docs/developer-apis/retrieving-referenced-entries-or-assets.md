---
title: "GraphQL | Retrieving Referenced Entries or Assets"
description: Query referenced entries and assets in GraphQL responses, including nested references and linked content structures.
url: https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/retrieving-referenced-entries-or-assets
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Retrieving Referenced Entries or Assets

In this section, we learn how to fetch one or more [entries](../../../../cs-docs/content-managers/author-content/about-entries.md) referred in the [reference](../../../../cs-docs/developers/create-content-types/reference.md) fields or [assets](/docs/content-managers/working-with-assets/about-assets) used in the entries while retrieving the entries of a [content type](../../../../cs-docs/developers/create-content-types/about-content-types.md). We also learn how to retrieve entries and assets referenced inside the JSON Rich Text Editor fields of the content type. Contentstack’s GraphQL API uses [relay type connection specification](https://relay.dev/docs/guides/graphql-server-specification/) to fetch referred content.

**Relay specification** measures the Reference-Graph-Object structure for an application. The data graph specifies the different connections that exist between each entity of the stack. The following entities form a part of the graph structure:

- Node: A node represents an individual resource of the stack, for example, an entry, an asset, or a specific content type (e..g., Product).
- Edges: Edges represent the connection between two content types, for instance, when a Product content type refers to the entries of another content type (e.g., Category).
- Connection: Connection represents the one-to-many relationships between a parent content type and its referenced child content types.

You can paginate the list of referenced entries or assets returned in the response body using the [skip](../../../api-detail/graphql-content-delivery-api.md#skip-operator) and [limit](../../../api-detail/graphql-content-delivery-api.md#limit-operator) parameters.

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

To fetch entries or assets embedded inside a [JSON Rich Text Editor](../../../../cs-docs/developers/json-rich-text-editor.md), you need to specify the reference connections under the embedded_itemsConnection field. For entries, specify the content type name; and for assets, specify the system-generated SysAsset typename in Pascal casing format, e.g. SysAsset.

**Note**: You cannot filter the GraphQL query response based on embedded items or references inside an embedded entry.

If the field has been marked as "Multiple", use the [skip](../../../api-detail/graphql-content-delivery-api.md#skip-operator) and [limit](../../../api-detail/graphql-content-delivery-api.md#limit-operator) parameters to paginate the list of embedded items returned in the response.

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

## Include Single Content Type Reference Fields

### Try 'Include Single Content Type Reference Fields'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the specified referenced entry. This query uses [relay specification](https://relay.dev/docs/guides/graphql-server-specification/) to retrieve the details of the entries referred in reference fields.

**Note**: You can use the skip and limit parameters while querying [Reference](../../../../cs-docs/developers/create-content-types/reference.md) fields that refer to a single content type and have been marked as “Multiple”.

If your stack was created after **29th July, 2019**, then you will automatically be using the [upgraded Reference field](../../../../cs-docs/developers/create-content-types/reference-field-upgradation.md) that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.

**Example**: In the **Product** content type, there is a reference field called **Categories**, which refers entries of another content type named **Category**.

**Note**: When you query reference fields that refer to content types other than the first **100** available, the query will return an error in the response body of the GraphQL API request. If referenced entries are not published or have been deleted, then the query will return { edges: [] }.

To fetch all entries of the “Product” content type along with the corresponding referenced entry from the “Category” content type, you can run the following query:

```
query {
  all_product {
    total
    items {
      title
      categoriesConnection {
        totalCount
        edges {
          node {
           title
          }
        }
      }
    }
  }
}
```

The totalCount field returns the number of referenced entries for a specific Reference field.

**Note**: Contentstack’s GraphQL queries can fetch referenced entries up to **three** levels deep.




## Include Multi Content Type Reference Fields

### Try 'Include Multi Content Type Reference Fields'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the specified referenced entries. This query uses inline fragments and relay specification to retrieve details of entries referring to multiple content types.

**Note**: Contentstack’s GraphQL queries can fetch referenced entries up to three levels deep.

Within the inline fragments section, you need to specify the name of the content type. Subsequently, you need to append the Connection term as postfix for the content type UID.

```
{reference_field_UID}Connection {
        totalCount
        edges {
          node {
            ... on {Referenced_Content_Type_Name_in_PascalCase} {
              {field_name}
            }
          }
        }
      }
```

The node specifies the referenced content types related to the parent content type.

**Example**: In the **Product** content type, we have a multi content type Reference field named **Frequently Bought Together**. This Reference field refers to entries of the following content types: **Electronics** and **Kitchen Appliances**.

So, for instance, if you need to fetch referenced entries from both content types, **Electronics** and **Kitchen Appliances**, your query will look as follows:

```
query {
  all_product {
    items {
      title
      frequently_bought_togetherConnection {
        edges {
          node {
            ... on KitchenAppliances {
              title
              kitchen_appliance_details
            }
            ... on Electronics {
              title
              appliance_details
            }
          }
        }
      }
    }
  }
}
```

**Note**: When you query reference fields that refer to content types other than the first **100** available, the response body will return an error. If referenced entries are not published or have been deleted, then the query will return { edges: [] }.




## Include Assets Added to a Content Type

### Try 'Include Assets Added to a Content Type'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of an asset that has been used in the entries. This query uses [relay specification](https://relay.dev/docs/guides/graphql-server-specification/) to fetch asset details such as the title of an asset or its URL.

Specify the asset UID while retrieving the asset information. Subsequently, you need to append the Connection term to the asset UID as a postfix.

**Note**: You can use the skip and limit pagination parameters only while querying assets that have been marked as “Multiple”.

**Example**: In the **Product** content type, you need to retrieve all entries along with comprehensive details of the image stored within the **Images** field. To fetch only the first **five** assets while retrieving the entries, use the limit parameter.

Your query will look as follows:

```
query {
  all_product {
    items {
      title
      imagesConnection(limit: 5) {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Title’ field of the Product content type and the ‘Title’ and ‘Description’ of the assets stored in the Images field. It will only return the first five assets.




## Include Embedded RTE Items

### Include Embedded RTE Items

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the embedded entries and assets referenced inside the [JSON Rich Text Editor](../../../../cs-docs/developers/json-rich-text-editor.md). This query uses inline fragments and relay specification to retrieve details of rich text editors that refer to multiple embedded items.

**Note**: You cannot filter the GraphQL query response based on embedded items or references inside an embedded entry.

You can specify the name of the content types to which the embedded entries belong under the embedded_itemsConnection field schema. To fetch embedded assets, provide the system-generated typename, SysAsset.

```
embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on KitchenAppliances {
                title
                kitchen_appliance_price_in_usd
              }
              ... on SysAsset {
                title
              }
            }
          }
        }
```

Each node either specifies the referenced content type or the system-generated typename.

**Example**: In the **Product** content type, we have a **Cart Items** JSON Rich Text Editor field. This field stores information about products that you have already added to your cart (electronic appliances in this example), and also contains a company logo.

If, for instance, you want to retrieve the embedded product details inside this field (along with the company logo), your query will look as follows:

```
query {
  all_product {
    total
    items {
      title
      url
      cart_items {
        embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on Electronics {
                title
                appliance_price_in_usd
                appliance_details
              }
              ... on SysAsset {
                title
                file_size
              }
            }
          }
        }
      }
    }
  }
}
```

**Note**: You can retrieve a maximum of **100** embedded items (entries or assets) in a single GraphQL API request.




## Search within Referenced Entries from a Single Content Type

### Try 'Search Referenced Entries from a Single Content Type'

**** `/stacks/apiKey/explore`

Get entries having values based on referenced fields. This query retrieves all entries that satisfy query conditions made on referenced fields that refer to a single content type.

**Note**: If your stack was created after **29th July, 2019**, then you will automatically be using the [upgraded Reference field](../../../../cs-docs/developers/create-content-types/reference-field-upgradation.md) that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.

Let us use the equals operator to search based on the **Title** field of the referenced content type, **Category**.

**Example**: In the Product content type, if you wish to retrieve all entries that have their category title set to ‘Mobiles’, your query will look as follows:

```
query {
  all_product(
    where: {
      categories: {
        title: "Mobiles"
      }
    }) {
    total
    items {
      title
      categoriesConnection {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}
```

The response body will include all entries of the Product content type that satisfy the query, and will include details of just the ‘Title’ field of the Category content type. Similarly, all the query operators listed in this guide can be applied to search based on the values of referenced fields.

**Note**: Only up to **three** levels deep of referenced fields can be used within the where argument to filter the requested entries.




## Search within Referenced Entries from Multiple Content Types

### Try 'Search Referenced Entries from Multiple Content Types'

**** `/stacks/apiKey/explore`

Get entries having values based on referenced fields. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve all entries that satisfy query conditions made on referenced fields that refer to multiple content types.

**Example**: In the **Product** content type, we have a multi content type Reference field named **Frequently Bought Together**. This Reference field refers to entries of the following content types: **Electronics** and **Kitchen Appliances**.

Let us use the **MATCH** operator to search entries of the two referenced content types: **Electronics** and **Kitchen****Appliances** on the basis of their **Title** field. The “Match” operator filters the entries to return only the entries that match the specified condition(s). You can enter the following values for the Match operator:

- ALL: The ALL option returns only those entries that match all the conditions specified
- ANY: The ANY option returns only those entries that match any one of the conditions specified

If you do not specify the MATCH operator, then the query uses the ALL option by default.

To fetch the referenced entries where the value of the **Title** field is one among the following: **Sony Bravia LED Smart TV** and **Glenmark Cooktop**, set the MATCH operator to ANY. Your query will appear as follows:

```
query {
  all_product(
    where: {
      frequently_bought_together: {
        MATCH: ANY,
        electronics: {
          title: "Sony Bravia LED Smart TV"
        },
        kitchen_appliances: {
          title: "Glenmark Cooktop"
        }
      }
    }) {
    items {
      title
      frequently_bought_togetherConnection {
        edges {
          node {
            ... on KitchenAppliances {
              title
              kitchen_appliance_details
            }
            ... on Electronics {
              title
              appliance_details
            }
          }
        }
      }
    }
  }
}
```

The response body will include all entries of the Electronics and Kitchen Appliances content types that satisfy the query, and will include details of just the “Title” field of these content types. Similarly, all the query operators listed in this guide can be applied to search based on the values of referenced fields.

**Note**: Only up to **three** levels deep of referenced fields can be used within the where argument to filter the requested entries.




## Get Entries by Referenced Asset

### Get Entries by Referenced Asset

**** `/stacks/apiKey/explore`

Get entries by using asset data to query a content type.

**Example**: In the **Product** content type, if you wish to retrieve all referenced entries that have an image stored by the name **in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg** within the **Images** field, your query will look as follows:

```
query {
  all_product(
    where: {
      images: {
        title: "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg"
      }
    }) {
    total
    items {
      title
      categoriesConnection {
        edges {
          node {
            ...on Category {
              title
            }
          }
        }
      }
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the 'Title' field of the **Category** content type.

**Note**: You cannot query content types based on the URL field of an asset.




## Nested Reference Filtering

### Nested Reference Filtering

**** `/stacks/apiKey/explore`

Nested reference filtering allows you to filter referenced entries within a reference field, returning relevant entries matching specific criteria. This feature does not affect the parent or child documents, making it easier to retrieve only the necessary data.

**Note**: This is a plan-based feature, reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

Consider a **Product**content type with a reference field named **Categories**, which refers to entries from another content type named **Category**.

You can use nested reference filtering to retrieve specific referenced entries based on certain conditions, such as:

- Fetch all Product entries where the referenced Category entries title matches Electronics.
- Further refine the referenced Category entries to include only those where the cost is $20 and above.

```
{
    all_product(
        where: {
            reference: {
                categories: {
                    section: "Electronics"
                }
            }
        }
    ) {
        items {
            title
            categoriesConnection(
              where: { 
                cost_gte: 20
              }
            ) {
                edges {
                    node {
                        ... on Category {
                           title
				section
				cost
                                description
                        }
                    }
                }
            }
        }
    }
}
```

**Note**: Nested reference filtering does not support **File**, **Reference**, or **JSON RTE** fields.

