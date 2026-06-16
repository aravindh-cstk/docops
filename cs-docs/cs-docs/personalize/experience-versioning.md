---
title: "[Personalize] - Experience Versioning"
description: Experience versioning in Contentstack Personalize, including experience states in a Personalize project.
url: https://www.contentstack.com/docs/personalize/experience-versioning
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] - Experience Versioning

This page explains how experience versioning works in Contentstack Personalize, including why you might use it and the different states an experience can be in. It is intended for developers and content managers who create, manage, preview, and iterate on personalized experiences across environments and releases.

## Experience Versioning

In Contentstack Personalize, experience versioning allows you to create and manage multiple versions of your [experiences](/docs/personalize/about-experiences). This can be useful for a variety of reasons, such as:
- **Testing and Optimization:** It allows you to create and test multiple variations of an experience (A/B or multivariate testing) to determine the most effective one, leading to improved performance and conversions.
- **Controlled Rollouts:** You can gradually roll out an experience to a limited audience before releasing it to everyone, minimizing potential risks and ensuring a smooth transition.
- **Flexibility and Iteration:** You can pause an experience to make changes, fix bugs, or address issues without disrupting the user journey, enabling iterative improvements and agile development.
- **Seasonal Campaigns:** Create and schedule different versions of an experience for specific holidays or events.
- **Data-Driven Decision Making:** By tracking the analytics of different versions, you can gather insights and make informed decisions based on data, optimizing your personalization strategies for better results.

## Experience States in a Personalize Project

An experience can have one of the 4 following states:
- **Draft:** The initial state of an experience. In this state, the experience is not yet live and is not visible to visitors to your site. You can use this state to create and configure your experience, and to test it on a staging or development environment (after activating the experience).**Note:** At any given time, only **1**** draft** can exist for an experience.
- **Active:** The state in which an experience is live and visible to visitors to your site. In this state, the experience will run according to the Variants you have configured along with the [Entry Variants](/docs/content-managers/entry-variants/about-entry-variants) published via the CMS, and you will be able to track its analytics in the Experience dashboard.**Note:** When you activate an experience draft, the previous active version (if available) is automatically archived.
- **Paused:** The state in which an activated experience is temporarily stopped. In this state, the experience will not run and the personalization set in the experience will not be visible to the visitors to your site. You can use this state to make changes to your experience or tweak your content personalization strategy.**Note:** When an experience is paused, the ***Base Entry*** of the Entry Variant(s) is displayed to your visitors.
- **Archived:** The state in which a previously active experience is stored but no longer active. You can view the Analytics of an archived experience version via the **Version History** icon in the right panel and then clicking the Archived version.

**Note:** We recommend enabling [Live Preview](/docs/content-managers/author-content/about-live-preview) and [Visual Builder](/docs/content-managers/visual-builder/about-visual-builder) when managing and previewing different versions and variants of personalized experiences. **Live Preview** lets you validate how each version appears in real time. **Visual Builder** enables content editors to review, compare, and adjust multiple variants visually, including previewing different variants based on audience selection without relying on developers.

## Common questions

### Can I have more than one draft at a time for an experience?
No. At any given time, only 1 draft can exist for an experience.

### What happens to the previous active version when I activate a draft?
When you activate an experience draft, the previous active version (if available) is automatically archived.

### What do visitors see when an experience is paused?
When an experience is paused, the Base Entry of the Entry Variant(s) is displayed to your visitors.

### How can I preview different versions and variants while managing experiences?
Enable Live Preview and Visual Builder to validate how each version appears in real time and to review, compare, and adjust multiple variants visually.