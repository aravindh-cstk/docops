---
title: "Monitoring a Job"
description: "Once you have one or more jobs running, they will be accessible from the list view, as pictured below. This view provides quick access to essential…"
url: /lytics/monitoring-a-job
---

# Monitoring a Job

## Monitoring a Job

## Monitoring a Job

Once you have one or more jobs running, they will be accessible from the list view, as pictured below. This view provides quick access to essential details:

-   **Name**: Name of job, such as "Export of High-Value Users to Facebook."
-   **Authorization**: Name of the associated authorization.
-   **Provider**: Third-party tool that you are connecting with Lytics.
-   **Type**: Indicates whether the job is an import, export, or enrichment.
-   **Status**: Current state of a job such as running, paused, completed, etc.
-   **Created**: Date the job was initially created.

![8783f9f-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc57ff724a5e31ee4/274b403458a9ed8c6cf067fb/8783f9f-image.png)

### Job Status

Detailed states are provided to understand better what is happening in the background during a job's lifecycle. These states will vary by job but include:

| Job Status | Description |
| --- | --- |
| Running | The job is actively running. |
| Sleeping | The job is not actively running but is scheduled to run again after a given period. A job is sleeping either because the job runs on a periodic cadence with scheduled sleep in between job runs or the job has encountered an error and is sleeping before retrying the request. |
| Failed | The job has encountered consecutive errors over 10 hours and is removed from running again. Check the logs to see if there are any fixable issues. Failed works can be resumed, which will schedule it to run again. Failed jobs will be automatically purged after 90 days. |
| Paused | A user has paused the job. The work can be scheduled to run again by resuming the job. Paused works will be automatically purged after 90 days. |
| Completed | The job has completed all its scheduled tasks and will not be rerun. These will be purged from the job history after 90 days. |

For more information on job states or troubleshooting failed jobs, see [job processing](/docs/lytics/background-processing).

### Job Summary

Clicking on any of the items in the Source list will navigate to its dedicated summary view for greater detail. This summary provides all the relevant information about each job you've created in Lytics and an entry point to alter the configuration or status.

At the top of the Job Summary page, you’ll find the following quick-access information:

-   **Status**: Indicates the current state of a job. See the table below for descriptions of each status.
-   **Provider**: Third-party tool that you are connecting with Lytics, such as Facebook, Google, Mailchimp, etc.
-   **Type**: Indicates whether the job is an import, export, or enrichment.
-   **Job Name**: Name of the job, such as “Import Users & Activity” or “Export Audiences.”
-   **Authorization**: Name of the authorization, such as “Main Salesforce auth.”
-   **Created By**: Lytics user who created the authorization.
-   **Last Updated**: Date the job was most recently edited.

![37e8721-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am63404771ded110eb/25e225fddc804f2a6ccbcaa6/37e8721-image.png)

**Note:** You can edit the name and description of an existing job from its summary page to improve the organization and clarity of your account's list of jobs.

#### Metrics

The activity chart will provide metrics (if available) on a job's performance to give a better understanding of how your data is flowing in and out of Lytics. You can see the number of profiles the job added, removed, or omitted during the selected time frame. _Note this feature is currently in development. Once metrics are available for each job, this chart will become populated._

![7d31dc9-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb96acdc1c432746a/87b5b6724f22f76425d97e58/7d31dc9-image.png)

To get an email when added/removed/omitted counts fall outside expected bounds, set min/max thresholds on this chart. See [Metric Threshold Alerts](/docs/lytics/metric-thresholds).

#### Configuration

The configuration section displays a JSON view of your job's current configuration. This includes details such as the authorization used, where data is coming from, which data is being pulled in, etc.

![ce50907-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b3e93e4c9d5b204/964e190285988105b8de8d71/ce50907-image.png)

#### Logs

The Logs section records the history of events for this job, details about the work completed, and the time each job was run. The logs are helpful to ensure your work is running as expected and for troubleshooting if any issues arise. Below are descriptions of the job events you may see in the logs.

| Job Events | Description |
| --- | --- |
| Started | The job has started running for the first time. |
| Synced | The job has completed a unit of work successfully and will continue to run. |
| Error | The job has encountered an error and will retry automatically. |
| Sleeping | The job is currently sleeping due to external restrictions, such as hitting a provider's API limits. |
| Failed | The job has encountered consecutive errors over 10 hours and is removed from running again. |
| Completed | The job has completed all its scheduled tasks and will not be rerun. |

#
