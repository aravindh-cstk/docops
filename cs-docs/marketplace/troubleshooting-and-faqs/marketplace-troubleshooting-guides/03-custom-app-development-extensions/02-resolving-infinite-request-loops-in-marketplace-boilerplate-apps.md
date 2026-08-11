---
title: "Resolving infinite request loops in Marketplace boilerplate apps"
description: "Resolving infinite request loops in Marketplace boilerplate apps"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/03-custom-app-development-extensions/02-resolving-infinite-request-loops-in-marketplace-boilerplate-apps
doc_type: faq
_cms_section_uid: cs6031da6351f15c02
_cms_faq_uid: cs97f54d8604e98d11
---

# Resolving infinite request loops in Marketplace boilerplate apps

Developing a custom app using the Marketplace boilerplate may trigger an infinite loop of requests on the App Configuration page. This prevents the configuration UI from loading or functioning correctly.

**Root Cause**

The installationData object is incorrectly included in the dependency array of a useEffect hook, causing the component to re-render and re-execute requests endlessly.

**Resolution**

1.  Open the AppConfigurationExtensionProvider.tsx file in the boilerplate source code.
2.  Locate the useEffect hook responsible for handling installation data or configuration requests.
3.  Remove installationData from the hook's dependency array.
4.  Redeploy the application to verify the fix.

After removing the dependency from the code, navigate to the App Configuration page of the custom app.

If the network tab shows a stable number of requests without an infinite loop, the render logic is corrected.
