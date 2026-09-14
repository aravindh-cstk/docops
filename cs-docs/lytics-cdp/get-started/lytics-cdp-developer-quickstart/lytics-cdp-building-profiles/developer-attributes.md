---
title: "Default Attributes"
description: "Lytics offers a wide range of pre-packaged user attributes, including automatically generated and customizable ones. Additionally, Lytics employs…"
url: /lytics/developer-attributes
---

# Default Attributes

## Default Attributes

Lytics offers a wide range of pre-packaged user attributes, including automatically generated and customizable ones. Additionally, Lytics employs predictive modeling and machine learning algorithms to provide insights and scores, allowing users to gain a deeper understanding of their audience. The guide below provides an overview of all available attributes and examples to enhance your profiling efforts.

**Tip:** If you haven't already reviewed our [documentation on collecting events](/docs/lytics/lytics-javascript-tag#data-collection\>) via our JavaScript SDK, we highly recommend doing so first. This will give you a better understanding of how data collection works at a high level before delving into the specifics of what can be collected.

## Available Attributes

The following attributes are all available out of the box with no customization necessary in all Lytics pricing tiers. Do note that any attributes flagged as **Computed** can not be edited directly but are computed based on various factors, including other non-computed attributes.

**Note:** For a more comprehensive example of how any of the following attributes can be collected and used for your visitors click the **name** of the identifier to access the code examples below.

### Identifiers

