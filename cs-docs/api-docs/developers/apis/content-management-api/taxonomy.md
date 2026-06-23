---
title: "CMA | Taxonomy"
description: Create, update, fetch, and manage taxonomies, terms, and content classification through management endpoints.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/taxonomy
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Taxonomy

Taxonomy, simplifies the process of organizing content in your system, making it effortless to find and retrieve information. It allows you to arrange your web properties in a hierarchy according to your specific needs, whether it's their purpose, intended audience, or other aspects of your business.

## Get all taxonomies

### Get all taxonomies

**GET** `/taxonomies?include_terms_count={boolean_value}&include_count={boolean_value}&deleted={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all taxonomies request returns comprehensive information of all the taxonomies available in a particular stack in your organization.

#### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomies. If not specified, the default locale is used.
  Default: `es-es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale.
  Default: `true`
- **include_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in a taxonomy.
  Default: `true`
- **include_referenced_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies).
  Default: `false`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which terms are added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of taxonomies available in a stack.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted taxonomies within a stack.
  Default: `false`
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **query** (optional)
  Provide a custom query for the taxonomy_uid in string format.
  Default: `{"uid":{"$in":["taxonomy_1","taxonomy_2"]}}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **limit** (optional)
  Enter the maximum number of taxonomies to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of taxonomies to be skipped from the response body.
  Default: `2`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
    "taxonomies": [
        {
            "uid": "sample_four",
            "name": "Sample Four",
            "description": "Description for the sample four taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:57:18.832Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:18.832Z",
            "updated_by": "b****************44",
            "terms_count": 7,

        },
        {
            "uid": "sample_three",
            "name": "Sample Three",
            "description": "Description for the sample three taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:57:04.229Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:04.229Z",
            "updated_by": "b****************44",
            "terms_count": 2
        },
        {
            "uid": "sample_two",
            "name": "Sample Two",
            "description": "Description for the sample two taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:56:39.064Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:56:39.064Z",
            "updated_by": "b****************44",
            "terms_count": 6,

        },
        {
            "uid": "sample_one",
            "name": "Sample One",
            "description": "Description for the sample one taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:30:20.509Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:30:20.509Z",
            "updated_by": "b****************44",
            "terms_count": 2
        }
    ],
    "count": 4
}
```




## Get a single taxonomy

### Get a single taxonomy

**GET** `/taxonomies/{taxonomy_uid}`

The Get a single taxonomy request returns comprehensive information of a specific taxonomy available in a particular stack.

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

#### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy. If not specified, the master locale is used.
  Default: `es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale.
  Default: `true`
- **include_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in a taxonomy.
  Default: `true`
- **include_referenced_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies).
  Default: `false`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which terms are added.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
   "taxonomy":{
      "uid":"global_content_topics",
      "name":"Temas Globales de Contenido",
      "description":"Description for the Global Content Topics taxonomy.",
      "locale": "es",
      "created_at":"2025-11-13T05:30:20.509Z",
      "created_by":"b****************44",
      "updated_at":"2025-11-13T05:30:20.509Z",
      "updated_by":"b****************44",
      "terms_count":2,
      "referenced_terms_count":3,
      "referenced_entries_count":6
   }
}
```




## Create a taxonomy

### Create a taxonomy

**POST** `/taxonomies/`

The Create a taxonomy request creates a taxonomy in a particular stack of your organization.

**Note**: Refer to the [Restricted Keywords for UIDs](/docs/developers/create-content-types/restricted-keywords-for-uids) to avoid using reserved keywords.

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy."
    }
}
```

#### Sample Response

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy.",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:30:20.509Z",
        "updated_by": "b****************44"
    }
}
```




## Update a taxonomy

### Update a taxonomy

**PUT** `/taxonomies/{taxonomy_uid}`

The Update a taxonomy request is used to update the details of an existing taxonomy available in a particular stack.

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

#### Query Parameters

- **locale** (optional)
  Locale in which to update the taxonomy. If not specified, the master locale is used.
  Default: `es-es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "taxonomy": {
    "name": "Updated Sample One",
    "description": "Updated description for the sample one taxonomy."
  }
}
```

#### Sample Response

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Updated Sample One",
        "description": "Updated description for the sample one taxonomy.",
      "locale": "es-es",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T07:54:42.373Z",
        "updated_by": "b****************44"
    }
}
```




## Localize a taxonomy

### Localize a taxonomy

**POST** `/taxonomies/{taxonomy_uid}`

The Localize a taxonomy request is used to add translated values to a taxonomy for specific locales available in your stack.

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](/docs/developers/apis/content-management-api#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`

