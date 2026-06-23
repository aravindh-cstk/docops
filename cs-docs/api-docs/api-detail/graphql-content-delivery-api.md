---
title: "GraphQL Content Delivery API"
description: GraphQL is a flexible, customized API query language. Contentstack’s Content Delivery API gives you the power to query for exactly what you need—in one request.
url: graphql-content-delivery-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: unknown
last_updated: 2025-09-17
---

# GraphQL Content Delivery API


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

**Additional Resource**: You can refer to our documentation on [Live Preview](/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website/) for more information.

### Overview

GraphQL Content Delivery API is a more efficient alternative to the Content Delivery APIs. It lets you fetch customized responses or retrieve data of nested or multiple resources through a single API request.

GraphQL is a flexible, customizable API query language. Contentstack’s GraphQL API gives you the power to query for exactly what you need and nothing more, for instance, you can even fetch data from multiple content types via a single API request. You can customize your responses by defining the structure of your requests. Currently, Contentstack GraphQL supports only queries and each requested resource’s GraphQL types are generated in real time, so your content remains current.

**Note**: Contentstack's GraphQL API does not support mutations and subscriptions.

**Warning**: Avoid using _regex or _exists in field UIDs. These are reserved keywords in GraphQL and may cause errors during queries. Use alternative naming to ensure smooth query execution.

If you are familiar with GraphQL, and want to get a hands-on experience of the API, here’s a quick link to our sample stack:

[Query our sample stack](/docs/developers/apis/graphql-content-delivery-api/explorer)

### Authentication

GraphQL API requests must be authenticated using the following details:

- Stack API key
- Environment
- Delivery token of the concerned environment

