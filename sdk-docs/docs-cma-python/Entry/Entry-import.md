---
title: "import"
description: "The import method imports the entries in the JSON."
url: "https://www.contentstack.com/python-management-entry-import"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## import

The import method imports the entries in the JSON.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |
| file_path | str | Yes | — | The file path of the file you want to import |
| locale | str | No | — | The language for the entry. Set to en-us by default |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

file_path = "tests/resources/mock_content_types/import_content_types.json"
response = client.stack('api_key').content_types().entry('entry_uid').imports(file_path).json()
```