#### Query Parameters

- **locale** (required)
  The locale in which the taxonomy should be localized.
  Default: `fr-fr`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France."
    }
}
```

#### Sample Response

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France.",
        "locale": "fr-fr",
        "created_at": "2025-11-13T11:23:11.996Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T11:23:11.996Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```




## Unlocalize a taxonomy

### Unlocalize a taxonomy

**DELETE** `/taxonomies/{taxonomy_uid}`

The Unlocalize a taxonomy request is used to remove translated values from a taxonomy in a specified locale.

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](/docs/developers/apis/content-management-api#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`

#### Query Parameters

- **locale** (required)
  The locale from which to unlocalize. If not specified, the master locale is used.
  Default: `es-es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`




## Export a taxonomy

### Export a taxonomy

**GET** `/taxonomies/{taxonomy_uid}/export`

The Export a taxonomy request is used to export a specific taxonomy and its terms. in JSON or CSV format.

The exported file doesn't download automatically. You can use a REST API client such as Postman to manually download it.

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to export. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](/docs/developers/apis/content-management-api#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

#### Query Parameters

- **format** (optional)
  Enter the file format for exporting the taxonomy. The default format is JSON.
  Default: `json or csv`
- **locale** (optional)
  Exports the taxonomy in the specified locale. If not provided, the system uses the master locale by default (en-us).
  Default: `es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Temas Globales de Contenido",
        "description": "Description for the Global Content Topics taxonomy.",
        "locale": "es"
    },
    "terms": [
        {
            "uid": "artificial_intelligence",
            "name": "Inteligencia Artificial",
            "parent_uid": null,
            "locale": "es"
        },
        {
            "uid": "content_management",
            "name": "Gestión de Contenidos",
            "parent_uid": null,
            "locale": "es"
        },
        {
            "uid": "ai_child_1",
            "name": "Inteligencia Artificial Child 1",
            "parent_uid": "artificial_intelligence",
            "locale": "es"
        }
    ]
}
```




## Import a taxonomy

### Import a taxonomy

**POST** `/taxonomies/import`

The Import a taxonomy request is used to import a taxonomy and its terms into a stack by uploading the JSON or CSV file.

**Note**: As Taxonomies can contain numerous terms, the response will feature a terms_count field, indicating the number of successfully imported terms for this request, rather than listing them all.

You can try the call manually in any REST API client, such as Postman. While importing, you need to pass a form-data parameter named taxonomy and select the input type as 'File'. Then, select the JSON or CSV file of the taxonomy that you wish to import.

**Note**:

- If the CSV import format is invalid, any invalid rows containing taxonomy/terms and subsequent rows will be ignored and only rows with valid taxonomy/terms will be created.
- Refer to the Restricted Keywords for UIDs to avoid using reserved keywords.

#### Query Parameters

- **locale** (optional)
  Target locale in which to import the taxonomy. If not specified, the master locale is used.
  Default: `es-es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "taxonomy": {
        "uid": "sample",
        "name": "Sample",
        "description": "",
      "locale": "es-es",
        "created_at": "2024-02-06T11:19:33.607Z",
        "created_by": "blt**************96",
        "updated_at": "2024-02-06T11:19:33.607Z",
        "updated_by": "blt**************96",
        "terms_count": 2
    }
}
```




## Delete a taxonomy

### Delete a taxonomy

**DELETE** `/taxonomies/{taxonomy_uid}`

The Delete a taxonomy request deletes an existing taxonomy and all the terms within it. To confirm the deletion of a taxonomy, you need to specify the force=true query parameter.

**Note:** When you delete a taxonomy, its existing associations with content types are removed. Additionally, the child terms will also eliminate associations with existing entries.

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

#### Query Parameters

- **force** (required)
  Enter 'true' to force delete a taxonomy.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`




## Terms

Terms are the primary classification elements you generate within a taxonomy. They serve the purpose of categorizing entries.

##### Get all terms of a taxonomy

### Get all terms of a taxonomy

**GET** `/taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}`

The Get all terms of a taxonomy request returns comprehensive information of all the terms within a taxonomy available in a particular stack in your organization.

##### Get a single term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

#### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **depth** (optional)
  The response includes terms beginning at the root level and continuing to the specified depth.
  Default: `3`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **include_order** (optional)
  Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.
  Default: `true`
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **query** (optional)
  Provide a custom query for the term_uid in string format.
  Default: `{"uid":{"$in":["term_1","term_2"]}}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted terms within a taxonomy.
  Default: `false`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
    "terms": [
        {
            "uid": "data_science",
            "name": "Data Science",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:40.102Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:59:40.102Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 2,
            "taxonomy_uid": "sample_one",
            "ancestors": [
                {
                    "uid": "sample_one",
                    "name": "Updated Sample One",
                    "type": "TAXONOMY"
                }
            ]
        },
        {
            "uid": "ai",
            "name": "AI",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:23.659Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:59:23.659Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 1,
            "taxonomy_uid": "sample_one",
            "ancestors": [
                {
                    "uid": "sample_one",
                    "name": "Updated Sample One",
                    "type": "TAXONOMY"
                }
            ]
        }
    ],
    "count": 2
}
```


### Get a single term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request returns comprehensive information of a specific term available in a particular taxonomy.

##### Create a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

#### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy term. If not specified, the master locale is used.
  Default: `es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:59:54.988Z",
        "updated_by": "b****************44",
        "children_count": 3,
        "referenced_entries_count": 2
    }
}
```


### Create a term

**POST** `/taxonomies/{taxonomy_uid}/terms`

The Create a term request creates a term in a particular taxonomy within your stack.

Since terms are organized hierarchically in a taxonomy, it's important to define the order when creating new terms. For instance, when creating a term at the parent level, set the parent_uid as null and specify the level within the order parameter. To create a child term, provide the parent_uid of the parent term where you want to add the new child term, and indicate the desired level within the order parameter.

When creating terms at the parent level, the request body should look like this:

```
{
   "term":{
      "uid":"term_2",
      "name":"Term 2",
      "parent_uid":null,
      "order":2
   }
}
```

When creating terms at the child level, the request body should look like this:

```
{
   "term":{
      "uid":"sub_term_t",
      "name":"Sub Term 5",
      "parent_uid":"term_1",
      "order":5
   }
}
```

**Note:** The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.

##### Update a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

#### Query Parameters

- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "term": {
    "uid": "term_a2",
    "name": "Term A2",
    "order": "2",
    "parent_uid": "term_a"
  }
}
```

