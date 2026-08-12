---
title: "Layered Experiences Use Cases"
description: "Learn how to create layered experiences in Contentstack Personalize by combining multiple conditions, like location, device, and campaign, for richer personalization."
url: /personalize/layered-experiences-use-case
---

# Layered Experiences Use Cases

## Layered Experiences Use Cases

Visitors rarely fit into a single category. A user might arrive from a marketing campaign, browse from a mobile device, and live in New York City.

With **layered experiences**, you can combine multiple attributes to create a richer personalization that reflects the complete visitor context, not just one condition.

![Layered visitor context overview](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0edc752c42f51e2/6901ddfa4e9e417835a5f110/image2.jpg)

## What You Will Learn

-   How to create multi-condition audiences that stack location, device, campaign, or behavior.
    
-   How to build a segmented experience and prioritize layered variants.
    
-   How to link content types and create entry variants for each audience combination.
    
-   How to set up the Personalize Edge SDK to retrieve active variants and track impressions.
    

## The Challenge - Why One-Dimensional Targeting Fails to Meet Expectations?

Without layered targeting, enterprises risk showing incomplete or mismatched content.

-   **Retail / eCommerce: Seasonal and Campaign**  
    A shopper in Chicago arrives from a back-to-school ad on a website. Without layered targeting, they might only see a generic seasonal banner, missing the opportunity to show a relevant **back-to-school promotion**.
    
    ![Retail seasonal and campaign layering](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3425cfbb6ceda0b/6901de1af62d8c5151c2e64a/image3.png)
    
    **Without Layering:** The visitor from Chicago sees a variant personalized only by season.
    
    **With Layering:** The page recognizes both context signals, season and campaign, and renders a back-to-school banner for Chicago visitors, increasing relevance.
    
-   **Media / Publishing: Interest and Location**  
    A reader in the US has an interest in sports (frequently visits the sports section). When they revisit the home page, the page can combine both contexts, location and interest, to serve more relevant content.
    
    ![Media interest and location layering](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb424b3c350331f5b/6901de370edfcfb56dcf29ba/image4.png)
    
    **Without Layering:** The visitor only sees the US news variant, even if they belong to both the American and Sports Enthusiast audiences.
    
    **With Layering:** The visitor sees US news along with a banner highlighting sports news, since they belong to both audiences.
    
-   **Travel / Hospitality: Destination and Audience Type**  
    A visitor in Denver clicks a ski vacation campaign link but browses family travel packages. Without layering, the system might show generic Denver travel offers instead of relevant family ski deals.
    
    ![Travel destination and audience type layering](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b3ae4488a0c157d/6901de48daa533d539a94aac/image1.png)
    
    **Without Layering:** The visitor sees only packages available in Denver.
    
    **With Layering:** The page combines visitor preferences (ski + family) with their location (Denver), displaying family ski packages for full context.
    

## The Solution - Richer Targeting with Personalize

**Contentstack Personalize** allows you to define multi-condition audiences and resolve overlaps using prioritization, ensuring the correct experience is delivered every time.

-   **Audience stacking:** Combine multiple conditions such as location, device, campaign, or behavior.
-   **Experience configuration:** Map entries or modules to each layered audience.
-   **Variant prioritization:** Control which experience is delivered when multiple rules apply.
-   **Edge delivery:** Evaluate all rules instantly and serve the correct content in real time.

## Level of Effort: Medium

