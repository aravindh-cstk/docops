---
title: "LQL & Data Import Basics"
description: "Let's take an in-depth look at Lytics Query Language (LQL) and custom data imports. We'll cover a basic overview of LQL itself, how data identities are…"
url: /lytics/lql-data-import-basics
---

# LQL & Data Import Basics

## LQL & Data Import Basics

## LQL & Data Import Basics

Let's take an in-depth look at Lytics Query Language (LQL) and custom data imports. We'll cover a basic overview of LQL itself, how data identities are resolved across streams, how you can map custom data and finally a few of the different ways to import custom data into your account.

**Difficulty**: Intermediate

**TLDR:** Checkout the [data upload documentation](/docs/lytics/custom-data-ingestion) and the [query documentation](https://docs.lytics.com/reference/query-list).

### Prerequisites

-   [httpie](https://github.com/jakubroztocil/httpie) - (optional) a more user friendly version of cURL that we'll be using in this guide for readability.
-   [Lytics Command Line Tool](https://github.com/lytics/lytics) - (optional) we'll show you how to execute commands with our CLI for each endpoint that is supported.
-   A valid API token for your Lytics account ([learn about managing API tokens](/docs/lytics/access-tokens)). For ease of use we suggest adding as an environment variable in your command line:

```
export LIOKEY={API Token}
```

### 1\. Lytics Data Processing Review

Due to the intermediate nature of this course it is important that you already possess a strong understanding of segmentation, user fields and data streams. For those new to the Lytics data pipeline we recommend reviewing the following documentation before proceeding with the rest of the steps:

1.  [Introduction: Lytics Data Collection](/docs/lytics/data-streams-1)
2.  [Introduction: Lytics User Profiles & User Fields](/docs/lytics/user-fields)
3.  [Introduction: Lytics Audiences](/docs/lytics/audiences)

### 2\. Sending Data from a Website (JavaScript)

When the Lytics JavaScript tag is installed we will automatically begin collecting standard data. This includes page-view level information such as URL, browser, Lytics Cookie Id, etc. In addition to the standard page-view event the Lytics tag empowers marketers to push more sophisticated data related to the end user's behavior or identity.

An example of such data to a custom stream called custom\_data might look something like:

```
jstag.send('custom_data', {
  userid: "1234",
  email: "jon@castleblack.com",
  first_name: "Jon",
  last_name: "Snow",
  title: "King in the North",
  company: "House Stark",
  phone: "555-555-5555",
  age: 21,
  gender: "m",
  city: "Winterfell",
  state: "Westeros",
  status: "planning"
});
```

While visiting your site that has the Lytics JavaScript tag installed you can leverage Chrome's developer tools, specifically the console, to manually fire this "send" request and pass the payload above to Lytics. Keep in mind, all data sent from your browser will automatically be associated with your current cookie. When testing and playing it is best practice to always use a fresh incognito browser. Chrome tools has great [documentation](https://developers.google.com/web/tools/chrome-devtools/#console) if they are new to you as well.

Check out our JavaScript tag [data collection docs](/docs/lytics/lytics-javascript-tag) for more details on the power of the Lytics tag.

### 3\. What is LQL?

Lytics Query Language(LQL) is the transformation layer that makes passing arbitrary, non-schema specific data to Lytics. For the most basic implementations it is simply the translation of raw event data to user field data, the Lytics schema. In more advanced implementations complex calculations can be performed on events across streams to create sums, maps, and more. An example might be rolling all purchase\_total values for individual conversions into a purchase\_total\_over\_time field that holds the total revenue for that particular profile.

LQL is very powerful and we recommend working directly with our services team to get the most out of it. We also have some great [docs](/reference/query) to give you some more detail on the pre-built power.

As mentioned in our documentation, LQL can be broken down into 6 key components:

#### SELECT

Select data to be added to user profiles. Including Maps, Counts, and other complex data types. As an example from the above event we sent from the browser you might map status to the custom field current\_status in order to unify data across streams. In that case your select statement would be something like:

```
status     AS current_status     SHORTDESC "Current Status of a User"
```

where status is the key name from the event stream and current\_status is the field name that is used across multiple streams. The SHORTDESC allows you to add more context around that particular field in order to simplify working with the data inside the Lytics admin.

#### FROM

The stream to select from. In our example case this would simply be:

```
FROM custom_data
```

#### INTO

This is USER for all user profiles. (technically you could create other types, such as “account”).

```
INTO user
```

#### WHERE

Filters out entire records to not be included/analyzed. Bots, Employees, Test data. In our example we might want to exclude anyone not from Winterfell.

```
WHERE 
    city = "Winterfell"
```

#### BY

What field are we going to identify this entity by. This is among the most important aspects of LQL. This defines which fields can be used as keys to merge data fragments together into a user profile. For instance:

```
BY email OR userid
```

Means that anytime an email address or userid matches, regardless of its origin, we can assume that is the same user, thus merging all data associated with that key.

#### ALIAS

The alias is primarily an internal value of how to reference this particular LQL statement. When accessing LQL through the UI it would be referenced by this alias:

```
ALIAS custom_lql_example
```

### 4\. Writing LQL

Now that we know the basics of LQL we can put it all together in such a way that our sample data sent can be mapped into user fields. Though this can be totally customized to your liking the end product might look something like:

```
/*
    Custom User Data Example
*/
SELECT

    userid             AS user_id          SHORTDESC "Users ID"
    , email            AS email            SHORTDESC "Email Address"
    , first_name       AS first_name       SHORTDESC "First Name"
    , last_name        AS last_name        SHORTDESC "Last Name"
    , set(title)       AS title            SHORTDESC "Job Title"
    , set(company)     AS company          SHORTDESC "Company Name"
    , phone            AS phone            SHORTDESC "Phone Number"
    , age              AS age              SHORTDESC "Age"                KIND INT
    , gender           AS gender           SHORTDESC "Gender"
    , city             AS city             SHORTDESC "City"
    , state            AS state            SHORTDESC "State"
    , status           AS status           SHORTDESC "Current Status"

FROM custom_data
INTO user BY email OR user_id
ALIAS custom_data_example
```

All that is left once we have completed writing is to save our LQL file. This file name is completely up to you but should end with .lql. This will simplify the next step when we test our LQL before uploading it to our account.

### 5\. Testing LQL

#### Install Lytics CLI

Now that we have our LQL saved locally using the .lql extension we are ready to test. To test we will use the Lytics CLI tool. The CLI tool and installation instructions can be found on [Github](https://github.com/lytics/lytics).

Once we have installed the CLI tool lets verify it is working properly. In the terminal of your choice run the following command(s):

```
$ lytics -h
```

If you are presented with a help menu you are good to go, if an error comes back or something was not found we recommend going through the CLI tools docs again to get it properly configured.

#### Create a Sample CSV

The Lytics CLI can test LQL in two ways. First, it will read some of the recent events from the target stream and show you the processed output. This is valuable when it comes to altering existing LQL but may present challenges when you are writing net new LQL on data that has not been sent to Lytics yet. For that use case we'll generate a CSV file to read from locally. In addition, though not demonstrated here, Lytics watch can also use a JSON file locally in addition to the CSV.

CSV's can be created using a variety of tools. When creating your own CSV from scratch just ensure that the first row in the CSV is used to define your field keys(headers) and then each following row represents an individual user's data.

| \\\_created | \\\_modified | user\\\_id | email | first\\\_name | last\\\_name | title | company | phone | age | gender | city | state | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2017-07-27T03:04:04.960952144Z | 2017-07-27T03:04:04.960952144Z | 1234 |  | Jon | Snow | King in the North | House Stark | 555-555-5555 | 21 | m | Winterfell | Westeros | planning |

When saving your CSV ensure the file name matches that of your lql with .csv in place of .lql. For instance if your LQL file is named my\_sample\_file.lql your CSV should be named my\_sample\_file.csv and be located in the same directory. The Lytics CLI will look for CSVs with the same file name as your LQL file.

#### Activate Lytics Watch

Lytics watch will listen for changes to your LQL file. When that happens it will take the CSV or recent data from your stream and process it using that newly altered LQL. This translation is then output into your terminal in order to validate that all mappings are working properly.

```
{
  "_created": "2017-07-27T03:04:04.960952144Z",
  "_modified": "2017-07-27T03:04:04.960952144Z",
  "user_id": "1234",
  "email": "jon@castleblack.com",
  "first_name": "Jon",
  "last_name": "Snow",
  "title": "King in the North",
  "company": "House Stark",
  "phone": "555-555-5555",
  "age": 21,
  "gender": "m",
  "city": "Winterfell",
  "state": "Westeros",
  "status": "planning"
}
```

### 6\. Uploading LQL to an Account

**NOTE:** Please be sure you are using the correct API token when performing the next operation. To check which API you currently have set simply run the following in your terminal:

```
$ echo $LIOKEY
```

The value output should match the API token pulled from your account. If this is not the case please revisit the prerequisites section above for setting up you API token.

#### Query POST Request

To upload the query you will make a simple POST request to our API. Upon a successful upload you will get a response of 200. Lytics handles everything else from there.

```
$ https POST https://api.lytics.io/api/query access_token==$LIOKEY < my_custom_lql_file_name.lql
```

### 7\. Importing a CSV

Finally we can import our CSV using a standard cURL command. Be sure to update your file and stream name in the example below:

```
curl -s -H "Authorization: $LIOKEY" \
  -H 'Content-type: application/csv' \
  --data-binary @your_file_name.csv \
  "https://bulk.lytics.io/collect/bulk/your_stream_name"
```

### What's next?

We've covered a basic example of getting custom data into Lytics. This is very much just the beginning of how LQL can help improve your marketing teams efficiency. We invite you to explore all of our technical docs and reach out to our services team for more in-depth training on LQL and data management!
