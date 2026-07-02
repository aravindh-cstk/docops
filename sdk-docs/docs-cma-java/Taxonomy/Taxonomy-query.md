---
title: "query"
description: "Get an instance of the taxonomy search filter class through which you can query on a taxonomy based on an entry endpoint. Provide the user's email address in JSON format."
url: "https://www.contentstack.com/java-management-taxonomy-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

Get an instance of the taxonomy search filter class through which you can query on a taxonomy based on an entry endpoint. Provide the user's email address in JSON format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | JSONObject | Yes | — | The query of type JSONObject. |

Returns:
Type
Call

```
import contentstack; 
Taxonomy taxonomy = new Contentstack.Builder()
       .setAuthtoken(TestClient.AUTHTOKEN)
       .setHost("api.contentstack.io")
       .build()
       .stack("apiKey")
       .taxonomy();
JSONObject query = new JSONObject();
query.put("taxonomies.taxonomy_uid", "{"$in" : ["term_uid1" , "term_uid2" ] }");
Response response = taxonomy.query(query).execute();if (response.isSuccessful()){   System.out.println("Response :"+response.body().toString());}else {   System.out.println("Failed response :"+response.errorBody().toString());}
```