You need to pass the [stack API Key](/docs/developers/set-up-stack/view-stack-details) in the URL and the [publishing environment](/docs/developers/set-up-environments/about-environments) as a query parameter. Use the value of the [delivery token](/docs/developers/create-tokens#work-with-delivery-tokens) against the access_token key in the header to authenticate your API request.

**Note**: To fetch entries of a specific branch in your stack, you can pass the branch header while running the API request. This is an optional header that accepts the branch unique ID as value. You can also pass the alias ID as value for the branch header while querying the GraphQL API. If the branch header is not passed, then the API fetches details from the main branch by default.

The API Key is a unique key assigned to each stack. The delivery token is a read-only token, meaning this token can be used to fetch published content only, and not to edit or create new content in your stack.

### Rate Limiting

Rate limiting defines the maximum number of API requests your organization can make within a specific time frame.

**Request Types**

• **CDN Requests**: Contentstack’s CDN serves cached responses. These requests are not subject to rate limiting.

• **Origin Server Requests**: Requests that are not cached and are routed to the origin server are subject to rate limits.

**Default Limits**

By default, origin server requests are limited to **80 requests per second per organization**. All requests made from the GraphQL API endpoint counts towards this rate limit. The exact rate limit depends on your plan. If required, you can request an increase by contacting [support](mailto:support@contentstack.com).

**Note**: While CDN requests are not rate-limited, all API requests (CDN and origin) count toward your organization’s overall API usage quota. 

**Rate Limit Exceeded**

If your application exceeds the allowed rate limit within a given time period, the API will return an HTTP 429 (Too Many Requests) response.

**Monitoring Rate Limits**

You can track your current rate limit status using the **HTTP response headers** returned with each API request. These limits reset at the beginning of each time window.

| Headers | Description |
| --- | --- |
| X-RateLimit-Limit | Maximum number of requests allowed per second per organization. |
| X-RateLimit-Remaining | Number of requests remaining in the current time window. |

### Anatomy of a GraphQL Query

Let’s look at the basic parts of a simple GraphQL query.

- Operation Type: GraphQL queries use the query keyword to indicate the type of operation we are performing.
- Arguments: An argument consists of a parameter-value set that can be used to specify arguments such as locale, skip, limit, where (conditions), etc.
- Fields: You can define the set of data for which you are asking.

The above query would look as follows when written in the form of a request:

```
https://graphql.contentstack.com/stacks/blt95a0a7afb9613f51?environment=production&query={all_product(where: {title: Galaxy Note}) { items { title description } } }
```

Within this API request, we state the stack API key and the publishing environment, followed by your query. The delivery token is passed as value of the access_token key in the header.

**Note**: To fetch entries of a specific branch in your stack, you can pass the branch ID as value of the optional branch key in the header.

### API Conventions

- The Contentstack GraphQL Content Delivery API is available at the following endpoints:
      North America: https://graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}
- Europe: https://eu-graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}
- Azure North America: https://azure-na-graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}
- Azure Europe: https://azure-eu-graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}
- GCP NA: https://gcp-na-graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}
- Dedicated Infrastructure (DI): https://{DI}.graphql.contentstack.com/{region}

  
  To fetch content from Contentstack, use the endpoint for the region where your organization data resides.
  Pass the delivery token of the concerned environment in the following header while making an API request:  
access_token: "{delivery_token}"
  Pass the unique ID of a branch to which a content type belongs against the following header to fetch branch-specific content:  

```
branch: "{branch_ID}"
```

  

    

**Note**: This is an optional header.

  
  The Contentstack GraphQL API endpoint for both entries and assets is the same. It can be used to fetch content (both entries and assets) across multiple content types.

### HTTP Methods

Contentstack’s GraphQL Content Delivery API supports both GET and POST methods on the GraphQL endpoint.

Let us understand how these methods work.

#### The GET Method

For GET requests, you must pass an environment name and a query in the request URL. Optionally, you can also specify an operation name or variable.

**URL**: https://{{domain}}/stacks/{{api_key}}

**Method**: GET

**Headers**:

- access_token: {{env_delivery_token}}
- branch: {{branch_ID}} (optional)

**Parameters**:

- environment={{environment_name}} (mandatory)
- query={{...}} (mandatory)
- variables={ "myVariable": "someValue", ... } (optional)
- operationName={{...}} (optional)

Here’s a sample cURL for a GraphQL GET request:

```
curl -g \
-X GET \
-H "Content-Type: application/json" \
-H "access_token: {{env_delivery_token}}" \
-H "branch: {{branchName || branchAlias}}" \
'https://graphql.contentstack.com/stacks/{{api_key}}?environment={{environment_name}}&query=query($locale:String){all_blog(locale:$locale){items{title}}}&variables={"locale":"en-us"}'
```

#### The POST Method

For POST requests, you must pass an environment name in the request URL, while the request body must include a query. Optionally, you can also specify an operation name or variable.

**URL**: https://{{domain}}/stacks/{{api_key}}

**Method**: POST

**Headers**:

- access_token: {{env_delivery_token}}
- branch: {{branch_ID}} (optional)

**Parameters**:

- environment={{environment_name}} (mandatory)

**Body**:

```
{
  "query": "...", # Mandatory
  "operationName": "...", # Optional
  "variables": { "myVariable": "someValue", ... } # Optional
}
```

Here’s a sample cURL for a GraphQL POST request:

```
curl -g \
-X POST \
-H "Content-Type: application/json" \
-H "access_token: {{environment_delivery_token}}" \
-H "branch: {{branchName || branchAlias}}" \
-d  '{"query":"query($locale: String){all_blog(locale: $locale){items{title}}}","variables":{{"locale":"en-us"}}}' \
https://graphql.contentstack.com/stacks/{{api_key}}?environment={{environment_name}}
```

### Introspection

Introspection system offers the ability to introspect what type of queries can run on the generated GraphQL schema. It provides a detailed description of the different object types that can be fetched from the schema.

For example, each content type in your stack has a corresponding GraphQL type and name. The introspection system would help you understand what fields can be queried, the arguments supported by those fields, and what output types can be returned by them.

We recommend that you structure your GraphQL queries by referring to the introspection schema. To explore the schema, you can run the following introspection query in [Contentstack’s GraphiQL explorer](/docs/developers/apis/graphql-content-delivery-api#graphiql-explorer):

```
query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    subscriptionType {
      name
    }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
```

You can also paginate the response schema returned by the Introspection system by passing the skip and limit parameters in the query. By default, the content types in the schema are sorted based on title_ASC and cannot be modified.

**Note**: The 'SysAsset' GraphQL type will not be available in the paginated Introspection queries.

To skip certain content types when retrieving content, you can make use of the skip_content_type_uids=[] query parameter. You need to pass an array of content type UIDs to this parameter. This parameter comes really handy when you encounter a SCHEMA_BUILD_ERROR during introspection queries. Using it, you can skip the content type(s) causing the schema build error and view the rest of your stack data.

### GraphiQL Explorer

Contentstack’s GraphiQL explorer allows you to explore the GraphQL Content Delivery API. You can structure your GraphQL queries based on the available schema and test them out.

The GraphiQL explorer provides information about the content types and fields that are part of the schema.

You can also enter your own stack details and the required parameters in the [GraphQL Explorer](/docs/developers/apis/graphql-content-delivery-api/explorer) to try out the API.

### Using Postman Collection

Contentstack offers you a Postman Collection that helps you try out our GraphQL Content Delivery API. You can download this collection, connect to your Contentstack account, and try out the GraphQL API with ease.

Learn more about how to [get started with using the Postman Collection](/docs/developers/apis/graphql-content-delivery-api#postman-collection) for Contenstack GraphQL Content Delivery API.

## API Reference

### Schema Generation

The GraphQL server generates a schema to describe the shape of your data graph. In this section, we learn about the GraphQL type system defined by the schema and how it describes what data can be queried. All queries that hit the GraphQL Content Delivery API are validated against this schema.


#### Types

GraphQL has its own “GraphQL schema language”, which is language-agnostic. This means that it can consume components from any specific programming language and describe GraphQL schemas.

Thus, each field in a content type has its own GraphQL type.

Here’s a list of all the Contentstack field types and their corresponding GraphQL types:

| Contentstack type | GraphQL type |
| --- | --- |
| string | String |
| date | DateTime |
| number | Float |
| boolean | Boolean |
| rich_text_editor | string |
| json_rich_text_editor | JSON |
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


#### Naming Convention

GraphQL has its own schema language, which has naming conventions of its own. Thus, the typenames of your content types and fields may differ from their [unique IDs](/docs/developers/create-content-types/unique-id) (UIDs).

Let us understand how Contentstack converts the unique IDs of complex objects from your schema to GraphQL typenames.

Contentstack’s GraphQL API considers the following components as complex objects:

- Content type
- Global field
- Reference field
- Group field
- Modular Blocks field

Contentstack converts the UIDs of each of these complex object types to a [pascal-case](https://wiki.c2.com/?PascalCase) version, stripping off all non-alphanumeric characters. We use the following conversion mechanism:

**Example**: pascalCase({{uid}})

In the case of Modular Block’s block type, we postfix the UID with "Block".

**Example**: ${pascalCase({{uid}})Block}

In the case of complex object’s input types, we postfix their UIDs with "Where".

**Example**: ${GraphQLTypeName}Where

Here are some examples of UIDs generated for complex object types:

| Contentstack complex object field type | Contentstack complex object UID | GraphQL typename | GraphQL input typename |
| --- | --- | --- | --- |
| group | banner_group | BannerGroup | BannerGroup Where |
| blocks | modular_block | ModularBlock | ModularBlock Where |
| block | generic_blocks | GenericBlocksBlock | GenericBlocks BlockWhere |
| global_field | seo_fields | SeoFields | SeoFieldsWhere |
| json | app_config | AppConfig | AppConfigWhere |
| content_type_uid | blog | Blog | BlogWhere |


#### Typename Collision

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
            "error": "Field '{{FIELD_UID_1}}' in {{CONTENT_TYPE_UID_X}} content type and field '{{FIELD_UID_2}}' from [{{CONTENT_TYPE_UIDS}}] resulted in '{{GRAPHQL_TYPE_NAME}}' graphql type name. Kindly update the field uids to continue."
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
            "error": "Content types '{{CONTENT_TYPE_UID_1}}' and '{{CONTENT_TYPE_UID_2}}' graphql type name resulted in '{{CONTENT_TYPE_GRAPHQL_TYPE_NAME}}'. Kindly update the content type uid to continue."
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


#### Restricted Special Characters

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


#### Union Type Fields

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

Learn more about querying reference fields in the [Retrieving Referenced Entries or Assets](/docs/developers/apis/graphql-content-delivery-api#retrieving-referenced-entries-or-assets) section.


#### System-defined Fields

Certain fields in Contentstack are predefined. Their GraphQL type names are reserved and any user-defined fields that result in the same type will return the SCHEMA_BUILD_ERROR error message.

**Tip**: You can use an API client, such as [GraphiQL Explorer](/docs/developers/apis/graphql-content-delivery-api#graphiql-explorer), to run queries and explore Contentstack's GraphQL Content Delivery API before writing your application code. This helps detect and avoid the use of any reserved GraphQL typenames or user-defined fields.

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

### Queries

In this section, we learn how to fetch one or more [entries](/docs/content-managers/author-content/about-entries) or specific [fields](/docs/developers/create-content-types/about-fields) of those entries. We also learn how to fetch entries from multiple [content types](/docs/developers/create-content-types/about-content-types).


#### Get a List of Entries

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
- fallback_locale: This argument helps you fetch published content from the fallback locale if an entry is not published in the specified locale. It accepts only values of type Boolean, such as true or false. If you do not pass fallback_locale, it will fetch content from the master locale by default. It is an optional argument.
- order_by: This argument sorts the entries returned in the result set in ascending or descending order. It accepts a list of values, and the values are of GraphQL enum type. It accepts only created_at_ASC, created_at_DESC, updated_at_ASC and updated_at_DESC. If no value is provided, it considers the updated_at_DESC value by default.
- skip: This argument allows you to paginate between the list of entries returned. If no value is provided, it accepts ‘0’ by default.
- limit: This argument allows you to limit the total number of entries returned for the queried content type. If no value is provided, then it accepts ‘25’ by default. The maximum allowed value for this field is 100.

The ‘total’ parameter in the above query fetches the total count of all the entries available in the content type. It is an optional parameter. The query returns values for the **Title** field of every entry inside the items array of the response.

**Warning**: If your content type UIDs and field UIDs start with a number, you won't be able to run any GraphQL queries.

#### Get a List of Entries

**** `/stacks/apiKey/explore`



#### Get a Single Entry

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

#### Get a Single Entry

**** `/stacks/apiKey/explore`



#### Get Entry List with Variants

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

#### Get Entry List with Variants

**** `/stacks/apiKey/explore`



#### Get Single Entry with Variant

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

#### Get Single Entry with Variant

**** `/stacks/apiKey/explore`



#### Get Entries from Multiple Content Types

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

#### Get Entries from Multiple Content Types

**** `/stacks/apiKey/explore`



#### Query Batching

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

#### Try 'Query Batching'

**** `/stacks/apiKey/explore`



#### Get Entries from Multiple Languages

You can fetch [localized](/docs/developers/multilingual-content/about-localization) versions of entries present in a single or multiple content types through a single API request. This query uses GraphQL’s [aliases](https://graphql.org/learn/queries/#aliases) to identify each set of localized entry versions.

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

#### Get Entries from Multiple Languages

**** `/stacks/apiKey/explore`



#### Get a List of Assets

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

#### Get a List of Assets

**** `/stacks/apiKey/explore`



#### Get a Single Asset

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

#### Get a Single Asset

**** `/stacks/apiKey/explore`



#### Get Global Fields while Retrieving Entries

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

#### Get Global Fields while Retrieving Entries

**** `/stacks/apiKey/explore`



#### Get Group Fields while Retrieving Entries

You can fetch data of only certain fields of a **Group** field that is used within a specific entry of a content type. To do this, you need to specify the content type UID, the entry UID, the Group field UID, and the UIDs of the fields that are part of the Group field in the query. Read more about [Group fields](/docs/developers/create-content-types/group).

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

#### Get Group Fields while Retrieving Entries

**** `/stacks/apiKey/explore`



#### Get JSON RTE Fields while Retrieving Entries

You can fetch the JSON-formatted data of a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor) (RTE) field added to the entries of a content type. To do this, you need to specify the **content type UID**, the **JSON RTE field UID**, and the **json** field.

The json field returns all the content blocks present inside the JSON RTE in the API response.

**Note**: To fetch entries or assets embedded within the JSON RTE, you need to specify the embedded_itemsConnection field. Refer to the [Include Embedded RTE Items](/docs/developers/apis/graphql-content-delivery-api#include-embedded-rte-items) section for more information.

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

**Additional Resource**: Refer to the [JSON RTE schema](/docs/developers/json-rich-text-editor) documentation to understand how it stores and returns content.

#### Get JSON RTE Fields while Retrieving Entries

**** `/stacks/apiKey/explore`



#### Get Custom Fields while Retrieving Entries

You can fetch the data of [Custom Field Extensions](/docs/developers/create-custom-fields/about-custom-fields) added to the entries of a content type. To do this, you need to specify the content type UID, the extension UID, and the UIDs of other fields that you want to fetch in the query.

Contentstack allows you to retrieve the details of custom fields with input datatypes such as Number, Text, Boolean, Date, File, Reference, and JSON. Read more about [Extensions](/docs/developers/about-experience-extensions).

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

#### Get Custom Fields while Retrieving Entries

**** `/stacks/apiKey/explore`



#### Get System defined Fields

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

#### Get System defined Fields

**** `/stacks/apiKey/explore`


### Non-Nullable Fields

In GraphQL, fields can be marked as mandatory (non-nullable), meaning they must always return a value. If a non-nullable field is queried and the API cannot provide data, it will return an error. This prevents unexpected null values in responses and ensures data integrity.

To enable strict type checks for non-nullable fields include the following header in your GraphQL API request:

```
x-graphql-strict-type-checks: true
```

**Note**: Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

When non-nullability is enabled, the GraphQL schema will reflect the strict type enforcement. Below is a comparison of how field types change:

| Field Type | GraphQL (Nullable) | GraphQL (Non-Nullable) |
| --- | --- | --- |
| Text | String | String! |
| Number | Int | Int! |
| Date | ISODate | ISODate! |
| Link | Link | Link! |
| Reference | [CTReferenceEdge] | [CTReferenceEdge!]! |
| System | EntrySystemField | EntrySystemField! |

Enabling non-nullable fields ensures more predictable API responses and prevents missing mandatory field data in queries.

### Retrieving Referenced Entries or Assets

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


#### Include Single Content Type Reference Fields

#### Try 'Include Single Content Type Reference Fields'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the specified referenced entry. This query uses [relay specification](https://relay.dev/docs/guides/graphql-server-specification/) to retrieve the details of the entries referred in reference fields.

**Note**: You can use the skip and limit parameters while querying [Reference](/docs/developers/create-content-types/reference) fields that refer to a single content type and have been marked as “Multiple”.

If your stack was created after **29th July, 2019**, then you will automatically be using the [upgraded Reference field](/docs/developers/create-content-types/reference-field-upgradation) that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.

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



#### Include Multi Content Type Reference Fields

#### Try 'Include Multi Content Type Reference Fields'

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



#### Include Assets Added to a Content Type

#### Try 'Include Assets Added to a Content Type'

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



#### Include Embedded RTE Items

#### Include Embedded RTE Items

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the embedded entries and assets referenced inside the [JSON Rich Text Editor](/docs/developers/json-rich-text-editor). This query uses inline fragments and relay specification to retrieve details of rich text editors that refer to multiple embedded items.

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



#### Search within Referenced Entries from a Single Content Type

#### Try 'Search Referenced Entries from a Single Content Type'

**** `/stacks/apiKey/explore`

Get entries having values based on referenced fields. This query retrieves all entries that satisfy query conditions made on referenced fields that refer to a single content type.

**Note**: If your stack was created after **29th July, 2019**, then you will automatically be using the [upgraded Reference field](/docs/developers/create-content-types/reference-field-upgradation) that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.

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



#### Search within Referenced Entries from Multiple Content Types

#### Try 'Search Referenced Entries from Multiple Content Types'

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



#### Get Entries by Referenced Asset

#### Get Entries by Referenced Asset

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



#### Nested Reference Filtering

#### Nested Reference Filtering

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


### Query Operators

Query operators allow you to filter a list of entries or assets by specifying filter conditions in the root content type’s query. You can postfix each of these operators to the field UIDs.

Here’s a list of query operators that you can use to filter your list queries:

  
    

| Filter | Postfix | Value Accepted |
| --- | --- | --- |
| equals |  | Any |
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


#### Taxonomy

Taxonomy simplifies the process of organizing content in your system, making it effortless to find and retrieve information.

#### Try 'Taxonomy Fields'

**** `/stacks/apiKey/explore`

##### Taxonomy Fields

Get the taxonomy UID and term UID from the entries of a specific content type.

**Example**: In the **Product** content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where terms are applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product {
      items {
        title
        taxonomies {
          taxonomy_uid 
          term_uid
        }
      }
    }
  }
}
```


#### Try 'Equals' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Equals Operator [Taxonomy]

Get entries containing a specific taxonomy.

**Example**: In the **Product** content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where the taxonomy **Color** is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid: "color"
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'Not Equals' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Not Equals Operator [Taxonomy]

Get entries where a specific taxonomy does not exist.

**Example**: In the **Product** content type, you do not have the **Color** taxonomy configured, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_ne: "color"
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'IN' Operator

**** `/stacks/apiKey/explore`

##### IN Operator

Get entries where any one or more taxonomies exist.

**Example**: In the **Product**content type, you have multiple taxonomy fields. If, for instance, you want to get a list of all entries where the taxonomy **Color**and **Category**is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_in: ["color", "category"]
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'NIN' Operator

**** `/stacks/apiKey/explore`

##### NIN Operator

Get entries where none of the specified taxonomies exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the taxonomy **Color**and **Category**are not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_nin: ["color", "category"]
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'Exists' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Exists Operator [Taxonomy]

Get entries of a particular content type where a taxonomy field exists.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the taxonomy field is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies_exists: true
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```



#### Terms

Terms are the primary classification elements you generate within a taxonomy. They serve the purpose of categorizing entries.

#### Try 'Equals' Operator [Terms]

**** `/stacks/apiKey/explore`

##### Equals Operator [Terms]

Get entries of a specific content type where a term from a particular taxonomy is present.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Red**from the **Color**taxonomy is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term: "red"
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'Not Equals' Operator [Terms]

**** `/stacks/apiKey/explore`

##### Not Equals Operator [Terms]

Get entries of a specific content type where a term from a particular taxonomy does not exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Red**from the **Color**taxonomy is not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_ne: "red"
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'IN' Operator [Terms]

**** `/stacks/apiKey/explore`

##### IN Operator [Terms]

Get entries of a content type where terms from a specific taxonomy exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms **Red** and **Maroon**from the **Color** taxonomy are applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_in: ["red", "maroon"]
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'NIN' Operator [Terms]

**** `/stacks/apiKey/explore`

##### NIN Operator [Terms]

Get entries of a content type where terms from a specific taxonomy do not exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms **Red**and **Maroon**from the **Color**taxonomy are not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_nin: ["red", "maroon"]
          }
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```


#### Try 'Below' Operator

**** `/stacks/apiKey/explore`

##### Below Operator

Get entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms up to level 5 nested under the **Red**term from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermBelow {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_below: {
            uid: "red",
	 levels: 5
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```


#### Try 'Equal and Below' Operator

**** `/stacks/apiKey/explore`

##### Equal and Below Operator

Get entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Maroon**and its descendants up to level 2 from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermEqualBelow {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_eq_below: {
            uid: "maroon",
	 levels: 2
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```


#### Try 'Above' Operator

**** `/stacks/apiKey/explore`

##### Above Operator

Get all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself. You can also specify a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms up to level 3 above the **Maroon**term from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermAbove {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_above: {
            uid: "maroon",
	 levels: 3
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```


#### Try 'Equal and Above' Operator

**** `/stacks/apiKey/explore`

##### Equal and Above Operator

Get all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Maroon**and its ancestors up to level 6 from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermEqualAbove {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_eq_above: {
            uid: "maroon",
	 levels: 6
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```



#### Equals Operator

#### Try 'Equals' Operator

**** `/stacks/apiKey/explore`

Get data of entries containing the field values matching the specified condition.

Example: In the **Product** content type, you have a field named **Title**. If, for instance, you want to retrieve certain fields of all the entries in which the value for the ‘Title’ field is **Galaxy Note**, your query will be formed as follows:

```
query {
  all_product(
    where: {
      title: "Galaxy Note"
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query and include details of just the ‘Title’ and ‘Price in USD’ fields.


#### Try 'Equals' Operator within Group

**** `/stacks/apiKey/explore`

#### Equals Operator within Group

Get entries where the value of a field within a Group field matches the condition in the query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the value for the Card Type field is **Credit Card**, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type: "Credit Card"
      }
    }) {
    items {
      price_in_usd
      description
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and include details of just the ‘Price in USD’ and ‘Description’ fields.


#### Try 'Equals' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Equals Operator within Modular Blocks

Get entries where the value of a field within a Modular Blocks field matches the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the Deal Name field is 'Christmas Deal', your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name: "Christmas Deal"
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields from the ‘Deals’ block of the modular block named ‘Additional Info.’


#### Try 'Equals' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

#### Equals Operator within Nested Modular Blocks

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If, for instance, you want to retrieve certain fields of all the entries in which the value for the "Coupon Name" field is **Lucky Twenty**, your query will be formed as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_name: "Lucky Twenty"
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Not-equals Operator

#### Try 'Not Equals' Operator

**** `/stacks/apiKey/explore`

Get all the entries in which the value of a field does not match the value provided in the condition.

**Example**: In the **Product** content type, you have a field named **Price in USD**. If, for instance, you need to retrieve all entries where the value of this field is not equal to '200', your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_ne: 200
    }) {
    items {
      title
      size
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title,’ ‘Size,’ and ‘Color’ fields.


#### Try 'Not Equals' Operator within Group

**** `/stacks/apiKey/explore`

#### Not-equals Operator within Group

Get entries where the value of a field does not match the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the value for the **Card Type** field is **NOT** 'Debit Card', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type_ne: "Debit Card"
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


#### Try 'Not Equals' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Not-equals Operator within Modular Blocks

Get entries where the value of a field within the Modular Blocks field matches the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the Deal Name field is NOT 'Summer Deal,' your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_ne: "Summer Deal"
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Not Equals' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Not-equals Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If, for instance, you need to retrieve all entries where the value of the "Coupon Name" field is not equal to "Lucky Twenty", your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_name_ne: "Lucky Twenty"
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### In Operator

#### Try 'In' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition.

**Example**: In the **Product** content type, you have a field named **Size**. If, for instance, you need to retrieve all the entries where the value of this field is one among the given set of values, your query will look as follows:

```
query {
  all_product(
    where: {
      size_in: [8, 16, 32]
    }) {
    items {
      title
      color
      size
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query and will include details of just the 'Title,' 'Size,' and ‘Color’ fields.


#### Try 'In' Operator within Group

**** `/stacks/apiKey/explore`

#### In Operator within Group

Get entries where the value of a field, within a Group field, matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the values for the Card Type field are ‘Credit Card’ and 'Debit Card', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type_in: ["Credit Card", "Debit Card"]
      }
    }) 
    {
      items {
        title
        color
      }
    }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


#### Try 'In' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### In Operator within Modular Blocks

Get entries where the value of a field within Modular Blocks matches any of the given values. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are 'Christmas Deal’, ‘Summer Deal', and ‘Independence Day Deal’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_in: [
            "Christmas Deal", "Summer Deal", "Independence Day Deal"
          ]
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'In' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**In Operator within****Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If, for instance, you need to retrieve all the entries where the value of the "Coupon Discount Rate" field is one among the given set of values, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_in: [5, 20, 50]
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Not In Operator

#### Try 'Not In' Operator

**** `/stacks/apiKey/explore`

Get all entries in which the value of a field does not match any of the given values. This parameter will compare field values of entries to that of the values provided in the condition, and the query will retrieve entries that have field values that do not match any of the values provided.

**Example**: In the **Product** content type, you have a field named **Title**. If, for instance, you need to retrieve the entries where the field value does not fall in the given set, your query will look as follows:

```
query {
  all_product(
    where: {
      title_nin: ["Redmi 3S", "Galaxy Note", "Redmi Note Prime"]
    }) {
    items {
      title
      price_in_usd
      size
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the 'Title', ‘Price in USD’, Size, and ‘Color’ fields.


#### Try 'Not In' Operator within Group

**** `/stacks/apiKey/explore`

#### Not In Operator within Group

Get entries in which the value of a field does not match any of the values provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount In Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount In Percentage field are NOT ‘8’, '25', and '30', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_nin: [8, 30, 25]
      }
    })      
    {
      items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


#### Try 'Not In' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Not In Operator within Modular Blocks

Get entries where the values of the fields within Modular Blocks match the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are NOT 'Christmas Deal’, ‘Independence Day Deal’, and ‘Summer Deal', your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_nin: [
            "Summer Deal", "Christmas Deal", "Independence Day Deal"
          ]
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Not In' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Not In Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If, for instance, you need to retrieve the entries where the value of the "Coupon Discount Rate" field does not fall in the given set, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_nin: [5, 20, 50]
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### AND Operator

#### Try 'AND' Operator

**** `/stacks/apiKey/explore`

Get entries that satisfy all the conditions provided in the 'AND' query.

**Example**: Let’s say you want to retrieve entries in which the **Title** field is set to 'Redmi Note 3' and the **Color** field is 'Gold'. Your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          title: "Redmi Note 3"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      size
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Size’, and ‘Price in USD’ fields.


#### Try 'AND' Operator within Group

**** `/stacks/apiKey/explore`

#### AND Operator within Group

Get entries that satisfy all the conditions provided in the AND query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have fields named **Card Type** and **Discount in Percentage**. If, for instance, you want to retrieve the entries wherein the value for Card Type is ‘Credit Card’ and ‘Discount in Percentage’ is '12', your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            discount_in_percentage: 12
          }
        }
      ]
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


#### Try 'AND' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### AND Operator within Modular Blocks

Get entries that satisfy all the conditions provided in the AND query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** and **Rating** blocks. And, within the Deals and Rating blocks, we have the **Deal Name** and **Stars** fields, respectively. If, for instance, you want to retrieve the entries wherein the values for Deal Name and Stars fields are ‘Christmas Deal’ and '2', respectively, your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          additional_info: {
            deals: {
              deal_name: "Christmas Deal"
            }
          }
        },
        {
          additional_info: {
            rating: {
              stars: 2
            }
          }
        }
      ]
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'AND' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**AND Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve entries in which the "Coupon Name" field is set to "Lucky Twenty" and the "Coupon Discount Rate" field is **20**, your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_name: "Lucky Twenty"
                }
              }
            }
          }
        },
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_discount_rate: 20
                }
              }
            }
          }
        }
      ]
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### OR Operator

