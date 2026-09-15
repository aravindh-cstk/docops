---
title: "Fields & Mappings"
description: "User fields and mappings are essential for materializing user profiles in such a way that provides businesses with a comprehensive view of their…"
url: /lytics/fields-mappings
uid: blta18823667efc3639
---

# Fields & Mappings

## Fields & Mappings

## Introduction

User fields and mappings are essential for materializing user profiles in such a way that provides businesses with a comprehensive view of their customers. User fields capture specific attributes and characteristics, while mappings transform and cleanse data for consistency and accuracy. This ensures your profiles are materialized in an ideal way to support highly relevant and personalized marketing campaigns. **It's important to note that fields and mappings should be in place before any data is ingested on a stream.**

### What are fields?

Fields can include demographic data, behavioral data, or any other data point that is relevant to understanding and engaging with customers. In addition, fields themselves are defined by one of many common data types, such as strings, integers, sets, and maps.

![9354a81-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama6dde6910d808734/6390145c27b1216316cbcf5a/9354a81-image.png)

### What are mappings?

Sometimes, you may want to transform or cleanse messy data before it hits a profile. Other times, you may want to perform an operation or aggregation to reflect its usefulness for business decisions or segmentation — like aggregating multiple purchases into a combined lifetime spend metric. In either case, mappings provide the necessary translation layer to ensure each data point collected is clean and consistent. Most importantly, mappings guide the relationship between disparate data points and the final materialized user profile.

![f856ed8-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7d218ab41b4cb802/927c3e62ad2ffd602deca4c3/f856ed8-image.png)

## Managing User Fields

Lytics' profiles are composed of a collection of user fields. These fields have standard metadata (name, description) and typical properties you'd expect from a traditional database column (kind/type, capacity). In addition, each field has a _merge operator_ that describes how we want to combine data from different sources at different times into a single field. For example, a field describing a customer's first purchase date would use a _minimum_ operator to ensure that, regardless of the order in which Lytics sees purchase data, the first purchase date for the field would represent the _earliest_ possible value.

### Creating a User Field

To create a user field, visit Fields under the Schema tab in the main navigation at the left of your window. Here you will find a list of all current field definitions. Clicking on \+ Create New will enter the field creation wizard.

![78016da-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf06f0a63b36a6a3f/6fa10e18897bb844e7747f4c/78016da-image.png)

The field creation wizard has a single step where you will define a few parameters related to your new user field.

-   ID: An alphanumeric key that defines how this user field will be stored on the profile.
-   Short Description: A user-friendly description that will be used throughout the ID to provide additional context to the field.
-   Data Type: The type of data that will be stored in this field.
-   Long Description: An optional long description that provides additional context in a few areas throughout the UI.
-   Categories: An optional categorization for the field in question. This helps further inform the intent of the field and enhances our ability to measure the comprehensiveness of your user profile and overall C360 readiness index (coming soon).
    -   **Identity:** A field to identify a user within Lytics or in a downstream channel tool.
    -   **Governance:** Any context related to consent, governance, etc.
    -   **Interests:** Information supporting surfacing and understanding a consumer's interests, such as a product purchase.
    -   **Behavior:** Interactions to be used in understanding behavioral patterns such as page views and non-conversion-related clicks.
    -   **First Party:** Any standard first-party data.
    -   **Intelligence:** ML/AI-related attributes such as LTV ingested from BigQuery or scores related to Lytics models.
    -   **Activation:** Data points related to supporting or monitoring activation in downstream channels.
-   Merge Operator: How the merge between two different data points mapped to the same field will be handled.
-   Identity Key: A true or false statement identifying if the field should be used as a key to link two or more independent events together.
-   Keep Days: The number of days to keep values for this field.
-   Capacity: The number of values to store in the set.
-   PII (Personally Identifiable Information) Key: A true or false statement identifying if the field is to be considered PII (Personally Identifiable Information).

#### Data Types

**Standard:**

| Data Type | Description |
| --- | --- |
| string | Stores a sequence of characters (letters, numbers, punctuation) with no set limitation for length. |
| integer | Stores positive or negative whole numbers without decimals. 64-bit. |
| number | Stores positive or negative numbers with decimals. 64 bit. |
| boolean | Stores only true or false values. |
| date | Stores datetime. |

**Advanced:**

| Data Type | Description |
| --- | --- |
| \[\]string | Stores an array of unique string values |
| \[\]time | Stores an array of unique datetime values |
| ts\[\]string | Stores a time-ordered unique array of strings (useful for keeping track of the order in which users performed a set of unique events) |
| map\[string\]datatype | Stores a set of key-value pairs. The key is a unique string and the value is the specified data type. The value by default will be the most recent value (with the exception of map\[string\]intsum which sums the new value with the previous value stored in the same key). Examples: map\[string\]string, map\[string\]int, map\[string\]number, map\[string\]bool, map\[string\]time |

#### Merge Operators

Supported merge operators are as follows:

