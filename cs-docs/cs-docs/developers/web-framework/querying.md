---
title: "[Web Framework] - Querying"
description: Querying published content from your stack in Contentstack using contentstack-express web framework query methods.
url: https://www.contentstack.com/docs/developers/web-framework/querying
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Querying

This page explains how to use queries in the contentstack-express web framework to fetch published content from a Contentstack stack, including basic and advanced query methods and their return values. It is intended for developers building websites with the (deprecated) web framework and should be used when implementing filtering, searching, sorting, pagination, and reference-related query behavior.

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

Queries are requests that help you fetch published [content](../../content-managers/author-content/about-entries.md) from your [stack](../set-up-stack/about-stack.md) in Contentstack. You can apply filters or perform custom search to get the required content for your website using these queries.

Let us look at some of the basic queries and advanced queries.

## Basic Queries

### lessThan

This method provides only the entries with values less than the specified value for a field.

**Parameters**

- key  
  UID of the field that is to be taken into consideration
- value  
  The value used to match or compare

**Example**

```
blogQuery.lessThan('created_at','2015-06-22')
```

### includeCount

This method also includes the total number of entries returned in the response.

**Example**

```
blogQuery.includeCount()
```

### regex

This method provides only the entries matching the regular expression for the specified field.

**Parameters**

- key  
  UID of the field that is to be taken into consideration
- value  
  The value used to match or compare
- options  
  <optional>  
  match or compare value in entry

**Examples**

.regex without options

```
blogQuery.regex('title','/^Demo/')
```

.regex with options

```
blogQuery.regex('title','/^Demo/', 'i')
```

Contentstack provides several other queries for fetching content in a customized manner. We have covered all of them in the following section.

## Advanced Queries

### .find() [mandatory]

This method fetches a list of entries that satisfy the specified query. Filters such as `.query()` can be applied to limit the response.