#### Try 'OR' Operator

**** `/stacks/apiKey/explore`

Get all entries that satisfy at least one of the given conditions provided in the 'OR' query.

**Example**: Let’s say you want to retrieve entries in which either the value for the **Color** field is 'Gold' or 'Black', your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          color: "Black"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.


#### Try 'OR' Operator within Group

**** `/stacks/apiKey/explore`

#### OR Operator within Group

Get all entries that satisfy at least one of the given conditions provided in the OR query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a field named **Card Type**. If, for instance, you want to retrieve the entries where either the value for Card Type is ‘Debit Card’ or ‘Credit Card’, your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            card_type: "Debit Card"
          }
        }
      ]
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.


#### Try 'OR' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### OR Operator within Modular Blocks

Get all entries that satisfy at least one of the given conditions provided in the OR query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** and **Rating** blocks. And, within the Deals and Rating blocks, we have the **Deal Name** and **Stars** fields, respectively. If, for instance, you want to retrieve the entries wherein either the value for Deal Name is ‘Christmas Deal’ and Stars is '2', respectively, your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          additional_info: {
            deals: {
              deal_name: "Christmas Deal"
            }
          }
        },
        {
          additional_info: {
            rating: {
              stars: 2
            }
          }
        }
      ]
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'OR' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**OR Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve the entries where either the value for "Coupon Name" is "Lucky Twenty" or "Early Bird Coupon", your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_name: "Lucky Twenty"
                }
              }
            }
          }
        },
        {
          additional_info: {
            deals: {
              coupons: {
                daily_coupons: {
                  coupon_name: "Early Bird Coupon"
                }
              }
            }
          }
        }
      ]
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Less Than Operator

