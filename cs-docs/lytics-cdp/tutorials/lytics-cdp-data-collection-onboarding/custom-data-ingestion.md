---
title: "Working with Custom Data"
description: "An overview of the formatting requirements for sending custom data to Lytics via batch CSV or JSON over S3, SFTP, or the collection APIs, covering file naming, compression, field and header formatting, timestamps, and JSON structure."
url: /lytics/custom-data-ingestion
uid: blt006509e1be2440b7
---

# Working with Custom Data

## Working with Custom Data

## Custom Data Sources

Lytics can onboard and process data from custom data sources, helping to build out further [User Profiles](/docs/lytics/understanding-user-profiles) with data specific to your company. Custom data is often the most valuable for your marketing efforts as it allows you to personalize web experiences and build meaningful audiences using data unique to your users.

### Onboarding process

Unlike data collected from web activity and integrated marketing tools which automatically map data to Lytics user fields, custom data sources require an evaluation, planning, and implementation process. The Lytics team will assist in identifying use cases and the data fields needed to achieve them. Our CE team will then produce a data dictionary that describes the structure, format, location and relationship of your data. The data dictionary is used to write [queries](/docs/lytics/lytics-query-language) which map custom data fields to Lytics user fields as it is ingested. Finally your custom data is uploaded to the Lytics and made available for use to build audiences, personalize web experiences, or export to marketing tools.

### Uploading custom data

Data can be uploaded to Lytics via CSV SFTP upload or our [collection APIs](https://docs.lytics.com/reference/data-json-upload). Lytics can ingest both large, bulk uploads of user data and smaller, real-time uploads of event data. Before uploading data to Lytics, ensure all necessary LQL queries are in place or it will not be mapped to Lytics user fields, preventing identity resolution. When considering large uploads to the Lytics platform, be aware that this may cause an event backlog on your account. This occurs as our platform queues incoming information as it processes the content of the upload. Processing begins when the upload completes and can last considerably longer than the initial upload. This can result in a delay in seeing information from other sources in your account as well as delays in any outbound, trigger-based workflows.

## Custom Data Ingestion

Getting your custom data ready to be properly ingested is crucial during your onboarding process with Lytics. This document gives an overview of the formatting requirements for custom data sources sent to Lytics via batch CSV or JSON, utilizing [S3](/docs/lytics/aws-s3-overview) or [SFTP](/docs/lytics/lytics-file-service) import workflows, as well as batch or real-time imports using our [collection APIs](https://docs.lytics.com/reference/data-json-upload).

-   [File naming](#file-naming)
-   [File compression](#file-compression)
-   [Field formatting](#field-formatting)
-   [Headers](#headers)
-   [Timestamps](#timestamps)
-   [JSON formatting](#json-formatting)

### File naming

When you have a recurring bulk import, from [S3](/docs/lytics/aws-s3-overview) or [SFTP](/docs/lytics/lytics-file-service) for example, you must consistently follow naming conventions to ensure your data is ingested and displayed correctly.

-   Keep file naming consistent by determining casing and spacing.
    -   E.g. all lower-case, use underscores for spaces: `file_source_1_date`.
-   Name each successive file with an identical 'root' along with a time-based suffix such as `YYYYMMDD` in `filetitle-20191119.csv` or a UNIX timestamp `filetitle-1678297720.tab`.
-   Lytics will import files that match the 'root' filename and will use the modified timestamp of the file to determine the order to import files and to determine which new files to import for continuous imports.

### File compression

If needed, files may be compressed using the zip format prior to ingestion. The zip file will be decompressed and deleted after the content has been ingestied.

### Field formatting

-   Phone numbers should be standardized. Lytics suggests normalizing phone numbers in a format such as `12223334444`.
-   Omit double quotes or escape quotes.
-   Omit newlines.
-   Keep all free form text in quotes if possible.
-   Avoid page breaks or special characters.

For more, reference the [basic rules](https://en.wikipedia.org/wiki/Comma-separated_values#Basic_rules) for CSV files.

### Headers

-   Keep headers consistent across your organization and your vendors by determining casing and spacing.
-   Column headers have to match the sample file exactly.
-   When adding a new source, review current mappings and headers to determine if any headers need to be mapped or consolidated into the same field in Lytics.
    -   E.g. if the field `mobile` comes in from source A, and the field `cell` comes in from source B, it’s likely these should be mapped to the same Lytics field, which will require an [LQL](/docs/lytics/lytics-query-language) modification.

### Timestamps

Lytics is able to ingest data in a different order than the events described in that data transpired. For this to work, individual JSON or CSV records must have a timestamp associated with them. For workflow-based imports, select the key/column which contains the event timestamp when import workflows are configured. For Collection API imports, use the timestamp field URL parameter.

📘

**All imports require the following format**: `YYYY-MM-DDTHH:MM:S`. If an explicit timestamp is not specified, the data will be timestamped by Lytics upon ingestion.

When Lytics looks for new files, it will choose first based on the file's **last modified date**. If multiple files have the same last modified date, the date stamp in the file name is used to select the next file to import.

### JSON formatting

JSON file formatting varies slightly depending on the method and nature of the data to import. See examples for bulk and real-time imports below.

#### Bulk

Files imported via S3, SFTP, or bulk collection should be **newline delimited**, meaning each object represents a single record/event, and there is a newline separating them.

```
{"event":"register","date":"2014/04/05"}
{"event":"login","date":"2014/04/05"}
```

#### Real-time

Files sent to collection should be formatted as regular JSON, where each record/event is an object in an array of objects:

```
[
  {"event":"register","date":"2014/04/05"},
  {"event":"login","date":"2014/04/05"}
]
```

📘

Lytics has a limited ability to parse nested data. Objects may contain other objects and arrays, but objects may not contain nested arrays of objects therein.
