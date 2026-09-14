---
title: "Activating Data Models"
description: "Because the queries that power your Cloud Connect Data Models can have costs associated with your database usage, Lytics doesn’t run the scheduled sync…"
url: /lytics/leveraging-cloud-connect-audiences
---

# Activating Data Models

## Activating Data Models

## Activating Data Models

Because the queries that power your Cloud Connect Data Models can have costs associated with your database usage, Lytics doesn’t run the scheduled sync automatically.

After you've created a new Cloud Connect Data Model, you'll notice that the Status is listed as Inactive:

![c60153a-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc4410c49f33b1377/d1e8610d85251a890c76f6d2/c60153a-image.png)

In order to activate, click the **Activate** button on the Data Model page:

![c53298a-activatedatamodel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37b4547fbd91caef/d5c266409a5be36969d3dbd6/c53298a-activatedatamodel.png)

Once you click the **Activate** button, your query will complete its first run within an hour of the **Next Sync On** timestamp listed under the Details tab and then continue to run at the interval you selected. During each sync, the SQL query will be run against your database, and your Lytics profiles will be updated according to the configuration defined on the Data Model.

![74ad689-nextsyncon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame2ac99cff0d10f2d/db8668077382873fa76bab0a/74ad689-nextsyncon.png)

Once synced, the **Total Records** metric on the Data Model summary tab may take up to 2 hours to display. This number represents the number of rows returned by the SQL query.



**Note:** Each Lytics account will have a hard platform limit of 100 million records that can be retrieved and stored in any Cloud Connect Data Model. If a Cloud Connect Data Model will not be used and has been deactivated, it is best to copy the SQL and delete the model to free up space for active data models.




### Data Model Membership

Upon activation of a Data Model, Lytics will add the Data Model's slug to the **Datamodels** field on each matching user profile. This is an array field, so a single profile can be a member of multiple Data Models. You can use this field in the Audience Builder to target users who belong to a specific Data Model.

## Deactivate Data Model

If you need to disable a Cloud Connect Data Model from syncing at any point, you can do so by navigating to the Data Model and clicking the **Deactivate** button.

![a3e95d2-deactivatedatamodel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am417d1afe08864967/a9034369d51d61a13702c45e/a3e95d2-deactivatedatamodel.png)

Deactivating the Data Model will not remove its corresponding fields from schema or from Lytics profiles; however, it will cause the values for these fields to become out of date. In order to completely remove the fields from schema/profiles, the Data Model must be deleted.

## Total Records vs. Count of Users

Throughout the app, you may see different metrics for Cloud Connect Data Models.

#### Total Records within the Data Model Summary

On the summary page for your Cloud Connect Data Model, under the **Total Records** statistic (shown in the graph below), you will see the number of records that are selected by the query based on the unique number of primary keys in the origin database. This may be equal to or less than the number of total rows imported and may be significantly higher than the number you see in the audience builder when utilizing this Data Model.

![54aea2f59c0513fd543337b550d2ff0414d583072058534a8bf6848409a9ca95-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6baab162ad0e6906/9cdda8a62a92aa79682908f2/54aea2f59c0513fd543337b550d2ff0414d583072058534a8bf6848409a9ca95-image.png)

To get an email when the record count drops below or spikes above expected bounds, set min/max thresholds on the **Records for Data Model** chart via the bell icon. See [Metric Threshold Alerts](/docs/lytics/metric-thresholds).

#### Count of Users within the Audience Builder

When adding Cloud Connect Data Model membership or activated fields to audience logic in the Audience Builder, you may see a smaller size than the **Total Records** on the summary. The count of users within the Audience Builder is the number of users in your Lytics account who met the qualifications for the query based on the matching Lytics user field configured on the Data Model. This number reflects the number of records that would be included if you were to run an export of the audience.

![c935858c5f315ea717860637ead191a22e8c3715c8e8e792697af3fce9da9671-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0322a2f9d9d03c66/7d8af0bf51ff2fb7e9094782/c935858c5f315ea717860637ead191a22e8c3715c8e8e792697af3fce9da9671-image.png)

Most common reasons for why this number may be smaller than the **Total Records** metric are the following:

-   If the "Create New Profiles" option isn't selected on the Data Model, the count of users in the Audience Builder will only include profiles that already existed in your Lytics accounts
-   Audience Builder will exclude any profiles which are marked as being Unhealthy. Learn more about unhealthy profiles here -

## Exporting Data Models

Once activating a Data Model, its associated fields will be stored as user fields on the customer profile (to see the naming convention [here](/docs/lytics/activating-data-models-beta#data-model-field-creation)) . Therefore, in order to export the members of the Data Model, you will first need to [create an audience](/docs/lytics/audiences#creating-audiences) in the Audience Builder. You can create an audience of only members or layer in additional audience rules to get the most out of your customer data.

For example, you could build a Cloud Connect audience using account-level data for a B2B use case and add one of Lytics behavioral scores to refine your targeting based on your desired user engagement level.

![328e8ff-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am663e3c1b14cd44f3/8697b3070939079d67940c7d/328e8ff-image.png)

To learn how to export audiences, visit our Activating Audiences documentation [here](/docs/lytics/audiences#activating-audiences).
