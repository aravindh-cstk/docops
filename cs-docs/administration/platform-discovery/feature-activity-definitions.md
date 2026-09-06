---
title: "Feature Activity Definitions"
description: "Review the activity criteria used by Platform Discovery to determine feature usage statuses across Contentstack capabilities."
url: /administration/feature-activity-definitions
uid: blt3b479f996acb87e4
---

# Feature Activity Definitions

## Feature Activity Definitions

Platform Discovery uses feature-specific activity criteria to determine whether a feature is marked as **Active** or **No Recent Activity**. This page lists the exact criteria for each of the features that Platform Discovery evaluates.

## Activity Definitions

The following table lists the activity criteria Platform Discovery applies to each feature.

| Feature | Active when | No Recent Activity when |
| --- | --- | --- |
| Automation, Deployment, and AI |
| Automate | At least one automation executed in the last 90 days. | No automation executions in the last 90 days. |
| Launch | At least one build or deployment executed, or bandwidth consumed in the last 90 days. | No build, deployment, or bandwidth activity detected in the last 90 days. |
| Personalize | Activity detected in the last 90 days, such as tracked events, recorded impressions, or created experiments. | No personalization activity detected in the last 90 days. |
| Brand Kit | AI tokens were consumed for Brand Kit features in the last 90 days. | No AI token usage detected for Brand Kit in the last 90 days. |
| Content Structure and Configuration |
| Localization | One or more locales are configured. | No locales are configured. |
| JSON RTE | JSON Rich Text Editor is used in one or more content types. | JSON Rich Text Editor is not used in any content type. |
| Workflows | At least one workflow stage transition occurred in the last 90 days. | No workflow stage transitions occurred in the last 90 days. |
| Releases | Release activity detected in the last 90 days, such as created or modified releases. | No releases were created or modified in the last 90 days. |
| Branches | One or more branches exist apart from the main branch. | No additional branches exist. |
| Environments | One or more environments exist. | No environments are configured. |
| Taxonomy | One or more taxonomies exist. | No taxonomies are created. |
| Authoring and Preview |
| Live Preview | Live Preview was used in the last 90 days. | No Live Preview usage detected in the last 90 days. |
| Timeline | Timeline was used in the last 90 days. | No Timeline activity detected in the last 90 days. |
| Visual Builder | Visual Builder was used in the last 90 days. | No Visual Builder usage detected in the last 90 days. |
| Assets |
| Assets | At least one asset-related activity was detected in the last 90 days, such as asset, space, or workspace activity. | No asset-related activity detected in the last 90 days. |
| User-defined Fields in Assets | User-defined asset fields were created or used in the last 90 days. | No user-defined asset field activity detected in the last 90 days. |
| AI Suggestions in Assets | AI-powered asset capabilities were used in the last 90 days. | No AI-powered asset activity detected in the last 90 days. |
| Agent OS |
| Polaris | At least one prompt was sent to Polaris in the last 90 days. | No prompts were sent to Polaris in the last 90 days. |
| Custom Agents | At least one deployed agent execution occurred in the last 90 days. | No deployed agent executions occurred in the last 90 days. |
| Digital Concierge | At least one deployed agent execution occurred in the last 90 days. | No deployed agent executions occurred in the last 90 days. |

**Note:**

-   Activity definitions may evolve as additional platform capabilities and telemetry become available.
-   **Requires Plan Upgrade** is determined by your organization's subscription plan, not by activity criteria. Thus, not included in the table.
-   Five features (Localization, JSON Rich Text Editor (JSON RTE), Branches, Environments, and Taxonomy) are evaluated based on configuration state, not on activity within the last 90 days. For these features, the status reflects whether the feature is configured, not how recently it was used.
