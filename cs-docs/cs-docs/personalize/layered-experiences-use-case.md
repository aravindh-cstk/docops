---
title: Layered Experiences Use Cases
description: Layered Experiences Use Cases
url: https://www.contentstack.com/docs/personalize/layered-experiences-use-case
product: Contentstack Personalize
doc_type: use-case
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# Layered Experiences Use Cases

This page explains how to use layered experiences in Contentstack Personalize to combine multiple visitor attributes (such as location, device, campaign, and behavior) for richer targeting. It is intended for teams implementing personalization (developers and content managers) and should be used when you need to resolve overlapping audience rules and deliver the correct variant in real time.

Visitors rarely fit into a single category. A user might arrive from a marketing campaign, browse from a mobile device, and live in New York City.

With **layered experiences**, you can combine multiple attributes to create a richer personalization that reflects the complete visitor context, not just one condition.

## The Challenge - Why One-Dimensional Targeting Fails to Meet Expectations?
Without layered targeting, enterprises risk showing incomplete or mismatched content.
- **Retail / eCommerce: Seasonal and Campaign**
A shopper in Chicago arrives from a back-to-school ad on a website. Without layered targeting, they might only see a generic seasonal banner, missing the opportunity to show a relevant **back-to-school promotion**.

**Without Layering:** The visitor from Chicago sees a variant personalized only by season.

**With Layering:** The page recognizes both context signals, season and campaign, and renders a back-to-school banner for Chicago visitors, increasing relevance.
- **Media / Publishing: Interest and Location**
A reader in the US has an interest in sports (frequently visits the sports section). When they revisit the home page, the page can combine both contexts, location and interest, to serve more relevant content.

**Without Layering:** The visitor only sees the US news variant, even if they belong to both the American and Sports Enthusiast audiences.

**With Layering:** The visitor sees US news along with a banner highlighting sports news, since they belong to both audiences.
- **Travel / Hospitality: Destination and Audience Type**
A visitor in Denver clicks a ski vacation campaign link but browses family travel packages. Without layering, the system might show generic Denver travel offers instead of relevant family ski deals.

**Without Layering:** The visitor sees only packages available in Denver.

**With Layering:** The page combines visitor preferences (ski + family) with their location (Denver), displaying family ski packages for full context.

## The Solution - Richer Targeting with Personalize
**Contentstack Personalize** allows you to define multi-condition audiences and resolve overlaps using prioritization, ensuring the correct experience is delivered every time.
- **Audience stacking:** Combine multiple conditions such as location, device, campaign, or behavior.
- **Experience configuration:** Map entries or modules to each layered audience.
- **Variant prioritization:** Control which experience is delivered when multiple rules apply.
- **Edge delivery:** Evaluate all rules instantly and serve the correct content in real time.

