---
title: "Agent OS Monthly Execution Limit Reached: Automations Temporarily Disabled"
description: "Agent OS Monthly Execution Limit Reached: Automations Temporarily Disabled"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/03-execution-code-blocks-timeouts/08-agent-os-monthly-execution-limit-reached-automations-temporarily-disabled
doc_type: faq
_cms_section_uid: cs4366345a6043fd05
_cms_faq_uid: cs3fc98df6b7ef7e7e
---

# Agent OS Monthly Execution Limit Reached: Automations Temporarily Disabled

Automations stop running and Contentstack sends a notification that the organization has reached its monthly Agent OS execution limit. New executions fail or are queued until the limit resets.

**Root Cause**

Every organization has a monthly automation execution allowance, made up of a soft limit and a hard limit (for example, automation\_exec\_soft\_limit and automation\_exec\_hard\_limit set to 2,000 on a given plan). Trial organizations default to a much lower allowance, around 200 executions, while environments such as Azure can carry a higher hard limit (up to 125,000). Activities such as bulk migrations, testing scripts that trigger many entry updates, or an unexpected spike in publish/update events can consume the allowance faster than expected, and once the hard limit is hit, Agent OS is disabled for the organization until the monthly reset.

**Resolution**

1.  Open the Execution Log for your Agent OS organization to confirm which automations are consuming executions and when the spike occurred.
2.  If the consumption is expected (for example, a planned migration or a temporary testing spike), contact Contentstack Support with your Organization ID and request a temporary increase to the soft or hard execution limit.
3.  If you are in a trial organization and need a substantially higher ceiling, ask Support whether moving to a production environment (such as Azure) is applicable, since some environments carry a higher default hard limit.
4.  For one-off spikes caused by internal testing rather than normal usage, ask your Customer Success Manager whether the affected executions can be excluded from the usage count as a one-time courtesy.
5.  Once the limit increase is confirmed, resume the operation that required the higher allowance. If the increase was temporary, confirm with Support or your CSM when it reverts to the standard limit.

After the limit is increased or the monthly reset occurs, previously blocked automations resume executing and no further execution-limit notifications are received for the affected activity.
