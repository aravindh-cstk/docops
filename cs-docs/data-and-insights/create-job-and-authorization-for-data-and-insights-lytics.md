---
title: "[Data & Insights] - Create a Job and Authorization for Data & Insights (Lytics)"
description: Create a job in Data & Insights (Lytics) to import and synchronize Contentstack content and set up the required authorization.
url: https://www.contentstack.com/docs/data-and-insights/create-job-and-authorization-for-data-and-insights-lytics
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-25
---

# [Data & Insights] - Create a Job and Authorization for Data & Insights (Lytics)

This page explains how to create a new Data & Insights (Lytics) “Import Entries” job and the required authorization to connect to Contentstack. It is intended for developers or admins setting up Data & Insights (Lytics) ingestion and synchronization for entries and taxonomies, and should be used after Data & Insights (Lytics) is enabled and your stack/site/project prerequisites are in place.

## Create a Job and Authorization for Data & Insights (Lytics)

Create a job in Data & Insights (Lytics) to import and synchronize your Contentstack content (entries and taxonomies), so that it can track how users interact with your content and enrich their audience profiles. This enables Data & Insights (Lytics) to score visitors based on the categories or topics they consume.

This guide provides step-by-step instructions for creating a new 'Import Entries' Job along with the authorization for it. Channel tool [**authorizations**](https://docs.lytics.com/docs/keys-authorizations) refer to the permissions granted to various integrations that allow the Data & Insights (Lytics) platform to access and use data from third-party channels.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login) with Data & Insights (Lytics) enabled and [created](./create-data-and-insights-lytics-integration.md)
- Your self-hosted site deployed
- Stack connected to the deployed site
- [Personalize project](../personalize/create-personalize-project.md) created

## Create a New 'Import Entries' Job
Once Data & Insights (Lytics) is enabled and configured for your organization, follow these steps:
- Go to [app.lytics.com](https://app.lytics.com/).
- Navigate to **Data Pipeline > Jobs**.
- Click the **+ Create New** button, and then select the appropriate job type card based on your use case.
- In the **Set job details** section, enter a **Label** and optional **Description** for the job.
- In the **Authorizations** section, click the **+ New Authorization** button to manage and maintain the connection to your Contentstack channel tool over time.
- Choose **Stack API Key** as the Authorization method.
- In the Configure Authorization **Details** section, enter a **Label** and optional **Description** for the authorization.
- In the **Configuration** section,**Region:** Select the region where your organization is located.
- **Stack API Key:** Enter your stack API key (**Stack Settings > API Credentials**).
- [**Delivery Token**](../developers/create-tokens/create-a-delivery-token.md)**:** Enter the delivery token of your stack (**Stack Settings > Tokens > Delivery Token**).
- [**Management Token**](../developers/create-tokens/generate-a-management-token.md)**:** Enter your stack's management token (**Stack Settings > Tokens > Management Token**).
**Tip:** Generate a new management token with Read permissions to avoid issues caused by hidden or obfuscated values. This ensures your sync is correctly tied to the domain and environment you authorized, and avoids misconfiguration due to multiple tokens or domains.
- Click the **Save and Continue** button. You will see a success message pop-up: **Authorization saved successfully**.

**Note:** Authorization health can reflect the following statuses:

**Healthy: **The authorization is valid.
- **Unhealthy:** The authorization has failed or is inactive.
- **Unknown:** The authorization check hasn't completed or the status couldn’t be determined.
- Now, in the **Configure Job** section, select your **Content Types** to import (likely "blog_post", "page", etc.). You can select multiple content types to import their entries.
- Select **Keep Updated** to continuously import the entries for the selected content types.
- Optionally, you can also provide the **Domain** on which you are serving content (same as your DAL configuration) and have the JavaScript Tag installed.
- Select the **Taxonomies** you'd like to import for the **Context Layer Import**. Each taxonomy selected will create a new Context Layer and calculate new scores on profiles for each value in that taxonomy.
- Click the **Complete** button to finish the setup of your job. You will see a success message pop-up: **J****ob saved successfully****.**
- To view the newly created job, go to **Data Pipeline > Jobs**.

This completes the setup for your Import Entries job.

Detailed [job status](https://docs.lytics.com/docs/data-sources#job-status) are provided to understand better what is happening in the background during a job's lifecycle. These states will vary by job but include:
- **Running:** The job is actively running.
- **Sleeping:** The job is not actively running but is scheduled to run again after a given period. A job is sleeping either because the job runs on a periodic cadence with scheduled sleep in between job runs or the job has encountered an error and is sleeping before retrying the request.
- **Failed:** The job has encountered consecutive errors over 10 hours and is removed from running again. Check the logs to see if there are any fixable issues. Failed jobs can be resumed, which will schedule it to run again. Failed jobs will be automatically purged after 90 days.
- **Paused:** A user has paused the job. The work can be scheduled to run again by resuming the job. Paused jobs will be automatically purged after 90 days.
- **Completed: **The job has completed all its scheduled tasks and will not be rerun. These will be purged from the job history after 90 days.

## Common questions

### Do I need both a Delivery Token and a Management Token?
Yes. The steps include entering both a Delivery Token and a Management Token in the authorization configuration.

### What does “Keep Updated” do?
Selecting **Keep Updated** continuously imports the entries for the selected content types.

### What happens when I select Taxonomies for Context Layer Import?
Each taxonomy selected will create a new Context Layer and calculate new scores on profiles for each value in that taxonomy.

### Where can I see the job after creation?
To view the newly created job, go to **Data Pipeline > Jobs**.