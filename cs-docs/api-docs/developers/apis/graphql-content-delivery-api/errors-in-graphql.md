---
title: "GraphQL | Errors in GraphQL"
description: Troubleshoot GraphQL errors, response formats, and common causes when querying Contentstack content.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/errors-in-graphql
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Errors in GraphQL

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
