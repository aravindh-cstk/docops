---
title: "Data Models & Queries"
description: "A Data Model is used by Cloud Connect to link or \"connect\" a user's external data warehouse to Lytics profiles. Each Data Model represents a set of…"
url: /lytics/creating-cloud-connect-audiences
---

# Data Models & Queries

## Data Models & Queries

## Cloud Connect Data Models

A Data Model is used by Cloud Connect to link or "connect" a user's external data warehouse to Lytics profiles. Each Data Model represents a set of records defined by a SQL query. Each Data Model will also configure a join key which defines how the Data Model is joined to Lytics Profiles.

Once a Connection to your data warehouse has been created, Data Models can be created via the **Data Models** tab within the navigation bar:

![1e88b406015abe3383c8332b4b1ca4d8cc488613acd122095b268121cc10d0a9-data-model-nav-menu.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am754ae84c08139001/01993561da5893f1172869c7/1e88b406015abe3383c8332b4b1ca4d8cc488613acd122095b268121cc10d0a9-data-model-nav-menu.png)

### Creating a Data Model

Click **\+ Create New** from the Data Models dashboard and complete the following steps.

1.  Select the Connection.
2.  Generate the SQL query. **Please note that currently, the main identifier must be of type string in the database.**  
    ![d57740d8fc298458f7e1db3effdcbb1922c7be077cab421bd61178625b8c2f4a-generate-query-step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6d5711fe451640e5/b7b9907ed437c30a9359f949/d57740d8fc298458f7e1db3effdcbb1922c7be077cab421bd61178625b8c2f4a-generate-query-step.png)  


**Query Editor**: Write and test standard SQL queries directly in Lytics. Alternatively, copy and paste queries you've tested in your BigQuery or Snowflake instance. When you click **Test Query**, Lytics will return 10 sample records.  

1.  Test the query and validate the results.  


![2d3657e00e1b9fcbaeac3600f5e8428583d044fea3199da890ed737ce5d96062-test-query-button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf7110d287dfd6bd8/442b54eda92429ab43b65e60/2d3657e00e1b9fcbaeac3600f5e8428583d044fea3199da890ed737ce5d96062-test-query-button.png)

1.  Configure the Data Model.  


![ccf2a300b8e263e991661635cf5a3f082d7021e30be4a866f87c9fe8f300b09a-description.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9f4e64ab86790dc2/460cb8c9626af819b5d1c5fe/ccf2a300b8e263e991661635cf5a3f082d7021e30be4a866f87c9fe8f300b09a-description.png)



**Name**: Data Model name  
**Slug**: The Data Model name that will be used in the membership and mapped field names in the audience builder. It is important that the name chosen here makes sense for those building audiences in the tool. If no slug is selected, it will auto-populate using the model name.  
**Description**: A longer description of the Data Model.  

**Map a Unique Identifier**: Select a user profile field that is a unique identifier in the Lytics user table to map to an identifier in your incoming data source.  

![a0a566511d9937053019e1789924d637cb367c2149c13e760e12415a7595f267-dm-configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b0b7dcaa3eba872/237217e628ed18940d6970db/a0a566511d9937053019e1789924d637cb367c2149c13e760e12415a7595f267-dm-configuration.png)



**Primary Key**: Select a key in your data source — the column from your SQL query results that uniquely identifies each record.  
**External Lytics Key**: Select a Lytics user profile field that corresponds to your primary key. Only identity ("by") fields are available for selection.  

**Activated Fields**: Select source fields to activate. Lytics will automatically create the corresponding schema fields, populated by this data model. The available options come from the columns returned by your SQL query.  

**Field Mappings**: Map source fields to Lytics fields. For each mapping, use the dropdowns to select a **Source** column from your SQL query results and a **Lytics** profile field where the data should be stored. You can add multiple mappings to bring in as many fields as needed.  

****Mapping constraints:****

-   Lytics target fields must already exist in your published schema
-   You cannot map to Lytics identity ("by") fields.
-   Each Lytics field can only appear once in your mappings

