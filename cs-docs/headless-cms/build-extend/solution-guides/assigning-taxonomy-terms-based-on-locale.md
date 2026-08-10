---
title: "Assigning Taxonomy Terms Based on Locale"
description: "This guide explains how to assign taxonomy terms according to locale, which in turn influences the application of other business rules for term assignment."
url: /headless-cms/assigning-taxonomy-terms-based-on-locale
---

# Assigning Taxonomy Terms Based on Locale

## Assigning Taxonomy Terms Based on Locale

## Overview

This solution sets up a Taxonomy called “Region” that contains a list of countries, and each country has term UID. Then an Automation is created that does the following:

1.  Listens to the “Create Entry” event for a particular content type.
2.  Sets up mappings from locale codes to country term UIDs.
3.  If the country does not have the mapping, it will set the default term UID as 'usa'.

**Example:** Country “Netherlands” term UID is netherlands.

## Tactical Rundown

1.  Create the following Taxonomy in a stack: ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4850a8c3d501c2d/65f96432a1e81507e5d5c65c/image2.png)
2.  Create a Content Type which also has the Taxonomy field where the locale can be stored. ![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31ad45293724fa79/65f96432173215584ad2ccde/image5.png)
3.  Create an Automation to fill the Region term based on the present entry's language.
    1.  With the **Contentstack** connector create an Entry Trigger for any new entry created based on the particular Content Type. ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3949476564e70942/65f964328330b3df1802f923/image1.png)
    2.  Use the **CodeBlock** connector with the following JavaScript Code:  
        
        ```
        const mapping = {'sw':'sweden', 'en-us':'usa', 'en-uk':'england', 'nl-nl':'netherlands', 'de-de':'germany'}; return mapping[input.locale] || 'usa';
        ```
        
        Here's how it looks:  
        ![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30f7e1716d7da65e/65f96432f50f9a6bba7c181a/image4.png)
    3.  Use the **HTTP** connector to update an entry based on the localized country of the entry.![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe2eba93cb98da4d/65f964325a287d8e37f2f31f/image6.png)

**Examples:**

-   When the entry created in default locale, the term is set as “usa,” and when the entry gets localized into Dutch, the term is set as “netherlands.”
-   Based on the above automation steps, when the entry is localized in Germany, the term is automatically added.![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt63f851a70a4e9845/65f964326119726b8c646fc4/image3.png)