## Level of Effort: Medium
Layered experiences require defining multi-condition audiences and setting up prioritization, but they scale easily once the framework is in place.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to the [Contentstack Organization](/docs/developers/organization/about-organizations) with Personalize enabled
- Access to a [Personalize project](/docs/personalize/create-personalize-project) linked to your [Stack](/docs/developers/set-up-stack/about-stack)
- [Linked Content Types](/docs/developers/variants/manage-variant-groups#linking-content-types) and published entry variants
- [Personalize Edge SDK](/docs/developers/sdks/personalize-edge-sdk/javascript) installed and integrated

## Steps to Implement

### Personalize - Create a Project connected to your Stack
- Navigate to App Switcher → Personalize → + New Personalize Project

**Additional Resource:** For more information, refer to [Create a Personalize Project](/docs/personalize/create-personalize-project).

### Personalize – Create Audiences
- Navigate to Personalize → Audiences → + New Audience.
- Enter a descriptive name (for example: US Mobile Back-to-School).
- In the Rule Builder, add multiple conditions:country = US
- device = mobile
- campaign_source = back-to-school
- In the **Rules** section:Select **Match All** (all rules must be true) or **Match Any** (any rule can be true).
- Click **+ Add Rule** to add conditions.
- (Optional) Click **+ Add Group** to group rules for complex logic.
- Save the audience.

**Additional Resource:** For more information, refer to [Create an Audience](/docs/personalize/create-audience).

### Personalize - Create Experience with Audiences
- Navigate to **Personalize → Experiences → + New Experience**.
- In **Select Experience Type**, choose a Segmented Experience.
- On the draft page, fill in the **Overview** section and click **Save General Details**.
- Open the **Configuration** tab → click **+ Add Variant**.
- For each variant:Set **Condition** to **Match All** or **Match Any**.
- Click **Audiences** → select one or more audiences → **Apply Selected Audiences**.
- (Optional) Add multiple variants and drag to reorder them — the top variant takes priority.
- In the CMS, each experience appears as a **Variant Group** with the same name.Create **Entry Variants** for each variant in the CMS before activation.
- **Activate Draft** to go live.

**Additional Resource:** For more information, refer to [Create a Segmented Experience](/docs/personalize/create-segmented-experience), [Create an A/B Test Experience](/docs/personalize/create-ab-test-experience).

### How Layering of Experiences Works
When multiple experiences are active on a single page, layering comes into play.
- If experiences target **different sections**, Personalize automatically layers them, displaying all relevant active variants.
- If experiences target **the same section**, Personalize applies **experience prioritization**. When two variants resolve for the same section, the higher-priority experience takes precedence.

**Additional Resource:** For more information, refer to [Prioritize Experiences](/docs/personalize/prioritize-experiences).

### CMS - Link Content Types
**Variant Groups** and **Variants** are automatically created in the CMS based on experiences and variants defined in Personalize. (This may take a few milliseconds to populate.)

**Additional Resource:** For more information, refer to [Manage Variant Groups](/docs/developers/variants/manage-variant-groups).
- Navigate to the Experience → Click the **Info** icon → scroll to **Variant Group → Linked Content Types**.
- If the link is not available, go to Stack → Settings → Variants → select Variant Group → Linked Content Types.
- Select one or more content types to associate with the variant group.
- Click **Apply → Save**.

**Additional Resource:** For more information, refer to [Linking Content Types](/docs/developers/variants/manage-variant-groups#linking-content-types).

### CMS - Create Entry Variants
- In **CMS → Entries**, create personalized entries for each audience combination (for example Banner - US Mobile Back-to-School).
- Publish these entries to the connected environment.
- In **Personalize → Experiences → [Your Experience] → Configuration**, map each audience to its entry.Audience 1 → Entry 1
- Audience 2 → Entry 2
- Once published, Personalize delivers the correct entry in real time based on layered audience rules.

**Additional Resource:** For more information, refer to [Create an Entry Variant](/docs/content-managers/entry-variants/create-an-entry-variant).

### Dev - Set up Personalize Edge SDK (Manifest and Impressions/Events)
- **Install SDK**Add the Personalize SDK to your site using npm, yarn, or pnpm. You can also add it through [Google Tag Manager](/docs/personalize/google-tag-manager-integration-with-personalize) or another tag manager for impression and event tracking.
- **Retrieve active variants**Initialize the SDK on each page load and retrieve active variant aliases for the visitor.
- For server-side rendered (SSR) sites, run this logic at the edge using an edge function or middleware.**Additional Resource: **For more information, refer to [Server Side Rendering (SSR) with Edge Routing Technical Implementation Architecture](/docs/personalize/ssr-edge-routing-technical-implementation-architecture), [Setup Next.js Website with Personalize - Launch](/docs/personalize/setup-nextjs-website-with-personalize-launch).
- Pass the active variant aliases to the Contentstack Delivery SDK to fetch corresponding entry variants.
- **Track Impressions** Call [triggerImpressions()](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#triggerimpressions) when a variant is displayed.

**Note:** Tracking impressions is optional but helps measure visibility.
- **Track Events (for A/B Test)**On user interaction call `triggerEvent('event_name', { experienceId, variantAlias })`

**Additional Resource:** For more information, refer to [Get Started with Personalize SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk), [Manifest API](/docs/developers/apis/personalize-edge-api#manifest), [Dynamically Track Variant Impressions](/docs/personalize/dynamically-track-variant-impressions).

### Personalize - Activate the Experience
- Go to **Personalize → Experiences → Your Experience**.
- Verify Overview, Configuration, and Preview.
- Click **Activate Draft**.
- Confirm impressions and events are firing correctly.
- Monitor Experience Analytics to track performance and declare the winning variant.

**Additional Resource:** For more information, refer to [Experience Analytics](/docs/personalize/experience-analytics).

## Reference Project
You can refer to the following project for a reference implementation on [Layered Experiences GitHub repository](https://github.com/contentstack-personalize-examples/personalize-layered-experiences) hosted at [Personalize-layered-experiences.](https://personalize-layered-experiences.contentstackapps.com/)

## Outcomes You Can Expect
- **Deeper personalization:** Deliver content that reflects full visitor context.
- **Higher engagement:** Reduce bounce rates by matching multiple signals.
- **Smarter campaigns:** Layer behavioral, contextual, and campaign data for improved ROI.

## The Personalize Advantage
- **Native CMS integration:** Variants created directly from entries.
- **Edge delivery:** Real-time evaluation of multiple signals.
- **Flexible layering:** Combine behavioral, contextual, and campaign attributes.
- **Near real-time analytics:** Monitor combinations dynamically.
- **Scalable:** Extend layering beyond banners to modules, sections, or templates.

## Common questions

### What is a layered experience?
A layered experience combines multiple attributes to create a richer personalization that reflects the complete visitor context, not just one condition.

### What happens when multiple experiences are active on a single page?
If experiences target **different sections**, Personalize automatically layers them, displaying all relevant active variants. If experiences target **the same section**, Personalize applies **experience prioritization**.

### Do I need to track impressions and events?
Tracking impressions is optional but helps measure visibility, and events are used for A/B Test interactions via `triggerEvent('event_name', { experienceId, variantAlias })`.

### Where can I find a reference implementation?
A reference implementation is available in the [Layered Experiences GitHub repository](https://github.com/contentstack-personalize-examples/personalize-layered-experiences) hosted at [Personalize-layered-experiences.](https://personalize-layered-experiences.contentstackapps.com/)