```
app.extends().get('/find', function(req, res, next) {
    return Stack.ContentType('demo').Query().language('en-us').find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .toJSON() [optional]

This method fetches plain JavaScript objects. If not specified, a wrapper is run around each object that is returned.

```
app.extends().get('/find', function(req, res, next) {
    return Stack.ContentType('demo').Query().language('en-us').toJSON().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .fetch() [mandatory]

 This method fetches a single entry. Specify either the entry’s UID or use .where() to filter out a single entry.

```
app.extends().get('/fetch', function(req, res, next) {
    return Stack.ContentType('demo').Entry('').language('en-us').fetch().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .language('code')[optional]

This method is used to set the language code. The entries of the set language are retrieved. If not specified, the entries are fetched from the master language.

```
app.extends().get('/fetch', function(req, res, next) {
    return Stack.ContentType('demo').Entry('').language('en-us').fetch().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .lessThan('key', 'value')[optional]

This method retrieves entries where a field value is less than the specified value.

```
app.extends().get('/lessThan', function(req, res, next) {
    return Stack.ContentType('demo').Query().lessThan('number', 2).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .greaterThan('key', 'value')[optional]

This method retrieves entries where a specific field value is greater than the specified value.

```
app.extends().get('/greaterThan', function(req, res, next) {
    return Stack.ContentType('demo').Query().greaterThan('number', 2).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .notEqualTo('key', 'value')[optional]

This method retrieves entries where a specific field value is not equal to a specified value.

```
app.extends().get('/notEqualTo', function(req, res, next) {
    return Stack.ContentType('demo').Query().notEqualTo('number', 2).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .containedIn('key', 'values')[optional]

This method retrieves entries with fields having values that match to the specified set of values.

```
app.extends().get('/containedIn', function(req, res, next) {
    return Stack.ContentType('demo').Query().containedIn('number', [2]).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .notContainedIn('key', 'values')[optional]

This method retrieves entries with fields having values that do not match the specified set of values.

```
app.extends().get('/notContainedIn', function(req, res, next) {
    return Stack.ContentType('demo').Query().notContainedIn('number', [2]).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .exists('key')[optional]

This method provides only those entries that contain a field matching the specified UID.

```
app.extends().get('/exists', function(req, res, next) {
    return Stack.ContentType('demo').Query().exists('boolean').find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .notExists('key')[optional]

This method provides only those entries that do not contain the field matching the specified UID.

```
app.extends().get('/notExists', function(req, res, next) {
    return Stack.ContentType('demo').Query().notExists('boolean').find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .ascending('key')[optional]

This parameter sorts the retrieved entries in the ascending order on the basis of a specific field.

```
app.extends().get('/ascending', function(req, res, next) {
    return Stack.ContentType('demo').Query().ascending('number').find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .descending('key')[optional]

This parameter sorts the retrieved entries in the descending order on the basis of a specific field.

```
app.extends().get('/descending', function(req, res, next) {
    return Stack.ContentType('demo').Query().descending('number', [2]).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .skip(value)[optional]

This method skips the specified number of entries.

```
app.extends().get('/skip', function(req, res, next) {
    return Stack.ContentType('demo').Query().skip(1).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .limit(value)[optional]

This method limits the response by providing only the specified number of entries.

```
app.extends().get('/limit', function(req, res, next) {
    return Stack.ContentType('demo').Query().limit(1).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .or(query1, query2)[optional]

This method performs the “OR” operation on the specified query objects and provides only the matching entries.

```
app.extends().get('/or', function(req, res, next) {
    return Stack.ContentType('demo').Query().or({
        '_data.title': 'Demo 4'
    }, {
        '_data.title': 'B5'
    }).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .and(query1, query2)[optional]

This method performs the “AND” operation on the specified query objects and provides only the matching entries.

```
app.extends().get('/and', function(req, res, next) {
    return Stack.ContentType('demo').Query().and({
        '_data.title': 'Demo 4'
    }, {
        '_data.number': 12
    }).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .where(key, value)[optional]

This method provides only the entries matching the specified value for a field. Using “where,” you can query referenced fields.

**Note**: You need to edit the config file and add ‘indexes’. Refer the example below:

```
/**
 * Note
 * Use 'where' to query on 'reference' fields
 * In order to query on 'reference' fields, kindly add the referenced content type's uid in the config's 'indexes'
 * example - config/all.js
 * 'indexes': {
 *   content_type_uid: [''] // Pass content type's fields that you'd want to query on
 *                          // leave it empty, if you'd like to query on any of the content type's fields
 *   ...
 * }
 */
app.extends().get('/where', function(req, res, next) {
    return Stack.ContentType('demo').Query().where('reference.uid', {
        '$in': ['blt4129f010963bee1b', 'bltf0ae2fe2a3a6a8e8']
    }).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .count()[mandatory]

This method provides only the number of entries matching the specified filters.

```
app.extends().get('/count', function(req, res, next) {
    return Stack.ContentType('demo').Query().count().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .query(queryObject)[optional]

This method is used to set raw queries on Query instances. Prefix each of the fields (to be filtered) with “_data.”

```
app.extends().get('/query', function(req, res, next) {
    return Stack.ContentType('demo').Query().query({
        '_data.boolean': true
    }).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .tags(['value1', 'value2'])[optional]

This parameter allows you to specify an array of tags to search objects.

```
app.extends().get('/tags', function(req, res, next) {
    return Stack.ContentType('demo').Query().tags(['one']).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .includeCount()[optional]

This method also includes the total number of entries returned in the response.

```
app.extends().get('/includeCount', function(req, res, next) {
    return Stack.ContentType('demo').Query().includeCount().find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .regex(key, value, options)[optional]

This method provides only the entries matching the regular expression for the specified field.

```
app.extends().get('/regex', function(req, res, next) {
    return Stack.ContentType('demo').Query().regex('title', new RegExp('Demo', 'ig')).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

## contentstack-express specific methods

### .excludeReference()

This method will exclude all references of an entry from the response. It accepts no parameter.

```
app.extends().get('/excludeReference', function(req, res, next) {
    return Stack.ContentType('demo').Query().excludeReference().find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .referenceDepth(value)

This method sets the depth to which an entry’s reference will be fetched. It accepts a numeric value as parameter. In the below example, the reference depth is set to 1, i.e., it will fetch only the entries and its immediate referred entries. However, if the referred entries have references, those will be ignored.

```
app.extends().get('/referenceDepth', function(req, res, next) {
    return Stack.ContentType('demo').Query().referenceDepth(1).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .lessThanEqualTo('field', number)

This method retrieves entries where a field value is less than or equal to the specified value.

```
app.extends().get('/lessThanOrEqualTo', function(req, res, next) {
    return Stack.ContentType('demo').Query().lessThanEqualTo('number', 2).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

### .greaterThanEqualTo('field', number)

This method retrieves entries where a field value is greater than or equal to the specified value.

```
app.extends().get('/greaterThanOrEqualTo', function(req, res, next) {
    return Stack.ContentType('demo').Query().greaterThanEqualTo('number', 2).find().then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});
```

## contentstack-express methods return values

Here are the return values of the contentstack-express methods.

### Fetching a single entry

To fetch a single entry, you can use the code given below:

```
Stack.ContentType(‘demo’).Entry(‘bltsomething123’).fetch().then(entry => {
    /**
     *  The structure of result would be
     *  {
     *     title: ‘entry_demo_1’
     *     ..
     *  }
     **/
}).catch(error => ..);
```

The above code returns the details in JSON.

### Fetching multiple entries

Using the following code you can fetch multiple entries of a particular content type. Here, each method is wrapped around getter-setters.

```
Stack.ContentType(‘demo’).Query().find().then(result => {
    /**
     *  The structure of result would be
     *  [
     *     [
     *       { entry_title_1: “Demo title 1”, … },
     *       { entry_title_2: “Demo title 2”, … },
     *       ...
     *     ]
     *  ]
     *
     *  And the following operation can be done on those objects
     *
     *  result[0].forEach(entry => console.log(entry.get(‘title’));
     **/
}).catch(error => ..);
```

### Fetching multiple entries using “toJSON()”

Unlike the above method, the “toJSON()” method returns your response consisting of the resultant entries in JSON.

```
Stack.ContentType(‘demo’).Query().toJSON().find().then(result => {
    /**
     *  The structure of result would be
     *  [
     *       { entry_title_1: “Demo title 1”, … },
     *       { entry_title_2: “Demo title 2”, … },
     *       ...
     *  ]
     **/
}).catch(error => ..);
```

### Fetching the total number of entries using “count()”

The “count()” method returns a numeric value in the output. Here is how your code looks like:

```
Stack.ContentType(‘demo’).Query().count().then(result => {
    // the result will be a numeric value
}).catch(error => ..);
```

## Common questions

### Is contentstack-express still supported?
**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

### How do I fetch multiple entries versus a single entry?
Use `.find()` to fetch a list of entries and `.fetch()` to fetch a single entry.

### How do I get the total number of entries returned?
Use `.includeCount()` to include the total number of entries returned in the response, or use `.count()` to return only the number of entries matching the specified filters.

### How do I query referenced fields with `.where()`?
**Note**: You need to edit the config file and add ‘indexes’. Refer the example below: