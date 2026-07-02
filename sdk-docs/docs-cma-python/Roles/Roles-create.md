---
title: "create"
description: "The create method adds a new role in your stack."
url: "https://www.contentstack.com/python-management-roles-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method adds a new role in your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new role |

Returns:
Type
JSON

```
data = {
	"role": {
		"name": "testRole",
		"description": "This is a test role.",
		"rules": [
			{
				"module": "branch_alias",
				"branch_aliases": [
					"deploy"
				],
				"acl": {
					"read": true
				}
			},
			{
				"module": "content_type",
				"content_types": [
					"$all"
				],
				"acl": {
					"read": true,
					"sub_acl": {
						"read": true
					}
				}
			},
			{
				"module": "asset",
				"assets": [
					"$all"
				],
				"acl": {
					"read": true,
					"update": true,
					"publish": true,
					"delete": true
				}
			},
			{
				"module": "environment",
				"environments": [
					"$all"
				],
				"acl": {
					"read": true
				}
			},
			{
				"module": "taxonomy",
				"taxonomies": [
					"taxonomy_UID"
				],
				"terms": [
					"taxonomy_UID.term_UID"
				],
				"content_types": [
					{
						"uid": "$all",
						"acl": {}
					}
				]
			}
		]
	}
}
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').roles().create(data).json()
```
