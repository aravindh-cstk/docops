---
title: "Versium"
description: "Versium is a data technology company that offers an industry leading identity resolution and insights engine to help B2B and B2C marketers improve their…"
url: /lytics/versium
---

# Versium

## Versium

## Overview

[Versium](https://versium.com/about-versium) is a data technology company that offers an industry leading identity resolution and insights engine to help B2B and B2C marketers improve their effectiveness. Enrich your Lytics audiences with [Versium REACH API](https://api-documentation.versium.com/reference/welcome) data to improve your identity resolution and reach.

## Authorization

If you haven't already done so, you will need to set up a Versium [account](https://app.versium.com/choose-trial) before you begin the process described below.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Versium** from the list of providers.
2.  Select the **Versium API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization
4.  (Optional) In the **Description** text box, enter a description for this authorization
5.  In the **API Key** password box, enter your API Key credential. See the [Versium API documentation](https://api-documentation.versium.com/docs/create-and-delete-api-keys) for information on creating API keys.
6.  Click **Save Authorization**.

## Import Enrichment Data

Enrich your Lytics audiences with [Versium REACH API](https://api-documentation.versium.com/reference/welcome) data to improve your identity resolution and reach.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration
-   **Frequency**: Real-time Integration
-   **Resulting data**: Existing User Profiles are enriched with data from configured Versium enrichment APIs. The following enrichment APIs are available:
    -   [B2B Online Audience Append API](https://api-documentation.versium.com/reference/online-audience-append)
    -   [B2C Online Audience Append API](https://api-documentation.versium.com/reference/online-audience-append)
    -   [Firmographic Append API](https://api-documentation.versium.com/reference/firmographic-api)
    -   [Contact Append API](https://api-documentation.versium.com/reference/contact-append-api)
    -   [Demographic Append API](https://api-documentation.versium.com/reference/demographic-append-api)
    -   [C2B Append API](https://api-documentation.versium.com/reference/consumer-to-business-append-api)
    -   [IP-to-Domain API](https://api-documentation.versium.com/reference/ip-to-domain)

Once a Versium Enrichment Import is started, the job will:

1.  Listen for users entering the selected audience.
2.  When a user enters, the job will attempt to collected enrichment data for the user from Versium. **Note**: by default, enter events for users who have been enriched within the last 30 days will be ignored to limit API usage. Contact your account manager to adjust this configuration if necessary.
3.  For each of the configured Versium enrichment tools, an enrichment call will be made to the [Versium Reach APIs](https://api-documentation.versium.com/docs). For each enrichment tool, if a match is found, the job will emit fields to the relevant enrichment tool stream. One event per enrichment tool per user will be emitted.

### Fields

The following fields are included in the default mapping of the versium\_b2b\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| set(adroll\\\_emails) | versium\\\_adroll\\\_emails\\\_md5 | Adroll Emails - MD5 Hashed | \\\[\]string |
| set(facebook\\\_emails) | versium\\\_facebook\\\_emails\\\_sha256 | Facebook Emails - SHA256 Hashed | \\\[\]string |
| set(facebook\\\_firstname) | versium\\\_facebook\\\_firstname\\\_sha256 | Facebook First Name - SHA256 Hashed | \\\[\]string |
| set(facebook\\\_lastname) | versium\\\_facebook\\\_lastname\\\_sha256 | Facebook Last Name - SHA256 Hashed | \\\[\]string |
| set(facebook\\\_phone\\\_numbers) | versium\\\_facebook\\\_phone\\\_sha256 | Facebook Phone Numbers - SHA256 Hashed | \\\[\]string |
| set(generic\\\_emails) | versium\\\_emails\\\_sha256 | Versium Generic Emails - SHA256 Hashed | \\\[\]string |
| set(google\\\_country) | versium\\\_google\\\_country | Google Country | \\\[\]string |
| set(google\\\_emails) | versium\\\_google\\\_emails\\\_sha256 | Google Emails - SHA256 Hashed | \\\[\]string |
| set(google\\\_firstname) | versium\\\_google\\\_firstname\\\_sha256 | Google First Name - SHA256 Hashed | \\\[\]string |
| set(google\\\_lastname) | versium\\\_google\\\_lastname\\\_sha256 | Google Last Name - SHA256 Hashed | \\\[\]string |
| set(google\\\_phone\\\_numbers) | versium\\\_google\\\_phone\\\_sha256 | Google Phone Numbers - SHA256 Hashed | \\\[\]string |
| set(google\\\_zip) | versium\\\_google\\\_zip | Google Zip | \\\[\]string |
| set(linkedin\\\_apple\\\_idfa) | versium\\\_linkedin\\\_apple\\\_idfa | LinkedIn Apple IDFA | \\\[\]string |
| set(linkedin\\\_company) | versium\\\_linkedin\\\_company | LinkedIn Company | \\\[\]string |
| set(linkedin\\\_country) | versium\\\_linkedin\\\_country | LinkedIn Country | \\\[\]string |
| set(linkedin\\\_emails) | versium\\\_linkedin\\\_emails\\\_sha256 | LinkedIn Emails - SHA256 Hashed | \\\[\]string |
| set(linkedin\\\_firstname) | versium\\\_linkedin\\\_firstname | LinkedIn First Name | \\\[\]string |
| set(linkedin\\\_google\\\_id) | versium\\\_linkedin\\\_gaid | LinkedIn Google Advertising ID | \\\[\]string |
| set(linkedin\\\_jobtitle) | versium\\\_linkedin\\\_jobtitle | LinkedIn Job Title | \\\[\]string |
| set(linkedin\\\_lastname) | versium\\\_linkedin\\\_lastname | LinkedIn Last Name | \\\[\]string |

The following fields are included in the default mapping of the versium\_b2c\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| set(adroll\\\_emails) | versium\\\_adroll\\\_emails\\\_md5 | Adroll Emails - MD5 Hashed | \\\[\]string |
| set(facebook\\\_emails) | versium\\\_facebook\\\_emails\\\_sha256 | Facebook Emails - SHA256 Hashed | \\\[\]string |
| set(facebook\\\_firstname) | versium\\\_facebook\\\_firstname\\\_sha256 | Facebook First Name - SHA256 Hashed | \\\[\]string |
| set(facebook\\\_lastname) | versium\\\_facebook\\\_lastname\\\_sha256 | Facebook Last Name - SHA256 Hashed | \\\[\]string |
| set(facebook\\\_phone\\\_numbers) | versium\\\_facebook\\\_phone\\\_sha256 | Facebook Phone Numbers - SHA256 Hashed | \\\[\]string |
| set(generic\\\_emails) | versium\\\_emails\\\_sha256 | Versium Generic Emails - SHA256 Hashed | \\\[\]string |
| set(google\\\_country) | versium\\\_google\\\_country | Google Country | \\\[\]string |
| set(google\\\_emails) | versium\\\_google\\\_emails\\\_sha256 | Google Emails - SHA256 Hashed | \\\[\]string |
| set(google\\\_firstname) | versium\\\_google\\\_firstname\\\_sha256 | Google First Name - SHA256 Hashed | \\\[\]string |
| set(google\\\_lastname) | versium\\\_google\\\_lastname\\\_sha256 | Google Last Name - SHA256 Hashed | \\\[\]string |
| set(google\\\_phone\\\_numbers) | versium\\\_google\\\_phone\\\_sha256 | Google Phone Numbers - SHA256 Hashed | \\\[\]string |
| set(google\\\_zip) | versium\\\_google\\\_zip | Google Zip | \\\[\]string |
| set(linkedin\\\_apple\\\_idfa) | versium\\\_linkedin\\\_apple\\\_idfa | LinkedIn Apple IDFA | \\\[\]string |
| set(linkedin\\\_company) | versium\\\_linkedin\\\_company | LinkedIn Company | \\\[\]string |
| set(linkedin\\\_country) | versium\\\_linkedin\\\_country | LinkedIn Country | \\\[\]string |
| set(linkedin\\\_emails) | versium\\\_linkedin\\\_emails\\\_sha256 | LinkedIn Emails - SHA256 Hashed | \\\[\]string |
| set(linkedin\\\_firstname) | versium\\\_linkedin\\\_firstname | LinkedIn First Name | \\\[\]string |
| set(linkedin\\\_google\\\_id) | versium\\\_linkedin\\\_gaid | LinkedIn Google Advertising ID | \\\[\]string |
| set(linkedin\\\_jobtitle) | versium\\\_linkedin\\\_jobtitle | LinkedIn Job Title | \\\[\]string |
| set(linkedin\\\_lastname) | versium\\\_linkedin\\\_lastname | LinkedIn Last Name | \\\[\]string |

The following fields are included in the default mapping of the versium\_firmographic\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| business | versium\\\_company\\\_name | Company Name | string |
| business\\\_address | versium\\\_company\\\_address | Company Address | string |
| business\\\_city | versium\\\_company\\\_city | Company City | string |
| business\\\_country | versium\\\_company\\\_country | Company Country | string |
| business\\\_phone | versium\\\_company\\\_phone | Company Phone Number | string |
| business\\\_public\\\_or\\\_private | versium\\\_company\\\_public\\\_private | Company Public/Private | string |
| business\\\_state | versium\\\_company\\\_state | Company State | string |
| business\\\_zip | versium\\\_company\\\_zip | Company Zip | string |
| domain | versium\\\_company\\\_domain | Company Domain | string |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| industry | versium\\\_company\\\_industry | Company Industry | string |
| number\\\_of\\\_employees | versium\\\_company\\\_num\\\_employees | Company Number of Employees | string |
| sales\\\_volume | versium\\\_company\\\_sales\\\_volume | Company Sales Volume | string |
| website | versium\\\_company\\\_website | Company Website | string |

The following fields are included in the default mapping of the versium\_contact\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| set(address) | versium\\\_postal\\\_addresses | Versium Postal Addresses | \\\[\]string |
| set(city) | versium\\\_cities | Versium Cities | \\\[\]string |
| set(country) | versium\\\_countries | Versium Countries | \\\[\]string |
| set(email\\\_address) | versium\\\_emails | Versium Emails | \\\[\]string |
| set(first\\\_name) | versium\\\_first\\\_names | Versium First Names | \\\[\]string |
| set(last\\\_name) | versium\\\_last\\\_names | Versium Last Names | \\\[\]string |
| set(mobile\\\_phone) | versium\\\_mobile\\\_phone\\\_numbers | Versium Mobile Phone Numbers | \\\[\]string |
| set(phone) | versium\\\_phone\\\_numbers | Versium Phone Numbers | \\\[\]string |
| set(state) | versium\\\_states | Versium States | \\\[\]string |
| set(zip) | versium\\\_zipcodes | Versium Zip Codes | \\\[\]string |

The following fields are included in the default mapping of the versium\_demographic\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| set(age\\\_range) | versium\\\_age\\\_range | Versium Age Range | \\\[\]string |
| set(education\\\_level) | versium\\\_education\\\_level | Versium Education Level | \\\[\]string |
| set(gender) | versium\\\_gender | Versium Gender | \\\[\]string |
| set(language) | versium\\\_language | Versium Language | \\\[\]string |
| set(occupation) | versium\\\_occupation | Versium Occupation | \\\[\]string |

The following fields are included in the default mapping of the versium\_c2b\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| set(business) | versium\\\_businesses | Versium Company Names | \\\[\]string |
| set(city) | versium\\\_cities | Versium Cities | \\\[\]string |
| set(domain) | versium\\\_domains | Versium Domains | \\\[\]string |
| set(email\\\_address) | versium\\\_emails | Versium Emails | \\\[\]string |
| set(first\\\_name) | versium\\\_first\\\_names | Versium First Names | \\\[\]string |
| set(industry) | versium\\\_industries | Versium Industry | \\\[\]string |
| set(last\\\_name) | versium\\\_last\\\_names | Versium Last Names | \\\[\]string |
| set(naics) | versium\\\_naics | Versium NAICS Codes | \\\[\]string |
| set(number\\\_of\\\_employees) | versium\\\_num\\\_employees | Versium Number of Employees | \\\[\]string |
| set(postal\\\_address) | versium\\\_postal\\\_addresses | Versium Postal Addresses | \\\[\]string |
| set(sales\\\_volume) | versium\\\_sales\\\_volume | Versium Sales Volume | \\\[\]string |
| set(sic) | versium\\\_sic | Versium SIC Codes | \\\[\]string |
| set(state) | versium\\\_states | Versium States | \\\[\]string |
| set(title) | versium\\\_titles | Versium Titles | \\\[\]string |
| set(year\\\_founded) | versium\\\_year\\\_founded | Versium Year Founded | \\\[\]string |
| set(zip) | versium\\\_zipcodes | Versium Zip Codes | \\\[\]string |

The following fields are included in the default mapping of the versium\_ip\_to\_domain\_enrichment stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email(email) | email unique id | Email | string |
| epochms() | versium\\\_enriched\\\_ts | Versium Enriched Timestamp | date |
| set(company\\\_address\\\_1) | versium\\\_company\\\_addresses | Versium Company Addresses | \\\[\]string |
| set(company\\\_city\\\_1) | versium\\\_company\\\_cities | Versium Company Cities | \\\[\]string |
| set(company\\\_country\\\_1) | versium\\\_company\\\_countries | Versium Company Countries | \\\[\]string |
| set(company\\\_name\\\_1) | versium\\\_businesses | Versium Company Names | \\\[\]string |
| set(company\\\_state\\\_1) | versium\\\_company\\\_states | Versium Company States | \\\[\]string |
| set(company\\\_zip\\\_1) | versium\\\_company\\\_zipcodes | Versium Company Zip Codes | \\\[\]string |
| set(domain\\\_1) | versium\\\_company\\\_domains | Versium Company Domains | \\\[\]string |
| set(industry\\\_1) | versium\\\_industries | Versium Industry | \\\[\]string |
| set(ip\\\_usage\\\_type) | versium\\\_ip\\\_usage\\\_type | Versium IP Usage Type | \\\[\]string |
| set(naics\\\_1) | versium\\\_naics | Versium NAICS Codes | \\\[\]string |
| set(phone\\\_1) | versium\\\_company\\\_phone\\\_numbers | Versium Company Phone Numbers | \\\[\]string |
| set(sic\\\_1) | versium\\\_sic | Versium SIC Codes | \\\[\]string |
| set(website\\\_home\\\_page\\\_1) | versium\\\_company\\\_websites | Versium Company Websites | \\\[\]string |
| set(year\\\_founded\\\_1) | versium\\\_year\\\_founded | Versium Year Founded | \\\[\]string |

### Configuration

Follow these steps to set up and configure an enrich job for Versium in the Lytics platform. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Versium** from the list of providers.
2.  Select the **Enrich Users** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to enrich.
7.  Complete the configuration steps for your job.\\

![versium configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am974179602d4981d8/b1bdfec884905c853114e2e7/versium_configuration.png)

1.  From the **Email Field** input, select the field name that contains the user's email.
2.  From the **Enrichment Tools** selector, select the Versium Enrichment tools to use. Note that your Versium account will need access to all of the tools selected in order for the job to work.
3.  (Optional) Select the **Enrich Existing Users** checkbox to enrich users who already exist in the selected audience.
4.  (Optional) Toggle **Show Advanced Options**.
5.  (Optional) From the **First Name Field** input, select the field name that contains the user's first name.
6.  (Optional) From the **Last Name Field** input, select the field name that contains the user's last name.
7.  (Optional) From the **Full Name Field** input, select the field name that contains the user's full name.
8.  (Optional) From the **User Phone Number Field** input, select the field name that contains the user's phone number.
9.  (Optional) From the **User Address Field** input, select the field name that contains the user's address.
10.  (Optional) From the **User City Field** input, select the field name that contains the user's city.
11.  (Optional) From the **User State Field** input, select the field name that contains the user's state.
12.  (Optional) From the **User Zip Field** input, select the field name that contains the user's zip code.
13.  (Optional) From the **Domain Field** input, select the field name that contains the user's company domain.
14.  (Optional) From the **Company Name Field** input, select the field name that contains the user's company name.
15.  (Optional) From the **Company Phone Field** input, select the field name that contains the user's company phone number.
16.  (Optional) From the **Company Address Field** input, select the field name that contains the user's company address.
17.  (Optional) From the **Company City Field** input, select the field name that contains the user's company city.
18.  (Optional) From the **Company State Field** input, select the field name that contains the user's company state.
19.  (Optional) From the **Company Zip Field** input, select the field name that contains the user's company zip.
20.  (optional) From the **IP Address** input, select the field name that contains the user's IP address.
21.  Click **Start Enrich**.