Default attributes that are used to stitch profiles together. For instance, if you pass an **email** along with the **\\\_uid**, all events that have only been associated with either identifier will be merged into a single comprehensive profile.

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Lytics ID](#identifiers-1) | \_id | A unique ID that represents the materialized profile in Lytics. | Yes | 4fafb5b3-b199-58f2-a68b-4b266b363dd1 |
| [Current Lytics Cookie](#identifiers-1) | \_uid | The current cookie id for the user. | No | 50b772f5-a0be-42f2-8828-84b8db5d5a23 |
| [All Lytics Cookies](#identifiers-1) | \_uids | All cookies that are associated with the user. | No | \\\["50b772f5-a0be-42f2-8828-84b8db5d5a23"\] |
| [Email](#identifiers-1) | email | The email address of the user. | No | example@lytics.com |
| [Unique User ID](#identifiers-1) | uuid | A UUID for the user. | No | 4fafb5b3-b199-58f2-a68b-4b266b363dd1 |

### Details

Details encompass all default attributes related to user demographics and general information, including name, phone number, status, etc. It serves as a catch-all for attributes not specifically tied to interactions or behaviors.

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Name](#details-1) | name | The full name of the user. | No | John Doe |
| [First Name](#details-1) | first\_name | The first name of the user. | No | John |
| [Last Name](#details-1) | last\_name | The last name of the user. | No | Doe |
| [Title](#details-1) | title | The title of the user. | No | President |
| [Phone](#details-1) | phone | The phone number of the user. | No | 555-555-5555 |
| [Cell](#details-1) | cell | The cell phone number of the user. | No | 555-555-5555 |
| [Origin](#details-1) | origin | The origin of the user. | No | loyalty\\\_2022 |
| [Language](#details-1) | language | The language of the user. | No | en-us |
| [Age](#details-1) | age | The age of the user. | No | 25 |
| [Companies](#details-1) | companies | The companies the user is associated with. | No | \\\["Lytics", "Pantheon"\] |
| [Gender](#details-1) | gender | The gender of the user. | No | M |
| [Status](#details-1) | status | The status of the user. | No | active |
| [User Attributes](#details-1) | user\_attributes | A map of custom attributes associated with the user. | No | \\{"role": "member", "bonus": "active"} |
| [Timezone](#details-1) | timezone | The timezone of the user. | No | -7 |
| [City](#details-1) | city | The city of the user. | No | Denver |
| [Country](#details-1) | country | The country of the user. | No | US |
| [State](#details-1) | state | The state of the user. | No | CO |

### Meta

Meta encompasses all system-level information that provides insights into the health and breadth of the profile. This includes data such as creation date, last update timestamp, source information, and other metadata associated with the profile's management and maintenance. Metadata offers a behind-the-scenes view of the profile's overall status and administration.

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Created](#meta-1) | \_created | The date the user was created. | Yes | 2023-12-12T21:09:11.625960142Z |
| [Last Scored](#meta-1) | \_last\_scored | The date the user was last scored. | Yes | 2024-02-28T02:45:51.377423153Z |
| [Modified](#meta-1) | \_modified | The date the user was last modified. | Yes | 2024-02-28T02:45:51.377423473Z |
| [Number of Aliases](#meta-1) | \_num\_aliases | The number of aliases for the user. | Yes | 1 |
| [Number of Days](#meta-1) | \_num\_days | The number of days the profile has existed. | Yes | 38 |
| [Number of Events](#meta-1) | \_num\_events | The number of events the user has been associated with. | Yes | 2425 |
| [Number of Streams](#meta-1) | \_num\_streams | The number of streams the user has been associated with. | Yes | 2 |
| [Stream Names](#meta-1) | \_streamnames | The names of the streams the user has been associated with. | Yes | \\\["default", "ios"\] |
| [User is Bot](#meta-1) | is\_bot | Whether the user has been flagged as a bot or not. | Yes | f |

### Behavior

Behavioral attributes typically cannot be directly managed but represent a set of insights derived from a user's behavior over time. These insights are invaluable when personalizing experiences based on changes in behavior or behaviors indicative of high likelihood. For instance, you might want to present a premium offer to users exhibiting higher momentum than usual. Behavioral attributes enable targeted and timely interventions tailored to user actions and patterns.

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Consistency](#behavior-1) | score\_consistency | Score representing how consistent their activity patterns are. | Yes | 99 |
| [Frequency](#behavior-1) | score\_frequency | A score representing how frequently the user is active. | Yes | 63 |
| [Intensity](#behavior-1) | score\_intensity | A score representing how intense the user's activity is. | Yes | 94 |
| [Maturity](#behavior-1) | score\_maturity | A score representing how mature the user's activity is. | Yes | 34 |
| [Momentum](#behavior-1) | score\_momentum | A score representing how much momentum the user currently has. | Yes | 54 |
| [Propensity](#behavior-1) | score\_propensity | A score representing how likely the user is to engage again. | Yes | 1 |
| [Quantity](#behavior-1) | score\_quantity | A score representing how much activity the user has. | Yes | 99 |
| [Recency](#behavior-1) | score\_recency | A score representing how recent the user's activity is. | Yes | 99 |
| [Volatility](#behavior-1) | score\_volatility | A score representing the degree of variability in behavior. | Yes | 99 |

### Interests

Interests entail understanding the topics a user is interested in based on their interactions, cross-referenced by deep programmatic analysis of their online activities. This allows for tailored content recommendations and targeted messaging aligned with the user's preferences and engagement history.

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Lytics Content](#interests-1) | lytics\_content | A map of topic-level interests for the user. | Yes | \\{"Baking": 0.26418695138978837} |

### Intelligence

Attributes classified as intelligence encompass diverse, highly valuable information to facilitate relevant and high-value personalized experiences. Within this category, you'll discover real-time segment membership, values crucial for split testing and experimentation, and direct correlation to our real-time machine learning modeling. These attributes empower dynamic and data-driven decision-making, enhancing the efficacy of personalized marketing strategies.

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Segment Membership](#intelligence-1) | \_segments | The segments the user is associated with. | Yes | \\\["all", "anonymous\\\_profiles", "smt\\\_power"\] |
| [Split](#intelligence-1) | \_split | A random value that is evenly distributed across users. | Yes | 74 |
| [Split 2](#intelligence-1) | \_split2 | A random secondary value that is evenly distributed across users. | Yes | 58 |
| [Needs Message](#intelligence-1) | needs\_message | Stream-specific score that represents the relative distance between now and the next predicted event. | Yes | \\{"default": 0.05758899316182292} |
| [Next Event](#intelligence-1) | next\_event | Stream-specific prediction for the next expected event. | Yes | \\{"default": "2024-03-01T03:00:00Z"} |
| [Lookalike Model Predictions](#intelligence-1) | segment\_prediction | Scores from Lytics Lookalike and SegmentML models. | Yes | \\{"likely\\\_to\\\_churn": 0.26418695138978837} |
| [Lookalike Model Percentiles](#intelligence-1) | segment\_prediction\_percentile | Percentiles from Lytics Lookalike and SegmentML models. | Yes | \\{"likely\\\_to\\\_churn": 0.26418695138978837} |

### Activity

Activity encompasses the user's engagement across different channels and campaigns, including clicks and conversions. It provides valuable insights into recent interactions, aiding campaign optimization and channel effectiveness assessment.

#### General

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [First Seen](#general-1) | event\_first\_seen | The first time the user was seen for a specific event. | No | \\{"click": "2023-12-12T21:09:11.625Z"} |
| [Last Seen](#general-1) | event\_last\_seen | The last time the user was seen for a specific event. | No | \\{"click": "2024-02-28T02:45:49.776Z"} |
| [Channels](#general-1) | channels | The channels the user has been active on. | No | \\\["web", "email"\] |
| [Devices](#general-1) | devices | The devices the user has been active on. | No | \\{"desktop": 123} |
| [Hourly](#general-1) | hourly | The number of events per hour for the user. | Yes | \\{"0": 17, "1": 69, "2": 262, "3": 97} |
| [Hour of Week](#general-1) | hourofweek | The number of events per hour of the week for the user. | Yes | \\{"3": 2, "4": 2, "5": 1, "11": 3} |
| [Last Active](#general-1) | last\_active\_ts | The last time the user was active. | No | 2024-02-28T02:45:50.784Z |
| [Last Channel Activities](#general-1) | last\_channel\_activities | The last time the user was active on a specific channel. | No | \\{"web": "2024-02-28T02:45:50.784Z"} |

#### Web

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Domains](#web-1) | domains | The domains the user has been active on. | No | \\\["umami.lytics.com"\] |
| [First Visit Timestamp](#web-1) | firstvisit\_ts | The first time the user visited the site. | No | 2023-12-12T21:09:11.625Z |
| [Last Visit Timestamp](#web-1) | lastvisit\_ts | The last time the user visited the site. | No | 2024-02-28T02:45:50.784Z |
| [Pageview Count](#web-1) | pageviewct | The number of pageviews the user has had. | Yes | 234 |
| [Referring Domain](#web-1) | refdomain | The referring domain for the user. | No | \\\["umami.lytics.com"\] |
| [User Agent](#web-1) | user\_agent | The user agent for the user. | Yes | Chrome |
| [Visit Count](#web-1) | visitct | The number of visits the user has had. | Yes | 145 |
| [Visit City](#web-1) | visit\_city | The city the user visited from. | Yes | Denver |
| [Visit Country](#web-1) | visit\_country | The country the user visited from. | Yes | US |
| [Visit Region](#web-1) | visit\_region | The region the user visited from. | Yes | CO |
| [Form Data](#web-1) | form\_data | The form data the user has submitted. | No | \\{"first\\\_name": "John"} |
| [Forms Submitted](#web-1) | forms\_submitted | The forms the user has submitted. | No | \\\["newsletter", "contact"\] |
| [UTM Campaign Last](#web-1) | utm\_campaign\_last | The last UTM campaign referred from. | No | holiday |
| [UTM Campaigns](#web-1) | utm\_campaigns | The UTM campaigns the user has interacted with. | No | \\\["holiday", "summer"\] |
| [UTM Content Last](#web-1) | utm\_content\_last | The last UTM content referred from. | No | recipe-1 |
| [UTM Contents](#web-1) | utm\_contents | The UTM contents the user has interacted with. | No | \\\["recipe-1", "recipe-2"\] |
| [UTM Medium Last](#web-1) | utm\_medium\_last | The last UTM medium referred from. | No | article |
| [UTM Mediums](#web-1) | utm\_mediums | The UTM mediums the user has interacted with. | No | \\\["article", "recipe"\] |
| [UTM Source Last](#web-1) | utm\_source\_last | The last UTM source referred from. | No | google\\\_ads |
| [UTM Sources](#web-1) | utm\_sources | The UTM sources the user has interacted with. | No | \\\["google\\\_ads", "meta\\\_ads"\] |
| [UTM Term Last](#web-1) | utm\_term\_last | The last UTM term referred from. | No | example |
| [UTM Terms](#web-1) | utm\_terms | The UTM terms the user has interacted with. | No | \\\["example"\] |

#### Campaign

| Name | Slug | Description | Computed | Example |
| --- | --- | --- | --- | --- |
| [Hover](#campaign-1) | ly\_hover | The number of times the user hovered over a specific campaign. | No | \\{"content-rec-modal": 5} |
| [Impressions](#campaign-1) | ly\_impressions | The number of times the user saw a specific campaign. | No | \\{"content-rec-modal": 1} |
| [Closes](#campaign-1) | ly\_closes | The number of times the user closed a specific campaign. | No | \\{"content-rec-modal": 10} |
| [Conversions](#campaign-1) | ly\_conversions | The number of times the user converted on a specific campaign. | No | \\{"content-rec-modal": 2} |
| [Milestones](#campaign-1) | ly\_milestones | The number of times the user reached a milestone on a campaign. | No | \\{"engaged-donation-page": 1} |
| [Goals](#campaign-1) | ly\_goals | The number of times the user reached a goal on a campaign. | No | \\{"made-donation": 1} |

## Examples

### Identifiers

##### Lytics ID (\_id)

This is an automatically generated canonical ID managed by Lytics. It refers to the materialized profile and cannot be customized or overridden.

##### Current Lytics Cookie (\_uid) and All Lytics Cookies (\_uids)

\*uid represents the Lytics anonymous 1st party cookie. This value is automatically captured with every jstag.send() call from the JavaScript tag. The only way to customize this value is to explicitly set the value of\*uid, which we do not recommend.

```
jstag.setid("somecustomvalue");
jstag.send();
```

##### Email (email)

```
jstag.send({
  email:"example@lytics.com"
});
```

##### Unique User ID (uuid)

```
jstag.send({
  uuid:"someuniqueuserid"
});
```

### Details

##### First Name (first\_name)

```
jstag.send({
  first_name:"John",
});
```

##### Last Name (last\_name)

```
jstag.send({
  last_name:"Doe",
});
```

##### Title (title)

```
jstag.send({
  title:"President",
});
```

##### Phone (phone)

```
jstag.send({
  phone:"555-555-5555",
});
```

##### Cell (cell)

```
jstag.send({
  cell:"555-555-5555",
});
```

##### Origin (origin)

```
jstag.send({
  origin:"loyalty_2022",
});
```

##### Language (language)

By default, the Lytics JavaScript SDK will collect language information based on the browser, but this can be overridden.

```
jstag.send({
  _ul:"en-us",
});
```

##### Age (age)

```
jstag.send({
  age:25,
});
```

##### Companies (companies)

```
jstag.send({
  companies:["Lytics", "Pantheon"],
});
```

##### Gender (gender)

```
jstag.send({
  gender: "N/A",
})
```

### Meta

##### Created (\_created)

Lytics automatically generate this and represents the oldest event associated with the user.

##### Modified (\_modified)

This is automatically generated by Lytics and represents the last time the user was modified.

##### Last Scored (\_last\_scored)

This is automatically generated by Lytics and represents the last time the users scores were updated.

##### Number of Aliases (\_num\_aliases)

This is automatically generated by Lytics and represents the number of aliases associated with the user.

##### Number of Days (\_num\_days)

This is automatically generated by Lytics and represents the number of days the user has existed.

##### Number of Events (\_num\_events)

This is automatically generated by Lytics and represents the number of events associated with the user.

##### Number of Streams (\_num\_streams)

This is automatically generated by Lytics and represents the number of streams associated with the user.

##### Stream Names (\_streamnames)

This is automatically generated by Lytics and represents the names of the streams associated with the user.

##### User is Bot (is\_bot)

This is automatically generated by Lytics and represents whether the user has been flagged as a bot or not.

### Behavior

The following attributes are all computed in real-time as the profile evolves. Each of the behavioral attributes are surfaced as a score between 0 and 100. These scores represent an aggregate summary of the user's behavior across various dimensions: Consistency, Frequency, Intensity, Maturity, Momentum, Propensity, Quantity, Recency, and Volatility.

#### Interests

##### Lytics Content (lytics\_content)

The interest attributes are computed in real-time and represent the user's interest in various topics. These topics are generated as a result of the analysis done by the Lytics Context Layer and then associated with the user based upon their interaction with content on your site.

#### Intelligence

##### Segment Membership (\_segments)

This attribute displays an array of all segments the user is currently a member of. It updates in real-time based on various audience definitions. Lytics offers a range of useful segments out of the box, requiring no additional setup. For detailed information on these audiences, refer to our Developer Tier > Audiences documentation.

##### Split & Split2 (\_split & \_split2)

These attributes are automatically generated by Lytics and represent a random value evenly distributed across users. They are useful for split testing and experimentation.

##### Needs Message (needs\_message)

This attribute is computed in real-time and represents the relative distance between now and the next predicted event. It is stream specific and is useful for understanding when a user is likely to engage again.

##### Next Event (next\_event)

This attribute is computed in real-time and represents the next expected event. It is stream specific and is useful for understanding when a user is likely to engage again.

##### Lookalike Model Predictions & Lookalike Model Percentiles (segment\_prediction & segment\_prediction\_percentile)

This attribute is computed in real-time and represents the scores resulting from Lytics Lookalike and SegmentML models. Out-of-the-box, Lytics offers a range of useful models, requiring no additional setup. For detailed information on these models, refer to our Developer Tier > Models documentation.

### Activity

#### General

##### First Seen & Last Seen (event\_first\_seen & event\_last\_seen)

Both of these attributes are automatically populated based upon the \_e value in the jstag.send payload. By default Lytics will collect a pv event for each page view and this will automatically populate the first\_seen and last\_seen attributes. Below is an example of collecting a custom event that would populate these attributes as well.

```
jstag.send({
  _e:"custom_event"
});```
```

##### Channels (channels) \\[needs update]

```
jstag.send({
  _channel:"web",
});
```

##### Devices (devices)

```
jstag.send({
  _device:"desktop",
});
```

##### Hourly (hourly)

This attribute is automatically populated with a count of events per hour for the user.

##### Hour of Week (hourofweek)

This attribute is automatically populated with a count of events per hour of the week for the user.

##### Last Active Timestamp (last\_active\_ts)

This attribute is automatically populated with the last time an event was received in any stream for the user.

##### Last Channel Activities (last\_channel\_activities) \\[needs update]

```
jstag.send({
  _channel:"web",
});
```

#### Web

##### Domains (domains)

This attribute is automatically populated with the domains the user has been active on.

##### First Visit Timestamp (firstvisit\_ts)

This attribute is automatically populated with the first time the user visited the site and sends data to the default stream.

##### Last Visit Timestamp (lastvisit\_ts)

This attribute is automatically populated with the last time the user visited the site and sends data to the default stream.

##### Pageview Count (pageviewct)

This attribute is automatically populated with the number of \_pv events recieved for the user.

```
jstag.send({
  _e:"pv"
});
```

##### Referring Domain (refdomain)

This attribute is automatically populated with the referring domain for the user.

```
jstag.send({
  _ref:"umami.lytics.com",
});
```

##### User Agent (user\_agent)

This attribute is automatically populated based on the user agent of the browser. This attribute must be turned on in your Lytics account to be collected.

##### Visit Count (visitct)

This attribute is automatically populated with the number of visits the user has had based on presence of the \_sesstart key in an event.

```
jstag.send({
  _sesstart:1
});
```

##### Visit City (visit\_city)

This attribute is automatically populated with the city the user visited from based upon GeoIP.

##### Visit Country (visit\_country)

This attribute is automatically populated with the country the user visited from based upon GeoIP.

##### Visit Region (visit\_region)

This attribute is automatically populated with the region the user visited from based upon GeoIP.

##### Form Data (form\_data)

Form data is a wildcard attribute that allows you to pass a number of key value pairs that all get stored under the form\_data attribute. This is useful for capturing form submissions.

```
jstag.send({
  formdata_fn:"John",
  formdata_ln:"Doe",
  formdata_someotherkey:"somevalue"
});
```

##### Forms Submitted (forms\_submitted)

```
jstag.send({
  form_name:"newsletter"
});
```

##### UTM Campaign Last (utm\_campaign\_last)

```
jstag.send({
  utm_campaign:"holiday"
});
```

##### UTM Campaigns (utm\_campaigns)

```
jstag.send({
  utm_campaign:"holiday"
});
```

##### UTM Content Last (utm\_content\_last)

```
jstag.send({
  utm_content:"recipe-1"
});
```

##### UTM Contents (utm\_contents)

```
jstag.send({
  utm_content:"recipe-1"
});
```

##### UTM Medium Last (utm\_medium\_last)

```
jstag.send({
  utm_medium:"article"
});
```

##### UTM Mediums (utm\_mediums)

```
jstag.send({
  utm_medium:"article"
});
```

##### UTM Source Last (utm\_source\_last)

```
jstag.send({
  utm_source:"google_ads"
});
```

##### UTM Sources (utm\_sources)

```
jstag.send({
  utm_source:"google_ads"
});
```

##### UTM Term Last (utm\_term\_last)

```
jstag.send({
  utm_term:"example"
});
```

##### UTM Terms (utm\_terms)

```
jstag.send({
  utm_term:"example"
});
```

### Campaign

##### Hover (ly\_hover) \\[needs update]

```
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "hover"
});
```

##### Impressions (ly\_impressions) \\[needs update]

```
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "show"
});
```

##### Closes (ly\_closes) \\[needs update]

```
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "close"
});
```

##### Conversions (ly\_conversions) \\[needs update]

```
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "conversion"
});
```

##### Milestones (ly\_milestones) \\[needs update]

```
jstag.send({
  pf_widget_id: "engaged-donation-page",
  pf-widget-event: "milestone"
});
```

##### Goals (ly\_goals) \\[needs update]

```
jstag.send({
  pf_widget_id: "made-donation",
  pf-widget-event: "goal"
});
```
