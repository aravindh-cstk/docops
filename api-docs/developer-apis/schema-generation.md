---
title: "GraphQL | Schema Generation"
description: Understand how Contentstack generates GraphQL schemas from content types, fields, references, and global fields.
url: https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/schema-generation
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Schema Generation

The GraphQL server generates a schema to describe the shape of your data graph. In this section, we learn about the GraphQL type system defined by the schema and how it describes what data can be queried. All queries that hit the GraphQL Content Delivery API are validated against this schema.

## Types

GraphQL has its own “GraphQL schema language”, which is language-agnostic. This means that it can consume components from any specific programming language and describe GraphQL schemas.

Thus, each field in a content type has its own GraphQL type.

Here’s a list of all the Contentstack field types and their corresponding GraphQL types:

| Contentstack type | GraphQL type |
| --- | --- |
| string | String |
| date | DateTime |
| number | Float |
| boolean | Boolean |
| rich_text_editor  | string  |
| json_rich_text_editor  | JSON  |
| group | Object |
| global_field | Object |
| link | Object |
| file | Object |
| blocks | Union |
| block | Object |
| reference (single content type reference) | Object |
| reference (multi content type reference) | Union |
| json | Scalar |
| custom_field(JSON datatype) | JSON |



## Naming Convention

GraphQL has its own schema language, which has naming conventions of its own. Thus, the typenames of your content types and fields may differ from their [unique IDs](../../../../cs-docs/developers/create-content-types/unique-id.md) (UIDs).

Let us understand how Contentstack converts the unique IDs of complex objects from your schema to GraphQL typenames.

Contentstack’s GraphQL API considers the following components as complex objects:

- Content type
- Global field
- Reference field
- Group field
- Modular Blocks field

