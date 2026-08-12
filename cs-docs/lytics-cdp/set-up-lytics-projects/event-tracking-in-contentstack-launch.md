---
title: "Real-Time User Event Tracking with Lytics in Contentstack Launch"
description: "Integrate Event Tracking using Lytics with Launch to activate Real-Time customer data personalization across your digital environments."
url: /lytics/event-tracking-in-contentstack-launch
---

# Real-Time User Event Tracking with Lytics in Contentstack Launch

## Real-Time User Event Tracking with Lytics in Contentstack Launch

**Lytics** is an Experience Customer Data Platform (xCDP) that helps businesses deliver personalized digital experiences by unifying customer data from multiple sources. It builds real-time, behavior-based audience segments, enabling marketers and developers to target users more effectively across channels such as web, email, and advertising platforms. Launch integrates with Lytics CDP to provide you with automatic event tracking.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to integrate Data and Insights (Lytics) and connect a Launch project with the Data Activation Layer (DAL).
    
-   How to enable Real-Time User Event Tracking for a Launch environment.
    
-   How to disable Event Tracking for a Launch environment.
    
-   How to handle user consent with opt-in and opt-out.
    

## Steps for Execution

Follow these steps to set up and track real-time user events.

## Create a Lytics CDP Project and Connect with Launch

[Create a Lytics CDP project](/docs/lytics/create-a-lytics-project) with your stack and then [connect your Launch project](/docs/lytics/manage-a-lytics-project#manage-connections).

-   ## Enable Event Tracking for Your Launch Environment
    
    Follow the steps below to enable Event Tracking in your Launch environment:
    
    1.  Go to your Launch dashboard and click the **project card** to open your project from the Launch landing page.
    2.  On the **Environments** screen, click the **vertical ellipses** under **Actions** next to your environment and then click **Settings**.![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)
    3.  In the **Settings** page, go to **Environments > Event Tracking**.
    4.  Click the **Enable Real-Time User Event Tracking** toggle to enable Event Tracking for Launch. ![Launch_Lytics_EnableToggle.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27e4a4775c7b34f0/683985d8fd6bfc805298e5de/Launch_Lytics_EnableToggle.png)
    5.  In the modal that appears, click the **checkbox** to accept the privacy regulations and then click the **Yes, Enable Event Tracking** button to confirm the action. ![Launch_Lytics_EnableLyticsFinal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt123f198d1f138927/68b82666bc3a223b924b56f4/Launch_Lytics_EnableLyticsFinal.png)
        
        Accepting the consent modal will load the Event Tracking script to your website.
        
    6.  Update your site to include a [consent](#handling-user-consent-optin) modal. Use a **Consent Management Platform** or build your own modal to collect this consent.
    7.  Perform a mandatory [redeployment](/docs/launch/deployments#redeploys) once you have enabled Event Tracking on the environment.
    
    **Note:** Although Event Tracking will now be enabled for your site, user events will not be tracked until the end user "opts in" to sharing their data with you. To test the Event Tracking data collection feature prior to building a consent modal, open the browser console and enter the command jstag.optIn(). This enables data collection for Event Tracking for that specific session. This does not allow Event Tracking data collection across all the user sessions.
    
    ### Caching Behaviors
    
    -   If your application uses browser-side caching, [redeploy](/docs/launch/deployments#redeploys) your site after enabling or disabling Event Tracking to prevent browsers from serving outdated scripts due to [ETag-based](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag#:~:text=Caching%20of%20unchanged%20resources) caching.
    -   Without a redeploy, users might see a cached version that does not reflect the updated script.
    
    ### Verify the Enabled Event Tracking
    
    -   After enabling, you should see a <script> tag for Event Tracking injected into your website’s HTML responses.![VerifyEnabled.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf04941ae3b44558c/68d4f4ef659ee0e3403c0b70/VerifyEnabled.png)
    -   You can also install the [browser extension](https://docs.lytics.com/docs/chrome-extension) for debugging.
-   ## Disable Event Tracking for Your Launch Environment
    
    **Warning:** Ensure to remove the code jstag.optIn() in your consent modal. This is so that you don’t face any runtime issues due to the Event Tracking script tag missing.
    
    Follow the steps below to deactivate Event Tracking in your Launch environment:
    
    1.  Go to your Launch dashboard and click the **project card** to open your project from the Launch landing page.
    2.  On the **Environments** screen, click the **vertical ellipses** under **Actions** next to your environment and then click **Settings**.
    3.  In the **Settings** page, go to **Environments > Event Tracking**.
    4.  Click the **Enable Real-Time User Event Tracking** toggle again to disable Event Tracking from your Launch project.![Launch_Lytics_DisableToggle.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9625dcfdc0b1ed5/683985d78b1229a52620a893/Launch_Lytics_DisableToggle.png)
    5.  In the modal that appears, click the **Yes, Disable Event Tracking** button to confirm the action.![Launch_Lytics_DisableLyticsFinal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c4f0c58df83a7ed/68b82665f6520ed35524ca82/Launch_Lytics_DisableLyticsFinal.png)
        
        **Note:** Disabling Event Tracking deletes any previously collected data associated with this environment.
        
    6.  Perform a mandatory [redeployment](/docs/launch/deployments#redeploys) to remove the Real-Time Event Tag due to browser-side caching.
    
    **Once disabled:**
    
    -   The Event Tracking <script> tag will **no longer be injected** into your website’s HTML.
    -   All Event Tracking-based audience personalization will cease.
    -   The environment displays the following message:  
        “Event Tracking is not enabled for this project. Please contact your organization admin to enable it.”

## Handling User Consent - optIn()

1.  When Event Tracking is enabled, a Real-Time Event Tag will be injected into your website's <head> tag.
2.  Implement a consent modal or use a custom tag to trigger in your Google Tag Manager Account.  
    Learn more about [obtaining user consent](https://docs.lytics.com/docs/privacy-and-data-protection#obtaining-customer-consent) via the consent modal or Google Tag Manager.
3.  When the user consents to share cookies, call jstag.optIn(). This will start Real-Time User Event Tracking for the user session.

## Handling User Consent Rejection - optOut()

-   If the user denies permission for cookie consent, call jstag.optOut() to stop Real-Time User Event Tracking for the user sessions.
