---
title: "Object/Map Type Attributes Not Supported in Personalize"
description: "Object/Map Type Attributes Not Supported in Personalize"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/03-lytics-cdp-integrations/07-object-map-type-attributes-not-supported-in-personalize
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: csbdc384752f1611a6
---

# Object/Map Type Attributes Not Supported in Personalize

Attempting to create a custom attribute in Personalize with an object or map type to target variants based on complex Lytics data (such as a date or nested key-value structure) results in an error or the attribute not being available for variant targeting. This blocks use cases that require gating content based on structured user attributes.

**Root Cause**

Contentstack Personalize does not support object-type attributes. Additionally, variants must be linked to audiences — they cannot be targeted directly off a raw attribute value. The intended data must be sent as a scalar key-value pair and evaluated through a Lytics audience before it can drive variant selection.

**Resolution**

1.  Instead of sending the attribute as a complex object, send it as a key-value scalar pair using the jstag.send() method. For example, send an unlocked\_until date as a plain date-type value rather than a nested object.
2.  In the Lytics dashboard, create a field and mapping for the new scalar attribute.
3.  Create a Lytics audience based on the attribute value. For example, define an audience for users where unlocked\_until is before Today to identify users with active access.
4.  In Personalize, create a Segmented Experience with a single variant linked to that Lytics audience. Users in the audience receive the gated variant; all other users receive the fallback content.
5.  For multiple gated pages or URL-based use cases, repeat the above steps with separate key-value pairs, field mappings, and audiences for each page or condition.

Refer to the Lytics Fields & Mappings documentation for details on creating custom fields and audience definitions.
