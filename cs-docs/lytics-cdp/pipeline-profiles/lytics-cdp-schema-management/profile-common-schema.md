---
title: "Lytics Profile Schema"
description: "Lytics profiles enjoy access to both a universal schema , which provides computed, intelligent attributes on every profile in Lytics, as well as a common…"
url: /lytics/profile-common-schema
uid: bltacee2be567695b9b
---

# Lytics Profile Schema

## Lytics Profile Schema

Lytics profiles enjoy access to both a [**universal schema**](#universal), which provides computed, intelligent attributes on every profile in Lytics, as well as a [**common schema**](#common), a set of standard attributes that facilitates faster integration and more reliable consistency when integrating profiles to and from other systems.

[Growth](https://www.lytics.com/pricing/#growth) and [Enterprise](https://www.lytics.com/pricing/#enterprise) Lytics accounts may also customize their schema with additional fields and mappings.

## Universal Schema

Lytics' universal schema delivers a set of intelligent attributes that are **universal to every profile** that gets created, regardless of data source, age, or their anonymous or known status.

These attributes include rich behavioral models, AI-derived interests, and identity resolution metadata, leading to more comprehensive insights on all of your profiles. (Not just the known ones!)

Universal attributes provide a common vocabulary with which to think about how you might engage with each and every individual — what they're interested in, what their engagement has been, or how they're likely to engage in the future.

### Identifiers

Identifiers in Lytics Schema serve to stitch profiles together. For instance, if you pass an _email_ along with the \\\_\*uid\*, all events that have only been associated with either identifier will be merged into a single comprehensive profile.

Default identifiers are listed below. Some jobs in your data pipeline may add new identifiers to your schema, like shopify\_customer\_id or salesforce\_contact\_ids.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| \_id | Lytics ID | A unique ID that represents the materialized profile in Lytics. | "4fafb5b3-b199-58f2-a68b-4b266b363dd1" |

### Metafields

Metafields encompass all system-level information that provides insights into the health and breadth of the profile. This includes data such as creation date, last update timestamp, source information, and other metadata associated with the profile's management and maintenance. Metafields offer a behind-the-scenes view of the profile's overall status and administration.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| \_created | Created | The time a profile was created. | "2024-02-28T02:45:51.377423153Z" |
| \_last\_scored | Last Scored Timestamp | The time a profile was last scored by Lytics. | "2024-02-28T02:45:51.377423153Z" |
| \_modified | Modified Timestamp | The time a profile was last modified by Lytics. | "2024-02-28T02:45:51.377423153Z" |
| \_num\_aliases | Number of Aliases | The number of aliases for a profile, as calculated by Lytics' Identity Resolution. | 5 |
| \_num\_days | Number of Days | The number of distinct days a profile has had activity. | 3 |
| \_num\_events | Number of Events | The total number of events processed for a profile. | 81 |
| \_num\_streams | Number of Streams | The number of distinct data streams in which a profile has been present. | 2 |
| \_streamnames | Stream Names | The distinct streams in which a profile has been present. | \["default"\] |

### Behavioral

Behavioral attributes comprise a multidimensional set of scores that provide insight into an individual's behavior over time.

These insights are invaluable when personalizing experiences based on changes in behavior or behaviors indicative of high likelihood. For instance, you might want to present a premium offer to users exhibiting higher momentum than usual.

Behavioral attributes enable targeted and timely interventions tailored to user actions and patterns.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| score\_consistency | Consistency | Measures the long-term consistency of a typical user's daily engagement. | 56 |
| score\_frequency | Frequency | Measures the frequency of a user's engagement, relative to your most frequent users. | 74 |
| score\_intensity | Intensity | Measures the depth of a typical user's daily engagement. | 3 |
| score\_maturity | Maturity | Measures the length of a user's history, relative to your most mature users. | 97 |
| score\_momentum | Momentum | Measures the rate at which user engagement is changing. | 45 |
| score\_propensity | Propensity | Measures how likely a user is to re-engage with more activity. | 91 |
| score\_quantity | Quantity | Measures the quantity of a user's engagement, relative to your most frequent users. | 12 |
| score\_recency | Recency | Measures the recency (over a 1 year window) of a user's engagement. | 28 |
| score\_volatility | Volatility | Measures the long-term volatility of the depth of a typical user's daily engagement. | 63 |

### Interests

Interests entail understanding the topics a user is interested in based on their interactions, cross-referenced by deep programmatic analysis of their online activities. This allows for tailored content recommendations and targeted messaging aligned with the user's preferences and engagement history.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| lytics\_content | Lytics Content | A map of topic-level interests for the user. | {"Shoes":0.76,"Pants":0.43} |

### Intelligence

Attributes classified as intelligence encompass diverse, highly valuable information to facilitate relevant and high-value personalized experiences. Within this category, you'll discover real-time segment membership, values crucial for split testing and experimentation, and direct correlation to our real-time machine learning modeling. These attributes empower dynamic and data-driven decision-making, enhancing the efficacy of personalized marketing strategies.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| \_segments | Segment Membership | The segments or audiences of which on individual is a member. | \\\["all", "anonymous\\\_profiles", "smt\\\_power"\] |
| [\_split](#_split) | Random Split 1 | A randomly assigned value for making randomized audiences and driving experiments. | 0 |
| [\_split2](#_split2) | Random Split 2 | A randomly assigned value for making randomized audiences and driving experiments. | 99 |
| [segment\_prediction](#segment_prediction) | Lytics Predictive Scores | Scores from Lytics SegmentML Predictive Models. | \\{"likely\\\_to\\\_buy\\\_shoes": 0.47} |
| [segment\_prediction\_percentile](#segment_prediction_percentile) | Lytics Preditive Percentiles | Percentiles from Lytics SegmentML Predictive Models. | \\{"likely\\\_to\\\_buy\\\_shoes": 91} |

#### \_split

Random splits are assigned by algorithmic hashing and result in an even distribution across profiles.

There are 100 possible splits (0-99), so creating an audience where \_split = 44 would result in a random subset of 1% of profiles. A random split where \_split < 50 would result in a subset of 50% of profiles.

#### \_split2

Having access to two random split assignments allows you to target 100\\\*100, or 10k different subsets of your audiences.

This means you can create splits that are capable of targeting down to 0.01% of profiles.

#### segment\_prediction

Lytics' SegmentML models provide scores for modeling custom outcomes in Lookalike models. Each active model attaches a score (between 0 and 1) to a profile with its name.

#### segment\_prediction\_percentile

Similar to segment\_prediction values, the percentiles provide the ability to create audiences and target users based on their _percentile_ instead of their raw score. This enables you, for example, to create audiences of users with the top 10% of scores (by using segment\_prediction\_percentile > 90).

## Common Schema

Common \[fields\]() help to structure your profiles in a way for developers to easily plug into them, and for marketers to easily use them in personalization.

Common \[mappings\]() help to translate your source data into a format that can be used by common fields.

These fields and mappings help to provide consistency in your profiles, regardless of the source from which the data came.

For example, your CRM might have "tax\_exempt": "true", while your data warehouse might has "tax\_status": "exempt", and your ESP might have "is\_tax\_exempt": 1. In Lytics' Common Schema, this would simply be represented as ["tax\_exempt": true](#tax_status).

#### Pre-defined Mappings

For your convenience, Jobs managed in your Data Pipeline will automatically create schema fields and mappings to implement Lytics Common Schema in your data so that you can get to more use cases more quickly with our [Inspiration Library](/docs/lytics/inspiration-library).

Some fields, like [name](#name), are automatically part of every Lytics account.

Other channel-specific fields will be added when you add channel-specific data sources to your account. For example, adding a Shopify import job to your data sources would add the common schema field [purchase\_total](#purchase_total), among others.

### Identifiers

Identifiers in Lytics Schema serve to stitch profiles together. For instance, if you pass an _email_ along with the \\\_\*uid\*, all events that have only been associated with either identifier will be merged into a single comprehensive profile.

Default identifiers are listed below. Some jobs in your data pipeline may add new identifiers to your schema, like shopify\_customer\_id or salesforce\_contact\_ids.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| \_uids | Web Cookie Id: All | All cookies associated with a profile. | \["50b772f5-a0be-42f2-8828-84b8db5d5a23"\] |
| [email](#email) | Email Address | Email address of a profile. | "test@lytics.com" |
| [email\_sha256](#email_sha256) | Email Address: Hash (SHA256) | SHA256 hash of the profile's email address. | "e43763399e5318f14cd7473c4902a6b319343d577ec8283898a5edf9dbc6d711" |
| [external\_id](#external_id) | External ID | An identifier to link a profile to custom sources. | "abc123" |

#### \_uids

```
jstag.send({
  "_uid": "50b772f5-a0be-42f2-8828-84b8db5d5a23"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "_uid": "50b772f5-a0be-42f2-8828-84b8db5d5a23"
}'
```

```
echo '{
  "_uid": "50b772f5-a0be-42f2-8828-84b8db5d5a23"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "_uid": "50b772f5-a0be-42f2-8828-84b8db5d5a23"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### email

An individual's email address is automatically standardized (syntactically validated and lower-cased) so as to be compatible as an identifier in your identity graph.

```
jstag.send({
  "email_address": "test@lytics.com"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "email_address": "test@lytics.com"
}'
```

```
echo '{
  "email_address": "test@lytics.com"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "email_address": "test@lytics.com"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### email\_sha256

The SHA256 hash of an individual's email address. In the event that your account has an email address present, the hash is automatically computed so as to be compatible with external systems that require the SHA256 hash for integration. In the event that you don't want any PII in your account, you can pass the hash directly instead of the raw address.

```
jstag.send({
  "email_address": "test@lytics.com"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "email_address": "test@lytics.com"
}'
```

```
echo '{
  "email_address": "test@lytics.com"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "email_address": "test@lytics.com"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### external\_id

Optional, and if provided, this will usually come from your proprietary, first-party database. This will be used for profile stitching and should therefore be unique to an individual.

```
jstag.send({
  "external_id": "abc123"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "external_id": "abc123"
}'
```

```
echo '{
  "external_id": "abc123"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "external_id": "abc123"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Interests

Interests entail understanding the topics a user is interested in based on their interactions, cross-referenced by deep programmatic analysis of their online activities. This allows for tailored content recommendations and targeted messaging aligned with the user's preferences and engagement history.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| [hashedurls](#hashedurls) | Hashed URLs | A map of URLs an individual has engaged with, indexed by each URL's hashed value. | {"hashedurls":{"4058474390481920149":5,"680176754148162020":2}} |

#### hashedurls

A history of an individual's most recently visited URLs, helpful for powering Lytics' Context Layers. A siphash of each URL's sanitized value (without query parameters) is used to index the map.

hashedurls are used in Lytics' standard Context Layer, but you can create additional Context Layers with other sets of URLs, product IDs, or atomic content IDs from your CMS.

```
jstag.send({
  "url": "www.lytics.com/blog/real-talk-about-real-time-cdps/"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "url": "www.lytics.com/blog/real-talk-about-real-time-cdps/"
}'
```

```
echo '{
  "url": "www.lytics.com/blog/real-talk-about-real-time-cdps/"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "url": "www.lytics.com/blog/real-talk-about-real-time-cdps/"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Intelligence

Attributes classified as intelligence encompass diverse, highly valuable information to facilitate relevant and high-value personalized experiences. Within this category, you'll discover real-time segment membership, values crucial for split testing and experimentation, and direct correlation to our real-time machine learning modeling. These attributes empower dynamic and data-driven decision-making, enhancing the efficacy of personalized marketing strategies.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| next\_event | Next Event | Stream-specific preditions for the timestamp of the next expected interaction on a stream. | \\\\ |
| [needs\_message](#needs_message) | Needs Message | Stream-specific score to predict how much an individual "needs" a message on a data stream. | \\\\ |

#### needs\_message

The "needs message" score evaluates how likely an individual is to engage on a channel without any messaging.

A higher score would indicate that an individual is less likely to return within a typical engagement window (relative to other individuals in a data stream). A lower score would indicate that they are more likely to return within a typical engagement window.

### Details

Details encompass all default attributes related to user demographics and general information, including name, phone number, status, etc. It serves as a catch-all for attributes not specifically tied to interactions or behaviors.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| first\_name | First Name | An individual's first name. | "Jane" |
| last\_name | Last Name | An individual's last name. | "Doe" |
| [name](#name) | Name | An individual's name. | "Jane Doe" |
| birthday | Birthday | An individual's birthday. | "July 22" |
| birthday | Date of Birth | An individual's exact date of birth. | "2000-07-22" |
| phone | Phone Number | In most cases, this will be automatically formatted in [E164](https://find-ref-url.com) format. | "+15555555555" |
| phone\_mobile | Mobile Phone Number | In most cases, this will be automatically formatted in [E164](https://find-ref-url.com) format. | "+15555555555" |
| address1 | Address 1 | First line of customer address. | "30 Rockefeller Plaza" |
| address2 | Address 2 | Second line of customer address. | "Suite 1000" |
| city | City | This will usually correspond to a contact-provided value -- registration, shipping address, etc. | "New York" |
| region | Region, State or Province | This will usually correspond to a contact-provided value -- registration, shipping address, etc. | "NY" |
| country | Country | This will usually correspond to a contact-provided value -- registration, shipping address, etc. | "USA" |
| postal\_code | Postal Code | This will usually correspond to a contact-provided value -- registration, shipping address, etc. | "10112" |
| status | Profile Status | This may be used to indicate a generic customer status -- active, churned, premium, unknown, etc. | "active" |

#### first\_name

```
jstag.send({
  "first_name": "Jane"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "first_name": "Jane"
}'
```

```
echo '{
  "first_name": "Jane"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "first_name": "Jane"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### last\_name

```
jstag.send({
  "last_name": "Doe"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "last_name": "Doe"
}'
```

```
echo '{
  "last_name": "Doe"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "last_name": "Doe"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### name

An individual's name may take a few forms, depending on the source, and this field may sometimes be just the first name, a combination of names, or completely empty.

```
jstag.send({
  "name": "Jane Doe"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "name": "Jane Doe"
}'
```

```
echo '{
  "name": "Jane Doe"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "name": "Jane Doe"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### birthday

```
jstag.send({
  "birthday": "July 22"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "birthday": "July 22"
}'
```

```
echo '{
  "birthday": "July 22"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "birthday": "July 22"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### birthday

```
jstag.send({
  "dob": "2000-07-22"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "dob": "2000-07-22"
}'
```

```
echo '{
  "dob": "2000-07-22"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "dob": "2000-07-22"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### phone

```
jstag.send({
  "phone": "555-555-5555"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "phone": "555-555-5555"
}'
```

```
echo '{
  "phone": "555-555-5555"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "phone": "555-555-5555"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### phone\_mobile

```
jstag.send({
  "mobile": "555-555-5555"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "mobile": "555-555-5555"
}'
```

```
echo '{
  "mobile": "555-555-5555"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "mobile": "555-555-5555"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### address1

```
jstag.send({
  "address1": "30 Rockefeller Plaza"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "address1": "30 Rockefeller Plaza"
}'
```

```
echo '{
  "address1": "30 Rockefeller Plaza"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "address1": "30 Rockefeller Plaza"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### address2

```
jstag.send({
  "address2": "Suite 1000"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "address2": "Suite 1000"
}'
```

```
echo '{
  "address2": "Suite 1000"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "address2": "Suite 1000"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### city

```
jstag.send({
  "city": "New York"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "city": "New York"
}'
```

```
echo '{
  "city": "New York"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "city": "New York"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### region

```
jstag.send({
  "region": "NY"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "region": "NY"
}'
```

```
echo '{
  "region": "NY"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "region": "NY"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### country

```
jstag.send({
  "country": "United States"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "country": "United States"
}'
```

```
echo '{
  "country": "United States"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "country": "United States"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### postal\_code

```
jstag.send({
  "postal_code": "10112"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "postal_code": "10112"
}'
```

```
echo '{
  "postal_code": "10112"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "postal_code": "10112"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### status

```
jstag.send({
  "status": "active"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "status": "active"
}'
```

```
echo '{
  "status": "active"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "status": "active"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Geo

Geolocation attributes are inferred from geolocation on network activity.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| geoip\_location | GeoIP: Location | Latitude, longitude and accuracy of an individual's most recently collected IP address. | {"lat": 47.6062, "long": -122.3321,, "accuracy": 123.0} |
| geoip\_org | GeoIP: Organization | Organization inferred from the most recently observed IP address for an individual. This may correspond to a business name, or an internet service provider in the case of residential IP addresses. | "Acme Corp." |
| geoip\_country | GeoIP: Country | Country inferred from the most recently observed IP address for an individual. | "USA" |
| geoip\_city | GeoIP: City | City inferred from the most recently observed IP address for an individual. | "New York" |
| geoip\_region | GeoIP: Region | Region, state, or province inferred from the most recently observed IP address for an individual. | "NY" |
| designated\_market\_area | Designated Market Area | An individual's designated marketing area. | "New York" |
| timezone | Timezone | Timezone associated with an individual's browser or location. | "-4" |

#### geolocation

```
jstag.send({
  "ip_address": "192.168.0.1"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "ip_address": "192.168.0.1"
}'
```

```
echo '{
  "ip_address": "192.168.0.1"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "ip_address": "192.168.0.1"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### geoip\_org

```
jstag.send({
  "ip_address": "192.168.0.1"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "ip_address": "192.168.0.1"
}'
```

```
echo '{
  "ip_address": "192.168.0.1"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "ip_address": "192.168.0.1"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### geoip\_country

```
jstag.send({
  "ip_address": "192.168.0.2"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "ip_address": "192.168.0.2"
}'
```

```
echo '{
  "ip_address": "192.168.0.2"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "ip_address": "192.168.0.2"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### geoip\_city

```
jstag.send({
  "ip_address": "192.168.0.3"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "ip_address": "192.168.0.3"
}'
```

```
echo '{
  "ip_address": "192.168.0.3"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "ip_address": "192.168.0.3"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### geoip\_region

```
jstag.send({
  "ip_address": "192.168.0.4"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "ip_address": "192.168.0.4"
}'
```

```
echo '{
  "ip_address": "192.168.0.4"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "ip_address": "192.168.0.4"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### designated\_market\_area

```
jstag.send({
  "dma": "New York"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "dma": "New York"
}'
```

```
echo '{
  "dma": "New York"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "dma": "New York"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### timezone

```
jstag.send({
  "timezone": "-4"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "timezone": "-4"
}'
```

```
echo '{
  "timezone": "-4"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "timezone": "-4"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Device

Device attributes describe the devices that have been associated with an individual and their activity.

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| device\_id | Device ID: Most Recent | An individual's most recent device ID. | "555837ca-cce7-496c-8acc-552793ce969a" |
| device\_ids | Device ID: All | The collection of all of an individual's observed device IDs. | \\\["555837ca-cce7-496c-8acc-552793ce969a"\] |
| [device\_advertising\_id](#device_advertising_id) | Device Advertising ID: Most Recent | An individual's most recent device ID. | "AB1234CD-E123-12FG-J123" |
| [device\_advertising\_ids](#device_advertising_ids) | Device Advertising ID: All | The collection of all of an individual's device IDs. | \\\["AB1234CD-E123-12FG-J123"\] |
| device\_types | Device: Types | The collection of all of an individual's observed device types. | \\{"desktop": 1, "mobile": 100} |
| user\_agent | User Agent | The most recent user agent of an individual's browser. | "Mozilla/5.0 (Macintosh; Intel Mac OS X 10\\\_15\\\_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36" |
| is\_mobile | Mobile Visitor | A flag to indicate if the user has ever been a mobile visitor. | "FALSE" |
| is\_bot | Is Bot | A flag to indicate whether or not an individual is suspected of being a bot (determined by their user agent). | "FALSE" |
| device\_os | Device: OS | The operating system of an individual's most recent device. | "iOS" |
| device\_model | Device: Model | The model of an individual's most recent device. | "iPhone 15" |
| [browser\_hash](#browser_hash) | Browser: Computed Hash | The set computed hash of an individual's browsers. | \\\["555837ca-cce7-496c-8acc-552793ce969a"\] |
| browser | Browser: Version | The version of an individual's browser. | "Chrome/130.0.0.0" |

#### device\_id

```
jstag.send("555837ca-cce7-496c-8acc-552793ce969a")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"555837ca-cce7-496c-8acc-552793ce969a"'
```

```
echo '"555837ca-cce7-496c-8acc-552793ce969a"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("555837ca-cce7-496c-8acc-552793ce969a");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### device\_ids

```
jstag.send("555837ca-cce7-496c-8acc-552793ce969a")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"555837ca-cce7-496c-8acc-552793ce969a"'
```

```
echo '"555837ca-cce7-496c-8acc-552793ce969a"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("555837ca-cce7-496c-8acc-552793ce969a");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### device\_advertising\_id

This may be a Google Advertising ID (GAID) or an Apple Identifier for Advertisers (IDFA).

```
jstag.send("AB1234CD-E123-12FG-J123")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"AB1234CD-E123-12FG-J123"'
```

```
echo '"AB1234CD-E123-12FG-J123"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("AB1234CD-E123-12FG-J123");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### device\_advertising\_ids

These may be a Google Advertising ID (GAID) or an Apple Identifier for Advertisers (IDFA).

```
jstag.send("AB1234CD-E123-12FG-J123")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"AB1234CD-E123-12FG-J123"'
```

```
echo '"AB1234CD-E123-12FG-J123"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("AB1234CD-E123-12FG-J123");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### device\_types

```
jstag.send("desktop")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"desktop"'
```

```
echo '"desktop"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("desktop");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### user\_agent

```
jstag.send({
  "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
}'
```

```
echo '{
  "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### is\_mobile

```
jstag.send({
  "_uamob": "f"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "_uamob": "f"
}'
```

```
echo '{
  "_uamob": "f"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "_uamob": "f"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### is\_bot

```
jstag.send({
  "_uabot": "f"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "_uabot": "f"
}'
```

```
echo '{
  "_uabot": "f"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "_uabot": "f"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### device\_os

```
jstag.send({
  "device_os": "iOS"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "device_os": "iOS"
}'
```

```
echo '{
  "device_os": "iOS"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "device_os": "iOS"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### device\_model

```
jstag.send({
  "device_model": "iPhone 15"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "device_model": "iPhone 15"
}'
```

```
echo '{
  "device_model": "iPhone 15"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "device_model": "iPhone 15"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### browser\_hash

While not a default part of your identity graph, this field may be promoted to an identifier to perform identity stitching. This should be performed with caution as it is not guaranteed to be unique and can result in stitching individuals with similarly configured browser.

```
jstag.send({
  "browser_hash": "555837ca-cce7-496c-8acc-552793ce969a"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "browser_hash": "555837ca-cce7-496c-8acc-552793ce969a"
}'
```

```
echo '{
  "browser_hash": "555837ca-cce7-496c-8acc-552793ce969a"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "browser_hash": "555837ca-cce7-496c-8acc-552793ce969a"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### browser

```
jstag.send("Chrome/130.0.0.0")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"Chrome/130.0.0.0"'
```

```
echo '"Chrome/130.0.0.0"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("Chrome/130.0.0.0");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Attribution

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| utm\_campaign | UTM Campaign: Most Recent | An individual's most recently observed UTM campaign. | "mycampaign1" |
| utm\_campaigns | UTM Campaign: All | The set of an individual's N most recently observed UTM campaigns. | \\\["mycampaign1", "mycampaign0"\] |
| utm\_source | UTM Source: Most Recent | An individual's most recently observed UTM source. | "instagram" |
| utm\_sources | UTM Campaign: All | The set of an individual's N most recently observed UTM sources. | \\\["instagram", "google"\] |
| utm\_term | UTM Term: Most Recent | An individual's most recently observed UTM term. | "winter coats" |
| utm\_terms | UTM Campaign: All | The set of an individual's N most recently observed UTM terms. | \\\["winter coats"\] |
| utm\_content | UTM Content: Most Recent | An individual's most recently observed UTM content. | "spanish" |
| utm\_contents | UTM Content: All | The set of an individual's N most recently observed UTM contents. | \\\["spanish"\] |
| utm\_medium | UTM Medium: Most Recent | An individual's most recently observed UTM medium. | "paid" |
| utm\_mediums | UTM Campaign: All | The set of an individual's N most recently observed UTM mediums. | \\\["paid"\] |
| ly\_impressions | Attribution: Impressions | A map of campaign impressions for an individual for Lytics-managed campaigns. | \\{"content-rec-modal": 10} |
| ly\_conversions | Attribution: Conversions | A map of campaign conversions for an individual for Lytics-managed campaigns. | \\{"content-rec-modal": 2} |
| ly\_closes | Attribution: Closes | A map of campaign closes for an individual for Lytics-managed campaigns. | \\{"content-rec-modal": 7} |
| ly\_cancels | Attribution: Cancels | A map of campaign cancels for an individual for Lytics-managed campaigns. | \\{"content-rec-modal": 1} |
| ly\_hover | Attribution: Hovered | A map of campaign hovers for an individual for Lytics-managed campaigns. | \\{"content-rec-modal": 5} |
| conversions\_ts | Conversion Events | A map of conversion events of an individual, by timestamp. | \\{"content-rec-modal": "2024-02-28T02:45:51.377423153Z"} |
| impressions\_ts | Impression Events | A map of impression events of an individual, by timestamp. | \\{"content-rec-modal": "2024-02-28T02:45:51.377423153Z"} |

#### utm\_campaign

```
jstag.send({
  "utm_campaign": "mycampaign1"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_campaign": "mycampaign1"
}'
```

```
echo '{
  "utm_campaign": "mycampaign1"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_campaign": "mycampaign1"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_campaigns

```
jstag.send({
  "utm_campaign": "mycampaign1"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_campaign": "mycampaign1"
}'
```

```
echo '{
  "utm_campaign": "mycampaign1"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_campaign": "mycampaign1"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_source

```
jstag.send({
  "utm_source": "instagram"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_source": "instagram"
}'
```

```
echo '{
  "utm_source": "instagram"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_source": "instagram"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_sources

```
jstag.send({
  "utm_source": "instagram"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_source": "instagram"
}'
```

```
echo '{
  "utm_source": "instagram"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_source": "instagram"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_term

```
jstag.send({
  "utm_term": "winter coats"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_term": "winter coats"
}'
```

```
echo '{
  "utm_term": "winter coats"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_term": "winter coats"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_terms

```
jstag.send({
  "utm_term": "winter coats"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_term": "winter coats"
}'
```

```
echo '{
  "utm_term": "winter coats"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_term": "winter coats"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_content

```
jstag.send({
  "utm_content": "spanish"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_content": "spanish"
}'
```

```
echo '{
  "utm_content": "spanish"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_content": "spanish"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_contents

```
jstag.send({
  "utm_content": "spanish"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_content": "spanish"
}'
```

```
echo '{
  "utm_content": "spanish"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_content": "spanish"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_medium

```
jstag.send({
  "utm_medium": "paid"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_medium": "paid"
}'
```

```
echo '{
  "utm_medium": "paid"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_medium": "paid"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### utm\_mediums

```
jstag.send({
  "utm_medium": "paid"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "utm_medium": "paid"
}'
```

```
echo '{
  "utm_medium": "paid"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "utm_medium": "paid"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### ly\_impressions

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### ly\_conversions

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### ly\_closes

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### ly\_cancels

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### ly\_hover

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### conversions\_ts

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### impressions\_ts

```
jstag.send({
  "pf-widget-id": "content-rec-modal"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "pf-widget-id": "content-rec-modal"
}'
```

```
echo '{
  "pf-widget-id": "content-rec-modal"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "pf-widget-id": "content-rec-modal"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Demographic

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| gender | Gender | An individual's gender. | "F" |
| age | Age | An individual's age. | 38 |
| [locale](#locale) | Locale | An individual's locale, often determined by their browser. | "en\_US" |
| [language](#language) | Language Code | An individual's language, often determined by their browser. | "en" |

#### gender

```
jstag.send({
  "gender": "F"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "gender": "F"
}'
```

```
echo '{
  "gender": "F"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "gender": "F"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### age

```
jstag.send({
  "age": 38
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "age": 38
}'
```

```
echo '{
  "age": 38
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "age": 38
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### locale

An individual's locale is usually a combination of an individual's language code and country code.

```
jstag.send({
  "locale": "en_US"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "locale": "en_US"
}'
```

```
echo '{
  "locale": "en_US"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "locale": "en_US"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### language

An individual's language code, standardized by ISO-639-1 two-letter codes.

```
jstag.send({
  "locale": "en_US"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "locale": "en_US"
}'
```

```
echo '{
  "locale": "en_US"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "locale": "en_US"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### First Party

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| [user\_attributes](#user_attributes) | User Attributes | A map of custom properties for a profile. | \\{"role": "member", "status": "active"} |
| [form\_data](#form_data) | Form Data | A map to store custom form data for a profile. | \\{"field1": "value1", "field2": "value2"} |

#### user\_attributes

User Attributes are helpful for storing custom attributes about an individual without having to create and map additional user fields.

```
jstag.send({
  "attr": {
    "status": "active"
  }
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "attr": {
    "status": "active"
  }
}'
```

```
echo '{
  "attr": {
    "status": "active"
  }
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "attr": {
    "status": "active"
  }
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### form\_data

Form Data is helpful for storing custom form data from an individual without having to create and map additional user fields.

```
jstag.send({
  "form": {
    "field1": "value1"
  }
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "form": {
    "field1": "value1"
  }
}'
```

```
echo '{
  "form": {
    "field1": "value1"
  }
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "form": {
    "field1": "value1"
  }
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Behaviors

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| [hourly](#hourly) | Activity by Hour | A count of an individual's activity by the hour of the day. | \\{"9": 1, "12": 4, "22": 1} |
| [hourofweek](#hourofweek) | Activity by Hour of Week | A count of an individual's activity by the hour of the week. | \\{"2": 2, "140": 3, "167": 9} |

#### hourly

hourly utilized the timestamp of the event being collected, and does not require any mappings.

```
jstag.send({
  "foo": "bar"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "foo": "bar"
}'
```

```
echo '{
  "foo": "bar"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "foo": "bar"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### hourofweek

hourofweek utilized the timestamp of the event being collected, and does not require any mappings.

```
jstag.send({
  "foo": "bar"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "foo": "bar"
}'
```

```
echo '{
  "foo": "bar"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "foo": "bar"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Governance

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| [consent\_status](#consent_status) | Consent Status | A map of consented marketing channels, and content status. | \\{"web\\\_necessary": "consented"} |
| [consent\_status\_ts](#consent_status_ts) | Consent Status (Timestamp) | A map of consented marketing channels, and when that status was updated. | \\{"web\\\_necessary": "2024-02-28T02:45:51.377423153Z"} |
| [consent\_status\_source](#consent_status_source) | Consent Status (Source) | A map of consented marketing channels, and the source from which the consent came. | \\{"web\\\_necessary": "onetrust"} |

#### consent\_status

The marketing tracking and activation channels to which an individual has expressly given consent. This typically includes the following values: "email\\\_marketing", "sms\\\_marketing", "push\\\_marketing", "cookies\\\_necessary", "cookies\\\_performance", "web\\\_functional", "web\\\_targeting", "web\\\_social".

```
jstag.send({
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
}'
```

```
echo '{
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### consent\_status\_ts

The time at which the consent has most recently been confirmed.

```
jstag.send({
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
}'
```

```
echo '{
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### consent\_status\_source

The source of the consent status.

```
jstag.send({
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
}'
```

```
echo '{
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "consent": {
    "purpose": "c0001",
    "constented": "true"
  }
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### B2B

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| job\_title | Job Title | An individual's job title. | "CEO" |
| job\_role | Job Role | An individual's job role. | "Executive" |
| company\_name | Company Name | The name of the company at which an individual is employed. | "Lytics, Inc." |
| company\_size | Company Size | The number of employess of the company at which an individual is employed. | 224 |
| company\_revenue | Company Revenue | The annual revenue of the company at which an individual is employed. | 5e+08 |
| company\_industry | Company Industry | The industry of the company at which an individual is employed. | "Healthcare" |
| phone\_business | Business Phone | The phone number of the company at which an individual is employed. | "555-555-5555" |

#### job\_title

```
jstag.send("CEO")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"CEO"'
```

```
echo '"CEO"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("CEO");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### job\_role

```
jstag.send("Executive")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"Executive"'
```

```
echo '"Executive"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("Executive");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### company\_name

```
jstag.send("Lytics, Inc.")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"Lytics, Inc."'
```

```
echo '"Lytics, Inc."' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("Lytics, Inc.");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### company\_size

```
jstag.send(224)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '224'
```

```
echo '224' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(224);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### company\_revenue

```
jstag.send(5e+08)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '5e+08'
```

```
echo '5e+08' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(5e+08);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### company\_industry

```
jstag.send("Healthcare")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"Healthcare"'
```

```
echo '"Healthcare"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("Healthcare");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### phone\_business

```
jstag.send("555-555-5555")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"555-555-5555"'
```

```
echo '"555-555-5555"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("555-555-5555");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Social

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| facebook\_id | Facebook ID | An individual's Facebook ID. | "jane.doe33" |
| twitter\_id | Twitter ID | An individual's X (Twitter) ID. | "potus" |
| pinterest\_id | Pinterest ID | An individual's Pinterest ID. | 1234567891234 |
| linkedin\_id | LinkedIn ID | An Individual's LinkedIn ID. | "jeff-dean-8b212555" |
| tiktok\_id | TikTok ID | An Individual's TikTok ID. | "bts\_official\_bighit" |

#### facebook\_id

```
jstag.send("jane.doe33")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"jane.doe33"'
```

```
echo '"jane.doe33"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("jane.doe33");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### twitter\_id

```
jstag.send("potus")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"potus"'
```

```
echo '"potus"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("potus");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### pinterest\_id

```
jstag.send(1234567891234)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '1234567891234'
```

```
echo '1234567891234' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(1234567891234);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### linkedin\_id

```
jstag.send("jeff-dean-8b212555")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"jeff-dean-8b212555"'
```

```
echo '"jeff-dean-8b212555"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("jeff-dean-8b212555");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### tiktok\_id

```
jstag.send("bts_official_bighit")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"bts_official_bighit"'
```

```
echo '"bts_official_bighit"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("bts_official_bighit");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Channels

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| channel\_activity\_first\_ts | Activity By Channel: First/Oldest | The earliest observed activity for an individual in a channel. | \\{"web": "2024-09-13T20:34:17.546Z"} |
| channel\_activity\_last\_ts | Activity By Channel: Most Recent | The most recently observed activity for an individual in a channel. | \\{"web": "2023-01-11T20:22:57.249Z"} |

#### channel\_activity\_first\_ts

```
jstag.send({
  "channel": "web",
  "timestamp": "2024-09-13T20:34:17.546Z"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "channel": "web",
  "timestamp": "2024-09-13T20:34:17.546Z"
}'
```

```
echo '{
  "channel": "web",
  "timestamp": "2024-09-13T20:34:17.546Z"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "channel": "web",
  "timestamp": "2024-09-13T20:34:17.546Z"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### channel\_activity\_last\_ts

```
jstag.send({
  "channel": "web",
  "timestamp": "2023-01-11T20:22:57.249Z"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "channel": "web",
  "timestamp": "2023-01-11T20:22:57.249Z"
}'
```

```
echo '{
  "channel": "web",
  "timestamp": "2023-01-11T20:22:57.249Z"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "channel": "web",
  "timestamp": "2023-01-11T20:22:57.249Z"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Web

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| \_uid | Web Cookie Id: Current | The most recently observed cookie for an individual's browser, as generated by Lytics' JSTag. | "50b772f5-a0be-42f2-8828-84b8db5d5a23" |
| refdomain | Web Referrer Domains | The set of referring web domains for an individual. | \\\["facebook.com"\] |
| action\_web\_count | Web Actions: Count | A set of counts of various activities observed in web sources. | \\{"pageview": 45} |
| action\_web\_ts | Web Actions: Most Recent | A set of the most recent timestamps of various activities observed in the billing sources. | \\{"pageview": "2024-09-10T12:00:00Z"} |
| analytics\_cohorts | Analytics Cohorts | A set of the analytics cohorts of which an individual is a member | \\\["group1", "group2"\] |

#### \_uid

```
jstag.send("50b772f5-a0be-42f2-8828-84b8db5d5a23")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"50b772f5-a0be-42f2-8828-84b8db5d5a23"'
```

```
echo '"50b772f5-a0be-42f2-8828-84b8db5d5a23"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("50b772f5-a0be-42f2-8828-84b8db5d5a23");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### refdomain

```
jstag.send("facebook.com")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"facebook.com"'
```

```
echo '"facebook.com"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("facebook.com");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_web\_count

```
jstag.send({
  "action": "pageview"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "pageview"
}'
```

```
echo '{
  "action": "pageview"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "pageview"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_web\_ts

```
jstag.send({
  "action": "pageview"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "pageview"
}'
```

```
echo '{
  "action": "pageview"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "pageview"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### analytics\_cohorts

```
jstag.send([
  "group1",
  "group2"
])
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '[
  "group1",
  "group2"
]'
```

```
echo '[
  "group1",
  "group2"
]' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify([
  "group1",
  "group2"
]);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Email

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| email\_domain | Email Address: Domain | The domain of an individual's email address (gmail.com, mail.google.com, lytics.com, etc.). | lytics.com |
| email\_list\_ids | Email Lists | The email lists to which an individual is subscribed. | \\{"newsletter": "subscribed"} |
| email\_status | Email Subscriber Status | Optional, provides a generic subscriber status for an individual. | "active" |
| action\_email\_count | Email Actions: Count | A set of counts of various activities observed in email sources. | \\{"open": 45} |
| action\_email\_ts | Email Actions: Most Recent | A set of the most recent timestamps of various activities observed in email sources. | \\{"open": "2024-09-10T12:00:00Z"} |

#### email\_domain

```
jstag.send({
  "email_address": "test@lytics.com"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "email_address": "test@lytics.com"
}'
```

```
echo '{
  "email_address": "test@lytics.com"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "email_address": "test@lytics.com"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### email\_list\_ids

```
jstag.send({
  "list": "newsletter",
  "status": "subscribed"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "list": "newsletter",
  "status": "subscribed"
}'
```

```
echo '{
  "list": "newsletter",
  "status": "subscribed"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "list": "newsletter",
  "status": "subscribed"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### email\_status

```
jstag.send("active")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"active"'
```

```
echo '"active"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("active");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_email\_count

```
jstag.send({
  "action": "open"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "open"
}'
```

```
echo '{
  "action": "open"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "open"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_email\_ts

```
jstag.send({
  "action": "open"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "open"
}'
```

```
echo '{
  "action": "open"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "open"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### SMS

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| action\_sms\_count | SMS Actions: Count | A set of counts of various activities observed in SMS sources. | \\{"send": 45} |
| action\_sms\_ts | SMS Actions: Most Recent | A set of the most recent timestamps of various activities observed in SMS sources. | \\{"send": "2024-09-10T12:00:00Z"} |
| mobile\_carrier | Mobile Carrier | An individual's mobile carrier. | "vodafone" |

#### action\_sms\_count

```
jstag.send({
  "action": "send"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "send"
}'
```

```
echo '{
  "action": "send"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "send"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_sms\_ts

```
jstag.send({
  "action": "send"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "send"
}'
```

```
echo '{
  "action": "send"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "send"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### mobile\_carrier

```
jstag.send("vodafone")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"vodafone"'
```

```
echo '"vodafone"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("vodafone");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### App

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| app\_version | Mobile App: Version | The version of the app an individual is using. | "12.0.1" |
| action\_push\_count | Mobile Push Actions: Count | A set of counts of various activities observed in push sources. | \\{"open": 45} |
| action\_push\_ts | Mobile Push Actions: Most Recent | A set of the most recent timestamps of various activities observed in push sources. | \\{"open": "2024-09-10T12:00:00Z"} |
| action\_app\_count | Mobile App Actions: Count | A set of counts of various activities observed in app sources. | \\{"open": 45} |
| action\_app\_ts | Mobile App Actions: Most Recent | A set of the most recent timestamps of various activities observed in app sources. | \\{"open": "2024-09-10T12:00:00Z"} |

#### app\_version

```
jstag.send("12.0.1")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"12.0.1"'
```

```
echo '"12.0.1"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("12.0.1");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_push\_count

```
jstag.send({
  "action": "open"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "open"
}'
```

```
echo '{
  "action": "open"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "open"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_push\_ts

```
jstag.send({
  "action": "open"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "open"
}'
```

```
echo '{
  "action": "open"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "open"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_app\_count

```
jstag.send({
  "action": "open"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "open"
}'
```

```
echo '{
  "action": "open"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "open"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_app\_ts

```
jstag.send({
  "action": "open"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "open"
}'
```

```
echo '{
  "action": "open"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "open"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Chat

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| action\_chat\_count | Chat Actions: Count | A set of counts of various activities observed in chat sources. | \\{"reply": 45} |
| action\_chat\_ts | Chat Actions: Most Recent | A set of the most recent timestamps of various activities observed in chat sources. | \\{"reply": "2024-09-10T12:00:00Z"} |

#### action\_chat\_count

```
jstag.send({
  "action": "reply"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "reply"
}'
```

```
echo '{
  "action": "reply"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "reply"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_chat\_ts

```
jstag.send({
  "action": "reply"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "reply"
}'
```

```
echo '{
  "action": "reply"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "reply"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Retail

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| tax\_exempt | Tax Exempt | Whether an individual is tax exempt. | FALSE |
| currency | Currency | An individual's most recently used currency. | "usd" |
| purchase\_total | Purchase Total | An individual's total purchase amount from retail sources, in that individual's currency. | 142.01 |
| purchase\_count | Purchase Count | An individual's total number of purchases from retail sources. | 2 |
| purchase\_shop\_total | Purchase Total by Shop | Total amount spent by each shop. | \\{"mystore": 123.45} |
| purchase\_shop\_count | Purchase Count by Shop | Total number of purchases by each shop's name. | \\{"mystore": 2} |
| action\_retail\_count | Retail Actions: Count | A set of counts of various activities observed in retail sources. | \\{"refund": 45} |
| action\_retail\_ts | Retail Actions: Most Recent | A set of the most recent timestamps of various activities observed in retail sources. | \\{"refund": "2024-09-10T12:00:00Z"} |
| product\_ids | Product IDs Ordered | The set of product IDs an individual has ordered. | \\\["abc123"\] |
| order\_ids | Order IDs | The set of order IDs of an individual's order history. | \\\["1294322"\] |

#### tax\_exempt

```
jstag.send("false")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"false"'
```

```
echo '"false"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("false");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### currency

```
jstag.send("usd")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"usd"'
```

```
echo '"usd"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("usd");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### purchase\_total

```
jstag.send(142.01)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '142.01'
```

```
echo '142.01' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(142.01);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### purchase\_count

```
jstag.send(2)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '2'
```

```
echo '2' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(2);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### purchase\_shop\_total

```
jstag.send({
  "shop_name": "mystore",
  "total_spent": 123.45
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "shop_name": "mystore",
  "total_spent": 123.45
}'
```

```
echo '{
  "shop_name": "mystore",
  "total_spent": 123.45
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "shop_name": "mystore",
  "total_spent": 123.45
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### purchase\_shop\_count

```
jstag.send({
  "shop_name": "mystore"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "shop_name": "mystore"
}'
```

```
echo '{
  "shop_name": "mystore"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "shop_name": "mystore"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_retail\_count

```
jstag.send({
  "action": "refund"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "refund"
}'
```

```
echo '{
  "action": "refund"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "refund"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_retail\_ts

```
jstag.send({
  "action": "refund"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "refund"
}'
```

```
echo '{
  "action": "refund"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "refund"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### product\_ids

```
jstag.send("abc123")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"abc123"'
```

```
echo '"abc123"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("abc123");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### order\_ids

```
jstag.send("1294322")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"1294322"'
```

```
echo '"1294322"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("1294322");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### CRM

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| account\_id | Account ID | The account ID associated with an individual. | "acme-corp-123" |
| lead\_status | Lead Status | The lead status associated with an individual. | "open" |
| lead\_source | Lead Source | The lead source associated with an individual. | "blog" |
| lead\_score | Lead Score | The lead score associated with an individual. | 0.72 |
| lifecycle\_stage | Lifecycle Stage | An individual's lifecycle stage. | "loyal" |
| opportunity\_value | Opportunity Value | The opportunity value of an individual. | 50000 |

#### account\_id

```
jstag.send("acme-corp-123")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"acme-corp-123"'
```

```
echo '"acme-corp-123"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("acme-corp-123");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### lead\_status

```
jstag.send("open")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"open"'
```

```
echo '"open"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("open");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### lead\_source

```
jstag.send("blog")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"blog"'
```

```
echo '"blog"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("blog");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### lead\_score

```
jstag.send(0.72)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '0.72'
```

```
echo '0.72' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(0.72);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### lifecycle\_stage

```
jstag.send("loyal")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"loyal"'
```

```
echo '"loyal"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("loyal");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### opportunity\_value

```
jstag.send(50000)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '50000'
```

```
echo '50000' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(50000);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Survey

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| survey\_responses | Survey Responses | A collection of the individual's survey responses. | {"nps":"promoter"} |

#### survey\_responses

```
jstag.send({
  "nps": "promoter"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "nps": "promoter"
}'
```

```
echo '{
  "nps": "promoter"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "nps": "promoter"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Support

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| action\_survey\_count | Support Actions: Count | A set of counts of various activities observed in survey sources. | \\{"respond": 45} |
| action\_survey\_ts | Support Actions: Most Recent | A set of the most recent timestamps of various activities observed in survey sources. | \\{"respond": "2024-09-10T12:00:00Z"} |
| csat\_score | Customer Satisfaction Score | An individual's current customer satistfaction score. | 24 |
| support\_ticket\_status | Current Support Ticket Status | An individual's support ticket status. | "open" |

#### action\_survey\_count

```
jstag.send({
  "action": "respond"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "respond"
}'
```

```
echo '{
  "action": "respond"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "respond"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_survey\_ts

```
jstag.send({
  "action": "respond"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "respond"
}'
```

```
echo '{
  "action": "respond"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "respond"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### csat\_score

```
jstag.send(24)
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '24'
```

```
echo '24' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify(24);
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### support\_ticket\_status

```
jstag.send("open")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"open"'
```

```
echo '"open"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("open");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Billing

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| action\_billing\_count | Billing Actions: Count | A set of counts of various activities observed in billing sources. | \\{"paid": 45} |
| action\_billing\_ts | Billing Actions: Most Recent | A set of the most recent timestamps of various activities observed in billing sources. | \\{"paid": "2024-09-10T12:00:00Z"} |

#### action\_billing\_count

```
jstag.send({
  "action": "paid"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "paid"
}'
```

```
echo '{
  "action": "paid"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "paid"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### action\_billing\_ts

```
jstag.send({
  "action": "paid"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "action": "paid"
}'
```

```
echo '{
  "action": "paid"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "action": "paid"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

### Media

| Field | Short Description | Long Description | Example |
| --- | --- | --- | --- |
| subscription\_status | Subscription Status | An individual's subscription status. | "active" |
| subscription\_start | Subscription Term Start | The start date of an individual's most recent subscription. | "2024-02-28" |
| subscription\_end | Subscription Term End | The end date of an individual's most recent subscription. | "2025-02-28" |

#### subscription\_status

```
jstag.send("active")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"active"'
```

```
echo '"active"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("active");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### subscription\_start

```
jstag.send("2024-02-28")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"2024-02-28"'
```

```
echo '"2024-02-28"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("2024-02-28");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### subscription\_end

```
jstag.send("2025-02-28")
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '"2025-02-28"'
```

```
echo '"2025-02-28"' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify("2025-02-28");
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

```
jstag.send({
  "subscription_start": "2024-02-28"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "subscription_start": "2024-02-28"
}'
```

```
echo '{
  "subscription_start": "2024-02-28"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "subscription_start": "2024-02-28"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```

#### subscription\_end

```
jstag.send({
  "subscription_end": "2025-02-28"
})
```

```
curl --request POST  
  --url https://api.lytics.io/collect/json/default  
  --header 'accept: application/json'  
  --header 'authorization: API_KEY'  
  --header 'content-type: */*'  
  --data '{
  "subscription_end": "2025-02-28"
}'
```

```
echo '{
  "subscription_end": "2025-02-28"
}' | http post htps://api.lytics.io/collect/json/default Authorization:API_KEY
```

```
pm.request.headers.add({
    key: "Authorization",
    value: "<API_KEY>"
});
pm.request.body.raw = JSON.stringify({
  "subscription_end": "2025-02-28"
});
pm.sendRequest({
    url: "https://api.lytics.io/collect/json/default",
    method: "POST",
});
```