#### Try 'Less Than' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is lesser than the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is less than but not equal to **150**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_lt: 150
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


#### Try 'Less Than' Operator within Group

**** `/stacks/apiKey/explore`

#### Less Than Operator within Group

Get entries in which the value of a field is lesser than the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is less than ‘40’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_lt: 40
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


#### Try 'Less Than' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Less Than Operator within Modular Blocks

Get entries in which the value of a field is lesser than the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Block field, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the value for the Stars field is less than ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_lt: 3
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Less Than' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Less Than Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is less than but not equal to **40**, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_lt: 40
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Less Than Or Equal To Operator

#### Try 'Less Than Or Equal To' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is lesser than or equal to the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is less than or equal to **150**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_lte: 150
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


#### Try 'Less Than Or Equal To' Operator within Group

**** `/stacks/apiKey/explore`

#### Less Than Or Equal To Operator within Group

Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field are less than or equal to ‘30’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_lte: 30
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.


#### Try 'Less Than Or Equal To' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Less Than Or Equal To Operator within Modular Blocks

Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Rating block, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are less than or equal to ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_lte: 3
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Less Than Or Equal To' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Less Than Or Equal To Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is less than or equal to **50**, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_lte: 50
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Greater Than Operator

#### Try 'Greater Than' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value for a field is greater than the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is greater than **180**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_gt: 180
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Price in USD’, and ‘Color’ fields.


#### Try 'Greater Than' Operator within Group

**** `/stacks/apiKey/explore`

#### Greater Than Operator within Group

