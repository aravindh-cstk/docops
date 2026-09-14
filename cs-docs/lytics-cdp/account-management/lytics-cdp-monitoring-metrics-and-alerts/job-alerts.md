---
title: "Job Alerts"
description: "Monitor and alert on your import and export workflows"
url: /lytics/job-alerts
---

# Job Alerts

## Job Alerts

Monitor and alert on your import and export workflows

As systems are updated, permissions change, and networks are reconnected, sometimes situations will be encountered that cannot be resolved by the [automated error handling and resolution](/docs/lytics/background-processing#errors) built into Lytics Jobs. Lytics provides alerting through Slack, Microsoft Teams and email on import and export Jobs to allow your teams to respond when needed.

### Job Alerting Channels

#### [Slack](/docs/lytics/slack#slack-alerts\>)

#### [Microsoft Teams](/docs/lytics/microsoft-teams#microsoft-teams-event-quota-alerts)

#### [Email Alerting (Lytics Monitoring)](/docs/lytics/lytics-monitoring#email-alerts)

### Keep in Mind!

**Alerts can be configured for specific workflows, or for all workflows running in the account.**\\ Consider having one general alert to an Operations Channel or Team for all alerts, or alerts for specific workflows managed by particular teams

**Consider which statuses to include**\\ Alerts can be configured for statuses aside from failures. Workflows like critical batch import workflows can send a confirmation on successful syncs as well.

**Understanding errors**\\ If a source or destination job has failed, Lytics will show the latest error message on the **Data Pipeline > Dashboard** and on the Logs tab of the Source/Destination Job Summary interface, and allow the job to be restarted if needed. The most detailed information for troubleshooting can be accessed from the Job Logs API.
