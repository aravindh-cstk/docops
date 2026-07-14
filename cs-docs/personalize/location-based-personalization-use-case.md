---
title: "[Personalize] - Location-based Personalization Use Cases"
description: Location-based Personalization Use Cases
url: https://www.contentstack.com/docs/personalize/location-based-personalization-use-case
product: Contentstack Personalize
doc_type: use-cases
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Personalize] - Location-based Personalization Use Cases

This page explains how to use Contentstack Personalize for location-based personalization, including why location matters, common industry use cases, and step-by-step implementation guidance for setting up audiences, experiences, CMS variants, and SDK-based delivery and tracking.

### Location-based Personalization Use Cases

Imagine you are a nationwide retailer rolling out a campaign. A shopper in Phoenix expects to see “Beat the Heat” offers, while someone in Chicago is already searching for fall jackets. For the shopper in Chicago, a ‘Beat the heat’ offer may not be relevant at all and vice versa for the shopper in Phoenix. By displaying irrelevant content, we risk wasted impressions and reduced engagement.

This extends beyond retail,** **if you have a travel site, you could show ski vacation deals to visitors in Denver while highlighting beach escapes for those in Miami. As a financial services provider, you might promote wildfire insurance in California but hurricane protection in Florida.

In every case, **location matters, **and ignoring it leaves opportunity on the table. Location-based personalization allows you to tailor experiences by geography, improving engagement and reducing irrelevant content delivery.

With **Contentstack Personalize**, you can dynamically serve targeted banners, promotions, and messages based on a user’s city, state, or country. Whether it's seasonal campaigns, regional pricing, or localized offers, geographic personalization ensures your content resonates with your audience.

## The Challenge - Why Location Matters?
Without location-aware personalization, you risk:
- Displaying irrelevant promotions that frustrate users.
- Showing shipping options or prices that don’t apply in the user’s region.
- Delivering generic, one-size-fits-all content that fails to build trust.

Let’s talk about some real-world use cases.

**E-commerce/Retail: The Seasonal Disconnect**
Customers in Texas are still buying summer apparel, while those in Minnesota are already shopping for winter gear. A single campaign message misses both.

**Hospitality/Travel: The Wrong Getaway**
A visitor in Boston might be looking for a Florida beach retreat, while someone in Los Angeles is searching for a mountain escape. A generic promotion fails to convert either.

**Insurance/Financial Services: Regional Coverage**
Urban customers may be more interested in renter's insurance, while suburban customers prioritize auto and home coverage. If you Show the same generic insurance message to both reduces relevance and trust.

## The Solution: Deliver Relevance with Personalize
Contentstack Personalize makes location-based personalization straightforward, effective, and delivers in real-time:
- **Audience builder:** Define audiences by **country, state, or city**, and combine them with behavioral rules.
- **Experiences:** Assign location-based content variants directly to audiences.
- **Edge delivery:** Ensure the right variant is delivered instantly, in real-time, on the first page load.

