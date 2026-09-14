---
title: "Custom Topics API"
description: "Create and manage custom content topics programmatically."
url: /lytics/custom-topics-api
---

# Custom Topics API

## Custom Topics API

Create and manage custom content topics programmatically.

## Overview

Custom topics extend the Lytics content classification system beyond automatically detected topics. While the content engine automatically identifies topics from your content, custom topics allow you to define your own taxonomy and manually classify content against it.

Custom topics are useful when:

-   Your content taxonomy doesn't align with automatically detected topics
-   You need domain-specific topic categories (e.g., product lines, business units)
-   You want to create topics from metadata rather than content analysis

## API Reference

### List Custom Topics

```
GET /v2/content/customtopic
```

Returns all custom topics for the account.

### Create a Custom Topic

```
POST /v2/content/customtopic
```

Creates a new custom topic.

### Update a Custom Topic

```
PUT /v2/content/customtopic/{id}
```

Updates an existing custom topic definition.

### Delete a Custom Topic

```
DELETE /v2/content/customtopic/{id}
```

Removes a custom topic. Content previously classified under this topic will no longer have this classification.

## Context Layers

Context layers add additional contextual enrichment to content and entities. They allow you to overlay additional metadata or classification on top of the standard content affinity model.

### List Context Layers

```
GET /v2/content/contextlayer
```

### Create a Context Layer

```
POST /v2/content/contextlayer
```

### Update a Context Layer

```
PUT /v2/content/contextlayer/{id}
```

### Delete a Context Layer

```
DELETE /v2/content/contextlayer/{id}
```

## Content Opportunities

Content opportunities surface gaps between your audience's interests and your available content. The opportunity analysis identifies topics where user affinity is high but content coverage is low.

```
GET /v2/content/opportunity
```

Returns content opportunity analysis for the account, highlighting topic areas where creating new content could drive engagement.

## Related

-   [Topics & Affinities](/docs/lytics/affinities-1) - Understanding the topic and affinity system
-   [Content Collections](/docs/lytics/content-collections) - Organizing content into collections
-   [Content Recommendations](/docs/lytics/recommendations) - Serving personalized content
