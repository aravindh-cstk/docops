---
title: "Location-based Personalization Use Cases"
description: "Learn how to deliver personalized experiences to users based on their location with Contentstack Personalize."
url: /personalize/location-based-personalization-use-case
uid: blt684bc8b22a140e51
---

# Location-based Personalization Use Cases

## Location-based Personalization Use Cases

Imagine you are a nationwide retailer rolling out a campaign. A shopper in Phoenix expects to see “Beat the Heat” offers, while someone in Chicago is already searching for fall jackets. For the shopper in Chicago, a ‘Beat the heat’ offer may not be relevant at all and vice versa for the shopper in Phoenix. By displaying irrelevant content, we risk wasted impressions and reduced engagement.

This extends beyond retail, if you have a travel site, you could show ski vacation deals to visitors in Denver while highlighting beach escapes for those in Miami. As a financial services provider, you might promote wildfire insurance in California but hurricane protection in Florida.

In every case, **location matters,** and ignoring it leaves opportunity on the table. Location-based personalization allows you to tailor experiences by geography, improving engagement and reducing irrelevant content delivery.

With **Contentstack Personalize**, you can dynamically serve targeted banners, promotions, and messages based on a user’s city, state, or country. Whether it's seasonal campaigns, regional pricing, or localized offers, geographic personalization ensures your content resonates with your audience.

## What You Will Learn

-   How to define location-based audiences by country, region, or city.

-   How to create a segmented experience with location-specific variants.

-   How to create location-specific personalized content as entry variants.

-   How to set up the Personalize Edge SDK to retrieve active variants and track impressions.


## The Challenge - Why Location Matters?

Without location-aware personalization, you risk:

-   Displaying irrelevant promotions that frustrate users.
-   Showing shipping options or prices that don’t apply in the user’s region.
-   Delivering generic, one-size-fits-all content that fails to build trust.

Let’s talk about some real-world use cases.

**E-commerce/Retail: The Seasonal Disconnect**  
Customers in Texas are still buying summer apparel, while those in Minnesota are already shopping for winter gear. A single campaign message misses both.

![E-commerce seasonal use case](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt082744e5debec73e/69009b91daa53331eca94386/E_Commerce-use-case.png)

**Hospitality/Travel: The Wrong Getaway**  
A visitor in Boston might be looking for a Florida beach retreat, while someone in Los Angeles is searching for a mountain escape. A generic promotion fails to convert either.

![Hospitality travel use case](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt636064d12245769a/69009bf1ef3c87af8a0e3e19/Hospitality-use-case.png)

**Insurance/Financial Services: Regional Coverage**  
Urban customers may be more interested in renter's insurance, while suburban customers prioritize auto and home coverage. If you Show the same generic insurance message to both reduces relevance and trust.

![Insurance regional coverage use case](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf64b0562fd936f3a/69009c85db5b0b58e6c423bb/Finance-use-case.png)

## The Solution: Deliver Relevance with Personalize

Contentstack Personalize makes location-based personalization straightforward, effective, and delivers in real-time:

-   **Audience builder:** Define audiences by **country, state, or city**, and combine them with behavioral rules.
-   **Experiences:** Assign location-based content variants directly to audiences.
-   **Edge delivery:** Ensure the right variant is delivered instantly, in real-time, on the first page load.

## Level of Effort: Easy

**Prerequisites:**

