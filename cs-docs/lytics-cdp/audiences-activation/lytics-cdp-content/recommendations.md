---
title: "Recommendations"
description: "Content Recommendations are a powerful tool that can be used to increase user engagement by presenting users with relevant content that resonates with…"
url: /lytics/recommendations
uid: bltcbdb4d9994bbd57b
---

# Recommendations

## Recommendations

## Content Recommendations

Content Recommendations are a powerful tool that can be used to increase user engagement by presenting users with relevant content that resonates with them. By utilizing the Lytics topic taxonomy and powerful Machine-Learning algorithms, Lytics can make data-driven Content Recommendations within milliseconds. Powered by over 500 features, and the flexibility to customize your recommendations, Lytics' Content Recommendation API removes the heavy lifting when it comes to content personalization via web, email, etc.

Out of the box, Lytics' Content Recommendations can be leveraged in 3 ways:

### Content Recommendations in the Lytics UI

The Lytics UI offers multiple ways to test, validate, and get started with Content Recommendations. Both the **Context Layer** page and the **Content Collection** page provide options for fetching recommendations for individual users.

#### Recommendations via the Context Layer Page

To access Recommendations from the Context Layer page, navigate to the **Context Layers** page under the **Content** navigation menu, select a Context Layer, and click on the Recommend tab. After entering a user ID and clicking Recommend, Lytics will generate recommendations tailored to that specific user.

![9f2fa58e478f257baa9054a38397fcb1c26add3a7e462dc07e9c8292ab92189d-Screenshot_2024-10-03_at_2.54.38_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame01d4f39fc05dd2b/e8faae230e318cfa32d9b4f9/9f2fa58e478f257baa9054a38397fcb1c26add3a7e462dc07e9c8292ab92189d-Screenshot_2024-10-03_at_2.54.38_PM.png)

#### Recommendations via the Collections Page

To access Collection-specific recommendations, navigate to a Collection under the Collections page in the Content menu and select the Recommendations tab. This page provides options for creating Recommendations [Experiences](/docs/lytics/experiences), links to the [Content Recommendation API](https://docs.lytics.com/reference/content-recommendation), code snippets, and a search bar to fetch Collection-specific Recommendations for a user.

![4254fbbf63e72d0adb8b19cebfe1c2cabfa89741d4384b4a795cf366449fb4d4-Screenshot_2024-10-03_at_2.57.59_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amccaf664dc14e8312/aec5af12a21fd2d7337cd0d5/4254fbbf63e72d0adb8b19cebfe1c2cabfa89741d4384b4a795cf366449fb4d4-Screenshot_2024-10-03_at_2.57.59_PM.png)

### Recommend content with Lytics Personalization

You can create personalized, customizable recommendation experiences on any site where the Lytics JavaScript tag is installed.

### Recommend content with Pathfora JS

Pathfora JS is capable of taking a content collection and fetching and displaying the recommended content for the current user. Read more about it in the [Pathfora JS Docs](http://lytics.github.io/pathforadocs/content_recommend/).

### Recommend content with Lytics APIs

The Lytics content recommendation API takes a handful of parameters, including the user the recommendation is for and an optional content collection to recommend from.

### Using content collections in recommendations

Content collections are commonly used in content recommendations. By selecting a content collection as the source of your content recommendation, you're limiting which content the recommendation engine can select from. This is desirable for most use cases, because by default Lytics will scrape any and all pages of your website that users are visiting. Without a content collection defined, the recommendation engine will return what is most relevant to the user regardless of the context. For example, in a marketing context you wouldn't want to promote your careers page, even if it is the most relevant piece of content to the user in question.

Size of the collection is also an important factor when using a collection for recommendation. The more content the recommendations engine has access to, the better, more personalized recommendations it can serve. If you can, try to make sure your content collection is of a decent size, and at the minimum fits the following requirements:

-   Documents are valid (return a 200-status from an HTTP get request)
-   Documents have been enriched by Lytics
-   Documents have topics associated with them

If none of the documents in your collection fit these conditions, the recommendation engine may have issues returning recommendations as it doesn't have enough information to make a recommendation. If you would like assistance setting up these filters in your collection or to set up a collection with content published less than 1 week in the past, contact [Lytics Support](https://support.lytics.com).

#### Content collections in Lytics Experiences

When setting up a recommended content Experience through the Lytics UI, you will be asked to select an existing content collection or build a new collection to use in the experience.

#### Using collections in custom content recommendations

If you're using the Lytics API to recommend content, you can use the contentsegment query parameter to define the content collection you want to use. The value of this parameter should be the ID of the content collection.

You can locate the ID of the collection from the URL on the summary page. The ID will come after /collections/ in the URL, and will end before the beginning of the query parameters.

### Affinity Alignment Score

When building a recommendation-based Experience, you have access to the **affinity alignment score** automatically calculated by Lytics.

![content\_alignment\_component](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4fc7c4a362ed7070/6f45c007992a83fbb05f9a2d/Screen_Shot_2021-03-11_at_1.43.25_PM.png)

The “alignment” score measures the similarity between the selected Content Collection and the Audience. This similarity is based upon the “vector similarity” of the most prevalent topics in the Collection, and the most prevalent topics in the Audience. If the Collection and the Audience share many of the same topics, the “alignment” score will be high. Conversely, if the Collection and the Audience share few or no topics, then the “alignment” score will be low.

For successful Content Recommendations, we recommend pairing Collections and Audiences with moderate to high alignment. If there is low alignment, Content Recommendations may have low conversion rates and may be irrelevant to users in the selected Audience.
