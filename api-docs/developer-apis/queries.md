---
title: "GraphQL | Queries"
description: Build GraphQL Content Delivery API queries with filters, sorting, pagination, references, and field selection for precise content retrieval.
url: https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/queries
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Queries

In this section, we learn how to fetch one or more [entries](../../../../cs-docs/content-managers/author-content/about-entries.md) or specific [fields](../../../../cs-docs/developers/create-content-types/about-fields.md) of those entries. We also learn how to fetch entries from multiple [content types](../../../../cs-docs/developers/create-content-types/about-content-types.md).

## Get a List of Entries

You can fetch the values of specific fields for some or all the entries of a particular content type. To do this, specify the **content type UID** and the **field UIDs** in the query.

To fetch a list of entries, you need to prefix the content type UID with all_, e.g., all_product.

Let us consider a scenario where you need to fetch the titles of all the entries of the **Product** content type which are published in the **English - United States** locale.

Here, the GraphQL query will look as follows:

```
query {
  all_product(
    locale: "en-us"
  ) {
    total
    items {
      title
    }
  }
}
```

Let’s look at the different arguments we can use in the query:

- where: This argument allows you to filter the query responses from the list of entries present in the content type.Note: You cannot filter the GraphQL query response based on embedded items or references inside an embedded entry.Check the Query Operators section to learn about the operators used to apply filter conditions. The argument accepts JSON Scalar type input. It is an optional argument.Note: When an API request hits the Contentstack server, internally the {content_type_uid}Where filter is assigned a JSON scalar value. This allows you to create filters on keys that may not exist on the current content type's schema.
- locale: This argument helps you fetch the content of only a specific locale. If you do not specify a locale, it will fetch the content of the master locale. The locale parameter accepts the language code as value, e.g., "en-us". It is an optional argument.
- fallback_locale: This argument helps you fetch published content from the fallback locale if an entry is not published in the specified locale

If you do not pass fallback_locale argument, it will fetch content from the master locale by default. It is an optional argument.
- order_by: This argument is used to sort the retrieved entries. By default, the value for order_by is set to updated_at_DESC, which indicates the entries will be sorted in the descending order based on the last updated time. It is an optional argument.
- skip: This argument allows you to paginate between the list of entries returned. If no value is provided, it accepts ‘0’ by default.
- limit: This argument allows you to limit the total number of entries returned for the queried content type. If no value is provided, then it accepts ‘25’ by default. The maximum allowed value for this field is 100.

The ‘total’ parameter in the above query fetches the total count of all the entries available in the content type. It is an optional parameter. The query returns values for the **Title** field of every entry inside the items array of the response.

**Warning**: If your content type UIDs and field UIDs start with a number, you won't be able to run any GraphQL queries.

### Get a List of Entries

**** `/stacks/apiKey/explore`




## Get a Single Entry

You can fetch data of only certain fields of a specific entry of a content type. To do this, you need to specify only the **content type UID**, the **entry UID**, and the **field UIDs** in the query.

So, for instance, if you want only the values of the **Title** and **Color** fields of the **Product** content type for the entry published in the **English - United** States locale, the query for this request would look as follows:

```
query {
  product(
    uid: "blt3acdc57ef2ce2796",
    locale: "en-us"
  ) {
    title
    color
  }
}
```

Let us understand the query arguments in detail:

- uid: This argument represents the unique ID of the entry you want to fetch from the content type. It is a mandatory argument.
- locale: This argument helps you fetch the content of only a specific locale. If you do not specify a locale, it will fetch the content of the master locale. It is an optional argument.
- fallback_locale: This argument helps you fetch published content from the fallback locale if an entry is not published in the specified locale. It accepts only values of type Boolean, such as true or false. If you do not pass fallback_locale, it will fetch content from the master locale by default. It is an optional argument.

The “locale” parameter in the argument helps you fetch the content of only a specific locale. If you do not specify a locale, it will fetch the content of the **master locale**.

**Warning**: If your content type UIDs and field UIDs start with a number, you won't be able to run any GraphQL queries.

### Get a Single Entry

**** `/stacks/apiKey/explore`




## Get Entry List with Variants

The Get Entry List with Variants request retrieves all entry variants of a specified entry.

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Pass your variant UID(s) in the x-cs-variant-uid header to get all the variants applied to the entries.

