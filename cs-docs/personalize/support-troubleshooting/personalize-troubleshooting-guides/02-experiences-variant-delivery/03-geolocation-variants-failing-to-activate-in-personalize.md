---
title: "Geolocation Variants Failing to Activate in Personalize"
description: "Geolocation Variants Failing to Activate in Personalize"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/02-experiences-variant-delivery/03-geolocation-variants-failing-to-activate-in-personalize
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs0b92dd903a07c938
---

# Geolocation Variants Failing to Activate in Personalize

Personalization variants based on "Geolocation - Country" conditions may fail to activate, resulting in a null status in personalization logs and the delivery of default content.

**Root Cause**

This is typically caused by limitations in the third-party IP geolocation database. If a user's IP address cannot be correctly mapped to a specific country in the external database, the location trigger fails to resolve.

**Resolution**

1.  Review personalization logs to confirm if geolocation variants return a null status while other variants activate correctly.
2.  Use a VPN during testing to provide a verified IP address associated with the target country.
3.  Test on a mobile device, as mobile networks often provide more consistent geolocation data.
4.  Perform manual testing via GraphQL by explicitly passing the regional condition (e.g., country: "US") in the query to bypass automatic resolution.

Check personalization logs after using a VPN or hardcoded GraphQL parameter. If the variant status changes from null to active (e.g., 3\_1), the configuration is correct, and the failure is confirmed as a database-resolution issue.