Get entries in which the value for a field is greater than the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is greater than ‘20’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_gt: 20
      }
    }) {
    items {
      title
      color
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Price in USD’, and ‘Color’ fields.


#### Try 'Greater Than' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Greater Than Operator within Modular Blocks

Get entries in which the value for a field is greater than the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Block field, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are greater than ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_gt: 3
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Greater Than' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Greater Than Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is greater than **20**, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_gt: 20
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Greater Than Or Equal To Operator

#### Try 'Greater Than Or Equal To' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is greater than or equal to the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is greater than or equal to **200**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_gte: 200
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


#### Try 'Greater Than Or Equal To' Operator within Group

**** `/stacks/apiKey/explore`

#### Greater Than Or Equal To Operator within Group

Get entries in which the value of a field is greater than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is greater than or equal to ‘30’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_gte: 30
      }
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.


#### Try 'Greater Than Or Equal To' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Greater Than Or Equal To Operator within Modular Blocks

Get entries in which the value of a field is greater than or equal to the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Rating block, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are greater than or equal to ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_gte: 3
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Greater Than Or Equal To' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Greater Than Or Equal To Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve all the entries that have the value of the "Coupon Discount Rate" field set to a value that is greater than or equal to **20**. Your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_gte: 20
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Limit Operator

#### Try 'Limit' Operator

**** `/stacks/apiKey/explore`

The limit parameter will return a specific number of entries in the output. So for example, if the content type contains **more than 100** entries and you wish to fetch only the **first 2** entries, you need to specify '2' as the value in this parameter. Your query will look as follows:

```
query {
  all_product(
    limit: 2
  ) {
    items {
      title
      description
    }
  }
}
```

The response body of this query will include only the first two entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Description’ fields.



#### Skip Operator

#### Try 'Skip' Operator

**** `/stacks/apiKey/explore`

The skip parameter will skip a specific number of entries in the output. So, for example, if the content type contains around **12 entries** and you want to skip the **first 5** entries to get only the last 7 in the response body, you need to specify ‘5’ here. Your query will look as follows:

```
query {
  all_product(
    skip: 5
  ) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will skip the first five entries and only include the last seven entries of the **Product** content type that satisfy the query, displaying details of just the ‘Title’ and ‘Color’ fields.



#### Order by Asc Operator

#### Try 'Order by Asc' Operator

**** `/stacks/apiKey/explore`

When fetching entries, you can sort them in the ascending order with respect to the value of the following system-defined fields in the response body:

- Created at (created_at_ASC)
- Updated at (updated_at_ASC)
- Published at (sys_published_at_ASC)

**Note**:

- The order by ASC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.
- Reach out to our support team to enable the 'Published at' feature for your organization.

**Example**: In the **Product** content type, if you wish to sort the entries with respect to the date specified in the ‘Created at’ field, your query will look as follows:

```
query {
  all_product(
    order_by: [
      created_at_ASC
    ]
  ) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will display all the entries of the Product content type that satisfy the query in an ascending order, including details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.



#### Order by Desc Operator

#### Try 'Order by Desc' Operator

**** `/stacks/apiKey/explore`

When fetching entries, you can sort them in the descending order with respect to the value of the following system-defined fields in the response body:

- Created at (created_at_DESC)
- Updated at (updated_at_DESC)
- Published at (sys_published_at_DESC)

**Note**:

- The order by DESC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.
- Reach out to our support team to enable the 'Published at' feature for your organization.

**Example**: In the **Product** content type, if you wish to sort the entries with respect to the date specified in the ‘Updated at’ field, your query will look as follows:

```
query {
  all_product(
    order_by: [
      updated_at_DESC
    ]
  ) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query in a descending order, including details of just the ‘Title’ and ‘Price in USD’ fields.



#### Exists Operator

#### Try 'Exists' Operator

**** `/stacks/apiKey/explore`

Get entries if the value of the field mentioned in the condition exists.

**Example**: In the **Product** content type, we have a field named **Price in USD**. If, for instance, you want to retrieve all the entries in the content type in which the field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query, including details of just the ‘Title’ and ‘Color’ fields.


#### Try 'Exists' Operator within Group

**** `/stacks/apiKey/explore`

#### Exists Operator within Group

Get entries if the value of the field mentioned in the condition exists. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_exists: true
      }
    }) {
    items {
      title
      color
      description
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query, including details of just the ‘Title’, ‘Color’, and ‘Description’ fields.


#### Try 'Exists' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Exists Operator within Modular Blocks

Get entries if value of the field mentioned in the condition exists. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Block field, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the **Stars** field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_exists: true
        }
      }
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  title
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will display details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.


#### Try 'Exists' Operator within Nested Modular Blocks

**** `/stacks/apiKey/explore`

**Exists Operator within Nested Modular Blocks**

You can use [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that lie within a particular block of a Nested Modular Blocks field. Within the inline fragments section, you need to specify the content type UID, modular blocks UID, block UID, nested modular blocks UID, and the nested block UID.

**Example**: In the **Product** content type, you have a **Coupons** Modular Blocks field that is nested within the **Deals** block of the **Additional Info** Modular Blocks field. The Coupons Modular Blocks field contains a **Daily Coupons** block:

```
... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
  daily_coupons {
    coupon_name
    coupon_details
    coupon_discount_rate
  }
```

If you want to retrieve all the entries in the Product content type in which the "Coupon Discount Rate" field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          coupons: {
            daily_coupons: {
              coupon_discount_rate_exists: true
            }
          }
        }
      }
    }) {
    items {
      title
      additional_info {
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
            coupons {
              ... on ProductAdditionalInfoDealsBlockCouponsDailyCoupons {
                daily_coupons {
                  coupon_name
                  coupon_details
                  coupon_discount_rate
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsFaqs {
                faqs {
                  coupon_faqs {
                    question
                    answer
                  }
                }
              }
              ... on ProductAdditionalInfoDealsBlockCouponsSpecialCoupons {
                special_coupons {
                  special_coupon_name
                  special_coupon_details
                  special_coupon_discount_rate
                }
              }
            }
          }
        }                
      }
    }
  }
}
```

The response body of this query will also include details of the fields that lie within the **Coupons** Nested Modular Blocks field.



#### Total

#### Try 'Total' Function

**** `/stacks/apiKey/explore`

The **total** field returns the number of entries for a specified content type.

**Example**: If you wish to know the total number of entries in the **Product** content type that contain a value within the **Price in USD** field, you need to run the following query:

```
query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    total
    items {
      title
      price_in_usd
    }
  }
}
```

The **total** field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’ and ‘Price in USD’ fields.



#### Count

The **count** operator retrieves the details of referenced entries within a reference field.

This query works for both entries as well as assets.

**Example**: If you want to retrieve details of all entries in the **Product** content type that contain a value in the referenced Categories content type, you need to run the following query:

```
query {
  all_product(
    where: {
      categories_exists: 1
    }) {
    items {
      title
      color
    }
  }
}
```

The **count** field will display the entry details of the **Product** content type that satisfy the query filter.

**Note:** This query is not supported by the CMA GraphQL.

#### Try 'Count' Function

**** `/stacks/apiKey/explore`



#### Pagination

#### Try "Pagination"

**** `/stacks/apiKey/explore`

When fetching all the entries of a particular content type, the GraphQL API allows you to provide arguments that paginate the response body.

If you have more than 100 items in your response, you can get the rest of the items in batches using the **skip** parameter in subsequent requests. The skip parameter helps paginate the output of the request.

**Example**: In the **Product** content type, we have a field named **Price in USD**. Now, you want to retrieve all the entries in the content type in which the field exists.

If you get more than 100 items, you can get the rest of the items in batches using the **skip: 2** parameter in subsequent requests. You can also use the **limit: 7** parameter to get 7 items per page instead of getting all the 100 items at once.

The pagination query will look as follows:

```
query {
  all_product(
    limit: 7,
    skip: 2
  ) {
    total
    items {
      title
      price_in_usd
    }
  }
}
```

The **total** field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’, ‘Brand’, and ‘Price in USD’ fields. However, through the use of the skip and limit parameters, the response body will now only show the first seven matching entries initially.


### Image Transformations

You can use the parameters of Contentstack’s [Image Delivery API](/docs/developers/apis/image-delivery-api) in GraphQL queries to transform images while fetching them.   
  
The following table consists of the different parameters that Contentstack GraphQL supports for image delivery, along with their acceptable values:

    

| Parameter | Supported Values |
| --- | --- |
| auto | WEBP |
| width | String |
| height | String |
| disable | UPSCALE |
| format | GIF
          PNG
          JPG
          PJPG
          WEBP
          WEBPLL
          WEBPLY |
| fit | BOUNDS
          CROP |
| quality | Integer |
| crop | String |
| trim | String |
| orient | DEFAULT
          HORIZONTALLY
          BOTH
          VERTICALLY
          ROTATE90LEFT
          ROTATE90RIGHT |
| overlay | String |
| overlay_align | TOP
          BOTTOM
          LEFT
          RIGHT
          MIDDLE
          CENTER |
| overlay_repeat | X
          Y
          BOTH |
| overlay_width | String |
| overlay_height | String |
| pad | String |
| bg_color | String |
| dpr | String |
| disposition | ATTACHMENT
          INLINE |

Let us look at a few simple and complex examples to understand how Contentstack’s Image Delivery parameters work with GraphQL queries to transform images.


#### Using a Single Parameter

#### Try 'Format' Parameter

**** `/stacks/apiKey/explore`

Let’s get started by using a single format parameter to understand how these parameters function.

To convert an image placed on your Contenstack website from one format to another, use the format parameter. For example, we have set the format parameter to GIF in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
            url(transform: {format: GIF})
    }
  }
}
```

This query will convert the current image format to a GIF format.



#### Using Multiple Parameters

#### Try 'Width' and 'Height' Parameters

**** `/stacks/apiKey/explore`

Let’s look at a few sample GraphQL queries that make use of multiple parameters.

##### Changing the Width and Height

To dynamically resize the width and height of your output image, use the width and height parameters. For example, we have set the values of the width and height parameters to ‘650’ and ‘400’, respectively, in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {width: "650", height: "400", disable: UPSCALE})
    }
  }
}
```

