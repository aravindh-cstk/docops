---
title: "Set Up Live Preview for Your Stack"
description: "Learn how to configure environments, enable Live Preview, and ensure accurate previews for seamless content management."
url: /headless-cms/set-up-live-preview-for-your-stack
---

# Set Up Live Preview for Your Stack

## Set Up Live Preview for Your Stack

Contentstack's [Live Preview](/docs/headless-cms/about-live-preview/) feature allows you to view real-time content updates while editing entries, ensuring a smooth editing experience and reducing publishing errors.

To enable Live Preview for your stack, log in to your [Contentstack Account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) and click the “Settings” icon**l.**
2.  Navigate to **Environments** and select an existing environment or create a new one.
3.  Add the [Base URL](/docs/headless-cms/add-an-environment/) for each locale to ensure accurate content previews, then **Save** your changes.
4.  Next, navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
5.  Select the **Default Preview Environment**.
    
    **Additional Resource:** By default, Live Preview generates preview URLs using the Base URL configured for an environment and the URL value defined in an entry. This approach works well for simple routing setups. For more complex website structures, use [Custom Preview URLs](/docs/headless-cms/custom-preview-urls) to define dynamic, pattern-based preview URLs.
    
6.  Enable the **Display Setup Status** toggle to display the configuration status.
    
7.  Enable the **Always Open in New Tab** toggle to preview your website in a new browser tab.
    
    **Note:** With the latest Live Preview SDK (**v4.0.0** or **later**), the website opens outside the Contentstack iFrame. This feature is available on select plans. Contact our [support](mailto:support@contentstack.com) team to enable it for your organization.
    
    ![Enable Live Preview.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6336c8654dcc8f3c/69c134f7fc5333a31aa35cd0/Enable_Live_Preview.png)

Once enabled, the **Live Preview** icon appears in the right panel of your entry editor. Clicking this icon opens a side-by-side view, allowing you to edit content while viewing real-time updates.

**Note**: If real-time updates do not appear in the preview panel, check the following:

-   Ensure the correct **preview environment** is selected.
-   Verify the **Base URL** settings in **Environments**.
