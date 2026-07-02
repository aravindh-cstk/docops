---
title: "update"
description: "The update method allows you to make changes in the existing role of your stack."
url: "https://www.contentstack.com/python-management-roles-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to make changes in the existing role of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the role |

Returns:
Type
JSON

```
data = {
       "role":{
           "name":"sampleRole",
           "description":"This is a test role.",
           "rules":[
           {
               "module":"branch",
               "branches":[
               "main"
               ],
               "acl":{
               "read":true
               }
           },
           {
               "module":"branch_alias",
               "branch_aliases":[
               "deploy"
               ],
               "acl":{
               "read":true
               }
           },
           {
               "module":"content_type",
               "content_types":[
               "$all"
               ],
               "acl":{
               "read":true,
               "sub_acl":{
                   "read":true
               }
               }
           },
           {
               "module":"asset",
               "assets":[
               "$all"
               ],
               "acl":{
               "read":true,
               "update":true,
               "publish":true,
               "delete":true
               }
           },
           {
               "module":"folder",
               "folders":[
               "$all"
               ],
               "acl":{
               "read":true,
               "update":true,
               "publish":true,
               "delete":true,
               "sub_acl":{
                   "read":true,
                   "update":true,
                   "publish":true,
                   "delete":true
               }
               }
           },
           {
               "module":"environment",
               "environments":[
               "$all"
               ],
               "acl":{
               "read":true
               }
           },
           {
               "module":"locale",
               "locales":[
               "$all"
               ],
               "acl":{
               "read":true
               }
           }
           ],
           "uid":"blt5a570885da41c710"
       }
       }
import contentstack_management 
client = contentstack_management.client(authtoken='your_authtoken')
response = client.stack('api_key').roles("role_uid").update(data).json()
```
