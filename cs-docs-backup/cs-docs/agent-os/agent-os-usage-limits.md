---
title: "[Automations guides and connectors] - Agent OS Usage Limits"
description: Agent OS Usage Limits for organizations, including soft and hard execution limits based on plan.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/automation-hub-usage-limits
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Agent OS Usage Limits

This page explains Agent OS usage limits for an organization, including how soft and hard execution limits work, who is notified, and what happens when limits are reached. It is intended for developers and organization/site owners managing automations and planning monthly execution usage.

## Agent OS Usage Limits

**Note:** Agent OS is a plan-based feature that allows customers to access and work with automations based on their organization’s current plan.

## Types of Limits for an Organization

There are two limits based on the plan for an organization.
- **Soft Limit:**The soft limit marks the threshold at which the organization’s number of executions for the month exceeds the purchased plan for that organization. At this point, the organization will begin paying for executions at the negotiated rate per 100 executions, and all users will get a warning message on Automations and Agents landing page. The site organization owners will also get an email notification.

Consider a scenario where an organization possesses a monthly execution limit of 10,000. Upon reaching or surpassing this limit, the user will receive a warning message informing them of the current status.
- **Hard Limit:**The hard limit defines the maximum limit for the number of executions that can run each month. This cap helps protect both Contentstack and our customers against misuse or misconfigurations. If exceeded, users will receive a notification on their Automations and Agents landing page, and site owners will also get an email notification.

While you can continue to edit and configure your automations after the hard limit has been met, the executions will no longer run. Reaching the hard limit temporarily suspends automation executions. To resume using the Agent OS, you will need to upgrade your usage plan, or wait until the beginning of the next month when your plan limits are refreshed.

**Additional Resource:** For more information, refer to the [Supported Capabilities of Agent OS](/docs/developers/automation-hub-guides/limitations-of-automation-hub) document.

## Common questions

**Q: What happens when an organization reaches the soft limit?**  
A: The organization will begin paying for executions at the negotiated rate per 100 executions, and users will see a warning message on the Automations and Agents landing page; site organization owners will also get an email notification.

**Q: What happens when an organization reaches the hard limit?**  
A: Executions will no longer run, users will receive a notification on their Automations and Agents landing page, and site owners will get an email notification.

**Q: Can I still edit automations after the hard limit is met?**  
A: Yes, you can continue to edit and configure your automations after the hard limit has been met, but the executions will no longer run.

**Q: How do I resume automation executions after hitting the hard limit?**  
A: You will need to upgrade your usage plan, or wait until the beginning of the next month when your plan limits are refreshed.