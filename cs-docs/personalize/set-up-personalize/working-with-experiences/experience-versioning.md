---
title: "Experience Versioning"
description: "Learn more about Personalize's experience versioning to create, test and optimize personalized content."
url: /personalize/experience-versioning
---

# Experience Versioning

## Experience Versioning

In Contentstack Personalize, experience versioning allows you to create and manage multiple versions of your [experiences](/docs/personalize/about-experiences). This can be useful for a variety of reasons, such as:

-   **Testing and Optimization:** It allows you to create and test multiple variations of an experience (A/B or multivariate testing) to determine the most effective one, leading to improved performance and conversions.
-   **Controlled Rollouts:** You can gradually roll out an experience to a limited audience before releasing it to everyone, minimizing potential risks and ensuring a smooth transition.
-   **Flexibility and Iteration:** You can pause an experience to make changes, fix bugs, or address issues without disrupting the user journey, enabling iterative improvements and agile development.
-   **Seasonal Campaigns:** Create and schedule different versions of an experience for specific holidays or events.
-   **Data-Driven Decision Making:** By tracking the analytics of different versions, you can gather insights and make informed decisions based on data, optimizing your personalization strategies for better results.

## Experience States in a Personalize Project

An experience can have one of the 4 following states:

-   **Draft:** The initial state of an experience. In this state, the experience is not yet live and is not visible to visitors to your site. You can use this state to create and configure your experience, and to test it on a staging or development environment (after activating the experience).
    
    **Note:** At any given time, only **1 draft** can exist for an experience.
    
-   **Active:** The state in which an experience is live and visible to visitors to your site. In this state, the experience will run according to the Variants you have configured along with the [Entry Variants](/docs/headless-cms/about-entry-variants) published via the CMS, and you will be able to track its analytics in the Experience dashboard.
    
    **Note:** When you activate an experience draft, the previous active version (if available) is automatically archived.
    
-   **Paused:** The state in which an activated experience is temporarily stopped. In this state, the experience will not run and the personalization set in the experience will not be visible to the visitors to your site. You can use this state to make changes to your experience or tweak your content personalization strategy.
    
    **Note:** When an experience is paused, the _**Base Entry**_ of the Entry Variant(s) is displayed to your visitors.
    
-   **Archived:** The state in which a previously active experience is stored but no longer active. You can view the Analytics of an archived experience version via the **Version History** icon in the right panel and then clicking the Archived version.

**Note:** We recommend enabling [Live Preview](/docs/headless-cms/about-live-preview) and [Visual Builder](/docs/headless-cms/about-visual-editor) when managing and previewing different versions and variants of personalized experiences. **Live Preview** lets you validate how each version appears in real time. **Visual Builder** enables content editors to review, compare, and adjust multiple variants visually, including previewing different variants based on audience selection without relying on developers.

## Related Resources

-   [Personalize Management API: Create an Experience Version](/docs/developers/apis/personalize-management-api/experiences#create-an-experience-version)
-   [Personalize Management API: Update an Experience Version](/docs/developers/apis/personalize-management-api/experiences#update-an-experience-version)
-   [Personalize Management API: Delete an Experience Version](/docs/developers/apis/personalize-management-api/experiences#delete-an-experience-version)
-   [Personalize Management API: Get all Experience Versions](/docs/developers/apis/personalize-management-api/experiences#get-all-experience-versions)
