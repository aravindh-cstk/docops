---
title: "Import an Audience from your Data Warehouse"
description: "Import an Audience from your Data Warehouse"
url: /lytics/import-an-audience-from-your-data-warehouse
---

# Import an Audience from your Data Warehouse

## Import an Audience from your Data Warehouse

In general, audiences should be created in Lytics using the audiences builder, then pushed to actioning platforms via built-in integrations. These audiences update in real-time and can be automated to keep downstream tools in sync.

However, in some cases, there are more narrow and targeted audiences of users who you need to target for one-off campaigns or pushes to downstream tools. In these cases, we recommend creating the audience in your data warehouse then pushing that group of users to Lytics.

**Examples of audiences to build in Lytics**:

-   Users who have visited the site in the last week
-   Users who purchased a product within the last three days
-   Users who opened an email and have not logged in yet

**Examples of one-off audiences to push from an external querying tool**:

-   Users who attended event A and purchased a product over $100 two quarters ago
-   Users who visited a booth during conference A and, on average, ordered at least three products per month over the last two years
-   Users who should receive a promotional offer based on a list provided by an outside agency

### Pushing a one-off audience to Lytics

In this example, we’ll use Google BigQuery as our data warehouse and querying tool.

Once notifying your account manager, your Lytics instance will be configured to pull data from a table called lytics\\\_custom\\\_audience\\\_push with the following schema:

-   `customer_id` (string)
-   `custom_audience_name` (string)
-   `custom_audience_value` (string)

### Instructions

1.  Create a table called `lytics_custom_audience_push` with the above schema.
2.  Write your query. The query output must have three columns: the audience name, the audience value, and the customer id.
3.  Under query settings, set `lytics_custom_audience_push` as the destination table for your query results.
4.  Lytics pulls data from `lytics_custom_audience_push` on a rolling basis, so you should see the custom\\\_audiences field in Lytics populate within roughly 6 hours (max).

### Example

Let’s say you need to push an audience of VIP users selected for targeting based on their purchase history and attendance at an event.

```
SELECT user_id, 
       "vip_users" AS custom_audience_name, 
       "true"      AS custom_audience_value 
FROM   user_db u 
       JOIN event_db e 
         ON e.id = u.event_id 
WHERE  u.purchase_avg > 50 
       AND u.purchase_num > 5 
       AND e.id IN ( 748, 573, 934 )
```

Your `lytics_custom_audience_push` table should look something like this: ![Screen Shot 2019-05-06 at 4.19.00 PM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am05811ee30e7a9eba/f055e9136dfde123d0b2a09e/img-0150.png)

After this query is pushed to the `lytics_custom_audience_push` table, you can use it in the Lytics audience builder under the `custom_audiences` field. ![Screen Shot 2019-05-06 at 3.57.38 PM](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfdc4dab2cb9121c3/da7b263ff91d838d0b4c15fb/img-0151.png)

### Notes

-   The `lytics_custom_audience_push` table is configured to accept strings as values. If you need to push a different data type for the value, let us know. We can also configure a table and mappings for integers, floats, and timestamps.
-   One-off audience pushes are typically used for one downstream campaign. If you find yourself repeatedly targeting a one-off audience, talk to your Lytics account manager to have that audience reconfigured as a user attribute.
-   If you are using a different data warehouse, you can send the table as a CSV to an [SFTP server](/understanding/integrations/custom-integrations/csv-import) or [S3 bucket](/understanding/integrations/aws/aws-s3) for Lytics to pull.
