---
title: "Dynamically Track Variant Impressions Based On Entry Variant Shown"
description: "Learn how to dynamically track variant impressions using the triggerImpression() method in Personalize, based on active variants returned by the CDA."
url: /personalize/dynamically-track-variant-impressions
uid: bltd0d0ab9c37356cfe
---

# Dynamically Track Variant Impressions Based On Entry Variant Shown

## Dynamically Track Variant Impressions Based On Entry Variant Shown

Use dynamic impression tracking with the Personalize Edge SDK’s [triggerImpression()](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#personalize-triggerimpression) method to support entries with multiple experiences and variants. You can extract the applied variants from the [Content Delivery API (CDA)](/docs/developers/apis/content-delivery-api) response and programmatically trigger impressions based on the resolved [variant aliases](/docs/personalize/glossary-key-features#variant-aliases).

We **recommend** this approach to minimize developer involvement when rolling out new and updated experiences. The CDA response includes a publish\_details.variants object, which shows the resolved variant(s) for a specific entry based on active experiences and audience conditions determined by Personalize.

### This guide explains how to:

-   Retrieve the active variant data for a user from the **Personalize Edge API –** [Manifest](/docs/personalize/glossary-key-features#user-manifest) **endpoint**
-   Identify the applied variants dynamically from the entry response
-   Use triggerImpressions() to register impressions for each visible variant

### Why This Is Important

When using **Personalize**, [experiences](/docs/personalize/about-experiences) and [variants](/docs/personalize/about-variants) are resolved dynamically at runtime based on the user’s audience membership. Because the content served can be a dynamic mix of variants, it is essential to extract the applied variants from the **CDA** response. This ensures your impression tracking reflects exactly what was shown to the user, enabling accurate measurement and analytics.

## Prerequisites

-   Contentstack [Personalize SDK initialized](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#personalize-init) on the page
-   [Entry](/docs/developers/apis/content-delivery-api/entries) retrieved via Contentstack CDA (REST, GraphQL, or SDK)
-   [Experience(s)](/docs/personalize/about-experiences) configured in Personalize
-   At least one [variant](/docs/personalize/about-variants) created and applied on the entry
-   [JavaScript runtime](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk) (Node/browser) (optional)

## Steps for Execution

1.  [Retrieve the active variants for a user using Personalize Edge](#retrieve-the-active-variants-for-a-user-using-personalize-edge)
2.  [Query the Entry via CDA](#query-the-entry-via-cda)
3.  [Extract Variant Aliases from the Response](#extract-variant-aliases-from-the-response)
4.  [Trigger Impressions](#trigger-impressions)

1.  ## Retrieve the Active Variants for a User Using Personalize Edge

    The GET Manifest endpoint, also known as the [Manifest API](/docs/developers/apis/personalize-edge-api/manifest#get-manifest), returns the active variants for a user. When a user visits your site, Personalize evaluates all Active Experiences configured for that page and determines which variant to show for each experience.

    This variant alias can then be used to request the personalized entry content from the Contentstack Content Delivery API (CDA).

    **Note:** The manifest only indicates which variant should be displayed, not whether the variant content actually exists or was rendered. Only trigger impressions after confirming that the corresponding variant content was retrieved and shown on the page.

    **Example: JavaScript Edge SDK**

    ```
    import Personalize from '@contentstack/personalize-edge-sdk';
    const personalizeSDK = await Personalize.init(projectUid);
    const variantAliases = personalizeSDK.getVariantAliases();
    console.log(variantAliases); // example: ['cs_personalize_0_0', 'cs_personalize_1_1']
    ```

    **Example: REST API (GET /manifest)**

    ```
    curl -X GET 'https://personalize-edge.contentstack.com/manifest' \
      -H 'X-Project-Uid: <your_personalize_project_uid>' \
      -H 'Cookie: cs_personalize_user_uid=<anonymous_user_id>' \
      -H 'X-Page-Url: https://www.mysite.com/homepage'
    ```

    **Sample Response:**

    ```
    {
      "experiences": [
        {
          "shortUid": "0",
          "activeVariantShortUid": "0"
        },
        {
          "shortUid": "1",
          "activeVariantShortUid": "1"
        }
      ]
    }
    ```

    **Note:** Replace the request URL domain, x-project-uid header, and cs\_personalize\_user\_uid cookie with actual values.

2.  ## Query the Entry via CDA

    Use the active variants to fetch personalized entry data via the [Contentstack CDA](/docs/developers/apis/content-delivery-api) (REST, GraphQL, or SDK). Make sure to include the publish\_details field to access applied variant metadata.

    **REST API:** [Entry variant API](/docs/developers/apis/content-delivery-api/entry-variants)  
    **SDK:** [Get Variants](/docs/developers/sdks/content-delivery-sdk/typescript/reference#variants)

    Each key in the variants object is a **Variant UID**. Each value includes an alias in the format cs\_personalize\_<experience\_uid>\_<variant\_uid>.

    ```
    {
      "entry": {
        "title": "Dynamic Banner",
        "publish_details": {
          "variants": {
            "<first_variant_uid>": {
              "alias": "cs_personalize_0_0",
              "environment": "<your_environment>"
            },
            "<second_variant_uid>": {
              "alias": "cs_personalize_1_1",
              "environment": "<your_environment>"
            }
          }
        }
      }
    }
    ```

    **Note:** Each value includes metadata, including the alias, which is needed to register impressions.

3.  ## Extract Variant Aliases from the Response

    You can extract variant aliases using the CDA response. These aliases are required to register impressions using the triggerImpressions() method or the Edge API.

    ```
    const variants = entry?.publish_details?.variants || {};
    const variantAliases = Object.values(variants).map((v) => v.alias);
    ```

4.  ## Trigger Impressions

    Once you have extracted the active variant aliases, register impression events for each one. This step is critical for tracking which variants were shown to the user and measuring the performance of your personalization efforts.

    ### Using the SDK

    ```
    // after initializing the SDK
    personalizeSDK.triggerImpressions({
      aliases: variantAliases
    });
    ```

    **Note:** Ensure the variant content is rendered before calling triggerImpressions() to avoid false impressions.

    ### Using the API Directly

    ```
    curl -X POST 'https://personalize-edge.contentstack.com/events' \
      --header 'x-cs-personalize-user-uid: <user_id>' \
      --header 'x-project-uid: <project_uid>' \
      --header 'Content-Type: application/json' \
      --header 'Accept: application/json' \
      --data '[
        {
          "type": "IMPRESSION",
          "experienceShortUid": "0",
          "variantShortUid": "0"
        },
        {
          "type": "IMPRESSION",
          "experienceShortUid": "1",
          "variantShortUid": "1"
        }
      ]'
    ```

    Replace all placeholder values with the actual values from your project setup.


### Best Practices

-   Always validate that publish\_details.variants exists before proceeding.
-   Avoid duplicate impression events for the same variant on the same page load.
-   Use the Manifest API for determining the current audience-selected variants.
-   Use the CDA response only if content rendering depends on the returned entry structure.

**Additional Resources**

-   [Variant aliases](/docs/personalize/glossary-key-features#variant-aliases)
-   [Personalize SDK: triggerImpression() method](/docs/developers/sdks/personalize-edge-sdk/javascript/reference#personalize-triggerimpression)
-   [Set up Next.js website with Personalize (Launch)](/docs/personalize/setup-nextjs-website-with-personalize-launch)
-   [Set up Next.js website with Personalize (Vercel)](/docs/personalize/setup-nextjs-website-with-personalize-vercel)

## Related Resources

-   [Personalize Edge API: Get Manifest](/docs/developers/apis/personalize-edge-api/manifest)
-   [Personalize Edge API: Track Events](/docs/developers/apis/personalize-edge-api/events)