**Note**: You can add up to three variant UIDs simultaneously. Priority is determined by order, with the last UID taking precedence over earlier ones. For example, when x-cs-variant-uid: red, green, blue is passed, the Blue variant overrides fields from Red and Green.

**Example**: In the **Product** content type, you have base entries with associated entry variants (e.g., different colors or region-based versions). To retrieve a list of all entry variants, include the relevant variant UIDs in the x-cs-variant-uid header. The query will apply the variant fields over the base entry fields, merging them as needed.

```
query {

  all_product(

    locale: "en-us"

  ) {

    total

    items {

          title

          hero_text

          price

          uid

          color

          region_based

          description

    }

  }

}
```

### Get Entry List with Variants

**** `/stacks/apiKey/explore`




## Get Single Entry with Variant

The Get Single Entry with Variant request retrieves a single entry variant of a specified entry.

To fetch data for a single entry variant, you need to specify only the content type UID, the entry UID, and the field UIDs in the query.

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Pass your variant UID(s) in the x-cs-variant-uid header to get all the variants applied to the entries.

**Note**: You can add up to three variant UIDs simultaneously. Priority is determined by order, with the last UID taking precedence over earlier ones. For example, when x-cs-variant-uid: red, green, blue is passed, the Blue variant overrides fields from Red and Green.

**Example**: For example, to retrieve only the **title** and **color** fields of a entry in the **Product**content type published in the **English (United States)** locale, use the following GraphQL query:

```
query {

  product(

    uid: "blt3acdc57ef2ce2796",

    locale: "en-us"

  ) {

    title

    color

  }

}
```

### Get Single Entry with Variant

**** `/stacks/apiKey/explore`




## Get Entries from Multiple Content Types

You can retrieve entries of multiple content types through a single API request. Within the GraphQL query, you can also define the specific fields of which you need to fetch data.

**Note**: Contentstack’s GraphQL queries can fetch entries of up to **three** different content types through a single API request.

**Example**: So, for instance, our stack comprises the following content types: **Product**, **Category**, and **Brand**. Now, suppose you want to fetch values of the **Title**, **Description**, and **Price_in_USD** fields for every entry in the "Product" content type. Subsequently, you also wish to fetch the list of categories and brands available for the product. Your GraphQL query would look as follows:

```
query {
  all_product(
    locale: "en-us"
  ) {
    total
    items {
      title
      description
      price_in_usd
    }
  }
  all_category {
    total
    items {
      title
      description
    }
  }
  all_brand {
    total
    items {
      title
      description
    }
  }
}
```

The total parameter in the above query fetches the total number of entries available in each of the content types. It is an optional parameter.

### Get Entries from Multiple Content Types

**** `/stacks/apiKey/explore`




## Query Batching

Query batching in GraphQL is a way where you can combine multiple query requests into a single request and retrieve results in a single output response, making it possible to fetch entries from multiple content types.

**Note:** Currently, Contentstack does not support query batching in GraphQL. One way to achieve it is by restructuring and combining the query requests.

**Example:** Consider you have two content types: **Product** and **Brand**. Suppose you want to fetch the **Title**, **Description**, and **Price in USD** details from the “Product” content type and **Title** and **Description** details from “Brand” content type. Your GraphQL query would look as follows:

  

```
query Query_1 {
  all_product {     
    items {
      title
      description
      price_in_usd
    }
  }
  all_brand {
    items {
      title
      description
    }
  }
 }
```

