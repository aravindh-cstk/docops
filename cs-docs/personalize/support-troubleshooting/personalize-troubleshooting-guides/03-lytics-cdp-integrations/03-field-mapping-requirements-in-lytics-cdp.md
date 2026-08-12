---
title: "Field Mapping Requirements in Lytics CDP"
description: "Field Mapping Requirements in Lytics CDP"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/03-field-mapping-requirements-in-lytics-cdp
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: csd73f46c160f9c69f
---

# Field Mapping Requirements in Lytics CDP

Determining whether specific fields require manual mapping in Lytics CDP may be unclear when transitioning between standard integrations and custom data sources. This prevents the confident configuration of data ingestion streams without knowing which fields are automated by default.

**Root Cause**

Standardized integrations come with pre-configured default mappings to ensure immediate compatibility, whereas custom sources (like CSV uploads or custom APIs) do not have a predictable schema, making manual mapping necessary.

**Resolution**

-   Check if the data is being ingested through a standard stream like salesforce\_accounts, which utilizes default mappings.
-   Verify if the data source is a custom import to determine if manual mapping is required.
-   Use **Schema Copilot** to automatically suggest and define field mappings for non-standard data sources.
-   Refer to official Lytics documentation for a complete list of default fields and mapping behaviors for built-in integrations.
