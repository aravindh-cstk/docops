---
title: "Subresource Integrity (SRI)"
description: "Subresource Integrity (SRI)"
url: /lytics/subresource-integrity-sri
---

# Subresource Integrity (SRI)

## Subresource Integrity (SRI)

## What is it?

Subresource Integrity (SRI) is a security feature that enables browsers to verify that the resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It allows you to provide a cryptographic hash that a fetched resource must match. This definition is sourced from MDN Web Docs, where full documentation on SRI is found.

The following demonstrates a simple, non-lytics-specific example, as provided by MDM, of how the cryptographic hash can be added to a standard script element to validate that what is loaded is, in fact, what is expected:

```
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous">
</script>
```

### Is SRI for me?

It is essential to remember that SRI is very technical and will require development resources on your end to facilitate. Lytics can support SRI technically but offers no services or off-the-shelf solutions.

An SRI requirement often stems from strict security compliance for enterprise-level policies. Though it adds a layer of certainty that the file you expect matches precisely what is delivered, the overhead for managing SRI is often not worth the investment.

## What will it impact (drawbacks)?

Please read the following section carefully as leveraging SRI will have significant impacts on several of the out-of-the-box functions of the Lytics product. All will still be possible but will likely require additional, manual, steps.

With this approach comes a few significant implications:

1.  **Account settings** altered in the Lytics UI will only be reflected after the tag has been synced and the SRI hash updated. Most settings updates result in alterations to variables in the core tag file.
2.  If leveraged, Lytics **Personalization Campaigns & Experiences** will not be automatically started, ended, or deployed. Personalization campaigns depend on a dynamic configuration file that changes each time a configuration update is made. As such, it is impossible to prevent SRI from blocking the script as it should. This means that the config must be cached and served from a customer-managed resource, as outlined below. Each time a Campaign/Experience is altered in any way, this configuration file will need to be altered. In addition, the "Preview" functionality also relies on a dynamic configuration file to be loaded, which means there will be no ability to "Preview" an experience before it is deployed if SRI is in place.
3.  [Lytics Support](https://support.lytics.com/) can offer **limited assistance** on implementing and managing SRI other than tag configuration guidance. In the case of bugs and technical issues, our support team cannot utilize existing methods to assist you. Since the file is custom and hosted outside of Lytics, you must do so at your own risk.
4.  **Bug fixes or feature availability** will depend on your team's ability to update the external files and associated SRI hashes, as none of the updates pushed directly by the Lytics team will be automatically deployed to your assets.

## Recommended Implementation

The following outlines a recommended but not exclusive approach to implementing SRI. The following also outlines several options that may or may not be relevant based on your account's features in use and configuration specifics.

### What JS files does Lytic use/load?

`//c.lytics.io/api/tag/{{ACCOUNT_ID}}/latest.min.js` This is the core JavaScript web SDK. It is used for identification, data collection, and personalization via the standard profile callbacks or our out-of-the-box web personalization campaigns/experiences.

`//c.lytics.io/static/pathfora.min.js` This is the core web personalization SDK managed by Lytics. This is used, and only used, to test and deploy the various Lytics web personalization Experiences and/or Campaigns. Anyone who is leveraging our modals or inline personalization/recommendations will need to ensure Pathfora is included in the SRI strategy. For those that aren't leveraging this directly, they may opt to alternatively turn Pathfora SDK off, which will prevent both this JS file and the following CSS file from being loaded.

`//c.lytics.io/static/pathfora.min.css`This default CSS file informs the look and feel of our web personalization Experiences. This file, though required, can also be hosted and customized to your liking as outlined below in the tag configuration section.

`//c.lytics.io/api/experience/candidate/{{ACCOUNT_ID}}/config.js` Finally, this file loads the configuration for web personalization Experiences and Campaigns. If you leverage any Lytics-managed web Experience, this file must be included in the SRI strategy and updated each time an Experience changes. **NO EXPERIENCE WILL BE UPDATED, DEPLOYED, OR SHUT OFF** automatically with SRI in place.

### File hosting/caching

Due to SRI requiring the static asset, which is also loaded to match the fixed hash, all assets outlined above must be copied and hosted at an alternative location outside of Lytics' purview. This means that no bug fixes, updates, configuration changes, etc., will be managed directly by Lytics. As part of this asset management, an independent update process is recommended to be in place.

For instance, if a web Experience is configured and set to go live on the first of January, a manual update would need to be made to pull in the proper.`latest.min.js` and `config.js` file contains the Experience information before it will show live on your site. In addition, in this example, Pathfore must also be enabled and available on the site.

Outside of the technical lift required to provide a web-accessible hosting solution, which will not be covered here, accessing, downloading, and surfacing the necessary files outlined above is relatively easy. You should be able to download the above files via your preferred method and surface that same file on a managed domain. As an example,`//c.lytics.io/api/tag/{{ACCOUNT_ID}}/latest.min.js` becomes `//acme.co/lyticsjstag/latest.min.js` or whatever naming convention you'd prefer to leverage. From there, you will need to configure the asynchronous tag wrapper responsible for initializing Lytics to point to this new asset as outlined below:

```
<!-- Start Lytics Tracking Tag Version 3 -->
  <script type="text/javascript">
  !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
  // Define config and initialize Lytics tracking tag.
  // - The setup below will disable the automatic sending of Page Analysis Information (to prevent duplicative sends, as this same information will be included in the jstag.pageView() call below, by default)
  jstag.init({
    src: '{{ENTER-YOUR-NEW-TAG-URL-HERE}}',
    pageAnalysis: {
      dataLayerPull: {
        disabled: true
      }
    }
  });

  // You may need to send a page view, depending on your use-case
  jstag.pageView();
</script>
```

### Additional Configuration Options

Additionally, if you are using Pathfora as outlined above, the following configuration should be included to point at all of the proper static assets:

```
<!-- Start Lytics Tracking Tag Version 3 -->
  <script type="text/javascript">
  !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
  // Define config and initialize Lytics tracking tag.
  // - The setup below will disable the automatic sending of Page Analysis Information (to prevent duplicative sends, as this same information will be included in the jstag.pageView() call below, by default)
  jstag.init({
    ...
    pathfora: {
      install: {
        disabled: false, // set to true if you want to fully disable Lytics Pathfora
        sdk: {
          disabled: false, // set to true if you want to fully disable Lytics Pathfora
          src: "{{URL-TO-YOUR-HOSTED-PATHFORA-JS-FILE}}/pathfora.min.js"
        },
        css: {
          disabled: false // set to true if you want to fully disable Lytics Pathfora or independently disable the default Lytics Pathfora CSS
        }
      },
      preview: {
        disabled: false, // set to true if you want to fully disable Lytics Pathfora
      },
      publish: {
        disabled: false, // set to true if you want to fully disable Lytics Pathfora
        legacy: {
          disabled: true, // legacy personalization is deprecated and not supported by SRI. it should be disabled.
        },
        urlFragmentWhitelist: [ // a list of url fragments that will be allowed to load the Experiences
          "domain1.com",
          "domain2.com",
        ],
        "src": "{{URL-TO-YOUR-HOSTED-EXPERIENCE-CANDIDATE-CONFIG-FILE}}/config.js",
      }
    }
  });

  // You may need to send a page view, depending on your use-case
  jstag.pageView();
</script>
```

### Settings Management

Finally, since JavaScript tag-related settings will not take effect immediately, it is possible to manually configure many of those directly in the tag as well, if preferred over an SRI update. For any other settings within the **Account > JavaScript Tag** section consult with support for the best path forward.

![img-0320.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfdff00921aecac5a/bc626f3630cb0cecebc6e6cc/img-0320.png)
