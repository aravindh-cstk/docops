---
title: "Enrichment"
description: "To better understand how users are engaging with content, Lytics first needs to understand that content itself. One way Lytics does this is by analyzing…"
url: /lytics/enrichment
uid: blt8b3373d8e7bdc59d
---

# Enrichment

## Enrichment

## Content Enrichment

To better understand how users are engaging with content, Lytics first needs to understand that content itself. One way Lytics does this is by analyzing the URLs that are passed to Lytics to determine the topics that best describe the URL.

When Lytics receives data about actions taken by a customer, it is called an event. Each event has fields that store pieces of information describing the event, including the URL. By associating topics with URLs, Lytics is also able to understand which topics a user has engaged with. In doing so, the Lytics Content Affinity Engine can find relevant content for users, as well as find relevant users for content.

When Lytics receives an event with a URL in it - specifically when an event with a field named url comes in on any data stream - Lytics determines whether the URL is new or not. A new URL is one that Lytics has not previously handled.

Lytics then creates a new event and writes that event to the data stream lytics\_content\_enrich, called the _content enrichment stream_. An LQL query named lytics\_content handles events written to the content enrichment stream. This results in a new entity being created in the _content_ table.

Lytics listens for events with new URLs on the content enrichment stream. When a new event is available, Lytics runs the URL enrichment process.

Data enrichment is a common practice in Lytics. It refers to the ability to add data onto inbound data to improve its quality. This process is also used in user profile enrichment.

### Enrichers

Enrichment is handled by components called _enrichers_. Each enricher performs a specific task. A common task for an enricher is to associate topics with a URL, but there are other tasks that enrichers can perform.

Whatever its specific purpose, the result of an enricher running is that additional data may be added to the inbound data (event). After the enrichers run, another new event is written to the content enrichment process.

This time, the new event is not enriched because the URL is not new. But the event includes all of the data that was previously added during the enrichment process, so when the query lytics\_content runs, it is able to map that new data to the corresponding entity in the content table.

The specific enrichers that Lytics uses depends on how your account is configured. The account setting enrich\_content\_sources controls which enrichers are used. Your Lytics representative can help you change the enrichers that are enabled on your account.

#### Meta Enricher

The meta enricher is always used by Lytics for content enrichment.

The meta-enrichment process begins with Lytics sending a request for the URL. The response allows Lytics to collect some information to improve the efficiency of the overall enrichment process.

**Examples of information collected are:**

-   **Status code** - This is data returned from the web server that handled the request. It tells Lytics whether the URL is valid and accessible on the server. This is important because Lytics is able to generate content recommendations, and you don't want Lytics to include URLs that will result in a 404 or other errors.
-   **Meta tags** - Lytics can read data from certain meta tags to associate topics with a URL. This logic runs during the meta-enrichment process.
-   **Canonical URL** - The content on a web page may be accessible using multiple URLs. For example, a product online may appear in multiple categories. The canonical URL is used to associate the multiple product pages with one another. This is an important value to ensure Lytics doesn't process the same content multiple times, just because the URL is different.

#### Natural Language Processing

The following Natural Language Processing (NLP) services are available in Lytics for content enrichment. Each link takes you to the Language support page for that service, if applicable.

