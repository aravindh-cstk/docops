---
title: "Country-Based Audience Count Discrepancy Compared to Other Analytics Tools"
description: "Country-Based Audience Count Discrepancy Compared to Other Analytics Tools"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/10-country-based-audience-count-discrepancy-compared-to-other-analytics-tools
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs8cc0937331ffdb88
---

# Country-Based Audience Count Discrepancy Compared to Other Analytics Tools

The audience count for a country-based Personalize segment appears significantly lower than the equivalent metric in a third-party analytics platform such as Google Analytics or Adobe Analytics. The audience conditions appear to be configured correctly using the country attribute.

**Root Cause**

Discrepancies between Personalize audience counts and external analytics tools are typically caused by differences in how each platform resolves geolocation data. Personalize derives country information from the visitor's IP address using an integrated geolocation database. If an IP address cannot be accurately mapped to a country in that database, the visitor will not be attributed to the country-based audience, resulting in lower counts compared to tools that use different resolution methods.

**Resolution**

1.  Verify the audience conditions in Personalize to confirm the country attribute is configured correctly and is not filtering out valid traffic unintentionally.
2.  Use a VPN set to the target country and test whether you are correctly placed into the country-based audience. A successful match confirms the audience condition is working for resolvable IP addresses.
3.  Acknowledge that perfect parity between Personalize audience counts and external analytics tools is not expected, as each platform uses different data sources and geolocation resolution methods.
4.  If the discrepancy is significantly larger than expected (for example, more than 20-30%), open a support case with your Project UID, Experience UID, the specific audience condition, and a sample of request logs showing the country attribute values being passed.

Geolocation-based audience discrepancies are expected to some degree. If the miss rate is outside acceptable bounds for your use case, consider supplementing IP-based geolocation with an explicit country attribute passed from your own infrastructure (for example, from a CDN header such as Cloudflare-IPCountry).
