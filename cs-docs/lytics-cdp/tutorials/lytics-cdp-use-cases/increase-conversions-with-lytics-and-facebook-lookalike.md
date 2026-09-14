---
title: "Increase Conversions with Lytics and Facebook Lookalike"
description: "Increase Conversions with Lytics and Facebook Lookalike"
url: /lytics/increase-conversions-with-lytics-and-facebook-lookalike
---

# Increase Conversions with Lytics and Facebook Lookalike

## Increase Conversions with Lytics and Facebook Lookalike

With Lytics audiences and Facebook lookalike you can increase conversions by targeting new prospects that have similar characteristics to your high value customers. This guide will cover how you can create a source audience of your top lifetime purchasers in Lytics and use it in a [Facebook lookalike audience](https://www.facebook.com/business/a/lookalike-audiences) for a targeted ad campaign that reaches new users who are likely to become purchasers.

### Build an Audience of High Value Purchasers in Lytics

For purchase data, this example uses an account that has been connected with Shopify data via Lytics' Shopify import. You may be importing your purchase data to Lytics via some other method such as the Javascript Tag, CSV, or one of our other commerce integrations. When building your audience the custom rule you choose may differ for your account.

Follow the steps outlined [in this guide](/marketing/use-cases/advertising/using-lytics-with-facebook-lookalike-audiences#build-your-source-audience-in-lytics) to build source audiences in Lytics. The steps that follow in this guide provide specific instructions on constructing a high value purchasers audience.

1.  In the audience builder, select **Custom Rule**.
2.  If you have imported data via Shopify, search for and select the field **Lifetime Order Price**. This field contains the sum of all purchase amounts made by the user.

![lifetime order price](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am068823f3378f1202/8e85e5fa42f960bac18e271b/img-0164.jpg)

1.  From the rule options **Lifetime Order Pice must...** select **be at least**. In the **These values** textbox enter a price threshold.

![audience builder high value purchasers](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am48cbed40f5e61901/384d9fde9361817dc3877545/img-0165.jpg)

1.  Click **Add Condition**.
2.  Verify the user count of your audience. Facebook expects the source audience to be anywhere from 1,000 to 50,000 users. You may need to adjust the price threshold or add additional rules to generate an audience of the appropriate size and specificity.

**NOTE:** If you're unable to generate an audience of appropriate size with the Lifetime Order Price field, consider creating a source audience of recent purchasers, or purchasers of specific products instead.

1.  Click **Create** to save your audience.

### Using your Lytics Audience in a Lookalike Ad Campaign

Follow through with the steps below to use your high value purchasers audience for the source of a Facebook lookalike ads campaign:

1.  [Export to Facebook](/marketing/use-cases/advertising/using-lytics-with-facebook-lookalike-audiences#export-to-facebook)
2.  [Create a Facebook Lookalike Audience](/marketing/use-cases/advertising/using-lytics-with-facebook-lookalike-audiences#create-a-facebook-lookalike-audience)
3.  [Assign your Lookalike Audience to an Ad](/marketing/use-cases/advertising/using-lytics-with-facebook-lookalike-audiences#assign-your-lookalike-audience-to-a-facebook-ad)

![high value ad](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4d1f125873bef4a8/54bab892d99bcb44b7b3527d/img-0166.jpg)
