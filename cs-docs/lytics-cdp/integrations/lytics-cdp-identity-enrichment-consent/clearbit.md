---
title: "Clearbit"
description: "Our Clearbit integration provides rich, real-time people & company enrichment of Lytics segments."
url: /lytics/clearbit
---

# Clearbit

## Clearbit

## Overview

Our Clearbit integration provides rich, real-time people & company enrichment of Lytics segments.

## Authentication

1.  First, Log into Clearbit, go to **API**, find your **secret API Key**, then copy it.

![Clearbit API Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfdbf8198fddfa765/a219d2ea5fb85b8c6086453c/api-key.png)

1.  Back on Lytics, click on **Clearbit** in the Jobs section of Lytics.\\

![clearbit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am788601f38a17d887/ea66222c4026e658dae05391/Screenshot_from_2018-11-30_15-49-32.png)

1.  Navigate to **Authorizations** and select **Add new authorization**.
2.  Then paste your API key in the form with a description.\\

![authorization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3c36d706d3be5b4e/8782a3bd4243d3f57d2e85ef/Screenshot_from_2018-11-30_16-03-57.png)

## Enriching Users

| Summary |  |
| --- | --- |
| Frequency | Real-time |
| Stream | clearbit\_users |
| User fields | email |
| Provider fields | more than 100 data points |

