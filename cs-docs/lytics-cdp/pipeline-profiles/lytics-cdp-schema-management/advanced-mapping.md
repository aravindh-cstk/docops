---
title: "Advanced Mapping Functions"
description: "Lytics supports numerous built-in functions for light data transformation and logic evaluation to allow users to map only data that is relevant to their…"
url: /lytics/advanced-mapping
uid: blt3962c3567d9ad976
---

# Advanced Mapping Functions

## Advanced Mapping Functions

Lytics supports numerous built-in functions for light data transformation and logic evaluation to allow users to map only data that is relevant to their customer profile and format it the way they need for activation of their use cases.

**Note:** For more complex data transformation and aggregation we suggest utilizing Cloud Connect (with or without Lytics Warehouse) for bringing in calculated attributes.

---

### Expressions

**Mapping Keys vs. Literals**

To map the data value passed in an event you will want to use the associated key within the Expression. When creating mappings it is important to remember that keys need to be wrapped in single backticks (\\\\).

Literals (which can be a string, int, float, bool, or timestamp) are used to map a static value to the field. These are often used with conditionals.

---

### Conditions

Conditions allow you perform logical evaluations to determine when to store a value on a field based on any of the data passed within the same incoming event.

[Merge Operators](/docs/lytics/fields-mappings#merge-operators) Merge operators allow you to determine how a value will be written to a field in relation to the currently stored value.

[Data Types](/docs/lytics/fields-mappings#data-types) Kind = "int" | "number" | "string" | "date" | "\\\[\]string" |\\ "ts\\\[\]string" | "map\\\[string\]int" | "map\\\[string\]number" | "map\\\[string\]string\\\*

---

#### Screenshot Example of supplying expression / condition to a mapping

![2962fb3490e66cf6ba70549a82870fe53acf09ef6a855ae690af5400f425216a-Screenshot_2024-11-18_at_3.46.31_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5d1e1aab5df909a0/5a4e93e14161d6b9c150c944/2962fb3490e66cf6ba70549a82870fe53acf09ef6a855ae690af5400f425216a-Screenshot_2024-11-18_at_3.46.31_PM.png)

This example showcases the default mapping for the mo\_email\_unsub field from the Marketo Activity import. Here we see we are writing count over time in which we see activityTypeId as a key in the incoming event data. However, we are only writing this expressions results when that incoming event data evaluates the condition eq(activityTypeId, "9") as true.

---



---

---

## String Functions

These functions are used to manipulate string fields.

---

### join

Join together multiple values, coerce them into strings. Last argument is which string to use to join (may be empty string).

#### join Example

```
{
  "street":"698 Candlewood Lane",
  "city":"Cabot Cove",
  "state":"ME",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
join(`street`,`city`,`state`,", ")
```

```
698 Candlewood Lane, Cabot Cove, ME
```

**Breaking down the Example**

The join() function takes at minimum 2 arguments (utilizing the LAST argument as the "joining" string), and concatenates each argument in order utilizing the "joining" string. In this example we produce a single string consisting of street, city, state values concatenated utilizing the "joining" string , (comma followed by a space).

---

### len

Length (of array, string) find the length of a string, return integer value of length.

#### len Example

```
{
  "_e":"item_added_to_cart",
  "items_in_cart": [
    "ISBN_9780553119978",
    "ISBN_9780345324481"
  ],
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
len(`items_in_cart`)
```

```
2
```

**Breaking down the Example**

The len() function here is operating on a field whose value is an array, so the output is the number of items in the array. Applying len() to a string results in the character length of the string.

---

### oneof

Choose value from the first field that has a non nil (empty string ""inclusive) value.

#### oneof Example

```
{
  "account_id":"000-000-001",
  "account_name":"Planet Express",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
oneof(`account_no`,`account_id`)
```

```
000-000-001
```

**Breaking down the Example**

This oneof() function first checks and sees that the account\_no field does not exist in the event data, so then moves to the account\_id which is found to be a non nil value and is returned.

![a6c8130-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd46bb3fb561b8c60/e11ac177be11554282b90a32/a6c8130-image.png)

---

### replace

Converts the value to a string and then replaces the matching part of a string with another string. If no replacement string is passed or an empty string is passed the matched string is simply removed.

#### replace Example

```
{
  "_e":"search",
  "url":"https://pawneeindiana.com/parks-and-recreation",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
replace( replace( path(`url`),"/"),"-", " ")
```

```
parks and recreation
```

**Breaking down the Example**

Using path finds the path of the url which is "/parks-and-recreation".

The inner replace finds all parts of the string that matches "/" and since there is no specified string replacement "/" is replaced with nothing. This results in a value of "parks-and-recreation"

The outer replace() takes the resulting "parks-and-recreation" and finds all of the parts of the string that matches "-" and replaces with a space (" "). Leading to the final value of "parks and recreation"

---

### split

Breaks a variable into smaller fragments given a specific delimiter

#### split Example

```
{
 "_e":"preferences-set",
  "favorite-genres":"mystery|science fiction|fantasy",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
set( split(`favorite-genres`, "|"))
```

```
[
"fantasy",
"mystery",
"science fiction"
]
```

**Breaking down the Example**

The split() splits the incoming value associated with the favorite-genres key at each of the "|" characters the value contains.

Because split() will split the value into fragments that are stored as an array, you will need to map it to a field that is a set data type (\[\]string or \[\]time) and you will also want to wrap set() (for strings) or totimeset() (for datetimes) around the function.

The order of a set of strings resulting from the **split** function will be alphabetical. The order of a set of datetimes resulting from the **split** function will be oldest to latest. However, if you use an array.index function to pull out a value based on position, the originally passed order will be referenced.

---

### strip

Strip removes leading and trailing whitespace (spaces, tabs, newline, carriage-return) from strings, or arrays of strings.

#### strip Example

```
{
  "_e":"preferences-set",
  "favorite-sub-genres":"detective fiction | cozy mystery | space opera | steampunk",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
strip( split(`favorite-sub-genres`, "|"))
```

```
[
"detective fiction",
"cozy mystery",
"space opera",
"steampunk"
]
```

**Breaking down the Example**

The split() function splits the incoming value associated with the favorite-sub-genres key at each of the "|" characters the value contain. In this example it will create 4 strings that are stored in an array output alphabetical order.

The strip() function then removes the leading and trailing spaces around each of the strings within the array.

---

### string.lowercase

Convert strings to lower case

#### string.lowercase Example

```
{
  "_e":"registration",
  "vehical_make":"DMC",
  "vehical_model":"DeLorean",
  "plate_number":"outatime",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
string.lowercase(`vehical_make`)
```

```
dmc
```

**Breaking down the Example**

The string.lowercase() function looks at each character in the string value and converts to the lowercase equivalent.

---

### string.uppercase

Convert strings to upper case

#### string.uppercase Example

```
{
  "_e":"registration",
  "vehical_make":"DMC",
  "vehical_model":"DeLorean",
  "plate_number":"outatime",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
string.uppercase(`plate_number`)
```

```
OUTATIME
```

**Breaking down the Example**

The string.uppercase() function looks at each character in the string value and converts to the uppercase equivalent.

---

### string.titlecase

Convert strings to title case

#### string.titlecase Example

```
{
  "_e":"profile-completed",
  "full_name":"ARTHUR DENT",
  "_uid":"0123-4567-8901-2345-6789"
}
```

```
string.titlecase( string.lowercase(`full_name`))
```

```
Arthur Dent
```

**Note:** Using string.titlecase() only operates on the first character of each "word" in the string, and thus will always require that you first convert the string to lowercase using string.lowercase()for the full traditional titlecase conversion.

**Breaking down the Example**

Using the string.lowercase() will first normalize the incoming string by converting it to lowercase.

Wrapping the string.titlecase() will then convert the string into title case.

---

### string.index

Find position of substring within a string, return ordinal starting position.

#### string.index Example

```
{
	"numberString":"0123456789",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
string.index(`numberString`, "1")
```

```
1
```

**Breaking down the Example**

string.index() utilizes a '0' based index, so the first character in the string is at index 0, and the "1" being the second character in the string is at index 1

---

### string.substr

Extract a string from a string using positional start/end.

#### string.substr Example

```
{
	"numberString":"0123456789",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
string.substr(`numberString`, 3, 7)
```

```
3456
```

**Breaking down the Example**

string.substr() utilizes a '0' based index and returns the substring of the provided string, starting at the provided start index up to but not including the end index. The end index is optional here, and will return from the start index through the remainder of the string.

-   string.substr("android",0,3) => "and"
-   string.substr("android",2) => "droid"

---

### contains

Does this value contain this string? Is a sub-string match, not full match (eq)

#### contains Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
contains(`stringExample`, "string")
```

```
true
```

**Breaking down the Example**

The contains() function takes 2 arguments, the field (or raw string) to be searched, and the substring to search for. In this example the value for the stringExample field is searched for the substring "string", and being found returns the boolean value true

---

### hasprefix

Does this value start with this string?

#### hasprefix Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hasprefix(`stringExample`, "This is a string")
```

```
true
```

**Breaking down the Example**

The hasprefix() function takes 2 arguments, the field (or raw string) to be searched, and the substring to check for a match starting at index 0 of the 1st argument. In this example the value for the stringExample field is checked for the substring "This is a string", and being found to match as the prefix returns the boolean value true

---

### hassuffix

Does this value end with this string?

#### hassuffix Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hassuffix(`stringExample`, "as an example")
```

```
true
```

**Breaking down the Example**

The hassuffix() function takes 2 arguments, the field (or raw string) to be searched, and the substring to check for a match to end the 1st argument. In this example the value for the stringExample field is checked for the substring "as an example", and being found to match as the suffix returns the boolean value true

---

### regex.match

Does this value match the supplied regular expression? Returns the boolean value true if the pattern is found anywhere in the string, otherwise false. Patterns use [RE2 syntax](https://github.com/google/re2/wiki/Syntax) (the same engine Go's regexp package uses).

#### regex.match Example

```
{
	"sku":"ABC-12345",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
regex.match(`sku`, "^[A-Z]{3}-[0-9]{5}$")
```

```
true
```

**Breaking down the Example**

The regex.match() function takes 2 arguments: the field (or raw string) to test, and a regular expression pattern (a string). In this example the value for the sku field is tested against the pattern ^\[A-Z\]{3}-\[0-9\]{5}$, which requires three uppercase letters, a hyphen, then five digits. The value ABC-12345 satisfies the pattern, so the function returns the boolean value true.

**Note:** The match is **not** anchored by default — regex.match() returns true if the pattern matches any part of the value. Use the ^ and $ anchors (as in the example above) when you need to match the entire value. The second argument must be a valid regular expression; an invalid pattern or a non-string first argument will cause the expression to error rather than return false.



---

---

## Hash & Encoding Functions

You can apply hash functions to encode incoming data.

---

### hash.sip

Hash the given value using sip hash to integer output.

#### hash.sip Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hash.sip(`stringExample`)
```

```
-1913777820508603599
```

---

### hash.md5

Hash the given value using md5.

#### hash.md5 Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hash.md5(`stringExample`)
```

```
b6c4db114d07e225a8d9d77e47779f5c
```

---

### hash.sha1

Hash the given value using sha1.

#### hash.sha1 Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hash.sha1(`stringExample`)
```

```
1fe04eb0f9ffd1df677657c914f42b68fff9e0cb
```

---

### hash.sha256

Hash the given value using sha256.

#### hash.sha256 Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hash.sha256(`stringExample`)
```

```
e2f7ae28b1c04104c11ee09ab4ab79ca20da6ac4e665c13f1b91be2f02b0f986
```

---

### hash.sha512

Hash the given value using sha512.

#### hash.sha512 Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hash.sha512(`stringExample`)
```

```
e0771e85eeb0ed73b38df14f42e2c20c6755356c1f1222bcd8d661503645e3659460f3bf668af527b75c1373fc419dd4f8e8493692fb0ca17329f1232898b7ca
```

---

### encoding.b64encode

base64 encode.

#### encoding.b64encode Example

```
{
	"stringExample":"This is a string being used as an example",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
encoding.b64encode(`stringExample`)
```

```
VGhpcyBpcyBhIHN0cmluZyBiZWluZyB1c2VkIGFzIGFuIGV4YW1wbGU=
```

---

### encoding.b64decode(field)

base64 decode.

#### encoding.b64decode Example

```
{
	"stringExample":"VGhpcyBpcyBhIHN0cmluZyBiZWluZyB1c2VkIGFzIGFuIGV4YW1wbGU=",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
encoding.b64decode(`stringExample`)
```

```
This is a string being used as an example
```



---

---

## Casting & Conversion

These functions allow you to cast and convert data into different types.\\ note: for [**todate**](#todate) conversion, see the Date / Time section below.

---

### toint

Converts strings to integers. Useful for converting a string to a number before applying a number-based expression

#### toint Example

```
{
	"stringOne":"1.7",
	"stringTwo":"2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
sum(toint(`stringOne`), toint(`stringTwo`))
```

```
3
```

**Breaking down the Example**

Here we have a summation function applying to the result of converting two different string fields to int(s) and wrapping them in the sum() function. We first convert the value for stringOne = "1.7" into it's int equivalent 1, then convert the value for stringTwo = "2" into it's int equivalent 2... then the summation result of the two int values is 3

---

### tonumber

Converts string to numbers. Useful for converting a string to a number while needing to keep decimal precision

#### tonumber Example

```
{
	"stringOne":"1.7",
	"stringTwo":"2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
sum(tonumber(`stringOne`), tonumber(`stringTwo`))
```

```
3.7
```

**Breaking down the Example**

Here we have a summation function applying to the result of converting two different string fields to number(s) and wrapping them in the sum() function. We first convert the value for stringOne = "1.7" into it's number equivalent 1.7 (keeping decimal precision), then convert the value for stringTwo = "2" into it's number equivalent 2... then the summation result of the two number values is 3.7

---

### tobool

Casts to boolean:\\ Numeric Values of 0/1 convert to **false**/**true** respectively\\ String Values will convert as:

-   "0", "f", "F", "false", "FALSE", "False" -> **false**
-   "1", "t", "T", "true", "TRUE", "True" -> **true**

#### tobool Example

```
{
	"boolField":"F",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
tobool(`boolField`)
```

```
false
```



---

---

## Map & Set/Array Functions

These functions manipulate map or set fields.\\ note: for the [**len**](#len) function see the String function listed above

---

### filter

Filter out values that match the specified criteria

#### filter Example

```
{
	"sliceField":"red, orange, yellow, green, blue, indigo, violet",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
filter(strip(split(`sliceField`, ",")), "bl*")
```

```
[
	"red",
	"orange",
	"yellow",
	"green",
	"indigo",
	"violet"
]
```

**Breaking Down the Example**

This filter() operates on top of the array built by split()'ing and strip()'ing the sliceField. Once we have our base array, we then apply the filter "bl\*" (in which \* is a wildcard) to match the "blue" value and filter it OUT of the array (returning an array including all the unmatched values)

---

### map

Create an object/map of key-value pairs. Often used to keep map of key (event-name?) to value (last occurrence date?). Or other user level key-value pair data.

#### map Example

```
{
	"listName":"Pretend Campaign",
	"subscribeStatus":"subscribed",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
map(`listName`, `subscribeStatus`)
```

```
{
	"Pretend Campaign": "subscribed"
}
```

---

### match

Match a key, and then keep a map of key/values with the match value removed.

#### match Example

```
{
	"example_a":1,
	"example_b":2,
	"example_c":3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
match("example_")
```

```
{
	"a": "1",
	"b": "2",
	"c": "3"
}
```

**Breaking Down the Example**

The match() function here looks for all keys prefixed with "example\\\_", and finding 3 results, creates a map of key (key suffix) -> value pairs from those results utilizing the suffix of the original keys to write to the map.

---

### mapkeys

Given a map, return a list of strings consisting of the keys from the map

#### mapkeys Example

```
{
	"example_a":1,
	"example_b":2,
	"example_c":3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
mapkeys(match("example_"))
```

```
[
	"b",
	"c",
	"a"
]
```

**Breaking Down the Example**

The mapkeys() function here utilizing the result of the match() statement as it's input map, and returns a list consisting of the keys from that map.

---

### mapvalues

Given a map, return a list of the values (as strings)

### mapvalues Example

```
{
	"example_a":1,
	"example_b":2,
	"example_c":3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
mapvalues(match("example_"))
```

```
[
	"3",
	"1",
	"2"
]
```

**Breaking Down the Example**

The mapvalues() function here utilizes the result of the match() statement as it's input map, and returns a string list consisting of the values from that map.

---

### mapinvert

Given a map, return a map of type map\[string\]string, inverting the keys/values from the initial map

```
{
	"example_a":1,
	"example_b":2,
	"example_c":3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
mapinvert(match("example_"))
```

```
{
	"1": "a",
	"2": "b",
	"3": "c"
}
```

**Breaking Down the Example**

The mapinvert() function here utilizes the result of the match() statement as it's input map, and returns a map (map\\\[string\]string) with each key-> value pair inverted (value->key).

---

### array.index

Cherry pick a single item out of an array

#### array.index Example

```
{
	"fruits": ["apples", "oranges", "peaches"],
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
array.index(`fruits`, 0)
```

```
apples
```

**Breaking Down the Example**

The array.index() function utilizes a 0 indexed array to cherry pick the requested indexes value, in this case 0 being the first indexed item returns "apples".

---

### array.slice

Slice an array of items selecting some subset of them

### array.slice Example

```
{
	"fruits": ["tomato", "apple", "orange", "peach"],
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
array.slice(`fruits`, 1, 4)
```

```
[
	"apple",
	"orange",
	"peach"
]
```

**Breaking Down the Example**

For this example the array.slice() function takes 3 parameters (the 3rd being optional), and returns an array consisting of the subset of the initial array (1st parameter) beginning at the start index (2nd parameter) up to, but not including, the end index (3rd parameter, if not provided then it defaults to the end of the input array). Reminder that these functions utilize 0 indexed arrays, so the index of 1 is actually the 2nd item in the array.

---



---

---

## URL/HTTP & Email Functions

These functions manipulate strings which are URLs or email addresses.

---

### email

Extract email address from "Bob <emailaddress@lytics.io>" format, note that the extracted email addresses are converted to lowercase and checked to ensure the existence of @ symbol as well.

#### email Example

```
{
	"email":"Test <TEST@test.com>",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
email(`email`)
```

```
test@test.com
```

**Breaking Down the Example**

In this example the email() function first extracts the email address of "" from the input (this input can be in the the simplified input already, and will then just apply the second part of the function). Once we have the email address, the function then performs a lowercase operation and checks to ensure the presence of an @ symbol. This check is fairly rudimentary and may change to provide stricter validation in the future.

---

### emailname

Extract _Bob_ from Bob <test@test.com>

#### emailname Example

```
{
	"email":"Test <TEST@test.com>",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
emailname(`email`)
```

```
Test
```

---

### emaildomain

Extract _gmail.com_ from "Bob <emailaddress@gmail.com>" or email@gmail.com

```
{
	"email":"Test <TEST@test.com>",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
emaildomain(`email`)
```

```
test.com
```

---

### url

Checks if URL string is valid and returns URL if true

#### url Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
url(`_url`)
```

```
https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2
```

---

### urlmain

Removes the query string and scheme from the url

#### urlmain Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
urlmain(`_url`)
```

```
subdomain.domain.tld/path/extended_path
```

**Breaking Down the Example**

The urlmain() function here strips the leading scheme ("https\\://") and query string parameters ("?qsparam=p1\\&qsp2=param2") from the provided url.

---

### domain

Extract domain from URL

#### domain Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
domain(`_url`)
```

```
domain.tld
```

---

### host

Extract host from URL

#### host Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
host(`_url`)
```

```
subdomain.domain.tld
```

---

### path

Extract the URL path from the URL

### path Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
path(`_url`)
```

```
/path/extended_path
```

---

### urldecode

Perform URL decoding on a field. (my%20value -> my value)

### urldecode Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?spaced=this%20is%20spaced",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
urldecode(qs(`_url`, "spaced"))
```

```
this is spaced
```

**Breaking Down the Example**

With this example of urldecode() we want to decode the "spaced" query parameter value. To do this we first extract the parameters' value utilizing the qs() function, returning "this%20is%20spaced". We then proceed to use the urldecode() function to convert the "%20" to " ", and have our decoded string of "this is spaced".

---

### urlminusqs

Removes a specific query parameter and it's value from a URL

#### urlminusqs Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsparam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
urlminusqs(`_url`, "qsp2"))
```

```
https://subdomain.domain.tld/path/extended_path?qsparam=p1
```

---

### qs

Extract the query string parameter from URL

#### qs Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsParam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
qs(`_url`, "qsp2"))
```

```
param2
```

**Breaking Down the Example**

Here the qs() function attempts to find the requested query string parameter in the URL and returns it if found. It's important to note here that this function inherently lowercases the URL provided BEFORE attempting to match the query string, where [qs2()](#qs2) will search the raw URL provided without lowercasing. Effectively qs(url, param) == qs2(tolower(url), param)

---

### qs2

Extract a querystring parameter without lowercasing the URL before checking for the parameter

#### qs2 Example

```
{
	"_url": "https://subdomain.domain.tld/path/extended_path?qsParam=p1&qsp2=param2",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
qs2(`_url`, "qsParam"))
```

```
p1
```

---

### useragent

Extract info from user-agent string.

Below examples based on Mozilla/5.0 (X11; Linux x86\_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11

-   useragent(\_ua, "bot") - Extracts True/False is this a bot?
-   useragent(\_ua, "mobile") - Extracts True/False is this mobile?
-   useragent(\_ua, "mozilla") - Extracts "5.0"
-   useragent(\_ua, "platform") - Extracts "X11"
-   useragent(\_ua, "os") - Extracts "Linux x86\\\_64"
-   useragent(\_ua, "engine") - Extracts "Linux x86\\\_64"
-   useragent(\_ua, "engine\_version") - Extracts "AppleWebKit"
-   useragent(\_ua, "browser") - Extracts "Chrome"
-   useragent(\_ua, "browser\_version") - Extracts "23.0.1271.97"
-   useragent.map(\_ua)\- Extract map of all of above.

### useragent Example

```
{
	"_ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
useragent.map(`_ua`)
```

```
{
	"bot": "false",
	"browser": "Chrome",
	"browser_version": "23.0.1271.97",
	"engine": "AppleWebKit",
	"engine_version": "537.11",
	"mobile": "false",
	"mozilla": "5.0",
	"os": "Linux x86_64",
	"platform": "X11"
	}
```

---



---

---

## IP Functions

These functions evaluate strings which are IP addresses.

---

### ipfilter

Evaluate whether an IP address is contained in a given CIDR range. Compatible with both IPv4 and IPv6.

#### ipfilter Example

```
{
	"ip_address":"75.164.253.177",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
ipfilter(`ip_address`, "75.164.253.0/24")
```

```
true
```

## Date & Time Functions

These functions manipulate date fields. Our core [Date Parser](https://github.com/araddon/dateparse) recognizes about 50 date formats, so in general these will operate on _any_ format.\\ If you are using EU dates, you will need to specify the parser format.

---

### now

The current message/event times.

#### now Example

```
{
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
now()
```

```
2024-11-18T17:51:21.483775672Z
```

**Breaking Down the Example**

The event in question contains no attribution defining the date/time of the event, and therefore is processed utilizing the current time as the datetime for the event (The time of this example being "2024-11-18T17:51:21.483775672Z").

---

### epochms

Unix MS of the date stamp on the current message being processed

```
{
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
epochms()
```

```
1731952777954
```

**Breaking Down the Example**

Similar to the now() function, the epochms() function uses the current event's timestamp to produce a result. This time however, we return it's representation as the integer unix seconds (UTC) format.

---

### todate

-   **todate** Converts strings to dates.
    -   Datemath: todate("now-3m") Date math relative to message timestamp.
    -   Parser: todate("02/01/2006") See [Date Parser](https://github.com/araddon/dateparse) for supported formats.
    -   Examples with 2 arguments: todate("02/01/2006","07/04/2014") use [golang's time package](http://golang.org/pkg/time/) formatting
        -   todate("02/01/2006","07/04/2014") Reformats the date 07/04/2014 from US formatting to UK formatting, with the resulting output being 04/07/2014
        -   todate("02/01/2006",date\_field\_name) Outputs date\_field\_name as European format (where 01 is a placeholder for month, 02 is a placeholder for day, and 2006 is a placeholder for year)

#### todate Example

```
{
	"dateExample": "2024-11-15",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
todate(`dateExample`)
```

```
2024-11-15T00:00:00Z
```

---

### todatein

Converts strings to dates whiles specifying a location / timezone. _We still convert back to UTC for storage_

#### todatein Example

```
{
	"dateExample": "2024-11-15",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
todatein(`dateExample`, "America/Los_Angeles")
```

```
2024-11-15T08:00:00Z
```

---

### totimestamp

Convert date(time) to Integer Unix Seconds (UTC)

#### totimestamp Example

```
{
	"dateExample": "2024-11-15",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
totimestamp(`dateExample`)
```

```
1731628800
```

---

### extract

Used to extract parts of a date(time). Example usage on the [strftime](http://strftime.org/) site

#### extract Example

```
{
	"dateExample": "2024-11-15",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
extract(`dateExample`, "%d")
```

```
15
```

---

### yy

Date conversion to YY format, so May 1 2014 is expressed as 14. yy(dob), or yy() for record time stamp

### yy Example

```
{
	"dateExample": "2024-11-15",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
yy(`dateExample`)
```

```
24
```

---

### yymm

String The YYMM date format, so May 1 2014 is expressed as 1405.

```
{
	"dateExample": "2024-11-15",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
yymm(`dateExample`)
```

```
2411
```

---

### mm

Date conversion to Integer month value (alias for [monthofyear](#monthofyear) )

### mm Example

```
{
	"dateExample": "2024-05-18",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
mm(`dateExample`)
```

```
5
```

---

### monthofyear

See [mm](#mm)

---

### dayofweek

Integer representation of the day of the week. (0-6, 0=Sunday, 1=Monday, etc.)

### dayofweek Example

```
{
	"dateExample": "2024-11-18",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
dayofweek(`dateExample`)
```

```
1
```

---

### hourofweek

0-167 Integer representing the hour of the week (12:00-12:59am || 00:00:00-00:59:59 on Sunday is 0 hour)

### hourofweek Example

```
{
	"dateExample": "2024-11-15T00:00:00Z",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hourofweek(`dateExample`)
```

```
120
```

---

### hourofday

Hour of day (12:00-12:59am || 00:00:00-00:59:59 = 0)

### hourofday Example

```
{
	"dateExample": "2024-11-15T00:00:00Z",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
hourofday(`dateExample`)
```

```
0
```

---

### seconds

The Integer number of seconds in a give time (works with datetime as well as (MM:SS)

-   things like seconds("00:30") => 30 and seconds("10:30") => 630

### seconds Example

```
{
	"dateExample": "2024-11-15T00:00:00Z",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
seconds(`dateExample`)
```

```
1731628800
```

---



---

---

## Aggregate Functions

There are a variety of expressions for building document type structures (maps, lists, sets). These are functional expressions but can only be used in Columns.

---

### count

Count of # of occurrences of the specified key

### count Example

```
{
	"key": "value",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": "value_too",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
count(`key`)
```

```
2
```

---

### valuect

Count of # of occurences of each value for a specific key (stored as a map\\\[value\]count)

### valuect Example

```
{
	"key": "value",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": "value_too",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
count(`key`)
```

```
{
	"value": 1,
  "value_too": 1
}
```

---

### sum

Summation of values for a specified key over time

### sum Example

```
{
	"key": 30,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": 3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
sum(`key`)
```

```
33
```

---

### min

Minimum numeric value seen for the specified key over time

### min Example

```
{
	"key": 30,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": 3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
min(`key`)
```

```
3
```

---

### max

Maximum numeric value seen for the specified key over time

### max Example

```
{
	"key": 30,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": 3,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
max(`key`)
```

```
30
```

---

### set

Create a unique list/array of each value seen for this key over time

#### set Example

```
{
	"key": "value",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": "value_too",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
{
	"key": "value",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
set(`key`)
```

```
[
	"value",
  "value_too"
]
```

---



---

---

## Logical Functions

These functions are used for local evaluation (often as conditional statements), and return boolean values (true/false).

---

### all

Checks a list of values (or keys' values), and returns **true** if ALL those values (or keys' values) are non zero-values (keys that are missing from incoming data will result in a false return here).

#### all Example

```
{
	"key": "",
	"key_too":"value_too",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
all(`key`, `key_too`)
```

```
false
```

---

### any

Similar to [all()](#all) , except only requires one of the given parameters to evaluate to true'ish (not a zero-value) for the result to be **true**

#### any Example

```
{
	"key": "",
	"key_too":"value_too",
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
any(`key`, `key_too`)
```

```
true
```

---

### exists

Checks for the existence of a key (or a passed value), and confirms the value (if exists) is not the empty string.

#### exists Example

```
{
	"key": 0,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
exists(`key`)
```

```
true
```

---

### eq

Checks for equality

#### eq Example

```
{
	"key": 0,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
eq(`key`, 0)
```

```
true
```

---

### ne

Inverse of [eq()](#eq)

#### ne Example

```
{
	"key": 0,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
ne(`key`, 0)
```

```
false
```

---

### lt

Checks if the first argument is **less than** the second

#### lt Example

```
{
	"key": 0,
	"key_too": 1,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
lt(`key`, `key_too`)
```

```
true
```

---

### le

Checks if the first argument is **less than OR equal to** the second.

#### le Example

```
{
	"key": 0,
	"key_too": 1,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
le(`key`, `key_too`)
```

```
true
```

---

### gt

Checks if the first argument is **greater than** the second.

#### gt Example

```
{
	"key": 0,
	"key_too": 1,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
gt(`key`, `key_too`)
```

```
false
```

---

### ge

Checks if the first argument is **greater than OR equal to** the second.

#### ge Example

```
{
	"key": 0,
	"key_too": 1,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
ge(`key`, `key_too`)
```

```
false
```

---

### not

Returns the inverse of a boolean valuation (not(false) == true)

### not Example

```
{
	"key": 0,
  "key_too": 1,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
not(eq(`key`, `key_too`))
```

```
true
```

---

### in

Checks if \\ is in the supplied value list

### in Example

```
{
	"key": 0,
	"_uid":"0123-4567-8901-2345-6789"
}
```

```
`key` in (0, 2, 4, 6, 8)
```

```
true
```

---



---

---

## Phone Number

These functions are used for converting phone numbers to a specific format

---

### phone.e164

Converts a phone number to the international E164 format for the specified country. If no country is provided, the system defaults to "US" formatting.

```
{
	"phone_number": "(800) 555-1212",
	"country_code":"US"
}
```

```
phone.e164(`phone_number`, `country_code`)
```

```
+18005551212
```

---



---

---