#### Sample Response

```json
{
    "term": {
        "uid": "term_a2",
        "name": "Term A2",
        "parent_uid": "term_a",
        "depth": 2,
        "created_at": "2023-10-17T12:58:35.427Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-17T12:58:35.427Z",
        "updated_by": "b****************44"
    }
}
```


### Update a term

**PUT** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Update a term request is used to update the details of an existing term available in a particular taxonomy.

##### Localize a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term you want to update. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

#### Query Parameters

- **locale** (optional)
  Locale in which to update the taxonomy term. If not specified, the master locale is used.
  Default: `es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "term": {
    "name": "Updated Term A"
  }
}
```

#### Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-18T03:59:01.121Z",
        "updated_by": "b****************44"
    }
}
```


### Localize a term

**POST** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Localize a term request is used to add translated taxonomy terms to specific locales available within a stack.

##### Unlocalize a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`
- **term_uid** (required)
  Enter the unique ID of the term you want to localize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `artificial_intelligence`

#### Query Parameters

- **locale** (required)
  The locale in which you want to localize the taxonomy term.
  Default: `es-es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "term": {
    "uid": "artificial_intelligence",
    "name": "Inteligencia Artificial",
    "parent_uid": null,
    "order": 1
  }
}
```

#### Sample Response

```json
{
    "term": {
        "uid": "artificial_intelligence",
        "name": "Inteligencia Artificial",
        "locale": "es-es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2025-11-13T12:03:27.032Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T12:03:27.032Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```


### Unlocalize a term

**DELETE** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Unlocalize a term request is used to remove localized values for a term in a specific locale.

##### Get descendants of a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`
- **term_uid** (required)
  Enter the unique ID of the term you want to unlocalize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `artificial_intelligence`

#### Query Parameters

- **locale** (optional)
  The locale from which you want to remove localization. If not specified, the system uses the master locale.
  Default: `es`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`


### Get descendants of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

The Get descendants of a term request returns all the child terms of a specific term available in a particular taxonomy.

##### Get ancestors of a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

#### Query Parameters

- **locale** (optional)
  Locale from which to fetch the descendant taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **depth** (optional)
  The response includes terms beginning at the root level and continuing to the specified depth.
  Default: `3`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **include_order** (optional)
  Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.
  Default: `true`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a2",
            "name": "Term A2",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-17T12:58:35.427Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:58:35.427Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 2,
"referenced_entries_count": 2
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T06:00:09.621Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:36:27.508Z",
            "updated_by": "blt812144cf5a0eaada",
            "children_count": 3,
            "order": 3
        }
    ],
    "count": 2
}
```


