---
title: "Sitecore"
description: "Sitecore"
url: /lytics/sitecore
uid: blta515dfd3609a208c
---

# Sitecore

## Sitecore

This document outlines a solution that is **not managed by Lytics**. Please use it at your own discretion.

**Note:** This solution has not been updated to use the latest version of the Lytics JavaScript tag. Therefore, additional steps are provided to ensure data is stored and accessible using this legacy integration.

## Sitecore

Unlock the power of personalization in your CMS! Connecting Lytics to Sitecore enables you to access segments created in Lytics and use them to drive rules in Sitecore's native personalization engine. Lytics combines behavior from your other marketing tools with known user identities to create predictive segments based on how your users interact with your brand. Use your custom segments to create personal and powerful experiences.

The integration setup in Sitecore is simple but requires back-end Sitecore and .NET development experience and access to your site's codebase.

1.  Install Sitecore connector as explained [here](https://github.com/JeffDarchuk/LyticsSitecoreConnector)

1.  Once the Sitecore connector is installed, establish content to be personalized in Sitecore's Content Editor and/or xEditor. ![connect](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am845ae98784edca5d/3f197b4d500499da68fd4ae4/img-0302.png)

1.  Select to use Lytics segments for personalization in the Rule Set Editor, just like you would any other rule. ![select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfb5230642e31327a/e9a567189842be1acf70904c/img-0303.png)

1.  Select the specific Lytics segment to use as the target segment for personalization. ![select](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am81377fb443e0aabd/eb40b76a7b3871371148b57d/img-0304.png)

## Deliver Audience Membership to Sitecore

The above plugin was created and managed by a third party outside of Lytics' control. At the time of writing, it leverages legacy JavaScript tag functionality that is no longer available by default. The following code leverages the modern jstag3 listeners to polyfill the `ly_segs` cookie to ensure backward compatibility with the Sitecore module. This must be installed after the core Lytics JavaScript tag and should be installed by a site admin who is aware of the inherent risks and impact of introducing JavaScript code to your web properties.

```
jstag.call('entityReady',function(p){if(p&&p.data&&p.data.user){var s=p.data.user.segments||[],h={};for(var i=0;i<s.length;i++){h[s[i]]=s[i];}if(Object.keys(h).length>0){var t=JSON.stringify(h);jstag.setCookie("ly_segs",t,604800);}}else{console.warn("Unable to locate customer profile data or segment membership for personalization.");}});
```

```
jstag.call('entityReady', function (profile) {
  if (profile && profile.data && profile.data.user) {
    var segs = profile.data.user.segments || [];
    var segmentsHash = {};

    for (var i = 0; i < segs.length; i++) {
      segmentsHash[segs[i]] = segs[i];
    }

    if (Object.keys(segmentsHash).length > 0) {
      var segmentsString = JSON.stringify(segmentsHash);
      jstag.setCookie("ly_segs", segmentsString, 604800)
    }
  } else {
    console.warn("Unable to locate customer profile data or segment membership for personalization.");
  }
});
```
