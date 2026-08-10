---
title: "Open Live Preview in a New Tab"
description: "Enable “Open in New Tab” in Contentstack Live Preview for seamless, iframe-free site editing and better tool compatibility."
url: /headless-cms/open-live-preview-in-a-new-tab
---

# Open Live Preview in a New Tab

## Open Live Preview in a New Tab

The **Open in New Tab** feature enhances Contentstack Live Preview by allowing websites to open **outside the iFrame**, in a standalone browser tab. This improves compatibility with tools such as **Single Sign-On (SSO)** and **OAuth**, and provides a smoother editing and review workflow.

If the **Always Open in New Tab** toggle is enabled in Live Preview settings, clicking the Live Preview icon opens the website directly in a new browser tab. If the toggle is disabled, you must first open the Live Preview panel and then select **Open in New Tab**.

## Behavior Depending on SDK Version

The behavior of the **Open in New Tab** feature varies based on the version of the Live Preview SDK. You can also configure this behavior programmatically using the enableLivePreviewOutsideIframe key during SDK initialization. When set to true, this key forces the preview to open in a new tab outside the iframe. This setting only applies to SDK **version 4.0.0** or **later**.

<table><tbody><tr><td><strong>SDK Version</strong></td><td><strong>Toggle Status</strong></td><td><strong>SDK Property</strong></td><td><strong>Behavior</strong></td></tr><tr><td>v4.3.0 or later</td><td>Enabled or Disabled</td><td><span class="code">true</span></td><td>Live Preview opens in a new browser tab, outside the iframe.</td></tr><tr><td>v4.3.0 or later</td><td>Enabled</td><td><span class="code">true</span></td><td>Clicking the Live Preview icon opens the site in a new browser tab.</td></tr><tr><td>v4.3.0 or later</td><td>Disabled</td><td><span class="code">true</span></td><td>The Live Preview panel opens. From there, click <strong>Open in New Tab</strong> to open the Live Preview in a new browser tab, outside the iframe.</td></tr><tr><td>v4.3.0 or later</td><td>Disabled</td><td><span class="code">false</span></td><td>The Live Preview panel opens. From there, click <strong>Open in New Tab</strong> to open the Live Preview in a new browser tab, inside the iframe.</td></tr><tr><td>v4.0.0 or later</td><td>Enabled or Disabled</td><td>NA</td><td>Live Preview opens in a new browser tab, outside the iframe if toggle status is <strong>Enabled</strong>, and inside the iframe if toggle status is <strong>Disabled</strong>.</td></tr><tr><td>Earlier than v4.0.0</td><td>Any</td><td>NA</td><td>The site opens inside the iframe. The toggle and SDK key have no effect.</td></tr></tbody></table>

## Steps to Enable Always Open in New Tab

To simplify the preview workflow, you can enable the **Always Open in New Tab** option in your stack settings. This setting removes the extra click needed to open your site in a new tab.

To enable the feature:

1.  Ensure your **Contentstack App** is up to date (this is auto-managed).
2.  Update your **Live Preview SDK** to the latest version (**v4.0.0** or **later**) using the following command:
    
    ```
    npm install @contentstack/live-preview-utils
    ```
    
3.  In your stack, go to **Settings** and select **Visual Experience**.
4.  In the **General** tab, enable the **Always Open in New Tab** toggle.
5.  Click **Save**. ![Enable_LP_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b2de40925240e2f/69bd80e04440ed410cb1da8e/Enable_LP_Open_in_New_Tab.png)
6.  Clicking the **Live Preview icon** in an entry opens the site in a new browser tab.
    
    If the SDK is outdated, the site opens in a new browser tab but remains inside an iframe, skipping the additional click.
    

The **Open in New Tab** feature provides more flexibility in how editors and developers use Live Preview. By keeping the preview experience outside the iFrame and reducing extra clicks, it streamlines content review and supports advanced integrations.