-   [Contentstack account](https://www.contentstack.com/login/)
-   Personalize-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   Access to Personalize [project](/docs/personalize/create-personalize-project)

**This setup requires:**

-   Installing the SDK
-   Defining audiences
-   Creating experiences
-   Creating location-specific personalized content

## Steps to Implement

### Personalize - Create a Project connected to your Stack

1.  Navigate to App Switcher → Personalize → + New Personalize Project

**Additional Resource:** For more information, refer to [Create a Personalize Project.](/docs/personalize/create-personalize-project)

### Create location-based audiences

1.  Go to **Personalize → Audiences → + New Audience**.
2.  Give the audience a descriptive name (for example, Visitors in California).
3.  In the **Rules** section:
    1.  Use **Match All** if you want visitors to meet every condition.
    2.  Use **Match Any** if any condition should qualify.
4.  Add location-based rules, for example:
    -   country = US
    -   region = California
    -   city = Los Angeles
5.  Save the audience.

**Additional Resource:** For more information, refer to [Create an Audience.](/docs/personalize/create-audience)

### Personalize – Create Experience targeted to the Audiences

1.  Go to **Personalize → Experiences → + New Experience**.
2.  Select **Experience type: Segmented**.
3.  Give your Experience a name and click **Save General Details** to create it.
4.  In the **Configuration** tab:
    1.  Click **\+ Add Variant**.
    2.  Give your variant a name, choose a match condition, and select the location-based audience(s) you created.
    3.  Repeat for additional variants (for example, Hot Weather Variant, Cool Weather Variant, etc).
    4.  Drag and drop to order variants by priority. This is important in cases where a visitor matches the conditions for multiple variants (for example, if a Variant targets California and another the city of Los Angeles, and the visitor is currently in Los Angeles), then the Variant higher up in the list will be shown to the visitor.
5.  Save Draft.

**Additional Resource:** For more information, refer to  [Create a Segmented Experience](/docs/personalize/create-segmented-experience)

### CMS - Link Content Types

1.  Navigate to the desired Stack → Settings → Variants → select the associated Variant Group → Linked Content Types.  

    **Note:** Variant Groups and Variants are automatically created for you based on the Experiences and Variants you define in Personalize.

    **Additional Resource:** For more information, refer to [Manage Variant Groups](/docs/headless-cms/manage-variant-groups).

2.  In the **Linked Content Types** field, select the content types whose entries you wish to personalize.
3.  Click **Apply → Save.**

**Additional Resource:** For more information, refer to [Linking Content Types.](/docs/headless-cms/manage-variant-groups#linking-content-types)

### CMS - Create Personalized Content in Entry Variants

1.  Go to **CMS → Entries →** \[Your Entry with content that needs to be personalized\].
2.  Create an Entry Variant for all the Variants you defined.
3.  Publish the entries to the connected environment.
4.  In **Personalize → Experiences → \[Your Experience\] → Configuration**, map each variant to the correct entry.

Once published, the mapping between Personalize Experiences and Entry Variants determines which personalized content each visitor sees in real time based on their location.

**Additional Resource:** For more information, refer to [Create an Entry Variant.](/docs/headless-cms/create-an-entry-variant)

### Dev – Set up Personalize Edge SDK (Retrieve active variants and Track impressions)

1.  **Install SDK**
    -   Add the Personalize SDK via npm/yarn/pnpm to your site’s codebase. For frontend code, you can also use [Google Tag Manager](/docs/personalize/google-tag-manager-integration-with-personalize) or a preferred tag manager for easier impression and event tracking.
2.  **Retrieve active variants**

    -   Initialize the SDK on every new page load and get the active variants aliases for the current visitor. We recommend server-side rendered (SSR) sites place this logic at the edge using middleware.
    -   Pass the active variant aliases to the Contentstack Delivery SDK to fetch corresponding entry variants.

    **Additional Resource:** For more information, refer to S[erver Side Rendering (SSR) with Edge Routing Technical Implementation Architecture](/docs/personalize/ssr-edge-routing-technical-implementation-architecture), [Setup Next.js Website with Personalize - Launch](/docs/personalize/setup-nextjs-website-with-personalize-launch).

3.  **Track Impressions**
    -   When displaying a banner, track an impression using [triggerImpressions()](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#triggerimpressions).

        **Note:** Tracking impressions is optional but recommended to measure which variants are viewed most frequently.

4.  **Track Events (for A/B Test)**
    -   On click, call triggerEvent('event\_name', { experienceId, variantAlias }).

**Additional Resource:** For more information, refer to [Get Started with Personalize SDK](/docs/developers/sdks/personalize-edge-sdk/javascript/get-started-with-javascript-personalize-edge-sdk) , [Manifest API](/docs/developers/apis/personalize-edge-api/manifest), [Dynamically Track Variant Impressions.](/docs/personalize/dynamically-track-variant-impressions)

### Personalize - Activate the Experience

1.  In Personalize → Experiences → Your Experience
2.  Verify Overview and Configuration
3.  Click **Activate Draft**
4.  Visit your personalized site and confirm impressions are tracked correctly.
5.  Monitor Experience Analytics to measure performance and engagement.

**Additional Resource:** For more information, refer to [Experience Analytics.](/docs/personalize/experience-analytics)

## Reference Project

You can refer to the following project for a reference implementation: [Geolocation Inspiration GitHub repository](https://github.com/contentstack-personalize-examples/personalize-geolocation-inspiration), hosted at [Personalize-geolocation-inspiration.](https://personalize-geolocation-inspiration.contentstackapps.com/)

## Outcomes You Can Expect

-   **Higher relevance:** Show content tailored to the visitor’s location.
-   **Reduced friction:** Avoid mismatched pricing, shipping, or legal information.
-   **Increased engagement:** Localized offers resonate more deeply, driving higher conversions.

## The Personalize Advantage

-   **Location-aware targeting out of the box:** Use predefined geo attributes (Country, Region, City) to define audiences without external tools.
-   **Native CMS integration:** Create and manage regional entry variants (e.g., Hero Banner – California, Hero Banner - Texas) directly in Contentstack.
-   **Real-time edge delivery:** Personalize resolves a visitor’s location instantly and serves the correct variant without reloads.
-   **Flexible fallback logic:** Configure default audiences (e.g., “All US Visitors”) to ensure no one sees a blank experience.
-   **Analytics by region:** Measure impressions, clicks, and conversions per location to optimize your regional campaigns.
-   **Scalable approach:** Start with broad geographies (country-level) and refine to states or cities as needed.