A warehouse JSON or OBJECT column (for example, a BigQuery JSON column or a Snowflake OBJECT/VARIANT) can be imported into a map-typed Lytics field, so a key-value structure in your warehouse lands as a proper map on the profile. The map\[string\]value and map\[string\]intsum types are not supported as destinations for this import.

**Note:** Editing Field Mappings requires schema management permissions. If your role doesn't have them, the Field Mappings section is shown but disabled, with the message "Schema management permissions are required to edit field mappings." Activated Fields and the rest of the configuration remain editable.

**Create Profiles**: Checking this will cause new profiles to be created in Lytics for all rows in the result set that do not already match an existing profile. If left unchecked, only existing profiles with matching identifiers will be updated.  

**Sync Settings**: Select how often the sync should run.  

-   **Hourly** — runs every hour
-   **Daily** — runs once per day at the specified time
-   **Weekly** — runs once per week on the specified day and time
-   **Monthly** — runs once per month at the specified time

Depending on the frequency selected, additional options may appear for time of day, timezone, and day of week.

1.  Create Data Model. Once you have added all the details, click the **Create Data Model** button in the top right corner to save the configured data model.

![73ce00b0e3f6fe5b24559aed59266fe5d53ced75fa7f74ac590ccc66d88ced5d-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambdebb5a8db78720f/f5ea1254b32b2d74f2d017e7/73ce00b0e3f6fe5b24559aed59266fe5d53ced75fa7f74ac590ccc66d88ced5d-image.png)

1.  Activate the Model. Navigate to the model you created from the Data Model list view and click the **Activate** button. Until the Data Model is activated, its SQL query will not be run against your data warehouse, and Lytics profiles will not be updated with the selected fields.

![04460cfa2ee8dcb309dc93d35e79fc1f2ec4d24bb139742107961cc08ed86e32-activate-data-model.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am12eca3f6c18f7f4e/9f19e97003fdbdc73fe805b8/04460cfa2ee8dcb309dc93d35e79fc1f2ec4d24bb139742107961cc08ed86e32-activate-data-model.png)

**Note:** When building multiple Cloud Connect Data Models with the same primary key, you must select the same External Lytics Key mapping. Selecting a different Lytics key will result in an error when you try to save the new Data Model.

### Example Use Case

Consider this scenario to demonstrate why you'd want to create a Cloud Connect Data Model driven audience instead of a standard Lytics audience. Your company sells e-bikes and wants to run a holiday campaign that sends a promotion to any customer who purchased an e-bike in November or December last year. Perhaps you also want to refine your audience to those who are interested in particular bike brands. All of this purchase and product data already exists in your Google BigQuery instance (as shown below).

![BQ-SQL-holiday-sample](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1c87f8747d1463af/0fadb589be587d5e6f370eb0/BQ-SQL-holiday-sample.png)

Instead of directly importing all that purchase history data into Lytics, you can write a SQL query to find which customers meet this audience criteria. By copying this query directly into the Lytics Model Builder (as shown in the generate a query screenshot above), you'll create a new audience in Lytics that will be updated on the frequency interval you decide.

Once the Data Model is activated, the Data Model's slug will be added to the **Datamodels** field on each matching user profile, and any configured field mappings will sync the corresponding data from your warehouse into the mapped Lytics profile fields. You can use the Datamodels field in the Audience Builder to target members of the Data Model, and the mapped fields for more dynamic audience rules.

![b8263bce2584425c0e8106b1219763aa91851d10798b91b21a125779270251bd-has-maroon-bike.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambe1ab3a1789c215d/4b7eec73d2017067385a4f52/b8263bce2584425c0e8106b1219763aa91851d10798b91b21a125779270251bd-has-maroon-bike.png)

### SQL Translator

If you would like to skip having to write a SQL query, simply describe the Data Model of what you wish to fetch and using GenAI, Lytics will translate the description to a SQL query for you. Lytics makes queries to your database to ensure that the data is up to date and accurate when creating the query.
