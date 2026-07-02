---
title: "pagination"
description: "If the result of the initial sync ( or subsequent sync ) contains more than 100 records , the response would be paginated . It provides a pagination token in the response . However , you do not have to use the pagination token manually to get the next batch ."
url: "https://www.contentstack.com/python-stack-pagination"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## pagination

If

the

result

of

the

initial

sync

(

or

subsequent

sync

)

contains

more

than

100

records

,

the

response

would

be

paginated

.

It

provides

a pagination

token

in

the

response

.

However

,

you

do

not

have

to

use

the

pagination

token

manually

to

get

the

next

batch

.

No parameters.

Returns:
Type
List Of Sync Items

```
import contentstack
stack = contentstack.Stack(api_key = 'api_key', access_token = 'access_token', environment = 'environment')
result = stack.pagination('pagination_token')
if result is not None:
   logger.info(result)
        # result.items: Contains sync data
        # result.paginationToken: For fetching the next batch of entries using pagination token
        # result.syncToken: For performing subsequent sync after initial sync
else:
    logger.error(result)
```
