---
url: /administration/log-targets
marker: "Administration"
heading: "Log Targets"
---

Log Targets in Contentstack let you export system-generated logs to your own cloud storage for monitoring, auditing, and analysis. This feature is designed for organizations that need better visibility, compliance tracking, or integration with external observability tools.

With Log Targets, you can export the following log types:

-   **Audit logs**: Track administrative and user actions.
-   **Publish logs**: Monitor content publishing activities.
-   **Webhook logs**: Debug and analyze webhook executions.

The export process follows a simple two-step workflow:

1.  Configure a destination (cloud storage).
2.  Create a schedule (define what logs to export and where).

> **Note:** Once a schedule is created and enabled, it will run every hour from the time it was enabled.

## Destinations

A destination is a cloud storage configuration where logs are exported. Contentstack currently supports:

-   **Amazon Web Services (AWS)** S3
-   Microsoft Azure Blob Storage
-   Google Cloud Storage

To add a destination, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Administration** through "App Switcher".
2.  Click **Log Targets**.
3.  In the **Destinations** tab, click **Add Cloud Destination**.
4.  In the **Add Cloud Destination** sidebar, enter the following details:
    -   **Configuration Name**: A unique name for the destination.
    -   **Cloud Provider**: Select your provider (e.g., AWS S3).
    -   **Region**: Specify the storage region.
5.  Based on the cloud provider, enter the remaining configuration details.
6.  Click **Test Connection** to validate the configuration.
    
    > **Note:** If you skip this step, Contentstack automatically validates the connection when you click **Create Configuration**. The configuration is saved only if the test connection succeeds.
    
    ![Log\_Target\_1.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8ca8123bdef871d2/bbf9154143d3a108d2d3ca77/Log_Target_1.png?locale=en-us)
7.  Click **Create Configuration**.

If you select **AWS S3**, provide the following details:

1.  **Bucket Name**: Enter your S3 bucket name.
2.  **Authentication Method**: Default available option, **Access Keys (Access Key ID + Secret)**.
3.  **Access Key ID**: Enter your AWS access key.
4.  **Secret Access Key**: Enter your AWS secret key.

If you select **Azure Blob Storage**, provide the following details:

1.  **Container Name**: Enter your Azure container name.
2.  From the **Authentication Method** dropdown, select one of the following:
    -   **Account Key**: Use this method when you want to authenticate using your storage account key.
        -   **Storage Account**: Enter your Azure storage account name.
        -   **Account Key**: Enter the storage account key.
    -   **SAS Token (Shared Access Signature)**: Use this method to grant limited, time-bound access to your storage resources.
        -   **Storage Account**: Enter your Azure storage account name.
        -   **SAS Token**: Enter the generated SAS token.
    -   **Entra ID (Client Credentials)**: Use this method for secure, role-based authentication via Microsoft Entra ID (formerly Azure Active Directory).
        -   **Storage Account**: Enter your Azure storage account name.
        -   **Tenant ID**: Enter your Azure tenant ID.
        -   **Client ID**: Enter the application (client) ID.
        -   **Client Secret**: Enter the client secret.

If you select **Google Cloud Storage**, provide the following details:

1.  **Bucket Name**: Enter your GCP bucket name.
2.  **Authentication Method**: Default available option, **Service Account Key (JSON)**.
3.  **Project ID**: Enter your GCP project ID.
4.  **Service Account Key (JSON)**: Paste the service account key JSON.

> **Note:** To obtain credentials such as access keys or IAM role details, refer to your cloud provider's documentation. It is recommended to link to official provider guides (AWS, Azure, GCP) for the most up-to-date steps.

## Schedules

A schedule defines what logs to export, where to export them, and how they are organized in your storage.

You can create schedules for:

-   Audit logs
-   Publish logs
-   Webhook logs

To create a schedule:

1.  Go to **Log Targets** and open the **Schedules** tab.
2.  Click **Create Schedule**.
3.  In the **Create Schedule** modal, configure the following:
    -   **Cloud Configuration**: Select a configured destination.
    -   **Data Type**: Choose the log type (Audit, Published, or Webhook).
    -   **Base Path**: Specify a folder path within the bucket.
4.  Enable or disable **Activate Schedule**:
    
    -   **Enabled**: Logs will be exported every hour.
    -   **Disabled**: Schedule will be created but logs will not be exported unless schedule is enabled.
    
    ![Log\_Target\_2.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1c682c57c8c72d16/96f6c2ab1c7edf2ffb380872/Log_Target_2.png?locale=en-us)
5.  Click **Create Schedule**.

> **Note:** The schedule starts running approximately one hour after creation and continues at regular intervals.

Logs are exported within the configured bucket. Each schedule writes logs to a specific base path (folder). Different log types can use different paths within the same bucket.

Example structure:

```
contentstack-logs/
 ├── contentstack-audit-logs/
 ├── contentstack-published-logs/
 └── contentstack-webhook-logs/
```

**Note:** The current implementation includes the following limitations:

-   You can create only **one schedule per export type** (Audit, Published, Webhook).
-   You cannot export the same log type to multiple destinations.
-   The maximum number of schedules is effectively limited to **three** (one per log type).
-   Exports run automatically at a fixed interval (currently hourly).

## History

The **History** tab provides visibility into all log export activities. Use this tab to monitor execution status and troubleshoot issues.

![Log\_Target\_3.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amb79c1b4247692ed9/1f6dbf9434eeeefaf5ec5185/Log_Target_3.png?locale=en-us)

Each record in the **History** tab includes:

-   **Export Type**: Type of log exported.
-   **Status**: Success, failed, or in progress.
-   **Scheduled At**: When the export was triggered.
-   **Records**: Number of logs processed.
-   **Window Start / End**: Time range of logs exported.
-   **Started / Completed**: Execution timestamps.
-   **Duration**: Time taken for the export.
-   **Error**: Error details (if any).

**Note:**

-   Ensure your cloud storage permissions allow write access from Contentstack.
-   Organize logs using meaningful base paths for easier retrieval.
-   Regularly monitor the **History** tab to ensure exports run successfully.

This feature helps you extend Contentstack's logging capabilities beyond the platform by integrating with your existing cloud and observability ecosystem.