The Setting column denotes the account setting change needed to enable the service, which must be enabled by [Lytics Support](https://support.lytics.com/).

| Service | Setting | Notes |
| --- | --- | --- |
| [Google NLP](https://cloud.google.com/natural-language/docs/languages) | google\_nlp | The default enricher turned on for all new accounts. |
| Google NLP (entity) | google\_nlp\_entity | If used, this would force in only things like "Barack Obama" and "Frank Sinatra" as topics, instead of general topics like "Politics" and "Music". |
| Google Vision | google | Analyze images to predict topics. |
| [Diffbot](https://docs.diffbot.com/docs/en/guides-spoken-languages-identified) | diffbot for topics diffbot\_meta for meta data | It predicts both content topics and content type. It was set as the default in most accounts created prior 2020. It has more loose associations between topics and content than Google NLP. By turning this on you’ll bring in more topics, but they may not feel intuitive. |
| [TextRazor](https://www.textrazor.com/languages) | textrazor | Predicts topics, is very verbose and may also bring in topics that do not feel intuitive. |

### Topic Extraction

Since Lytics collects and stores every event without any aggregation, automatic topic extraction becomes a possibility. For every URL seen, Lytics uses a bot (called lyticsbot) to fetch the web page at that URL. The content, metadata and images of the URL is analyzed and boiled down to a set of Topics.

#### Lytics Content Authorization

If some of your content is premium and requires a login to access, then you'll need to create a new authorization so Lytics can access this content. To do this:

1.  Access **Account** from the main navigation, or follow this [link](https://app.lytics.com/vault).
2.  From the left hand menu select **Security** and then **Authorizations**
3.  Choose **\+ Create New** to begin the creation of anew authorization method.
4.  When prompted to select a provider select **Lytics Content**.
5.  Next, you'll need to choose an authentication method. Lytics currently supports basic authentication or cookies.
6.  Follow the configuration guidance for your selected authorization and then save.
7.  Once you have saved your authorization Lytics will automatically recognize that it is available and leverag eit during subsequent enrichment runs.

#### lyticsbot Directive Configurations

When lyticsbot scrapes your content, you can identify it with some HTTP headers that will be present on every request, namely:

-   User-Agent: lyticsbot
-   Lytics-Id: <YOUR\_ACCOUNT\_ID>

This will allow you to identify requests from Lytics to scrape that content to enhance your topic graph.

For some websites it is desirable to allow lyticsbot to crawl everything as fast as possible. However, some web administrators would like more flexibility and control over how fast and where the bot attempts to pull content from. The bot will follow a set of directives that would be located at the root of the website, for instance https://www.lytics.com/robots.txt.

**Below you can see three commonrobots.txt configurations.**

1.  Disallow lyticsbot from attempting to crawl any links that reside in the /admin directory.

```
User-agent: lyticsbot
Disallow: /admin
```

1.  Add a "crawl delay" to set the amount of time (in seconds) in between crawl attempts (effectively allow the bot to only crawl 8,640 pages a day)

```
User-agent: lyticsbot
Crawl-delay: 10
```

1.  Combine the disallow and crawl delay settings.

```
User-agent: lyticsbot
Disallow: /admin
Disallow: /private
Crawl-delay: 10
```

**Note:** You must specify the lyticsbot user agent. A wild card will not work in this case.

### Providing Custom Topics

Lytics will automatically extract topics from the main content at a URL, but sometimes domain specific topics are also desired to track. In this case, Lytics supports a special meta tag for annotating custom topics.

Provide a comma-separated list of topics in a lytics:topics meta element in your HTML source.

Here is an example from a Lytics blog post:

```
<html>
  <head>
    <title>Omeda and Lytics Team Up To Offer All-In-One Audience Engagement Platform</title>
    <!-- ... -->
    <meta name="lytics:topics" content="Customer Data Platform, Lytics News"/>
    <!-- ... -->
  </head>
</html>
```

Additionally, your Lytics account can be configured to also scrape other meta tags to feed into your topic graph by setting the account's content\_customprops setting to the names of the meta tags you'd also like to include.

For example, if you wanted your Lytics topic graph to include topics from your [article:tag](http://ogp.me/#type_article) meta tags, you could update your account settings with the following API request.

```
curl -XPUT "https://api.lytics.io/api/account/$ACCOUNTID" \
   -H 'Content-type: application/json' \
   -H "Authorization: $LIOKEY" \
   -d '{
    "settings" : {
        "content_customprops": ["article:tag"]
    }
   }'
```

Now, after adding the article:tag topic, any values from article:tag meta tags will also appear in the topic graph — which means they'll be eligible for content affinities, targeting and personalization, and inform content recommendations.

**Note:** Lytics will track these custom topics _in addition to_ the automatically extracted topics. Do not specify generic topics, there is no need.

### Viewing Topics Assigned to a Document

Each document is assigned a URL as a unique identifier. You can use the Lytics Content API to retrieve a document and view the topics assigned to it.

## Get the information about the URL for

## the Lytics website home page

curl -s -XGET 'https://api.lytics.io/api/content/doc?urls=www.lytics.com' \\ -H "Authorization: $LIOKEY"

This will return a JSON object of the requested document:

{ "data": { "total": 1, "urls": \[{ "url": "www.lytics.com", "https": false, "title": "", "description": "", "topics": \["CDP", "Customer Data"\], "topic\_relevances": { "CDP": 1, "Customer Data": 1 }, "primary\_image": "", "author": "", "created": "2018-10-24T23:10:06Z", "id": "-7169839995045099096", "stream": "", "updated": "2018-10-24T23:14:09Z", "fetched": "2018-10-24T23:14:09Z" }\] }, "message": "success", "status": 200 }

You can see the topics assigned to the requested content and the relevancy range of those topics from 0 to 1.

"topics": \["CDP", "Customer Data"\], "topic\_relevances": { "CDP": 1, "Customer Data": 1 },

```
## Manually Assigning Topics

In most cases topic extraction automatically assigns the expected topic to your content. If, however, you find that to not be the case or you would like to expand the topics assigned to content, Lytics allows you to manually assign topics to your content.

Content is stored in an entity called a document. Each document is a collection of fields each storing a specific piece of information about that content. Each document may have multiple fields that are used to store the topics for that particular entity. The process of manually assigning topics involves updating one of those fields.

### Assigning Topics Manually

Manually assigning topics can be done in several ways:

<details>
  <summary>Data Import</summary>

#### Data Import

The data (in either CSV or JSON format) can be sent to Lytics using any of the methods available for importing data, including CSV file or JSON file integrations and the Lytics Bulk Upload API. Just be sure that you send the data to the correct data stream: `lytics_content_enrich`.

**The uploaded data must be formatted in the following ways:**
```

url,topic\_Portland,topic\_Oregon https://www.lytics.com,1,.96

{ "url": "https://www.lytics.com", "topic\_Portland": 1, "topic\_Oregon": .96 }

```
> 📘
>
> When data is sent to the data stream `lytics_content_enrich`, the LQL function `urlmain` is applied to the value. You can see this in the query `lytics_content`. The result is that `://` and everything *before* it is removed. This is important to understand because if you ever need to find a URL, you should exclude `://` and the protocol before it:

</details>

<details>
  <summary>Lytics Content Corpus API</summary>

#### Content Corpus API

The content corpus endpoint can be used to associate topics with a URL. The corpus API does not allow you to specify the relevance. Topics will be assigned a relevance 1.

The following command demonstrates how to use this API to set topics on content:
```

curl -s -XPOST "https://api.lytics.io/api/content/corpus" \\ -H "Authorization: $LIOKEY" \\ -H "Content-Type: application/json" \\ -d '{ "url":"www.lytics.com", "topics":\["Portland", "Oregon"\] }'

```
</details>

<details>
  <summary>Lytics Topic Curation API</summary>

#### Topic Curation API

The topic curation endpoint can be used to add topics to content. However, this approach is a bit more complicated because you must know an identifier for the content you want to add new topics to.

By default, the following fields are identifiers on `content` table:

* `contentid` - This value only applies to email content.
* `fbid` - This value only applies to Facebook content.
* `hashedurl` - Lytics does not use the URL for the content as an identifier. The URL is a string value that can be quite long. For performance reasons, it is better to create a hash of the URL and use that hashed value as the identifier. A hash is just a way of converting a string into a number.

**How to Generate a Hash for a URL**

There are many hash functions available, but Lytics uses a specific one when it hashes URLs: sip hash.

The following command demonstrates how to use the Lytics query test evaluation endpoint to generate a sip hash for a URL. In this example, the value that is used is `https://www.lytics.com`
```

curl -s -XPOST "https://api.lytics.io/api/query/\_test?value=what%20you%20want%20to%20hash" \\ -H "Authorization: $LIOKEY" \\ -H 'content-type: test/text/plain' \\ -d 'SELECT hash.sip(value) AS hashed FROM test INTO test BY hashed ALIAS test'

```
The result of this command will be something like the following. The value of the field `hashed` is the hashed value
```

{ "data": { "\_created": "2018-11-05T22:00:15.688307117Z", "\_modified": "2018-11-05T22:00:15.688307117Z", "hashed": "7394646926640356587" }, "message": "success", "status": 200 }

If you are using the Visual Studio Code Extension for Lytics, there is a command that you can use to generate a sip hash without having to write any API calls.

#### Setting Topics Using Hashed URL

Above you determined the sip hash for https://www.lytics.com is 7394646926640356587. The following command will associate the topic CDP with a relevance of 1.0 with this hashed URL:

curl -s -XPOST \\ "https://api.lytics.io/api/content/doc/hashedurl/7394646926640356587/topic/CDP?relevance=1' \\ -H "Authorization: $LIOKEY" \\ -H 'content-type: application/json'

```
</details>

### Removing Topics Manually

When a topic is associated with a document, a new field is created on the entity. The field stores a value from zero (no relevance) to one (highest relevance).

In Lytics, you cannot delete fields from documents. So, technically, there is no way to remove a topic from being associated with a content entity. Instead, what you do is set the relevance to zero. Since zero indicates no relevance, it effectively removes the topic from the document.

Removing a topic is not the same as blocking a topic. Blocking a topic acknowledges that a topic may be relevant but is too generic to be useful. For example, at Lytics we block the topic "data" because that topic is relevant on almost all of our content, and for that reason it is not useful at all.

Topics can be removed from content using one of the following approaches.

<details>

<summary>Data Import</summary>

#### Data Import

As described above, CSV or JSON data can be sent to Lytics. The following examples demonstrate how to remove a topic from content by setting the relevance for the topic to zero:
```

url,topic\_Portland https://www.lytics.com,0

{ "url": "https://www.lytics.com", "topic\_Portland": 0 }

```
</details>

<details>

<summary>Topic Curation API</summary>

#### Topic Curation API

The topic remove endpoint allows you to remove a topic associated with content.

This API sets the relevance for the topics to zero. It does not actually delete any the topic from the content.

Above you determined the sip hash for `https://www.lytics.com` is `7394646926640356587`. The following command will remove the topic `CDP` from this hashed URL:
```

curl -s -XDELETE \\ "https://api.lytics.io/api/content/doc/hashedurl/7394646926640356587/topic/CDP" \\ -H "Authorization: $LIOKEY" \\ -H 'content-type: application/json'

```
</details>
```
