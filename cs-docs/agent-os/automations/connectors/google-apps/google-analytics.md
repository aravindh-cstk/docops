---
title: "Google Analytics"
description: "Use the Google Analytics connector to automate fetching reports, properties, and run real-time reports."
url: /agent-os/google-analytics
uid: blt0fc4828b5be152ca
---

# Google Analytics

## Google Analytics

The **Google Analytics** connector enables you to fetch analytics data for a website or app connected to Google Analytics. Use the Google Analytics connector to automate fetching reports, properties, and run real-time reports.

## Prerequisites

To use the Google Analytics connector, you first need to connect your Google Analytics account using the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_Swicther.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ama85d3289174948bc/fda19335c6f8e5db13baa568/App_Swicther.png?locale=en-us)
3.  Click **\+ New Project** or select an existing one.
4.  In the top navigation panel, click **Automations**.
5.  Click **Configure Action Step** in the left navigation panel and then **Action Step** to configure third-party services.
6.  Within the **Choose Connector**, click the **Google Analytics** connector.![Select_Connector.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am47d4afaea9c20fc7/c40fa6d9aba89c77149e52a9/Select_Connector.png?locale=en-us)
7.  Under **Choose an Action**, select any action (for example, **Get Property**).
8.  In the **Configure Action** section, click **\+ Add New Account** to add your Google Analytics account.
9.  Complete the Google sign-in flow and grant Contentstack access to see and download your Google Analytics data.

This sets up your Google Analytics account for the Google Analytics connector.

## Set Up the Google Analytics Connector

Perform the following steps to set up the Google Analytics connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Choose Connector**, click the **Google Analytics** connector.
4.  Under **Choose an Action**, you will see the four actions described below:

### Get Property

The **Get Property** action retrieves details for a specific GA4 property. To use the Get Property action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get Property** action.
2.  On the **Get Property Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google Analytics](https://developers.google.com/analytics) account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select or enter the GA4 property ID in the **Select Property** field.![Get_Property.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amcfbdd012134b9873/eca5ac510eb73237cb1410b0/Get_Property.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### List Properties

The **List Properties** action lists all GA4 properties you can access. To use the List Properties action, follow the steps below:

1.  Under **Choose an Action** tab, select the **List Properties** action.
2.  On the **List Properties Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google Analytics](https://developers.google.com/analytics) account as shown in the [Prerequisites](#prerequisites) step.
    2.  Click the **Show Optional Fields** toggle button to use this optional field:
        1.  Enter the **Page Size** to set the number of items per page (default: 200, max: 200).![List_Property.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am56176375f78600c8/c7fe6c1a2506e796606826af/List_Property.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Run Real-time Report

The **Run Real-time Report** action retrieves real-time analytics data for your GA4 property, including current active users. To use the Run Real-time Report action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Run Real-time Report** action.
2.  On the **Run Real-time Report Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google Analytics](https://developers.google.com/analytics) account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select or enter the GA4 property ID in the **Select Property** field.
    3.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter comma-separated **Dimensions**, for example country, city, deviceCategory (up to 9 dimensions).
        2.  Enter the comma-separated **Metrics**, for example activeUsers, screenPageViews. Defaults to activeUsers.
        3.  Enter the **Row Limit** to set the maximum rows to return. The default is 10,000.![Run_Real_Time_Report.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ambc6a413ac49b32c3/b7c34281826dc5cdd995de61/Run_Real_Time_Report.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Run Report

The **Run Report** action retrieves analytics data from a GA4 property with selectable dimensions, metrics, and date ranges. To use the Run Report action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Run Report** action.
2.  On the **Run Report Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your [Google Analytics](https://developers.google.com/analytics) account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select or enter the GA4 property ID in the **Select Property** field.
    3.  Enter the **Start Date** in YYYY-MM-DD format or a relative date like today, 7daysAgo, or 30daysAgo.
    4.  Enter the **End Date** in YYYY-MM-DD format or a relative date like today or yesterday.
    5.  Enter the comma-separated **Metrics**, for example activeUsers, screenPageViews. Defaults to activeUsers.
    6.  Click the **Show Optional Fields** toggle button to use this optional field:
        1.  Enter the **Row Limit** to set the maximum rows to return. The default is 10,000.![Run_Report.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amd73df2599989ff08/e03c446cfe08384a7dd0818e/Run_Report.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

This completes the **Google Analytics** connector's setup.
