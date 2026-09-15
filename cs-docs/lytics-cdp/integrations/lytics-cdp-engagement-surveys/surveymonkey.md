---
title: "SurveyMonkey"
description: "SurveyMonkey"
url: /lytics/surveymonkey
uid: blta22807060f2304da
---

# SurveyMonkey

## SurveyMonkey

## Overview

[SurveyMonkey](https://www.surveymonkey.com/) is an online survey development platform. SurveyMonkey makes it easy to measure and understand feedback so you can drive growth and innovation. SurveyMonkey has a suite of tools for measuring customer satisfaction and customer loyalty, conducting market research, and concept testing.

Integrating Lytics with SurveyMonkey enables you to import content from your surveys, as well as contact information. These insights can help you activate more effective and personalized campaigns.

## Authorization

If you haven't already done so, you will need to set up a SurveyMonkey account before you begin the process described below. Additionally, you will need to set up a [SurveyMonkey Private App](https://developer.surveymonkey.com/build-a-private-app/).

When setting up your app, you must set the following Scopes as **Required**:

-   View Surveys
-   View Collectors
-   View Responses
-   View Response Details
-   View Contacts

![sm-setup-app](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7566e7fd982c9763/772cd842042574102b3f07a6/img-0321.png)

When you create a new authorization, you will need to ensure the user has permission to export survey results.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **SurveyMonkey** from the list of providers.
2.  Select the **SurveyMonkey Access Token** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (Optional) In the **Description** text box, enter a description for this authorization
5.  In the **Access Token** text box, enter your Access Token credential.
6.  Click **Save Authorization**.

## Import User and Survey Data

Import your SurveyMonkey contacts and their survey responses to add this information to your cross-channel user profiles in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration
-   **Frequency**: Batch Integration
-   **Resulting data**: User Profiles and User Fields

This integration utilizes [SurveyMonkey's APIs](https://developer.surveymonkey.com/api/v3/?shell#getting-started) to import user data. Once the import is started the job will:

1.  Read [Custom contact fields](https://developer.surveymonkey.com/api/v3/?shell#contact_fields) for the account.
2.  [Page through contacts](https://developer.surveymonkey.com/api/v3/?shell#contacts-bulk) in the SurveyMonkey Account and ingest them into the `surveymonkey_contacts` stream.
3.  After all contacts have been imported, it will [page through all surveys](https://developer.surveymonkey.com/api/v3/?shell#surveys). For each survey it will:
4.  Get the [survey details](https://developer.surveymonkey.com/api/v3/?shell#surveys-id-details) to parse the questions and answer options.
5.  Get the [responses to the survey](https://developer.surveymonkey.com/api/v3/?shell#surveys-id-responses-bulk).
6.  Parse the survey responses into a more usable form for ingestion into the `surveymonkey_responses`stream.

### Fields

The following fields are included in the default mapping of the `surveymonkey_contacts` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email `unique id` | Email | string |
| id | sm\\\_id `unique id` | SurveyMonkey ID | string |
| first\\\_name | first\\\_name | First Name | string |
| last\\\_name | last\\\_name | Last Name | string |
| phone\\\_number | phone\\\_number | Phone Number | string |
| custom\\\_fields | sm\\\_custom\\\_fields | SurveyMonkey Custom Fields | map\\\[string\]string |



The following fields are included in the default mapping of the `surveymonkey_responses` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| metadata.contact.email.value | email `unique id` | Email | string |
| collection\\\_mode | sm\\\_collection\\\_mode | SurveyMonkey Collection Mode | string |
|  | sm\\\_last\\\_response | Time of Last Survey Response | date |
| question\\\_answer | sm\\\_question\\\_answer | SurveyMonkey Question Answer | map\\\[string\]string |
| response\\\_status | sm\\\_response\\\_status | SurveyMonkey Response Status | string |

### Configuration

Follow these steps to set up and configure an import job for SurveyMonkey in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **SurveyMonkey** from the list of providers.
2.  Select the **Import User and Survey Data** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job. ![survey-monkey-configuration-0521](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama21543aab374ecbe/42e34accac6e6a257893bab8/img-0322.png)
7.  (Optional) In the **Max Survey Age** numeric field, enter how many days before Responses Since to look for surveys. Surveys older than Max Survey Age days before Responses Since will not have responses imported.
8.  (Optional) From the **Responses Since** input, select how far in the past to start importing responses, if left blank everything before Responses To will be imported.
9.  (Optional) From the **Responses To** input, select how far in the past to stop importing responses, if left blank everything before the import started will be imported. 10.(Optional) In the **Survey ID** text box, enter a survey ID to import responses to only that survey.
10.  (Optional) Select the **Continuous** checkbox to keep importing new responses, Responses To will be ignored. The last Import date will be used as Responses Since after the initial import.
11.  (Optional) Toggle **Show Advanced Options**.
12.  (Optional) From the **Import Frequency** input, select how often a repeated import should run.
13.  (optional) From the **Time of Day** input, select time of day to start the import, ignore for hourly imports.
14.  (optional) From the **Timezone** input, select a timezone for **Time of Day**.
15.  Click **Start Import**.

## Best Practices

Lytics recommends the following best practices for collecting identifiers from SurveyMonkey and using your survey data to build audiences in Lytics.

### Collecting Identifiers

There are three ways to collect identifiers from SurveyMonkey surveys in order of complexity:

1.  Use SurveyMonkey's built in contacts and mailing service and the **email invitation** collector.
2.  Add **custom variables** to your survey and use a **web link** collector in SurveyMonkey.
3.  Add a question directly asking for an identifier.

#### Method 1

This is the easiest to setup. Just follow [SurveyMonkey's instructions](https://help.surveymonkey.com/articles/en_US/kb/Email-Invitation-Collector) to send out your survey by email to a list of contacts. The recipient's email address will be included in their responses and will allow them to be merged with their Lytics profile when imported.

#### Method 2

This method takes a little more setup, but is much more flexible in delivery options. Your surveys will need to have **custom variables** [added to them](https://help.surveymonkey.com/articles/en_US/kb/What-are-custom-variables-and-how-do-I-use-them) and will need to have the user's information inserted into the web link collector's URL. Depending on your delivery method, specific instructions on how to insert identifiers into the web link collector's URL will vary.

The [SurveyMonkey Import](#import-user-and-survey-data) will automatically use the `lytics_email` and `lytics_uid` custom variables as identifiers. `lytics_uid` should be a Lytics `uid`. You can export the `uid` to a tool that sends the survey link, or retrieve the uid from the [Lytics JavaScript tag](/docs/lytics/installation-configuration) to embed or link to the survey from a webpage. `lytics_email` should be the user's email address that is stored in Lytics. Additional **custom variables** can be used, but will need to be [mapped in LQL](/docs/lytics/lytics-query-language) to be used in Lytics.

#### Method 3

This method is the most complicated to configure. It will require specific wording of questions on all surveys you want to track and custom LQL to implement. To implement this method you will need to create a question in your survey to collect an identifier. For example:

-   `Please enter your email:`
-   `Please enter your username from our website:`

You will then need to create [custom LQL](/docs/lytics/lytics-query-language) to recognize the responses to these questions as identifiers so the responses can be merged into the user's profile. Using the example questions above, the LQL would look something like:

```
/*
    SurveyMonkey Responses
*/

SELECT
    collection_mode                                                  AS sm_collection_mode    SHORTDESC "SurveyMonkey Collection Mode"
    , response_status                                                AS sm_response_status    SHORTDESC "SurveyMonkey Response Status"
    , match("questions_answers.")                                                AS sm_question_answer    SHORTDESC "SurveyMonkey Question Answer"      KIND map[string]string
    , epochms()                                                      AS sm_last_response      SHORTDESC "Time of Last Survey Response"      KIND DATE

    -- Unique ID's, By Fields
    , email( oneof(`metadata.contact.email.value`,`custom_variables.lytics_email`,`questions_answers.Please enter your email:`))  AS email  SHORTDESC "Email"
    , set(`custom_variables.lytics_uid`)                                            AS _uids  SHORTDESC "Web Cookie Ids(all)"
    , `questions_answers.Please enter your username from our website:` AS username SHORTDESC "Username"

FROM surveymonkey_responses
INTO user BY email OR username
ALIAS user_surveymonkey_responses
```

Only questions with the exact wording used in the LQL will be recognized as an identifier, this includes capitalization and punctuation at the end of the question. Using the example LQL above, the following questions would not be recognized as containing an identifier:

-   `please enter your email:`
-   `Please enter your email`
-   `enter your username:`
-   `Please enter your Username from our website:`

This is the only method that works with all SurveyMonkey collector types, but due to the added complexity, we recommend using one of the other methods if possible.

### Using Survey Data

By default, all questions and answers are stored in a map field, `question_answer`, on the user profile. This can be difficult to use as the map keys will be a truncated version of the question text.

We recommend creating [custom LQL mappings](/docs/lytics/lytics-query-language) for questions that are relevant to your marketing audiences. Questions and their answers are placed into the `surveymonkey_responses` stream in the field `questions_answers`. They are stored as a map with the question text as the map key, and the answer as the value. Long questions will be truncated. Questions should be kept as short as possible.

For example, if you wanted to create an audience around users that were planning to retire soon you might have a true/false survey question like: `Are you planning to retire in the next year?`

This will appear in the Lytics stream as: `questions_answers.Are you planning to retire in the next year?`

This can be difficult to use in an audience definition, so we suggest remapping it using LQL like:

```
`questions_answers.Are you planning to retire in the next year?` AS retire_next_year SHORTDESC "Planning Retirement Next Year"
```

This would remap the response to the user field `retire_next_year` for use in Lytics audiences.
