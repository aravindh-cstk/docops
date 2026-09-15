---
title: "Content Enrichment API"
description: "Enrich content with topics, entities, sentiment, and classifications using multiple analysis engines."
url: /lytics/content-enrichment-api
uid: bltab319c27fe209854
---

# Content Enrichment API

## Content Enrichment API

Enrich content with topics, entities, sentiment, and classifications using multiple analysis engines.

## Overview

The Content Enrichment API analyzes URLs, text, or JSON payloads to extract topics, entities, sentiment, and other metadata. It uses a pipeline of enrichers -- including Google Natural Language, Diffbot, TextRazor, and built-in sentiment analysis -- to produce a comprehensive content profile used for audience targeting and content recommendations.

**Note:** Content enrichment must be enabled on your account (enrich\_content setting). Contact your account representative to enable this feature.

## API Reference

### Enrich Content

```
POST /v2/content/enrich
```

Enriches a URL, text, or JSON payload with extracted topics and metadata.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| url | string | URL to fetch and enrich |
| text | string | Plain text to enrich |
| json | string | JSON blob to enrich (text is auto-extracted) |
| entry\_uid | string | Existing content entity UID to re-enrich |
| entry\_fields | string | Specific fields to use from the entry |

At least one of url, text, or json must be provided.

#### Response

```
{
  "input": "example.com/article",
  "topics": {
    "Technology": 0.85,
    "Artificial Intelligence": 0.72,
    "Cloud Computing": 0.65
  },
  "inferred_topics": {
    "Computer Science": 0.68,
    "Software Engineering": 0.55
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| input | string | The original URL or text that was enriched |
| topics | map | Topic labels mapped to relevance scores (0-1) |
| inferred\_topics | map | Derived topics with relevance scores |

### Classify Content

```
POST /v2/content/classify
```

Returns detailed enrichment steps and results, showing how content was processed through the enrichment pipeline. Useful for debugging classification results.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| url | string | URL to classify |

#### Response

```
{
  "content": {
    "url": "https://example.com/article",
    "description": "Article Title",
    "sentiment": 0.8,
    "tags": [...]
  },
  "steps": [
    {
      "source": "meta",
      "status": "success",
      "fields_extracted": ["title", "description", "author"]
    },
    {
      "source": "google_nlp",
      "status": "success",
      "entities_found": 5
    }
  ]
}
```

### Get Content Entity

```
GET /v2/content/entity
```

Retrieves a stored content entity by URL or hashed URL.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| url | string | URL of the content entity |
| hashedurl | string | Pre-hashed URL identifier |

### Align Content with Audiences

```
POST /v2/content/align
```

Aligns content topics with audience segments to find the best-matching audiences for a piece of content.

#### Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| method | string | Similarity method: jaccard, cosine, or embed (default: embed) |
| config | string | Affinity config ID for taxonomy |
| limit | int | Maximum results to return (default: 10) |
| entry\_uid | string | Entry to use for topic extraction |

#### Request Body

```
{
  "topics": {
    "Technology": 0.8,
    "Cloud": 0.6
  }
}
```

#### Response

```
[
  {
    "segment_id": "seg_123",
    "segment_name": "Tech Enthusiasts",
    "segment_size": 5000,
    "alignment": 0.87,
    "segment_topics": {
      "Cloud": 0.65,
      "Technology": 0.72
    }
  }
]
```

## Enrichment Pipeline

Content passes through an ordered pipeline of enrichers. Each enricher extracts different types of information:

| Enricher | Source Key | What It Extracts |
| --- | --- | --- |
| Meta | meta | HTML meta tags, Open Graph, title, description, images, author, published date |
| Diffbot | diffbot, diffbot\_meta | Article extraction, content type classification, structured data |
| Google NLP | google\_nlp | Named entities with salience scores (filtered by relevance > 0.05) |
| Google NLP Entity | google\_nlp\_entity | Typed entities: PERSON, LOCATION, ORGANIZATION, EVENT (requires knowledge graph metadata) |
| Google Categories | google\_category | Content categories (IPTC taxonomy) |
| TextRazor | textrazor | Topics with relevance scores |
| Google Vision | google\_vision | Image analysis: labels, safe search |
| Sentiment | sentiment | Sentiment score (-1.0 to 1.0) |
| LLM | llm | AI-generated topics via OpenAI or Vertex AI |
| Custom Topics | custom\_topic | Matches against account-defined topic filters |
| Embeddings | embedding | Vector embeddings for semantic search |

**Note:** Not all enrichers run on every piece of content. The pipeline selects enrichers based on your account's configured content sources and the type of input provided.

### Text Processing

-   Maximum text size: 4,000 characters for Google NLP analysis
-   Text is intelligently extracted from HTML using the main content area
-   Falls back to heading and paragraph tags if no main content is detected
-   Language detection is automatic; enrichers that don't support the detected language are skipped

### Entity Extraction

Google NLP entity extraction filters results by:

-   **Salience threshold**: Entities must have salience > 0.05 (or > 0.01 with knowledge graph metadata)
-   **Entity types**: PERSON, LOCATION, ORGANIZATION, EVENT (for the entity-specific enricher)
-   **Name constraints**: Maximum 50 characters, maximum 3 spaces
-   **Knowledge graph**: Entities with Wikipedia/Freebase metadata are prioritized

## Configuration

Content enrichment behavior can be configured through account settings:

| Setting | Type | Description |
| --- | --- | --- |
| enrich\_content | boolean | Enable/disable content enrichment |
| content\_crawl\_delay | int | Delay between HTTP requests in milliseconds (minimum 1 second) |
| content\_respect\_directives | string | How to handle robots.txt: always, robots\_txt, or never |
| content\_domain\_allowlist | string\\\[\] | Only enrich content from these domains |
| content\_domain\_blocklist | string\\\[\] | Never enrich content from these domains |
| content\_path\_allowlist | string\\\[\] | Only enrich URLs matching these paths |
| content\_path\_blocklist | string\\\[\] | Exclude URLs matching these paths |
| content\_topic\_allowlist | string\\\[\] | Only include these topics in results |
| content\_topic\_blocklist | string\\\[\] | Exclude these topics from results |
| content\_max\_topics | int | Maximum number of topics per document |
| content\_boosted\_attributes | string\\\[\] | HTML fields to prioritize in text extraction |

## Input Sources

The enrichment pipeline processes content from various input streams:

-   **Web URLs**: Standard web page crawling with robots.txt respect
-   **Email content**: From Mailchimp, Dotdigital, SendGrid, Campaign Monitor, or MessageCentral streams
-   **Contentful webhooks**: CMS content with rich text support
-   **Spotify**: Music track metadata from Spotify URIs
-   **Direct text/JSON**: Via the API with text or json parameters

### URL Processing

-   URLs are normalized (scheme, trailing slashes)
-   Redirects and canonical URLs are tracked
-   Duplicate content is detected via bloom filter (2M entries, 1% false positive rate)
-   Crawl delays from robots.txt are respected (minimum 1 second)
