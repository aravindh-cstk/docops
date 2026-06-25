---
title: "[Automations guides and connectors] - Limitations of Agent OS"
description: Limitations and supported capabilities of Agent OS, including execution caps, project and automation limits, and payload size constraints.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/limitations-of-automation-hub
product: Agent OS
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Limitations of Agent OS

This page lists the supported capabilities and limitations of Agent OS, including execution caps, rate limits, and size constraints. It is intended for developers and administrators planning, building, or operating automations and connectors, and should be referenced when designing workflows to stay within platform limits.

## Supported Capabilities of Agent OS

- Agent OS is a plan-based feature, and the number of executions allowed depends upon the Agent OS pricing plan that is activated for a particular organization.
- Organizations that have upgraded to a paid plan will have a soft cap for executions (when reaching this threshold they will be notified by email), and a hard cap that is 5x the number of the soft cap. After the organization hits the hard cap, automations will be temporarily disabled for that month.
- By default, each organization will be enrolled in the Explorer Plan, which is included at no cost and allows up to **200 **executions per month (200 soft cap and 200 hard cap).
- The maximum number of projects allowed per organization is **50**.
- The maximum number of automations allowed per project is **50**.
- The maximum number of steps allowed per automation is **15**.
- Currently, organization members can only view and edit their own projects.
- There is no support for nesting within Conditional Path and Repeat Path steps.
- The Pause and Response action connectors cannot be used within Conditional Path and Repeat Path steps.
- The maximum number of loops per Repeat Path is **100**.
- For Direct Queue (if automation is **not **throttled), the rate limit is **5000 **executions per minute per organization.
- You can select up to **10 executions per second** from Agent OS Settings (if an automation is throttled) for a specific automation.
- If an automation includes a [**Response**](./response.md)** **connector, **Retry Execution **will not be available for that automation.
- In Agent OS's Design mode, the test action output response previews are limited for performance - if a payload object exceeds **1** MB, only the first **10** nodes of arrays are shown. For payloads under **1** MB, the full output is displayed. This limitation helps optimize performance and ensures efficient data rendering in the browser.
- The maximum supported size for incoming HTTP requests is **3 MB**.
- The maximum supported output size for the Log action is** 1 MB**.

## Common questions

**Q: What happens when an organization reaches the hard cap for executions?**  
A: After the organization hits the hard cap, automations will be temporarily disabled for that month.

**Q: What is the default plan and its execution limit?**  
A: By default, each organization will be enrolled in the Explorer Plan, which is included at no cost and allows up to **200 **executions per month (200 soft cap and 200 hard cap).

**Q: Can Conditional Path and Repeat Path steps be nested?**  
A: There is no support for nesting within Conditional Path and Repeat Path steps.

**Q: What are the maximum supported sizes for requests and logs?**  
A: The maximum supported size for incoming HTTP requests is **3 MB**. The maximum supported output size for the Log action is** 1 MB**.