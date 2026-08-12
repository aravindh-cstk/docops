---
title: "Create a Job and Authorization for Lytics"
description: "Set up a job and authorization in Contentstack's Lytics to enable secure data syncing and personalized content delivery across digital platforms."
url: /lytics/create-job-and-authorization-for-lytics
---

# Create a Job and Authorization for Lytics

## Create a Job and Authorization for Lytics

Create a job in Lytics to import and synchronize your Contentstack content (entries and taxonomies), so that it can track how users interact with your content and enrich their audience profiles. This enables Lytics to score visitors based on the categories or topics they consume.

This guide provides step-by-step instructions for creating a new 'Import Entries' Job along with the authorization for it. Channel tool [**authorizations**](https://docs.lytics.com/docs/keys-authorizations) refer to the permissions granted to various integrations that allow Lytics platform to access and use data from third-party channels.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login) with Lytics enabled.
-   Your self-hosted site deployed
-   Stack connected to the deployed site
-   [Personalize project](/docs/personalize/create-personalize-project) created

## Create a New 'Import Entries' Job

Once Lytics is enabled and configured for your organization, follow these steps:

1.  Go to [app.lytics.com](https://app.lytics.com/).
2.  Navigate to **Data Pipeline > Jobs**.
3.  Click the **\+ Create New** button, and then select the appropriate job type card based on your use case.![“Import Entries” and “Sync Audience Definitions” options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90fed36b98cd0d1c/686508bc6e85517ad6e6e03b/image.png)
4.  In the **Set job details** section, enter a **Label** and optional **Description** for the job.![Set job details screen for importing Contentstack entries](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd9444e35dcc3d5b/686509acabd7514e65abb34d/image.png)
5.  In the **Authorizations** section, click the **\+ New Authorization** button to manage and maintain the connection to your Contentstack channel tool over time.
6.  Choose **Stack API Key** as the Authorization method.![Authorization method selection screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte1c443d2b1bc9c51/68650baef44b17495978b76c/image.png)
7.  In the Configure Authorization **Details** section, enter a **Label** and optional **Description** for the authorization.
8.  In the **Configuration** section,
    1.  **Region:** Select the region where your organization is located.
    2.  **Stack API Key:** Enter your stack API key (**Stack Settings > API Credentials**).
    3.  [**Delivery Token**](/docs/headless-cms/create-a-delivery-token)**:** Enter the delivery token of your stack (**Stack Settings > Tokens > Delivery Token**).
        
    4.  [**Management Token**](/docs/headless-cms/generate-a-management-token)**:** Enter your stack's management token (**Stack Settings > Tokens > Management Token**).  
        
        **Tip:** Generate a new management token with Read permissions to avoid issues caused by hidden or obfuscated values. This ensures your sync is correctly tied to the domain and environment you authorized, and avoids misconfiguration due to multiple tokens or domains.
        
        ![Configuration screen showing region selection and fields to enter Stack API Key, Delivery Token, and Management Token.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt669eb23a81422d83/686512ad65a219b379d19083/image.png)
    5.  Click the **Save and Continue** button. You will see a success message pop-up: **Authorization saved successfully**.
        
        **Note:** Authorization health can reflect the following statuses:
        
        -   **Healthy:** The authorization is valid.
        -   **Unhealthy:** The authorization has failed or is inactive.
        -   **Unknown:** The authorization check hasn't completed or the status couldn’t be determined.
        
9.  Now, in the **Configure Job** section, select your **Content Types** to import (likely "blog\_post", "page", etc.). You can select multiple content types to import their entries.
10.  Select **Keep Updated** to continuously import the entries for the selected content types.
11.  Optionally, you can also provide the **Domain** on which you are serving content and have the JavaScript Tag installed.
12.  Select the **Taxonomies** you'd like to import for the **Context Layer Import**. Each taxonomy selected will create a new Context Layer and calculate new scores on profiles for each value in that taxonomy.![Configure Job screen showing selected content types, options to import tags, keep data updated, enrich entries, and specify domain and context layer.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfddd0b1a3e57f0d/686515087ff46dd6a9336045/image.png)
13.  Click the **Complete** button to finish the setup of your job. You will see a success message pop-up: **J****ob saved successfully****.**
14.  To view the newly created job, go to **Data Pipeline > Jobs**.![Jobs list view showing a Contentstack Entry Import job with details such as direction, authorization, provider, type, status, and last modified date.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt67b5d82492fb38e6/6865181b65a2195ea5d190b7/image.png)

This completes the setup for your Import Entries job.

Detailed [job status](https://docs.lytics.com/docs/data-sources#job-status) are provided to understand better what is happening in the background during a job's lifecycle. These states will vary by job but include:

-   **Running:** The job is actively running.
-   **Sleeping:** The job is not actively running but is scheduled to run again after a given period. A job is sleeping either because the job runs on a periodic cadence with scheduled sleep in between job runs or the job has encountered an error and is sleeping before retrying the request.
-   **Failed:** The job has encountered consecutive errors over 10 hours and is removed from running again. Check the logs to see if there are any fixable issues. Failed jobs can be resumed, which will schedule it to run again. Failed jobs will be automatically purged after 90 days.
-   **Paused:** A user has paused the job. The work can be scheduled to run again by resuming the job. Paused jobs will be automatically purged after 90 days.
-   **Completed:** The job has completed all its scheduled tasks and will not be rerun. These will be purged from the job history after 90 days.
