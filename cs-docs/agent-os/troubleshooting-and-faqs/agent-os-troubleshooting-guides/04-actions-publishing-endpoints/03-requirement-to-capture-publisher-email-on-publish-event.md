---
title: "Requirement to Capture Publisher Email on Publish Event"
description: "Requirement to Capture Publisher Email on Publish Event"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/03-requirement-to-capture-publisher-email-on-publish-event
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: csb3a30f7ba6d27aa0
---

# Requirement to Capture Publisher Email on Publish Event

Customers want automation to obtain the publishing user’s email when an entry is published and use it for notifications or audits.

**Root Cause** The requested attribute may not be available directly in the expected form in the automation payload or may require an alternate extraction approach.

**Resolution**

1.  Confirm what the trigger payload contains (user UID vs email).
2.  If only UID is present, resolve user details via a management API call in a code/HTTP step (subject to permissions).
3.  Use Email action connector to send notifications using resolved email.

Automation reliably retrieves publisher identity (email or resolved identifier) and uses it in notifications.