Using email addresses, Lytics will consume Clearbit data to provide more information about audience members. To get an example of the enrichment data returned by Clearbit, visit <[https://clearbit.com/enrichment>](https://clearbit.com/enrichment\>).

#### Configuring enrichment of an audience

To start enriching your audience select the audience you would like to enrich. Some audiences might have set of emails addresses, so it's important to define which of their fields contains single email address.

![configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amccc9f1b99a193c57/b0ca028bba63b73a211d7778/Screenshot_from_2018-11-30_16-17-50.png)

-   **Audience**: The Lytics audience with the users to enrich.
-   **Email Field**: Field name with email data. In almost all cases the default email field is already selected.
-   **Enrich Existing Users**: Select **Enrich Existing Users** to enrich users who are already members of the audience. By default users will only be enriched as they enter the audience.

In the **Advanced Options** section:

-   **Max Calls per Month**: Defines how many API calls this integration should use.

Click **Start Import** to start. If **Enrich Existing Users** is chosen, enrichment of those users will happen immediately. As new users are added to an audience, new enrichments will be triggered until the max calls limit is reached or the enrichment workflow is canceled.

### Fields

The following fields are included in the default mapping of the clearbit\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| AboutMeHandle | aboutme\\\_handle | about.me Handle | string |
| Avatar | avatar | Avatar | string |
| Bio | bio | Bio | string |
| CompanyCategoryIndustry | company\\\_industry | Company Industry | string |
| CompanyCategoryIndustryGroup | company\\\_industry\\\_group | Company Industry Group | string |
| CompanyCategoryNaicsCode | company\\\_naics\\\_code | Company NAICS code | string |
| CompanyCategorySector | company\\\_sector | Company Sector | string |
| CompanyCategorySicCode | company\\\_sic\\\_code | Company SIC code | string |
| CompanyCategorySubIndustry | company\\\_sub\\\_industry | Company Sub-industry | string |
| CompanyCruchBaseHandle | company\\\_crunchbase\\\_handle | Company CrunchBase Handle | string |
| CompanyDomain | company\\\_domain | Company Domain | string |
| CompanyFacebookHandle | company\\\_fb\\\_username | Company Facebook Username | string |
| CompanyFoundedYear | company\\\_founded\\\_year | Company Founded Year | string |
| CompanyGeoCity | company\\\_city | Company City | string |
| CompanyGeoCountryCode | company\\\_country | Company Country | string |
| CompanyGeoPostalCode | company\\\_zip | Company Zip | string |
| CompanyGeoStateCode | company\\\_state | Company State | string |
| CompanyGeoStreet | company\\\_street | Company Street | string |
| CompanyGeoStreetNumber | company\\\_street\\\_number | Company Street Number | string |
| CompanyId | cb\\\_company\\\_id | Clearbit Company ID | string |
| CompanyIdentifiersUsEIN | company\\\_identifier\\\_us\\\_ein | Company Identifier US EIN | string |
| CompanyLegalName | company\\\_legal\\\_name | Company Legal Name | string |
| CompanyLinkedInHandle | company\\\_li\\\_username | Company LinkedIn Username | string |
| CompanyLogo | company\\\_logo | Company Logo | string |
| CompanyMetaDescription | company\\\_meta\\\_description | Company Meta Description | string |
| CompanyMetricsAlexaGlobalRank | company\\\_alexa\\\_global\\\_rank | Company Alexa Global Rank | int |
| CompanyMetricsAlexaUsRank | company\\\_alexa\\\_us\\\_rank | Comapny Alexa US Rank | int |
| CompanyMetricsAnnualRevenue | company\\\_revenue | Company Annual Revenue | number |
| CompanyMetricsEmployees | company\\\_employees | Company Employees | int |
| CompanyMetricsEmployeesRange | company\\\_employees\\\_range | Company Employee Range | string |
| CompanyMetricsEstimatedAnnualRevenue | company\\\_est\\\_annual\\\_revenue | Company Estimated Annual Revenue | string |
| CompanyMetricsMarketCap | company\\\_market\\\_cap | Company Market Cap | int |
| CompanyName | company | Company | string |
| CompanyParentDomain | company\\\_parent\\\_domain | Company Parent Domain | string |
| CompanyPhone | company\\\_phone | Company Phone Number | string |
| CompanySiteH1 | company\\\_site\\\_h1 | Company Site H1 | string |
| CompanySiteTitle | company\\\_site\\\_title | Company Site Title | string |
| CompanyTimeZone | company\\\_timezone | Company Timezone | string |
| CompanyTwitterFollowers | company\\\_tw\\\_follower\\\_ct | Company Twitter Follower Count | int |
| CompanyTwitterFollowing | company\\\_tw\\\_following\\\_ct | Company Twitter Following Count | int |
| CompanyTwitterHandle | company\\\_twuser\\\_id | Company Twitter Id | string |
| CompanyUrl | company\\\_url | Company URL | string |
| CompanyUtcOffset | company\\\_utc\\\_offset | Company UTC Offset | string |
| EmploymentRole | employment\\\_role | Work Role | string |
| EmploymentSeniority | employment\\\_seniority | Work Seniority | string |
| EmploymentSubRole | employment\\\_sub\\\_role | Work Sub Role | string |
| EmploymentTitle | job\\\_title | Job Title | string |
| FacebookHandle | fb\\\_username | Facebook Username | string |
| GeoCity | city | City | string |
| GeoCountryCode | country | Country | string |
| GeoStateCode | state | State | string |
| GeoStreet | street | Street | string |
| GeoStreetNumber | street\\\_number | Street Number | string |
| GooglePlusHandle | google\\\_handle | Google Handle | string |
| GravatarAvatar | gravatar\\\_avatar | Gravatar Avatar | string |
| GravatarHandle | gravatar\\\_handle | Gravatar Handle | string |
| Id | cb\\\_user\\\_id | Clearbit Distinct ID | string |
| LinkedInHandle | li\\\_username | LinkedIn Username | string |
| NameFamilyName | last\\\_name | Last Name | string |
| NameFullName | name | Full Name | string |
| NameGivenName | first\\\_name | First Name | string |
| Phone | phone | Phone | string |
| Site | site | Site | string |
| TwitterFollowers | tw\\\_follower\\\_ct | Twitter Follower Count | int |
| TwitterFollowing | tw\\\_following\\\_ct | Twitter Following Count | int |
| TwitterHandle | tw\\\_uid | Twitter User ID | string |
| TwitterStatuses | tw\\\_status\\\_ct | Twitter Status Count | int |
| UtcOffset | timezone | Timezone | string |
| email(Email) | email unique id | Email Address | string |
| emaildomain(Email) | email\\\_domain | Email Domain | string |
| set(CompanyDomainAliases) | company\\\_domain\\\_aliases | Company Domain Aliases | \\\[\]string |
| set(CompanyEmails) | company\\\_emails | Company Emails | \\\[\]string |
| set(CompanyPhoneNumbers) | company\\\_phone\\\_numbers | Company Phone Numbers | \\\[\]string |
| set(CompanyTags) | company\\\_tags | Company Tags | \\\[\]string |
| set(CompanyTech) | company\\\_technologies | Company Technologies | \\\[\]string |
