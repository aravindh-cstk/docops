---
title: "[Personalize] Create Personalized Content"
description: "Create personalized content in Contentstack using Variants to target audience segments effectively."
url: /personalize/create-personalized-content
---

# [Personalize] Create Personalized Content

## Create Personalized Content

To create personalized content, the [Variants](/docs/personalize/about-variants) feature available in the connected CMS stack helps you compose content variants corresponding to each of the Variants in Personalize Experiences. If a [Personalize Project](/docs/personalize/create-personalize-project) is connected to a CMS stack, all relevant changes made within the project automatically sync to the CMS for you to create content.

Personalize creates a [Variant group](/docs/headless-cms/manage-variant-groups) in the stack for each experience, using the same name as the experience. For every variant within an experience, Personalize creates a corresponding **variant** within the same variant group.

![Personalize experience synced to a CMS variant group](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5df144d2367a8afc/69f3350bcc157bbdaf21b3d3/Personalize-Create-Personalized-Content.png)

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   Access to a [project](/docs/personalize/create-personalize-project) in Personalize with [Experiences](/docs/personalize/about-experiences) and [Variants](/docs/personalize/about-variants) defined
-   Access to the [stack](/docs/headless-cms/create-a-new-stack) connected to the project

## Access the Variant Group and Start Personalizing Content

### From the Personalize Experience

Follow these steps to navigate to the variant group in the CMS and begin creating personalized content:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  You will be redirected to the Personalize Projects landing page, select the project that contains the experience you want to work with.
3.  From the list of experiences, click the experience you want to open.
4.  Click the **Information** icon on the right to open the side drawer.
5.  Scroll down to the **Contentstack CMS Sync Status** section. This section displays details about the connected stack and variant group.
6.  Click the **Variant Group** link.
    
    ![Contentstack CMS Sync Status with Variant Group link](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc480bdf855c91178/6930fe5f41f0926cd859185e/image3.png)
    
7.  This opens up the linked Variant Group’s page in the stack settings.

### From the CMS Stack

### Accessing Variants

To access Variants, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack) and click the **Settings** icon (or press “S”).
2.  Select Variants in the navigation panel on the left.
3.  Click a particular variant group.
4.  In the Linked Content Types field, select one or more content types to associate with the variant group.  
    Associating a variant group with specific content type allows you to personalize the content of the entries based on the content types.  
    ![Linked Content Types field in a variant group](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb91a7701115b5a0/6930fe7129f9d952670deeef/image2.png)
5.  Click **Apply**, then click **Save**.
    
    **Additional Resources:** For more information, refer to [Linking Content Types.](/docs/headless-cms/manage-variant-groups#link-content-types)
    
6.  You can now create entry variants by modifying the fields or sections as needed to personalize content.
    
    **Additional Resources:** For more information, refer to [Variants](/docs/personalize/about-variants) and [Create Entry Variants.](/docs/headless-cms/create-an-entry-variant)
    
7.  You can now publish the entries for the rendered pages to be personalized.

**Note:** Personalize uses the variant-to-entry mapping to decide in real time which content each user sees based on their audience group.

**Note:** When configuring what content is delivered to a specific visitor, we need to ensure that a visitor views the most relevant and impactful content even when it qualifies for multiple personalized content variations. This is when we need to resolve the conflict on which variant should be shown.

## Personalize Content in Isolation Using Branches

When you set up Personalize for the first time or run an A/B test, you may want to build and validate variant content without affecting the content on your main branch. Branch support for Variants lets you link content types and create entry variants within a separate branch, so you can test an experience end to end and make it available on your main branch only when it is ready.

### How Branch Isolation Works

-   The **variant group** that Personalize creates for an experience is **global**. It stays visible across all branches and is not tied to any single branch.
-   The **content types** you link to a variant group (which enable entry variants) are **branch-specific**. Linking or unlinking a content type in one branch does not affect any other branch.
-   As a result, you can leave your main branch untouched, author and test variants in a development branch, and bring the configuration into main only when you are confident it works.

### Personalize Content in a Development Branch

To personalize content in an isolated branch, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Create or select a development branch in your stack to work in.
2.  In Personalize, create your experience and its variants as usual. The variant group and its variants are created globally and are available on every branch.
3.  In the stack, switch to your development branch.
4.  Go to Settings > Variants, open the variant group, and link the content types you want to personalize. This assignment applies to the current branch only.
5.  Create and test your entry variants in the development branch. These entry variants are isolated and do not appear on other branches.
6.  When the experience works as intended, merge the variant group configuration (including linked content types) from your development branch into your main branch.
    
    **Note:** The variant group and its variants are shared globally. Only the content type assignment and the entry variants you create are isolated per branch.
    

**Additional Resource:** For the full CMS behavior, including how to merge variant groups across branches, refer to [Branch Support for Variants](/docs/headless-cms/branch-support-for-variants) and [Manage Variant Groups](/docs/headless-cms/manage-variant-groups).

## Layered Experiences

Layered Experiences allow a visitor to qualify for **multiple Experiences at the same time**.  
Each Experience may personalize a different part of a page or a different field inside an entry.

When Experiences do not overlap, they simply work together.  
When they do overlap, the Experiences are evaluated in a specific order, and their variants combine to create the final content.

This sets the foundation for how multiple variants are used during delivery.

### Multiple Variants Created for the Same Entry

Every entry in the CMS starts with a **Base Entry**.  
For each Experience, you can create an **Entry Variant**, which contains only the fields you changed for that Experience.

**So one entry may have:**

-   A Base Entry
-   Variant for Experience A
-   Variant for Experience B
-   Variant for Experience C… and so on.

**Each variant:**

-   Overrides only the fields you edit
-   Does **not** duplicate the whole entry
-   Is stored as a small object with only the changed fields.

### Composite Entry

When a visitor qualifies for multiple Experiences, Personalize returns a list of **variant aliases**, in the order they should be applied.

**Example:**

x-cs-variant-uid: cs\_personalize\_a\_0, cs\_personalize\_b\_1

The Contentstack Delivery API uses this list to build a **composite entry -**

##### Step 1 - Start with the Base Entry

This includes all fields.

##### Step 2 - Apply the First Variant

Any fields inside Variant A replace the Base Entry fields.

##### Step 3 - Apply the Next Variant

Any fields inside Variant B replace the values from the previous step.

##### Step 4 - The result is the final composite entry

It is a combination of:

-   Base Entry
    -   Variant A overrides
    -   Variant B overrides
-   …in the exact order of the aliases.

Later variants override earlier ones.

### Resolving conflicts when multiple Experiences personalize the same section of content

When multiple experiences are active on a single page, multiple variants may need to be displayed.

This can lead to two possible scenarios:

1.  **Scenario 1:** Multiple Experiences Target Different Sections
    
    If multiple experiences target different sections on a page, the experiences are automatically layered.
    
    Each section is optimized according to the content of its active variant.
    
2.  **Scenario 2:** Multiple Experiences Target the Same Section
    
    If multiple experiences target the same section of a page, **experience prioritization** is required. The experience prioritization can be set up in Personalize.
    
    When this happens, the variant associated with the higher-priority experience is displayed to the user.
    

Layering and prioritization together ensure that the applied personalization reflects the complete visitor context and delivers an optimal user experience.

**Additional Resource:** For more information, refer to [Prioritize Experiences](/docs/personalize/prioritize-experiences) and [Layered Experiences](/docs/personalize/layered-experiences-use-case) documentation.