Contentstack converts the UIDs of each of these complex object types to a [pascal-case](https://wiki.c2.com/?PascalCase) version, stripping off all non-alphanumeric characters. We use the following conversion mechanism:

**Example**: pascalCase(undefined)

In the case of Modular Block’s block type, we postfix the UID with "Block".

**Example**: ${pascalCase(undefined)Block}

In the case of complex object’s input types, we postfix their UIDs with "Where".

**Example**: ${GraphQLTypeName}Where

Here are some examples of UIDs generated for complex object types:

| Contentstack complex object field type | Contentstack complex object UID  | GraphQL typename | GraphQL input typename |
| --- | --- | --- | --- |
| group | banner_group | BannerGroup | BannerGroup Where |
| blocks | modular_block | ModularBlock | ModularBlock Where |
| block | generic_blocks | GenericBlocksBlock | GenericBlocks BlockWhere |
| global_field | seo_fields | SeoFields | SeoFieldsWhere |
| json | app_config | AppConfig | AppConfigWhere |
| content_type_uid | blog | Blog | BlogWhere |



## Typename Collision

As we convert all the complex field UIDs to their corresponding GraphQL typenames by stripping them off their non-alphanumeric characters, there may be instances where two complex objects could end up having the same typename.

**Field Name Collision**

Here are some examples of typename collisions for fields within your schema:

| Complex field UID 1 | Complex field UID 2 | GraphQL typename |
| --- | --- | --- |
| group | group_ | Group |
| group | _group | Group |
| group_fields | groupFields | GroupFields |
| group.group (nested groups) | groupgroup | GroupGroup |

When you encounter a field name collision, you receive the following error message:

```
{
  "message": "Failed to run query.",
  "extensions": {
    "errors": [
      {
        "code": "SCHEMA_BUILD_ERROR",
        "message": "Unable to generate GraphQL types. Check details for more info.",
        "details": [
          {
            "error": "Field 'undefined' in undefined content type and field 'undefined' from [undefined] resulted in 'undefined' graphql type name. Kindly update the field uids to continue."
          }
        ]
      }
    ]
  }
}
```

**Content Type Name Collision**

Here are some examples of typename collisions for content types within your schema:

| Content type UID 1 | Content type UID 2 | GraphQL typename |
| --- | --- | --- |
| blog | blog_ | Blog |
| blog | _blog | Blog |
| blog_names | blogNames | BlogNames |

When you encounter a content type name collision, you receive the following error message:

```
{
  "message": "Failed to run query.",
  "extensions": {
    "errors": [
      {
        "code": "SCHEMA_BUILD_ERROR",
        "message": "Unable to generate GraphQL types. Check details for more info.",
        "details": [
          {
            "error": "Content types 'undefined' and 'undefined' graphql type name resulted in 'undefined'. Kindly update the content type uid to continue."
          }
        ]
      }
    ]
  }
}
```

Both of the above scenarios prevent us from generating a GraphQL schema for your content type (GraphQL requires that two complex objects have unique typenames).

In such situations, you need to update your content type UID or field UID. So, be careful while choosing a naming convention for your stack’s entities.

**Tip**: To avoid typename collision, you can use the skip_content_type_uids=[] query parameter while running introspection queries.



## Restricted Special Characters

In Contentstack's GraphQL documents, you assign names to several entities, such as operations, content types, fields, variables, and fragments. All the GraphQL names you define must follow the same grammatical form of /[_A-Za-z][_0-9A-Za-z]*/.

**Additional Resource**: You can refer to the GraphQL documentation to learn more about the [naming specifications](https://spec.graphql.org/June2018/#sec-Names).

The aforementioned naming convention means if you have a Content Type or Global Field name/UID name that starts with a number, it will end up throwing the following error:

```
{
  "errors": [
    {
      "message": "Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"{content_type_name}\" does not."
    },
    ...
  ]
}
```

**Tip**: To prevent typename collisions, you can avoid using special characters while naming content types or fields.



## Union Type Fields

Fields of the Union type can return one or more object types that consist of fields with different datatypes. You can use inline fragments to query any one of those underlying object types.

Contentstack supports GraphQL union types for the following fields:

- Modular Blocks
- Reference field (multi content type referencing)

**Modular Blocks**

Contentstack’s Modular Blocks field allows you to dynamically add blocks, each of which can have the same or a different structure. Thus, while querying you’ll need to specify the types for each block. This is called conditional fragments.

**Example**: Suppose you have a content type named **Animals** and your Modular Blocks JSON schema looks as follows:

```
{
    mammal: [
        {
            human: {
                name: "Adam Levine",
                height: 1.82
            }
        },
        {
            human: {
                name: "Billie Ellish",
                height: 1.61
            }
        },
        {
            dog: {
                name: "Jackie",
                type: "German Shepherd"
            }
        }
    ]
}
```

The above schema can be queried in the following way:

```
{
    mammal {
        __typename
        ... on AnimalsMammalHuman {
            human {
                name
                height
            }
        }
        ... on AnimalsMammalDog {
            dog {
                name
                type
            }
        }
    }
}
```

**Reference (multi content type referencing)**

Contentstack’s Reference fields allow you to refer to multiple content types. Thus, while querying in GraphQL, you’ll need to specify the referred content type’s typename.

**Note**: Contentstack uses relay-spec connection for querying assets and references. We allow offset pagination in connection fields that are marked as “Multiple”.

**Example**: Suppose you have a content type named **Product** and in it, you have a reference field called **Related Products**, as shown in the reference field schema below:

```
{
    related_products: [
        {
            uid: "",
            _content_type_uid: "tablets"
        },
        {
            uid: "",
            _content_type_uid: "smartphones"
        }
    ]
}
```

The above schema can be queried as follows:

```
{
    related_productsConnection(skip: 1, limit: 5) {
        totalCount
        edges {
            node {
                __typename

                # inline fragment
                ... on Tablets {
                    title
                    description
                    price
                }
                # fragment
                ...SmartphonesFragment
            }
        }
    }
}

fragment SmartphonesFragment on Smartphones {
    title
    brand
    description
    price
}
```

Learn more about querying reference fields in the [Retrieving Referenced Entries or Assets](../../../api-detail/graphql-content-delivery-api.md#retrieving-referenced-entries-or-assets) section.



## System-defined Fields

Certain fields in Contentstack are predefined. Their GraphQL type names are reserved and any user-defined fields that result in the same type will return the SCHEMA_BUILD_ERROR error message.

**Tip**: You can use an API client, such as [GraphiQL Explorer](../../../api-detail/graphql-content-delivery-api.md#graphiql-explorer), to run queries and explore Contentstack's GraphQL Content Delivery API before writing your application code. This helps detect and avoid the use of any reserved GraphQL typenames or user-defined fields.

Here’s a list of system-defined fields generated by Contentstack’s GraphQL Content Delivery API:

- SysAsset
- SysAssetConnection
- SysAssetEdge
- AllSysAsset
- SysAssetSystemField
- SysAssetDimension
- Link
- LinkWhere
- EntrySystemField
- MissingObject
- EvalReferenceEnum
- DeletedReferencesConnection
- SystemPublishDetails
- DateTime
- JSON
- SysTaxonomies

Let’s understand the schema generated for some of the commonly referred system-defined fields.

**SysAsset**

Contentstack has a pre-defined asset object class. Any files of type image will have the following schema:

```
type SysAsset {
    title: String

    url(transform: SysAssetTransformUrl): String

    description: String

    filename: String

    permanent_url: String

    parent_uid: String

    file_size: Int

    content_type: String

    dimension: SysAssetDimension
}

type SysAssetDimension {
    width: Int

    height: Int
}
```

**Link**

```
type Link {
  title: String

  href: String
}
```

**SysAssetSystemField**

```
type SysAssetSystemField {
  publish_details: SystemPublishDetails

  created_at: DateTime

  updated_at: DateTime

  created_by: String

  updated_by: String

  uid: String

  tags: [String]

  version: Int

  content_type_uid: String
}
```

**EntrySystemField**

```
type EntrySystemField {
  publish_details: SystemPublishDetails

  created_at: DateTime

  updated_at: DateTime

  created_by: String

  updated_by: String

  uid: String

  tags: [String]

  version: Int

  content_type_uid: String

  locale: String
}
```

**SystemPublishDetails**

```
type SystemPublishDetails {
  environment: String

  locale: String

  time: DateTime

  user: String
}
```

**DateTime**

```
# 
This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z
scalar DateTime
```

**JSON**

```
# 
The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
scalar JSON
```

**SysTaxonomies**

```
taxonomies(
  locale: String! = "en", 
  where: TaxonomyJSON, 
  skip: Int = 0, 
  limit: Int = 25
): SysTaxonomies

type SysTaxonomies {
  all_product(
    where: ProductWhere, 
    locale: String! = "en", 
    order_by: [HomePageOrderBy] = [updated_at_DESC], 
    skip: Int = 0, 
    limit: Int = 25
  ): AllProduct
}
```

**Note**:

- You can use the taxonomy filter to retrieve entries of the queried content type that matches the filter.
- The where: TaxonomyJSON values will be merged with the content types where: TangoWhere filters.
- The local content type pagination values take precedence over the pagination of the taxonomies query.
- The where: TaxonomyJSON values will be merged with the content types where: TangoWhere filters.
- The local content type pagination values take precedence over the pagination of the taxonomies query.