### Get ancestors of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/ancestors`

The Get ancestors of a term returns all the terms that are at higher levels in a specific taxonomy of the specified term.

##### Move/Reorder a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

#### Query Parameters

- **locale** (optional)
  Locale from which to fetch the ancestor taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

#### Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a",
            "name": "Updated Term A",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:54.988Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-18T03:59:01.121Z",
            "updated_by": "b****************44",
            "children_count": 5
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T06:00:09.621Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:36:27.508Z",
            "updated_by": "blt812144cf5a0eaada",
            "children_count": 3
        },
        {
            "uid": "term_a1_1",
            "name": "Term A1.1",
            "locale": "en-us",
            "parent_uid": "term_a1",
            "depth": 3,
            "created_at": "2023-10-15T06:00:21.461Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T06:00:21.461Z",
            "updated_by": "b****************44",
            "children_count": 2,
"referenced_entries_count": 3
        }
    ],
    "count": 3
}
```


### Move/Reorder a term

**PUT** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/move`

The Reorder a term request is used to reposition an existing term available in a particular taxonomy.

The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.

**Note:** By default, the force query parameter is set to false, which results in an error if an attempt is made to move a term with child terms. When set to true, it will forcefully move the term, impacting the hierarchy of all its child terms and ancestors.

When reordering terms at the parent level, the request body should look like this:

```
{
  "term": {
    "parent_uid": null,
    "order": 2
  }
}
```

When rearranging terms under an existing term on a different level, the request body should look like this:

```
{
  "term": {
    "parent_uid": "term_1",
    "order": 5
  }
}
```

When reordering terms under an existing term on the same level (reorder term), the request body should be structured as follows:

```
{
  "term": {
    "parent_uid": "term_3",
    "order": 1
  }
}
```

##### Delete a term

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to move or reorder the terms. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term you want to move or reorder. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

#### Query Parameters

- **force** (optional)
  Enter 'true' to force a term to be reordered.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type ** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "term": {
    "parent_uid": "test",
    "order": 1
  }
}
```

#### Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "en-us",
        "parent_uid": "test",
        "depth": 2,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-25T10:34:34.267Z",
        "updated_by": "b****************44",
        "order": 1
    }
}
```


### Delete a term

**DELETE** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Delete a term request deletes an existing term and all the child terms within it.

To confirm the deletion of a term, you need to specify the force=true query parameter.

**Note:** When you delete a term, its existing associations with entries are removed. Additionally, the child terms will also eliminate associations with existing entries.

##### Get all terms across all taxonomies

#### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy which you want to delete. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to delete. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

#### Query Parameters

- **force** (required)
  Enter 'true' to force delete a term.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`


### Get all terms across all taxonomies

**GET** `/taxonomies/$all/terms?typeahead={term}`

The Get all terms across all taxonomies request returns comprehensive information of all the terms across all taxonomy available in a particular stack in your organization.

**Note**:

- The parameter $all in the URL is a reserved keyword in this context. It is used to refer to all taxonomies.
- In the Query Parameters section, you must pass either the query or typeahead parameter.

#### Query Parameters

- **locale** (optional)
  Specifies the locale from which to fetch the terms. If not provided, the system uses the master locale.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **query** (optional)
  Provide a custom query for the taxonomy_uid and term_uid in string format.
  Default: `{"$or":[{"taxonomy_uid":"taxonomy_1","uid":{"$in":["term_1", “term_2”]}}]}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`

#### Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a2_1",
            "name": "Term A2.1",
            "locale": "en-us",
            "parent_uid": "term_a2",
            "depth": 3,
            "created_at": "2023-10-15T05:58:46.769Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:46.769Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                },
                {
                    "uid": "term_a2",
                    "name": "Term A2"
                }
            ]
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T05:58:16.921Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:16.921Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                }
            ]
        },
        {
            "uid": "term_a2",
            "name": "Term A2",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T05:58:36.476Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:36.476Z",
            "updated_by": "b****************44",
            "children_count": 1,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                }
            ]
        },
        {
            "uid": "term_a",
            "name": "Term A",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:57:34.775Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:34.775Z",
            "updated_by": "b****************44",
            "children_count": 3,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                }
            ]
        }
    ],
    "count": 17
}
```

