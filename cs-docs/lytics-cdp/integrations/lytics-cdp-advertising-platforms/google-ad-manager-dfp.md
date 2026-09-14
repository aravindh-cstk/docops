---
title: "Google Ad Manager (DFP)"
description: "Google Ad Manager (also known as DoubleClick for Publishers or DFP), allows you to generate revenue on your website by displaying ads inline with your…"
url: /lytics/google-ad-manager-dfp
---

# Google Ad Manager (DFP)

## Google Ad Manager (DFP)

## Overview

Google Ad Manager (also known as DoubleClick for Publishers or DFP), allows you to generate revenue on your website by displaying ads inline with your site's content.

Using Lytics, you can pass the audiences an individual visitor is currently a member of to expand the level of targeting available for any Ad Manager Ad Unit. This may lead to more targeted impressions and higher CTRs.

Lytics identifies your visitor, even if they are anonymous and combines all known information about that particular visitor to improve ad targeting.

### Technical Overview

The following overview is meant to cover the basics, from a technical JavaScript standpoint. If you are not a developer or are not interested in understanding in detail how the integration will work, please skip to [Account Configuration](#ad-manager-account-configuration) below.

1.  In order to properly target ads we must ensure that Lytics has loaded the audiences the current visitor is a member of. As such, Lytics will temporarily disable the initial loading of ads using googletag.setConfig({ disableInitialLoad: true }). This ensures ads will not load before targeting has completed.
2.  A callback will be initialized using the Lytics JavaScript tag. This callback will be notified as soon as the visitors profile has been loaded. This will serve as the mechanism that completes the Ad Manager integration.
3.  When the callback is fired Lytics will pass the audiences into Ad Manager using the googletag.setConfig() function (with the targeting option) and then complete the process by triggering a refresh using googletag.pubads().refresh(). This will result in the ads loading properly with the desired targeting criteria.

**NOTE:** Lytics targeting works for all Google Ad Manager tag types _except_ passback tags.

### Ad Manager Account Configuration

The first step in targeting Lytics audiences is to configure Ad Manager to recognize them. This is done by defining custom "key-values".

1.  [Log in](https://admanager.google.com) to Ad Manager.
2.  Navigate to **Inventory** in the menu at the left.
3.  Select **Key-values** in the sub-menu.
4.  Click **New Key**.
5.  For a Name, use LyticsSegments exactly as shown here (no extra characters, spaces, or different capitalization).
6.  For a Values type, select the **Users will enter targeting values when creating line items or checking inventory** option.
7.  Click **Save** at the bottom.

![ad-manager-key-value](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc735a8dff33fb35f/745fca6839c6eea0091c2228/ad-manager-key-value.png)

### Site Setup & Targeting

Now that Ad Manager is configured to recognize Lytics audiences, configure your site to pass that Lytics audience information to Ad Manager using the custom "Key-values" for each visitor.

1.  Install the Lytics JavaScript Tag as described in our [JavaScript](/docs/lytics/lytics-javascript-tag) documentation.
    -   For best performance when working with Ad Manager, place the standard Lytics JavaScript tag above the tags that Google Ad Manager generates. Incorrect placement may cause delays in displaying the proper ad(s) or undesired behavior.
2.  Install the additional Google Ad Manager integration tag as outlined below.
    -   It is required that his loads AFTER the Lytics JavaScript tag to prevent errors.

```
<!-- lytics for google ad manager -->
     <script type="text/javascript">
         var handleGoogleAdManagerSync = function(profile){
             if(typeof window.googletag === 'undefined'){
                 console.warn('google ad manager expected but not found');
                 return;
             }
             if(profile && profile.data && profile.data.user && profile.data.user.segments){
                 window.googletag.cmd.push(function() {
                     window.googletag.setConfig({ targeting: { LyticsSegments: profile.data.user.segments } });
                     window.googletag.pubads().refresh();
                 });
             }else{
                 console.warn('unable to load Lytics audiences for Google Ad Manager');
                 window.googletag.pubads().refresh();
             }
         }
         jstag.call('entityReady', handleGoogleAdManagerSync);
     </script>
```

1.  Complete the site setup by installing the Google Ad Manager generated tags per their instructions. Remember, for the optimal experience all additional Google generated code should come after the Lytics code above.

For reference, please find a full example of a working installation below:

**Note:** The following is provided as an example and should not be used in a production environment. Always consult with your web development team to ensure that the configuration is compatible with your specific Google Ad Manager setup. In most cases, tags are not loaded directly on the page but are typically managed through a tag manager. Additionally, it's crucial to avoid loading the same tags in multiple places, as this can lead to unexpected results.

```
<!DOCTYPE HTML>
<html lang="en-us">
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Lytics Google Ad Manager Sample Page</title>

    <!-- Start Lytics Tracking Tag Version 3 -->
    <script type="text/javascript">
      !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
      jstag.init({
        src: 'https://c.lytics.io/api/tag/[insertyouraccountidhere]/latest.min.js',
        pageAnalysis: {
          dataLayerPull: {
            disabled: true
          }
        }
      });

      jstag.pageView();
    </script>

    <!-- lytics for google ad manager -->
    <script type="text/javascript">
        var handleGoogleAdManagerSync = function(profile){
            if(typeof window.googletag === 'undefined'){
                console.warn('google ad manager expected but not found');
                return;
            }
            if(profile && profile.data && profile.data.user && profile.data.user.segments){
                window.googletag.cmd.push(function() {
                    window.googletag.setConfig({ targeting: { LyticsSegments: profile.data.user.segments } });
                    window.googletag.pubads().refresh();
                });
            }else{
                console.warn('unable to load Lytics audiences for Google Ad Manager');
                window.googletag.pubads().refresh();
            }
        }
        jstag.call('entityReady', handleGoogleAdManagerSync);
    </script>

    <!-- google ad manager generated code -->
    <script async='async' crossorigin='anonymous' src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>
    <script>
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
    </script>

    <script>
      googletag.cmd.push(function() {
        googletag.defineSlot('/70652691/Demo_Right_Side_300x250', [300, 250], 'div-gpt-ad-1489772116528-0').addService(googletag.pubads());
        googletag.setConfig({ singleRequest: true });
        googletag.enableServices();
      });
    </script>
  </head>
  <body>
      <h1>My Ad Should Render Below</h1>

      <!-- more ad manager generated code -->
      <!-- /70652691/Demo_Right_Side_300x250 -->
      <div id='div-gpt-ad-1489772116528-0' style='height:250px; width:300px;'>
        <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1489772116528-0'); });
        </script>
      </div>
  </body>
</html>
```

**NOTE:** In many cases the above code snippets/examples will work out of the box. However, client side JavaScript can vary greatly and the Google Ad Manager's tag can be configured inconsistently. Due to this, it may be necessary to configure the integration using the [advanced configuration](#advanced-configuration) section below. This commonly resolves flickering, ads not loading, ads loading twice or any other undesired behavior.

#### Advanced Configuration

The advanced configuration is intended to give your developer(s) access to visitors' profile and/or current audience membership via the Lytics JavaScript tag. This ensures your developer(s) retain complete control on how the Google Ad Manager integration is performed to ensure it is configured optimally based on your unique source code. Please see [Technical Overview](#technical-overview) section above for a full understanding of how the Ad Manager integration should work at a base level.

1.  Ensure ads will not be initialized before the visitors profile has been retrieved.
2.  Configure Lytics Profile Callback\\

The Lytics JavaScript tag makes adding a callback easy. Our full [JavaScript](/docs/lytics/lytics-javascript-tag) documentation walks you through the process of creating and managing callbacks. Said callback will be responsible for passing the visitors profile data, including audience membership, back to your desired JavaScript function. The following is an example of the callback used in the default Ad Manager integration. You will see it receives the data object, verifies that it has audiences and handles the result by either passing them to Google or logging a warning to the console.

```
var handleGoogleAdManagerSync = function(profile){
       if(typeof window.googletag === 'undefined'){
           console.warn('google ad manager expected but not found');
           return;
       }
       if(profile && profile.data && profile.data.user && profile.data.user.segments){
           window.googletag.cmd.push(function() {
               window.googletag.setConfig({ targeting: { LyticsSegments: profile.data.user.segments } });
               window.googletag.pubads().refresh();
           });
       }else{
           console.warn('unable to load Lytics audiences for Google Ad Manager');
           window.googletag.pubads().refresh();
       }
   }
   jstag.call('entityReady', handleGoogleAdManagerSync);
```

1.  Push audience membership to Google Ad Manager\\

As shown above, within the callback you will process the data object, full details on what is included can be [found here](/docs/lytics/lytics-javascript-tag#accessing-visitor-profiles), and ultimately passing a list of audience IDs to Ad Manager using their tags APIs.

```
window.googletag.setConfig({ targeting: { LyticsSegments: profile.data.user.segments } });
```

1.  Initialize Ads\\

Lastly, once the audience IDs have been pushed, we leverage the googletag.pubads().refresh() call to show the proper ads. This refresh may be unnecessary in your application if you are ensuring the audiences have been pushed before the ads tag has been initialized in the first place.

```
window.googletag.pubads().refresh();
```

### Lytics Audience Configuration

Next, create your audiences in Lytics. These will be the audiences you will be connecting to "Line Items" within Ad Manager in the final step.

1.  In Lytics, create an audience using the criteria with which you'd like to target.
2.  Ensure the "Enable API Access" box is checked, this is what allows it to be shared to your site.
3.  Write down the "ID" exactly as it appears to the right of the checkbox, you will need this inside of Google Ad Manager.
    -   Be precise. Capitalization, symbols, and spacing will need to match exactly. For instance, if you generated an audience called "Cat-aholics", later, you won't be successful if you target Ad Manager at "cataholics", "cat-aholics", or "Cat- Aholics".

### Google Ad Manager Line Item Configuration

Finally, configure Ad Manager to map Lytics Audiences to Line items.

1.  [Log in](https://admanager.google.com) to Ad Manager.
2.  Navigate to **Delivery** in the menu at the left.
3.  Navigate to **Line items** in the sub-menu.
4.  Select a line item you'd like to target at your Lytics Audience.
5.  On the Settings tab of the line item you're editing, scroll to the bottom and in the **Add Targeting** section, select **Key-values**.
6.  Where it says **Select a key**, select "LyticsSegments".
7.  Choose the **is** operator.
8.  Enter the ID of the Lytics Audience you created. Again, precision is important, capitalization, symbols, and spacing need to match exactly.
9.  Click **Save** at the bottom.
10.  Verify that your selection has been properly saved by navigating away from the line item, then going back and checking that your key-value is there when you look.

![ad-manager-cat-aholic](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am55f8e3633af0390a/c9ab6dacd1435402e0473781/ad-manager-cat-aholic.png)

That's it! Your ads will be targeted to that audience as often as you've set up within Google DFP, which allows ads to be prioritized and rotated.