## Level of Effort: Easy
**Prerequisites:**
- [Contentstack account](https://www.contentstack.com/login)
- Access to the [Contentstack Organization](../developers/organization/about-organizations.md) that has Personalize enabled
- Access to a [project](./create-personalize-project.md) in Personalize.

**This setup requires:**
- Installing the SDK
- Defining audiences
- Creating experiences
- Creating location-specific personalized content

## Steps to Implement

### Personalize - Create a Project connected to your Stack
- Navigate to App Switcher → Personalize → + New Personalize Project

**Additional Resource:** For more information, refer to [Create a Personalize Project.](./create-personalize-project.md)

### Create location-based audiences
- Go to **Personalize → Audiences → + New Audience**.
- Give the audience a descriptive name (for example, Visitors in California).
- In the **Rules** section:Use **Match All** if you want visitors to meet every condition.
- Use **Match Any** if any condition should qualify.
- Add location-based rules, for example:country = US
- region = California
- city = Los Angeles
- Save the audience.

**Additional Resource:** For more information, refer to [Create an Audience.](./create-audience.md)

### Personalize – Create Experience targeted to the Audiences
- Go to **Personalize → Experiences → + New Experience**.
- Select **Experience type: Segmented**.
- Give your Experience a name and click **Save General Details** to create it.
- In the **Configuration** tab:Click **+ Add Variant**.
- Give your variant a name, choose a match condition, and select the location-based audience(s) you created.
- Repeat for additional variants (for example, Hot Weather Variant, Cool Weather Variant, etc).
- Drag and drop to order variants by priority. This is important in cases where a visitor matches the conditions for multiple variants (for example, if a Variant targets California and another the city of Los Angeles, and the visitor is currently in Los Angeles), then the Variant higher up in the list will be shown to the visitor.
- Save Draft.

**Additional Resource:** For more information, refer to  [Create a Segmented Experience](./create-segmented-experience.md)

### CMS - Link Content Types
- Navigate to the desired Stack → Settings → Variants → select the associated Variant Group → Linked Content Types.
**Note:** Variant Groups and Variants are automatically created for you based on the Experiences and Variants you define in Personalize.

  **Additional Resource:** For more information, refer to [Manage Variant Groups](../developers/variants/manage-variant-groups.md).
- In the **Linked Content Types** field, select the content types whose entries you wish to personalize.
- Click **Apply → Save.**

**Additional Resource:** For more information, refer to [Linking Content Types.](../developers/variants/manage-variant-groups.md#linking-content-types)

### CMS - Create Personalized Content in Entry Variants
- Go to **CMS → Entries → **[Your Entry with content that needs to be personalized].
- Create an Entry Variant for all the Variants you defined.
- Publish the entries to the connected environment.
- In **Personalize → Experiences → [Your Experience] → Configuration**, map each variant to the correct entry.

Once published, the mapping between Personalize Experiences and Entry Variants determines which personalized content each visitor sees in real time based on their location.

**Additional Resource:** For more information, refer to [Create an Entry Variant.](../content-managers/entry-variants/create-an-entry-variant.md)

### Dev – Set up Personalize Edge SDK (Retrieve active variants and Track impressions)
- **Install SDK**Add the Personalize SDK via npm/yarn/pnpm to your site’s codebase. For frontend code, you can also use [Google Tag Manager](./google-tag-manager-integration-with-personalize.md) or a preferred tag manager for easier impression and event tracking.
- **Retrieve active variants**Initialize the SDK on every new page load and get the active variants aliases for the current visitor. We recommend server-side rendered (SSR) sites place this logic at the edge using middleware.
- Pass the active variant aliases to the Contentstack Delivery SDK to fetch corresponding entry variants.

**Additional Resource:** For more information, refer to S[erver Side Rendering (SSR) with Edge Routing Technical Implementation Architecture](./ssr-edge-routing-technical-implementation-architecture.md), [Setup Next.js Website with Personalize - Launch](./setup-nextjs-website-with-personalize-launch.md).
- **Track Impressions**When displaying a banner, track an impression using [triggerImpressions()](../developers/create-content-types/reference.md#triggerimpressions).**Note:** Tracking impressions is optional but recommended to measure which variants are viewed most frequently.
- **Track Events (for A/B Test)**On click, call `triggerEvent('event_name', { experienceId, variantAlias })`.

**Additional Resource: **For more information, refer to [Get Started with Personalize SDK ](../developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk.md), [Manifest API](../../api-docs/api-detail/personalize-edge-api.md#manifest), [Dynamically Track Variant Impressions.](./dynamically-track-variant-impressions.md)

### Personalize - Activate the Experience
- In Personalize → Experiences → Your Experience
- Verify Overview and Configuration
- Click **Activate Draft**
- Visit your personalized site and confirm impressions are tracked correctly.
- Monitor Experience Analytics to measure performance and engagement.

**Additional Resource:** For more information, refer to [Experience Analytics.](./experience-analytics.md)

## Reference Project
You can refer to the following project for a reference implementation: [Geolocation Inspiration GitHub repository](https://github.com/contentstack-personalize-examples/personalize-geolocation-inspiration), hosted at [Personalize-geolocation-inspiration.](https://personalize-geolocation-inspiration.contentstackapps.com/)

## Outcomes You Can Expect
- **Higher relevance:** Show content tailored to the visitor’s location.
- **Reduced friction:** Avoid mismatched pricing, shipping, or legal information.
- **Increased engagement:** Localized offers resonate more deeply, driving higher conversions.

## The Personalize Advantage
- **Location-aware targeting out of the box:** Use predefined geo attributes (Country, Region, City) to define audiences without external tools.
- **Native CMS integration:** Create and manage regional entry variants (e.g., Hero Banner – California, Hero Banner - Texas) directly in Contentstack.
- **Real-time edge delivery:** Personalize resolves a visitor’s location instantly and serves the correct variant without reloads.
- **Flexible fallback logic:** Configure default audiences (e.g., “All US Visitors”) to ensure no one sees a blank experience.
- **Analytics by region:** Measure impressions, clicks, and conversions per location to optimize your regional campaigns.
- **Scalable approach:** Start with broad geographies (country-level) and refine to states or cities as needed.

## Common questions

### What location attributes can I use to define audiences?
You can define audiences by **country, state, or city**.

### Do I need to track impressions for location-based personalization to work?
No. **Note:** Tracking impressions is optional but recommended to measure which variants are viewed most frequently.

### Where should I initialize the Personalize Edge SDK?
Initialize the SDK on every new page load, and for server-side rendered (SSR) sites, place this logic at the edge using middleware.

### How do I ensure visitors still see content if they don’t match a specific location audience?
Configure default audiences (e.g., “All US Visitors”) to ensure no one sees a blank experience.

<!-- filename: personalize-location-based-personalization-use-cases.md -->