This query will render an output image with width and height values of 650 and 400 pixels, respectively.

**Note**: We have also set the disable parameter to UPSCALE to disable the upscale image feature for the output image in the above image transformation query.


#### Try 'Overlay' and 'Overlay Align' Parameters

**** `/stacks/apiKey/explore`

##### Using the Overlay and Overlay Align Parameters

To place one image on top of another, use the overlay parameter. In addition, use the overlay_align parameter to define the position of the overlay image.

For example, we have specified the value of the overlay parameter as the URL of the image to be placed on top. We have also set the value of the overlay_align parameter as ‘LEFT’ in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {overlay: "/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/download", overlay_align: LEFT})
    }
  }
}
```

This query will place the image lying at the specified URL on top of the original image. It will also align the overlay image toward the left side of the original image.


### Change Log

#### February 25, 2022 - Ability to Fetch Branch-specific Content

Contentstack GraphQL API now allows you to fetch content that belongs to a specific branch in your stack. To do so, you can pass the branch ID as the value of the branch key in the header of the API request.

You can [query our sample stack](https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/explorer) to fetch data present across different branches.

#### July 17, 2021 - Removal of GraphQL Beta Support

##### Notice

- Post GraphQL GA availability since 29th Jan 2021, our team has maintained backward compatibility to support the GraphQL Beta version to prevent our client from facing breaking changes. The notice period of the support initially was 30 days, yet the team continued to support the same until 16th July 2021. Since 16th July, our team has completely switched off support for GraphQL Beta.
- To migrate to our GraphQL GA from Beta, kindly refer to the API breaking changes section given below.

##### API Breaking Changes

- You can now filter the GraphQL query response (list of entries) based on referenced fields that lie only up to three levels deep. If the referenced content type specified in the "where" argument lies more than three levels deep in the reference hierarchy, you will receive the following error message:

```
{
  "errors": [
    {
      "message": "Failed to fetch items",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "all_abcd"
      ],
      "extensions": {
          "errors": [
            {
              "code": "REF_FILTER_DEPTH_EXCEEDED",
              "message": "Query filtering failed.",
              "details": {
                "hint": "Query filter's reference depth exceeded the depth allowed for your org."
              }
            }
          ]
      }
    }
  ],
  "data": {
    "all_abcd": null
  }
}
```

#### January 29, 2021 - GraphQL General Availability (GA)

The Contentstack GraphQL Content Delivery API is now **generally available (GA)** and can be used for production apps. This release brings some solid improvements as well as introduces certain breaking changes. However, to ensure your code doesn’t break, we will continue to support the Limited Availability version of the API for **30 days** post this release. You need to incorporate these changes within the given duration to avoid schema build errors.

**Note**: When running GraphQL API requests, we strongly recommend that you pass the access_token key in the header. Post the 30-day allotted period, we will block any use of access tokens in the query parameters.

- The Contentstack GraphQL API now has a rate limit of 80 requests per second per organization for uncached GraphQL requests. There is no limit on the requests that fetch content from our CDN cache.
- [Breaking] Contentstack GraphQL API now prefixes all asset related GraphQL typenames with ‘SysAsset’ instead of “Asset”. Here is a list of the GraphQL definition changes:
      ‘Asset’ to ‘SysAsset’
- ‘AssetWhere’ to ‘SysAssetWhere’
- ‘AssetConnection’ to ‘SysAssetConnection’
- ‘AssetEdge’ to ‘SysAssetEdge’
- ‘AllAssets’ to ‘AllSysAsset’
- ‘AssetSystemField’ to ‘SysAssetSystemField’
- ‘AssetDimension’ to ‘SysAssetDimension’
- ‘AssetDimensionWhere’ to ‘SysAssetDimensionWhere’
- ‘AssetOrderBy’ to ‘SysAssetOrderBy’
- ‘TransformUrl’ to ‘SysAssetTransformUrl
- ‘ImageFormats’ to ‘SysAssetImageFormats’
- ‘DisableValues’ to ‘SysAssetDisableValues’
- ‘FitValues’ to ‘SysAssetFitValues’
- ‘OrientValues’ to ‘SysAssetOrientValues’
- ‘OverlayAlignValues’ to ‘SysAssetOverlayAlignValues’
- ‘OverlayRepeatValues’ to ‘SysAssetOverlayRepeatValues’
- ‘AutoValues’ to ‘SysAssetAutoValues’
- ‘DispositionValues’ to ‘SysAssetDispositionValues’

  
  **[Breaking]** Contentstack GraphQL API now returns the x-resolver-cost response header that specifies the total number of database calls needed to retrieve data for a specific API request.
  Contentstack GraphQL API now safeguards against malicious queries by running **query cost analysis**, i.e., it calculates the total number of database calls a specific query will attempt to fetch desired data. This static analysis helps avoid hitting the database server with queries that request an excessive amount of data.

#### July 23, 2020 - GraphQL Beta

##### Deprecation

- Access tokens should now be passed via the header and not in the query parameters of the API request. The new Contentstack GraphQL API endpoint will look as follows:https://graphql.contentstack.com/stacks/{stack_api_key}?environment={environment_name}

##### API Breaking Changes

- You can no longer fetch Reference field data using the traditional Reference UID based syntax. Contentstack GraphQL API now uses relay specification logic to traverse through the schema of a Reference field.The change in the Reference field syntax is as follows:
  
    
    

| Reference Field Type | Old | New |
| --- | --- | --- |
| Single Content Type Referencing | ```
query {
  all_product {
    total
    items {
      categories {
        title
      }
    }
  }
}
``` | ```
query {
  all_product {
    total
    items {
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
``` |
| Multiple Content Type Referencing | ```
query {
  all_product {
    items {
      home_appliances {
        ... on Electronics {
          title
          appliance_details
        }
        ... on KitchenAppliances {
          title
          kitchen_appliance_details
        }
      }
    }
  }
}
``` | ```
query {
  all_product {
    items {
      home_appliancesConnection {
        edges {
          node {
            ... on Electronics {
              title
              appliance_details
            }
            ... on KitchenAppliances {
              title
              kitchen_appliance_details
            }
          }
        }
      }
    }
  }
}
``` |

    Note: If a Reference field with an old query schema is marked as “Multiple”, then you will be able to use the skip and limit parameters to paginate the response returned by this field.
- You can no longer fetch asset information by specifying the asset UID in the query. Contentstack’s GraphQL API now uses relay specification to fetch asset data.The change in the syntax is as follows:
  
    
    

| Old | New |
| --- | --- |
| ```
query {
  all_product {
    items {
      title
      images {
        title
        description
      }
    }
  }
}
``` | ```
query {
  all_product {
    items {
      title
      imagesConnection {
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
``` |

    Note: You can use the skip and limit parameters while querying assets that have been marked as “Multiple”.
- The error messages now provide comprehensive information that helps debug the errors efficiently. Read more about Errors in GraphQL.
- After this release, you will be able to fetch only 25 items (entries/assets) from the root-level content types by default. For more information, contact our Support team.
- Changes in the GraphQL definition:
      The Where condition type for Global fields, Group fields, and Modular Blocks fields has changed from {NestedFieldUid}Filter to {NestedFieldUid}Where
- The Assets type has changed to Asset
- The {ContentTypeUID}.system._content_type_uid type has changed to {ContentTypeUID}.system.content_type_uid
- The Asset.system._content_type_uid system field previously returned built_io_upload, but will now return sys_assets
- The GraphQL scalar type for Date fields has changed from ISODate to DateTime

  
  You can no longer use the ‘Order by Asc’ and ‘Order by Desc’ operators on any top-level fields. After this release, you will be able to use these operators only on the following system-generated fields:

- Created at
- Updated at

  

#### January 24, 2020 - GraphQL Alpha 3

The following types of referenced entries will no longer return comprehensive details in the response body of their GraphQL API requests:

- Referenced entries that have been deleted
- Referenced entries that are not published
- Referenced entries that refer to content types other than the first 100 available

If the Reference field has been marked as "Multiple", then the query will return an empty array. While, a Reference field of the type "Single" will be returned as null.

So, consider for instance that the "Branches" Reference field is of "Single" type while the "Managers" Reference field has been marked as "Multiple". While fetching references, unpublished (draft) or deleted referenced entries OR referenced entries whose content types have failed to load (100 content types limit) will no longer appear in the API response body.

The following table displays the changes in the API response body:

    

| Old | New |
| --- | --- |
| ```
{
    "items": [{
        "branches": ["bltxyz1232bamln"],
        "managers": ["bltxyz1232bamln", "bltbacc1232bamln"] // field type: multiple
    }]
}
``` | ```
{
    "items": [
        {
            "branches": null,
            "managers": []
        }
    ]
}
``` |

#### March 29, 2019 - GraphQL Alpha 2

- Contentstack GraphQL API now allows you to fetch fields of an entry based on asset data. To know more about this, refer the Get Entries by Referenced Asset section.
- Contentstack GraphQL API now uses the same format that GraphQL deploys to show error messages. The following table displays the changes in the error specifications used in GraphQL Alpha 2:
  
    
    

| Old Error Response | New Error Response |
| --- | --- |
| ```
{
  "errors": [
    {
      "api_key": [
        "is not valid"
      ]
    }
  ],
  "message": "Failed to run query"
}
``` | ```
{
  "errors": [
    {
      "message": "Failed to run query.",
      "extensions": {
        "errors": [
          {
            "api_key": [
              "is not valid"
            ]
          }
        ],
        "statusCode": 412
      }
    }
  ]
}
``` |

### Query Complexity and Cost Calculation

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

### Response Headers

Contentstack returns response headers to specify information about the status of an API request. These headers also contain details about other objects that you are retrieving through the API.

Let’s learn about these response headers and what to infer from the possible values that you may get.

**x-api-key**

This header provides the API Key of the stack that you are trying to access. The API Key can be used to authorize GraphQL API requests.

The possible values for this header can be of string datatype, for example, **blt7263876d7362**.

**x-contentstack-organization**

This header provides the Organization ID of the organization to which the stack that you are trying to access belongs.

The possible values for this header can be of string datatype, for example, **blt72663654f6532**.

**x-query-complexity**

This header calculates the complexity value for each API request made to the Contentstack database server. It represents the total number of entries and/or assets that were retrieved from the server by a specific GraphQL API request. Read more about it in the [Query Complexity and Cost Calculation](/docs/developers/apis/graphql-content-delivery-api#query-complexity-and-cost-calculation) section.

**x-resolver-cost**

This header calculates the total number of database calls that need to be made to fetch the data requested by a specific GraphQL API request. Read more about it in the [Query Complexity and Cost Calculation](/docs/developers/apis/graphql-content-delivery-api#query-complexity-and-cost-calculation) section.

**x-reference-depth**

This header specifies the depth up to which a specific GraphQL query traverses to retrieve nested items (entries and/or assets).

**x-runtime**

This response header specifies the time (in milliseconds) that Contentstack takes to process a single GraphQL API request.

The x-runtime header is an integer value specified in the milliseconds unit of time, e.g., **15 ms**.

### Errors in GraphQL

Contentstack returns comprehensive error responses when a GraphQL API request fails to execute.

The “code” key in the error message provides a unique identity that highlights the main reason for partial or complete failure of the API request.The error responses also contain an additional key named “details”, which provides specific hints related to the entity causing the error. These hints also include requests to debug the GraphQL schema and check for possible discrepancies.

Let us look at the different keys that are returned within the error description:

- code: Distinct identifier that highlights the main reason for partial or complete failure
- message: Human-readable text message that describes the error
- details: Specific hints to help debug the error

The following syntax represents an API error response:

```
{
    "errors": [
        {
            "message": "Failed to run query.",
            "extensions": {
                "errors": [
                    {
                        "code": "error_code",
                        "message": "Message.",
                        "details": {
                            "hint": "Hint to resolve the issue."
                        }
                    }
                ]               
            }
        }
    ]
}
```

Let’s look at some of the common errors that Contentstack returns when there is an issue with the GraphQL request:

| HTTP Status Code | Error Message |
| --- | --- |
| 400 | Message

```
{
  "code": "INVALID_REQUEST",
  "message": "Invalid query or request body",
  "details": {
    "hint": "The request should have a valid query or body parameters."
  }
}
```

DescriptionThe following scenarios return the “Invalid query or request body” error message:GET API request provides an invalid queryPOST API request provides an invalid JSON formatted request body |
| 401 | Message

```
{
  "code": "AUTHENTICATION_FAILURE",
  "message": "Invalid api_key, access_token, or environment",
  "details": {
    "hint": "The URL pattern should be '/stacks/{stack_api_key}?environment={env_name}'. Pass 'access_token' via the headers."
  }
}
```

DescriptionEither one or a combination of the following input parameters entered is invalid:Stack API key (authentication)Delivery token provided as the value of the access_token key (header)Publishing environment (the environment query parameter) |
| 401 | Message

```
{
"error_message": "You're not allowed in here unless you're logged in!",
"error_code": 105,
"errors": {
    "access_token": ["is not valid."]
    }
}
```

DescriptionYou need to log in to get access. |
| 403 | Message

```

    403 Forbidden

    
        

# 403 Forbidden

    

```

DescriptionThe URL path is invalid. |
| 405 | Message

```

    405 Method Not Allowed

    
        

# 405 Method Not Allowed

    

```

DescriptionThe method used is invalid. Make requests using only GET, POST, HEAD, or OPTIONS methods. |
| 412 | Message

```
{
    "code": "MISSING_API_KEY",
    "message": "api_key is required",
    "details": {
      "hint": "Pass the stack api_key in the request as follows: /stacks/{stack_api_key}?environment={env_name}’."
    }
}
```

DescriptionThe stack api_key is missing in the request URL. |
| 412 | Message

```
{
  "code": "MISSING_DELIVERY_TOKEN",
  "message": "access_token is required",
  "details": {
    "hint": "Pass the delivery token in the headers as: 'access_token: {delivery_token}'."
  }
}
```

DescriptionThe Delivery token is missing. Include it in the headers of your request as: access_token:{delivery_token}. |
| 412 | Message

```
{
  "code": "MISSING_ENVIRONMENT",
  "message": "The "environment" query parameter is required",
  "details": {
    "hint": "The URL pattern should be '/stacks/{stack_api_key}?environment={env_name}'."
  }
}
```

DescriptionThe environment query parameter is missing. |
| 412 | Message

```
{
  "error_message": "We can't retrieve the stack. Please recheck the entered api_key.",
  "error_code": 109,
  "hint": {Invalid "api_key"}
}
```

DescriptionThe stack api_key you entered is invalid. |
| 414 | Message

```

    414 Request-URI Too Large

    
        

# 414 Request-URI Too Large

    

```

DescriptionThe GET request URL exceeds 2000 bytes. |
| 415 | Message

```
{
    "code": "UNSUPPORTED_MEDIA_TYPE",
    "message": "'Content-Type: application/text' is not supported",
    "details": {
      "hint": "Our servers accept 'application/json' and 'application/graphql' types only."
}
```

DescriptionThe Content Type value provided for the Content-Type key is not supported. |
| 422 | Message

```
{
    "code": "MAX_VARIANT_LIMIT_EXCEEDED",
    "message": "The maximum limit for variants in a single query is 3.",
    "details": {
          "hint": "Reduce the number of variants in the "x-cs-variant-uid" header to meet the allowed limit."
    }
}
```

DescriptionThe maximum number of variant UIDs that can be passed in the x-cs-variant-uid header is 3. To resolve this, reduce the number of variants to comply with the specified limit. |
| 422 | Message

```
{
  "code": "SCHEMA_BUILD_ERROR",
  "message": "Unable to generate GraphQL types. Check details for more info.",
  "details": [
    {
      "error": "The field 'product_refer_where' in 'product' content type, and 'product_refer_Where' from '__content_types' resulted in 'ProductReferWhere' GraphQL typename. Kindly update the field UIDs to continue querying."
    }
  ]
}
```

DescriptionDue to conflicting field/content type UIDs, the server is unable to generate the GraphQL schema. |
| 422 | Message

```
{   "code":"MAX_EXTENSION_FETCH_LIMIT_EXCEEDED",
    "message": "Max allowed limit to retrieve extensions is '10', but the query requested '12'.",
    "details": {
      "hint": "The field 'extensionConnection' can fetch maximum '10' extensions."
    }
}
```

DescriptionThe maximum allowed limit for retrieving extensions via the extensionConnection field is 10. |
| 422 | Message

```
{
  "code": "MAX_ROOT_FETCH_LIMIT_EXCEEDED",
  "message": "Max allowed limit to fetch a content types is '100'.",
  "details": {
    "hint": "The 'all_product' argument can fetch maximum '100' content types
."
  }
}
```

DescriptionThe maximum allowed limit for retrieving content types is 100. |
| 422 | Message

```
{
  "code": "INVALID_ARGUMENT",
  "message": "Invalid 'limit' argument value passed for 'all_product'.",
  "details": {
    "hint": "Expected argument is any number between [0 - 100]."
  }
}
```

DescriptionThe argument to be passed must be a numeric value between 0 and 100. |
| 422 | Message

```
{
  "code": "PARSING_FAILED",
  "message": "Server failed to parse the request. Invalid query formatting.",
  "details": {
    "hint": "Kindly contact 'support@contentstack.com' with the query details."
  }
}
```

DescriptionThe server cannot process the request as the query format passed is incorrect. |
| 422 | Message

```
{
  "code": "MAX_RESOLVER_COST_EXCEEDED",
  "message": "Max allowed cost per query is 20.Resolver cost calculated was 21.",
  "details": {
    "hint": "Reduce reference queries or use skip/limit arguments or limit content types at root level."
  }
}
```

DescriptionThe resolver cost per query exceeds the maximum allowed cost of 20. |
| 422 | Message

```
{
  "code": "MAX_DB_COST_EXCEEDED",
  "message": "Exceeded max allowed database calls",
  "details": {
    "hint": "Try reducing reference queries or use skip/limit arguments or limit content types at root level."
  }
}
```

DescriptionYour organization has exceeded the maximum limit of permitted database requests. |
| 422 | Message

```
{
  "code": "REF_FILTER_DEPTH_EXCEEDED",
  "message": "Query filtering failed.",
  "details": {
    "hint": "The reference depth of the query filter has exceeded the limit allowed for your organization.
"
  }
}
```

DescriptionYou have exceeded the maximum allowed limit for the reference depth of the query filter. |
| 422 | Message

```
{
  "code": "INVALID_BRANCH",
  "message": "The queried branch 'develop' is invalid.",
  "details": {
    "hint": "The requested branch does not exist in our database. For branch name and details, contact your stack administrator."
  }
}
```

DescriptionThe branch name you entered is either invalid or does not exist within this stack. |
| 422 | Message

```
{
  "code": "INVALID_LOCALE",
  "message": "The queried locale 'en-uk' is invalid.",
  "details": {
    "hint": "Specify locale(s) available in your stack."
  }
}
```

DescriptionThe locale you entered is either invalid or does not exist within this stack. |
| 422 | Message

```
{
  "code": "MAX_REFERENCE_DEPTH_LIMIT_EXCEEDED",
  "message": "Max allowed nested reference depth limit is '3', but the query has '5' nested references.",
  "details": {
    "hint": "Consider decreasing the number of nested references or contact 'support@contentstack.com' to request an increase in limits."
  }
}
```

DescriptionThe maximum allowed depth limit for retrieving nested referenced items (entries and assets) is three. |
| 422 | Message

```
{
  "code": "MAX_DOCUMENT_LIMIT_EXCEEDED",
  "message": "Maximum allowed documents in a  single query are '7500', but the query has requested '9234' documents.",
  "details": {
    "hint": "Consider reducing the number of queried references, utilizing skip/limit arguments for references, or contacting 'support@contentstack.com' to request an increase in limits."
  }
}
```

DescriptionThe maximum allowed limit for retrieving documents in a single GraphQL query is 7,500. |
| 422 | Message

```
{
  "code": "MAX_ALLOWED_CONTENT_TYPE_LIMIT_EXCEEDED",
  "message": "Max allowed content types used in a query can be '100', but the query used '120' content types.",
  "details": {
    "hint": "Consider decreasing the number of reference fields being queried or contact 'support@contentstack.com' to request an increase in limits."
  }
}
```

DescriptionYou can retrieve a maximum of 100 content types in a single request. |
| 422 | Message

```
{
  "code": "MAX_QUERIED_CONTENT_TYPE_LIMIT_EXCEEDED",
  "message": "`Maximum allowed content types queried at a time is 'THREE', but the query has requested 'FOUR' content types.",
  "details": {
    "hint": "Consider reducing the total number of queried content types or contact 'support@contentstack.com' to request an increase in the limits."
  }
}
```

DescriptionThe API request has exceeded the limit of maximum allowed content types queried in a single request, which is three by default. |
| 422 | Message

```
{
  "code": "MAX_REFERENCE_LIMIT_EXCEEDED",
  "message": "Max allowed limit per reference for your organization is '100', but the query requested '120'.",
  "details": {
    "hint": "The 'referenceConnection' field has a limit of 100. Please provide a limit value between 0 and 100."
  }
}
```

DescriptionYou can retrieve a maximum of 100 referenced entries or assets in a single request by default. |
| 500 | Message

```
{
  "code": "MAX_QUERIES",
  "message": "Only 1 query is allowed at a time.",
  "details": {
    "hint": "Include only one query in the request."
  }
}
```

DescriptionYou can include only one query in a request. |
| 503 | Message

```
{
  "message": "Response size was too big. Maximum response size allowed is 7 MB.",
  "code": "RESPONSE_SIZE_TOO_BIG",
  "hint": "Consider using smaller queries or reducing the response size by utilizing 'limit' arguments."
}
```

DescriptionThe response size has exceeded the maximum limit of 7 MB. |
| 504 | Message

```
{
  "code": "SERVICE_UNAVAILABLE",
  "message": "Request timeout! It seems the server is taking too long to process your request. Please try again."
}
```

DescriptionThe server is unable to process your request at this time. Please try again later. |

### Limitations

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

## Postman Collection

### About Contentstack Postman Collection

The Contentstack Postman collection is a set of preconfigured RESTful and GraphQL API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developers#use-the-apis) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.

### Install Postman

To use the Contentstack Postman collection you will need to have the [Postman](https://www.postman.com/downloads/). You can either download the **Desktop app**or use **Postman for Web**.

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection for Contentstack](#download-latest-collection) section.

Postman is available for [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64), [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.

### Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the GraphQL Content Delivery API endpoints for Contentstack.

**Note:** The Contentstack Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app](https://www.postman.com/downloads/).

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Contentstack Postman collection in the following three ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the GraphQL Content Delivery API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the GraphQL Content Delivery API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the GraphQL Content Delivery API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Once done, click Fork Collection to fork the Postman collection into your selected workspace.

**Note:** To query the European endpoint for Contentstack's GraphQL Content Delivery API, you need to download the [GraphQL API - Europe Environment](https://assets.contentstack.io/v3/assets/blt8fb40ae1e60d06b9/blt76a9f522168c67a6/gql-europe-env.json?disposition=download) file for the Europe region and import it in your Postman environment manually.

#### Download Collection from GitHub Page

We have also hosted our Postman collection on [GitHub](https://github.com/contentstack/contentstack-postman-collections). You can follow the steps mentioned in the [Readme](https://github.com/contentstack/contentstack-postman-collections/blob/development/README.md) file to download and start using it.

You can also choose to watch the latest Postman collection to get notifications of new releases or updates.

To do so, click on the following **Watch** button and select **Watching**.

### Configure Environment Variables

When you download and install the latest version of the GraphQL Content Delivery API Postman collection, you also download and import the respective environment along with the environment variables.

Once your environment is imported, next you need to set your Contentstack account specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman collection.

Some of the important variables that you need to set are as follows:

    

| Environment Variable | Value |
| --- | --- |
| base_url | graphql.contentstack.com |
| api_key | your_stack_api_key |
| access_token | your_environment-specific_delivery_token |
| branch (optional) | your_unique_branch_ID |

**Note:** The Contentstack Postman collection will require a valid environment-specific [Delivery token](/docs/developers/create-tokens/about-delivery-tokens) to make API calls. Check out the [Authentication](#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select GraphQL Content Delivery API - Environment.
3. Click the "eye" icon present in the top right corner of Postman. It opens up in the environment variables modal. Click Edit to make changes in the variables.
4. In the VARIABLE field, enter the name of the environment variable. In the INITIAL VALUE field, enter your Contentstack-account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click on Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API Requests from your Contentstack Postman collection using your environment.

### Make an API Request

With the Contentstack Postman Collection loaded into the Postman app (on the left pane) and the environment created, you can now make API requests to the Contentstack API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, GraphQL API - Environment, from the dropdown.
2. Select an API Request from the Contentstack Postman Collection. In this example, we will use the Get a List of Entries request which is a part of the Queries folder.
Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click on Send at the top right to make the API request.

The API call should return with a response under the **Body** tab in the bottom half of the screen.

### Secure API Keys and Tokens

We strongly advise against storing your API keys and tokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your Contentstack account-specific API keys and tokens in your environment or directly to the sample requests.

### Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](#download-latest-collection) again and you are good to go.

You can also choose to watch for the latest Postman Collection updates on our [GitHub repository](https://github.com/contentstack/contentstack-postman-collections) and get notifications of new releases or updates to the repository. The [GitHub Readme](https://github.com/contentstack/contentstack-postman-collections/blob/development/README.md) doc will help you with the steps that you need to follow.

## Regions


| Region | Host |
|--------|------|

| North America | https://graphql.contentstack.com/ |

| Europe | https://eu-graphql.contentstack.com/ |

| AWS - Australia | https://au-graphql.contentstack.com/ |

| Azure - North America | https://azure-na-graphql.contentstack.com/ |

| Azure - Europe | https://azure-eu-graphql.contentstack.com/ |

| GCP - North America | https://gcp-na-graphql.contentstack.com/ |

| GCP - Europe | https://gcp-eu-graphql.contentstack.com/ |
