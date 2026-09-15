---
title: "Queries & LQL"
description: "LQL (Lytics Query Language) is a proprietary query language developed by Lytics that allows users to cleanse, filter, and define the relationship between…"
url: /lytics/lytics-query-language
uid: blt950f600490c6959c
---

# Queries & LQL

## Queries & LQL

**Warning:** With the move to Schema, this page has been deprecated. Please see [Field & Mappings](/docs/lytics/fields-mappings) and [Advanced Mapping Functions](/docs/lytics/advanced-mapping) for more up to date information.

## Introduction

LQL (Lytics Query Language) is a proprietary query language developed by Lytics that allows users to cleanse, filter, and define the relationship between independent sources of data to materialize a unified consumer profile. This document outlines how to review, maintain, and create complex LQL queries.

**Note:** All core data mapping functionality is now available directly in the UI under **Building Profiles > Schema**. LQL is still available via API for technical users looking to automate processes or manage fields and mappings in bulk, but the vast majority of day-to-day users may benefit from using the Schema interface.

## Exploring LQL Queries

The Browse Queries section in Lytics lets you see the Lytics Query Language (LQL) used in your account. To view this on your Lytics dashboard, navigate to **Data** > **Queries**. From there, you can click on any item in the table to view an individual LQL file.

![99bb133-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2201af71c5432042/64f962e2fe45c23fbe1c36ab/99bb133-image.png)

This is useful if you need to find out the exact definition of a specific user field and cannot access your LQL directly. Remember that you can't edit or remove LQL from the Lytics UI. For a more detailed breakdown of LQL and how it works, see the full article on [Queries & LQL](/docs/lytics/lytics-query-language).

## Managing LQL Queries

The Lytics Query Language (LQL) is used to define the transformation of uploaded records and event data into [user fields](/docs/lytics/fields-mappings) on a customer profile. It transforms row-level event data into document-oriented user info. This Query language is similar to the HIVE or SQL query languages. However, it departs from these to offer more of a _Rich Document_ (JSON user profile) construction. The following section will explain how to write, validate, and upload queries using LQL.

