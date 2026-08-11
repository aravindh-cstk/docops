---
title: "Automation Not Triggering After Switching a Trigger to a Cron Schedule"
description: "Automation Not Triggering After Switching a Trigger to a Cron Schedule"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/02-triggers-filters-workflow-logic/04-automation-not-triggering-after-switching-a-trigger-to-a-cron-schedule
doc_type: faq
_cms_section_uid: csb9fe1273d6bf308c
_cms_faq_uid: cs247a0ca8a527636b
---

# Automation Not Triggering After Switching a Trigger to a Cron Schedule

After changing an automation’s trigger to a Cron schedule and setting a timezone, the automation stops firing on its expected schedule and no execution log are generated, even though the automation remains enabled.

**Root Cause**

Contentstack’s “Etc” timezone identifiers use reversed sign conventions compared to standard UTC notation. For example, Etc/GMT-5 actually represents UTC+5, not UTC-5 as the name might suggest. Configuring the Cron trigger with the wrong sign in mind causes the automation to run at an unexpected time relative to what you intended.

**Resolution**

1.  Open the Cron trigger configuration for the affected automation and check which “Etc” timezone identifier is set.
2.  Remember that “Etc” timezone names use reversed signs relative to UTC - Etc/GMT-5 means UTC+5, and Etc/GMT+5 means UTC-5.
3.  Recalculate the Cron expression and timezone combination based on the correct UTC offset for your intended trigger time.
4.  Update the timezone configuration accordingly and save the trigger.
5.  Monitor the Execution Log to confirm the automation now fires at the expected schedule.

The automation runs on the intended schedule, and execution log are generated for each scheduled run.