-   Minimum: When comparing two values, take the smallest one.
-   Maximum: When comparing two values, take the largest one.
-   Oldest: When comparing two values, take the one with the oldest timestamp.
-   Latest: When comparing two values, take the one with the most recent timestamp.
-   Merge: When comparing two sets, take the union of the two.
-   Sum: When adding numerics together

#### Capacity and Keep Days

The **keep\\\_days** and **capacity** properties specify the amount of time to keep values, and the number of values to retain in a field with a set or map data type, respectively. Any values in the field older than **keep\\\_days** in the past will be discarded when the profile is evaluated, and no more than **capacity** values will be stored in the set. When values are removed from a field due to exceeding the capacity limit, they are removed in FIFO (first in, first out) order. If **keep\\\_days** or **capacity** are set to 0 or omitted when creating a field, they are ignored.

### Maintaining a User Field

As your schema grows in complexity, keeping an eye on the defined relationships is essential. The field summary provides a window into how a single user field is being populated from various channels. This view is excellent for diagnosing what may be causing a conflict or that things are operating healthily.

![50c2ec4-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc997de32211248ba/36908ff0f6534b2f54588f28/50c2ec4-image.png)

### Deleting User Fields

Sometimes you may want to remove a user field from your schema altogether. This can be done from the field summary pictured above. Click the menu with three docs to the right of Edit Field and you will be presented with a sub-menu. This menu contains a Delete option.

![ceed710-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7bca6023e04b6b34/09967d2fc41245a922de9956/ceed710-image.png)

**Warning:** Deleting a field can have major implications once the change has been published. It is important to understand the implications of deleting a field and how it will impact how data is processed and mapped to user profiles.

#### What happens when I delete a field?

As shown in the screenshot above, selecting and confirming deletion will not have an immediate impact. The delete will request will be referenced in the unpublished version of your schema. You must publish a new version of your schema for the changes to take effect. At that point, it is essential to understand the following:

-   Data previously collected and mapped to that field will no longer be accessible on the user profile.
-   Any existing mappings related to that field will no longer be implemented as new events occur.
-   Any mappings that are associated with this field will need to be independently deleted. Failing to delete associated mappings manually will result in validation errors when attempting to publish the schema version.

## Managing Mappings

Mappings are expressions that provide instructions for how to perform transformations (if any) on raw data. They can range from simple to expressive or even include conditional logic.

Mappings occur when data is processed or observed within Lytics' real-time profile pipeline. Multiple mappings can map data into a single field, where the field's merge operator controls updates.

Let's say we have a user currently visiting the lytics.com website, and we observe the following data sent from JSTag:

```
{
  "email_address": "hello@lytics.com",
  "_uid": "123e4567-e89b-12d3-a456-426614174000",
  "utm_campaign": "exciting_campaign",
  "url": "www.lytics.com/get-started",
  "event_type": "page-view"
}
```

Based on the data from the event, we might consider some of the following mappings:

-   email\_address: no transformation performed, and takes the value of the email as-is.
-   email(email\_address): use the email function to validate that the email address is syntactically valid.
-   email(oneof(email\_address, emailAddress)): coalesce either email\\\_address or emailAddress to extract the value of the email address.
-   count(event\_type) IF event\_type == "page-view": sets up a counter to track page views, only if the event is of type "page-view".

### Creating a Mapping

To create a mapping visit Mappings under the Schema tab in the main navigation at the left of your window. Here you will find a list of all current mapping definitions. Clicking on \+ Create New will enter the mapping creation wizard.

![1e4e090-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am547c6bda51851004/99f44877e10cb5d530f038f3/1e4e090-image.png)

The mapping creation wizard has a single step where you will define a few parameters related to your new mapping.

-   Stream: The name of the stream for which to apply the mapping to.
-   Expression: The rules to apply to the mapping.
-   Condition: An optional condition statement of when to apply the mapping.

![7d9c752-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5f93acdca9c4e6d5/ddb64e642b492664f513733e/7d9c752-image.png)

### Maintaining Mappings

Since mappings depend on the data available to a stream, monitoring that things are working as desired is important. For instance, if a key changes or stops streaming entirely, it may negatively impact your profiles and, ultimately, your marketing efforts. As such, the mapping summary view is available to review the health of mappings and provide a path for editing mappings in the future if necessary.

### Deleting Mappings

Sometimes you may want to remove a mapping from your schema altogether. This can be done from the mapping summary pictured above. Simply click the menu with three docs to the right of Edit Mapping and you will be presented with a sub-menu. This menu contains a Delete option.

![d35df4c-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am13c196c5582f5667/0c712b12172eaab83886b01a/d35df4c-image.png)

**Warning:** Deleting a mapping can have major implications once the change has been published. It is important to understand the implications of deleting a mapping and how it will impact how data is processed and mapped to user profiles.

##### What happens when I delete a mapping?

As shown in the screenshot above, selecting and confirming deletion will not have an immediate impact. The delete will request will be referenced in the unpublished version of your schema. You must publish a new version of your schema for the changes to take effect. At that point, it is crucial to understand the following:

-   Data previously collected via the mapping being deleted will remain on the profile as mapping changes only impact event processing from when the change has been published.
-   Fields associated with the mapping will not be impacted or deleted.