Using [GraphQL's aliasing](https://graphql.org/learn/queries/#aliases), you can batch the queries for the same content type.

**Example:** Suppose you want to fetch values of the **Title**, **Description**, and **Price in USD** fields of multiple entries for the **Product** content type from different languages. You can batch the queries and fetch all the field values for a single content type with a single request. Your GraphQL query would look as follows:

  

```
query Query_2 {
  en : all_product(locale: "en", limit: 100) {
    items {
      title
      description
      price_in_usd
    }
  }
  fr : all_product(locale: "fr", limit: 100) {
    items {
      title
      description
      price_in_usd
    }
  }
  jp : all_product(locale: "jp", limit: 100) {
    items {
      title
      description
      price_in_usd
    }
  }
 }
```

### Try 'Query Batching'

**** `/stacks/apiKey/explore`




## Get Entries from Multiple Languages

You can fetch [localized](../../../../cs-docs/developers/multilingual-content/about-localization.md) versions of entries present in a single or multiple content types through a single API request. This query uses GraphQL’s [aliases](https://graphql.org/learn/queries/#aliases) to identify each set of localized entry versions.

You can use a [fragment](https://graphql.org/learn/queries/#fragments) to define fields such as “Title” and “Launch Date” and reuse it to query across multiple locales.

**Example**: Let us consider a scenario where you need to fetch the titles and launch dates for all the entries of the **Product** content type which are published in “English - United States,” “French - France,” and “Japanese - Japan”. To identify each set of localized entries, you can use aliases such as american_products, french_products, and japanese_products.

Your query will look as follows:

```
query {
  american_products: all_product(locale: "en-us") {
    items {
      ...productFields
    }
  }
  french_products: all_product(locale: "fr-fr") {
    items {
      ...productFields
    }
  }
  japanese_products: all_product(locale: "ja-jp") {
    items {
      ...productFields
    }
  }
}

fragment productFields on Product {
  title
  launch_date
}
```

### Get Entries from Multiple Languages

**** `/stacks/apiKey/explore`




## Get a List of Assets

Assets stored in the Contentstack repository have a predefined schema that is mapped to the "SysAsset" GraphQL type. You can query this object type to fetch values for the title or URL of multiple assets at the same time.

To fetch a list of assets, you need to prefix the object type UID with all_, e.g., all_assets. You can also specify the locale parameter in the argument to fetch assets published to a specific locale. The locale parameter accepts the language code as value, e.g., "en-us".

**Note**: If you do not specify the locale parameter, then the query will fetch entries from the master locale.

If an asset is not published in a specified locale, you can pass the fallback_locale argument to fetch the published asset version from the fallback locale. This is an optional argument that accepts only values of type Boolean, such as true or false. If you do not pass fallback_locale, it will fetch the published asset version from the master locale by default.

Let us consider a scenario where you need to fetch the **Title**, **URL**, and **File Size** for all the assets that are published in the **English - United States** locale. The GraphQL query will look as follows:

```
query {
  all_assets(
    locale: "en-us"
  ) {
    total
    items {
      title
      url
      file_size
    }
  }
}
```

The ‘total’ parameter in the above query fetches the total count of all the assets available in the Contentstack repository. It is an optional parameter. The query returns values for the Title, URL, and File Size of every asset inside the items array of the response.

### Get a List of Assets

**** `/stacks/apiKey/explore`




## Get a Single Asset

Contentstack maps assets stored in Contentstack to the "SysAsset" GraphQL type. You need to provide the **asset UID** in the argument to fetch a specific asset.

If an asset is not published in a specified locale, you can pass the fallback_locale argument to fetch the published asset version from the fallback locale. This is an optional argument that accepts only values of type Boolean, such as true or false. If you do not pass fallback_locale, it will fetch the published asset version from the master locale by default.

So, for instance, if you want to retrieve values for the **Title**, **URL**, and **File Size** of an asset stored in the Contentstack repository, the query for this request would look as follows:

```
query {
  assets(
    uid: "blt7b97455d001a057c"
  ) {
    title
    url
    file_size
  }
}
```

### Get a Single Asset

**** `/stacks/apiKey/explore`




## Get Global Fields while Retrieving Entries

You can fetch data of only certain fields of a **Global** field that is referred within a specific entry of a content type. To do this, you need to specify the content type UID, the entry UID, the Global field UID, and the UIDs of the fields that are part of the Global field in the query. Read more about [Global fields](/docs/developers/global-field).

So, for instance, the **Bank Address** Global field has been referred to within the **Bank** content type. This Global field comprises the following fields:

- House No
- Street Name
- Landmark
- City

If you want to retrieve the entries in which the value for the **Street Name** field is **Hollywood Boulevard**, the query for this request would look as follows:

```
query {
  all_bank(
    where: {
      bank_address: {
        street_name:"Hollywood Boulevard"
      }
    }) {
    items {
      bank_address {
        house_no
        street_name
        landmark
        city
      }
    }
  }
}
```

### Get Global Fields while Retrieving Entries

**** `/stacks/apiKey/explore`




## Get Group Fields while Retrieving Entries

You can fetch data of only certain fields of a **Group** field that is used within a specific entry of a content type. To do this, you need to specify the content type UID, the entry UID, the Group field UID, and the UIDs of the fields that are part of the Group field in the query. Read more about [Group fields](../../../../cs-docs/developers/create-content-types/group.md).

So, for instance, the **Product** content type has a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If you want to retrieve the entries in which the value for the Card Type field is **Debit Card**, the query for this request would look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type: "Debit Card"
      }
    }) {
    items {
      bank_offers {
        card_type
        discount_in_percentage
      }
    }
  }
}
```

### Get Group Fields while Retrieving Entries

**** `/stacks/apiKey/explore`




## Get JSON RTE Fields while Retrieving Entries

You can fetch the JSON-formatted data of a [JSON Rich Text Editor](../../../../cs-docs/developers/json-rich-text-editor.md) (RTE) field added to the entries of a content type. To do this, you need to specify the **content type UID**, the **JSON RTE field UID**, and the **json** field.

The json field returns all the content blocks present inside the JSON RTE in the API response.

**Note**: To fetch entries or assets embedded within the JSON RTE, you need to specify the embedded_itemsConnection field. Refer to the [Include Embedded RTE Items](../../../api-detail/graphql-content-delivery-api.md#include-embedded-rte-items) section for more information.

**Example**: In the **Product** content type, we have a "JSON Rich Text Editor" field named **Cart Items**. This field stores information about products that you have already added to your cart (kitchen appliances in this example), and also contains a company logo.

If, for instance, you want to retrieve the embedded product details inside this field (along with the company logo), your query will look as follows:

```
query {
  all_product {
    total
    items {
      title
      url
      cart_items {
        embedded_itemsConnection {
          edges {
            node {
              ... on KitchenAppliances {
                title
              }
              ... on SysAsset {
                title
              }
            }
          }
        }
        json
      }
    }
  }
}
```

The response body of this query will include details of the embedded appliance entries and company logo asset. The json field inside the **Cart Items** JSON RTE returns all your editor content in JSON format.

**Additional Resource**: Refer to the [JSON RTE schema](../../../../cs-docs/developers/json-rich-text-editor.md) documentation to understand how it stores and returns content.

### Get JSON RTE Fields while Retrieving Entries

**** `/stacks/apiKey/explore`




## Get Custom Fields while Retrieving Entries

You can fetch the data of [Custom Field Extensions](../../../../cs-docs/developers/create-custom-fields/about-custom-fields.md) added to the entries of a content type. To do this, you need to specify the content type UID, the extension UID, and the UIDs of other fields that you want to fetch in the query.

Contentstack allows you to retrieve the details of custom fields with input datatypes such as Number, Text, Boolean, Date, File, Reference, and JSON. Read more about [Extensions](../../../../cs-docs/developers/experience-extensions-overview/about-experience-extensions.md).

**Example**: In the **Product** content type, we have a "JSON Editor" custom field named **Helpful Links**. This field stores links to seller information as well as return policy norms for a specific product. If, for instance, you want to retrieve the value for this field, your query will look as follows:

```
query {
  all_product {
    items {
      title
      helpful_links
    }
  }
}
```

The response body of this query will include details of the ‘Helpful Links’ custom field and the ‘Title’ field. The extension field data will be displayed in JSON format.

### Get Custom Fields while Retrieving Entries

**** `/stacks/apiKey/explore`




## Get System defined Fields

GraphQL provides system-generated fields (a list of all the UIDs, created_by, created_at, etc.) for all the entries or assets stored in Contentstack under the **system field wrapper**. You can query the system object type to retrieve values for the UID or the publishing environment of an entry or asset.

**Additional Resource**: To learn about the system fields generated by GraphQL, refer to the [GraphQL FAQs](/docs/faqs/#graphql-faqs) section.

**Example**: In the **Product** content type, you need to fetch UIDs and publishing details for all the entries, along with the UIDs and publishing details for the assets stored within the **Images** field. Your GraphQL query would look as follows:

```
query {
  all_product {
    items {
      title
      system {
        created_at
        updated_at
        created_by
        updated_by
        uid
        version
        content_type_uid
        locale
        publish_details {
          environment
          locale
          time
          user
        }
      }
      imagesConnection {
        edges {
          node {
            system {
              created_at
              updated_at
              created_by
              updated_by
              uid
              version
              content_type_uid
              publish_details {
                environment
                locale
                time
                user
              }
            } 
          }
        }
      }
    }
  }
}
```

Along with the entry UIDs and asset UIDs, the above query also fetches the publishing locale and environment for each entry and asset.

### Get System defined Fields

**** `/stacks/apiKey/explore`