Layered experiences require defining multi-condition audiences and setting up prioritization, but they scale easily once the framework is in place.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   Access to Personalize [project](/docs/personalize/create-personalize-project) linked to your [Stack](/docs/headless-cms/about-stack)
-   [Linked Content Types](/docs/headless-cms/manage-variant-groups#linking-content-types) and published entry variants
-   [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/about-javascript-personalize-edge-sdk) installed and integrated

## Steps to Implement

### Personalize - Create a Project connected to your Stack

1.  Navigate to App Switcher → Personalize → + New Personalize Project

**Additional Resource:** For more information, refer to [Create a Personalize Project](/docs/personalize/create-personalize-project).

### Personalize – Create Audiences

1.  Navigate to Personalize → Audiences → + New Audience.
2.  Enter a descriptive name (for example: US Mobile Back-to-School).
3.  In the Rule Builder, add multiple conditions:
    1.  country = US
    2.  device = mobile
    3.  campaign\_source = back-to-school
4.  In the **Rules** section:
    1.  Select **Match All** (all rules must be true) or **Match Any** (any rule can be true).
    2.  Click **\+ Add Rule** to add conditions.
    3.  (Optional) Click **\+ Add Group** to group rules for complex logic.
    4.  Save the audience.

**Additional Resource:** For more information, refer to [Create an Audience](/docs/personalize/create-audience).

### Personalize - Create Experience with Audiences

1.  Navigate to **Personalize → Experiences → + New Experience**.
2.  In **Select Experience Type**, choose a Segmented Experience.
3.  On the draft page, fill in the **Overview** section and click **Save General Details**.
4.  Open the **Configuration** tab → click **\+ Add Variant**.
5.  For each variant:
    1.  Set **Condition** to **Match All** or **Match Any**.
    2.  Click **Audiences** → select one or more audiences → **Apply Selected Audiences**.
    3.  (Optional) Add multiple variants and drag to reorder them — the top variant takes priority.
6.  In the CMS, each experience appears as a **Variant Group** with the same name.
    1.  Create **Entry Variants** for each variant in the CMS before activation.
7.  **Activate Draft** to go live.

**Additional Resource:** For more information, refer to [Create a Segmented Experience](/docs/personalize/create-segmented-experience), [Create an A/B Test Experience](/docs/personalize/create-ab-test-experience).

### How Layering of Experiences Works

When multiple experiences are active on a single page, layering comes into play.

-   If experiences target **different sections**, Personalize automatically layers them, displaying all relevant active variants.
-   If experiences target **the same section**, Personalize applies **experience prioritization**. When two variants resolve for the same section, the higher-priority experience takes precedence.

**Additional Resource:** For more information, refer to [Prioritize Experiences](/docs/personalize/prioritize-experiences).

### CMS - Link Content Types

**Variant Groups** and **Variants** are automatically created in the CMS based on experiences and variants defined in Personalize. (This may take a few milliseconds to populate.)

**Additional Resource:** For more information, refer to [Manage Variant Groups](/docs/headless-cms/manage-variant-groups).

1.  Navigate to the Experience → Click the **Info** icon → scroll to **Variant Group → Linked Content Types**.
2.  If the link is not available, go to Stack → Settings → Variants → select Variant Group → Linked Content Types.
3.  Select one or more content types to associate with the variant group.
4.  Click **Apply → Save**.

**Additional Resource:** For more information, refer to [Linking Content Types](/docs/headless-cms/manage-variant-groups#linking-content-types).

### CMS - Create Entry Variants

1.  In **CMS → Entries**, create personalized entries for each audience combination (for example Banner - US Mobile Back-to-School).
2.  Publish these entries to the connected environment.
3.  In **Personalize → Experiences → \[Your Experience\] → Configuration**, map each audience to its entry.
    1.  Audience 1 → Entry 1
    2.  Audience 2 → Entry 2
4.  Once published, Personalize delivers the correct entry in real time based on layered audience rules.

**Additional Resource:** For more information, refer to [Create an Entry Variant](/docs/headless-cms/create-an-entry-variant).

### Dev - Set up Personalize Edge SDK (Manifest and Impressions/Events)

1.  **Install SDK**
    -   Add the Personalize SDK to your site using npm, yarn, or pnpm. You can also add it through [Google Tag Manager](/docs/personalize/google-tag-manager-integration-with-personalize) or another tag manager for impression and event tracking.
2.  **Retrieve active variants**
    -   Initialize the SDK on each page load and retrieve active variant aliases for the visitor.
    -   For server-side rendered (SSR) sites, run this logic at the edge using an edge function or middleware.
        
        **Additional Resource:** For more information, refer to [Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture](/docs/personalize/ssr-edge-routing-technical-implementation-architecture), [Setup Next.js Website with Personalize - Launch](/docs/personalize/setup-nextjs-website-with-personalize-launch).
        
    -   Pass the active variant aliases to the Contentstack Delivery SDK to fetch corresponding entry variants.
3.  **Track Impressions**
    
    -    Call [triggerImpressions()](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#triggerimpressions) when a variant is displayed.
    
    **Note:** Tracking impressions is optional but helps measure visibility.
    
4.  **Track Events (for A/B Test)**
    -   On user interaction call triggerEvent('event\_name', { experienceId, variantAlias })

**Additional Resource:** For more information, refer to [Get Started with Personalize SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk), [Manifest API](/docs/developers/apis/personalize-edge-api/manifest), [Dynamically Track Variant Impressions](/docs/personalize/dynamically-track-variant-impressions).

### Personalize - Activate the Experience

1.  Go to **Personalize → Experiences → Your Experience**.
2.  Verify Overview, Configuration, and Preview.
3.  Click **Activate Draft**.
4.  Confirm impressions and events are firing correctly.
5.  Monitor Experience Analytics to track performance and declare the winning variant.

**Additional Resource:** For more information, refer to [Experience Analytics](/docs/personalize/experience-analytics).

## Reference Project

You can refer to the following project for a reference implementation on [Layered Experiences GitHub repository](https://github.com/contentstack-personalize-examples/personalize-layered-experiences) hosted at [Personalize-layered-experiences.](https://personalize-layered-experiences.contentstackapps.com/)

## Outcomes You Can Expect

-   **Deeper personalization:** Deliver content that reflects full visitor context.
-   **Higher engagement:** Reduce bounce rates by matching multiple signals.
-   **Smarter campaigns:** Layer behavioral, contextual, and campaign data for improved ROI.

## The Personalize Advantage

-   **Native CMS integration:** Variants created directly from entries.
-   **Edge delivery:** Real-time evaluation of multiple signals.
-   **Flexible layering:** Combine behavioral, contextual, and campaign attributes.
-   **Near real-time analytics:** Monitor combinations dynamically.
-   **Scalable:** Extend layering beyond banners to modules, sections, or templates.
