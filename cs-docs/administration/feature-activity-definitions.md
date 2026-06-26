---
title: "[Platform Discovery] - Feature Activity Definitions"
description: Feature Activity Definitions
url: https://www.contentstack.com/docs/administration/feature-activity-definitions
product: Contentstack
doc_type: reference
audience:
  - administrators
  - developers
version: current
last_updated: 2026-05-15
---

# [Platform Discovery] - Feature Activity Definitions

This page explains how Platform Discovery determines whether a feature is marked as **Active**, **No Recent Activity**, or **Requires Plan Upgrade**. It is intended for administrators and users reviewing feature usage and should be used when interpreting Platform Discovery feature activity status.

## Feature Activity Definitions

Platform Discovery uses feature-specific activity criteria to determine whether a feature is marked as **Active**, **No Recent Activity**, or **Requires Plan Upgrade**.

The following table outlines the current activity definitions.

| **Feature** | **Active when** | **No Recent Activity when** |
|---|---|---|
| Automate | At least one automation executed in the last 90 days. | No automation executions in the last 90 days. |
| Launch | At least one build or deployment executed, or bandwidth consumed in the last 90 days. | No build, deployment, or bandwidth activity detected in the last 90 days. |
| Personalize | Activity detected in the last 90 days, such as tracked events, recorded impressions, or created experiments. | No personalization activity detected in the last 90 days. |
| Brand Kit | AI tokens were consumed for Brand Kit features in the last 90 days. | No AI token usage detected for Brand Kit in the last 90 days. |
| Localization | One or more locales are configured. | No locales are configured. |
| JSON RTE | JSON Rich Text Editor is used in one or more content types. | JSON Rich Text Editor is not used in any content type. |
| Workflows | At least one workflow stage transition occurred in the last 90 days. | No workflow stage transitions occurred in the last 90 days. |
| Releases | Release activity detected in the last 90 days, such as created or modified releases. | No releases were created or modified in the last 90 days. |
| Branches | One or more branches exist apart from the main branch. | No additional branches exist. |
| Environments | One or more environments exist. | No environments are configured. |
| Taxonomy | One or more taxonomies exist. | No taxonomies are created. |
| Live Preview | Live Preview was used in the last 90 days. | No Live Preview usage detected in the last 90 days. |
| Timeline | Timeline was used in the last 90 days. | No Timeline activity detected in the last 90 days. |
| Visual Builder | Visual Builder was used in the last 90 days. | No Visual Builder usage detected in the last 90 days. |
| Assets | At least one asset-related activity was detected in the last 90 days, such as asset, space, or workspace activity. | No asset-related activity detected in the last 90 days. |
| User-defined Fields in Assets | User-defined asset fields were created or used in the last 90 days. | No user-defined asset field activity detected in the last 90 days. |
| AI Suggestions in Assets | AI-powered asset capabilities were used in the last 90 days. | No AI-powered asset activity detected in the last 90 days. |
| Polaris | At least one prompt was sent to Polaris in the last 90 days. | No prompts were sent to Polaris in the last 90 days. |
| Custom Agents | At least one deployed agent execution occurred in the last 90 days. | No deployed agent executions occurred in the last 90 days. |
| Digital Concierge | At least one deployed agent execution occurred in the last 90 days. | No deployed agent executions occurred in the last 90 days. |

**Note**: Activity definitions may evolve as additional platform capabilities and telemetry become available.

## Common questions

### What time window is used to determine “Active” vs “No Recent Activity” for most features?
Most features use activity detected in the last 90 days to determine whether they are **Active** or **No Recent Activity**.

### Why do some features use configuration-based criteria instead of a 90-day activity window?
Some features are considered **Active** when configuration exists (for example, “One or more locales are configured.”), rather than when recent usage is detected.

### What does “Requires Plan Upgrade” mean in this context?
Platform Discovery uses criteria to determine whether a feature is marked as **Active**, **No Recent Activity**, or **Requires Plan Upgrade**.

### Can these activity definitions change over time?
Yes. **Note**: Activity definitions may evolve as additional platform capabilities and telemetry become available.