-   [Query Example](#query-example)
-   [Query Management](#query-management)
-   [Standard Syntax](#standard-syntax)
-   [Functions](#functions)
-   [Kinds (Data Types)](#kinds-\\(data-types\))
-   [Merge Operations](#merge-operations)

### Query Example

The following is a simple example of an LQL file that translates events from a website into profile fields.

```
SELECT
    name                       -- Simple field, by default = string
    , age            KIND INT  -- cast field as int
    , last_visit_ts  KIND DATE -- cast as date

    -- Showing the aggregate counter function and aliasing name of output column AS
    , count(_ref)         AS ref_ct

    -- Valuect makes a map[string]int count of occurrences of a key
    , valuect(`my field`) AS myfield_mapct

    -- showcase every optional syntax element in column
    --     meregeop oldest we don't want to over-write this value, keep oldest
    --     KIND INT   normally we don't have to cast as most functions have a specific type
    , amt AS first_order_amount
          IF  event == "cart checkout"
          SHORTDESC "Amount of First Order"
          LONGDESC "Amount of First Order"
          KIND INT
          MERGEOP OLDEST

    -- lets keep around the date at which they signed up (mergeop oldest)
    , now()               AS signedup_date                  IF event == "signed up"    KIND DATE  MERGEOP oldest

    -- maps:   map all fields that start with "user." into a fact map
    , match("user.")        AS user_attributes     KIND map[string]string

    -- list of strings
    , set(event) AS all_events

    -- Identified By Columns allow merging across streams
    , email(EmailAddress) AS email
    , _uid
    , fbuid

FROM
    default
INTO
    user
BY
    _uid OR email OR fbuid
WHERE
    _bot = "f" OR NOT EXISTS _bot
ALIAS
    web_user
```

### Query Management

Once you have written your LQL file, you can save it with the .lql extension. And use the following request to validate the query using the Lytics API.

```
curl -s -XPOST "https://api.lytics.io/api/query/_validate" \
   -H "Authorization: $LIOKEY" \
   -H "Content-Type: text/plain" \
   --data-binary @/tmp/tmp.lql | jq '.'
```

You can upload your query to your account if it is valid..

```
curl -s -XPOST "https://api.lytics.io/api/query" \
   -H "Authorization: $LIOKEY" \
   -H "Content-Type: text/plain" \
   --data-binary @your_file.lql | jq '.'
```

To look at the user schema generated from the LQL:

```
curl -s -H "Authorization: $LIOKEY" \
 -XGET "https://api.lytics.io/api/schema/user" | jq '.'
```

### Standard Syntax

There a few common keywords used in LQL syntax:

-   **SELECT** Select data to be added to user profiles, including Maps, Counts, and other complex data types.
-   **FROM** The stream to select from.
-   **INTO** This is USER for all user profiles. (Technically you could create other types, such as "account".)
-   **WHERE** Filters out entire records to not be included/analyzed such as Bots, Employees, Test data.
-   **BY** What field are we going to identify this entity by.
-   **ALIAS** When a selection query has an alias, that is the profile-fragment(table) name to use.

Use the following reference for a full syntactical guide when writing your own LQL:

```
Select = "SELECT" COLUMNS FROM INTO BY [WHERE] ALIAS
```

## required from, the stream to operate on for this query

FROM = "FROM" Identifier

## Required Identified By field, name of column "AS" from Column

BY = "BY" Identifier \["OR" Identifier\]

## Required Alias for giving a query a unique identifier

ALIAS = "ALIAS" Identifier

## Optional Where Filter, same as SQL where

WHERE = "WHERE" LogicalExpression

COLUMNS = COLUMN \[, COLUMN\]

COLUMN = Expression \["AS" Identifier\] \["IF" LogicalExpression\] \["SHORTDESC" String\] \["LONGDESC" String\] \["KIND" Kind\] \["MERGEOP" MergeOp\]

LogicalExpression = NOT | Comparison | EXISTS | IN | CONTAINS | LIKE | Function | Expression | "(" LogicalExpression ")" | LogicalExpression OR LogicalExpression | LogicalExpression AND LogicalExpression

Expression = Identifier | Function | Literal

Function = Identifier "(" Expression \[, Expression\] ")"

NOT = "NOT" LogicalExpression Comparison = Identifier ComparisonOp Literal ComparisonOp = ">" | ">=" | "<" | "<=" | "==" | "!=" EXISTS = "EXISTS" Identifier IN = Identifier "IN" (Literal, Literal, ...) CONTAINS = Identifier "CONTAINS" Literal LIKE = Identifier "LIKE" String # uses \* for wildcards

Literal = String | Int | Float | Bool | Timestamp

Identifier = \[a-zA-Z\]\[a-zA-Z0-9\_\]+ | "" + String + ""

Kind = "int" | "number" | "string" | "date" | "\[\]string" | "ts\[\]string" | "map\[string\]int" | "map\[string\]number" | "map\[string\]string\*

## MergeOp's are very seldom used and have to be used on the right Kind

## ie string can use Latest, Oldest (but not min, max)

MergeOp = "max" | "min" | "latest" | "oldest" | "mapmax"

## Functions

LQL has many built-in functions for transformation and logic evaluation that can be applied to raw fields in LQL.

### Aggregate Functions

There are a variety of expressions for building document type structures (maps, lists, sets). These are functional expressions but can only be used in Columns.

-   **count** Count of this key. For instance, count occurrences of sessions that have started (ie, visited website).
-   **set** Create a unique list/array of each value we have seen from this field.
-   **min,max** Minimum or Maximum value (for numerics).
-   **sum** Sum values (keep track of total video play time, etc).

### Logical Functions

These functions are used for local evaluation, and return boolean values (true/false).

-   **all** Check for the existence of n keys. Returns true of false.
    -   all(key1,key2,key3,...)
-   **any** Check for the existence of at least one of the given n keys. Returns true or false.
    -   any(fieldname, value1,value2,value3)
-   **exists** Check for the existence of a single key. Returns true or false.
    -   exists(purchase\_total) checks to see if purchase\_total is defined for the current message
    -   valuect(yymm()) AS visits\_by\_yymm IF exists(\_sesstart) Only fires valuect(yymm()) if \_sesstart exists
-   **in** Check if a field value is in a set of values. Returns true or false.
    -   "t" AS is\_student IF role\_type IN ("student","other")
    -   dailyContact AS dailyContact IF dailyContact IN ("student","other")
-   **eq** Check if the two values are equal. Returns true or false.
    -   eq(domain,"google.com")
-   **ne** Check if the two values are not equal. Returns true or false
    -   ne(domain,"google.com")
-   **lt** Check if the first value is less than the second value. Returns true or false.
    -   lt(seconds(video\_time), 30)
-   **le** Check if the first value is less than or equal to the second value. Returns true or false.
    -   le(seconds(video\_time), 30)
-   **gt** Check if the first value is greater than the second value. Returns true or false.
    -   gt(seconds(video\_time), 30)
-   **ge** Check if the first value is greater than or equal to the second value. Returns true or false.
    -   ge(seconds(video\_time), 30)
-   **not** Returns true if the inner value resolves as false and returns false if the inner value resolves as true.
    -   not(exists(domain))
-   **or** Returns true if at least one of the inner statements resolves to true.
    -   or(exists(domain), contains(domain,"google.com")) AS from\_google
-   **if** Check if the first IF clause is true. If not, use the value in the else clause.
    -   "Planet Earth" IF CONTAINS(Planet, "Earth") ELSE "Some Other Planet"
    -   Format: {IF\_TRUE\_VALUE} IF {CONDITION} ELSE {ELSE\_VALUE}
-   **ifcase** Check for multiple IF conditions. If none are true, default to the last value.
    -   ifcase("Planet Mars" IF CONTAINS(Planet, "Mars"), "Planet Venus" IF CONTAINS(Planet, "Venus"), "Planet Earth")
    -   Format: ifcase({IF\_TRUE\_VALUE\_1} IF {CONDITION\_1}, {IF\_TRUE\_VALUE\_2} IF {CONDITION\_2}, {ELSE\_VALUE})

### String Functions

These functions are used to manipulate string fields.

-   **join** Join together multiple values, coerce them into strings. Last argument is which string to use to join (may be empty string).
    -   join("apples","oranges",",") => "apples,oranges"
    -   join("apples","oranges","") => "applesoranges"
-   **len** Length (of array, string) find the length of a string, return integer value of length.
-   **oneof** Choose value from the first field that has a non nil value.
    -   oneof(fielda,fieldb,fieldc)
-   **replace** Replace a matching part of a string with another string or an empty string. Converts to string first.
    -   replace(url,"/search/apachesolr\_search/") - Removes /search/apachesolr\_search/ from URL (in this case, leaving the search term)
    -   replace(url, "%20", " ") - replaces %20 from URL with a space.
-   **string.split** Breaks a variable into smaller fragments given a specific delimiter
    -   split(cc,",") - Splits the variable cc at each comma it contains
-   **string.strip(field)** Strips leading and trailing whitespace (spaces, tabs, newline, carriage-return) from string, or arrays of strings.
-   **string.lowercase** Convert strings to lower case
-   **string.uppercase** Convert strings to upper case
-   **string.titlecase** Convert strings to title case
-   **string.index** Find position of substring within a string, return ordinal starting position.
    -   string.index("apple","p") => 1 find starting index of the first "p".
-   **string.substr** Extract a string from a string using positional start/end.
    -   string.substr("android",0,3) => "and"
    -   string.substr("android",2) => "droid"
-   **contains** Does this value contain this string? Is a sub-string match, not full match (eq)
    -   IF contains(total\_price, "$") - Check to see if total\_price has a $ in it
    -   IF not(contains(subscriber\_key,"-")) AND not(contains(subscriber\_key,"@")) check to make sure \- or @ is not in it.
-   **hasprefix** Does this value start with this string?
    -   hasprefix(event, "created") - Check to see if event starts with "created"
-   **hassuffix** Does this value start with this string?
    -   hassuffix(subscriber\_key, "user") - Check to see if subscriber\_key ends with "user"

### Hash & Encoding Functions

You can apply hash functions to encode incoming data.

-   **hash.sip** hash.sip(email) Hash the given value using sip hash to integer output.
-   **hash.md5** hash.md5(email) Hash the given value using md5.
-   **hash.sha1** hash.sha1(email) Hash the given value using sha1.
-   **hash.sha256** hash.sha256(email) Hash the given value using sha256.
-   **hash.sha512** hash.sha512(email) Hash the given value using sha512.
-   **encoding.b64encode(field)** base64 encode.
-   **encoding.b64decode(field)** base64 decode.

### Casting & Conversion

These functions allow you to cast and convert data into different types.

-   **toint** Converts strings to integers. Useful for converting a string to a number before applying a number-based expression.
    -   toint(order\_total) - Converts order\_total to an int.
    -   set(toint(split(cc,","))) - Takes the field cc and splits it at commas, and converts the results to integers. Then adds them to a set.
-   **tonumber** Convert to Number
-   **todate** Converts strings to dates, see full doc in Date/Time section below.
-   **tobool(field)** Cast to Boolean.

### Map & Set/Array Functions

These functions manipulate map or set fields.

-   **filter** Filter out Values that match specified list of match filter criteria
    -   filter(split("apples,oranges",","),"ora\*") => \["apples"\]
-   **len** Length (of array, string)
-   **map** Create an object/map of key-value pairs. Often used to keep map of key (event-name?) to value (last occurrence date?). Or other user level key-value pair data.
    -   map(key1, todate(date\_field))
    -   map(key1, todate(date\_field)) KIND map\[string\]time By default the map is generic map, cast to map\[string\]time with
-   **match** Type: Map (generic map, use KIND to cast) Match a key, and then keep a map of key/values with the match value removed.
    -   , match("topic\_") AS global KIND map\[string\]number
-   **mapkeys** Type: Map input, \[\]string{} output. Given a map, return a list of string of each of the keys.
-   **mapvalues** Type: Map input, \[\]string{} output. Given a map, return a list of string values of each of the values.
-   **mapinvert** Type: Map input, MapString output. Given a map, return a map\[string\]string inverting keys/values.
-   **array.index** Cherry pick a single item out of an array:
    -   array.index(split("apples,oranges,peaches",","),1) => \["oranges"\]
-   **array.slice** Slice an array of items selecting some sub-set of them.
    -   array.slice(split("apples,oranges,peaches,pineapple",","),2) => \["peaches","pineapple"\]
    -   array.slice(split("apples,oranges,peaches,pineapple",","),1,3) => \["oranges","peaches"\]

### URL/HTTP & Email Functions

These functions manipulate strings which are URLs or email addresses.

-   **email** Extract email address from "Bob <emailaddress@lytics.io>" format, note that email addresses are converted to lowercase
-   **emailname** Extract _Bob_ from "Bob <emailaddress@gmail.com>" or email@gmail.com
-   **emaildomain** Extract _gmail.com_ from "Bob <emailaddress@gmail.com>" or email@gmail.com
-   **domain** Extract domain _lytics.io_ from URL http://www.lytics.io/index.html
-   **host** Extract host _www.lytics.io_ from URL http://www.lytics.io/index.html
-   **path** Extract the URL path from URL (no query string or domain), must be valid URL parseable string.
-   **qs** Extract the query string parameter from URL qs(urlfield, "nameOfParam")
    -   qs(url, "mc\_eid") - Extracts the MailChimp user ID
    -   set(qs(url, "video\_id") - Creates a set of video\_id
    -   qs(tolower(url), "riid") - Converts the complete URL to lowercase before attempting to match
    -   email(oneof(email, qs(url, "email"))) - Attempts to get the email address from the URL and from the regular fields, chooses whichever is populated and treats it like an email field
-   **qs2** Extract a querystring parameter without lowercasing before checking for the parameter. qs2 is the same as qs above except that it does not lowercase before checking for a querystring.
-   **url** Checks if URL string is valid and returns URL if true.
-   **urldecode** Perform URL decode on a field. urldecode(field)
    -   If field contains "my%20value", urldecode(field) will return "my value"
-   **urlmain** Removes the querystring and scheme from the url
    -   urlmain("http://www.lytics.com/?utm\_source=google") will return "www.lytics.com/"
-   **urlminusqs** Removes a specific query parameter and its value from a url
    -   urlminusqs("http://www.lytics.com/?q1=google&q2=123", "q1") will return "http://www.lytics.com/?q2=123"
-   **useragent** Extract info from user-agent string. Below examples based on Mozilla/5.0 (X11; Linux x86\_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11
    -   useragent(user\_agent, "bot") - Extracts True/False is this a bot?
    -   useragent(user\_agent, "mobile") - Extracts True/False is this mobile?
    -   useragent(user\_agent, "mozilla") - Extracts "5.0"
    -   useragent(user\_agent, "platform") - Extracts "X11"
    -   useragent(user\_agent, "os") - Extracts "Linux x86\_64"
    -   useragent(user\_agent, "engine") - Extracts "Linux x86\_64"
    -   useragent(user\_agent, "engine\_version") - Extracts "AppleWebKit"
    -   useragent(user\_agent, "browser") - Extracts "Chrome"
    -   useragent(user\_agent, "browser\_version") - Extracts "23.0.1271.97"
-   **useragent.map(field)** Extract map of all of above.

### Date & Time Functions

These functions manipulate date fields. Our core date parser recognizes about 50 date formats, so in general these will operate on _any_ format.  
If you are using EU dates, you will need to specify the parser format.

-   **dayofweek** Type: Integer. 0-6 integer of day of week.
    -   Examples: dayofweek() => 4 OR dayofweek(mydatefield)
-   **epochms** Type: Integer. Unix MS of the date stamp on the current message being processed
-   **extract** Can be used to extract parts of date and time. Example usage on the [strftime](http://strftime.org/) site
    -   extract(reg\_date, "%B") Returns name of month
    -   extract(reg\_date, "%d") Returns day of month
-   **hourofday** Type: Integer. Hour of day (in 24 hour utc time). hourofday() OR hourofday(field)
-   **hourofweek** 0-167 integer for hour of week
-   **mm** Type: Integer. 0-11 month (alias for monthofyear) mm() => current month, 6 for june, mm(my\_date\_field)
-   **monthofyear** Type: Integer Output the 0-11 month value
-   **now** Type: Date The current message/event times.
-   **seconds** Type: Integer. Seconds, extracts things like seconds("00:30") => 30 and seconds("10:30") => 630
-   **todate** Converts strings to dates.
    -   Datemath: todate("now-3m") Date math relative to message timestamp.
    -   Parser: todate("02/01/2006") More than 30 formats supported. [Date Parser](https://github.com/araddon/dateparse)
    -   Examples with 2 arguments: todate(date\_field\_format, date\_field\_name) where date\_field\_format represents how date\_field\_name should be parsed and uses [golang's time package](http://golang.org/pkg/time/) formatting
        -   todate("02/01/2006 15:04:05 PM",date\_field\_name) outputs date\_field\_name as European format (where 01 is a placeholder for month, 02 is a placeholder for day, and 2006 is a placeholder for year, 15 is a placeholder for hour, 04 is a placeholder for minute, and 05 is a placeholder for second. If the timestamp is in AM/PM format, use PM. For 24Hr format, do not add am/pm after second field.)
        -   for e.g., todate("02/01/2006 15:04:05 PM","30/04/2014 12:25:30 PM") parses the date "30/04/2014 12:25:30 PM" as European format. Please refer to [golang's time package](http://golang.org/pkg/time/) documentation for more information about date time formats.
-   **todatein** Converts strings to dates and parses the given datetime for the given location. For e.g., todatein(date\_field\_name, "America/Los\_Angeles") parses the date\_field\_name for Los Angeles location. If no location info is provided in date string such as "2017-09-30 17:00:00" this will allow you to apply a timezone. We still convert back to UTC for storage.
-   **totimestamp** Convert to Integer Unix Seconds (UTC).
-   **yy** Type: int Date conversion to YY format, so May 1 2014 is expressed as 14. yy(dob), or yy() for record time stamp
-   **yymm** String The YYMM date format, so May 1 2014 is expressed as 1405. yy(dob), or yy() for record time stamp
-   **timebucket** Creates a tabulation of timestamps which can be used to segment based on timewindows. timebucket(now()) for collect time, or timebucket(todate(field)) to bucket on the value of a field

## Kinds (Data Types)

The KIND syntax allows you to explicitly define the data type of a field. Often this is optional as it is inferred from functional expression.

-   **int** 64 bit signed integer
-   **number** 64 bit signed Float value
-   **bool** Boolean
-   **date** Date-Time
-   **string** string
-   **\[\]time** Array of times
-   **\[\]string** Array of strings
-   **ts\[\]string** Time ordered Unique set of strings (useful for keeping track of order in which they performed set of unique events)
-   **map\[string\]int** Map of key/integers
-   **map\[string\]number**
-   **map\[string\]string**
-   **map\[string\]time**

## Merge Operations

The MERGEOP syntax allows you to define merge behavior, that is, do you want to keep new incoming values or values from previous events? In the UI, you will only see the mergeops that will be valid for the data type.

**Single Value Fields (Scalar)**

-   Holds the latest value passed in to the field

old\_score KIND INT MERGEOP latest

-   Holds the first value seen for my\_date

my\_date KIND DATE MERGEOP oldest

-   Holds the oldest value passed in to the field

old\_score KIND INT MERGEOP oldest

**Multi Value Fields (Non-Scalar)**

-   **Only Store Latest Set (all previous values of set discarded)**

set(lists) AS lists KIND \[\]string MERGEOP latest

-   **Only store data for keys that were seen in the last event (The latest event will overwrite what is in the map. If only one key is found in the last event there will only be one row returned on the profile)**

map(key, attribute) AS mergeop\_latest KIND map\[string\]number MERGEOP latest

-   **Only store data for keys that were seen in the first event (The oldest event will overwrite what is in the map. If only one key is found in the last event there will only be one row returned on the profile)**

map(key, attribute) AS mergeop\_oldest KIND map\[string\]number MERGEOP oldest

-   **Store the latest attribute for for each key (This will overwrite attributes NOT keys)**

map(key, attribute) AS mergeop\_latestmap KIND map\[string\]number MERGEOP latestmap

-   **Store the oldest attribute for each key (This will overwrite attributes NOT keys)**

map(key, attribute) AS mergeop\_oldestmap KIND map\[string\]number MERGEOP oldestmap

-   **Store the latest attribute for for each key (This will overwrite attributes NOT keys. This will behave like mergeop latest for maps)**

map(key,attribute) AS mergeop\_merge KIND map\[string\]number MERGEOP merge

-   **Sum the attribute value per key as new events come in**

, map("attribute") AS mergeop\_sum KIND map\[string\]int MERGEOP sum

-   **Store the minimum attribute for each key**

map(key,attribute) AS meregeop\_mapmax KIND map\[string\]number MERGEOP mapmin

-   **Store the maximum attribute for each key**

map(key,attribute) AS meregeop\_mapmax KIND map\[string\]number MERGEOP mapmax
