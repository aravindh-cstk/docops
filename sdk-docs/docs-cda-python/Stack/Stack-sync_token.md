---
title: "sync_token"
description: "You can use the sync token ( that you receive after the initial sync ) to get the updated content next time . The sync token fetches only the content that was added after your last sync and the details of the content that was deleted or updated ."
url: "https://www.contentstack.com/python-stack-sync_token"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## sync_token

You

can

use

the

sync

token

(

that

you

receive

after

the initial

sync

)

to

get

the

updated

content

next

time

.

The

sync

token

fetches

only

the

content

that

was

added

after

your

last

sync

and

the

details

of

the

content

that

was

deleted

or

updated

.

No parameters.

Returns:
Type
List Of Sync Items

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
response = stack.sync_token("sync_token")
print(response)
```
