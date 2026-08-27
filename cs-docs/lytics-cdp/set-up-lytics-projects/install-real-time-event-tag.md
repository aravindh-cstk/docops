---
title: "Install Real-Time Events Tag"
description: "Learn how to install the Real-Time Events Tag using Google Tag Manager or Web SDK to track behavioral data and enable real-time user profile updates."
url: /lytics/install-real-time-event-tag
uid: blt452b470706c0d502
---

# Install Real-Time Events Tag

## Install Real-Time Events Tag

Lytics provides a Web SDK tag that can be added to your site to collect behavioral data and display the materialized profile in the browser in real time. Manual installation instructions are available within the Lytics app at **Data Pipeline > SDK > Web SDK**.

If your website uses Google Tag Manager (GTM), it is recommended to use the following turnkey installation methods.

**Google Tag Manager**

Follow the steps to install the Lytics tag using Google Tag Manager:

-   From the left-hand navigation, navigate to **Data Pipeline > SDK > Web SDK** in the Lytics app.
-   [Setup and install](https://support.google.com/tagmanager/answer/14842164?visit_id=639220222474585079-4020826632&hl=en&ref_topic=14841964&rd=2) Google Tag Manager if it's not already configured.
-   Create a new [Custom HTML](https://support.google.com/tagmanager/answer/6107167?hl=en) tag and paste the Lytics JavaScript snippet into the tag’s content box.
-   Configure the tag to trigger on the appropriate pages. We recommend using the **All Pages** default trigger to start.![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a259aeff4760f97/68381796e7e410bcf3ce427f/image1.png)
-   Submit and [publish](https://support.google.com/tagmanager/answer/6107163?hl=en) your Google Tag Manager version.

## Testing the Lytics Tag Installation

Once the tag has been installed, you can validate the installation using the following method:

### In-app Verification Assistant

Lytics provides a simple tool to confirm that data is flowing into your account. Note that it may take a few minutes for events to appear in the UI.

-   Select **Vault** using the product switcher at the top left.
-   Navigate to **Setup > JavaScript Tag** from the left-hand menu.
-   At the bottom of the page, click the Refresh button to validate the installation.
-   Setup click the **refresh** button to validate installation if it does not already state **Successfully installed**.![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9cd34bb25a7cb252/6838179688c3a02feb01030b/image2.png)

## Lytics Web SDK (JStag)

The core Lytics SDK automatically collects behavioral data as users browse your site, helping build user profiles. These profiles are surfaced in real time for personalization use cases.

You can install the JStag:

-   Directly on your site
-   Through a tag manager
-   Automatically via CMS plugins

**Additional Resource:** For additional information, please refer to our [documentation](https://docs.lytics.com/docs/lytics-javascript-tag#installation).

### 1\. Installation Instructions

Copy and paste the following snippet as the **first element** inside the <head> of every webpage you want to track:

```
<!-- Start Lytics Tracking Tag Version 3 -->

  <script type="text/javascript">

  !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();


  // Define config and initialize Lytics tracking tag.


  // - The setup below will disable the automatic sending of Page Analysis Information (to prevent duplicative sends, as this same information will be included in the jstag.pageView() call below, by default)
  jstag.init({
    src: 'https://c.lytics.io/api/tag/ed11d*****b0d6c**b60f1a***d***df/latest.min.js'
  });


  // You may need to send a page view, depending on your use-case
  jstag.pageView();
  </script>
```

### 2\. Verifying the Installation

To verify successful tag installation:

1.  Go to [app.lytics.com](https://app.lytics.com).
2.  Navigate to **Data Pipeline > SDK > Web (JS)**.

You should see confirmation once data is successfully flowing in.

**Note:** If your website is hosted on Contentstack Launch, you can manage the event tags by following the steps outlined in the [Event Tracking (Lytics) in Contentstack Launch](/docs/launch/event-tracking-in-contentstack-launch) guide.
